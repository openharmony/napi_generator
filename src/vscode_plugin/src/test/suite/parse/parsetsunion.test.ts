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

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import * as parsec from '../../../parse/parsec';
import * as parsets from '../../../parse/parsets';
// import * as myExtension from '../../extension';

suite('Parse_Union_TS_Suite', () => {
  vscode.window.showInformationMessage('Start all tests.');
  
  //1, 测试 parseUnion 一般情况
  test('parseUnion_ts_test_1', () => {
    let testtype = `type Point = string | number;`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'Point');

    assert.strictEqual(typeItem.types.length, 2);
    assert.strictEqual(typeItem.types[0], 'string');
    assert.strictEqual(typeItem.types[1], 'number');
  });

  //2, 测试 parseUnion 数组情况
  test('parseUnion_ts_test_2', () => {
    let testtype = `type Point = string | number[];`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'Point');

    assert.strictEqual(typeItem.types.length, 2);
    assert.strictEqual(typeItem.types[0], 'string');
    assert.strictEqual(typeItem.types[1], 'number[]');
  });

  //3, 测试 parseUnion 字符情况
  test('parseUnion_ts_test_3', () => {
    let testtype = `type Point = "string" | "number";`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'Point');

    assert.strictEqual(typeItem.types.length, 2);
    assert.strictEqual(typeItem.types[0], '"string"');
    assert.strictEqual(typeItem.types[1], '"number"');
  });

  //4, 测试 parseUnion 数字情况
  test('parseUnion_ts_test_4', () => {
    let testtype = `type Point = -1 | 0;`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'Point');

    assert.strictEqual(typeItem.types.length, 2);
    assert.strictEqual(typeItem.types[0], '-1');
    assert.strictEqual(typeItem.types[1], '0');
  });

  //5, 测试 parseUnion 非字面类型情况
  test('parseUnion_ts_test_5', () => {
    let testtype = `interface Options {
        width: number;
      };
      type Point = Options | "auto";`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'Point');

    assert.strictEqual(typeItem.types.length, 2);
    assert.strictEqual(typeItem.types[0], 'Options');
    assert.strictEqual(typeItem.types[1], '"auto"');
  });

  //6, 测试 parseUnion null情况
  test('parseUnion_ts_test_6', () => {
    let testtype = `type Point = string | null;`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'Point');

    assert.strictEqual(typeItem.types.length, 2);
    assert.strictEqual(typeItem.types[0], 'string');
    assert.strictEqual(typeItem.types[1], 'null');
  });

  //7, 测试 parseUnion undefined 情况
  test('parseUnion_ts_test_7', () => {
    let testtype = `type Point = string | undefined;`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'Point');

    assert.strictEqual(typeItem.types.length, 2);
    assert.strictEqual(typeItem.types[0], 'string');
    assert.strictEqual(typeItem.types[1], 'undefined');
  });

  //8, 测试 parseUnion undefined 情况
  test('parseUnion_ts_test_8', () => {
    let testtype = `type Point = string | undefined;`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'Point');

    assert.strictEqual(typeItem.types.length, 2);
    assert.strictEqual(typeItem.types[0], 'string');
    assert.strictEqual(typeItem.types[1], 'undefined');
  });

  //9, 测试 parseUnion boolean 情况
  test('parseUnion_ts_test_9', () => {
    let testtype = `type Point = string | boolean;`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'Point');

    assert.strictEqual(typeItem.types.length, 2);
    assert.strictEqual(typeItem.types[0], 'string');
    assert.strictEqual(typeItem.types[1], 'boolean');
  });

  //10, 测试 parseUnion any 情况
  test('parseUnion_ts_test_10', () => {
    let testtype = `type Point = string | any;`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'Point');

    assert.strictEqual(typeItem.types.length, 2);
    assert.strictEqual(typeItem.types[0], 'string');
    assert.strictEqual(typeItem.types[1], 'any');
  });

  //11, 测试 parseUnion 字符链接 情况
  test('parseUnion_ts_test_11', () => {
    let testtype = `type AllLocaleIDs = \`\${EmailLocaleIDs | FooterLocaleIDs}_id\`;`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'AllLocaleIDs');

    assert.strictEqual(typeItem.types.length, 0);
    // assert.strictEqual(typeItem.types[0], 'Options extends Base');
    // assert.strictEqual(typeItem.types[1], 'any');
  });

  //12, 测试 parseUnion any 情况
  test('parseUnion_ts_test_12', () => {
    let testtype = `type Point = boolean | ((s: string) => boolean);`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'Point');

    assert.strictEqual(typeItem.types.length, 2);
    assert.strictEqual(typeItem.types[0], 'boolean');
    assert.strictEqual(typeItem.types[1], '((s: string) => boolean)');
  });

  //13, 测试 parseUnion Awaited<Type> 情况
  test('parseUnion_ts_test_13', () => {
    let testtype = `type Point = Awaited<boolean | Promise<number>>;`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'Point');

    assert.strictEqual(typeItem.types.length, 0);
    // assert.strictEqual(typeItem.types[0], 'boolean');
    // assert.strictEqual(typeItem.types[1], '((s: string) => boolean)');
  });

  //14, 测试 parseUnion Pick<Type, Keys> 情况
  test('parseUnion_ts_test_14', () => {
    let testtype = `type Point = Pick<Todo, "title" | "completed">;`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'Point');

    assert.strictEqual(typeItem.types.length, 0);
    // assert.strictEqual(typeItem.types[0], 'boolean');
    // assert.strictEqual(typeItem.types[1], '((s: string) => boolean)');
  });

  //15, 测试 parseUnion Omit<Type, Keys> 情况
  test('parseUnion_ts_test_15', () => {
    let testtype = `type Point = Omit<Todo, "completed" | "createdAt">;`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'Point');

    assert.strictEqual(typeItem.types.length, 0);
    // assert.strictEqual(typeItem.types[0], 'boolean');
    // assert.strictEqual(typeItem.types[1], '((s: string) => boolean)');
  });

  //16, 测试 parseUnion Exclude<UnionType, ExcludedMembers> 情况
  test('parseUnion_ts_test_16', () => {
    let testtype = `
      type T0 = Exclude<"a" | "b" | "c", "a">;
      type T1 = Exclude<"a" | "b" | "c", "a" | "b">;
      type T2 = Exclude<string | number | (() => void), Function>;`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 3);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'T0');
    typeItem = typeObjList.types[1];
    assert.strictEqual(typeItem.name, 'T1');
    typeItem = typeObjList.types[2];
    assert.strictEqual(typeItem.name, 'T2');

    // assert.strictEqual(typeItem.types.length, 2);
    // assert.strictEqual(typeItem.types[0], 'boolean');
    // assert.strictEqual(typeItem.types[1], '((s: string) => boolean)');
  });

  //17, 测试 parseUnion Extract<Type, Union> 情况
  test('parseUnion_ts_test_17', () => {
    let testtype = `
      type T0 = Extract<"a" | "b" | "c", "a" | "f">;
      type T1 = Extract<string | number | (() => void), Function>;`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 2);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'T0');
    typeItem = typeObjList.types[1];
    assert.strictEqual(typeItem.name, 'T1');

    // assert.strictEqual(typeItem.types.length, 2);
    // assert.strictEqual(typeItem.types[0], 'boolean');
    // assert.strictEqual(typeItem.types[1], '((s: string) => boolean)');
  });

  //18, 测试 parseUnion NonNullable<Type> 情况
  test('parseUnion_ts_test_18', () => {
    let testtype = `
      type T0 = NonNullable<string | number | undefined>;
      type T1 = NonNullable<string[] | null | undefined>;`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 2);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'T0');
    typeItem = typeObjList.types[1];
    assert.strictEqual(typeItem.name, 'T1');

    // assert.strictEqual(typeItem.types.length, 2);
    // assert.strictEqual(typeItem.types[0], 'boolean');
    // assert.strictEqual(typeItem.types[1], '((s: string) => boolean)');
  });

  //19, 测试 parseUnion Parameters<Type> 情况
  test('parseUnion_ts_test_19', () => {
    let testtype = `
      declare function f1(): { a: number; b: string };
      type T0 = Parameters<() => string>;
      type T1 = Parameters<(s: string) => void>;
      type T2 = Parameters<<T>(arg: T) => T>;
      type T3 = Parameters<typeof f1>;
      type T4 = Parameters<any>;
      type T5 = Parameters<never>;
      type T6 = Parameters<string>;
      type T7 = Parameters<Function>;`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 8);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'T0');
    typeItem = typeObjList.types[1];
    assert.strictEqual(typeItem.name, 'T1');
    typeItem = typeObjList.types[2];
    assert.strictEqual(typeItem.name, 'T2');
    typeItem = typeObjList.types[3];
    assert.strictEqual(typeItem.name, 'T3');
    typeItem = typeObjList.types[4];
    assert.strictEqual(typeItem.name, 'T4');
    typeItem = typeObjList.types[5];
    assert.strictEqual(typeItem.name, 'T5');
    typeItem = typeObjList.types[6];
    assert.strictEqual(typeItem.name, 'T6');
    typeItem = typeObjList.types[7];
    assert.strictEqual(typeItem.name, 'T7');

    // assert.strictEqual(typeItem.types.length, 2);
    // assert.strictEqual(typeItem.types[0], 'boolean');
    // assert.strictEqual(typeItem.types[1], '((s: string) => boolean)');
  });

  //20, 测试 parseUnion ConstructorParameters<Type> 情况
  test('parseUnion_ts_test_20', () => {
    let testtype = `
      type T0 = ConstructorParameters<ErrorConstructor>;
      type T1 = ConstructorParameters<FunctionConstructor>;
      type T2 = ConstructorParameters<RegExpConstructor>;
      type T3 = ConstructorParameters<any>;

      type T4 = ConstructorParameters<Function>;`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 5);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'T0');
    typeItem = typeObjList.types[1];
    assert.strictEqual(typeItem.name, 'T1');
    typeItem = typeObjList.types[2];
    assert.strictEqual(typeItem.name, 'T2');
    typeItem = typeObjList.types[3];
    assert.strictEqual(typeItem.name, 'T3');
    typeItem = typeObjList.types[4];
    assert.strictEqual(typeItem.name, 'T4');

    // assert.strictEqual(typeItem.types.length, 2);
    // assert.strictEqual(typeItem.types[0], 'boolean');
    // assert.strictEqual(typeItem.types[1], '((s: string) => boolean)');
  });

  //21, 测试 parseUnion ReturnType<Type> 情况
  test('parseUnion_ts_test_21', () => {
    let testtype = `
      declare function f1(): { a: number; b: string };

      type T0 = ReturnType<() => string>;
      type T1 = ReturnType<(s: string) => void>;
      type T2 = ReturnType<<T>() => T>;
      type T3 = ReturnType<<T extends U, U extends number[]>() => T>;
      type T4 = ReturnType<typeof f1>;
      type T5 = ReturnType<any>;
      type T6 = ReturnType<never>;
      type T7 = ReturnType<string>;
      type T8 = ReturnType<Function>;`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 9);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'T0');
    typeItem = typeObjList.types[1];
    assert.strictEqual(typeItem.name, 'T1');
    typeItem = typeObjList.types[2];
    assert.strictEqual(typeItem.name, 'T2');
    typeItem = typeObjList.types[3];
    assert.strictEqual(typeItem.name, 'T3');
    typeItem = typeObjList.types[4];
    assert.strictEqual(typeItem.name, 'T4');
    typeItem = typeObjList.types[5];
    assert.strictEqual(typeItem.name, 'T5');
    typeItem = typeObjList.types[6];
    assert.strictEqual(typeItem.name, 'T6');
    typeItem = typeObjList.types[7];
    assert.strictEqual(typeItem.name, 'T7');
    typeItem = typeObjList.types[8];
    assert.strictEqual(typeItem.name, 'T8');

    // assert.strictEqual(typeItem.types.length, 2);
    // assert.strictEqual(typeItem.types[0], 'boolean');
    // assert.strictEqual(typeItem.types[1], '((s: string) => boolean)');
  });

  //22, 测试 parseUnion InstanceType<Type> 情况
  test('parseUnion_ts_test_22', () => {
    let testtype = `
      class C {
        x = 0;
        y = 0;
      }

      type T0 = InstanceType<typeof C>;
      type T1 = InstanceType<any>;
      type T2 = InstanceType<never>;
      type T3 = InstanceType<string>;
      type T4 = InstanceType<Function>;`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 5);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'T0');
    typeItem = typeObjList.types[1];
    assert.strictEqual(typeItem.name, 'T1');
    typeItem = typeObjList.types[2];
    assert.strictEqual(typeItem.name, 'T2');
    typeItem = typeObjList.types[3];
    assert.strictEqual(typeItem.name, 'T3');
    typeItem = typeObjList.types[4];
    assert.strictEqual(typeItem.name, 'T4');

    // assert.strictEqual(typeItem.types.length, 2);
    // assert.strictEqual(typeItem.types[0], 'boolean');
    // assert.strictEqual(typeItem.types[1], '((s: string) => boolean)');
  });

  //23, 测试 parseUnion symbol 情况
  test('parseUnion_ts_test_23', () => {
    let testtype = `
      type T0 = string | symbol;`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'T0');

    assert.strictEqual(typeItem.types.length, 2);
    assert.strictEqual(typeItem.types[0], 'string');
    assert.strictEqual(typeItem.types[1], 'symbol');
  });

  //31, 测试 parseUnion 一般错误情况
  test('parseUnion_ts_test_31', () => {
    let testtype = `type Point = string | ;`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'Point');

    assert.strictEqual(typeItem.types.length, 2);
    assert.strictEqual(typeItem.types[0], 'string');
    assert.strictEqual(typeItem.types[1], '');
  });

  //32, 测试 parseUnion 数组错误情况
  test('parseUnion_ts_test_32', () => {
    let testtype = `type Point = string | number[;`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'Point');

    assert.strictEqual(typeItem.types.length, 2);
    assert.strictEqual(typeItem.types[0], 'string');
    assert.strictEqual(typeItem.types[1], 'number[');
  });

  //33, 测试 parseUnion 字符错误情况
  test('parseUnion_ts_test_33', () => {
    let testtype = `type Point = "string" | "number;`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'Point');

    assert.strictEqual(typeItem.types.length, 2);
    assert.strictEqual(typeItem.types[0], '"string"');
    assert.strictEqual(typeItem.types[1], '"number;');
  });

  //34, 测试 parseUnion 数字错误情况
  test('parseUnion_ts_test_34', () => {
    let testtype = `type Point = -1 | 0-1;`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'Point');

    assert.strictEqual(typeItem.types.length, 2);
    assert.strictEqual(typeItem.types[0], '-1');
    assert.strictEqual(typeItem.types[1], '0');
  });

  //35, 测试 parseUnion 非字面类型情况
  test('parseUnion_ts_test_35', () => {
    let testtype = `interface Options {
        width: number;
      };
      type Point = Options_t | "auto";`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'Point');

    assert.strictEqual(typeItem.types.length, 2);
    assert.strictEqual(typeItem.types[0], 'Options_t');
    assert.strictEqual(typeItem.types[1], '"auto"');
  });

  //36, 测试 parseUnion null 错误情况
  test('parseUnion_ts_test_36', () => {
    let testtype = `type Point = string | nul;`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'Point');

    assert.strictEqual(typeItem.types.length, 2);
    assert.strictEqual(typeItem.types[0], 'string');
    assert.strictEqual(typeItem.types[1], 'nul');
  });

  //37, 测试 parseUnion undefined 错误 情况
  test('parseUnion_ts_test_37', () => {
    let testtype = `type Point = string | undefine;`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'Point');

    assert.strictEqual(typeItem.types.length, 2);
    assert.strictEqual(typeItem.types[0], 'string');
    assert.strictEqual(typeItem.types[1], 'undefine');
  });

  //38, 测试 parseUnion undefined 加 null  情况
  test('parseUnion_ts_test_38', () => {
    let testtype = `type Point = string | undefined & null;`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'Point');

    assert.strictEqual(typeItem.types.length, 2);
    assert.strictEqual(typeItem.types[0], 'string');
    assert.strictEqual(typeItem.types[1], 'undefined & null');
  });

  //39, 测试 parseUnion boolean错误 情况
  test('parseUnion_ts_test_39', () => {
    let testtype = `type Point = string | bool;`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'Point');

    assert.strictEqual(typeItem.types.length, 2);
    assert.strictEqual(typeItem.types[0], 'string');
    assert.strictEqual(typeItem.types[1], 'bool');
  });

  //40, 测试 parseUnion any错误 情况
  test('parseUnion_ts_test_40', () => {
    let testtype = `type Point = string | anyone;`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'Point');

    assert.strictEqual(typeItem.types.length, 2);
    assert.strictEqual(typeItem.types[0], 'string');
    assert.strictEqual(typeItem.types[1], 'anyone');
  });

  //41, 测试 parseUnion 字符链接前后增加 情况
  test('parseUnion_ts_test_41', () => {
    let testtype = `type AllLocaleIDs = \`T_\${EmailLocaleIDs | FooterLocaleIDs}_id\`;`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'AllLocaleIDs');

    assert.strictEqual(typeItem.types.length, 0);
    // assert.strictEqual(typeItem.types[0], 'Options extends Base');
    // assert.strictEqual(typeItem.types[1], 'any');
  });

  //42, 测试 parseUnion 函数指针 情况
  test('parseUnion_ts_test_42', () => {
    let testtype = `type Point = boolean | (s: string) => boolean;`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'Point');

    assert.strictEqual(typeItem.types.length, 2);
    assert.strictEqual(typeItem.types[0], 'boolean');
    assert.strictEqual(typeItem.types[1], '(s: string) => boolean');
  });

  //43, 测试 parseUnion Awaited<Type>错误 情况
  test('parseUnion_ts_test_43', () => {
    let testtype = `type Point = Awaited<boolean | Promise<>>;`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'Point');

    assert.strictEqual(typeItem.types.length, 0);
    // assert.strictEqual(typeItem.types[0], 'boolean');
    // assert.strictEqual(typeItem.types[1], '((s: string) => boolean)');
  });

  //44, 测试 parseUnion Pick<Type, Keys> 错误情况
  test('parseUnion_ts_test_44', () => {
    let testtype = `type Point = Pick<Todo | "title" | "completed">;`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'Point');

    assert.strictEqual(typeItem.types.length, 0);
    // assert.strictEqual(typeItem.types[0], 'boolean');
    // assert.strictEqual(typeItem.types[1], '((s: string) => boolean)');
  });

  //45, 测试 parseUnion Omit<Type, Keys>错误 情况
  test('parseUnion_ts_test_45', () => {
    let testtype = `type Point = Omit<Todo & "completed" | "createdAt">;`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'Point');

    assert.strictEqual(typeItem.types.length, 0);
    // assert.strictEqual(typeItem.types[0], 'boolean');
    // assert.strictEqual(typeItem.types[1], '((s: string) => boolean)');
  });

  //46, 测试 parseUnion Exclude<UnionType, ExcludedMembers>错误 情况
  test('parseUnion_ts_test_46', () => {
    let testtype = `
      type T0 = Exclude<"a" | >;
      type T1 = Exclude< | "b" | "c", "a" | "b">;
      type T2 = Exclude<string | number | (() => void), Function>;`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 3);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'T0');
    typeItem = typeObjList.types[1];
    assert.strictEqual(typeItem.name, 'T1');
    typeItem = typeObjList.types[2];
    assert.strictEqual(typeItem.name, 'T2');

    // assert.strictEqual(typeItem.types.length, 2);
    // assert.strictEqual(typeItem.types[0], 'boolean');
    // assert.strictEqual(typeItem.types[1], '((s: string) => boolean)');
  });

  //47, 测试 parseUnion Extract<Type, Union>错误 情况
  test('parseUnion_ts_test_47', () => {
    let testtype = `
      type T0 = Extract<"a" | "b" | "c", "a" | >;
      type T1 = Extract< | number | (() => void), Function>;`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 2);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'T0');
    typeItem = typeObjList.types[1];
    assert.strictEqual(typeItem.name, 'T1');

    // assert.strictEqual(typeItem.types.length, 2);
    // assert.strictEqual(typeItem.types[0], 'boolean');
    // assert.strictEqual(typeItem.types[1], '((s: string) => boolean)');
  });

  //48, 测试 parseUnion NonNullable<Type> 错误情况
  test('parseUnion_ts_test_48', () => {
    let testtype = `
      type T0 = NonNullable<string | number | >;
      type T1 = NonNullable<[] | null | undefined>;`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 2);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'T0');
    typeItem = typeObjList.types[1];
    assert.strictEqual(typeItem.name, 'T1');

    // assert.strictEqual(typeItem.types.length, 2);
    // assert.strictEqual(typeItem.types[0], 'boolean');
    // assert.strictEqual(typeItem.types[1], '((s: string) => boolean)');
  });

  //49, 测试 parseUnion Parameters<Type> 错误情况
  test('parseUnion_ts_test_49', () => {
    let testtype = `
      declare function f1(): { a: number; b: string };
      type T0 = Parameters<() => >;
      type T1 = Parameters<(s: string) => void>;
      type T2 = Parameters<<T>(arg: T) => T>;
      type T3 = Parameters<typeof f1>;
      type T4 = Parameters<any>;
      type T5 = Parameters<never>;
      type T6 = Parameters<string>;
      type T7 = Parameters<Function>;`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 8);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'T0');
    typeItem = typeObjList.types[1];
    assert.strictEqual(typeItem.name, 'T1');
    typeItem = typeObjList.types[2];
    assert.strictEqual(typeItem.name, 'T2');
    typeItem = typeObjList.types[3];
    assert.strictEqual(typeItem.name, 'T3');
    typeItem = typeObjList.types[4];
    assert.strictEqual(typeItem.name, 'T4');
    typeItem = typeObjList.types[5];
    assert.strictEqual(typeItem.name, 'T5');
    typeItem = typeObjList.types[6];
    assert.strictEqual(typeItem.name, 'T6');
    typeItem = typeObjList.types[7];
    assert.strictEqual(typeItem.name, 'T7');

    // assert.strictEqual(typeItem.types.length, 2);
    // assert.strictEqual(typeItem.types[0], 'boolean');
    // assert.strictEqual(typeItem.types[1], '((s: string) => boolean)');
  });

  //50, 测试 parseUnion ConstructorParameters<Type>错误 情况
  test('parseUnion_ts_test_50', () => {
    let testtype = `
      type T0 = ConstructorParameters<ErrorConstructor | >;
      type T1 = ConstructorParameters<FunctionConstructor>;
      type T2 = ConstructorParameters<RegExpConstructor>;
      type T3 = ConstructorParameters<any>;

      type T4 = ConstructorParameters<Function>;`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 5);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'T0');
    typeItem = typeObjList.types[1];
    assert.strictEqual(typeItem.name, 'T1');
    typeItem = typeObjList.types[2];
    assert.strictEqual(typeItem.name, 'T2');
    typeItem = typeObjList.types[3];
    assert.strictEqual(typeItem.name, 'T3');
    typeItem = typeObjList.types[4];
    assert.strictEqual(typeItem.name, 'T4');

    // assert.strictEqual(typeItem.types.length, 2);
    // assert.strictEqual(typeItem.types[0], 'boolean');
    // assert.strictEqual(typeItem.types[1], '((s: string) => boolean)');
  });

  //51, 测试 parseUnion ReturnType<Type> 错误情况
  test('parseUnion_ts_test_51', () => {
    let testtype = `
      declare function f1(): { a: number; b: string };

      type T0 = ReturnType<() => >;
      type T1 = ReturnType<(s: string) => void>;
      type T2 = ReturnType<<T>() => T>;
      type T3 = ReturnType<<T extends U, U extends number[]>() => T>;
      type T4 = ReturnType<typeof f1>;
      type T5 = ReturnType<any>;
      type T6 = ReturnType<never>;
      type T7 = ReturnType<string>;
      type T8 = ReturnType<Function>;`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 9);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'T0');
    typeItem = typeObjList.types[1];
    assert.strictEqual(typeItem.name, 'T1');
    typeItem = typeObjList.types[2];
    assert.strictEqual(typeItem.name, 'T2');
    typeItem = typeObjList.types[3];
    assert.strictEqual(typeItem.name, 'T3');
    typeItem = typeObjList.types[4];
    assert.strictEqual(typeItem.name, 'T4');
    typeItem = typeObjList.types[5];
    assert.strictEqual(typeItem.name, 'T5');
    typeItem = typeObjList.types[6];
    assert.strictEqual(typeItem.name, 'T6');
    typeItem = typeObjList.types[7];
    assert.strictEqual(typeItem.name, 'T7');
    typeItem = typeObjList.types[8];
    assert.strictEqual(typeItem.name, 'T8');

    // assert.strictEqual(typeItem.types.length, 2);
    // assert.strictEqual(typeItem.types[0], 'boolean');
    // assert.strictEqual(typeItem.types[1], '((s: string) => boolean)');
  });

  //52, 测试 parseUnion InstanceType<Type> 错误情况
  test('parseUnion_ts_test_52', () => {
    let testtype = `
      class C {
        x = 0;
        y = 0;
      }

      type T0 = InstanceType<typeof C>;
      type T1 = InstanceType<any | >;
      type T2 = InstanceType<never>;
      type T3 = InstanceType<string>;
      type T4 = InstanceType<Function>;`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 5);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'T0');
    typeItem = typeObjList.types[1];
    assert.strictEqual(typeItem.name, 'T1');
    typeItem = typeObjList.types[2];
    assert.strictEqual(typeItem.name, 'T2');
    typeItem = typeObjList.types[3];
    assert.strictEqual(typeItem.name, 'T3');
    typeItem = typeObjList.types[4];
    assert.strictEqual(typeItem.name, 'T4');

    // assert.strictEqual(typeItem.types.length, 2);
    // assert.strictEqual(typeItem.types[0], 'boolean');
    // assert.strictEqual(typeItem.types[1], '((s: string) => boolean)');
  });

  //53, 测试 parseUnion symbol 错误情况
  test('parseUnion_ts_test_53', () => {
    let testtype = `
      type T0 = string | ;`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'T0');

    assert.strictEqual(typeItem.types.length, 2);
    assert.strictEqual(typeItem.types[0], 'string');
    assert.strictEqual(typeItem.types[1], '');
  });
})