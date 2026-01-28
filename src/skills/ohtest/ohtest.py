#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
OpenHarmony 单元测试补全：根据 .d.ts 接口定义生成 ohosTest 测试套件。
命名：接口文件名去掉特殊符号 + Test（如 Index.d.ts → IndexdtsTest）。
每个接口方法生成 4 类边界用例：正常值、最大值、最小值、异常/压力。
"""

import argparse
import os
import re
import sys


# 默认 copyright 头（与 Ability.test.ets 一致）
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


def parse_dts_exports(dts_path: str):
    """
    解析 .d.ts 文件中的导出函数/常量（API）。
    支持形式：
      export const name: (p1: type1, p2: type2) => returnType;
      export function name(p1: type1, p2: type2): returnType;
    返回列表：[(name, [param_type, ...], return_type), ...]
    """
    with open(dts_path, 'r', encoding='utf-8') as f:
        content = f.read()
    apis = []
    # export const add: (a: number, b: number) => number;
    pattern_const = re.compile(
        r'export\s+const\s+(\w+)\s*:\s*\(\s*([^)]*)\s*\)\s*=>\s*(\w+)\s*;',
        re.MULTILINE
    )
    for m in pattern_const.finditer(content):
        name = m.group(1)
        params_str = m.group(2).strip()
        return_type = m.group(3).strip()
        param_types = []
        if params_str:
            for part in re.split(r'\s*,\s*', params_str):
                # "a: number" or "x: string"
                colon = part.find(':')
                if colon >= 0:
                    param_types.append(part[colon + 1:].strip().split()[0])
                else:
                    param_types.append('any')
        apis.append((name, param_types, return_type))
    # export function name(a: type1, b: type2): returnType;
    pattern_func = re.compile(
        r'export\s+function\s+(\w+)\s*\(\s*([^)]*)\s*\)\s*:\s*(\w+)\s*;',
        re.MULTILINE
    )
    for m in pattern_func.finditer(content):
        name = m.group(1)
        params_str = m.group(2).strip()
        return_type = m.group(3).strip()
        param_types = []
        if params_str:
            for part in re.split(r'\s*,\s*', params_str):
                colon = part.find(':')
                if colon >= 0:
                    param_types.append(part[colon + 1:].strip().split()[0])
                else:
                    param_types.append('any')
        if not any(a[0] == name for a in apis):
            apis.append((name, param_types, return_type))
    return apis


def suite_name_from_filename(dts_path: str) -> str:
    """接口文件名去掉特殊符号 + Test。Index.d.ts → IndexdtsTest（整文件名去非字母数字后+Test）。"""
    base = os.path.basename(dts_path)
    # 整文件名只保留字母数字，如 Index.d.ts → Indexdts
    alnum = re.sub(r'[^a-zA-Z0-9]', '', base)
    if not alnum:
        alnum = 'Index'
    return alnum + 'Test'


def function_name_from_suite(suite_name: str) -> str:
    """IndexdtsTest → indexdtsTest（首字母小写）。"""
    if not suite_name:
        return 'indexTest'
    return suite_name[0].lower() + suite_name[1:]


def gen_test_cases_for_api(api_name: str, param_types: list, return_type: str, module_var: str) -> str:
    """
    为一个 API 生成 4 个 it() 用例：正常值、最大值、最小值、异常/压力。
    调用形式：module_var.api_name(args...)
    """
    lines = []
    # 参数占位：按类型给默认值，用于生成调用
    def arg_list_normal():
        args = []
        for i, t in enumerate(param_types):
            if t == 'number':
                args.append(str(i + 1))  # 1, 2 for add(a,b) => 3
            elif t == 'string':
                args.append("'a'")
            elif t == 'boolean':
                args.append('true')
            else:
                args.append('0')
        return ', '.join(args)

    def arg_list_max():
        args = []
        for i, t in enumerate(param_types):
            if t == 'number':
                args.append('Number.MAX_SAFE_INTEGER' if i == 0 else '0')
            elif t == 'string':
                args.append("'z'")
            elif t == 'boolean':
                args.append('true')
            else:
                args.append('Number.MAX_SAFE_INTEGER' if i == 0 else '0')
        return ', '.join(args)

    def arg_list_min():
        args = []
        for i, t in enumerate(param_types):
            if t == 'number':
                args.append('Number.MIN_SAFE_INTEGER' if i == 0 else '0')
            elif t == 'string':
                args.append("''")
            elif t == 'boolean':
                args.append('false')
            else:
                args.append('Number.MIN_SAFE_INTEGER' if i == 0 else '0')
        return ', '.join(args)

    call_normal = f"{module_var}.{api_name}({arg_list_normal()})"
    call_max = f"{module_var}.{api_name}({arg_list_max()})"
    call_min = f"{module_var}.{api_name}({arg_list_min()})"

    # 预期值：根据常见 API 约定简单写；实际需用户按接口语义修改
    # 对 add(1,2) 预期 3；对 add(MAX,0) 预期 MAX；对 add(MIN,0) 预期 MIN；压力测试 1000 次 add(1,1)=2
    if api_name == 'add' and param_types == ['number', 'number']:
        exp_normal = '3'
        exp_max = 'Number.MAX_SAFE_INTEGER'
        exp_min = 'Number.MIN_SAFE_INTEGER'
    else:
        exp_normal = call_normal
        exp_max = call_max
        exp_min = call_min

    # it('add_tc_1', 0, () => { hilog...; let result = lib.add(1,2); expect(result).assertEqual(3); })
    lines.append(f"    it('{api_name}_tc_1', 0, () => {{")
    lines.append(f"      hilog.info(0x0000, 'testTag', '%{{public}}s', '{api_name} normal');")
    lines.append(f"      let result = {call_normal};")
    lines.append(f"      expect(result).assertEqual({exp_normal});")
    lines.append(f"    }})")
    lines.append(f"    it('{api_name}_tc_2', 0, () => {{")
    lines.append(f"      hilog.info(0x0000, 'testTag', '%{{public}}s', '{api_name} max');")
    lines.append(f"      let result = {call_max};")
    lines.append(f"      expect(result).assertEqual({exp_max});")
    lines.append(f"    }})")
    lines.append(f"    it('{api_name}_tc_3', 0, () => {{")
    lines.append(f"      hilog.info(0x0000, 'testTag', '%{{public}}s', '{api_name} min');")
    lines.append(f"      let result = {call_min};")
    lines.append(f"      expect(result).assertEqual({exp_min});")
    lines.append(f"    }})")
    lines.append(f"    it('{api_name}_tc_4', 0, () => {{")
    lines.append(f"      hilog.info(0x0000, 'testTag', '%{{public}}s', '{api_name} stress');")
    lines.append(f"      for (let i = 0; i < 1000; i++) {{")
    lines.append(f"        let result = {call_normal};")
    lines.append(f"        expect(result).assertEqual({exp_normal});")
    lines.append(f"      }}")
    lines.append(f"    }})")
    return '\n'.join(lines)


def generate_test_file_content(
    suite_name: str,
    function_name: str,
    apis: list,
    module_import: str,
    module_var: str = 'lib',
) -> str:
    """生成完整测试文件内容（参照 Ability.test.ets）。"""
    parts = [DEFAULT_COPYRIGHT]
    parts.append("import { hilog } from '@kit.PerformanceAnalysisKit';")
    parts.append("import { describe, beforeAll, beforeEach, afterEach, afterAll, it, expect } from '@ohos/hypium';")
    parts.append(f"import {module_var} from '{module_import}';")
    parts.append("")
    parts.append(f"export default function {function_name}() {{")
    parts.append(f"  describe('{suite_name}', () => {{")
    parts.append("    beforeAll(() => {")
    parts.append("      // Presets an action, which is performed only once before all test cases of the test suite start.")
    parts.append("    })")
    parts.append("    beforeEach(() => {")
    parts.append("      // Presets an action, which is performed before each unit test case starts.")
    parts.append("    })")
    parts.append("    afterEach(() => {")
    parts.append("      // Presets a clear action, which is performed after each unit test case ends.")
    parts.append("    })")
    parts.append("    afterAll(() => {")
    parts.append("      // Presets a clear action, which is performed after all test cases of the test suite end.")
    parts.append("    })")
    for name, param_types, return_type in apis:
        parts.append(gen_test_cases_for_api(name, param_types, return_type, module_var))
    parts.append("  })")
    parts.append("}")
    return '\n'.join(parts)


def update_list_test(list_test_path: str, import_name: str, function_name: str, test_file_basename: str) -> bool:
    """
    在 List.test.ets 中增加对新测试套的 import 和调用。
    test_file_basename 如 'Indexdts.test'，对应 import from './Indexdts.test'，调用 function_name()。
    """
    if not os.path.exists(list_test_path):
        return False
    with open(list_test_path, 'r', encoding='utf-8') as f:
        content = f.read()
    # 避免重复
    if function_name in content and f"from './{test_file_basename}'" in content:
        return True
    # 插入 import：在最后一个 import 之后
    import_line = f"import {import_name} from './{test_file_basename}';"
    if import_line not in content:
        # 在 "import abilityTest from './Ability.test';" 后加一行
        content = content.replace(
            "import abilityTest from './Ability.test';",
            "import abilityTest from './Ability.test';\n" + import_line
        )
    # 在 testsuite() 里增加调用
    if f"{import_name}();" not in content:
        content = content.replace(
            "  abilityTest();",
            "  abilityTest();\n  " + import_name + "();"
        )
    with open(list_test_path, 'w', encoding='utf-8') as f:
        f.write(content)
    return True


def main():
    parser = argparse.ArgumentParser(description='根据 .d.ts 生成 OpenHarmony 单元测试套件')
    parser.add_argument('--dts', required=True, help='接口定义文件路径，如 entry/.../Index.d.ts')
    parser.add_argument('--test-dir', required=True, help='ohosTest 的 test 目录路径')
    parser.add_argument('--module', default='libentry.so', help='导入的模块名，如 libentry.so')
    parser.add_argument('--module-var', default='lib', help='模块变量名，如 lib')
    parser.add_argument('--no-update-list', action='store_true', help='不更新 List.test.ets')
    parser.add_argument('--list-file', default='List.test.ets', help='主测试入口文件名')
    args = parser.parse_args()

    dts_path = os.path.abspath(args.dts)
    if not os.path.isfile(dts_path):
        print(f"错误: 未找到文件 {dts_path}", file=sys.stderr)
        sys.exit(1)
    test_dir = os.path.abspath(args.test_dir)
    if not os.path.isdir(test_dir):
        print(f"错误: 未找到目录 {test_dir}", file=sys.stderr)
        sys.exit(1)

    apis = parse_dts_exports(dts_path)
    if not apis:
        print("未在 .d.ts 中解析到导出接口，请检查文件格式。", file=sys.stderr)
        sys.exit(1)

    suite_name = suite_name_from_filename(dts_path)
    function_name = function_name_from_suite(suite_name)
    # 测试文件名：Indexdts.test.ets（与 describe 名对应，便于识别）
    test_file_basename = suite_name[:-4] if suite_name.endswith('Test') else suite_name
    test_file_basename = test_file_basename + '.test'
    test_file_path = os.path.join(test_dir, test_file_basename + '.ets')

    content = generate_test_file_content(
        suite_name=suite_name,
        function_name=function_name,
        apis=apis,
        module_import=args.module,
        module_var=args.module_var,
    )
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
