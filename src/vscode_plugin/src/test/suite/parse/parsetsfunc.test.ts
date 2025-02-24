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

suite('Parse_Func_TS_Suite', () => {
  vscode.window.showInformationMessage('Start all tests.');
  
  //1, 测试 parseFunc 一般情况
  test('parseFunc_ts_test_1', () => {
    let testfunc = `function add(a: number, b: number): number {
            return a + b;
        }

        let result = add(5, 3);
    ;`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'number');
    assert.strictEqual(funcItem.parameters.length, 2);
    assert.strictEqual(funcItem.parameters[0].name, 'a');
    assert.strictEqual(funcItem.parameters[0].type, 'number');
    assert.strictEqual(funcItem.parameters[1].name, 'b');
    assert.strictEqual(funcItem.parameters[1].type, 'number');

  });

  //2, 测试 parseFunc 数组情况
  test('parseFunc_ts_test_2', () => {
    let testfunc = `function add(a: boolean, b: number[]): number[][] {
            return [];
        }

        let result = add(5, 3);
    ;`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'Array<any>');
    assert.strictEqual(funcItem.parameters.length, 2);
    assert.strictEqual(funcItem.parameters[0].name, 'a');
    assert.strictEqual(funcItem.parameters[0].type, 'boolean');
    assert.strictEqual(funcItem.parameters[1].name, 'b');
    assert.strictEqual(funcItem.parameters[1].type, 'Array<number>');

  });

  //3, 测试 parseFunc string 和 定义 情况
  test('parseFunc_ts_test_3', () => {
    let testfunc = `function add(a: string, b: E): void {
            return [];
        }

        let result = add(5, 3);
    ;`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 2);
    assert.strictEqual(funcItem.parameters[0].name, 'a');
    assert.strictEqual(funcItem.parameters[0].type, 'string');
    assert.strictEqual(funcItem.parameters[1].name, 'b');
    assert.strictEqual(funcItem.parameters[1].type, 'E');

  });

  //3, 测试 parseFunc any 和 map 情况
  test('parseFunc_ts_test_3', () => {
    let testfunc = `function add(a: any, b: map): void {
            return [];
        }

        let result = add(5, 3);
    ;`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 2);
    assert.strictEqual(funcItem.parameters[0].name, 'a');
    assert.strictEqual(funcItem.parameters[0].type, 'any');
    assert.strictEqual(funcItem.parameters[1].name, 'b');
    assert.strictEqual(funcItem.parameters[1].type, 'map');

  });

  //4, 测试 parseFunc 对象类型 情况
  test('parseFunc_ts_test_4', () => {
    let testfunc = `function add(a: {x:number, y:number}): void {
            return [];
        }

        let result = add(5, 3);
    ;`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 1);
    assert.strictEqual(funcItem.parameters[0].name, 'a');
    assert.strictEqual(funcItem.parameters[0].type, 'any');

  });

  //5, 测试 parseFunc 可选属性类型 情况
  test('parseFunc_ts_test_5', () => {
    let testfunc = `function add(a: {x:number, y?:string}): void {
            return [];
        }

        let result = add(5, 3);
    ;`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 1);
    assert.strictEqual(funcItem.parameters[0].name, 'a');
    assert.strictEqual(funcItem.parameters[0].type, 'any');

  });

  //6, 测试 parseFunc 可选属性类型 情况
  test('parseFunc_ts_test_6', () => {
    let testfunc = `function add(a: number | string): void {
            return [];
        }

        let result = add(5, 3);
    ;`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 1);
    assert.strictEqual(funcItem.parameters[0].name, 'a');
    assert.strictEqual(funcItem.parameters[0].type, 'any');

  });

  //6, 测试 parseFunc 可选属性类型 情况
  test('parseFunc_ts_test_6', () => {
    let testfunc = `function add(a: number | string): void {
            return [];
        }

        let result = add(5, 3);
    ;`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 1);
    assert.strictEqual(funcItem.parameters[0].name, 'a');
    assert.strictEqual(funcItem.parameters[0].type, 'any');

  });

  //7, 测试 parseFunc 可选属性类型 情况
  test('parseFunc_ts_test_7', () => {
    let testfunc = `function add(a: "left" | "right" | "center"): void {
            return [];
        }

        let result = add(5, 3);
    ;`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 1);
    assert.strictEqual(funcItem.parameters[0].name, 'a');
    assert.strictEqual(funcItem.parameters[0].type, 'any');

  });

  //8, 测试 parseFunc 联合null类型 情况
  test('parseFunc_ts_test_8', () => {
    let testfunc = `function add(a: string | null): void {
            return [];
        }

        let result = add(5, 3);
    ;`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 1);
    assert.strictEqual(funcItem.parameters[0].name, 'a');
    assert.strictEqual(funcItem.parameters[0].type, 'any');

  });

  //9, 测试 parseFunc 联合可能为空类型 情况
  test('parseFunc_ts_test_9', () => {
    let testfunc = `function add(a?: string | null): void {
            return [];
        }

        let result = add(5, 3);
    ;`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 1);
    assert.strictEqual(funcItem.parameters[0].name, 'a');
    assert.strictEqual(funcItem.parameters[0].type, 'any');

  });

  //10, 测试 parseFunc 回调函数类型 情况
  test('parseFunc_ts_test_10', () => {
    let testfunc = `function add(fn: (a:string) => void): void {
            return [];
        }

        let result = add(5, 3);
    ;`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 1);
    assert.strictEqual(funcItem.parameters[0].name, 'fn');
    assert.strictEqual(funcItem.parameters[0].type, 'any');

  });

  //11, 测试 parseFunc 回调函数可选参数类型 情况
  test('parseFunc_ts_test_11', () => {
    let testfunc = `function add(fn: (a?:string) => void): void {
            return [];
        }

        let result = add(5, 3);
    ;`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 1);
    assert.strictEqual(funcItem.parameters[0].name, 'fn');
    assert.strictEqual(funcItem.parameters[0].type, 'any');

  });

  //12, 测试 parseFunc 泛型一个参数类型 情况
  test('parseFunc_ts_test_12', () => {
    let testfunc = `function add<Type>(fn: (a:Type[]) => Type): Type | undefined {
            return T;
        }

        let result = add(5, 3);
    ;`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'any');
    assert.strictEqual(funcItem.parameters.length, 1);
    assert.strictEqual(funcItem.parameters[0].name, 'fn');
    assert.strictEqual(funcItem.parameters[0].type, 'any');

  });

  //13, 测试 parseFunc 泛型两个参数类型 情况
  test('parseFunc_ts_test_13', () => {
    let testfunc = `function add<Input, Output>(fn: (a:Input[]) => Output): Output | undefined {
            return Output;
        }

        let result = add(5, 3);
    ;`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'any');
    assert.strictEqual(funcItem.parameters.length, 1);
    assert.strictEqual(funcItem.parameters[0].name, 'fn');
    assert.strictEqual(funcItem.parameters[0].type, 'any');

  });

  //14, 测试 parseFunc 泛型扩展类型 情况
  test('parseFunc_ts_test_14', () => {
    let testfunc = `function add<Type extends { length: number }>(a: Type, b: Type) {
            return Output;
        }

        let result = add(5, 3);
    ;`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 2);
    assert.strictEqual(funcItem.parameters[0].name, 'a');
    assert.strictEqual(funcItem.parameters[0].type, 'Type');
    assert.strictEqual(funcItem.parameters[1].name, 'b');
    assert.strictEqual(funcItem.parameters[1].type, 'Type');
  });

  //15, 测试 parseFunc unknown类型 情况
  test('parseFunc_ts_test_15', () => {
    let testfunc = `function add(a: unknown) {
            return Output;
        }

        let result = add(5, 3);
    ;`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 1);
    assert.strictEqual(funcItem.parameters[0].name, 'a');
    assert.strictEqual(funcItem.parameters[0].type, 'any');

  });

  //16, 测试 parseFunc never  类型 情况
  test('parseFunc_ts_test_16', () => {
    let testfunc = `function add(a: unknown) never {
            return Output;
        }

        let result = add(5, 3);
    ;`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 1);
    assert.strictEqual(funcItem.parameters[0].name, 'a');
    assert.strictEqual(funcItem.parameters[0].type, 'any');

  });

  //17, 测试 parseFunc Function  类型 情况
  test('parseFunc_ts_test_17', () => {
    let testfunc = `function add(a: Function) Function {
            return Output;
        }

        let result = add(5, 3);
    ;`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 1);
    assert.strictEqual(funcItem.parameters[0].name, 'a');
    assert.strictEqual(funcItem.parameters[0].type, 'Function');

  });

  //18, 测试 parseFunc 剩余形参  类型 情况
  test('parseFunc_ts_test_18', () => {
    let testfunc = `function add(n: number, ...m: number[]) {
            return Output;
        }

        let result = add(5, 3);
    ;`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 2);
    assert.strictEqual(funcItem.parameters[0].name, 'n');
    assert.strictEqual(funcItem.parameters[0].type, 'number');
    assert.strictEqual(funcItem.parameters[1].name, 'm');
    assert.strictEqual(funcItem.parameters[1].type, 'Array<number>');

  });

  //19, 测试 parseFunc 参数解构  类型 情况
  test('parseFunc_ts_test_19', () => {
    let testfunc = `function add({a, b, c}: { a: number; b: number; c: number }) {
            return Output;
        }

        let result = add(5, 3);
    ;`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    // assert.strictEqual(funcObjList.funcs.length, 1);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 1);
    assert.strictEqual(funcItem.parameters[0].name, '');
    assert.strictEqual(funcItem.parameters[0].type, 'any');

  });

  //20, 测试 parseFunc 函数可分配  类型 情况
  test('parseFunc_ts_test_20', () => {
    let testfunc = `const f3: voidFunc = function () {
            return Output;
        }

        let result = add(5, 3);
    ;`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 0);

  });

  //21, 测试 parseFunc 箭头函数  类型 情况
  test('parseFunc_ts_test_21', () => {
    let testfunc = `const f3: voidFunc = () => true;

        let result = add(5, 3);
    ;`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 0);

  });

  //22, 测试 parseFunc 在一行的情况
  test('parseFunc_ts_test_22', () => {
    let testfunc = `function add(a: number, b: number): number {return a + b;};`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'number');
    assert.strictEqual(funcItem.parameters.length, 2);
    assert.strictEqual(funcItem.parameters[0].name, 'a');
    assert.strictEqual(funcItem.parameters[0].type, 'number');
    assert.strictEqual(funcItem.parameters[1].name, 'b');
    assert.strictEqual(funcItem.parameters[1].type, 'number');

  });

  //23, 测试 parseFunc 数组在一行情况
  test('parseFunc_ts_test_23', () => {
    let testfunc = `function add(a: boolean, b: number[]): number[][] {return [];};`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'Array<any>');
    assert.strictEqual(funcItem.parameters.length, 2);
    assert.strictEqual(funcItem.parameters[0].name, 'a');
    assert.strictEqual(funcItem.parameters[0].type, 'boolean');
    assert.strictEqual(funcItem.parameters[1].name, 'b');
    assert.strictEqual(funcItem.parameters[1].type, 'Array<number>');

  });

  //24, 测试 parseFunc string 和 定义 在一行情况
  test('parseFunc_ts_test_24', () => {
    let testfunc = `function add(a: string, b: E): void { return ; };`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 2);
    assert.strictEqual(funcItem.parameters[0].name, 'a');
    assert.strictEqual(funcItem.parameters[0].type, 'string');
    assert.strictEqual(funcItem.parameters[1].name, 'b');
    assert.strictEqual(funcItem.parameters[1].type, 'E');

  });

  //25, 测试 parseFunc any 和 map在一行 情况
  test('parseFunc_ts_test_25', () => {
    let testfunc = `function add(a: any, b: map): void {return;};`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 2);
    assert.strictEqual(funcItem.parameters[0].name, 'a');
    assert.strictEqual(funcItem.parameters[0].type, 'any');
    assert.strictEqual(funcItem.parameters[1].name, 'b');
    assert.strictEqual(funcItem.parameters[1].type, 'map');

  });

  //26, 测试 parseFunc 对象类型在一行 情况
  test('parseFunc_ts_test_26', () => {
    let testfunc = `function add(a: {x:number, y:number}): void {return ;};`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 1);
    assert.strictEqual(funcItem.parameters[0].name, 'a');
    assert.strictEqual(funcItem.parameters[0].type, 'any');

  });

  //27, 测试 parseFunc 可选属性类型在一行 情况
  test('parseFunc_ts_test_27', () => {
    let testfunc = `function add(a: {x:number, y?:string}): void {return ; };`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 1);
    assert.strictEqual(funcItem.parameters[0].name, 'a');
    assert.strictEqual(funcItem.parameters[0].type, 'any');

  });

  //28, 测试 parseFunc 可选属性类型在一行 情况
  test('parseFunc_ts_test_28', () => {
    let testfunc = `function add(a: number | string): void { return [];};`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 1);
    assert.strictEqual(funcItem.parameters[0].name, 'a');
    assert.strictEqual(funcItem.parameters[0].type, 'any');

  });

  //29, 测试 parseFunc 可选属性类型在一行 情况
  test('parseFunc_ts_test_29', () => {
    let testfunc = `function add(a: number | string): void {return [];};`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 1);
    assert.strictEqual(funcItem.parameters[0].name, 'a');
    assert.strictEqual(funcItem.parameters[0].type, 'any');

  });

  //30, 测试 parseFunc 可选属性类型在一行 情况
  test('parseFunc_ts_test_30', () => {
    let testfunc = `function add(a: "left" | "right" | "center"): void { return ;};`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 1);
    assert.strictEqual(funcItem.parameters[0].name, 'a');
    assert.strictEqual(funcItem.parameters[0].type, 'any');

  });

  //31, 测试 parseFunc 联合null类型在一行 情况
  test('parseFunc_ts_test_31', () => {
    let testfunc = `function add(a: string | null): void {return ;};`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 1);
    assert.strictEqual(funcItem.parameters[0].name, 'a');
    assert.strictEqual(funcItem.parameters[0].type, 'any');

  });

  //32, 测试 parseFunc 联合可能为空类型在一行 情况
  test('parseFunc_ts_test_32', () => {
    let testfunc = `function add(a?: string | null): void { return ;};`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 1);
    assert.strictEqual(funcItem.parameters[0].name, 'a');
    assert.strictEqual(funcItem.parameters[0].type, 'any');
  });

  //33, 测试 parseFunc 回调函数类型在一行 情况
  test('parseFunc_ts_test_33', () => {
    let testfunc = `function add(fn: (a:string) => void): void {return ;};`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 1);
    assert.strictEqual(funcItem.parameters[0].name, 'fn');
    assert.strictEqual(funcItem.parameters[0].type, 'any');

  });

  //34, 测试 parseFunc 回调函数可选参数类型在一行 情况
  test('parseFunc_ts_test_34', () => {
    let testfunc = `function add(fn: (a?:string) => void): void {return ;};`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 1);
    assert.strictEqual(funcItem.parameters[0].name, 'fn');
    assert.strictEqual(funcItem.parameters[0].type, 'any');

  });

  //35, 测试 parseFunc 泛型一个参数类型在一行 情况
  test('parseFunc_ts_test_35', () => {
    let testfunc = `function add<Type>(fn: (a:Type[]) => Type): Type | undefined {return T;};`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'any');
    assert.strictEqual(funcItem.parameters.length, 1);
    assert.strictEqual(funcItem.parameters[0].name, 'fn');
    assert.strictEqual(funcItem.parameters[0].type, 'any');

  });

  //36, 测试 parseFunc 泛型两个参数类型在一行 情况
  test('parseFunc_ts_test_36', () => {
    let testfunc = `function add<Input, Output>(fn: (a:Input[]) => Output): Output | undefined { return Output; };`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'any');
    assert.strictEqual(funcItem.parameters.length, 1);
    assert.strictEqual(funcItem.parameters[0].name, 'fn');
    assert.strictEqual(funcItem.parameters[0].type, 'any');

  });

  //36, 测试 parseFunc 泛型扩展类型在一行 情况
  test('parseFunc_ts_test_36', () => {
    let testfunc = `function add<Type extends { length: number }>(a: Type, b: Type) {return Output;};`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 2);
    assert.strictEqual(funcItem.parameters[0].name, 'a');
    assert.strictEqual(funcItem.parameters[0].type, 'Type');
    assert.strictEqual(funcItem.parameters[1].name, 'b');
    assert.strictEqual(funcItem.parameters[1].type, 'Type');
  });

  //37, 测试 parseFunc unknown类型在一行 情况
  test('parseFunc_ts_test_37', () => {
    let testfunc = `function add(a: unknown) {return ;};`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 1);
    assert.strictEqual(funcItem.parameters[0].name, 'a');
    assert.strictEqual(funcItem.parameters[0].type, 'any');

  });

  //38, 测试 parseFunc never  类型在一行 情况
  test('parseFunc_ts_test_38', () => {
    let testfunc = `function add(a: unknown) never {return ;};`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 1);
    assert.strictEqual(funcItem.parameters[0].name, 'a');
    assert.strictEqual(funcItem.parameters[0].type, 'any');

  });

  //39, 测试 parseFunc Function  类型在一行 情况
  test('parseFunc_ts_test_39', () => {
    let testfunc = `function add(a: Function) Function {return ;};`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 1);
    assert.strictEqual(funcItem.parameters[0].name, 'a');
    assert.strictEqual(funcItem.parameters[0].type, 'Function');

  });

  //40, 测试 parseFunc 剩余形参  类型在一行 情况
  test('parseFunc_ts_test_40', () => {
    let testfunc = `function add(n: number, ...m: number[]) {return ;};`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 2);
    assert.strictEqual(funcItem.parameters[0].name, 'n');
    assert.strictEqual(funcItem.parameters[0].type, 'number');
    assert.strictEqual(funcItem.parameters[1].name, 'm');
    assert.strictEqual(funcItem.parameters[1].type, 'Array<number>');

  });

  //41, 测试 parseFunc 参数解构  类型在一行 情况
  test('parseFunc_ts_test_41', () => {
    let testfunc = `function add({a, b, c}: { a: number; b: number; c: number }) {return ;};`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    // assert.strictEqual(funcObjList.funcs.length, 1);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 1);
    assert.strictEqual(funcItem.parameters[0].name, '');
    assert.strictEqual(funcItem.parameters[0].type, 'any');

  });

  //42, 测试 parseFunc 函数可分配  类型在一行 情况
  test('parseFunc_ts_test_42', () => {
    let testfunc = `const f3: voidFunc = function () { return ;};`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 0);

  });

  //43, 测试 parseFunc 箭头函数  类型在一行 情况
  test('parseFunc_ts_test_43', () => {
    let testfunc = `const f3: voidFunc = () => true;;`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 0);

  });

  // 错误异常用例

  //51, 测试 parseFunc 无参数一般情况
  test('parseFunc_ts_test_51', () => {
    let testfunc = `function add() {
            return a + b;
        };`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');

  });

  //52, 测试 parseFunc 数组语法错误情况
  test('parseFunc_ts_test_52', () => {
    let testfunc = `function add(a: boolean, b: number[): number[[] {
            return [];
        }

        let result = add(5, 3);
    ;`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'any');
    assert.strictEqual(funcItem.parameters.length, 2);
    assert.strictEqual(funcItem.parameters[0].name, 'a');
    assert.strictEqual(funcItem.parameters[0].type, 'boolean');
    assert.strictEqual(funcItem.parameters[1].name, 'b');
    assert.strictEqual(funcItem.parameters[1].type, 'Array<number>');

  });

  //53, 测试 parseFunc string 和 定义缺失 情况
  test('parseFunc_ts_test_53', () => {
    let testfunc = `function add(a: String, b: ):  {
            return [];
        }

        let result = add(5, 3);
    ;`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'any');
    assert.strictEqual(funcItem.parameters.length, 2);
    assert.strictEqual(funcItem.parameters[0].name, 'a');
    assert.strictEqual(funcItem.parameters[0].type, 'String');
    assert.strictEqual(funcItem.parameters[1].name, 'b');
    assert.strictEqual(funcItem.parameters[1].type, '');

  });

  //54, 测试 parseFunc export 情况
  test('parseFunc_ts_test_54', () => {
    let testfunc = `export function add(a: any, b: map): void {
            return [];
        }

        let result = add(5, 3);
    ;`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 2);
    assert.strictEqual(funcItem.parameters[0].name, 'a');
    assert.strictEqual(funcItem.parameters[0].type, 'any');
    assert.strictEqual(funcItem.parameters[1].name, 'b');
    assert.strictEqual(funcItem.parameters[1].type, 'map');

  });

  //55, 测试 parseFunc const 对象类型 情况
  test('parseFunc_ts_test_55', () => {
    let testfunc = `const function add(const a: {x:number, y:number}): void {
            return [];
        }

        let result = add(5, 3);
    ;`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 2);
    assert.strictEqual(funcItem.parameters[0].name, '');
    assert.strictEqual(funcItem.parameters[0].type, 'void');
    assert.strictEqual(funcItem.parameters[1].name, 'a');
    assert.strictEqual(funcItem.parameters[1].type, 'any');
  });

  //56, 测试 parseFunc 声明可选属性类型 情况
  test('parseFunc_ts_test_56', () => {
    let testfunc = `declare function add(a: {x:number, y?:string}): void {
            return [];
        }

        let result = add(5, 3);
    ;`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 1);
    assert.strictEqual(funcItem.parameters[0].name, 'a');
    assert.strictEqual(funcItem.parameters[0].type, 'any');

  });

  //57, 测试 parseFunc namespace可选属性类型 情况
  test('parseFunc_ts_test_57', () => {
    let testfunc = `namespace testspace { function add(a: number | string): void {
            return [];
        }

        let result = add(5, 3);
    };`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 1);
    assert.strictEqual(funcItem.parameters[0].name, 'a');
    assert.strictEqual(funcItem.parameters[0].type, 'any');

  });

  //58, 测试 parseFunc interface 可选属性类型 情况
  test('parseFunc_ts_test_58', () => {
    let testfunc = `interface function add(a: number | string): void {
            return [];
        }

        let result = add(5, 3);
    ;`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 1);
    assert.strictEqual(funcItem.parameters[0].name, 'a');
    assert.strictEqual(funcItem.parameters[0].type, 'any');

  });

  //59, 测试 parseFunc extend属性类型 情况
  test('parseFunc_ts_test_59', () => {
    let testfunc = `function add(a: B extend string): void {
            return [];
        }

        let result = add(5, 3);
    ;`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 3);
    assert.strictEqual(funcItem.parameters[0].name, 'a');
    assert.strictEqual(funcItem.parameters[0].type, 'B');
    assert.strictEqual(funcItem.parameters[1].name, 'extend');
    assert.strictEqual(funcItem.parameters[1].type, 'void');
    assert.strictEqual(funcItem.parameters[2].name, 'string');
    assert.strictEqual(funcItem.parameters[2].type, 'void');
  });

  //60, 测试 parseFunc null 参数类型 情况
  test('parseFunc_ts_test_60', () => {
    let testfunc = `function add(null): void {
            return [];
        }

        let result = add(5, 3);
    ;`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 1);
    assert.strictEqual(funcItem.parameters[0].name, '');
    assert.strictEqual(funcItem.parameters[0].type, 'void');

  });

  //61, 测试 parseFunc 中文名称类型 情况
  test('parseFunc_ts_test_61', () => {
    let testfunc = `function 中文(a?: string | null): void {
            return [];
        }

        let result = add(5, 3);
    ;`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, '中文');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 1);
    assert.strictEqual(funcItem.parameters[0].name, 'a');
    assert.strictEqual(funcItem.parameters[0].type, 'any');

  });

  //62, 测试 parseFunc 中文参数函数类型 情况
  test('parseFunc_ts_test_62', () => {
    let testfunc = `function add(中文: (a:string) => void): void {
            return [];
        }

        let result = add(5, 3);
    ;`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 1);
    assert.strictEqual(funcItem.parameters[0].name, '中文');
    assert.strictEqual(funcItem.parameters[0].type, 'any');

  });

  //63, 测试 parseFunc 中文参数类型 情况
  test('parseFunc_ts_test_63', () => {
    let testfunc = `function add(fn: (a?:中文参数) => void): void {
            return [];
        }

        let result = add(5, 3);
    ;`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 1);
    assert.strictEqual(funcItem.parameters[0].name, 'fn');
    assert.strictEqual(funcItem.parameters[0].type, 'any');

  });

  //64, 测试 parseFunc 中文泛型一个参数类型 情况
  test('parseFunc_ts_test_64', () => {
    let testfunc = `function add<中文泛型>(fn: (a:中文泛型[]) => 中文泛型): 中文泛型 | undefined {
            return T;
        }

        let result = add(5, 3);
    ;`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'any');
    assert.strictEqual(funcItem.parameters.length, 1);
    assert.strictEqual(funcItem.parameters[0].name, 'fn');
    assert.strictEqual(funcItem.parameters[0].type, 'any');

  });

  //65, 测试 parseFunc 泛型缺少参数类型 情况
  test('parseFunc_ts_test_65', () => {
    let testfunc = `function add<Input, >(fn: (a:Input[]) => ):  | undefined {
            return Output;
        }

        let result = add(5, 3);
    ;`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'any');
    assert.strictEqual(funcItem.parameters.length, 1);
    assert.strictEqual(funcItem.parameters[0].name, 'fn');
    assert.strictEqual(funcItem.parameters[0].type, 'any');

  });

  //66, 测试 parseFunc 泛型扩展缺少类型 情况
  test('parseFunc_ts_test_66', () => {
    let testfunc = `function add<Type extends >(a: Type, b: Type) {
            return Output;
        }

        let result = add(5, 3);
    ;`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 2);
    assert.strictEqual(funcItem.parameters[0].name, 'a');
    assert.strictEqual(funcItem.parameters[0].type, 'Type');
    assert.strictEqual(funcItem.parameters[1].name, 'b');
    assert.strictEqual(funcItem.parameters[1].type, 'Type');
  });

  //67, 测试 parseFunc typeof 情况
  test('parseFunc_ts_test_67', () => {
    let testfunc = `function add(a: typeof globalThis) {
            return Output;
        }

        let result = add(5, 3);
    ;`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 1);
    assert.strictEqual(funcItem.parameters[0].name, 'a');
    assert.strictEqual(funcItem.parameters[0].type, 'any');

  });

  //68, 测试 parseFunc never & unknown 类型 情况
  test('parseFunc_ts_test_68', () => {
    let testfunc = `function add(a: unknown & null) never {
            return Output;
        }

        let result = add(5, 3);
    ;`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 1);
    assert.strictEqual(funcItem.parameters[0].name, 'a');
    assert.strictEqual(funcItem.parameters[0].type, 'any');

  });

  //69, 测试 parseFunc 数组参数  类型 情况
  test('parseFunc_ts_test_69', () => {
    let testfunc = `function add([first, second]: [number, number]) Function {
            return Output;
        }

        let result = add(5, 3);
    ;`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 1);
    assert.strictEqual(funcItem.parameters[0].name, '');
    assert.strictEqual(funcItem.parameters[0].type, 'any');

  });

  //70, 测试 parseFunc 中文剩余形参  类型 情况
  test('parseFunc_ts_test_70', () => {
    let testfunc = `function add(n: number, ...m: 数组[]) {
            return Output;
        }

        let result = add(5, 3);
    ;`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 2);
    assert.strictEqual(funcItem.parameters[0].name, 'n');
    assert.strictEqual(funcItem.parameters[0].type, 'number');
    assert.strictEqual(funcItem.parameters[1].name, 'm');
    assert.strictEqual(funcItem.parameters[1].type, 'Array<any>');

  });

  //71, 测试 parseFunc 默认元祖参数 类型 情况
  test('parseFunc_ts_test_71', () => {
    let testfunc = `function add([7, "hello", true]) {
            return Output;
        }

        let result = add(5, 3);
    ;`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    // assert.strictEqual(funcObjList.funcs.length, 1);
    assert.strictEqual(funcObjList.funcs.length, 1);
    let funcItem = funcObjList.funcs[0];
    assert.strictEqual(funcItem.name, 'add');
    assert.strictEqual(funcItem.returns, 'void');
    assert.strictEqual(funcItem.parameters.length, 4);
    assert.strictEqual(funcItem.parameters[0].name, '');
    assert.strictEqual(funcItem.parameters[0].type, 'void');
    assert.strictEqual(funcItem.parameters[1].name, '');
    assert.strictEqual(funcItem.parameters[1].type, 'void');
    assert.strictEqual(funcItem.parameters[2].name, '');
    assert.strictEqual(funcItem.parameters[2].type, 'void');
    assert.strictEqual(funcItem.parameters[3].name, '');
    assert.strictEqual(funcItem.parameters[3].type, 'void');
  });

  //72, 测试 parseFunc 函数名带下划线  类型 情况
  test('parseFunc_ts_test_72', () => {
    let testfunc = `const f3: void_Func = function () {
            return Output;
        }

        let result = add(5, 3);
    ;`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 0);

  });

  //73, 测试 parseFunc 箭头函数少冒号  类型 情况
  test('parseFunc_ts_test_73', () => {
    let testfunc = `const voidFunc = () => true;

        let result = add(5, 3);
    ;`
    let funcObjList = parsets.doParseTs("test.ts", testfunc);
    assert.strictEqual(funcObjList.funcs.length, 0);

  });
})