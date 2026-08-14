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

import { Scenario, SuiteKind } from '../../suite_v2/catalog/types';

/** 生成可阅读的逐步展开 it 体（对齐 commonlibrary，禁止 runXxxCase 封装调用） */

function q(s: string): string {
  return JSON.stringify(s);
}

function buildParseSrc(sc: Scenario): string {
  const ts = sc.expectTs;
  if (sc.negative) {
    return `export class NapiV2Neg { v: ${ts}; }\n`;
  }
  switch (sc.context) {
    case 'FLD':
      return `export class NapiV2Cls { ${sc.derive === 'OPT' ? 'v?:' : 'v:'} ${ts}; }\n`;
    case 'PAR':
      return `export function napiV2Fn(p: ${ts}): void {}\n`;
    case 'RET':
      return `export function napiV2Ret(): ${ts} { throw new Error('x'); }\n`;
    case 'TAL':
      return `export type NapiV2Alias = ${ts};\n`;
    case 'GEN':
      return `export function napiV2Gen<T extends ${ts === 'void' ? 'number' : ts}>(x: T): T { return x; }\n`;
    default:
      return `export class NapiV2Cls { v: ${ts}; }\n`;
  }
}

function parseFileName(sc: Scenario): string {
  return `v3_${sc.s.replace(/\W/g, '_')}.ts`;
}

function emitParseBody(sc: Scenario, indent: string): string[] {
  const src = buildParseSrc(sc);
  const file = parseFileName(sc);
  const lines: string[] = [];
  lines.push(`${indent}// step1: 构造待解析源码`);
  lines.push(`${indent}const src = ${q(src)};`);
  lines.push(`${indent}// step2: 调用解析`);
  lines.push(`${indent}const res = doParseTs(${q(file)}, src);`);

  if (sc.negative) {
    lines.push(`${indent}// step3: 负向 — 解析不崩溃且返回 classes`);
    lines.push(`${indent}assert.ok(res && Array.isArray(res.classes), ${q(`P neg ${sc.s}`)});`);
    return lines;
  }

  lines.push(`${indent}// step3: 解析结果非空`);
  lines.push(`${indent}assert.ok(res, ${q(`P ${sc.s} parse null`)});`);

  if (sc.context === 'FLD') {
    const ts = sc.expectTs;
    const compact = ts.replace(/\s+/g, '');
    const head = ts.split('<')[0];
    lines.push(`${indent}// step4: 校验字段类型`);
    lines.push(`${indent}assert.ok(res.classes && res.classes.length >= 1, ${q(`P FLD classes ${sc.s}`)});`);
    lines.push(`${indent}const t = res.classes[0].variableList[0].type;`);
    lines.push(`${indent}assert.ok(typeof t === 'string' && t.length > 0, ${q(`P FLD type ${sc.s}`)});`);
    lines.push(
      `${indent}assert.ok(t.replace(/\\s+/g, '') === ${q(compact)} || t.includes(${q(head)}), ${q(`P FLD ${sc.s}`)} + ' got=' + t);`
    );
  } else if (sc.context === 'PAR' || sc.context === 'RET' || sc.context === 'GEN') {
    lines.push(`${indent}// step4: 校验函数声明存在`);
    lines.push(`${indent}assert.ok(res.funcs && res.funcs.length >= 1, ${q(`P func ${sc.s}`)});`);
  } else if (sc.context === 'TAL') {
    lines.push(`${indent}// step4: 校验 type alias 存在`);
    lines.push(`${indent}assert.ok(res.types && res.types.length >= 1, ${q(`P TAL ${sc.s}`)});`);
  }
  return lines;
}

function emitGenBody(sc: Scenario, indent: string): string[] {
  const input = sc.inputType.trim();
  const lines: string[] = [];
  lines.push(`${indent}// step1: 输入 C/声明类型`);
  lines.push(`${indent}const inputType = ${q(input)};`);
  lines.push(`${indent}// step2: 映射为 TS 类型`);
  lines.push(`${indent}const actual = transTskey2Ckey(inputType);`);

  if (sc.negative) {
    lines.push(`${indent}// step3: 负向期望 any`);
    lines.push(`${indent}assert.strictEqual(actual, 'any', ${q(`G negative ${sc.s}`)});`);
    return lines;
  }

  if (sc.family === 'C2') {
    lines.push(`${indent}// step3: C2 嵌套过深时允许降级 any，否则精确相等`);
    lines.push(`${indent}if (actual === 'any') {`);
    lines.push(
      `${indent}  assert.ok(inputType.includes('vector') || inputType.includes('map'), ${q(`G C2 ${sc.s}`)});`
    );
    lines.push(`${indent}} else {`);
    lines.push(`${indent}  assert.strictEqual(actual, ${q(sc.expectTs)}, ${q(`G ${sc.s}`)});`);
    lines.push(`${indent}}`);
    return lines;
  }

  lines.push(`${indent}// step3: 断言映射结果`);
  lines.push(`${indent}assert.strictEqual(actual, ${q(sc.expectTs)}, ${q(`G ${sc.s} input=${input}`)});`);
  return lines;
}

function emitIntegBody(sc: Scenario, indent: string): string[] {
  const lines: string[] = [];
  lines.push(`${indent}// --- 集成：先映射，再解析，再交叉校验 ---`);
  lines.push(`${indent}// [G]`);
  lines.push(...emitGenBody(sc, indent));
  lines.push(`${indent}// [P]`);
  lines.push(...emitParseBody(sc, indent));
  if (!sc.negative && sc.family !== 'C2') {
    lines.push(`${indent}// [I] map 与 expect 一致`);
    lines.push(`${indent}const mapped = transTskey2Ckey(${q(sc.inputType.trim())});`);
    lines.push(`${indent}assert.strictEqual(mapped, ${q(sc.expectTs)}, ${q(`I map==expect ${sc.s}`)});`);
  }
  return lines;
}

export function emitCaseBody(suiteKind: SuiteKind, sc: Scenario, indent = '    '): string[] {
  if (suiteKind === 'P') {
    return emitParseBody(sc, indent);
  }
  if (suiteKind === 'G') {
    return emitGenBody(sc, indent);
  }
  return emitIntegBody(sc, indent);
}

export function needsParse(suiteKind: SuiteKind): boolean {
  return suiteKind === 'P' || suiteKind === 'I';
}

export function needsGen(suiteKind: SuiteKind): boolean {
  return suiteKind === 'G' || suiteKind === 'I';
}
