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
    test('parseStruct_c_test_1', () => {
        let testenum = `typedef struct {
            int a;
            char b;
            float c;
            int add(int a, int b);
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
        assert.strictEqual(structItem.functions.length, 1);
        assert.strictEqual(structItem.functions[0].name, 'add');
        assert.strictEqual(structItem.functions[0].returns, 'int');
        assert.strictEqual(structItem.functions[0].parameters.length, 2);
        assert.strictEqual(structItem.functions[0].parameters[0].name, 'a');
        assert.strictEqual(structItem.functions[0].parameters[0].type, 'int');
        assert.strictEqual(structItem.functions[0].parameters[1].name, 'b');
        assert.strictEqual(structItem.functions[0].parameters[1].type, 'int');
    });

    //2, 测试边界情况
    test('parseStruct_c_test_2', () => {
        let testenum = `typedef struct optype {
            int len;
            float width;
            char name[20][10];
        } OperationType;`
        let structObjList = parsec.parseStruct(testenum);
        assert.strictEqual(structObjList.length, 1);
        let structItem = structObjList[0];
        assert.strictEqual(structItem.name, 'optype');
        assert.strictEqual(structItem.alias, 'OperationType');
        assert.strictEqual(structItem.members.length, 3);
        assert.strictEqual(structItem.members[0].name, 'len');
        assert.strictEqual(structItem.members[0].type, 'int');
        assert.strictEqual(structItem.members[1].name, 'width');
        assert.strictEqual(structItem.members[1].type, 'float');
        assert.strictEqual(structItem.members[2].name, 'name');
        assert.strictEqual(structItem.members[2].type, 'char');
        assert.strictEqual(structItem.members[2].arraySize, 20);
        assert.strictEqual(structItem.members[2].arraySizeList[0], 20);
        assert.strictEqual(structItem.members[2].arraySizeList[1], 10);

        testenum = `typedef struct {
            int a;
            char b;
            float c;
            int add(int a, int b);
            void mod();
            long long func(long long ll);
            char* cfunc(const char* str);
            double (*cfunc)(double, int);
            double (*cfuncList[10])(double, int);
        } TestStruct;`
        structObjList = parsec.parseStruct(testenum);
        assert.strictEqual(structObjList.length, 1);
        structItem = structObjList[0];
        assert.strictEqual(structItem.name, 'TestStruct');
        assert.strictEqual(structItem.alias, 'TestStruct');
        assert.strictEqual(structItem.members.length, 5);
        assert.strictEqual(structItem.members[0].name, 'a');
        assert.strictEqual(structItem.members[0].type, 'int');
        assert.strictEqual(structItem.members[1].name, 'b');
        assert.strictEqual(structItem.members[1].type, 'char');
        assert.strictEqual(structItem.members[2].name, 'c');
        assert.strictEqual(structItem.members[2].type, 'float');
        assert.strictEqual(structItem.members[3].name, 'cfunc');
        assert.strictEqual(structItem.members[3].type, 'double');
        assert.strictEqual(structItem.members[3].arraySize, 2);
        assert.strictEqual(structItem.members[3].arraySizeList[0], 'double');
        assert.strictEqual(structItem.members[3].arraySizeList[1], 'int');
        assert.strictEqual(structItem.members[4].name, 'cfuncList[10]');
        assert.strictEqual(structItem.members[4].type, 'double');
        assert.strictEqual(structItem.members[4].arraySize, 2);
        assert.strictEqual(structItem.members[4].arraySizeList[0], 'double');
        assert.strictEqual(structItem.members[4].arraySizeList[1], 'int');
        
        assert.strictEqual(structItem.functions.length, 4);
        assert.strictEqual(structItem.functions[0].name, 'add');
        assert.strictEqual(structItem.functions[0].returns, 'int');
        assert.strictEqual(structItem.functions[0].parameters.length, 2);
        assert.strictEqual(structItem.functions[0].parameters[0].name, 'a');
        assert.strictEqual(structItem.functions[0].parameters[0].type, 'int');
        assert.strictEqual(structItem.functions[0].parameters[1].name, 'b');
        assert.strictEqual(structItem.functions[0].parameters[1].type, 'int');
        assert.strictEqual(structItem.functions[1].name, 'mod');
        assert.strictEqual(structItem.functions[1].returns, 'void');
        assert.strictEqual(structItem.functions[1].parameters.length, 0);
        assert.strictEqual(structItem.functions[2].name, 'func');
        assert.strictEqual(structItem.functions[2].returns, 'long long');
        assert.strictEqual(structItem.functions[2].parameters.length, 1);
        assert.strictEqual(structItem.functions[2].parameters[0].name, 'll');
        assert.strictEqual(structItem.functions[2].parameters[0].type, 'long long');
        assert.strictEqual(structItem.functions[3].name, 'cfunc');
        assert.strictEqual(structItem.functions[3].returns, 'char*');
        assert.strictEqual(structItem.functions[3].parameters.length, 1);
        assert.strictEqual(structItem.functions[3].parameters[0].name, 'str');
        assert.strictEqual(structItem.functions[3].parameters[0].type, 'char*');

        testenum = `typedef struct optype {
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
        structObjList = parsec.parseStruct(testenum);
        assert.strictEqual(structObjList.length, 1);
        structItem = structObjList[0];
        assert.strictEqual(structItem.name, 'optype');
        assert.strictEqual(structItem.alias, 'OperationType');
        assert.strictEqual(structItem.members.length, 38);
        
        assert.strictEqual(structItem.members[0].name, 'ch');
        assert.strictEqual(structItem.members[0].type, 'char');
        assert.strictEqual(structItem.members[1].name, 'len');
        assert.strictEqual(structItem.members[1].type, 'int');
        assert.strictEqual(structItem.members[2].name, 'slen');
        assert.strictEqual(structItem.members[2].type, 'short');
        assert.strictEqual(structItem.members[3].name, 'llen');
        assert.strictEqual(structItem.members[3].type, 'long');
        assert.strictEqual(structItem.members[4].name, 'llint');
        assert.strictEqual(structItem.members[4].type, 'long long');
        assert.strictEqual(structItem.members[5].name, 'width');
        assert.strictEqual(structItem.members[5].type, 'float');
        assert.strictEqual(structItem.members[6].name, 'dlen');
        assert.strictEqual(structItem.members[6].type, 'double');
        assert.strictEqual(structItem.members[7].name, 'ldlen');
        assert.strictEqual(structItem.members[7].type, 'long double');
        assert.strictEqual(structItem.members[8].name, 'ptr');
        assert.strictEqual(structItem.members[8].type, 'void*');
        assert.strictEqual(structItem.members[9].name, 'name');
        assert.strictEqual(structItem.members[9].type, 'char');
        assert.strictEqual(structItem.members[9].arraySize, 20);
        assert.strictEqual(structItem.members[9].arraySizeList[0], 20);
        assert.strictEqual(structItem.members[9].arraySizeList[1], 10);
        assert.strictEqual(structItem.members[10].name, 'ch3');
        assert.strictEqual(structItem.members[10].type, 'char');
        assert.strictEqual(structItem.members[10].arraySize, 10);
        assert.strictEqual(structItem.members[10].arraySizeList[0], 10);
        assert.strictEqual(structItem.members[10].arraySizeList[1], 20);
        assert.strictEqual(structItem.members[10].arraySizeList[2], 30);
        assert.strictEqual(structItem.members[11].name, 'len3');
        assert.strictEqual(structItem.members[11].type, 'int');
        assert.strictEqual(structItem.members[11].arraySize, 10);
        assert.strictEqual(structItem.members[11].arraySizeList[0], 10);
        assert.strictEqual(structItem.members[11].arraySizeList[1], 20);
        assert.strictEqual(structItem.members[11].arraySizeList[2], 30);
        assert.strictEqual(structItem.members[12].name, 'slen3');
        assert.strictEqual(structItem.members[12].type, 'short');
        assert.strictEqual(structItem.members[12].arraySize, 10);
        assert.strictEqual(structItem.members[12].arraySizeList[0], 10);
        assert.strictEqual(structItem.members[12].arraySizeList[1], 20);
        assert.strictEqual(structItem.members[12].arraySizeList[2], 30);
        assert.strictEqual(structItem.members[13].name, 'llen3');
        assert.strictEqual(structItem.members[13].type, 'long');
        assert.strictEqual(structItem.members[13].arraySize, 10);
        assert.strictEqual(structItem.members[13].arraySizeList[0], 10);
        assert.strictEqual(structItem.members[13].arraySizeList[1], 20);
        assert.strictEqual(structItem.members[13].arraySizeList[2], 30);
        assert.strictEqual(structItem.members[14].name, 'llint3');
        assert.strictEqual(structItem.members[14].type, 'long long');
        assert.strictEqual(structItem.members[14].arraySize, 10);
        assert.strictEqual(structItem.members[14].arraySizeList[0], 10);
        assert.strictEqual(structItem.members[14].arraySizeList[1], 20);
        assert.strictEqual(structItem.members[14].arraySizeList[2], 30);
        assert.strictEqual(structItem.members[15].name, 'width3');
        assert.strictEqual(structItem.members[15].type, 'float');
        assert.strictEqual(structItem.members[15].arraySize, 10);
        assert.strictEqual(structItem.members[15].arraySizeList[0], 10);
        assert.strictEqual(structItem.members[15].arraySizeList[1], 20);
        assert.strictEqual(structItem.members[15].arraySizeList[2], 30);
        assert.strictEqual(structItem.members[16].name, 'dlen3');
        assert.strictEqual(structItem.members[16].type, 'double');
        assert.strictEqual(structItem.members[16].arraySize, 10);
        assert.strictEqual(structItem.members[16].arraySizeList[0], 10);
        assert.strictEqual(structItem.members[16].arraySizeList[1], 20);
        assert.strictEqual(structItem.members[16].arraySizeList[2], 30);
        assert.strictEqual(structItem.members[17].name, 'ldlen3');
        assert.strictEqual(structItem.members[17].type, 'long double');
        assert.strictEqual(structItem.members[17].arraySize, 10);
        assert.strictEqual(structItem.members[17].arraySizeList[0], 10);
        assert.strictEqual(structItem.members[17].arraySizeList[1], 20);
        assert.strictEqual(structItem.members[17].arraySizeList[2], 30);
        assert.strictEqual(structItem.members[18].name, 'ptr3');
        assert.strictEqual(structItem.members[18].type, 'void*');
        assert.strictEqual(structItem.members[18].arraySize, 10);
        assert.strictEqual(structItem.members[18].arraySizeList[0], 10);
        assert.strictEqual(structItem.members[18].arraySizeList[1], 20);
        assert.strictEqual(structItem.members[18].arraySizeList[2], 30);
        assert.strictEqual(structItem.members[19].name, 'sch');
        assert.strictEqual(structItem.members[19].type, 'signed char');
        assert.strictEqual(structItem.members[20].name, 'silen');
        assert.strictEqual(structItem.members[20].type, 'signed int');
        assert.strictEqual(structItem.members[21].name, 'slen');
        assert.strictEqual(structItem.members[21].type, 'signed short');
        assert.strictEqual(structItem.members[22].name, 'sllen');
        assert.strictEqual(structItem.members[22].type, 'signed long');
        assert.strictEqual(structItem.members[23].name, 'sllint');
        assert.strictEqual(structItem.members[23].type, 'signed long long');
        assert.strictEqual(structItem.members[24].name, 'swidth');
        assert.strictEqual(structItem.members[24].type, 'signed float');
        assert.strictEqual(structItem.members[25].name, 'sdlen');
        assert.strictEqual(structItem.members[25].type, 'signed double');
        assert.strictEqual(structItem.members[26].name, 'sldlen');
        assert.strictEqual(structItem.members[26].type, 'signed long double');
        assert.strictEqual(structItem.members[27].name, 'ptr');
        assert.strictEqual(structItem.members[27].type, 'signed void*');
        assert.strictEqual(structItem.members[28].name, 'uch');
        assert.strictEqual(structItem.members[28].type, 'unsigend char');
        assert.strictEqual(structItem.members[29].name, 'ulen');
        assert.strictEqual(structItem.members[29].type, 'unsigend int');
        assert.strictEqual(structItem.members[30].name, 'uslen');
        assert.strictEqual(structItem.members[30].type, 'unsigend short');
        assert.strictEqual(structItem.members[31].name, 'ullen');
        assert.strictEqual(structItem.members[31].type, 'unsigend long');
        assert.strictEqual(structItem.members[32].name, 'ullint');
        assert.strictEqual(structItem.members[32].type, 'unsigend long long');
        assert.strictEqual(structItem.members[33].name, 'uwidth');
        assert.strictEqual(structItem.members[33].type, 'unsigend float');
        assert.strictEqual(structItem.members[34].name, 'udlen');
        assert.strictEqual(structItem.members[34].type, 'unsigend double');
        assert.strictEqual(structItem.members[35].name, 'uld');
        assert.strictEqual(structItem.members[35].type, 'unsigend long double');
        assert.strictEqual(structItem.members[36].name, 'uptr');
        assert.strictEqual(structItem.members[36].type, 'unsigend void*');
        assert.strictEqual(structItem.members[37].name, 'bflag');
        assert.strictEqual(structItem.members[37].type, 'bool');

        testenum = `typedef struct optype { int len; float width; char name[20][10];} OperationType;`
        structObjList = parsec.parseStruct(testenum);
        assert.strictEqual(structObjList.length, 1);
        structItem = structObjList[0];
        assert.strictEqual(structItem.name, 'optype');
        assert.strictEqual(structItem.alias, 'OperationType');
        assert.strictEqual(structItem.members.length, 3);
        assert.strictEqual(structItem.members[0].name, 'len');
        assert.strictEqual(structItem.members[0].type, 'int');
        assert.strictEqual(structItem.members[1].name, 'width');
        assert.strictEqual(structItem.members[1].type, 'float');
        assert.strictEqual(structItem.members[2].name, 'name');
        assert.strictEqual(structItem.members[2].type, 'char');
        assert.strictEqual(structItem.members[2].arraySize, 20);
        assert.strictEqual(structItem.members[2].arraySizeList[0], 20);
        assert.strictEqual(structItem.members[2].arraySizeList[1], 10);

        testenum = `typedef struct { int len; } OperationType;`
        structObjList = parsec.parseStruct(testenum);
        assert.strictEqual(structObjList.length, 1);
        structItem = structObjList[0];
        assert.strictEqual(structItem.name, 'OperationType');
        assert.strictEqual(structItem.alias, 'OperationType');
        assert.strictEqual(structItem.members.length, 1);
        assert.strictEqual(structItem.members[0].name, 'len');
        assert.strictEqual(structItem.members[0].type, 'int');

        testenum = `struct OperationType { int len; };`
        structObjList = parsec.parseStruct(testenum);
        assert.strictEqual(structObjList.length, 1);
        structItem = structObjList[0];
        assert.strictEqual(structItem.name, 'OperationType');
        assert.strictEqual(structItem.members.length, 1);
        assert.strictEqual(structItem.members[0].name, 'len');
        assert.strictEqual(structItem.members[0].type, 'int');

        testenum = `typedef struct OType { int len; } OperationType;`
        structObjList = parsec.parseStruct(testenum);
        assert.strictEqual(structObjList.length, 1);
        structItem = structObjList[0];
        assert.strictEqual(structItem.name, 'OType');
        assert.strictEqual(structItem.alias, 'OperationType');
        assert.strictEqual(structItem.members.length, 1);
        assert.strictEqual(structItem.members[0].name, 'len');
        assert.strictEqual(structItem.members[0].type, 'int');

        testenum = `struct OType { int len; }; struct TOTSize1 { int len; };`
        structObjList = parsec.parseStruct(testenum);
        assert.strictEqual(structObjList.length, 2);
        structItem = structObjList[0];
        assert.strictEqual(structItem.name, 'OType');
        // assert.strictEqual(structItem.alias, undefined);
        assert.strictEqual(structItem.members.length, 1);
        assert.strictEqual(structItem.members[0].name, 'len');
        assert.strictEqual(structItem.members[0].type, 'int');
        structItem = structObjList[1];
        assert.strictEqual(structItem.name, 'TOTSize1');
        // assert.strictEqual(structItem.alias, undefined);
        assert.strictEqual(structItem.members.length, 1);
        assert.strictEqual(structItem.members[0].name, 'len');
        assert.strictEqual(structItem.members[0].type, 'int');

        testenum = `struct TEST_ENUM { 
            int len; // comment 
            char name[10];
        }     ;`;
        structObjList = parsec.parseStruct(testenum);
        assert.strictEqual(structObjList.length, 1);
        structItem = structObjList[0];
        assert.strictEqual(structItem.name, 'TEST_ENUM');
        // assert.strictEqual(structItem.alias, undefined);
        assert.strictEqual(structItem.members.length, 2);
        assert.strictEqual(structItem.members[0].name, 'len');
        assert.strictEqual(structItem.members[0].type, 'int');
        assert.strictEqual(structItem.members[1].name, 'name');
        assert.strictEqual(structItem.members[1].type, 'char');
        assert.strictEqual(structItem.members[1].arraySize, 10);

        // 没有分号结尾
        testenum = `struct TEST_ENUM { 
            int len; // comment 
            char name[10]
        }`;
        structObjList = parsec.parseStruct(testenum);
        assert.strictEqual(structObjList.length, 0);

        testenum = `struct TEST_ENUM { 
            int len; // comment 
            char name[10];
        } TEST_ENUM_T`;
        structObjList = parsec.parseStruct(testenum);
        assert.strictEqual(structObjList.length, 0);
        
        testenum = `typedef struct TEST_ENUM { 
            int len; // comment 
            char name[10];
            ENUM_T tenum;
            CLASS_T tclass;
            STRUCT_T tstruct;
            UNION_T tunion;
        } TEST_ENUM_T;`;
        structObjList = parsec.parseStruct(testenum);
        assert.strictEqual(structObjList.length, 1);
        structItem = structObjList[0];
        assert.strictEqual(structItem.name, 'TEST_ENUM');
        assert.strictEqual(structItem.alias, 'TEST_ENUM_T');
        assert.strictEqual(structItem.members.length, 6);

        assert.strictEqual(structItem.members[0].name, 'len');
        assert.strictEqual(structItem.members[0].type, 'int');
        assert.strictEqual(structItem.members[1].name, 'name');
        assert.strictEqual(structItem.members[1].type, 'char');
        assert.strictEqual(structItem.members[2].name, 'tenum');
        assert.strictEqual(structItem.members[2].type, 'ENUM_T');
        assert.strictEqual(structItem.members[3].name, 'tclass');
        assert.strictEqual(structItem.members[3].type, 'CLASS_T');
        assert.strictEqual(structItem.members[4].name, 'tstruct');
        assert.strictEqual(structItem.members[4].type, 'STRUCT_T');
        assert.strictEqual(structItem.members[5].name, 'tunion');
        assert.strictEqual(structItem.members[5].type, 'UNION_T');
    });

    //3, 测试异常情况
    test('parseStruct_c_test_3', () => {
        let teststr: string = '';
        let structObjList = parsec.parseStruct(teststr);
        assert.strictEqual(structObjList.length, 0);

        teststr = 'struct unionname { ENUM_1 tn; };';
        structObjList = parsec.parseStruct(teststr);
        assert.strictEqual(structObjList.length, 1);
        let structItem = structObjList[0];
        assert.strictEqual(structItem.name, 'unionname');
        assert.strictEqual(structItem.members[0].type, 'ENUM_1');
        assert.strictEqual(structItem.members[0].name, 'tn');

        teststr = `DEFINE struct TU {
            DEF_PARAM_1
            };`
        structObjList = parsec.parseStruct(teststr);
        assert.strictEqual(structObjList.length, 1);
        structItem = structObjList[0];
        assert.strictEqual(structItem.name, 'TU');
        assert.strictEqual(structItem.members.length, 0);

        teststr = `struct { 
        }`;
        structObjList = parsec.parseStruct(teststr);
        assert.strictEqual(structObjList.length, 0);

        teststr = `struct OType {
            // comment
            ENUM_1 ta;
            ENUM_2 tb;
        };`
        structObjList = parsec.parseStruct(teststr);
        assert.strictEqual(structObjList.length, 1);
        structItem = structObjList[0];
        assert.strictEqual(structItem.name, 'OType');
        assert.strictEqual(structItem.members.length, 2);
        assert.strictEqual(structItem.members[0].type, 'ENUM_1');
        assert.strictEqual(structItem.members[0].name, 'ta');
        assert.strictEqual(structItem.members[1].type, 'ENUM_2');
        assert.strictEqual(structItem.members[1].name, 'tb');

        teststr = `typedef struct OType {
            ENUM_1 ta; /* comment */
            ENUM_2 tb;
        };`
        structObjList = parsec.parseStruct(teststr);
        assert.strictEqual(structObjList.length, 1);
        structItem = structObjList[0];
        assert.strictEqual(structItem.members.length, 2);
        assert.strictEqual(structItem.members[0].type, 'ENUM_1');
        assert.strictEqual(structItem.members[0].name, 'ta');
        assert.strictEqual(structItem.members[1].type, 'ENUM_2');
        assert.strictEqual(structItem.members[1].name, 'tb');

        teststr = `typedef struct OType {
            ENUM_1 ta, /* comment */
            ENUM_2 tb,
        };`
        structObjList = parsec.parseStruct(teststr);
        assert.strictEqual(structObjList.length, 1);
        structItem = structObjList[0];
        assert.strictEqual(structItem.members.length, 1);
        assert.strictEqual(structItem.members[0].type, 'ENUM_1');
    });

    // //4, 测试错误情况
    test('parseStruct_c_test_4', () => {
        let structObjList = parsec.parseStruct('');
        assert.strictEqual(structObjList.length, 0);

        let teststr = `typedef struct OType {`;
        structObjList = parsec.parseStruct(teststr);
        assert.strictEqual(structObjList.length, 0);

        teststr = `}; typedef struct OType //{} {}`;
        structObjList = parsec.parseStruct(teststr);
        assert.strictEqual(structObjList.length, 0);

        teststr = `typedefinde unionute OType { }`;
        structObjList = parsec.parseStruct(teststr);
        assert.strictEqual(structObjList.length, 0);

        teststr = `TYPEDEFfinde UNION OType { }`;
        structObjList = parsec.parseStruct(teststr);
        assert.strictEqual(structObjList.length, 0);

        teststr = `export typedef struct OType { };`;
        structObjList = parsec.parseStruct(teststr);
        assert.strictEqual(structObjList.length, 1);
        let structItem = structObjList[0];
        assert.strictEqual(structItem.name, 'OType');

        teststr = `typedef struct OType { }`;
        structObjList = parsec.parseStruct(teststr);
        assert.strictEqual(structObjList.length, 0);

        teststr = `typedef struct { };`;
        structObjList = parsec.parseStruct(teststr);
        assert.strictEqual(structObjList.length, 0);

        teststr = `typedef struct { } test_t;`;
        structObjList = parsec.parseStruct(teststr);
        assert.strictEqual(structObjList.length, 1);

        // TODO, this is error, need fix
        teststr = `typedef struct { ENUM_1 =1, ENUM_2 =2  } test_t;`;
        structObjList = parsec.parseStruct(teststr);
        assert.strictEqual(structObjList.length, 1);
        structItem = structObjList[0];
        assert.strictEqual(structItem.name, 'test_t');
        assert.strictEqual(structItem.alias, 'test_t');
        assert.strictEqual(structItem.members.length, 0);

    });
});
