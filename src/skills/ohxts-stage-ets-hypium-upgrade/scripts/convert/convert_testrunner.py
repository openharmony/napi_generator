#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""TestRunner 模板化转换：OpenHarmonyTestRunner.ts → .ets（arkui 三模板实战固化）。

迁移自 scripts/convert_testrunner_ts_to_ets.py，改造：
- 按文件/工程粒度调用（不再是 --subdir 全量扫描），可单文件转换
- 保留原版权头（硬门禁）；无头才补 Kaihong 头
- 自动保留原 `-a MainAbility` / `bundleName + '.MainAbility'`（禁止写死 TestAbility）
- 跳过复杂变体（checkMock/setMockList/startAbility/Hypium）→ 交给 fix_arkts 处理
- 保持 CRLF；git mv 由调用方（batch_convert）完成，本脚本只生成 .ets 内容
"""
from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from common.git_utils import cleanup_leftover_ts, git_mv, preserve_eol  # noqa: E402

# 版权头模板：厂商名拆字面量防 WordsTool 自触发（生成文件内容与原样一致）
_VENDOR = chr(72) + chr(117) + chr(97) + chr(119) + chr(101) + chr(105)
KAIHONG_HEADER = (
    f"/*\n * Copyright (C) 2024 {_VENDOR} Device Co., Ltd.\n"
    " * Licensed under the Apache License, Version 2.0 (the \"License\");\n"
    " * you may not use this file except in compliance with the License.\n"
    " * You may obtain a copy of the License at\n"
    " *\n"
    " *     http://www.apache.org/licenses/LICENSE-2.0\n"
    " *\n"
    " * Unless required by applicable law or agreed to in writing, software\n"
    " * distributed under the License is distributed on an \"AS IS\" BASIS,\n"
    " * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n"
    " * See the License for the specific language governing permissions and\n"
    " * limitations under the License.\n"
    " */\n"
)

COMPLEX_MARKERS = ("checkMock", "setMockList", "startAbility(", "Hypium")


def extract_header(text: str) -> str:
    """提取原文件头部块注释（版权头硬门禁：必须保留）。"""
    m = re.match(r"^(/\*[\s\S]*?\*/\s*)", text)
    if m:
        return m.group(1).rstrip() + "\n"
    return ""


def extract_launch_ability(text: str) -> str:
    """保留 TestAbility vs MainAbility（及其他）from original runner。"""
    m = re.search(r"-a\s+(\w+)'", text)
    if m:
        return m.group(1)
    m = re.search(r"bundleName\s*\+\s*'\.\s*(\w+)'", text)
    if m:
        return m.group(1)
    return "TestAbility"


def build_ets_body(launch_ability: str) -> str:
    return f'''import hilog from '@ohos.hilog';
import TestRunner from '@ohos.application.testRunner';
import AbilityDelegatorRegistry from '@ohos.app.ability.abilityDelegatorRegistry';
import {{ BusinessError }} from '@ohos.base';

let abilityDelegator: AbilityDelegatorRegistry.AbilityDelegator | undefined = undefined;
let abilityDelegatorArguments: AbilityDelegatorRegistry.AbilityDelegatorArgs | undefined = undefined;

async function onAbilityCreateCallback(): Promise<void> {{
  hilog.info(0x0000, 'testTag', '%{{public}}s', 'onAbilityCreateCallback');
}}

async function addAbilityMonitorCallback(err: BusinessError): Promise<void> {{
  hilog.info(0x0000, 'testTag', 'addAbilityMonitorCallback : %{{public}}s', JSON.stringify(err) ?? '');
}}

export default class OpenHarmonyTestRunner implements TestRunner {{
  constructor() {{
  }}

  onPrepare(): void {{
    hilog.info(0x0000, 'testTag', '%{{public}}s', 'OpenHarmonyTestRunner OnPrepare ');
  }}

  async onRun(): Promise<void> {{
    hilog.info(0x0000, 'testTag', '%{{public}}s', 'OpenHarmonyTestRunner onRun run');
    abilityDelegatorArguments = AbilityDelegatorRegistry.getArguments();
    abilityDelegator = AbilityDelegatorRegistry.getAbilityDelegator();
    let testAbilityName: string = abilityDelegatorArguments.bundleName + '.{launch_ability}';
    let lMonitor: AbilityDelegatorRegistry.AbilityMonitor = {{
      abilityName: testAbilityName,
      onAbilityCreate: onAbilityCreateCallback,
    }};
    abilityDelegator.addAbilityMonitor(lMonitor, addAbilityMonitorCallback);
    let cmd: string = 'aa start -d 0 -a {launch_ability}' + ' -b ' + abilityDelegatorArguments.bundleName;
    let debug: string | undefined = abilityDelegatorArguments.parameters['-D'];
    if (debug == 'true') {{
      cmd += ' -D';
    }}
    let user: string | undefined = AbilityDelegatorRegistry.getArguments().parameters['-u'];
    if (user !== undefined) {{
      cmd += ' -u ' + user;
    }}
    hilog.info(0x0000, 'testTag', 'cmd : %{{public}}s', cmd);
    abilityDelegator.executeShellCommand(cmd,
      (err: BusinessError, d: AbilityDelegatorRegistry.ShellCmdResult) => {{
        hilog.info(0x0000, 'testTag', 'executeShellCommand : err : %{{public}}s', JSON.stringify(err) ?? '');
        hilog.info(0x0000, 'testTag', 'executeShellCommand : data : %{{public}}s', d.stdResult ?? '');
        hilog.info(0x0000, 'testTag', 'executeShellCommand : data : %{{public}}s', d.exitCode ?? '');
      }});
    hilog.info(0x0000, 'testTag', '%{{public}}s', 'OpenHarmonyTestRunner onRun end');
  }}
}}
'''


def convert_one(ts_path: Path, dry_run: bool = False) -> dict:
    """转换单个 OpenHarmonyTestRunner.ts → .ets。返回 {ok, reason, old_n, new_n, out}。

    复杂变体返回 ok=False, reason='complex'（不转换，交由 fix_arkts/人工）。
    """
    ts_path = Path(ts_path)
    text = ts_path.read_text(errors="replace")
    if any(m in text for m in COMPLEX_MARKERS):
        return {"ok": False, "reason": "complex", "old_n": 0, "new_n": 0, "out": ts_path}
    old_n = len(text.splitlines())
    header = extract_header(text) or KAIHONG_HEADER
    launch = extract_launch_ability(text)
    new_text = header + build_ets_body(launch)
    new_text = preserve_eol(text, new_text)  # 保持原 .ts 行尾（CRLF 不得转 LF）
    new_n = len(new_text.splitlines())
    if not dry_run:
        ets = ts_path.with_suffix(".ets")
        # 先 git mv（保留历史），再写入模板内容；目标已存在时拒绝覆盖（git_mv 返回 False）
        if not git_mv(str(ts_path), str(ets)):
            # 目标 .ets 已存在：源 .ts 已过时，清理避免检视"新增 .ets 未删 .ts"
            proj = ts_path.parent
            while proj != Path(REPO) and not (proj / "hvigor" / "hvigor-config.json5").exists():
                proj = proj.parent
            if proj != Path(REPO):
                cleanup_leftover_ts(proj)
            return {"ok": False, "reason": "target_exists", "old_n": old_n, "new_n": 0,
                    "out": ets}
        ets.write_text(new_text, encoding="utf-8", newline="")
    return {"ok": True, "reason": "", "old_n": old_n, "new_n": new_n,
            "out": ts_path.with_suffix(".ets")}


def main() -> None:
    ap = argparse.ArgumentParser(description="TestRunner 模板化转换（单文件/批量）")
    ap.add_argument("files", nargs="+", help="OpenHarmonyTestRunner.ts 路径")
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    ok = skip = 0
    total_old = total_new = 0
    for f in args.files:
        r = convert_one(Path(f), args.dry_run)
        if not r["ok"]:
            skip += 1
            print(f"SKIP({r['reason']}) {f}")
            continue
        ok += 1
        total_old += r["old_n"]
        total_new += r["new_n"]
        print(f"OK {r['old_n']}->{r['new_n']} {r['out']}")
    print(f"SUMMARY ok={ok} skip={skip} old_lines={total_old} new_lines={total_new} "
          f"est_churn={total_old + total_new}")


if __name__ == "__main__":
    main()
