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

suite('Parse_Class_C_Suite', () => {
    vscode.window.showInformationMessage('Start all tests.');

    //1, 测试 parseClass 一般情况
    test('parseClass_test_1', () => {
        let testclass = `typedef class OTC {
            private:
                int len;
            public:
                char name[20];
                void contruct(int a);
                void deconstruct();
        } OperationType;`
        let classObjList = parsec.parseClass(testclass);
        assert.strictEqual(classObjList.length, 1);
        let classItem = classObjList[0];
        assert.strictEqual(classItem.name, 'OTC');
        assert.strictEqual(classItem.alias, 'OperationType');
        assert.strictEqual(classItem.functionList.length, 2);
        assert.strictEqual(classItem.functionList[0].name, 'contruct');
        assert.strictEqual(classItem.functionList[0].returns, 'void');
        assert.strictEqual(classItem.functionList[0].parameters.length, 1);
        assert.strictEqual(classItem.functionList[0].parameters[0].name, 'a');
        assert.strictEqual(classItem.functionList[0].parameters[0].type, 'int');
        assert.strictEqual(classItem.functionList[0].parameters[0].arraySize, -1);
        assert.strictEqual(classItem.functionList[1].name, 'deconstruct');
        assert.strictEqual(classItem.functionList[1].returns, 'void');

        assert.strictEqual(classItem.variableList.length, 2);
        assert.strictEqual(classItem.variableList[0].name, 'len');
        assert.strictEqual(classItem.variableList[0].type, 'int');
        assert.strictEqual(classItem.variableList[0].arraySize, -1);
        assert.strictEqual(classItem.variableList[1].name, 'name');
        assert.strictEqual(classItem.variableList[1].type, 'char');
        assert.strictEqual(classItem.variableList[1].arraySize, 20);
    });

    //2, 测试边界情况
    test('parseClass_test_2', () => {
        let testclass = `typedef class testa {
        private:
            short snum;
            short int sinum;
            long slong;
            long int silong;
            long long llong;
            long long int llinum;
            char cname;
            wchar_t cwname;
            char16_t c16name;
            char32_t c32name;
            bool bflag;
            float fnum;
            double dnum;
            long double ldnum;
            std::string ssname;
            std:wstring swsname;
            std::u16string su16sname;
            std:u32string su32sname;
            std::basic_string sbsname;

            std::vector<int> svlist;
            std::deque<int> sdlist;
            std::list<int> slist;
            std::forward_list<int> sflist;
            std::array<int> salist;
            std::stack<int> sqstack;
            std::queue<int> sqlist;
            std::priority_queue<int> spqlist;
            std::pair<double, int> sppair;
            std::map<double, int> smap;
            std::multimap<double, int> smmap;
            std::set<double, int> sset;
            std::multiset<double, int> smset;
            std::unordered_map<double, int> sumap;
            std::unordered_multimap<double, int> summap;
            std::unordered_set<double, int> suset;
            std::unordered_multiset<double, int> sumset;
            
            std::vector<int>::iterator svlistIter;
            std::deque<int>::iterator sdlistIter;
            std::list<int>::iterator slistIter;
            std::forward_list<int>::iterator sflistIter;
            std::array<int>::iterator salistIter;
            std::stack<int>::iterator sqstackIter;
            std::queue<int>::iterator sqqueIter;
            std::priority_queue<int>::iterator spqlistIter;
            std::pair<double, int>::iterator sppairIter;
            std::map<double, int>::iterator smapIter;
            std::multimap<double, int>::iterator smmapIter;
            std::set<double, int>::iterator ssetIter;
            std::multiset<double, int>::iterator smsetIter;
            std::unordered_map<double, int>::iterator sumapIter;
            std::unordered_multimap<double, int>::iterator summapIter;
            std::unordered_set<double, int>::iterator susetIter;
            std::unordered_multiset<double, int>::iterator sumsetIter;

            std::function<int(int, int)> func;
            std::tuple<int, float, double> myTuple;
            std::complex<double> myComplex;
            std::valarray<int> myValarray;
            std::time_t myTimet;
            std::clock_t myClock;
            std::tm myTm;

        } OperationType;`

        // let test = "std::pair<double ,  int>::iterator sppairIter";
        // let regex = /([\S\,\ ]+)\s+(\w+)/;
        // const matches = test.match(regex);
        let classObjList = parsec.parseClass(testclass);
        assert.strictEqual(classObjList.length, 1);
        let classItem = classObjList[0];
        assert.strictEqual(classItem.name, 'testa');
        assert.strictEqual(classItem.alias, 'OperationType');

        assert.strictEqual(classItem.variableList.length, 60);
        assert.strictEqual(classItem.variableList[0].name, 'snum');
        assert.strictEqual(classItem.variableList[0].type, 'short');
        assert.strictEqual(classItem.variableList[1].name, 'sinum');
        assert.strictEqual(classItem.variableList[1].type, 'short int');
        assert.strictEqual(classItem.variableList[2].name, 'slong');
        assert.strictEqual(classItem.variableList[2].type, 'long');
        assert.strictEqual(classItem.variableList[3].name, 'silong');
        assert.strictEqual(classItem.variableList[3].type, 'long int');
        assert.strictEqual(classItem.variableList[4].name, 'llong');
        assert.strictEqual(classItem.variableList[4].type, 'long long');
        assert.strictEqual(classItem.variableList[5].name, 'llinum');
        assert.strictEqual(classItem.variableList[5].type, 'long long int');
        assert.strictEqual(classItem.variableList[6].name, 'cname');
        assert.strictEqual(classItem.variableList[6].type, 'char');
        assert.strictEqual(classItem.variableList[7].name, 'cwname');
        assert.strictEqual(classItem.variableList[7].type, 'wchar_t');
        assert.strictEqual(classItem.variableList[8].name, 'c16name');
        assert.strictEqual(classItem.variableList[8].type, 'char16_t');
        assert.strictEqual(classItem.variableList[9].name, 'c32name');
        assert.strictEqual(classItem.variableList[9].type, 'char32_t');
        assert.strictEqual(classItem.variableList[10].name, 'bflag');
        assert.strictEqual(classItem.variableList[10].type, 'bool');
        assert.strictEqual(classItem.variableList[11].name, 'fnum');
        assert.strictEqual(classItem.variableList[11].type, 'float');
        assert.strictEqual(classItem.variableList[12].name, 'dnum');
        assert.strictEqual(classItem.variableList[12].type, 'double');
        assert.strictEqual(classItem.variableList[13].name, 'ldnum');
        assert.strictEqual(classItem.variableList[13].type, 'long double');
        assert.strictEqual(classItem.variableList[14].name, 'ssname');
        assert.strictEqual(classItem.variableList[14].type, 'std::string');
        assert.strictEqual(classItem.variableList[15].name, 'swsname');
        assert.strictEqual(classItem.variableList[15].type, 'std:wstring');
        assert.strictEqual(classItem.variableList[16].name, 'su16sname');
        assert.strictEqual(classItem.variableList[16].type, 'std::u16string');
        assert.strictEqual(classItem.variableList[17].name, 'su32sname');
        assert.strictEqual(classItem.variableList[17].type, 'std:u32string');
        assert.strictEqual(classItem.variableList[18].name, 'sbsname');
        assert.strictEqual(classItem.variableList[18].type, 'std::basic_string');
        assert.strictEqual(classItem.variableList[19].name, 'svlist');
        assert.strictEqual(classItem.variableList[19].type, 'std::vector<int>');
        assert.strictEqual(classItem.variableList[20].name, 'sdlist');
        assert.strictEqual(classItem.variableList[20].type, 'std::deque<int>');
        assert.strictEqual(classItem.variableList[21].name, 'slist');
        assert.strictEqual(classItem.variableList[21].type, 'std::list<int>');
        assert.strictEqual(classItem.variableList[22].name, 'sflist');
        assert.strictEqual(classItem.variableList[22].type, 'std::forward_list<int>');
        assert.strictEqual(classItem.variableList[23].name, 'salist');
        assert.strictEqual(classItem.variableList[23].type, 'std::array<int>');
        assert.strictEqual(classItem.variableList[24].name, 'sqstack');
        assert.strictEqual(classItem.variableList[24].type, 'std::stack<int>');
        assert.strictEqual(classItem.variableList[25].name, 'sqlist');
        assert.strictEqual(classItem.variableList[25].type, 'std::queue<int>');
        assert.strictEqual(classItem.variableList[26].name, 'spqlist');
        assert.strictEqual(classItem.variableList[26].type, 'std::priority_queue<int>');
        assert.strictEqual(classItem.variableList[27].name, 'sppair');
        assert.strictEqual(classItem.variableList[27].type, 'std::pair<double, int>');
        assert.strictEqual(classItem.variableList[28].name, 'smap');
        assert.strictEqual(classItem.variableList[28].type, 'std::map<double, int>');
        assert.strictEqual(classItem.variableList[29].name, 'smmap');
        assert.strictEqual(classItem.variableList[29].type, 'std::multimap<double, int>');
        assert.strictEqual(classItem.variableList[30].name, 'sset');
        assert.strictEqual(classItem.variableList[30].type, 'std::set<double, int>');
        assert.strictEqual(classItem.variableList[31].name, 'smset');
        assert.strictEqual(classItem.variableList[31].type, 'std::multiset<double, int>');
        assert.strictEqual(classItem.variableList[32].name, 'sumap');
        assert.strictEqual(classItem.variableList[32].type, 'std::unordered_map<double, int>');
        assert.strictEqual(classItem.variableList[33].name, 'summap');
        assert.strictEqual(classItem.variableList[33].type, 'std::unordered_multimap<double, int>');
        assert.strictEqual(classItem.variableList[34].name, 'suset');
        assert.strictEqual(classItem.variableList[34].type, 'std::unordered_set<double, int>');
        assert.strictEqual(classItem.variableList[35].name, 'sumset');
        assert.strictEqual(classItem.variableList[35].type, 'std::unordered_multiset<double, int>');
        // assert.strictEqual(classItem.variableList[36].name, 'svlistIter');
        // assert.strictEqual(classItem.variableList[36].type, 'std::vector<int>::iterator');
        // assert.strictEqual(classItem.variableList[37].name, 'sdlistIter');
        // assert.strictEqual(classItem.variableList[37].type, 'std::deque<int>::iterator');
        // assert.strictEqual(classItem.variableList[38].name, 'slistIter');
        // assert.strictEqual(classItem.variableList[38].type, 'std::list<int>::iterator');
        // assert.strictEqual(classItem.variableList[39].name, 'sflistIter');
        // assert.strictEqual(classItem.variableList[39].type, 'std::forward_list<int>::iterator');
        // assert.strictEqual(classItem.variableList[40].name, 'salistIter');
        // assert.strictEqual(classItem.variableList[40].type, 'std::array<int>::iterator');
        // assert.strictEqual(classItem.variableList[41].name, 'sqstackIter');
        // assert.strictEqual(classItem.variableList[41].type, 'std::stack<int>::iterator');
        // assert.strictEqual(classItem.variableList[42].name, 'sqqueIter');
        // assert.strictEqual(classItem.variableList[42].type, 'std::queue<int>::iterator');
        // assert.strictEqual(classItem.variableList[43].name, 'spqlistIter');
        // assert.strictEqual(classItem.variableList[43].type, 'std::priority_queue<int>::iterator');
        // assert.strictEqual(classItem.variableList[44].name, 'sppairIter');
        // assert.strictEqual(classItem.variableList[44].type, 'std::pair<double, int>::iterator');
        // assert.strictEqual(classItem.variableList[45].name, 'smapIter');
        // assert.strictEqual(classItem.variableList[45].type, 'std::map<double, int>::iterator');
        // assert.strictEqual(classItem.variableList[46].name, 'smmapIter');
        // assert.strictEqual(classItem.variableList[46].type, 'std::multimap<double, int>::iterator');
        // assert.strictEqual(classItem.variableList[47].name, 'ssetIter');
        // assert.strictEqual(classItem.variableList[47].type, 'std::set<double, int>::iterator');
        // assert.strictEqual(classItem.variableList[48].name, 'smsetIter');
        // assert.strictEqual(classItem.variableList[48].type, 'std::multiset<double, int>::iterator');
        // assert.strictEqual(classItem.variableList[49].name, 'sumapIter');
        // assert.strictEqual(classItem.variableList[49].type, 'std::unordered_map<double, int>::iterator');
        // assert.strictEqual(classItem.variableList[50].name, 'summapIter');
        // assert.strictEqual(classItem.variableList[50].type, 'std::unordered_multimap<double, int>::iterator');
        // assert.strictEqual(classItem.variableList[51].name, 'susetIter');
        // assert.strictEqual(classItem.variableList[51].type, 'std::unordered_set<double, int>::iterator');
        // assert.strictEqual(classItem.variableList[52].name, 'sumsetIter');
        // assert.strictEqual(classItem.variableList[52].type, 'std::unordered_multiset<double, int>::iterator');
        assert.strictEqual(classItem.variableList[53].name, 'func');
        assert.strictEqual(classItem.variableList[53].type, 'std::function<int(int, int)>');
        assert.strictEqual(classItem.variableList[54].name, 'myTuple');
        assert.strictEqual(classItem.variableList[54].type, 'std::tuple<int, float, double>');
        assert.strictEqual(classItem.variableList[55].name, 'myComplex');
        assert.strictEqual(classItem.variableList[55].type, 'std::complex<double>');
        assert.strictEqual(classItem.variableList[56].name, 'myValarray');
        assert.strictEqual(classItem.variableList[56].type, 'std::valarray<int>');
        assert.strictEqual(classItem.variableList[57].name, 'myTimet');
        assert.strictEqual(classItem.variableList[57].type, 'std::time_t');
        assert.strictEqual(classItem.variableList[58].name, 'myClock');
        assert.strictEqual(classItem.variableList[58].type, 'std::clock_t');
        assert.strictEqual(classItem.variableList[59].name, 'myTm');
        assert.strictEqual(classItem.variableList[59].type, 'std::tm');
        // assert.strictEqual(classItem.members[1], 'APPEND');
        // assert.strictEqual(classItem.members[2], 'REPLACE');

        testclass = `typedef class testa { NEW; APPEND; REPLACE } OperationType;`
        classObjList = parsec.parseClass(testclass);
        assert.strictEqual(classObjList.length, 1);
        classItem = classObjList[0];
        assert.strictEqual(classItem.name, 'testa');
        assert.strictEqual(classItem.alias, 'OperationType');
        assert.strictEqual(classItem.variableList.length, 3);
        assert.strictEqual(classItem.variableList[0].type, 'NEW');
        assert.strictEqual(classItem.variableList[1].type, 'APPEND');
        assert.strictEqual(classItem.variableList[2].type, 'REPLACE');

        // no class name
        testclass = `typedef class {
            NEW;
        } OperationType;`
        classObjList = parsec.parseClass(testclass);
        assert.strictEqual(classObjList.length, 0);
        classItem = classObjList[0];

        testclass = `typedef class { NEW } OperationType;`
        classObjList = parsec.parseClass(testclass);
        assert.strictEqual(classObjList.length, 0);

        testclass = `typedef class OType {
            NEW
        } OperationType;`
        classObjList = parsec.parseClass(testclass);
        assert.strictEqual(classObjList.length, 1);
        classItem = classObjList[0];
        assert.strictEqual(classItem.name, 'OType');
        assert.strictEqual(classItem.alias, 'OperationType');
        assert.strictEqual(classItem.variableList.length, 1);
        assert.strictEqual(classItem.variableList[0].type, 'NEW');

        testclass = `typedef class OType { NEW } OperationType;`
        classObjList = parsec.parseClass(testclass);
        assert.strictEqual(classObjList.length, 1);
        classItem = classObjList[0];
        assert.strictEqual(classItem.name, 'OType');
        assert.strictEqual(classItem.alias, 'OperationType');
        assert.strictEqual(classItem.variableList.length, 1);
        assert.strictEqual(classItem.variableList[0].type, 'NEW');

        testclass = `class OType {
            NEW
        };`
        classObjList = parsec.parseClass(testclass);
        assert.strictEqual(classObjList.length, 1);
        classItem = classObjList[0];
        assert.strictEqual(classItem.name, 'OType');
        assert.strictEqual(classItem.variableList.length, 1);
        assert.strictEqual(classItem.variableList[0].type, 'NEW');

        testclass = `class OType { NEW };`
        classObjList = parsec.parseClass(testclass);
        assert.strictEqual(classObjList.length, 1);
        classItem = classObjList[0];
        assert.strictEqual(classItem.name, 'OType');
        assert.strictEqual(classItem.variableList.length, 1);
        assert.strictEqual(classItem.variableList[0].type, 'NEW');

        testclass = `class OType { NEW }; class TOTSize1 { DTS };`
        classObjList = parsec.parseClass(testclass);
        assert.strictEqual(classObjList.length, 2);
        classItem = classObjList[0];
        assert.strictEqual(classItem.name, 'OType');
        assert.strictEqual(classItem.variableList.length, 1);
        assert.strictEqual(classItem.variableList[0].type, 'NEW');
        classItem = classObjList[1];
        assert.strictEqual(classItem.name, 'TOTSize1');
        assert.strictEqual(classItem.variableList.length, 1);
        assert.strictEqual(classItem.variableList[0].type, 'DTS');

        testclass = `class TEST_ENUM { 
            int a; // comment 
            float b;
        };`;
        classObjList = parsec.parseClass(testclass);
        assert.strictEqual(classObjList.length, 1);
        classItem = classObjList[0];
        assert.strictEqual(classItem.name, 'TEST_ENUM');
        assert.strictEqual(classItem.variableList.length, 2);
        assert.strictEqual(classItem.variableList[0].name, 'a');
        assert.strictEqual(classItem.variableList[0].type, 'int');
        assert.strictEqual(classItem.variableList[1].name, 'b');
        assert.strictEqual(classItem.variableList[1].type, 'float');

        // 分号结尾
        testclass = `class TEST_ENUM { 
            ENUM_1; // comment 
            ENUM_2;
        };`;
        classObjList = parsec.parseClass(testclass);
        assert.strictEqual(classObjList.length, 1);
        classItem = classObjList[0];
        assert.strictEqual(classItem.name, 'TEST_ENUM');
        assert.strictEqual(classItem.variableList.length, 2);
        assert.strictEqual(classItem.variableList[0].type, 'ENUM_1');
        assert.strictEqual(classItem.variableList[1].type, 'ENUM_2');
    });

    //3, 测试异常情况
    test('parseClass_test_3', () => {
        let teststr: string = '';
        let classObjList = parsec.parseClass(teststr);
        assert.strictEqual(classObjList.length, 0);

        teststr = 'class { ENUM_1 }';
        classObjList = parsec.parseClass(teststr);
        assert.strictEqual(classObjList.length, 0);
        let classItem = classObjList[0];
        // assert.strictEqual(classItem.members[0], 'ENUM_1');

        teststr = `class { 
            ENUM_1, 
            ENUM_2 };`
        classObjList = parsec.parseClass(teststr);
        assert.strictEqual(classObjList.length, 0);
        classItem = classObjList[0];
        // assert.strictEqual(classItem.members.length, 2);
        // assert.strictEqual(classItem.members[0], 'ENUM_1');
        // assert.strictEqual(classItem.members[1], 'ENUM_2');

        teststr = `class { 
            ENUM_1, // comment 
            ENUM_2 
        }`;
        classObjList = parsec.parseClass(teststr);
        assert.strictEqual(classObjList.length, 0);
        classItem = classObjList[0];
        // assert.strictEqual(classItem.members.length, 2);
        // assert.strictEqual(classItem.members[0], 'ENUM_1');
        // assert.strictEqual(classItem.members[1], 'ENUM_2');

        teststr = `class OType {
            ENUM_1, // comment
            ENUM_2,
        };`
        classObjList = parsec.parseClass(teststr);
        assert.strictEqual(classObjList.length, 1);
        classItem = classObjList[0];
        assert.strictEqual(classItem.name, 'OType');
        assert.strictEqual(classItem.variableList.length, 1);
        assert.strictEqual(classItem.variableList[0].name, 'ENUM_2');

        teststr = `typedef class OType {
            ENUM_1, // comment
            ENUM_2,
        };`
        classObjList = parsec.parseClass(teststr);
        assert.strictEqual(classObjList.length, 1);
        classItem = classObjList[0];
        assert.strictEqual(classItem.name, 'OType');
        assert.strictEqual(classItem.variableList.length, 1);
    });

    //4, 测试错误情况
    test('parseClass_test_4', () => {
        let classObjList = parsec.parseClass('');
        assert.strictEqual(classObjList.length, 0);

        let teststr = `typedef class OType {`;
        classObjList = parsec.parseClass(teststr);
        assert.strictEqual(classObjList.length, 0);

        teststr = `}; typedef class OType //{} {}`;
        classObjList = parsec.parseClass(teststr);
        assert.strictEqual(classObjList.length, 0);

        teststr = `typedefinde enumute OType { }`;
        classObjList = parsec.parseClass(teststr);
        assert.strictEqual(classObjList.length, 0);

        teststr = `TYPEDEFfinde ENUMute OType { }`;
        classObjList = parsec.parseClass(teststr);
        assert.strictEqual(classObjList.length, 0);

        teststr = `export typedef class OType { };`;
        classObjList = parsec.parseClass(teststr);
        assert.strictEqual(classObjList.length, 1);
        let classItem = classObjList[0];
        assert.strictEqual(classItem.name, 'OType');

        teststr = `typedef class OType { };`;
        classObjList = parsec.parseClass(teststr);
        assert.strictEqual(classObjList.length, 1);
        classItem = classObjList[0];
        assert.strictEqual(classItem.name, 'OType');

        teststr = `typedef class { }`;
        classObjList = parsec.parseClass(teststr);
        assert.strictEqual(classObjList.length, 0);

        teststr = `typedef class { }`;
        classObjList = parsec.parseClass(teststr);
        assert.strictEqual(classObjList.length, 0);

        teststr = `typedef class { ENUM_1 = 1, ENUM_2 = 2  }`;
        classObjList = parsec.parseClass(teststr);
        assert.strictEqual(classObjList.length, 0);
    });
});
