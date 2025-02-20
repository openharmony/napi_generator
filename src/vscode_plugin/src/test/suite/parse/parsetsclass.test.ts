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
})