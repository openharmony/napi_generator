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

suite('Parse_C_Union_Suite', () => {
    vscode.window.showInformationMessage('Start all tests.');

    //1, 测试 parseUnion 一般情况
    test('parseUnion_test_1', () => {
        let testenum = `typedef union {
            int len;
            float width;
            char name[20];
        } OperationType;`
        let enumObjList = parsec.parseUnion(testenum);
        assert.strictEqual(enumObjList.length, 1);
        let enumItem = enumObjList[0];
        assert.strictEqual(enumItem.name, 'OperationType');
        assert.strictEqual(enumItem.alias, 'OperationType');
        assert.strictEqual(enumItem.members.length, 3);
        assert.strictEqual(enumItem.members[0].name, 'len');
        assert.strictEqual(enumItem.members[0].type, 'int');
        assert.strictEqual(enumItem.members[1].name, 'width');
        assert.strictEqual(enumItem.members[1].type, 'float');
        assert.strictEqual(enumItem.members[2].name, 'name');
        assert.strictEqual(enumItem.members[2].type, 'char');
        assert.strictEqual(enumItem.members[2].arraySize, 20);
    });

    //2, 测试边界情况
    test('parseUnion_test_2', () => {
        let testenum = `typedef union optype {
            int len;
            float width;
            char name[20][10];
        } OperationType;`
        let enumObjList = parsec.parseUnion(testenum);
        assert.strictEqual(enumObjList.length, 1);
        let enumItem = enumObjList[0];
        assert.strictEqual(enumItem.name, 'optype');
        assert.strictEqual(enumItem.alias, 'OperationType');
        assert.strictEqual(enumItem.members.length, 3);
        assert.strictEqual(enumItem.members[0].name, 'len');
        assert.strictEqual(enumItem.members[0].type, 'int');
        assert.strictEqual(enumItem.members[1].name, 'width');
        assert.strictEqual(enumItem.members[1].type, 'float');
        assert.strictEqual(enumItem.members[2].name, 'name');
        assert.strictEqual(enumItem.members[2].type, 'char');
        assert.strictEqual(enumItem.members[2].arraySize, 20);
        assert.strictEqual(enumItem.members[2].arraySizeList[0], 20);
        assert.strictEqual(enumItem.members[2].arraySizeList[1], 10);

        testenum = `typedef union optype { int len; float width; char name[20][10];} OperationType;`
        enumObjList = parsec.parseUnion(testenum);
        assert.strictEqual(enumObjList.length, 1);
        enumItem = enumObjList[0];
        assert.strictEqual(enumItem.name, 'optype');
        assert.strictEqual(enumItem.alias, 'OperationType');
        assert.strictEqual(enumItem.members.length, 3);
        assert.strictEqual(enumItem.members[0].name, 'len');
        assert.strictEqual(enumItem.members[0].type, 'int');
        assert.strictEqual(enumItem.members[1].name, 'width');
        assert.strictEqual(enumItem.members[1].type, 'float');
        assert.strictEqual(enumItem.members[2].name, 'name');
        assert.strictEqual(enumItem.members[2].type, 'char');
        assert.strictEqual(enumItem.members[2].arraySize, 20);
        assert.strictEqual(enumItem.members[2].arraySizeList[0], 20);
        assert.strictEqual(enumItem.members[2].arraySizeList[1], 10);

        testenum = `typedef union { int len; } OperationType;`
        enumObjList = parsec.parseUnion(testenum);
        assert.strictEqual(enumObjList.length, 1);
        enumItem = enumObjList[0];
        assert.strictEqual(enumItem.name, 'OperationType');
        assert.strictEqual(enumItem.alias, 'OperationType');
        assert.strictEqual(enumItem.members.length, 1);
        assert.strictEqual(enumItem.members[0].name, 'len');
        assert.strictEqual(enumItem.members[0].type, 'int');

        testenum = `union OperationType { int len; };`
        enumObjList = parsec.parseUnion(testenum);
        assert.strictEqual(enumObjList.length, 1);
        enumItem = enumObjList[0];
        assert.strictEqual(enumItem.name, 'OperationType');
        assert.strictEqual(enumItem.members.length, 1);
        assert.strictEqual(enumItem.members[0].name, 'len');
        assert.strictEqual(enumItem.members[0].type, 'int');

        testenum = `typedef union OType { int len; } OperationType;`
        enumObjList = parsec.parseUnion(testenum);
        assert.strictEqual(enumObjList.length, 1);
        enumItem = enumObjList[0];
        assert.strictEqual(enumItem.name, 'OType');
        assert.strictEqual(enumItem.alias, 'OperationType');
        assert.strictEqual(enumItem.members.length, 1);
        assert.strictEqual(enumItem.members[0].name, 'len');
        assert.strictEqual(enumItem.members[0].type, 'int');

        testenum = `union OType { int len; }; union TOTSize1 { int len; };`
        enumObjList = parsec.parseUnion(testenum);
        assert.strictEqual(enumObjList.length, 2);
        enumItem = enumObjList[0];
        assert.strictEqual(enumItem.name, 'OType');
        // assert.strictEqual(enumItem.alias, undefined);
        assert.strictEqual(enumItem.members.length, 1);
        assert.strictEqual(enumItem.members[0].name, 'len');
        assert.strictEqual(enumItem.members[0].type, 'int');
        enumItem = enumObjList[1];
        assert.strictEqual(enumItem.name, 'TOTSize1');
        // assert.strictEqual(enumItem.alias, undefined);
        assert.strictEqual(enumItem.members.length, 1);
        assert.strictEqual(enumItem.members[0].name, 'len');
        assert.strictEqual(enumItem.members[0].type, 'int');

        testenum = `union TEST_ENUM { 
            int len; // comment 
            char name[10];
        }     ;`;
        enumObjList = parsec.parseUnion(testenum);
        assert.strictEqual(enumObjList.length, 1);
        enumItem = enumObjList[0];
        assert.strictEqual(enumItem.name, 'TEST_ENUM');
        // assert.strictEqual(enumItem.alias, undefined);
        assert.strictEqual(enumItem.members.length, 2);
        assert.strictEqual(enumItem.members[0].name, 'len');
        assert.strictEqual(enumItem.members[0].type, 'int');
        assert.strictEqual(enumItem.members[1].name, 'name');
        assert.strictEqual(enumItem.members[1].type, 'char');
        assert.strictEqual(enumItem.members[1].arraySize, 10);

        // 没有分号结尾
        testenum = `union TEST_ENUM { 
            int len; // comment 
            char name[10]
        }`;
        enumObjList = parsec.parseUnion(testenum);
        assert.strictEqual(enumObjList.length, 0);
        
    });

    //3, 测试异常情况
    // test('parseUnion_test_3', () => {
    //     let teststr: string = '';
    //     let enumObjList = parsec.parseUnion(teststr);
    //     assert.strictEqual(enumObjList.length, 0);

    //     teststr = 'enum { ENUM_1 }';
    //     enumObjList = parsec.parseUnion(teststr);
    //     assert.strictEqual(enumObjList.length, 1);
    //     let enumItem = enumObjList[0];
    //     assert.strictEqual(enumItem.members[0], 'ENUM_1');

    //     teststr = `enum { 
    //         ENUM_1, 
    //         ENUM_2 };`
    //     enumObjList = parsec.parseUnion(teststr);
    //     assert.strictEqual(enumObjList.length, 1);
    //     enumItem = enumObjList[0];
    //     assert.strictEqual(enumItem.members.length, 2);
    //     assert.strictEqual(enumItem.members[0], 'ENUM_1');
    //     assert.strictEqual(enumItem.members[1], 'ENUM_2');

    //     teststr = `enum { 
    //         ENUM_1, // comment 
    //         ENUM_2 
    //     }`;
    //     enumObjList = parsec.parseUnion(teststr);
    //     assert.strictEqual(enumObjList.length, 1);
    //     enumItem = enumObjList[0];
    //     assert.strictEqual(enumItem.members.length, 2);
    //     assert.strictEqual(enumItem.members[0], 'ENUM_1');
    //     assert.strictEqual(enumItem.members[1], 'ENUM_2');

    //     teststr = `enum OType {
    //         ENUM_1, // comment
    //         ENUM_2,
    //     };`
    //     enumObjList = parsec.parseUnion(teststr);
    //     assert.strictEqual(enumObjList.length, 1);
    //     enumItem = enumObjList[0];
    //     assert.strictEqual(enumItem.members.length, 2);
    //     assert.strictEqual(enumItem.members[0], 'ENUM_1');
    //     assert.strictEqual(enumItem.members[1], 'ENUM_2');

    //     teststr = `typedef enum OType {
    //         ENUM_1, // comment
    //         ENUM_2,
    //     };`
    //     enumObjList = parsec.parseUnion(teststr);
    //     assert.strictEqual(enumObjList.length, 1);
    //     enumItem = enumObjList[0];
    //     assert.strictEqual(enumItem.members.length, 2);
    //     assert.strictEqual(enumItem.members[0], 'ENUM_1');
    //     assert.strictEqual(enumItem.members[1], 'ENUM_2');
    // });

    // //4, 测试错误情况
    // test('parseUnion_test_4', () => {
    //     let enumObjList = parsec.parseUnion('');
    //     assert.strictEqual(enumObjList.length, 0);

    //     let teststr = `typedef enum OType {`;
    //     enumObjList = parsec.parseUnion(teststr);
    //     assert.strictEqual(enumObjList.length, 0);

    //     teststr = `}; typedef enum OType //{} {}`;
    //     enumObjList = parsec.parseUnion(teststr);
    //     assert.strictEqual(enumObjList.length, 0);

    //     teststr = `typedefinde enumute OType { }`;
    //     enumObjList = parsec.parseUnion(teststr);
    //     assert.strictEqual(enumObjList.length, 0);

    //     teststr = `TYPEDEFfinde ENUMute OType { }`;
    //     enumObjList = parsec.parseUnion(teststr);
    //     assert.strictEqual(enumObjList.length, 0);

    //     teststr = `export typedef enum OType { }`;
    //     enumObjList = parsec.parseUnion(teststr);
    //     assert.strictEqual(enumObjList.length, 1);
    //     let enumItem = enumObjList[0];
    //     assert.strictEqual(enumItem.name, 'OType');

    //     teststr = `typedef enum OType { }`;
    //     enumObjList = parsec.parseUnion(teststr);
    //     assert.strictEqual(enumObjList.length, 1);

    //     teststr = `typedef enum { }`;
    //     enumObjList = parsec.parseUnion(teststr);
    //     assert.strictEqual(enumObjList.length, 1);

    //     teststr = `typedef enum { }`;
    //     enumObjList = parsec.parseUnion(teststr);
    //     assert.strictEqual(enumObjList.length, 1);

    //     teststr = `typedef enum { ENUM_1 = 1, ENUM_2 = 2  }`;
    //     enumObjList = parsec.parseUnion(teststr);
    //     assert.strictEqual(enumObjList.length, 1);
    // });
});
