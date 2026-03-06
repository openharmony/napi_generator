#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
OH Clitools Skill - 将用户指定的源目录（如 btclitools/wificlitools）与框架接口对齐：支持接口覆盖检查、
拷贝部署、编译与产物验证、推送到设备运行。编译对象从源目录的 BUILD.gn 中自动识别（executable/
ohos_executable 等），多个目标用逗号传给 --build-target。

Usage:
    python3 ohclitool.py coverage [--bundle-json PATH] [--source-dir PATH] [--output PATH]  接口覆盖检查
    python3 ohclitool.py deploy --source-dir PATH --test-dir PATH  拷贝源目录到 test 并修改 BUILD.gn
    python3 ohclitool.py build --source-dir PATH --test-dir PATH [--product-name NAME]  执行编译
    python3 ohclitool.py verify --source-dir PATH [--product-name NAME] [--push-run]  验证产物
    python3 ohclitool.py all --source-dir PATH --test-dir PATH [--product-name NAME] [--push-run]  deploy+build+verify
    python3 ohclitool.py help

推送到设备：使用 ${OHOS_SDK_PATH}/linux/toolchains/hdc：file send -> chmod +x -> shell 运行；
带 --push-run 时解析设备输出「support command as follows:」与源码 g_staCliCmds 对比一致性。

CLI 代码规范（生成/补齐 clitools 代码时须遵守，详见 SKILL.md 与各工具 DESIGN.md）：
- 魔数禁止，常量/枚举命名 UPPER_SNAKE_CASE（禁止 k 前缀或 camelCase）；函数名 PascalCase；单行 ≤120 字符。
- 变量声明：同一行不写多个变量（如 std::string a, b 改为分行声明）。
- 注释位置：说明性注释不写行尾，单独一行写在被注释代码上一行。
- 换行：续行时运算符放行尾，行尾与下一行行首不留空格。
- 头文件：不在头文件中使用匿名 namespace 或 static 定义非外部可见符号；常量用 inline constexpr 或 .cpp 中定义。
- Get 类接口：终端须 dump 具体 info（字段级），不能只打印 success。
- Callback 接口：注册 callback 并等待返回值，必须带 timeout；默认 2s，scan 类长操作默认 30s。
- Usage 两段式：① 接口功能与参数说明（参数标明 string/int）；② " ex: wificommand <cmd> [args]"。
- Usage 示例值：与框架/测试一致（如 setcountrycode 用 code=86）；枚举型罗列枚举及传入值。
"""

import json
import os
import re
import shutil
import subprocess
import sys
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent
SRC_ROOT = SCRIPT_DIR.parent.parent.parent

# 默认源目录、test 目录、bundle.json（相对 src，当用户未指定时使用）
DEFAULT_SOURCE_DIR = Path(".claude/skills/ohclitools/btclitools")
DEFAULT_TEST_DIR = Path("foundation/communication/bluetooth/test")
DEFAULT_BUNDLE_JSON = Path("foundation/communication/bluetooth/bundle.json")

# 匹配 #include "..." 或 #include <...>
INCLUDE_PATTERN = re.compile(r'#include\s*["<]([^">]+)[">]')

# BUILD.gn 中可编译目标类型（提取目标名）
BUILD_TARGET_PATTERN = re.compile(
    r"(?:ohos_)?(?:executable|shared_library|static_library)\s*\(\s*[\"']([^\"']+)[\"']",
    re.MULTILINE,
)

# clitools.cpp 命令表中每条的 cmd 名：{"cmd", Handler, "usage"}
STACLI_CMD_NAME_PATTERN = re.compile(r'\{\s*"([^"]+)"\s*,\s*\w+', re.MULTILINE)

# CLI 实现约定：callback 默认超时(ms)；scan 等长操作超时(ms)，超时后结束动作
DEFAULT_CALLBACK_TIMEOUT_MS = 2000
SCAN_OR_LONG_OP_TIMEOUT_MS = 30000

VERSION = "1.0.0"


def _get_expected_commands_from_source(source_dir: Path) -> list[str]:
    """
    从 source_dir 下的 clitools.cpp 中解析 g_staCliCmds[] 的命令名列表（与 Help() 输出顺序一致）。
    仅统计非注释行中的条目；返回每条 cmd 名（即表中第一列），用于与设备输出首词对比。
    若未找到或解析失败则返回空列表。
    """
    clitools_cpp = source_dir / "clitools.cpp"
    if not clitools_cpp.is_file():
        return []
    try:
        text = clitools_cpp.read_text(encoding="utf-8", errors="ignore")
    except Exception:
        return []
    start = text.find("g_staCliCmds[] = {")
    if start == -1:
        return []
    end = text.find("};", start)
    if end == -1:
        return []
    block = text[start:end]
    result = []
    for line in block.splitlines():
        if line.strip().startswith("//"):
            continue
        for m in STACLI_CMD_NAME_PATTERN.finditer(line):
            result.append(m.group(1))
    return result


def _get_expected_usage_first_words_from_source(source_dir: Path) -> list[str]:
    """
    从 clitools.cpp 的 g_staCliCmds 表中解析每条条目的 usage（第三列），取首词作为期望列表，
    与设备打印的 usage 首词一致；跳过注释行中的条目。
    """
    clitools_cpp = source_dir / "clitools.cpp"
    if not clitools_cpp.is_file():
        return []
    try:
        text = clitools_cpp.read_text(encoding="utf-8", errors="ignore")
    except Exception:
        return []
    start = text.find("g_staCliCmds[] = {")
    if start == -1:
        return []
    end = text.find("};", start)
    if end == -1:
        return []
    block = text[start:end]
    # 按 "},\n" + 可选注释行 + "{" 分割，每条为一整个 { "cmd", Handler, "usage" }, 或多行 usage
    segments = re.split(r'\}\s*,\s*\n\s*(?://[^\n]*\n\s*)*\{', block)
    result = []
    for seg in segments:
        seg = seg.strip()
        if not seg:
            continue
        parts = re.findall(r'"([^"]*)"', seg)
        if len(parts) >= 2:
            usage = "".join(parts[1:]).strip()
            first_word = usage.split(None, 1)[0] if usage.split() else ""
            if first_word:
                result.append(first_word)
    return result


def _get_expected_usage_first_words_from_binary(binary_path: Path) -> list[str]:
    """
    本地运行可执行文件（无参数），解析 stdout 中「support command as follows:」后的每行首词作为期望列表。
    若运行失败或解析不到则返回空列表。
    """
    try:
        ret = subprocess.run(
            [str(binary_path)],
            cwd=SRC_ROOT,
            capture_output=True,
            text=True,
            timeout=5,
            env={**os.environ},
        )
    except Exception:
        return []
    if ret.returncode != 0 or not ret.stdout or "support command as follows:" not in ret.stdout:
        return []
    in_help = False
    words = []
    for line in ret.stdout.splitlines():
        if "support command as follows:" in line:
            in_help = True
            continue
        if in_help and line.strip():
            parts = line.strip().split(None, 1)
            words.append(parts[0] if parts else "")
    return words


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


def _get_btframework_headers(bundle_path: Path) -> list[str]:
    """
    从 bundle.json 中解析 btframework inner_kit 的 header_files，返回头文件名的 basename 列表。
    bundle 结构为 component.build.inner_kits 或 component.subcomponents[].inner_kits。
    """
    if not bundle_path.is_file():
        return []
    try:
        data = json.loads(bundle_path.read_text(encoding="utf-8", errors="ignore"))
    except Exception:
        return []
    comp = data.get("component", {})
    # component.build.inner_kits（bluetooth bundle 结构）
    build_kits = comp.get("build", {}).get("inner_kits", [])
    for kit in build_kits:
        name = kit.get("name", "")
        if "btframework" not in name:
            continue
        header = kit.get("header", {})
        files = header.get("header_files", [])
        return [Path(f).name for f in files]
    # 兼容 component.subcomponents[].inner_kits
    for sub in comp.get("subcomponents", []):
        for kit in sub.get("inner_kits", []):
            if "btframework" not in kit.get("name", ""):
                continue
            header = kit.get("header", {})
            files = header.get("header_files", [])
            return [Path(f).name for f in files]
    return []


def _get_included_basenames(source_dir: Path) -> set[str]:
    """扫描 source_dir 下 .cpp/.h 中的 #include，收集被包含头文件的 basename。"""
    included: set[str] = set()
    for ext in ("*.cpp", "*.h", "*.c"):
        for f in source_dir.rglob(ext):
            try:
                text = f.read_text(encoding="utf-8", errors="ignore")
            except Exception:
                continue
            for m in INCLUDE_PATTERN.finditer(text):
                path = m.group(1).strip()
                included.add(Path(path).name)
    return included


