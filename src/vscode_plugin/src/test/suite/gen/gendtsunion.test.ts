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

suite('Gendts_unions_Suite', () => {
  //1, 测试一般情况
  test('getDtsUnions_test_1', () => {
    //1. alias为空
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
    let rootInfo: GenInfo = {
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

    //2. alias不为空但和name相同
    unions = [
        {
          name: 'UnionObj',
          alias: 'UnionObj',
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
    rootInfo = {
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
    resStr = genDts.getDtsUnions(rootInfo);
    assert.strictEqual(resStr, 'export type UnionObj = number | number ;\n\n');

    //3. alias不为空且和name不同
    unions = [
        {
          name: 'UnionObj',
          alias: 'UnionObject',
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
    rootInfo = {
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
    resStr = genDts.getDtsUnions(rootInfo);
    assert.strictEqual(resStr, 'export type UnionObj = number | number ;\n\nexport type UnionObject = UnionObj;\n\n');
  });

  //2, 测试边界情况 
  test('getDtsUnions_test_2', () => {
    //1.members仅有一个元素
    let unions: UnionObj[] = [
      {
        name: 'OperationType',
        alias: '',
        members: [
          {
            type: 'int',
            name: 'len',
            arraySize: -1,
            arraySizeList: []
          }
        ]
      }
    ]
    let rootInfo: GenInfo = {
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
    assert.strictEqual(resStr, 'export type OperationType = number ;\n\n');
    //2.members有多个元素
    unions = [
      {
        name: 'OperationType',
        alias: '',
        members: [
          {
            type: 'char',
            name: 'ch',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'wchar_t',
            name: 'wch',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'char8_t',
            name: 'ch8',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'char16_t',
            name: 'ch16',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'char32_t',
            name: 'ch32',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::string',
            name: 'str',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::wstring',
            name: 'wstr',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::u16string',
            name: 'su16sname',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::u32string',
            name: 'su32sname',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::basic_string',
            name: 'sbsname',
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
            type: 'size_t',
            name: 'size',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'uint8_t',
            name: 'u8int',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'uint16_t',
            name: 'u16int',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'uint32_t',
            name: 'u32int',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'uint64_t',
            name: 'u64int',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'int8_t',
            name: 'int8',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'int16_t',
            name: 'int16',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'int32_t',
            name: 'int32',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'int64_t',
            name: 'int64',
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
            type: 'unsigned',
            name: 'unum',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'long',
            name: 'llen',
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
            type: 'int',
            name: 'len3',
            arraySize: 10,
            arraySizeList: [10, 20, 30]
          },
          {
            type: 'short',
            name: 'slen3',
            arraySize: 10,
            arraySizeList: [10, 20, 30]
          },
          {
            type: 'long',
            name: 'llen3',
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
            type: 'bool',
            name: 'bflag',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::map<char, float>',
            name: 'Map',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::vector<int>',
            name: 'svlist',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::deque<int>',
            name: 'sdlist',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::list<int>',
            name: 'slst',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::forward_list<int>',
            name: 'sflist',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::array<int>',
            name: 'salist',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::stack<int>',
            name: 'sqstack',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::queue<int>',
            name: 'sqlist',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::priority_queue<int>',
            name: 'spqlist',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::pair<double, int>',
            name: 'sppair',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::map<doiuble, int>',
            name: 'smap',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::multimap<double, int>',
            name: 'smmap',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::set<double, int>',
            name: 'sset',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::multiset<double, int>',
            name: 'smset',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::unordered_map<double, int>',
            name: 'sumap',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::unordered_multimap<double, int>',
            name: 'summap',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::unordered_set<double, int>',
            name: 'suset',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::unordered_multiset<double, int>',
            name: 'sumset',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::vector<int>::iterator',
            name: 'svlistIter',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::deque<int>::iterator',
            name: 'sdlistIter',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::list<int>::iterator',
            name: 'slistIter',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::forward_list<int>::iterator',
            name: 'sflistIter',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::array<int>::iterator',
            name: 'salistIter',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::stack<int>::iterator',
            name: 'sqstackIter',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::queue<int>::iterator',
            name: 'sqqueIter',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::priority_queue<int>::iterator',
            name: 'spqlistIter',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::pair<double, int>::iterator',
            name: 'sppairIter',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::map<double, int>::iterator',
            name: 'smapIter',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::multimap<double, int>::iterator',
            name: 'smmapIter',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::set<double, int>::iterator',
            name: 'ssetIter',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::multiset<double, int>::iterator',
            name: 'smsetIter',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::unordered_map<double, int>::iterator',
            name: 'sumapIter',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::unordered_multimap<double, int>::iterator',
            name: 'summapIter',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::unordered_set<double, int>::iterator',
            name: 'susetIter',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::unordered_multiset<double, int>::iterator',
            name: 'sumsetIter',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::function<int(int, int)>',
            name: 'func',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::tuple<int, float, double>',
            name: 'myTuple',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::complex<double>',
            name: 'myComplex',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::valarray<int>',
            name: 'myValarray',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::time_t',
            name: 'myTimet',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::clock_t',
            name: 'myClock',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'std::tm',
            name: 'myTm',
            arraySize: -1,
            arraySizeList: []
          }
        ]
      }
    ]
    rootInfo = {
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
    resStr = genDts.getDtsUnions(rootInfo);
    assert.strictEqual(resStr, 'export type OperationType = string | string | string | string | string | string | ' +
      'string | string | string | string | number | number | number | number | number | number | number | number | ' +
      'number | number | number | number | number | number | number | number | number | string | string | number | ' +
      'number | number | number | number | number | number | string | number | number | number | number | number | ' +
      'number | string | number | number | number | number | number | number | number | boolean | ' +
      'Map<string, number> | Array<number> | Array<number> | Array<number> | Array<number> | Array<number> | ' +
      'Array<number> | Array<number> | Array<number> | [number, number] | Map<any, number> | Map<number, number> | ' +
      'Set<number> | Set<number> | Map<number, number> | Map<number, number> | Set<number> | Set<number> | ' +
      'IterableIterator<Array<number>> | IterableIterator<Array<number>> | IterableIterator<Array<number>> | ' +
      'IterableIterator<Array<number>> | IterableIterator<Array<number>> | IterableIterator<Array<number>> | ' +
      'IterableIterator<Array<number>> | IterableIterator<Array<number>> | IterableIterator<[number, number]> | ' +
      'IterableIterator<Map<number, number>> | IterableIterator<Map<number, number>> | ' +
      'IterableIterator<Set<number>> | IterableIterator<Set<number>> | IterableIterator<Map<number, number>> | ' +
      'IterableIterator<Map<number, number>> | IterableIterator<Set<number>> | IterableIterator<Set<number>> | ' +
      '(param0: number, param1: number)=>number | [number, number, number] | {real: number, imag: number} | ' +
      'Array<number> | Date | Date | Date ;\n\n');
    //3.unions有两个成员
    unions = [
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
        unions: unions,
        structs: [],
        classes: [],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };
    resStr = genDts.getDtsUnions(rootInfo);
    assert.strictEqual(resStr, 'export type OType = number ;\n\nexport type TOTSize1 = number ;\n\n');
    //4.unions有多个成员
    unions = [
      {
        name: 'TEST_1',
        alias: '',
        members: [
          {
            type: 'int',
            name: 'len',
            arraySize: -1,
            arraySizeList: []
          },
        ]
      },
      {
        name: 'TEST_2',
        alias: '',
        members:[
            {
                type: 'char',
                name: 'ch',
                arraySize: 10,
                arraySizeList: [10]
            }
        ]
      },
      {
        name: 'TEST_3',
        alias: '',
        members:[
            {
                type: 'short',
                name: 'slen',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_4',
        alias: '',
        members:[
            {
                type: 'long',
                name: 'llen',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_5',
        alias: '',
        members:[
            {
                type: 'long long',
                name: 'llint',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_6',
        alias: '',
        members:[
            {
                type: 'float',
                name: 'width',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_7',
        alias: '',
        members:[
            {
                type: 'double',
                name: 'dlen',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_8',
        alias: '',
        members:[
            {
                type: 'long double',
                name: 'ldlen',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_9',
        alias: '',
        members:[
            {
                type: 'wchar_t',
                name: 'wch',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_10',
        alias: '',
        members:[
            {
                type: 'char',
                name: 'name',
                arraySize: 20,
                arraySizeList: [20, 10]
            }
        ]
      },
      {
        name: 'TEST_11',
        alias: '',
        members:[
            {
                type: 'char',
                name: 'ch3',
                arraySize: 10,
                arraySizeList: [10, 20, 30]
            }
        ]
      },
      {
        name: 'TEST_12',
        alias: '',
        members:[
            {
                type: 'int',
                name: 'len3',
                arraySize: 10,
                arraySizeList: [10, 20, 30]
            }
        ]
      },
      {
        name: 'TEST_13',
        alias: '',
        members:[
            {
                type: 'short',
                name: 'slen3',
                arraySize: 10,
                arraySizeList: [10, 20, 30]
            }
        ]
      },
      {
        name: 'TEST_14',
        alias: '',
        members:[
            {
                type: 'long',
                name: 'llen3',
                arraySize: 10,
                arraySizeList: [10, 20, 30]
            }
        ]
      },
      {
        name: 'TEST_15',
        alias: '',
        members:[
            {
                type: 'long long',
                name: 'llint3',
                arraySize: 10,
                arraySizeList: [10, 20, 30]
            }
        ]
      },
      {
        name: 'TEST_16',
        alias: '',
        members:[
            {
                type: 'float',
                name: 'width3',
                arraySize: 10,
                arraySizeList: [10, 20, 30]
            }
        ]
      },
      {
        name: 'TEST_17',
        alias: '',
        members:[
            {
                type: 'double',
                name: 'dlen3',
                arraySize: 10,
                arraySizeList: [10, 20, 30]
            }
        ]
      },
      {
        name: 'TEST_18',
        alias: '',
        members:[
            {
                type: 'long double',
                name: 'ldlen3',
                arraySize: 10,
                arraySizeList: [10, 20, 30]
            }
        ]
      },
      {
        name: 'TEST_19',
        alias: '',
        members:[
            {
                type: 'wchar_t',
                name: 'wch3',
                arraySize: 10,
                arraySizeList: [10, 20, 30]
            }
        ]
      },
      {
        name: 'TEST_20',
        alias: '',
        members:[
            {
                type: 'signed char',
                name: 'sch',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_21',
        alias: '',
        members:[
            {
                type: 'signed int',
                name: 'silen',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_22',
        alias: '',
        members:[
            {
                type: 'signed short',
                name: 'slen',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_23',
        alias: '',
        members:[
            {
                type: 'signed long',
                name: 'sllen',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_24',
        alias: '',
        members:[
            {
                type: 'signed long long',
                name: 'sllint',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_25',
        alias: '',
        members:[
            {
                type: 'signed float',
                name: 'swidth',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_26',
        alias: '',
        members:[
            {
                type: 'signed double',
                name: 'sdlen',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_27',
        alias: '',
        members:[
            {
                type: 'char*',
                name: 'c',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_28',
        alias: '',
        members:[
            {
                type: 'unsigned char',
                name: 'uch',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_29',
        alias: '',
        members:[
            {
                type: 'unsigned int',
                name: 'ulen',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_30',
        alias: '',
        members:[
            {
                type: 'unsigned short',
                name: 'uslen',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_31',
        alias: '',
        members:[
            {
                type: 'unsigned long',
                name: 'ullen',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_32',
        alias: '',
        members:[
            {
                type: 'unsigned long long',
                name: 'ullint',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_33',
        alias: '',
        members:[
            {
                type: 'unsigned float',
                name: 'uwidth',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_34',
        alias: '',
        members:[
            {
                type: 'unsigned double',
                name: 'udlen',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_35',
        alias: '',
        members:[
            {
                type: 'unsigned long double',
                name: 'uld',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_36',
        alias: '',
        members:[
            {
                type: 'int*',
                name: 'i',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_37',
        alias: '',
        members:[
            {
                type: 'bool',
                name: 'bflag',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_38',
        alias: '',
        members:[
            {
                type: 'long int',
                name: 'silong',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_39',
        alias: '',
        members:[
            {
                type: 'long long int',
                name: 'llinum',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_40',
        alias: '',
        members:[
            {
                type: 'char8_t',
                name: 'c8name',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_41',
        alias: '',
        members:[
            {
                type: 'char16_t',
                name: 'c16name',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_42',
        alias: '',
        members:[
            {
                type: 'char32_t',
                name: 'c32name',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_43',
        alias: '',
        members:[
            {
                type: 'char64_t',
                name: 'c64name',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_44',
        alias: '',
        members:[
            {
                type: 'std::string',
                name: 'str',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_45',
        alias: '',
        members:[
            {
                type: 'std::wstring',
                name: 'swsname',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_46',
        alias: '',
        members:[
            {
                type: 'std::u16string',
                name: 'su16sname',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_47',
        alias: '',
        members:[
            {
                type: 'std::u32string',
                name: 'su32sname',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_48',
        alias: '',
        members:[
            {
                type: 'std::basic_string',
                name: 'sbsname',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_49',
        alias: '',
        members:[
            {
                type: 'std::vector<int>',
                name: 'svlist',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_50',
        alias: '',
        members:[
            {
                type: 'std::deque<int>',
                name: 'sdlist',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_51',
        alias: '',
        members:[
            {
                type: 'std::list<int>',
                name: 'slist',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_52',
        alias: '',
        members:[
            {
                type: 'std::forward_list<int>',
                name: 'sflist',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_53',
        alias: '',
        members:[
            {
                type: 'std::array<int>',
                name: 'salist',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_54',
        alias: '',
        members:[
            {
                type: 'std::stack<int>',
                name: 'sqstack',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_55',
        alias: '',
        members:[
            {
                type: 'std::queue<int>',
                name: 'sqlist',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_56',
        alias: '',
        members:[
            {
                type: 'std::priority_queue<int>',
                name: 'spqlist',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_57',
        alias: '',
        members:[
            {
                type: 'std::pair<double, int>',
                name: 'sppair',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_58',
        alias: '',
        members:[
            {
                type: 'std::map<double, int>',
                name: 'smap',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_59',
        alias: '',
        members:[
            {
                type: 'std::multimap<double, int>',
                name: 'smmap',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_60',
        alias: '',
        members:[
            {
                type: 'std::set<double, int>',
                name: 'sset',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_61',
        alias: '',
        members:[
            {
                type: 'std::multiset<double, int>',
                name: 'smset',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_62',
        alias: '',
        members:[
            {
                type: 'std::unordered_map<double, int>',
                name: 'sumap',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_63',
        alias: '',
        members:[
            {
                type: 'std::unordered_multimap<double, int>',
                name: 'summap',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_64',
        alias: '',
        members:[
            {
                type: 'std::unordered_set<double, int>',
                name: 'suset',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_65',
        alias: '',
        members:[
            {
                type: 'std::unordered_multiset<double, int>',
                name: 'sumset',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_66',
        alias: '',
        members:[
            {
                type: 'std::vector<int>::iterator',
                name: 'svlistIter',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_67',
        alias: '',
        members:[
            {
                type: 'std::deque<int>::iterator',
                name: 'sdlistIter',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_68',
        alias: '',
        members:[
            {
                type: 'std::list<int>::iterator',
                name: 'slistIter',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_69',
        alias: '',
        members:[
            {
                type: 'std::forward_list<int>::iterator',
                name: 'sflistIter',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_70',
        alias: '',
        members:[
            {
                type: 'std::array<int>::iterator',
                name: 'salistIter',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_71',
        alias: '',
        members:[
            {
                type: 'std::stack<int>::iterator',
                name: 'sqstackIter',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_72',
        alias: '',
        members:[
            {
                type: 'std::queue<int>::iterator',
                name: 'sqqueIter',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_73',
        alias: '',
        members:[
            {
                type: 'std::priority_queue<int>::iterator',
                name: 'spqlistIter',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_74',
        alias: '',
        members:[
            {
                type: 'std::pair<double, int>::iterator',
                name: 'sppairIter',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_75',
        alias: '',
        members:[
            {
                type: 'std::map<double, int>::iterator',
                name: 'smapIter',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_76',
        alias: '',
        members:[
            {
                type: 'std::multimap<double, int>::iterator',
                name: 'smmapIter',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_77',
        alias: '',
        members:[
            {
                type: 'std::set<double, int>::iterator',
                name: 'ssetIter',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_78',
        alias: '',
        members:[
            {
                type: 'std::multiset<double, int>::iterator',
                name: 'smsetIter',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_79',
        alias: '',
        members:[
            {
                type: 'std::unordered_map<double, int>::iterator',
                name: 'sumapIter',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_80',
        alias: '',
        members:[
            {
                type: 'std::unordered_multimap<double, int>::iterator',
                name: 'summapIter',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_81',
        alias: '',
        members:[
            {
                type: 'std::unordered_set<double, int>::iterator',
                name: 'susetIter',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_82',
        alias: '',
        members:[
            {
                type: 'std::unordered_multiset<double, int>::iterator',
                name: 'sumsetIter',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_83',
        alias: '',
        members:[
            {
                type: 'std::function<int(int, int)>',
                name: 'func',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_84',
        alias: '',
        members:[
            {
                type: 'std::tuple<int, float, double>',
                name: 'myTuple',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_85',
        alias: '',
        members:[
            {
                type: 'std::complex<double>',
                name: 'myComplex',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_86',
        alias: '',
        members:[
            {
                type: 'std::valarray<int>',
                name: 'myValarray',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_87',
        alias: '',
        members:[
            {
                type: 'std::time_t',
                name: 'myTimet',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_88',
        alias: '',
        members:[
            {
                type: 'std::clock_t',
                name: 'myClock',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      },
      {
        name: 'TEST_89',
        alias: '',
        members:[
            {
                type: 'std::tm',
                name: 'myTm',
                arraySize: -1,
                arraySizeList: []
            }
        ]
      }
    ]
    rootInfo = {
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
    resStr = genDts.getDtsUnions(rootInfo);
    assert.strictEqual(resStr, 'export type TEST_1 = number ;\n\nexport type TEST_2 = string ;\n\n' +
      'export type TEST_3 = number ;\n\nexport type TEST_4 = number ;\n\nexport type TEST_5 = number ;\n\n' +
      'export type TEST_6 = number ;\n\nexport type TEST_7 = number ;\n\nexport type TEST_8 = number ;\n\n' +
      'export type TEST_9 = string ;\n\nexport type TEST_10 = string ;\n\nexport type TEST_11 = string ;\n\n' +
      'export type TEST_12 = number ;\n\nexport type TEST_13 = number ;\n\nexport type TEST_14 = number ;\n\n' +
      'export type TEST_15 = number ;\n\nexport type TEST_16 = number ;\n\nexport type TEST_17 = number ;\n\n' +
      'export type TEST_18 = number ;\n\nexport type TEST_19 = string ;\n\nexport type TEST_20 = string ;\n\n' +
      'export type TEST_21 = number ;\n\nexport type TEST_22 = number ;\n\nexport type TEST_23 = number ;\n\n' +
      'export type TEST_24 = number ;\n\nexport type TEST_25 = number ;\n\nexport type TEST_26 = number ;\n\n' +
      'export type TEST_27 = string ;\n\nexport type TEST_28 = string ;\n\nexport type TEST_29 = number ;\n\n' +
      'export type TEST_30 = number ;\n\nexport type TEST_31 = number ;\n\nexport type TEST_32 = number ;\n\n' +
      'export type TEST_33 = number ;\n\nexport type TEST_34 = number ;\n\nexport type TEST_35 = number ;\n\n' +
      'export type TEST_36 = number ;\n\nexport type TEST_37 = boolean ;\n\nexport type TEST_38 = number ;\n\n' +
      'export type TEST_39 = number ;\n\nexport type TEST_40 = string ;\n\nexport type TEST_41 = string ;\n\n' +
      'export type TEST_42 = string ;\n\nexport type TEST_43 = string ;\n\nexport type TEST_44 = string ;\n\n' +
      'export type TEST_45 = string ;\n\nexport type TEST_46 = string ;\n\nexport type TEST_47 = string ;\n\n' +
      'export type TEST_48 = string ;\n\nexport type TEST_49 = Array<number> ;\n\n' +
      'export type TEST_50 = Array<number> ;\n\nexport type TEST_51 = Array<number> ;\n\n' +
      'export type TEST_52 = Array<number> ;\n\nexport type TEST_53 = Array<number> ;\n\n' +
      'export type TEST_54 = Array<number> ;\n\nexport type TEST_55 = Array<number> ;\n\n' +
      'export type TEST_56 = Array<number> ;\n\nexport type TEST_57 = [number, number] ;\n\n' +
      'export type TEST_58 = Map<number, number> ;\n\nexport type TEST_59 = Map<number, number> ;\n\n' +
      'export type TEST_60 = Set<number> ;\n\nexport type TEST_61 = Set<number> ;\n\n' +
      'export type TEST_62 = Map<number, number> ;\n\nexport type TEST_63 = Map<number, number> ;\n\n' +
      'export type TEST_64 = Set<number> ;\n\nexport type TEST_65 = Set<number> ;\n\n' +
      'export type TEST_66 = IterableIterator<Array<number>> ;\n\n' +
      'export type TEST_67 = IterableIterator<Array<number>> ;\n\n' +
      'export type TEST_68 = IterableIterator<Array<number>> ;\n\n' +
      'export type TEST_69 = IterableIterator<Array<number>> ;\n\n' +
      'export type TEST_70 = IterableIterator<Array<number>> ;\n\n' +
      'export type TEST_71 = IterableIterator<Array<number>> ;\n\n' +
      'export type TEST_72 = IterableIterator<Array<number>> ;\n\n' +
      'export type TEST_73 = IterableIterator<Array<number>> ;\n\n' +
      'export type TEST_74 = IterableIterator<[number, number]> ;\n\n' +
      'export type TEST_75 = IterableIterator<Map<number, number>> ;\n\n' +
      'export type TEST_76 = IterableIterator<Map<number, number>> ;\n\n' +
      'export type TEST_77 = IterableIterator<Set<number>> ;\n\n' +
      'export type TEST_78 = IterableIterator<Set<number>> ;\n\n' +
      'export type TEST_79 = IterableIterator<Map<number, number>> ;\n\n' +
      'export type TEST_80 = IterableIterator<Map<number, number>> ;\n\n' +
      'export type TEST_81 = IterableIterator<Set<number>> ;\n\n' +
      'export type TEST_82 = IterableIterator<Set<number>> ;\n\n' +
      'export type TEST_83 = (param0: number, param1: number)=>number ;\n\n' +
      'export type TEST_84 = [number, number, number] ;\n\nexport type TEST_85 = {real: number, imag: number} ;\n\n' +
      'export type TEST_86 = Array<number> ;\n\nexport type TEST_87 = Date ;\n\nexport type TEST_88 = Date ;\n\n' +
      'export type TEST_89 = Date ;\n\n');
  });

  //3, 测试异常情况export type OperationType = number ;\n\n
  test('getDtsUnions_test_3', () => {
    //1.unions是空
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
    //2.unions.name为空
    let unions: UnionObj[] = [
        {
          name: '',
          alias: '',
          members: [
            {
              type: 'std::vector<int>',
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
          unions: unions,
          structs: [],
          classes: [],
          funcs: []
        },
        rawFilePath: 'e:\\test.h',
        fileName: 'test',
    };
    resStr = genDts.getDtsUnions(rootInfo);
    assert.strictEqual(resStr, 'export type  = Array<number> ;\n\n');
    //3.unions.members为空
    unions = [
        {
          name: 'UnionObj',
          alias: '',
          members: []
        }
    ]
    rootInfo = {
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
    resStr = genDts.getDtsUnions(rootInfo);
    assert.strictEqual(resStr, 'export type UnionObj = ;\n\n');
    //4.没有unions.name属性
    unions = [
        {
          alias: '',
          members: [
            {
              type: 'char32_t',
              name: 'ch32',
              arraySize: -1,
              arraySizeList: []
            }
          ]
        }
    ]
    rootInfo = {
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
    resStr = genDts.getDtsUnions(rootInfo);
    assert.strictEqual(resStr, 'export type undefined = string ;\n\n');
    //5.没有unions.alias属性
    unions = [
        {
          name: 'UnionObj',
          alias: '',
          members: [
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
          unions: unions,
          structs: [],
          classes: [],
          funcs: []
        },
        rawFilePath: 'e:\\test.h',
        fileName: 'test',
    };
    resStr = genDts.getDtsUnions(rootInfo);
    assert.strictEqual(resStr, 'export type UnionObj = number ;\n\n');
    //6.unions.name为空，unions.alias不为空
    unions = [
        {
          name: '',
          alias: 'UnionObj',
          members: [
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
          unions: unions,
          structs: [],
          classes: [],
          funcs: []
        },
        rawFilePath: 'e:\\test.h',
        fileName: 'test',
    };
    resStr = genDts.getDtsUnions(rootInfo);
    assert.strictEqual(resStr, 'export type  = number ;\n\n');
    //7.type为中文
    unions = [
        {
          name: '',
          alias: 'UnionObj',
          members: [
            {
              type: '绿色',
              name: '汉字',
              arraySize: -1,
              arraySizeList: []
            }
          ]
        }
    ]
    rootInfo = {
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
    resStr = genDts.getDtsUnions(rootInfo);
    assert.strictEqual(resStr, 'export type  = any ;\n\n');
    //8.type为乱码
    unions = [
        {
          name: '',
          alias: 'UnionObj',
          members: [
            {
              type: 'uiob@#^6cja',
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
        unions: unions,
        structs: [],
        classes: [],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };
    resStr = genDts.getDtsUnions(rootInfo);
    assert.strictEqual(resStr, 'export type  = any ;\n\n');
    //8.type为日文
    unions = [
      {
        name: '',
        alias: 'UnionObj',
        members: [
          {
            type: 'あさ',
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
        unions: unions,
        structs: [],
        classes: [],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };
    resStr = genDts.getDtsUnions(rootInfo);
    assert.strictEqual(resStr, 'export type  = any ;\n\n');
    //9.没有ParamObj.name属性
    unions = [
      {
        name: 'UnionObj',
        alias: '',
        members: [
          {
            type: 'int',
            arraySize: -1,
            arraySizeList: []
          }
        ],
      },
    ];
    rootInfo = {
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
    resStr = genDts.getDtsUnions(rootInfo);
    assert.strictEqual(resStr, 'export type UnionObj = number ;\n\n');
    //10.没有ParamObj.arraaySize属性
    unions = [
      {
        name: 'UnionObj',
        alias: '',
        members: [
          {
            type: 'int',
            name: 'UnionObj',
            arraySizeList: []
          }
        ],
      },
    ];
    rootInfo = {
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
    resStr = genDts.getDtsUnions(rootInfo);
    assert.strictEqual(resStr, 'export type UnionObj = number ;\n\n');
    //12.没有ParamObj.arraySizeList属性
    unions = [
      {
        name: 'UnionObj',
        alias: '',
        members: [
          {
            type: 'int',
            name: 'v1',
            arraySize: -1
          }
        ],
      },
    ];
    rootInfo = {
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
    resStr = genDts.getDtsUnions(rootInfo);
    assert.strictEqual(resStr, 'export type UnionObj = number ;\n\n');
    //10.type字符为特殊字符
    unions = [
      {
        name: 'UnionObj',
        alias: '',
        members: [
          {
            type: '1',
            name: 'v1',
            arraySize: -1,
            arraySizeList: []
          }
        ]
      }
    ]
    rootInfo = {
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
    resStr = genDts.getDtsUnions(rootInfo);
    assert.strictEqual(resStr, 'export type UnionObj = any ;\n\n');
  });

  //4, 测试错误情况
  test('getDtsUnions_test_4', () => {
    //1.传入参数null
    let res = true;
    try {
      genDts.getDtsUnions(null);
    } catch (error) {
      res = false;
    }
    assert.strictEqual(res, false);
    //2.传入参数undefined
    let res2 = true;
    try {
      genDts.getDtsUnions(undefined);
    } catch (error) {
      res2 = false;
    }
    assert.strictEqual(res2, false);
    // 3.没有parseObj.unions属性
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
    let res3 = true;
    try {
      genDts.getDtsUnions(rootInfo);
    } catch (error) {
      res3 = false;
    }
    assert.strictEqual(res3, false);
    // 4. 没有unions.members属性
    rootInfo = {
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
    let res4 = true;
    try {
    genDts.getDtsUnions(rootInfo);
    } catch (error) {
      res4 = false;
    }
    assert.strictEqual(res4, false);
    //5. type不符合要求
    let unions: UnionObj[] = [
      {
        name: '',
        alias: 'UnionObj',
        members: [
          {
            type: 1,
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
        unions: unions,
        structs: [],
        classes: [],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };
    let res5 = true;
    try {
      genDts.getDtsUnions(rootInfo);
    } catch (e) {
      res5 = false;
    }
    assert.strictEqual(res5, false);
    //6.没有ParamObj.type属性
    unions = [
      {
        name: 'UnionObj',
        alias: '',
        members: [
          {
            name: 'v1',
            arraySize: -1,
            arraySizeList: []
          }
        ],
      },
    ];
    rootInfo = {
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
    let res6 = true;
    try {
      genDts.getDtsUnions(rootInfo);
    } catch (e) {
      res6 = false;
    }
    assert.strictEqual(res6, false);
  });
})