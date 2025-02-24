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
    assert.strictEqual(resStr, 'export enum EnumObj {\n\tENUM_ONE,\n\tENUM_TWO,\n};\n\nexport type OperationType = EnumObj;\n\n');
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
    assert.strictEqual(resStr, 'export enum EnumObj {\n\t摇粒绒,\n\t1 + 1 > 2,\n\t0817 deadline,\n\tmoon,\n\tflower,\n\tlight,\n\tball_796,\n\tpurple,\n\twhite,\n\tcute,\n\tpuppy,\n\tjiashi假使,\n\tcity_walk,\n\tteeee_eeeet,\n\tcloth,\n\tdog_A_cat,\n\textension,\n\tOpenHarmony,\n\tTs,\n\tnext_year,\n\tgreen park,\n\triver,\n\tstd::string,\n\tstd::array<int, 10>,\n\tbear,\n\tolder,\n\thouse,\n\tla77LA66,\n\tENUM_ONE,\n\t123,\n\tENUM_TWO=2,\n\tbool,\n\tCHAR,\n\tstring,\n\t开源鸿蒙,\n\t哈萨克,\n\tげっこう,\n\thello world,\n\t3.68743969984233577,\n\t**^\t,\n};\n\n');
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
        name: 'tttype',
        alias: '',
        members:[
          'char'
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
        name: 'pikachu',
        alias: '',
        members: [
          'pikachu'
        ]
      },
      {
        name: '颜色',
        alias: '',
        members: [
          '红',
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
        name: 'uptr',
        alias: '',
        members: [
          'unsigned void*'
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
        name: 'ptr',
        alias: '',
        members: [
          'signed void*'
        ]
      },
      {
        name: 'fruit1',
        alias: '',
        members: [
          'apple'
        ]
      },
      {
        name: 'fruit2',
        alias: '',
        members: [
          'orange'
        ]
      },
      {
        name: 'fruit3',
        alias: '',
        members: [
          'banana'
        ]
      },
      {
        name: 'fruit4',
        alias: '',
        members: [
          'pomelo'
        ]
      },
      {
        name: 'fruit5',
        alias: '',
        members: [
          'pear'
        ]
      },
      {
        name: 'fruit6',
        alias: '',
        members: [
          'peach'
        ]
      },
      {
        name: 'fruit7',
        alias: '',
        members: [
          'cherry'
        ]
      },
      {
        name: 'fruit8',
        alias: '',
        members: [
          'watermelon'
        ]
      },
      {
        name: 'fruit9',
        alias: '',
        members: [
          'strawberry'
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
    assert.strictEqual(resStr, 'export enum TEST_ENUM {\n\tENUM_1 = 1,\n\tENUM_2 = 2,\n};\n\nexport enum EnumObj {\n\tenums,\n};\n\nexport enum tttype {\n\tchar,\n};\n\nexport enum 方向 {\n\t上,\n};\n\nexport enum pikachu {\n\tpikachu,\n};\n\nexport enum 颜色 {\n\t红,\n};\n\nexport enum どうぶつえん {\n\tしまうま,\n};\n\nexport enum slen {\n\tshort,\n};\n\nexport enum width {\n\tfloat,\n};\n\nexport enum ullint {\n\tunsigned long long,\n};\n\nexport enum sllint {\n\tsigned long long,\n};\n\nexport enum llen {\n\tlong,\n};\n\nexport enum uld {\n\tunsigned long double,\n};\n\nexport enum uwidth {\n\tunsigned float,\n};\n\nexport enum sld {\n\tsigned long double,\n};\n\nexport enum sdlen {\n\tsigned double,\n};\n\nexport enum ch {\n\tchar,\n};\n\nexport enum len {\n\tint,\n};\n\nexport enum llint {\n\tlong long,\n};\n\nexport enum dlen {\n\tdouble,\n};\n\nexport enum ldlen {\n\tlong double,\n};\n\nexport enum uch {\n\tunsigned char,\n};\n\nexport enum ulen {\n\tint,\n};\n\nexport enum uslen {\n\tunsigned short,\n};\n\nexport enum ullen {\n\tunsigned long,\n};\n\nexport enum sllen {\n\tsigned long,\n};\n\nexport enum udlen {\n\tunsigned double,\n};\n\nexport enum uptr {\n\tunsigned void*,\n};\n\nexport enum bflag {\n\tbool,\n};\n\nexport enum ptr {\n\tsigned void*,\n};\n\nexport enum fruit1 {\n\tapple,\n};\n\nexport enum fruit2 {\n\torange,\n};\n\nexport enum fruit3 {\n\tbanana,\n};\n\nexport enum fruit4 {\n\tpomelo,\n};\n\nexport enum fruit5 {\n\tpear,\n};\n\nexport enum fruit6 {\n\tpeach,\n};\n\nexport enum fruit7 {\n\tcherry,\n};\n\nexport enum fruit8 {\n\twatermelon,\n};\n\nexport enum fruit9 {\n\tstrawberry,\n};\n\n');

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

    //5.alias不存在
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