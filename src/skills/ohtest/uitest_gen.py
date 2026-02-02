#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
OpenHarmony 页面 UITest 生成：根据 .ets 页面文件生成 ohosTest 下的 UI 测试套件。
参考 HarmonyOS UITest 指南：Driver、ON.text/ON.type、findComponent、assertComponentExist、click 等。
对页面内每个控件、布局和动作分别生成测试用例，实现对页面的 UI 单元测试。
"""

import argparse
import os
import re
import sys

# 与 ohtest.py 共用
DEFAULT_COPYRIGHT = """/*
 * Copyright (c) 2024 Shenzhen Kaihong Digital Industry Development Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
"""

DEFAULT_CONSTANT_ETS = """/*
 * Copyright (c) 2024 Shenzhen Kaihong Digital Industry Development Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Shared constants for ohosTest (no magic numbers in test code)
export const HILOG_DOMAIN = 0x0000;
export const TEST_FILTER = 0;
export const UI_START_DELAY_MS = 2000;
export const UI_DELAY_MS = 1000;
"""


def ensure_constant_ets(test_dir: str) -> None:
    """若 test 目录下无 constant.ets 则创建；若已有但缺 UI 常量则追加（与 ohtest 共用 constant）。"""
    constant_path = os.path.join(test_dir, 'constant.ets')
    if not os.path.isfile(constant_path):
        with open(constant_path, 'w', encoding='utf-8') as f:
            f.write(DEFAULT_CONSTANT_ETS)
        print(f"已创建: {constant_path}")
    else:
        with open(constant_path, 'r', encoding='utf-8') as f:
            content = f.read()
        to_append = []
        if 'UI_START_DELAY_MS' not in content:
            to_append.append("export const UI_START_DELAY_MS = 2000;")
        if 'UI_DELAY_MS' not in content:
            to_append.append("export const UI_DELAY_MS = 1000;")
        if 'HILOG_DOMAIN' not in content:
            to_append.append("export const HILOG_DOMAIN = 0x0000;")
        if to_append:
            with open(constant_path, 'a', encoding='utf-8') as f:
                f.write("\n" + "\n".join(to_append) + "\n")
            print(f"已追加 {', '.join(to_append)} 到: {constant_path}")


def parse_ets_page(ets_path: str):
    """
    解析 .ets 页面文件，提取：struct 名、@State 初始文本、Text 控件文本、onClick 后文本、布局（Row/Column）。
    返回: dict with keys: struct_name, state_inits [{name, value}], text_items [{text, is_state_var, var_name}],
          click_changes [{var_name, value_after}], has_row, has_column
    """
    with open(ets_path, 'r', encoding='utf-8') as f:
        content = f.read()
    # 去掉单行/多行注释，减少干扰
    content_nocomment = re.sub(r'//.*?$', '', content, flags=re.MULTILINE)
    content_nocomment = re.sub(r'/\*.*?\*/', '', content_nocomment, flags=re.DOTALL)

    result = {
        'struct_name': 'Index',
        'state_inits': [],
        'text_items': [],
        'click_changes': [],
        'has_row': False,
        'has_column': False,
    }

    m = re.search(r'struct\s+(\w+)\s*\{', content_nocomment)
    if m:
        result['struct_name'] = m.group(1)

    for m in re.finditer(r"@State\s+(\w+)\s*:\s*string\s*=\s*'([^']*)'", content_nocomment):
        result['state_inits'].append({'name': m.group(1), 'value': m.group(2)})

    # Text(this.xxx) 或 Text('literal')
    for m in re.finditer(r"Text\s*\(\s*this\.(\w+)\s*\)", content_nocomment):
        var = m.group(1)
        init = next((s['value'] for s in result['state_inits'] if s['name'] == var), None)
        result['text_items'].append({
            'text': init or f'[{var}]',
            'is_state_var': True,
            'var_name': var
        })
    for m in re.finditer(r"Text\s*\(\s*'([^']*)'\s*\)", content_nocomment):
        result['text_items'].append({'text': m.group(1), 'is_state_var': False, 'var_name': None})

    # onClick 内 this.xxx = 'yyy'
    for m in re.finditer(r"this\.(\w+)\s*=\s*'([^']*)'", content_nocomment):
        result['click_changes'].append({'var_name': m.group(1), 'value_after': m.group(2)})

    result['has_row'] = bool(re.search(r'\bRow\s*\(\s*\)', content_nocomment))
    result['has_column'] = bool(re.search(r'\bColumn\s*\(\s*\)', content_nocomment))

    return result


