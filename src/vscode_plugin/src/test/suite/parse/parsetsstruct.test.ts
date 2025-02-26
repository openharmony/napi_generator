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

suite('Parse_Struct_TS_Suite', () => {
  vscode.window.showInformationMessage('Start all tests.');
  
  //1, 测试 parseStruct 一般情况
  test('parseStruct_ts_test_1', () => {
    let teststruct = `interface Point { 
        x: number;
        y: number; 
        draw(message: string): void;
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'Point');

    assert.strictEqual(structItem.members.length, 2);
    assert.strictEqual(structItem.members[0].name, 'x');
    assert.strictEqual(structItem.members[0].type, 'number');
    assert.strictEqual(structItem.members[1].name, 'y');
    assert.strictEqual(structItem.members[1].type, 'number');

    assert.strictEqual(structItem.functions.length, 1);
    assert.strictEqual(structItem.functions[0].name, 'draw');
    assert.strictEqual(structItem.functions[0].returns, 'void');
    assert.strictEqual(structItem.functions[0].parameters.length, 1);
    assert.strictEqual(structItem.functions[0].parameters[0].name, 'message');
    assert.strictEqual(structItem.functions[0].parameters[0].type, 'string');
  });

  //2, 测试 parseStruct 类型覆盖情况
  test('parseStruct_ts_test_2', () => {
    let teststruct = `interface OTC {
        len: number;
        name: string;
        flag: boolean;
        obj: any;
        llen: number[];
        lstr: string[];
        lflag: boolean[];
        lobj: any[];
        tdef: astruct;
        ltdef: astruct[];
        contruct(a: number): void;
        deconstruct(): void;
        nfunc(num: number): number ;
        sfunc(str: string): string;
        bfunc(flag: boolean): boolean;
        afunc(obj: any): any;
        tfunc(obj: tstruct): any ;
        torfunc(obj: tstruct | string): tstruct | string ;
        lnfunc(num: number[]): number[];
        lsfunc(str: string[]): string[];
        lbfunc(flag: boolean[]): boolean[];
        lafunc(obj: any[]): any[];
        ltfunc(lobj: tstruct[]): tstruct[] ;
        funcdef: () => {};
        nfundef: ((a: number)=> number);
        strfundef: ((a: string)=> string);
        bfundef: (a: boolean)=> boolean;
        afundef: (a: any)=> any;
        tfundef: (a: tstruct)=> tstruct;
        lnfundef: (a: number[])=> number[];
        lstrfundef: (a: string[])=> string[];
        lbfundef: (a: boolean[])=> boolean[];
        lafundef: (a: any[])=> any[];
        ltfundef: (a: tstruct[])=> tstruct[];
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.members.length, 21);
    assert.strictEqual(structItem.members[0].name, 'len');
    assert.strictEqual(structItem.members[0].type, 'number');
    assert.strictEqual(structItem.members[1].name, 'name');
    assert.strictEqual(structItem.members[1].type, 'string');
    assert.strictEqual(structItem.members[2].name, 'flag');
    assert.strictEqual(structItem.members[2].type, 'boolean');
    assert.strictEqual(structItem.members[3].name, 'obj');
    assert.strictEqual(structItem.members[3].type, 'any');
    assert.strictEqual(structItem.members[4].name, 'llen');
    assert.strictEqual(structItem.members[4].type, 'number[]');
    assert.strictEqual(structItem.members[5].name, 'lstr');
    assert.strictEqual(structItem.members[5].type, 'string[]');
    assert.strictEqual(structItem.members[6].name, 'lflag');
    assert.strictEqual(structItem.members[6].type, 'boolean[]');
    assert.strictEqual(structItem.members[7].name, 'lobj');
    assert.strictEqual(structItem.members[7].type, 'any[]');
    assert.strictEqual(structItem.members[8].name, 'tdef');
    assert.strictEqual(structItem.members[8].type, 'astruct');
    assert.strictEqual(structItem.members[9].name, 'ltdef');
    assert.strictEqual(structItem.members[9].type, 'astruct[]');
    assert.strictEqual(structItem.members[10].name, 'funcdef');
    assert.strictEqual(structItem.members[10].type, '() => {}');
    assert.strictEqual(structItem.members[11].name, 'nfundef');
    assert.strictEqual(structItem.members[11].type, '((a: number)=> number)');
    assert.strictEqual(structItem.members[12].name, 'strfundef');
    assert.strictEqual(structItem.members[12].type, '((a: string)=> string)');
    assert.strictEqual(structItem.members[13].name, 'bfundef');
    assert.strictEqual(structItem.members[13].type, '(a: boolean)=> boolean');
    assert.strictEqual(structItem.members[14].name, 'afundef');
    assert.strictEqual(structItem.members[14].type, '(a: any)=> any');
    assert.strictEqual(structItem.members[15].name, 'tfundef');
    assert.strictEqual(structItem.members[15].type, '(a: tstruct)=> tstruct');
    assert.strictEqual(structItem.members[16].name, 'lnfundef');
    assert.strictEqual(structItem.members[16].type, '(a: number[])=> number[]');
    assert.strictEqual(structItem.members[17].name, 'lstrfundef');
    assert.strictEqual(structItem.members[17].type, '(a: string[])=> string[]');
    assert.strictEqual(structItem.members[18].name, 'lbfundef');
    assert.strictEqual(structItem.members[18].type, '(a: boolean[])=> boolean[]');
    assert.strictEqual(structItem.members[19].name, 'lafundef');
    assert.strictEqual(structItem.members[19].type, '(a: any[])=> any[]');
    assert.strictEqual(structItem.members[20].name, 'ltfundef');
    assert.strictEqual(structItem.members[20].type, '(a: tstruct[])=> tstruct[]');

    assert.strictEqual(structItem.functions.length, 13);
    assert.strictEqual(structItem.functions[0].name, 'contruct');
    assert.strictEqual(structItem.functions[0].returns, 'void');
    assert.strictEqual(structItem.functions[0].parameters.length, 1);
    assert.strictEqual(structItem.functions[0].parameters[0].name, 'a');
    assert.strictEqual(structItem.functions[0].parameters[0].type, 'number');
    assert.strictEqual(structItem.functions[0].parameters[0].arraySize, 0);
    assert.strictEqual(structItem.functions[1].name, 'deconstruct');
    assert.strictEqual(structItem.functions[1].returns, 'void');
    assert.strictEqual(structItem.functions[2].name, 'nfunc');
    assert.strictEqual(structItem.functions[2].returns, 'number');
    assert.strictEqual(structItem.functions[2].parameters.length, 1);
    assert.strictEqual(structItem.functions[2].parameters[0].name, 'num');
    assert.strictEqual(structItem.functions[2].parameters[0].type, 'number');
    assert.strictEqual(structItem.functions[2].parameters[0].arraySize, 0);
    assert.strictEqual(structItem.functions[3].name, 'sfunc');
    assert.strictEqual(structItem.functions[3].returns, 'string');
    assert.strictEqual(structItem.functions[3].parameters.length, 1);
    assert.strictEqual(structItem.functions[3].parameters[0].name, 'str');
    assert.strictEqual(structItem.functions[3].parameters[0].type, 'string');
    assert.strictEqual(structItem.functions[3].parameters[0].arraySize, 0);
    assert.strictEqual(structItem.functions[4].name, 'bfunc');
    assert.strictEqual(structItem.functions[4].returns, 'boolean');
    assert.strictEqual(structItem.functions[4].parameters.length, 1);
    assert.strictEqual(structItem.functions[4].parameters[0].name, 'flag');
    assert.strictEqual(structItem.functions[4].parameters[0].type, 'boolean');
    assert.strictEqual(structItem.functions[4].parameters[0].arraySize, 0);
    assert.strictEqual(structItem.functions[5].name, 'afunc');
    assert.strictEqual(structItem.functions[5].returns, 'any');
    assert.strictEqual(structItem.functions[5].parameters.length, 1);
    assert.strictEqual(structItem.functions[5].parameters[0].name, 'obj');
    assert.strictEqual(structItem.functions[5].parameters[0].type, 'any');
    assert.strictEqual(structItem.functions[5].parameters[0].arraySize, 0);
    assert.strictEqual(structItem.functions[6].name, 'tfunc');
    assert.strictEqual(structItem.functions[6].returns, 'any');
    assert.strictEqual(structItem.functions[6].parameters.length, 1);
    assert.strictEqual(structItem.functions[6].parameters[0].name, 'obj');
    assert.strictEqual(structItem.functions[6].parameters[0].type, 'tstruct');
    assert.strictEqual(structItem.functions[6].parameters[0].arraySize, 0);
    assert.strictEqual(structItem.functions[7].name, 'torfunc');
    assert.strictEqual(structItem.functions[7].returns, 'tstruct | string');
    assert.strictEqual(structItem.functions[7].parameters.length, 1);
    assert.strictEqual(structItem.functions[7].parameters[0].name, 'obj');
    assert.strictEqual(structItem.functions[7].parameters[0].type, 'tstruct | string');
    assert.strictEqual(structItem.functions[7].parameters[0].arraySize, 0);
    assert.strictEqual(structItem.functions[8].name, 'lnfunc');
    assert.strictEqual(structItem.functions[8].returns, 'number[]');
    assert.strictEqual(structItem.functions[8].parameters.length, 1);
    assert.strictEqual(structItem.functions[8].parameters[0].name, 'num');
    assert.strictEqual(structItem.functions[8].parameters[0].type, 'number[]');
    assert.strictEqual(structItem.functions[8].parameters[0].arraySize, 0);
    assert.strictEqual(structItem.functions[9].name, 'lsfunc');
    assert.strictEqual(structItem.functions[9].returns, 'string[]');
    assert.strictEqual(structItem.functions[9].parameters.length, 1);
    assert.strictEqual(structItem.functions[9].parameters[0].name, 'str');
    assert.strictEqual(structItem.functions[9].parameters[0].type, 'string[]');
    assert.strictEqual(structItem.functions[9].parameters[0].arraySize, 0);
    assert.strictEqual(structItem.functions[10].name, 'lbfunc');
    assert.strictEqual(structItem.functions[10].returns, 'boolean[]');
    assert.strictEqual(structItem.functions[10].parameters.length, 1);
    assert.strictEqual(structItem.functions[10].parameters[0].name, 'flag');
    assert.strictEqual(structItem.functions[10].parameters[0].type, 'boolean[]');
    assert.strictEqual(structItem.functions[10].parameters[0].arraySize, 0);
    assert.strictEqual(structItem.functions[11].name, 'lafunc');
    assert.strictEqual(structItem.functions[11].returns, 'any[]');
    assert.strictEqual(structItem.functions[11].parameters.length, 1);
    assert.strictEqual(structItem.functions[11].parameters[0].name, 'obj');
    assert.strictEqual(structItem.functions[11].parameters[0].type, 'any[]');
    assert.strictEqual(structItem.functions[11].parameters[0].arraySize, 0);
    assert.strictEqual(structItem.functions[12].name, 'ltfunc');
    assert.strictEqual(structItem.functions[12].returns, 'tstruct[]');
    assert.strictEqual(structItem.functions[12].parameters.length, 1);
    assert.strictEqual(structItem.functions[12].parameters[0].name, 'lobj');
    assert.strictEqual(structItem.functions[12].parameters[0].type, 'tstruct[]');
    assert.strictEqual(structItem.functions[12].parameters[0].arraySize, 0);
  });

  //3, 测试 parseStruct 模板类模板函数情况
  test('parseStruct_ts_test_3', () => {
    let teststruct = `interface OTC<Type> {
        len: Type;
        name: Type[];
        add(a: Type): void;
        del: (x: Type, y: Type) => Type
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 1);
    assert.strictEqual(structItem.functions[0].name, 'add');
    assert.strictEqual(structItem.functions[0].returns, 'void');
    assert.strictEqual(structItem.functions[0].parameters.length, 1);
    assert.strictEqual(structItem.functions[0].parameters[0].name, 'a');
    assert.strictEqual(structItem.functions[0].parameters[0].type, 'Type');
    assert.strictEqual(structItem.functions[0].parameters[0].arraySize, 0);

    assert.strictEqual(structItem.members.length, 3);
    assert.strictEqual(structItem.members[0].name, 'len');
    assert.strictEqual(structItem.members[0].type, 'Type');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    assert.strictEqual(structItem.members[1].name, 'name');
    assert.strictEqual(structItem.members[1].type, 'Type[]');
    assert.strictEqual(structItem.members[1].arraySize, 0);
    assert.strictEqual(structItem.members[2].name, 'del');
    assert.strictEqual(structItem.members[2].type, '(x: Type, y: Type) => Type');
    assert.strictEqual(structItem.members[2].arraySize, 0);
  });

  //4, 测试 parseStruct 继承情况
  test('parseStruct_ts_test_4', () => {
    let teststruct = `interface OTC extends Basic {
        len: number;
        name: string;
        contruct(a: number): void;
        deconstruct(): void;
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 2);
    assert.strictEqual(structItem.functions[0].name, 'contruct');
    assert.strictEqual(structItem.functions[0].returns, 'void');
    assert.strictEqual(structItem.functions[0].parameters.length, 1);
    assert.strictEqual(structItem.functions[0].parameters[0].name, 'a');
    assert.strictEqual(structItem.functions[0].parameters[0].type, 'number');
    assert.strictEqual(structItem.functions[0].parameters[0].arraySize, 0);
    assert.strictEqual(structItem.functions[1].name, 'deconstruct');
    assert.strictEqual(structItem.functions[1].returns, 'void');

    assert.strictEqual(structItem.members.length, 2);
    assert.strictEqual(structItem.members[0].name, 'len');
    assert.strictEqual(structItem.members[0].type, 'number');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    assert.strictEqual(structItem.members[1].name, 'name');
    assert.strictEqual(structItem.members[1].type, 'string');
    assert.strictEqual(structItem.members[0].arraySize, 0);
  });

  //5, 测试 parseStruct 数组情况
  test('parseStruct_ts_test_5', () => {
    let teststruct = `interface OTC extends Basic {
        len: number[10];
        name: string[10][20];
        contruct(a: number[10][20][30]) : void;
        deconstruct() : void;
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 2);
    assert.strictEqual(structItem.functions[0].name, 'contruct');
    assert.strictEqual(structItem.functions[0].returns, 'void');
    assert.strictEqual(structItem.functions[0].parameters.length, 1);
    assert.strictEqual(structItem.functions[0].parameters[0].name, 'a');
    assert.strictEqual(structItem.functions[0].parameters[0].type, 'number[10][20][30]');
    assert.strictEqual(structItem.functions[0].parameters[0].arraySize, 0);
    assert.strictEqual(structItem.functions[1].name, 'deconstruct');
    assert.strictEqual(structItem.functions[1].returns, 'void');

    assert.strictEqual(structItem.members.length, 2);
    assert.strictEqual(structItem.members[0].name, 'len');
    assert.strictEqual(structItem.members[0].type, 'number[10]');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    assert.strictEqual(structItem.members[1].name, 'name');
    assert.strictEqual(structItem.members[1].type, 'string[10][20]');
    assert.strictEqual(structItem.members[0].arraySize, 0);
  });

  //6, 测试 parseStruct 测试模板继承情况
  test('parseStruct_ts_test_6', () => {
    let teststruct = `interface OTC <Type extends Basic> {
        len: Type;
        name: Type[10][20];
        contruct(a: Type[10][20][30]): void;
        deconstruct() : void;
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 2);
    assert.strictEqual(structItem.functions[0].name, 'contruct');
    assert.strictEqual(structItem.functions[0].returns, 'void');
    assert.strictEqual(structItem.functions[0].parameters.length, 1);
    assert.strictEqual(structItem.functions[0].parameters[0].name, 'a');
    assert.strictEqual(structItem.functions[0].parameters[0].type, 'Type[10][20][30]');
    assert.strictEqual(structItem.functions[0].parameters[0].arraySize, 0);
    assert.strictEqual(structItem.functions[1].name, 'deconstruct');
    assert.strictEqual(structItem.functions[1].returns, 'void');

    assert.strictEqual(structItem.members.length, 2);
    assert.strictEqual(structItem.members[0].name, 'len');
    assert.strictEqual(structItem.members[0].type, 'Type');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    assert.strictEqual(structItem.members[1].name, 'name');
    assert.strictEqual(structItem.members[1].type, 'Type[10][20]');
    assert.strictEqual(structItem.members[0].arraySize, 0);
  });

  //7, 测试 parseStruct 测试选择情况
  test('parseStruct_ts_test_7', () => {
    let teststruct = `interface OTC <Type extends Basic> {
        len: Type;
        name?: Type[10][20];
        contruct(a?: Type[10][20][30]) : void;
        deconstruct() : void;
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 2);
    assert.strictEqual(structItem.functions[0].name, 'contruct');
    assert.strictEqual(structItem.functions[0].returns, 'void');
    assert.strictEqual(structItem.functions[0].parameters.length, 1);
    assert.strictEqual(structItem.functions[0].parameters[0].name, 'a');
    assert.strictEqual(structItem.functions[0].parameters[0].type, 'Type[10][20][30]');
    assert.strictEqual(structItem.functions[0].parameters[0].arraySize, 0);
    assert.strictEqual(structItem.functions[1].name, 'deconstruct');
    assert.strictEqual(structItem.functions[1].returns, 'void');

    assert.strictEqual(structItem.members.length, 2);
    assert.strictEqual(structItem.members[0].name, 'len');
    assert.strictEqual(structItem.members[0].type, 'Type');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    assert.strictEqual(structItem.members[1].name, 'name');
    assert.strictEqual(structItem.members[1].type, 'Type[10][20]');
    assert.strictEqual(structItem.members[0].arraySize, 0);
  });

  //8, 测试 parseStruct 测试注释选择情况
  test('parseStruct_ts_test_8', () => {
    let teststruct = `interface OTC <Type extends Basic> {
        // 测试注释
        len: Type; //注释一
        name?: Type[10][20];  /*注释2*/
        contruct(a?: Type[10][20][30]) : void;
        deconstruct(): void;
        // ...
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 2);
    assert.strictEqual(structItem.functions[0].name, 'contruct');
    assert.strictEqual(structItem.functions[0].returns, 'void');
    assert.strictEqual(structItem.functions[0].parameters.length, 1);
    assert.strictEqual(structItem.functions[0].parameters[0].name, 'a');
    assert.strictEqual(structItem.functions[0].parameters[0].type, 'Type[10][20][30]');
    assert.strictEqual(structItem.functions[0].parameters[0].arraySize, 0);
    assert.strictEqual(structItem.functions[1].name, 'deconstruct');
    assert.strictEqual(structItem.functions[1].returns, 'void');

    assert.strictEqual(structItem.members.length, 2);
    assert.strictEqual(structItem.members[0].name, 'len');
    assert.strictEqual(structItem.members[0].type, 'Type');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    assert.strictEqual(structItem.members[1].name, 'name');
    assert.strictEqual(structItem.members[1].type, 'Type[10][20]');
    assert.strictEqual(structItem.members[0].arraySize, 0);
  });

  //9, 测试 parseStruct 属性修饰符情况
  test('parseStruct_ts_test_9', () => {
    let teststruct = `interface OTC <Type extends Basic> {
        // 测试注释
        readonly len: Type; //注释一
        public name?: Type[10][20];  /*注释2*/
        private contruct(a?: Type[10][20][30]): void;
        const deconstruct() : void;
        // ...
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0]
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 2);
    assert.strictEqual(structItem.functions[0].name, 'contruct');
    assert.strictEqual(structItem.functions[0].returns, 'void');
    assert.strictEqual(structItem.functions[0].parameters.length, 1);
    assert.strictEqual(structItem.functions[0].parameters[0].name, 'a');
    assert.strictEqual(structItem.functions[0].parameters[0].type, 'Type[10][20][30]');
    assert.strictEqual(structItem.functions[0].parameters[0].arraySize, 0);
    assert.strictEqual(structItem.functions[1].name, 'deconstruct');
    assert.strictEqual(structItem.functions[1].returns, 'void');

    assert.strictEqual(structItem.members.length, 3);
    assert.strictEqual(structItem.members[0].name, 'len');
    assert.strictEqual(structItem.members[0].type, 'Type');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    assert.strictEqual(structItem.members[1].name, 'name');
    assert.strictEqual(structItem.members[1].type, 'Type[10][20]');
    assert.strictEqual(structItem.members[1].arraySize, 0);
    assert.strictEqual(structItem.members[2].name, 'const');
    assert.strictEqual(structItem.members[2].type, 'any');
    assert.strictEqual(structItem.members[2].arraySize, 0);
  });

  //10, 测试 parseStruct 索引签名情况
  test('parseStruct_ts_test_10', () => {
    let teststruct = `interface OTC {
        [index: number]: string;  
        [index: string]: number | string;
        readonly [index: number]: string;
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 0);
    assert.strictEqual(structItem.members.length, 0);
    
  });

  //11, 测试 parseStruct 扩展类型情况
  test('parseStruct_ts_test_11', () => {
    let teststruct = `interface OTC {
        const cc: ColorfulCircle = {
          color: "red",
          radius: 42,
        };
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 0);
    assert.strictEqual(structItem.members.length, 2);
    
    assert.strictEqual(structItem.members[0].name, 'const');
    assert.strictEqual(structItem.members[0].type, 'any');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    assert.strictEqual(structItem.members[1].name, 'cc');
    assert.strictEqual(structItem.members[1].type, 'ColorfulCircle');
    assert.strictEqual(structItem.members[1].arraySize, 0);
  });

  //12, 测试 parseStruct 交集类型情况
  test('parseStruct_ts_test_12', () => {
    let teststruct = `interface OTC {
        const cc: Colorful & Circle;
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 0);
    assert.strictEqual(structItem.members.length, 2);
    assert.strictEqual(structItem.members[0].name, 'const');
    assert.strictEqual(structItem.members[0].type, 'any');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    assert.strictEqual(structItem.members[1].name, 'cc');
    assert.strictEqual(structItem.members[1].type, 'Colorful & Circle');
    assert.strictEqual(structItem.members[1].arraySize, 0);
  });

  //13, 测试 parseStruct 泛型对象类型情况
  test('parseStruct_ts_test_13', () => {
    let teststruct =  `interface OTC {
        const cc: any;
        readonly contents: unknown;
        cont: "hello world";
        ents: Type;
        val: OrNull<OneOrMany<Type>>;

    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 0);
    assert.strictEqual(structItem.members.length, 6);
    assert.strictEqual(structItem.members[0].name, 'const');
    assert.strictEqual(structItem.members[0].type, 'any');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    assert.strictEqual(structItem.members[1].name, 'cc');
    assert.strictEqual(structItem.members[1].type, 'any');
    assert.strictEqual(structItem.members[1].arraySize, 0);
    assert.strictEqual(structItem.members[2].name, 'contents');
    assert.strictEqual(structItem.members[2].type, 'unknown');
    assert.strictEqual(structItem.members[2].arraySize, 0);
    assert.strictEqual(structItem.members[3].name, 'cont');
    assert.strictEqual(structItem.members[3].type, '"hello world"');
    assert.strictEqual(structItem.members[3].arraySize, 0);
    assert.strictEqual(structItem.members[4].name, 'ents');
    assert.strictEqual(structItem.members[4].type, 'Type');
    assert.strictEqual(structItem.members[4].arraySize, 0);
    assert.strictEqual(structItem.members[5].name, 'val');
    assert.strictEqual(structItem.members[5].type, 'OrNull<OneOrMany<Type>>');
    assert.strictEqual(structItem.members[5].arraySize, 0);
  });

  //14, 测试 parseStruct readonly array对象类型情况
  test('parseStruct_ts_test_14', () => {
    let teststruct = `interface OTC {
        const roArray: ReadonlyArray<string> = ["red", "green", "blue"];
        readonly contents: roArray.slice();
        x: readonly string[] = [];
        a: pair[0];
        const [x, y, z] = coord;
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 0);
    assert.strictEqual(structItem.members.length, 7);
    assert.strictEqual(structItem.members[0].name, 'const');
    assert.strictEqual(structItem.members[0].type, 'any');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    assert.strictEqual(structItem.members[1].name, 'roArray');
    assert.strictEqual(structItem.members[1].type, 'ReadonlyArray<string>');
    assert.strictEqual(structItem.members[1].arraySize, 0);
    assert.strictEqual(structItem.members[2].name, 'contents');
    assert.strictEqual(structItem.members[2].type, 'roArray.slice');
    assert.strictEqual(structItem.members[2].arraySize, 0);
    assert.strictEqual(structItem.members[3].name, 'x');
    assert.strictEqual(structItem.members[3].type, 'readonly string[]');
    assert.strictEqual(structItem.members[3].arraySize, 0);
    assert.strictEqual(structItem.members[4].name, 'a');
    assert.strictEqual(structItem.members[4].type, 'pair[0]');
    assert.strictEqual(structItem.members[4].arraySize, 0);
    assert.strictEqual(structItem.members[5].name, 'const');
    assert.strictEqual(structItem.members[5].type, 'any');
    assert.strictEqual(structItem.members[5].arraySize, 0);
    assert.strictEqual(structItem.members[6].name, 'coord');
    assert.strictEqual(structItem.members[6].type, 'any');
    assert.strictEqual(structItem.members[6].arraySize, 0);
  });

  //15, 测试 parseStruct 剩余元素类型情况
  test('parseStruct_ts_test_15', () => {
    let teststruct = `interface OTC {
      const a: StringNumberBooleans = ["hello", 1];
      const b: StringNumberBooleans = ["beautiful", 2, true];
      const c: StringNumberBooleans = ["world", 3, true, false, true, false, true];
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 0);
    assert.strictEqual(structItem.members.length, 6);
    assert.strictEqual(structItem.members[0].name, 'const');
    assert.strictEqual(structItem.members[0].type, 'any');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    assert.strictEqual(structItem.members[1].name, 'a');
    assert.strictEqual(structItem.members[1].type, 'StringNumberBooleans');
    assert.strictEqual(structItem.members[1].arraySize, 0);
    assert.strictEqual(structItem.members[2].name, 'const');
    assert.strictEqual(structItem.members[2].type, 'any');
    assert.strictEqual(structItem.members[2].arraySize, 0);
    assert.strictEqual(structItem.members[3].name, 'b');
    assert.strictEqual(structItem.members[3].type, 'StringNumberBooleans');
    assert.strictEqual(structItem.members[3].arraySize, 0);
    assert.strictEqual(structItem.members[4].name, 'const');
    assert.strictEqual(structItem.members[4].type, 'any');
    assert.strictEqual(structItem.members[4].arraySize, 0);
    assert.strictEqual(structItem.members[5].name, 'c');
    assert.strictEqual(structItem.members[5].type, 'StringNumberBooleans');
    assert.strictEqual(structItem.members[5].arraySize, 0);
  });

  //16, 测试 parseStruct 元祖类型情况
  test('parseStruct_ts_test_16', () => {
    let teststruct = `interface OTC {
      pair: readonly [string, number];
      [x, y]: [number, number];
      const c: [3, 4] as const;
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 0);
    assert.strictEqual(structItem.members.length, 3);
    assert.strictEqual(structItem.members[0].name, 'pair');
    assert.strictEqual(structItem.members[0].type, 'readonly [string, number]');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    assert.strictEqual(structItem.members[1].name, 'const');
    assert.strictEqual(structItem.members[1].type, 'any');
    assert.strictEqual(structItem.members[1].arraySize, 0);
    assert.strictEqual(structItem.members[2].name, 'c');
    assert.strictEqual(structItem.members[2].type, '[3, 4]');
    assert.strictEqual(structItem.members[2].arraySize, 0);
  });

  //17, 测试 parseStruct keyof类型情况
  test('parseStruct_ts_test_17', () => {
    let teststruct = `interface OTC {
      pair: keyof Arrayish;
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 0);
    assert.strictEqual(structItem.members.length, 1);
    assert.strictEqual(structItem.members[0].name, 'pair');
    assert.strictEqual(structItem.members[0].type, 'keyof Arrayish');
    assert.strictEqual(structItem.members[0].arraySize, 0);
  });

  //18, 测试 parseStruct typeof类型情况
  test('parseStruct_ts_test_18', () => {
    let teststruct = `interface OTC {
      pair: typeof "Hello world";
      name: typeof Stype;
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 0);
    assert.strictEqual(structItem.members.length, 3);
    assert.strictEqual(structItem.members[0].name, 'pair');
    assert.strictEqual(structItem.members[0].type, 'typeof');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    assert.strictEqual(structItem.members[1].name, '"Hello world"');
    assert.strictEqual(structItem.members[1].type, 'any');
    assert.strictEqual(structItem.members[1].arraySize, 0);
    assert.strictEqual(structItem.members[2].name, 'name');
    assert.strictEqual(structItem.members[2].type, 'typeof Stype');
    assert.strictEqual(structItem.members[2].arraySize, 0);
  });

  //19, 测试 parseStruct 索引访问类型情况
  test('parseStruct_ts_test_19', () => {
    let teststruct = `interface OTC {
      pair: Person["age"];
      name: Person["age" | "name"];
      test: Person[keyof Person];
      obj: Person[AliveOrName];
      amo: typeof MyArray[number];
      topy: Person[pair];
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 0);
    assert.strictEqual(structItem.members.length, 6);
    assert.strictEqual(structItem.members[0].name, 'pair');
    assert.strictEqual(structItem.members[0].type, 'Person["age"]');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    assert.strictEqual(structItem.members[1].name, 'name');
    assert.strictEqual(structItem.members[1].type, 'Person["age" | "name"]');
    assert.strictEqual(structItem.members[1].arraySize, 0);
    assert.strictEqual(structItem.members[2].name, 'test');
    assert.strictEqual(structItem.members[2].type, 'Person[keyof Person]');
    assert.strictEqual(structItem.members[2].arraySize, 0);
    assert.strictEqual(structItem.members[3].name, 'obj');
    assert.strictEqual(structItem.members[3].type, 'Person[AliveOrName]');
    assert.strictEqual(structItem.members[3].arraySize, 0);
    assert.strictEqual(structItem.members[4].name, 'amo');
    assert.strictEqual(structItem.members[4].type, 'typeof MyArray[number]');
    assert.strictEqual(structItem.members[4].arraySize, 0);
    assert.strictEqual(structItem.members[5].name, 'topy');
    assert.strictEqual(structItem.members[5].type, 'Person[pair]');
    assert.strictEqual(structItem.members[5].arraySize, 0);
  });

  //20, 测试 parseStruct 条件类型情况
  test('parseStruct_ts_test_20', () => {
    let teststruct = `interface OTC {
      pair: Dog extends Animal ? number : string;
      name: T extends number ? IdLabel : NameLabel;
      test: T extends { message: unknown };
      obj: Type extends Array<infer Item> ? Item : Type;
      oamp: Type extends any ? Type[] : never;
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 0);
    assert.strictEqual(structItem.members.length, 5);
    assert.strictEqual(structItem.members[0].name, 'pair');
    assert.strictEqual(structItem.members[0].type, 'Dog extends Animal ? number : string');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    assert.strictEqual(structItem.members[1].name, 'name');
    assert.strictEqual(structItem.members[1].type, 'T extends number ? IdLabel : NameLabel');
    assert.strictEqual(structItem.members[1].arraySize, 0);
    assert.strictEqual(structItem.members[2].name, 'test');
    assert.strictEqual(structItem.members[2].type, 'T extends { message: unknown }');
    assert.strictEqual(structItem.members[2].arraySize, 0);
    assert.strictEqual(structItem.members[3].name, 'obj');
    assert.strictEqual(structItem.members[3].type, 'Type extends Array<infer Item> ? Item : Type');
    assert.strictEqual(structItem.members[3].arraySize, 0);
    assert.strictEqual(structItem.members[4].name, 'oamp');
    assert.strictEqual(structItem.members[4].type, 'Type extends any ? Type[] : never');
    assert.strictEqual(structItem.members[4].arraySize, 0);

  });

  //21, 测试 parseStruct 映射类型情况
  test('parseStruct_ts_test_21', () => {
    let teststruct = `interface OTC {
      [key: string]: boolean | Horse;
      [Property in keyof Type]: boolean;
      [Property in keyof Type]-?: Type[Property];
      [Properties in keyof Type as NewKeyType]: Type[Properties];
      [Property in keyof Type as \`get\${Capitalize<string & Property>}\`]: () => Type[Property];
      [Property in keyof Type as Exclude<Property, "kind">]: Type[Property];
      [E in Events as E["kind"]]: (event: E) => void;
      [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 0);
    assert.strictEqual(structItem.members.length, 1);
    assert.strictEqual(structItem.members[0].name, '[Property in keyof');
    assert.strictEqual(structItem.members[0].type, 'any');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    // assert.strictEqual(structItem.members[1].name, 'boolean');
    // assert.strictEqual(structItem.members[1].type, 'void');
    // assert.strictEqual(structItem.members[1].arraySize, 0);
    // assert.strictEqual(structItem.members[2].name, 'Type');
    // assert.strictEqual(structItem.members[2].type, 'void');
    // assert.strictEqual(structItem.members[2].arraySize, 0);
  });

  //22, 测试 parseStruct 模板字面类型情况
  test('parseStruct_ts_test_22', () => {
    let teststruct = `interface OTC {
      pair: "world";
      name: "welcome_email" | "email_heading";
       on<Key extends string & keyof Type>
        (eventName: \`\${Key}Changed\`, callback: (newValue: Type[Key]) => void ): void;
      ShoutyGreeting: Uppercase<Greeting>;
      ASCIICacheKey<Str extends string> = \`ID-\${Uppercase<Str>}\`
      MainID: ASCIICacheKey<"my_app">
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 2);
    assert.strictEqual(structItem.functions[0].name, 'on');
    assert.strictEqual(structItem.functions[0].returns, 'void');
    assert.strictEqual(structItem.functions[1].name, 'ASCIICacheKey');
    assert.strictEqual(structItem.functions[1].returns, 'void');

    assert.strictEqual(structItem.members.length, 3);
    assert.strictEqual(structItem.members[0].name, 'pair');
    assert.strictEqual(structItem.members[0].type, '"world"');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    assert.strictEqual(structItem.members[1].name, 'name');
    assert.strictEqual(structItem.members[1].type, '"welcome_email" | "email_heading"');
    assert.strictEqual(structItem.members[1].arraySize, 0);
    assert.strictEqual(structItem.members[2].name, 'ShoutyGreeting');
    assert.strictEqual(structItem.members[2].type, 'Uppercase<Greeting>');
    assert.strictEqual(structItem.members[2].arraySize, 0);

  });

  //23, 测试 parseStruct 内在字符串操作类型情况
  test('parseStruct_ts_test_23', () => {
    let teststruct = `interface OTC {
      ShoutyGreeting: Uppercase<"Greeting">;
      QuietGreeting: Lowercase<"Greeting">;
      Greeting: Capitalize<"LowercaseGreeting">;
      UncomfortableGreeting: Uncapitalize<"UppercaseGreeting">;
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 0);
    assert.strictEqual(structItem.members.length, 4);
    assert.strictEqual(structItem.members[0].name, 'ShoutyGreeting');
    assert.strictEqual(structItem.members[0].type, 'Uppercase<"Greeting">');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    assert.strictEqual(structItem.members[1].name, 'QuietGreeting');
    assert.strictEqual(structItem.members[1].type, 'Lowercase<"Greeting">');
    assert.strictEqual(structItem.members[1].arraySize, 0);
    assert.strictEqual(structItem.members[2].name, 'Greeting');
    assert.strictEqual(structItem.members[2].type, 'Capitalize<"LowercaseGreeting">');
    assert.strictEqual(structItem.members[2].arraySize, 0);
    assert.strictEqual(structItem.members[3].name, 'UncomfortableGreeting');
    assert.strictEqual(structItem.members[3].type, 'Uncapitalize<"UppercaseGreeting">');
    assert.strictEqual(structItem.members[3].arraySize, 0);

  });

  //24, 测试 parseStruct export情况
  test('parseStruct_ts_test_24', () => {
    let teststruct = `export interface OTC {
        len: number;
        name: string;
        contruct(a: number): void;
        deconstruct(): void;
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 2);
    assert.strictEqual(structItem.functions[0].name, 'contruct');
    assert.strictEqual(structItem.functions[0].returns, 'void');
    assert.strictEqual(structItem.functions[0].parameters.length, 1);
    assert.strictEqual(structItem.functions[0].parameters[0].name, 'a');
    assert.strictEqual(structItem.functions[0].parameters[0].type, 'number');
    assert.strictEqual(structItem.functions[0].parameters[0].arraySize, 0);
    assert.strictEqual(structItem.functions[1].name, 'deconstruct');
    assert.strictEqual(structItem.functions[1].returns, 'void');

    assert.strictEqual(structItem.members.length, 2);
    assert.strictEqual(structItem.members[0].name, 'len');
    assert.strictEqual(structItem.members[0].type, 'number');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    assert.strictEqual(structItem.members[1].name, 'name');
    assert.strictEqual(structItem.members[1].type, 'string');
    assert.strictEqual(structItem.members[0].arraySize, 0);
  });

  //25, 测试 parseStruct 库文件情况
  test('parseStruct_ts_test_25', () => {
    let teststruct = `interface OTC {
        len: require("mylib");
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 0);

    assert.strictEqual(structItem.members.length, 1);
    assert.strictEqual(structItem.members[0].name, 'len');
    assert.strictEqual(structItem.members[0].type, 'require');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    
  });

  //26, 测试 parseStruct declare namespace 情况
  test('parseStruct_ts_test_26', () => {
    let teststruct = `declare namespace {
      export interface OTC {
        len: number;
        name: string;
        contruct(a: number): void;
        deconstruct() : void;
      }
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 2);
    assert.strictEqual(structItem.functions[0].name, 'contruct');
    assert.strictEqual(structItem.functions[0].returns, 'void');
    assert.strictEqual(structItem.functions[0].parameters.length, 1);
    assert.strictEqual(structItem.functions[0].parameters[0].name, 'a');
    assert.strictEqual(structItem.functions[0].parameters[0].type, 'number');
    assert.strictEqual(structItem.functions[0].parameters[0].arraySize, 0);
    assert.strictEqual(structItem.functions[1].name, 'deconstruct');
    assert.strictEqual(structItem.functions[1].returns, 'void');

    assert.strictEqual(structItem.members.length, 2);
    assert.strictEqual(structItem.members[0].name, 'len');
    assert.strictEqual(structItem.members[0].type, 'number');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    assert.strictEqual(structItem.members[1].name, 'name');
    assert.strictEqual(structItem.members[1].type, 'string');
    assert.strictEqual(structItem.members[0].arraySize, 0);
  });

  //27, 测试 parseStruct 两个类extend 情况
  test('parseStruct_ts_test_27', () => {
    let teststruct = `declare namespace {
      export interface OTC {
        len: number;
        name: string;
        contruct(a: number) : void;
        deconstruct() : void;
      }
      export interface OTC2 extend OTC {
        len2: number;
        name2: string;
        contruct2(a: number) : void;
        deconstruct2() : void;
      }
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 2);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 2);
    assert.strictEqual(structItem.functions[0].name, 'contruct');
    assert.strictEqual(structItem.functions[0].returns, 'void');
    assert.strictEqual(structItem.functions[0].parameters.length, 1);
    assert.strictEqual(structItem.functions[0].parameters[0].name, 'a');
    assert.strictEqual(structItem.functions[0].parameters[0].type, 'number');
    assert.strictEqual(structItem.functions[0].parameters[0].arraySize, 0);
    assert.strictEqual(structItem.functions[1].name, 'deconstruct');
    assert.strictEqual(structItem.functions[1].returns, 'void');

    assert.strictEqual(structItem.members.length, 2);
    assert.strictEqual(structItem.members[0].name, 'len');
    assert.strictEqual(structItem.members[0].type, 'number');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    assert.strictEqual(structItem.members[1].name, 'name');
    assert.strictEqual(structItem.members[1].type, 'string');
    assert.strictEqual(structItem.members[1].arraySize, 0);


    structItem = structObjList.structs[1];
    assert.strictEqual(structItem.name, 'OTC2');
    assert.strictEqual(structItem.functions.length, 0);
  });

  //28, 测试 parseStruct 两个类不同 情况
  test('parseStruct_ts_test_28', () => {
    let teststruct = `declare namespace {
      export interface OTC {
        len: number;
        name: string;
        contruct(a: number) : void;
        deconstruct() : void;
      }
      export interface OTC2 {
        len2: number;
        name2: string;
        contruct2(a: number) : void;
        deconstruct2() : void;
      }
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 2);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 2);
    assert.strictEqual(structItem.functions[0].name, 'contruct');
    assert.strictEqual(structItem.functions[0].returns, 'void');
    assert.strictEqual(structItem.functions[0].parameters.length, 1);
    assert.strictEqual(structItem.functions[0].parameters[0].name, 'a');
    assert.strictEqual(structItem.functions[0].parameters[0].type, 'number');
    assert.strictEqual(structItem.functions[0].parameters[0].arraySize, 0);
    assert.strictEqual(structItem.functions[1].name, 'deconstruct');
    assert.strictEqual(structItem.functions[1].returns, 'void');

    assert.strictEqual(structItem.members.length, 2);
    assert.strictEqual(structItem.members[0].name, 'len');
    assert.strictEqual(structItem.members[0].type, 'number');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    assert.strictEqual(structItem.members[1].name, 'name');
    assert.strictEqual(structItem.members[1].type, 'string');
    assert.strictEqual(structItem.members[1].arraySize, 0);


    structItem = structObjList.structs[1];
    assert.strictEqual(structItem.name, 'OTC2');
    assert.strictEqual(structItem.functions.length, 2);
    assert.strictEqual(structItem.functions[0].name, 'contruct2');
    assert.strictEqual(structItem.functions[0].returns, 'void');
    assert.strictEqual(structItem.functions[0].parameters.length, 1);
    assert.strictEqual(structItem.functions[0].parameters[0].name, 'a');
    assert.strictEqual(structItem.functions[0].parameters[0].type, 'number');
    assert.strictEqual(structItem.functions[0].parameters[0].arraySize, 0);
    assert.strictEqual(structItem.functions[1].name, 'deconstruct2');
    assert.strictEqual(structItem.functions[1].returns, 'void');

    assert.strictEqual(structItem.members.length, 2);
    assert.strictEqual(structItem.members[0].name, 'len2');
    assert.strictEqual(structItem.members[0].type, 'number');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    assert.strictEqual(structItem.members[1].name, 'name2');
    assert.strictEqual(structItem.members[1].type, 'string');
    assert.strictEqual(structItem.members[1].arraySize, 0);

  });

  // 异常和错误用例
  //41, 测试 parseStruct 名字有下划线情况
  test('parseStruct_ts_test_41', () => {
    let teststruct = `interface _TEST_T {
        len: number;
        name: string;
        contruct(a: number): void;
        deconstruct() : void;
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, '_TEST_T');
    assert.strictEqual(structItem.functions.length, 2);
    assert.strictEqual(structItem.functions[0].name, 'contruct');
    assert.strictEqual(structItem.functions[0].returns, 'void');
    assert.strictEqual(structItem.functions[0].parameters.length, 1);
    assert.strictEqual(structItem.functions[0].parameters[0].name, 'a');
    assert.strictEqual(structItem.functions[0].parameters[0].type, 'number');
    assert.strictEqual(structItem.functions[0].parameters[0].arraySize, 0);
    assert.strictEqual(structItem.functions[1].name, 'deconstruct');
    assert.strictEqual(structItem.functions[1].returns, 'void');

    assert.strictEqual(structItem.members.length, 2);
    assert.strictEqual(structItem.members[0].name, 'len');
    assert.strictEqual(structItem.members[0].type, 'number');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    assert.strictEqual(structItem.members[1].name, 'name');
    assert.strictEqual(structItem.members[1].type, 'string');
    assert.strictEqual(structItem.members[0].arraySize, 0);
  });

  //42, 测试 parseStruct 单行情况
  test('parseStruct_ts_test_42', () => {
    let teststruct = `interface OTC { len: number; contruct(a: number) : void; };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.members.length, 1);
    assert.strictEqual(structItem.members[0].name, 'len');
    assert.strictEqual(structItem.members[0].type, 'number');
    
    assert.strictEqual(structItem.functions.length, 1);
    assert.strictEqual(structItem.functions[0].name, 'contruct');
    assert.strictEqual(structItem.functions[0].returns, 'void');
    assert.strictEqual(structItem.functions[0].parameters.length, 1);
    assert.strictEqual(structItem.functions[0].parameters[0].name, 'a');
    assert.strictEqual(structItem.functions[0].parameters[0].type, 'number');
    assert.strictEqual(structItem.functions[0].parameters[0].arraySize, 0);
    
  });

  //43, 测试 parseStruct 单行模板类模板函数情况
  test('parseStruct_ts_test_43', () => {
    let teststruct = `interface OTC<Type> {len: Type; add(a: Type) : void;};`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 1);
    assert.strictEqual(structItem.functions[0].name, 'add');
    assert.strictEqual(structItem.functions[0].returns, 'void');
    assert.strictEqual(structItem.functions[0].parameters.length, 1);
    assert.strictEqual(structItem.functions[0].parameters[0].name, 'a');
    assert.strictEqual(structItem.functions[0].parameters[0].type, 'Type');
    assert.strictEqual(structItem.functions[0].parameters[0].arraySize, 0);

    assert.strictEqual(structItem.members.length, 1);
    assert.strictEqual(structItem.members[0].name, 'len');
    assert.strictEqual(structItem.members[0].type, 'Type');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    
  });

  //44, 测试 parseStruct 继承没有名字情况
  test('parseStruct_ts_test_44', () => {
    let teststruct = `interface OTC extends {
        len: number;
        name: string;
        contruct(a: number): void;
        deconstruct() : void;
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 0);
    assert.strictEqual(structItem.members.length, 0);
  });

  //45, 测试 parseStruct 中文名字和扩展情况
  test('parseStruct_ts_test_45', () => {
    let teststruct = `interface 中文 extends 扩展 {
        len: number[10];
        name: string[10][20];
        contruct(a: number[10][20][30]) : void;
        deconstruct() : void;
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, '中文');
    assert.strictEqual(structItem.functions.length, 2);
    assert.strictEqual(structItem.functions[0].name, 'contruct');
    assert.strictEqual(structItem.functions[0].returns, 'void');
    assert.strictEqual(structItem.functions[0].parameters.length, 1);
    assert.strictEqual(structItem.functions[0].parameters[0].name, 'a');
    assert.strictEqual(structItem.functions[0].parameters[0].type, 'number[10][20][30]');
    assert.strictEqual(structItem.functions[0].parameters[0].arraySize, 0);
    assert.strictEqual(structItem.functions[1].name, 'deconstruct');
    assert.strictEqual(structItem.functions[1].returns, 'void');

    assert.strictEqual(structItem.members.length, 2);
    assert.strictEqual(structItem.members[0].name, 'len');
    assert.strictEqual(structItem.members[0].type, 'number[10]');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    assert.strictEqual(structItem.members[1].name, 'name');
    assert.strictEqual(structItem.members[1].type, 'string[10][20]');
    assert.strictEqual(structItem.members[0].arraySize, 0);
  });

  //46, 测试 parseStruct 测试中文模板继承情况
  test('parseStruct_ts_test_46', () => {
    let teststruct = `interface OTC <类型 extends 基础> {
        len: Type;
        name: Type[10][20];
        contruct(a: Type[10][20][30]) : void;
        deconstruct(): void;
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 2);
    assert.strictEqual(structItem.functions[0].name, 'contruct');
    assert.strictEqual(structItem.functions[0].returns, 'void');
    assert.strictEqual(structItem.functions[0].parameters.length, 1);
    assert.strictEqual(structItem.functions[0].parameters[0].name, 'a');
    assert.strictEqual(structItem.functions[0].parameters[0].type, 'Type[10][20][30]');
    assert.strictEqual(structItem.functions[0].parameters[0].arraySize, 0);
    assert.strictEqual(structItem.functions[1].name, 'deconstruct');
    assert.strictEqual(structItem.functions[1].returns, 'void');

    assert.strictEqual(structItem.members.length, 2);
    assert.strictEqual(structItem.members[0].name, 'len');
    assert.strictEqual(structItem.members[0].type, 'Type');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    assert.strictEqual(structItem.members[1].name, 'name');
    assert.strictEqual(structItem.members[1].type, 'Type[10][20]');
    assert.strictEqual(structItem.members[0].arraySize, 0);
  });

  //47, 测试 parseStruct 测试选择少类型情况
  test('parseStruct_ts_test_47', () => {
    let teststruct = `interface OTC <Type extends Basic> {
        len: Type;
        name? Type[10][20];
        contruct(a?: Type[10][20][30]): void;
        deconstruct(): void;
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 0);

    assert.strictEqual(structItem.members.length, 2);
    assert.strictEqual(structItem.members[0].name, 'len');
    assert.strictEqual(structItem.members[0].type, 'Type');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    assert.strictEqual(structItem.members[1].name, 'name');
    assert.strictEqual(structItem.members[1].type, 'any');
    assert.strictEqual(structItem.members[1].arraySize, 0);
    
  });

  //48, 测试 parseStruct 测试注释选择情况
  test('parseStruct_ts_test_48', () => {
    let teststruct = `/* 
      interface OTC {
        len: Type; 
        name?: Type[10][20];  
        contruct(a?: Type[10][20][30]) : void;
        deconstruct() : void;
    } */;`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 0);
    
  });

  //49, 测试 parseStruct 空类情况
  test('parseStruct_ts_test_49', () => {
    let teststruct = `interface OTC  {}; interface OTC2  {};`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 2);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    structItem = structObjList.structs[1];
    assert.strictEqual(structItem.name, 'OTC2');
  });

  //50, 测试 parseStruct 少分号情况
  test('parseStruct_ts_test_50', () => {
    let teststruct = `interface OTC {
        aname: string
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 0);
    assert.strictEqual(structItem.members.length, 1);
    assert.strictEqual(structItem.members[0].name, 'aname');
    assert.strictEqual(structItem.members[0].type, 'string');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    
  });

  //51, 测试 parseStruct 扩展类型少括号情况
  test('parseStruct_ts_test_51', () => {
    let teststruct = `interface OTC {
        const cc: ColorfulCircle = {
          color: "red",
          radius: 42,
        
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 0);
    assert.strictEqual(structItem.members.length, 2);
    assert.strictEqual(structItem.members[0].name, 'const');
    assert.strictEqual(structItem.members[0].type, 'any');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    assert.strictEqual(structItem.members[1].name, 'cc');
    assert.strictEqual(structItem.members[1].type, 'ColorfulCircle');
    assert.strictEqual(structItem.members[1].arraySize, 0);
  });

  //52, 测试 parseStruct 交集类型错误情况
  test('parseStruct_ts_test_52', () => {
    let teststruct = `interface OTC {
        const cc: Colorful & ;
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 0);
    assert.strictEqual(structItem.members.length, 2);
    assert.strictEqual(structItem.members[0].name, 'const');
    assert.strictEqual(structItem.members[0].type, 'any');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    assert.strictEqual(structItem.members[1].name, 'cc');
    assert.strictEqual(structItem.members[1].type, 'Colorful &');
    assert.strictEqual(structItem.members[1].arraySize, 0);
    
  });

  //53, 测试 parseStruct 泛型对象类型少尖括号情况
  test('parseStruct_ts_test_53', () => {
    let teststruct = `interface OTC {
        const cc: any;
        readonly contents: unknown;
        cont: "hello world";
        ents: Type;
        val: OrNull<OneOrMany<Type>;

    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 0);
    assert.strictEqual(structItem.members.length, 6);
    assert.strictEqual(structItem.members[0].name, 'const');
    assert.strictEqual(structItem.members[0].type, 'any');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    assert.strictEqual(structItem.members[1].name, 'cc');
    assert.strictEqual(structItem.members[1].type, 'any');
    assert.strictEqual(structItem.members[1].arraySize, 0);
    assert.strictEqual(structItem.members[2].name, 'contents');
    assert.strictEqual(structItem.members[2].type, 'unknown');
    assert.strictEqual(structItem.members[2].arraySize, 0);
    assert.strictEqual(structItem.members[3].name, 'cont');
    assert.strictEqual(structItem.members[3].type, '"hello world"');
    assert.strictEqual(structItem.members[3].arraySize, 0);
    assert.strictEqual(structItem.members[4].name, 'ents');
    assert.strictEqual(structItem.members[4].type, 'Type');
    assert.strictEqual(structItem.members[4].arraySize, 0);
    assert.strictEqual(structItem.members[5].name, 'val');
    assert.strictEqual(structItem.members[5].type, 'OrNull<OneOrMany<Type>');
    assert.strictEqual(structItem.members[5].arraySize, 0);
  });

  //54, 测试 parseStruct readonly array对象少]类型情况
  test('parseStruct_ts_test_54', () => {
    let teststruct = `interface OTC {
        const roArray: ReadonlyArray<string> = ["red", "green", "blue";
        readonly contents: roArray.slice();
        x: readonly string[] = [;
        a: pair[0];
        const [x, y, z] = coord;
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 0);
    assert.strictEqual(structItem.members.length, 4);
    assert.strictEqual(structItem.members[0].name, 'const');
    assert.strictEqual(structItem.members[0].type, 'any');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    assert.strictEqual(structItem.members[1].name, 'roArray');
    assert.strictEqual(structItem.members[1].type, 'ReadonlyArray<string>');
    assert.strictEqual(structItem.members[1].arraySize, 0);
    assert.strictEqual(structItem.members[2].name, 'const');
    assert.strictEqual(structItem.members[2].type, 'any');
    assert.strictEqual(structItem.members[2].arraySize, 0);
    assert.strictEqual(structItem.members[3].name, 'coord');
    assert.strictEqual(structItem.members[3].type, 'any');
    assert.strictEqual(structItem.members[3].arraySize, 0);
  });

  //55, 测试 parseStruct 剩余元素类型情况
  test('parseStruct_ts_test_55', () => {
    let teststruct = `interface OTC {
      const a: StringNumberBooleans = ["hello", ;
      const b: StringNumberBooleans = ["beautiful", 2, true;
      const c: StringNumberBooleans = ["world", 3, true, false, true, false, ...;
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 0);
    assert.strictEqual(structItem.members.length, 6);
    assert.strictEqual(structItem.members[0].name, 'const');
    assert.strictEqual(structItem.members[0].type, 'any');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    assert.strictEqual(structItem.members[1].name, 'a');
    assert.strictEqual(structItem.members[1].type, 'StringNumberBooleans');
    assert.strictEqual(structItem.members[1].arraySize, 0);
    assert.strictEqual(structItem.members[2].name, 'const');
    assert.strictEqual(structItem.members[2].type, 'any');
    assert.strictEqual(structItem.members[2].arraySize, 0);
    assert.strictEqual(structItem.members[3].name, 'b');
    assert.strictEqual(structItem.members[3].type, 'StringNumberBooleans');
    assert.strictEqual(structItem.members[3].arraySize, 0);
    assert.strictEqual(structItem.members[4].name, 'const');
    assert.strictEqual(structItem.members[4].type, 'any');
    assert.strictEqual(structItem.members[4].arraySize, 0);
    assert.strictEqual(structItem.members[5].name, 'c');
    assert.strictEqual(structItem.members[5].type, 'StringNumberBooleans');
    assert.strictEqual(structItem.members[5].arraySize, 0);
  });

  //56, 测试 parseStruct 元祖类型少类型情况
  test('parseStruct_ts_test_56', () => {
    let teststruct = `interface OTC {
      pair: readonly [string, ];
      [x, y]: [number, ];
      const c: [3, 4] as ;
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 0);
    assert.strictEqual(structItem.members.length, 4);
    assert.strictEqual(structItem.members[0].name, 'pair');
    assert.strictEqual(structItem.members[0].type, 'readonly [string, ]');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    assert.strictEqual(structItem.members[1].name, 'const');
    assert.strictEqual(structItem.members[1].type, 'any');
    assert.strictEqual(structItem.members[1].arraySize, 0);
    assert.strictEqual(structItem.members[2].name, 'c');
    assert.strictEqual(structItem.members[2].type, '[3, 4]');
    assert.strictEqual(structItem.members[2].arraySize, 0);
    assert.strictEqual(structItem.members[3].name, 'as');
    assert.strictEqual(structItem.members[3].type, 'any');
    assert.strictEqual(structItem.members[3].arraySize, 0);
  });

  //57, 测试 parseStruct keyof少类型情况
  test('parseStruct_ts_test_57', () => {
    let teststruct = `interface OTC {
      pair: keyof ;
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 0);
    assert.strictEqual(structItem.members.length, 1);
    assert.strictEqual(structItem.members[0].name, 'pair');
    assert.strictEqual(structItem.members[0].type, 'keyof');
    assert.strictEqual(structItem.members[0].arraySize, 0);
  });

  //58, 测试 parseStruct typeof少类型情况
  test('parseStruct_ts_test_58', () => {
    let teststruct = `interface OTC {
      pair: typeof "Hello world";
      name: typeof ;
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 0);
    assert.strictEqual(structItem.members.length, 3);
    assert.strictEqual(structItem.members[0].name, 'pair');
    assert.strictEqual(structItem.members[0].type, 'typeof');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    assert.strictEqual(structItem.members[1].name, '"Hello world"');
    assert.strictEqual(structItem.members[1].type, 'any');
    assert.strictEqual(structItem.members[1].arraySize, 0);
    assert.strictEqual(structItem.members[2].name, 'name');
    assert.strictEqual(structItem.members[2].type, 'typeof');
    assert.strictEqual(structItem.members[2].arraySize, 0);
  });

  //59, 测试 parseStruct 索引访问少]类型情况
  test('parseStruct_ts_test_59', () => {
    let teststruct = `interface OTC {
      pair: Person["age];
      name: Person["age" | "name";
      test: Person[keyof Person;
      obj: Person[AliveOrName;
      amo: typeof MyArray[number;
      topy: Person[pair;
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 0);
    assert.strictEqual(structItem.members.length, 6);
    assert.strictEqual(structItem.members[0].name, 'pair');
    assert.strictEqual(structItem.members[0].type, 'Person["age];');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    assert.strictEqual(structItem.members[1].name, 'name');
    assert.strictEqual(structItem.members[1].type, 'Person["age" | "name"');
    assert.strictEqual(structItem.members[1].arraySize, 0);
    assert.strictEqual(structItem.members[2].name, 'test');
    assert.strictEqual(structItem.members[2].type, 'Person[keyof Person');
    assert.strictEqual(structItem.members[2].arraySize, 0);
    assert.strictEqual(structItem.members[3].name, 'obj');
    assert.strictEqual(structItem.members[3].type, 'Person[AliveOrName');
    assert.strictEqual(structItem.members[3].arraySize, 0);
    assert.strictEqual(structItem.members[4].name, 'amo');
    assert.strictEqual(structItem.members[4].type, 'typeof MyArray[number');
    assert.strictEqual(structItem.members[4].arraySize, 0);
    assert.strictEqual(structItem.members[5].name, 'topy');
    assert.strictEqual(structItem.members[5].type, 'Person[pair');
    assert.strictEqual(structItem.members[5].arraySize, 0);
  });

  //60, 测试 parseStruct 条件类型少选项情况
  test('parseStruct_ts_test_60', () => {
    let teststruct = `interface OTC {
      pair: Dog extends Animal ? number ;
      name: T extends number ? IdLabel ;
      test: T extends { message: unknown };
      obj: Type extends Array<infer Item> ? Item :;
      oamp: Type extends any ?  : never;
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 0);
    assert.strictEqual(structItem.members.length, 5);
    assert.strictEqual(structItem.members[0].name, 'pair');
    assert.strictEqual(structItem.members[0].type, 'Dog extends Animal ? number');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    assert.strictEqual(structItem.members[1].name, 'name');
    assert.strictEqual(structItem.members[1].type, 'T extends number ? IdLabel');
    assert.strictEqual(structItem.members[1].arraySize, 0);
    assert.strictEqual(structItem.members[2].name, 'test');
    assert.strictEqual(structItem.members[2].type, 'T extends { message: unknown }');
    assert.strictEqual(structItem.members[2].arraySize, 0);
    assert.strictEqual(structItem.members[3].name, 'obj');
    assert.strictEqual(structItem.members[3].type, 'Type extends Array<infer Item> ? Item :');
    assert.strictEqual(structItem.members[3].arraySize, 0);
    assert.strictEqual(structItem.members[4].name, 'oamp');
    assert.strictEqual(structItem.members[4].type, 'Type extends any ?  : never');
    assert.strictEqual(structItem.members[4].arraySize, 0);

  });

  //61, 测试 parseStruct 映射少类型情况
  test('parseStruct_ts_test_61', () => {
    let teststruct = `interface OTC {
      [key: string]: boolean | ;
      [Property in keyof Type]: ;
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 0);
    assert.strictEqual(structItem.members.length, 1);
    assert.strictEqual(structItem.members[0].name, '[Property in keyof');
    assert.strictEqual(structItem.members[0].type, 'any');
    assert.strictEqual(structItem.members[0].arraySize, 0);
  
  });

  //62, 测试 parseStruct 模板字面少“类型情况
  test('parseStruct_ts_test_62', () => {
    let teststruct = `interface OTC {
      pair: 1;
      name: "welcome_email" | "email_heading;
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 0);
    
    assert.strictEqual(structItem.members.length, 2);
    assert.strictEqual(structItem.members[0].name, 'pair');
    assert.strictEqual(structItem.members[0].type, '1');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    assert.strictEqual(structItem.members[1].name, 'name');
    assert.strictEqual(structItem.members[1].type, '"welcome_email" | "email_heading;');
    assert.strictEqual(structItem.members[1].arraySize, 0);

  });

  //63, 测试 parseStruct 内在字符串操作类型情况
  test('parseStruct_ts_test_63', () => {
    let teststruct = `interface OTC {
      ShoutyGreeting: Uppercase<1>;
      QuietGreeting: Lowercase<true>;
      Greeting: Capitalize<unknown>;
      UncomfortableGreeting: Uncapitalize<undefined>;
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 0);
    assert.strictEqual(structItem.members.length, 4);
    assert.strictEqual(structItem.members[0].name, 'ShoutyGreeting');
    assert.strictEqual(structItem.members[0].type, 'Uppercase<1>');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    assert.strictEqual(structItem.members[1].name, 'QuietGreeting');
    assert.strictEqual(structItem.members[1].type, 'Lowercase<true>');
    assert.strictEqual(structItem.members[1].arraySize, 0);
    assert.strictEqual(structItem.members[2].name, 'Greeting');
    assert.strictEqual(structItem.members[2].type, 'Capitalize<unknown>');
    assert.strictEqual(structItem.members[2].arraySize, 0);
    assert.strictEqual(structItem.members[3].name, 'UncomfortableGreeting');
    assert.strictEqual(structItem.members[3].type, 'Uncapitalize<undefined>');
    assert.strictEqual(structItem.members[3].arraySize, 0);

  });

  //64, 测试 parseStruct export 在一行情况
  test('parseStruct_ts_test_64', () => {
    let teststruct = `export interface OTC {len: number;name: string; contruct(a: number): void;deconstruct(): void;};`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 2);
    assert.strictEqual(structItem.functions[0].name, 'contruct');
    assert.strictEqual(structItem.functions[0].returns, 'void');
    assert.strictEqual(structItem.functions[0].parameters.length, 1);
    assert.strictEqual(structItem.functions[0].parameters[0].name, 'a');
    assert.strictEqual(structItem.functions[0].parameters[0].type, 'number');
    assert.strictEqual(structItem.functions[0].parameters[0].arraySize, 0);
    assert.strictEqual(structItem.functions[1].name, 'deconstruct');
    assert.strictEqual(structItem.functions[1].returns, 'void');

    assert.strictEqual(structItem.members.length, 2);
    assert.strictEqual(structItem.members[0].name, 'len');
    assert.strictEqual(structItem.members[0].type, 'number');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    assert.strictEqual(structItem.members[1].name, 'name');
    assert.strictEqual(structItem.members[1].type, 'string');
    assert.strictEqual(structItem.members[0].arraySize, 0);
  });

  //65, 测试 parseStruct 库文件在一行情况
  test('parseStruct_ts_test_65', () => {
    let teststruct = `interface OTC { len: require("mylib");};`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 0);

    assert.strictEqual(structItem.members.length, 1);
    assert.strictEqual(structItem.members[0].name, 'len');
    assert.strictEqual(structItem.members[0].type, 'require');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    
  });

  //66, 测试 parseStruct declare namespace 情况
  test('parseStruct_ts_test_66', () => {
    let teststruct = `declare namespace { export interface OTC { len: number; name: string; contruct(a: number): void;}};`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 1);
    assert.strictEqual(structItem.functions[0].name, 'contruct');
    assert.strictEqual(structItem.functions[0].returns, 'void');
    assert.strictEqual(structItem.functions[0].parameters.length, 1);
    assert.strictEqual(structItem.functions[0].parameters[0].name, 'a');
    assert.strictEqual(structItem.functions[0].parameters[0].type, 'number');
    assert.strictEqual(structItem.functions[0].parameters[0].arraySize, 0);

    assert.strictEqual(structItem.members.length, 2);
    assert.strictEqual(structItem.members[0].name, 'len');
    assert.strictEqual(structItem.members[0].type, 'number');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    assert.strictEqual(structItem.members[1].name, 'name');
    assert.strictEqual(structItem.members[1].type, 'string');
    assert.strictEqual(structItem.members[0].arraySize, 0);
  });

  //67, 测试 parseStruct extend自己 情况
  test('parseStruct_ts_test_67', () => {
    let teststruct = `declare namespace {
      export interface OTC2 extend OTC2 {
        len2: number;
        name2: string;
        contruct2(a: number): void;
        deconstruct2(): void;
      }
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
  
    assert.strictEqual(structItem.name, 'OTC2');
    assert.strictEqual(structItem.functions.length, 0);
  });

  //68, 测试 parseStruct 两个类不同 情况
  test('parseStruct_ts_test_68', () => {
    let teststruct = `declare namespace {
      export interface OTC {len: number;name: string; contruct(a: number): void;deconstruct(): void;}
      export interface OTC2 {len2: number;name2: string; contruct2(a: number): void; deconstruct2(): void;}
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 2);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 2);
    assert.strictEqual(structItem.functions[0].name, 'contruct');
    assert.strictEqual(structItem.functions[0].returns, 'void');
    assert.strictEqual(structItem.functions[0].parameters.length, 1);
    assert.strictEqual(structItem.functions[0].parameters[0].name, 'a');
    assert.strictEqual(structItem.functions[0].parameters[0].type, 'number');
    assert.strictEqual(structItem.functions[0].parameters[0].arraySize, 0);
    assert.strictEqual(structItem.functions[1].name, 'deconstruct');
    assert.strictEqual(structItem.functions[1].returns, 'void');

    assert.strictEqual(structItem.members.length, 2);
    assert.strictEqual(structItem.members[0].name, 'len');
    assert.strictEqual(structItem.members[0].type, 'number');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    assert.strictEqual(structItem.members[1].name, 'name');
    assert.strictEqual(structItem.members[1].type, 'string');
    assert.strictEqual(structItem.members[1].arraySize, 0);


    structItem = structObjList.structs[1];
    assert.strictEqual(structItem.name, 'OTC2');
    assert.strictEqual(structItem.functions.length, 2);
    assert.strictEqual(structItem.functions[0].name, 'contruct2');
    assert.strictEqual(structItem.functions[0].returns, 'void');
    assert.strictEqual(structItem.functions[0].parameters.length, 1);
    assert.strictEqual(structItem.functions[0].parameters[0].name, 'a');
    assert.strictEqual(structItem.functions[0].parameters[0].type, 'number');
    assert.strictEqual(structItem.functions[0].parameters[0].arraySize, 0);
    assert.strictEqual(structItem.functions[1].name, 'deconstruct2');
    assert.strictEqual(structItem.functions[1].returns, 'void');

    assert.strictEqual(structItem.members.length, 2);
    assert.strictEqual(structItem.members[0].name, 'len2');
    assert.strictEqual(structItem.members[0].type, 'number');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    assert.strictEqual(structItem.members[1].name, 'name2');
    assert.strictEqual(structItem.members[1].type, 'string');
    assert.strictEqual(structItem.members[1].arraySize, 0);

  });

  //69, 测试 parseStruct 特殊符号不同 情况
  test('parseStruct_ts_test_69', () => {
    let teststruct = `declare namespace {
      export interface OTC {
        public len?: number;
        private name!: string; 
        contruct(...a: number[]): void;
        deconstruct(): void;
      }
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 0);
    // assert.strictEqual(structItem.functions[0].name, 'contruct');
    // assert.strictEqual(structItem.functions[0].returns, 'void');
    // assert.strictEqual(structItem.functions[0].parameters.length, 1);
    // assert.strictEqual(structItem.functions[0].parameters[0].name, 'a');
    // assert.strictEqual(structItem.functions[0].parameters[0].type, 'Array<number>');
    // assert.strictEqual(structItem.functions[0].parameters[0].arraySize, 0);
    // assert.strictEqual(structItem.functions[1].name, 'deconstruct');
    // assert.strictEqual(structItem.functions[1].returns, 'void');

    assert.strictEqual(structItem.members.length, 1);
    assert.strictEqual(structItem.members[0].name, 'len');
    assert.strictEqual(structItem.members[0].type, 'number');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    // assert.strictEqual(structItem.members[1].name, 'name');
    // assert.strictEqual(structItem.members[1].type, 'string');
    // assert.strictEqual(structItem.members[1].arraySize, 0);

  });

  //70, 测试 parseStruct 重构 情况
  test('parseStruct_ts_test_70', () => {
    let teststruct = `declare namespace {
      export interface OTC {
        len(s: string): number;
        len(arr: any[]): number;
        len(x: any) {
          return x.length;
        }
      }
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 3);
    assert.strictEqual(structItem.functions[0].name, 'len');
    assert.strictEqual(structItem.functions[0].returns, 'number');
    assert.strictEqual(structItem.functions[0].parameters.length, 1);
    assert.strictEqual(structItem.functions[0].parameters[0].name, 's');
    assert.strictEqual(structItem.functions[0].parameters[0].type, 'string');
    assert.strictEqual(structItem.functions[0].parameters[0].arraySize, 0);
    assert.strictEqual(structItem.functions[1].name, 'len');
    assert.strictEqual(structItem.functions[1].returns, 'number');
    assert.strictEqual(structItem.functions[1].parameters.length, 1);
    assert.strictEqual(structItem.functions[1].parameters[0].name, 'arr');
    assert.strictEqual(structItem.functions[1].parameters[0].type, 'any[]');
    assert.strictEqual(structItem.functions[1].parameters[0].arraySize, 0);
    assert.strictEqual(structItem.functions[2].name, 'len');
    assert.strictEqual(structItem.functions[2].returns, 'void');
    assert.strictEqual(structItem.functions[2].parameters.length, 1);
    assert.strictEqual(structItem.functions[2].parameters[0].name, 'x');
    assert.strictEqual(structItem.functions[2].parameters[0].type, 'any');
    assert.strictEqual(structItem.functions[2].parameters[0].arraySize, 0);
    

  });

  //71, 测试 parseStruct 函数重载错误 情况
  test('parseStruct_ts_test_71', () => {
    let teststruct = `declare namespace {
      export interface OTC {
        len(s: string): number;
        len(arr: number[]): number;
        len(x: any) {
          return x.length;
        }
      }
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 3);
    assert.strictEqual(structItem.functions[0].name, 'len');
    assert.strictEqual(structItem.functions[0].returns, 'number');
    assert.strictEqual(structItem.functions[0].parameters.length, 1);
    assert.strictEqual(structItem.functions[0].parameters[0].name, 's');
    assert.strictEqual(structItem.functions[0].parameters[0].type, 'string');
    assert.strictEqual(structItem.functions[0].parameters[0].arraySize, 0);
    assert.strictEqual(structItem.functions[1].name, 'len');
    assert.strictEqual(structItem.functions[1].returns, 'number');
    assert.strictEqual(structItem.functions[1].parameters.length, 1);
    assert.strictEqual(structItem.functions[1].parameters[0].name, 'arr');
    assert.strictEqual(structItem.functions[1].parameters[0].type, 'number[]');
    assert.strictEqual(structItem.functions[1].parameters[0].arraySize, 0);
    assert.strictEqual(structItem.functions[2].name, 'len');
    assert.strictEqual(structItem.functions[2].returns, 'void');
    assert.strictEqual(structItem.functions[2].parameters.length, 1);
    assert.strictEqual(structItem.functions[2].parameters[0].name, 'x');
    assert.strictEqual(structItem.functions[2].parameters[0].type, 'any');
    assert.strictEqual(structItem.functions[2].parameters[0].arraySize, 0);

  });

  //72, 测试 parseStruct this 情况
  test('parseStruct_ts_test_72', () => {
    let teststruct = `declare namespace {
      export interface User {
        static id: number;
        const admin: boolean;
      };
      abstract interface OTC {
        protected filterUsers(filter: (this: User) => boolean): User[];
      };
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 2);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'User');
    assert.strictEqual(structItem.functions.length, 0);

    assert.strictEqual(structItem.members.length, 3);
    assert.strictEqual(structItem.members[0].name, 'id');
    assert.strictEqual(structItem.members[0].type, 'number');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    assert.strictEqual(structItem.members[1].name, 'const');
    assert.strictEqual(structItem.members[1].type, 'any');
    assert.strictEqual(structItem.members[1].arraySize, 0);
    assert.strictEqual(structItem.members[2].name, 'admin');
    assert.strictEqual(structItem.members[2].type, 'boolean');
    assert.strictEqual(structItem.members[2].arraySize, 0);

    structItem = structObjList.structs[1];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 1);
    assert.strictEqual(structItem.functions[0].name, 'filterUsers');
    assert.strictEqual(structItem.functions[0].returns, 'User[]');
    assert.strictEqual(structItem.functions[0].parameters.length, 1);
    assert.strictEqual(structItem.functions[0].parameters[0].name, 'filter');
    assert.strictEqual(structItem.functions[0].parameters[0].type, '(this: User) => boolean');
    assert.strictEqual(structItem.functions[0].parameters[0].arraySize, 0);

    assert.strictEqual(structItem.members.length, 0);

  });

  //73, 测试 parseStruct 函数可分配 情况
  test('parseStruct_ts_test_73', () => {
    let teststruct = `
    type voidFunc = () => void;
    declare namespace {
      export interface OTC {
        const f1: voidFunc = () => {
          return true;
        };

        const f2: voidFunc = () => true;

        const f3: voidFunc = function () {
          return true;
        };
      };
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'OTC');
    assert.strictEqual(structItem.functions.length, 0);

    assert.strictEqual(structItem.members.length, 6);
    assert.strictEqual(structItem.members[0].name, 'const');
    assert.strictEqual(structItem.members[0].type, 'any');
    assert.strictEqual(structItem.members[0].arraySize, 0);
    assert.strictEqual(structItem.members[1].name, 'f1');
    assert.strictEqual(structItem.members[1].type, 'voidFunc');
    assert.strictEqual(structItem.members[1].arraySize, 0);
    assert.strictEqual(structItem.members[2].name, 'const');
    assert.strictEqual(structItem.members[2].type, 'any');
    assert.strictEqual(structItem.members[2].arraySize, 0);
    assert.strictEqual(structItem.members[3].name, 'f2');
    assert.strictEqual(structItem.members[3].type, 'voidFunc');
    assert.strictEqual(structItem.members[3].arraySize, 0);
    assert.strictEqual(structItem.members[4].name, 'const');
    assert.strictEqual(structItem.members[4].type, 'any');
    assert.strictEqual(structItem.members[4].arraySize, 0);
    assert.strictEqual(structItem.members[5].name, 'f3');
    assert.strictEqual(structItem.members[5].type, 'voidFunc');
    assert.strictEqual(structItem.members[5].arraySize, 0);

  });

  //74, 测试 parseStruct 获取器，设置器 情况
  test('parseStruct_ts_test_74', () => {
    let teststruct = `
    type voidFunc = () => void;
    declare namespace {
      export interface C {
        _length = 0;
        get length() {
          return this._length;
        }
        set length(value) {
          this._length = value;
        }
      }
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 1);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'C');
    assert.strictEqual(structItem.functions.length, 0);

    assert.strictEqual(structItem.members.length, 0);
    // assert.strictEqual(structItem.members[0].name, '_length');
    // assert.strictEqual(structItem.members[0].type, 'void');
    // assert.strictEqual(structItem.members[0].arraySize, 0);

  });

  //75, 测试 parseStruct 基类继承实现 情况
  test('parseStruct_ts_test_75', () => {
    let teststruct = `
      type voidFunc = () => void;
      declare namespace {
        interface Pingable {
          ping(): void;
        }

        interface Sonar implements Pingable {
          ping() {
            console.log("ping!");
          }
        }

        interface Ball implements Pingable {
          pong() {
            console.log("pong!");
          }
        }
    };`
    let structObjList = parsets.doParseTs("test.ts", teststruct);
    assert.strictEqual(structObjList.structs.length, 3);
    let structItem = structObjList.structs[0];
    assert.strictEqual(structItem.name, 'Pingable');
    assert.strictEqual(structItem.functions.length, 1);
    assert.strictEqual(structItem.functions[0].name, 'ping');
    assert.strictEqual(structItem.functions[0].returns, 'void');
    assert.strictEqual(structItem.functions[0].parameters.length, 0);

    structItem = structObjList.structs[1];
    assert.strictEqual(structItem.name, 'Sonar');
    assert.strictEqual(structItem.functions.length, 1);
    assert.strictEqual(structItem.functions[0].name, 'ping');
    assert.strictEqual(structItem.functions[0].returns, 'void');
    assert.strictEqual(structItem.functions[0].parameters.length, 0);

    structItem = structObjList.structs[2];
    assert.strictEqual(structItem.name, 'Ball');
    assert.strictEqual(structItem.functions.length, 1);
    assert.strictEqual(structItem.functions[0].name, 'pong');
    assert.strictEqual(structItem.functions[0].returns, 'void');
    assert.strictEqual(structItem.functions[0].parameters.length, 0);

  });
})