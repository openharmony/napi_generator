#!/usr/bin/env bash
# XTS 一键生成 signature/openharmony_sx.p7b（证书已内嵌；jar 请与脚本同目录或本机 SDK）
# 用法：拷到工程根后执行  bash gen-signature.sh
# 也可：bash gen-signature.sh /path/to/project
# jar 约 13MB，不内嵌；优先用「脚本同目录」的 hap-sign-tool.jar
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
if [[ "${1:-}" != "" ]]; then
  PROJ="$(cd "$1" && pwd)"
elif [[ -f "$SCRIPT_DIR/AppScope/app.json5" ]]; then
  PROJ="$SCRIPT_DIR"
else
  PROJ="$(pwd)"
fi

APP_JSON="$PROJ/AppScope/app.json5"
OUT="$PROJ/signature/openharmony_sx.p7b"
die() { echo "ERROR: $*" >&2; exit 1; }

[[ -f "$APP_JSON" ]] || die "缺少 $APP_JSON（请在工程根执行，或传入工程根路径）"
command -v java >/dev/null 2>&1 || die "未找到 java"
command -v python3 >/dev/null 2>&1 || die "未找到 python3"

BUNDLE=$(python3 - "$APP_JSON" <<'PY'
import re, sys
text = open(sys.argv[1], encoding="utf-8").read()
m = re.search(r'"bundleName"\s*:\s*"([^"]+)"', text)
if not m:
    raise SystemExit("AppScope/app.json5 中未找到 bundleName")
print(m.group(1))
PY
)

find_jar() {
  local candidate found
  # 1) 脚本同目录（发给同事时把 jar 和 sh 放一起）
  # 2) 工程根  3) 环境变量 / 本机常见 SDK 路径
  for candidate in \
    "$SCRIPT_DIR/hap-sign-tool.jar" \
    "$PROJ/hap-sign-tool.jar" \
    "${HAP_SIGN_TOOL_JAR:-}" \
    "${OHOS_SDK_PATH:+$OHOS_SDK_PATH/toolchains/lib/hap-sign-tool.jar}" \
    "/root/aiSkill/command-line-tools/sdk/default/openharmony/normal/26/toolchains/lib/hap-sign-tool.jar" \
    "/root/aiSkill/command-line-tools/sdk/default/openharmony/static/26/toolchains/lib/hap-sign-tool.jar" \
    "/root/aiSkill/command-line-tools/sdk/default/openharmony/normal/linux/toolchains/lib/hap-sign-tool.jar" \
    "/root/aiSkill/command-line-tools/sdk/default/openharmony/static/linux/toolchains/lib/hap-sign-tool.jar" \
    "/root/6.1tag/developtools/hapsigner/dist/hap-sign-tool.jar"
  do
    [[ -n "${candidate:-}" && -f "$candidate" ]] && { echo "$candidate"; return 0; }
  done
  for candidate in \
    /root/aiSkill/command-line-tools/sdk \
    "$HOME/command-line-tools/sdk" \
    "$HOME/OhosSdk" \
    /opt/ohos-sdk
  do
    [[ -d "$candidate" ]] || continue
    found=$(find "$candidate" -name 'hap-sign-tool.jar' 2>/dev/null | head -1 || true)
    [[ -n "$found" && -f "$found" ]] && { echo "$found"; return 0; }
  done
  return 1
}

JAR="$(find_jar)" || die "未找到 hap-sign-tool.jar（约 13MB，不内嵌进脚本）。
  任选其一：
  1) 把 hap-sign-tool.jar 放到与 gen-signature.sh 同一目录再执行
  2) export HAP_SIGN_TOOL_JAR=/path/to/hap-sign-tool.jar
  3) 安装 SDK / command-line-tools，或设置 OHOS_SDK_PATH
  jar 可从本机 SDK toolchains/lib/ 或 developtools/hapsigner/dist/ 取得"

WORK=$(mktemp -d)
trap 'rm -rf "$WORK"' EXIT

