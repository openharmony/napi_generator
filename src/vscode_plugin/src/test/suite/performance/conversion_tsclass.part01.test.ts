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
  vscode.window.showInformationMessage('Start dts2cpp Performance_DTS2CPP_Class_Suite.');

  /**
  * @tc.number dts2cpp_class_0001
  * @tc.name dts2cpp_class_0001
  * @tc.desc dts2cpp class 对齐 parsetsclass test_1：一般 class（2 属性 + 2 无返回注解方法） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0001', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0001.ts',
            `class OTC {
        len: number;
        name: string;
        contruct(a: number) {
        };
        deconstruct() {};
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'OTC');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 2);
      assert.strictEqual(classItem_0!.variableList[0].name, 'len');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'name');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.functionList.length, 2);
      assert.strictEqual(classItem_0!.functionList[0].name, 'contruct');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[1].name, 'deconstruct');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0001 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0001 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0002
  * @tc.name dts2cpp_class_0002
  * @tc.desc dts2cpp class 对齐 test_2：30 属性 + 13 方法全类型覆盖（含函数类型字段与 Map/Array/Set） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0002', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0002.ts',
            `class OTC {
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
        contruct(a: number) {
        };
        deconstruct() {};
        nfunc(num: number): number {
          return 0;
        };
        sfunc(str: string): string {
          return '';
        };
        bfunc(flag: boolean): boolean {
          return true;
        };
        afunc(obj: any): any {
          return '';
        };
        tfunc(obj: tclass): any  {
          return {};
        };
        torfunc(obj: tclass | string): tclass | string {
          return {};
        };
        lnfunc(num: number[]): number[] {
          return [];
        };
        lsfunc(str: string[]): string[] {
          return [];
        };
        lbfunc(flag: boolean[]): boolean[] {
          return [];
        };
        lafunc(obj: any[]): any[] {
          return [];
        };
        ltfunc(lobj: tclass[]): tclass[] {
          return [];
        };
        funcdef: () => {};
        nfundef: ((a: number)=> number);
        strfundef: ((a: string)=> string);
        bfundef: (a: boolean)=> boolean;
        afundef: (a: any)=> any;
        tfundef: (a: tclass)=> tclass;
        lnfundef: (a: number[])=> number[];
        lstrfundef: (a: string[])=> string[];
        lbfundef: (a: boolean[])=> boolean[];
        lafundef: (a: any[])=> any[];
        ltfundef: (a: tclass[])=> tclass[];
        mapstr: Map<string, string>;
        mapnum: Map<string, number>;
        mapbool: Map<string, boolean>;
        arraystr: Array<string>;
        arraynum: Array<number>;
        arraybool: Array<boolean>;
        setstr: Set<string>;
        setnum: Set<number>;
        setbool: Set<boolean>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'OTC');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 30);
      assert.strictEqual(classItem_0!.variableList[0].name, 'len');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'name');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.variableList[2].name, 'flag');
      assert.strictEqual(classItem_0!.variableList[2].type, 'boolean');
      assert.strictEqual(classItem_0!.variableList[3].name, 'obj');
      assert.strictEqual(classItem_0!.variableList[3].type, 'any');
      assert.strictEqual(classItem_0!.variableList[4].name, 'llen');
      assert.strictEqual(classItem_0!.variableList[4].type, 'number[]');
      assert.strictEqual(classItem_0!.variableList[5].name, 'lstr');
      assert.strictEqual(classItem_0!.variableList[5].type, 'string[]');
      assert.strictEqual(classItem_0!.variableList[6].name, 'lflag');
      assert.strictEqual(classItem_0!.variableList[6].type, 'boolean[]');
      assert.strictEqual(classItem_0!.variableList[7].name, 'lobj');
      assert.strictEqual(classItem_0!.variableList[7].type, 'any[]');
      assert.strictEqual(classItem_0!.variableList[8].name, 'tdef');
      assert.strictEqual(classItem_0!.variableList[8].type, 'aclass');
      assert.strictEqual(classItem_0!.variableList[9].name, 'ltdef');
      assert.strictEqual(classItem_0!.variableList[9].type, 'aclass[]');
      assert.strictEqual(classItem_0!.variableList[10].name, 'funcdef');
      assert.strictEqual(classItem_0!.variableList[10].type, '() => {}');
      assert.strictEqual(classItem_0!.variableList[11].name, 'nfundef');
      assert.strictEqual(classItem_0!.variableList[11].type, '((a: number)=> number)');
      assert.strictEqual(classItem_0!.variableList[12].name, 'strfundef');
      assert.strictEqual(classItem_0!.variableList[12].type, '((a: string)=> string)');
      assert.strictEqual(classItem_0!.variableList[13].name, 'bfundef');
      assert.strictEqual(classItem_0!.variableList[13].type, '(a: boolean)=> boolean');
      assert.strictEqual(classItem_0!.variableList[14].name, 'afundef');
      assert.strictEqual(classItem_0!.variableList[14].type, '(a: any)=> any');
      assert.strictEqual(classItem_0!.variableList[15].name, 'tfundef');
      assert.strictEqual(classItem_0!.variableList[15].type, '(a: tclass)=> tclass');
      assert.strictEqual(classItem_0!.variableList[16].name, 'lnfundef');
      assert.strictEqual(classItem_0!.variableList[16].type, '(a: number[])=> number[]');
      assert.strictEqual(classItem_0!.variableList[17].name, 'lstrfundef');
      assert.strictEqual(classItem_0!.variableList[17].type, '(a: string[])=> string[]');
      assert.strictEqual(classItem_0!.variableList[18].name, 'lbfundef');
      assert.strictEqual(classItem_0!.variableList[18].type, '(a: boolean[])=> boolean[]');
      assert.strictEqual(classItem_0!.variableList[19].name, 'lafundef');
      assert.strictEqual(classItem_0!.variableList[19].type, '(a: any[])=> any[]');
      assert.strictEqual(classItem_0!.variableList[20].name, 'ltfundef');
      assert.strictEqual(classItem_0!.variableList[20].type, '(a: tclass[])=> tclass[]');
      assert.strictEqual(classItem_0!.variableList[21].name, 'mapstr');
      assert.strictEqual(classItem_0!.variableList[21].type, 'Map<string, string>');
      assert.strictEqual(classItem_0!.variableList[22].name, 'mapnum');
      assert.strictEqual(classItem_0!.variableList[22].type, 'Map<string, number>');
      assert.strictEqual(classItem_0!.variableList[23].name, 'mapbool');
      assert.strictEqual(classItem_0!.variableList[23].type, 'Map<string, boolean>');
      assert.strictEqual(classItem_0!.variableList[24].name, 'arraystr');
      assert.strictEqual(classItem_0!.variableList[24].type, 'Array<string>');
      assert.strictEqual(classItem_0!.variableList[25].name, 'arraynum');
      assert.strictEqual(classItem_0!.variableList[25].type, 'Array<number>');
      assert.strictEqual(classItem_0!.variableList[26].name, 'arraybool');
      assert.strictEqual(classItem_0!.variableList[26].type, 'Array<boolean>');
      assert.strictEqual(classItem_0!.variableList[27].name, 'setstr');
      assert.strictEqual(classItem_0!.variableList[27].type, 'Set<string>');
      assert.strictEqual(classItem_0!.variableList[28].name, 'setnum');
      assert.strictEqual(classItem_0!.variableList[28].type, 'Set<number>');
      assert.strictEqual(classItem_0!.variableList[29].name, 'setbool');
      assert.strictEqual(classItem_0!.variableList[29].type, 'Set<boolean>');
      assert.strictEqual(classItem_0!.functionList.length, 13);
      assert.strictEqual(classItem_0!.functionList[0].name, 'contruct');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[1].name, 'deconstruct');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 0);
      assert.strictEqual(classItem_0!.functionList[2].name, 'nfunc');
      assert.strictEqual(classItem_0!.functionList[2].returns, 'number');
      assert.strictEqual(classItem_0!.functionList[2].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[2].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[3].name, 'sfunc');
      assert.strictEqual(classItem_0!.functionList[3].returns, 'string');
      assert.strictEqual(classItem_0!.functionList[3].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[3].parameters[0].type, 'string');
      assert.strictEqual(classItem_0!.functionList[4].name, 'bfunc');
      assert.strictEqual(classItem_0!.functionList[4].returns, 'boolean');
      assert.strictEqual(classItem_0!.functionList[4].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[4].parameters[0].type, 'boolean');
      assert.strictEqual(classItem_0!.functionList[5].name, 'afunc');
      assert.strictEqual(classItem_0!.functionList[5].returns, 'any');
      assert.strictEqual(classItem_0!.functionList[5].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[5].parameters[0].type, 'any');
      assert.strictEqual(classItem_0!.functionList[6].name, 'tfunc');
      assert.strictEqual(classItem_0!.functionList[6].returns, 'any');
      assert.strictEqual(classItem_0!.functionList[6].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[6].parameters[0].type, 'tclass');
      assert.strictEqual(classItem_0!.functionList[7].name, 'torfunc');
      assert.strictEqual(classItem_0!.functionList[7].returns, 'tclass | string');
      assert.strictEqual(classItem_0!.functionList[7].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[7].parameters[0].type, 'tclass | string');
      assert.strictEqual(classItem_0!.functionList[8].name, 'lnfunc');
      assert.strictEqual(classItem_0!.functionList[8].returns, 'number[]');
      assert.strictEqual(classItem_0!.functionList[8].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[8].parameters[0].type, 'number[]');
      assert.strictEqual(classItem_0!.functionList[9].name, 'lsfunc');
      assert.strictEqual(classItem_0!.functionList[9].returns, 'string[]');
      assert.strictEqual(classItem_0!.functionList[9].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[9].parameters[0].type, 'string[]');
      assert.strictEqual(classItem_0!.functionList[10].name, 'lbfunc');
      assert.strictEqual(classItem_0!.functionList[10].returns, 'boolean[]');
      assert.strictEqual(classItem_0!.functionList[10].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[10].parameters[0].type, 'boolean[]');
      assert.strictEqual(classItem_0!.functionList[11].name, 'lafunc');
      assert.strictEqual(classItem_0!.functionList[11].returns, 'any[]');
      assert.strictEqual(classItem_0!.functionList[11].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[11].parameters[0].type, 'any[]');
      assert.strictEqual(classItem_0!.functionList[12].name, 'ltfunc');
      assert.strictEqual(classItem_0!.functionList[12].returns, 'tclass[]');
      assert.strictEqual(classItem_0!.functionList[12].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[12].parameters[0].type, 'tclass[]');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0002 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0002 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0003
  * @tc.name dts2cpp_class_0003
  * @tc.desc dts2cpp class 对齐 test_3：模板类 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0003', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0003.ts',
            `class OTC<Type> {
        len: Type;
        name: Type[];
        add(a: Type) {
        };
        del: (x: Type, y: Type) => Type
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'OTC');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 3);
      assert.strictEqual(classItem_0!.variableList[0].name, 'len');
      assert.strictEqual(classItem_0!.variableList[0].type, 'Type');
      assert.strictEqual(classItem_0!.variableList[1].name, 'name');
      assert.strictEqual(classItem_0!.variableList[1].type, 'Type[]');
      assert.strictEqual(classItem_0!.variableList[2].name, 'del');
      assert.strictEqual(classItem_0!.variableList[2].type, '(x: Type, y: Type) => Type');
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'add');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'Type');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0003 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0003 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0004
  * @tc.name dts2cpp_class_0004
  * @tc.desc dts2cpp class 对齐 test_4：继承 extends 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0004', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0004.ts',
            `class OTC extends Basic {
        len: number;
        name: string;
        contruct(a: number) {
        };
        deconstruct() {};
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'OTC');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 2);
      assert.strictEqual(classItem_0!.variableList[0].name, 'len');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'name');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.functionList.length, 2);
      assert.strictEqual(classItem_0!.functionList[0].name, 'contruct');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList[1].name, 'deconstruct');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0004 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0004 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0005
  * @tc.name dts2cpp_class_0005
  * @tc.desc dts2cpp class 对齐 test_5：定长数组维度属性/参数 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0005', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0005.ts',
            `class OTC extends Basic {
        len: number[10];
        name: string[10][20];
        contruct(a: number[10][20][30]) {
        };
        deconstruct() {};
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'OTC');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 2);
      assert.strictEqual(classItem_0!.variableList[0].name, 'len');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number[10]');
      assert.strictEqual(classItem_0!.variableList[1].name, 'name');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string[10][20]');
      assert.strictEqual(classItem_0!.functionList.length, 2);
      assert.strictEqual(classItem_0!.functionList[0].name, 'contruct');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'number[10][20][30]');
      assert.strictEqual(classItem_0!.functionList[1].name, 'deconstruct');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0005 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0005 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0006
  * @tc.name dts2cpp_class_0006
  * @tc.desc dts2cpp class 对齐 test_6：模板继承约束 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0006', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0006.ts',
            `class OTC <Type extends Basic> {
        len: Type;
        name: Type[10][20];
        contruct(a: Type[10][20][30]) {
        };
        deconstruct() {};
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'OTC');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 2);
      assert.strictEqual(classItem_0!.variableList[0].name, 'len');
      assert.strictEqual(classItem_0!.variableList[0].type, 'Type');
      assert.strictEqual(classItem_0!.variableList[1].name, 'name');
      assert.strictEqual(classItem_0!.variableList[1].type, 'Type[10][20]');
      assert.strictEqual(classItem_0!.functionList.length, 2);
      assert.strictEqual(classItem_0!.functionList[0].name, 'contruct');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'Type[10][20][30]');
      assert.strictEqual(classItem_0!.functionList[1].name, 'deconstruct');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0006 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0006 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0007
  * @tc.name dts2cpp_class_0007
  * @tc.desc dts2cpp class 对齐 test_7：可选属性/参数 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0007', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0007.ts',
            `class OTC <Type extends Basic> {
        len: Type;
        name?: Type[10][20];
        contruct(a?: Type[10][20][30]) {
        };
        deconstruct() {};
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'OTC');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 2);
      assert.strictEqual(classItem_0!.variableList[0].name, 'len');
      assert.strictEqual(classItem_0!.variableList[0].type, 'Type');
      assert.strictEqual(classItem_0!.variableList[1].name, 'name');
      assert.strictEqual(classItem_0!.variableList[1].type, 'Type[10][20]');
      assert.strictEqual(classItem_0!.functionList.length, 2);
      assert.strictEqual(classItem_0!.functionList[0].name, 'contruct');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, 'Type[10][20][30]');
      assert.strictEqual(classItem_0!.functionList[1].name, 'deconstruct');
      assert.strictEqual(classItem_0!.functionList[1].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[1].parameters.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0007 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0007 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0008
  * @tc.name dts2cpp_class_0008
  * @tc.desc dts2cpp class 对齐 test_8：多种注释 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0008', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0008.ts',
            `class OTC {
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
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'OTC');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 2);
      assert.strictEqual(classItem_0!.variableList[0].name, 'len');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'name');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0008 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0008 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0009
  * @tc.name dts2cpp_class_0009
  * @tc.desc dts2cpp class 对齐 test_9：readonly/public/private/const 修饰符（剥离后解析） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0009', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0009.ts',
            `class OTC {
        readonly id: number;
        public name: string;
        private secret: string;
        const fixed: number;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'OTC');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'id');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'name');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.variableList[2].name, 'secret');
      assert.strictEqual(classItem_0!.variableList[2].type, 'string');
      assert.strictEqual(classItem_0!.variableList[3].name, 'fixed');
      assert.strictEqual(classItem_0!.variableList[3].type, 'number');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0009 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0009 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0010
  * @tc.name dts2cpp_class_0010
  * @tc.desc dts2cpp class 对齐 test_10：索引签名（解析时丢弃） 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0010', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0010.ts',
            `class OTC {
        [index: number]: string;
        [key: string]: number;
        [symbol: symbol]: any;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'OTC');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0010 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0010 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0011
  * @tc.name dts2cpp_class_0011
  * @tc.desc dts2cpp class 对齐 test_13：泛型对象/字面量/嵌套泛型属性 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0011', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0011.ts',
            `class OTC {
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
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'OTC');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 5);
      assert.strictEqual(classItem_0!.variableList[0].name, 'a');
      assert.strictEqual(classItem_0!.variableList[0].type, 'any');
      assert.strictEqual(classItem_0!.variableList[1].name, 'b');
      assert.strictEqual(classItem_0!.variableList[1].type, 'unknown');
      assert.strictEqual(classItem_0!.variableList[2].name, 'c');
      assert.strictEqual(classItem_0!.variableList[2].type, '"hello world"');
      assert.strictEqual(classItem_0!.variableList[3].name, 'd');
      assert.strictEqual(classItem_0!.variableList[3].type, 'Type');
      assert.strictEqual(classItem_0!.variableList[4].name, 'e');
      assert.strictEqual(classItem_0!.variableList[4].type, 'OrNull<OneOrMany<Type>>');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0011 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0011 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0012
  * @tc.name dts2cpp_class_0012
  * @tc.desc dts2cpp class 对齐 test_14：ReadonlyArray/readonly 数组/元组属性 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0012', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0012.ts',
            `class OTC {
        ro: ReadonlyArray<string>;
        ro2: readonly string[];
        pair: [string, number];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'OTC');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 3);
      assert.strictEqual(classItem_0!.variableList[0].name, 'ro');
      assert.strictEqual(classItem_0!.variableList[0].type, 'ReadonlyArray<string>');
      assert.strictEqual(classItem_0!.variableList[1].name, 'ro2');
      assert.strictEqual(classItem_0!.variableList[1].type, 'readonly string[]');
      assert.strictEqual(classItem_0!.variableList[2].name, 'pair');
      assert.strictEqual(classItem_0!.variableList[2].type, '[string, number]');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0012 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0012 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0013
  * @tc.name dts2cpp_class_0013
  * @tc.desc dts2cpp class 对齐 test_16：readonly/普通元组属性 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0013', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0013.ts',
            `class OTC {
        tup: readonly [string, number];
        tup2: [number, number];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'OTC');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 2);
      assert.strictEqual(classItem_0!.variableList[0].name, 'tup');
      assert.strictEqual(classItem_0!.variableList[0].type, 'readonly [string, number]');
      assert.strictEqual(classItem_0!.variableList[1].name, 'tup2');
      assert.strictEqual(classItem_0!.variableList[1].type, '[number, number]');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0013 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0013 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0014
  * @tc.name dts2cpp_class_0014
  * @tc.desc dts2cpp class 对齐 test_17：keyof 属性 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0014', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0014.ts',
            `class OTC {
        k: keyof Arrayish;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'OTC');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 1);
      assert.strictEqual(classItem_0!.variableList[0].name, 'k');
      assert.strictEqual(classItem_0!.variableList[0].type, 'keyof Arrayish');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0014 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0014 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0015
  * @tc.name dts2cpp_class_0015
  * @tc.desc dts2cpp class 对齐 test_19：索引访问类型属性 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0015', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0015.ts',
            `class OTC {
        a: Person["age"];
        b: Person["age" | "name"];
        c: Person[keyof Person];
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'OTC');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 3);
      assert.strictEqual(classItem_0!.variableList[0].name, 'a');
      assert.strictEqual(classItem_0!.variableList[0].type, 'Person["age"]');
      assert.strictEqual(classItem_0!.variableList[1].name, 'b');
      assert.strictEqual(classItem_0!.variableList[1].type, 'Person["age" | "name"]');
      assert.strictEqual(classItem_0!.variableList[2].name, 'c');
      assert.strictEqual(classItem_0!.variableList[2].type, 'Person[keyof Person]');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0015 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0015 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0016
  * @tc.name dts2cpp_class_0016
  * @tc.desc dts2cpp class 对齐 test_20：条件类型属性 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0016', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0016.ts',
            `class OTC {
        a: Dog extends Animal ? number : string;
        b: T extends number ? IdLabel : NameLabel;
        c: Type extends Array<infer Item> ? Item : Type;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'OTC');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 3);
      assert.strictEqual(classItem_0!.variableList[0].name, 'a');
      assert.strictEqual(classItem_0!.variableList[0].type, 'Dog extends Animal ? number : string');
      assert.strictEqual(classItem_0!.variableList[1].name, 'b');
      assert.strictEqual(classItem_0!.variableList[1].type, 'T extends number ? IdLabel : NameLabel');
      assert.strictEqual(classItem_0!.variableList[2].name, 'c');
      assert.strictEqual(classItem_0!.variableList[2].type, 'Type extends Array<infer Item> ? Item : Type');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0016 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0016 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0017
  * @tc.name dts2cpp_class_0017
  * @tc.desc dts2cpp class 对齐 test_22：模板字面类型与泛型方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0017', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0017.ts',
            `class OTC {
        name: "world";
        email: "welcome_email" | "email_heading";
        on<Key extends string & keyof Type>(eventName: \`\${Key}Changed\`, callback: (newValue: Type[Key]) => void): void {
        }
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'OTC');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 2);
      assert.strictEqual(classItem_0!.variableList[0].name, 'name');
      assert.strictEqual(classItem_0!.variableList[0].type, '"world"');
      assert.strictEqual(classItem_0!.variableList[1].name, 'email');
      assert.strictEqual(classItem_0!.variableList[1].type, '"welcome_email" | "email_heading"');
      assert.strictEqual(classItem_0!.functionList.length, 1);
      assert.strictEqual(classItem_0!.functionList[0].name, 'on');
      assert.strictEqual(classItem_0!.functionList[0].returns, 'void');
      assert.strictEqual(classItem_0!.functionList[0].parameters.length, 2);
      assert.strictEqual(classItem_0!.functionList[0].parameters[0].type, '`${Key}Changed`');
      assert.strictEqual(classItem_0!.functionList[0].parameters[1].type, '(newValue: Type[Key]) => void');
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0017 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0017 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0018
  * @tc.name dts2cpp_class_0018
  * @tc.desc dts2cpp class 对齐 test_23：内在字符串操作类型属性 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0018', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0018.ts',
            `class OTC {
        a: Uppercase<Greeting>;
        b: Lowercase<Greeting>;
        c: Capitalize<Greeting>;
        d: Uncapitalize<Greeting>;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'OTC');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 4);
      assert.strictEqual(classItem_0!.variableList[0].name, 'a');
      assert.strictEqual(classItem_0!.variableList[0].type, 'Uppercase<Greeting>');
      assert.strictEqual(classItem_0!.variableList[1].name, 'b');
      assert.strictEqual(classItem_0!.variableList[1].type, 'Lowercase<Greeting>');
      assert.strictEqual(classItem_0!.variableList[2].name, 'c');
      assert.strictEqual(classItem_0!.variableList[2].type, 'Capitalize<Greeting>');
      assert.strictEqual(classItem_0!.variableList[3].name, 'd');
      assert.strictEqual(classItem_0!.variableList[3].type, 'Uncapitalize<Greeting>');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0018 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0018 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0019
  * @tc.name dts2cpp_class_0019
  * @tc.desc dts2cpp class 对齐 test_24：export class 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0019', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0019.ts',
            `export class OTC {
        len: number;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'OTC');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 1);
      assert.strictEqual(classItem_0!.variableList[0].name, 'len');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0019 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0019 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0020
  * @tc.name dts2cpp_class_0020
  * @tc.desc dts2cpp class 对齐 test_26：declare namespace 嵌套类 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0020', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0020.ts',
            `declare namespace space {
    export class OTC {
      len: number;
    }
  }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'OTC');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 1);
      assert.strictEqual(classItem_0!.variableList[0].name, 'len');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0020 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0020 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0021
  * @tc.name dts2cpp_class_0021
  * @tc.desc dts2cpp class 对齐 test_27：namespace 内继承类 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0021', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0021.ts',
            `declare namespace space {
    export class OTC {
      len: number;
    }
    export class OTC2 extends OTC {
    }
  }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 2);
      const classItem_0 = parseObj.classes.find(item => item.name === 'OTC');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 1);
      assert.strictEqual(classItem_0!.variableList[0].name, 'len');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      const classItem_1 = parseObj.classes.find(item => item.name === 'OTC2');
      assert.ok(classItem_1);
      assert.strictEqual(classItem_1!.variableList.length, 0);
      assert.strictEqual(classItem_1!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0021 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0021 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0022
  * @tc.name dts2cpp_class_0022
  * @tc.desc dts2cpp class 对齐 test_28：namespace 内两个独立类 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0022', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0022.ts',
            `declare namespace space {
    export class OTC {
      len: number;
    }
    export class OTC2 {
      name: string;
    }
  }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 2);
      const classItem_0 = parseObj.classes.find(item => item.name === 'OTC');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 1);
      assert.strictEqual(classItem_0!.variableList[0].name, 'len');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      const classItem_1 = parseObj.classes.find(item => item.name === 'OTC2');
      assert.ok(classItem_1);
      assert.strictEqual(classItem_1!.variableList.length, 1);
      assert.strictEqual(classItem_1!.variableList[0].name, 'name');
      assert.strictEqual(classItem_1!.variableList[0].type, 'string');
      assert.strictEqual(classItem_1!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0022 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0022 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0023
  * @tc.name dts2cpp_class_0023
  * @tc.desc dts2cpp class 对齐 test_42：单行 class 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0023', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0023.ts',
            `class OTC { len: number; name: string; };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'OTC');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 2);
      assert.strictEqual(classItem_0!.variableList[0].name, 'len');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.variableList[1].name, 'name');
      assert.strictEqual(classItem_0!.variableList[1].type, 'string');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0023 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0023 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0024
  * @tc.name dts2cpp_class_0024
  * @tc.desc dts2cpp class 对齐 test_45：中文类名与继承 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0024', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0024.ts',
            `class 中文 extends 扩展 {
        len: number;
    };`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === '中文');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 1);
      assert.strictEqual(classItem_0!.variableList[0].name, 'len');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0024 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0024 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0025
  * @tc.name dts2cpp_class_0025
  * @tc.desc dts2cpp class 对齐 test_49：两个空类 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0025', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0025.ts',
            `class OTC1 {}
class OTC2 {}`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 2);
      const classItem_0 = parseObj.classes.find(item => item.name === 'OTC1');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 0);
      assert.strictEqual(classItem_0!.functionList.length, 0);
      const classItem_1 = parseObj.classes.find(item => item.name === 'OTC2');
      assert.ok(classItem_1);
      assert.strictEqual(classItem_1!.variableList.length, 0);
      assert.strictEqual(classItem_1!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0025 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0025 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number dts2cpp_class_0026
  * @tc.name dts2cpp_class_0026
  * @tc.desc dts2cpp class 对齐 test_64：单行 export class 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('dts2cpp_class_0026', () => {
    try {
      let parseObj: ParseObj | undefined;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          parseObj = doParseTs(
            'parseClass0026.ts',
            `export class OTC { len: number; }`
          );
        }
      });
      assert.ok(parseObj);
      assert.ok(parseObj.classes);
      assert.strictEqual(parseObj.classes.length, 1);
      const classItem_0 = parseObj.classes.find(item => item.name === 'OTC');
      assert.ok(classItem_0);
      assert.strictEqual(classItem_0!.variableList.length, 1);
      assert.strictEqual(classItem_0!.variableList[0].name, 'len');
      assert.strictEqual(classItem_0!.variableList[0].type, 'number');
      assert.strictEqual(classItem_0!.functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `dts2cpp_class_0026 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`dts2cpp_class_0026 执行异常: ${String(err)}`);
    }
  });

});
