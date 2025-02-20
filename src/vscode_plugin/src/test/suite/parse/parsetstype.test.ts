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
  
  //1, 测试 parseClass 一般情况
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
})