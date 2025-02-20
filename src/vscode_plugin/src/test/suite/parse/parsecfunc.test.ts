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
import G = require('glob');
// import * as myExtension from '../../extension';

suite('Parse_C_Func_Suite', () => {
    vscode.window.showInformationMessage('Start all tests.');

    //1, 测试 parseEnum 一般情况
    test('parseFunction_c_test_1', () => {
        let testenum = `int add(int a,int b);`
        let funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        let funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'add');
        assert.strictEqual(funcItem.returns, 'int');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 2);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'int');
        assert.strictEqual(funcItem.parameters[1].name, 'b');
        assert.strictEqual(funcItem.parameters[1].type, 'int');

    });

    //2, 测试边界情况
    test('parseFunction_c_test_2', () => {
        let testenum = `int add_T(int a,int b);`
        let funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        let funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'add_T');
        assert.strictEqual(funcItem.returns, 'int');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 2);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'int');
        assert.strictEqual(funcItem.parameters[1].name, 'b');
        assert.strictEqual(funcItem.parameters[1].type, 'int');

        testenum = `const int add_T(int a,int b);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'add_T');
        assert.strictEqual(funcItem.returns, 'int');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 2);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'int');
        assert.strictEqual(funcItem.parameters[1].name, 'b');
        assert.strictEqual(funcItem.parameters[1].type, 'int');

        testenum = `int add_T(const int a, int b);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'add_T');
        assert.strictEqual(funcItem.returns, 'int');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 2);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'int');
        assert.strictEqual(funcItem.parameters[1].name, 'b');
        assert.strictEqual(funcItem.parameters[1].type, 'int');

        testenum = `int add_T(TEST a, int b);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'add_T');
        assert.strictEqual(funcItem.returns, 'int');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 2);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'TEST');
        assert.strictEqual(funcItem.parameters[1].name, 'b');
        assert.strictEqual(funcItem.parameters[1].type, 'int');

        testenum = `int _ADD_T(TEST a, int b);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, '_ADD_T');
        assert.strictEqual(funcItem.returns, 'int');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 2);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'TEST');
        assert.strictEqual(funcItem.parameters[1].name, 'b');
        assert.strictEqual(funcItem.parameters[1].type, 'int');

        testenum = `int _ADD_T(long long a, int b);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, '_ADD_T');
        assert.strictEqual(funcItem.returns, 'int');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 2);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'long long');
        assert.strictEqual(funcItem.parameters[1].name, 'b');
        assert.strictEqual(funcItem.parameters[1].type, 'int');

        testenum = `std::string tfunc(std::string a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::string');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::string');

        testenum = `std::wstring tfunc(std::wstring a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::wstring');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::wstring');

        testenum = `std::u16string tfunc(std::u16string a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::u16string');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::u16string');

        testenum = `std::u32string tfunc(std::u32string a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::u32string');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::u32string');

        testenum = `std::basic_string tfunc(std::basic_string a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::basic_string');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::basic_string');

        testenum = `std::basic_string tfunc(std::basic_string a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::basic_string');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::basic_string');

        testenum = `short tfunc(short a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'short');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'short');

        testenum = `short int  tfunc(short int  a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'short int');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'short int');

        testenum = `long tfunc(long a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'long');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'long');

        testenum = `long int tfunc(long int a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'long int');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'long int');

        testenum = `long long tfunc(long long a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'long long');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'long long');

        testenum = `long long int tfunc(long long int a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'long long int');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'long long int');

        testenum = `char tfunc(char a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'char');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'char');

        testenum = `wchar_t tfunc(wchar_t a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'wchar_t');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'wchar_t');

        testenum = `char16_t tfunc(char16_t a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'char16_t');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'char16_t');

        testenum = `char32_t tfunc(char32_t a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'char32_t');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'char32_t');

        testenum = `bool tfunc(bool a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'bool');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'bool');

        testenum = `float tfunc(float a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'float');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'float');

        testenum = `double tfunc(double a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'double');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'double');

        testenum = `long double tfunc(long double a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'long double');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'long double');

        testenum = `std::vector<int> tfunc(std::vector<int> a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::vector<int>');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::vector<int>');

        testenum = `std::deque<int> tfunc(std::deque<int> a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::deque<int>');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::deque<int>');

        testenum = `std::list<int> tfunc(std::list<int> a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::list<int>');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::list<int>');

        testenum = `std::forward_list<int> tfunc(std::forward_list<int> a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::forward_list<int>');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::forward_list<int>');

        testenum = `std::array<int> tfunc(std::array<int> a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::array<int>');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::array<int>');

        testenum = `std::stack<int> tfunc(std::stack<int> a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::stack<int>');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::stack<int>');

        testenum = `std::queue<int> tfunc(std::queue<int> a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::queue<int>');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::queue<int>');

        testenum = `std::priority_queue<int> tfunc(std::priority_queue<int> a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::priority_queue<int>');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::priority_queue<int>');

        testenum = `std::pair<double, int> tfunc(std::pair<double, int> a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::pair<double, int>');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::pair<double, int>');

        testenum = `std::map<double, int> tfunc(std::map<double, int> a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::map<double, int>');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::map<double, int>');

        testenum = `std::multimap<double, int> tfunc(std::multimap<double, int> a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::multimap<double, int>');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::multimap<double, int>');

        testenum = `std::set<double, int> tfunc(std::set<double, int> a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::set<double, int>');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::set<double, int>');

        testenum = `std::multiset<double, int> tfunc(std::multiset<double, int> a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::multiset<double, int>');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::multiset<double, int>');

        testenum = `std::unordered_map<double, int> tfunc(std::unordered_map<double, int> a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::unordered_map<double, int>');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::unordered_map<double, int>');

        testenum = `std::unordered_multimap<double, int> tfunc(std::unordered_multimap<double, int> a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::unordered_multimap<double, int>');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::unordered_multimap<double, int>');

        testenum = `std::unordered_set<double, int> tfunc(std::unordered_set<double, int> a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::unordered_set<double, int>');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::unordered_set<double, int>');

        testenum = `std::unordered_multiset<double, int> tfunc(std::unordered_multiset<double, int> a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::unordered_multiset<double, int>');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::unordered_multiset<double, int>');

        testenum = `std::vector<int>::iterator tfunc(std::vector<int>::iterator a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::vector<int>::iterator');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::vector<int>::iterator');

        testenum = `std::deque<int>::iterator tfunc(std::deque<int>::iterator a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::deque<int>::iterator');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::deque<int>::iterator');

        testenum = `std::list<int>::iterator tfunc(std::list<int>::iterator a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::list<int>::iterator');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::list<int>::iterator');

        testenum = `std::forward_list<int>::iterator tfunc(std::forward_list<int>::iterator a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::forward_list<int>::iterator');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::forward_list<int>::iterator');

        testenum = `std::array<int>::iterator tfunc(std::array<int>::iterator a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::array<int>::iterator');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::array<int>::iterator');

        testenum = `std::stack<int>::iterator tfunc(std::stack<int>::iterator a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::stack<int>::iterator');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::stack<int>::iterator');

        testenum = `std::queue<int>::iterator tfunc(std::queue<int>::iterator a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::queue<int>::iterator');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::queue<int>::iterator');

        testenum = `std::priority_queue<int>::iterator tfunc(std::priority_queue<int>::iterator a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::priority_queue<int>::iterator');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::priority_queue<int>::iterator');

        testenum = `std::pair<double, int>::iterator tfunc(std::pair<double, int>::iterator a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::pair<double, int>::iterator');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::pair<double, int>::iterator');

        testenum = `std::map<double, int>::iterator tfunc(std::map<double, int>::iterator a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::map<double, int>::iterator');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::map<double, int>::iterator');

        testenum = `std::multimap<double, int>::iterator tfunc(std::multimap<double, int>::iterator a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::multimap<double, int>::iterator');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::multimap<double, int>::iterator');

        testenum = `std::set<double, int>::iterator tfunc(std::set<double, int>::iterator a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::set<double, int>::iterator');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::set<double, int>::iterator');

        testenum = `std::multiset<double, int>::iterator tfunc(std::multiset<double, int>::iterator a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::multiset<double, int>::iterator');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::multiset<double, int>::iterator');

        testenum = `std::unordered_map<double, int>::iterator tfunc(std::unordered_map<double, int>::iterator a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::unordered_map<double, int>::iterator');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::unordered_map<double, int>::iterator');

        testenum = `std::unordered_multimap<double, int>::iterator tfunc(std::unordered_multimap<double, int>::iterator a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::unordered_multimap<double, int>::iterator');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::unordered_multimap<double, int>::iterator');

        testenum = `std::unordered_set<double, int>::iterator tfunc(std::unordered_set<double, int>::iterator a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::unordered_set<double, int>::iterator');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::unordered_set<double, int>::iterator');

        testenum = `std::unordered_multiset<double, int>::iterator tfunc(std::unordered_multiset<double, int>::iterator a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::unordered_multiset<double, int>::iterator');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::unordered_multiset<double, int>::iterator');

        testenum = `std::tuple<int, float, double> tfunc(std::tuple<int, float, double> a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::tuple<int, float, double>');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::tuple<int, float, double>');

        testenum = `std::complex<double> tfunc(std::complex<double> a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::complex<double>');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::complex<double>');

        testenum = `std::valarray<int> tfunc(std::valarray<int> a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::valarray<int>');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::valarray<int>');

        testenum = `std::time_t tfunc(std::time_t a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::time_t');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::time_t');

        testenum = `std::clock_t tfunc(std::clock_t a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::clock_t');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::clock_t');

        testenum = `std::tm tfunc(std::tm a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::tm');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::tm');

        testenum = `wchar_t* tfunc(wchar_t* a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'wchar_t*');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'wchar_t*');
    });

    test('parseFunction_c_test_21', () => {
        let testenum = `std::function<int(int, int)> tfunc(int a);`
        let funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        let funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::function<int(int, int)>');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'int');


        testenum = `std::function<int(int, int)> tfunc(std::function<int(int, int)> a);`
        funcObjList = parsec.parseFunction(testenum);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'tfunc');
        assert.strictEqual(funcItem.returns, 'std::function<int(int, int)>');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters.length, 1);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'std::function<int(int, int)>');
    })

    //3, 测试异常情况
    test('parseFunction_c_test_3', () => {
        let teststr: string = '';
        let funcObjList = parsec.parseFunction(teststr);
        assert.strictEqual(funcObjList.length, 0);

        teststr = 'void test(ENUM_1)';
        funcObjList = parsec.parseFunction(teststr);
        assert.strictEqual(funcObjList.length, 0);
        let funcItem = funcObjList[0];
        // assert.strictEqual(funcItem.members[0], 'ENUM_1');

        teststr = `void test(ENUM_1, ENUM_2);`
        funcObjList = parsec.parseFunction(teststr);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.parameters.length, 2);
        assert.strictEqual(funcItem.name, 'test');
        assert.strictEqual(funcItem.returns, 'void');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters[0].type, 'ENUM_1');
        assert.strictEqual(funcItem.parameters[1].type, 'ENUM_2');

        teststr = `int test(ENUM_1, ENUM_2);`;
        funcObjList = parsec.parseFunction(teststr);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.parameters.length, 2);
        assert.strictEqual(funcItem.name, 'test');
        assert.strictEqual(funcItem.returns, 'int');
        assert.strictEqual(funcItem.type, 'function');
        assert.strictEqual(funcItem.parameters[0].type, 'ENUM_1');
        assert.strictEqual(funcItem.parameters[1].type, 'ENUM_2');

        teststr = `void testa (
            ENUM_1, // comment
            ENUM_2,
        );`
        funcObjList = parsec.parseFunction(teststr);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'testa');
        assert.strictEqual(funcItem.returns, 'void');
        // assert.strictEqual(funcItem.members.length, 2);
        // assert.strictEqual(funcItem.members[0], 'ENUM_1');
        // assert.strictEqual(funcItem.members[1], 'ENUM_2');

        teststr = `typedef void test(int a, float b);`
        funcObjList = parsec.parseFunction(teststr);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'test');
        assert.strictEqual(funcItem.returns, 'typedef void');
        assert.strictEqual(funcItem.type, 'typedef');
        assert.strictEqual(funcItem.parameters.length, 2);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'int');
        assert.strictEqual(funcItem.parameters[1].name, 'b');
        assert.strictEqual(funcItem.parameters[1].type, 'float');

        teststr = `typedef void (*test)(int a, float b);`
        funcObjList = parsec.parseFunction(teststr);
        assert.strictEqual(funcObjList.length, 1);
        funcItem = funcObjList[0];
        assert.strictEqual(funcItem.name, 'test');
        assert.strictEqual(funcItem.returns, 'void');
        assert.strictEqual(funcItem.type, 'typedef');
        assert.strictEqual(funcItem.parameters.length, 2);
        assert.strictEqual(funcItem.parameters[0].name, 'a');
        assert.strictEqual(funcItem.parameters[0].type, 'int');
        assert.strictEqual(funcItem.parameters[1].name, 'b');
        assert.strictEqual(funcItem.parameters[1].type, 'float');
    });

    //4, 测试错误情况
    test('parseFunction_c_test_4', () => {
        let funcObjList = parsec.parseFunction('');
        assert.strictEqual(funcObjList.length, 0);

        let teststr = `typedef void OType ()`;
        funcObjList = parsec.parseFunction(teststr);
        assert.strictEqual(funcObjList.length, 1);
        let funcaItem = funcObjList[0];
        assert.strictEqual(funcaItem.name, 'OType');
        assert.strictEqual(funcaItem.returns, 'typedef void');

        teststr = `}; typedef int OType //() ()`;
        funcObjList = parsec.parseFunction(teststr);
        assert.strictEqual(funcObjList.length, 0);

        teststr = `typedefinde bigint OType (  )`;
        funcObjList = parsec.parseFunction(teststr);
        assert.strictEqual(funcObjList.length, 1);
        funcaItem = funcObjList[0];
        assert.strictEqual(funcaItem.name, 'OType');
        assert.strictEqual(funcaItem.returns, 'typedefinde bigint');

        teststr = `TYPEDEFfinde ENUMute OType ({ })`;
        funcObjList = parsec.parseFunction(teststr);
        assert.strictEqual(funcObjList.length, 0);

        teststr = `export typedef char_t OType ({ })`;
        funcObjList = parsec.parseFunction(teststr);
        assert.strictEqual(funcObjList.length, 0);

        teststr = `typedef inline OType ({ })`;
        funcObjList = parsec.parseFunction(teststr);
        assert.strictEqual(funcObjList.length, 0);

        teststr = `typedef test ( )`;
        funcObjList = parsec.parseFunction(teststr);
        assert.strictEqual(funcObjList.length, 1);
        funcaItem = funcObjList[0];
        assert.strictEqual(funcaItem.name, 'test');
        assert.strictEqual(funcaItem.returns, 'typedef');

        teststr = `typedef test ( ENUM_1 = 1, ENUM_2 = 2  )`;
        funcObjList = parsec.parseFunction(teststr);
        assert.strictEqual(funcObjList.length, 0);
    });
});