# 内嵌证书 → 临时目录（无需指定签名材料）
python3 - "$WORK" <<'PY'
import base64, pathlib, sys
out = pathlib.Path(sys.argv[1])
MATERIALS = {
    "OpenHarmony.p12": (
        "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"
        "EVP8sTwN77GU1frEOgIDAYag"
    ),
    "rootCA.cer": (
        "LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUNSRENDQWNtZ0F3SUJBZ0lFRCtFNGl6QU1C"
        "Z2dxaGtqT1BRUURBd1VBTUdneEN6QUpCZ05WQkFZVEFrTk8KTVJRd0VnWURWUVFLRXd0UGNHVnVT"
        "R0Z5Ylc5dWVURVpNQmNHQTFVRUN4TVFUM0JsYmtoaGNtMXZibmtnVkdWaApiVEVvTUNZR0ExVUVB"
        "eE1mVDNCbGJraGhjbTF2Ym5rZ1FYQndiR2xqWVhScGIyNGdVbTl2ZENCRFFUQWVGdzB5Ck1UQXlN"
        "REl4TWpFME1UaGFGdzAwT1RFeU16RXhNakUwTVRoYU1HZ3hDekFKQmdOVkJBWVRBa05PTVJRd0Vn"
        "WUQKVlFRS0V3dFBjR1Z1U0dGeWJXOXVlVEVaTUJjR0ExVUVDeE1RVDNCbGJraGhjbTF2Ym5rZ1ZH"
        "VmhiVEVvTUNZRwpBMVVFQXhNZlQzQmxia2hoY20xdmJua2dRWEJ3YkdsallYUnBiMjRnVW05dmRD"
        "QkRRVEIyTUJBR0J5cUdTTTQ5CkFnRUdCU3VCQkFBaUEySUFCRTAyM1htUmF3MkRuTzhOU3NiK0tH"
        "L3VZMEZ0UzN1NUxRdWNkcjNxV1ZuUlc1dWkKUUlMNnR0TlpCRWVMVFVlWWNKWkNwYXlnOUxsZisx"
        "U21EQTdkWTRpUDJFY1JvNFVOM3JpbG92dGZGZnNtSDR0eQozU0FwSFZGeldVbCtOd2RIOEtOQ01F"
        "QXdEd1lEVlIwVEFRSC9CQVV3QXdFQi96QU9CZ05WSFE4QkFmOEVCQU1DCkFRWXdIUVlEVlIwT0JC"
        "WUVGQmM2RUtHckdYemxBRStzMFpnbnNwaGFkdzdOTUF3R0NDcUdTTTQ5QkFNREJRQUQKWndBd1pB"
        "SXdkMXAzSnpITjkzZW9QcGVkMWxpMGo2NG5wZ3FOend5NE9ya2VoWUFxTlhwY3BhRWNMWjdVeFc4"
        "RQpJMmxaSjNTYkFqQWtxeVNIYjEyc0l3ZFNGS1NOOUtDTU1Fby9lVVQ1ZFVYbGNLUjJuWnowTUpk"
        "eFQ1RjUxcWNYCjFDdW16a2NZaGdVPQotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0t"
    ),
    "subCA.cer": (
        "LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUNZVENDQWVXZ0F3SUJBZ0lFSG1YQVBUQU1C"
        "Z2dxaGtqT1BRUURBd1VBTUdneEN6QUpCZ05WQkFZVEFrTk8KTVJRd0VnWURWUVFLRXd0UGNHVnVT"
        "R0Z5Ylc5dWVURVpNQmNHQTFVRUN4TVFUM0JsYmtoaGNtMXZibmtnVkdWaApiVEVvTUNZR0ExVUVB"
        "eE1mVDNCbGJraGhjbTF2Ym5rZ1FYQndiR2xqWVhScGIyNGdVbTl2ZENCRFFUQWVGdzB5Ck1UQXlN"
        "REl4TWpFMU16SmFGdzAwT1RFeU16RXhNakUxTXpKYU1HTXhDekFKQmdOVkJBWVRBa05PTVJRd0Vn"
        "WUQKVlFRS0V3dFBjR1Z1U0dGeWJXOXVlVEVaTUJjR0ExVUVDeE1RVDNCbGJraGhjbTF2Ym5rZ1ZH"
        "VmhiVEVqTUNFRwpBMVVFQXhNYVQzQmxia2hoY20xdmJua2dRWEJ3YkdsallYUnBiMjRnUTBFd2Rq"
        "QVFCZ2NxaGtqT1BRSUJCZ1VyCmdRUUFJZ05pQUFRaG51N0huYThYTmEyS3lxUmY1K2xCSlNjRTR4"
        "cWY4OU4wZzBPdXFBYjJyZThuR3N2V2t3MjYKdURla2ZuQllpY2QrRzNDeWRxYTJ6Rkl3VjdUYWx5"
        "ZzJVTFczcjhLYkdweWw4NG1KRVBQUm1DR0orSDlndENzZgorT3JKNFk3NkxWV2pZekJoTUI4R0Ex"
        "VWRJd1FZTUJhQUZCYzZFS0dyR1h6bEFFK3MwWmduc3BoYWR3N05NQThHCkExVWRFd0VCL3dRRk1B"
        "TUJBZjh3RGdZRFZSMFBBUUgvQkFRREFnRUdNQjBHQTFVZERnUVdCQlRiaHJjaUZ0VUwKb1V1MzNT"
        "Vjd1ZkVGZmFJdFJ6QU1CZ2dxaGtqT1BRUURBd1VBQTJnQU1HVUNNRzNjWGppRG1YVHZmN0Q0T21o"
        "ZgpxY2MybnVPK0VNZldFK045WmhCUDVVaFYzNG1BR1dpM1NmTFU2cmNWMHVyV0VRSXhBTVlJYjNl"
        "cE9uS2hVcmNtCkxmdTFXS3pGbHBZUXdtdzczUmFDSFAySTNrNk5jdVdPWWVOd1dYU05aOG8wbnp2"
        "YUxnPT0KLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQ=="
    ),
    "OpenHarmonyProfileRelease.pem": (
        "LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUNSRENDQWNtZ0F3SUJBZ0lFRCtFNGl6QU1C"
        "Z2dxaGtqT1BRUURBd1VBTUdneEN6QUpCZ05WQkFZVEFrTk8KTVJRd0VnWURWUVFLRXd0UGNHVnVT"
        "R0Z5Ylc5dWVURVpNQmNHQTFVRUN4TVFUM0JsYmtoaGNtMXZibmtnVkdWaApiVEVvTUNZR0ExVUVB"
        "eE1mVDNCbGJraGhjbTF2Ym5rZ1FYQndiR2xqWVhScGIyNGdVbTl2ZENCRFFUQWVGdzB5Ck1UQXlN"
        "REl4TWpFME1UaGFGdzAwT1RFeU16RXhNakUwTVRoYU1HZ3hDekFKQmdOVkJBWVRBa05PTVJRd0Vn"
        "WUQKVlFRS0V3dFBjR1Z1U0dGeWJXOXVlVEVaTUJjR0ExVUVDeE1RVDNCbGJraGhjbTF2Ym5rZ1ZH"
        "VmhiVEVvTUNZRwpBMVVFQXhNZlQzQmxia2hoY20xdmJua2dRWEJ3YkdsallYUnBiMjRnVW05dmRD"
        "QkRRVEIyTUJBR0J5cUdTTTQ5CkFnRUdCU3VCQkFBaUEySUFCRTAyM1htUmF3MkRuTzhOU3NiK0tH"
        "L3VZMEZ0UzN1NUxRdWNkcjNxV1ZuUlc1dWkKUUlMNnR0TlpCRWVMVFVlWWNKWkNwYXlnOUxsZisx"
        "U21EQTdkWTRpUDJFY1JvNFVOM3JpbG92dGZGZnNtSDR0eQozU0FwSFZGeldVbCtOd2RIOEtOQ01F"
        "QXdEd1lEVlIwVEFRSC9CQVV3QXdFQi96QU9CZ05WSFE4QkFmOEVCQU1DCkFRWXdIUVlEVlIwT0JC"
        "WUVGQmM2RUtHckdYemxBRStzMFpnbnNwaGFkdzdOTUF3R0NDcUdTTTQ5QkFNREJRQUQKWndBd1pB"
        "SXdkMXAzSnpITjkzZW9QcGVkMWxpMGo2NG5wZ3FOend5NE9ya2VoWUFxTlhwY3BhRWNMWjdVeFc4"
        "RQpJMmxaSjNTYkFqQWtxeVNIYjEyc0l3ZFNGS1NOOUtDTU1Fby9lVVQ1ZFVYbGNLUjJuWnowTUpk"
        "eFQ1RjUxcWNYCjFDdW16a2NZaGdVPQotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0tCi0tLS0tQkVH"
        "SU4gQ0VSVElGSUNBVEUtLS0tLQpNSUlDWVRDQ0FlV2dBd0lCQWdJRUhtWEFQVEFNQmdncWhrak9Q"
        "UVFEQXdVQU1HZ3hDekFKQmdOVkJBWVRBa05PCk1SUXdFZ1lEVlFRS0V3dFBjR1Z1U0dGeWJXOXVl"
        "VEVaTUJjR0ExVUVDeE1RVDNCbGJraGhjbTF2Ym5rZ1ZHVmgKYlRFb01DWUdBMVVFQXhNZlQzQmxi"
        "a2hoY20xdmJua2dRWEJ3YkdsallYUnBiMjRnVW05dmRDQkRRVEFlRncweQpNVEF5TURJeE1qRTFN"
        "ekphRncwME9URXlNekV4TWpFMU16SmFNR014Q3pBSkJnTlZCQVlUQWtOT01SUXdFZ1lEClZRUUtF"
        "d3RQY0dWdVNHRnliVzl1ZVRFWk1CY0dBMVVFQ3hNUVQzQmxia2hoY20xdmJua2dWR1ZoYlRFak1D"
        "RUcKQTFVRUF4TWFUM0JsYmtoaGNtMXZibmtnUVhCd2JHbGpZWFJwYjI0Z1EwRXdkakFRQmdjcWhr"
        "ak9QUUlCQmdVcgpnUVFBSWdOaUFBUWhudTdIbmE4WE5hMkt5cVJmNStsQkpTY0U0eHFmODlOMGcw"
        "T3VxQWIycmU4bkdzdldrdzI2CnVEZWtmbkJZaWNkK0czQ3lkcWEyekZJd1Y3VGFseWcyVUxXM3I4"
        "S2JHcHlsODRtSkVQUFJtQ0dKK0g5Z3RDc2YKK09ySjRZNzZMVldqWXpCaE1COEdBMVVkSXdRWU1C"
        "YUFGQmM2RUtHckdYemxBRStzMFpnbnNwaGFkdzdOTUE4RwpBMVVkRXdFQi93UUZNQU1CQWY4d0Rn"
        "WURWUjBQQVFIL0JBUURBZ0VHTUIwR0ExVWREZ1FXQkJUYmhyY2lGdFVMCm9VdTMzU1Y3dWZFRmZh"
        "SXRSekFNQmdncWhrak9QUVFEQXdVQUEyZ0FNR1VDTUczY1hqaURtWFR2ZjdENE9taGYKcWNjMm51"
        "TytFTWZXRStOOVpoQlA1VWhWMzRtQUdXaTNTZkxVNnJjVjB1cldFUUl4QU1ZSWIzZXBPbktoVXJj"
        "bQpMZnUxV0t6RmxwWVF3bXc3M1JhQ0hQMkkzazZOY3VXT1llTndXWFNOWjhvMG56dmFMZz09Ci0t"
        "LS0tRU5EIENFUlRJRklDQVRFLS0tLS0KLS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUNQ"
        "RENDQWIrZ0F3SUJBZ0lFTjZkdHZqQU1CZ2dxaGtqT1BRUURBd1VBTUdNeEN6QUpCZ05WQkFZVEFr"
        "Tk8KTVJRd0VnWURWUVFLRXd0UGNHVnVTR0Z5Ylc5dWVURVpNQmNHQTFVRUN4TVFUM0JsYmtoaGNt"
        "MXZibmtnVkdWaApiVEVqTUNFR0ExVUVBeE1hVDNCbGJraGhjbTF2Ym5rZ1FYQndiR2xqWVhScGIy"
        "NGdRMEV3SGhjTk1qRXdNakF5Ck1USXlNVEExV2hjTk5Ea3hNak14TVRJeU1UQTFXakJ3TVFzd0NR"
        "WURWUVFHRXdKRFRqRVVNQklHQTFVRUNoTUwKVDNCbGJraGhjbTF2Ym5reEdUQVhCZ05WQkFzVEVF"
        "OXdaVzVJWVhKdGIyNTVJRlJsWVcweE1EQXVCZ05WQkFNVApKMDl3Wlc1SVlYSnRiMjU1SUVGd2NH"
        "eHBZMkYwYVc5dUlGQnliMlpwYkdVZ1VtVnNaV0Z6WlRCWk1CTUdCeXFHClNNNDlBZ0VHQ0NxR1NN"
        "NDlBd0VIQTBJQUJGZlBBdXU1cHJMaVFYRytGY21TS0pxdFJqZUREWmdmQWVpdEtzU00KM3R6aEhr"
        "Mm9OL1VEMHZIR2JnSXJWRDhmdjhpZ1VaRUpGc09UTk00RGJvdkdHSnFqVWpCUU1COEdBMVVkSXdR"
        "WQpNQmFBRk51R3R5SVcxUXVoUzdmZEpYdTU4UVY5b2kxSE1BNEdBMVVkRHdFQi93UUVBd0lIZ0RB"
        "ZEJnTlZIUTRFCkZnUVV5MkhwdmFkNlR0VFBsYk9FN0FYOTlsOE5BVkl3REFZSUtvWkl6ajBFQXdN"
        "RkFBTnBBREJtQWpFQXJJNnUKQ1lKaWVhNUlKQkZDN0pCbHVXZ0dzaEtkRUhkR1B2M3NvcGkzNGtL"
        "UFpOeG05ZUduOU9HTkJqWmcvcXFkQWpFQQpvSVpxZXQvK0REcEI3Q1JkVEFVaGlzR21nRTh3M0VU"
        "Z2lpYmRVaHJBQVVPbzZTU3pvelVRZUtuK2MzN2w1QSt6Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0t"
        "LS0K"
    ),
}
for name, b64 in MATERIALS.items():
    raw = "".join(b64) if isinstance(b64, tuple) else b64
    (out / name).write_bytes(base64.b64decode(raw))
