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
          }
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
    assert.strictEqual(resStr, 'export type OperationType = string | number | number | number | number | number | number | number | void | string | string | number | number | number | number | number | number | number | void | string | number | number | number | number | number | number | void | string | number | number | number | number | number | number | number | number | boolean | Map<string, number> ;\n\n');
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
    assert.strictEqual(resStr, 'export type TEST_1 = number ;\n\nexport type TEST_2 = string ;\n\nexport type TEST_3 = number ;\n\nexport type TEST_4 = number ;\n\nexport type TEST_5 = number ;\n\nexport type TEST_6 = number ;\n\nexport type TEST_7 = number ;\n\nexport type TEST_8 = number ;\n\nexport type TEST_9 = string ;\n\nexport type TEST_10 = string ;\n\nexport type TEST_11 = string ;\n\nexport type TEST_12 = number ;\n\nexport type TEST_13 = number ;\n\nexport type TEST_14 = number ;\n\nexport type TEST_15 = number ;\n\nexport type TEST_16 = number ;\n\nexport type TEST_17 = number ;\n\nexport type TEST_18 = number ;\n\nexport type TEST_19 = string ;\n\nexport type TEST_20 = string ;\n\nexport type TEST_21 = number ;\n\nexport type TEST_22 = number ;\n\nexport type TEST_23 = number ;\n\nexport type TEST_24 = number ;\n\nexport type TEST_25 = number ;\n\nexport type TEST_26 = number ;\n\nexport type TEST_27 = string ;\n\nexport type TEST_28 = string ;\n\nexport type TEST_29 = number ;\n\nexport type TEST_30 = number ;\n\nexport type TEST_31 = number ;\n\nexport type TEST_32 = number ;\n\nexport type TEST_33 = number ;\n\nexport type TEST_34 = number ;\n\nexport type TEST_35 = number ;\n\nexport type TEST_36 = number ;\n\nexport type TEST_37 = boolean ;\n\n');
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
              name: 'str',
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
  });
})