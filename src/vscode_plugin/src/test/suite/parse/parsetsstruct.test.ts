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
  
  //1, 测试 parseClass 一般情况
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
})