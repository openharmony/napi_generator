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

suite('Performance_DTS2CPP_Type_Suite', function ()
{
  this.timeout(600000);
  vscode.window.showInformationMessage('Start dts2cpp Performance_DTS2CPP_Type_Suite.');

  /**
  * @tc.number dts2cpp_type_0001
  * @tc.name dts2cpp_type_0001
  * @tc.desc dts2cpp type 对齐 parsetstype test_1：一般对象字面量类型（2 成员 + 2 方法签名） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0001', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0001.ts',
            `type OTC = {
        len: number;
        name: string;
        contruct(a: number): void;
        deconstruct(): void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const typeItem_0 = parseObj.types.find(item => item.name === 'OTC');
      assert.ok(typeItem_0);
      assert.strictEqual(typeItem_0!.members.length, 2);
      assert.strictEqual(typeItem_0!.members[0].name, 'len');
      assert.strictEqual(typeItem_0!.members[0].type, 'number');
      assert.strictEqual(typeItem_0!.members[1].name, 'name');
      assert.strictEqual(typeItem_0!.members[1].type, 'string');
      assert.strictEqual(typeItem_0!.functions.length, 2);
      assert.strictEqual(typeItem_0!.functions[0].name, 'contruct');
      assert.strictEqual(typeItem_0!.functions[0].returns, 'void');
      assert.strictEqual(typeItem_0!.functions[0].parameters.length, 1);
      assert.strictEqual(typeItem_0!.functions[0].parameters[0].type, 'number');
      assert.strictEqual(typeItem_0!.functions[1].name, 'deconstruct');
      assert.strictEqual(typeItem_0!.functions[1].returns, 'void');
      assert.strictEqual(typeItem_0!.functions[1].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0001 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0001 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0002
  * @tc.name dts2cpp_type_0002
  * @tc.desc dts2cpp type 对齐 test_2：30 成员 + 12 方法签名 + 箭头函数属性全类型覆盖 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0002', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0002.ts',
            `type OTC = {
        len: number;
        name: string;
        flag: boolean;
        obj: any;
        llen: number[];
        lstr: string[];
        lflag: boolean[];
        lobj: any[];
        tdef: aclass;
        ltdef: aclass[];
        contruct(a: number): void;
        deconstruct(): void;
        nfunc(num: number): number;
        sfunc(str: string): string;
        bfunc(flag: boolean): boolean;
        afunc(obj: any): any;
        tfunc(obj: tclass): any;
        torfunc(obj: tclass | string): tclass | string;
        lnfunc(num: number[]): number[];
        lsfunc(str: string[]): string[];
        lbfunc(flag: boolean[]): boolean[];
        lafunc(obj: any[]): any[];
        ltfunc(lobj: tclass[]): tclass[];
        mapstr: Map<string, string>;
        mapnum: Map<string, number>;
        mapbool: Map<string, boolean>;
        arraystr: Array<string>;
        arraynum: Array<number>;
        arraybool: Array<boolean>;
        setstr: Set<string>;
        setnum: Set<number>;
        setbool: Set<boolean>;
        contruct2: (a: number) => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const typeItem_0 = parseObj.types.find(item => item.name === 'OTC');
      assert.ok(typeItem_0);
      assert.strictEqual(typeItem_0!.members.length, 20);
      assert.strictEqual(typeItem_0!.members[0].name, 'len');
      assert.strictEqual(typeItem_0!.members[0].type, 'number');
      assert.strictEqual(typeItem_0!.members[1].name, 'name');
      assert.strictEqual(typeItem_0!.members[1].type, 'string');
      assert.strictEqual(typeItem_0!.members[2].name, 'flag');
      assert.strictEqual(typeItem_0!.members[2].type, 'boolean');
      assert.strictEqual(typeItem_0!.members[3].name, 'obj');
      assert.strictEqual(typeItem_0!.members[3].type, 'any');
      assert.strictEqual(typeItem_0!.members[4].name, 'llen');
      assert.strictEqual(typeItem_0!.members[4].type, 'number[]');
      assert.strictEqual(typeItem_0!.members[5].name, 'lstr');
      assert.strictEqual(typeItem_0!.members[5].type, 'string[]');
      assert.strictEqual(typeItem_0!.members[6].name, 'lflag');
      assert.strictEqual(typeItem_0!.members[6].type, 'boolean[]');
      assert.strictEqual(typeItem_0!.members[7].name, 'lobj');
      assert.strictEqual(typeItem_0!.members[7].type, 'any[]');
      assert.strictEqual(typeItem_0!.members[8].name, 'tdef');
      assert.strictEqual(typeItem_0!.members[8].type, 'aclass');
      assert.strictEqual(typeItem_0!.members[9].name, 'ltdef');
      assert.strictEqual(typeItem_0!.members[9].type, 'aclass[]');
      assert.strictEqual(typeItem_0!.members[10].name, 'mapstr');
      assert.strictEqual(typeItem_0!.members[10].type, 'Map<string, string>');
      assert.strictEqual(typeItem_0!.members[11].name, 'mapnum');
      assert.strictEqual(typeItem_0!.members[11].type, 'Map<string, number>');
      assert.strictEqual(typeItem_0!.members[12].name, 'mapbool');
      assert.strictEqual(typeItem_0!.members[12].type, 'Map<string, boolean>');
      assert.strictEqual(typeItem_0!.members[13].name, 'arraystr');
      assert.strictEqual(typeItem_0!.members[13].type, 'Array<string>');
      assert.strictEqual(typeItem_0!.members[14].name, 'arraynum');
      assert.strictEqual(typeItem_0!.members[14].type, 'Array<number>');
      assert.strictEqual(typeItem_0!.members[15].name, 'arraybool');
      assert.strictEqual(typeItem_0!.members[15].type, 'Array<boolean>');
      assert.strictEqual(typeItem_0!.members[16].name, 'setstr');
      assert.strictEqual(typeItem_0!.members[16].type, 'Set<string>');
      assert.strictEqual(typeItem_0!.members[17].name, 'setnum');
      assert.strictEqual(typeItem_0!.members[17].type, 'Set<number>');
      assert.strictEqual(typeItem_0!.members[18].name, 'setbool');
      assert.strictEqual(typeItem_0!.members[18].type, 'Set<boolean>');
      assert.strictEqual(typeItem_0!.members[19].name, 'contruct2');
      assert.strictEqual(typeItem_0!.members[19].type, '(a: number) => void');
      assert.strictEqual(typeItem_0!.functions.length, 13);
      assert.strictEqual(typeItem_0!.functions[0].name, 'contruct');
      assert.strictEqual(typeItem_0!.functions[0].returns, 'void');
      assert.strictEqual(typeItem_0!.functions[0].parameters.length, 1);
      assert.strictEqual(typeItem_0!.functions[0].parameters[0].type, 'number');
      assert.strictEqual(typeItem_0!.functions[1].name, 'deconstruct');
      assert.strictEqual(typeItem_0!.functions[1].returns, 'void');
      assert.strictEqual(typeItem_0!.functions[1].parameters.length, 0);
      assert.strictEqual(typeItem_0!.functions[2].name, 'nfunc');
      assert.strictEqual(typeItem_0!.functions[2].returns, 'number');
      assert.strictEqual(typeItem_0!.functions[2].parameters.length, 1);
      assert.strictEqual(typeItem_0!.functions[2].parameters[0].type, 'number');
      assert.strictEqual(typeItem_0!.functions[3].name, 'sfunc');
      assert.strictEqual(typeItem_0!.functions[3].returns, 'string');
      assert.strictEqual(typeItem_0!.functions[3].parameters.length, 1);
      assert.strictEqual(typeItem_0!.functions[3].parameters[0].type, 'string');
      assert.strictEqual(typeItem_0!.functions[4].name, 'bfunc');
      assert.strictEqual(typeItem_0!.functions[4].returns, 'boolean');
      assert.strictEqual(typeItem_0!.functions[4].parameters.length, 1);
      assert.strictEqual(typeItem_0!.functions[4].parameters[0].type, 'boolean');
      assert.strictEqual(typeItem_0!.functions[5].name, 'afunc');
      assert.strictEqual(typeItem_0!.functions[5].returns, 'any');
      assert.strictEqual(typeItem_0!.functions[5].parameters.length, 1);
      assert.strictEqual(typeItem_0!.functions[5].parameters[0].type, 'any');
      assert.strictEqual(typeItem_0!.functions[6].name, 'tfunc');
      assert.strictEqual(typeItem_0!.functions[6].returns, 'any');
      assert.strictEqual(typeItem_0!.functions[6].parameters.length, 1);
      assert.strictEqual(typeItem_0!.functions[6].parameters[0].type, 'tclass');
      assert.strictEqual(typeItem_0!.functions[7].name, 'torfunc');
      assert.strictEqual(typeItem_0!.functions[7].returns, 'tclass | string');
      assert.strictEqual(typeItem_0!.functions[7].parameters.length, 1);
      assert.strictEqual(typeItem_0!.functions[7].parameters[0].type, 'tclass | string');
      assert.strictEqual(typeItem_0!.functions[8].name, 'lnfunc');
      assert.strictEqual(typeItem_0!.functions[8].returns, 'number[]');
      assert.strictEqual(typeItem_0!.functions[8].parameters.length, 1);
      assert.strictEqual(typeItem_0!.functions[8].parameters[0].type, 'number[]');
      assert.strictEqual(typeItem_0!.functions[9].name, 'lsfunc');
      assert.strictEqual(typeItem_0!.functions[9].returns, 'string[]');
      assert.strictEqual(typeItem_0!.functions[9].parameters.length, 1);
      assert.strictEqual(typeItem_0!.functions[9].parameters[0].type, 'string[]');
      assert.strictEqual(typeItem_0!.functions[10].name, 'lbfunc');
      assert.strictEqual(typeItem_0!.functions[10].returns, 'boolean[]');
      assert.strictEqual(typeItem_0!.functions[10].parameters.length, 1);
      assert.strictEqual(typeItem_0!.functions[10].parameters[0].type, 'boolean[]');
      assert.strictEqual(typeItem_0!.functions[11].name, 'lafunc');
      assert.strictEqual(typeItem_0!.functions[11].returns, 'any[]');
      assert.strictEqual(typeItem_0!.functions[11].parameters.length, 1);
      assert.strictEqual(typeItem_0!.functions[11].parameters[0].type, 'any[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0002 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0002 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0003
  * @tc.name dts2cpp_type_0003
  * @tc.desc dts2cpp type 对齐 test_4：交叉类型 RHS（交叉部分不深入解析） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0003', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0003.ts',
            `type OTC = Basic & {
        len: number;
        name: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const typeItem_0 = parseObj.types.find(item => item.name === 'OTC');
      assert.ok(typeItem_0);
      assert.strictEqual(typeItem_0!.members.length, 0);
      assert.strictEqual(typeItem_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0003 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0003 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0004
  * @tc.name dts2cpp_type_0004
  * @tc.desc dts2cpp type 对齐 test_5：定长数组成员与箭头函数属性 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0004', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0004.ts',
            `type OTC = {
        len: number[10];
        name: string[10][20];
        contruct: (a: number[10][20][30]) => void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const typeItem_0 = parseObj.types.find(item => item.name === 'OTC');
      assert.ok(typeItem_0);
      assert.strictEqual(typeItem_0!.members.length, 3);
      assert.strictEqual(typeItem_0!.members[0].name, 'len');
      assert.strictEqual(typeItem_0!.members[0].type, 'number[10]');
      assert.strictEqual(typeItem_0!.members[1].name, 'name');
      assert.strictEqual(typeItem_0!.members[1].type, 'string[10][20]');
      assert.strictEqual(typeItem_0!.members[2].name, 'contruct');
      assert.strictEqual(typeItem_0!.members[2].type, '(a: number[10][20][30]) => void');
      assert.strictEqual(typeItem_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0004 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0004 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0005
  * @tc.name dts2cpp_type_0005
  * @tc.desc dts2cpp type 对齐 test_7：可选成员/参数方法签名 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0005', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0005.ts',
            `type OTC = {
        len: Type;
        name?: Type[10][20];
        contruct(a?: Type[10][20][30]): void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const typeItem_0 = parseObj.types.find(item => item.name === 'OTC');
      assert.ok(typeItem_0);
      assert.strictEqual(typeItem_0!.members.length, 2);
      assert.strictEqual(typeItem_0!.members[0].name, 'len');
      assert.strictEqual(typeItem_0!.members[0].type, 'Type');
      assert.strictEqual(typeItem_0!.members[1].name, 'name');
      assert.strictEqual(typeItem_0!.members[1].type, 'Type[10][20]');
      assert.strictEqual(typeItem_0!.functions.length, 1);
      assert.strictEqual(typeItem_0!.functions[0].name, 'contruct');
      assert.strictEqual(typeItem_0!.functions[0].returns, 'void');
      assert.strictEqual(typeItem_0!.functions[0].parameters.length, 1);
      assert.strictEqual(typeItem_0!.functions[0].parameters[0].type, 'Type[10][20][30]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0005 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0005 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0006
  * @tc.name dts2cpp_type_0006
  * @tc.desc dts2cpp type 对齐 test_8：多种注释 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0006', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0006.ts',
            `type OTC = {
        // 行注释
        /* 块注释 */
        len: number; // 尾注释
        /** 文档注释 */
        name: string;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const typeItem_0 = parseObj.types.find(item => item.name === 'OTC');
      assert.ok(typeItem_0);
      assert.strictEqual(typeItem_0!.members.length, 2);
      assert.strictEqual(typeItem_0!.members[0].name, 'len');
      assert.strictEqual(typeItem_0!.members[0].type, 'number');
      assert.strictEqual(typeItem_0!.members[1].name, 'name');
      assert.strictEqual(typeItem_0!.members[1].type, 'string');
      assert.strictEqual(typeItem_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0006 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0006 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0007
  * @tc.name dts2cpp_type_0007
  * @tc.desc dts2cpp type 对齐 test_9：修饰符成员（const 独立为成员） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0007', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0007.ts',
            `type OTC = {
        readonly id: number;
        public name: string;
        private secret: string;
        const fixed: number;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const typeItem_0 = parseObj.types.find(item => item.name === 'OTC');
      assert.ok(typeItem_0);
      assert.strictEqual(typeItem_0!.members.length, 5);
      assert.strictEqual(typeItem_0!.members[0].name, 'id');
      assert.strictEqual(typeItem_0!.members[0].type, 'number');
      assert.strictEqual(typeItem_0!.members[1].name, 'name');
      assert.strictEqual(typeItem_0!.members[1].type, 'string');
      assert.strictEqual(typeItem_0!.members[2].name, 'secret');
      assert.strictEqual(typeItem_0!.members[2].type, 'string');
      assert.strictEqual(typeItem_0!.members[3].name, 'const');
      assert.strictEqual(typeItem_0!.members[3].type, 'unknown');
      assert.strictEqual(typeItem_0!.members[4].name, 'fixed');
      assert.strictEqual(typeItem_0!.members[4].type, 'number');
      assert.strictEqual(typeItem_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0007 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0007 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0008
  * @tc.name dts2cpp_type_0008
  * @tc.desc dts2cpp type 对齐 test_10：索引签名成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0008', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0008.ts',
            `type OTC = {
        [index: number]: string;
        [key: string]: number;
        [symbol: symbol]: any;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const typeItem_0 = parseObj.types.find(item => item.name === 'OTC');
      assert.ok(typeItem_0);
      assert.strictEqual(typeItem_0!.members.length, 0);
      assert.strictEqual(typeItem_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0008 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0008 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0009
  * @tc.name dts2cpp_type_0009
  * @tc.desc dts2cpp type 对齐 test_13：泛型/字面量/嵌套泛型成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0009', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0009.ts',
            `type OTC = {
        a: any;
        b: unknown;
        c: "hello world";
        d: Type;
        e: OrNull<OneOrMany<Type>>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const typeItem_0 = parseObj.types.find(item => item.name === 'OTC');
      assert.ok(typeItem_0);
      assert.strictEqual(typeItem_0!.members.length, 5);
      assert.strictEqual(typeItem_0!.members[0].name, 'a');
      assert.strictEqual(typeItem_0!.members[0].type, 'any');
      assert.strictEqual(typeItem_0!.members[1].name, 'b');
      assert.strictEqual(typeItem_0!.members[1].type, 'unknown');
      assert.strictEqual(typeItem_0!.members[2].name, 'c');
      assert.strictEqual(typeItem_0!.members[2].type, '"hello world"');
      assert.strictEqual(typeItem_0!.members[3].name, 'd');
      assert.strictEqual(typeItem_0!.members[3].type, 'Type');
      assert.strictEqual(typeItem_0!.members[4].name, 'e');
      assert.strictEqual(typeItem_0!.members[4].type, 'OrNull<OneOrMany<Type>>');
      assert.strictEqual(typeItem_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0009 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0009 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0010
  * @tc.name dts2cpp_type_0010
  * @tc.desc dts2cpp type 对齐 test_14：ReadonlyArray/元组成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0010', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0010.ts',
            `type OTC = {
        ro: ReadonlyArray<string>;
        ro2: readonly string[];
        pair: [string, number];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const typeItem_0 = parseObj.types.find(item => item.name === 'OTC');
      assert.ok(typeItem_0);
      assert.strictEqual(typeItem_0!.members.length, 3);
      assert.strictEqual(typeItem_0!.members[0].name, 'ro');
      assert.strictEqual(typeItem_0!.members[0].type, 'ReadonlyArray<string>');
      assert.strictEqual(typeItem_0!.members[1].name, 'ro2');
      assert.strictEqual(typeItem_0!.members[1].type, 'readonly string[]');
      assert.strictEqual(typeItem_0!.members[2].name, 'pair');
      assert.strictEqual(typeItem_0!.members[2].type, '[string, number]');
      assert.strictEqual(typeItem_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0010 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0010 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0011
  * @tc.name dts2cpp_type_0011
  * @tc.desc dts2cpp type 对齐 test_16：元组成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0011', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0011.ts',
            `type OTC = {
        tup: readonly [string, number];
        tup2: [number, number];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const typeItem_0 = parseObj.types.find(item => item.name === 'OTC');
      assert.ok(typeItem_0);
      assert.strictEqual(typeItem_0!.members.length, 2);
      assert.strictEqual(typeItem_0!.members[0].name, 'tup');
      assert.strictEqual(typeItem_0!.members[0].type, 'readonly [string, number]');
      assert.strictEqual(typeItem_0!.members[1].name, 'tup2');
      assert.strictEqual(typeItem_0!.members[1].type, '[number, number]');
      assert.strictEqual(typeItem_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0011 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0011 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0012
  * @tc.name dts2cpp_type_0012
  * @tc.desc dts2cpp type 对齐 test_17：keyof 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0012', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0012.ts',
            `type OTC = {
        k: keyof Arrayish;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const typeItem_0 = parseObj.types.find(item => item.name === 'OTC');
      assert.ok(typeItem_0);
      assert.strictEqual(typeItem_0!.members.length, 1);
      assert.strictEqual(typeItem_0!.members[0].name, 'k');
      assert.strictEqual(typeItem_0!.members[0].type, 'keyof Arrayish');
      assert.strictEqual(typeItem_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0012 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0012 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0013
  * @tc.name dts2cpp_type_0013
  * @tc.desc dts2cpp type 对齐 test_19：索引访问类型成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0013', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0013.ts',
            `type OTC = {
        a: Person["age"];
        b: Person["age" | "name"];
        c: Person[keyof Person];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const typeItem_0 = parseObj.types.find(item => item.name === 'OTC');
      assert.ok(typeItem_0);
      assert.strictEqual(typeItem_0!.members.length, 3);
      assert.strictEqual(typeItem_0!.members[0].name, 'a');
      assert.strictEqual(typeItem_0!.members[0].type, 'Person["age"]');
      assert.strictEqual(typeItem_0!.members[1].name, 'b');
      assert.strictEqual(typeItem_0!.members[1].type, 'Person["age" | "name"]');
      assert.strictEqual(typeItem_0!.members[2].name, 'c');
      assert.strictEqual(typeItem_0!.members[2].type, 'Person[keyof Person]');
      assert.strictEqual(typeItem_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0013 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0013 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0014
  * @tc.name dts2cpp_type_0014
  * @tc.desc dts2cpp type 对齐 test_20：条件类型成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0014', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0014.ts',
            `type OTC = {
        a: Dog extends Animal ? number : string;
        b: T extends number ? IdLabel : NameLabel;
        c: Type extends Array<infer Item> ? Item : Type;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const typeItem_0 = parseObj.types.find(item => item.name === 'OTC');
      assert.ok(typeItem_0);
      assert.strictEqual(typeItem_0!.members.length, 3);
      assert.strictEqual(typeItem_0!.members[0].name, 'a');
      assert.strictEqual(typeItem_0!.members[0].type, 'Dog extends Animal ? number : string');
      assert.strictEqual(typeItem_0!.members[1].name, 'b');
      assert.strictEqual(typeItem_0!.members[1].type, 'T extends number ? IdLabel : NameLabel');
      assert.strictEqual(typeItem_0!.members[2].name, 'c');
      assert.strictEqual(typeItem_0!.members[2].type, 'Type extends Array<infer Item> ? Item : Type');
      assert.strictEqual(typeItem_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0014 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0014 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0015
  * @tc.name dts2cpp_type_0015
  * @tc.desc dts2cpp type 对齐 test_22：模板字面与泛型方法签名 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0015', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0015.ts',
            `type OTC = {
        name: "world";
        email: "welcome_email" | "email_heading";
        on<Key extends string & keyof Type>(eventName: \`\${Key}Changed\`, callback: (newValue: Type[Key]) => void): void;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const typeItem_0 = parseObj.types.find(item => item.name === 'OTC');
      assert.ok(typeItem_0);
      assert.strictEqual(typeItem_0!.members.length, 2);
      assert.strictEqual(typeItem_0!.members[0].name, 'name');
      assert.strictEqual(typeItem_0!.members[0].type, '"world"');
      assert.strictEqual(typeItem_0!.members[1].name, 'email');
      assert.strictEqual(typeItem_0!.members[1].type, '"welcome_email" | "email_heading"');
      assert.strictEqual(typeItem_0!.functions.length, 1);
      assert.strictEqual(typeItem_0!.functions[0].name, 'on');
      assert.strictEqual(typeItem_0!.functions[0].returns, 'void');
      assert.strictEqual(typeItem_0!.functions[0].parameters.length, 2);
      assert.strictEqual(typeItem_0!.functions[0].parameters[0].type, '`${Key}Changed`');
      assert.strictEqual(typeItem_0!.functions[0].parameters[1].type, '(newValue: Type[Key]) => void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0015 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0015 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0016
  * @tc.name dts2cpp_type_0016
  * @tc.desc dts2cpp type 对齐 test_23：内在字符串操作类型成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0016', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0016.ts',
            `type OTC = {
        a: Uppercase<Greeting>;
        b: Lowercase<Greeting>;
        c: Capitalize<Greeting>;
        d: Uncapitalize<Greeting>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const typeItem_0 = parseObj.types.find(item => item.name === 'OTC');
      assert.ok(typeItem_0);
      assert.strictEqual(typeItem_0!.members.length, 4);
      assert.strictEqual(typeItem_0!.members[0].name, 'a');
      assert.strictEqual(typeItem_0!.members[0].type, 'Uppercase<Greeting>');
      assert.strictEqual(typeItem_0!.members[1].name, 'b');
      assert.strictEqual(typeItem_0!.members[1].type, 'Lowercase<Greeting>');
      assert.strictEqual(typeItem_0!.members[2].name, 'c');
      assert.strictEqual(typeItem_0!.members[2].type, 'Capitalize<Greeting>');
      assert.strictEqual(typeItem_0!.members[3].name, 'd');
      assert.strictEqual(typeItem_0!.members[3].type, 'Uncapitalize<Greeting>');
      assert.strictEqual(typeItem_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0016 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0016 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0017
  * @tc.name dts2cpp_type_0017
  * @tc.desc dts2cpp type 对齐 test_24：export type 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0017', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0017.ts',
            `export type OTC = {
        len: number;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const typeItem_0 = parseObj.types.find(item => item.name === 'OTC');
      assert.ok(typeItem_0);
      assert.strictEqual(typeItem_0!.members.length, 1);
      assert.strictEqual(typeItem_0!.members[0].name, 'len');
      assert.strictEqual(typeItem_0!.members[0].type, 'number');
      assert.strictEqual(typeItem_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0017 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0017 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0018
  * @tc.name dts2cpp_type_0018
  * @tc.desc dts2cpp type 对齐 test_26：declare namespace 嵌套 type 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0018', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0018.ts',
            `declare namespace space {
        export type OTC = {
          len: number;
        };
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const typeItem_0 = parseObj.types.find(item => item.name === 'OTC');
      assert.ok(typeItem_0);
      assert.strictEqual(typeItem_0!.members.length, 1);
      assert.strictEqual(typeItem_0!.members[0].name, 'len');
      assert.strictEqual(typeItem_0!.members[0].type, 'number');
      assert.strictEqual(typeItem_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0018 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0018 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_type_0019
  * @tc.name dts2cpp_type_0019
  * @tc.desc dts2cpp type 对齐 test_42：单行 type 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_type_0019', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseType0019.ts',
            `type OTC = { len: number; name: string; };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.types);
      assert.strictEqual(parseObj.types.length, 1);
      const typeItem_0 = parseObj.types.find(item => item.name === 'OTC');
      assert.ok(typeItem_0);
      assert.strictEqual(typeItem_0!.members.length, 2);
      assert.strictEqual(typeItem_0!.members[0].name, 'len');
      assert.strictEqual(typeItem_0!.members[0].type, 'number');
      assert.strictEqual(typeItem_0!.members[1].name, 'name');
      assert.strictEqual(typeItem_0!.members[1].type, 'string');
      assert.strictEqual(typeItem_0!.functions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_type_0019 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_type_0019 执行异常: ${String(err)}`);
    }
  });

});
