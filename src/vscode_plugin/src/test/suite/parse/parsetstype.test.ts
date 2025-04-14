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

suite('Parse_Type_TS_Suite', () => {
  vscode.window.showInformationMessage('Start all tests.');
  
  //1, 测试 parseType 一般情况
  test('parseType_ts_test_1', () => {
    let testtype = `type Point = { 
        x: number;
        y: number; 
        draw(message: string): void;
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'Point');

    assert.strictEqual(typeItem.members.length, 2);
    assert.strictEqual(typeItem.members[0].name, 'x');
    assert.strictEqual(typeItem.members[0].type, 'number');
    assert.strictEqual(typeItem.members[1].name, 'y');
    assert.strictEqual(typeItem.members[1].type, 'number');

    assert.strictEqual(typeItem.functions.length, 1);
    assert.strictEqual(typeItem.functions[0].name, 'draw');
    assert.strictEqual(typeItem.functions[0].returns, 'void');
    assert.strictEqual(typeItem.functions[0].parameters.length, 1);
    assert.strictEqual(typeItem.functions[0].parameters[0].name, 'message');
    assert.strictEqual(typeItem.functions[0].parameters[0].type, 'string');
  });

  //2, 测试 parseType 类型覆盖情况
  test('parseType_ts_test_2', () => {
    let testtype = `type OTC = {
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
      contruct: (a: number) => void;
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
      mapstrfundef: (am: Map<string, string>)=> Map<string, string>;
      mapnumfundef: (am: Map<string, number>)=> Map<string, number>;
      mapboolfundef: (am: Map<string, boolean>)=> Map<string, boolean>;
      arraynumfundef: (am: Array<number>)=> Array<number>;
      arraystrfundef: (am: Array<string>)=> Array<string>;
      arrayboolfundef: (am: Array<boolean>)=> Array<boolean>;
      setnumfundef: (am: Set<number>)=> Set<number>;
      setstrfundef: (am: Set<string>)=> Set<string>;
      setboolfundef: (am: Set<boolean>)=> Set<boolean>;
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
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.members.length, 40);
    assert.strictEqual(typeItem.members[0].name, 'len');
    assert.strictEqual(typeItem.members[0].type, 'number');
    assert.strictEqual(typeItem.members[1].name, 'name');
    assert.strictEqual(typeItem.members[1].type, 'string');
    assert.strictEqual(typeItem.members[2].name, 'flag');
    assert.strictEqual(typeItem.members[2].type, 'boolean');
    assert.strictEqual(typeItem.members[3].name, 'obj');
    assert.strictEqual(typeItem.members[3].type, 'any');
    assert.strictEqual(typeItem.members[4].name, 'llen');
    assert.strictEqual(typeItem.members[4].type, 'number[]');
    assert.strictEqual(typeItem.members[5].name, 'lstr');
    assert.strictEqual(typeItem.members[5].type, 'string[]');
    assert.strictEqual(typeItem.members[6].name, 'lflag');
    assert.strictEqual(typeItem.members[6].type, 'boolean[]');
    assert.strictEqual(typeItem.members[7].name, 'lobj');
    assert.strictEqual(typeItem.members[7].type, 'any[]');
    assert.strictEqual(typeItem.members[8].name, 'tdef');
    assert.strictEqual(typeItem.members[8].type, 'astruct');
    assert.strictEqual(typeItem.members[9].name, 'ltdef');
    assert.strictEqual(typeItem.members[9].type, 'astruct[]');
    assert.strictEqual(typeItem.members[10].name, 'contruct');
    assert.strictEqual(typeItem.members[10].type, '(a: number) => void');
    assert.strictEqual(typeItem.members[11].name, 'funcdef');
    assert.strictEqual(typeItem.members[11].type, '() => {}');
    assert.strictEqual(typeItem.members[12].name, 'nfundef');
    assert.strictEqual(typeItem.members[12].type, '((a: number)=> number)');
    assert.strictEqual(typeItem.members[13].name, 'strfundef');
    assert.strictEqual(typeItem.members[13].type, '((a: string)=> string)');
    assert.strictEqual(typeItem.members[14].name, 'bfundef');
    assert.strictEqual(typeItem.members[14].type, '(a: boolean)=> boolean');
    assert.strictEqual(typeItem.members[15].name, 'afundef');
    assert.strictEqual(typeItem.members[15].type, '(a: any)=> any');
    assert.strictEqual(typeItem.members[16].name, 'tfundef');
    assert.strictEqual(typeItem.members[16].type, '(a: tstruct)=> tstruct');
    assert.strictEqual(typeItem.members[17].name, 'lnfundef');
    assert.strictEqual(typeItem.members[17].type, '(a: number[])=> number[]');
    assert.strictEqual(typeItem.members[18].name, 'lstrfundef');
    assert.strictEqual(typeItem.members[18].type, '(a: string[])=> string[]');
    assert.strictEqual(typeItem.members[19].name, 'lbfundef');
    assert.strictEqual(typeItem.members[19].type, '(a: boolean[])=> boolean[]');
    assert.strictEqual(typeItem.members[20].name, 'lafundef');
    assert.strictEqual(typeItem.members[20].type, '(a: any[])=> any[]');
    assert.strictEqual(typeItem.members[21].name, 'ltfundef');
    assert.strictEqual(typeItem.members[21].type, '(a: tstruct[])=> tstruct[]');
    assert.strictEqual(typeItem.members[22].name, 'mapstrfundef');
    assert.strictEqual(typeItem.members[22].type, '(am: Map<string, string>)=> Map<string, string>');
    assert.strictEqual(typeItem.members[23].name, 'mapnumfundef');
    assert.strictEqual(typeItem.members[23].type, '(am: Map<string, number>)=> Map<string, number>');
    assert.strictEqual(typeItem.members[24].name, 'mapboolfundef');
    assert.strictEqual(typeItem.members[24].type, '(am: Map<string, boolean>)=> Map<string, boolean>');
    assert.strictEqual(typeItem.members[25].name, 'arraynumfundef');
    assert.strictEqual(typeItem.members[25].type, '(am: Array<number>)=> Array<number>');
    assert.strictEqual(typeItem.members[26].name, 'arraystrfundef');
    assert.strictEqual(typeItem.members[26].type, '(am: Array<string>)=> Array<string>');
    assert.strictEqual(typeItem.members[27].name, 'arrayboolfundef');
    assert.strictEqual(typeItem.members[27].type, '(am: Array<boolean>)=> Array<boolean>');
    assert.strictEqual(typeItem.members[28].name, 'setnumfundef');
    assert.strictEqual(typeItem.members[28].type, '(am: Set<number>)=> Set<number>');
    assert.strictEqual(typeItem.members[29].name, 'setstrfundef');
    assert.strictEqual(typeItem.members[29].type, '(am: Set<string>)=> Set<string>');
    assert.strictEqual(typeItem.members[30].name, 'setboolfundef');
    assert.strictEqual(typeItem.members[30].type, '(am: Set<boolean>)=> Set<boolean>');
    assert.strictEqual(typeItem.members[31].name, 'mapstr');
    assert.strictEqual(typeItem.members[31].type, 'Map<string, string>');
    assert.strictEqual(typeItem.members[32].name, 'mapnum');
    assert.strictEqual(typeItem.members[32].type, 'Map<string, number>');
    assert.strictEqual(typeItem.members[33].name, 'mapbool');
    assert.strictEqual(typeItem.members[33].type, 'Map<string, boolean>');
    assert.strictEqual(typeItem.members[34].name, 'arraystr');
    assert.strictEqual(typeItem.members[34].type, 'Array<string>');
    assert.strictEqual(typeItem.members[35].name, 'arraynum');
    assert.strictEqual(typeItem.members[35].type, 'Array<number>');
    assert.strictEqual(typeItem.members[36].name, 'arraybool');
    assert.strictEqual(typeItem.members[36].type, 'Array<boolean>');
    assert.strictEqual(typeItem.members[37].name, 'setstr');
    assert.strictEqual(typeItem.members[37].type, 'Set<string>');
    assert.strictEqual(typeItem.members[38].name, 'setnum');
    assert.strictEqual(typeItem.members[38].type, 'Set<number>');
    assert.strictEqual(typeItem.members[39].name, 'setbool');
    assert.strictEqual(typeItem.members[39].type, 'Set<boolean>');

    assert.strictEqual(typeItem.functions.length, 12);
    assert.strictEqual(typeItem.functions[0].name, 'deconstruct');
    assert.strictEqual(typeItem.functions[0].returns, 'void');
    assert.strictEqual(typeItem.functions[0].parameters.length, 0);
    // assert.strictEqual(typeItem.functions[0].parameters[0].name, 'a');
    // assert.strictEqual(typeItem.functions[0].parameters[0].type, 'number');
    // assert.strictEqual(typeItem.functions[0].parameters[0].arraySize, 0);
    // assert.strictEqual(typeItem.functions[1].name, 'deconstruct');
    // assert.strictEqual(typeItem.functions[1].returns, 'void');

    assert.strictEqual(typeItem.functions[1].name, 'nfunc');
    assert.strictEqual(typeItem.functions[1].returns, 'number');
    assert.strictEqual(typeItem.functions[1].parameters.length, 1);
    assert.strictEqual(typeItem.functions[1].parameters[0].name, 'num');
    assert.strictEqual(typeItem.functions[1].parameters[0].type, 'number');
    assert.strictEqual(typeItem.functions[1].parameters[0].arraySize, 0);
    assert.strictEqual(typeItem.functions[2].name, 'sfunc');
    assert.strictEqual(typeItem.functions[2].returns, 'string');
    assert.strictEqual(typeItem.functions[2].parameters.length, 1);
    assert.strictEqual(typeItem.functions[2].parameters[0].name, 'str');
    assert.strictEqual(typeItem.functions[2].parameters[0].type, 'string');
    assert.strictEqual(typeItem.functions[2].parameters[0].arraySize, 0);
    assert.strictEqual(typeItem.functions[3].name, 'bfunc');
    assert.strictEqual(typeItem.functions[3].returns, 'boolean');
    assert.strictEqual(typeItem.functions[3].parameters.length, 1);
    assert.strictEqual(typeItem.functions[3].parameters[0].name, 'flag');
    assert.strictEqual(typeItem.functions[3].parameters[0].type, 'boolean');
    assert.strictEqual(typeItem.functions[3].parameters[0].arraySize, 0);
    assert.strictEqual(typeItem.functions[4].name, 'afunc');
    assert.strictEqual(typeItem.functions[4].returns, 'any');
    assert.strictEqual(typeItem.functions[4].parameters.length, 1);
    assert.strictEqual(typeItem.functions[4].parameters[0].name, 'obj');
    assert.strictEqual(typeItem.functions[4].parameters[0].type, 'any');
    assert.strictEqual(typeItem.functions[4].parameters[0].arraySize, 0);
    assert.strictEqual(typeItem.functions[5].name, 'tfunc');
    assert.strictEqual(typeItem.functions[5].returns, 'any');
    assert.strictEqual(typeItem.functions[5].parameters.length, 1);
    assert.strictEqual(typeItem.functions[5].parameters[0].name, 'obj');
    assert.strictEqual(typeItem.functions[5].parameters[0].type, 'tstruct');
    assert.strictEqual(typeItem.functions[5].parameters[0].arraySize, 0);
    assert.strictEqual(typeItem.functions[6].name, 'torfunc');
    assert.strictEqual(typeItem.functions[6].returns, 'tstruct | string');
    assert.strictEqual(typeItem.functions[6].parameters.length, 1);
    assert.strictEqual(typeItem.functions[6].parameters[0].name, 'obj');
    assert.strictEqual(typeItem.functions[6].parameters[0].type, 'tstruct | string');
    assert.strictEqual(typeItem.functions[6].parameters[0].arraySize, 0);
    assert.strictEqual(typeItem.functions[7].name, 'lnfunc');
    assert.strictEqual(typeItem.functions[7].returns, 'number[]');
    assert.strictEqual(typeItem.functions[7].parameters.length, 1);
    assert.strictEqual(typeItem.functions[7].parameters[0].name, 'num');
    assert.strictEqual(typeItem.functions[7].parameters[0].type, 'number[]');
    assert.strictEqual(typeItem.functions[7].parameters[0].arraySize, 0);
    assert.strictEqual(typeItem.functions[8].name, 'lsfunc');
    assert.strictEqual(typeItem.functions[8].returns, 'string[]');
    assert.strictEqual(typeItem.functions[8].parameters.length, 1);
    assert.strictEqual(typeItem.functions[8].parameters[0].name, 'str');
    assert.strictEqual(typeItem.functions[8].parameters[0].type, 'string[]');
    assert.strictEqual(typeItem.functions[8].parameters[0].arraySize, 0);
    assert.strictEqual(typeItem.functions[9].name, 'lbfunc');
    assert.strictEqual(typeItem.functions[9].returns, 'boolean[]');
    assert.strictEqual(typeItem.functions[9].parameters.length, 1);
    assert.strictEqual(typeItem.functions[9].parameters[0].name, 'flag');
    assert.strictEqual(typeItem.functions[9].parameters[0].type, 'boolean[]');
    assert.strictEqual(typeItem.functions[9].parameters[0].arraySize, 0);
    assert.strictEqual(typeItem.functions[10].name, 'lafunc');
    assert.strictEqual(typeItem.functions[10].returns, 'any[]');
    assert.strictEqual(typeItem.functions[10].parameters.length, 1);
    assert.strictEqual(typeItem.functions[10].parameters[0].name, 'obj');
    assert.strictEqual(typeItem.functions[10].parameters[0].type, 'any[]');
    assert.strictEqual(typeItem.functions[10].parameters[0].arraySize, 0);
    assert.strictEqual(typeItem.functions[11].name, 'ltfunc');
    assert.strictEqual(typeItem.functions[11].returns, 'tstruct[]');
    assert.strictEqual(typeItem.functions[11].parameters.length, 1);
    assert.strictEqual(typeItem.functions[11].parameters[0].name, 'lobj');
    assert.strictEqual(typeItem.functions[11].parameters[0].type, 'tstruct[]');
    assert.strictEqual(typeItem.functions[11].parameters[0].arraySize, 0);
  });

  //3, 测试 parseType 模板类模板函数情况
  test('parseType_ts_test_3', () => {
    let testtype = `type OTC<Type> = {
        len: Type;
        name: Type[];
        add(a: Type): void;
        del: (x: Type, y: Type) => Type
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.functions.length, 1);
    assert.strictEqual(typeItem.functions[0].name, 'add');
    assert.strictEqual(typeItem.functions[0].returns, 'void');
    assert.strictEqual(typeItem.functions[0].parameters.length, 1);
    assert.strictEqual(typeItem.functions[0].parameters[0].name, 'a');
    assert.strictEqual(typeItem.functions[0].parameters[0].type, 'Type');
    assert.strictEqual(typeItem.functions[0].parameters[0].arraySize, 0);

    assert.strictEqual(typeItem.members.length, 3);
    assert.strictEqual(typeItem.members[0].name, 'len');
    assert.strictEqual(typeItem.members[0].type, 'Type');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    assert.strictEqual(typeItem.members[1].name, 'name');
    assert.strictEqual(typeItem.members[1].type, 'Type[]');
    assert.strictEqual(typeItem.members[1].arraySize, 0);
    assert.strictEqual(typeItem.members[2].name, 'del');
    assert.strictEqual(typeItem.members[2].type, '(x: Type, y: Type) => Type');
    assert.strictEqual(typeItem.members[2].arraySize, 0);
  });

  //4, 测试 parseType 扩展情况
  test('parseType_ts_test_4', () => {
    let testtype = `
      type Basic = {
        lname: string;
        age: number;
      };
      type OTC = Basic & {
        len: number;
        name: string;
        contruct: (a: number) => void;
        deconstruct: () => void;
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 2);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'Basic');
    assert.strictEqual(typeItem.functions.length, 0);
    assert.strictEqual(typeItem.members.length, 2);
    assert.strictEqual(typeItem.members[0].name, 'lname');
    assert.strictEqual(typeItem.members[0].type, 'string');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    assert.strictEqual(typeItem.members[1].name, 'age');
    assert.strictEqual(typeItem.members[1].type, 'number');
    assert.strictEqual(typeItem.members[1].arraySize, 0);

    typeItem = typeObjList.types[1];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.functions.length, 0);
    // assert.strictEqual(typeItem.functions[0].name, 'contruct');
    // assert.strictEqual(typeItem.functions[0].returns, 'void');
    // assert.strictEqual(typeItem.functions[0].parameters.length, 1);
    // assert.strictEqual(typeItem.functions[0].parameters[0].name, 'a');
    // assert.strictEqual(typeItem.functions[0].parameters[0].type, 'number');
    // assert.strictEqual(typeItem.functions[0].parameters[0].arraySize, 0);
    // assert.strictEqual(typeItem.functions[1].name, 'deconstruct');
    // assert.strictEqual(typeItem.functions[1].returns, 'void');

    assert.strictEqual(typeItem.members.length, 0);
    // assert.strictEqual(typeItem.members[0].name, 'len');
    // assert.strictEqual(typeItem.members[0].type, 'number');
    // assert.strictEqual(typeItem.members[0].arraySize, 0);
    // assert.strictEqual(typeItem.members[1].name, 'name');
    // assert.strictEqual(typeItem.members[1].type, 'string');
    // assert.strictEqual(typeItem.members[0].arraySize, 0);
  });

  //5, 测试 parseType 数组情况
  test('parseType_ts_test_5', () => {
    let testtype = `type OTC = {
        len: number[10];
        name: string[10][20];
        contruct : (a: number[10][20][30]) => void;
        deconstruct : () => void;
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.functions.length, 0);
    // assert.strictEqual(typeItem.functions[0].name, 'contruct');
    // assert.strictEqual(typeItem.functions[0].returns, 'void');
    // assert.strictEqual(typeItem.functions[0].parameters.length, 1);
    // assert.strictEqual(typeItem.functions[0].parameters[0].name, 'a');
    // assert.strictEqual(typeItem.functions[0].parameters[0].type, 'number[10][20][30]');
    // assert.strictEqual(typeItem.functions[0].parameters[0].arraySize, 0);
    // assert.strictEqual(typeItem.functions[1].name, 'deconstruct');
    // assert.strictEqual(typeItem.functions[1].returns, 'void');

    assert.strictEqual(typeItem.members.length, 4);
    assert.strictEqual(typeItem.members[0].name, 'len');
    assert.strictEqual(typeItem.members[0].type, 'number[10]');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    assert.strictEqual(typeItem.members[1].name, 'name');
    assert.strictEqual(typeItem.members[1].type, 'string[10][20]');
    assert.strictEqual(typeItem.members[1].arraySize, 0);

    assert.strictEqual(typeItem.members[2].name, 'contruct');
    assert.strictEqual(typeItem.members[2].type, '(a: number[10][20][30]) => void');
    assert.strictEqual(typeItem.members[2].arraySize, 0);
    assert.strictEqual(typeItem.members[3].name, 'deconstruct');
    assert.strictEqual(typeItem.members[3].type, '() => void');
    assert.strictEqual(typeItem.members[3].arraySize, 0);
  });

  //6, 测试 parseType 测试模板继承情况
  test('parseType_ts_test_6', () => {
    let testtype = `type OTC<Type extends Basic> = {
        len: Type;
        name: Type[10][20];
        contruct: (a: Type[10][20][30]) => void;
        deconstruct : () => void;
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.members.length, 4);
    assert.strictEqual(typeItem.members[0].name, 'len');
    assert.strictEqual(typeItem.members[0].type, 'Type');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    assert.strictEqual(typeItem.members[1].name, 'name');
    assert.strictEqual(typeItem.members[1].type, 'Type[10][20]');
    assert.strictEqual(typeItem.members[1].arraySize, 0);
    assert.strictEqual(typeItem.members[2].name, 'contruct');
    assert.strictEqual(typeItem.members[2].type, '(a: Type[10][20][30]) => void');
    assert.strictEqual(typeItem.members[2].arraySize, 0);
    assert.strictEqual(typeItem.members[3].name, 'deconstruct');
    assert.strictEqual(typeItem.members[3].type, '() => void');
    assert.strictEqual(typeItem.members[3].arraySize, 0);
  });

  //7, 测试 parseType 测试选择情况
  test('parseType_ts_test_7', () => {
    let testtype = `type OTC<Type extends Basic> =  {
        len: Type;
        name?: Type[10][20];
        contruct : (a?: Type[10][20][30]) => void;
        deconstruct : () => void;
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.members.length, 4);
    assert.strictEqual(typeItem.members[0].name, 'len');
    assert.strictEqual(typeItem.members[0].type, 'Type');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    assert.strictEqual(typeItem.members[1].name, 'name');
    assert.strictEqual(typeItem.members[1].type, 'Type[10][20]');
    assert.strictEqual(typeItem.members[1].arraySize, 0);
    assert.strictEqual(typeItem.members[2].name, 'contruct');
    assert.strictEqual(typeItem.members[2].type, '(a?: Type[10][20][30]) => void');
    assert.strictEqual(typeItem.members[2].arraySize, 0);
    assert.strictEqual(typeItem.members[3].name, 'deconstruct');
    assert.strictEqual(typeItem.members[3].type, '() => void');
    assert.strictEqual(typeItem.members[3].arraySize, 0);
  });

  //8, 测试 parseType 测试注释选择情况
  test('parseType_ts_test_8', () => {
    let testtype = `type OTC<Type extends Basic> = {
        // 测试注释
        len: Type; //注释一
        name?: Type[10][20];  /*注释2*/
        contruct : (a?: Type[10][20][30]) => void;
        deconstruct: () => void;
        // ...
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.members.length, 4);
    assert.strictEqual(typeItem.members[0].name, 'len');
    assert.strictEqual(typeItem.members[0].type, 'Type');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    assert.strictEqual(typeItem.members[1].name, 'name');
    assert.strictEqual(typeItem.members[1].type, 'Type[10][20]');
    assert.strictEqual(typeItem.members[1].arraySize, 0);
    assert.strictEqual(typeItem.members[2].name, 'contruct');
    assert.strictEqual(typeItem.members[2].type, '(a?: Type[10][20][30]) => void');
    assert.strictEqual(typeItem.members[2].arraySize, 0);
    assert.strictEqual(typeItem.members[3].name, 'deconstruct');
    assert.strictEqual(typeItem.members[3].type, '() => void');
    assert.strictEqual(typeItem.members[3].arraySize, 0);
  });

  //9, 测试 parseType 属性修饰符情况
  test('parseType_ts_test_9', () => {
    let testtype = `type OTC<Type extends Basic> = {
        // 测试注释
        readonly len: Type; //注释一
        public name?: Type[10][20];  /*注释2*/
        private contruct: (a?: Type[10][20][30]) => void;
        const deconstruct : () => void;
        // ...
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0]
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.members.length, 5);
    assert.strictEqual(typeItem.members[0].name, 'len');
    assert.strictEqual(typeItem.members[0].type, 'Type');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    assert.strictEqual(typeItem.members[1].name, 'name');
    assert.strictEqual(typeItem.members[1].type, 'Type[10][20]');
    assert.strictEqual(typeItem.members[1].arraySize, 0);
    assert.strictEqual(typeItem.members[2].name, 'contruct');
    assert.strictEqual(typeItem.members[2].type, '(a?: Type[10][20][30]) => void');
    assert.strictEqual(typeItem.members[2].arraySize, 0);
    assert.strictEqual(typeItem.members[3].name, 'const');
    assert.strictEqual(typeItem.members[3].type, 'unknown');
    assert.strictEqual(typeItem.members[3].arraySize, 0);
    assert.strictEqual(typeItem.members[4].name, 'deconstruct');
    assert.strictEqual(typeItem.members[4].type, '() => void');
    assert.strictEqual(typeItem.members[4].arraySize, 0);
  });

  //10, 测试 parseType 索引签名情况
  test('parseType_ts_test_10', () => {
    let testtype = `type OTC = {
        [index: number]: string;  
        [index: string]: number | string;
        readonly [index: number]: string;
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.functions.length, 0);
    assert.strictEqual(typeItem.members.length, 0);
    
  });

  //11, 测试 parseType 扩展类型情况
  test('parseType_ts_test_11', () => {
    let testtype = `type OTC = {
        const cc: ColorfulCircle = {
          color: "red",
          radius: 42,
        };
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.functions.length, 0);
    assert.strictEqual(typeItem.members.length, 2);
    
    assert.strictEqual(typeItem.members[0].name, 'const');
    assert.strictEqual(typeItem.members[0].type, 'unknown');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    assert.strictEqual(typeItem.members[1].name, 'cc');
    assert.strictEqual(typeItem.members[1].type, 'ColorfulCircle');
    assert.strictEqual(typeItem.members[1].arraySize, 0);
  });

  //12, 测试 parseType 交集类型情况
  test('parseType_ts_test_12', () => {
    let testtype = `type OTC = {
        const cc: Colorful & Circle;
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.functions.length, 0);
    assert.strictEqual(typeItem.members.length, 2);
    assert.strictEqual(typeItem.members[0].name, 'const');
    assert.strictEqual(typeItem.members[0].type, 'unknown');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    assert.strictEqual(typeItem.members[1].name, 'cc');
    assert.strictEqual(typeItem.members[1].type, 'Colorful & Circle');
    assert.strictEqual(typeItem.members[1].arraySize, 0);
  });

  //13, 测试 parseType 泛型对象类型情况
  test('parseType_ts_test_13', () => {
    let testtype =  `type OTC = {
        const cc: any;
        readonly contents: unknown;
        cont: "hello world";
        ents: Type;
        val: OrNull<OneOrMany<Type>>;

    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.functions.length, 0);
    assert.strictEqual(typeItem.members.length, 6);
    assert.strictEqual(typeItem.members[0].name, 'const');
    assert.strictEqual(typeItem.members[0].type, 'unknown');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    assert.strictEqual(typeItem.members[1].name, 'cc');
    assert.strictEqual(typeItem.members[1].type, 'any');
    assert.strictEqual(typeItem.members[1].arraySize, 0);
    assert.strictEqual(typeItem.members[2].name, 'contents');
    assert.strictEqual(typeItem.members[2].type, 'unknown');
    assert.strictEqual(typeItem.members[2].arraySize, 0);
    assert.strictEqual(typeItem.members[3].name, 'cont');
    assert.strictEqual(typeItem.members[3].type, '"hello world"');
    assert.strictEqual(typeItem.members[3].arraySize, 0);
    assert.strictEqual(typeItem.members[4].name, 'ents');
    assert.strictEqual(typeItem.members[4].type, 'Type');
    assert.strictEqual(typeItem.members[4].arraySize, 0);
    assert.strictEqual(typeItem.members[5].name, 'val');
    assert.strictEqual(typeItem.members[5].type, 'OrNull<OneOrMany<Type>>');
    assert.strictEqual(typeItem.members[5].arraySize, 0);
  });

  //14, 测试 parseType readonly array对象类型情况
  test('parseType_ts_test_14', () => {
    let testtype = `type OTC = {
        const roArray: ReadonlyArray<string> = ["red", "green", "blue"];
        readonly contents: roArray.slice();
        x: readonly string[] = [];
        a: pair[0];
        const [x, y, z] = coord;
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.functions.length, 0);
    assert.strictEqual(typeItem.members.length, 7);
    assert.strictEqual(typeItem.members[0].name, 'const');
    assert.strictEqual(typeItem.members[0].type, 'unknown');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    assert.strictEqual(typeItem.members[1].name, 'roArray');
    assert.strictEqual(typeItem.members[1].type, 'ReadonlyArray<string>');
    assert.strictEqual(typeItem.members[1].arraySize, 0);
    assert.strictEqual(typeItem.members[2].name, 'contents');
    assert.strictEqual(typeItem.members[2].type, 'roArray.slice');
    assert.strictEqual(typeItem.members[2].arraySize, 0);
    assert.strictEqual(typeItem.members[3].name, 'x');
    assert.strictEqual(typeItem.members[3].type, 'readonly string[]');
    assert.strictEqual(typeItem.members[3].arraySize, 0);
    assert.strictEqual(typeItem.members[4].name, 'a');
    assert.strictEqual(typeItem.members[4].type, 'pair[0]');
    assert.strictEqual(typeItem.members[4].arraySize, 0);
    assert.strictEqual(typeItem.members[5].name, 'const');
    assert.strictEqual(typeItem.members[5].type, 'unknown');
    assert.strictEqual(typeItem.members[5].arraySize, 0);
    assert.strictEqual(typeItem.members[6].name, 'coord');
    assert.strictEqual(typeItem.members[6].type, 'unknown');
    assert.strictEqual(typeItem.members[6].arraySize, 0);
  });

  //15, 测试 parseType 剩余元素类型情况
  test('parseType_ts_test_15', () => {
    let testtype = `type OTC = {
      const a: StringNumberBooleans = ["hello", 1];
      const b: StringNumberBooleans = ["beautiful", 2, true];
      const c: StringNumberBooleans = ["world", 3, true, false, true, false, true];
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.functions.length, 0);
    assert.strictEqual(typeItem.members.length, 6);
    assert.strictEqual(typeItem.members[0].name, 'const');
    assert.strictEqual(typeItem.members[0].type, 'unknown');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    assert.strictEqual(typeItem.members[1].name, 'a');
    assert.strictEqual(typeItem.members[1].type, 'StringNumberBooleans');
    assert.strictEqual(typeItem.members[1].arraySize, 0);
    assert.strictEqual(typeItem.members[2].name, 'const');
    assert.strictEqual(typeItem.members[2].type, 'unknown');
    assert.strictEqual(typeItem.members[2].arraySize, 0);
    assert.strictEqual(typeItem.members[3].name, 'b');
    assert.strictEqual(typeItem.members[3].type, 'StringNumberBooleans');
    assert.strictEqual(typeItem.members[3].arraySize, 0);
    assert.strictEqual(typeItem.members[4].name, 'const');
    assert.strictEqual(typeItem.members[4].type, 'unknown');
    assert.strictEqual(typeItem.members[4].arraySize, 0);
    assert.strictEqual(typeItem.members[5].name, 'c');
    assert.strictEqual(typeItem.members[5].type, 'StringNumberBooleans');
    assert.strictEqual(typeItem.members[5].arraySize, 0);
  });

  //16, 测试 parseType 元祖类型情况
  test('parseType_ts_test_16', () => {
    let testtype = `type OTC = {
      pair: readonly [string, number];
      [x, y]: [number, number];
      const c: [3, 4] as const;
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.functions.length, 0);
    assert.strictEqual(typeItem.members.length, 3);
    assert.strictEqual(typeItem.members[0].name, 'pair');
    assert.strictEqual(typeItem.members[0].type, 'readonly [string, number]');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    assert.strictEqual(typeItem.members[1].name, 'const');
    assert.strictEqual(typeItem.members[1].type, 'unknown');
    assert.strictEqual(typeItem.members[1].arraySize, 0);
    assert.strictEqual(typeItem.members[2].name, 'c');
    assert.strictEqual(typeItem.members[2].type, '[3, 4]');
    assert.strictEqual(typeItem.members[2].arraySize, 0);
  });

  //17, 测试 parseType keyof类型情况
  test('parseType_ts_test_17', () => {
    let testtype = `type OTC = {
      pair: keyof Arrayish;
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.functions.length, 0);
    assert.strictEqual(typeItem.members.length, 1);
    assert.strictEqual(typeItem.members[0].name, 'pair');
    assert.strictEqual(typeItem.members[0].type, 'keyof Arrayish');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
  });

  //18, 测试 parseType typeof类型情况
  test('parseType_ts_test_18', () => {
    let testtype = `type OTC = {
      pair: typeof "Hello world";
      name: typeof Stype;
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.functions.length, 0);
    assert.strictEqual(typeItem.members.length, 3);
    assert.strictEqual(typeItem.members[0].name, 'pair');
    assert.strictEqual(typeItem.members[0].type, 'typeof');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    assert.strictEqual(typeItem.members[1].name, '"Hello world"');
    assert.strictEqual(typeItem.members[1].type, 'unknown');
    assert.strictEqual(typeItem.members[1].arraySize, 0);
    assert.strictEqual(typeItem.members[2].name, 'name');
    assert.strictEqual(typeItem.members[2].type, 'typeof Stype');
    assert.strictEqual(typeItem.members[2].arraySize, 0);
  });

  //19, 测试 parseType 索引访问类型情况
  test('parseType_ts_test_19', () => {
    let testtype = `type OTC = {
      pair: Person["age"];
      name: Person["age" | "name"];
      test: Person[keyof Person];
      obj: Person[AliveOrName];
      amo: typeof MyArray[number];
      topy: Person[pair];
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.functions.length, 0);
    assert.strictEqual(typeItem.members.length, 6);
    assert.strictEqual(typeItem.members[0].name, 'pair');
    assert.strictEqual(typeItem.members[0].type, 'Person["age"]');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    assert.strictEqual(typeItem.members[1].name, 'name');
    assert.strictEqual(typeItem.members[1].type, 'Person["age" | "name"]');
    assert.strictEqual(typeItem.members[1].arraySize, 0);
    assert.strictEqual(typeItem.members[2].name, 'test');
    assert.strictEqual(typeItem.members[2].type, 'Person[keyof Person]');
    assert.strictEqual(typeItem.members[2].arraySize, 0);
    assert.strictEqual(typeItem.members[3].name, 'obj');
    assert.strictEqual(typeItem.members[3].type, 'Person[AliveOrName]');
    assert.strictEqual(typeItem.members[3].arraySize, 0);
    assert.strictEqual(typeItem.members[4].name, 'amo');
    assert.strictEqual(typeItem.members[4].type, 'typeof MyArray[number]');
    assert.strictEqual(typeItem.members[4].arraySize, 0);
    assert.strictEqual(typeItem.members[5].name, 'topy');
    assert.strictEqual(typeItem.members[5].type, 'Person[pair]');
    assert.strictEqual(typeItem.members[5].arraySize, 0);
  });

  //20, 测试 parseType 条件类型情况
  test('parseType_ts_test_20', () => {
    let testtype = `type OTC = {
      pair: Dog extends Animal ? number : string;
      name: T extends number ? IdLabel : NameLabel;
      test: T extends { message: unknown };
      obj: Type extends Array<infer Item> ? Item : Type;
      oamp: Type extends any ? Type[] : never;
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.functions.length, 0);
    assert.strictEqual(typeItem.members.length, 5);
    assert.strictEqual(typeItem.members[0].name, 'pair');
    assert.strictEqual(typeItem.members[0].type, 'Dog extends Animal ? number : string');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    assert.strictEqual(typeItem.members[1].name, 'name');
    assert.strictEqual(typeItem.members[1].type, 'T extends number ? IdLabel : NameLabel');
    assert.strictEqual(typeItem.members[1].arraySize, 0);
    assert.strictEqual(typeItem.members[2].name, 'test');
    assert.strictEqual(typeItem.members[2].type, 'T extends { message: unknown }');
    assert.strictEqual(typeItem.members[2].arraySize, 0);
    assert.strictEqual(typeItem.members[3].name, 'obj');
    assert.strictEqual(typeItem.members[3].type, 'Type extends Array<infer Item> ? Item : Type');
    assert.strictEqual(typeItem.members[3].arraySize, 0);
    assert.strictEqual(typeItem.members[4].name, 'oamp');
    assert.strictEqual(typeItem.members[4].type, 'Type extends any ? Type[] : never');
    assert.strictEqual(typeItem.members[4].arraySize, 0);

  });

  //21, 测试 parseType 映射类型情况
  test('parseType_ts_test_21', () => {
    let testtype = `type OTC = {
      [key: string]: boolean | Horse;
      [Property in keyof Type]: boolean;
      [Property in keyof Type]-?: Type[Property];
      [Properties in keyof Type as NewKeyType]: Type[Properties];
      [Property in keyof Type as \`get\${Capitalize<string & Property>}\`]: () => Type[Property];
      [Property in keyof Type as Exclude<Property, "kind">]: Type[Property];
      [E in Events as E["kind"]]: (event: E) => void;
      [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.functions.length, 0);
    assert.strictEqual(typeItem.members.length, 1);
    assert.strictEqual(typeItem.members[0].name, '[Property in keyof');
    assert.strictEqual(typeItem.members[0].type, 'unknown');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    // assert.strictEqual(typeItem.members[1].name, 'boolean');
    // assert.strictEqual(typeItem.members[1].type, 'void');
    // assert.strictEqual(typeItem.members[1].arraySize, 0);
    // assert.strictEqual(typeItem.members[2].name, 'Type');
    // assert.strictEqual(typeItem.members[2].type, 'void');
    // assert.strictEqual(typeItem.members[2].arraySize, 0);
  });

  //22, 测试 parseType 模板字面类型情况
  test('parseType_ts_test_22', () => {
    let testtype = `type OTC = {
      pair: "world";
      name: "welcome_email" | "email_heading";
        on<Key extends string & keyof Type>
        (eventName: \`\${Key}Changed\`, callback: (newValue: Type[Key]) => void ): void;
      ShoutyGreeting: Uppercase<Greeting>;
      ASCIICacheKey<Str extends string> = \`ID-\${Uppercase<Str>}\`
      MainID: ASCIICacheKey<"my_app">
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.functions.length, 2);
    assert.strictEqual(typeItem.functions[0].name, 'on');
    assert.strictEqual(typeItem.functions[0].returns, 'void');
    assert.strictEqual(typeItem.functions[1].name, 'ASCIICacheKey');
    assert.strictEqual(typeItem.functions[1].returns, 'void');

    assert.strictEqual(typeItem.members.length, 3);
    assert.strictEqual(typeItem.members[0].name, 'pair');
    assert.strictEqual(typeItem.members[0].type, '"world"');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    assert.strictEqual(typeItem.members[1].name, 'name');
    assert.strictEqual(typeItem.members[1].type, '"welcome_email" | "email_heading"');
    assert.strictEqual(typeItem.members[1].arraySize, 0);
    assert.strictEqual(typeItem.members[2].name, 'ShoutyGreeting');
    assert.strictEqual(typeItem.members[2].type, 'Uppercase<Greeting>');
    assert.strictEqual(typeItem.members[2].arraySize, 0);

  });

  //23, 测试 parseType 内在字符串操作类型情况
  test('parseType_ts_test_23', () => {
    let testtype = `type OTC = {
      ShoutyGreeting: Uppercase<"Greeting">;
      QuietGreeting: Lowercase<"Greeting">;
      Greeting: Capitalize<"LowercaseGreeting">;
      UncomfortableGreeting: Uncapitalize<"UppercaseGreeting">;
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.functions.length, 0);
    assert.strictEqual(typeItem.members.length, 4);
    assert.strictEqual(typeItem.members[0].name, 'ShoutyGreeting');
    assert.strictEqual(typeItem.members[0].type, 'Uppercase<"Greeting">');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    assert.strictEqual(typeItem.members[1].name, 'QuietGreeting');
    assert.strictEqual(typeItem.members[1].type, 'Lowercase<"Greeting">');
    assert.strictEqual(typeItem.members[1].arraySize, 0);
    assert.strictEqual(typeItem.members[2].name, 'Greeting');
    assert.strictEqual(typeItem.members[2].type, 'Capitalize<"LowercaseGreeting">');
    assert.strictEqual(typeItem.members[2].arraySize, 0);
    assert.strictEqual(typeItem.members[3].name, 'UncomfortableGreeting');
    assert.strictEqual(typeItem.members[3].type, 'Uncapitalize<"UppercaseGreeting">');
    assert.strictEqual(typeItem.members[3].arraySize, 0);

  });

  //24, 测试 parseType export情况
  test('parseType_ts_test_24', () => {
    let testtype = `export type OTC = {
        len: number;
        name: string;
        contruct: (a: number) => void;
        deconstruct: () => void;
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.functions.length, 0);

    assert.strictEqual(typeItem.members.length, 4);
    assert.strictEqual(typeItem.members[0].name, 'len');
    assert.strictEqual(typeItem.members[0].type, 'number');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    assert.strictEqual(typeItem.members[1].name, 'name');
    assert.strictEqual(typeItem.members[1].type, 'string');
    assert.strictEqual(typeItem.members[1].arraySize, 0);
    assert.strictEqual(typeItem.members[2].name, 'contruct');
    assert.strictEqual(typeItem.members[2].type, '(a: number) => void');
    assert.strictEqual(typeItem.members[2].arraySize, 0);
    assert.strictEqual(typeItem.members[3].name, 'deconstruct');
    assert.strictEqual(typeItem.members[3].type, '() => void');
    assert.strictEqual(typeItem.members[3].arraySize, 0);
  });

  //25, 测试 parseType 库文件情况
  test('parseType_ts_test_25', () => {
    let testtype = `type OTC = {
        len: require("mylib");
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.functions.length, 0);

    assert.strictEqual(typeItem.members.length, 1);
    assert.strictEqual(typeItem.members[0].name, 'len');
    assert.strictEqual(typeItem.members[0].type, 'require');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    
  });

  //26, 测试 parseType declare namespace 情况
  test('parseType_ts_test_26', () => {
    let testtype = `declare namespace {
      export type OTC = {
        len: number;
        name: string;
        contruct: (a: number) => void;
        deconstruct : () => void;
      }
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.functions.length, 0);

    assert.strictEqual(typeItem.members.length, 4);
    assert.strictEqual(typeItem.members[0].name, 'len');
    assert.strictEqual(typeItem.members[0].type, 'number');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    assert.strictEqual(typeItem.members[1].name, 'name');
    assert.strictEqual(typeItem.members[1].type, 'string');
    assert.strictEqual(typeItem.members[1].arraySize, 0);
    assert.strictEqual(typeItem.members[2].name, 'contruct');
    assert.strictEqual(typeItem.members[2].type, '(a: number) => void');
    assert.strictEqual(typeItem.members[2].arraySize, 0);
    assert.strictEqual(typeItem.members[3].name, 'deconstruct');
    assert.strictEqual(typeItem.members[3].type, '() => void');
    assert.strictEqual(typeItem.members[3].arraySize, 0);
  });

  //27, 测试 parseType 两个类extend 情况
  test('parseType_ts_test_27', () => {
    let testtype = `declare namespace {
      export type OTC = {
        len: number;
        name: string;
        contruct : (a: number) => void;
        deconstruct : () => void;
      }
      export type OTC2 = OTC & {
        len2: number;
        name2: string;
        contruct2 : (a: number) => void;
        deconstruct2 : () => void;
      }
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 2);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.functions.length, 0);

    assert.strictEqual(typeItem.members.length, 4);
    assert.strictEqual(typeItem.members[0].name, 'len');
    assert.strictEqual(typeItem.members[0].type, 'number');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    assert.strictEqual(typeItem.members[1].name, 'name');
    assert.strictEqual(typeItem.members[1].type, 'string');
    assert.strictEqual(typeItem.members[1].arraySize, 0);
    assert.strictEqual(typeItem.members[2].name, 'contruct');
    assert.strictEqual(typeItem.members[2].type, '(a: number) => void');
    assert.strictEqual(typeItem.members[2].arraySize, 0);
    assert.strictEqual(typeItem.members[3].name, 'deconstruct');
    assert.strictEqual(typeItem.members[3].type, '() => void');
    assert.strictEqual(typeItem.members[3].arraySize, 0);

    typeItem = typeObjList.types[1];
    assert.strictEqual(typeItem.name, 'OTC2');
    assert.strictEqual(typeItem.functions.length, 0);
    assert.strictEqual(typeItem.members.length, 0);
    // assert.strictEqual(typeItem.members.length, 4);
    // assert.strictEqual(typeItem.members[0].name, 'len2');
    // assert.strictEqual(typeItem.members[0].type, 'number');
    // assert.strictEqual(typeItem.members[0].arraySize, 0);
    // assert.strictEqual(typeItem.members[1].name, 'name2');
    // assert.strictEqual(typeItem.members[1].type, 'string');
    // assert.strictEqual(typeItem.members[1].arraySize, 0);
    // assert.strictEqual(typeItem.members[2].name, 'contruct2');
    // assert.strictEqual(typeItem.members[2].type, '(a: number) => void');
    // assert.strictEqual(typeItem.members[2].arraySize, 0);
    // assert.strictEqual(typeItem.members[3].name, 'deconstruct2');
    // assert.strictEqual(typeItem.members[3].type, '() => void');
    // assert.strictEqual(typeItem.members[3].arraySize, 0);
  });

  //28, 测试 parseType 两个类不同 情况
  test('parseType_ts_test_28', () => {
    let testtype = `declare namespace {
      export type OTC = {
        len: number;
        name: string;
        contruct : (a: number) => void;
        deconstruct : () => void;
      }
      export type OTC2 = {
        len2: number;
        name2: string;
        contruct2 : (a: number) => void;
        deconstruct2 : () => void;
      }
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 2);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.functions.length, 0);

    assert.strictEqual(typeItem.members.length, 4);
    assert.strictEqual(typeItem.members[0].name, 'len');
    assert.strictEqual(typeItem.members[0].type, 'number');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    assert.strictEqual(typeItem.members[1].name, 'name');
    assert.strictEqual(typeItem.members[1].type, 'string');
    assert.strictEqual(typeItem.members[1].arraySize, 0);
    assert.strictEqual(typeItem.members[2].name, 'contruct');
    assert.strictEqual(typeItem.members[2].type, '(a: number) => void');
    assert.strictEqual(typeItem.members[2].arraySize, 0);
    assert.strictEqual(typeItem.members[3].name, 'deconstruct');
    assert.strictEqual(typeItem.members[3].type, '() => void');
    assert.strictEqual(typeItem.members[3].arraySize, 0);

    typeItem = typeObjList.types[1];
    assert.strictEqual(typeItem.name, 'OTC2');
    assert.strictEqual(typeItem.functions.length, 0);
    
    assert.strictEqual(typeItem.members.length, 4);
    assert.strictEqual(typeItem.members[0].name, 'len2');
    assert.strictEqual(typeItem.members[0].type, 'number');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    assert.strictEqual(typeItem.members[1].name, 'name2');
    assert.strictEqual(typeItem.members[1].type, 'string');
    assert.strictEqual(typeItem.members[1].arraySize, 0);
    assert.strictEqual(typeItem.members[2].name, 'contruct2');
    assert.strictEqual(typeItem.members[2].type, '(a: number) => void');
    assert.strictEqual(typeItem.members[2].arraySize, 0);
    assert.strictEqual(typeItem.members[3].name, 'deconstruct2');
    assert.strictEqual(typeItem.members[3].type, '() => void');
    assert.strictEqual(typeItem.members[3].arraySize, 0);

  });

  // 异常和错误用例
  //41, 测试 parseType 名字有下划线情况
  test('parseType_ts_test_41', () => {
    let testtype = `type _TEST_T = {
        len: number;
        name: string;
        contruct: (a: number) => void;
        deconstruct : () => void;
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, '_TEST_T');
    assert.strictEqual(typeItem.functions.length, 0);

    assert.strictEqual(typeItem.members.length, 4);
    assert.strictEqual(typeItem.members[0].name, 'len');
    assert.strictEqual(typeItem.members[0].type, 'number');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    assert.strictEqual(typeItem.members[1].name, 'name');
    assert.strictEqual(typeItem.members[1].type, 'string');
    assert.strictEqual(typeItem.members[1].arraySize, 0);
    assert.strictEqual(typeItem.members[2].name, 'contruct');
    assert.strictEqual(typeItem.members[2].type, '(a: number) => void');
    assert.strictEqual(typeItem.members[2].arraySize, 0);
    assert.strictEqual(typeItem.members[3].name, 'deconstruct');
    assert.strictEqual(typeItem.members[3].type, '() => void');
    assert.strictEqual(typeItem.members[3].arraySize, 0);
  });

  //42, 测试 parseType 单行情况
  test('parseType_ts_test_42', () => {
    let testtype = `type OTC = { len: number; contruct: (a: number) => void; };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.members.length, 2);
    assert.strictEqual(typeItem.members[0].name, 'len');
    assert.strictEqual(typeItem.members[0].type, 'number');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    assert.strictEqual(typeItem.members[1].name, 'contruct');
    assert.strictEqual(typeItem.members[1].type, '(a: number) => void');
    assert.strictEqual(typeItem.members[1].arraySize, 0);
    
  });

  //43, 测试 parseType 单行模板类模板函数情况
  test('parseType_ts_test_43', () => {
    let testtype = `type OTC<Type> = {len: Type; add: (a: Type) => void;};`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.functions.length, 0);
    
    assert.strictEqual(typeItem.members.length, 2);
    assert.strictEqual(typeItem.members[0].name, 'len');
    assert.strictEqual(typeItem.members[0].type, 'Type');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    assert.strictEqual(typeItem.members[1].name, 'add');
    assert.strictEqual(typeItem.members[1].type, '(a: Type) => void');
    assert.strictEqual(typeItem.members[1].arraySize, 0);
    
  });

  //44, 测试 parseType 继承没有名字情况
  test('parseType_ts_test_44', () => {
    let testtype = `type OTC = & {
        len: number;
        name: string;
        contruct: (a: number) => void;
        deconstruct : () => void;
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.functions.length, 0);
    assert.strictEqual(typeItem.members.length, 0);
  });

  //45, 测试 parseType 中文名字和扩展情况
  test('parseType_ts_test_45', () => {
    let testtype = `type 中文 = 扩展 & {
        len: number[10];
        name: string[10][20];
        contruct : (a: number[10][20][30]) => void;
        deconstruct : () => void;
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, '中文');
    assert.strictEqual(typeItem.functions.length, 0);

    assert.strictEqual(typeItem.members.length, 0);
    // assert.strictEqual(typeItem.members[0].name, 'len');
    // assert.strictEqual(typeItem.members[0].type, 'number[10]');
    // assert.strictEqual(typeItem.members[0].arraySize, 0);
    // assert.strictEqual(typeItem.members[1].name, 'name');
    // assert.strictEqual(typeItem.members[1].type, 'string[10][20]');
    // assert.strictEqual(typeItem.members[1].arraySize, 0);
    // assert.strictEqual(typeItem.members[2].name, 'contruct');
    // assert.strictEqual(typeItem.members[2].type, '(a: number[10][20][30]) => void');
    // assert.strictEqual(typeItem.members[2].arraySize, 0);
    // assert.strictEqual(typeItem.members[3].name, 'deconstruct');
    // assert.strictEqual(typeItem.members[3].type, '() => void');
    // assert.strictEqual(typeItem.members[3].arraySize, 0);
  });

  //46, 测试 parseType 测试中文模板继承情况
  test('parseType_ts_test_46', () => {
    let testtype = `type OTC<类型 extends 基础> = {
        len: Type;
        name: Type[10][20];
        contruct : (a: Type[10][20][30]) => void;
        deconstruct: () => void;
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.functions.length, 0);

    assert.strictEqual(typeItem.members.length, 4);
    assert.strictEqual(typeItem.members[0].name, 'len');
    assert.strictEqual(typeItem.members[0].type, 'Type');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    assert.strictEqual(typeItem.members[1].name, 'name');
    assert.strictEqual(typeItem.members[1].type, 'Type[10][20]');
    assert.strictEqual(typeItem.members[1].arraySize, 0);
    assert.strictEqual(typeItem.members[2].name, 'contruct');
    assert.strictEqual(typeItem.members[2].type, '(a: Type[10][20][30]) => void');
    assert.strictEqual(typeItem.members[2].arraySize, 0);
    assert.strictEqual(typeItem.members[3].name, 'deconstruct');
    assert.strictEqual(typeItem.members[3].type, '() => void');
    assert.strictEqual(typeItem.members[3].arraySize, 0);
  });

  //47, 测试 parseType 测试选择少类型情况
  test('parseType_ts_test_47', () => {
    let testtype = `type OTC<Type extends Basic> = {
        len: Type;
        name? Type[10][20];
        contruct: (a?: Type[10][20][30]) => void;
        deconstruct: () => void;
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.functions.length, 0);

    assert.strictEqual(typeItem.members.length, 2);
    assert.strictEqual(typeItem.members[0].name, 'len');
    assert.strictEqual(typeItem.members[0].type, 'Type');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    assert.strictEqual(typeItem.members[1].name, 'name');
    assert.strictEqual(typeItem.members[1].type, 'unknown');
    assert.strictEqual(typeItem.members[1].arraySize, 0);
    // assert.strictEqual(typeItem.members[2].name, 'contruct');
    // assert.strictEqual(typeItem.members[2].type, '(a?: Type[10][20][30]) => void');
    // assert.strictEqual(typeItem.members[2].arraySize, 0);
    // assert.strictEqual(typeItem.members[3].name, 'deconstruct');
    // assert.strictEqual(typeItem.members[3].type, '() => void');
    // assert.strictEqual(typeItem.members[3].arraySize, 0);
    
  });

  //48, 测试 parseType 测试注释选择情况
  test('parseType_ts_test_48', () => {
    let testtype = `/* 
      type OTC = {
        len: Type; 
        name?: Type[10][20];  
        contruct : (a?: Type[10][20][30]) => void;
        deconstruct : () => void;
    } */;`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 0);
    
  });

  //49, 测试 parseType 空类情况
  test('parseType_ts_test_49', () => {
    let testtype = `type OTC =  {}; type OTC2 = {};`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 2);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    typeItem = typeObjList.types[1];
    assert.strictEqual(typeItem.name, 'OTC2');
  });

  //50, 测试 parseType 少分号情况
  test('parseType_ts_test_50', () => {
    let testtype = `type OTC = {
        aname: string
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.functions.length, 0);
    assert.strictEqual(typeItem.members.length, 1);
    assert.strictEqual(typeItem.members[0].name, 'aname');
    assert.strictEqual(typeItem.members[0].type, 'string');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    
  });

  //51, 测试 parseType 扩展类型少括号情况
  test('parseType_ts_test_51', () => {
    let testtype = `type OTC = {
        const cc: ColorfulCircle = {
          color: "red",
          radius: 42,
        
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.functions.length, 0);
    assert.strictEqual(typeItem.members.length, 2);
    assert.strictEqual(typeItem.members[0].name, 'const');
    assert.strictEqual(typeItem.members[0].type, 'unknown');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    assert.strictEqual(typeItem.members[1].name, 'cc');
    assert.strictEqual(typeItem.members[1].type, 'ColorfulCircle');
    assert.strictEqual(typeItem.members[1].arraySize, 0);
  });

  //52, 测试 parseType 交集类型错误情况
  test('parseType_ts_test_52', () => {
    let testtype = `type OTC = {
        const cc: Colorful & ;
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.functions.length, 0);
    assert.strictEqual(typeItem.members.length, 2);
    assert.strictEqual(typeItem.members[0].name, 'const');
    assert.strictEqual(typeItem.members[0].type, 'unknown');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    assert.strictEqual(typeItem.members[1].name, 'cc');
    assert.strictEqual(typeItem.members[1].type, 'Colorful &');
    assert.strictEqual(typeItem.members[1].arraySize, 0);
    
  });

  //53, 测试 parseType 泛型对象类型少尖括号情况
  test('parseType_ts_test_53', () => {
    let testtype = `type OTC = {
        const cc: any;
        readonly contents: unknown;
        cont: "hello world";
        ents: Type;
        val: OrNull<OneOrMany<Type>;

    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.functions.length, 0);
    assert.strictEqual(typeItem.members.length, 6);
    assert.strictEqual(typeItem.members[0].name, 'const');
    assert.strictEqual(typeItem.members[0].type, 'unknown');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    assert.strictEqual(typeItem.members[1].name, 'cc');
    assert.strictEqual(typeItem.members[1].type, 'any');
    assert.strictEqual(typeItem.members[1].arraySize, 0);
    assert.strictEqual(typeItem.members[2].name, 'contents');
    assert.strictEqual(typeItem.members[2].type, 'unknown');
    assert.strictEqual(typeItem.members[2].arraySize, 0);
    assert.strictEqual(typeItem.members[3].name, 'cont');
    assert.strictEqual(typeItem.members[3].type, '"hello world"');
    assert.strictEqual(typeItem.members[3].arraySize, 0);
    assert.strictEqual(typeItem.members[4].name, 'ents');
    assert.strictEqual(typeItem.members[4].type, 'Type');
    assert.strictEqual(typeItem.members[4].arraySize, 0);
    assert.strictEqual(typeItem.members[5].name, 'val');
    assert.strictEqual(typeItem.members[5].type, 'OrNull<OneOrMany<Type>');
    assert.strictEqual(typeItem.members[5].arraySize, 0);
  });

  //54, 测试 parseType readonly array对象少]类型情况
  test('parseType_ts_test_54', () => {
    let testtype = `type OTC = {
        const roArray: ReadonlyArray<string> = ["red", "green", "blue";
        readonly contents: roArray.slice();
        x: readonly string[] = [;
        a: pair[0];
        const [x, y, z] = coord;
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.functions.length, 0);
    assert.strictEqual(typeItem.members.length, 4);
    assert.strictEqual(typeItem.members[0].name, 'const');
    assert.strictEqual(typeItem.members[0].type, 'unknown');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    assert.strictEqual(typeItem.members[1].name, 'roArray');
    assert.strictEqual(typeItem.members[1].type, 'ReadonlyArray<string>');
    assert.strictEqual(typeItem.members[1].arraySize, 0);
    assert.strictEqual(typeItem.members[2].name, 'const');
    assert.strictEqual(typeItem.members[2].type, 'unknown');
    assert.strictEqual(typeItem.members[2].arraySize, 0);
    assert.strictEqual(typeItem.members[3].name, 'coord');
    assert.strictEqual(typeItem.members[3].type, 'unknown');
    assert.strictEqual(typeItem.members[3].arraySize, 0);
  });

  //55, 测试 parseType 剩余元素类型情况
  test('parseType_ts_test_55', () => {
    let testtype = `type OTC = {
      const a: StringNumberBooleans = ["hello", ;
      const b: StringNumberBooleans = ["beautiful", 2, true;
      const c: StringNumberBooleans = ["world", 3, true, false, true, false, ...;
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.functions.length, 0);
    assert.strictEqual(typeItem.members.length, 6);
    assert.strictEqual(typeItem.members[0].name, 'const');
    assert.strictEqual(typeItem.members[0].type, 'unknown');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    assert.strictEqual(typeItem.members[1].name, 'a');
    assert.strictEqual(typeItem.members[1].type, 'StringNumberBooleans');
    assert.strictEqual(typeItem.members[1].arraySize, 0);
    assert.strictEqual(typeItem.members[2].name, 'const');
    assert.strictEqual(typeItem.members[2].type, 'unknown');
    assert.strictEqual(typeItem.members[2].arraySize, 0);
    assert.strictEqual(typeItem.members[3].name, 'b');
    assert.strictEqual(typeItem.members[3].type, 'StringNumberBooleans');
    assert.strictEqual(typeItem.members[3].arraySize, 0);
    assert.strictEqual(typeItem.members[4].name, 'const');
    assert.strictEqual(typeItem.members[4].type, 'unknown');
    assert.strictEqual(typeItem.members[4].arraySize, 0);
    assert.strictEqual(typeItem.members[5].name, 'c');
    assert.strictEqual(typeItem.members[5].type, 'StringNumberBooleans');
    assert.strictEqual(typeItem.members[5].arraySize, 0);
  });

  //56, 测试 parseType 元祖类型少类型情况
  test('parseType_ts_test_56', () => {
    let testtype = `type OTC = {
      pair: readonly [string, ];
      [x, y]: [number, ];
      const c: [3, 4] as ;
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.functions.length, 0);
    assert.strictEqual(typeItem.members.length, 4);
    assert.strictEqual(typeItem.members[0].name, 'pair');
    assert.strictEqual(typeItem.members[0].type, 'readonly [string, ]');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    assert.strictEqual(typeItem.members[1].name, 'const');
    assert.strictEqual(typeItem.members[1].type, 'unknown');
    assert.strictEqual(typeItem.members[1].arraySize, 0);
    assert.strictEqual(typeItem.members[2].name, 'c');
    assert.strictEqual(typeItem.members[2].type, '[3, 4]');
    assert.strictEqual(typeItem.members[2].arraySize, 0);
    assert.strictEqual(typeItem.members[3].name, 'as');
    assert.strictEqual(typeItem.members[3].type, 'unknown');
    assert.strictEqual(typeItem.members[3].arraySize, 0);
  });

  //57, 测试 parseType keyof少类型情况
  test('parseType_ts_test_57', () => {
    let testtype = `type OTC = {
      pair: keyof ;
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.functions.length, 0);
    assert.strictEqual(typeItem.members.length, 1);
    assert.strictEqual(typeItem.members[0].name, 'pair');
    assert.strictEqual(typeItem.members[0].type, 'keyof');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
  });

  //58, 测试 parseType typeof少类型情况
  test('parseType_ts_test_58', () => {
    let testtype = `type OTC = {
      pair: typeof "Hello world";
      name: typeof ;
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.functions.length, 0);
    assert.strictEqual(typeItem.members.length, 3);
    assert.strictEqual(typeItem.members[0].name, 'pair');
    assert.strictEqual(typeItem.members[0].type, 'typeof');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    assert.strictEqual(typeItem.members[1].name, '"Hello world"');
    assert.strictEqual(typeItem.members[1].type, 'unknown');
    assert.strictEqual(typeItem.members[1].arraySize, 0);
    assert.strictEqual(typeItem.members[2].name, 'name');
    assert.strictEqual(typeItem.members[2].type, 'typeof');
    assert.strictEqual(typeItem.members[2].arraySize, 0);
  });

  //59, 测试 parseType 索引访问少]类型情况
  test('parseType_ts_test_59', () => {
    let testtype = `type OTC = {
      pair: Person["age];
      name: Person["age" | "name";
      test: Person[keyof Person;
      obj: Person[AliveOrName;
      amo: typeof MyArray[number;
      topy: Person[pair;
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.functions.length, 0);
    assert.strictEqual(typeItem.members.length, 6);
    assert.strictEqual(typeItem.members[0].name, 'pair');
    assert.strictEqual(typeItem.members[0].type, 'Person["age];');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    assert.strictEqual(typeItem.members[1].name, 'name');
    assert.strictEqual(typeItem.members[1].type, 'Person["age" | "name"');
    assert.strictEqual(typeItem.members[1].arraySize, 0);
    assert.strictEqual(typeItem.members[2].name, 'test');
    assert.strictEqual(typeItem.members[2].type, 'Person[keyof Person');
    assert.strictEqual(typeItem.members[2].arraySize, 0);
    assert.strictEqual(typeItem.members[3].name, 'obj');
    assert.strictEqual(typeItem.members[3].type, 'Person[AliveOrName');
    assert.strictEqual(typeItem.members[3].arraySize, 0);
    assert.strictEqual(typeItem.members[4].name, 'amo');
    assert.strictEqual(typeItem.members[4].type, 'typeof MyArray[number');
    assert.strictEqual(typeItem.members[4].arraySize, 0);
    assert.strictEqual(typeItem.members[5].name, 'topy');
    assert.strictEqual(typeItem.members[5].type, 'Person[pair');
    assert.strictEqual(typeItem.members[5].arraySize, 0);
  });

  //60, 测试 parseType 条件类型少选项情况
  test('parseType_ts_test_60', () => {
    let testtype = `type OTC = {
      pair: Dog extends Animal ? number ;
      name: T extends number ? IdLabel ;
      test: T extends { message: unknown };
      obj: Type extends Array<infer Item> ? Item :;
      oamp: Type extends any ?  : never;
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.functions.length, 0);
    assert.strictEqual(typeItem.members.length, 5);
    assert.strictEqual(typeItem.members[0].name, 'pair');
    assert.strictEqual(typeItem.members[0].type, 'Dog extends Animal ? number');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    assert.strictEqual(typeItem.members[1].name, 'name');
    assert.strictEqual(typeItem.members[1].type, 'T extends number ? IdLabel');
    assert.strictEqual(typeItem.members[1].arraySize, 0);
    assert.strictEqual(typeItem.members[2].name, 'test');
    assert.strictEqual(typeItem.members[2].type, 'T extends { message: unknown }');
    assert.strictEqual(typeItem.members[2].arraySize, 0);
    assert.strictEqual(typeItem.members[3].name, 'obj');
    assert.strictEqual(typeItem.members[3].type, 'Type extends Array<infer Item> ? Item :');
    assert.strictEqual(typeItem.members[3].arraySize, 0);
    assert.strictEqual(typeItem.members[4].name, 'oamp');
    assert.strictEqual(typeItem.members[4].type, 'Type extends any ?  : never');
    assert.strictEqual(typeItem.members[4].arraySize, 0);

  });

  //61, 测试 parseType 映射少类型情况
  test('parseType_ts_test_61', () => {
    let testtype = `type OTC = {
      [key: string]: boolean | ;
      [Property in keyof Type]: ;
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.functions.length, 0);
    assert.strictEqual(typeItem.members.length, 1);
    assert.strictEqual(typeItem.members[0].name, '[Property in keyof');
    assert.strictEqual(typeItem.members[0].type, 'unknown');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
  
  });

  //62, 测试 parseType 模板字面少“类型情况
  test('parseType_ts_test_62', () => {
    let testtype = `type OTC = {
      pair: 1;
      name: "welcome_email" | "email_heading;
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.functions.length, 0);
    
    assert.strictEqual(typeItem.members.length, 2);
    assert.strictEqual(typeItem.members[0].name, 'pair');
    assert.strictEqual(typeItem.members[0].type, '1');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    assert.strictEqual(typeItem.members[1].name, 'name');
    assert.strictEqual(typeItem.members[1].type, '"welcome_email" | "email_heading;');
    assert.strictEqual(typeItem.members[1].arraySize, 0);

  });

  //63, 测试 parseType 内在字符串操作类型情况
  test('parseType_ts_test_63', () => {
    let testtype = `type OTC = {
      ShoutyGreeting: Uppercase<1>;
      QuietGreeting: Lowercase<true>;
      Greeting: Capitalize<unknown>;
      UncomfortableGreeting: Uncapitalize<undefined>;
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.functions.length, 0);
    assert.strictEqual(typeItem.members.length, 4);
    assert.strictEqual(typeItem.members[0].name, 'ShoutyGreeting');
    assert.strictEqual(typeItem.members[0].type, 'Uppercase<1>');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    assert.strictEqual(typeItem.members[1].name, 'QuietGreeting');
    assert.strictEqual(typeItem.members[1].type, 'Lowercase<true>');
    assert.strictEqual(typeItem.members[1].arraySize, 0);
    assert.strictEqual(typeItem.members[2].name, 'Greeting');
    assert.strictEqual(typeItem.members[2].type, 'Capitalize<unknown>');
    assert.strictEqual(typeItem.members[2].arraySize, 0);
    assert.strictEqual(typeItem.members[3].name, 'UncomfortableGreeting');
    assert.strictEqual(typeItem.members[3].type, 'Uncapitalize<undefined>');
    assert.strictEqual(typeItem.members[3].arraySize, 0);

  });

  //64, 测试 parseType export 在一行情况
  test('parseType_ts_test_64', () => {
    let testtype = `export type OTC = {len: number;name: string; contruct: (a: number) => void;deconstruct:() => void;};`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.functions.length, 0);

    assert.strictEqual(typeItem.members.length, 4);
    assert.strictEqual(typeItem.members[0].name, 'len');
    assert.strictEqual(typeItem.members[0].type, 'number');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    assert.strictEqual(typeItem.members[1].name, 'name');
    assert.strictEqual(typeItem.members[1].type, 'string');
    assert.strictEqual(typeItem.members[1].arraySize, 0);
    assert.strictEqual(typeItem.members[2].name, 'contruct');
    assert.strictEqual(typeItem.members[2].type, '(a: number) => void');
    assert.strictEqual(typeItem.members[2].arraySize, 0);
    assert.strictEqual(typeItem.members[3].name, 'deconstruct');
    assert.strictEqual(typeItem.members[3].type, '() => void');
    assert.strictEqual(typeItem.members[3].arraySize, 0);
  });

  //65, 测试 parseType 库文件在一行情况
  test('parseType_ts_test_65', () => {
    let testtype = `type OTC = { len: require("mylib");};`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.functions.length, 0);

    assert.strictEqual(typeItem.members.length, 1);
    assert.strictEqual(typeItem.members[0].name, 'len');
    assert.strictEqual(typeItem.members[0].type, 'require');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    
  });

  //66, 测试 parseType declare namespace 情况
  test('parseType_ts_test_66', () => {
    let testtype = `declare namespace { export type OTC = { len: number; name: string; contruct: (a: number) => void;}};`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.functions.length, 0);

    assert.strictEqual(typeItem.members.length, 3);
    assert.strictEqual(typeItem.members[0].name, 'len');
    assert.strictEqual(typeItem.members[0].type, 'number');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    assert.strictEqual(typeItem.members[1].name, 'name');
    assert.strictEqual(typeItem.members[1].type, 'string');
    assert.strictEqual(typeItem.members[1].arraySize, 0);
    assert.strictEqual(typeItem.members[2].name, 'contruct');
    assert.strictEqual(typeItem.members[2].type, '(a: number) => void');
    assert.strictEqual(typeItem.members[2].arraySize, 0);
  });

  //67, 测试 parseType extend自己 情况
  test('parseType_ts_test_67', () => {
    let testtype = `declare namespace {
      export type OTC2 = OTC2 & {
        len2: number;
        name2: string;
        contruct2: (a: number) => void;
        deconstruct2: () => void;
      }
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
  
    assert.strictEqual(typeItem.name, 'OTC2');
    assert.strictEqual(typeItem.functions.length, 0);
  });

  //68, 测试 parseType 两个类不同 情况
  test('parseType_ts_test_68', () => {
    let testtype = `declare namespace {
      export type OTC = {len: number;name: string; contruct: (a: number) => void;deconstruct: () => void;}
      export type OTC2 = {len2: number;name2: string; contruct2(a: number): void; deconstruct2: () => void;}
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 2);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.functions.length, 0);

    assert.strictEqual(typeItem.members.length, 4);
    assert.strictEqual(typeItem.members[0].name, 'len');
    assert.strictEqual(typeItem.members[0].type, 'number');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    assert.strictEqual(typeItem.members[1].name, 'name');
    assert.strictEqual(typeItem.members[1].type, 'string');
    assert.strictEqual(typeItem.members[1].arraySize, 0);
    assert.strictEqual(typeItem.members[2].name, 'contruct');
    assert.strictEqual(typeItem.members[2].type, '(a: number) => void');
    assert.strictEqual(typeItem.members[2].arraySize, 0);
    assert.strictEqual(typeItem.members[3].name, 'deconstruct');
    assert.strictEqual(typeItem.members[3].type, '() => void');
    assert.strictEqual(typeItem.members[3].arraySize, 0);

    typeItem = typeObjList.types[1];
    assert.strictEqual(typeItem.name, 'OTC2');
    assert.strictEqual(typeItem.functions.length, 1);
    assert.strictEqual(typeItem.functions[0].name, 'contruct2');
    assert.strictEqual(typeItem.functions[0].returns, 'void');
    assert.strictEqual(typeItem.functions[0].parameters.length, 1);
    assert.strictEqual(typeItem.functions[0].parameters[0].name, 'a');
    assert.strictEqual(typeItem.functions[0].parameters[0].type, 'number');
    assert.strictEqual(typeItem.functions[0].parameters[0].arraySize, 0);

    assert.strictEqual(typeItem.members.length, 3);
    assert.strictEqual(typeItem.members[0].name, 'len2');
    assert.strictEqual(typeItem.members[0].type, 'number');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    assert.strictEqual(typeItem.members[1].name, 'name2');
    assert.strictEqual(typeItem.members[1].type, 'string');
    assert.strictEqual(typeItem.members[1].arraySize, 0);
    assert.strictEqual(typeItem.members[2].name, 'deconstruct2');
    assert.strictEqual(typeItem.members[2].type, '() => void');
    assert.strictEqual(typeItem.members[2].arraySize, 0);

  });

  //69, 测试 parseType 特殊符号不同 情况
  test('parseType_ts_test_69', () => {
    let testtype = `declare namespace {
      export type OTC = {
        public len?: number;
        private name!: string; 
        contruct: (...a: number[]) => void;
        deconstruct: () => void;
      }
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.functions.length, 0);
    // assert.strictEqual(typeItem.functions[0].name, 'contruct');
    // assert.strictEqual(typeItem.functions[0].returns, 'void');
    // assert.strictEqual(typeItem.functions[0].parameters.length, 1);
    // assert.strictEqual(typeItem.functions[0].parameters[0].name, 'a');
    // assert.strictEqual(typeItem.functions[0].parameters[0].type, 'Array<number>');
    // assert.strictEqual(typeItem.functions[0].parameters[0].arraySize, 0);
    // assert.strictEqual(typeItem.functions[1].name, 'deconstruct');
    // assert.strictEqual(typeItem.functions[1].returns, 'void');

    assert.strictEqual(typeItem.members.length, 1);
    assert.strictEqual(typeItem.members[0].name, 'len');
    assert.strictEqual(typeItem.members[0].type, 'number');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    // assert.strictEqual(typeItem.members[1].name, 'name');
    // assert.strictEqual(typeItem.members[1].type, 'string');
    // assert.strictEqual(typeItem.members[1].arraySize, 0);

  });

  //70, 测试 parseType 重构 情况
  test('parseType_ts_test_70', () => {
    let testtype = `declare namespace {
      export type OTC = {
        len: (s: string) => number;
        len: (arr: any[]) => number;
        len: (x: any) => number;
      }
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.members.length, 3);
    assert.strictEqual(typeItem.members[0].name, 'len');
    assert.strictEqual(typeItem.members[0].type, '(s: string) => number');
    assert.strictEqual(typeItem.members[1].name, 'len');
    assert.strictEqual(typeItem.members[1].type, '(arr: any[]) => number');
    assert.strictEqual(typeItem.members[2].name, 'len');
    assert.strictEqual(typeItem.members[2].type, '(x: any) => number');
    

  });

  //71, 测试 parseType 函数重载错误 情况
  test('parseType_ts_test_71', () => {
    let testtype = `declare namespace {
      export type OTC = {
        len:(s: string) => number;
        len: (arr: number[]) => number;
        len:(x: any) => number;
      }
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 1);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.members.length, 3);
    assert.strictEqual(typeItem.members[0].name, 'len');
    assert.strictEqual(typeItem.members[0].type, '(s: string) => number');

    assert.strictEqual(typeItem.members[1].name, 'len');
    assert.strictEqual(typeItem.members[1].type, '(arr: number[]) => number');

    assert.strictEqual(typeItem.members[2].name, 'len');
    assert.strictEqual(typeItem.members[2].type, '(x: any) => number');


  });

  //72, 测试 parseType this 情况
  test('parseType_ts_test_72', () => {
    let testtype = `declare namespace {
      export type User = {
        static id: number;
        const admin: boolean;
      };
      abstract type OTC = {
        protected filterUsers: (filter: (this: User) => boolean) => User[];
      };
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 2);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'User');
    assert.strictEqual(typeItem.functions.length, 0);

    assert.strictEqual(typeItem.members.length, 3);
    assert.strictEqual(typeItem.members[0].name, 'id');
    assert.strictEqual(typeItem.members[0].type, 'number');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    assert.strictEqual(typeItem.members[1].name, 'const');
    assert.strictEqual(typeItem.members[1].type, 'unknown');
    assert.strictEqual(typeItem.members[1].arraySize, 0);
    assert.strictEqual(typeItem.members[2].name, 'admin');
    assert.strictEqual(typeItem.members[2].type, 'boolean');
    assert.strictEqual(typeItem.members[2].arraySize, 0);

    typeItem = typeObjList.types[1];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.members.length, 1);
    assert.strictEqual(typeItem.members[0].name, 'filterUsers');
    assert.strictEqual(typeItem.members[0].type, '(filter: (this: User) => boolean) => User[]');
    assert.strictEqual(typeItem.members[0].arraySize, 0);

  });

  //73, 测试 parseType 函数可分配 情况
  test('parseType_ts_test_73', () => {
    let testtype = `
    type voidFunc = () => void;
    declare namespace {
      export type OTC = {
        const f1: voidFunc = () => {
          return true;
        };

        const f2: voidFunc = () => true;

        const f3: voidFunc = function () {
          return true;
        };
      };
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 2);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'voidFunc');
    assert.strictEqual(typeItem.functions.length, 0);
    assert.strictEqual(typeItem.members.length, 0);

    typeItem = typeObjList.types[1];
    assert.strictEqual(typeItem.name, 'OTC');
    assert.strictEqual(typeItem.functions.length, 0);

    assert.strictEqual(typeItem.members.length, 6);
    assert.strictEqual(typeItem.members[0].name, 'const');
    assert.strictEqual(typeItem.members[0].type, 'unknown');
    assert.strictEqual(typeItem.members[0].arraySize, 0);
    assert.strictEqual(typeItem.members[1].name, 'f1');
    assert.strictEqual(typeItem.members[1].type, 'voidFunc');
    assert.strictEqual(typeItem.members[1].arraySize, 0);
    assert.strictEqual(typeItem.members[2].name, 'const');
    assert.strictEqual(typeItem.members[2].type, 'unknown');
    assert.strictEqual(typeItem.members[2].arraySize, 0);
    assert.strictEqual(typeItem.members[3].name, 'f2');
    assert.strictEqual(typeItem.members[3].type, 'voidFunc');
    assert.strictEqual(typeItem.members[3].arraySize, 0);
    assert.strictEqual(typeItem.members[4].name, 'const');
    assert.strictEqual(typeItem.members[4].type, 'unknown');
    assert.strictEqual(typeItem.members[4].arraySize, 0);
    assert.strictEqual(typeItem.members[5].name, 'f3');
    assert.strictEqual(typeItem.members[5].type, 'voidFunc');
    assert.strictEqual(typeItem.members[5].arraySize, 0);

  });

  //74, 测试 parseType 获取器，设置器 情况
  test('parseType_ts_test_74', () => {
    let testtype = `
    type voidFunc = () => void;
    declare namespace {
      export type C = {
        _length = 0;
        get length() {
          return this._length;
        }
        set length(value) {
          this._length = value;
        }
      }
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 2);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'voidFunc');
    assert.strictEqual(typeItem.functions.length, 0);
    assert.strictEqual(typeItem.members.length, 0);

    typeItem = typeObjList.types[1];
    assert.strictEqual(typeItem.name, 'C');
    assert.strictEqual(typeItem.functions.length, 0);

    assert.strictEqual(typeItem.members.length, 0);
    // assert.strictEqual(typeItem.members[0].name, '_length');
    // assert.strictEqual(typeItem.members[0].type, 'void');
    // assert.strictEqual(typeItem.members[0].arraySize, 0);

  });

  //75, 测试 parseType 基类继承实现 情况
  test('parseType_ts_test_75', () => {
    let testtype = `
      type voidFunc = () => void;
      declare namespace {
        type Pingable = {
          ping: () => void;
        }

        type Sonar = Pingable & {
          ping: () => void;
        }

        type Ball = Pingable & {
          pong: () => void;
        }
    };`
    let typeObjList = parsets.doParseTs("test.ts", testtype);
    assert.strictEqual(typeObjList.types?.length, 4);
    let typeItem = typeObjList.types[0];
    assert.strictEqual(typeItem.name, 'voidFunc');
    assert.strictEqual(typeItem.functions.length, 0);
    assert.strictEqual(typeItem.members.length, 0);

    typeItem = typeObjList.types[1];
    assert.strictEqual(typeItem.name, 'Pingable');
    assert.strictEqual(typeItem.functions.length, 0);
    assert.strictEqual(typeItem.members.length, 1);
    assert.strictEqual(typeItem.members[0].name, 'ping');
    assert.strictEqual(typeItem.members[0].type, '() => void');
    assert.strictEqual(typeItem.members[0].arraySize, 0);

    typeItem = typeObjList.types[2];
    assert.strictEqual(typeItem.name, 'Sonar');
    assert.strictEqual(typeItem.functions.length, 0);
    assert.strictEqual(typeItem.members.length, 0);
    // assert.strictEqual(typeItem.members[0].name, 'ping');
    // assert.strictEqual(typeItem.members[0].type, '() => void');
    // assert.strictEqual(typeItem.members[0].arraySize, 0);

    typeItem = typeObjList.types[3];
    assert.strictEqual(typeItem.name, 'Ball');
    assert.strictEqual(typeItem.functions.length, 0);
    assert.strictEqual(typeItem.members.length, 0);
    // assert.strictEqual(typeItem.members[0].name, 'pong');
    // assert.strictEqual(typeItem.members[0].type, '() => void');
    // assert.strictEqual(typeItem.members[0].arraySize, 0);

  });
})