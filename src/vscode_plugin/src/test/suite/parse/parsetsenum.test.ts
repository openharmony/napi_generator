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

suite('Parse_Enum_TS_Suite', () => {
  vscode.window.showInformationMessage('Start all tests.');
  
  //1, 测试 parseClass 一般情况
  test('parseEnum_ts_test_1', () => {
    let testenum = `enum Direction {
        Up,
        Down,
        Left,
        Right
    };`
    let enumObjList = parsets.doParseTs("test.ts", testenum);
    assert.strictEqual(enumObjList.enums.length, 1);
    let enumItem = enumObjList.enums[0];
    assert.strictEqual(enumItem.name, 'Direction');
    assert.strictEqual(enumItem.members.length, 4);
    assert.strictEqual(enumItem.members[0], 'Up');
    assert.strictEqual(enumItem.members[1], 'Down');
    assert.strictEqual(enumItem.members[2], 'Left');
    assert.strictEqual(enumItem.members[3], 'Right');

  });
})