#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
OH Clitools Skill - 将用户指定的源目录（如 btclitools）拷贝到目标 test 目录、在 BUILD.gn 中增加编译对象并完成编译与产物验证。
编译对象从源目录的 BUILD.gn 中自动识别（executable/ohos_executable 等），多个目标用逗号传给 --build-target。

Usage:
    python3 ohclitool.py deploy --source-dir PATH --test-dir PATH  拷贝源目录到 test 并修改 BUILD.gn
    python3 ohclitool.py build --source-dir PATH --test-dir PATH [--product-name NAME]  执行编译
    python3 ohclitool.py verify --source-dir PATH [--product-name NAME] [--push-run]  验证产物
    python3 ohclitool.py all --source-dir PATH --test-dir PATH [--product-name NAME] [--push-run]  deploy + build + verify
    python3 ohclitool.py help

推送到设备时使用 ${OHOS_SDK_PATH}/linux/toolchains/hdc：file send -> chmod +x -> shell 运行。
"""

import os
import re
import shutil
import subprocess
import sys
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent
SRC_ROOT = SCRIPT_DIR.parent.parent.parent

# 默认源目录、test 目录（相对 src，当用户未指定时使用）
DEFAULT_SOURCE_DIR = Path(".claude/skills/ohclitools/btclitools")
DEFAULT_TEST_DIR = Path("foundation/communication/bluetooth/test")

# BUILD.gn 中可编译目标类型（提取目标名）
BUILD_TARGET_PATTERN = re.compile(
    r"(?:ohos_)?(?:executable|shared_library|static_library)\s*\(\s*[\"']([^\"']+)[\"']",
    re.MULTILINE,
)

VERSION = "1.0.0"


def _get_hdc_path() -> Path | None:
    """使用 ${OHOS_SDK_PATH}/linux/toolchains/hdc，未设置环境变量时返回 None。"""
    sdk = os.environ.get("OHOS_SDK_PATH")
    if not sdk:
        return None
    hdc = Path(sdk) / "linux" / "toolchains" / "hdc"
    return hdc if hdc.is_file() else None


def _resolve_path(arg: str | None, default_rel: Path, base: Path = SRC_ROOT) -> Path:
    """解析路径：可为相对 base 的路径或绝对路径。"""
    if not arg:
        return base / default_rel
    p = Path(arg)
    if not p.is_absolute():
        p = base / p
    return p.resolve()


def _resolve_source_dir(source_dir_arg: str | None) -> Path:
    """解析源目录（如 btclitools）：相对 src 或绝对路径。"""
    return _resolve_path(source_dir_arg, DEFAULT_SOURCE_DIR)


def _resolve_test_dir(test_dir_arg: str | None) -> Path:
    """解析 test 目录：相对 src 或绝对路径。"""
    return _resolve_path(test_dir_arg, DEFAULT_TEST_DIR)


def _get_build_targets_from_build_gn(build_gn: Path) -> list[str]:
    """
    从 BUILD.gn 中解析可编译目标名（executable/ohos_executable/shared_library/static_library 等）。
    返回目标名列表，如 ["btcommand"]。
    """
    if not build_gn.is_file():
        return []
    text = build_gn.read_text(encoding="utf-8", errors="ignore")
    return list(dict.fromkeys(BUILD_TARGET_PATTERN.findall(text)))


def _add_dep_to_build_gn(build_gn: Path, dep: str) -> bool:
    """
    在 BUILD.gn 的 group 的 deps 中增加 dep（若尚未存在）。
    返回是否进行了修改。
    """
    if not build_gn.is_file():
        return False
    text = build_gn.read_text(encoding="utf-8", errors="ignore")
    # 已存在则跳过
    if f'"{dep}"' in text or f"'{dep}'" in text:
        return False
    # 在 deps = [ ... ] 的 ] 前插入一项
    pattern = r'(deps\s*=\s*\[)(.*?)(\]\s*)'
    mat = re.search(pattern, text, re.DOTALL)
    if not mat:
        return False
    prefix, inner, suffix = mat.group(1), mat.group(2), mat.group(3)
    new_inner = inner.rstrip()
    if not new_inner.endswith(","):
        new_inner = new_inner + ","
    new_inner = new_inner + "\n        \"" + dep + "\"\n    "
    new_text = text[: mat.start()] + prefix + new_inner + suffix + text[mat.end() :]
    build_gn.write_text(new_text, encoding="utf-8")
    return True


def cmd_deploy(source_dir_arg: str | None, test_dir_arg: str | None) -> int:
    """
    1) 将 source_dir（如 btclitools）拷贝到 test_dir/<source_dir名>
    2) 从 source_dir/BUILD.gn 解析可编译目标，在 test_dir/BUILD.gn 的 deps 中增加 <dest名>:<目标名>（若不存在）
    """
    source_dir = _resolve_source_dir(source_dir_arg)
    test_dir = _resolve_test_dir(test_dir_arg)
    if not source_dir.is_dir():
        print(f"源目录不存在: {source_dir}", file=sys.stderr)
        return 1

    dest_name = source_dir.name
    dest_dir = test_dir / dest_name
    dest_dir.mkdir(parents=True, exist_ok=True)
    for f in source_dir.iterdir():
        if f.name.startswith("."):
            continue
        dest = dest_dir / f.name
        if f.is_dir():
            if dest.exists():
                shutil.rmtree(dest)
            shutil.copytree(f, dest)
        else:
            shutil.copy2(f, dest)
    print(f"已拷贝 {source_dir.name} -> {test_dir / dest_name}")

    targets = _get_build_targets_from_build_gn(source_dir / "BUILD.gn")
    if not targets:
        print("未在源目录 BUILD.gn 中识别到可编译目标", file=sys.stderr)
        return 1
    build_gn = test_dir / "BUILD.gn"
    added = 0
    for t in targets:
        dep = f"{dest_name}:{t}"
        if _add_dep_to_build_gn(build_gn, dep):
            print(f"已在 {build_gn} 的 deps 中增加 \"{dep}\"")
            added += 1
    if not added:
        print(f"BUILD.gn 已包含上述依赖或无需修改: {build_gn}")

    return 0


def _get_build_targets(source_dir_arg: str | None) -> list[str]:
    """从源目录的 BUILD.gn 解析编译目标名列表；若未指定源目录则用默认。"""
    source_dir = _resolve_source_dir(source_dir_arg)
    return _get_build_targets_from_build_gn(source_dir / "BUILD.gn")


def cmd_build(
    source_dir_arg: str | None,
    test_dir_arg: str | None,
    product_name: str = "rk3568",
) -> int:
    """在 src 目录下执行 build.sh，编译源 BUILD.gn 中的全部目标；--build-target 仅传目标名，多个用逗号分隔。"""
    targets = _get_build_targets(source_dir_arg)
    if not targets:
        print("无法从源目录 BUILD.gn 解析编译目标", file=sys.stderr)
        return 1
    target_arg = ",".join(targets)
    build_sh = SRC_ROOT / "build.sh"
    if not build_sh.is_file():
        print(f"未找到 build.sh: {build_sh}", file=sys.stderr)
        return 1
    cmd = [
        str(build_sh),
        "--build-target", target_arg,
        "--product-name", product_name,
    ]
    print("执行:", " ".join(cmd))
    ret = subprocess.run(cmd, cwd=SRC_ROOT)
    return ret.returncode


def _find_output_by_target(out_dir: Path, target_name: str) -> Path | None:
    """在 out 目录下按目标名查找可执行文件（strip 或 exe.unstripped 下）。"""
    for sub in (out_dir, out_dir / "exe.unstripped"):
        if not sub.is_dir():
            continue
        for f in sub.rglob(target_name):
            if f.is_file() and os.access(f, os.X_OK):
                return f
    return None


def cmd_verify(
    source_dir_arg: str | None,
    product_name: str = "rk3568",
    push_run: bool = False,
) -> int:
    """从源 BUILD.gn 得到目标名，在 out/<product> 下查找产物并验证；若 --push-run 则推送并运行（首个可执行文件）。"""
    targets = _get_build_targets(source_dir_arg)
    if not targets:
        print("无法从源目录 BUILD.gn 解析编译目标，跳过验证", file=sys.stderr)
        return 1
    out_dir = SRC_ROOT / "out" / product_name
    found: list[Path] = []
    for t in targets:
        path = _find_output_by_target(out_dir, t)
        if path:
            size = path.stat().st_size
            print(f"产物存在: {path.relative_to(SRC_ROOT)} ({size} bytes)")
            found.append(path)
        else:
            print(f"未找到产物: 目标名 {t} 在 out/{product_name} 下未找到", file=sys.stderr)
    if not found:
        return 1

    if push_run and found:
        hdc = _get_hdc_path()
        if not hdc:
            print("未设置 OHOS_SDK_PATH，跳过推送到设备。可 export OHOS_SDK_PATH=<sdk根>", file=sys.stderr)
            return 0
        to_send = found[0]
        name = to_send.name
        device_path = f"/tmp/{name}"
        cmd_send = [str(hdc), "file", "send", str(to_send), "/tmp"]
        print("推送:", " ".join(cmd_send))
        ret = subprocess.run(cmd_send, cwd=SRC_ROOT)
        if ret.returncode != 0:
            print("推送失败", file=sys.stderr)
            return ret.returncode
        cmd_chmod = [str(hdc), "shell", "chmod", "+x", device_path]
        print("执行权限:", " ".join(cmd_chmod))
        ret = subprocess.run(cmd_chmod, cwd=SRC_ROOT)
        if ret.returncode != 0:
            print("chmod 失败", file=sys.stderr)
            return ret.returncode
        cmd_run = [str(hdc), "shell", device_path]
        print("运行:", " ".join(cmd_run))
        ret = subprocess.run(cmd_run, cwd=SRC_ROOT)
        if ret.returncode != 0:
            print("运行退出码:", ret.returncode, file=sys.stderr)
        return ret.returncode
    return 0


def cmd_all(
    source_dir_arg: str | None,
    test_dir_arg: str | None,
    product_name: str = "rk3568",
    push_run: bool = False,
) -> int:
    """依次执行 deploy -> build -> verify（可选 --push-run 在验证时推送到设备并运行）。"""
    r = cmd_deploy(source_dir_arg, test_dir_arg)
    if r != 0:
        return r
    r = cmd_build(source_dir_arg, test_dir_arg, product_name=product_name)
    if r != 0:
        return r
    return cmd_verify(source_dir_arg, product_name=product_name, push_run=push_run)


def _parse_opt(args: list[str], key: str) -> tuple[str | None, list[str]]:
    out = []
    value = None
    i = 0
    while i < len(args):
        if args[i] == key and i + 1 < len(args):
            value = args[i + 1]
            i += 2
            continue
        out.append(args[i])
        i += 1
    return value, out


def show_help() -> None:
    print(f"""OH Clitools Skill v{VERSION}
