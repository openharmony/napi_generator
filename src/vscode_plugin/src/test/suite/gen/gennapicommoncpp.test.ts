/*
* Copyright (c) 2025 Shenzhen Kaihong Digital Industry Development Co., Ltd.
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
import * as genNapiCommonCpp from '../../../gen/tools/gennapicommoncpp'
import { GenInfo, ParseObj } from '../../../gen/datatype';
import * as path from 'path';
import { napiCommonCppTemplate } from '../../../template/dtscpp/dtscpp_commoncpp_template';

suite('Gennapicommoncpp_file_Suite', () => {
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
            arraySizeList: [],
          }
        ],
      },
    ],
  }
  let hFilePath = path.join(__dirname, '../../../test/test.h');

  //1, 测试一般情况
  test('genNapiCommonCppFile_test_1', () => {
    let rootInfo: GenInfo = {
      parseObj: parseObj,
      rawFilePath: hFilePath,
      fileName: 'test',
    }
    let fileContent = genNapiCommonCpp.doGenCommonCppFile(rootInfo, napiCommonCppTemplate.content);
    // 判断有没有替换成功，那么直接判断那个替换的字符串是否在fileContent中,若没有，则成功，若有，则失败
    assert.strictEqual(fileContent.indexOf('[fileName]') >= 0? 0: -1, -1);
  });

  //2, 测试边界情况
  test('genNapiCommonCppFile_test_2', () => {
    let rootInfo: GenInfo = {
      parseObj: parseObj,
      rawFilePath: hFilePath,
      fileName: '',
    }
    let fileContent = genNapiCommonCpp.doGenCommonCppFile(rootInfo, napiCommonCppTemplate.content);
    assert.strictEqual(fileContent.indexOf('[fileName]') >= 0? 0: -1, -1);
  });

  //3, 测试异常情况
  test('genNapiCommonCppFile_test_3', () => {
    let rootInfo: GenInfo = {
      parseObj: parseObj,
      rawFilePath: hFilePath,
      fileName: undefined
    }
    let fileContent = genNapiCommonCpp.doGenCommonCppFile(rootInfo, napiCommonCppTemplate.content);
    assert.strictEqual(fileContent.indexOf('[fileName]') >= 0? 0: -1, 0);

  });

  //4, 测试错误情况
  test('genNapiCommonCppFile_test_4', () => {
    let fileContent = genNapiCommonCpp.doGenCommonCppFile(undefined, napiCommonCppTemplate.content);
    assert.strictEqual(fileContent.indexOf('[fileName]') >= 0? 0: -1, 0);

    let fileContent2 = genNapiCommonCpp.doGenCommonCppFile(null, napiCommonCppTemplate.content);
    assert.strictEqual(fileContent2.indexOf('[fileName]') >= 0? 0: -1, 0);
  });
});