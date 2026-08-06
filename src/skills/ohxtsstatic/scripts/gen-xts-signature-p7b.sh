#!/usr/bin/env bash
# 兼容入口 → xts_shared 规范脚本
exec bash "$(dirname "$(readlink -f "$0")")/../../xts_shared/gen-xts-signature-p7b.sh" "$@"
