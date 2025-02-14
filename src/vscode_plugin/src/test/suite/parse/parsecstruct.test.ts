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

suite('Parse_C_Struct_Suite', () => {
    vscode.window.showInformationMessage('Start all tests.');

    //1, 测试 parseStruct 一般情况
    test('parseStruct_test_1', () => {
        let testenum = `typedef struct {
            int a;
            char b;
            float c;
        } TestStruct;`
        let structObjList = parsec.parseStruct(testenum);
        assert.strictEqual(structObjList.length, 1);
        let structItem = structObjList[0];
        assert.strictEqual(structItem.name, 'TestStruct');
        assert.strictEqual(structItem.alias, 'TestStruct');
        assert.strictEqual(structItem.members.length, 3);
        assert.strictEqual(structItem.members[0].name, 'a');
        assert.strictEqual(structItem.members[0].type, 'int');
        assert.strictEqual(structItem.members[1].name, 'b');
        assert.strictEqual(structItem.members[1].type, 'char');
        assert.strictEqual(structItem.members[2].name, 'c');
        assert.strictEqual(structItem.members[2].type, 'float');
    });

    //2, 测试边界情况
    // test('parseStruct_test_2', () => {
    //     let testenum = `typedef enum {
    //         NEW,
    //         APPEND,
    //         REPLACE
    //     } OperationType;`
    //     let enumObjList = parsec.parseStruct(testenum);
    //     assert.strictEqual(enumObjList.length, 1);
    //     let enumItem = enumObjList[0];
    //     assert.strictEqual(enumItem.name, 'OperationType');
    //     assert.strictEqual(enumItem.alias, 'OperationType');
    //     assert.strictEqual(enumItem.members.length, 3);
    //     assert.strictEqual(enumItem.members[0], 'NEW');
    //     assert.strictEqual(enumItem.members[1], 'APPEND');
    //     assert.strictEqual(enumItem.members[2], 'REPLACE');

    //     testenum = `typedef enum { NEW, APPEND, REPLACE } OperationType;`
    //     enumObjList = parsec.parseStruct(testenum);
    //     assert.strictEqual(enumObjList.length, 1);
    //     enumItem = enumObjList[0];
    //     assert.strictEqual(enumItem.name, 'OperationType');
    //     assert.strictEqual(enumItem.alias, 'OperationType');
    //     assert.strictEqual(enumItem.members.length, 3);
    //     assert.strictEqual(enumItem.members[0], 'NEW');
    //     assert.strictEqual(enumItem.members[1], 'APPEND');
    //     assert.strictEqual(enumItem.members[2], 'REPLACE');

    //     testenum = `typedef enum {
    //         NEW
    //     } OperationType;`
    //     enumObjList = parsec.parseStruct(testenum);
    //     assert.strictEqual(enumObjList.length, 1);
    //     enumItem = enumObjList[0];
    //     assert.strictEqual(enumItem.name, 'OperationType');
    //     assert.strictEqual(enumItem.alias, 'OperationType');
    //     assert.strictEqual(enumItem.members.length, 1);
    //     assert.strictEqual(enumItem.members[0], 'NEW');

    //     testenum = `typedef enum { NEW } OperationType;`
    //     enumObjList = parsec.parseStruct(testenum);
    //     assert.strictEqual(enumObjList.length, 1);
    //     enumItem = enumObjList[0];
    //     assert.strictEqual(enumItem.name, 'OperationType');
    //     assert.strictEqual(enumItem.alias, 'OperationType');
    //     assert.strictEqual(enumItem.members.length, 1);
    //     assert.strictEqual(enumItem.members[0], 'NEW');

    //     testenum = `typedef enum OType {
    //         NEW
    //     } OperationType;`
    //     enumObjList = parsec.parseStruct(testenum);
    //     assert.strictEqual(enumObjList.length, 1);
    //     enumItem = enumObjList[0];
    //     assert.strictEqual(enumItem.name, 'OType');
    //     assert.strictEqual(enumItem.alias, 'OperationType');
    //     assert.strictEqual(enumItem.members.length, 1);
    //     assert.strictEqual(enumItem.members[0], 'NEW');

    //     testenum = `typedef enum OType { NEW } OperationType;`
    //     enumObjList = parsec.parseStruct(testenum);
    //     assert.strictEqual(enumObjList.length, 1);
    //     enumItem = enumObjList[0];
    //     assert.strictEqual(enumItem.name, 'OType');
    //     assert.strictEqual(enumItem.alias, 'OperationType');
    //     assert.strictEqual(enumItem.members.length, 1);
    //     assert.strictEqual(enumItem.members[0], 'NEW');

    //     testenum = `enum OType {
    //         NEW
    //     };`
    //     enumObjList = parsec.parseStruct(testenum);
    //     assert.strictEqual(enumObjList.length, 1);
    //     enumItem = enumObjList[0];
    //     assert.strictEqual(enumItem.name, 'OType');
    //     // assert.strictEqual(enumItem.alias, undefined);
    //     assert.strictEqual(enumItem.members.length, 1);
    //     assert.strictEqual(enumItem.members[0], 'NEW');

    //     testenum = `enum OType { NEW };`
    //     enumObjList = parsec.parseStruct(testenum);
    //     assert.strictEqual(enumObjList.length, 1);
    //     enumItem = enumObjList[0];
    //     assert.strictEqual(enumItem.name, 'OType');
    //     // assert.strictEqual(enumItem.alias, undefined);
    //     assert.strictEqual(enumItem.members.length, 1);
    //     assert.strictEqual(enumItem.members[0], 'NEW');

    //     testenum = `enum OType { NEW }; enum TOTSize1 { DTS };`
    //     enumObjList = parsec.parseStruct(testenum);
    //     assert.strictEqual(enumObjList.length, 2);
    //     enumItem = enumObjList[0];
    //     assert.strictEqual(enumItem.name, 'OType');
    //     // assert.strictEqual(enumItem.alias, undefined);
    //     assert.strictEqual(enumItem.members.length, 1);
    //     assert.strictEqual(enumItem.members[0], 'NEW');
    //     enumItem = enumObjList[1];
    //     assert.strictEqual(enumItem.name, 'TOTSize1');
    //     // assert.strictEqual(enumItem.alias, undefined);
    //     assert.strictEqual(enumItem.members.length, 1);
    //     assert.strictEqual(enumItem.members[0], 'DTS');

    //     testenum = `enum TEST_ENUM { 
    //         ENUM_1 = 1, // comment 
    //         ENUM_2 = 2
    //     }`;
    //     enumObjList = parsec.parseStruct(testenum);
    //     assert.strictEqual(enumObjList.length, 1);
    //     enumItem = enumObjList[0];
    //     assert.strictEqual(enumItem.name, 'TEST_ENUM');
    //     // assert.strictEqual(enumItem.alias, undefined);
    //     assert.strictEqual(enumItem.members.length, 2);
    //     assert.strictEqual(enumItem.members[0], 'ENUM_1=1');
    //     assert.strictEqual(enumItem.members[1], 'ENUM_2=2');

    //     // 没有分号结尾
    //     testenum = `enum TEST_ENUM { 
    //         ENUM_1, // comment 
    //         ENUM_2 
    //     }`;
    //     enumObjList = parsec.parseStruct(testenum);
    //     assert.strictEqual(enumObjList.length, 1);
    //     enumItem = enumObjList[0];
    //     assert.strictEqual(enumItem.name, 'TEST_ENUM');
    //     // assert.strictEqual(enumItem.alias, undefined);
    //     assert.strictEqual(enumItem.members.length, 2);
    //     assert.strictEqual(enumItem.members[0], 'ENUM_1');
    //     assert.strictEqual(enumItem.members[1], 'ENUM_2');
    // });

    // //3, 测试异常情况
    // test('parseStruct_test_3', () => {
    //     let teststr: string = '';
    //     let enumObjList = parsec.parseStruct(teststr);
    //     assert.strictEqual(enumObjList.length, 0);

    //     teststr = 'enum { ENUM_1 }';
    //     enumObjList = parsec.parseStruct(teststr);
    //     assert.strictEqual(enumObjList.length, 1);
    //     let enumItem = enumObjList[0];
    //     assert.strictEqual(enumItem.members[0], 'ENUM_1');

    //     teststr = `enum { 
    //         ENUM_1, 
    //         ENUM_2 };`
    //     enumObjList = parsec.parseStruct(teststr);
    //     assert.strictEqual(enumObjList.length, 1);
    //     enumItem = enumObjList[0];
    //     assert.strictEqual(enumItem.members.length, 2);
    //     assert.strictEqual(enumItem.members[0], 'ENUM_1');
    //     assert.strictEqual(enumItem.members[1], 'ENUM_2');

    //     teststr = `enum { 
    //         ENUM_1, // comment 
    //         ENUM_2 
    //     }`;
    //     enumObjList = parsec.parseStruct(teststr);
    //     assert.strictEqual(enumObjList.length, 1);
    //     enumItem = enumObjList[0];
    //     assert.strictEqual(enumItem.members.length, 2);
    //     assert.strictEqual(enumItem.members[0], 'ENUM_1');
    //     assert.strictEqual(enumItem.members[1], 'ENUM_2');

    //     teststr = `enum OType {
    //         ENUM_1, // comment
    //         ENUM_2,
    //     };`
    //     enumObjList = parsec.parseStruct(teststr);
    //     assert.strictEqual(enumObjList.length, 1);
    //     enumItem = enumObjList[0];
    //     assert.strictEqual(enumItem.members.length, 2);
    //     assert.strictEqual(enumItem.members[0], 'ENUM_1');
    //     assert.strictEqual(enumItem.members[1], 'ENUM_2');

    //     teststr = `typedef enum OType {
    //         ENUM_1, // comment
    //         ENUM_2,
    //     };`
    //     enumObjList = parsec.parseStruct(teststr);
    //     assert.strictEqual(enumObjList.length, 1);
    //     enumItem = enumObjList[0];
    //     assert.strictEqual(enumItem.members.length, 2);
    //     assert.strictEqual(enumItem.members[0], 'ENUM_1');
    //     assert.strictEqual(enumItem.members[1], 'ENUM_2');
    // });

    // //4, 测试错误情况
    // test('parseStruct_test_4', () => {
    //     let enumObjList = parsec.parseStruct('');
    //     assert.strictEqual(enumObjList.length, 0);

    //     let teststr = `typedef enum OType {`;
    //     enumObjList = parsec.parseStruct(teststr);
    //     assert.strictEqual(enumObjList.length, 0);

    //     teststr = `}; typedef enum OType //{} {}`;
    //     enumObjList = parsec.parseStruct(teststr);
    //     assert.strictEqual(enumObjList.length, 0);

    //     teststr = `typedefinde enumute OType { }`;
    //     enumObjList = parsec.parseStruct(teststr);
    //     assert.strictEqual(enumObjList.length, 0);

    //     teststr = `TYPEDEFfinde ENUMute OType { }`;
    //     enumObjList = parsec.parseStruct(teststr);
    //     assert.strictEqual(enumObjList.length, 0);

    //     teststr = `export typedef enum OType { }`;
    //     enumObjList = parsec.parseStruct(teststr);
    //     assert.strictEqual(enumObjList.length, 1);
    //     let enumItem = enumObjList[0];
    //     assert.strictEqual(enumItem.name, 'OType');

    //     teststr = `typedef enum OType { }`;
    //     enumObjList = parsec.parseStruct(teststr);
    //     assert.strictEqual(enumObjList.length, 1);

    //     teststr = `typedef enum { }`;
    //     enumObjList = parsec.parseStruct(teststr);
    //     assert.strictEqual(enumObjList.length, 1);

    //     teststr = `typedef enum { }`;
    //     enumObjList = parsec.parseStruct(teststr);
    //     assert.strictEqual(enumObjList.length, 1);

    //     teststr = `typedef enum { ENUM_1 = 1, ENUM_2 = 2  }`;
    //     enumObjList = parsec.parseStruct(teststr);
    //     assert.strictEqual(enumObjList.length, 1);
    // });
});
