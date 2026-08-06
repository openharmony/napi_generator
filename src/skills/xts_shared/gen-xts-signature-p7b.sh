#!/usr/bin/env bash
# XTS 通用：为静态 / 动态 / CAPI 工程生成 signature/openharmony_sx.p7b。
# 禁止从模板工程 cp p7b 直接提交（已两次导致 CI/GN 验签失败）。
# 用法: gen-xts-signature-p7b.sh [工程根目录]
# 无参数时使用当前目录。拷到工程内一键生成请用同目录 gen-signature.sh。
set -euo pipefail

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
if [[ $# -ge 1 ]]; then
  exec bash "$HERE/gen-signature.sh" "$1"
fi
exec bash "$HERE/gen-signature.sh"
