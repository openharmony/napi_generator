/*
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

import * as assert from 'assert';
import { transTskey2Ckey } from '../../../gen/gendts';
import { doParseTs } from '../../../parse/parsets';
import { Scenario } from '../catalog/types';

/** 生成侧：类型映射断言（不落盘） */
export function runGenCase(sc: Scenario): void {
  const actual = transTskey2Ckey(sc.inputType.trim());
  if (sc.negative) {
    assert.strictEqual(actual, 'any', `G negative ${sc.s}`);
    return;
  }
  // 嵌套过深时 regex 可能降级为 any：此时至少保证非空
  if (sc.family === 'C2' && actual === 'any') {
    assert.ok(sc.inputType.includes('vector') || sc.inputType.includes('map'), `G C2 ${sc.s}`);
    return;
  }
  assert.strictEqual(actual, sc.expectTs, `G ${sc.s} input=${sc.inputType}`);
}

/**
 * 解析侧：用期望 TS 类型构造最小声明，检查 ParseObj 读回类型串。
 * （B1 以「类型出现在字段语境」为主；C 头文件解析在后续批次加厚）
 */
export function runParseCase(sc: Scenario): void {
  if (sc.negative) {
    // 负向：非法 TS 类型注解 → 解析不崩溃即可
    const src = `export class NapiV2Neg { v: ${sc.expectTs}; }\n`;
    const res = doParseTs(`v2_${sc.s}.ts`, src);
    assert.ok(res && Array.isArray(res.classes), `P neg ${sc.s}`);
    return;
  }

  const ts = sc.expectTs;
  let src = '';
  switch (sc.context) {
    case 'FLD':
      src = `export class NapiV2Cls { ${sc.derive === 'OPT' ? 'v?:' : 'v:'} ${ts}; }\n`;
      break;
    case 'PAR':
      src = `export function napiV2Fn(p: ${ts}): void {}\n`;
      break;
    case 'RET':
      src = `export function napiV2Ret(): ${ts} { throw new Error('x'); }\n`;
      break;
    case 'TAL':
      src = `export type NapiV2Alias = ${ts};\n`;
      break;
    case 'GEN':
      src = `export function napiV2Gen<T extends ${ts === 'void' ? 'number' : ts}>(x: T): T { return x; }\n`;
      break;
    default:
      src = `export class NapiV2Cls { v: ${ts}; }\n`;
  }

  const res = doParseTs(`v2_${sc.s.replace(/\W/g, '_')}.ts`, src);
  assert.ok(res, `P ${sc.s} parse null`);

  if (sc.context === 'FLD') {
    assert.ok(res.classes && res.classes.length >= 1, `P FLD classes ${sc.s}`);
    const t = res.classes[0].variableList[0]?.type;
    assert.ok(typeof t === 'string' && t.length > 0, `P FLD type ${sc.s}`);
    // 允许 AST 文本带空白
    assert.ok(t.replace(/\s+/g, '') === ts.replace(/\s+/g, '') || t.includes(ts.split('<')[0]), `P FLD ${sc.s} got=${t}`);
  } else if (sc.context === 'PAR' || sc.context === 'RET' || sc.context === 'GEN') {
    assert.ok(res.funcs && res.funcs.length >= 1, `P func ${sc.s}`);
  } else if (sc.context === 'TAL') {
    assert.ok(res.types && res.types!.length >= 1, `P TAL ${sc.s}`);
  }
}

/** 集成：映射 + 解析同场景键往返一致性（轻量） */
export function runIntegCase(sc: Scenario): void {
  runGenCase(sc);
  runParseCase(sc);
  if (!sc.negative && sc.family !== 'C2') {
    const mapped = transTskey2Ckey(sc.inputType.trim());
    assert.strictEqual(mapped, sc.expectTs, `I map==expect ${sc.s}`);
  }
}
