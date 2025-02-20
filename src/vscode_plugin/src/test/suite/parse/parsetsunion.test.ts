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
  
  //1, 测试 parseClass 一般情况
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
})