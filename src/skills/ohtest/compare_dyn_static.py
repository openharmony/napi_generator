#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
对比 OpenHarmony ACTS web（或任意 subsystem）下动态 / 静态套件的可对应用例，并统计耗时差。

配对规则：
  - 目录：``foo`` <-> ``foo_static``（同父目录，且两侧均有 BUILD.gn）
  - 套件名：两侧 BUILD.gn 的 hap_name / ohos_js_app(_static)_suite
  - 用例：从 ``*.test.ets`` 提取 ``it('name')``；静态名去掉 ``Static`` 后与动态名相等则配对
    例：onInactive <-> onInactiveStatic，testOnce001 <-> testOnceStatic001

Usage:
  # 仅统计可配对套件/用例
  python3 compare_dyn_static.py stats --web-dir <src>/test/xts/acts/web

  # 跑可配对套件并对比耗时（需设备 + 已编好的 HAP）
  python3 compare_dyn_static.py run --src-dir <src> --sn <device> [--suite ActsWebComponentLifeCycleTest]

  # 仅根据已有 summary_report.xml 对比（不跑设备）
  python3 compare_dyn_static.py compare --dyn-report DIR --sta-report DIR [--suite NAME]

  python3 compare_dyn_static.py help
"""

from __future__ import annotations

import argparse
import csv
import json
import re
import subprocess
import sys
import time
import xml.etree.ElementTree as ET
from dataclasses import dataclass, field
from datetime import datetime
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent
# napi_generator/src/skills/ohtest -> 默认不假设等于 OH 源码根；优先 --src-dir
DEFAULT_PRODUCT = "rk3568"

IT_OR_DESCRIBE_RE = re.compile(
    r"""\bdescribe\(\s*['\"]([^'\"]+)['\"]|\bit\(\s*['\"]([^'\"]+)['\"]"""
)
SUITE_HAP_RE = re.compile(r'hap_name\s*=\s*"([^"]+)"')
SUITE_DECL_RE = re.compile(r'ohos_js_app(?:_static)?_suite\("([^"]+)"\)')


@dataclass
class CaseRef:
    file: str
    describe: str
    name: str

    @property
    def key(self) -> str:
        return normalize_case_name(self.name)


@dataclass
class SuitePair:
    dyn_dir: str
    dyn_suite: str
    sta_dir: str
    sta_suite: str
    paired: list[tuple[CaseRef, CaseRef]] = field(default_factory=list)
    dyn_only: list[CaseRef] = field(default_factory=list)
    sta_only: list[CaseRef] = field(default_factory=list)


def normalize_case_name(name: str) -> str:
    """静态用例名去掉 Static 后与动态对齐。"""
    return name.replace("Static", "")


def resolve_src_root(src_dir: Path | None) -> Path:
    if src_dir is not None:
        return src_dir.resolve()
    # 兼容：若脚本被放到 <src>/napi_generator/... 则向上找 test/xts/acts
    p = SCRIPT_DIR
    for _ in range(8):
        if (p / "test" / "xts" / "acts").is_dir():
            return p
        if p.parent == p:
            break
        p = p.parent
    return Path.cwd()


def default_web_dir(src_root: Path) -> Path:
    return src_root / "test" / "xts" / "acts" / "web"


def default_acts_dir(src_root: Path, product: str = DEFAULT_PRODUCT) -> Path:
    return src_root / "out" / product / "suites" / "acts" / "acts"


def parse_suite_name(build_gn: Path) -> str | None:
    """优先取 JS HAP 套件名（ohos_js_app(_static)_suite），避免误用同目录 C++ assist 套件。"""
    text = build_gn.read_text(encoding="utf-8", errors="ignore")
    m = re.search(r'ohos_js_app(?:_static)?_suite\("([^"]+)"\)', text)
    if m:
        chunk = text[m.end():m.end() + 1200]
        hm = SUITE_HAP_RE.search(chunk)
        return hm.group(1) if hm else m.group(1)
    m = SUITE_HAP_RE.search(text)
    if m:
        return m.group(1)
    m = SUITE_DECL_RE.search(text)
    return m.group(1) if m else None


def extract_cases(suite_dir: Path) -> list[CaseRef]:
    cases: list[CaseRef] = []
    for ets in suite_dir.rglob("*.test.ets"):
        text = ets.read_text(encoding="utf-8", errors="ignore")
        describe = ""
        rel = str(ets.relative_to(suite_dir))
        for m in IT_OR_DESCRIBE_RE.finditer(text):
            if m.group(1) is not None:
                describe = m.group(1)
            else:
                cases.append(CaseRef(file=rel, describe=describe, name=m.group(2)))
    return cases


def _pair_cases(
    dyn_cases: list[CaseRef], sta_cases: list[CaseRef]
) -> tuple[list[tuple[CaseRef, CaseRef]], list[CaseRef], list[CaseRef]]:
    dmap: dict[str, list[CaseRef]] = {}
    smap: dict[str, list[CaseRef]] = {}
    for c in dyn_cases:
        dmap.setdefault(c.key, []).append(c)
    for c in sta_cases:
        smap.setdefault(c.key, []).append(c)
    paired: list[tuple[CaseRef, CaseRef]] = []
    for key in sorted(set(dmap) & set(smap)):
        dlist = dmap.get(key) or []
        slist = smap.get(key) or []
        n = min(len(dlist), len(slist))
        for i in range(n):
            paired.append((dlist[i], slist[i]))
    dyn_only = [c for k, vs in dmap.items() if k not in smap for c in vs]
    sta_only = [c for k, vs in smap.items() if k not in dmap for c in vs]
    return paired, dyn_only, sta_only


def discover_suite_pairs(web_dir: Path) -> list[SuitePair]:
    pairs: list[SuitePair] = []
    static_dirs = sorted(
        p for p in web_dir.rglob("*_static") if p.is_dir() and (p / "BUILD.gn").is_file()
    )
    for sd in static_dirs:
        if not sd.name.endswith("_static"):
            continue
        dd = sd.parent / sd.name[: -len("_static")]
        if not dd.is_dir() or not (dd / "BUILD.gn").is_file():
            continue
        dyn_suite = parse_suite_name(dd / "BUILD.gn")
        sta_suite = parse_suite_name(sd / "BUILD.gn")
        if not dyn_suite or not sta_suite:
            continue
        paired, dyn_only, sta_only = _pair_cases(extract_cases(dd), extract_cases(sd))
        pairs.append(
            SuitePair(
                dyn_dir=str(dd.relative_to(web_dir)),
                dyn_suite=dyn_suite,
                sta_dir=str(sd.relative_to(web_dir)),
                sta_suite=sta_suite,
                paired=paired,
                dyn_only=dyn_only,
                sta_only=sta_only,
            )
        )
    return pairs


def load_report_cases(report_dir: Path) -> dict[str, dict]:
    """name -> {time, pass, message, suite}"""
    xml_path = report_dir / "summary_report.xml"
    if not xml_path.is_file():
        result = report_dir / "result"
        if result.is_dir():
            cases: dict[str, dict] = {}
            for xp in result.glob("*.xml"):
                cases.update(_parse_junit_xml(xp))
            return cases
        raise FileNotFoundError(f"summary_report.xml not found: {report_dir}")
    return _parse_junit_xml(xml_path)


def _testcase_passed(tc: ET.Element) -> bool:
    result = (tc.get("result") or "").lower()
    if result == "false":
        return False
    if tc.find("failure") is not None or tc.find("error") is not None:
        return False
    return result in ("true", "pass", "passed", "")


def _parse_junit_xml(xml_path: Path) -> dict[str, dict]:
    root = ET.parse(xml_path).getroot()
    cases: dict[str, dict] = {}
    suites = root.findall("testsuite")
    if not suites and root.tag == "testsuite":
        suites = [root]
    for ts in suites:
        suite_name = ts.get("name") or ""
        for tc in ts.findall("testcase"):
            name = tc.get("name") or ""
            cases[name] = {
                "time": float(tc.get("time") or 0),
                "pass": _testcase_passed(tc),
                "message": (tc.get("message") or "")[:200],
                "suite": suite_name,
            }
    return cases


def detect_device_sn(explicit: str | None) -> str | None:
    if explicit:
        return explicit
    try:
        out = subprocess.check_output(["hdc", "list", "targets"], text=True, errors="replace")
    except (OSError, subprocess.CalledProcessError):
        return None
    for line in out.splitlines():
        line = line.strip()
        if not line or line.startswith("[") or "Empty" in line:
            continue
        # skip offline markers
        if "\t" in line:
            line = line.split("\t", 1)[0].strip()
        return line
    return None


def run_xdevice(
    acts_dir: Path,
    suite: str,
    sn: str,
    report_dir: Path,
    ta: str | None = None,
) -> tuple[int, Path]:
    report_dir.mkdir(parents=True, exist_ok=True)
    cmd = [
        sys.executable,
        "-m",
        "xdevice",
        "run",
        "-l",
        suite,
        "-sn",
        sn,
        "-rp",
        str(report_dir),
    ]
    if ta:
        cmd.extend(["-ta", ta])
    print(f"[run] {' '.join(cmd)}", flush=True)
    proc = subprocess.run(cmd, cwd=acts_dir, text=True, encoding="utf-8", errors="replace")
    return proc.returncode, report_dir


def build_ta_for_paired(pair: SuitePair, side: str) -> str | None:
    """构造 -ta class:Describe#case,... 仅跑可对应用例。describe 缺失则退化为整套。"""
    items: list[str] = []
    for d, s in pair.paired:
        ref = d if side == "dyn" else s
        if not ref.describe:
            return None
        items.append(f"{ref.describe}#{ref.name}")
    if not items:
        return None
    # xdevice 过滤：class:a#b,c#d
    return "class:" + ",".join(items)


def _write_case_pairs_csv(csv_path: Path, pairs: list[SuitePair]) -> None:
    with csv_path.open("w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(
            [
                "dyn_suite",
                "dyn_case",
                "dyn_describe",
                "sta_suite",
                "sta_case",
                "sta_describe",
                "dyn_dir",
                "sta_dir",
            ]
        )
        for p in pairs:
            for d, s in p.paired:
                w.writerow(
                    [
                        p.dyn_suite,
                        d.name,
                        d.describe,
                        p.sta_suite,
                        s.name,
                        s.describe,
                        p.dyn_dir,
                        p.sta_dir,
                    ]
                )


def _write_stats_json_md(
    json_path: Path,
    md_path: Path,
    web: Path,
    pairs: list[SuitePair],
    total_paired: int,
    total_dyn_only: int,
    total_sta_only: int,
    with_pairs: int,
) -> None:
    payload = {
        "web_dir": str(web),
        "suite_pairs": len(pairs),
        "case_pairs": total_paired,
        "dyn_only_cases": total_dyn_only,
        "sta_only_cases": total_sta_only,
        "suites": [
            {
                "dyn_suite": p.dyn_suite,
                "sta_suite": p.sta_suite,
                "dyn_dir": p.dyn_dir,
                "sta_dir": p.sta_dir,
                "paired": len(p.paired),
                "dyn_only": len(p.dyn_only),
                "sta_only": len(p.sta_only),
            }
            for p in pairs
        ],
    }
    json_path.write_text(json.dumps(payload, indent=2, ensure_ascii=False), encoding="utf-8")
    lines = [
        "# Web 动态/静态用例配对统计",
        "",
        f"- web_dir: `{web}`",
        f"- 套件对数: **{len(pairs)}**",
        f"- 有 ≥1 对应用例的套件: **{with_pairs}**",
        f"- 可对应用例数: **{total_paired}**",
        f"- 仅动态: {total_dyn_only}",
        f"- 仅静态: {total_sta_only}",
        "",
        "| dyn_suite | sta_suite | paired | dyn_only | sta_only |",
        "|---|---|---:|---:|---:|",
    ]
    for p in sorted(pairs, key=lambda x: -len(x.paired)):
        lines.append(
            f"| {p.dyn_suite} | {p.sta_suite} | {len(p.paired)} | {len(p.dyn_only)} | {len(p.sta_only)} |"
        )
    md_path.write_text("\n".join(lines) + "\n", encoding="utf-8")


def _write_stats_outputs(
    web: Path,
    src: Path,
    product: str,
    pairs: list[SuitePair],
    out_arg: str | None,
) -> None:
    total_paired = sum(len(p.paired) for p in pairs)
    total_dyn_only = sum(len(p.dyn_only) for p in pairs)
    total_sta_only = sum(len(p.sta_only) for p in pairs)
    with_pairs = sum(1 for p in pairs if p.paired)
    print(f"web_dir: {web}")
    print(f"suite_pairs (dir foo <-> foo_static): {len(pairs)}")
    print(f"suite_pairs_with_>=1_case: {with_pairs}")
    print(f"case_pairs: {total_paired}")
    print(f"dyn_only_cases: {total_dyn_only}")
    print(f"sta_only_cases: {total_sta_only}")

    out_base = (
        Path(out_arg)
        if out_arg
        else src / "out" / product / "suites" / "acts" / "acts" / "reports" / "dyn_static_pair_stats"
    )
    out_base.mkdir(parents=True, exist_ok=True)
    stamp = datetime.now().strftime("%Y%m%d-%H%M%S")
    csv_path = out_base / f"case_pairs_{stamp}.csv"
    json_path = out_base / f"suite_pairs_{stamp}.json"
    md_path = out_base / f"summary_{stamp}.md"
    _write_case_pairs_csv(csv_path, pairs)
    _write_stats_json_md(
        json_path,
        md_path,
        web,
        pairs,
        total_paired,
        total_dyn_only,
        total_sta_only,
        with_pairs,
    )
    print(f"wrote: {csv_path}")
    print(f"wrote: {json_path}")
    print(f"wrote: {md_path}")


def cmd_stats(args: argparse.Namespace) -> int:
    src = resolve_src_root(Path(args.src_dir) if args.src_dir else None)
    web = Path(args.web_dir) if args.web_dir else default_web_dir(src)
    if not web.is_dir():
        print(f"web 目录不存在: {web}", file=sys.stderr)
        return 1
    pairs = discover_suite_pairs(web)
    if args.suite:
        pairs = [p for p in pairs if args.suite in (p.dyn_suite, p.sta_suite)]
    _write_stats_outputs(web, src, args.product, pairs, args.output)
    return 0


def compare_case_times(
    pairs: list[SuitePair],
    dyn_cases: dict[str, dict],
    sta_cases: dict[str, dict],
) -> list[dict]:
    rows: list[dict] = []
    for p in pairs:
        for d, s in p.paired:
            di = dyn_cases.get(d.name)
            si = sta_cases.get(s.name)
            if di is None and si is None:
                continue
            dt = di["time"] if di else None
            st = si["time"] if si else None
            delta = (st - dt) if (dt is not None and st is not None) else None
            rows.append(
                {
                    "dyn_suite": p.dyn_suite,
                    "sta_suite": p.sta_suite,
                    "dyn_case": d.name,
                    "sta_case": s.name,
                    "t_dyn": dt,
                    "t_sta": st,
                    "delta_sta_minus_dyn": delta,
                    "dyn_pass": di["pass"] if di else None,
                    "sta_pass": si["pass"] if si else None,
                    "dyn_msg": (di or {}).get("message", ""),
                    "sta_msg": (si or {}).get("message", ""),
                }
            )
    return rows


def print_compare_summary(rows: list[dict]) -> None:
    both = [r for r in rows if r["t_dyn"] is not None and r["t_sta"] is not None]
    print(f"compared_rows: {len(rows)} (both_sides: {len(both)})")
    if not both:
        return
    slower_sta = sum(1 for r in both if r["delta_sta_minus_dyn"] > 0.05)
    faster_sta = sum(1 for r in both if r["delta_sta_minus_dyn"] < -0.05)
    avg_d = sum(r["t_dyn"] for r in both) / len(both)
    avg_s = sum(r["t_sta"] for r in both) / len(both)
    avg_delta = sum(r["delta_sta_minus_dyn"] for r in both) / len(both)
    print(f"avg_dyn={avg_d:.3f}s avg_sta={avg_s:.3f}s avg_delta(sta-dyn)={avg_delta:.3f}s")
    print(f"sta_slower(>50ms): {slower_sta}  sta_faster(>50ms): {faster_sta}")
    # top slower / faster
    by_delta = sorted(both, key=lambda r: r["delta_sta_minus_dyn"], reverse=True)
    print("\nTop 10 sta slower:")
    for r in by_delta[:10]:
        print(
            f"  +{r['delta_sta_minus_dyn']:.3f}s  {r['dyn_case']}={r['t_dyn']:.3f} -> "
            f"{r['sta_case']}={r['t_sta']:.3f}"
        )
    print("\nTop 10 sta faster:")
    for r in by_delta[-10:][::-1]:
        print(
            f"  {r['delta_sta_minus_dyn']:.3f}s  {r['dyn_case']}={r['t_dyn']:.3f} -> "
            f"{r['sta_case']}={r['t_sta']:.3f}"
        )


def write_compare_csv(path: Path, rows: list[dict]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    cols = [
        "dyn_suite",
        "sta_suite",
        "dyn_case",
        "sta_case",
        "t_dyn",
        "t_sta",
        "delta_sta_minus_dyn",
        "dyn_pass",
        "sta_pass",
        "dyn_msg",
        "sta_msg",
    ]
    with path.open("w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=cols)
        w.writeheader()
        for r in rows:
            w.writerow(r)


def cmd_compare(args: argparse.Namespace) -> int:
    src = resolve_src_root(Path(args.src_dir) if args.src_dir else None)
    web = Path(args.web_dir) if args.web_dir else default_web_dir(src)
    pairs = discover_suite_pairs(web)
    if args.suite:
        pairs = [p for p in pairs if args.suite in (p.dyn_suite, p.sta_suite)]

    dyn_cases: dict[str, dict] = {}
    sta_cases: dict[str, dict] = {}
    if args.dyn_report:
        dyn_cases.update(load_report_cases(Path(args.dyn_report)))
    if args.sta_report:
        sta_cases.update(load_report_cases(Path(args.sta_report)))
    if args.session_json:
        session = json.loads(Path(args.session_json).read_text(encoding="utf-8"))
        for item in session.get("runs", []):
            if item.get("side") == "dyn" and item.get("report"):
                dyn_cases.update(load_report_cases(Path(item["report"])))
            if item.get("side") == "sta" and item.get("report"):
                sta_cases.update(load_report_cases(Path(item["report"])))

    rows = compare_case_times(pairs, dyn_cases, sta_cases)
    out = Path(args.output) if args.output else Path("dyn_static_compare.csv")
    write_compare_csv(out, rows)
    print_compare_summary(rows)
    print(f"wrote: {out}")
    return 0


def _filter_run_pairs(args: argparse.Namespace, web: Path) -> list[SuitePair]:
    pairs = discover_suite_pairs(web)
    if args.suite:
        pairs = [p for p in pairs if args.suite in (p.dyn_suite, p.sta_suite)]
    if args.only_paired_suites:
        pairs = [p for p in pairs if p.paired]
    if args.limit and args.limit > 0:
        pairs = pairs[: args.limit]
    return pairs


def _safe_load_report(report_dir: Path) -> dict[str, dict]:
    try:
        return load_report_cases(report_dir)
    except FileNotFoundError as e:
        print(f"[warn] {e}", flush=True)
        return {}


def _artifacts_ready(tc: Path, suite: str, side: str) -> bool:
    hap = tc / f"{suite}.hap"
    js = tc / f"{suite}.json"
    if hap.is_file() and js.is_file():
        return True
    print(
        f"[skip] missing {side} artifact hap={hap.is_file()} json={js.is_file()} ({suite})",
        flush=True,
    )
    return False


def _append_run_records(
    session: dict,
    pair: SuitePair,
    rp_dyn: Path,
    rp_sta: Path,
    rc_d: int,
    rc_s: int,
    t0: float,
    t1: float,
    t2: float,
) -> None:
    session["runs"].append(
        {
            "dyn_suite": pair.dyn_suite,
            "sta_suite": pair.sta_suite,
            "side": "dyn",
            "report": str(rp_dyn),
            "rc": rc_d,
            "wall_sec": round(t1 - t0, 3),
        }
    )
    session["runs"].append(
        {
            "dyn_suite": pair.dyn_suite,
            "sta_suite": pair.sta_suite,
            "side": "sta",
            "report": str(rp_sta),
            "rc": rc_s,
            "wall_sec": round(t2 - t1, 3),
        }
    )


def _run_one_pair(
    acts: Path,
    sn: str,
    tc: Path,
    session_dir: Path,
    session: dict,
    pair: SuitePair,
    idx: int,
    total: int,
    paired_only: bool,
    dyn_all: dict[str, dict],
    sta_all: dict[str, dict],
    all_pairs: list[SuitePair],
) -> None:
    print(
        f"\n===== [{idx}/{total}] {pair.dyn_suite} <-> {pair.sta_suite} "
        f"(paired={len(pair.paired)}) =====",
        flush=True,
    )
    if not _artifacts_ready(tc, pair.dyn_suite, "dyn"):
        return
    if not _artifacts_ready(tc, pair.sta_suite, "sta"):
        return

    ta_dyn = build_ta_for_paired(pair, "dyn") if paired_only else None
    ta_sta = build_ta_for_paired(pair, "sta") if paired_only else None
    if paired_only and (ta_dyn is None or ta_sta is None):
        print("[warn] describe 缺失，退化为整套执行", flush=True)
        ta_dyn = ta_sta = None

    rp_dyn = session_dir / f"{pair.dyn_suite}"
    rp_sta = session_dir / f"{pair.sta_suite}"
    t0 = time.time()
    rc_d, _ = run_xdevice(acts, pair.dyn_suite, sn, rp_dyn, ta_dyn)
    t1 = time.time()
    rc_s, _ = run_xdevice(acts, pair.sta_suite, sn, rp_sta, ta_sta)
    t2 = time.time()

    dc = _safe_load_report(rp_dyn)
    sc = _safe_load_report(rp_sta)
    dyn_all.update(dc)
    sta_all.update(sc)
    _append_run_records(session, pair, rp_dyn, rp_sta, rc_d, rc_s, t0, t1, t2)
    (session_dir / "session.json").write_text(
        json.dumps(session, indent=2, ensure_ascii=False), encoding="utf-8"
    )
    print_compare_summary(compare_case_times([pair], dc, sc))
    write_compare_csv(
        session_dir / "compare_latest.csv",
        compare_case_times(all_pairs, dyn_all, sta_all),
    )


def _finalize_run_session(
    session_dir: Path,
    session: dict,
    pairs: list[SuitePair],
    dyn_all: dict[str, dict],
    sta_all: dict[str, dict],
) -> int:
    rows = compare_case_times(pairs, dyn_all, sta_all)
    out_csv = session_dir / "compare.csv"
    write_compare_csv(out_csv, rows)
    (session_dir / "session.json").write_text(
        json.dumps(session, indent=2, ensure_ascii=False), encoding="utf-8"
    )
    print("\n===== FINAL =====")
    print_compare_summary(rows)
    print(f"session: {session_dir}")
    print(f"wrote: {out_csv}")
    return 0


def cmd_run(args: argparse.Namespace) -> int:
    src = resolve_src_root(Path(args.src_dir) if args.src_dir else None)
    web = Path(args.web_dir) if args.web_dir else default_web_dir(src)
    acts = Path(args.acts_dir) if args.acts_dir else default_acts_dir(src, args.product)
    sn = detect_device_sn(args.sn)
    if not sn:
        print("未找到设备，请传 --sn <ip:port>", file=sys.stderr)
        return 1
    if not acts.is_dir():
        print(f"ACTS 目录不存在: {acts}", file=sys.stderr)
        return 1

    pairs = _filter_run_pairs(args, web)
    stamp = datetime.now().strftime("%Y%m%d-%H%M%S")
    session_dir = acts / "reports" / f"dyn_static_cmp_{stamp}"
    session_dir.mkdir(parents=True, exist_ok=True)
    session = {
        "stamp": stamp,
        "sn": sn,
        "web_dir": str(web),
        "acts_dir": str(acts),
        "paired_filter": bool(args.paired_only),
        "runs": [],
    }
    tc = acts / "testcases"
    dyn_all: dict[str, dict] = {}
    sta_all: dict[str, dict] = {}
    for idx, pair in enumerate(pairs, 1):
        _run_one_pair(
            acts, sn, tc, session_dir, session, pair, idx, len(pairs),
            bool(args.paired_only), dyn_all, sta_all, pairs,
        )
    return _finalize_run_session(session_dir, session, pairs, dyn_all, sta_all)


def cmd_help(_: argparse.Namespace) -> int:
    print(__doc__)
    return 0


def _add_common(sp: argparse.ArgumentParser) -> None:
    sp.add_argument("--src-dir", help="OpenHarmony src 根目录")
    sp.add_argument("--web-dir", help="web ACTS 目录，默认 <src>/test/xts/acts/web")
    sp.add_argument("--product", default=DEFAULT_PRODUCT)


def build_parser() -> argparse.ArgumentParser:
    p = argparse.ArgumentParser(description="Compare ACTS dynamic vs static web test timings")
    sub = p.add_subparsers(dest="cmd", required=True)

    sp = sub.add_parser("stats", help="统计可配对套件/用例")
    _add_common(sp)
    sp.add_argument("--suite", help="只统计包含该 suite 名的配对")
    sp.add_argument("-o", "--output", help="输出目录")
    sp.set_defaults(func=cmd_stats)

    rp = sub.add_parser("run", help="跑可配对套件并对比耗时")
    _add_common(rp)
    rp.add_argument("--sn", help="设备序列号，如 192.168.10.142:8710")
    rp.add_argument("--acts-dir", help="acts 运行目录")
    rp.add_argument("--suite", help="只跑该 suite（动态或静态名均可）")
    rp.add_argument("--limit", type=int, default=0, help="最多跑 N 对套件")
    rp.add_argument(
        "--paired-only",
        action="store_true",
        help="仅用 -ta 跑可对应用例（需 describe 可解析）",
    )
    rp.add_argument(
        "--include-empty",
        action="store_true",
        help="包含 0 对应用例的套件（默认跳过）",
    )
    rp.set_defaults(func=cmd_run, only_paired_suites=True)

    cp = sub.add_parser("compare", help="根据已有报告对比耗时")
    _add_common(cp)
    cp.add_argument("--dyn-report", help="动态 summary_report 所在目录")
    cp.add_argument("--sta-report", help="静态 summary_report 所在目录")
    cp.add_argument("--session-json", help="run 产生的 session.json")
    cp.add_argument("--suite")
    cp.add_argument("-o", "--output", default="dyn_static_compare.csv")
    cp.set_defaults(func=cmd_compare)

    hp = sub.add_parser("help", help="说明")
    hp.set_defaults(func=cmd_help)
    return p


def main(argv: list[str] | None = None) -> int:
    parser = build_parser()
    args = parser.parse_args(argv)
    if getattr(args, "include_empty", False):
        args.only_paired_suites = False
    return args.func(args)


if __name__ == "__main__":
    sys.exit(main())
