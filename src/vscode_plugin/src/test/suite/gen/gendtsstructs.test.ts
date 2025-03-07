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

suite('Gendts_structs_Suite', () => {
  //1, 测试一般情况
  test('getDtsStructs_test_1', () => {
    //用例1.正常情况,没有alias
    let structs: StructObj[] = [
      {
        name: 'StructObj',
        alias: '',
        members: [
          {
            type: 'string',
            name: 'name',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'int',
            name: 'age',
            arraySize: -1,
            arraySizeList: []
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
                arraySizeList: []
              },
            ],
          },
        ],
      },
    ]

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
    assert.strictEqual(resStr, 'export type StructObj = {\n\tname: string;'
      + '\n\tage: number;\n\tfuncTest(v: number): boolean;\n};\n\n');
  
    //用例2.正常情况,有alias，且alias不等于name
    let structs2: StructObj[] = [
      {
        name: 'StructObj',
        alias: 'Alias',
        members: [
          {
            type: 'string',
            name: 'name',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'int',
            name: 'age',
            arraySize: -1,
            arraySizeList: []
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
                arraySizeList: []
              },
            ],
          },
        ],
      },
    ]

    let rootInfo2 = {
      parseObj: {
        enums: [],
        unions: [],
        structs: structs2,
        classes: [],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };

    resStr = genDts.getDtsStructs(rootInfo2);
    assert.strictEqual(resStr, 'export type StructObj = {\n\tname: string;'
      + '\n\tage: number;\n\tfuncTest(v: number): boolean;\n};\n\n'
      + 'export type Alias = StructObj;\n\n');

    //用例3.正常情况,有alias，且alias等于name
    let structs3: StructObj[] = [
      {
        name: 'StructObj',
        alias: 'StructObj',
        members: [
          {
            type: 'string',
            name: 'name',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'int',
            name: 'age',
            arraySize: -1,
            arraySizeList: []
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
                arraySizeList: []
              },
            ],
          },
        ],
      },
    ]

    let rootInfo3 = {
      parseObj: {
        enums: [],
        unions: [],
        structs: structs3,
        classes: [],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };

    resStr = genDts.getDtsStructs(rootInfo3);
    assert.strictEqual(resStr, 'export type StructObj = {\n\tname: string;'
      + '\n\tage: number;\n\tfuncTest(v: number): boolean;\n};\n\n');

    //用例4.正常情况,一个member，多个parameters
    let structs4: StructObj[] = [
      {
        name: 'StructObj',
        alias: '',
        members: [
          {
            type: 'string',
            name: 'name',
            arraySize: -1,
            arraySizeList: []
          }
        ],
        functions: [
          {
            returns: 'bool',
            name: 'funcTest',
            type: '',
            parameters: [
              { type: 'string', name: 'a', arraySize: -1, arraySizeList: [] },
              { type: 'int', name: 'b', arraySize: -1, arraySizeList: [] },
              { type: 'bool', name: 'c', arraySize: -1, arraySizeList: [] }
            ],
          },
        ],
      },
    ]

    let rootInfo4 = {
      parseObj: {
        enums: [],
        unions: [],
        structs: structs4,
        classes: [],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };

    resStr = genDts.getDtsStructs(rootInfo4);
    assert.strictEqual(resStr, 'export type StructObj = {\n\tname: string;'
      + '\n\tfuncTest(a: string, b: number, c: boolean): boolean;\n};\n\n');

    //用例4.正常情况,多个member，多个parameters
    let structs5: StructObj[] = [
      {
        name: 'StructObj',
        alias: '',
        members: [
          {
            type: 'string',
            name: 'name',
            arraySize: -1,
            arraySizeList: []
          },
          {
            type: 'int',
            name: 'age',
            arraySize: -1,
            arraySizeList: []
          },
        ],
        functions: [
          {
            returns: 'bool',
            name: 'funcTest',
            type: '',
            parameters: [
              { type: 'string', name: 'aa', arraySize: -1, arraySizeList: [] },
              { type: 'int', name: 'bb', arraySize: -1, arraySizeList: [] },
              { type: 'bool', name: 'cc', arraySize: -1, arraySizeList: [] }
            ],
          },
        ],
      },
    ]

    let rootInfo5 = {
      parseObj: {
        enums: [],
        unions: [],
        structs: structs5,
        classes: [],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };

    resStr = genDts.getDtsStructs(rootInfo5);
    assert.strictEqual(resStr, 'export type StructObj = {\n\tname: string;'
      + '\n\tage: number;\n\tfuncTest(aa: string, bb: number, cc: boolean): boolean;\n};\n\n');

    //用例6.正常情况,一个member，一个parameters
    let structs6: StructObj[] = [
      {
        name: 'StructObj',
        alias: 'Alias',
        members: [
          {
            type: 'string',
            name: 'name',
            arraySize: -1,
            arraySizeList: []
          }
        ],
        functions: [
          {
            returns: 'bool',
            name: 'funcTest',
            type: '',
            parameters: [
              { type: 'string', name: 'aa', arraySize: -1, arraySizeList: [] },
            ],
          },
        ],
      },
    ]

    let rootInfo6 = {
      parseObj: {
        enums: [],
        unions: [],
        structs: structs6,
        classes: [],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };

    resStr = genDts.getDtsStructs(rootInfo6);
    assert.strictEqual(resStr, 'export type StructObj = {\n\tname: string;'
      + '\n\tfuncTest(aa: string): boolean;\n};\n\nexport type Alias = StructObj;\n\n');
    
  });

  //2, 测试边界情况
  test('getDtsStructs_test_2', () => {
    //用例1. structs为空
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

    //用例2.structs有成员，成员变量为空，成员方法不为空
    let structs2: StructObj[] =[{
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
            arraySizeList: [],
          },
        ],
      }],
    }]

    let rootInfo2 = {
      parseObj: {
        enums: [],
        unions: [],
        structs: structs2,
        classes: [],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };
    resStr = genDts.getDtsStructs(rootInfo2);
    assert.strictEqual(resStr, 'export type StructObj = {\n\tfuncTest(v: number): boolean;\n};\n\n');

    //用例3.structs有成员，成员变量不为空，成员方法为空
    let structs3: StructObj[] =[{
      name: 'StructObj',
      alias: '',
      members: [
        {
          type: 'string',
          name: 'name',
          arraySize: -1,
          arraySizeList: [],
        },
        {
          type: 'int',
          name: 'age',
          arraySize: -1,
          arraySizeList: [],
        },
      ],
      functions: []
    }]

    let rootInfo3 = {
      parseObj: {
        enums: [],
        unions: [],
        structs: structs3,
        classes: [],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };
    
    resStr = genDts.getDtsStructs(rootInfo3);
    assert.strictEqual(resStr, 'export type StructObj = {\n\tname: string;\n\tage: number;\n};\n\n');
  
    //用例4.structs有成员，成员变量为空，成员方法为空
    let structs4: StructObj[] =[{
      name: 'StructObj',
      alias: '',
      members: [],
      functions: []
    }]

    let rootInfo4 = {
      parseObj: {
        enums: [],
        unions: [],
        structs: structs4,
        classes: [],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };
    resStr = genDts.getDtsStructs(rootInfo4);
    assert.strictEqual(resStr, 'export type StructObj = {\n};\n\n');

    //用例5.structs有成员，成员变量不为空，成员方法不为空，params为空

    let structs5: StructObj[] =[{
      name: 'StructObj',
      alias: '',
      members: [
        {
          type: 'string',
          name: 'name',
          arraySize: -1,
          arraySizeList: [],
        }
      ],
      functions: []
    }]

    let rootInfo5 = {
      parseObj: {
        enums: [],
        unions: [],
        structs: structs5,
        classes: [],
        funcs: [{
          returns: 'bool',
          name: 'funcTest',
          type: '',
          parameters: [],
        }]
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };
    resStr = genDts.getDtsStructs(rootInfo5);
    assert.strictEqual(resStr, 'export type StructObj = {\n\tname: string;\n};\n\n');
  });

  //3, 测试异常情况
  test('getDtsStructs_test_3', () => {
    //用例1.parseObj 没有struct属性
    let rootInfo1: GenInfo = {
      parseObj: {
        enums: [],
        unions: [],
        classes: [],
        funcs: [],
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    }
    let res1 = true;
    try {
      genDts.getDtsStructs(rootInfo1);
    } catch (error) {
      res1 = false;
    }
    assert.strictEqual(res1, false);

    //用例2. struct没有function属性
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

    //用例3. struct没有members属性
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

    //用例4，function没有return属性
    let structs4: StructObj[] =[{
      name: 'StructObj',
      alias: '',
      members: [
        {
          type: 'string',
          name: 'name',
          arraySize: -1,
          arraySizeList: [],
        }
      ],
      functions: [{
        name: 'funcTest',
        type: 'string',
        parameters: [
          {
            type: 'size_t',
            name: 'v',
            arraySize: -1,
            arraySizeList: [],
          },
        ],
      }],
    }]
    let rootInfo4: GenInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: structs4,
        classes: [],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    }
    let res4 = true;
    try {
      genDts.getDtsStructs(rootInfo4);
    } catch (error) {
      res4 = false;
    }
    assert.strictEqual(res4, false);

    //用例5，function没有parameters属性
    let structs5: StructObj[] =[{
      name: 'StructObj',
      alias: '',
      members: [
        {
          type: 'string',
          name: 'name',
          arraySize: -1,
          arraySizeList: [],
        }
      ],
      functions: [{
        name: 'funcTest',
        returns: 'bool',
        type: 'string',
      }],
    }]
    let rootInfo5: GenInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: structs5,
        classes: [],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    }
    let res5 = true;
    try {
      genDts.getDtsStructs(rootInfo5);
    } catch (error) {
      res5 = false;
    }
    assert.strictEqual(res5, false);
  });

  //4, 测试错误情况
  test('getDtsStructs_test_4', () => {
    //1.传入null
    let res = true;
    try {
      genDts.getDtsStructs(null);
    } catch (error) {
      res = false;
    }
    assert.strictEqual(res, false);

    //2.传入undefined
    let res2 = true;
    try {
      genDts.getDtsStructs(undefined);
    } catch (error) {
      res2 = false;
    }
    assert.strictEqual(res2, false);

    //3.传入错误参数类型 普通字符串
    let res3 = true;
    try {
      genDts.getDtsStructs('invalid');
    } catch (error) {
      res3 = false;
    }
    assert.strictEqual(res3, false);


    //4. 传入错误参数类型 普通数字
    let res4 = true;
    try {
      genDts.getDtsStructs(123);
    } catch (error) {
      res4 = false;
    }
    assert.strictEqual(res4, false);

    //5. 传入错误参数类型 普通布尔值
    let res5 = true;
    try {
      genDts.getDtsStructs(true);
    } catch (error) {
      res5 = false;
    }
    assert.strictEqual(res5, false);

    // 6: 结构不完整的对象
    let res6 = true;
    try {
      genDts.getDtsStructs({} as GenInfo);
    } catch (error) {
      res6 = false;
    }
    assert.strictEqual(res6, false);
  });
})