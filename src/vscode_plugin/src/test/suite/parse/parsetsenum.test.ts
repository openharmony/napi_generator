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
import * as parsec from '../../../parse/parsec';
import * as parsets from '../../../parse/parsets';
// import * as myExtension from '../../extension';

suite('Parse_Enum_TS_Suite', () => {
  vscode.window.showInformationMessage('Start all tests.');
  
  //1, 测试 parseEnum 一般情况
  test('parseEnum_ts_test_1', () => {
    let testenum = `enum Direction {
        Up,
        Down,
        Left,
        Right
    };`
    let enumObjList = parsets.doParseTs("test.ts", testenum);
    assert.strictEqual(enumObjList.enums.length, 1);
    let enumItem = enumObjList.enums[0];
    assert.strictEqual(enumItem.name, 'Direction');
    assert.strictEqual(enumItem.members.length, 4);
    assert.strictEqual(enumItem.members[0], 'Up');
    assert.strictEqual(enumItem.members[1], 'Down');
    assert.strictEqual(enumItem.members[2], 'Left');
    assert.strictEqual(enumItem.members[3], 'Right');

  });

  //2, 测试 parseEnum 注释情况
  test('parseEnum_ts_test_2', () => {
    let testenum = `enum Direction {
        Up,   // 上
        Down, // 下
        Left, // 左
        Right // 右
    };`
    let enumObjList = parsets.doParseTs("test.ts", testenum);
    assert.strictEqual(enumObjList.enums.length, 1);
    let enumItem = enumObjList.enums[0];
    assert.strictEqual(enumItem.name, 'Direction');
    assert.strictEqual(enumItem.members.length, 4);
    assert.strictEqual(enumItem.members[0], 'Up');
    assert.strictEqual(enumItem.members[1], 'Down');
    assert.strictEqual(enumItem.members[2], 'Left');
    assert.strictEqual(enumItem.members[3], 'Right');

  });

  //3, 测试 parseEnum 赋值情况
  test('parseEnum_ts_test_3', () => {
    let testenum = `enum Direction {
        Up = 1,   // 上
        Down, // 下
        Left, // 左
        Right // 右
    };`
    let enumObjList = parsets.doParseTs("test.ts", testenum);
    assert.strictEqual(enumObjList.enums.length, 1);
    let enumItem = enumObjList.enums[0];
    assert.strictEqual(enumItem.name, 'Direction');
    assert.strictEqual(enumItem.members.length, 4);
    assert.strictEqual(enumItem.values?.length, 1);
    assert.strictEqual(enumItem.members[0], 'Up');
    assert.strictEqual(enumItem.values[0], '1');
    assert.strictEqual(enumItem.members[1], 'Down');
    assert.strictEqual(enumItem.members[2], 'Left');
    assert.strictEqual(enumItem.members[3], 'Right');

  });

  //4, 测试 parseEnum 计算情况
  test('parseEnum_ts_test_4', () => {
    let testenum = `enum Direction {
        Up = 1 << 1,   // 上
        Down= 1 << 2, // 下
        Left= 1 << 3, // 左
        Right= 1 << 4 // 右
    };`
    let enumObjList = parsets.doParseTs("test.ts", testenum);
    assert.strictEqual(enumObjList.enums.length, 1);
    let enumItem = enumObjList.enums[0];
    assert.strictEqual(enumItem.name, 'Direction');
    assert.strictEqual(enumItem.members.length, 4);
    assert.strictEqual(enumItem.values?.length, 4);
    assert.strictEqual(enumItem.members[0], 'Up');
    assert.strictEqual(enumItem.values[0], '1 << 1');
    assert.strictEqual(enumItem.members[1], 'Down');
    assert.strictEqual(enumItem.values[1], '1 << 2');
    assert.strictEqual(enumItem.members[2], 'Left');
    assert.strictEqual(enumItem.values[2], '1 << 3');
    assert.strictEqual(enumItem.members[3], 'Right');
    assert.strictEqual(enumItem.values[3], '1 << 4');

  });

  //5, 测试 parseEnum const 情况
  test('parseEnum_ts_test_5', () => {
    let testenum = `const enum Direction {
        Up,
        Down,
        Left,
        Right
    };`
    let enumObjList = parsets.doParseTs("test.ts", testenum);
    assert.strictEqual(enumObjList.enums.length, 1);
    let enumItem = enumObjList.enums[0];
    assert.strictEqual(enumItem.name, 'Direction');
    assert.strictEqual(enumItem.members.length, 4);
    assert.strictEqual(enumItem.members[0], 'Up');
    assert.strictEqual(enumItem.members[1], 'Down');
    assert.strictEqual(enumItem.members[2], 'Left');
    assert.strictEqual(enumItem.members[3], 'Right');

  });

  //6, 测试 parseEnum 复杂情况
  test('parseEnum_ts_test_6', () => {
    let testenum = `const enum Direction {
      Active = (2 ** 3) & 0xFF,  // 原始文本："(2 ** 3) & 0xFF"
      Pending = Math.random()    // 无法计算值（computedValue=undefined）
    };`
    let enumObjList = parsets.doParseTs("test.ts", testenum);
    assert.strictEqual(enumObjList.enums.length, 1);
    let enumItem = enumObjList.enums[0];
    assert.strictEqual(enumItem.name, 'Direction');
    assert.strictEqual(enumItem.members.length, 2);
    assert.strictEqual(enumItem.values?.length, 2);
    assert.strictEqual(enumItem.members[0], 'Active');
    assert.strictEqual(enumItem.values[0], '(2 ** 3) & 0xFF');
    assert.strictEqual(enumItem.members[1], 'Pending');
    assert.strictEqual(enumItem.values[1], 'Math.random');

  });

  //7, 测试 parseEnum 字符对象情况
  test('parseEnum_ts_test_7', () => {
    let testenum = `const enum Direction {
      Active = "/api/v1",  // 原始文本："(2 ** 3) & 0xFF"
      Pending = 30 * 1000   // 无法计算值（computedValue=undefined）
    };`
    let enumObjList = parsets.doParseTs("test.ts", testenum);
    assert.strictEqual(enumObjList.enums.length, 1);
    let enumItem = enumObjList.enums[0];
    assert.strictEqual(enumItem.name, 'Direction');
    assert.strictEqual(enumItem.members.length, 2);
    assert.strictEqual(enumItem.values?.length, 2);
    assert.strictEqual(enumItem.members[0], 'Active');
    assert.strictEqual(enumItem.values[0], '"/api/v1"');
    assert.strictEqual(enumItem.members[1], 'Pending');
    assert.strictEqual(enumItem.values[1], '30 * 1000');

  });

  //8, 测试 parseEnum 联合枚举情况
  test('parseEnum_ts_test_8', () => {
    let testenum = `enum Direction {
        Up,
        Down,
        Left,
        Right,
        ALL = Up | Down
    };`
    let enumObjList = parsets.doParseTs("test.ts", testenum);
    assert.strictEqual(enumObjList.enums.length, 1);
    let enumItem = enumObjList.enums[0];
    assert.strictEqual(enumItem.name, 'Direction');
    assert.strictEqual(enumItem.members.length, 5);
    assert.strictEqual(enumItem.members[0], 'Up');
    assert.strictEqual(enumItem.members[1], 'Down');
    assert.strictEqual(enumItem.members[2], 'Left');
    assert.strictEqual(enumItem.members[3], 'Right');
    assert.strictEqual(enumItem.members[4], 'ALL');

    assert.strictEqual(enumItem.values?.length, 1);
    assert.strictEqual(enumItem.values[0], 'Up | Down');
  });

  //11, 测试 parseEnum 一般情况
  test('parseEnum_ts_test_11', () => {
    let testenum = `enum Direction { Up, Down, Left, Right };`
    let enumObjList = parsets.doParseTs("test.ts", testenum);
    assert.strictEqual(enumObjList.enums.length, 1);
    let enumItem = enumObjList.enums[0];
    assert.strictEqual(enumItem.name, 'Direction');
    assert.strictEqual(enumItem.members.length, 4);
    assert.strictEqual(enumItem.members[0], 'Up');
    assert.strictEqual(enumItem.members[1], 'Down');
    assert.strictEqual(enumItem.members[2], 'Left');
    assert.strictEqual(enumItem.members[3], 'Right');

  });

  //12, 测试 parseEnum 注释情况
  test('parseEnum_ts_test_12', () => {
    let testenum = `enum Direction { Up,   /* 上*/ Down, /* 下*/  Left, /* 左*/ Right /* 右*/};`
    let enumObjList = parsets.doParseTs("test.ts", testenum);
    assert.strictEqual(enumObjList.enums.length, 1);
    let enumItem = enumObjList.enums[0];
    assert.strictEqual(enumItem.name, 'Direction');
    assert.strictEqual(enumItem.members.length, 4);
    assert.strictEqual(enumItem.members[0], 'Up');
    assert.strictEqual(enumItem.members[1], 'Down');
    assert.strictEqual(enumItem.members[2], 'Left');
    assert.strictEqual(enumItem.members[3], 'Right');

  });

  //13, 测试 parseEnum 赋值情况
  test('parseEnum_ts_test_13', () => {
    let testenum = `enum Direction {Up = 1,   /* 上*/ Down, // 下
        Left, /* 左*/   Right /* 右*/ };`
    let enumObjList = parsets.doParseTs("test.ts", testenum);
    assert.strictEqual(enumObjList.enums.length, 1);
    let enumItem = enumObjList.enums[0];
    assert.strictEqual(enumItem.name, 'Direction');
    assert.strictEqual(enumItem.members.length, 4);
    assert.strictEqual(enumItem.values?.length, 1);
    assert.strictEqual(enumItem.members[0], 'Up');
    assert.strictEqual(enumItem.values[0], '1');
    assert.strictEqual(enumItem.members[1], 'Down');
    assert.strictEqual(enumItem.members[2], 'Left');
    assert.strictEqual(enumItem.members[3], 'Right');

  });

  //14, 测试 parseEnum 计算情况
  test('parseEnum_ts_test_14', () => {
    let testenum = `enum Direction { Up = 1 << 1,   /* 上*/ Down= 1 << 2, /* 下*/
        Left= 1 << 3, /* 左*/   Right= 1 << 4 /* 右*/
    };`
    let enumObjList = parsets.doParseTs("test.ts", testenum);
    assert.strictEqual(enumObjList.enums.length, 1);
    let enumItem = enumObjList.enums[0];
    assert.strictEqual(enumItem.name, 'Direction');
    assert.strictEqual(enumItem.members.length, 4);
    assert.strictEqual(enumItem.values?.length, 4);
    assert.strictEqual(enumItem.members[0], 'Up');
    assert.strictEqual(enumItem.values[0], '1 << 1');
    assert.strictEqual(enumItem.members[1], 'Down');
    assert.strictEqual(enumItem.values[1], '1 << 2');
    assert.strictEqual(enumItem.members[2], 'Left');
    assert.strictEqual(enumItem.values[2], '1 << 3');
    assert.strictEqual(enumItem.members[3], 'Right');
    assert.strictEqual(enumItem.values[3], '1 << 4');

  });

  //15, 测试 parseEnum const 情况
  test('parseEnum_ts_test_15', () => {
    let testenum = `const enum Direction { Up, Down, Left, Right };`
    let enumObjList = parsets.doParseTs("test.ts", testenum);
    assert.strictEqual(enumObjList.enums.length, 1);
    let enumItem = enumObjList.enums[0];
    assert.strictEqual(enumItem.name, 'Direction');
    assert.strictEqual(enumItem.members.length, 4);
    assert.strictEqual(enumItem.members[0], 'Up');
    assert.strictEqual(enumItem.members[1], 'Down');
    assert.strictEqual(enumItem.members[2], 'Left');
    assert.strictEqual(enumItem.members[3], 'Right');

  });

  //16, 测试 parseEnum 复杂情况
  test('parseEnum_ts_test_16', () => {
    let testenum = `const enum Direction { Active = (2 ** 3) & 0xFF,  /* 原始文本："(2 ** 3) & 0xFF"*/
      Pending = Math.random()    /* 无法计算值（computedValue=undefined）*/
    };`
    let enumObjList = parsets.doParseTs("test.ts", testenum);
    assert.strictEqual(enumObjList.enums.length, 1);
    let enumItem = enumObjList.enums[0];
    assert.strictEqual(enumItem.name, 'Direction');
    assert.strictEqual(enumItem.members.length, 2);
    assert.strictEqual(enumItem.values?.length, 2);
    assert.strictEqual(enumItem.members[0], 'Active');
    assert.strictEqual(enumItem.values[0], '(2 ** 3) & 0xFF');
    assert.strictEqual(enumItem.members[1], 'Pending');
    assert.strictEqual(enumItem.values[1], 'Math.random');

  });

  //17, 测试 parseEnum 字符对象情况
  test('parseEnum_ts_test_17', () => {
    let testenum = `const enum Direction { Active = "/api/v1",  /* 原始文本："(2 ** 3) & 0xFF"*/
      Pending = 30 * 1000   /* 无法计算值（computedValue=undefined）*/
    };`
    let enumObjList = parsets.doParseTs("test.ts", testenum);
    assert.strictEqual(enumObjList.enums.length, 1);
    let enumItem = enumObjList.enums[0];
    assert.strictEqual(enumItem.name, 'Direction');
    assert.strictEqual(enumItem.members.length, 2);
    assert.strictEqual(enumItem.values?.length, 2);
    assert.strictEqual(enumItem.members[0], 'Active');
    assert.strictEqual(enumItem.values[0], '"/api/v1"');
    assert.strictEqual(enumItem.members[1], 'Pending');
    assert.strictEqual(enumItem.values[1], '30 * 1000');

  });

  //18, 测试 parseEnum 联合枚举情况
  test('parseEnum_ts_test_18', () => {
    let testenum = `enum Direction {Up,Down,Left, Right, ALL = Up | Down };`
    let enumObjList = parsets.doParseTs("test.ts", testenum);
    assert.strictEqual(enumObjList.enums.length, 1);
    let enumItem = enumObjList.enums[0];
    assert.strictEqual(enumItem.name, 'Direction');
    assert.strictEqual(enumItem.members.length, 5);
    assert.strictEqual(enumItem.members[0], 'Up');
    assert.strictEqual(enumItem.members[1], 'Down');
    assert.strictEqual(enumItem.members[2], 'Left');
    assert.strictEqual(enumItem.members[3], 'Right');
    assert.strictEqual(enumItem.members[4], 'ALL');

    assert.strictEqual(enumItem.values?.length, 1);
    assert.strictEqual(enumItem.values[0], 'Up | Down');
  });

  //21, 测试 parseEnum 名字带下划线情况
  test('parseEnum_ts_test_21', () => {
    let testenum = `enum Direction_E {
        Up_0,
        Down_1,
        Left_2,
        Right_3
    };`
    let enumObjList = parsets.doParseTs("test.ts", testenum);
    assert.strictEqual(enumObjList.enums.length, 1);
    let enumItem = enumObjList.enums[0];
    assert.strictEqual(enumItem.name, 'Direction_E');
    assert.strictEqual(enumItem.members.length, 4);
    assert.strictEqual(enumItem.members[0], 'Up_0');
    assert.strictEqual(enumItem.members[1], 'Down_1');
    assert.strictEqual(enumItem.members[2], 'Left_2');
    assert.strictEqual(enumItem.members[3], 'Right_3');

  });

  //22, 测试 parseEnum export情况
  test('parseEnum_ts_test_22', () => {
    let testenum = `export enum Direction {
        Up,   // 上
        Down, // 下
        Left, // 左
        Right // 右
    };`
    let enumObjList = parsets.doParseTs("test.ts", testenum);
    assert.strictEqual(enumObjList.enums.length, 1);
    let enumItem = enumObjList.enums[0];
    assert.strictEqual(enumItem.name, 'Direction');
    assert.strictEqual(enumItem.members.length, 4);
    assert.strictEqual(enumItem.members[0], 'Up');
    assert.strictEqual(enumItem.members[1], 'Down');
    assert.strictEqual(enumItem.members[2], 'Left');
    assert.strictEqual(enumItem.members[3], 'Right');

  });

  //23, 测试 parseEnum 声明情况
  test('parseEnum_ts_test_23', () => {
    let testenum = `declare enum Direction {
        Up = 1,   // 上
        Down, // 下
        Left, // 左
        Right // 右
    };`
    let enumObjList = parsets.doParseTs("test.ts", testenum);
    assert.strictEqual(enumObjList.enums.length, 1);
    let enumItem = enumObjList.enums[0];
    assert.strictEqual(enumItem.name, 'Direction');
    assert.strictEqual(enumItem.members.length, 4);
    assert.strictEqual(enumItem.values?.length, 1);
    assert.strictEqual(enumItem.members[0], 'Up');
    assert.strictEqual(enumItem.values[0], '1');
    assert.strictEqual(enumItem.members[1], 'Down');
    assert.strictEqual(enumItem.members[2], 'Left');
    assert.strictEqual(enumItem.members[3], 'Right');

  });

  //24, 测试 parseEnum namespace 情况
  test('parseEnum_ts_test_24', () => {
    let testenum = `namespace testspace { export enum Direction {
        Up = 1 << 1,   // 上
        Down= 1 << 2, // 下
        Left= 1 << 3, // 左
        Right= 1 << 4 // 右
  }};`
    let enumObjList = parsets.doParseTs("test.ts", testenum);
    assert.strictEqual(enumObjList.enums.length, 1);
    let enumItem = enumObjList.enums[0];
    assert.strictEqual(enumItem.name, 'Direction');
    assert.strictEqual(enumItem.members.length, 4);
    assert.strictEqual(enumItem.values?.length, 4);
    assert.strictEqual(enumItem.members[0], 'Up');
    assert.strictEqual(enumItem.values[0], '1 << 1');
    assert.strictEqual(enumItem.members[1], 'Down');
    assert.strictEqual(enumItem.values[1], '1 << 2');
    assert.strictEqual(enumItem.members[2], 'Left');
    assert.strictEqual(enumItem.values[2], '1 << 3');
    assert.strictEqual(enumItem.members[3], 'Right');
    assert.strictEqual(enumItem.values[3], '1 << 4');

  });

  //25, 测试 parseEnum as 情况
  test('parseEnum_ts_test_25', () => {
    let testenum = `const enum Direction {
        Up,
        Down,
        Left as West,
        Right
    };`
    let enumObjList = parsets.doParseTs("test.ts", testenum);
    assert.strictEqual(enumObjList.enums.length, 1);
    let enumItem = enumObjList.enums[0];
    assert.strictEqual(enumItem.name, 'Direction');
    assert.strictEqual(enumItem.members.length, 6);
    assert.strictEqual(enumItem.members[0], 'Up');
    assert.strictEqual(enumItem.members[1], 'Down');
    assert.strictEqual(enumItem.members[2], 'Left');
    assert.strictEqual(enumItem.members[3], 'as');
    assert.strictEqual(enumItem.members[4], 'West');
    assert.strictEqual(enumItem.members[5], 'Right');
  });

  //26, 测试 parseEnum 装饰符情况
  test('parseEnum_ts_test_26', () => {
    let testenum = `const enum Direction {
      Active = (2 ** 3) & 0xFF,  // 原始文本："(2 ** 3) & 0xFF"
      Pending = @Mathrandom    // 无法计算值（computedValue=undefined）
    };`
    let enumObjList = parsets.doParseTs("test.ts", testenum);
    assert.strictEqual(enumObjList.enums.length, 1);
    let enumItem = enumObjList.enums[0];
    assert.strictEqual(enumItem.name, 'Direction');
    assert.strictEqual(enumItem.members.length, 2);
    assert.strictEqual(enumItem.values?.length, 2);
    assert.strictEqual(enumItem.members[0], 'Active');
    assert.strictEqual(enumItem.values[0], '(2 ** 3) & 0xFF');
    assert.strictEqual(enumItem.members[1], 'Pending');
    assert.strictEqual(enumItem.values[1], '');

  });

  //27, 测试 parseEnum 下划线名字情况
  test('parseEnum_ts_test_27', () => {
    let testenum = `const enum Direction {
      _Active = "/api/v1",  // 原始文本："(2 ** 3) & 0xFF"
      Pending = 30 * 1000   // 无法计算值（computedValue=undefined）
    };`
    let enumObjList = parsets.doParseTs("test.ts", testenum);
    assert.strictEqual(enumObjList.enums.length, 1);
    let enumItem = enumObjList.enums[0];
    assert.strictEqual(enumItem.name, 'Direction');
    assert.strictEqual(enumItem.members.length, 2);
    assert.strictEqual(enumItem.values?.length, 2);
    assert.strictEqual(enumItem.members[0], '_Active');
    assert.strictEqual(enumItem.values[0], '"/api/v1"');
    assert.strictEqual(enumItem.members[1], 'Pending');
    assert.strictEqual(enumItem.values[1], '30 * 1000');

  });

  //28, 测试 parseEnum 联合枚举情况
  test('parseEnum_ts_test_28', () => {
    let testenum = `enum {
        Up,
        Down,
        Left,
        Right,
        ALL = Up | Down
    };`
    let enumObjList = parsets.doParseTs("test.ts", testenum);
    assert.strictEqual(enumObjList.enums.length, 1);
    let enumItem = enumObjList.enums[0];
    // assert.strictEqual(enumItem.name, 'Direction');
    assert.strictEqual(enumItem.members.length, 5);
    assert.strictEqual(enumItem.members[0], 'Up');
    assert.strictEqual(enumItem.members[1], 'Down');
    assert.strictEqual(enumItem.members[2], 'Left');
    assert.strictEqual(enumItem.members[3], 'Right');
    assert.strictEqual(enumItem.members[4], 'ALL');

    assert.strictEqual(enumItem.values?.length, 1);
    assert.strictEqual(enumItem.values[0], 'Up | Down');
  });

  //31, 测试 parseEnum 类型错误空情况
  test('parseEnum_ts_test_31', () => {
    let testenum = `enum Direction {
    };`
    let enumObjList = parsets.doParseTs("test.ts", testenum);
    assert.strictEqual(enumObjList.enums.length, 1);
    let enumItem = enumObjList.enums[0];
    assert.strictEqual(enumItem.name, 'Direction');

  });

  //32, 测试 parseEnum 名称类型空情况
  test('parseEnum_ts_test_32', () => {
    let testenum = `enum {
    };`
    let enumObjList = parsets.doParseTs("test.ts", testenum);
    assert.strictEqual(enumObjList.enums.length, 1);
    let enumItem = enumObjList.enums[0];
    
  });

  //33, 测试 parseEnum 两个情况
  test('parseEnum_ts_test_33', () => {
    let testenum = `enum Direction { }; enum Direction2 { };`
    let enumObjList = parsets.doParseTs("test.ts", testenum);
    assert.strictEqual(enumObjList.enums.length, 2);
    let enumItem = enumObjList.enums[0];
    assert.strictEqual(enumItem.name, 'Direction');
    enumItem = enumObjList.enums[1];
    assert.strictEqual(enumItem.name, 'Direction2');

  });

  //34, 测试 parseEnum 计算情况
  test('parseEnum_ts_test_34', () => {
    let testenum = `/* enum Direction {
        Up = 1 << 1,   // 上
        Down= 1 << 2, // 下
        Left= 1 << 3, // 左
        Right= 1 << 4 // 右
    }; */`
    let enumObjList = parsets.doParseTs("test.ts", testenum);
    assert.strictEqual(enumObjList.enums.length, 0);
    

  });

  //35, 测试 parseEnum const 情况
  test('parseEnum_ts_test_35', () => {
    let testenum = `const enum Direction {
        Up = () => {},
        Down,
        Left,
        Right
    };`
    let enumObjList = parsets.doParseTs("test.ts", testenum);
    assert.strictEqual(enumObjList.enums.length, 1);
    let enumItem = enumObjList.enums[0];
    assert.strictEqual(enumItem.name, 'Direction');
    assert.strictEqual(enumItem.members.length, 4);
    assert.strictEqual(enumItem.members[0], 'Up');
    assert.strictEqual(enumItem.members[1], 'Down');
    assert.strictEqual(enumItem.members[2], 'Left');
    assert.strictEqual(enumItem.members[3], 'Right');

  });

  //36, 测试 parseEnum 复杂情况
  test('parseEnum_ts_test_36', () => {
    let testenum = `const enum Direction {
      Active = ,  // 原始文本："(2 ** 3) & 0xFF"
      Pending = Math.random()    // 无法计算值（computedValue=undefined）
    };`
    let enumObjList = parsets.doParseTs("test.ts", testenum);
    assert.strictEqual(enumObjList.enums.length, 1);
    let enumItem = enumObjList.enums[0];
    assert.strictEqual(enumItem.name, 'Direction');
    assert.strictEqual(enumItem.members.length, 2);
    assert.strictEqual(enumItem.values?.length, 2);
    assert.strictEqual(enumItem.members[0], 'Active');
    assert.strictEqual(enumItem.values[0], '');
    assert.strictEqual(enumItem.members[1], 'Pending');
    assert.strictEqual(enumItem.values[1], 'Math.random');

  });

  //37, 测试 parseEnum 字符对象情况
  test('parseEnum_ts_test_37', () => {
    let testenum = `const enum Direction {
      Active = ",  // 原始文本："(2 ** 3) & 0xFF"
      Pending = 30 * 1000   // 无法计算值（computedValue=undefined）
    };`
    let enumObjList = parsets.doParseTs("test.ts", testenum);
    assert.strictEqual(enumObjList.enums.length, 1);
    let enumItem = enumObjList.enums[0];
    assert.strictEqual(enumItem.name, 'Direction');
    assert.strictEqual(enumItem.members.length, 2);
    assert.strictEqual(enumItem.values?.length, 2);
    assert.strictEqual(enumItem.members[0], 'Active');
    assert.strictEqual(enumItem.values[0], '",  // 原始文本："(2 ** 3) & 0xFF');
    assert.strictEqual(enumItem.members[1], 'Pending');
    assert.strictEqual(enumItem.values[1], '30 * 1000');

  });

  //38, 测试 parseEnum 联合枚举情况
  test('parseEnum_ts_test_38', () => {
    let testenum = `enum Direction {
        Up,
        Down,
        Left,
        Right,
        ALL = Up | 
    };`
    let enumObjList = parsets.doParseTs("test.ts", testenum);
    assert.strictEqual(enumObjList.enums.length, 1);
    let enumItem = enumObjList.enums[0];
    assert.strictEqual(enumItem.name, 'Direction');
    assert.strictEqual(enumItem.members.length, 5);
    assert.strictEqual(enumItem.members[0], 'Up');
    assert.strictEqual(enumItem.members[1], 'Down');
    assert.strictEqual(enumItem.members[2], 'Left');
    assert.strictEqual(enumItem.members[3], 'Right');
    assert.strictEqual(enumItem.members[4], 'ALL');

    assert.strictEqual(enumItem.values?.length, 1);
    assert.strictEqual(enumItem.values[0], 'Up |');
  });
})