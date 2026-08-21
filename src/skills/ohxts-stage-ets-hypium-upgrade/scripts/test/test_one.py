#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""单 HAP 全流程测试（迁移自 dongwei/scripts/hap_test_one.sh，python 化）。

流程：设备就绪 → 依赖辅助 HAP 构建 → ohosTest 判定 → 编译(双 HAP) → 签名(默认 release)
→ 元信息/套件解析 → 清理设备 → 依赖安装 → 合包剥离 → 双装 → 逐套件(liveness) →
结果解析 → 报告留存(仅通过) → TSV 落盘 → 更新 Excel。

固化经验（SKILL 7.1/7.2/7.4/7.5/7.7）：清理顺序、合包剥离、同 bundle 多 hap 同装、
history PASS 不覆盖、60s liveness 判挂起、NDK 合包主 HAP 提供 libs。
"""
from __future__ import annotations

import argparse
import contextlib
import fcntl
import json
import os
import re
import shutil
import sys
import tempfile
import time
import zipfile
from datetime import datetime
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from common import hdc_utils  # noqa: E402
from common.build_utils import build_one, patch_sdk_versions, restore_sdk_versions  # noqa: E402
from common.paths import (ACTIVITY_TXT, CLOSE_LOG, PROGRESS_DIR, REPORT_ROOT,  # noqa: E402
                          REPO, TSV)
from common.proj_utils import extract_suites, fallback_suites, hap_meta, resolve_deps  # noqa: E402

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from sign.sign_one import sign_project  # noqa: E402

DEVICE = hdc_utils.DEVICE


@contextlib.contextmanager
def device_lock():
    """设备互斥锁：多会话共用一台设备时串行化设备操作。

    cleanup 会卸载所有非系统应用，套件运行期间被另一会话清理会直接 NO_RESULT
    （2026-08-18 实战）；锁覆盖 清理→安装→套件→卸载 全程。
    """
    p = Path(f"/tmp/xts_test_{DEVICE.replace(':', '_')}.lock")
    fd = open(p, "w")
    try:
        fcntl.flock(fd, fcntl.LOCK_EX)
        yield
    finally:
        fcntl.flock(fd, fcntl.LOCK_UN)
        fd.close()


def log(msg: str, to_activity: bool = False) -> None:
    line = f"[{datetime.now():%H:%M:%S}] {msg}"
    print(line)
    with open(CLOSE_LOG, "a") as f:
        f.write(line + "\n")
    if to_activity:
        with open(ACTIVITY_TXT, "a") as f:
            f.write(line + "\n")


def tsv_row(ts: str, rel: str, status: str, passed: str, total: str, err: str,
            report: str) -> None:
    with open(TSV, "a") as f:
        f.write(f"{ts}\t{rel}\t{status}\t{passed}\t{total}\t{err}\t{report}\n")


def refresh_xlsx() -> None:
    """同步进度 Excel（report/update_xlsx.py）。"""
    xlsx_py = Path(__file__).resolve().parents[1] / "report" / "update_xlsx.py"
    try:
        import subprocess
        subprocess.run([sys.executable, str(xlsx_py)], capture_output=True, timeout=120)
    except Exception:
        pass


def dep_has_extension(proj: Path) -> bool:
    """依赖工程是否含扩展（service/appService/UIExtension）→ 需特权签名（9568344）。"""
    for f in proj.rglob("module.json5"):
        if any(seg in f.parts for seg in ("build", "oh_modules")):
            continue
        t = f.read_text(errors="replace")
        if "extensionAbilities" in t:
            return True
    return False


def build_dep_hap(rel: str, profile_type: str = "release", system: bool = False,
                  acls: list[str] | None = None) -> list[Path]:
    """构建依赖辅助 HAP：无 signed 产物时才构建；**总是重签**。

    返回实际 signed HAP 路径列表（模块名不一定是 entry——phone/feature 等，
    2026-08-18 实战：thirdappa 模块名 phone 导致硬编码路径漏装）。

    重签原因（9568332 教训）：依赖可能与主测试包同 bundle（rely 辅助应用），
    旧 signed 是历史证书 → 同 bundle 证书不一致 → install sign info inconsistent。
    """
    proj = REPO / rel
    signed = proj / "entry/build/default/outputs/default/entry-default-signed.hap"
    if not signed.exists():
        log(f"[依赖] 构建: {rel}", to_activity=True)
        bp = proj / "build-profile.json5"
        bak = None
        if bp.exists():
            bak = patch_sdk_versions(bp)
        try:
            import subprocess
            from common.paths import OHPM
            subprocess.run([str(OHPM), "install"], cwd=str(proj), capture_output=True,
                           timeout=300)
            r = build_one(proj, timeout_main=300, timeout_test=60)
            if not r["ok"]:
                log(f"[依赖] 构建失败: {rel} {r['error']}")
                return []
        finally:
            restore_sdk_versions(bak)
    # 签名（总是重签：与主包同 bundle 时必须同证书/同 app-feature；独立 bundle 也无害）
    # 依赖含扩展（service/appService/UIExtension）→ 注入 debug ACL（normal 应用规范）
    if dep_has_extension(proj) and acls is None:
        from sign.sign_one import DEBUG_ACLS
        acls = DEBUG_ACLS
    try:
        sign_project(proj, profile_type, system=system, acls=acls)
    except Exception as e:
        log(f"[依赖] 签名失败: {rel} {e}")
        return []
    # 返回实际 signed 产物（模块名不一定是 entry）
    haps = [h for h in proj.rglob("*-signed.hap")
            if "oh_modules" not in h.parts and "ohosTest" not in h.parts]
    return haps


def build_dep_module(proj_rel: str, mod: str, profile_type: str = "release",
                     system: bool = False, acls: list[str] | None = None) -> bool:
    """构建并签名模块级依赖 HAP（Test.json kits 的 ModuleN.hap）。"""
    proj = REPO / proj_rel
    hap = proj / mod / "build/default/outputs/default" / f"{mod}-default-signed.hap"
    if hap.exists():
        return True
    log(f"[依赖] 构建模块: {mod}@{proj_rel}", to_activity=True)
    bp = proj / "build-profile.json5"
    bak = None
    if bp.exists():
        bak = patch_sdk_versions(bp)
    try:
        from common.paths import HVIGORW_JS, NODE, OHPM
        import subprocess
        subprocess.run([str(OHPM), "install"], cwd=str(proj), capture_output=True,
                       timeout=300)
        cmd = [str(NODE), str(HVIGORW_JS), "--mode", "module", "-p", f"module={mod}",
               "-p", "product=default", "assembleHap", "--analyze=normal",
               "--parallel", "--incremental", "--no-daemon"]
        r = subprocess.run(cmd, cwd=str(proj), capture_output=True, timeout=400)
        if r.returncode != 0:
            return False
    finally:
        restore_sdk_versions(bak)
    unsigned = proj / mod / "build/default/outputs/default" / f"{mod}-default-unsigned.hap"
    if unsigned.exists():
        try:
            sign_project(proj, profile_type, system=system, haps=[unsigned], acls=acls)
        except Exception as e:
            log(f"[依赖] 模块签名失败: {e}")
            return False
    return hap.exists()


def strip_combined_pack(unsigned: Path) -> None:
    """测试 HAP 合包剥离：pack.info 含 entry 模块 → 剥离（须在签名前执行）。

    3.2 同 bundle 单 entry 限制：主 HAP 提供 entry，测试 HAP 剥离 entry 后只留 entry_test。
    """
    if not unsigned.exists():
        return
    tmp = Path("/tmp/hap_strip")
    if tmp.exists():
        shutil.rmtree(tmp)
    tmp.mkdir(parents=True)
    with zipfile.ZipFile(unsigned) as z:
        z.extractall(tmp)
    pi = tmp / "pack.info"
    if not pi.exists():
        return
    try:
        d = json.loads(pi.read_text(errors="replace"))
        mods = d.get("summary", {}).get("modules", [])
        if any(m["distro"]["moduleName"] == "entry" for m in mods):
            d["summary"]["modules"] = [m for m in mods if m["distro"]["moduleName"] != "entry"]
            pi.write_text(json.dumps(d))
            out = Path("/tmp/entry-stripped.unsigned.hap")
            out.unlink(missing_ok=True)
            with zipfile.ZipFile(out, "w", zipfile.ZIP_DEFLATED) as z:
                for root, _, files in os.walk(tmp):
                    for f in files:
                        p = Path(root) / f
                        z.write(p, p.relative_to(tmp))
            shutil.copy(out, unsigned)
            log("[剥离合包] 测试 HAP 已剥离 entry 模块")
    except Exception as e:
        log(f"[strip skip] {e}")


def run_suites(bundle: str, tmod: str, suites: list[str]) -> dict:
    """逐套件 aa test（liveness 检测）。返回 {'total','passed','failed','allout','hung','no_result'}。

    no_result：无 Tests run 汇总的套件名（挂起/崩溃/未完成）——多套件时只要有
    NO_RESULT 套件即整体不判 PASS（2026-08-18 实战：漏判致假 PASS）。
    """
    total = passed = failed = 0
    allout = ""
    hung_suites = []
    no_result_suites = []
    for s in suites:
        s = s.strip()
        if not s:
            continue
        log(f"  运行套件: {s}（60s 无输出判挂起）", to_activity=True)
        out, hung = hdc_utils.run_aa_test(bundle, tmod, s)
        if hung:
            hung_suites.append(s)
        allout += f"[{s}]\n{out}\n"
        m = re.search(r"Tests run: (\d+), Failure: (\d+), Error: (\d+), Pass: (\d+)", out)
        if m:
            # 2026-08-20 防御：汇总行存在但用例级进展标记（OHOS_REPORT_STATUS: test=）远少于
            # 汇总总数 → 假阳性（空跑/残留输出，实测 57s 报 32/32 但设备端 0 用例执行）
            case_marks = len(re.findall(r"OHOS_REPORT_STATUS: test=", out))
            if case_marks < int(m.group(1)):
                no_result_suites.append(s)
                log(f"  [{s}] 汇总与用例标记不符({case_marks}<{m.group(1)}) → NO_RESULT")
            else:
                total += int(m.group(1))
                failed += int(m.group(2)) + int(m.group(3))
                passed += int(m.group(4))
        else:
            no_result_suites.append(s)
            log(f"  [{s}] NO_RESULT")
    return {"total": total, "passed": passed, "failed": failed, "allout": allout,
            "hung": hung_suites, "no_result": no_result_suites}


def test_one(rel: str, profile: str = "release", system: bool = False,
             gen_html: bool = False, acls: list[str] | None = None) -> int:
    """单 HAP 全流程。返回 0 通过 / 非 0 失败/跳过。"""
    ts = datetime.now().strftime("%Y%m%d_%H%M%S")
    proj = REPO / rel
    hapname = rel.rsplit("/", 1)[-1]
    sub = rel.split("/")[0]
    log(f"===== [{rel}] 测试开始 =====", to_activity=True)

    # 0. 设备就绪
    if not hdc_utils.ensure_device():
        tsv_row(ts, rel, "DEVICE_OFFLINE", "-", "-", "-", "-")
        log("DEVICE_OFFLINE")
        refresh_xlsx()
        return 2
    hdc_utils.keep_awake()

    # 0.5 依赖辅助 HAP 解析（构建放前面；安装移到清理之后）
    deps = resolve_deps(rel)
    dep_haps: dict[str, list[Path]] = {}
    for dp in deps:
        if "::" in dp:
            dproj, dmod = dp.split("::", 1)
            build_dep_module(dproj, dmod, profile, system, acls)
        else:
            dep_haps[dp] = build_dep_hap(dp, profile, system, acls)

    # 0.6 辅助工程（无 ohosTest）跳过
    if not (proj / "entry/src/ohosTest/module.json5").is_file():
        tsv_row(ts, rel, "SKIP", "-", "-", "辅助工程无测试代码", "-")
        log("SKIP: 辅助工程无测试代码")
        refresh_xlsx()
        return 3

    # 1. 编译（双 HAP）
    log(f"构建: {rel}", to_activity=True)
    r = build_one(proj)
    if not r["ok"]:
        tsv_row(ts, rel, "BUILD_FAIL", "-", "-", r["error"], "-")
        log(f"BUILD FAIL: {r['error']}")
        refresh_xlsx()
        return 4

    # 2. 合包剥离（必须在签名前：sign-app 从 unsigned 生成 signed，剥离后的 unsigned 才有效）
    test_hap_u = proj / "entry/build/default/outputs/ohosTest/entry-ohosTest-unsigned.hap"
    # 主/测模块名相同（如均 entry）→ combined 自包含 hap（官方只装测试 hap），不剥离（2026-08-19 实战）
    import zipfile as _zf
    def _hap_modname(hap_path):
        try:
            with _zf.ZipFile(hap_path) as z:
                return json.loads(z.read("module.json"))["module"].get("name", "")
        except Exception:
            return ""
    # strip 在签名前：主 hap 此时是 unsigned 产物（2026-08-19 实战修正）
    _main_hap0 = next((h for h in proj.rglob("*/build/default/outputs/default/*-unsigned.hap")
                       if "ohosTest" not in h.parts), None)
    _tmod0 = _hap_modname(test_hap_u) if test_hap_u.exists() else ""
    _pmain0 = _hap_modname(_main_hap0) if _main_hap0 else ""
    log(f"  [combined] strip判定 tmod={_tmod0} pmain={_pmain0}")
    if test_hap_u.exists() and _tmod0 != _pmain0:
        strip_combined_pack(test_hap_u)

    # 3. 签名（默认 release；system 仅当 sx 配置允许；acls 注入 9568289 场景）
    # 依赖含扩展 → 注入 debug ACL（normal 应用 + ACL 权限，规范见 sign_one）
    if acls is None:
        for dp in deps:
            if "::" not in dp and dep_has_extension(REPO / dp):
                from sign.sign_one import DEBUG_ACLS
                acls = DEBUG_ACLS
                log(f"  依赖 {dp} 含扩展 → ACL 注入（normal 应用规范）")
                break
    try:
        sign_project(proj, profile, system=system, acls=acls)
    except Exception as e:
        tsv_row(ts, rel, "SIGN_FAIL", "-", "-", str(e)[:200], "-")
        log(f"SIGN FAIL: {e}")
        refresh_xlsx()
        return 5

    # 主/测 HAP 按实际产物发现（模块名不一定是 entry——second/phone 等，2026-08-18 实战）
    main_hap = next((h for h in proj.rglob("*/build/default/outputs/default/*-signed.hap")
                     if "ohosTest" not in h.parts and h.name != "second-ohosTest-signed.hap"), None)
    test_hap = next((h for h in proj.rglob("*/build/default/outputs/ohosTest/*-signed.hap")
                     if "entry" in h.name or True), None)
    if not test_hap or not test_hap.is_file():
        tsv_row(ts, rel, "BUILD_FAIL", "-", "-", "TEST HAP MISSING", "-")
        log("TEST HAP MISSING")
        refresh_xlsx()
        return 4

    # 3. 元信息 / 套件
    meta = hap_meta(proj)
    bundle = meta["bundle"] or proj.name
    tmod = meta["tmod"] or "entry"
    list_test = proj / "entry/src/ohosTest/ets/test/List.test.ets"
    if not list_test.is_file():
        list_test = proj / "entry/src/ohosTest/ets/test/ListTest.ets"  # 非标准入口（freeinstall 等）
    suites = extract_suites(list_test) if list_test.is_file() else []
    if not suites:
        suites = fallback_suites(proj / "entry/src/ohosTest/ets/test")
    if not suites:
        suites = ["ActsAbilityTest"]
    log(f"bundle={bundle} tmod={tmod} suites={','.join(suites)}")

    # 4. 清理设备（先清理，后装依赖，避免依赖被卸载）
    # 设备互斥锁：覆盖清理→安装→套件→卸载，防多会话互相卸载（2026-08-18 实战）
    with device_lock():
        log("清理设备（卸载非系统应用 + 清 log）", to_activity=True)
        hdc_utils.cleanup_device(bundle)
        mem = hdc_utils.mem_free_kb()
        log(f"  设备空闲内存: {mem} kB")

        # 5. 安装（剥离已在签名前完成；残留兜底：entry already exist 时强制卸载重装一次）
        # 多模块工程（entry+feature…）主模块 HAP 全部安装；缺任一模块会启动失败/挂起（2026-08-18 实战）
        # shared 类型模块产出 .hsp，同样安装（evictModuleFilePages 等按模块查配置，2026-08-18 实战）
        # 主模块先装、依赖后装：同 bundle 同名模块（actsmultiplecall 的 rely 模块也是 entry）需依赖最后覆盖生效
        # （2026-08-18 实战：官方 kits 顺序 主+测→rely；rely 先装会被主模块同名替换导致事件链失效）
        main_haps = [h for h in proj.rglob("*/build/default/outputs/default/*-signed.hap")
                     if "ohosTest" not in h.parts and h.name != "second-ohosTest-signed.hap"]
        main_haps += [h for h in proj.rglob("*/build/default/outputs/default/*-signed.hsp")
                      if "ohosTest" not in h.parts]
        if not main_haps and main_hap and main_hap.is_file():
            main_haps = [main_hap]
        # combined 自包含：主/测模块同名 → 只装测试 hap（含 entry 模块），跳过主 hap（2026-08-19 实战）
        if _tmod0 and _tmod0 == _pmain0:
            main_haps = []
            log("  [combined] 跳过主 HAP 安装（测试 hap 自包含 entry 模块）")
        ok1, e1 = True, ""
        for mh in main_haps:
            ok, err = hdc_utils.install_hap(str(mh))
            if not ok:
                ok1, e1 = False, err
                break
        if not ok1 and "9568267" in e1:
            log("  残留兜底：强制卸载后重装主 HAP")
            hdc_utils.cleanup_device(bundle)
            ok1, e1 = True, ""
            for mh in main_haps:
                ok, err = hdc_utils.install_hap(str(mh))
                if not ok:
                    ok1, e1 = False, err
                    break
        ok2, e2 = hdc_utils.install_hap(str(test_hap))
        log(f"  [安装] 主HAP×{len(main_haps)} ok={ok1} err={e1[:80] if e1 else '-'} | 测试HAP ok={ok2} err={e2[:80] if e2 else '-'}")
        if not (ok1 and ok2):
            err = e1 or e2
            tsv_row(ts, rel, "INSTALL_FAIL", "-", "-", err[:200], "-")
            log(f"INSTALL FAIL: {err}")
            refresh_xlsx()
            return 6

        # 5.5 安装依赖（主模块之后；用构建返回的实际 signed 路径）
        # 9568332（sign info inconsistent）：历史安装的同 bundle 旧签名残留（com.ohos 前缀被当系统保留），
        # 先卸旧 bundle 再重装（2026-08-19 实战）
        def _install_dep(dh):
            ok, err = hdc_utils.install_hap(str(dh))
            if not ok and "9568332" in err:
                try:
                    with zipfile.ZipFile(dh) as z:
                        mj = json.loads(z.read("module.json"))
                        bn = mj.get("app", {}).get("bundleName", "") or mj.get("module", {}).get("bundleName", "")
                except Exception:
                    bn = ""
                if bn:
                    hdc_utils.hdc("shell", f"bm uninstall -n {bn}", timeout=20)
                    ok, err = hdc_utils.install_hap(str(dh))
            return ok, err
        for dp in deps:
            if "::" in dp:
                dproj, dmod = dp.split("::", 1)
                dh = REPO / dproj / dmod / "build/default/outputs/default" / f"{dmod}-default-signed.hap"
                if dh.is_file():
                    ok, err = _install_dep(dh)
                    log(f"  [依赖] {'已安装' if ok else '安装失败'} {dp} {err if not ok else ''}")
            else:
                for dh in dep_haps.get(dp, []):
                    ok, err = _install_dep(dh)
                    log(f"  [依赖] {'已安装' if ok else '安装失败'} {dp} {err if not ok else ''}")

        # 6. 逐套件测试
        res = run_suites(bundle, tmod, suites)
        if res["hung"]:
            log(f"  挂起套件: {res['hung']}")

        # 6.5 测试结束清理：卸载本 bundle（无论成败，避免残留影响后续，2026-08-18 强化）
        hdc_utils.hdc("shell", f"bm uninstall -n {bundle}", timeout=20)
        hdc_utils.hdc("shell", "hilog -r", timeout=15)

    # 7. 结果判定 + 报告留存（仅通过）
    if res["failed"] == 0 and res["total"] > 0 and not res.get("no_result"):
        report = REPORT_ROOT / sub / f"{hapname}.txt"
        report.parent.mkdir(parents=True, exist_ok=True)
        with open(report, "w") as f:
            f.write(f"HAP: {hapname}\n工程: {rel}\n测试时间: {datetime.now():%Y-%m-%d %H:%M:%S}\n")
            f.write(f"结果: PASS\n用例: {res['passed']}/{res['total']} 通过, Failure: 0\n---\n")
            f.write(res["allout"][-3000:])
        tsv_row(ts, rel, "PASS", str(res["passed"]), str(res["total"]), "-", str(report))
        log(f"✅ PASS {res['passed']}/{res['total']}", to_activity=True)
        if gen_html:
            # xdevice HTML 报告（固化自 ohxtsstatic，供截图门禁/报告留存）
            html_log = Path("/tmp") / f"aatest_{hapname}.log"
            html_log.write_text(res["allout"], errors="replace")
            try:
                import subprocess as _sp
                r = _sp.run(
                    [sys.executable,
                     str(Path(__file__).resolve().parents[1] / "report" / "gen_xdevice_report.py"),
                     str(html_log), "--project", rel, "--device", DEVICE],
                    capture_output=True, text=True, timeout=120)
                for ln in (r.stdout or "").splitlines():
                    if ln.startswith("REPORT_HTML"):
                        log(f"REPORT_HTML={ln.split('=', 1)[1]}")
            except Exception as e:
                log(f"[html report skip] {e}")
        refresh_xlsx()
        return 0
    # 无报告（NO_RESULT / 挂起 / 全失败）——失败时保留 aa test 原始输出到 /tmp 供定位（2026-08-18）
    try:
        (Path("/tmp") / f"aatest_fail_{hapname}.log").write_text(res["allout"], errors="replace")
    except Exception:
        pass
    # 无报告（NO_RESULT / 挂起 / 全失败）
    if res["total"] == 0:
        status = "NO_RESULT" if not res["hung"] else "FAIL"
        err = "NO_RESULT：无 OHOS_REPORT_RESULT" if not res["hung"] else f"挂起: {res['hung']}"
    else:
        status = "FAIL"
        err = f"Tests run: {res['total']}, Failure: {res['failed']}, Pass: {res['passed']}"
    tsv_row(ts, rel, status, str(res["passed"]), str(res["total"]), err, "-")
    log(f"❌ {status}: {err}")
    refresh_xlsx()
    return 7


def main() -> None:
    ap = argparse.ArgumentParser(description="单 HAP 全流程测试")
    ap.add_argument("rel", help="工程相对路径（REPO 内）")
    ap.add_argument("--profile", choices=["release", "debug", "system"], default="release")
    ap.add_argument("--html", action="store_true", help="测试通过后生成 xdevice HTML 报告")
    ap.add_argument("--acls", default="", help="ACL 权限注入（all=31 个测试权限；9568289 场景用）")
    args = ap.parse_args()
    acls = None
    if args.acls:
        from sign.sign_one import DEBUG_ACLS
        acls = DEBUG_ACLS if args.acls.lower() == "all" else [
            a.strip() for a in args.acls.split(",") if a.strip()]
    sys.exit(test_one(args.rel, args.profile, system=args.profile == "system",
                      gen_html=args.html, acls=acls))


if __name__ == "__main__":
    main()