def generate_uitest_content(
    parsed: dict,
    ability_name: str = 'EntryAbility',
    bundle_name_expr: str = 'abilityDelegatorRegistry.getArguments().bundleName',
    suite_suffix: str = 'Ui',
) -> str:
    """根据解析结果生成 UITest .ets 文件内容。使用 @kit.TestKit 的 Driver、ON，以及 abilityDelegatorRegistry。
    suite_suffix: 套件/文件名后缀，如 'Ui' -> IndexUi.test.ets/IndexUiTest，'Uitest' -> IndexUitest.test.ets/IndexUitestTest。"""
    struct_name = parsed['struct_name']
    suite_name = f'{struct_name}{suite_suffix}Test'
    function_name = suite_name[0].lower() + suite_name[1:] if len(suite_name) > 1 else 'indexUiTest'

    # 与 Indexdts 测试风格一致：hilog、用例注释、assert 前注释、花括号换行
    lines = [
        DEFAULT_COPYRIGHT.strip(),
        "",
        "import { hilog } from '@kit.PerformanceAnalysisKit';",
        "import { describe, beforeAll, beforeEach, afterEach, afterAll, it, expect } from '@ohos/hypium';",
        "import { abilityDelegatorRegistry, Driver, ON } from '@kit.TestKit';",
        "import { UIAbility, Want } from '@kit.AbilityKit';",
        "import { HILOG_DOMAIN, TEST_FILTER, UI_DELAY_MS, UI_START_DELAY_MS } from './constant';",
        "",
        "const delegator = abilityDelegatorRegistry.getAbilityDelegator();",
        "const bundleName = " + bundle_name_expr + ";",
        "",
        "function sleep(ms: number): Promise<void> {",
        "  return new Promise<void>((resolve) => setTimeout(resolve, ms));",
        "}",
        "",
        "export default function " + function_name + "() {",
        "  describe('" + suite_name + "', () => {",
        "    // Defines a test suite. Two parameters are supported: test suite name and test suite function.",
        "    beforeAll(async () => {",
        "      // Presets an action, which is performed only once before all test cases of the test suite start.",
        "      // moduleName required when starting from test module to app module.",
        "      const want: Want = { bundleName, moduleName: 'entry', abilityName: '" + ability_name + "' };",
        "      await delegator.startAbility(want);",
        "      await sleep(UI_START_DELAY_MS);",
        "    })",
        "    beforeEach(async () => {",
        "      // Presets an action, which is performed before each unit test case starts.",
        "      await sleep(200);",
        "    })",
        "    afterEach(() => {",
        "      // Presets a clear action, which is performed after each unit test case ends.",
        "    })",
        "    afterAll(() => {",
        "      // Presets a clear action, which is performed after all test cases of the test suite end.",
        "    })",
        "",
    ]

    # 1. 页面加载：当前 Top Ability 为 EntryAbility
    lines.append("    // ========== 页面加载 ==========")
    lines.append("    it('test_page_load_top_ability', TEST_FILTER, async (done: Function) => {")
    lines.append("      // Test case: verify current top ability is EntryAbility.")
    lines.append("      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'test_page_load_top_ability');")
    lines.append("      const ability: UIAbility = await delegator.getCurrentTopAbility();")
    lines.append("      // Defines a variety of assertion methods, which are used to declare expected boolean conditions.")
    lines.append("      expect(ability.context.abilityInfo.name).assertEqual('" + ability_name + "');")
    lines.append("      done();")
    lines.append("    })")
    lines.append("")

    # 2. 布局：Row / Column 存在
    if parsed['has_row']:
        lines.append("")
        lines.append("    // ========== 布局控件：Row ==========")
        lines.append("    it('test_layout_Row_exists', TEST_FILTER, async (done: Function) => {")
        lines.append("      // Test case: verify Row layout component exists on page.")
        lines.append("      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'test_layout_Row_exists');")
        lines.append("      const driver = Driver.create();")
        lines.append("      await driver.delayMs(UI_DELAY_MS);")
        lines.append("      // Defines a variety of assertion methods, which are used to declare expected boolean conditions.")
        lines.append("      await driver.assertComponentExist(ON.type('Row'));")
        lines.append("      done();")
        lines.append("    })")
        lines.append("")
    if parsed['has_column']:
        lines.append("")
        lines.append("    // ========== 布局控件：Column ==========")
        lines.append("    it('test_layout_Column_exists', TEST_FILTER, async (done: Function) => {")
        lines.append("      // Test case: verify Column layout component exists on page.")
        lines.append("      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', 'test_layout_Column_exists');")
        lines.append("      const driver = Driver.create();")
        lines.append("      await driver.delayMs(UI_DELAY_MS);")
        lines.append("      // Defines a variety of assertion methods, which are used to declare expected boolean conditions.")
        lines.append("      await driver.assertComponentExist(ON.type('Column'));")
        lines.append("      done();")
        lines.append("    })")
        lines.append("")

    # 3. 控件存在：每个初始显示的文本
    lines.append("")
    seen_texts = set()
    for i, item in enumerate(parsed['text_items']):
        text = item['text']
        if not text or text in seen_texts:
            continue
        if len(seen_texts) == 0:
            lines.append("    // ========== 文本控件：Text 初始文案 ==========")
        seen_texts.add(text)
        safe = text.replace("\\", "\\\\").replace("'", "\\'")
        case_name = "test_component_Text_exists_" + str(i) + "_initial"
        lines.append("")
        lines.append("    it('" + case_name + "', TEST_FILTER, async (done: Function) => {")
        lines.append("      // Test case: verify Text with initial content exists.")
        lines.append("      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', '" + case_name + "');")
        lines.append("      const driver = Driver.create();")
        lines.append("      await driver.delayMs(UI_DELAY_MS);")
        lines.append("      // Defines a variety of assertion methods, which are used to declare expected boolean conditions.")
        lines.append("      await driver.assertComponentExist(ON.text('" + safe + "'));")
        lines.append("      done();")
        lines.append("    })")
        lines.append("")

    # 4. 动作：点击后断言变化（每个 state 变量只生成一次点击测试）
    emitted_click_vars = set()
    for i, item in enumerate(parsed['text_items']):
        if not item['is_state_var'] or not item['var_name']:
            continue
        var_name = item['var_name']
        if var_name in emitted_click_vars:
            continue
        change = next((c for c in parsed['click_changes'] if c['var_name'] == var_name), None)
        if not change:
            continue
        emitted_click_vars.add(var_name)
        initial_text = item['text']
        after_text = change['value_after']
        if initial_text == after_text:
            continue
        safe_initial = initial_text.replace("\\", "\\\\").replace("'", "\\'")
        safe_after = after_text.replace("\\", "\\\\").replace("'", "\\'")
        case_name = "test_click_Text_then_shows_" + var_name
        lines.append("")
        lines.append("    // ========== 文本控件：Text 点击后文案变化 ==========")
        lines.append("    it('" + case_name + "', TEST_FILTER, async (done: Function) => {")
        lines.append("      // Test case: click Text then verify content changes.")
        lines.append("      hilog.info(HILOG_DOMAIN, 'testTag', '%{public}s', '" + case_name + "');")
        lines.append("      const driver = Driver.create();")
        lines.append("      await driver.delayMs(UI_DELAY_MS);")
        lines.append("      const comp = await driver.findComponent(ON.text('" + safe_initial + "'));")
        lines.append("      await comp.click();")
        lines.append("      await driver.delayMs(UI_DELAY_MS);")
        lines.append("      // Defines a variety of assertion methods, which are used to declare expected boolean conditions.")
        lines.append("      await driver.assertComponentExist(ON.text('" + safe_after + "'));")
        lines.append("      done();")
        lines.append("    })")
        lines.append("")

    lines.append("  });")
    lines.append("}")
    return "\n".join(lines)