def cmd_coverage(
    bundle_json_arg: str | None,
    source_dir_arg: str | None,
    output_path_arg: str | None = None,
) -> int:
    """
    根据 bundle.json 中 btframework inner_kits 声明的头文件，检查 source_dir 中的 include 覆盖情况，
    输出已覆盖/未覆盖列表；若指定 --output 则写入 Markdown 报告。
    """
    base = SRC_ROOT
    bundle_path = _resolve_path(bundle_json_arg, DEFAULT_BUNDLE_JSON, base=base)
    if not bundle_path.is_file():
        print(f"bundle.json 不存在: {bundle_path}", file=sys.stderr)
        return 1

    source_dir = _resolve_source_dir(source_dir_arg)
    if not source_dir.is_dir():
        print(f"源目录不存在: {source_dir}", file=sys.stderr)
        return 1

    declared = _get_btframework_headers(bundle_path)
    if not declared:
        print("未在 bundle.json 中找到 btframework inner_kit 的 header_files", file=sys.stderr)
        return 1

    included = _get_included_basenames(source_dir)
    covered = [h for h in declared if h in included]
    not_covered = [h for h in declared if h not in included]

    lines = [
        "# btframework inner_kits 接口覆盖检查",
        "",
        f"依据 bundle: `{bundle_path.relative_to(base)}`，源目录: `{source_dir.relative_to(base)}`。",
        "",
        f"- 声明头文件数: {len(declared)}",
        f"- 已覆盖（源码中已 include）: {len(covered)}",
        f"- 未覆盖: {len(not_covered)}",
        "",
        "## 已覆盖",
        "",
        "| 头文件 |",
        "|--------|",
    ]
    for h in sorted(covered):
        lines.append(f"| {h} |")
    lines.extend([
        "",
        "## 未覆盖",
        "",
        "| 头文件 |",
        "|--------|",
    ])
    for h in sorted(not_covered):
        lines.append(f"| {h} |")
    lines.append("")
    report = "\n".join(lines)

    print(report)
    if output_path_arg:
        out_path = Path(output_path_arg) if Path(output_path_arg).is_absolute() else base / output_path_arg
        out_path.parent.mkdir(parents=True, exist_ok=True)
        out_path.write_text(report, encoding="utf-8")
        print(f"已写入报告: {out_path}", file=sys.stderr)
    return 0


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
    if new_inner and not new_inner.endswith(","):
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
        device_path = f"/data/local/tmp/{name}"
        cmd_send = [str(hdc), "file", "send", str(to_send), "/data/local/tmp"]
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
        ret = subprocess.run(cmd_run, cwd=SRC_ROOT, capture_output=True, text=True, timeout=30)
        if ret.returncode != 0:
            print("运行退出码:", ret.returncode, file=sys.stderr)
        if ret.stdout:
            print(ret.stdout, end="")
        if ret.stderr:
            print(ret.stderr, end="", file=sys.stderr)
        # 比较设备输出的命令列表与代码内实现的命令列表（优先本地运行取 usage 首词，否则从源码解析 usage 首词）
        expected = _get_expected_usage_first_words_from_binary(to_send)
        if not expected:
            source_dir = _resolve_source_dir(source_dir_arg)
            expected = _get_expected_usage_first_words_from_source(source_dir)
        actual_lines = []
        if ret.stdout:
            in_help = False
            for line in ret.stdout.splitlines():
                if "support command as follows:" in line:
                    in_help = True
                    continue
                if in_help and line.strip():
                    actual_lines.append(line.strip())
        actual = [line.split(None, 1)[0] if line.split() else "" for line in actual_lines]
        if expected and actual:
            if expected == actual:
                print("[命令列表一致] 设备输出与代码内 g_staCliCmds 一致，共 %d 条" % len(expected))
            else:
                print("[命令列表不一致]", file=sys.stderr)
                if len(expected) != len(actual):
                    print("  代码: %d 条, 设备: %d 条" % (len(expected), len(actual)), file=sys.stderr)
                missing = [c for c in expected if c not in actual]
                extra = [c for c in actual if c not in expected]
                if missing:
                    print("  设备输出中缺失: %s" % ", ".join(missing[:20]), file=sys.stderr)
                    if len(missing) > 20:
                        print("  ... 等 %d 条" % len(missing), file=sys.stderr)
                if extra:
                    print("  设备输出中多出: %s" % ", ".join(extra[:20]), file=sys.stderr)
                    if len(extra) > 20:
                        print("  ... 等 %d 条" % len(extra), file=sys.stderr)
                if not missing and not extra:
                    print("  顺序不一致", file=sys.stderr)
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
接口覆盖检查、拷贝部署、编译、验证、推送到设备运行。编译目标从源目录 BUILD.gn 自动解析。