PY

cp "$JAR" "$WORK/"
cd "$WORK"

echo "==> 工程:   $PROJ"
echo "==> bundle: $BUNDLE"

python3 - "$BUNDLE" <<'PY'
import json, sys
bundle = sys.argv[1]
tpl = {
    "version-name": "2.0.0",
    "version-code": 2,
    "app-distribution-type": "os_integration",
    "uuid": "5027b99e-5f9e-465d-9508-a9e0134ffe18",
    "validity": {"not-before": 1594865258, "not-after": 1689473258},
    "type": "release",
    "bundle-info": {
        "developer-id": "OpenHarmony",
        "distribution-certificate": (
            "-----BEGIN CERTIFICATE-----\n"
            "MIICSTCCAc+gAwIBAgIFAJV7uNUwCgYIKoZIzj0EAwIwYzELMAkGA1UEBhMCQ04x\n"
            "FDASBgNVBAoMC09wZW5IYXJtb255MRkwFwYDVQQLDBBPcGVuSGFybW9ueSBUZWFt\n"
            "MSMwIQYDVQQDDBpPcGVuSGFybW9ueSBBcHBsaWNhdGlvbiBDQTAeFw0yMjAxMjkw\n"
            "NTU0MTRaFw0yMzAxMjkwNTU0MTRaMGgxCzAJBgNVBAYTAkNOMRQwEgYDVQQKDAtP\n"
            "cGVuSGFybW9ueTEZMBcGA1UECwwQT3Blbkhhcm1vbnkgVGVhbTEoMCYGA1UEAwwf\n"
            "T3Blbkhhcm1vbnkgQXBwbGljYXRpb24gUmVsZWFzZTBZMBMGByqGSM49AgEGCCqG\n"
            "SM49AwEHA0IABAW8pFu7tHGUuWtddD5wvazc1qN8ts9UPZH4pecbb/bSFWKh7X7R\n"
            "/eTVaRrCTSSdovI1dhoV5GjuFsKW+jT2TwSjazBpMB0GA1UdDgQWBBScyywAaAMj\n"
            "I7HcuIS42lvZx0Lj+zAJBgNVHRMEAjAAMA4GA1UdDwEB/wQEAwIHgDATBgNVHSUE\n"
            "DDAKBggrBgEFBQcDAzAYBgwrBgEEAY9bAoJ4AQMECDAGAgEBCgEAMAoGCCqGSM49\n"
            "BAMCA2gAMGUCMFfNidGo6uK6KGT9zT1T5bY1NCHTH3P3muy5X1xudOgxWoOqIbnk\n"
            "tmQYB78dxWEHLQIxANfApAlXAD/0hnyNC8RDzfLOPEeay6jU9FXJj3AoR90rwZpR\n"
            "oN9sYD6Oks4VGRw6yQ==\n"
            "-----END CERTIFICATE-----\n"
        ),
        "bundle-name": bundle,
        "apl": "normal",
        "app-feature": "hos_normal_app",
    },
    "acls": {"allowed-acls": [""]},
    "permissions": {"restricted-permissions": []},
    "issuer": "pki_internal",
}
with open("UnsgnedReleasedProfileTemplate.json", "w", encoding="utf-8") as f:
    json.dump(tpl, f, indent=4)
PY

java -jar hap-sign-tool.jar sign-profile \
  -keyAlias "openharmony application profile release" \
  -signAlg SHA256withECDSA \
  -mode localSign \
  -profileCertFile OpenHarmonyProfileRelease.pem \
  -inFile UnsgnedReleasedProfileTemplate.json \
  -keystoreFile OpenHarmony.p12 \
  -outFile openharmony_sx.p7b \
  -keyPwd 123456 \
  -keystorePwd 123456 >/dev/null

ACTUAL=$(strings openharmony_sx.p7b | grep -o '"bundle-name":"[^"]*"' | head -1 || true)
EXPECT="\"bundle-name\":\"$BUNDLE\""
[[ "$ACTUAL" == "$EXPECT" ]] || die "p7b bundle 校验失败 expect=$EXPECT got=${ACTUAL:-<empty>}"

mkdir -p "$(dirname "$OUT")"
cp openharmony_sx.p7b "$OUT"
echo "OK: $OUT"
echo "  bundle-name: $BUNDLE"
