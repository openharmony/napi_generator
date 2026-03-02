#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
OH Build Skill - OpenHarmony 构建与 Fuzz 测试
提供：编译 fuzz 测试、查看模块 fuzztest 目标及覆盖率参数。

Usage:
    python3 ohbuild.py list-fuzztest <模块名或路径>
    python3 ohbuild.py build-fuzztest <目标名> [--product-name rk3568] [--gn-args xxx=true]
    python3 ohbuild.py build-component-fuzztest <模块名或路径> [--product-name rk3568] [--gn-args xxx=true]  编译部件全部 fuzztest
    python3 ohbuild.py verify-coverage [模块名] [--product-name rk3568]  编译后验证是否有模块相关 gcno 文件
    python3 ohbuild.py build-acts <suite名> [--src-dir PATH] [--product-name rk3568] [--system-size standard] [--no-run]  编译 ACTS 指定 suite；--src-dir 指定工程 src 根（如 ~/ohos/6.1release/src）
    python3 ohbuild.py help
"""

import json
import re
import subprocess
import sys
from pathlib import Path
from typing import Optional

# 脚本所在目录：src/.claude/skills/ohbuild/
SCRIPT_DIR = Path(__file__).resolve().parent
# 假定源码根为 src（即 skills 的上级的上级的上级）
SRC_ROOT = SCRIPT_DIR.parent.parent.parent
# ACTS 构建脚本所在目录（执行 build.sh 的工作目录），可由 --src-dir 覆盖
def get_acts_build_dir(src_root: Path) -> Path:
    return src_root / "test" / "xts" / "acts"

SKILL_NAME = "ohbuild"
VERSION = "1.0.0"


def find_module_root(module_arg: str) -> Optional[Path]:
    """
    根据模块名或路径解析出模块根目录（在 src 下）。
    module_arg 可以是：battery_manager 或 base/powermgr/battery_manager
    """
    module_arg = module_arg.strip().rstrip("/")
    # 1) 直接作为相对路径
    direct = SRC_ROOT / module_arg
    if direct.is_dir():
        return direct
    # 2) 在 src 下搜索名称匹配的目录（如 battery_manager）
    name = module_arg.split("/")[-1]
    for d in SRC_ROOT.rglob(name):
        if d.is_dir() and d.name == name:
            # 优先取带 test/fuzztest 的
            fuzztest_dir = d / "test" / "fuzztest"
            if fuzztest_dir.is_dir():
                return d
    for d in SRC_ROOT.rglob(name):
        if d.is_dir() and d.name == name:
            return d
    return None


def get_fuzztest_group_name(module_root: Path) -> Optional[str]:
    """从 test/fuzztest/BUILD.gn 中解析 group("...") 的名称。"""
    build_gn = module_root / "test" / "fuzztest" / "BUILD.gn"
    if not build_gn.is_file():
        return None
    text = build_gn.read_text(encoding="utf-8", errors="ignore")
    m = re.search(r'group\s*\(\s*["\'](\w+)["\']\s*\)', text)
    return m.group(1) if m else None


def get_fuzztest_group_target(module_root: Path) -> Optional[str]:
    """
    返回部件 fuzztest 的编译目标：<模块相对路径>/test/fuzztest:<group名>。
    例如 base/powermgr/battery_statistics/test/fuzztest:fuzztest。
    """
    try:
        rel = module_root.relative_to(SRC_ROOT)
    except ValueError:
        return None
    group_name = get_fuzztest_group_name(module_root)
    if not group_name:
        return None
    path_part = rel.as_posix() if isinstance(rel, Path) else str(rel).replace("\\", "/")
    return f"{path_part}/test/fuzztest:{group_name}"


def get_fuzztest_target_from_bundle(module_root: Path) -> Optional[str]:
    """
    从部件根目录的 bundle.json 的 build.test 中解析 fuzztest 编译目标。
    格式如 "//base/accesscontrol/sandbox_manager:sandbox_manager_build_fuzz_test"，
    返回时去掉前缀 "//"，即 "base/accesscontrol/sandbox_manager:sandbox_manager_build_fuzz_test"。
    """
    bundle_json = module_root / "bundle.json"
    if not bundle_json.is_file():
        return None
    try:
        data = json.loads(bundle_json.read_text(encoding="utf-8", errors="ignore"))
    except Exception:
        return None
    build = data.get("build") or data.get("component", {}).get("build")
    if not build:
        return None
    test_list = build.get("test")
    if not isinstance(test_list, list):
        return None
    for item in test_list:
        if not isinstance(item, str) or "fuzz" not in item.lower():
            continue
        # 去掉 "//" 前缀作为编译命令中的 --build-target
        target = item.lstrip("/")
        if target:
            return target
    return None


def get_fuzztest_targets(module_root: Path) -> list[str]:
    """从 test/fuzztest/BUILD.gn 的 deps 中解析出所有 fuzz 目标名。"""
    build_gn = module_root / "test" / "fuzztest" / "BUILD.gn"
    if not build_gn.is_file():
        return []
    text = build_gn.read_text(encoding="utf-8", errors="ignore")
    # 只匹配 deps 中 "xxx_fuzzer:TargetName" 形式，TargetName 通常以 FuzzTest 结尾
    targets = []
    for m in re.finditer(r'"[\w/]+:([A-Za-z0-9]+FuzzTest)"', text):
        targets.append(m.group(1))
    return targets


def get_coverage_arg(module_root: Path) -> Optional[str]:
    """在模块下查找 declare_args 中的 *_feature_coverage 变量名。"""
    # 常见在 config/BUILD.gn、utils/BUILD.gn 或根下 BUILD.gn
    candidates = [
        module_root / "config" / "BUILD.gn",
        module_root / "utils" / "BUILD.gn",
        module_root / "BUILD.gn",
    ]
    for build_gn in candidates:
        if not build_gn.is_file():
            continue
        text = build_gn.read_text(encoding="utf-8", errors="ignore")
        # 匹配 xxx_feature_coverage = false
        m = re.search(r"(\w+_feature_coverage)\s*=", text)
        if m:
            return m.group(1)
    # 递归查找任意 BUILD.gn
    for build_gn in module_root.rglob("BUILD.gn"):
        text = build_gn.read_text(encoding="utf-8", errors="ignore")
        if "declare_args" in text or "declare_args()" in text:
            m = re.search(r"(\w+_feature_coverage)\s*=", text)
            if m:
                return m.group(1)
    return None


def cmd_list_fuzztest(module_arg: str) -> int:
    """列出模块的 fuzz 测试目标与覆盖率参数。"""
    module_root = find_module_root(module_arg)
    if not module_root:
        print(f"未找到模块: {module_arg}", file=sys.stderr)
        print("请使用模块名（如 battery_manager）或相对 src 的路径（如 base/powermgr/battery_statistics）", file=sys.stderr)
        return 1

    try:
        rel = module_root.relative_to(SRC_ROOT)
    except ValueError:
        rel = module_root

    targets = get_fuzztest_targets(module_root)
    coverage_arg = get_coverage_arg(module_root)

    print(f"模块路径: {rel}")
    print()
    if coverage_arg:
        print(f"覆盖率参数（gn-args）: {coverage_arg}=true")
        print("  （默认在 BUILD.gn 中为 false）")
    else:
        print("覆盖率参数: 未在模块 BUILD.gn 中找到 *_feature_coverage 变量")
    print()
    group_target = get_fuzztest_group_target(module_root)
    bundle_fuzz_target = get_fuzztest_target_from_bundle(module_root)
    if group_target:
        print("部件 fuzztest 编译目标（编译该部件下全部 fuzz 用例，来自 test/fuzztest/BUILD.gn）:")
        print(f"  {group_target}")
        print()
    elif bundle_fuzz_target:
        print("部件 fuzztest 编译目标（来自 bundle.json build.test）:")
        print(f"  {bundle_fuzz_target}")
        print()
    if targets:
        print("单个 Fuzz 测试目标（--build-target 可选值）:")
        for t in sorted(targets):
            print(f"  - {t}")
        print()
        print("编译示例（在含 build.sh 的目录下执行）:")
        if coverage_arg:
            if group_target:
                print(f"  # 编译部件全部 fuzztest")
                print(f"  ./build.sh --build-target {group_target} --product-name rk3568 --gn-args {coverage_arg}=true")
                print()
            example_target = targets[0]
            print(f"  # 仅编译单个 fuzz 目标")
            print(f"  ./build.sh --build-target {example_target} --product-name rk3568 --gn-args {coverage_arg}=true")
    else:
        if bundle_fuzz_target and coverage_arg:
            print("编译示例（在含 build.sh 的目录下执行）:")
            print(f"  ./build.sh --build-target {bundle_fuzz_target} --product-name rk3568 --gn-args {coverage_arg}=true")
        elif not group_target and not bundle_fuzz_target:
            print("未找到 fuzz 测试目标（请确认存在 test/fuzztest/BUILD.gn 或 bundle.json 的 build.test 中有 fuzz 目标）")

    return 0


def cmd_build_fuzztest(
    target: str,
    product_name: str = "rk3568",
    gn_args: Optional[str] = None,
) -> int:
    """打印编译 fuzz 测试的 build.sh 命令（不执行）。"""
    parts = [
        "./build.sh",
        f"--build-target {target}",
        f"--product-name {product_name}",
    ]
    if gn_args:
        parts.append(f"--gn-args {gn_args}")
    cmd = " ".join(parts)
    print("在源码根目录（含 build.sh）下执行：")
    print()
    print(cmd)
    print()
    return 0


def cmd_build_component_fuzztest(
    module_arg: str,
    product_name: str = "rk3568",
    gn_args: Optional[str] = None,
) -> int:
    """
    打印编译「部件全部 fuzztest」的 build.sh 命令。
    编译目标从部件的 test/fuzztest/BUILD.gn 中 group("...") 得到，形如：
    base/powermgr/battery_statistics/test/fuzztest:fuzztest
    """
    module_root = find_module_root(module_arg)
    if not module_root:
        print(f"未找到模块: {module_arg}", file=sys.stderr)
        print("请使用模块名（如 battery_statistics）或相对 src 的路径（如 base/powermgr/battery_statistics）", file=sys.stderr)
        return 1

    group_target = get_fuzztest_group_target(module_root)
    bundle_fuzz_target = get_fuzztest_target_from_bundle(module_root)
    fuzz_target = group_target or bundle_fuzz_target
    if not fuzz_target:
        print(f"模块 {module_arg} 下未找到 fuzztest 目标（test/fuzztest/BUILD.gn 的 group 或 bundle.json 的 build.test）。", file=sys.stderr)
        return 1

    if gn_args is None:
        gn_args = get_coverage_arg(module_root)
        if gn_args:
            gn_args = f"{gn_args}=true"

    parts = [
        "./build.sh",
        f"--build-target {fuzz_target}",
        f"--product-name {product_name}",
    ]
    if gn_args:
        parts.append(f"--gn-args {gn_args}")
    cmd = " ".join(parts)
    print("在源码根目录（含 build.sh）下执行：")
    print()
    print(cmd)
    print()
    return 0


def cmd_verify_coverage(module_name: Optional[str] = None, product_name: str = "rk3568") -> int:
    """
    编译完毕后验证：在 out/<product>/obj 下查找 *.gcno 文件。
    若指定模块名，则只列出路径中包含该模块的 gcno；否则列出全部。
    若有则列出并提示用户。
    """
    obj_dir = SRC_ROOT / "out" / product_name / "obj"
    if not obj_dir.is_dir():
        print(f"out/{product_name}/obj 不存在，请先完成带覆盖率参数的编译。", file=sys.stderr)
        return 1

    try:
        all_gcno = list(obj_dir.rglob("*.gcno"))
    except Exception as e:
        print(f"查找 *.gcno 时出错: {e}", file=sys.stderr)
        return 1

    if module_name:
        # 只保留路径中包含模块名的（如 power_manager、battery_statistics）
        module_key = module_name.strip().replace("-", "_")
        related = [p for p in all_gcno if module_key in p.as_posix()]
        gcno_list = related
        label = f"与模块「{module_name}」相关的 *.gcno"
    else:
        gcno_list = all_gcno
        label = "*.gcno"

    print("=== 覆盖率验证（gcno 文件） ===")
    print(f"查找目录: out/{product_name}/obj/")
    print(f"命令等价: find out/{product_name}/obj/ -name '*.gcno'")
    print()

    if not gcno_list:
        if module_name:
            print(f"未找到{label}文件。")
            print("请确认已使用 --gn-args <模块>_feature_coverage=true 完成编译。")
        else:
            print("未找到任何 *.gcno 文件。")
            print("请确认已使用 --gn-args <模块>_feature_coverage=true 完成编译。")
        return 0

    print(f"找到 {len(gcno_list)} 个{label}文件：")
    # 相对 src 显示
    for p in sorted(gcno_list)[:200]:  # 最多列 200 个
        try:
            rel = p.relative_to(SRC_ROOT)
        except ValueError:
            rel = p
        print(f"  {rel}")
    if len(gcno_list) > 200:
        print(f"  ... 共 {len(gcno_list)} 个，已省略其余")
    print()
    print("提示：gcno 为覆盖率信息文件，说明该模块已开启覆盖率编译，可进行覆盖率收集与统计。")
    return 0


def cmd_build_acts(
    suite_name: str,
    product_name: str = "rk3568",
    system_size: str = "standard",
    run: bool = True,
    src_dir: Optional[Path] = None,
) -> int:
    """
    编译 ACTS 指定 suite（可多个，逗号分隔）。在 <src_dir>/test/xts/acts 目录下执行：
    ./build.sh suite=acts system_size=<size> product_name=<product> suite=<suite1>,<suite2>,...
    src_dir 未指定时使用脚本推断的 SRC_ROOT。
    """
    if not suite_name or not suite_name.strip():
        print("请指定要编译的 ACTS suite 名（多个用逗号分隔），例如: build-acts ActsAACommandTest,AACommand07", file=sys.stderr)
        return 1
    # 支持多 suite：逗号分隔，去掉多余空格后拼成 suite=a,b,c
    suite_name = ",".join(s.strip() for s in suite_name.strip().split(",") if s.strip())
    src_root = (Path(src_dir).expanduser().resolve() if src_dir else SRC_ROOT)
    acts_build_dir = get_acts_build_dir(src_root)
    if not acts_build_dir.is_dir():
        print(f"ACTS 构建目录不存在: {acts_build_dir}", file=sys.stderr)
        return 1
    build_sh = acts_build_dir / "build.sh"
    if not build_sh.is_file():
        print(f"未找到 build.sh: {build_sh}", file=sys.stderr)
        return 1

    cmd = [
        "./build.sh",
        "suite=acts",
        f"system_size={system_size}",
        f"product_name={product_name}",
        f"suite={suite_name}",
    ]
    cmd_str = " ".join(cmd)
    print(f"工程 src 根: {src_root}")
    print(f"工作目录: {acts_build_dir}")
    print(f"执行命令: {cmd_str}")
    print()
    if not run:
        print("（未执行，使用 build-acts 时不加 --no-run 将自动执行）")
        return 0
    ret = subprocess.run(cmd_str, cwd=acts_build_dir, shell=True)
    return ret.returncode


def show_help() -> None:
    """打印帮助信息。"""
    print(f"""OH Build Skill v{VERSION}
