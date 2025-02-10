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
import * as genIdlFile from '../../../gen/tools/genidlfile'
// import * as myExtension from '../../extension';

suite('GenIdl_file_Suite', () => {
    vscode.window.showInformationMessage('Start all tests.');

    //1, 测试 parseEnum 一般情况
    test('getParcelType_test_1', () => {
        let resStr = genIdlFile.getParcelType('');
        assert.strictEqual(resStr, resStr);

        resStr = genIdlFile.getParcelType('std::string');
        assert.strictEqual(resStr, 'string');
    });

    //2, 测试边界情况
    test('getParcelType_test_2', () => {
        let resStr = genIdlFile.getParcelType('std::string');
        assert.strictEqual(resStr, 'string');

        resStr = genIdlFile.getParcelType('char *');
        assert.strictEqual(resStr, 'string');

        resStr = genIdlFile.getParcelType('char  *');
        assert.strictEqual(resStr, resStr);
    });

    //3, 测试异常情况
    test('getParcelType_test_3', () => {
        let resStr = genIdlFile.getParcelType('');
        assert.strictEqual(resStr, '');

        resStr = genIdlFile.getParcelType('string');
        assert.strictEqual(resStr, 'string');

        resStr = genIdlFile.getParcelType('char*');
        assert.strictEqual(resStr, 'char*');
    });

    //4, 测试错误情况
    test('getParcelType_test_4', () => {
        let resStr = genIdlFile.getParcelType('');
        assert.strictEqual(resStr, '');
    });
});
