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

suite('Gendts_classes_Suite', () => {
  //1, 测试一般情况
  test('getDtsClasses_test_1', () => {
    //用例1.classes中alias为空，其他正常
    let classes1: ClassObj[] = [
      {
        name: 'ClassObj',
        alias: '',
        variableList: [
          {
            type: 'double',
            name: 'val',
            arraySize: 0,
            arraySizeList: [],
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
                arraySize: 0,
                arraySizeList: [],
              },
            ],
          },
        ],
      },
    ];

    let rootInfo1: GenInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: classes1,
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };
    let resStr = genDts.getDtsClasses(rootInfo1);
    assert.strictEqual(resStr, 'export class ClassObj {\n\tval: number;\n\tclassFunc(v1: number): number;\n};\n\n');

    //用例2.classes中alias不为空，且alias不等于name，其他正常
    let classes2: ClassObj[] = [
      {
        name: 'ClassObj',
        alias: 'Alias',
        variableList: [
          {
            type: 'double',
            name: 'val',
            arraySize: 0,
            arraySizeList: [],
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
                arraySize: 0,
                arraySizeList: [],
              },
            ],
          },
        ],
      },
    ];

    let rootInfo2: GenInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: classes2,
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };
    resStr = genDts.getDtsClasses(rootInfo2);
    assert.strictEqual(resStr, 'export class ClassObj {\n\tval: number;\n\tclassFunc(v1: number): number;\n};\n\n'
      + 'export type Alias = ClassObj;\n\n');
  
    //用例3.classes中alias不为空，且alias等于name，其他正常 
    let Classes3:ClassObj[] = [
      {
        name: 'ClassObj',
        alias: 'ClassObj',
        variableList: [
          {
            type: 'double',
            name: 'val',
            arraySize: 0,
            arraySizeList: [],
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
                arraySize: 0,
                arraySizeList: [],
              },
            ],
          },
        ],
      },
    ];

    let rootInfo3: GenInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: Classes3,
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };
    resStr = genDts.getDtsClasses(rootInfo3);
    assert.strictEqual(resStr, 'export class ClassObj {\n\tval: number;\n\tclassFunc(v1: number): number;\n};\n\n'
      + 'export type ClassObj = ClassObj;\n\n');

    //用例4. 混合多个类和复杂参数
    let classes4: ClassObj[] = [
      {
        name: 'Vehicle',
        alias: 'Car',
        variableList: [
          { type: 'float', name: 'speed', arraySize: 0, arraySizeList: []},
          { type: 'bool', name: 'isRunning', arraySize: 0, arraySizeList: []}
        ],
        functionList: [
          {
            returns: 'void',
            name: 'start',
            type: '',
            parameters: [
              { type: 'int', name: 'keyType', arraySize: 0, arraySizeList: []},
              { type: 'string', name: 'authCode', arraySize: 0, arraySizeList: []},
              { type: 'bool', name: 'true' , arraySize: 0, arraySizeList: []},
            ]
          }
        ]
      },
      {
        name: 'Engine',
        alias: '',
        variableList: [],
        functionList: [
          {
            returns: 'double',
            name: 'getRPM',
            type: '',
            parameters: []
          }
        ]
      }
    ];
  
    let rootInfo4: GenInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: classes4,
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };
    resStr = genDts.getDtsClasses(rootInfo4);
    const expected = 
      'export class Vehicle {\n' +
      '\tspeed: number;\n' +
      '\tisRunning: boolean;\n' +
      '\tstart(keyType: number, authCode: string, true: boolean): void;\n' +
      '};\n\n' +
      'export type Car = Vehicle;\n\n' +
      'export class Engine {\n' +
      '\tgetRPM(): number;\n' +
      '};\n\n';
    assert.strictEqual(resStr, expected);

    //用例5. 测试多参数方法的情况
    let classes5: ClassObj[] = [
      {
        name: 'MultiParamClass',
        alias: 'MPCType',
        variableList: [],
        functionList: [{
          returns: 'float',
          name: 'calculate',
          type: '',
          parameters: [
            { type: 'int', name: 'x', arraySize: 0, arraySizeList: [] },
            { type: 'double', name: 'y', arraySize: 0, arraySizeList: [] } 
          ]
        }]
      }
    ];
  
    let rootInfo5: GenInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: classes5,
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test'
    };
  
    resStr = genDts.getDtsClasses(rootInfo5);
    assert.strictEqual(
      resStr,
      'export class MultiParamClass {\n\tcalculate(x: number, y: number): number;\n};\n\n' +  
      'export type MPCType = MultiParamClass;\n\n'
    );
    
    //用例6. 测试混合多个类的情况
    let classes6: ClassObj[] = [
      {
        name: 'ClassA',
        alias: 'AliasA',
        variableList: [{
          type: 'bool',
          name: 'flag',
          arraySize: 0,
          arraySizeList: []
        }],
        functionList: []
      },
      {
        name: 'ClassB',
        alias: '',
        variableList: [],
        functionList: [{
          returns: 'string',
          name: 'getName',
          type: '',
          parameters: []
        }]
      }
    ];
  
    let rootInfo6: GenInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: classes6,
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test'
    };
  
    resStr = genDts.getDtsClasses(rootInfo6);
    assert.strictEqual(
      resStr,
      'export class ClassA {\n\tflag: boolean;\n};\n\n' +
      'export type AliasA = ClassA;\n\n' +
      'export class ClassB {\n\tgetName(): string;\n};\n\n'
    );

    //用例7. 测试特殊类型转换（如布尔型）
    let classes7: ClassObj[] = [
      {
        name: 'SpecialTypes',
        alias: 'SType',
        variableList: [{
          type: 'bool',
          name: 'isValid',
          arraySize: 0,
          arraySizeList: []
        }],
        functionList: [{
          returns: 'char*',
          name: 'getChar',
          type: '',
          parameters: [{
            type: 'long',
            name: 'input',
            arraySize: 0,
            arraySizeList: []
          }]
        }]
      }
    ];
  
    let rootInfo7: GenInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: classes7,
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test'
    };
  
    resStr = genDts.getDtsClasses(rootInfo7);
    assert.strictEqual(
      resStr,
      'export class SpecialTypes {\n\tisValid: boolean;\n\tgetChar(input: number): string;\n};\n\n' +
      'export type SType = SpecialTypes;\n\n'
    );

    //用例8. 包含数组类型和复杂类型转换
    let classes8: ClassObj[] = [
      {
        name: 'DataContainer',
        alias: 'DC',
        variableList: [
          { type: 'array<int, 10>', name: 'scores', arraySize: 2, arraySizeList: [1,2] },
          { type: 'char*', name: 'buffer', arraySize: 2, arraySizeList: [1,2] }
        ],
        functionList: [{
          returns: 'void*',
          name: 'getData',
          type: '',
          parameters: [
            { type: 'size_t', name: 'length', arraySize: 2, arraySizeList: [1,2] },
            { type: 'bool', name: 'compress', arraySize: 2, arraySizeList: [1,2] }
          ]
        }]
      }
    ];

    let rootInfo8: GenInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: classes8,
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };

    resStr = genDts.getDtsClasses(rootInfo8);
    assert.strictEqual(
      resStr,
      'export class DataContainer {\n' +
      '\tscores: Array<number>;\n' +
      '\tbuffer: string;\n' +
      '\tgetData(length: number, compress: boolean): void;\n' +
      '};\n\n' +
      'export type DC = DataContainer;\n\n'
    );

    //用例9. 测试C++特殊类型转换
    let classes9: ClassObj[] = [{
      name: 'SpecialTypes',
      alias: '',
      variableList: [
        { type: 'unsigned int', name: 'count', arraySize: 0, arraySizeList: [] },
        { type: 'long long', name: 'bigNum', arraySize: 0, arraySizeList: [] }
      ],
      functionList: [{
        returns: 'size_t',
        name: 'getSize',
        type: '',
        parameters: [{
          type: 'uint8_t*',
          name: 'buffer',
          arraySize: 0,
          arraySizeList: []
        }]
      }]
    }];

    let rootInfo9: GenInfo = {
      parseObj: { 
        enums: [],
        unions: [],
        structs: [],
        classes: classes9,
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test'
    };

    assert.strictEqual(
      genDts.getDtsClasses(rootInfo9),
      'export class SpecialTypes {\n' +
      '\tcount: number;\n' +
      '\tbigNum: number;\n' +
      '\tgetSize(buffer: number): number;\n' +
      '};\n\n'
    );

    //用例10. 测试静态成员和方法
    let classes10: ClassObj[] = [{
      name: 'Utils',
      alias: '',
      variableList: [{
        type: 'const string',
        name: 'VERSION',
        arraySize: 0,
        arraySizeList: []
      }],
      functionList: [{
        returns: 'void',
        name: 'staticMethod',
        type: 'static',
        parameters: []
      }]
    }];

    let rootInfo10: GenInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: classes10,
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test'
    };

    assert.strictEqual(
      genDts.getDtsClasses(rootInfo10),
      'export class Utils {\n' +
      '\tVERSION: string;\n' +
      '\tstaticMethod(): void;\n' +
      '};\n\n'
    );

    //用例11. 测试模板类处理
    const classes11: ClassObj[] = [{
      name: 'Vector',
      alias: 'Vec',
      variableList: [{
        type: 'T*',
        name: 'data',
        arraySize: 0,
        arraySizeList: []
      }],
      functionList: [{
        returns: 'void',
        name: 'push',
        type: '',
        parameters: [{
          type: 'const T&',
          name: 'item',
          arraySize: 0,
          arraySizeList: []
        }]
      }]
    }];

    let rootInfo11: GenInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: classes11,
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test'
    };

    assert.strictEqual(
      genDts.getDtsClasses(rootInfo11),
      'export class Vector {\n' +
      '\tdata: any;\n' + // 假设泛型暂未处理，返回any类型
      '\tpush(item: any): void;\n' +
      '};\n\n' +
      'export type Vec = Vector;\n\n'
    );

    //用例12. 测试const成员变量
    const classes12: ClassObj[] = [{
      name: 'Constants',
      alias: '',
      variableList: [{
        type: 'const int',
        name: 'MAX_SIZE',
        arraySize: 0,
        arraySizeList: []
      }],
      functionList: []
    }];

    const rootInfo12: GenInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: classes12,
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test'
    };

    assert.strictEqual(
      genDts.getDtsClasses(rootInfo12),
      'export class Constants {\n' +
      '\tMAX_SIZE: number;\n' +
      '};\n\n'
    );

    //用例13. 测试嵌套类
    let classes13: ClassObj[] = [{
      name: 'Outer::Inner',
      alias: 'Nested',
      variableList: [{
        type: 'int',
        name: 'value',
        arraySize: 0,
        arraySizeList: []
      }],
      functionList: []
    }];

    let rootInfo13: GenInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: classes13,
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test'
    };

    assert.strictEqual(
      genDts.getDtsClasses(rootInfo13),
      'export class Outer::Inner {\n' +
      '\tvalue: number;\n' +
      '};\n\n' +
      'export type Nested = Outer::Inner;\n\n'
    );
  });

  //2, 测试边界情况
  test('getDtsClasses_test_2', () => {
    //用例1. class为空
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

    //用例2.class有成员，成员变量为空，成员方法不为空
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
                  assertSizeList: [],
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
    let resStr2 = genDts.getDtsClasses(rootInfo2);
    assert.strictEqual(resStr2, 'export class ClassObj {\n\tclassFunc(v1: number): number;\n};\n\n');

    //用例3.class有成员，成员变量不为空，成员方法为空
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
    let resStr3 = genDts.getDtsClasses(rootInfo3);
    assert.strictEqual(resStr3, 'export class ClassObj {\n\tval: number;\n};\n\n');

    //用例4. 特殊命名测试
    let rootInfo4 = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'Class$With$SpecialChars',
          alias: 'Alias_With_Underscore',
          variableList: [{
            type: 'string',
            name: 'data-url',
            arraySize: 0
          }],
          functionList: [{
            returns: 'void',
            name: 'delete',
            parameters: []
          }]
        }],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };
    let res4 = genDts.getDtsClasses(rootInfo4);
    assert.strictEqual(
      res4,
      'export class Class$With$SpecialChars {\n' +
      '\tdata-url: string;\n' +
      '\tdelete(): void;\n' +
      '};\n\n' +
      'export type Alias_With_Underscore = Class$With$SpecialChars;\n\n'
    );
  
    //用例5. 空参数列表测试
    let rootInfo5 = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'EmptyParams',
          alias: '',
          variableList: [],
          functionList: [{
            returns: 'void',
            name: 'noop',
            parameters: []
          }]
        }],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };
    let res5 = genDts.getDtsClasses(rootInfo5);
    assert.strictEqual(res5, 'export class EmptyParams {\n\tnoop(): void;\n};\n\n');

    //用例6. 参数缺少必要字段，缺少alias属性的情况
    let rootInfo6: GenInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'InvalidClass',
          // 缺少alias属性
          variableList: [{
            type: 'string',
            name: 'invalidVar',
            arraySize: 0,
            arraySizeList: []
          }],
          functionList: []
        }],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };
    resStr = genDts.getDtsClasses(rootInfo6);
    assert.strictEqual(resStr, 'export class InvalidClass {\n\tinvalidVar: string;\n};\n\n');

    //用例7. 测试空变量和空方法的类结构
    let classes7: ClassObj[] = [
      {
        name: 'EmptyClass',
        alias: 'EmptyAlias',
        variableList: [],
        functionList: []
      }
    ];

    let rootInfo7: GenInfo = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: classes7,
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test'
    };

    let resStr7 = genDts.getDtsClasses(rootInfo7);
    assert.strictEqual(
      resStr7,
      'export class EmptyClass {\n};\n\n' +
      'export type EmptyAlias = EmptyClass;\n\n'
    );

    //用例8. 超长标识符测试
    let longName = 'A'.repeat(500);
    let rootInfo8 = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: longName,
          alias: `${longName}_Alias`,
          variableList: [{
            type: 'int',
            name: 'value',
            arraySize: 0,
            arraySizeList: []
          }],
          functionList: []
        }],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };

    let resStr8 = genDts.getDtsClasses(rootInfo8);
    assert.match(
      resStr8,
      new RegExp(`export class ${longName} {\\n\\tvalue: number;\\n};\\n\\n`
        + `export type ${longName}_Alias = ${longName};`)
    );
  });

  //3, 测试异常情况
  test('getDtsClasses_test_3', () => {
    //用例1.parseObj 没有classs属性
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

    //用例2. class没有functionList属性
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
              arraySizeList: [],
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

    //用例3. class没有varableList属性
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

    //用例4. 参数缺少必要字段，缺少type字段
    let res4 = true;
    try {
      let rootInfo4: GenInfo = {
        parseObj: {
          enums: [],
          unions: [],
          structs: [],
          classes: [{
            name: 'InvalidClass',
            alias: '',
            variableList: [{
              // 缺少type字段
              name: 'invalidVar',
              arraySize: 0 ,
              arraySizeList: []
            }],
            functionList: []
          }],
          funcs: []
        },
        rawFilePath: 'e:\\test.h',
        fileName: 'test',
      };
      genDts.getDtsClasses(rootInfo4);
    } catch (error) {
      res4 = false;
    }
    assert.strictEqual(res4, false);

    //用例5. 无效的方法参数结构
    let res5 = true;
    const invalidParam = {
      parseObj: {
        enums: [],
        unions: [],
        structs: [],
        classes: [{
          name: 'InvalidParam',
          alias: '',
          functionList: [{
            returns: 'void',
            name: 'brokenMethod',
            parameters: [{ type: 'int' }] // 缺少name字段
          }]
        }],
        funcs: []
      },
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };

    let errorThrown = false;
    try {
      genDts.getDtsClasses(invalidParam as GenInfo);
    } catch (error) {
      res5 = false;
    }
    assert.strictEqual(res5, false);

    //用例6. 嵌套异常类型处理
    let res6 = true;
    const nestedError = {
      parseObj: {
        classes: [{
          name: 'NestedError',
          variableList: [{
            type: 'struct',  // 无效类型
            name: 'nested',
            arraySize: 0
          }]
        }]
      } as any,  // 强制类型绕过
      rawFilePath: 'e:\\test.h',
      fileName: 'test',
    };

    let nestedResult = '';
    try {
      nestedResult = genDts.getDtsClasses(nestedError);
    } catch (error) {
      res6 = false;
    }
    assert.strictEqual(res6, false);
  });

  //4, 测试错误情况
  test('getDtsClasses_test_4', () => {
    //用例1.传入错误参数类型 null
    let res = true;
    try {
      genDts.getDtsClasses(null);
    } catch (error) {
      res = false;
    }
    assert.strictEqual(res, false);

    //用例2.传入错误参数类型 undefined
    let res2 = true;
    try {
      genDts.getDtsClasses(undefined);
    } catch (error) {
      res2 = false;
    }
    assert.strictEqual(res2, false);

    //用例3.传入错误参数类型 普通字符串
    let res3 = true;
    try {
      genDts.getDtsClasses('abc');
    } catch (error) {
      res3 = false;
    }
    assert.strictEqual(res3, false);

    //用例4. 传入错误参数类型 普通数字
    let res4 = true;
    try {
      genDts.getDtsClasses(123);
    } catch (error) {
      res4 = false;
    }
    assert.strictEqual(res4, false);

    //用例5. 传入错误参数类型 普通布尔值
    let res5 = true;
    try {
      genDts.getDtsClasses(false);
    } catch (error) {
      res5 = false;
    }
    assert.strictEqual(res5, false);

    //用例6. 无效对象结构测试
    const invalidObj1 = {
      parseObj: {  // 缺少classes字段
        enums: [],
        unions: []
      }
    };
    let errorCount = 0;
    try {
      genDts.getDtsClasses(invalidObj1 as GenInfo);
    } catch {
      errorCount++;
    }
    assert.strictEqual(errorCount, 1);

    //用例7. 无效class成员测试
    const invalidObj2 = {
      parseObj: {
        classes: [null], // 包含null成员
        enums: [],
        unions: []
      }
    };
    errorCount = 0;
    try {
      genDts.getDtsClasses(invalidObj2 as GenInfo);
    } catch {
      errorCount++;
    }
    assert.strictEqual(errorCount, 1);

    //用例8. 循环引用测试
    const circularRef: any = { prop: {} };
    circularRef.prop.self = circularRef;
    errorCount = 0;
    try {
      genDts.getDtsClasses(circularRef);
    } catch {
      errorCount++;
    }
    assert.strictEqual(errorCount, 1);

    //用例9. 异常对象结构测试
    const malformedObjects = [
      { parseObj: { classes: [{ variableList: {} }]} }, // 无效变量列表类型
      { parseObj: { classes: [{ name: 12345 }]} },      // 数值型类名
      { parseObj: { classes: [{}]} }                // 空类定义
    ];
    errorCount = 0;
    malformedObjects.forEach(obj => {
      try {
        genDts.getDtsClasses(obj as GenInfo);
      } catch {
        errorCount++;
      }
    });
    assert.strictEqual(errorCount, 3);
  
    //用例10. 原型污染测试
    const pollutedObject = JSON.parse(`{
      "parseObj": {
        "classes": [{
          "name": "ProtoPolluted",
          "__proto__": { "polluted": true }
        }]
      }
    }`);
    errorCount = 0;
    try {
      genDts.getDtsClasses(pollutedObject);
    } catch {
      errorCount++;
    }
    assert.strictEqual(errorCount, 1);
  });
})