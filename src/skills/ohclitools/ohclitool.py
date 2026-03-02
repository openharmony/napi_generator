#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
OH Clitools Skill - 将 clitools 拷贝到目标 test 目录、在 BUILD.gn 中增加编译对象并完成编译与产物验证。

Usage:
    python3 ohclitool.py deploy [--test-dir PATH]           拷贝 clitools 并修改 BUILD.gn
    python3 ohclitool.py build [--test-dir PATH] [--product-name NAME]  执行编译
    python3 ohclitool.py verify [--product-name NAME] [--push-run]  验证产物；--push-run 时推送到设备并运行
    python3 ohclitool.py all [--test-dir PATH] [--product-name NAME] [--push-run]  deploy + build + verify
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
CLITOOLS_SOURCE = SCRIPT_DIR / "clitools"

# 默认目标：bluetooth test 目录（相对 src）
DEFAULT_TEST_DIR = Path("foundation/communication/bluetooth/test")
# 默认编译目标名（与 test/BUILD.gn 中 group 名一致）
DEFAULT_GROUP_NAME = "unit_test"
# clitools 在 BUILD.gn 中的目标名
CLITOOLS_TARGET = "btcommand"
# 编译产物相对 out/<product> 的路径（bluetooth btcommand）
OUTPUT_REL_PATH = Path("communication/bluetooth/btcommand")
# 推送到设备上的路径
DEVICE_PATH = "/tmp/btcommand"

VERSION = "1.0.0"


def _get_hdc_path() -> Path | None:
    """使用 ${OHOS_SDK_PATH}/linux/toolchains/hdc，未设置环境变量时返回 None。"""
    sdk = os.environ.get("OHOS_SDK_PATH")
    if not sdk:
        return None
    hdc = Path(sdk) / "linux" / "toolchains" / "hdc"
    return hdc if hdc.is_file() else None


def _resolve_test_dir(test_dir_arg: str | None) -> Path:
    """解析 test 目录：可为相对 src 的路径或绝对路径。"""
    if not test_dir_arg:
        return SRC_ROOT / DEFAULT_TEST_DIR
    p = Path(test_dir_arg)
    if not p.is_absolute():
        p = SRC_ROOT / p
    return p.resolve()


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


def cmd_deploy(test_dir_arg: str | None) -> int:
    """
    1) 将 clitools 目录拷贝到 test_dir/clitools
    2) 在 test_dir/BUILD.gn 的 deps 中增加 clitools:btcommand（若不存在）
    """
    test_dir = _resolve_test_dir(test_dir_arg)
    if not CLITOOLS_SOURCE.is_dir():
        print(f"源目录不存在: {CLITOOLS_SOURCE}", file=sys.stderr)
        return 1

    dest_clitools = test_dir / "clitools"
    dest_clitools.mkdir(parents=True, exist_ok=True)
    for f in CLITOOLS_SOURCE.iterdir():
        if f.name.startswith("."):
            continue
        dest = dest_clitools / f.name
        if f.is_dir():
            if dest.exists():
                shutil.rmtree(dest)
            shutil.copytree(f, dest)
        else:
            shutil.copy2(f, dest)
    print(f"已拷贝 clitools -> {test_dir / 'clitools'}")

    build_gn = test_dir / "BUILD.gn"
    dep = f"clitools:{CLITOOLS_TARGET}"
    if _add_dep_to_build_gn(build_gn, dep):
        print(f"已在 {build_gn} 的 deps 中增加 \"{dep}\"")
    else:
        print(f"BUILD.gn 已包含或无需修改: {build_gn}")

    return 0


def _get_build_target(test_dir: Path) -> str | None:
    """根据 test 目录得到 group 目标，如 foundation/communication/bluetooth/test:unit_test"""
    try:
        rel = test_dir.relative_to(SRC_ROOT)
    except ValueError:
        return None
    path_part = rel.as_posix()
    return f"{path_part}:{DEFAULT_GROUP_NAME}"


def cmd_build(test_dir_arg: str | None, product_name: str = "rk3568") -> int:
    """在 src 目录下执行 build.sh，编译 test 目标（含 clitools）。"""
    test_dir = _resolve_test_dir(test_dir_arg)
    target = _get_build_target(test_dir)
    if not target:
        print(f"无法解析编译目标（test_dir 应在 src 下）: {test_dir}", file=sys.stderr)
        return 1
    build_sh = SRC_ROOT / "build.sh"
    if not build_sh.is_file():
        print(f"未找到 build.sh: {build_sh}", file=sys.stderr)
        return 1
    cmd = [
        str(build_sh),
        "--build-target", target,
        "--product-name", product_name,
    ]
    print("执行:", " ".join(cmd))
    ret = subprocess.run(cmd, cwd=SRC_ROOT)
    return ret.returncode


