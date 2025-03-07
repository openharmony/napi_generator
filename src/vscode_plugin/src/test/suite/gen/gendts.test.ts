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