将用户指定的源目录（如 btclitools）拷贝到 test 目录、从 BUILD.gn 识别编译对象并完成编译与验证。
编译对象从源目录 BUILD.gn 自动解析（executable/ohos_executable 等），多个目标用逗号传给 --build-target。

用法:
  python3 ohclitool.py deploy --source-dir PATH --test-dir PATH           拷贝源目录到 test 并修改 BUILD.gn
  python3 ohclitool.py build --source-dir PATH --test-dir PATH [--product-name NAME]  执行编译
  python3 ohclitool.py verify --source-dir PATH [--product-name NAME] [--push-run]   验证产物
  python3 ohclitool.py all --source-dir PATH --test-dir PATH [--product-name NAME] [--push-run]  deploy + build + verify
  python3 ohclitool.py help

选项:
  --source-dir PATH     源目录（如 btclitools），相对 src 或绝对路径，默认: .claude/skills/ohclitools/btclitools
  --test-dir PATH       目标 test 目录，相对 src 或绝对路径，默认: foundation/communication/bluetooth/test
  --product-name NAME   产品名，默认: rk3568
  --push-run            验证时使用 ${{OHOS_SDK_PATH}}/linux/toolchains/hdc 推送到设备 /tmp、chmod +x 并运行

示例:
  python3 ohclitool.py deploy --source-dir .claude/skills/ohclitools/btclitools --test-dir foundation/communication/bluetooth/test
  python3 ohclitool.py build --source-dir .claude/skills/ohclitools/btclitools --test-dir foundation/communication/bluetooth/test
  python3 ohclitool.py verify --source-dir .claude/skills/ohclitools/btclitools --push-run
  python3 ohclitool.py all --source-dir .claude/skills/ohclitools/btclitools --test-dir foundation/communication/bluetooth/test --push-run
""")


def main() -> int:
    args = sys.argv[1:]
    if not args or args[0] in ("help", "-h", "--help"):
        show_help()
        return 0

    cmd = args[0].lower()
    rest = args[1:]
    source_dir, rest = _parse_opt(rest, "--source-dir")
    test_dir, rest = _parse_opt(rest, "--test-dir")
    product_name, rest = _parse_opt(rest, "--product-name")
    product_name = product_name or "rk3568"
    push_run = "--push-run" in rest

    if cmd == "deploy":
        return cmd_deploy(source_dir, test_dir)
    if cmd == "build":
        return cmd_build(source_dir, test_dir, product_name=product_name)
    if cmd == "verify":
        return cmd_verify(source_dir, product_name=product_name, push_run=push_run)
    if cmd == "all":
        return cmd_all(source_dir, test_dir, product_name=product_name, push_run=push_run)

    print(f"未知命令: {args[0]}", file=sys.stderr)
    show_help()
    return 1


if __name__ == "__main__":
    sys.exit(main())
