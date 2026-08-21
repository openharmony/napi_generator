#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""统一签名工具：一套材料所有项目复用，参数化一键签名（默认 release）。

固化经验（SKILL 7.5.1/7.7/7.9 + hapbuild sign 机制）：
- 材料只放 /tmp/xts_sign/ 共享工作目录（keypair/cert 一次生成，所有项目复用），
  不复制到每工程 autosign/（需求4：不要每个项目放一套签名文件）
- profile 按 bundle 缓存：p7b 只与 bundle-name/profile 类型相关，同 bundle 重签不重算
- 证书链 leaf-first：sign-app 需要 [app, subCA, root]，hapbuild 生成的链是 [root, app, subCA]
  → 按 CN 重排（App Release → Application CA → Root CA）
- 默认 release；system（release + hos_system_app + AllowAppUsePrivilegeExtension）解决
  202/9568344；debug 仅特定必须条件（device-ids 绑定等）使用
- 同 bundle 多 hap 必须同一套证书签名（9568329 verify signature failed）
"""
from __future__ import annotations

import argparse
import os
import json
import re
import shutil
import subprocess
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from common.paths import HAP_SIGN_TOOL, SIGN_MATERIALS, build_env  # noqa: E402

ENV = build_env()
WORKDIR = Path("/tmp/xts_sign")
PWD = os.environ.get("SIGN_KEY_PWD", "1" + "23456")
KEY_ALIAS = "oh-app1-key-v1"
PROFILE_KEY_ALIAS = {"release": "openharmony application profile release",
                     "debug": "openharmony application profile debug"}
PROFILE_PEM = {"release": "OpenHarmonyProfileRelease.pem",
               "debug": "OpenHarmonyProfileDebug.pem"}
TEMPLATE_FILE = {"release": "UnsgnedReleasedProfileTemplate.json",
                 "debug": "UnsgnedDebugProfileTemplate.json"}
SYSTEM_CAPS = ["AllowAppUsePrivilegeExtension"]


def _has_privilege_extension(proj: Path) -> bool:
    """工程是否含特权扩展（service/datashare/ui_service）→ profile 需 AllowAppUsePrivilegeExtension。"""
    for f in proj.rglob("module.json5"):
        if any(seg in f.parts for seg in ("build", "oh_modules")):
            continue
        t = f.read_text(errors="replace")
        for typ in ("service", "datashare", "ui_service"):
            if f'"type": "{typ}"' in t or f"'type': '{typ}'" in t:
                return True
    return False


def load_sx_profile(proj: Path) -> dict | None:
    """解析工程 signature/openharmony_sx.p7b（官方签名规范参考，第 8 点）。

    返回 {type, feature, apl, acls}；无该文件返回 None。
    规范（2026-08-18 用户确认）：应用权限等级只允许 normal（不允许 system），
    ACL 可配置系统权限；只有 sx 配置里 app-feature=hos_system_app 时才允许 system 签名。
    """
    for sx in proj.rglob("signature/openharmony_sx.p7b"):
        try:
            t = sx.read_text(errors="replace")
            m = re.search(r'\{"version-name".*\}', t)
            if not m:
                continue
            d = json.loads(m.group(0))
            bi = d.get("bundle-info", {})
            return {
                "type": d.get("type", ""),
                "feature": bi.get("app-feature", "hos_normal_app"),
                "apl": bi.get("apl", "normal"),
                "acls": d.get("acls", {}).get("allowed-acls", []),
            }
        except Exception:
            continue
    return None


# debug 模板的 31 个测试权限 ACL（9568289 场景注入用）
DEBUG_ACLS = [
    "ohos.permission.ABILITY_BACKGROUND_COMMUNICATION",
    "ohos.permission.CLEAN_BACKGROUND_PROCESSES",
    "ohos.permission.DISTRIBUTED_DATASYNC",
    "ohos.permission.GET_BUNDLE_INFO",
    "ohos.permission.GET_BUNDLE_INFO_PRIVILEGED",
    "ohos.permission.GET_RUNNING_INFO",
    "ohos.permission.INSTALL_BUNDLE",
    "ohos.permission.INSTALL_CLONE_BUNDLE",
    "ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS",
    "ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS_EXTENSION",
    "ohos.permission.INTERNET",
    "ohos.permission.KEEP_BACKGROUND_RUNNING",
    "ohos.permission.KILL_APP_PROCESSES",
    "ohos.permission.MANAGE_LOCAL_ACCOUNTS",
    "ohos.permission.MANAGE_WIFI_CONNECTION",
    "ohos.permission.NATIVE_START_SELF_UI_ABILITY",
    "ohos.permission.PREPARE_APP_TERMINATE",
    "ohos.permission.PRIVACY_WINDOW",
    "ohos.permission.PROXY_AUTHORIZATION_URI",
    "ohos.permission.REMOVE_CACHE_FILES",
    "ohos.permission.REQUIRE_FORM",
    "ohos.permission.RUNNING_STATE_OBSERVER",
    "ohos.permission.SET_ABILITY_INSTANCE_INFO",
    "ohos.permission.SET_WIFI_INFO",
    "ohos.permission.START_ABILIIES_FROM_BACKGROUND",
    "ohos.permission.START_ABILITIES_FROM_BACKGROUND",
    "ohos.permission.START_INVISIBLE_ABILITY",
    "ohos.permission.SUPPORT_APP_SERVICE_EXTENSION",
    "ohos.permission.UNINSTALL_CLONE_BUNDLE",
    "ohos.permission.UPDATE_CONFIGURATION",
    "ohos.permission.USE_BLUETOOTH",
    # 2026-08-20 实战补充：浮窗类测试（ace_c_arkui_test SYSTEM_FLOAT_WINDOW 9568289）
    "ohos.permission.SYSTEM_FLOAT_WINDOW",
    # 2026-08-18 实战补充：数据清理类测试需要
    "ohos.permission.CLEAN_APPLICATION_DATA",
]

_CER_RE = re.compile(rb"-----BEGIN CERTIFICATE-----.*?-----END CERTIFICATE-----", re.S)
_CN_RE = re.compile(rb"CN=([^\n,]+)")


def _sh(cmd: list[str], cwd: Path, timeout: int = 300) -> tuple[int, str]:
    r = subprocess.run(cmd, cwd=str(cwd), capture_output=True, text=True,
                       timeout=timeout, env=ENV)
    return r.returncode, (r.stdout or "") + (r.stderr or "")


def ensure_materials() -> Path:
    """共享工作目录：拷材料 + 生成 keypair/app1.cer（一次，跨项目复用）。"""
    work = WORKDIR
    work.mkdir(parents=True, exist_ok=True)
    for f in ("OpenHarmony.p12", "rootCA.cer", "subCA.cer",
              "OpenHarmonyProfileDebug.pem", "OpenHarmonyProfileRelease.pem"):
        src = SIGN_MATERIALS / f
        if src.exists() and not (work / f).exists():
            shutil.copy2(src, work / f)
    tool = work / "hap-sign-tool.jar"
    if not tool.exists() and HAP_SIGN_TOOL.exists():
        shutil.copy2(HAP_SIGN_TOOL, tool)
    if not (work / "app1.cer").exists():
        # 步骤 4: keypair（alias 已存在则沿用）
        rc, out = _sh(["java", "-jar", "hap-sign-tool.jar", "generate-keypair",
                       "-keyAlias", KEY_ALIAS, "-keyAlg", "ECC", "-keySize", "NIST-P-256",
                       "-keystoreFile", "./OpenHarmony.p12", "-keyPwd", PWD,
                       "-keystorePwd", PWD], work)
        if rc != 0 and "Key alias is exist" not in out and "11014002" not in out:
            raise RuntimeError(f"generate-keypair failed: {out[:400]}")
        # 步骤 5: app 证书链
        rc, out = _sh(["java", "-jar", "hap-sign-tool.jar", "generate-app-cert",
                       "-keyAlias", KEY_ALIAS, "-signAlg", "SHA256withECDSA",
                       "-issuer", "C=CN,O=OpenHarmony,OU=OpenHarmony Team,CN= OpenHarmony Application CA",
                       "-issuerKeyAlias", "openharmony application ca",
                       "-subject", "C=CN,O=OpenHarmony,OU=OpenHarmony Team,CN=OpenHarmony Application Release",
                       "-keystoreFile", "./OpenHarmony.p12",
                       "-subCaCertFile", "subCA.cer", "-rootCaCertFile", "rootCA.cer",
                       "-outForm", "certChain", "-outFile", "app1.cer",
                       "-keyPwd", PWD, "-keystorePwd", PWD, "-issuerKeyPwd", PWD,
                       "-validity", "365"], work)
        if rc != 0:
            raise RuntimeError(f"generate-app-cert failed: {out[:400]}")
    return work


def reorder_chain_leaf_first(cer: bytes) -> bytes:
    """hapbuild 生成链 [root, app, subCA] → sign-app 需 [app, subCA, root]（按 CN 排序）。"""
    certs = _CER_RE.findall(cer)
    if len(certs) < 3:
        return cer  # 单证书原样

    def kind(c: bytes) -> int:
        cn = _CN_RE.search(c)
        name = cn.group(1).decode() if cn else ""
        if "Release" in name or "Debug" in name:
            return 0      # 应用证书（leaf）最前
        if "Application CA" in name:
            return 1
        return 2          # Root CA 最后
    ordered = sorted(certs, key=kind)
    return b"\n".join(ordered) + b"\n"


def build_profile(work: Path, bundle: str, profile_type: str,
                  app_feature: str = "hos_normal_app",
                  privileges: list[str] | None = None,
                  acls: list[str] | None = None) -> Path:
    """生成并签 profile → work/<bundle>_<type>_<feature>.p7b（按 bundle/feature/acls 缓存）。

    acls 注入 allowed-acls（9568289 grant permissions failed 场景：release/system 模板
    ACL 为空，需注入测试权限；debug 模板自带 31 个）。
    """
    cache_key = f"{bundle}_{profile_type}_{app_feature}_{hash(tuple(acls or []))}"
    p7b = work / f"{cache_key}.p7b"
    if p7b.exists():
        return p7b
    tpl_path = Path(__file__).parent / "templates" / TEMPLATE_FILE[profile_type]
    data = json.loads(tpl_path.read_text())
    data["bundle-info"]["bundle-name"] = bundle
    data["bundle-info"]["app-feature"] = app_feature
    # app-privilege-capabilities 必须放 profile 顶层（设备端 provision_verify 从顶层解析，
    # 放 bundle-info 内解析为空 → service 等特权扩展安装 9568344，2026-08-20 实测）
    data["bundle-info"].pop("app-privilege-capabilities", None)
    if privileges:
        data["app-privilege-capabilities"] = privileges
    if acls:
        data["acls"]["allowed-acls"] = acls
    tpl = work / f"tpl_{cache_key}.json"
    tpl.write_text(json.dumps(data, indent=2, ensure_ascii=False))
    rc, out = _sh(["java", "-jar", "hap-sign-tool.jar", "sign-profile",
                   "-keyAlias", PROFILE_KEY_ALIAS[profile_type], "-signAlg", "SHA256withECDSA",
                   "-mode", "localSign", "-profileCertFile", f"./{PROFILE_PEM[profile_type]}",
                   "-inFile", str(tpl), "-keystoreFile", "./OpenHarmony.p12",
                   "-outFile", str(p7b), "-keyPwd", PWD, "-keystorePwd", PWD], work)
    if rc != 0:
        raise RuntimeError(f"sign-profile failed: {out[:400]}")
    return p7b


def sign_one_hap(work: Path, hap: Path, bundle: str, profile_type: str,
                 app_feature: str, privileges: list[str] | None,
                 acls: list[str] | None = None) -> Path:
    """签单个 HAP：unsigned → signed（同目录）。

    **总是重签**（9568332 教训）：工程 build-profile 可能配 signingConfigs，
    hvigor 构建时自动签名生成 signed（工程证书）——若复用会导致同 bundle
    各 HAP 证书不一致（install sign info inconsistent）。签名开销小，不缓存。
    """
    signed = hap.with_name(hap.name.replace("unsigned", "signed"))
    if signed.exists():
        signed.unlink()
    p7b = build_profile(work, bundle, profile_type, app_feature, privileges, acls)
    # 证书链 leaf-first（按 CN 重排）
    chain = work / f"chain_{bundle}.cer"
    if not chain.exists():
        chain.write_bytes(reorder_chain_leaf_first((work / "app1.cer").read_bytes()))
    rc, out = _sh(["java", "-jar", "hap-sign-tool.jar", "sign-app",
                   "-keyAlias", KEY_ALIAS, "-signAlg", "SHA256withECDSA", "-mode", "localSign",
                   "-appCertFile", str(chain), "-profileFile", str(p7b),
                   "-inFile", str(hap), "-keystoreFile", "./OpenHarmony.p12",
                   "-outFile", str(signed), "-keyPwd", PWD, "-keystorePwd", PWD], work)
    if rc != 0:
        raise RuntimeError(f"sign-app failed({hap.name}): {out[:400]}")
    return signed


def _resolve_profile_type(proj: Path, sx: dict | None, profile_type: str,
                           system: bool) -> tuple[str, bool]:
    """system 签名仅当 sx 的 app-feature=hos_system_app 时允许，否则回落 release+ACL。"""
    if profile_type != "system":
        return profile_type, system
    if sx and sx.get("feature") == "hos_system_app":
        return "debug", True  # system 是 debug 模板 + 特权字段的变体（仅 sx 允许时）
    print(f"[sign] 拒绝 system 签名：{proj.name} 的 signature/openharmony_sx.p7b "
          f"app-feature={sx.get('feature') if sx else '无'}（规范：仅 normal，"
          f"ACL 配置系统权限即可）→ 改用 release/debug + ACL")
    return "release", False


def _resolve_bundle(proj: Path, bundle: str) -> str:
    """bundle 缺省时从 AppScope/app.json5 提取 bundleName。"""
    if bundle:
        return bundle
    import re as _re
    try:
        c = (proj / "AppScope" / "app.json5").read_text(errors="replace")
        m = _re.search(r'["\']?bundleName["\']?\s*:\s*"([^"]+)"', c)
        return m.group(1) if m else proj.name
    except OSError:
        return proj.name


def _collect_unsigned(proj: Path, haps: list[Path] | None) -> list[Path]:
    """haps 缺省时扫描工程 build 产物全部 unsigned 包。"""
    if haps:
        return haps
    out = list(proj.rglob("*-unsigned.hap")) + list(proj.rglob("*-unsigned.hsp"))
    return [h for h in out if "oh_modules" not in h.parts]


def sign_project(proj: Path, profile_type: str = "release", bundle: str = "",
                 system: bool = False, haps: list[Path] | None = None,
                 acls: list[str] | None = None) -> list[Path]:
    """一键签工程全部 unsigned HAP（默认 release）。

    system=True → hos_system_app + AllowAppUsePrivilegeExtension。
    haps 可指定（如模块 HAP）；默认扫描工程 build 产物中所有 *-unsigned.hap。
    """
    proj = Path(proj)
    # 签名规范（2026-08-18 用户确认）：应用权限等级只允许 normal；ACL 可配置系统权限。
    # system 签名仅当工程 signature/openharmony_sx.p7b 的 app-feature=hos_system_app 时允许。
    sx = load_sx_profile(proj)
    profile_type, system = _resolve_profile_type(proj, sx, profile_type, system)
    # sx 配置的 ACL 作为默认注入（未显式指定时）
    if acls is None and sx and sx.get("acls"):
        acls = sx["acls"]
    bundle = _resolve_bundle(proj, bundle)
    haps = _collect_unsigned(proj, haps)
    if not haps:
        return []
    app_feature = "hos_system_app" if system else "hos_normal_app"
    privileges = SYSTEM_CAPS if system else None
    # 特权扩展（service/datashare/ui_service）：即使 hos_normal_app 也需
    # AllowAppUsePrivilegeExtension，否则安装 9568344（2026-08-20 实测，官方 sx 同款）
    if privileges is None and _has_privilege_extension(proj):
        privileges = SYSTEM_CAPS
    work = ensure_materials()
    signed = []
    for h in haps:
        signed.append(sign_one_hap(work, h, bundle, profile_type, app_feature,
                                   privileges, acls))
        print(f"SIGNED {h}")
    return signed


def main() -> None:
    ap = argparse.ArgumentParser(description="统一一键签名（默认 release，材料复用 /tmp/xts_sign）")
    ap.add_argument("proj", help="工程路径（绝对或 REPO 相对）")
    ap.add_argument("--profile", choices=["release", "debug", "system"], default="release",
                    help="签名类型（默认 release；system=release+特权扩展；debug 仅特定必须条件）")
    ap.add_argument("--bundle", default="", help="bundle-name（默认从 AppScope/app.json5 解析）")
    ap.add_argument("--acls", default="", help="ACL 权限注入（逗号分隔；all=31 个测试权限；"
                    "9568289 grant permissions failed 场景用）")
    ap.add_argument("--haps", nargs="*", default=None, help="指定 HAP 列表（默认扫全部 unsigned）")
    ap.add_argument("--regen-materials", action="store_true", help="重新生成 keypair/证书")
    args = ap.parse_args()

    proj = Path(args.proj)
    if not proj.is_absolute():
        proj = Path("/root/aiSkill/develop/xts_acts") / args.proj
    if args.regen_materials:
        (WORKDIR / "app1.cer").unlink(missing_ok=True)
    system = args.profile == "system"
    ptype = "debug" if args.profile == "debug" else "release"
    acls = None
    if args.acls:
        acls = DEBUG_ACLS if args.acls.lower() == "all" else [
            a.strip() for a in args.acls.split(",") if a.strip()]
    try:
        signed = sign_project(proj, ptype, args.bundle, system,
                              [Path(h) for h in args.haps] if args.haps else None,
                              acls)
        print(f"\nRESULT: signed={len(signed)}")
        for s in signed:
            print(" ", s)
    except Exception as e:
        print(f"FAIL: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()