用法:
  python3 ohbuild.py list-fuzztest <模块名或路径>  查看模块的 fuzz 目标与覆盖率参数
  python3 ohbuild.py build-fuzztest <目标名> [--product-name rk3568] [--gn-args xxx=true]  打印编译单个 fuzz 目标的命令
  python3 ohbuild.py build-component-fuzztest <模块名或路径> [--product-name rk3568] [--gn-args xxx=true]  打印编译部件全部 fuzztest 的命令
  python3 ohbuild.py verify-coverage [模块名] [--product-name rk3568]  编译后验证是否有模块相关 gcno 文件
  python3 ohbuild.py build-acts <suite名> [--src-dir PATH] [--product-name rk3568] [--system-size standard] [--no-run]  编译 ACTS，多 suite 用逗号分隔；--src-dir 指定工程 src 根
  python3 ohbuild.py help  显示本帮助

示例:
  python3 ohbuild.py list-fuzztest battery_manager
  python3 ohbuild.py list-fuzztest base/powermgr/battery_statistics
  python3 ohbuild.py build-fuzztest GetAppStatsMahFuzzTest --gn-args battery_statistics_feature_coverage=true
  python3 ohbuild.py build-component-fuzztest battery_statistics --gn-args battery_statistics_feature_coverage=true
  python3 ohbuild.py verify-coverage power_manager
  python3 ohbuild.py verify-coverage
  python3 ohbuild.py build-acts ActsAACommandPrintSyncTest
  python3 ohbuild.py build-acts AACommand07,AACommand08,ActsAACommandTest --src-dir ~/ohos/61release/src
  python3 ohbuild.py build-acts ActsAACommandPrintOneTest --src-dir ~/ohos/6.1release/src
  python3 ohbuild.py build-acts ActsAACommandPrintSyncTest --product-name rk3568 --no-run
