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

suite('Performance_DTS2CPP_Struct_Suite', function ()
{
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Performance_DTS2CPP_Struct_Suite part05.');

  /**
  * @tc.number dts2cpp_struct_0254
  * @tc.name dts2cpp_struct_0254
  * @tc.desc dts2cpp struct 扩充-规模：80 成员 interface 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0254', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0254.ts',
            `interface IfC080 {
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
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfC080');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 80);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'boolean');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0254 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0254 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0255
  * @tc.name dts2cpp_struct_0255
  * @tc.desc dts2cpp struct 扩充-规模：85 成员 interface 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0255', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0255.ts',
            `interface IfC085 {
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
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfC085');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 85);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'boolean');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0255 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0255 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0256
  * @tc.name dts2cpp_struct_0256
  * @tc.desc dts2cpp struct 扩充-规模：90 成员 interface 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0256', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0256.ts',
            `interface IfC090 {
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
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfC090');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 90);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'boolean');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0256 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0256 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0257
  * @tc.name dts2cpp_struct_0257
  * @tc.desc dts2cpp struct 扩充-规模：95 成员 interface 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0257', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0257.ts',
            `interface IfC095 {
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
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfC095');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 95);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'boolean');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0257 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0257 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0258
  * @tc.name dts2cpp_struct_0258
  * @tc.desc dts2cpp struct 扩充-规模：100 成员 interface 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0258', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0258.ts',
            `interface IfC100 {
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
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IfC100');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 100);
      assert.strictEqual(item_0!.members[0].name, 'p0');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'p1');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.members[2].name, 'p2');
      assert.strictEqual(item_0!.members[2].type, 'boolean');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0258 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0258 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0259
  * @tc.name dts2cpp_struct_0259
  * @tc.desc dts2cpp struct 扩充-命名：UpperCamel 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0259', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0259.ts',
            `interface UpperCamel {
        x: number;
        y: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'UpperCamel');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 2);
      assert.strictEqual(item_0!.members[0].name, 'x');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'y');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0259 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0259 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0260
  * @tc.name dts2cpp_struct_0260
  * @tc.desc dts2cpp struct 扩充-命名：lowerCamel 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0260', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0260.ts',
            `interface lowerCamel {
        x: number;
        y: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'lowerCamel');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 2);
      assert.strictEqual(item_0!.members[0].name, 'x');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'y');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0260 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0260 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0261
  * @tc.name dts2cpp_struct_0261
  * @tc.desc dts2cpp struct 扩充-命名：snake_case 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0261', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0261.ts',
            `interface snake_case {
        x: number;
        y: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'snake_case');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 2);
      assert.strictEqual(item_0!.members[0].name, 'x');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'y');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0261 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0261 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0262
  * @tc.name dts2cpp_struct_0262
  * @tc.desc dts2cpp struct 扩充-命名：Trailing2 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0262', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0262.ts',
            `interface Trailing2 {
        x: number;
        y: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'Trailing2');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 2);
      assert.strictEqual(item_0!.members[0].name, 'x');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'y');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0262 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0262 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0263
  * @tc.name dts2cpp_struct_0263
  * @tc.desc dts2cpp struct 扩充-命名：_leading 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0263', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0263.ts',
            `interface _leading {
        x: number;
        y: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === '_leading');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 2);
      assert.strictEqual(item_0!.members[0].name, 'x');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'y');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0263 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0263 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0264
  * @tc.name dts2cpp_struct_0264
  * @tc.desc dts2cpp struct 扩充-命名：Double__Under 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0264', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0264.ts',
            `interface Double__Under {
        x: number;
        y: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'Double__Under');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 2);
      assert.strictEqual(item_0!.members[0].name, 'x');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'y');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0264 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0264 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0265
  * @tc.name dts2cpp_struct_0265
  * @tc.desc dts2cpp struct 扩充-命名：I 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0265', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0265.ts',
            `interface I {
        x: number;
        y: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'I');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 2);
      assert.strictEqual(item_0!.members[0].name, 'x');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'y');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0265 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0265 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0266
  * @tc.name dts2cpp_struct_0266
  * @tc.desc dts2cpp struct 扩充-命名：I1 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0266', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0266.ts',
            `interface I1 {
        x: number;
        y: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'I1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 2);
      assert.strictEqual(item_0!.members[0].name, 'x');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'y');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0266 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0266 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0267
  * @tc.name dts2cpp_struct_0267
  * @tc.desc dts2cpp struct 扩充-命名：i1 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0267', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0267.ts',
            `interface i1 {
        x: number;
        y: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'i1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 2);
      assert.strictEqual(item_0!.members[0].name, 'x');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'y');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0267 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0267 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0268
  * @tc.name dts2cpp_struct_0268
  * @tc.desc dts2cpp struct 扩充-命名：If 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0268', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0268.ts',
            `interface If {
        x: number;
        y: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'If');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 2);
      assert.strictEqual(item_0!.members[0].name, 'x');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'y');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0268 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0268 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0269
  * @tc.name dts2cpp_struct_0269
  * @tc.desc dts2cpp struct 扩充-命名：iface1 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0269', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0269.ts',
            `interface iface1 {
        x: number;
        y: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'iface1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 2);
      assert.strictEqual(item_0!.members[0].name, 'x');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'y');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0269 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0269 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0270
  * @tc.name dts2cpp_struct_0270
  * @tc.desc dts2cpp struct 扩充-命名：中文接口 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0270', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0270.ts',
            `interface 中文接口 {
        x: number;
        y: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === '中文接口');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 2);
      assert.strictEqual(item_0!.members[0].name, 'x');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'y');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0270 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0270 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0271
  * @tc.name dts2cpp_struct_0271
  * @tc.desc dts2cpp struct 扩充-命名：VersionV2 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0271', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0271.ts',
            `interface VersionV2 {
        x: number;
        y: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'VersionV2');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 2);
      assert.strictEqual(item_0!.members[0].name, 'x');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'y');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0271 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0271 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0272
  * @tc.name dts2cpp_struct_0272
  * @tc.desc dts2cpp struct 扩充-命名：HTTPClient 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0272', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0272.ts',
            `interface HTTPClient {
        x: number;
        y: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'HTTPClient');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 2);
      assert.strictEqual(item_0!.members[0].name, 'x');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'y');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0272 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0272 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0273
  * @tc.name dts2cpp_struct_0273
  * @tc.desc dts2cpp struct 扩充-命名：IFACE 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0273', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0273.ts',
            `interface IFACE {
        x: number;
        y: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'IFACE');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 2);
      assert.strictEqual(item_0!.members[0].name, 'x');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.members[1].name, 'y');
      assert.strictEqual(item_0!.members[1].type, 'string');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0273 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0273 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0274
  * @tc.name dts2cpp_struct_0274
  * @tc.desc dts2cpp struct 扩充-多声明：同文件 2 个 interface 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0274', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0274.ts',
            `interface MultiI0 { f0: number; }
interface MultiI1 { f1: number; };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 2);
      const item_0 = parseObj.structs.find(item => item.name === 'MultiI0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 1);
      assert.strictEqual(item_0!.members[0].name, 'f0');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.functions.length, 0);
      const item_1 = parseObj.structs.find(item => item.name === 'MultiI1');
      assert.ok(item_1);
      assert.strictEqual(item_1!.members.length, 1);
      assert.strictEqual(item_1!.members[0].name, 'f1');
      assert.strictEqual(item_1!.members[0].type, 'number');
      assert.strictEqual(item_1!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0274 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0274 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0275
  * @tc.name dts2cpp_struct_0275
  * @tc.desc dts2cpp struct 扩充-多声明：同文件 3 个 interface 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0275', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0275.ts',
            `interface MultiI0 { f0: number; }
interface MultiI1 { f1: number; }
interface MultiI2 { f2: number; };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 3);
      const item_0 = parseObj.structs.find(item => item.name === 'MultiI0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 1);
      assert.strictEqual(item_0!.members[0].name, 'f0');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.functions.length, 0);
      const item_1 = parseObj.structs.find(item => item.name === 'MultiI1');
      assert.ok(item_1);
      assert.strictEqual(item_1!.members.length, 1);
      assert.strictEqual(item_1!.members[0].name, 'f1');
      assert.strictEqual(item_1!.members[0].type, 'number');
      assert.strictEqual(item_1!.functions.length, 0);
      const item_2 = parseObj.structs.find(item => item.name === 'MultiI2');
      assert.ok(item_2);
      assert.strictEqual(item_2!.members.length, 1);
      assert.strictEqual(item_2!.members[0].name, 'f2');
      assert.strictEqual(item_2!.members[0].type, 'number');
      assert.strictEqual(item_2!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0275 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0275 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0276
  * @tc.name dts2cpp_struct_0276
  * @tc.desc dts2cpp struct 扩充-多声明：同文件 4 个 interface 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0276', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0276.ts',
            `interface MultiI0 { f0: number; }
interface MultiI1 { f1: number; }
interface MultiI2 { f2: number; }
interface MultiI3 { f3: number; };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 4);
      const item_0 = parseObj.structs.find(item => item.name === 'MultiI0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 1);
      assert.strictEqual(item_0!.members[0].name, 'f0');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.functions.length, 0);
      const item_1 = parseObj.structs.find(item => item.name === 'MultiI1');
      assert.ok(item_1);
      assert.strictEqual(item_1!.members.length, 1);
      assert.strictEqual(item_1!.members[0].name, 'f1');
      assert.strictEqual(item_1!.members[0].type, 'number');
      assert.strictEqual(item_1!.functions.length, 0);
      const item_2 = parseObj.structs.find(item => item.name === 'MultiI2');
      assert.ok(item_2);
      assert.strictEqual(item_2!.members.length, 1);
      assert.strictEqual(item_2!.members[0].name, 'f2');
      assert.strictEqual(item_2!.members[0].type, 'number');
      assert.strictEqual(item_2!.functions.length, 0);
      const item_3 = parseObj.structs.find(item => item.name === 'MultiI3');
      assert.ok(item_3);
      assert.strictEqual(item_3!.members.length, 1);
      assert.strictEqual(item_3!.members[0].name, 'f3');
      assert.strictEqual(item_3!.members[0].type, 'number');
      assert.strictEqual(item_3!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0276 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0276 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0277
  * @tc.name dts2cpp_struct_0277
  * @tc.desc dts2cpp struct 扩充-多声明：同文件 5 个 interface 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0277', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0277.ts',
            `interface MultiI0 { f0: number; }
interface MultiI1 { f1: number; }
interface MultiI2 { f2: number; }
interface MultiI3 { f3: number; }
interface MultiI4 { f4: number; };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 5);
      const item_0 = parseObj.structs.find(item => item.name === 'MultiI0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 1);
      assert.strictEqual(item_0!.members[0].name, 'f0');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.functions.length, 0);
      const item_1 = parseObj.structs.find(item => item.name === 'MultiI1');
      assert.ok(item_1);
      assert.strictEqual(item_1!.members.length, 1);
      assert.strictEqual(item_1!.members[0].name, 'f1');
      assert.strictEqual(item_1!.members[0].type, 'number');
      assert.strictEqual(item_1!.functions.length, 0);
      const item_2 = parseObj.structs.find(item => item.name === 'MultiI2');
      assert.ok(item_2);
      assert.strictEqual(item_2!.members.length, 1);
      assert.strictEqual(item_2!.members[0].name, 'f2');
      assert.strictEqual(item_2!.members[0].type, 'number');
      assert.strictEqual(item_2!.functions.length, 0);
      const item_3 = parseObj.structs.find(item => item.name === 'MultiI3');
      assert.ok(item_3);
      assert.strictEqual(item_3!.members.length, 1);
      assert.strictEqual(item_3!.members[0].name, 'f3');
      assert.strictEqual(item_3!.members[0].type, 'number');
      assert.strictEqual(item_3!.functions.length, 0);
      const item_4 = parseObj.structs.find(item => item.name === 'MultiI4');
      assert.ok(item_4);
      assert.strictEqual(item_4!.members.length, 1);
      assert.strictEqual(item_4!.members[0].name, 'f4');
      assert.strictEqual(item_4!.members[0].type, 'number');
      assert.strictEqual(item_4!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0277 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0277 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0278
  * @tc.name dts2cpp_struct_0278
  * @tc.desc dts2cpp struct 扩充-多声明：同文件 6 个 interface 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0278', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0278.ts',
            `interface MultiI0 { f0: number; }
interface MultiI1 { f1: number; }
interface MultiI2 { f2: number; }
interface MultiI3 { f3: number; }
interface MultiI4 { f4: number; }
interface MultiI5 { f5: number; };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 6);
      const item_0 = parseObj.structs.find(item => item.name === 'MultiI0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 1);
      assert.strictEqual(item_0!.members[0].name, 'f0');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.functions.length, 0);
      const item_1 = parseObj.structs.find(item => item.name === 'MultiI1');
      assert.ok(item_1);
      assert.strictEqual(item_1!.members.length, 1);
      assert.strictEqual(item_1!.members[0].name, 'f1');
      assert.strictEqual(item_1!.members[0].type, 'number');
      assert.strictEqual(item_1!.functions.length, 0);
      const item_2 = parseObj.structs.find(item => item.name === 'MultiI2');
      assert.ok(item_2);
      assert.strictEqual(item_2!.members.length, 1);
      assert.strictEqual(item_2!.members[0].name, 'f2');
      assert.strictEqual(item_2!.members[0].type, 'number');
      assert.strictEqual(item_2!.functions.length, 0);
      const item_3 = parseObj.structs.find(item => item.name === 'MultiI3');
      assert.ok(item_3);
      assert.strictEqual(item_3!.members.length, 1);
      assert.strictEqual(item_3!.members[0].name, 'f3');
      assert.strictEqual(item_3!.members[0].type, 'number');
      assert.strictEqual(item_3!.functions.length, 0);
      const item_4 = parseObj.structs.find(item => item.name === 'MultiI4');
      assert.ok(item_4);
      assert.strictEqual(item_4!.members.length, 1);
      assert.strictEqual(item_4!.members[0].name, 'f4');
      assert.strictEqual(item_4!.members[0].type, 'number');
      assert.strictEqual(item_4!.functions.length, 0);
      const item_5 = parseObj.structs.find(item => item.name === 'MultiI5');
      assert.ok(item_5);
      assert.strictEqual(item_5!.members.length, 1);
      assert.strictEqual(item_5!.members[0].name, 'f5');
      assert.strictEqual(item_5!.members[0].type, 'number');
      assert.strictEqual(item_5!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0278 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0278 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0279
  * @tc.name dts2cpp_struct_0279
  * @tc.desc dts2cpp struct 扩充-多声明：同文件 7 个 interface 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0279', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0279.ts',
            `interface MultiI0 { f0: number; }
interface MultiI1 { f1: number; }
interface MultiI2 { f2: number; }
interface MultiI3 { f3: number; }
interface MultiI4 { f4: number; }
interface MultiI5 { f5: number; }
interface MultiI6 { f6: number; };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 7);
      const item_0 = parseObj.structs.find(item => item.name === 'MultiI0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 1);
      assert.strictEqual(item_0!.members[0].name, 'f0');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.functions.length, 0);
      const item_1 = parseObj.structs.find(item => item.name === 'MultiI1');
      assert.ok(item_1);
      assert.strictEqual(item_1!.members.length, 1);
      assert.strictEqual(item_1!.members[0].name, 'f1');
      assert.strictEqual(item_1!.members[0].type, 'number');
      assert.strictEqual(item_1!.functions.length, 0);
      const item_2 = parseObj.structs.find(item => item.name === 'MultiI2');
      assert.ok(item_2);
      assert.strictEqual(item_2!.members.length, 1);
      assert.strictEqual(item_2!.members[0].name, 'f2');
      assert.strictEqual(item_2!.members[0].type, 'number');
      assert.strictEqual(item_2!.functions.length, 0);
      const item_3 = parseObj.structs.find(item => item.name === 'MultiI3');
      assert.ok(item_3);
      assert.strictEqual(item_3!.members.length, 1);
      assert.strictEqual(item_3!.members[0].name, 'f3');
      assert.strictEqual(item_3!.members[0].type, 'number');
      assert.strictEqual(item_3!.functions.length, 0);
      const item_4 = parseObj.structs.find(item => item.name === 'MultiI4');
      assert.ok(item_4);
      assert.strictEqual(item_4!.members.length, 1);
      assert.strictEqual(item_4!.members[0].name, 'f4');
      assert.strictEqual(item_4!.members[0].type, 'number');
      assert.strictEqual(item_4!.functions.length, 0);
      const item_5 = parseObj.structs.find(item => item.name === 'MultiI5');
      assert.ok(item_5);
      assert.strictEqual(item_5!.members.length, 1);
      assert.strictEqual(item_5!.members[0].name, 'f5');
      assert.strictEqual(item_5!.members[0].type, 'number');
      assert.strictEqual(item_5!.functions.length, 0);
      const item_6 = parseObj.structs.find(item => item.name === 'MultiI6');
      assert.ok(item_6);
      assert.strictEqual(item_6!.members.length, 1);
      assert.strictEqual(item_6!.members[0].name, 'f6');
      assert.strictEqual(item_6!.members[0].type, 'number');
      assert.strictEqual(item_6!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0279 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0279 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0280
  * @tc.name dts2cpp_struct_0280
  * @tc.desc dts2cpp struct 扩充-多声明：同文件 8 个 interface 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0280', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0280.ts',
            `interface MultiI0 { f0: number; }
interface MultiI1 { f1: number; }
interface MultiI2 { f2: number; }
interface MultiI3 { f3: number; }
interface MultiI4 { f4: number; }
interface MultiI5 { f5: number; }
interface MultiI6 { f6: number; }
interface MultiI7 { f7: number; };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 8);
      const item_0 = parseObj.structs.find(item => item.name === 'MultiI0');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 1);
      assert.strictEqual(item_0!.members[0].name, 'f0');
      assert.strictEqual(item_0!.members[0].type, 'number');
      assert.strictEqual(item_0!.functions.length, 0);
      const item_1 = parseObj.structs.find(item => item.name === 'MultiI1');
      assert.ok(item_1);
      assert.strictEqual(item_1!.members.length, 1);
      assert.strictEqual(item_1!.members[0].name, 'f1');
      assert.strictEqual(item_1!.members[0].type, 'number');
      assert.strictEqual(item_1!.functions.length, 0);
      const item_2 = parseObj.structs.find(item => item.name === 'MultiI2');
      assert.ok(item_2);
      assert.strictEqual(item_2!.members.length, 1);
      assert.strictEqual(item_2!.members[0].name, 'f2');
      assert.strictEqual(item_2!.members[0].type, 'number');
      assert.strictEqual(item_2!.functions.length, 0);
      const item_3 = parseObj.structs.find(item => item.name === 'MultiI3');
      assert.ok(item_3);
      assert.strictEqual(item_3!.members.length, 1);
      assert.strictEqual(item_3!.members[0].name, 'f3');
      assert.strictEqual(item_3!.members[0].type, 'number');
      assert.strictEqual(item_3!.functions.length, 0);
      const item_4 = parseObj.structs.find(item => item.name === 'MultiI4');
      assert.ok(item_4);
      assert.strictEqual(item_4!.members.length, 1);
      assert.strictEqual(item_4!.members[0].name, 'f4');
      assert.strictEqual(item_4!.members[0].type, 'number');
      assert.strictEqual(item_4!.functions.length, 0);
      const item_5 = parseObj.structs.find(item => item.name === 'MultiI5');
      assert.ok(item_5);
      assert.strictEqual(item_5!.members.length, 1);
      assert.strictEqual(item_5!.members[0].name, 'f5');
      assert.strictEqual(item_5!.members[0].type, 'number');
      assert.strictEqual(item_5!.functions.length, 0);
      const item_6 = parseObj.structs.find(item => item.name === 'MultiI6');
      assert.ok(item_6);
      assert.strictEqual(item_6!.members.length, 1);
      assert.strictEqual(item_6!.members[0].name, 'f6');
      assert.strictEqual(item_6!.members[0].type, 'number');
      assert.strictEqual(item_6!.functions.length, 0);
      const item_7 = parseObj.structs.find(item => item.name === 'MultiI7');
      assert.ok(item_7);
      assert.strictEqual(item_7!.members.length, 1);
      assert.strictEqual(item_7!.members[0].name, 'f7');
      assert.strictEqual(item_7!.members[0].type, 'number');
      assert.strictEqual(item_7!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0280 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0280 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0281
  * @tc.name dts2cpp_struct_0281
  * @tc.desc dts2cpp struct 扩充-泛型/继承：单泛型接口 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0281', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0281.ts',
            `interface GIf1<T> {
        v: T;
        set(a: T): void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'GIf1');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 1);
      assert.strictEqual(item_0!.members[0].name, 'v');
      assert.strictEqual(item_0!.members[0].type, 'T');
      assert.strictEqual(item_0!.functions.length, 1);
      assert.strictEqual(item_0!.functions[0].name, 'set');
      assert.strictEqual(item_0!.functions[0].returns, 'void');
      assert.strictEqual(item_0!.functions[0].parameters.length, 1);
      assert.strictEqual(item_0!.functions[0].parameters[0].type, 'T');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0281 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0281 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0282
  * @tc.name dts2cpp_struct_0282
  * @tc.desc dts2cpp struct 扩充-泛型/继承：双泛型接口 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0282', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0282.ts',
            `interface GIf2<A, B> {
        a: A;
        b: B;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'GIf2');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 2);
      assert.strictEqual(item_0!.members[0].name, 'a');
      assert.strictEqual(item_0!.members[0].type, 'A');
      assert.strictEqual(item_0!.members[1].name, 'b');
      assert.strictEqual(item_0!.members[1].type, 'B');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0282 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0282 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0283
  * @tc.name dts2cpp_struct_0283
  * @tc.desc dts2cpp struct 扩充-泛型/继承：三泛型接口 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0283', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0283.ts',
            `interface GIf3<A, B, C> {
        a: A;
        b: B;
        c: C;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'GIf3');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 3);
      assert.strictEqual(item_0!.members[0].name, 'a');
      assert.strictEqual(item_0!.members[0].type, 'A');
      assert.strictEqual(item_0!.members[1].name, 'b');
      assert.strictEqual(item_0!.members[1].type, 'B');
      assert.strictEqual(item_0!.members[2].name, 'c');
      assert.strictEqual(item_0!.members[2].type, 'C');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0283 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0283 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_struct_0284
  * @tc.name dts2cpp_struct_0284
  * @tc.desc dts2cpp struct 扩充-泛型/继承：泛型数组成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_struct_0284', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseStruct0284.ts',
            `interface GIf4<T> {
        list: T[];
        matrix: T[][];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.structs);
      assert.strictEqual(parseObj.structs.length, 1);
      const item_0 = parseObj.structs.find(item => item.name === 'GIf4');
      assert.ok(item_0);
      assert.strictEqual(item_0!.members.length, 2);
      assert.strictEqual(item_0!.members[0].name, 'list');
      assert.strictEqual(item_0!.members[0].type, 'T[]');
      assert.strictEqual(item_0!.members[1].name, 'matrix');
      assert.strictEqual(item_0!.members[1].type, 'T[][]');
      assert.strictEqual(item_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_struct_0284 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_struct_0284 执行异常: ${String(err)}`);
    }
  });

});

