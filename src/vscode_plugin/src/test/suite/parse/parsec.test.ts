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
import * as parsec from '../../../parse/parsec'
// import * as myExtension from '../../extension';

suite('Parse_C_Suite', () => {
    vscode.window.showInformationMessage('Start all tests.');

    //1, 测试 parseEnum 一般情况
    test('parseEnum_test_1', () => {
        let enumObjList = parsec.parseEnum('hello_world');
        assert.strictEqual(enumObjList.length, 0);
    });

    //2, 测试边界情况
    test('parseEnum_test_2', () => {
        let enumObjList = parsec.parseEnum('enum { ENUM_1 }');
        assert.strictEqual(enumObjList.length, 0);

        enumObjList = parsec.parseEnum('enum { ENUM_1, ENUM_2 }');
        assert.strictEqual(enumObjList.length, 0);

        enumObjList = parsec.parseEnum('enum { ENUM_1, ENUM_2 }; enum { ENUM_10, ENUM_20 };');
        assert.strictEqual(enumObjList.length, 0);
    });

    //3, 测试异常情况
    test('parseEnum_test_3', () => {
        let teststr: string = '';
        let enumObjList = parsec.parseEnum(teststr);
        assert.strictEqual(enumObjList.length, 0);

        enumObjList = parsec.parseEnum('enum');
        assert.strictEqual(enumObjList.length, 0);

        enumObjList = parsec.parseEnum('enum { ENUM_1, ENUM_1 }');
        assert.strictEqual(enumObjList.length, 0);
    });

    //4, 测试错误情况
    test('replaceall_test_4', () => {
        let enumObjList = parsec.parseEnum('');
        assert.strictEqual(enumObjList.length, 0);
    });
});