""")


def main() -> int:
    args = sys.argv[1:]
    if not args or args[0] in ("help", "-h", "--help"):
        show_help()
        return 0

    cmd = args[0].lower()
    if cmd == "list-fuzztest":
        if len(args) < 2:
            print("请指定模块名或路径，例如: list-fuzztest battery_manager", file=sys.stderr)
            return 1
        return cmd_list_fuzztest(args[1])

    if cmd == "build-fuzztest":
        if len(args) < 2:
            print("请指定 fuzz 目标名，例如: build-fuzztest GetAppStatsMahFuzzTest --gn-args battery_statistics_feature_coverage=true", file=sys.stderr)
            return 1
        target = args[1]
        product_name = "rk3568"
        gn_args = None
        i = 2
        while i < len(args):
            if args[i] == "--product-name" and i + 1 < len(args):
                product_name = args[i + 1]
                i += 2
                continue
            if args[i] == "--gn-args" and i + 1 < len(args):
                gn_args = args[i + 1]
                i += 2
                continue
            i += 1
        return cmd_build_fuzztest(target, product_name=product_name, gn_args=gn_args)

    if cmd == "build-component-fuzztest":
        if len(args) < 2:
            print("请指定模块名或路径，例如: build-component-fuzztest battery_statistics", file=sys.stderr)
            return 1
        module_arg = args[1]
        product_name = "rk3568"
        gn_args = None
        i = 2
        while i < len(args):
            if args[i] == "--product-name" and i + 1 < len(args):
                product_name = args[i + 1]
                i += 2
                continue
            if args[i] == "--gn-args" and i + 1 < len(args):
                gn_args = args[i + 1]
                i += 2
                continue
            i += 1
        return cmd_build_component_fuzztest(module_arg, product_name=product_name, gn_args=gn_args)

    if cmd == "verify-coverage":
        module_name = None
        product_name = "rk3568"
        i = 1
        while i < len(args):
            if args[i] == "--product-name" and i + 1 < len(args):
                product_name = args[i + 1]
                i += 2
                continue
            if not args[i].startswith("--"):
                module_name = args[i]
                i += 1
                continue
            i += 1
        return cmd_verify_coverage(module_name=module_name, product_name=product_name)

    if cmd == "build-acts":
        if len(args) < 2:
            print("请指定 ACTS suite 名，例如: build-acts ActsAACommandPrintSyncTest", file=sys.stderr)
            return 1
        suite_name = args[1]
        product_name = "rk3568"
        system_size = "standard"
        run = True
        src_dir = None
        i = 2
        while i < len(args):
            if args[i] == "--src-dir" and i + 1 < len(args):
                src_dir = Path(args[i + 1]).expanduser().resolve()
                i += 2
                continue
            if args[i] == "--product-name" and i + 1 < len(args):
                product_name = args[i + 1]
                i += 2
                continue
            if args[i] == "--system-size" and i + 1 < len(args):
                system_size = args[i + 1]
                i += 2
                continue
            if args[i] == "--no-run":
                run = False
                i += 1
                continue
            i += 1
        return cmd_build_acts(
            suite_name=suite_name,
            product_name=product_name,
            system_size=system_size,
            run=run,
            src_dir=src_dir,
        )

    print(f"未知命令: {args[0]}", file=sys.stderr)
    show_help()
    return 1


if __name__ == "__main__":
    sys.exit(main())