用法:
  python3 ohclitool.py coverage [--bundle-json PATH] [--source-dir PATH] [--output PATH]  接口覆盖检查
  python3 ohclitool.py deploy --source-dir PATH --test-dir PATH           拷贝源目录到 test 并修改 BUILD.gn
  python3 ohclitool.py build --source-dir PATH --test-dir PATH [--product-name NAME]  执行编译
  python3 ohclitool.py verify --source-dir PATH [--product-name NAME] [--push-run]   验证产物
  python3 ohclitool.py all --source-dir PATH --test-dir PATH [--product-name NAME] [--push-run]  deploy + build + verify
  python3 ohclitool.py help

选项:
  --bundle-json PATH   (coverage) bundle.json 路径，默认: foundation/communication/bluetooth/bundle.json
  --source-dir PATH    源目录（如 btclitools），默认: .claude/skills/ohclitools/btclitools
  --test-dir PATH      目标 test 目录，默认: foundation/communication/bluetooth/test
  --product-name NAME  产品名，默认: rk3568
  --output PATH        (coverage) 覆盖率报告输出路径（可选）
  --push-run           验证时推送到设备 /data/local/tmp、chmod +x 并运行，并比较设备输出命令列表与源码是否一致

示例:
  python3 ohclitool.py coverage --source-dir .claude/skills/ohclitools/btclitools --output btclitools/COVERAGE.md
  python3 ohclitool.py deploy --source-dir .claude/skills/ohclitools/btclitools --test-dir foundation/communication/bluetooth/test
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
    bundle_json, rest = _parse_opt(rest, "--bundle-json")
    output_path, rest = _parse_opt(rest, "--output")
    push_run = "--push-run" in rest

    if cmd == "coverage":
        return cmd_coverage(bundle_json, source_dir, output_path)
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
