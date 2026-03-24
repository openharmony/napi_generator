#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
从全工程 BUILD.gn 扫描 ohos_executable，并与 bundle.json 中声明的 GN 标签关联，
生成 Markdown 报告（名字、子系统、部件、编译路径、编译选项摘要、main 用法启发式摘要）。
"""
from __future__ import annotations

import json
import re
import sys
from collections import defaultdict
from datetime import datetime
from pathlib import Path

# 与 ohanalysis 主脚本一致的排除项
EXCLUDE_TOP = ("kernel", "third_party", "applications", "out")

# executables 未指定 --prefix 且未使用 --full-src 时的默认扫描顶层目录（并集）
DEFAULT_EXECUTABLE_PREFIXES: tuple[str, ...] = (
    "base",
    "build",
    "developtools",
    "device",
    "drivers",
    "foundation",
    "test",
    "productdefine",
)

OHOS_EXE_RE = re.compile(
    r"ohos_executable\s*\(\s*\"([^\"]+)\"\s*\)\s*\{",
    re.MULTILINE,
)
PART_NAME_RE = re.compile(r"^\s*part_name\s*=\s*\"([^\"]+)\"", re.MULTILINE)
SUBSYS_NAME_RE = re.compile(r"^\s*subsystem_name\s*=\s*\"([^\"]+)\"", re.MULTILINE)
OUTPUT_NAME_RE = re.compile(r"^\s*output_name\s*=\s*\"([^\"]+)\"", re.MULTILINE)
def parse_sources_list(block: str) -> list[str]:
    if "sources" not in block:
        return []
    idx = block.find("sources")
    sub = block[idx:]
    lb = sub.find("[")
    if lb < 0:
        return []
    depth = 0
    for i in range(lb, len(sub)):
        if sub[i] == "[":
            depth += 1
        elif sub[i] == "]":
            depth -= 1
            if depth == 0:
                inner = sub[lb + 1 : i]
                return re.findall(r'"([^"]+\.(?:cpp|c|cc|cxx))"', inner)
    return []


def parse_install_bin_name(block: str, target_name: str) -> str:
    """安装到镜像中的可执行文件名：GN output_name，缺省为 target 名（忽略含变量的写法）。"""
    m = OUTPUT_NAME_RE.search(block)
    if not m:
        return target_name
    val = m.group(1).strip()
    if not val or "$" in val:
        return target_name
    return val


def discover_phone_system_roots(src_root: Path, out_product: str | None) -> list[Path]:
    """
    编译产物中 phone 形态 system 分区内容目录：
    src/out/<产品>/packages/phone/system/
    """
    out = src_root / "out"
    if not out.is_dir():
        return []
    roots: list[Path] = []
    if out_product:
        p = out / out_product.strip("/") / "packages" / "phone" / "system"
        if p.is_dir():
            roots.append(p.resolve())
        return roots
    for child in sorted(out.iterdir()):
        if not child.is_dir():
            continue
        p = child / "packages" / "phone" / "system"
        if p.is_dir():
            roots.append(p.resolve())
    return roots


def index_phone_system_basenames(system_roots: list[Path]) -> dict[str, list[str]]:
    """basename -> 出现过的 out 产品目录名（如 rk3568），用于合并多产品。"""
    acc: dict[str, set[str]] = defaultdict(set)
    for root in system_roots:
        try:
            product = root.parts[-4]
        except IndexError:
            product = "?"
        try:
            for f in root.rglob("*"):
                if f.is_file():
                    acc[f.name].add(product)
        except OSError:
            continue
    return {k: sorted(v) for k, v in acc.items()}


def format_phone_system_cell(
    install_bin: str,
    index: dict[str, list[str]],
    system_roots: list[Path] | None,
) -> str:
    if system_roots is None:
        return "—（已 `--skip-phone-system`）"
    if not system_roots:
        return "未检测（无 `out/<产品>/packages/phone/system`）"
    prods = index.get(install_bin)
    if prods:
        ps = ",".join(prods)
        return f"**是**（`{install_bin}`，`out/{ps}/packages/phone/system/…`）"
    return f"**否**（无同名 `{install_bin}`）"


def split_prefix_cli_arg(value: str) -> list[str]:
    """--prefix 参数：支持英文逗号分隔多个相对 src 的目录（并集）。"""
    return [p.strip() for p in value.split(",") if p.strip()]


def should_skip_path(p: Path) -> bool:
    parts = p.parts
    if "third_party" in parts or "out" in parts or ".git" in parts:
        return True
    return False


def iter_build_gn(
    src_root: Path,
    path_prefix: str | list[str] | None = None,
):
    """path_prefix: 单个或列表，如 foundation/communication；多前缀为目录并集（去重）。"""
    if path_prefix:
        prefixes = (
            [path_prefix.strip("/")]
            if isinstance(path_prefix, str)
            else [p.strip("/") for p in path_prefix if p and str(p).strip()]
        )
        seen: set[Path] = set()
        for pfx in prefixes:
            start = src_root / pfx
            if not start.is_dir():
                continue
            for f in start.rglob("BUILD.gn"):
                if should_skip_path(f):
                    continue
                key = f.resolve()
                if key in seen:
                    continue
                seen.add(key)
                yield f
        return
    for entry in src_root.iterdir():
        if not entry.is_dir() or entry.name.startswith("."):
            continue
        if entry.name in EXCLUDE_TOP:
            continue
        for f in entry.rglob("BUILD.gn"):
            if should_skip_path(f):
                continue
            yield f


def gn_label_for(build_gn: Path, src_root: Path, target_name: str) -> str:
    rel = build_gn.parent.relative_to(src_root).as_posix()
    return f"//{rel}:{target_name}"


def find_matching_brace(text: str, open_brace_idx: int) -> int:
    depth = 0
    i = open_brace_idx
    while i < len(text):
        c = text[i]
        if c == "{":
            depth += 1
        elif c == "}":
            depth -= 1
            if depth == 0:
                return i
        i += 1
    return -1


def extract_ohos_executable_blocks(build_gn_text: str) -> list[tuple[str, str]]:
    """返回 [(target_name, block_inner_text), ...]"""
    out = []
    for m in OHOS_EXE_RE.finditer(build_gn_text):
        name = m.group(1)
        brace_open = build_gn_text.find("{", m.end() - 1)
        if brace_open < 0:
            continue
        close = find_matching_brace(build_gn_text, brace_open)
        if close < 0:
            continue
        block = build_gn_text[brace_open + 1 : close]
        out.append((name, block))
    return out


def summarize_build_options(block: str) -> str:
    """提取 sanitize / cflags / defines / external_deps 等简要信息。"""
    bits: list[str] = []
    if re.search(r"sanitize\s*=\s*\{", block):
        bits.append("sanitize={...}")
    for key in ("cflags_cc", "cflags", "defines", "include_dirs"):
        if re.search(rf"^\s*{key}\s*=", block, re.MULTILINE):
            bits.append(f"{key}:…")
    ed_sec = re.search(r"external_deps\s*=\s*\[([\s\S]*?)\]", block)
    if ed_sec:
        ed = re.findall(r"\"([^\"]+:[^\"]+)\"", ed_sec.group(1))
        if ed:
            bits.append("external_deps:" + ",".join(ed[:5]) + ("…" if len(ed) > 5 else ""))
    return "; ".join(bits) if bits else "(默认/未标注关键选项)"


def collect_gn_labels_from_bundle(obj, out: set[str]) -> None:
    if isinstance(obj, str):
        s = obj.strip()
        if s.startswith("//") and ":" in s and re.match(r"^//[a-zA-Z0-9_./\-]+:[a-zA-Z0-9_./\-]+$", s):
            out.add(s)
        return
    if isinstance(obj, dict):
        for v in obj.values():
            collect_gn_labels_from_bundle(v, out)
    elif isinstance(obj, list):
        for v in obj:
            collect_gn_labels_from_bundle(v, out)


def bundle_label_to_meta(src_root: Path) -> dict[str, list[dict]]:
    """label -> [{subsystem, part, bundle_relpath}, ...]"""
    mapping: dict[str, list[dict]] = defaultdict(list)
    bundles: list[Path] = []
    for entry in src_root.iterdir():
        if not entry.is_dir() or entry.name.startswith("."):
            continue
        if entry.name in EXCLUDE_TOP:
            continue
        for f in entry.rglob("bundle.json"):
            if should_skip_path(f):
                continue
            bundles.append(f)
    for bp in bundles:
        try:
            data = json.loads(bp.read_text(encoding="utf-8", errors="ignore"))
        except Exception:
            continue
        comp = data.get("component") or {}
        subsystem = comp.get("subsystem") or ""
        part = comp.get("name") or ""
        labels: set[str] = set()
        collect_gn_labels_from_bundle(data, labels)
        try:
            rel = bp.relative_to(src_root).as_posix()
        except ValueError:
            rel = str(bp)
        for lb in labels:
            mapping[lb].append(
                {
                    "subsystem": subsystem,
                    "part": part,
                    "bundle": rel,
                }
            )
    return mapping


# C/C++ 常见「子命令表」：{"cmd_name", HandlerFunc, "usage line"...}
_CLI_TABLE_ROW = re.compile(
    r'\{\s*"([a-z][a-z0-9_-]{1,})"\s*,\s*[A-Za-z_][A-Za-z0-9_]*\s*,',
    re.MULTILINE,
)


def extract_cli_dispatch_usage(all_source_text: str) -> str | None:
    """
    从源码中识别「argc/argv + 命令表 + Help」类 CLI（无固定 Usage: 注释时）：
    匹配形如 {"subcmd", HandleXxx, "说明..."} 的静态表，并结合 Help/strcmp(argv) 等上下文。
    """
    text = all_source_text
    if not text.strip():
        return None
    names = _CLI_TABLE_ROW.findall(text)
    if len(names) < 2:
        return None
    # 降低误报：需具备典型 CLI 分发特征之一
    dispatch_hint = bool(
        re.search(r"\bHelp\s*\(", text)
        or re.search(r"HandleUserCommand\s*\(", text)
        or (re.search(r"\bstrcmp\s*\(", text) and "argv" in text)
        or "CMD_IDX" in text
        or re.search(r"argv\s*\[\s*\d+\s*\]", text)
    )
    if not dispatch_hint:
        return None
    seen: set[str] = set()
    uniq: list[str] = []
    for n in names:
        if len(n) < 2 or n in seen:
            continue
        seen.add(n)
        uniq.append(n)
    if len(uniq) < 2:
        return None
    preview = ", ".join(uniq[:15])
    if len(uniq) > 15:
        preview += f"，…共{len(uniq)}个子命令"
    else:
        preview += f"（共{len(uniq)}个）"
    return (
        "CLI 子命令分发: main 校验 argc/argv 后调用 Help() 或查表；"
        f"命令名见静态表项: {preview}。"
        "各子命令的说明在同表第三列字符串（或由 Help 打印）。"
    )[:500]


def infer_usage_from_main(gn_dir: Path, source_files: list[str]) -> str:
    """启发式：查找含 main 的源文件，抽取 Usage/--help/命令表/注释/首段逻辑说明。"""
    combined_chunks: list[str] = []
    ordered = sorted(source_files, key=lambda x: (0 if "main" in x.lower() else 1, x))
    for sf in ordered:
        fp = gn_dir / sf
        if not fp.is_file():
            continue
        try:
            text = fp.read_text(encoding="utf-8", errors="ignore")
        except Exception:
            continue
        combined_chunks.append(text)

    combined = "\n".join(combined_chunks)

    # 1) 无「Usage:」注释时，优先识别 G_DS_CLI_CMDS 类命令表 + Help
    cli_usage = extract_cli_dispatch_usage(combined)
    if cli_usage:
        return cli_usage

    for sf in ordered:
        fp = gn_dir / sf
        if not fp.is_file():
            continue
        try:
            text = fp.read_text(encoding="utf-8", errors="ignore")
        except Exception:
            continue
        if "main(" not in text and "MAIN(" not in text:
            continue
        # 注释/文档中的 Usage（避免匹配源码里的 .usage 成员名）
        usage_m = re.search(
            r"(?<![A-Za-z0-9_\.])(?:Usage|USAGE|用法)[:：]?\s*([^\n]+)",
            text,
            re.IGNORECASE,
        )
        if usage_m:
            cap = usage_m.group(1).strip()
            # 过滤误匹配（如仅标点）
            if len(cap) >= 2 and not re.match(r"^[\s\)\];,]+$", cap):
                return cap[:300]
        help_lines = re.findall(r"[\"']([^\"']*(?:--help|-h)[^\"']*)[\"']", text)
        if help_lines:
            return "CLI 提示: " + "; ".join(help_lines[:3])[:300]
        # 前几行注释
        head = "\n".join(text.splitlines()[:40])
        if "Copyright" in head or "Licensed" in head:
            lines = text.splitlines()
            for i, ln in enumerate(lines[:60]):
                if "main(" in ln:
                    snippet = "\n".join(lines[max(0, i - 5) : i + 15])
                    return "见 main 附近逻辑(摘录): " + re.sub(r"\s+", " ", snippet)[:400]
        return "可执行入口见源码 main()（未匹配到固定 Usage 字符串）"
    return "未找到 main 或源码未读"


def scan_executables(
    src_root: Path,
    only_in_bundle: bool,
    path_prefix: str | list[str] | None = None,
    phone_bin_index: dict[str, list[str]] | None = None,
    phone_system_roots: list[Path] | None = None,
    # phone_system_roots: None=跳过检测; []=未找到目录; 非空=已索引
) -> tuple[list[dict], list[dict]]:
    """
    返回 (matched_rows, unmatched_rows)，每项 dict 含:
    name, label, subsystem, part, bundle_paths, build_gn_rel, options, usage,
    install_bin, phone_system（是否在 out/*/packages/phone/system 下存在同名文件）
    """
    roots = phone_system_roots
    pidx = phone_bin_index if phone_bin_index is not None else {}
    label_meta = bundle_label_to_meta(src_root)
    matched: list[dict] = []
    unmatched: list[dict] = []

    for build_gn in iter_build_gn(src_root, path_prefix=path_prefix):
        try:
            txt = build_gn.read_text(encoding="utf-8", errors="ignore")
        except Exception:
            continue
        if "ohos_executable" not in txt:
            continue
        gn_dir = build_gn.parent
        rel_build = build_gn.relative_to(src_root).as_posix()
        for target_name, block in extract_ohos_executable_blocks(txt):
            label = gn_label_for(build_gn, src_root, target_name)
            sources = parse_sources_list(block)
            options = summarize_build_options(block)
            pn = PART_NAME_RE.search(block)
            sn = SUBSYS_NAME_RE.search(block)
            part_gn = pn.group(1) if pn else ""
            sub_gn = sn.group(1) if sn else ""

            metas = label_meta.get(label, [])
            usage = infer_usage_from_main(gn_dir, sources) if sources else "(无 sources 列表，无法定位 main)"
            install_bin = parse_install_bin_name(block, target_name)
            phone_cell = format_phone_system_cell(install_bin, pidx, roots)

            row = {
                "name": target_name,
                "label": label,
                "subsystem": "",
                "part": "",
                "bundle_paths": "",
                "build_gn_rel": rel_build,
                "options": options,
                "usage": usage,
                "part_gn": part_gn,
                "subsystem_gn": sub_gn,
                "install_bin": install_bin,
                "phone_system": phone_cell,
            }
            if metas:
                subs = sorted({m["subsystem"] for m in metas if m["subsystem"]})
                parts = sorted({m["part"] for m in metas if m["part"]})
                bundles = sorted({m["bundle"] for m in metas})
                row["subsystem"] = ", ".join(subs) or sub_gn
                row["part"] = ", ".join(parts) or part_gn
                row["bundle_paths"] = "<br>".join(bundles[:8]) + ("…" if len(bundles) > 8 else "")
                matched.append(row)
            else:
                row["subsystem"] = sub_gn or "(未在 bundle 出现)"
                row["part"] = part_gn or "(未在 bundle 出现)"
                row["bundle_paths"] = "—"
                unmatched.append(row)
            if not only_in_bundle and not metas:
                pass  # already in unmatched

    matched.sort(key=lambda x: (x["subsystem"], x["part"], x["name"]))
    unmatched.sort(key=lambda x: (x["name"],))
    return matched, unmatched


def _fmt_scan_scope(path_prefix: str | list[str] | None) -> str:
    if path_prefix is None:
        return "全 src（排除顶层 kernel/third_party/applications/out）"
    if isinstance(path_prefix, str):
        return "仅 " + path_prefix
    return "仅以下目录并集: " + ", ".join(path_prefix)


def _phone_system_doc_line(
    src_root: Path,
    phone_roots: list[Path] | None,
    out_product: str | None,
) -> str:
    if phone_roots is None:
        return "- **phone system 镜像**: 已 `--skip-phone-system`，未比对编译产物。"
    if not phone_roots:
        return (
            "- **phone system 镜像**: 未找到 `out/"
            + (f"{out_product}/" if out_product else "")
            + "packages/phone/system`；「phone system」列显示为未检测。"
        )
    rels = []
    for r in phone_roots:
        try:
            rels.append(r.relative_to(src_root).as_posix())
        except ValueError:
            rels.append(str(r))
    prod_hint = f"限定产品 `{out_product}`" if out_product else "自动发现 `out` 下全部产品"
    return (
        "- **phone system 镜像**: "
        + prod_hint
        + "；将 GN 中 `output_name`（缺省为 target 名）与以下目录内**任意路径**上的文件名（basename）比对："
        + " ".join(f"`{x}`" for x in rels)
        + "。"
    )


def write_md(
    out_path: Path,
    src_root: Path,
    matched: list[dict],
    unmatched: list[dict],
    only_in_bundle: bool,
    path_prefix: str | list[str] | None,
    phone_system_roots: list[Path] | None = None,
    out_product: str | None = None,
) -> None:
    ts = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    proots = phone_system_roots
    lines: list[str] = [
        "# ohos_executable 与 bundle.json 关联报告",
        "",
        f"- 生成时间: {ts}",
        f"- 源码根: `{src_root}`",
        f"- 范围: 扫描顶层排除 {EXCLUDE_TOP} 下所有 `BUILD.gn` 中的 `ohos_executable`",
        f"- **关联规则**: GN 标签 `//目录:目标名` 与任意 `bundle.json` 中出现的字符串标签一致则视为该部件依赖。",
        f"- **扫描范围**: `{_fmt_scan_scope(path_prefix)}`",
        _phone_system_doc_line(src_root, proots, out_product),
        f"- **统计**: 在 bundle 中声明的 `ohos_executable` **{len(matched)}** 个；"
        + (f"未出现在任一 bundle 的 **{len(unmatched)}** 个（见附录）。" if not only_in_bundle else ""),
        "",
        "## 一、已在 bundle.json 中声明的 ohos_executable",
        "",
        f"共 **{len(matched)}** 个。",
        "",
        "| 序号 | phone system | 目标名 | 子系统 | 部件(part) | GN 标签 | BUILD.gn 路径 | 编译选项摘要 | bundle.json 位置 | 用法说明(启发式) |",
        "|------|--------------|--------|--------|--------------|---------|---------------|--------------|------------------|-------------------|",
    ]
    for i, r in enumerate(matched, 1):
        usage = (r["usage"] or "").replace("|", "\\|").replace("\n", " ")
        ps = (r.get("phone_system") or "—").replace("|", "\\|")
        lines.append(
            f"| {i} | {ps} | `{r['name']}` | {r['subsystem']} | {r['part']} | `{r['label']}` | `{r['build_gn_rel']}` | {r['options']} | {r['bundle_paths']} | {usage[:500]}{'…' if len(usage)>500 else ''} |"
        )
    if not only_in_bundle and unmatched:
        lines.extend(
            [
                "",
                "## 附录：未在任一 bundle.json 中出现的 ohos_executable",
                "",
                f"共 **{len(unmatched)}** 个（可能为测试工具、示例或未纳入部件描述）。",
                "",
                "| 序号 | phone system | 目标名 | 子系统(BUILD.gn) | 部件(part_name) | GN 标签 | BUILD.gn 路径 | 编译选项摘要 | 用法说明(启发式) |",
                "|------|--------------|--------|------------------|-----------------|---------|---------------|--------------|------------------|",
            ]
        )
        for i, r in enumerate(unmatched, 1):
            usage = (r["usage"] or "").replace("|", "\\|").replace("\n", " ")
            ps = (r.get("phone_system") or "—").replace("|", "\\|")
            lines.append(
                f"| {i} | {ps} | `{r['name']}` | {r.get('subsystem_gn') or '-'} | {r.get('part_gn') or '-'} | `{r['label']}` | `{r['build_gn_rel']}` | {r['options']} | {usage[:400]}{'…' if len(usage)>400 else ''} |"
            )
    lines.append("")
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text("\n".join(lines), encoding="utf-8")


def cmd_executables_report(
    src_dir: Path | None,
    only_in_bundle: bool,
    out_file: str | None,
    path_prefix: str | list[str] | None = None,
    out_product: str | None = None,
    skip_phone_system: bool = False,
    full_src: bool = False,
) -> int:
    script_dir = Path(__file__).resolve().parent
    # 与 ohanalysis.py 一致: skills/ohanalysis -> src
    src_root = src_dir.expanduser().resolve() if src_dir else script_dir.parent.parent.parent
    if not src_root.is_dir():
        print(f"[executables] 源码根不存在: {src_root}", file=sys.stderr)
        return 1
    if full_src:
        scan_prefix: str | list[str] | None = None
    elif path_prefix is not None:
        scan_prefix = path_prefix
    else:
        scan_prefix = list(DEFAULT_EXECUTABLE_PREFIXES)
        print(
            "[executables] 使用默认扫描目录(并集): "
            + ", ".join(DEFAULT_EXECUTABLE_PREFIXES),
            file=sys.stderr,
        )
    phone_roots: list[Path] | None = None
    phone_index: dict[str, list[str]] = {}
    if skip_phone_system:
        phone_roots = None
    else:
        phone_roots = discover_phone_system_roots(src_root, out_product)
        if phone_roots:
            print(
                f"[executables] phone system 检测: {len(phone_roots)} 个目录，正在索引文件…",
                file=sys.stderr,
            )
            phone_index = index_phone_system_basenames(phone_roots)
            print(f"[executables] phone system 索引 basename 数: {len(phone_index)}", file=sys.stderr)
        else:
            phone_roots = []
    print(f"[executables] 扫描 {src_root} …（可能较慢）")
    matched, unmatched = scan_executables(
        src_root,
        only_in_bundle=only_in_bundle,
        path_prefix=scan_prefix,
        phone_bin_index=phone_index,
        phone_system_roots=phone_roots,
    )
    if only_in_bundle:
        unmatched = []
    outp = Path(out_file) if out_file else script_dir / "ohos_executable_8dirs.md"
    write_md(
        outp,
        src_root,
        matched,
        unmatched,
        only_in_bundle=only_in_bundle,
        path_prefix=scan_prefix,
        phone_system_roots=phone_roots,
        out_product=out_product,
    )
    print(f"[executables] 已在 bundle 中关联: {len(matched)} 个")
    if not only_in_bundle:
        print(f"[executables] 未在 bundle 中出现: {len(unmatched)} 个（见报告附录）")
    print(f"[executables] 报告已写入: {outp.resolve()}")
    return 0


def parse_executables_argv(argv: list[str]) -> tuple:
    src_dir = None
    only_in_bundle = False
    out_file = None
    out_product = None
    skip_phone_system = False
    full_src = False
    path_prefixes: list[str] = []
    i = 0
    while i < len(argv):
        if argv[i] == "--src-dir" and i + 1 < len(argv):
            src_dir = Path(argv[i + 1])
            i += 2
            continue
        if argv[i] == "--prefix" and i + 1 < len(argv):
            path_prefixes.extend(split_prefix_cli_arg(argv[i + 1]))
            i += 2
            continue
        if argv[i] == "--full-src":
            full_src = True
            i += 1
            continue
        if argv[i] == "--out-product" and i + 1 < len(argv):
            out_product = argv[i + 1]
            i += 2
            continue
        if argv[i] == "--skip-phone-system":
            skip_phone_system = True
            i += 1
            continue
        if argv[i] == "--only-in-bundle":
            only_in_bundle = True
            i += 1
            continue
        if argv[i] == "-o" and i + 1 < len(argv):
            out_file = argv[i + 1]
            i += 2
            continue
        i += 1
    if full_src:
        path_prefix = None
    elif not path_prefixes:
        path_prefix = None
    elif len(path_prefixes) == 1:
        path_prefix = path_prefixes[0]
    else:
        path_prefix = path_prefixes
    return src_dir, only_in_bundle, out_file, path_prefix, out_product, skip_phone_system, full_src


if __name__ == "__main__":
    src, only_b, out, pfx, op, sk, fs = parse_executables_argv(sys.argv[1:])
    sys.exit(
        cmd_executables_report(
            src,
            only_b,
            out,
            path_prefix=pfx,
            out_product=op,
            skip_phone_system=sk,
            full_src=fs,
        )
    )
