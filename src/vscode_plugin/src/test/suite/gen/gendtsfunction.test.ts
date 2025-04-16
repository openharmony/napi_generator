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
import * as genDts from '../../../gen/gendts'
import { ClassObj, EnumObj, FuncObj, GenInfo, ParseObj, StructObj, UnionObj } from '../../../gen/datatype';
import * as fs from 'fs';

suite('Gendts_funcs_Suite', () => {
  vscode.window.showInformationMessage('Start all tests.');
  //1, 测试一般情况
  test('getDtsFunction_test_1', () => {
    //用例1. 正常情况
    let funcList: FuncObj[] = [
      {
        type: 'function',
        returns: 'int',
        name: 'testFunc',
        parameters: [
          {
            type: 'bool',
            name: 'v1',
            arraySize: -1,
            arraySizeList: []
          }
        ],
      }
    ];
    let parseObj: ParseObj = {
      enums: [],
      unions: [],
      structs: [],
      classes: [],
      funcs: funcList,
    }

    let rootInfo: GenInfo = {
      parseObj: parseObj,
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    }
    let resStr = genDts.getDtsFunction(rootInfo);
    assert.strictEqual(resStr, 'export function testFunc(v1: boolean): number;\n' +
        '\n' +
        'export function testFuncAsync(v1: boolean, cbf: (param: number) => void): void;\n' +
        '\n' +
        'export function testFuncPromise(v1: boolean): Promise<number>;\n' +
        '\n');

    //用例2: 普通函数
    let funcList2: FuncObj[] = [{
      type: 'function',
      returns: 'double',
      name: 'calculate',
      parameters: [
        { type: 'float', name: 'x', arraySize: -1, arraySizeList: [] },
        { type: 'int', name: 'y', arraySize: -1, arraySizeList: [] }
      ]
    }];

    let rootInfo2: GenInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: [],
        funcs: funcList2,
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test'
    }
    resStr = genDts.getDtsFunction(rootInfo2);
    assert.strictEqual(resStr, 'export function calculate(x: number, y: number): number;\n' +
        '\n' +
        'export function calculateAsync(x: number, y: number, cbf: (param: number) => void): void;\n' +
        '\n' +
        'export function calculatePromise(x: number, y: number): Promise<number>;\n' +
        '\n');
  
    //用例3: typedef接口
    let funcList3: FuncObj[] = [{
      type: 'typedef',
      returns: 'bool',
      name: 'Validator',
      parameters: [
        { type: 'string', name: 'input', arraySize: -1, arraySizeList: [] },
        { type: 'int', name: 'maxLength', arraySize: -1, arraySizeList: [] }
      ]
    }];

    let rootInfo3: GenInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: [],
        funcs: funcList3,
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test'
    }
    resStr = genDts.getDtsFunction(rootInfo3);
    assert.strictEqual(resStr, 'export interface Validator {\n\t(input: string, maxLength: number): boolean;\n};\n\n');
  
    //用例4: 混合参数类型
    let funcList4: FuncObj[] = [{
      type: 'function',
      returns: 'char*',
      name: 'concat',
      parameters: [
        { type: 'string', name: 'str1', arraySize: -1, arraySizeList: [] },
        { type: 'array<int,10>', name: 'codes', arraySize: -1, arraySizeList: [] },
        { type: 'bool', name: 'flag', arraySize: -1, arraySizeList: [] }
      ]
    }];
    let rootInfo4: GenInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: [],
        funcs: funcList4,
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test'
    }
    resStr = genDts.getDtsFunction(rootInfo4);
    assert.strictEqual(resStr, 'export function concat(str1: string, codes: Array<number>, flag: boolean): string;\n' +
        '\n' +
        'export function concatAsync(str1: string, codes: Array<number>, flag: boolean, cbf: (param: string) => void): void;\n' +
        '\n' +
        'export function concatPromise(str1: string, codes: Array<number>, flag: boolean): Promise<string>;\n' +
        '\n');
  
    //用例5: 保留字函数名
    let funcList5: FuncObj[] = [{
      type: 'function',
      returns: 'void',
      name: 'delete',
      parameters: [
        { type: 'int', name: 'id', arraySize: -1, arraySizeList: [] }
      ]
    }];
    let rootInfo5: GenInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: [],
        funcs: funcList5,
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test'
    }
    resStr = genDts.getDtsFunction(rootInfo5);
    assert.strictEqual(resStr, 'export function delete(id: number): void;\n' +
      '\n' +
      'export function deleteAsync(id: number, cbf: () => void): void;\n' +
      '\n' +
      'export function deletePromise(id: number): Promise<void>;\n' +
      '\n');

    //用例6 混合类型声明
    let funcList6: FuncObj[] = [
      {
        type: 'typedef',
        name: 'Callback',
        returns: 'void',
        parameters: [
          { type: 'int', name: 'code', arraySize: -1, arraySizeList: []},
          { type: 'string', name: 'message', arraySize: -1, arraySizeList: []}
        ]
      },
      {
        type: 'function',
        returns: 'bool',
        name: 'validate',
        parameters: [
          { type: 'Callback', name: 'cb', arraySize: -1, arraySizeList: []},
          { type: 'array<float, 5>', name: 'data', arraySize: -1, arraySizeList: []}
        ]
      }
    ];

    let rootInfo6: GenInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: [],
        funcs: funcList6
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };

    resStr = genDts.getDtsFunction(rootInfo6);
    const expected = 
      'export interface Callback {\n' +
      '\t(code: number, message: string): void;\n' +
      '};\n\n' +
      'export function validate(cb: any, data: Array<number>): boolean;\n\n' +
      'export function validateAsync(cb: any, data: Array<number>, cbf: (param: boolean) => void): void;\n\n' +
      'export function validatePromise(cb: any, data: Array<number>): Promise<boolean>;\n\n';
    assert.strictEqual(resStr, expected);

    //用例7: 保留字函数名
    let funcList7: FuncObj[] = [{
      type: 'function',
      returns: 'void',
      name: 'delete',
      parameters: [
        { type: 'int', name: 'id', arraySize: -1, arraySizeList: [] }
      ]
    }];
    let rootInfo7: GenInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: [],
        funcs: funcList7
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };
    resStr = genDts.getDtsFunction(rootInfo7);
    assert.strictEqual(resStr, 'export function delete(id: number): void;\n' +
      '\n' +
      'export function deleteAsync(id: number, cbf: () => void): void;\n' +
      '\n' +
      'export function deletePromise(id: number): Promise<void>;\n' +
      '\n');
  });

  //2, 测试边界情况
  test('getDtsFunction_test_2', () => {
    //用例1. 函数列表为空,确保返回空字符串
    let rootInfo: GenInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: [],
        funcs: [],
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    }
    let resStr = genDts.getDtsFunction(rootInfo);
    assert.strictEqual(resStr, '');

    //用例2. 函数没有参数的情况,生成不带参数的声明
    let funcList2: FuncObj[] = [
      {
        type: 'function',
        returns: 'int',
        name: 'testFunc',
        parameters: [],
      }
    ];
    let rootInfo2: GenInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: [],
        funcs: funcList2,
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    }
    resStr = genDts.getDtsFunction(rootInfo2);
    assert.strictEqual(resStr, 'export function testFunc(): number;\n' +
        '\n' +
        'export function testFuncAsync(cbf: (param: number) => void): void;\n' +
        '\n' +
        'export function testFuncPromise(): Promise<number>;\n' +
        '\n');

    //用例3 特殊字符参数名测试
    let funcList3 = [
      {
        type: 'function',
        returns: 'void',
        name: 'specialChars',
        parameters: [
          { type: 'int', name: 'data-id', arraySize: 0, arraySizeList: []},
          { type: 'string', name: 'class', arraySize: 0, arraySizeList: []}
        ]
      }
    ];
    let rootInfo3: GenInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: [],
        funcs: funcList3,
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    }
    resStr = genDts.getDtsFunction(rootInfo3);
    assert.strictEqual(
      resStr,
          'export function specialChars(data-id: number, class: string): void;\n' +
          '\n' +
          'export function specialCharsAsync(data-id: number, class: string, cbf: () => void): void;\n' +
          '\n' +
          'export function specialCharsPromise(data-id: number, class: string): Promise<void>;\n' +
          '\n'
    );

    //用例4 最大参数数量
    const maxParams = Array(10).fill(0).map((_,i) => ({
      type: 'int', name: `param${i+1}`, arraySize: 0, arraySizeList: []
    }));
    let funcList4 = [
      {
        type: 'function',
        returns: 'void',
        name: 'maxParams',
        parameters: maxParams
      }
    ];
    let rootInfo4: GenInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: [],
        funcs: funcList4,
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    }
    resStr = genDts.getDtsFunction(rootInfo4);
    assert.match(resStr, /param10: number/);

    //用例5: 空参数名
    let funcList5 = [
      {
        type: 'function',
        returns: 'void',
        name: 'invalid',
        parameters: [{ type: 'int', name: '', arraySize: 0, arraySizeList: [] }]
      }
    ];
    let rootInfo5: GenInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: [],
        funcs: funcList5,
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    }
    resStr = genDts.getDtsFunction(rootInfo5);  
    assert.strictEqual(resStr, 'export function invalid(): void;\n' +
        '\n' +
        'export function invalidAsync(cbf: () => void): void;\n' +
        '\n' +
        'export function invalidPromise(): Promise<void>;\n' +
        '\n');

    //用例6: 带特殊符号的参数名
    let funcList6 = [
      {
        type: 'function',
        returns: 'void',
        name: 'special',
        parameters: [
          { type: 'string', name: 'data-url', arraySize: 0, arraySizeList: [] },
          { type: 'int', name: 'class', arraySize: 0, arraySizeList: [] }
        ]
      }
    ];
    let rootInfo6: GenInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: [],
        funcs: funcList6,
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    }
    resStr = genDts.getDtsFunction(rootInfo6);  
    assert.strictEqual(resStr, 'export function special(data-url: string, class: number): void;\n' +
      '\n' +
      'export function specialAsync(data-url: string, class: number, cbf: () => void): void;\n' +
      '\n' +
      'export function specialPromise(data-url: string, class: number): Promise<void>;\n' +
      '\n');
  });

  //3, 测试异常情况
  test('getDtsFunction_test_3', () => {
    //用例1.rootInfo.parseObj.funcs不存在时是否会抛出错误
    let rootInfo: GenInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: [],
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    }
    let res = true;
    try {
      genDts.getDtsFunction(rootInfo);
    } catch (error) {
      res = false;
    }
    assert.strictEqual(res, false);

    //用例2.funcItem缺少必要属性(如 缺少returns)时的处理 
    let funcList2: FuncObj[] = [
      {
        type: 'function',
        name: 'testFunc',
        parameters: [
          {
            type: 'bool',
            name: 'v1',
            arraySize: -1,
            arraySizeList: []
          }
        ],
      }
    ];
    let rootInfo2: GenInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: [],
        funcs: funcList2
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    }
    let res2 = true;
    try {
      genDts.getDtsFunction(rootInfo2);
    } catch (error) {
      res2 = false;
    }
    assert.strictEqual(res2, false);

    //用例3: 参数缺少type
    let res3 = true;
    let funcList3: FuncObj[] = [
      {
        type: 'function',
        name: 'testFunc',
        returns: 'void',
        parameters: [
          {
            //参数缺少type
            name: 'invalidParam',
            arraySize: -1,
            arraySizeList: []
          }
        ],
      }
    ];
    let rootInfo3: GenInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: [],
        funcs: funcList3
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    }
    try {
      genDts.getDtsFunction(rootInfo2);
    } catch (error) {
      res3 = false;
    }
    assert.strictEqual(res3, false);

    //用例4: 未知类型转换
    let funcList4: FuncObj[] = [
      {
        type: 'function',
        name: 'testFunc',
        returns: 'unknown_type',
        parameters: [
          {
            type: 'custom_type',
            name: 'param',
            arraySize: -1,
            arraySizeList: []
          }
        ],
      }
    ];
    let rootInfo4: GenInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: [],
        funcs: funcList4
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    }
    let reStr = genDts.getDtsFunction(rootInfo4);
    assert.strictEqual(reStr, 'export function testFunc(param: any): any;\n' +
        '\n' +
        'export function testFuncAsync(param: any, cbf: (param: any) => void): void;\n' +
        '\n' +
        'export function testFuncPromise(param: any): Promise<any>;\n' +
        '\n');
    assert.match(reStr, /param: any/);
  });

  //4, 测试错误情况
  test('getDtsFunction_test_4', () => {
    //用例1.传递非法参数,null
    let res = true;
    try {
      genDts.getDtsFunction(null);
    } catch (error) {
      res = false;
    }
    assert.strictEqual(res, false);

    //用例2.传递非法参数,undefined
    let res2 = true;
    try {
      genDts.getDtsFunction(undefined);
    } catch (error) {
      res2 = false;
    }
    assert.strictEqual(res2, false);

    //用例3.传入错误参数类型 普通字符串
    let res3 = true;
    try {
      genDts.getDtsFunction('invalid');
    } catch (error) {
      res3 = false;
    }
    assert.strictEqual(res3, false);

    //用例4. 传入错误参数类型 普通数字
    let res4 = true;
    try {
      genDts.getDtsFunction(123);
    } catch (error) {
      res4 = false;
    }
    assert.strictEqual(res4, false);

    //用例5. 传入错误参数类型 普通布尔值
    let res5 = true;
    try {
      genDts.getDtsFunction(true);
    } catch (error) {
      res5 = false;
    }
    assert.strictEqual(res5, false);

    //用例6: 结构不完整的对象
    let res6 = true;
    try {
      genDts.getDtsFunction({} as GenInfo);
    } catch (error) {
      res6 = false;
    }
    assert.strictEqual(res6, false);
  
    //用例7: 无效的函数对象结构
    let res7 = true;
    try {
      genDts.getDtsFunction({
        parseObj: {
          funcs: [{
            type: 'function',
            name: 12345, // 错误类型
            parameters: []
          }]
        }
      } as GenInfo);
    } catch (error) {
      res7 = false;
    }
    assert.strictEqual(res7, false);
    
    //用例8: 空函数定义
    let res8 = true;
    try {
      genDts.getDtsFunction({
        parseObj: {
          funcs: [{}] // 空对象
        }
      } as GenInfo);
    } catch (error) {
      res8 = false;
    }
    assert.strictEqual(res8, false);
  });
})