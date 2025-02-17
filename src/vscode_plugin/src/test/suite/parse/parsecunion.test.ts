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
import { parse } from 'path';

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
        let unionObjList = parsec.parseUnion(testenum);
        assert.strictEqual(unionObjList.length, 1);
        let unionItem = unionObjList[0];
        assert.strictEqual(unionItem.name, 'OperationType');
        assert.strictEqual(unionItem.alias, 'OperationType');
        assert.strictEqual(unionItem.members.length, 3);
        assert.strictEqual(unionItem.members[0].name, 'len');
        assert.strictEqual(unionItem.members[0].type, 'int');
        assert.strictEqual(unionItem.members[1].name, 'width');
        assert.strictEqual(unionItem.members[1].type, 'float');
        assert.strictEqual(unionItem.members[2].name, 'name');
        assert.strictEqual(unionItem.members[2].type, 'char');
        assert.strictEqual(unionItem.members[2].arraySize, 20);
    });

    //2, 测试边界情况
    test('parseUnion_test_2', () => {
        let testenum = `typedef union optype {
            int len;
            float width;
            char name[20][10];
        } OperationType;`
        let unionObjList = parsec.parseUnion(testenum);
        assert.strictEqual(unionObjList.length, 1);
        let unionItem = unionObjList[0];
        assert.strictEqual(unionItem.name, 'optype');
        assert.strictEqual(unionItem.alias, 'OperationType');
        assert.strictEqual(unionItem.members.length, 3);
        assert.strictEqual(unionItem.members[0].name, 'len');
        assert.strictEqual(unionItem.members[0].type, 'int');
        assert.strictEqual(unionItem.members[1].name, 'width');
        assert.strictEqual(unionItem.members[1].type, 'float');
        assert.strictEqual(unionItem.members[2].name, 'name');
        assert.strictEqual(unionItem.members[2].type, 'char');
        assert.strictEqual(unionItem.members[2].arraySize, 20);
        assert.strictEqual(unionItem.members[2].arraySizeList[0], 20);
        assert.strictEqual(unionItem.members[2].arraySizeList[1], 10);

        testenum = `typedef union optype {
            char ch;
            int len;
            short slen;
            long llen;
            long long llint;
            float width;
            double dlen;
            long double ldlen;
            void* ptr;
            char name[20][10];
            char ch3[10][20][30];
            int len3[10][20][30];
            short slen3[10][20][30];
            long llen3[10][20][30];
            long long llint3[10][20][30];
            float width3[10][20][30];
            double dlen3[10][20][30];
            long double ldlen3[10][20][30];
            void* ptr3[10][20][30];
            signed char sch;
            signed int silen;
            signed short slen;
            signed long sllen;
            signed long long sllint;
            signed float swidth;
            signed double sdlen;
            signed long double sldlen;
            signed void* ptr;
            unsigend char uch;
            unsigend int ulen;
            unsigend short uslen;
            unsigend long ullen;
            unsigend long long ullint;
            unsigend float uwidth;
            unsigend double udlen;
            unsigend long double uld;
            unsigend void* uptr;
            bool bflag;
        } OperationType;`
        unionObjList = parsec.parseUnion(testenum);
        assert.strictEqual(unionObjList.length, 1);
        unionItem = unionObjList[0];
        assert.strictEqual(unionItem.name, 'optype');
        assert.strictEqual(unionItem.alias, 'OperationType');
        assert.strictEqual(unionItem.members.length, 38);
        
        assert.strictEqual(unionItem.members[0].name, 'ch');
        assert.strictEqual(unionItem.members[0].type, 'char');
        assert.strictEqual(unionItem.members[1].name, 'len');
        assert.strictEqual(unionItem.members[1].type, 'int');
        assert.strictEqual(unionItem.members[2].name, 'slen');
        assert.strictEqual(unionItem.members[2].type, 'short');
        assert.strictEqual(unionItem.members[3].name, 'llen');
        assert.strictEqual(unionItem.members[3].type, 'long');
        assert.strictEqual(unionItem.members[4].name, 'llint');
        assert.strictEqual(unionItem.members[4].type, 'long long');
        assert.strictEqual(unionItem.members[5].name, 'width');
        assert.strictEqual(unionItem.members[5].type, 'float');
        assert.strictEqual(unionItem.members[6].name, 'dlen');
        assert.strictEqual(unionItem.members[6].type, 'double');
        assert.strictEqual(unionItem.members[7].name, 'ldlen');
        assert.strictEqual(unionItem.members[7].type, 'long double');
        assert.strictEqual(unionItem.members[8].name, 'ptr');
        assert.strictEqual(unionItem.members[8].type, 'void*');
        assert.strictEqual(unionItem.members[9].name, 'name');
        assert.strictEqual(unionItem.members[9].type, 'char');
        assert.strictEqual(unionItem.members[9].arraySize, 20);
        assert.strictEqual(unionItem.members[9].arraySizeList[0], 20);
        assert.strictEqual(unionItem.members[9].arraySizeList[1], 10);
        assert.strictEqual(unionItem.members[10].name, 'ch3');
        assert.strictEqual(unionItem.members[10].type, 'char');
        assert.strictEqual(unionItem.members[10].arraySize, 10);
        assert.strictEqual(unionItem.members[10].arraySizeList[0], 10);
        assert.strictEqual(unionItem.members[10].arraySizeList[1], 20);
        assert.strictEqual(unionItem.members[10].arraySizeList[2], 30);
        assert.strictEqual(unionItem.members[11].name, 'len3');
        assert.strictEqual(unionItem.members[11].type, 'int');
        assert.strictEqual(unionItem.members[11].arraySize, 10);
        assert.strictEqual(unionItem.members[11].arraySizeList[0], 10);
        assert.strictEqual(unionItem.members[11].arraySizeList[1], 20);
        assert.strictEqual(unionItem.members[11].arraySizeList[2], 30);
        assert.strictEqual(unionItem.members[12].name, 'slen3');
        assert.strictEqual(unionItem.members[12].type, 'short');
        assert.strictEqual(unionItem.members[12].arraySize, 10);
        assert.strictEqual(unionItem.members[12].arraySizeList[0], 10);
        assert.strictEqual(unionItem.members[12].arraySizeList[1], 20);
        assert.strictEqual(unionItem.members[12].arraySizeList[2], 30);
        assert.strictEqual(unionItem.members[13].name, 'llen3');
        assert.strictEqual(unionItem.members[13].type, 'long');
        assert.strictEqual(unionItem.members[13].arraySize, 10);
        assert.strictEqual(unionItem.members[13].arraySizeList[0], 10);
        assert.strictEqual(unionItem.members[13].arraySizeList[1], 20);
        assert.strictEqual(unionItem.members[13].arraySizeList[2], 30);
        assert.strictEqual(unionItem.members[14].name, 'llint3');
        assert.strictEqual(unionItem.members[14].type, 'long long');
        assert.strictEqual(unionItem.members[14].arraySize, 10);
        assert.strictEqual(unionItem.members[14].arraySizeList[0], 10);
        assert.strictEqual(unionItem.members[14].arraySizeList[1], 20);
        assert.strictEqual(unionItem.members[14].arraySizeList[2], 30);
        assert.strictEqual(unionItem.members[15].name, 'width3');
        assert.strictEqual(unionItem.members[15].type, 'float');
        assert.strictEqual(unionItem.members[15].arraySize, 10);
        assert.strictEqual(unionItem.members[15].arraySizeList[0], 10);
        assert.strictEqual(unionItem.members[15].arraySizeList[1], 20);
        assert.strictEqual(unionItem.members[15].arraySizeList[2], 30);
        assert.strictEqual(unionItem.members[16].name, 'dlen3');
        assert.strictEqual(unionItem.members[16].type, 'double');
        assert.strictEqual(unionItem.members[16].arraySize, 10);
        assert.strictEqual(unionItem.members[16].arraySizeList[0], 10);
        assert.strictEqual(unionItem.members[16].arraySizeList[1], 20);
        assert.strictEqual(unionItem.members[16].arraySizeList[2], 30);
        assert.strictEqual(unionItem.members[17].name, 'ldlen3');
        assert.strictEqual(unionItem.members[17].type, 'long double');
        assert.strictEqual(unionItem.members[17].arraySize, 10);
        assert.strictEqual(unionItem.members[17].arraySizeList[0], 10);
        assert.strictEqual(unionItem.members[17].arraySizeList[1], 20);
        assert.strictEqual(unionItem.members[17].arraySizeList[2], 30);
        assert.strictEqual(unionItem.members[18].name, 'ptr3');
        assert.strictEqual(unionItem.members[18].type, 'void*');
        assert.strictEqual(unionItem.members[18].arraySize, 10);
        assert.strictEqual(unionItem.members[18].arraySizeList[0], 10);
        assert.strictEqual(unionItem.members[18].arraySizeList[1], 20);
        assert.strictEqual(unionItem.members[18].arraySizeList[2], 30);
        assert.strictEqual(unionItem.members[19].name, 'sch');
        assert.strictEqual(unionItem.members[19].type, 'signed char');
        assert.strictEqual(unionItem.members[20].name, 'silen');
        assert.strictEqual(unionItem.members[20].type, 'signed int');
        assert.strictEqual(unionItem.members[21].name, 'slen');
        assert.strictEqual(unionItem.members[21].type, 'signed short');
        assert.strictEqual(unionItem.members[22].name, 'sllen');
        assert.strictEqual(unionItem.members[22].type, 'signed long');
        assert.strictEqual(unionItem.members[23].name, 'sllint');
        assert.strictEqual(unionItem.members[23].type, 'signed long long');
        assert.strictEqual(unionItem.members[24].name, 'swidth');
        assert.strictEqual(unionItem.members[24].type, 'signed float');
        assert.strictEqual(unionItem.members[25].name, 'sdlen');
        assert.strictEqual(unionItem.members[25].type, 'signed double');
        assert.strictEqual(unionItem.members[26].name, 'sldlen');
        assert.strictEqual(unionItem.members[26].type, 'signed long double');
        assert.strictEqual(unionItem.members[27].name, 'ptr');
        assert.strictEqual(unionItem.members[27].type, 'signed void*');
        assert.strictEqual(unionItem.members[28].name, 'uch');
        assert.strictEqual(unionItem.members[28].type, 'unsigend char');
        assert.strictEqual(unionItem.members[29].name, 'ulen');
        assert.strictEqual(unionItem.members[29].type, 'unsigend int');
        assert.strictEqual(unionItem.members[30].name, 'uslen');
        assert.strictEqual(unionItem.members[30].type, 'unsigend short');
        assert.strictEqual(unionItem.members[31].name, 'ullen');
        assert.strictEqual(unionItem.members[31].type, 'unsigend long');
        assert.strictEqual(unionItem.members[32].name, 'ullint');
        assert.strictEqual(unionItem.members[32].type, 'unsigend long long');
        assert.strictEqual(unionItem.members[33].name, 'uwidth');
        assert.strictEqual(unionItem.members[33].type, 'unsigend float');
        assert.strictEqual(unionItem.members[34].name, 'udlen');
        assert.strictEqual(unionItem.members[34].type, 'unsigend double');
        assert.strictEqual(unionItem.members[35].name, 'uld');
        assert.strictEqual(unionItem.members[35].type, 'unsigend long double');
        assert.strictEqual(unionItem.members[36].name, 'uptr');
        assert.strictEqual(unionItem.members[36].type, 'unsigend void*');
        assert.strictEqual(unionItem.members[37].name, 'bflag');
        assert.strictEqual(unionItem.members[37].type, 'bool');

        testenum = `typedef union optype { int len; float width; char name[20][10];} OperationType;`
        unionObjList = parsec.parseUnion(testenum);
        assert.strictEqual(unionObjList.length, 1);
        unionItem = unionObjList[0];
        assert.strictEqual(unionItem.name, 'optype');
        assert.strictEqual(unionItem.alias, 'OperationType');
        assert.strictEqual(unionItem.members.length, 3);
        assert.strictEqual(unionItem.members[0].name, 'len');
        assert.strictEqual(unionItem.members[0].type, 'int');
        assert.strictEqual(unionItem.members[1].name, 'width');
        assert.strictEqual(unionItem.members[1].type, 'float');
        assert.strictEqual(unionItem.members[2].name, 'name');
        assert.strictEqual(unionItem.members[2].type, 'char');
        assert.strictEqual(unionItem.members[2].arraySize, 20);
        assert.strictEqual(unionItem.members[2].arraySizeList[0], 20);
        assert.strictEqual(unionItem.members[2].arraySizeList[1], 10);

        testenum = `typedef union { int len; } OperationType;`
        unionObjList = parsec.parseUnion(testenum);
        assert.strictEqual(unionObjList.length, 1);
        unionItem = unionObjList[0];
        assert.strictEqual(unionItem.name, 'OperationType');
        assert.strictEqual(unionItem.alias, 'OperationType');
        assert.strictEqual(unionItem.members.length, 1);
        assert.strictEqual(unionItem.members[0].name, 'len');
        assert.strictEqual(unionItem.members[0].type, 'int');

        testenum = `union OperationType { int len; };`
        unionObjList = parsec.parseUnion(testenum);
        assert.strictEqual(unionObjList.length, 1);
        unionItem = unionObjList[0];
        assert.strictEqual(unionItem.name, 'OperationType');
        assert.strictEqual(unionItem.members.length, 1);
        assert.strictEqual(unionItem.members[0].name, 'len');
        assert.strictEqual(unionItem.members[0].type, 'int');

        testenum = `typedef union OType { int len; } OperationType;`
        unionObjList = parsec.parseUnion(testenum);
        assert.strictEqual(unionObjList.length, 1);
        unionItem = unionObjList[0];
        assert.strictEqual(unionItem.name, 'OType');
        assert.strictEqual(unionItem.alias, 'OperationType');
        assert.strictEqual(unionItem.members.length, 1);
        assert.strictEqual(unionItem.members[0].name, 'len');
        assert.strictEqual(unionItem.members[0].type, 'int');

        testenum = `union OType { int len; }; union TOTSize1 { int len; };`
        unionObjList = parsec.parseUnion(testenum);
        assert.strictEqual(unionObjList.length, 2);
        unionItem = unionObjList[0];
        assert.strictEqual(unionItem.name, 'OType');
        // assert.strictEqual(unionItem.alias, undefined);
        assert.strictEqual(unionItem.members.length, 1);
        assert.strictEqual(unionItem.members[0].name, 'len');
        assert.strictEqual(unionItem.members[0].type, 'int');
        unionItem = unionObjList[1];
        assert.strictEqual(unionItem.name, 'TOTSize1');
        // assert.strictEqual(unionItem.alias, undefined);
        assert.strictEqual(unionItem.members.length, 1);
        assert.strictEqual(unionItem.members[0].name, 'len');
        assert.strictEqual(unionItem.members[0].type, 'int');

        testenum = `union TEST_ENUM { 
            int len; // comment 
            char name[10];
        }     ;`;
        unionObjList = parsec.parseUnion(testenum);
        assert.strictEqual(unionObjList.length, 1);
        unionItem = unionObjList[0];
        assert.strictEqual(unionItem.name, 'TEST_ENUM');
        // assert.strictEqual(unionItem.alias, undefined);
        assert.strictEqual(unionItem.members.length, 2);
        assert.strictEqual(unionItem.members[0].name, 'len');
        assert.strictEqual(unionItem.members[0].type, 'int');
        assert.strictEqual(unionItem.members[1].name, 'name');
        assert.strictEqual(unionItem.members[1].type, 'char');
        assert.strictEqual(unionItem.members[1].arraySize, 10);

        // 没有分号结尾
        testenum = `union TEST_ENUM { 
            int len; // comment 
            char name[10]
        }`;
        unionObjList = parsec.parseUnion(testenum);
        assert.strictEqual(unionObjList.length, 0);

        testenum = `union TEST_ENUM { 
            int len; // comment 
            char name[10];
        } TEST_ENUM_T`;
        unionObjList = parsec.parseUnion(testenum);
        assert.strictEqual(unionObjList.length, 0);
        
        testenum = `typedef union TEST_ENUM { 
            int len; // comment 
            char name[10];
            ENUM_T tenum;
            CLASS_T tclass;
            STRUCT_T tstruct;
            UNION_T tunion;
        } TEST_ENUM_T;`;
        unionObjList = parsec.parseUnion(testenum);
        assert.strictEqual(unionObjList.length, 1);
        unionItem = unionObjList[0];
        assert.strictEqual(unionItem.name, 'TEST_ENUM');
        assert.strictEqual(unionItem.alias, 'TEST_ENUM_T');
        assert.strictEqual(unionItem.members.length, 6);

        assert.strictEqual(unionItem.members[0].name, 'len');
        assert.strictEqual(unionItem.members[0].type, 'int');
        assert.strictEqual(unionItem.members[1].name, 'name');
        assert.strictEqual(unionItem.members[1].type, 'char');
        assert.strictEqual(unionItem.members[2].name, 'tenum');
        assert.strictEqual(unionItem.members[2].type, 'ENUM_T');
        assert.strictEqual(unionItem.members[3].name, 'tclass');
        assert.strictEqual(unionItem.members[3].type, 'CLASS_T');
        assert.strictEqual(unionItem.members[4].name, 'tstruct');
        assert.strictEqual(unionItem.members[4].type, 'STRUCT_T');
        assert.strictEqual(unionItem.members[5].name, 'tunion');
        assert.strictEqual(unionItem.members[5].type, 'UNION_T');
    });

    //3, 测试异常情况
    test('parseUnion_test_3', () => {
        let teststr: string = '';
        let unionObjList = parsec.parseUnion(teststr);
        assert.strictEqual(unionObjList.length, 0);

        teststr = 'union unionname { ENUM_1 tn; };';
        unionObjList = parsec.parseUnion(teststr);
        assert.strictEqual(unionObjList.length, 1);
        let unionItem = unionObjList[0];
        assert.strictEqual(unionItem.name, 'unionname');
        assert.strictEqual(unionItem.members[0].type, 'ENUM_1');
        assert.strictEqual(unionItem.members[0].name, 'tn');

        teststr = `DEFINE union TU {
            DEF_PARAM_1
           };`
        unionObjList = parsec.parseUnion(teststr);
        assert.strictEqual(unionObjList.length, 1);
        unionItem = unionObjList[0];
        assert.strictEqual(unionItem.name, 'TU');
        assert.strictEqual(unionItem.members.length, 1);
        assert.strictEqual(unionItem.members[0].type, 'DEF_PARAM_1');

        teststr = `union { 
        }`;
        unionObjList = parsec.parseUnion(teststr);
        assert.strictEqual(unionObjList.length, 0);

        teststr = `union OType {
            // comment
            ENUM_1 ta;
            ENUM_2 tb;
        };`
        unionObjList = parsec.parseUnion(teststr);
        assert.strictEqual(unionObjList.length, 1);
        unionItem = unionObjList[0];
        assert.strictEqual(unionItem.name, 'OType');
        assert.strictEqual(unionItem.members.length, 2);
        assert.strictEqual(unionItem.members[0].type, 'ENUM_1');
        assert.strictEqual(unionItem.members[0].name, 'ta');
        assert.strictEqual(unionItem.members[1].type, 'ENUM_2');
        assert.strictEqual(unionItem.members[1].name, 'tb');

        teststr = `typedef union OType {
            ENUM_1 ta; /* comment */
            ENUM_2 tb;
        };`
        unionObjList = parsec.parseUnion(teststr);
        assert.strictEqual(unionObjList.length, 1);
        unionItem = unionObjList[0];
        assert.strictEqual(unionItem.members.length, 2);
        assert.strictEqual(unionItem.members[0].type, 'ENUM_1');
        assert.strictEqual(unionItem.members[0].name, 'ta');
        assert.strictEqual(unionItem.members[1].type, 'ENUM_2');
        assert.strictEqual(unionItem.members[1].name, 'tb');

        teststr = `typedef union OType {
            ENUM_1 ta, /* comment */
            ENUM_2 tb,
        };`
        unionObjList = parsec.parseUnion(teststr);
        assert.strictEqual(unionObjList.length, 1);
        unionItem = unionObjList[0];
        assert.strictEqual(unionItem.members.length, 1);
        assert.strictEqual(unionItem.members[0].type, 'ENUM_1');
    });

    // //4, 测试错误情况
    test('parseUnion_test_4', () => {
        let unionObjList = parsec.parseUnion('');
        assert.strictEqual(unionObjList.length, 0);

        let teststr = `typedef union OType {`;
        unionObjList = parsec.parseUnion(teststr);
        assert.strictEqual(unionObjList.length, 0);

        teststr = `}; typedef union OType //{} {}`;
        unionObjList = parsec.parseUnion(teststr);
        assert.strictEqual(unionObjList.length, 0);

        teststr = `typedefinde unionute OType { }`;
        unionObjList = parsec.parseUnion(teststr);
        assert.strictEqual(unionObjList.length, 0);

        teststr = `TYPEDEFfinde UNION OType { }`;
        unionObjList = parsec.parseUnion(teststr);
        assert.strictEqual(unionObjList.length, 0);

        teststr = `export typedef union OType { };`;
        unionObjList = parsec.parseUnion(teststr);
        assert.strictEqual(unionObjList.length, 1);
        let unionItem = unionObjList[0];
        assert.strictEqual(unionItem.name, 'OType');

        teststr = `typedef union OType { }`;
        unionObjList = parsec.parseUnion(teststr);
        assert.strictEqual(unionObjList.length, 0);

        teststr = `typedef union { };`;
        unionObjList = parsec.parseUnion(teststr);
        assert.strictEqual(unionObjList.length, 0);

        teststr = `typedef union { } test_t;`;
        unionObjList = parsec.parseUnion(teststr);
        assert.strictEqual(unionObjList.length, 1);

        // TODO, this is error, need fix
        teststr = `typedef union { ENUM_1 =1, ENUM_2 =2  } test_t;`;
        unionObjList = parsec.parseUnion(teststr);
        assert.strictEqual(unionObjList.length, 1);
        unionItem = unionObjList[0];
        assert.strictEqual(unionItem.name, 'test_t');
        assert.strictEqual(unionItem.alias, 'test_t');
        assert.strictEqual(unionItem.members.length, 1);
        assert.strictEqual(unionItem.members[0].type, "ENUM_1 =1, ENUM_2 =2");

    });
});
