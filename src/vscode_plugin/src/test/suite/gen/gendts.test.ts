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
    resStr = genDts.transTskey2Ckey('bool');
    assert.strictEqual(resStr, 'boolean');
    resStr = genDts.transTskey2Ckey('char');
    assert.strictEqual(resStr, 'string');
    resStr = genDts.transTskey2Ckey('string');
    assert.strictEqual(resStr, 'string');
  });

  //2, 测试边界情况
  test('transTskey2Ckey_test_2', () => {
    let resStr = genDts.transTskey2Ckey('std::string');
    assert.strictEqual(resStr, 'string');
    resStr = genDts.transTskey2Ckey('char *');
    assert.strictEqual(resStr, 'string');
    resStr = genDts.transTskey2Ckey('');
    assert.strictEqual(resStr, '');
    resStr = genDts.transTskey2Ckey('char   *');
    assert.strictEqual(resStr, resStr);
  });

  //3, 测试异常情况
  test('transTskey2Ckey_test_3', () => {
    let resStr = genDts.transTskey2Ckey('');
    assert.strictEqual(resStr, '');
    resStr = genDts.transTskey2Ckey('int$#');
    assert.strictEqual(resStr, 'number');
  });

  //4, 测试错误情况
  test('transTskey2Ckey_test_4', () => {
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
        },
        {
          type: 'double',
          name: 'v2',
          arraySize: -1,
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
  });

  // 2, 测试边界情况 
  test('getDtsUnions_test_2', () => {
    // unions是空
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
    let resStr = genDts.getDtsUnions(rootInfo);
    assert.strictEqual(resStr, '');
  });

  //3, 测试异常情况
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