def update_list_test(list_test_path: str, import_name: str, function_name: str, test_file_basename: str) -> bool:
    """在 List.test.ets 中增加对 UITest 套的 import 和调用。"""
    if not os.path.exists(list_test_path):
        return False
    with open(list_test_path, 'r', encoding='utf-8') as f:
        content = f.read()
    if function_name in content and f"from './{test_file_basename}'" in content:
        return True
    import_line = f"import {import_name} from './{test_file_basename}';"
    if import_line not in content:
        content = content.replace(
            "import abilityTest from './Ability.test';",
            "import abilityTest from './Ability.test';\n" + import_line
        )
    if f"{import_name}();" not in content:
        content = content.replace(
            "  abilityTest();",
            "  abilityTest();\n  " + import_name + "();"
        )
    with open(list_test_path, 'w', encoding='utf-8') as f:
        f.write(content)
    return True


def main():
    parser = argparse.ArgumentParser(
        description='根据 .ets 页面文件生成 ohosTest 下的 UITest 套件（控件、布局、动作）'
    )
    parser.add_argument('--ets', required=True, help='页面 .ets 文件路径，如 entry/src/main/ets/pages/Index.ets')
    parser.add_argument('--test-dir', required=True, help='ohosTest 的 test 目录路径')
    parser.add_argument('--ability-name', default='EntryAbility', help='启动的 Ability 名称')
    parser.add_argument('--suite-suffix', default='Uitest', dest='suite_suffix',
                        help='套件/文件名后缀：Ui -> IndexUi.test.ets/IndexUiTest；Uitest -> IndexUitest.test.ets/IndexUitestTest（默认 Uitest）')
    parser.add_argument('--no-update-list', action='store_true', help='不更新 List.test.ets')
    parser.add_argument('--list-file', default='List.test.ets', help='主测试入口文件名')
    args = parser.parse_args()

    ets_path = os.path.abspath(args.ets)
    if not os.path.isfile(ets_path):
        print(f"错误: 未找到文件 {ets_path}", file=sys.stderr)
        sys.exit(1)
    test_dir = os.path.abspath(args.test_dir)
    if not os.path.isdir(test_dir):
        print(f"错误: 未找到目录 {test_dir}", file=sys.stderr)
        sys.exit(1)

    ensure_constant_ets(test_dir)
    parsed = parse_ets_page(ets_path)
    struct_name = parsed['struct_name']
    suffix = (args.suite_suffix or 'Uitest').strip()
    suite_name = f'{struct_name}{suffix}Test'
    function_name = suite_name[0].lower() + suite_name[1:] if len(suite_name) > 1 else 'indexUitestTest'
    test_file_basename = f'{struct_name}{suffix}.test'
    test_file_path = os.path.join(test_dir, test_file_basename + '.ets')

    content = generate_uitest_content(parsed, ability_name=args.ability_name, suite_suffix=suffix)
    with open(test_file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"已生成: {test_file_path}")

    if not args.no_update_list:
        list_path = os.path.join(test_dir, args.list_file)
        if update_list_test(list_path, function_name, function_name, test_file_basename):
            print(f"已更新: {list_path}")
        else:
            print(f"未找到或未修改: {list_path}")

    return 0


if __name__ == '__main__':
    sys.exit(main())
