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
import * as genDts from '../../../gen/gendts'
import { ClassObj, EnumObj, FuncObj, GenInfo, ParseObj, StructObj, UnionObj } from '../../../gen/datatype';
import * as fs from 'fs';

suite('Gendts_transTskey2Ckey_Suite', () => {
  vscode.window.showInformationMessage('Start all tests.');
  //1, 测试一般情况
  test('transTskey2Ckey_test_1', () => {
    let resStr = genDts.transTskey2Ckey('int');
    assert.strictEqual(resStr, 'number');
    resStr = genDts.transTskey2Ckey('size_t');
    assert.strictEqual(resStr, 'number');
    resStr = genDts.transTskey2Ckey('double');
    assert.strictEqual(resStr, 'number');
    resStr = genDts.transTskey2Ckey('float');
    assert.strictEqual(resStr, 'number');
    resStr = genDts.transTskey2Ckey('short');
    assert.strictEqual(resStr, 'number');
    resStr = genDts.transTskey2Ckey('long');
    assert.strictEqual(resStr, 'number');
    resStr = genDts.transTskey2Ckey('uint8_t');
    assert.strictEqual(resStr, 'number');
    resStr = genDts.transTskey2Ckey('uint16_t');
    assert.strictEqual(resStr, 'number');
    resStr = genDts.transTskey2Ckey('uint32_t');
    assert.strictEqual(resStr, 'number');
    resStr = genDts.transTskey2Ckey('uint64_t');
    assert.strictEqual(resStr, 'number');
    resStr = genDts.transTskey2Ckey('int8_t');
    assert.strictEqual(resStr, 'number');
    resStr = genDts.transTskey2Ckey('int16_t');
    assert.strictEqual(resStr, 'number');
    resStr = genDts.transTskey2Ckey('int32_t');
    assert.strictEqual(resStr, 'number');
    resStr = genDts.transTskey2Ckey('int64_t');
    assert.strictEqual(resStr, 'number');
    resStr = genDts.transTskey2Ckey('unsigned');
    assert.strictEqual(resStr, 'number');
    resStr = genDts.transTskey2Ckey('bool');
    assert.strictEqual(resStr, 'boolean');
    resStr = genDts.transTskey2Ckey('char');
    assert.strictEqual(resStr, 'string');
    resStr = genDts.transTskey2Ckey('wchar_t');
    assert.strictEqual(resStr, 'string');
    resStr = genDts.transTskey2Ckey('char8_t');
    assert.strictEqual(resStr, 'string');
    resStr = genDts.transTskey2Ckey('char16_t');
    assert.strictEqual(resStr, 'string');
    resStr = genDts.transTskey2Ckey('char32_t');
    assert.strictEqual(resStr, 'string');
    resStr = genDts.transTskey2Ckey('std::vector<int>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::vector<size_t>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::vector<double>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::vector<float>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::vector<long>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::vector<short>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::vector<uint8_t>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::vector<uint16_t>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::vector<uint32_t>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::vector<uint64_t>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::vector<int8_t>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::vector<int16_t>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::vector<int32_t>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::vector<int64_t>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::vector<unsigned>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::vector<bool>');
    assert.strictEqual(resStr, 'Array<boolean>');
    resStr = genDts.transTskey2Ckey('std::vector<char>');
    assert.strictEqual(resStr, 'Array<string>');
    resStr = genDts.transTskey2Ckey('std::vector<wchar_t>');
    assert.strictEqual(resStr, 'Array<string>');
    resStr = genDts.transTskey2Ckey('std::vector<char8_t>');
    assert.strictEqual(resStr, 'Array<string>');
    resStr = genDts.transTskey2Ckey('std::vector<char16_t>');
    assert.strictEqual(resStr, 'Array<string>');
    resStr = genDts.transTskey2Ckey('std::vector<char32_t>');
    assert.strictEqual(resStr, 'Array<string>');
  });

  //2, 测试边界情况
  test('transTskey2Ckey_test_3', () => {
    let resStr = genDts.transTskey2Ckey('std::string');
    assert.strictEqual(resStr, 'string');
    resStr = genDts.transTskey2Ckey('std::vector<std::string>');
    assert.strictEqual(resStr, 'Array<string>');
    resStr = genDts.transTskey2Ckey('char *');
    assert.strictEqual(resStr, 'string');
    resStr = genDts.transTskey2Ckey('long long');
    assert.strictEqual(resStr, 'number');
    resStr = genDts.transTskey2Ckey('unsigned short');
    assert.strictEqual(resStr, 'number');
    resStr = genDts.transTskey2Ckey('unsigned long');
    assert.strictEqual(resStr, 'number');
    resStr = genDts.transTskey2Ckey('unsigned long long');
    assert.strictEqual(resStr, 'number');
    resStr = genDts.transTskey2Ckey('std::vector<long long>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::vector<unsigned short>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::vector<unsigned long>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::vector<unsigned long long>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('int *');
    assert.strictEqual(resStr, 'number');
    resStr = genDts.transTskey2Ckey('std::vector<int *>');
    assert.strictEqual(resStr, 'Array<number>');
    //std::vector<T>::iterator
    resStr = genDts.transTskey2Ckey('std::vector<std::string>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<string>>');
    resStr = genDts.transTskey2Ckey('std::vector<char *>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<string>>');
    resStr = genDts.transTskey2Ckey('std::vector<long long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::vector<unsigned short>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::vector<unsigned long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::vector<unsigned long long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::vector<int *>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    //std::array
    resStr = genDts.transTskey2Ckey('std::array<std::string, 10>');
    assert.strictEqual(resStr, 'Array<string>');
    resStr = genDts.transTskey2Ckey('std::array<char *, 10>');
    assert.strictEqual(resStr, 'Array<string>');
    resStr = genDts.transTskey2Ckey('std::array<long long, 10>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::array<unsigned short, 10>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::array<unsigned long, 10>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::array<unsigned long long, 10>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::array<int *, 10>');
    assert.strictEqual(resStr, 'Array<number>');
    //std::array<T, int>::iterator
    resStr = genDts.transTskey2Ckey('std::array<std::string, 10>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<string>>');
    resStr = genDts.transTskey2Ckey('std::array<char *, 10>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<string>>');
    resStr = genDts.transTskey2Ckey('std::array<long long, 10>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::array<unsigned short, 10>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::array<unsigned long, 10>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::array<unsigned long long, 10>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::array<int *, 10>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    //std::deque
    resStr = genDts.transTskey2Ckey('std::deque<std::string>');
    assert.strictEqual(resStr, 'Array<string>');
    resStr = genDts.transTskey2Ckey('std::deque<char *>');
    assert.strictEqual(resStr, 'Array<string>');
    resStr = genDts.transTskey2Ckey('std::deque<long long>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::deque<unsigned short>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::deque<unsigned long>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::deque<unsigned long long>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::deque<int *>');
    assert.strictEqual(resStr, 'Array<number>');
    //std::deque<T>::iterator
    resStr = genDts.transTskey2Ckey('std::deque<std::string>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<string>>');
    resStr = genDts.transTskey2Ckey('std::deque<char *>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<string>>');
    resStr = genDts.transTskey2Ckey('std::deque<long long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::deque<unsigned short>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::deque<unsigned long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::deque<unsigned long long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::deque<int *>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    //std::list
    resStr = genDts.transTskey2Ckey('std::list<std::string>');
    assert.strictEqual(resStr, 'Array<string>');
    resStr = genDts.transTskey2Ckey('std::list<char *>');
    assert.strictEqual(resStr, 'Array<string>');
    resStr = genDts.transTskey2Ckey('std::list<long long>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::list<unsigned short>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::list<unsigned long>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::list<unsigned long long>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::list<int *>');
    assert.strictEqual(resStr, 'Array<number>');
    //std::list<T>::iterator
    resStr = genDts.transTskey2Ckey('std::list<std::string>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<string>>');
    resStr = genDts.transTskey2Ckey('std::list<char *>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<string>>');
    resStr = genDts.transTskey2Ckey('std::list<long long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::list<unsigned short>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::list<unsigned long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::list<unsigned long long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::list<int *>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    //std::forward_list
    resStr = genDts.transTskey2Ckey('std::forward_list<std::string>');
    assert.strictEqual(resStr, 'Array<string>');
    resStr = genDts.transTskey2Ckey('std::forward_list<char *>');
    assert.strictEqual(resStr, 'Array<string>');
    resStr = genDts.transTskey2Ckey('std::forward_list<long long>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::forward_list<unsigned short>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::forward_list<unsigned long>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::forward_list<unsigned long long>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::forward_list<int *>');
    assert.strictEqual(resStr, 'Array<number>');
    //std::forward_list<T>::iterator
    resStr = genDts.transTskey2Ckey('std::forward_list<std::string>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<string>>');
    resStr = genDts.transTskey2Ckey('std::forward_list<char *>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<string>>');
    resStr = genDts.transTskey2Ckey('std::forward_list<long long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::forward_list<unsigned short>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::forward_list<unsigned long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::forward_list<unsigned long long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::forward_list<int *>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    //std::stack
    resStr = genDts.transTskey2Ckey('std::stack<std::string>');
    assert.strictEqual(resStr, 'Array<string>');
    resStr = genDts.transTskey2Ckey('std::stack<char *>');
    assert.strictEqual(resStr, 'Array<string>');
    resStr = genDts.transTskey2Ckey('std::stack<long long>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::stack<unsigned short>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::stack<unsigned long>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::stack<unsigned long long>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::stack<int *>');
    assert.strictEqual(resStr, 'Array<number>');
    //std::stack<T>::iterator
    resStr = genDts.transTskey2Ckey('std::stack<std::string>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<string>>');
    resStr = genDts.transTskey2Ckey('std::stack<char *>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<string>>');
    resStr = genDts.transTskey2Ckey('std::stack<long long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::stack<unsigned short>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::stack<unsigned long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::stack<unsigned long long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::stack<int *>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    //std::queue
    resStr = genDts.transTskey2Ckey('std::queue<std::string>');
    assert.strictEqual(resStr, 'Array<string>');
    resStr = genDts.transTskey2Ckey('std::queue<char *>');
    assert.strictEqual(resStr, 'Array<string>');
    resStr = genDts.transTskey2Ckey('std::queue<long long>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::queue<unsigned short>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::queue<unsigned long>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::queue<unsigned long long>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::queue<int *>');
    assert.strictEqual(resStr, 'Array<number>');
    //std::queue<T>::iterator
    resStr = genDts.transTskey2Ckey('std::queue<std::string>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<string>>');
    resStr = genDts.transTskey2Ckey('std::queue<char *>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<string>>');
    resStr = genDts.transTskey2Ckey('std::queue<long long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::queue<unsigned short>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::queue<unsigned long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::queue<unsigned long long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::queue<int *>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    //std::valarray
    resStr = genDts.transTskey2Ckey('std::valarray<std::string>');
    assert.strictEqual(resStr, 'Array<string>');
    resStr = genDts.transTskey2Ckey('std::valarray<char *>');
    assert.strictEqual(resStr, 'Array<string>');
    resStr = genDts.transTskey2Ckey('std::valarray<long long>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::valarray<unsigned short>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::valarray<unsigned long>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::valarray<unsigned long long>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::valarray<int *>');
    assert.strictEqual(resStr, 'Array<number>');
    //std::valarray<T>::iterator
    resStr = genDts.transTskey2Ckey('std::valarray<std::string>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<string>>');
    resStr = genDts.transTskey2Ckey('std::valarray<char *>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<string>>');
    resStr = genDts.transTskey2Ckey('std::valarray<long long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::valarray<unsigned short>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::valarray<unsigned long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::valarray<unsigned long long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::valarray<int *>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    //std::priority_queue
    resStr = genDts.transTskey2Ckey('std::priority_queue<std::string>');
    assert.strictEqual(resStr, 'Array<string>');
    resStr = genDts.transTskey2Ckey('std::priority_queue<char *>');
    assert.strictEqual(resStr, 'Array<string>');
    resStr = genDts.transTskey2Ckey('std::priority_queue<long long>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::priority_queue<unsigned short>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::priority_queue<unsigned long>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::priority_queue<unsigned long long>');
    assert.strictEqual(resStr, 'Array<number>');
    resStr = genDts.transTskey2Ckey('std::priority_queue<int *>');
    assert.strictEqual(resStr, 'Array<number>');
    //std::priority_queue<T>::iterator
    resStr = genDts.transTskey2Ckey('std::priority_queue<std::string>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<string>>');
    resStr = genDts.transTskey2Ckey('std::priority_queue<char *>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<string>>');
    resStr = genDts.transTskey2Ckey('std::priority_queue<long long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::priority_queue<unsigned short>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::priority_queue<unsigned long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::priority_queue<unsigned long long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    resStr = genDts.transTskey2Ckey('std::priority_queue<int *>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Array<number>>');
    //std::map
    resStr = genDts.transTskey2Ckey('std::map<std::string, int>');
    assert.strictEqual(resStr, 'Map<string, number>');
    resStr = genDts.transTskey2Ckey('std::map<charb *, size_t>');
    assert.strictEqual(resStr, 'Map<string, number>');
    resStr = genDts.transTskey2Ckey('std::map<std::string, long long>');
    assert.strictEqual(resStr, 'Map<string, number>');
    resStr = genDts.transTskey2Ckey('std::map<char *, int *>');
    assert.strictEqual(resStr, 'Map<string, number>');
    resStr = genDts.transTskey2Ckey('std::map<char *, unsigned long long>');
    assert.strictEqual(resStr, 'Map<string, number>');
    resStr = genDts.transTskey2Ckey('std::map<std::string, unsigned short>');
    assert.strictEqual(resStr, 'Map<string, number>');
    resStr = genDts.transTskey2Ckey('std::map<int *, std::string>');
    assert.strictEqual(resStr, 'Map<number, string>');
    resStr = genDts.transTskey2Ckey('std::map<double, char *>');
    assert.strictEqual(resStr, 'Map<number, string>');
    resStr = genDts.transTskey2Ckey('std::map<int *, char>');
    assert.strictEqual(resStr, 'Map<number, string>');
    //std::map<T1,T2>::iterator
    resStr = genDts.transTskey2Ckey('std::map<std::string, int>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Map<string, number>>');
    resStr = genDts.transTskey2Ckey('std::map<charb *, size_t>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Map<string, number>>');
    resStr = genDts.transTskey2Ckey('std::map<std::string, long long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Map<string, number>>');
    resStr = genDts.transTskey2Ckey('std::map<char *, int *>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Map<string, number>>');
    resStr = genDts.transTskey2Ckey('std::map<char *, unsigned long long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Map<string, number>>');
    resStr = genDts.transTskey2Ckey('std::map<std::string, unsigned short>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Map<string, number>>');
    resStr = genDts.transTskey2Ckey('std::map<int *, std::string>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Map<number, string>>');
    resStr = genDts.transTskey2Ckey('std::map<double, char *>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Map<number, string>>');
    resStr = genDts.transTskey2Ckey('std::map<int *, char>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Map<number, string>>');
    //std::unordered_map
    resStr = genDts.transTskey2Ckey('std::unordered_map<std::string, int>');
    assert.strictEqual(resStr, 'Map<string, number>');
    resStr = genDts.transTskey2Ckey('std::unordered_map<charb *, size_t>');
    assert.strictEqual(resStr, 'Map<string, number>');
    resStr = genDts.transTskey2Ckey('std::unordered_map<std::string, long long>');
    assert.strictEqual(resStr, 'Map<string, number>');
    resStr = genDts.transTskey2Ckey('std::unordered_map<char *, int *>');
    assert.strictEqual(resStr, 'Map<string, number>');
    resStr = genDts.transTskey2Ckey('std::unordered_map<char *, unsigned long long>');
    assert.strictEqual(resStr, 'Map<string, number>');
    resStr = genDts.transTskey2Ckey('std::unordered_map<std::string, unsigned short>');
    assert.strictEqual(resStr, 'Map<string, number>');
    resStr = genDts.transTskey2Ckey('std::unordered_map<int *, std::string>');
    assert.strictEqual(resStr, 'Map<number, string>');
    resStr = genDts.transTskey2Ckey('std::unordered_map<double, char *>');
    assert.strictEqual(resStr, 'Map<number, string>');
    resStr = genDts.transTskey2Ckey('std::unordered_map<int *, char>');
    assert.strictEqual(resStr, 'Map<number, string>');
    //std::unordered_map<T1,T2>::iterator
    resStr = genDts.transTskey2Ckey('std::unordered_map<std::string, int>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Map<string, number>>');
    resStr = genDts.transTskey2Ckey('std::unordered_map<charb *, size_t>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Map<string, number>>');
    resStr = genDts.transTskey2Ckey('std::unordered_map<std::string, long long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Map<string, number>>');
    resStr = genDts.transTskey2Ckey('std::unordered_map<char *, int *>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Map<string, number>>');
    resStr = genDts.transTskey2Ckey('std::unordered_map<char *, unsigned long long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Map<string, number>>');
    resStr = genDts.transTskey2Ckey('std::unordered_map<std::string, unsigned short>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Map<string, number>>');
    resStr = genDts.transTskey2Ckey('std::unordered_map<int *, std::string>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Map<number, string>>');
    resStr = genDts.transTskey2Ckey('std::unordered_map<double, char *>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Map<number, string>>');
    resStr = genDts.transTskey2Ckey('std::unordered_map<int *, char>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Map<number, string>>');
    //std::multimap
    resStr = genDts.transTskey2Ckey('std::multimap<std::string, int>');
    assert.strictEqual(resStr, 'Map<string, number>');
    resStr = genDts.transTskey2Ckey('std::multimap<charb *, size_t>');
    assert.strictEqual(resStr, 'Map<string, number>');
    resStr = genDts.transTskey2Ckey('std::multimap<std::string, long long>');
    assert.strictEqual(resStr, 'Map<string, number>');
    resStr = genDts.transTskey2Ckey('std::multimap<char *, int *>');
    assert.strictEqual(resStr, 'Map<string, number>');
    resStr = genDts.transTskey2Ckey('std::multimap<char *, unsigned long long>');
    assert.strictEqual(resStr, 'Map<string, number>');
    resStr = genDts.transTskey2Ckey('std::multimap<std::string, unsigned short>');
    assert.strictEqual(resStr, 'Map<string, number>');
    resStr = genDts.transTskey2Ckey('std::multimap<int *, std::string>');
    assert.strictEqual(resStr, 'Map<number, string>');
    resStr = genDts.transTskey2Ckey('std::multimap<double, char *>');
    assert.strictEqual(resStr, 'Map<number, string>');
    resStr = genDts.transTskey2Ckey('std::multimap<int *, char>');
    assert.strictEqual(resStr, 'Map<number, string>');
    //std::multimap<T1,T2>::iterator
    resStr = genDts.transTskey2Ckey('std::multimap<std::string, int>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Map<string, number>>');
    resStr = genDts.transTskey2Ckey('std::multimap<charb *, size_t>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Map<string, number>>');
    resStr = genDts.transTskey2Ckey('std::multimap<std::string, long long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Map<string, number>>');
    resStr = genDts.transTskey2Ckey('std::multimap<char *, int *>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Map<string, number>>');
    resStr = genDts.transTskey2Ckey('std::multimap<char *, unsigned long long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Map<string, number>>');
    resStr = genDts.transTskey2Ckey('std::multimap<std::string, unsigned short>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Map<string, number>>');
    resStr = genDts.transTskey2Ckey('std::multimap<int *, std::string>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Map<number, string>>');
    resStr = genDts.transTskey2Ckey('std::multimap<double, char *>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Map<number, string>>');
    resStr = genDts.transTskey2Ckey('std::multimap<int *, char>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Map<number, string>>');
    //std::unordered_multimap
    resStr = genDts.transTskey2Ckey('std::unordered_multimap<std::string, int>');
    assert.strictEqual(resStr, 'Map<string, number>');
    resStr = genDts.transTskey2Ckey('std::unordered_multimap<charb *, size_t>');
    assert.strictEqual(resStr, 'Map<string, number>');
    resStr = genDts.transTskey2Ckey('std::unordered_multimap<std::string, long long>');
    assert.strictEqual(resStr, 'Map<string, number>');
    resStr = genDts.transTskey2Ckey('std::unordered_multimap<char *, int *>');
    assert.strictEqual(resStr, 'Map<string, number>');
    resStr = genDts.transTskey2Ckey('std::unordered_multimap<char *, unsigned long long>');
    assert.strictEqual(resStr, 'Map<string, number>');
    resStr = genDts.transTskey2Ckey('std::unordered_multimap<std::string, unsigned short>');
    assert.strictEqual(resStr, 'Map<string, number>');
    resStr = genDts.transTskey2Ckey('std::unordered_multimap<int *, std::string>');
    assert.strictEqual(resStr, 'Map<number, string>');
    resStr = genDts.transTskey2Ckey('std::unordered_multimap<double, char *>');
    assert.strictEqual(resStr, 'Map<number, string>');
    resStr = genDts.transTskey2Ckey('std::unordered_multimap<int *, char>');
    assert.strictEqual(resStr, 'Map<number, string>');
    //std::unordered_multimap<T1,T2>::iterator
    resStr = genDts.transTskey2Ckey('std::unordered_multimap<std::string, int>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Map<string, number>>');
    resStr = genDts.transTskey2Ckey('std::unordered_multimap<charb *, size_t>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Map<string, number>>');
    resStr = genDts.transTskey2Ckey('std::unordered_multimap<std::string, long long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Map<string, number>>');
    resStr = genDts.transTskey2Ckey('std::unordered_multimap<char *, int *>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Map<string, number>>');
    resStr = genDts.transTskey2Ckey('std::unordered_multimap<char *, unsigned long long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Map<string, number>>');
    resStr = genDts.transTskey2Ckey('std::unordered_multimap<std::string, unsigned short>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Map<string, number>>');
    resStr = genDts.transTskey2Ckey('std::unordered_multimap<int *, std::string>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Map<number, string>>');
    resStr = genDts.transTskey2Ckey('std::unordered_multimap<double, char *>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Map<number, string>>');
    resStr = genDts.transTskey2Ckey('std::unordered_multimap<int *, char>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Map<number, string>>');
    //std::set
    resStr = genDts.transTskey2Ckey('std::set<std::string>');
    assert.strictEqual(resStr, 'Set<string>');
    resStr = genDts.transTskey2Ckey('std::set<char *>');
    assert.strictEqual(resStr, 'Set<string>');
    resStr = genDts.transTskey2Ckey('std::set<long long>');
    assert.strictEqual(resStr, 'Set<number>');
    resStr = genDts.transTskey2Ckey('std::set<unsigned short>');
    assert.strictEqual(resStr, 'Set<number>');
    resStr = genDts.transTskey2Ckey('std::set<unsigned long>');
    assert.strictEqual(resStr, 'Set<number>');
    resStr = genDts.transTskey2Ckey('std::set<unsigned long long>');
    assert.strictEqual(resStr, 'Set<number>');
    resStr = genDts.transTskey2Ckey('std::set<int *>');
    assert.strictEqual(resStr, 'Set<number>');
    //std::set<T>::iterator
    resStr = genDts.transTskey2Ckey('std::set<std::string>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Set<string>>');
    resStr = genDts.transTskey2Ckey('std::set<char *>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Set<string>>');
    resStr = genDts.transTskey2Ckey('std::set<long long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Set<number>>');
    resStr = genDts.transTskey2Ckey('std::set<unsigned short>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Set<number>>');
    resStr = genDts.transTskey2Ckey('std::set<unsigned long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Set<number>>');
    resStr = genDts.transTskey2Ckey('std::set<unsigned long long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Set<number>>');
    resStr = genDts.transTskey2Ckey('std::set<int *>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Set<number>>');
    //std::unordered_set
    resStr = genDts.transTskey2Ckey('std::unordered_set<std::string>');
    assert.strictEqual(resStr, 'Set<string>');
    resStr = genDts.transTskey2Ckey('std::unordered_set<char *>');
    assert.strictEqual(resStr, 'Set<string>');
    resStr = genDts.transTskey2Ckey('std::unordered_set<long long>');
    assert.strictEqual(resStr, 'Set<number>');
    resStr = genDts.transTskey2Ckey('std::unordered_set<unsigned short>');
    assert.strictEqual(resStr, 'Set<number>');
    resStr = genDts.transTskey2Ckey('std::unordered_set<unsigned long>');
    assert.strictEqual(resStr, 'Set<number>');
    resStr = genDts.transTskey2Ckey('std::unordered_set<unsigned long long>');
    assert.strictEqual(resStr, 'Set<number>');
    resStr = genDts.transTskey2Ckey('std::unordered_set<int *>');
    assert.strictEqual(resStr, 'Set<number>');
    //std::unordered_set<T>::iterator
    resStr = genDts.transTskey2Ckey('std::unordered_set<std::string>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Set<string>>');
    resStr = genDts.transTskey2Ckey('std::unordered_set<char *>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Set<string>>');
    resStr = genDts.transTskey2Ckey('std::unordered_set<long long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Set<number>>');
    resStr = genDts.transTskey2Ckey('std::unordered_set<unsigned short>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Set<number>>');
    resStr = genDts.transTskey2Ckey('std::unordered_set<unsigned long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Set<number>>');
    resStr = genDts.transTskey2Ckey('std::unordered_set<unsigned long long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Set<number>>');
    resStr = genDts.transTskey2Ckey('std::unordered_set<int *>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Set<number>>');
    //std::multiset
    resStr = genDts.transTskey2Ckey('std::multiset<std::string>');
    assert.strictEqual(resStr, 'Set<string>');
    resStr = genDts.transTskey2Ckey('std::multiset<char *>');
    assert.strictEqual(resStr, 'Set<string>');
    resStr = genDts.transTskey2Ckey('std::multiset<long long>');
    assert.strictEqual(resStr, 'Set<number>');
    resStr = genDts.transTskey2Ckey('std::multiset<unsigned short>');
    assert.strictEqual(resStr, 'Set<number>');
    resStr = genDts.transTskey2Ckey('std::multiset<unsigned long>');
    assert.strictEqual(resStr, 'Set<number>');
    resStr = genDts.transTskey2Ckey('std::multiset<unsigned long long>');
    assert.strictEqual(resStr, 'Set<number>');
    resStr = genDts.transTskey2Ckey('std::multiset<int *>');
    assert.strictEqual(resStr, 'Set<number>');
    //std::multiset<T>::iterator
    resStr = genDts.transTskey2Ckey('std::multiset<std::string>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Set<string>>');
    resStr = genDts.transTskey2Ckey('std::multiset<char *>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Set<string>>');
    resStr = genDts.transTskey2Ckey('std::multiset<long long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Set<number>>');
    resStr = genDts.transTskey2Ckey('std::multiset<unsigned short>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Set<number>>');
    resStr = genDts.transTskey2Ckey('std::multiset<unsigned long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Set<number>>');
    resStr = genDts.transTskey2Ckey('std::multiset<unsigned long long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Set<number>>');
    resStr = genDts.transTskey2Ckey('std::multiset<int *>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Set<number>>');
    //std::unordered_multiset
    resStr = genDts.transTskey2Ckey('std::unordered_multiset<std::string>');
    assert.strictEqual(resStr, 'Set<string>');
    resStr = genDts.transTskey2Ckey('std::unordered_multiset<char *>');
    assert.strictEqual(resStr, 'Set<string>');
    resStr = genDts.transTskey2Ckey('std::unordered_multiset<long long>');
    assert.strictEqual(resStr, 'Set<number>');
    resStr = genDts.transTskey2Ckey('std::unordered_multiset<unsigned short>');
    assert.strictEqual(resStr, 'Set<number>');
    resStr = genDts.transTskey2Ckey('std::unordered_multiset<unsigned long>');
    assert.strictEqual(resStr, 'Set<number>');
    resStr = genDts.transTskey2Ckey('std::unordered_multiset<unsigned long long>');
    assert.strictEqual(resStr, 'Set<number>');
    resStr = genDts.transTskey2Ckey('std::unordered_multiset<int *>');
    assert.strictEqual(resStr, 'Set<number>');
    //std::unordered_multiset<T>::iterator
    resStr = genDts.transTskey2Ckey('std::unordered_multiset<std::string>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Set<string>>');
    resStr = genDts.transTskey2Ckey('std::unordered_multiset<char *>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Set<string>>');
    resStr = genDts.transTskey2Ckey('std::unordered_multiset<long long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Set<number>>');
    resStr = genDts.transTskey2Ckey('std::unordered_multiset<unsigned short>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Set<number>>');
    resStr = genDts.transTskey2Ckey('std::unordered_multiset<unsigned long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Set<number>>');
    resStr = genDts.transTskey2Ckey('std::unordered_multiset<unsigned long long>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Set<number>>');
    resStr = genDts.transTskey2Ckey('std::unordered_multiset<int *>::iterator');
    assert.strictEqual(resStr, 'IterableIterator<Set<number>>');
    //std::tuple
    resStr = genDts.transTskey2Ckey('std::tuple<int16_t, bool,  int64_t, std::string, int32_t, char *, int *>');
    assert.strictEqual(resStr, '[number, boolean, number, string, number, string, number]');
    //std::pair
    resStr = genDts.transTskey2Ckey('std::pair<int16_t, bool,  int64_t, std::string, int32_t, char *, int *>');
    assert.strictEqual(resStr, '[number, boolean, number, string, number, string, number]');
    //std::complex
    resStr = genDts.transTskey2Ckey('std::complex<long long, int *>');
    assert.strictEqual(resStr, '{real: number, imag: number}');
    resStr = genDts.transTskey2Ckey('std::complex<unsigned short, unsigned long>');
    assert.strictEqual(resStr, '{real: number, imag: number}');
    resStr = genDts.transTskey2Ckey('std::complex<int64_t, unsigned long long>');
    assert.strictEqual(resStr, '{real: number, imag: number}');
    //Date
    resStr = genDts.transTskey2Ckey('std::chrono::hours');
    assert.strictEqual(resStr, 'Date');
    resStr = genDts.transTskey2Ckey('std::chrono::minutes');
    assert.strictEqual(resStr, 'Date');
    //std::function
    resStr = genDts.transTskey2Ckey('std::function<std::string(char *)>');
    assert.strictEqual(resStr, '(param0: string)=>string');
    resStr = genDts.transTskey2Ckey('std::function<unsigned short(long long, unsigned long)>');
    assert.strictEqual(resStr, '(param0: number, param1: number)=>number');
    resStr = genDts.transTskey2Ckey('std::function<void(int *, unsigned long long)>');
    assert.strictEqual(resStr, '(param0: number, param1: number)=>void');
    //std::unique_ptr
    resStr = genDts.transTskey2Ckey('std::unique_ptr<std::string>');
    assert.strictEqual(resStr, 'string');
    resStr = genDts.transTskey2Ckey('std::unique_ptr<char *>');
    assert.strictEqual(resStr, 'string');
    resStr = genDts.transTskey2Ckey('std::unique_ptr<long long>');
    assert.strictEqual(resStr, 'number');
    resStr = genDts.transTskey2Ckey('std::unique_ptr<unsigned short>');
    assert.strictEqual(resStr, 'number');
    resStr = genDts.transTskey2Ckey('std::unique_ptr<unsigned long>');
    assert.strictEqual(resStr, 'number');
    resStr = genDts.transTskey2Ckey('std::unique_ptr<unsigned long long>');
    assert.strictEqual(resStr, 'number');
    resStr = genDts.transTskey2Ckey('std::unique_ptr<int *>');
    assert.strictEqual(resStr, 'number');
    //std::shared_ptr
    resStr = genDts.transTskey2Ckey('std::shared_ptr<std::string>');
    assert.strictEqual(resStr, 'string');
    resStr = genDts.transTskey2Ckey('std::shared_ptr<char *>');
    assert.strictEqual(resStr, 'string');
    resStr = genDts.transTskey2Ckey('std::shared_ptr<long long>');
    assert.strictEqual(resStr, 'number');
    resStr = genDts.transTskey2Ckey('std::shared_ptr<unsigned short>');
    assert.strictEqual(resStr, 'number');
    resStr = genDts.transTskey2Ckey('std::shared_ptr<unsigned long>');
    assert.strictEqual(resStr, 'number');
    resStr = genDts.transTskey2Ckey('std::shared_ptr<unsigned long long>');
    assert.strictEqual(resStr, 'number');
    resStr = genDts.transTskey2Ckey('std::shared_ptr<int *>');
    assert.strictEqual(resStr, 'number');
    //std::weak_ptr
    resStr = genDts.transTskey2Ckey('std::weak_ptr<std::string>');
    assert.strictEqual(resStr, 'string');
    resStr = genDts.transTskey2Ckey('std::weak_ptr<char *>');
    assert.strictEqual(resStr, 'string');
    resStr = genDts.transTskey2Ckey('std::weak_ptr<long long>');
    assert.strictEqual(resStr, 'number');
    resStr = genDts.transTskey2Ckey('std::weak_ptr<unsigned short>');
    assert.strictEqual(resStr, 'number');
    resStr = genDts.transTskey2Ckey('std::weak_ptr<unsigned long>');
    assert.strictEqual(resStr, 'number');
    resStr = genDts.transTskey2Ckey('std::weak_ptr<unsigned long long>');
    assert.strictEqual(resStr, 'number');
    resStr = genDts.transTskey2Ckey('std::weak_ptr<int *>');
    assert.strictEqual(resStr, 'number');
  });

  //3, 测试异常情况
  test('transTskey2Ckey_test_4', () => {
    let resStr = genDts.transTskey2Ckey('');
    assert.strictEqual(resStr, '');
    resStr = genDts.transTskey2Ckey('int$#');
    assert.strictEqual(resStr, 'number');
  });

  //4, 测试错误情况
  test('transTskey2Ckey_test_5', () => {
    let res = true;
    try {
      genDts.transTskey2Ckey(null);
    } catch (error) {
      res = false;
    }
    assert.strictEqual(res, false);
    let res2 = true;
    try {
      genDts.transTskey2Ckey(undefined);
    } catch (error) {
      res2 = false;
    }
    assert.strictEqual(res2, false);
  });
})

suite('Gendts_enums_Suite', () => {
  let enums: EnumObj[] = [
    {
      name: 'EnumObj',
      alias: '',
      members: [
        'ENUM_ONE',
        'ENUM_TWO',
      ],
    }
  ]
  //1, 测试一般情况
  test('getDtsEnum_test_1', () => {
    let rootInfo: GenInfo = {
      parseObj: {
        enums: enums,
        unions: [],
        structs: [],
        classes: [],
        funcs: [],
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    }
    let resStr = genDts.getDtsEnum(rootInfo);
    assert.strictEqual(resStr, 'export enum EnumObj {\n\tENUM_ONE,\n\tENUM_TWO,\n};\n\n');
    
    enums = [
      {
        name: 'OperationType',
        alias: 'OperationType',
        members: [
          'NEW',
          'APPEND',
          'REPLACE'
        ]
      }
    ];
    rootInfo = {
      parseObj: {
        enums: enums,
        unions: [],
        structs: [],
        classes: [],
        funcs: [],
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    }
    resStr = genDts.getDtsEnum(rootInfo);
    assert.strictEqual(resStr, 'export enum OperationType {\n\tNEW,\n\tAPPEND,\n\tREPLACE,\n};\n\n');
  });

  //2, 测试边界情况
  test('getDtsEnum_test_2', () => {
    // 测试枚举为空的情况
    let rootInfo: GenInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: [],
        funcs: [],
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    }
    let resStr = genDts.getDtsEnum(rootInfo);
    assert.strictEqual(resStr, '');

    enums = [
      {
        name: 'OperationType',
        alias: 'OperationType',
        members: [
          'NEW'
        ],
      }
    ]
    rootInfo = {
      parseObj: {
        enums: enums,
        unions: [],
        structs: [],
        classes: [],
        funcs: [],
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    }
    resStr = genDts.getDtsEnum(rootInfo);
    assert.strictEqual(resStr, 'export enum OperationType {\n\tNEW,\n};\n\n');

    enums = [
      {
        name: 'OType',
        alias: 'OperationType',
        members: [
          'NEW'
        ]
      }
    ];
    rootInfo = {
      parseObj: {
        enums: enums,
        unions: [],
        structs: [],
        classes: [],
        funcs: [],
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    }
    resStr = genDts.getDtsEnum(rootInfo);
    assert.strictEqual(resStr, 'export enum OType {\n\tNEW,\n};\n\nexport type OperationType = OType;\n\n');
    
    enums = [
      {
        name: 'OType',
        alias: '',
        members: [
          'NEW'
        ]
      }
    ];
    rootInfo = {
      parseObj: {
        enums: enums,
        unions: [],
        structs: [],
        classes: [],
        funcs: [],
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    }
    resStr = genDts.getDtsEnum(rootInfo);
    assert.strictEqual(resStr, 'export enum OType {\n\tNEW,\n};\n\n');

    enums = [
      {
        name: 'OType',
        alias: '',
        members: [
          'NEW'
        ]
      },
      {
        name: 'TOTSize1',
        alias: '',
        members: [
          'DTS'
        ]
      }
    ];
    rootInfo = {
      parseObj: {
        enums: enums,
        unions: [],
        structs: [],
        classes: [],
        funcs: [],
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    }
    resStr = genDts.getDtsEnum(rootInfo);
    assert.strictEqual(resStr, 'export enum OType {\n\tNEW,\n};\n\nexport enum TOTSize1 {\n\tDTS,\n};\n\n');
    
    enums = [
      {
        name: 'TEST_ENUM',
        alias: '',
        members: [
          'ENUM_1 = 1',
          'ENUM_2 = 2'
        ]
      }
    ];
    rootInfo = {
      parseObj: {
        enums: enums,
        unions: [],
        structs: [],
        classes: [],
        funcs: [],
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    }
    resStr = genDts.getDtsEnum(rootInfo);
    assert.strictEqual(resStr, 'export enum TEST_ENUM {\n\tENUM_1 = 1,\n\tENUM_2 = 2,\n};\n\n');

    enums = [
      {
        name: 'TEST_ENUM',
        alias: '',
        members: [
          'ENUM_1',
          'ENUM_2'
        ]
      }
    ];
    rootInfo = {
      parseObj: {
        enums: enums,
        unions: [],
        structs: [],
        classes: [],
        funcs: [],
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    }
    resStr = genDts.getDtsEnum(rootInfo);
    assert.strictEqual(resStr, 'export enum TEST_ENUM {\n\tENUM_1,\n\tENUM_2,\n};\n\n');
  });

  //3, 测试异常情况
  test('getDtsEnum_test_3', () => {
    // 1.parseObj.enums不存在
    let rootInfo: GenInfo = {
      parseObj: {
        unions: [],
        structs: [],
        classes: [],
        funcs: [],
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    }
    let res = true;
    try {
      genDts.getDtsEnum(rootInfo);
    } catch (error) {
      res = false;
    }
    assert.strictEqual(res, false);
    // 2.enums中的member不存在
    let rootInfo2: GenInfo = {
      parseObj: {
        enums: [{
          name: 'EnumObj',
          alias: '',
        }],
        unions: [],
        structs: [],
        classes: [],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    }
    let res2 = true;
    try {
      genDts.getDtsEnum(rootInfo2);
    } catch (error) {
      res2 = false;
    }
    assert.strictEqual(res2, false);
    //3.enums的name为空
    enums = [
      {
        name: '',
        alias: '',
        members: [
          'ENUM_1'
        ]
      }
    ];
    let rootInfo3: GenInfo = {
      parseObj: {
        enums: enums,
        unions: [],
        structs: [],
        classes: [],
        funcs: [],
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    }
    let res3 = genDts.getDtsEnum(rootInfo3);
    assert.strictEqual(res3, 'export enum  {\n\tENUM_1,\n};\n\n');
    //3.enums的name为空
    enums = [
      {
        name: '',
        alias: '',
        members: []
      }
    ];
    let rootInfo4: GenInfo = {
      parseObj: {
        enums: enums,
        unions: [],
        structs: [],
        classes: [],
        funcs: [],
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    }
    let res4 = genDts.getDtsEnum(rootInfo4);
    assert.strictEqual(res4, 'export enum  {\n};\n\n');
  });

  //4, 测试错误情况
  test('getDtsEnum_test_4', () => {
    let res = true;
    try {
      genDts.getDtsEnum(null);
    } catch (error) {
      res = false;
    }
    assert.strictEqual(res, false);

    let res2 = true;
    try {
      genDts.getDtsEnum(undefined);
    } catch (error) {
      res2 = false;
    }
    assert.strictEqual(res2, false);
  });
})

suite('Gendts_unions_Suite', () => {
  let unions: UnionObj[] = [
    {
      name: 'UnionObj',
      alias: '',
      members: [
        {
          type: 'int',
          name: 'v1',
          arraySize: -1,
          arraySizeList: []
        },
        {
          type: 'double',
          name: 'v2',
          arraySize: -1,
          arraySizeList: []
        }
      ],
    },
  ];
  //1, 测试一般情况
  test('getDtsUnions_test_1', () => {
    let rootInfo = {
      parseObj: {
        enums: [],
        unions: unions,
        structs: [],
        classes: [],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };
    let resStr = genDts.getDtsUnions(rootInfo);
    assert.strictEqual(resStr, 'export type UnionObj = number | number ;\n\n');

    let unions1: UnionObj[] = [
      {
        name: 'OperationType',
        alias: 'OperationType',
        members: [
          {
            type: 'int',
            name: 'len',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'float',
            name: 'width',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'char',
            name: 'name',
            arraySize: 20,
            arraySizeList: [20]
          }
        ]
      }
    ]
    rootInfo = {
      parseObj: {
        enums: [],
        unions: unions1,
        structs: [],
        classes: [],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };
    resStr = genDts.getDtsUnions(rootInfo);
    assert.strictEqual(resStr, 'export type OperationType = number | number | string ;\n\n');

  });

  // 2, 测试边界情况 
  test('getDtsUnions_test_2', () => {
    // unions是空
    let rootInfo: GenInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: [],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };
    let resStr = genDts.getDtsUnions(rootInfo);
    assert.strictEqual(resStr, '');

    let unions1: UnionObj[] = [
      {
        name: 'OperationType',
        alias: 'OperationType',
        members: [
          {
            type: 'int',
            name: 'len',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'float',
            name: 'width',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'char',
            name: 'name',
            arraySize: 20,
            arraySizeList: [20, 10]
          }
        ]
      }
    ]
    rootInfo = {
      parseObj: {
        enums: [],
        unions: unions1,
        structs: [],
        classes: [],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };
    resStr = genDts.getDtsUnions(rootInfo);
    assert.strictEqual(resStr, 'export type OperationType = number | number | string ;\n\n');

    unions1 = [
      {
        name: 'optype',
        alias: 'OperationType',
        members: [
          {
            type: 'int',
            name: 'len',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'float',
            name: 'width',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'char',
            name: 'name',
            arraySize: 20,
            arraySizeList: [20, 10]
          }
        ]
      }
    ]
    rootInfo = {
      parseObj: {
        enums: [],
        unions: unions1,
        structs: [],
        classes: [],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };
    resStr = genDts.getDtsUnions(rootInfo);
    assert.strictEqual(resStr, 'export type optype = number | number | string ;\n\nexport type OperationType = optype;\n\n');

    unions1 = [
      {
        name: 'OperationType',
        alias: 'OperationType',
        members: [
          {
            type: 'char',
            name: 'ch',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'int',
            name: 'len',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'short',
            name: 'slen',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'long long',
            name: 'llint',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'float',
            name: 'width',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'double',
            name: 'dlen',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'long double',
            name: 'ldlen',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'void*',
            name: 'ptr',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'char',
            name: 'name',
            arraySize: 20,
            arraySizeList: [20, 10]
          },
          {
            type: 'char',
            name: 'ch3',
            arraySize: 10,
            arraySizeList: [10, 20, 30]
          },
          {
            type: 'long long',
            name: 'llint3',
            arraySize: 10,
            arraySizeList: [10, 20, 30]
          },
          {
            type: 'float',
            name: 'width3',
            arraySize: 10,
            arraySizeList: [10, 20, 30]
          },
          {
            type: 'double',
            name: 'dlens',
            arraySize: 10,
            arraySizeList: [10, 20, 30]
          },
          {
            type: 'long double',
            name: 'ldlen3',
            arraySize: 10,
            arraySizeList: [10, 20, 30]
          },
          {
            type: 'void*',
            name: 'ptr3',
            arraySize: 10,
            arraySizeList: [10, 20, 30]
          },
          {
            type: 'signed char',
            name: 'sch',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'signed int',
            name: 'silen',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'signed short',
            name: 'slen',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'signed long',
            name: 'sllen',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'signed long long',
            name: 'sllint',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'signed float',
            name: 'swidth',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'signed double',
            name: 'sdlen',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'signed void*',
            name: 'ptr',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'unsigned char',
            name: 'uch',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'unsigned int',
            name: 'ulen',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'unsigned short',
            name: 'uslen',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'unsigned long',
            name: 'ullen',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'unsigned long long',
            name: 'ullint',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'unsigned float',
            name: 'uwidth',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'unsigned double',
            name: 'udlen',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'unsigned long double',
            name: 'uld',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'unsigned void*',
            name: 'uptr',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'bool bflag',
            name: 'uptr',
            arraySize: -1,
            arraySizeList: []
          },
        ]
      }
    ]
    rootInfo = {
      parseObj: {
        enums: [],
        unions: unions1,
        structs: [],
        classes: [],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };
    resStr = genDts.getDtsUnions(rootInfo);
    assert.strictEqual(resStr, 'export type OperationType = string | number | number | number | number | number | number | void | string | string | number | number | number | number | void | string | number | number | number | number | number | number | void | string | number | number | number | number | number | number | number | number | boolean ;\n\n');
  
    unions1 = [
      {
        name: 'OType',
        alias: '',
        members: [
          {
            type: 'int',
            name: 'len',
            arraySize: -1,
            arraySizeList: []
          }
        ]
      },
      {
        name: 'TOTSize1',
        alias: '',
        members:[
          {
            type: 'int',
            name: 'len',
            arraySize: -1,
            arraySizeList: []
          }
        ]
      }
    ]
    rootInfo = {
      parseObj: {
        enums: [],
        unions: unions1,
        structs: [],
        classes: [],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };
    resStr = genDts.getDtsUnions(rootInfo);
    assert.strictEqual(resStr, 'export type OType = number ;\n\nexport type TOTSize1 = number ;\n\n');
  
    unions1 = [
      {
        name: 'TEST_ENUM',
        alias: '',
        members: [
          {
            type: 'int',
            name: 'len',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'char',
            name: 'name',
            arraySize: 10,
            arraySizeList: [10]
          }
        ]
      }
    ]
    rootInfo = {
      parseObj: {
        enums: [],
        unions: unions1,
        structs: [],
        classes: [],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };
    resStr = genDts.getDtsUnions(rootInfo);
    assert.strictEqual(resStr, 'export type TEST_ENUM = number | string ;\n\n');

    unions1 = [
      {
        name: 'TEST_ENUM',
        alias: 'TEST_ENUM_T',
        members: [
          {
            type: 'int',
            name: 'len',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'char',
            name: 'name',
            arraySize: 10,
            arraySizeList: [10]
          },
          {
            type: 'ENUM_T',
            name: 'tenum',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'CLASS_T',
            name: 'tclass',
            arraySize: -1,
            arraySizeList:[]
          },
          {
            type: 'STRUCT_T',
            name: 'tstruct',
            arraySize: -1,
            arraySizeList:[]
          },
          {
            type: 'UNION_T',
            name: 'tunion',
            arraySize: -1,
            arraySizeList:[]
          }
        ]
      }
    ]
    rootInfo = {
      parseObj: {
        enums: [],
        unions: unions1,
        structs: [],
        classes: [],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };
    resStr = genDts.getDtsUnions(rootInfo);
    assert.strictEqual(resStr, 'export type TEST_ENUM = number | string | any | any | any | any ;\n\nexport type TEST_ENUM_T = TEST_ENUM;\n\n');
  });

  //3, 测试异常情况export type OperationType = number ;\n\n
  test('getDtsUnions_test_3', () => {
    // 1.没有parseObj.unions属性
    let rootInfo: GenInfo = {
      parseObj: {
        enums: [],
        structs: [],
        classes: [],
        funcs: [],
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    }
    let res = true;
    try {
      genDts.getDtsUnions(rootInfo);
    } catch (error) {
      res = false;
    }
    assert.strictEqual(res, false);
    // 2. unions没有members属性
    let rootInfo2: GenInfo = {
      parseObj: {
        enums: [],
        structs: [],
        unions: [{
          name: 'UnionObj',
          alias: '',
        }],
        classes: [],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    }
    let res2 = true;
    try {
      genDts.getDtsUnions(rootInfo2);
    } catch (error) {
      res2 = false;
    }
    assert.strictEqual(res2, false);
  });

  //4, 测试错误情况
  test('getDtsUnions_test_4', () => {
    let res = true;
    try {
      genDts.getDtsUnions(null);
    } catch (error) {
      res = false;
    }
    assert.strictEqual(res, false);

    let res2 = true;
    try {
      genDts.getDtsUnions(undefined);
    } catch (error) {
      res2 = false;
    }
    assert.strictEqual(res2, false);
  });
})

suite('Gendts_structs_Suite', () => {
  let structs: StructObj[] = [
    {
      name: 'StructObj',
      alias: '',
      members: [
        {
          type: 'string',
          name: 'name',
          arraySize: -1,
        },
        {
          type: 'int',
          name: 'age',
          arraySize: -1,
        },
      ],
      functions: [
        {
          returns: 'bool',
          name: 'funcTest',
          type: '',
          parameters: [
            {
              type: 'size_t',
              name: 'v',
              arraySize: -1,
            },
          ],
        },
      ],
    },
  ]
  //1, 测试一般情况
  test('getDtsStructs_test_1', () => {
    let rootInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: structs,
        classes: [],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };

    let resStr = genDts.getDtsStructs(rootInfo);
    assert.strictEqual(resStr, 'export type StructObj = {\n\tname: string;\n\tage: number;\n\tfuncTest(v: number): boolean;\n};\n\n');
  });

  //2, 测试边界情况
  test('getDtsStructs_test_2', () => {
    // 1. structs为空
    let rootInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: [],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };
    let resStr = genDts.getDtsStructs(rootInfo);
    assert.strictEqual(resStr, '');

    // 2.structs有成员，成员变量为空，成员方法不为空
    let rootInfo2 = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [{
          name: 'StructObj',
          alias: '',
          members: [],
          functions: [{
            returns: 'bool',
            name: 'funcTest',
            type: '',
            parameters: [
              {
                type: 'size_t',
                name: 'v',
                arraySize: -1,
              },
            ],
          }],
        }],
        classes: [],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };
    resStr = genDts.getDtsStructs(rootInfo2);
    assert.strictEqual(resStr, 'export type StructObj = {\n\tfuncTest(v: number): boolean;\n};\n\n');

    // 3.structs有成员，成员变量不为空，成员方法为空
    let rootInfo3 = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [{
          name: 'StructObj',
          alias: '',
          members: [
            {
              type: 'string',
              name: 'name',
              arraySize: -1,
            },
            {
              type: 'int',
              name: 'age',
              arraySize: -1,
            },
          ],
          functions: []
        }],
        classes: [],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };
    resStr = genDts.getDtsStructs(rootInfo3);
    assert.strictEqual(resStr, 'export type StructObj = {\n\tname: string;\n\tage: number;\n};\n\n');
  });

  //3, 测试异常情况
  test('getDtsStructs_test_3', () => {
    // 1.parseObj 没有struct属性
    let rootInfo: GenInfo = {
      parseObj: {
        enums: [],
        unions: [],
        classes: [],
        funcs: [],
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    }
    let res = true;
    try {
      genDts.getDtsStructs(rootInfo);
    } catch (error) {
      res = false;
    }
    assert.strictEqual(res, false);

    // 2. struct没有function属性
    let rootInfo2: GenInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [{
          name: 'StructObj',
          alias: '',
          members: [],
        }],
        classes: [],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    }
    let res2 = true;
    try {
      genDts.getDtsStructs(rootInfo2);
    } catch (error) {
      res2 = false;
    }
    assert.strictEqual(res2, false);

    // 3. struct没有members属性
    let rootInfo3: GenInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [{
          name: 'StructObj',
          alias: '',
          functions: []
        }],
        classes: [],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    }
    let res3 = true;
    try {
      genDts.getDtsStructs(rootInfo3);
    } catch (error) {
      res3 = false;
    }
    assert.strictEqual(res3, false);
  });

  //4, 测试错误情况
  test('getDtsStructs_test_4', () => {
    let res = true;
    try {
      genDts.getDtsStructs(null);
    } catch (error) {
      res = false;
    }
    assert.strictEqual(res, false);

    let res2 = true;
    try {
      genDts.getDtsStructs(undefined);
    } catch (error) {
      res2 = false;
    }
    assert.strictEqual(res2, false);
  });
})

suite('Gendts_classes_Suite', () => {
  let classes: ClassObj[] = [
    {
      name: 'ClassObj',
      alias: '',
      variableList: [
        {
          type: 'double',
          name: 'val',
          arraySize: -1,
        },
      ],
      functionList: [
        {
          returns: 'int',
          name: 'classFunc',
          type: '',
          parameters: [
            {
              type: 'double',
              name: 'v1',
              arraySize: -1,
            },
          ],
        },
      ],
    },
  ]
  //1, 测试一般情况
  test('getDtsClasses_test_1', () => {
    let rootInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: classes,
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };
    let resStr = genDts.getDtsClasses(rootInfo);
    assert.strictEqual(resStr, 'export class ClassObj {\n\tval: number;\n\tclassFunc(v1: number): number;\n};\n\n');
  });

  //2, 测试边界情况
  test('getDtsClasses_test_2', () => {
    // 1. class为空
    let rootInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: [],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };
    let resStr = genDts.getDtsClasses(rootInfo);
    assert.strictEqual(resStr, '');

    // 2.class有成员，成员变量为空，成员方法不为空
    let rootInfo2 = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'ClassObj',
          alias: '',
          variableList: [],
          functionList: [
            {
              returns: 'int',
              name: 'classFunc',
              type: '',
              parameters: [
                {
                  type: 'double',
                  name: 'v1',
                  arraySize: -1,
                },
              ],
            },
          ],
        },],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };
    resStr = genDts.getDtsClasses(rootInfo2);
    assert.strictEqual(resStr, 'export class ClassObj {\n\tclassFunc(v1: number): number;\n};\n\n');

    // 3.class有成员，成员变量不为空，成员方法为空
    let rootInfo3 = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'ClassObj',
          alias: '',
          variableList: [
            {
              type: 'double',
              name: 'val',
              arraySize: -1,
            },
          ],
          functionList: [],
        },],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };
    resStr = genDts.getDtsClasses(rootInfo3);
    assert.strictEqual(resStr, 'export class ClassObj {\n\tval: number;\n};\n\n');
  });

  //3, 测试异常情况
  test('getDtsClasses_test_3', () => {
    // 1.parseObj 没有classs属性
    let rootInfo: GenInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        funcs: [],
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    }
    let res = true;
    try {
      genDts.getDtsClasses(rootInfo);
    } catch (error) {
      res = false;
    }
    assert.strictEqual(res, false);

    // 2. class没有functionList属性
    let rootInfo2: GenInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'ClassObj',
          alias: '',
          variableList: [
            {
              type: 'double',
              name: 'val',
              arraySize: -1,
            },
          ],
        }],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    }
    let res2 = true;
    try {
      genDts.getDtsClasses(rootInfo2);
    } catch (error) {
      res2 = false;
    }
    assert.strictEqual(res2, false);

    // 3. class没有varableList属性
    let rootInfo3: GenInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'ClassObj',
          alias: '',
          functionList: []
        }],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    }
    let res3 = true;
    try {
      genDts.getDtsClasses(rootInfo3);
    } catch (error) {
      res3 = false;
    }
    assert.strictEqual(res3, false);
  });

  //4, 测试错误情况
  test('getDtsClasses_test_4', () => {
    let res = true;
    try {
      genDts.getDtsClasses(null);
    } catch (error) {
      res = false;
    }
    assert.strictEqual(res, false);

    let res2 = true;
    try {
      genDts.getDtsClasses(undefined);
    } catch (error) {
      res2 = false;
    }
    assert.strictEqual(res2, false);
  });
})

suite('Gendts_funcs_Suite', () => {
  vscode.window.showInformationMessage('Start all tests.');

  let funcList: FuncObj[] = [
    {
      type: 'function',
      returns: 'int',
      name: 'testFunc',
      parameters: [
        {
          type: 'bool',
          name: 'v1',
          arraySize: -1,
        }
      ],
    }
  ];
  let parseObj: ParseObj = {
    enums: [],
    unions: [],
    structs: [],
    classes: [],
    funcs: funcList,
  }

  //1, 测试一般情况
  test('getDtsFunction_test_1', () => {
    let rootInfo: GenInfo = {
      parseObj: parseObj,
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    }
    let resStr = genDts.getDtsFunction(rootInfo);
    assert.strictEqual(resStr, 'export function testFunc(v1: boolean): number;\n\n');
  });

  //2, 测试边界情况
  test('getDtsFunction_test_2', () => {
    // 1. 函数列表为空,确保返回空字符串
    let rootInfo: GenInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: [],
        funcs: [],
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    }
    let resStr = genDts.getDtsFunction(rootInfo);
    assert.strictEqual(resStr, '');
    // 2. 函数没有参数的情况,生成不带参数的声明
    let funcList: FuncObj[] = [
      {
        type: 'function',
        returns: 'int',
        name: 'testFunc',
        parameters: [],
      }
    ];
    let rootInfo2: GenInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: [],
        funcs: funcList,
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    }
    resStr = genDts.getDtsFunction(rootInfo2);
    assert.strictEqual(resStr, 'export function testFunc(): number;\n\n');
  });

  //3, 测试异常情况
  test('getDtsFunction_test_3', () => {
    // 1.rootInfo.parseObj.funcs不存在时是否会抛出错误
    let rootInfo: GenInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: [],
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    }
    let res = true;
    try {
      genDts.getDtsFunction(rootInfo);
    } catch (error) {
      res = false;
    }
    assert.strictEqual(res, false);
    // 2.funcItem缺少必要属性(如 缺少returns)时的处理 
    let funcList: FuncObj[] = [
      {
        type: 'function',
        name: 'testFunc',
        parameters: [
          {
            type: 'bool',
            name: 'v1',
            arraySize: -1,
          }
        ],
      }
    ];
    let rootInfo2: GenInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: [],
        funcs: funcList
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    }
    let res2 = true;
    try {
      genDts.getDtsFunction(rootInfo2);
    } catch (error) {
      res2 = false;
    }
    assert.strictEqual(res2, false);

  });

  //4, 测试错误情况
  test('getDtsFunction_test_4', () => {
    // 1.传递非法参数,如null/undefined,或者错误类型的输入
    let res = true;
    try {
      genDts.getDtsFunction(null);
    } catch (error) {
      res = false;
    }
    assert.strictEqual(res, false);

    let res2 = true;
    try {
      genDts.getDtsFunction(undefined);
    } catch (error) {
      res2 = false;
    }
    assert.strictEqual(res2, false);
  });
})

suite('Gendts_file_Suite', () => {
  vscode.window.showInformationMessage('Start all tests.');
  let parseObj: ParseObj = {
    enums: [],
    unions: [],
    structs: [],
    classes: [],
    funcs: [
      {
        type: 'function',
        returns: 'int',
        name: 'testFunc',
        parameters: [
          {
            type: 'int',
            name: 'v1',
            arraySize: -1,
          }
        ],
      },
    ],
  }

  //1, 测试一般情况
  test('genDtsFile_test_1', () => {
    let rootInfo: GenInfo = {
      parseObj: parseObj,
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    }
    let expectedPath = genDts.genDtsFile(rootInfo);
    assert.strictEqual(expectedPath, 'e:\\test.d.ts');
    // 清理生成的文件
    fs.unlinkSync(expectedPath);
  });

  //2, 测试边界情况
  test('genDtsFile_test_2', () => {
    let rootInfo: GenInfo = {
      parseObj: parseObj,
      rawFilePath: 'e:\\test.h',
      fileName: '',
    }
    let expectedPath = genDts.genDtsFile(rootInfo);
    assert.strictEqual(expectedPath, 'e:\\.d.ts');
    // 清理生成的文件
    fs.unlinkSync(expectedPath);
  });

  //3, 测试异常情况
  test('genDtsFile_test_3', () => {
    let rootInfo: GenInfo = {
      fileName: 'test',
      rawFilePath: 'e:\\test.h',
    }
    let res = true;
    try {
      genDts.genDtsFile(rootInfo);
    } catch (error) {
      res = false;
    }
    assert.strictEqual(res, false);

    let rootInfo2: GenInfo = {
      parseObj: parseObj,
      fileName: 'test',
    }
    let res2 = true;
    try {
      genDts.genDtsFile(rootInfo2);
    } catch (error) {
      res2 = false;
    }
    assert.strictEqual(res2, false);

  });

  //4, 测试错误情况
  test('genDtsFile_test_4', () => {
    let res = true;
    try {
      genDts.genDtsFile(null);
    } catch (error) {
      res = false;
    }
    assert.strictEqual(res, false);
    let res2 = true;
    try {
      genDts.genDtsFile(undefined);
    } catch (error) {
      res2 = false;
    }
    assert.strictEqual(res2, false);
  });
});