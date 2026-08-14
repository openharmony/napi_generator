/*
* Copyright (c) 2026 Shenzhen Kaihong Digital Industry Development Co., Ltd.
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
import * as vscode from 'vscode';
import { doParseTs } from '../../../parse/parsets';
import { ParseObj } from '../../../gen/datatype';

/** 性能硬性要求（总耗时，非单次平均）：
 * - parse：同一源码解析 PARSE_LOOP 次，总耗时 < PARSE_TOTAL_MS
 * 禁止将循环降到 1～2 次；性能测试必须多次执行。
 */
const PARSE_LOOP = 10;
const PARSE_TOTAL_MS = 6000;      // 解析 10 次 ≤ 6s（实测约 4.0~4.3s/用例）

function measureElapsed(task: () => void): number
{
  const start = Date.now();
  task();
  return Date.now() - start;
}

suite('Performance_DTS2CPP_Class_Suite', function ()
{
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Performance_DTS2CPP_Class_Suite part05.');

  /**
  * @tc.number dts2cpp_class_0257
  * @tc.name dts2cpp_class_0257
  * @tc.desc dts2cpp class 扩充-规模：80 属性 class 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0257', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0257.ts',
            `class ClsC080 {
        p0: number;
        p1: string;
        p2: boolean;
        p3: any;
        p4: unknown;
        p5: null;
        p6: undefined;
        p7: symbol;
        p8: bigint;
        p9: object;
        p10: number[];
        p11: string[];
        p12: boolean[];
        p13: Array<number>;
        p14: Map<string, number>;
        p15: Set<number>;
        p16: Record<string, string>;
        p17: Promise<string>;
        p18: [string, number];
        p19: (a: number) => void;
        p20: Date;
        p21: RegExp;
        p22: Error;
        p23: Uint8Array;
        p24: "lit";
        p25: 42;
        p26: true;
        p27: string | number;
        p28: string & {};
        p29: { id: number };
        p30: number;
        p31: string;
        p32: boolean;
        p33: any;
        p34: unknown;
        p35: null;
        p36: undefined;
        p37: symbol;
        p38: bigint;
        p39: object;
        p40: number[];
        p41: string[];
        p42: boolean[];
        p43: Array<number>;
        p44: Map<string, number>;
        p45: Set<number>;
        p46: Record<string, string>;
        p47: Promise<string>;
        p48: [string, number];
        p49: (a: number) => void;
        p50: Date;
        p51: RegExp;
        p52: Error;
        p53: Uint8Array;
        p54: "lit";
        p55: 42;
        p56: true;
        p57: string | number;
        p58: string & {};
        p59: { id: number };
        p60: number;
        p61: string;
        p62: boolean;
        p63: any;
        p64: unknown;
        p65: null;
        p66: undefined;
        p67: symbol;
        p68: bigint;
        p69: object;
        p70: number[];
        p71: string[];
        p72: boolean[];
        p73: Array<number>;
        p74: Map<string, number>;
        p75: Set<number>;
        p76: Record<string, string>;
        p77: Promise<string>;
        p78: [string, number];
        p79: (a: number) => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsC080');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 80);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'boolean');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0257 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0257 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0258
  * @tc.name dts2cpp_class_0258
  * @tc.desc dts2cpp class 扩充-规模：85 属性 class 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0258', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0258.ts',
            `class ClsC085 {
        p0: number;
        p1: string;
        p2: boolean;
        p3: any;
        p4: unknown;
        p5: null;
        p6: undefined;
        p7: symbol;
        p8: bigint;
        p9: object;
        p10: number[];
        p11: string[];
        p12: boolean[];
        p13: Array<number>;
        p14: Map<string, number>;
        p15: Set<number>;
        p16: Record<string, string>;
        p17: Promise<string>;
        p18: [string, number];
        p19: (a: number) => void;
        p20: Date;
        p21: RegExp;
        p22: Error;
        p23: Uint8Array;
        p24: "lit";
        p25: 42;
        p26: true;
        p27: string | number;
        p28: string & {};
        p29: { id: number };
        p30: number;
        p31: string;
        p32: boolean;
        p33: any;
        p34: unknown;
        p35: null;
        p36: undefined;
        p37: symbol;
        p38: bigint;
        p39: object;
        p40: number[];
        p41: string[];
        p42: boolean[];
        p43: Array<number>;
        p44: Map<string, number>;
        p45: Set<number>;
        p46: Record<string, string>;
        p47: Promise<string>;
        p48: [string, number];
        p49: (a: number) => void;
        p50: Date;
        p51: RegExp;
        p52: Error;
        p53: Uint8Array;
        p54: "lit";
        p55: 42;
        p56: true;
        p57: string | number;
        p58: string & {};
        p59: { id: number };
        p60: number;
        p61: string;
        p62: boolean;
        p63: any;
        p64: unknown;
        p65: null;
        p66: undefined;
        p67: symbol;
        p68: bigint;
        p69: object;
        p70: number[];
        p71: string[];
        p72: boolean[];
        p73: Array<number>;
        p74: Map<string, number>;
        p75: Set<number>;
        p76: Record<string, string>;
        p77: Promise<string>;
        p78: [string, number];
        p79: (a: number) => void;
        p80: Date;
        p81: RegExp;
        p82: Error;
        p83: Uint8Array;
        p84: "lit";
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsC085');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 85);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'boolean');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0258 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0258 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0259
  * @tc.name dts2cpp_class_0259
  * @tc.desc dts2cpp class 扩充-规模：90 属性 class 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0259', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0259.ts',
            `class ClsC090 {
        p0: number;
        p1: string;
        p2: boolean;
        p3: any;
        p4: unknown;
        p5: null;
        p6: undefined;
        p7: symbol;
        p8: bigint;
        p9: object;
        p10: number[];
        p11: string[];
        p12: boolean[];
        p13: Array<number>;
        p14: Map<string, number>;
        p15: Set<number>;
        p16: Record<string, string>;
        p17: Promise<string>;
        p18: [string, number];
        p19: (a: number) => void;
        p20: Date;
        p21: RegExp;
        p22: Error;
        p23: Uint8Array;
        p24: "lit";
        p25: 42;
        p26: true;
        p27: string | number;
        p28: string & {};
        p29: { id: number };
        p30: number;
        p31: string;
        p32: boolean;
        p33: any;
        p34: unknown;
        p35: null;
        p36: undefined;
        p37: symbol;
        p38: bigint;
        p39: object;
        p40: number[];
        p41: string[];
        p42: boolean[];
        p43: Array<number>;
        p44: Map<string, number>;
        p45: Set<number>;
        p46: Record<string, string>;
        p47: Promise<string>;
        p48: [string, number];
        p49: (a: number) => void;
        p50: Date;
        p51: RegExp;
        p52: Error;
        p53: Uint8Array;
        p54: "lit";
        p55: 42;
        p56: true;
        p57: string | number;
        p58: string & {};
        p59: { id: number };
        p60: number;
        p61: string;
        p62: boolean;
        p63: any;
        p64: unknown;
        p65: null;
        p66: undefined;
        p67: symbol;
        p68: bigint;
        p69: object;
        p70: number[];
        p71: string[];
        p72: boolean[];
        p73: Array<number>;
        p74: Map<string, number>;
        p75: Set<number>;
        p76: Record<string, string>;
        p77: Promise<string>;
        p78: [string, number];
        p79: (a: number) => void;
        p80: Date;
        p81: RegExp;
        p82: Error;
        p83: Uint8Array;
        p84: "lit";
        p85: 42;
        p86: true;
        p87: string | number;
        p88: string & {};
        p89: { id: number };
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsC090');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 90);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'boolean');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0259 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0259 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0260
  * @tc.name dts2cpp_class_0260
  * @tc.desc dts2cpp class 扩充-规模：95 属性 class 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0260', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0260.ts',
            `class ClsC095 {
        p0: number;
        p1: string;
        p2: boolean;
        p3: any;
        p4: unknown;
        p5: null;
        p6: undefined;
        p7: symbol;
        p8: bigint;
        p9: object;
        p10: number[];
        p11: string[];
        p12: boolean[];
        p13: Array<number>;
        p14: Map<string, number>;
        p15: Set<number>;
        p16: Record<string, string>;
        p17: Promise<string>;
        p18: [string, number];
        p19: (a: number) => void;
        p20: Date;
        p21: RegExp;
        p22: Error;
        p23: Uint8Array;
        p24: "lit";
        p25: 42;
        p26: true;
        p27: string | number;
        p28: string & {};
        p29: { id: number };
        p30: number;
        p31: string;
        p32: boolean;
        p33: any;
        p34: unknown;
        p35: null;
        p36: undefined;
        p37: symbol;
        p38: bigint;
        p39: object;
        p40: number[];
        p41: string[];
        p42: boolean[];
        p43: Array<number>;
        p44: Map<string, number>;
        p45: Set<number>;
        p46: Record<string, string>;
        p47: Promise<string>;
        p48: [string, number];
        p49: (a: number) => void;
        p50: Date;
        p51: RegExp;
        p52: Error;
        p53: Uint8Array;
        p54: "lit";
        p55: 42;
        p56: true;
        p57: string | number;
        p58: string & {};
        p59: { id: number };
        p60: number;
        p61: string;
        p62: boolean;
        p63: any;
        p64: unknown;
        p65: null;
        p66: undefined;
        p67: symbol;
        p68: bigint;
        p69: object;
        p70: number[];
        p71: string[];
        p72: boolean[];
        p73: Array<number>;
        p74: Map<string, number>;
        p75: Set<number>;
        p76: Record<string, string>;
        p77: Promise<string>;
        p78: [string, number];
        p79: (a: number) => void;
        p80: Date;
        p81: RegExp;
        p82: Error;
        p83: Uint8Array;
        p84: "lit";
        p85: 42;
        p86: true;
        p87: string | number;
        p88: string & {};
        p89: { id: number };
        p90: number;
        p91: string;
        p92: boolean;
        p93: any;
        p94: unknown;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsC095');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 95);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'boolean');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0260 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0260 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0261
  * @tc.name dts2cpp_class_0261
  * @tc.desc dts2cpp class 扩充-规模：100 属性 class 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0261', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0261.ts',
            `class ClsC100 {
        p0: number;
        p1: string;
        p2: boolean;
        p3: any;
        p4: unknown;
        p5: null;
        p6: undefined;
        p7: symbol;
        p8: bigint;
        p9: object;
        p10: number[];
        p11: string[];
        p12: boolean[];
        p13: Array<number>;
        p14: Map<string, number>;
        p15: Set<number>;
        p16: Record<string, string>;
        p17: Promise<string>;
        p18: [string, number];
        p19: (a: number) => void;
        p20: Date;
        p21: RegExp;
        p22: Error;
        p23: Uint8Array;
        p24: "lit";
        p25: 42;
        p26: true;
        p27: string | number;
        p28: string & {};
        p29: { id: number };
        p30: number;
        p31: string;
        p32: boolean;
        p33: any;
        p34: unknown;
        p35: null;
        p36: undefined;
        p37: symbol;
        p38: bigint;
        p39: object;
        p40: number[];
        p41: string[];
        p42: boolean[];
        p43: Array<number>;
        p44: Map<string, number>;
        p45: Set<number>;
        p46: Record<string, string>;
        p47: Promise<string>;
        p48: [string, number];
        p49: (a: number) => void;
        p50: Date;
        p51: RegExp;
        p52: Error;
        p53: Uint8Array;
        p54: "lit";
        p55: 42;
        p56: true;
        p57: string | number;
        p58: string & {};
        p59: { id: number };
        p60: number;
        p61: string;
        p62: boolean;
        p63: any;
        p64: unknown;
        p65: null;
        p66: undefined;
        p67: symbol;
        p68: bigint;
        p69: object;
        p70: number[];
        p71: string[];
        p72: boolean[];
        p73: Array<number>;
        p74: Map<string, number>;
        p75: Set<number>;
        p76: Record<string, string>;
        p77: Promise<string>;
        p78: [string, number];
        p79: (a: number) => void;
        p80: Date;
        p81: RegExp;
        p82: Error;
        p83: Uint8Array;
        p84: "lit";
        p85: 42;
        p86: true;
        p87: string | number;
        p88: string & {};
        p89: { id: number };
        p90: number;
        p91: string;
        p92: boolean;
        p93: any;
        p94: unknown;
        p95: null;
        p96: undefined;
        p97: symbol;
        p98: bigint;
        p99: object;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'ClsC100');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 100);
      assert.strictEqual(classItem_0!.variableList[0].name, 'p0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'p1');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.variableList[2].name, 'p2');
      assert.strictEqual(classItem_0!.variableList[2].type, 'boolean');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0261 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0261 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0262
  * @tc.name dts2cpp_class_0262
  * @tc.desc dts2cpp class 扩充-命名：UpperCamel 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0262', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0262.ts',
            `class UpperCamel {
        x: number;
        y: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'UpperCamel');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 2);
      assert.strictEqual(classItem_0!.variableList[0].name, 'x');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'y');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0262 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0262 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0263
  * @tc.name dts2cpp_class_0263
  * @tc.desc dts2cpp class 扩充-命名：lowerCamel 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0263', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0263.ts',
            `class lowerCamel {
        x: number;
        y: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'lowerCamel');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 2);
      assert.strictEqual(classItem_0!.variableList[0].name, 'x');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'y');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0263 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0263 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0264
  * @tc.name dts2cpp_class_0264
  * @tc.desc dts2cpp class 扩充-命名：snake_case 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0264', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0264.ts',
            `class snake_case {
        x: number;
        y: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'snake_case');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 2);
      assert.strictEqual(classItem_0!.variableList[0].name, 'x');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'y');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0264 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0264 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0265
  * @tc.name dts2cpp_class_0265
  * @tc.desc dts2cpp class 扩充-命名：Trailing2 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0265', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0265.ts',
            `class Trailing2 {
        x: number;
        y: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'Trailing2');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 2);
      assert.strictEqual(classItem_0!.variableList[0].name, 'x');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'y');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0265 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0265 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0266
  * @tc.name dts2cpp_class_0266
  * @tc.desc dts2cpp class 扩充-命名：_leading 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0266', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0266.ts',
            `class _leading {
        x: number;
        y: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === '_leading');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 2);
      assert.strictEqual(classItem_0!.variableList[0].name, 'x');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'y');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0266 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0266 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0267
  * @tc.name dts2cpp_class_0267
  * @tc.desc dts2cpp class 扩充-命名：Double__Under 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0267', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0267.ts',
            `class Double__Under {
        x: number;
        y: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'Double__Under');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 2);
      assert.strictEqual(classItem_0!.variableList[0].name, 'x');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'y');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0267 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0267 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0268
  * @tc.name dts2cpp_class_0268
  * @tc.desc dts2cpp class 扩充-命名：C 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0268', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0268.ts',
            `class C {
        x: number;
        y: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'C');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 2);
      assert.strictEqual(classItem_0!.variableList[0].name, 'x');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'y');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0268 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0268 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0269
  * @tc.name dts2cpp_class_0269
  * @tc.desc dts2cpp class 扩充-命名：C1 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0269', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0269.ts',
            `class C1 {
        x: number;
        y: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'C1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 2);
      assert.strictEqual(classItem_0!.variableList[0].name, 'x');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'y');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0269 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0269 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0270
  * @tc.name dts2cpp_class_0270
  * @tc.desc dts2cpp class 扩充-命名：c1 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0270', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0270.ts',
            `class c1 {
        x: number;
        y: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'c1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 2);
      assert.strictEqual(classItem_0!.variableList[0].name, 'x');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'y');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0270 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0270 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0271
  * @tc.name dts2cpp_class_0271
  * @tc.desc dts2cpp class 扩充-命名：Class 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0271', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0271.ts',
            `class Class {
        x: number;
        y: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'Class');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 2);
      assert.strictEqual(classItem_0!.variableList[0].name, 'x');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'y');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0271 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0271 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0272
  * @tc.name dts2cpp_class_0272
  * @tc.desc dts2cpp class 扩充-命名：class1 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0272', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0272.ts',
            `class class1 {
        x: number;
        y: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'class1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 2);
      assert.strictEqual(classItem_0!.variableList[0].name, 'x');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'y');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0272 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0272 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0273
  * @tc.name dts2cpp_class_0273
  * @tc.desc dts2cpp class 扩充-命名：中文类 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0273', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0273.ts',
            `class 中文类 {
        x: number;
        y: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === '中文类');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 2);
      assert.strictEqual(classItem_0!.variableList[0].name, 'x');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'y');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0273 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0273 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0274
  * @tc.name dts2cpp_class_0274
  * @tc.desc dts2cpp class 扩充-命名：VersionV2 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0274', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0274.ts',
            `class VersionV2 {
        x: number;
        y: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'VersionV2');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 2);
      assert.strictEqual(classItem_0!.variableList[0].name, 'x');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'y');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0274 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0274 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0275
  * @tc.name dts2cpp_class_0275
  * @tc.desc dts2cpp class 扩充-命名：HTTPClient 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0275', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0275.ts',
            `class HTTPClient {
        x: number;
        y: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'HTTPClient');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 2);
      assert.strictEqual(classItem_0!.variableList[0].name, 'x');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'y');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0275 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0275 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0276
  * @tc.name dts2cpp_class_0276
  * @tc.desc dts2cpp class 扩充-命名：KLASS 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0276', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0276.ts',
            `class KLASS {
        x: number;
        y: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'KLASS');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 2);
      assert.strictEqual(classItem_0!.variableList[0].name, 'x');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'y');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0276 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0276 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0277
  * @tc.name dts2cpp_class_0277
  * @tc.desc dts2cpp class 扩充-多声明：同文件 2 个 class 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0277', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0277.ts',
            `class MultiC0 { f0: number; }
class MultiC1 { f1: number; };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 2);
      const classItem_0 = parseObj.classes.find(item => item.name === 'MultiC0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 1);
      assert.strictEqual(classItem_0!.variableList[0].name, 'f0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      const classItem_1 = parseObj.classes.find(item => item.name === 'MultiC1');
      assert.ok(classItem_1);
      assert.strictEqual(classItem_1!.variableList.length, 1);
      assert.strictEqual(classItem_1!.variableList[0].name, 'f1');
      assert.strictEqual(classItem_1!.variableList[0].type, 'number');
      assert.strictEqual(classItem_1!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0277 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0277 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0278
  * @tc.name dts2cpp_class_0278
  * @tc.desc dts2cpp class 扩充-多声明：同文件 3 个 class 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0278', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0278.ts',
            `class MultiC0 { f0: number; }
class MultiC1 { f1: number; }
class MultiC2 { f2: number; };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 3);
      const classItem_0 = parseObj.classes.find(item => item.name === 'MultiC0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 1);
      assert.strictEqual(classItem_0!.variableList[0].name, 'f0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      const classItem_1 = parseObj.classes.find(item => item.name === 'MultiC1');
      assert.ok(classItem_1);
      assert.strictEqual(classItem_1!.variableList.length, 1);
      assert.strictEqual(classItem_1!.variableList[0].name, 'f1');
      assert.strictEqual(classItem_1!.variableList[0].type, 'number');
      assert.strictEqual(classItem_1!.functionList.length, 0);
      const classItem_2 = parseObj.classes.find(item => item.name === 'MultiC2');
      assert.ok(classItem_2);
      assert.strictEqual(classItem_2!.variableList.length, 1);
      assert.strictEqual(classItem_2!.variableList[0].name, 'f2');
      assert.strictEqual(classItem_2!.variableList[0].type, 'number');
      assert.strictEqual(classItem_2!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0278 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0278 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0279
  * @tc.name dts2cpp_class_0279
  * @tc.desc dts2cpp class 扩充-多声明：同文件 4 个 class 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0279', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0279.ts',
            `class MultiC0 { f0: number; }
class MultiC1 { f1: number; }
class MultiC2 { f2: number; }
class MultiC3 { f3: number; };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 4);
      const classItem_0 = parseObj.classes.find(item => item.name === 'MultiC0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 1);
      assert.strictEqual(classItem_0!.variableList[0].name, 'f0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      const classItem_1 = parseObj.classes.find(item => item.name === 'MultiC1');
      assert.ok(classItem_1);
      assert.strictEqual(classItem_1!.variableList.length, 1);
      assert.strictEqual(classItem_1!.variableList[0].name, 'f1');
      assert.strictEqual(classItem_1!.variableList[0].type, 'number');
      assert.strictEqual(classItem_1!.functionList.length, 0);
      const classItem_2 = parseObj.classes.find(item => item.name === 'MultiC2');
      assert.ok(classItem_2);
      assert.strictEqual(classItem_2!.variableList.length, 1);
      assert.strictEqual(classItem_2!.variableList[0].name, 'f2');
      assert.strictEqual(classItem_2!.variableList[0].type, 'number');
      assert.strictEqual(classItem_2!.functionList.length, 0);
      const classItem_3 = parseObj.classes.find(item => item.name === 'MultiC3');
      assert.ok(classItem_3);
      assert.strictEqual(classItem_3!.variableList.length, 1);
      assert.strictEqual(classItem_3!.variableList[0].name, 'f3');
      assert.strictEqual(classItem_3!.variableList[0].type, 'number');
      assert.strictEqual(classItem_3!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0279 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0279 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0280
  * @tc.name dts2cpp_class_0280
  * @tc.desc dts2cpp class 扩充-多声明：同文件 5 个 class 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0280', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0280.ts',
            `class MultiC0 { f0: number; }
class MultiC1 { f1: number; }
class MultiC2 { f2: number; }
class MultiC3 { f3: number; }
class MultiC4 { f4: number; };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 5);
      const classItem_0 = parseObj.classes.find(item => item.name === 'MultiC0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 1);
      assert.strictEqual(classItem_0!.variableList[0].name, 'f0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      const classItem_1 = parseObj.classes.find(item => item.name === 'MultiC1');
      assert.ok(classItem_1);
      assert.strictEqual(classItem_1!.variableList.length, 1);
      assert.strictEqual(classItem_1!.variableList[0].name, 'f1');
      assert.strictEqual(classItem_1!.variableList[0].type, 'number');
      assert.strictEqual(classItem_1!.functionList.length, 0);
      const classItem_2 = parseObj.classes.find(item => item.name === 'MultiC2');
      assert.ok(classItem_2);
      assert.strictEqual(classItem_2!.variableList.length, 1);
      assert.strictEqual(classItem_2!.variableList[0].name, 'f2');
      assert.strictEqual(classItem_2!.variableList[0].type, 'number');
      assert.strictEqual(classItem_2!.functionList.length, 0);
      const classItem_3 = parseObj.classes.find(item => item.name === 'MultiC3');
      assert.ok(classItem_3);
      assert.strictEqual(classItem_3!.variableList.length, 1);
      assert.strictEqual(classItem_3!.variableList[0].name, 'f3');
      assert.strictEqual(classItem_3!.variableList[0].type, 'number');
      assert.strictEqual(classItem_3!.functionList.length, 0);
      const classItem_4 = parseObj.classes.find(item => item.name === 'MultiC4');
      assert.ok(classItem_4);
      assert.strictEqual(classItem_4!.variableList.length, 1);
      assert.strictEqual(classItem_4!.variableList[0].name, 'f4');
      assert.strictEqual(classItem_4!.variableList[0].type, 'number');
      assert.strictEqual(classItem_4!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0280 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0280 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0281
  * @tc.name dts2cpp_class_0281
  * @tc.desc dts2cpp class 扩充-多声明：同文件 6 个 class 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0281', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0281.ts',
            `class MultiC0 { f0: number; }
class MultiC1 { f1: number; }
class MultiC2 { f2: number; }
class MultiC3 { f3: number; }
class MultiC4 { f4: number; }
class MultiC5 { f5: number; };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 6);
      const classItem_0 = parseObj.classes.find(item => item.name === 'MultiC0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 1);
      assert.strictEqual(classItem_0!.variableList[0].name, 'f0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      const classItem_1 = parseObj.classes.find(item => item.name === 'MultiC1');
      assert.ok(classItem_1);
      assert.strictEqual(classItem_1!.variableList.length, 1);
      assert.strictEqual(classItem_1!.variableList[0].name, 'f1');
      assert.strictEqual(classItem_1!.variableList[0].type, 'number');
      assert.strictEqual(classItem_1!.functionList.length, 0);
      const classItem_2 = parseObj.classes.find(item => item.name === 'MultiC2');
      assert.ok(classItem_2);
      assert.strictEqual(classItem_2!.variableList.length, 1);
      assert.strictEqual(classItem_2!.variableList[0].name, 'f2');
      assert.strictEqual(classItem_2!.variableList[0].type, 'number');
      assert.strictEqual(classItem_2!.functionList.length, 0);
      const classItem_3 = parseObj.classes.find(item => item.name === 'MultiC3');
      assert.ok(classItem_3);
      assert.strictEqual(classItem_3!.variableList.length, 1);
      assert.strictEqual(classItem_3!.variableList[0].name, 'f3');
      assert.strictEqual(classItem_3!.variableList[0].type, 'number');
      assert.strictEqual(classItem_3!.functionList.length, 0);
      const classItem_4 = parseObj.classes.find(item => item.name === 'MultiC4');
      assert.ok(classItem_4);
      assert.strictEqual(classItem_4!.variableList.length, 1);
      assert.strictEqual(classItem_4!.variableList[0].name, 'f4');
      assert.strictEqual(classItem_4!.variableList[0].type, 'number');
      assert.strictEqual(classItem_4!.functionList.length, 0);
      const classItem_5 = parseObj.classes.find(item => item.name === 'MultiC5');
      assert.ok(classItem_5);
      assert.strictEqual(classItem_5!.variableList.length, 1);
      assert.strictEqual(classItem_5!.variableList[0].name, 'f5');
      assert.strictEqual(classItem_5!.variableList[0].type, 'number');
      assert.strictEqual(classItem_5!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0281 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0281 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0282
  * @tc.name dts2cpp_class_0282
  * @tc.desc dts2cpp class 扩充-多声明：同文件 7 个 class 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0282', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0282.ts',
            `class MultiC0 { f0: number; }
class MultiC1 { f1: number; }
class MultiC2 { f2: number; }
class MultiC3 { f3: number; }
class MultiC4 { f4: number; }
class MultiC5 { f5: number; }
class MultiC6 { f6: number; };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 7);
      const classItem_0 = parseObj.classes.find(item => item.name === 'MultiC0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 1);
      assert.strictEqual(classItem_0!.variableList[0].name, 'f0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      const classItem_1 = parseObj.classes.find(item => item.name === 'MultiC1');
      assert.ok(classItem_1);
      assert.strictEqual(classItem_1!.variableList.length, 1);
      assert.strictEqual(classItem_1!.variableList[0].name, 'f1');
      assert.strictEqual(classItem_1!.variableList[0].type, 'number');
      assert.strictEqual(classItem_1!.functionList.length, 0);
      const classItem_2 = parseObj.classes.find(item => item.name === 'MultiC2');
      assert.ok(classItem_2);
      assert.strictEqual(classItem_2!.variableList.length, 1);
      assert.strictEqual(classItem_2!.variableList[0].name, 'f2');
      assert.strictEqual(classItem_2!.variableList[0].type, 'number');
      assert.strictEqual(classItem_2!.functionList.length, 0);
      const classItem_3 = parseObj.classes.find(item => item.name === 'MultiC3');
      assert.ok(classItem_3);
      assert.strictEqual(classItem_3!.variableList.length, 1);
      assert.strictEqual(classItem_3!.variableList[0].name, 'f3');
      assert.strictEqual(classItem_3!.variableList[0].type, 'number');
      assert.strictEqual(classItem_3!.functionList.length, 0);
      const classItem_4 = parseObj.classes.find(item => item.name === 'MultiC4');
      assert.ok(classItem_4);
      assert.strictEqual(classItem_4!.variableList.length, 1);
      assert.strictEqual(classItem_4!.variableList[0].name, 'f4');
      assert.strictEqual(classItem_4!.variableList[0].type, 'number');
      assert.strictEqual(classItem_4!.functionList.length, 0);
      const classItem_5 = parseObj.classes.find(item => item.name === 'MultiC5');
      assert.ok(classItem_5);
      assert.strictEqual(classItem_5!.variableList.length, 1);
      assert.strictEqual(classItem_5!.variableList[0].name, 'f5');
      assert.strictEqual(classItem_5!.variableList[0].type, 'number');
      assert.strictEqual(classItem_5!.functionList.length, 0);
      const classItem_6 = parseObj.classes.find(item => item.name === 'MultiC6');
      assert.ok(classItem_6);
      assert.strictEqual(classItem_6!.variableList.length, 1);
      assert.strictEqual(classItem_6!.variableList[0].name, 'f6');
      assert.strictEqual(classItem_6!.variableList[0].type, 'number');
      assert.strictEqual(classItem_6!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0282 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0282 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0283
  * @tc.name dts2cpp_class_0283
  * @tc.desc dts2cpp class 扩充-多声明：同文件 8 个 class 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0283', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0283.ts',
            `class MultiC0 { f0: number; }
class MultiC1 { f1: number; }
class MultiC2 { f2: number; }
class MultiC3 { f3: number; }
class MultiC4 { f4: number; }
class MultiC5 { f5: number; }
class MultiC6 { f6: number; }
class MultiC7 { f7: number; };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 8);
      const classItem_0 = parseObj.classes.find(item => item.name === 'MultiC0');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 1);
      assert.strictEqual(classItem_0!.variableList[0].name, 'f0');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      const classItem_1 = parseObj.classes.find(item => item.name === 'MultiC1');
      assert.ok(classItem_1);
      assert.strictEqual(classItem_1!.variableList.length, 1);
      assert.strictEqual(classItem_1!.variableList[0].name, 'f1');
      assert.strictEqual(classItem_1!.variableList[0].type, 'number');
      assert.strictEqual(classItem_1!.functionList.length, 0);
      const classItem_2 = parseObj.classes.find(item => item.name === 'MultiC2');
      assert.ok(classItem_2);
      assert.strictEqual(classItem_2!.variableList.length, 1);
      assert.strictEqual(classItem_2!.variableList[0].name, 'f2');
      assert.strictEqual(classItem_2!.variableList[0].type, 'number');
      assert.strictEqual(classItem_2!.functionList.length, 0);
      const classItem_3 = parseObj.classes.find(item => item.name === 'MultiC3');
      assert.ok(classItem_3);
      assert.strictEqual(classItem_3!.variableList.length, 1);
      assert.strictEqual(classItem_3!.variableList[0].name, 'f3');
      assert.strictEqual(classItem_3!.variableList[0].type, 'number');
      assert.strictEqual(classItem_3!.functionList.length, 0);
      const classItem_4 = parseObj.classes.find(item => item.name === 'MultiC4');
      assert.ok(classItem_4);
      assert.strictEqual(classItem_4!.variableList.length, 1);
      assert.strictEqual(classItem_4!.variableList[0].name, 'f4');
      assert.strictEqual(classItem_4!.variableList[0].type, 'number');
      assert.strictEqual(classItem_4!.functionList.length, 0);
      const classItem_5 = parseObj.classes.find(item => item.name === 'MultiC5');
      assert.ok(classItem_5);
      assert.strictEqual(classItem_5!.variableList.length, 1);
      assert.strictEqual(classItem_5!.variableList[0].name, 'f5');
      assert.strictEqual(classItem_5!.variableList[0].type, 'number');
      assert.strictEqual(classItem_5!.functionList.length, 0);
      const classItem_6 = parseObj.classes.find(item => item.name === 'MultiC6');
      assert.ok(classItem_6);
      assert.strictEqual(classItem_6!.variableList.length, 1);
      assert.strictEqual(classItem_6!.variableList[0].name, 'f6');
      assert.strictEqual(classItem_6!.variableList[0].type, 'number');
      assert.strictEqual(classItem_6!.functionList.length, 0);
      const classItem_7 = parseObj.classes.find(item => item.name === 'MultiC7');
      assert.ok(classItem_7);
      assert.strictEqual(classItem_7!.variableList.length, 1);
      assert.strictEqual(classItem_7!.variableList[0].name, 'f7');
      assert.strictEqual(classItem_7!.variableList[0].type, 'number');
      assert.strictEqual(classItem_7!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0283 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0283 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0284
  * @tc.name dts2cpp_class_0284
  * @tc.desc dts2cpp class 扩充-泛型/继承：单泛型类 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0284', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0284.ts',
            `class Gen1<T> {
        v: T;
        set(a: T) {
        }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'Gen1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 1);
      assert.strictEqual(classItem_0!.variableList[0].name, 'v');
      assert.strictEqual(classItem_0!.variableList[0].type, 'T');
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'set');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'T');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0284 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0284 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0285
  * @tc.name dts2cpp_class_0285
  * @tc.desc dts2cpp class 扩充-泛型/继承：双泛型类 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0285', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0285.ts',
            `class Gen2<A, B> {
        a: A;
        b: B;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'Gen2');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 2);
      assert.strictEqual(classItem_0!.variableList[0].name, 'a');
      assert.strictEqual(classItem_0!.variableList[0].type, 'A');
      assert.strictEqual(classItem_0!.variableList[1].name, 'b');
      assert.strictEqual(classItem_0!.variableList[1].type, 'B');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0285 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0285 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0286
  * @tc.name dts2cpp_class_0286
  * @tc.desc dts2cpp class 扩充-泛型/继承：三泛型类 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0286', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0286.ts',
            `class Gen3<A, B, C> {
        a: A;
        b: B;
        c: C;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'Gen3');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 3);
      assert.strictEqual(classItem_0!.variableList[0].name, 'a');
      assert.strictEqual(classItem_0!.variableList[0].type, 'A');
      assert.strictEqual(classItem_0!.variableList[1].name, 'b');
      assert.strictEqual(classItem_0!.variableList[1].type, 'B');
      assert.strictEqual(classItem_0!.variableList[2].name, 'c');
      assert.strictEqual(classItem_0!.variableList[2].type, 'C');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0286 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0286 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0287
  * @tc.name dts2cpp_class_0287
  * @tc.desc dts2cpp class 扩充-泛型/继承：泛型数组属性 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0287', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0287.ts',
            `class Gen4<T> {
        list: T[];
        matrix: T[][];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'Gen4');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 2);
      assert.strictEqual(classItem_0!.variableList[0].name, 'list');
      assert.strictEqual(classItem_0!.variableList[0].type, 'T[]');
      assert.strictEqual(classItem_0!.variableList[1].name, 'matrix');
      assert.strictEqual(classItem_0!.variableList[1].type, 'T[][]');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0287 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0287 执行异常: ${String(err)}`);
    }
  });

});

