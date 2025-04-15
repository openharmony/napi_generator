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

suite('Parse_Class_TS_Suite', () => {
  vscode.window.showInformationMessage('Start all tests.');
  
  //1, 测试 parseClass 一般情况
  test('parseClass_ts_test_1', () => {
    let testclass = `class OTC {
        len: number;
        name: string;
        contruct(a: number) {
        };
        deconstruct() {};
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 2);
    assert.strictEqual(classItem.functionList[0].name, 'contruct');
    assert.strictEqual(classItem.functionList[0].returns, 'void');
    assert.strictEqual(classItem.functionList[0].parameters.length, 1);
    assert.strictEqual(classItem.functionList[0].parameters[0].name, 'a');
    assert.strictEqual(classItem.functionList[0].parameters[0].type, 'number');
    assert.strictEqual(classItem.functionList[0].parameters[0].arraySize, 0);
    assert.strictEqual(classItem.functionList[1].name, 'deconstruct');
    assert.strictEqual(classItem.functionList[1].returns, 'void');

    assert.strictEqual(classItem.variableList.length, 2);
    assert.strictEqual(classItem.variableList[0].name, 'len');
    assert.strictEqual(classItem.variableList[0].type, 'number');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    assert.strictEqual(classItem.variableList[1].name, 'name');
    assert.strictEqual(classItem.variableList[1].type, 'string');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
  });

  //2, 测试 parseClass 类型覆盖情况
  test('parseClass_ts_test_2', () => {
    let testclass = `class OTC {
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
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.variableList.length, 30);
    assert.strictEqual(classItem.variableList[0].name, 'len');
    assert.strictEqual(classItem.variableList[0].type, 'number');
    assert.strictEqual(classItem.variableList[1].name, 'name');
    assert.strictEqual(classItem.variableList[1].type, 'string');
    assert.strictEqual(classItem.variableList[2].name, 'flag');
    assert.strictEqual(classItem.variableList[2].type, 'boolean');
    assert.strictEqual(classItem.variableList[3].name, 'obj');
    assert.strictEqual(classItem.variableList[3].type, 'any');
    assert.strictEqual(classItem.variableList[4].name, 'llen');
    assert.strictEqual(classItem.variableList[4].type, 'number[]');
    assert.strictEqual(classItem.variableList[5].name, 'lstr');
    assert.strictEqual(classItem.variableList[5].type, 'string[]');
    assert.strictEqual(classItem.variableList[6].name, 'lflag');
    assert.strictEqual(classItem.variableList[6].type, 'boolean[]');
    assert.strictEqual(classItem.variableList[7].name, 'lobj');
    assert.strictEqual(classItem.variableList[7].type, 'any[]');
    assert.strictEqual(classItem.variableList[8].name, 'tdef');
    assert.strictEqual(classItem.variableList[8].type, 'aclass');
    assert.strictEqual(classItem.variableList[9].name, 'ltdef');
    assert.strictEqual(classItem.variableList[9].type, 'aclass[]');
    assert.strictEqual(classItem.variableList[10].name, 'funcdef');
    assert.strictEqual(classItem.variableList[10].type, '() => {}');
    assert.strictEqual(classItem.variableList[11].name, 'nfundef');
    assert.strictEqual(classItem.variableList[11].type, '((a: number)=> number)');
    assert.strictEqual(classItem.variableList[12].name, 'strfundef');
    assert.strictEqual(classItem.variableList[12].type, '((a: string)=> string)');
    assert.strictEqual(classItem.variableList[13].name, 'bfundef');
    assert.strictEqual(classItem.variableList[13].type, '(a: boolean)=> boolean');
    assert.strictEqual(classItem.variableList[14].name, 'afundef');
    assert.strictEqual(classItem.variableList[14].type, '(a: any)=> any');
    assert.strictEqual(classItem.variableList[15].name, 'tfundef');
    assert.strictEqual(classItem.variableList[15].type, '(a: tclass)=> tclass');
    assert.strictEqual(classItem.variableList[16].name, 'lnfundef');
    assert.strictEqual(classItem.variableList[16].type, '(a: number[])=> number[]');
    assert.strictEqual(classItem.variableList[17].name, 'lstrfundef');
    assert.strictEqual(classItem.variableList[17].type, '(a: string[])=> string[]');
    assert.strictEqual(classItem.variableList[18].name, 'lbfundef');
    assert.strictEqual(classItem.variableList[18].type, '(a: boolean[])=> boolean[]');
    assert.strictEqual(classItem.variableList[19].name, 'lafundef');
    assert.strictEqual(classItem.variableList[19].type, '(a: any[])=> any[]');
    assert.strictEqual(classItem.variableList[20].name, 'ltfundef');
    assert.strictEqual(classItem.variableList[20].type, '(a: tclass[])=> tclass[]');
    assert.strictEqual(classItem.variableList[21].name, 'mapstr');
    assert.strictEqual(classItem.variableList[21].type, 'Map<string, string>');
    assert.strictEqual(classItem.variableList[22].name, 'mapnum');
    assert.strictEqual(classItem.variableList[22].type, 'Map<string, number>');
    assert.strictEqual(classItem.variableList[23].name, 'mapbool');
    assert.strictEqual(classItem.variableList[23].type, 'Map<string, boolean>');
    assert.strictEqual(classItem.variableList[24].name, 'arraystr');
    assert.strictEqual(classItem.variableList[24].type, 'Array<string>');
    assert.strictEqual(classItem.variableList[25].name, 'arraynum');
    assert.strictEqual(classItem.variableList[25].type, 'Array<number>');
    assert.strictEqual(classItem.variableList[26].name, 'arraybool');
    assert.strictEqual(classItem.variableList[26].type, 'Array<boolean>');
    assert.strictEqual(classItem.variableList[27].name, 'setstr');
    assert.strictEqual(classItem.variableList[27].type, 'Set<string>');
    assert.strictEqual(classItem.variableList[28].name, 'setnum');
    assert.strictEqual(classItem.variableList[28].type, 'Set<number>');
    assert.strictEqual(classItem.variableList[29].name, 'setbool');
    assert.strictEqual(classItem.variableList[29].type, 'Set<boolean>');


    assert.strictEqual(classItem.functionList.length, 13);
    assert.strictEqual(classItem.functionList[0].name, 'contruct');
    assert.strictEqual(classItem.functionList[0].returns, 'void');
    assert.strictEqual(classItem.functionList[0].parameters.length, 1);
    assert.strictEqual(classItem.functionList[0].parameters[0].name, 'a');
    assert.strictEqual(classItem.functionList[0].parameters[0].type, 'number');
    assert.strictEqual(classItem.functionList[0].parameters[0].arraySize, 0);
    assert.strictEqual(classItem.functionList[1].name, 'deconstruct');
    assert.strictEqual(classItem.functionList[1].returns, 'void');
    assert.strictEqual(classItem.functionList[2].name, 'nfunc');
    assert.strictEqual(classItem.functionList[2].returns, 'number');
    assert.strictEqual(classItem.functionList[2].parameters.length, 1);
    assert.strictEqual(classItem.functionList[2].parameters[0].name, 'num');
    assert.strictEqual(classItem.functionList[2].parameters[0].type, 'number');
    assert.strictEqual(classItem.functionList[2].parameters[0].arraySize, 0);
    assert.strictEqual(classItem.functionList[3].name, 'sfunc');
    assert.strictEqual(classItem.functionList[3].returns, 'string');
    assert.strictEqual(classItem.functionList[3].parameters.length, 1);
    assert.strictEqual(classItem.functionList[3].parameters[0].name, 'str');
    assert.strictEqual(classItem.functionList[3].parameters[0].type, 'string');
    assert.strictEqual(classItem.functionList[3].parameters[0].arraySize, 0);
    assert.strictEqual(classItem.functionList[4].name, 'bfunc');
    assert.strictEqual(classItem.functionList[4].returns, 'boolean');
    assert.strictEqual(classItem.functionList[4].parameters.length, 1);
    assert.strictEqual(classItem.functionList[4].parameters[0].name, 'flag');
    assert.strictEqual(classItem.functionList[4].parameters[0].type, 'boolean');
    assert.strictEqual(classItem.functionList[4].parameters[0].arraySize, 0);
    assert.strictEqual(classItem.functionList[5].name, 'afunc');
    assert.strictEqual(classItem.functionList[5].returns, 'any');
    assert.strictEqual(classItem.functionList[5].parameters.length, 1);
    assert.strictEqual(classItem.functionList[5].parameters[0].name, 'obj');
    assert.strictEqual(classItem.functionList[5].parameters[0].type, 'any');
    assert.strictEqual(classItem.functionList[5].parameters[0].arraySize, 0);
    assert.strictEqual(classItem.functionList[6].name, 'tfunc');
    assert.strictEqual(classItem.functionList[6].returns, 'any');
    assert.strictEqual(classItem.functionList[6].parameters.length, 1);
    assert.strictEqual(classItem.functionList[6].parameters[0].name, 'obj');
    assert.strictEqual(classItem.functionList[6].parameters[0].type, 'tclass');
    assert.strictEqual(classItem.functionList[6].parameters[0].arraySize, 0);
    assert.strictEqual(classItem.functionList[7].name, 'torfunc');
    assert.strictEqual(classItem.functionList[7].returns, 'tclass | string');
    assert.strictEqual(classItem.functionList[7].parameters.length, 1);
    assert.strictEqual(classItem.functionList[7].parameters[0].name, 'obj');
    assert.strictEqual(classItem.functionList[7].parameters[0].type, 'tclass | string');
    assert.strictEqual(classItem.functionList[7].parameters[0].arraySize, 0);
    assert.strictEqual(classItem.functionList[8].name, 'lnfunc');
    assert.strictEqual(classItem.functionList[8].returns, 'number[]');
    assert.strictEqual(classItem.functionList[8].parameters.length, 1);
    assert.strictEqual(classItem.functionList[8].parameters[0].name, 'num');
    assert.strictEqual(classItem.functionList[8].parameters[0].type, 'number[]');
    assert.strictEqual(classItem.functionList[8].parameters[0].arraySize, 0);
    assert.strictEqual(classItem.functionList[9].name, 'lsfunc');
    assert.strictEqual(classItem.functionList[9].returns, 'string[]');
    assert.strictEqual(classItem.functionList[9].parameters.length, 1);
    assert.strictEqual(classItem.functionList[9].parameters[0].name, 'str');
    assert.strictEqual(classItem.functionList[9].parameters[0].type, 'string[]');
    assert.strictEqual(classItem.functionList[9].parameters[0].arraySize, 0);
    assert.strictEqual(classItem.functionList[10].name, 'lbfunc');
    assert.strictEqual(classItem.functionList[10].returns, 'boolean[]');
    assert.strictEqual(classItem.functionList[10].parameters.length, 1);
    assert.strictEqual(classItem.functionList[10].parameters[0].name, 'flag');
    assert.strictEqual(classItem.functionList[10].parameters[0].type, 'boolean[]');
    assert.strictEqual(classItem.functionList[10].parameters[0].arraySize, 0);
    assert.strictEqual(classItem.functionList[11].name, 'lafunc');
    assert.strictEqual(classItem.functionList[11].returns, 'any[]');
    assert.strictEqual(classItem.functionList[11].parameters.length, 1);
    assert.strictEqual(classItem.functionList[11].parameters[0].name, 'obj');
    assert.strictEqual(classItem.functionList[11].parameters[0].type, 'any[]');
    assert.strictEqual(classItem.functionList[11].parameters[0].arraySize, 0);
    assert.strictEqual(classItem.functionList[12].name, 'ltfunc');
    assert.strictEqual(classItem.functionList[12].returns, 'tclass[]');
    assert.strictEqual(classItem.functionList[12].parameters.length, 1);
    assert.strictEqual(classItem.functionList[12].parameters[0].name, 'lobj');
    assert.strictEqual(classItem.functionList[12].parameters[0].type, 'tclass[]');
    assert.strictEqual(classItem.functionList[12].parameters[0].arraySize, 0);
  });

  //3, 测试 parseClass 模板类模板函数情况
  test('parseClass_ts_test_3', () => {
    let testclass = `class OTC<Type> {
        len: Type;
        name: Type[];
        add(a: Type) {
        };
        del: (x: Type, y: Type) => Type
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 1);
    assert.strictEqual(classItem.functionList[0].name, 'add');
    assert.strictEqual(classItem.functionList[0].returns, 'void');
    assert.strictEqual(classItem.functionList[0].parameters.length, 1);
    assert.strictEqual(classItem.functionList[0].parameters[0].name, 'a');
    assert.strictEqual(classItem.functionList[0].parameters[0].type, 'Type');
    assert.strictEqual(classItem.functionList[0].parameters[0].arraySize, 0);

    assert.strictEqual(classItem.variableList.length, 3);
    assert.strictEqual(classItem.variableList[0].name, 'len');
    assert.strictEqual(classItem.variableList[0].type, 'Type');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    assert.strictEqual(classItem.variableList[1].name, 'name');
    assert.strictEqual(classItem.variableList[1].type, 'Type[]');
    assert.strictEqual(classItem.variableList[1].arraySize, 0);
    assert.strictEqual(classItem.variableList[2].name, 'del');
    assert.strictEqual(classItem.variableList[2].type, '(x: Type, y: Type) => Type');
    assert.strictEqual(classItem.variableList[2].arraySize, 0);
  });

  //4, 测试 parseClass 继承情况
  test('parseClass_ts_test_4', () => {
    let testclass = `class OTC extends Basic {
        len: number;
        name: string;
        contruct(a: number) {
        };
        deconstruct() {};
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 2);
    assert.strictEqual(classItem.functionList[0].name, 'contruct');
    assert.strictEqual(classItem.functionList[0].returns, 'void');
    assert.strictEqual(classItem.functionList[0].parameters.length, 1);
    assert.strictEqual(classItem.functionList[0].parameters[0].name, 'a');
    assert.strictEqual(classItem.functionList[0].parameters[0].type, 'number');
    assert.strictEqual(classItem.functionList[0].parameters[0].arraySize, 0);
    assert.strictEqual(classItem.functionList[1].name, 'deconstruct');
    assert.strictEqual(classItem.functionList[1].returns, 'void');

    assert.strictEqual(classItem.variableList.length, 2);
    assert.strictEqual(classItem.variableList[0].name, 'len');
    assert.strictEqual(classItem.variableList[0].type, 'number');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    assert.strictEqual(classItem.variableList[1].name, 'name');
    assert.strictEqual(classItem.variableList[1].type, 'string');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
  });

  //5, 测试 parseClass 数组情况
  test('parseClass_ts_test_5', () => {
    let testclass = `class OTC extends Basic {
        len: number[10];
        name: string[10][20];
        contruct(a: number[10][20][30]) {
        };
        deconstruct() {};
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 2);
    assert.strictEqual(classItem.functionList[0].name, 'contruct');
    assert.strictEqual(classItem.functionList[0].returns, 'void');
    assert.strictEqual(classItem.functionList[0].parameters.length, 1);
    assert.strictEqual(classItem.functionList[0].parameters[0].name, 'a');
    assert.strictEqual(classItem.functionList[0].parameters[0].type, 'number[10][20][30]');
    assert.strictEqual(classItem.functionList[0].parameters[0].arraySize, 0);
    assert.strictEqual(classItem.functionList[1].name, 'deconstruct');
    assert.strictEqual(classItem.functionList[1].returns, 'void');

    assert.strictEqual(classItem.variableList.length, 2);
    assert.strictEqual(classItem.variableList[0].name, 'len');
    assert.strictEqual(classItem.variableList[0].type, 'number[10]');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    assert.strictEqual(classItem.variableList[1].name, 'name');
    assert.strictEqual(classItem.variableList[1].type, 'string[10][20]');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
  });

  //6, 测试 parseClass 测试模板继承情况
  test('parseClass_ts_test_6', () => {
    let testclass = `class OTC <Type extends Basic> {
        len: Type;
        name: Type[10][20];
        contruct(a: Type[10][20][30]) {
        };
        deconstruct() {};
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 2);
    assert.strictEqual(classItem.functionList[0].name, 'contruct');
    assert.strictEqual(classItem.functionList[0].returns, 'void');
    assert.strictEqual(classItem.functionList[0].parameters.length, 1);
    assert.strictEqual(classItem.functionList[0].parameters[0].name, 'a');
    assert.strictEqual(classItem.functionList[0].parameters[0].type, 'Type[10][20][30]');
    assert.strictEqual(classItem.functionList[0].parameters[0].arraySize, 0);
    assert.strictEqual(classItem.functionList[1].name, 'deconstruct');
    assert.strictEqual(classItem.functionList[1].returns, 'void');

    assert.strictEqual(classItem.variableList.length, 2);
    assert.strictEqual(classItem.variableList[0].name, 'len');
    assert.strictEqual(classItem.variableList[0].type, 'Type');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    assert.strictEqual(classItem.variableList[1].name, 'name');
    assert.strictEqual(classItem.variableList[1].type, 'Type[10][20]');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
  });

  //7, 测试 parseClass 测试选择情况
  test('parseClass_ts_test_7', () => {
    let testclass = `class OTC <Type extends Basic> {
        len: Type;
        name?: Type[10][20];
        contruct(a?: Type[10][20][30]) {
        };
        deconstruct() {};
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 2);
    assert.strictEqual(classItem.functionList[0].name, 'contruct');
    assert.strictEqual(classItem.functionList[0].returns, 'void');
    assert.strictEqual(classItem.functionList[0].parameters.length, 1);
    assert.strictEqual(classItem.functionList[0].parameters[0].name, 'a');
    assert.strictEqual(classItem.functionList[0].parameters[0].type, 'Type[10][20][30]');
    assert.strictEqual(classItem.functionList[0].parameters[0].arraySize, 0);
    assert.strictEqual(classItem.functionList[1].name, 'deconstruct');
    assert.strictEqual(classItem.functionList[1].returns, 'void');

    assert.strictEqual(classItem.variableList.length, 2);
    assert.strictEqual(classItem.variableList[0].name, 'len');
    assert.strictEqual(classItem.variableList[0].type, 'Type');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    assert.strictEqual(classItem.variableList[1].name, 'name');
    assert.strictEqual(classItem.variableList[1].type, 'Type[10][20]');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
  });

  //8, 测试 parseClass 测试注释选择情况
  test('parseClass_ts_test_8', () => {
    let testclass = `class OTC <Type extends Basic> {
        // 测试注释
        len: Type; //注释一
        name?: Type[10][20];  /*注释2*/
        contruct(a?: Type[10][20][30]) {
        /* ------
        * 注释3
        */
        };
        deconstruct() {};
        // ...
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 2);
    assert.strictEqual(classItem.functionList[0].name, 'contruct');
    assert.strictEqual(classItem.functionList[0].returns, 'void');
    assert.strictEqual(classItem.functionList[0].parameters.length, 1);
    assert.strictEqual(classItem.functionList[0].parameters[0].name, 'a');
    assert.strictEqual(classItem.functionList[0].parameters[0].type, 'Type[10][20][30]');
    assert.strictEqual(classItem.functionList[0].parameters[0].arraySize, 0);
    assert.strictEqual(classItem.functionList[1].name, 'deconstruct');
    assert.strictEqual(classItem.functionList[1].returns, 'void');

    assert.strictEqual(classItem.variableList.length, 2);
    assert.strictEqual(classItem.variableList[0].name, 'len');
    assert.strictEqual(classItem.variableList[0].type, 'Type');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    assert.strictEqual(classItem.variableList[1].name, 'name');
    assert.strictEqual(classItem.variableList[1].type, 'Type[10][20]');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
  });

  //9, 测试 parseClass 属性修饰符情况
  test('parseClass_ts_test_9', () => {
    let testclass = `class OTC <Type extends Basic> {
        // 测试注释
        readonly len: Type; //注释一
        public name?: Type[10][20];  /*注释2*/
        private contruct(a?: Type[10][20][30]) {
        /* ------
        * 注释3
        */
        };
        const deconstruct() {};
        // ...
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 2);
    assert.strictEqual(classItem.functionList[0].name, 'contruct');
    assert.strictEqual(classItem.functionList[0].returns, 'void');
    assert.strictEqual(classItem.functionList[0].parameters.length, 1);
    assert.strictEqual(classItem.functionList[0].parameters[0].name, 'a');
    assert.strictEqual(classItem.functionList[0].parameters[0].type, 'Type[10][20][30]');
    assert.strictEqual(classItem.functionList[0].parameters[0].arraySize, 0);
    assert.strictEqual(classItem.functionList[1].name, 'deconstruct');
    assert.strictEqual(classItem.functionList[1].returns, 'void');

    assert.strictEqual(classItem.variableList.length, 2);
    assert.strictEqual(classItem.variableList[0].name, 'len');
    assert.strictEqual(classItem.variableList[0].type, 'Type');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    assert.strictEqual(classItem.variableList[1].name, 'name');
    assert.strictEqual(classItem.variableList[1].type, 'Type[10][20]');
    assert.strictEqual(classItem.variableList[1].arraySize, 0);
  });

  //10, 测试 parseClass 索引签名情况
  test('parseClass_ts_test_10', () => {
    let testclass = `class OTC {
        [index: number]: string;  
        [index: string]: number | string;
        readonly [index: number]: string;
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 0);
    assert.strictEqual(classItem.variableList.length, 0);
    
  });

  //11, 测试 parseClass 扩展类型情况
  test('parseClass_ts_test_11', () => {
    let testclass = `class OTC {
        const cc: ColorfulCircle = {
          color: "red",
          radius: 42,
        };
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 0);
    assert.strictEqual(classItem.variableList.length, 1);
    assert.strictEqual(classItem.variableList[0].name, 'cc');
    assert.strictEqual(classItem.variableList[0].type, 'ColorfulCircle');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
  });

  //12, 测试 parseClass 交集类型情况
  test('parseClass_ts_test_12', () => {
    let testclass = `class OTC {
        const cc: Colorful & Circle;
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 0);
    assert.strictEqual(classItem.variableList.length, 1);
    assert.strictEqual(classItem.variableList[0].name, 'cc');
    assert.strictEqual(classItem.variableList[0].type, 'Colorful & Circle');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    
  });

  //13, 测试 parseClass 泛型对象类型情况
  test('parseClass_ts_test_13', () => {
    let testclass = `class OTC {
        const cc: any;
        readonly contents: unknown;
        cont: "hello world";
        ents: Type;
        val: OrNull<OneOrMany<Type>>;

    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 0);
    assert.strictEqual(classItem.variableList.length, 5);
    assert.strictEqual(classItem.variableList[0].name, 'cc');
    assert.strictEqual(classItem.variableList[0].type, 'any');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    assert.strictEqual(classItem.variableList[1].name, 'contents');
    assert.strictEqual(classItem.variableList[1].type, 'unknown');
    assert.strictEqual(classItem.variableList[1].arraySize, 0);
    assert.strictEqual(classItem.variableList[2].name, 'cont');
    assert.strictEqual(classItem.variableList[2].type, '"hello world"');
    assert.strictEqual(classItem.variableList[2].arraySize, 0);
    assert.strictEqual(classItem.variableList[3].name, 'ents');
    assert.strictEqual(classItem.variableList[3].type, 'Type');
    assert.strictEqual(classItem.variableList[3].arraySize, 0);
    assert.strictEqual(classItem.variableList[4].name, 'val');
    assert.strictEqual(classItem.variableList[4].type, 'OrNull<OneOrMany<Type>>');
    assert.strictEqual(classItem.variableList[4].arraySize, 0);
  });

  //14, 测试 parseClass readonly array对象类型情况
  test('parseClass_ts_test_14', () => {
    let testclass = `class OTC {
        const roArray: ReadonlyArray<string> = ["red", "green", "blue"];
        readonly contents: roArray.slice();
        x: readonly string[] = [];
        a: pair[0];
        const [x, y, z] = coord;
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 0);
    assert.strictEqual(classItem.variableList.length, 5);
    assert.strictEqual(classItem.variableList[0].name, 'roArray');
    assert.strictEqual(classItem.variableList[0].type, 'ReadonlyArray<string>');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    assert.strictEqual(classItem.variableList[1].name, 'contents');
    assert.strictEqual(classItem.variableList[1].type, 'roArray.slice');
    assert.strictEqual(classItem.variableList[1].arraySize, 0);
    assert.strictEqual(classItem.variableList[2].name, 'x');
    assert.strictEqual(classItem.variableList[2].type, 'readonly string[]');
    assert.strictEqual(classItem.variableList[2].arraySize, 0);
    assert.strictEqual(classItem.variableList[3].name, 'a');
    assert.strictEqual(classItem.variableList[3].type, 'pair[0]');
    assert.strictEqual(classItem.variableList[3].arraySize, 0);
    assert.strictEqual(classItem.variableList[4].name, 'coord');
    assert.strictEqual(classItem.variableList[4].type, undefined);
    assert.strictEqual(classItem.variableList[4].arraySize, 0);
  });

  //15, 测试 parseClass 剩余元素类型情况
  test('parseClass_ts_test_15', () => {
    let testclass = `class OTC {
      const a: StringNumberBooleans = ["hello", 1];
      const b: StringNumberBooleans = ["beautiful", 2, true];
      const c: StringNumberBooleans = ["world", 3, true, false, true, false, true];
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 0);
    assert.strictEqual(classItem.variableList.length, 3);
    assert.strictEqual(classItem.variableList[0].name, 'a');
    assert.strictEqual(classItem.variableList[0].type, 'StringNumberBooleans');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    assert.strictEqual(classItem.variableList[1].name, 'b');
    assert.strictEqual(classItem.variableList[1].type, 'StringNumberBooleans');
    assert.strictEqual(classItem.variableList[1].arraySize, 0);
    assert.strictEqual(classItem.variableList[2].name, 'c');
    assert.strictEqual(classItem.variableList[2].type, 'StringNumberBooleans');
    assert.strictEqual(classItem.variableList[2].arraySize, 0);
  });

  //16, 测试 parseClass 元祖类型情况
  test('parseClass_ts_test_16', () => {
    let testclass = `class OTC {
      pair: readonly [string, number];
      [x, y]: [number, number];
      const c: [3, 4] as const;
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 0);
    assert.strictEqual(classItem.variableList.length, 2);
    assert.strictEqual(classItem.variableList[0].name, 'pair');
    assert.strictEqual(classItem.variableList[0].type, 'readonly [string, number]');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    assert.strictEqual(classItem.variableList[1].name, 'c');
    assert.strictEqual(classItem.variableList[1].type, '[3, 4]');
    assert.strictEqual(classItem.variableList[1].arraySize, 0);
  });

  //17, 测试 parseClass keyof类型情况
  test('parseClass_ts_test_17', () => {
    let testclass = `class OTC {
      pair: keyof Arrayish;
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 0);
    assert.strictEqual(classItem.variableList.length, 1);
    assert.strictEqual(classItem.variableList[0].name, 'pair');
    assert.strictEqual(classItem.variableList[0].type, 'keyof Arrayish');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
  });

  //18, 测试 parseClass typeof类型情况
  test('parseClass_ts_test_18', () => {
    let testclass = `class OTC {
      pair: typeof "Hello world";
      name: typeof Stype;
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 0);
    assert.strictEqual(classItem.variableList.length, 3);
    assert.strictEqual(classItem.variableList[0].name, 'pair');
    assert.strictEqual(classItem.variableList[0].type, 'typeof');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    assert.strictEqual(classItem.variableList[1].name, 'Hello world');
    assert.strictEqual(classItem.variableList[1].type, undefined);
    assert.strictEqual(classItem.variableList[1].arraySize, 0);
    assert.strictEqual(classItem.variableList[2].name, 'name');
    assert.strictEqual(classItem.variableList[2].type, 'typeof Stype');
    assert.strictEqual(classItem.variableList[2].arraySize, 0);
  });

  //19, 测试 parseClass 索引访问类型情况
  test('parseClass_ts_test_19', () => {
    let testclass = `class OTC {
      pair: Person["age"];
      name: Person["age" | "name"];
      test: Person[keyof Person];
      obj: Person[AliveOrName];
      amo: typeof MyArray[number];
      topy: Person[pair];
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 0);
    assert.strictEqual(classItem.variableList.length, 6);
    assert.strictEqual(classItem.variableList[0].name, 'pair');
    assert.strictEqual(classItem.variableList[0].type, 'Person["age"]');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    assert.strictEqual(classItem.variableList[1].name, 'name');
    assert.strictEqual(classItem.variableList[1].type, 'Person["age" | "name"]');
    assert.strictEqual(classItem.variableList[1].arraySize, 0);
    assert.strictEqual(classItem.variableList[2].name, 'test');
    assert.strictEqual(classItem.variableList[2].type, 'Person[keyof Person]');
    assert.strictEqual(classItem.variableList[2].arraySize, 0);
    assert.strictEqual(classItem.variableList[3].name, 'obj');
    assert.strictEqual(classItem.variableList[3].type, 'Person[AliveOrName]');
    assert.strictEqual(classItem.variableList[3].arraySize, 0);
    assert.strictEqual(classItem.variableList[4].name, 'amo');
    assert.strictEqual(classItem.variableList[4].type, 'typeof MyArray[number]');
    assert.strictEqual(classItem.variableList[4].arraySize, 0);
    assert.strictEqual(classItem.variableList[5].name, 'topy');
    assert.strictEqual(classItem.variableList[5].type, 'Person[pair]');
    assert.strictEqual(classItem.variableList[5].arraySize, 0);
  });

  //20, 测试 parseClass 条件类型情况
  test('parseClass_ts_test_20', () => {
    let testclass = `class OTC {
      pair: Dog extends Animal ? number : string;
      name: T extends number ? IdLabel : NameLabel;
      test: T extends { message: unknown };
      obj: Type extends Array<infer Item> ? Item : Type;
      oamp: Type extends any ? Type[] : never;
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 0);
    assert.strictEqual(classItem.variableList.length, 5);
    assert.strictEqual(classItem.variableList[0].name, 'pair');
    assert.strictEqual(classItem.variableList[0].type, 'Dog extends Animal ? number : string');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    assert.strictEqual(classItem.variableList[1].name, 'name');
    assert.strictEqual(classItem.variableList[1].type, 'T extends number ? IdLabel : NameLabel');
    assert.strictEqual(classItem.variableList[1].arraySize, 0);
    assert.strictEqual(classItem.variableList[2].name, 'test');
    assert.strictEqual(classItem.variableList[2].type, 'T extends { message: unknown }');
    assert.strictEqual(classItem.variableList[2].arraySize, 0);
    assert.strictEqual(classItem.variableList[3].name, 'obj');
    assert.strictEqual(classItem.variableList[3].type, 'Type extends Array<infer Item> ? Item : Type');
    assert.strictEqual(classItem.variableList[3].arraySize, 0);
    assert.strictEqual(classItem.variableList[4].name, 'oamp');
    assert.strictEqual(classItem.variableList[4].type, 'Type extends any ? Type[] : never');
    assert.strictEqual(classItem.variableList[4].arraySize, 0);

  });

  //21, 测试 parseClass 映射类型情况
  test('parseClass_ts_test_21', () => {
    let testclass = `class OTC {
      [key: string]: boolean | Horse;
      [Property in keyof Type]: boolean;
      [Property in keyof Type]-?: Type[Property];
      [Properties in keyof Type as NewKeyType]: Type[Properties];
      [Property in keyof Type as \`get\${Capitalize<string & Property>}\`]: () => Type[Property];
      [Property in keyof Type as Exclude<Property, "kind">]: Type[Property];
      [E in Events as E["kind"]]: (event: E) => void;
      [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 0);
    assert.strictEqual(classItem.variableList.length, 3);
    assert.strictEqual(classItem.variableList[0].name, 'Type');
    assert.strictEqual(classItem.variableList[0].type, undefined);
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    assert.strictEqual(classItem.variableList[1].name, 'boolean');
    assert.strictEqual(classItem.variableList[1].type, undefined);
    assert.strictEqual(classItem.variableList[1].arraySize, 0);
    assert.strictEqual(classItem.variableList[2].name, 'Type');
    assert.strictEqual(classItem.variableList[2].type, undefined);
    assert.strictEqual(classItem.variableList[2].arraySize, 0);
  });

  //22, 测试 parseClass 模板字面类型情况
  test('parseClass_ts_test_22', () => {
    let testclass = `class OTC {
      pair: "world";
      name: "welcome_email" | "email_heading";
       on<Key extends string & keyof Type>
        (eventName: \`\${Key}Changed\`, callback: (newValue: Type[Key]) => void ): void;
      ShoutyGreeting: Uppercase<Greeting>;
      ASCIICacheKey<Str extends string> = \`ID-\${Uppercase<Str>}\`
      MainID: ASCIICacheKey<"my_app">
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 2);
    assert.strictEqual(classItem.functionList[0].name, 'on');
    assert.strictEqual(classItem.functionList[0].returns, 'void');
    assert.strictEqual(classItem.functionList[1].name, 'ASCIICacheKey');
    assert.strictEqual(classItem.functionList[1].returns, 'void');

    assert.strictEqual(classItem.variableList.length, 3);
    assert.strictEqual(classItem.variableList[0].name, 'pair');
    assert.strictEqual(classItem.variableList[0].type, '"world"');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    assert.strictEqual(classItem.variableList[1].name, 'name');
    assert.strictEqual(classItem.variableList[1].type, '"welcome_email" | "email_heading"');
    assert.strictEqual(classItem.variableList[1].arraySize, 0);
    assert.strictEqual(classItem.variableList[2].name, 'ShoutyGreeting');
    assert.strictEqual(classItem.variableList[2].type, 'Uppercase<Greeting>');
    assert.strictEqual(classItem.variableList[2].arraySize, 0);

  });

  //23, 测试 parseClass 内在字符串操作类型情况
  test('parseClass_ts_test_23', () => {
    let testclass = `class OTC {
      ShoutyGreeting: Uppercase<"Greeting">;
      QuietGreeting: Lowercase<"Greeting">;
      Greeting: Capitalize<"LowercaseGreeting">;
      UncomfortableGreeting: Uncapitalize<"UppercaseGreeting">;
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 0);
    assert.strictEqual(classItem.variableList.length, 4);
    assert.strictEqual(classItem.variableList[0].name, 'ShoutyGreeting');
    assert.strictEqual(classItem.variableList[0].type, 'Uppercase<"Greeting">');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    assert.strictEqual(classItem.variableList[1].name, 'QuietGreeting');
    assert.strictEqual(classItem.variableList[1].type, 'Lowercase<"Greeting">');
    assert.strictEqual(classItem.variableList[1].arraySize, 0);
    assert.strictEqual(classItem.variableList[2].name, 'Greeting');
    assert.strictEqual(classItem.variableList[2].type, 'Capitalize<"LowercaseGreeting">');
    assert.strictEqual(classItem.variableList[2].arraySize, 0);
    assert.strictEqual(classItem.variableList[3].name, 'UncomfortableGreeting');
    assert.strictEqual(classItem.variableList[3].type, 'Uncapitalize<"UppercaseGreeting">');
    assert.strictEqual(classItem.variableList[3].arraySize, 0);

  });

  //24, 测试 parseClass export情况
  test('parseClass_ts_test_24', () => {
    let testclass = `export class OTC {
        len: number;
        name: string;
        contruct(a: number) {
        };
        deconstruct() {};
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 2);
    assert.strictEqual(classItem.functionList[0].name, 'contruct');
    assert.strictEqual(classItem.functionList[0].returns, 'void');
    assert.strictEqual(classItem.functionList[0].parameters.length, 1);
    assert.strictEqual(classItem.functionList[0].parameters[0].name, 'a');
    assert.strictEqual(classItem.functionList[0].parameters[0].type, 'number');
    assert.strictEqual(classItem.functionList[0].parameters[0].arraySize, 0);
    assert.strictEqual(classItem.functionList[1].name, 'deconstruct');
    assert.strictEqual(classItem.functionList[1].returns, 'void');

    assert.strictEqual(classItem.variableList.length, 2);
    assert.strictEqual(classItem.variableList[0].name, 'len');
    assert.strictEqual(classItem.variableList[0].type, 'number');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    assert.strictEqual(classItem.variableList[1].name, 'name');
    assert.strictEqual(classItem.variableList[1].type, 'string');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
  });

  //25, 测试 parseClass 库文件情况
  test('parseClass_ts_test_25', () => {
    let testclass = `class OTC {
        len: require("mylib");
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 0);

    assert.strictEqual(classItem.variableList.length, 2);
    assert.strictEqual(classItem.variableList[0].name, 'len');
    assert.strictEqual(classItem.variableList[0].type, 'require');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    assert.strictEqual(classItem.variableList[1].name, 'mylib');
    assert.strictEqual(classItem.variableList[1].type, undefined);
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
  });

  //26, 测试 parseClass declare namespace 情况
  test('parseClass_ts_test_26', () => {
    let testclass = `declare namespace {
      export class OTC {
        len: number;
        name: string;
        contruct(a: number) {
        };
        deconstruct() {};
      }
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 2);
    assert.strictEqual(classItem.functionList[0].name, 'contruct');
    assert.strictEqual(classItem.functionList[0].returns, 'void');
    assert.strictEqual(classItem.functionList[0].parameters.length, 1);
    assert.strictEqual(classItem.functionList[0].parameters[0].name, 'a');
    assert.strictEqual(classItem.functionList[0].parameters[0].type, 'number');
    assert.strictEqual(classItem.functionList[0].parameters[0].arraySize, 0);
    assert.strictEqual(classItem.functionList[1].name, 'deconstruct');
    assert.strictEqual(classItem.functionList[1].returns, 'void');

    assert.strictEqual(classItem.variableList.length, 2);
    assert.strictEqual(classItem.variableList[0].name, 'len');
    assert.strictEqual(classItem.variableList[0].type, 'number');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    assert.strictEqual(classItem.variableList[1].name, 'name');
    assert.strictEqual(classItem.variableList[1].type, 'string');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
  });

  //27, 测试 parseClass 两个类extend 情况
  test('parseClass_ts_test_27', () => {
    let testclass = `declare namespace {
      export class OTC {
        len: number;
        name: string;
        contruct(a: number) {
        };
        deconstruct() {};
      }
      export class OTC2 extend OTC {
        len2: number;
        name2: string;
        contruct2(a: number) {
        };
        deconstruct2() {};
      }
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 2);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 2);
    assert.strictEqual(classItem.functionList[0].name, 'contruct');
    assert.strictEqual(classItem.functionList[0].returns, 'void');
    assert.strictEqual(classItem.functionList[0].parameters.length, 1);
    assert.strictEqual(classItem.functionList[0].parameters[0].name, 'a');
    assert.strictEqual(classItem.functionList[0].parameters[0].type, 'number');
    assert.strictEqual(classItem.functionList[0].parameters[0].arraySize, 0);
    assert.strictEqual(classItem.functionList[1].name, 'deconstruct');
    assert.strictEqual(classItem.functionList[1].returns, 'void');

    assert.strictEqual(classItem.variableList.length, 2);
    assert.strictEqual(classItem.variableList[0].name, 'len');
    assert.strictEqual(classItem.variableList[0].type, 'number');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    assert.strictEqual(classItem.variableList[1].name, 'name');
    assert.strictEqual(classItem.variableList[1].type, 'string');
    assert.strictEqual(classItem.variableList[1].arraySize, 0);


    classItem = classObjList.classes[1];
    assert.strictEqual(classItem.name, 'OTC2');
    assert.strictEqual(classItem.functionList.length, 0);
  });

  //28, 测试 parseClass 两个类不同 情况
  test('parseClass_ts_test_28', () => {
    let testclass = `declare namespace {
      export class OTC {
        len: number;
        name: string;
        contruct(a: number) {
        };
        deconstruct() {};
      }
      export class OTC2 {
        len2: number;
        name2: string;
        contruct2(a: number) {
        };
        deconstruct2() {};
      }
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 2);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 2);
    assert.strictEqual(classItem.functionList[0].name, 'contruct');
    assert.strictEqual(classItem.functionList[0].returns, 'void');
    assert.strictEqual(classItem.functionList[0].parameters.length, 1);
    assert.strictEqual(classItem.functionList[0].parameters[0].name, 'a');
    assert.strictEqual(classItem.functionList[0].parameters[0].type, 'number');
    assert.strictEqual(classItem.functionList[0].parameters[0].arraySize, 0);
    assert.strictEqual(classItem.functionList[1].name, 'deconstruct');
    assert.strictEqual(classItem.functionList[1].returns, 'void');

    assert.strictEqual(classItem.variableList.length, 2);
    assert.strictEqual(classItem.variableList[0].name, 'len');
    assert.strictEqual(classItem.variableList[0].type, 'number');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    assert.strictEqual(classItem.variableList[1].name, 'name');
    assert.strictEqual(classItem.variableList[1].type, 'string');
    assert.strictEqual(classItem.variableList[1].arraySize, 0);


    classItem = classObjList.classes[1];
    assert.strictEqual(classItem.name, 'OTC2');
    assert.strictEqual(classItem.functionList.length, 2);
    assert.strictEqual(classItem.functionList[0].name, 'contruct2');
    assert.strictEqual(classItem.functionList[0].returns, 'void');
    assert.strictEqual(classItem.functionList[0].parameters.length, 1);
    assert.strictEqual(classItem.functionList[0].parameters[0].name, 'a');
    assert.strictEqual(classItem.functionList[0].parameters[0].type, 'number');
    assert.strictEqual(classItem.functionList[0].parameters[0].arraySize, 0);
    assert.strictEqual(classItem.functionList[1].name, 'deconstruct2');
    assert.strictEqual(classItem.functionList[1].returns, 'void');

    assert.strictEqual(classItem.variableList.length, 2);
    assert.strictEqual(classItem.variableList[0].name, 'len2');
    assert.strictEqual(classItem.variableList[0].type, 'number');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    assert.strictEqual(classItem.variableList[1].name, 'name2');
    assert.strictEqual(classItem.variableList[1].type, 'string');
    assert.strictEqual(classItem.variableList[1].arraySize, 0);

  });

  // 异常和错误用例
  //41, 测试 parseClass 名字有下划线情况
  test('parseClass_ts_test_41', () => {
    let testclass = `class _TEST_T {
        len: number;
        name: string;
        contruct(a: number) {
        };
        deconstruct() {};
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, '_TEST_T');
    assert.strictEqual(classItem.functionList.length, 2);
    assert.strictEqual(classItem.functionList[0].name, 'contruct');
    assert.strictEqual(classItem.functionList[0].returns, 'void');
    assert.strictEqual(classItem.functionList[0].parameters.length, 1);
    assert.strictEqual(classItem.functionList[0].parameters[0].name, 'a');
    assert.strictEqual(classItem.functionList[0].parameters[0].type, 'number');
    assert.strictEqual(classItem.functionList[0].parameters[0].arraySize, 0);
    assert.strictEqual(classItem.functionList[1].name, 'deconstruct');
    assert.strictEqual(classItem.functionList[1].returns, 'void');

    assert.strictEqual(classItem.variableList.length, 2);
    assert.strictEqual(classItem.variableList[0].name, 'len');
    assert.strictEqual(classItem.variableList[0].type, 'number');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    assert.strictEqual(classItem.variableList[1].name, 'name');
    assert.strictEqual(classItem.variableList[1].type, 'string');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
  });

  //42, 测试 parseClass 单行情况
  test('parseClass_ts_test_42', () => {
    let testclass = `class OTC { len: number; contruct(a: number) {}; };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.variableList.length, 1);
    assert.strictEqual(classItem.variableList[0].name, 'len');
    assert.strictEqual(classItem.variableList[0].type, 'number');
    
    assert.strictEqual(classItem.functionList.length, 1);
    assert.strictEqual(classItem.functionList[0].name, 'contruct');
    assert.strictEqual(classItem.functionList[0].returns, 'void');
    assert.strictEqual(classItem.functionList[0].parameters.length, 1);
    assert.strictEqual(classItem.functionList[0].parameters[0].name, 'a');
    assert.strictEqual(classItem.functionList[0].parameters[0].type, 'number');
    assert.strictEqual(classItem.functionList[0].parameters[0].arraySize, 0);
    
  });

  //43, 测试 parseClass 单行模板类模板函数情况
  test('parseClass_ts_test_43', () => {
    let testclass = `class OTC<Type> {len: Type; add(a: Type) {};};`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 1);
    assert.strictEqual(classItem.functionList[0].name, 'add');
    assert.strictEqual(classItem.functionList[0].returns, 'void');
    assert.strictEqual(classItem.functionList[0].parameters.length, 1);
    assert.strictEqual(classItem.functionList[0].parameters[0].name, 'a');
    assert.strictEqual(classItem.functionList[0].parameters[0].type, 'Type');
    assert.strictEqual(classItem.functionList[0].parameters[0].arraySize, 0);

    assert.strictEqual(classItem.variableList.length, 1);
    assert.strictEqual(classItem.variableList[0].name, 'len');
    assert.strictEqual(classItem.variableList[0].type, 'Type');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    
  });

  //44, 测试 parseClass 继承没有名字情况
  test('parseClass_ts_test_44', () => {
    let testclass = `class OTC extends {
        len: number;
        name: string;
        contruct(a: number) {
        };
        deconstruct() {};
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 0);
    assert.strictEqual(classItem.variableList.length, 0);
  });

  //45, 测试 parseClass 中文名字和扩展情况
  test('parseClass_ts_test_45', () => {
    let testclass = `class 中文 extends 扩展 {
        len: number[10];
        name: string[10][20];
        contruct(a: number[10][20][30]) {
        };
        deconstruct() {};
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, '中文');
    assert.strictEqual(classItem.functionList.length, 2);
    assert.strictEqual(classItem.functionList[0].name, 'contruct');
    assert.strictEqual(classItem.functionList[0].returns, 'void');
    assert.strictEqual(classItem.functionList[0].parameters.length, 1);
    assert.strictEqual(classItem.functionList[0].parameters[0].name, 'a');
    assert.strictEqual(classItem.functionList[0].parameters[0].type, 'number[10][20][30]');
    assert.strictEqual(classItem.functionList[0].parameters[0].arraySize, 0);
    assert.strictEqual(classItem.functionList[1].name, 'deconstruct');
    assert.strictEqual(classItem.functionList[1].returns, 'void');

    assert.strictEqual(classItem.variableList.length, 2);
    assert.strictEqual(classItem.variableList[0].name, 'len');
    assert.strictEqual(classItem.variableList[0].type, 'number[10]');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    assert.strictEqual(classItem.variableList[1].name, 'name');
    assert.strictEqual(classItem.variableList[1].type, 'string[10][20]');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
  });

  //46, 测试 parseClass 测试中文模板继承情况
  test('parseClass_ts_test_46', () => {
    let testclass = `class OTC <类型 extends 基础> {
        len: Type;
        name: Type[10][20];
        contruct(a: Type[10][20][30]) {
        };
        deconstruct() {};
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 2);
    assert.strictEqual(classItem.functionList[0].name, 'contruct');
    assert.strictEqual(classItem.functionList[0].returns, 'void');
    assert.strictEqual(classItem.functionList[0].parameters.length, 1);
    assert.strictEqual(classItem.functionList[0].parameters[0].name, 'a');
    assert.strictEqual(classItem.functionList[0].parameters[0].type, 'Type[10][20][30]');
    assert.strictEqual(classItem.functionList[0].parameters[0].arraySize, 0);
    assert.strictEqual(classItem.functionList[1].name, 'deconstruct');
    assert.strictEqual(classItem.functionList[1].returns, 'void');

    assert.strictEqual(classItem.variableList.length, 2);
    assert.strictEqual(classItem.variableList[0].name, 'len');
    assert.strictEqual(classItem.variableList[0].type, 'Type');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    assert.strictEqual(classItem.variableList[1].name, 'name');
    assert.strictEqual(classItem.variableList[1].type, 'Type[10][20]');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
  });

  //47, 测试 parseClass 测试选择少类型情况
  test('parseClass_ts_test_47', () => {
    let testclass = `class OTC <Type extends Basic> {
        len: Type;
        name? Type[10][20];
        contruct(a?: Type[10][20][30]) {
        };
        deconstruct() {};
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 2);
    assert.strictEqual(classItem.functionList[0].name, 'contruct');
    assert.strictEqual(classItem.functionList[0].returns, 'void');
    assert.strictEqual(classItem.functionList[0].parameters.length, 1);
    assert.strictEqual(classItem.functionList[0].parameters[0].name, 'a');
    assert.strictEqual(classItem.functionList[0].parameters[0].type, 'Type[10][20][30]');
    assert.strictEqual(classItem.functionList[0].parameters[0].arraySize, 0);
    assert.strictEqual(classItem.functionList[1].name, 'deconstruct');
    assert.strictEqual(classItem.functionList[1].returns, 'void');

    assert.strictEqual(classItem.variableList.length, 3);
    assert.strictEqual(classItem.variableList[0].name, 'len');
    assert.strictEqual(classItem.variableList[0].type, 'Type');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    assert.strictEqual(classItem.variableList[1].name, 'name');
    assert.strictEqual(classItem.variableList[1].type, undefined);
    assert.strictEqual(classItem.variableList[1].arraySize, 0);
    assert.strictEqual(classItem.variableList[2].name, 'Type');
    assert.strictEqual(classItem.variableList[2].type, undefined);
    assert.strictEqual(classItem.variableList[2].arraySize, 0);
  });

  //48, 测试 parseClass 测试注释选择情况
  test('parseClass_ts_test_48', () => {
    let testclass = `/* 
      class OTC {
        len: Type; 
        name?: Type[10][20];  
        contruct(a?: Type[10][20][30]) {
        
        };
        deconstruct() {};
    } */;`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 0);
    
  });

  //49, 测试 parseClass 空类情况
  test('parseClass_ts_test_49', () => {
    let testclass = `class OTC  {}; class OTC2  {};`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 2);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    classItem = classObjList.classes[1];
    assert.strictEqual(classItem.name, 'OTC2');
  });

  //50, 测试 parseClass 少分号情况
  test('parseClass_ts_test_50', () => {
    let testclass = `class OTC {
        aname: string
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 0);
    assert.strictEqual(classItem.variableList.length, 1);
    assert.strictEqual(classItem.variableList[0].name, 'aname');
    assert.strictEqual(classItem.variableList[0].type, 'string');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    
  });

  //51, 测试 parseClass 扩展类型少括号情况
  test('parseClass_ts_test_51', () => {
    let testclass = `class OTC {
        const cc: ColorfulCircle = {
          color: "red",
          radius: 42,
        
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 0);
    assert.strictEqual(classItem.variableList.length, 1);
    assert.strictEqual(classItem.variableList[0].name, 'cc');
    assert.strictEqual(classItem.variableList[0].type, 'ColorfulCircle');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
  });

  //52, 测试 parseClass 交集类型错误情况
  test('parseClass_ts_test_52', () => {
    let testclass = `class OTC {
        const cc: Colorful & ;
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 0);
    assert.strictEqual(classItem.variableList.length, 1);
    assert.strictEqual(classItem.variableList[0].name, 'cc');
    assert.strictEqual(classItem.variableList[0].type, 'Colorful &');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    
  });

  //53, 测试 parseClass 泛型对象类型少尖括号情况
  test('parseClass_ts_test_53', () => {
    let testclass = `class OTC {
        const cc: any;
        readonly contents: unknown;
        cont: "hello world";
        ents: Type;
        val: OrNull<OneOrMany<Type>;

    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 0);
    assert.strictEqual(classItem.variableList.length, 5);
    assert.strictEqual(classItem.variableList[0].name, 'cc');
    assert.strictEqual(classItem.variableList[0].type, 'any');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    assert.strictEqual(classItem.variableList[1].name, 'contents');
    assert.strictEqual(classItem.variableList[1].type, 'unknown');
    assert.strictEqual(classItem.variableList[1].arraySize, 0);
    assert.strictEqual(classItem.variableList[2].name, 'cont');
    assert.strictEqual(classItem.variableList[2].type, '"hello world"');
    assert.strictEqual(classItem.variableList[2].arraySize, 0);
    assert.strictEqual(classItem.variableList[3].name, 'ents');
    assert.strictEqual(classItem.variableList[3].type, 'Type');
    assert.strictEqual(classItem.variableList[3].arraySize, 0);
    assert.strictEqual(classItem.variableList[4].name, 'val');
    assert.strictEqual(classItem.variableList[4].type, 'OrNull<OneOrMany<Type>');
    assert.strictEqual(classItem.variableList[4].arraySize, 0);
  });

  //54, 测试 parseClass readonly array对象少]类型情况
  test('parseClass_ts_test_54', () => {
    let testclass = `class OTC {
        const roArray: ReadonlyArray<string> = ["red", "green", "blue";
        readonly contents: roArray.slice();
        x: readonly string[] = [;
        a: pair[0];
        const [x, y, z] = coord;
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 0);
    assert.strictEqual(classItem.variableList.length, 2);
    assert.strictEqual(classItem.variableList[0].name, 'roArray');
    assert.strictEqual(classItem.variableList[0].type, 'ReadonlyArray<string>');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    assert.strictEqual(classItem.variableList[1].name, 'coord');
    assert.strictEqual(classItem.variableList[1].type, undefined);
    assert.strictEqual(classItem.variableList[1].arraySize, 0);
    
  });

  //55, 测试 parseClass 剩余元素类型情况
  test('parseClass_ts_test_55', () => {
    let testclass = `class OTC {
      const a: StringNumberBooleans = ["hello", ;
      const b: StringNumberBooleans = ["beautiful", 2, true;
      const c: StringNumberBooleans = ["world", 3, true, false, true, false, ...;
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 0);
    assert.strictEqual(classItem.variableList.length, 3);
    assert.strictEqual(classItem.variableList[0].name, 'a');
    assert.strictEqual(classItem.variableList[0].type, 'StringNumberBooleans');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    assert.strictEqual(classItem.variableList[1].name, 'b');
    assert.strictEqual(classItem.variableList[1].type, 'StringNumberBooleans');
    assert.strictEqual(classItem.variableList[1].arraySize, 0);
    assert.strictEqual(classItem.variableList[2].name, 'c');
    assert.strictEqual(classItem.variableList[2].type, 'StringNumberBooleans');
    assert.strictEqual(classItem.variableList[2].arraySize, 0);
  });

  //56, 测试 parseClass 元祖类型少类型情况
  test('parseClass_ts_test_56', () => {
    let testclass = `class OTC {
      pair: readonly [string, ];
      [x, y]: [number, ];
      const c: [3, 4] as ;
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 0);
    assert.strictEqual(classItem.variableList.length, 3);
    assert.strictEqual(classItem.variableList[0].name, 'pair');
    assert.strictEqual(classItem.variableList[0].type, 'readonly [string, ]');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    assert.strictEqual(classItem.variableList[1].name, 'c');
    assert.strictEqual(classItem.variableList[1].type, '[3, 4]');
    assert.strictEqual(classItem.variableList[1].arraySize, 0);
    assert.strictEqual(classItem.variableList[2].name, 'as');
    assert.strictEqual(classItem.variableList[2].type, undefined);
    assert.strictEqual(classItem.variableList[2].arraySize, 0);
  });

  //57, 测试 parseClass keyof少类型情况
  test('parseClass_ts_test_57', () => {
    let testclass = `class OTC {
      pair: keyof ;
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 0);
    assert.strictEqual(classItem.variableList.length, 1);
    assert.strictEqual(classItem.variableList[0].name, 'pair');
    assert.strictEqual(classItem.variableList[0].type, 'keyof');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
  });

  //58, 测试 parseClass typeof少类型情况
  test('parseClass_ts_test_58', () => {
    let testclass = `class OTC {
      pair: typeof "Hello world";
      name: typeof ;
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 0);
    assert.strictEqual(classItem.variableList.length, 3);
    assert.strictEqual(classItem.variableList[0].name, 'pair');
    assert.strictEqual(classItem.variableList[0].type, 'typeof');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    assert.strictEqual(classItem.variableList[1].name, 'Hello world');
    assert.strictEqual(classItem.variableList[1].type, undefined);
    assert.strictEqual(classItem.variableList[1].arraySize, 0);
    assert.strictEqual(classItem.variableList[2].name, 'name');
    assert.strictEqual(classItem.variableList[2].type, 'typeof');
    assert.strictEqual(classItem.variableList[2].arraySize, 0);
  });

  //59, 测试 parseClass 索引访问少]类型情况
  test('parseClass_ts_test_59', () => {
    let testclass = `class OTC {
      pair: Person["age];
      name: Person["age" | "name";
      test: Person[keyof Person;
      obj: Person[AliveOrName;
      amo: typeof MyArray[number;
      topy: Person[pair;
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 0);
    assert.strictEqual(classItem.variableList.length, 6);
    assert.strictEqual(classItem.variableList[0].name, 'pair');
    assert.strictEqual(classItem.variableList[0].type, 'Person["age];');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    assert.strictEqual(classItem.variableList[1].name, 'name');
    assert.strictEqual(classItem.variableList[1].type, 'Person["age" | "name"');
    assert.strictEqual(classItem.variableList[1].arraySize, 0);
    assert.strictEqual(classItem.variableList[2].name, 'test');
    assert.strictEqual(classItem.variableList[2].type, 'Person[keyof Person');
    assert.strictEqual(classItem.variableList[2].arraySize, 0);
    assert.strictEqual(classItem.variableList[3].name, 'obj');
    assert.strictEqual(classItem.variableList[3].type, 'Person[AliveOrName');
    assert.strictEqual(classItem.variableList[3].arraySize, 0);
    assert.strictEqual(classItem.variableList[4].name, 'amo');
    assert.strictEqual(classItem.variableList[4].type, 'typeof MyArray[number');
    assert.strictEqual(classItem.variableList[4].arraySize, 0);
    assert.strictEqual(classItem.variableList[5].name, 'topy');
    assert.strictEqual(classItem.variableList[5].type, 'Person[pair');
    assert.strictEqual(classItem.variableList[5].arraySize, 0);
  });

  //60, 测试 parseClass 条件类型少选项情况
  test('parseClass_ts_test_60', () => {
    let testclass = `class OTC {
      pair: Dog extends Animal ? number ;
      name: T extends number ? IdLabel ;
      test: T extends { message: unknown };
      obj: Type extends Array<infer Item> ? Item :;
      oamp: Type extends any ?  : never;
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 0);
    assert.strictEqual(classItem.variableList.length, 5);
    assert.strictEqual(classItem.variableList[0].name, 'pair');
    assert.strictEqual(classItem.variableList[0].type, 'Dog extends Animal ? number');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    assert.strictEqual(classItem.variableList[1].name, 'name');
    assert.strictEqual(classItem.variableList[1].type, 'T extends number ? IdLabel');
    assert.strictEqual(classItem.variableList[1].arraySize, 0);
    assert.strictEqual(classItem.variableList[2].name, 'test');
    assert.strictEqual(classItem.variableList[2].type, 'T extends { message: unknown }');
    assert.strictEqual(classItem.variableList[2].arraySize, 0);
    assert.strictEqual(classItem.variableList[3].name, 'obj');
    assert.strictEqual(classItem.variableList[3].type, 'Type extends Array<infer Item> ? Item :');
    assert.strictEqual(classItem.variableList[3].arraySize, 0);
    assert.strictEqual(classItem.variableList[4].name, 'oamp');
    assert.strictEqual(classItem.variableList[4].type, 'Type extends any ?  : never');
    assert.strictEqual(classItem.variableList[4].arraySize, 0);

  });

  //61, 测试 parseClass 映射少类型情况
  test('parseClass_ts_test_61', () => {
    let testclass = `class OTC {
      [key: string]: boolean | ;
      [Property in keyof Type]: ;
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 0);
    assert.strictEqual(classItem.variableList.length, 1);
    assert.strictEqual(classItem.variableList[0].name, 'Type');
    assert.strictEqual(classItem.variableList[0].type, undefined);
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
  
  });

  //62, 测试 parseClass 模板字面少“类型情况
  test('parseClass_ts_test_62', () => {
    let testclass = `class OTC {
      pair: 1;
      name: "welcome_email" | "email_heading;
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 0);
    
    assert.strictEqual(classItem.variableList.length, 2);
    assert.strictEqual(classItem.variableList[0].name, 'pair');
    assert.strictEqual(classItem.variableList[0].type, '1');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    assert.strictEqual(classItem.variableList[1].name, 'name');
    assert.strictEqual(classItem.variableList[1].type, '"welcome_email" | "email_heading;');
    assert.strictEqual(classItem.variableList[1].arraySize, 0);

  });

  //63, 测试 parseClass 内在字符串操作类型情况
  test('parseClass_ts_test_63', () => {
    let testclass = `class OTC {
      ShoutyGreeting: Uppercase<1>;
      QuietGreeting: Lowercase<true>;
      Greeting: Capitalize<unknown>;
      UncomfortableGreeting: Uncapitalize<undefined>;
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 0);
    assert.strictEqual(classItem.variableList.length, 4);
    assert.strictEqual(classItem.variableList[0].name, 'ShoutyGreeting');
    assert.strictEqual(classItem.variableList[0].type, 'Uppercase<1>');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    assert.strictEqual(classItem.variableList[1].name, 'QuietGreeting');
    assert.strictEqual(classItem.variableList[1].type, 'Lowercase<true>');
    assert.strictEqual(classItem.variableList[1].arraySize, 0);
    assert.strictEqual(classItem.variableList[2].name, 'Greeting');
    assert.strictEqual(classItem.variableList[2].type, 'Capitalize<unknown>');
    assert.strictEqual(classItem.variableList[2].arraySize, 0);
    assert.strictEqual(classItem.variableList[3].name, 'UncomfortableGreeting');
    assert.strictEqual(classItem.variableList[3].type, 'Uncapitalize<undefined>');
    assert.strictEqual(classItem.variableList[3].arraySize, 0);

  });

  //64, 测试 parseClass export 在一行情况
  test('parseClass_ts_test_64', () => {
    let testclass = `export class OTC {len: number;name: string; contruct(a: number) {};deconstruct() {};};`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 2);
    assert.strictEqual(classItem.functionList[0].name, 'contruct');
    assert.strictEqual(classItem.functionList[0].returns, 'void');
    assert.strictEqual(classItem.functionList[0].parameters.length, 1);
    assert.strictEqual(classItem.functionList[0].parameters[0].name, 'a');
    assert.strictEqual(classItem.functionList[0].parameters[0].type, 'number');
    assert.strictEqual(classItem.functionList[0].parameters[0].arraySize, 0);
    assert.strictEqual(classItem.functionList[1].name, 'deconstruct');
    assert.strictEqual(classItem.functionList[1].returns, 'void');

    assert.strictEqual(classItem.variableList.length, 2);
    assert.strictEqual(classItem.variableList[0].name, 'len');
    assert.strictEqual(classItem.variableList[0].type, 'number');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    assert.strictEqual(classItem.variableList[1].name, 'name');
    assert.strictEqual(classItem.variableList[1].type, 'string');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
  });

  //65, 测试 parseClass 库文件在一行情况
  test('parseClass_ts_test_65', () => {
    let testclass = `class OTC { len: require("mylib");};`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 0);

    assert.strictEqual(classItem.variableList.length, 2);
    assert.strictEqual(classItem.variableList[0].name, 'len');
    assert.strictEqual(classItem.variableList[0].type, 'require');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    assert.strictEqual(classItem.variableList[1].name, 'mylib');
    assert.strictEqual(classItem.variableList[1].type, undefined);
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
  });

  //66, 测试 parseClass declare namespace 情况
  test('parseClass_ts_test_66', () => {
    let testclass = `declare namespace { export class OTC { len: number; name: string; contruct(a: number) {};}};`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 1);
    assert.strictEqual(classItem.functionList[0].name, 'contruct');
    assert.strictEqual(classItem.functionList[0].returns, 'void');
    assert.strictEqual(classItem.functionList[0].parameters.length, 1);
    assert.strictEqual(classItem.functionList[0].parameters[0].name, 'a');
    assert.strictEqual(classItem.functionList[0].parameters[0].type, 'number');
    assert.strictEqual(classItem.functionList[0].parameters[0].arraySize, 0);

    assert.strictEqual(classItem.variableList.length, 2);
    assert.strictEqual(classItem.variableList[0].name, 'len');
    assert.strictEqual(classItem.variableList[0].type, 'number');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    assert.strictEqual(classItem.variableList[1].name, 'name');
    assert.strictEqual(classItem.variableList[1].type, 'string');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
  });

  //67, 测试 parseClass extend自己 情况
  test('parseClass_ts_test_67', () => {
    let testclass = `declare namespace {
      export class OTC2 extend OTC2 {
        len2: number;
        name2: string;
        contruct2(a: number) {
        };
        deconstruct2() {};
      }
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
  
    assert.strictEqual(classItem.name, 'OTC2');
    assert.strictEqual(classItem.functionList.length, 0);
  });

  //68, 测试 parseClass 两个类不同 情况
  test('parseClass_ts_test_68', () => {
    let testclass = `declare namespace {
      export class OTC {len: number;name: string; contruct(a: number) {};deconstruct() {};}
      export class OTC2 {len2: number;name2: string; contruct2(a: number) {}; deconstruct2() {};}
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 2);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 2);
    assert.strictEqual(classItem.functionList[0].name, 'contruct');
    assert.strictEqual(classItem.functionList[0].returns, 'void');
    assert.strictEqual(classItem.functionList[0].parameters.length, 1);
    assert.strictEqual(classItem.functionList[0].parameters[0].name, 'a');
    assert.strictEqual(classItem.functionList[0].parameters[0].type, 'number');
    assert.strictEqual(classItem.functionList[0].parameters[0].arraySize, 0);
    assert.strictEqual(classItem.functionList[1].name, 'deconstruct');
    assert.strictEqual(classItem.functionList[1].returns, 'void');

    assert.strictEqual(classItem.variableList.length, 2);
    assert.strictEqual(classItem.variableList[0].name, 'len');
    assert.strictEqual(classItem.variableList[0].type, 'number');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    assert.strictEqual(classItem.variableList[1].name, 'name');
    assert.strictEqual(classItem.variableList[1].type, 'string');
    assert.strictEqual(classItem.variableList[1].arraySize, 0);


    classItem = classObjList.classes[1];
    assert.strictEqual(classItem.name, 'OTC2');
    assert.strictEqual(classItem.functionList.length, 2);
    assert.strictEqual(classItem.functionList[0].name, 'contruct2');
    assert.strictEqual(classItem.functionList[0].returns, 'void');
    assert.strictEqual(classItem.functionList[0].parameters.length, 1);
    assert.strictEqual(classItem.functionList[0].parameters[0].name, 'a');
    assert.strictEqual(classItem.functionList[0].parameters[0].type, 'number');
    assert.strictEqual(classItem.functionList[0].parameters[0].arraySize, 0);
    assert.strictEqual(classItem.functionList[1].name, 'deconstruct2');
    assert.strictEqual(classItem.functionList[1].returns, 'void');

    assert.strictEqual(classItem.variableList.length, 2);
    assert.strictEqual(classItem.variableList[0].name, 'len2');
    assert.strictEqual(classItem.variableList[0].type, 'number');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    assert.strictEqual(classItem.variableList[1].name, 'name2');
    assert.strictEqual(classItem.variableList[1].type, 'string');
    assert.strictEqual(classItem.variableList[1].arraySize, 0);

  });

  //69, 测试 parseClass 特殊符号不同 情况
  test('parseClass_ts_test_69', () => {
    let testclass = `declare namespace {
      export class OTC {
        public len?: number;
        private name!: string; 
        contruct(...a: number[]) {};
        deconstruct() {};
      }
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 2);
    assert.strictEqual(classItem.functionList[0].name, 'contruct');
    assert.strictEqual(classItem.functionList[0].returns, 'void');
    assert.strictEqual(classItem.functionList[0].parameters.length, 1);
    assert.strictEqual(classItem.functionList[0].parameters[0].name, 'a');
    assert.strictEqual(classItem.functionList[0].parameters[0].type, 'number[]');
    assert.strictEqual(classItem.functionList[0].parameters[0].arraySize, 0);
    assert.strictEqual(classItem.functionList[1].name, 'deconstruct');
    assert.strictEqual(classItem.functionList[1].returns, 'void');

    assert.strictEqual(classItem.variableList.length, 2);
    assert.strictEqual(classItem.variableList[0].name, 'len');
    assert.strictEqual(classItem.variableList[0].type, 'number');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    assert.strictEqual(classItem.variableList[1].name, 'name');
    assert.strictEqual(classItem.variableList[1].type, 'string');
    assert.strictEqual(classItem.variableList[1].arraySize, 0);

  });

  //70, 测试 parseClass 重构 情况
  test('parseClass_ts_test_70', () => {
    let testclass = `declare namespace {
      export class OTC {
        len(s: string): number;
        len(arr: any[]): number;
        len(x: any) {
          return x.length;
        }
      }
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 3);
    assert.strictEqual(classItem.functionList[0].name, 'len');
    assert.strictEqual(classItem.functionList[0].returns, 'number');
    assert.strictEqual(classItem.functionList[0].parameters.length, 1);
    assert.strictEqual(classItem.functionList[0].parameters[0].name, 's');
    assert.strictEqual(classItem.functionList[0].parameters[0].type, 'string');
    assert.strictEqual(classItem.functionList[0].parameters[0].arraySize, 0);
    assert.strictEqual(classItem.functionList[1].name, 'len');
    assert.strictEqual(classItem.functionList[1].returns, 'number');
    assert.strictEqual(classItem.functionList[1].parameters.length, 1);
    assert.strictEqual(classItem.functionList[1].parameters[0].name, 'arr');
    assert.strictEqual(classItem.functionList[1].parameters[0].type, 'any[]');
    assert.strictEqual(classItem.functionList[1].parameters[0].arraySize, 0);
    assert.strictEqual(classItem.functionList[2].name, 'len');
    assert.strictEqual(classItem.functionList[2].returns, 'void');
    assert.strictEqual(classItem.functionList[2].parameters.length, 1);
    assert.strictEqual(classItem.functionList[2].parameters[0].name, 'x');
    assert.strictEqual(classItem.functionList[2].parameters[0].type, 'any');
    assert.strictEqual(classItem.functionList[2].parameters[0].arraySize, 0);
    

  });

  //71, 测试 parseClass 函数重载错误 情况
  test('parseClass_ts_test_71', () => {
    let testclass = `declare namespace {
      export class OTC {
        len(s: string): number;
        len(arr: number[]): number;
        len(x: any) {
          return x.length;
        }
      }
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 3);
    assert.strictEqual(classItem.functionList[0].name, 'len');
    assert.strictEqual(classItem.functionList[0].returns, 'number');
    assert.strictEqual(classItem.functionList[0].parameters.length, 1);
    assert.strictEqual(classItem.functionList[0].parameters[0].name, 's');
    assert.strictEqual(classItem.functionList[0].parameters[0].type, 'string');
    assert.strictEqual(classItem.functionList[0].parameters[0].arraySize, 0);
    assert.strictEqual(classItem.functionList[1].name, 'len');
    assert.strictEqual(classItem.functionList[1].returns, 'number');
    assert.strictEqual(classItem.functionList[1].parameters.length, 1);
    assert.strictEqual(classItem.functionList[1].parameters[0].name, 'arr');
    assert.strictEqual(classItem.functionList[1].parameters[0].type, 'number[]');
    assert.strictEqual(classItem.functionList[1].parameters[0].arraySize, 0);
    assert.strictEqual(classItem.functionList[2].name, 'len');
    assert.strictEqual(classItem.functionList[2].returns, 'void');
    assert.strictEqual(classItem.functionList[2].parameters.length, 1);
    assert.strictEqual(classItem.functionList[2].parameters[0].name, 'x');
    assert.strictEqual(classItem.functionList[2].parameters[0].type, 'any');
    assert.strictEqual(classItem.functionList[2].parameters[0].arraySize, 0);

  });

  //72, 测试 parseClass this 情况
  test('parseClass_ts_test_72', () => {
    let testclass = `declare namespace {
      export class User {
        static id: number;
        const admin: boolean;
      };
      abstract class OTC {
        protected filterUsers(filter: (this: User) => boolean): User[];
      };
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 2);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'User');
    assert.strictEqual(classItem.functionList.length, 0);

    assert.strictEqual(classItem.variableList.length, 2);
    assert.strictEqual(classItem.variableList[0].name, 'id');
    assert.strictEqual(classItem.variableList[0].type, 'number');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    assert.strictEqual(classItem.variableList[1].name, 'admin');
    assert.strictEqual(classItem.variableList[1].type, 'boolean');
    assert.strictEqual(classItem.variableList[1].arraySize, 0);

    classItem = classObjList.classes[1];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 1);
    assert.strictEqual(classItem.functionList[0].name, 'filterUsers');
    assert.strictEqual(classItem.functionList[0].returns, 'User[]');
    assert.strictEqual(classItem.functionList[0].parameters.length, 1);
    assert.strictEqual(classItem.functionList[0].parameters[0].name, 'filter');
    assert.strictEqual(classItem.functionList[0].parameters[0].type, '(this: User) => boolean');
    assert.strictEqual(classItem.functionList[0].parameters[0].arraySize, 0);

    assert.strictEqual(classItem.variableList.length, 0);

  });

  //73, 测试 parseClass 函数可分配 情况
  test('parseClass_ts_test_73', () => {
    let testclass = `
    type voidFunc = () => void;
    declare namespace {
      export class OTC {
        const f1: voidFunc = () => {
          return true;
        };

        const f2: voidFunc = () => true;

        const f3: voidFunc = function () {
          return true;
        };
      };
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'OTC');
    assert.strictEqual(classItem.functionList.length, 0);

    assert.strictEqual(classItem.variableList.length, 3);
    assert.strictEqual(classItem.variableList[0].name, 'f1');
    assert.strictEqual(classItem.variableList[0].type, 'voidFunc');
    assert.strictEqual(classItem.variableList[0].arraySize, 0);
    assert.strictEqual(classItem.variableList[1].name, 'f2');
    assert.strictEqual(classItem.variableList[1].type, 'voidFunc');
    assert.strictEqual(classItem.variableList[1].arraySize, 0);
    assert.strictEqual(classItem.variableList[2].name, 'f3');
    assert.strictEqual(classItem.variableList[2].type, 'voidFunc');
    assert.strictEqual(classItem.variableList[2].arraySize, 0);

  });

  //74, 测试 parseClass 获取器，设置器 情况
  test('parseClass_ts_test_74', () => {
    let testclass = `
    type voidFunc = () => void;
    declare namespace {
      export class C {
        _length = 0;
        get length() {
          return this._length;
        }
        set length(value) {
          this._length = value;
        }
      }
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 1);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'C');
    assert.strictEqual(classItem.functionList.length, 0);

    assert.strictEqual(classItem.variableList.length, 1);
    assert.strictEqual(classItem.variableList[0].name, '_length');
    assert.strictEqual(classItem.variableList[0].type, undefined);
    assert.strictEqual(classItem.variableList[0].arraySize, 0);

  });

  //75, 测试 parseClass 基类继承实现 情况
  test('parseClass_ts_test_75', () => {
    let testclass = `
      type voidFunc = () => void;
      declare namespace {
        interface Pingable {
          ping(): void;
        }

        class Sonar implements Pingable {
          ping() {
            console.log("ping!");
          }
        }

        class Ball implements Pingable {
          pong() {
            console.log("pong!");
          }
        }
    };`
    let classObjList = parsets.doParseTs("test.ts", testclass);
    assert.strictEqual(classObjList.classes.length, 2);
    let classItem = classObjList.classes[0];
    assert.strictEqual(classItem.name, 'Sonar');
    assert.strictEqual(classItem.functionList.length, 1);
    assert.strictEqual(classItem.functionList[0].name, 'ping');
    assert.strictEqual(classItem.functionList[0].returns, 'void');
    assert.strictEqual(classItem.functionList[0].parameters.length, 0);

    classItem = classObjList.classes[1];
    assert.strictEqual(classItem.name, 'Ball');
    assert.strictEqual(classItem.functionList.length, 1);
    assert.strictEqual(classItem.functionList[0].name, 'pong');
    assert.strictEqual(classItem.functionList[0].returns, 'void');
    assert.strictEqual(classItem.functionList[0].parameters.length, 0);

  });
})