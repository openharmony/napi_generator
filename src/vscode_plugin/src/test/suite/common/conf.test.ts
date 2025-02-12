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
import { 
  getGenerateConf,
  getLogPath,getLogName
} from '../../../common/conf';

// import * as myExtension from '../../extension';

suite('Common_Conf_Test_Suite', () => {
    vscode.window.showInformationMessage('Start all tests.');

    //1, 测试getGenerateConf
    test('getGenerateConf_test_1', () => {
      let genType = getGenerateConf();
      assert.strictEqual(genType, 1);
    });

    //1, 测试getLogPath
    test('getLogPath_test_1', () => {
      let logPath = getLogPath();
      assert.strictEqual(logPath, './');
    });

    //1, 测试getLogName
    test('getLogName_test_1', () => {
      let logName = getLogName();
      assert.strictEqual(logName, 'dmesg.log');
    });

});
