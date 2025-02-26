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

suite('Gendts_enums_Suite', () => {
  //1, 测试一般情况
  test('getDtsEnum_test_1', () => {
    //1.enums中alias为空
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
    //2.enums中alias不为空，且alias不等于name
    enums = [
      {
        name: 'EnumObj',
        alias: 'OperationType',
        members: [
          'ENUM_ONE',
          'ENUM_TWO',
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
    assert.strictEqual(resStr, 'export enum EnumObj {\n\tENUM_ONE,\n\tENUM_TWO,\n};\n\n'
      +'export type OperationType = EnumObj;\n\n');
    //3.enums中alias和name相同
    enums = [
      {
        name: 'EnumObj',
        alias: 'EnumObj',
        members: [
          'ENUM_ONE',
          'ENUM_TWO',
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
    assert.strictEqual(resStr, 'export enum EnumObj {\n\tENUM_ONE,\n\tENUM_TWO,\n};\n\n');
    //4.有EnumObj.values属性
    enums = [
      {
        name: 'str',
        alias: '',
        members: [
          'std::string'
        ],
        values: [
          'hello'
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
    assert.strictEqual(resStr, 'export enum str {\n\tstd::string,\n};\n\n');
  });

  //2, 测试边界情况
  test('getDtsEnum_test_2', () => {
    //1.members仅有一个元素
    let enums = [
      {
        name: 'EnumObj',
        alias: '',
        members: [
          'ENUM_ONE'
        ],
      }
    ]
    let rootInfo = {
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
    assert.strictEqual(resStr, 'export enum EnumObj {\n\tENUM_ONE,\n};\n\n');
    //2.members有多个元素
    enums = [
      {
        name: 'EnumObj',
        alias: '',
        members: [
          '摇粒绒',
          '1 + 1 > 2',
          '0817 deadline',
          'moon',
          'flower',
          'light',
          'ball_796',
          'purple',
          'white',
          'cute',
          'puppy',
          'jiashi假使',
          'city_walk',
          'teeee_eeeet',
          'cloth',
          'dog_A_cat',
          'extension',
          'OpenHarmony',
          'Ts',
          'next_year',
          'green park',
          'river',
          'std::string',
          'std::array<int, 10>',
          'bear',
          'older',
          'house',
          'la77LA66',
          'ENUM_ONE',
          '123',
          'ENUM_TWO=2',
          'bool',
          'CHAR',
          'string',
          '开源鸿蒙',
          '哈萨克',
          'げっこう',
          'hello world',
          '3.68743969984233577',
          '**^\t'
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
    assert.strictEqual(resStr, 'export enum EnumObj {\n\t摇粒绒,\n\t1 + 1 > 2,\n\t0817 deadline,\n\tmoon,\n\tflower,\n' +
      '\tlight,\n\tball_796,\n\tpurple,\n\twhite,\n\tcute,\n\tpuppy,\n\tjiashi假使,\n\tcity_walk,\n\tteeee_eeeet,\n' +
      '\tcloth,\n\tdog_A_cat,\n\textension,\n\tOpenHarmony,\n\tTs,\n\tnext_year,\n\tgreen park,\n\triver,\n' +
      '\tstd::string,\n\tstd::array<int, 10>,\n\tbear,\n\tolder,\n\thouse,\n\tla77LA66,\n\tENUM_ONE,\n\t123,\n' +
      '\tENUM_TWO=2,\n\tbool,\n\tCHAR,\n\tstring,\n\t开源鸿蒙,\n\t哈萨克,\n\tげっこう,\n\thello world,\n' +
      '\t3.68743969984233577,\n\t**^\t,\n};\n\n');
    //3.enums有两个EnumObj
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
    //4.enums有多个EnumObj
    enums = [
      {
        name: 'TEST_ENUM',
        alias: '',
        members: [
          'ENUM_1 = 1',
          'ENUM_2 = 2'
        ]
      },
      {
        name: 'EnumObj',
        alias: '',
        members: [
          'enums'
        ]
      },
      {
        name: '方向',
        alias: '',
        members: [
          '上'
        ]
      },
      {
        name: 'どうぶつえん',
        alias: '',
        members: [
          'しまうま',
        ]
      },
      {
        name: 'slen',
        alias: '',
        members: [
          'short'
        ]
      },
      {
        name: 'width',
        alias: '',
        members: [
          'float'
        ]
      },
      {
        name: 'ullint',
        alias: '',
        members: [
          'unsigned long long'
        ]
      },
      {
        name: 'sllint',
        alias: '',
        members: [
          'signed long long'
        ]
      },
      {
        name: 'llen',
        alias: '',
        members: [
          'long'
        ]
      },
      {
        name: 'uld',
        alias: '',
        members: [
          'unsigned long double'
        ]
      },
      {
        name: 'uwidth',
        alias: '',
        members: [
          'unsigned float'
        ]
      },
      {
        name: 'sld',
        alias: '',
        members: [
          'signed long double'
        ]
      },
      {
        name: 'sdlen',
        alias: '',
        members: [
          'signed double'
        ]
      },
      {
        name: 'ch',
        alias: '',
        members: [
          'char'
        ]
      },
      {
        name: 'len',
        alias: '',
        members: [
          'int'
        ]
      },
      {
        name: 'llint',
        alias: '',
        members: [
          'long long'
        ]
      },
      {
        name: 'dlen',
        alias: '',
        members: [
          'double'
        ]
      },
      {
        name: 'ldlen',
        alias: '',
        members: [
          'long double'
        ]
      },
      {
        name: 'uch',
        alias: '',
        members: [
          'unsigned char'
        ]
      },
      {
        name: 'ulen',
        alias: '',
        members: [
          'int'
        ]
      },
      {
        name: 'uslen',
        alias: '',
        members: [
          'unsigned short'
        ]
      },
      {
        name: 'ullen',
        alias: '',
        members: [
          'unsigned long'
        ]
      },
      {
        name: 'sllen',
        alias: '',
        members:[
          'signed long'
        ]
      },
      {
        name: 'udlen',
        alias: '',
        members: [
          'unsigned double'
        ]
      },
      {
        name: 'bflag',
        alias: '',
        members: [
          'bool'
        ]
      },
      {
        name: 'cwname',
        alias: '',
        members: [
          'wchar_t'
        ]
      },
      {
        name: 'c8name',
        alias: '',
        members: [
          'char8_t'
        ]
      },
      {
        name: 'c16name',
        alias: '',
        members: [
          'char16_t'
        ]
      },
      {
        name: 'c32name',
        alias: '',
        members: [
          'char32_t'
        ]
      },
      {
        name: 'c64name',
        alias: '',
        members: [
          'char64_t'
        ]
      },
      {
        name: 'ssname',
        alias: '',
        members: [
          'std::string'
        ]
      },
      {
        name: 'swsname',
        alias: '',
        members: [
          'std:wstring'
        ]
      },
      {
        name: 'su16sname',
        alias: '',
        members: [
          'std::u16string'
        ]
      },
      {
        name: 'su32sname',
        alias: '',
        members: [
          'std:u32string'
        ]
      },
      {
        name: 'sbsname',
        alias: '',
        members: [
          'std::basic_string'
        ]
      },
      {
        name: 'svlist',
        alias: '',
        members: [
          'std::vector<int>'
        ]
      },
      {
        name: 'sdlist',
        alias: '',
        members: [
          'std::deque<int>'
        ]
      },
      {
        name: 'slist',
        alias: '',
        members: [
          'std::list<int>'
        ]
      },
      {
        name: 'sflist',
        alias: '',
        members: [
          'std::forward_list<int>'
        ]
      },
      {
        name: 'salist',
        alias: '',
        members: [
          'std::array<int>'
        ]
      },
      {
        name: 'sqstack',
        alias: '',
        members: [
          'std::stack<int>'
        ]
      },
      {
        name: 'sqlist',
        alias: '',
        members: [
          'std::queue<int>'
        ]
      },
      {
        name: 'spqlist',
        alias: '',
        members: [
          'std::priority_queue<int>'
        ]
      },
      {
        name: 'sppair',
        alias: '',
        members: [
          'std::pair<double, int>'
        ]
      },
      {
        name: 'smap',
        alias: '',
        members: [
          'std::map<double, int>'
        ]
      },
      {
        name: 'smmap',
        alias: '',
        members: [
          'std::multimap<double, int>'
        ]
      },
      {
        name: 'sset',
        alias: '',
        members: [
          'std::set<double, int>'
        ]
      },
      {
        name: 'smset',
        alias: '',
        members: [
          'std::multiset<double, int>'
        ]
      },
      {
        name: 'sumap',
        alias: '',
        members: [
          'std::unordered_map<double, int>'
        ]
      },
      {
        name: 'summap',
        alias: '',
        members: [
          'std::unordered_multimap<double, int>'
        ]
      },
      {
        name: 'suset',
        alias: '',
        members: [
          'std::unordered_set<double, int>'
        ]
      },
      {
        name: 'sumset',
        alias: '',
        members: [
          'std::unordered_multiset<double, int>'
        ]
      },
      {
        name: 'svlistIter',
        alias: '',
        members: [
          'std::vector<int>::iterator'
        ]
      },
      {
        name: 'sdlistIter',
        alias: '',
        members: [
          'std::deque<int>::iterator'
        ]
      },
      {
        name: 'slistIter',
        alias: '',
        members: [
          'std::list<int>::iterator'
        ]
      },
      {
        name: 'sflistIter',
        alias: '',
        members: [
          'std::forward_list<int>::iterator'
        ]
      },
      {
        name: 'salistIter',
        alias: '',
        members: [
          'std::array<int>::iterator'
        ]
      },
      {
        name: 'sqstackIter',
        alias: '',
        members: [
          'std::stack<int>::iterator'
        ]
      },
      {
        name: 'sqqueIter',
        alias: '',
        members: [
          'std::queue<int>::iterator'
        ]
      },
      {
        name: 'spqlistIter',
        alias: '',
        members: [
          'std::priority_queue<int>::iterator'
        ]
      },
      {
        name: 'sppairIter',
        alias: '',
        members: [
          'std::pair<double, int>::iterator'
        ]
      },
      {
        name: 'smapIter',
        alias: '',
        members: [
          'std::map<double, int>::iterator'
        ]
      },
      {
        name: 'smmapIter',
        alias: '',
        members: [
          'std::multimap<double, int>::iterator'
        ]
      },
      {
        name: 'ssetIter',
        alias: '',
        members: [
          'std::set<double, int>::iterator'
        ]
      },
      {
        name: 'smsetIter',
        alias: '',
        members: [
          'std::multiset<double, int>::iterator'
        ]
      },
      {
        name: 'sumapIter',
        alias: '',
        members: [
          'std::unordered_map<double, int>::iterator'
        ]
      },
      {
        name: 'summapIter',
        alias: '',
        members: [
          'std::unordered_multimap<double, int>::iterator'
        ]
      },
      {
        name: 'susetIter',
        alias: '',
        members: [
          'std::unordered_set<double, int>::iterator'
        ]
      },
      {
        name: 'sumsetIter',
        alias: '',
        members: [
          'std::unordered_multiset<double, int>::iterator'
        ]
      },
      {
        name: 'func',
        alias: '',
        members: [
          'std::function<int(int, int)>'
        ]
      },
      {
        name: 'myTuple',
        alias: '',
        members: [
          'std::tuple<int, float, double>'
        ]
      },
      {
        name: 'myComplex',
        alias: '',
        members: [
          'std::complex<double>'
        ]
      },
      {
        name: 'myValarray',
        alias: '',
        members: [
          'std::valarray<int>'
        ]
      },
      {
        name: 'myTimet',
        alias: '',
        members: [
          'std::time_t'
        ]
      },
      {
        name: 'myClock',
        alias: '',
        members: [
          'std::clock_t'
        ]
      },
      {
        name: 'myTm',
        alias: '',
        members: [
          'std::tm'
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
    assert.strictEqual(resStr, 'export enum TEST_ENUM {\n\tENUM_1 = 1,\n\tENUM_2 = 2,\n};\n\nexport enum EnumObj {\n' +
      '\tenums,\n};\n\nexport enum 方向 {\n\t上,\n};\n\nexport enum どうぶつえん {\n\tしまうま,\n};\n\n' +
      'export enum slen {\n\tshort,\n};\n\nexport enum width {\n\tfloat,\n};\n\nexport enum ullint {\n' +
      '\tunsigned long long,\n};\n\nexport enum sllint {\n\tsigned long long,\n};\n\nexport enum llen {\n\tlong,\n' +
      '};\n\nexport enum uld {\n\tunsigned long double,\n};\n\nexport enum uwidth {\n\tunsigned float,\n};\n\n' +
      'export enum sld {\n\tsigned long double,\n};\n\nexport enum sdlen {\n\tsigned double,\n};\n\n' +
      'export enum ch {\n\tchar,\n};\n\nexport enum len {\n\tint,\n};\n\nexport enum llint {\n\tlong long,\n};\n\n' +
      'export enum dlen {\n\tdouble,\n};\n\nexport enum ldlen {\n\tlong double,\n};\n\nexport enum uch {\n' +
      '\tunsigned char,\n};\n\nexport enum ulen {\n\tint,\n};\n\nexport enum uslen {\n\tunsigned short,\n};\n\n' +
      'export enum ullen {\n\tunsigned long,\n};\n\nexport enum sllen {\n\tsigned long,\n};\n\nexport enum udlen {\n' +
      '\tunsigned double,\n};\n\nexport enum bflag {\n\tbool,\n};\n\nexport enum cwname {\n\twchar_t,\n};\n' +
      '\nexport enum c8name {\n\tchar8_t,\n};\n\nexport enum c16name {\n\tchar16_t,\n};\n\nexport enum c32name {\n' +
      '\tchar32_t,\n};\n\nexport enum c64name {\n\tchar64_t,\n};\n\nexport enum ssname {\n\tstd::string,\n};\n\n' +
      'export enum swsname {\n\tstd:wstring,\n};\n\nexport enum su16sname {\n\tstd::u16string,\n};\n\n' +
      'export enum su32sname {\n\tstd:u32string,\n};\n\nexport enum sbsname {\n\tstd::basic_string,\n};\n\n' +
      'export enum svlist {\n\tstd::vector<int>,\n};\n\nexport enum sdlist {\n\tstd::deque<int>,\n};\n\n' +
      'export enum slist {\n\tstd::list<int>,\n};\n\nexport enum sflist {\n\tstd::forward_list<int>,\n};\n\n' +
      'export enum salist {\n\tstd::array<int>,\n};\n\nexport enum sqstack {\n\tstd::stack<int>,\n};\n\n' +
      'export enum sqlist {\n\tstd::queue<int>,\n};\n\nexport enum spqlist {\n\tstd::priority_queue<int>,\n};\n\n' +
      'export enum sppair {\n\tstd::pair<double, int>,\n};\n\nexport enum smap {\n\tstd::map<double, int>,\n};\n\n' +
      'export enum smmap {\n\tstd::multimap<double, int>,\n};\n\nexport enum sset {\n\tstd::set<double, int>,\n' +
      '};\n\nexport enum smset {\n\tstd::multiset<double, int>,\n};\n\nexport enum sumap {\n' +
      '\tstd::unordered_map<double, int>,\n};\n\nexport enum summap {\n\tstd::unordered_multimap<double, int>,\n' +
      '};\n\nexport enum suset {\n\tstd::unordered_set<double, int>,\n};\n\nexport enum sumset {\n' +
      '\tstd::unordered_multiset<double, int>,\n};\n\nexport enum svlistIter {\n\tstd::vector<int>::iterator,\n};\n\n'+
      'export enum sdlistIter {\n\tstd::deque<int>::iterator,\n};\n\nexport enum slistIter {\n' +
      '\tstd::list<int>::iterator,\n};\n\nexport enum sflistIter {\n\tstd::forward_list<int>::iterator,\n};\n\n' +
      'export enum salistIter {\n\tstd::array<int>::iterator,\n};\n\nexport enum sqstackIter {\n' +
      '\tstd::stack<int>::iterator,\n};\n\nexport enum sqqueIter {\n\tstd::queue<int>::iterator,\n};\n\n' +
      'export enum spqlistIter {\n\tstd::priority_queue<int>::iterator,\n};\n\nexport enum sppairIter {\n' +
      '\tstd::pair<double, int>::iterator,\n};\n\nexport enum smapIter {\n\tstd::map<double, int>::iterator,\n};\n\n' +
      'export enum smmapIter {\n\tstd::multimap<double, int>::iterator,\n};\n\nexport enum ssetIter {\n' +
      '\tstd::set<double, int>::iterator,\n};\n\nexport enum smsetIter {\n\tstd::multiset<double, int>::iterator,\n' +
      '};\n\nexport enum sumapIter {\n\tstd::unordered_map<double, int>::iterator,\n};\n\nexport enum summapIter {\n' +
      '\tstd::unordered_multimap<double, int>::iterator,\n};\n\nexport enum susetIter {\n' +
      '\tstd::unordered_set<double, int>::iterator,\n};\n\nexport enum sumsetIter {\n' +
      '\tstd::unordered_multiset<double, int>::iterator,\n};\n\nexport enum func {\n' +
      '\tstd::function<int(int, int)>,\n};\n\nexport enum myTuple {\n\tstd::tuple<int, float, double>,\n};\n\n' +
      'export enum myComplex {\n\tstd::complex<double>,\n};\n\nexport enum myValarray {\n\tstd::valarray<int>,\n' +
      '};\n\nexport enum myTimet {\n\tstd::time_t,\n};\n\nexport enum myClock {\n\tstd::clock_t,\n};\n\n' +
      'export enum myTm {\n\tstd::tm,\n};\n\n');
  });

  //3, 测试异常情况
  test('getDtsEnum_test_3', () => {
    //1.测试枚举为空的情况
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
    //2.enums的name为空且alias为空
    let enums: EnumObj[] = [
      {
        name: '',
        alias: '',
        members: [
          'ENUM_1'
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
    assert.strictEqual(resStr, 'export enum  {\n\tENUM_1,\n};\n\n');
    //3.members为空
    enums = [
      {
        name: '',
        alias: '',
        members: []
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
    assert.strictEqual(resStr, 'export enum  {\n};\n\n');

    //4.name不存在且alias为空
    enums = [
      {
        alias: '',
        members: [
          'ENUM_1'
        ]
      }
    ];
    rootInfo = {
      parseObj: {
        enums: enums,
        unions: [],
        structs: [],
        classes: [],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    }
    resStr = genDts.getDtsEnum(rootInfo);
    assert.strictEqual(resStr, 'export enum undefined {\n\tENUM_1,\n};\n\n');

    //5.没有enums.alias属性
    enums = [
      {
        name: 'TEST_ENUM',
        members: [
          'ENUM_1'
        ]
      }
    ];
    rootInfo = {
      parseObj: {
        enums: enums,
        unions: [],
        structs: [],
        classes: [],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    }
    resStr = genDts.getDtsEnum(rootInfo);
    assert.strictEqual(resStr, 'export enum TEST_ENUM {\n\tENUM_1,\n};\n\n');

    //6.enums的name为空，alias不为空
    enums = [
      {
        name: '',
        alias: 'OperationType',
        members: [
          'ENUM_1'
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
    assert.strictEqual(resStr, 'export enum  {\n\tENUM_1,\n};\n\n');
  });

  //4, 测试错误情况
  test('getDtsEnum_test_4', () => {
    //1.传入null
    let res = true;
    try {
      genDts.getDtsEnum(null);
    } catch (error) {
      res = false;
    }
    assert.strictEqual(res, false);
    
    //2.传入undefined
    let res2 = true;
    try {
      genDts.getDtsEnum(undefined);
    } catch (error) {
      res2 = false;
    }
    assert.strictEqual(res2, false);

    //3.enums中的members不存在
    let enums: EnumObj[] = [
      {
        name: 'TEST_ENUM',
        alias: ''
      }
    ];
    let rootInfo: GenInfo = {
      parseObj: {
        enums: enums,
        unions: [],
        structs: [],
        classes: [],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    }
    let res3 = true;
    try {
      genDts.getDtsEnum(rootInfo);
    } catch (error) {
      res3 = false;
    }
    assert.strictEqual(res3, false);

    //4.没有parseObj.enums属性
    rootInfo = {
      parseObj: {
        unions: [],
        structs: [],
        classes: [],
        funcs: [],
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    }
    let res4 = true;
    try {
      genDts.getDtsEnum(rootInfo);
    } catch (error) {
      res4 = false;
    }
    assert.strictEqual(res4, false);
  });
})