def cmd_verify(product_name: str = "rk3568", push_run: bool = False) -> int:
    """验证编译产物是否存在；若 --push-run 则推送到设备、赋执行权限并运行。"""
    out_dir = SRC_ROOT / "out" / product_name
    binary = out_dir / OUTPUT_REL_PATH
    unstripped = out_dir / "exe.unstripped" / OUTPUT_REL_PATH
    if binary.is_file():
        size = binary.stat().st_size
        print(f"产物存在: {binary.relative_to(SRC_ROOT)} ({size} bytes)")
    else:
        print(f"未找到产物: {binary}", file=sys.stderr)
    if unstripped.is_file():
        size = unstripped.stat().st_size
        print(f"未 strip: {unstripped.relative_to(SRC_ROOT)} ({size} bytes)")
    if not binary.is_file() and not unstripped.is_file():
        return 1

    if push_run:
        hdc = _get_hdc_path()
        if not hdc:
            print("未设置 OHOS_SDK_PATH，跳过推送到设备。可 export OHOS_SDK_PATH=<sdk根>", file=sys.stderr)
            return 0
        to_send = binary if binary.is_file() else unstripped
        # 1) 传到板子 /tmp（设备上为 /tmp/btcommand）
        cmd_send = [str(hdc), "file", "send", str(to_send), "/tmp"]
        print("推送:", " ".join(cmd_send))
        ret = subprocess.run(cmd_send, cwd=SRC_ROOT)
        if ret.returncode != 0:
            print("推送失败", file=sys.stderr)
            return ret.returncode
        # 2) 设置执行权限
        cmd_chmod = [str(hdc), "shell", "chmod", "+x", DEVICE_PATH]
        print("执行权限:", " ".join(cmd_chmod))
        ret = subprocess.run(cmd_chmod, cwd=SRC_ROOT)
        if ret.returncode != 0:
            print("chmod 失败", file=sys.stderr)
            return ret.returncode
        # 3) 在板子上运行
        cmd_run = [str(hdc), "shell", DEVICE_PATH]
        print("运行:", " ".join(cmd_run))
        ret = subprocess.run(cmd_run, cwd=SRC_ROOT)
        if ret.returncode != 0:
            print("运行退出码:", ret.returncode, file=sys.stderr)
        return ret.returncode
    return 0


def cmd_all(test_dir_arg: str | None, product_name: str = "rk3568", push_run: bool = False) -> int:
    """依次执行 deploy -> build -> verify（可选 --push-run 在验证时推送到设备并运行）。"""
    r = cmd_deploy(test_dir_arg)
    if r != 0:
        return r
    r = cmd_build(test_dir_arg, product_name=product_name)
    if r != 0:
        return r
    return cmd_verify(product_name=product_name, push_run=push_run)


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
将 clitools 拷贝到目标 test 下、在 BUILD.gn 中增加编译对象并完成编译与产物验证。

用法:
  python3 ohclitool.py deploy [--test-dir PATH]                          拷贝 clitools 并修改 BUILD.gn
  python3 ohclitool.py build [--test-dir PATH] [--product-name NAME]     执行编译
  python3 ohclitool.py verify [--product-name NAME] [--push-run]         验证产物；--push-run 时推送到设备并运行
  python3 ohclitool.py all [--test-dir PATH] [--product-name NAME] [--push-run]  deploy + build + verify
  python3 ohclitool.py help

选项:
  --test-dir PATH       目标 test 目录（相对 src 或绝对路径），默认: foundation/communication/bluetooth/test
  --product-name NAME   产品名，默认: rk3568
  --push-run            验证时使用 ${{OHOS_SDK_PATH}}/linux/toolchains/hdc 推送到设备 /tmp、chmod +x 并运行

示例:
  python3 ohclitool.py deploy
  python3 ohclitool.py verify --push-run
  python3 ohclitool.py all --push-run
""")


def main() -> int:
    args = sys.argv[1:]
    if not args or args[0] in ("help", "-h", "--help"):
        show_help()
        return 0

    cmd = args[0].lower()
    rest = args[1:]
    test_dir, rest = _parse_opt(rest, "--test-dir")
    product_name, rest = _parse_opt(rest, "--product-name")
    product_name = product_name or "rk3568"
    push_run = "--push-run" in rest

    if cmd == "deploy":
        return cmd_deploy(test_dir)
    if cmd == "build":
        return cmd_build(test_dir, product_name=product_name)
    if cmd == "verify":
        return cmd_verify(product_name=product_name, push_run=push_run)
    if cmd == "all":
        return cmd_all(test_dir, product_name=product_name, push_run=push_run)

    print(f"未知命令: {args[0]}", file=sys.stderr)
    show_help()
    return 1


if __name__ == "__main__":
    sys.exit(main())
