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
import * as fs from 'fs';
import * as path from 'path';
import * as logs from '../../../common/log'
// import * as myExtension from '../../extension';

suite('Common_Log_Test_Suite', () => {
    vscode.window.showInformationMessage('Start all tests.');
    //1, 测试debug一般情况
    test('debug_test_1', () => {
      let logger = logs.Logger.getInstance();
      logger.debug('test debug');
      let logFilePath = './dmesg.log';
      let isExist = fs.existsSync(logFilePath);
      assert.strictEqual(isExist, true);
      let fcontent = fs.readFileSync(logFilePath, 'utf-8');
      let isLike = fcontent.includes('test debug');
      assert.strictEqual(isLike, true);
      fs.unlinkSync(logFilePath);
    });

    //2, 测试debug一般边界情况
    test('debug_test_2', () => {
      let logger = logs.Logger.getInstance();
      logger.debug('test debug');
      let logFilePath = './dmesg.log';
      let isExist = fs.existsSync(logFilePath);
      assert.strictEqual(isExist, true);
      let fcontent = fs.readFileSync(logFilePath, 'utf-8');
      let isLike = fcontent.includes('test debug');
      assert.strictEqual(isLike, true);
      let flen = 1024;
      let fcont = 'fcont:';
      for (let i=0;i<flen;i++) {
        for (let j=0;j<flen;j++) {
          fcont = fcont + 't';
        }
      }
      logger.debug(fcont);
      let fstat = fs.statSync(logFilePath);
      let fsize = fstat.size;
      let fflag = (fsize > 1048000 && fsize < 1049000) ? true : false;
      assert.strictEqual(fflag, true);
      fs.unlinkSync(logFilePath);
    });

    //1, 测试info一般情况
    test('info_test_1', () => {
      let logger = logs.Logger.getInstance();
      logger.info('test info');
      let logFilePath = './dmesg.log';
      let isExist = fs.existsSync(logFilePath);
      assert.strictEqual(isExist, true);
      let fcontent = fs.readFileSync(logFilePath, 'utf-8');
      let isLike = fcontent.includes('test info');
      assert.strictEqual(isLike, true);
      fs.unlinkSync(logFilePath);
    });

    //2, 测试info边界情况
    test('info_test_2', () => {
      let logger = logs.Logger.getInstance();
      let logFilePath = './dmesg.log';
      let isExist = fs.existsSync(logFilePath);
      let flen = 1024;
      let fcont = 'fcont:';
      for (let i=0;i<flen;i++) {
        fcont = 'fcont:';
        for (let j=0;j<flen;j++) {
          fcont = fcont + 't';
        }
        logger.info(fcont);
      }
      
      let fstat = fs.statSync(logFilePath);
      let fsize = fstat.size;
      console.error('fsize: ', fsize);
      let fflag = (fsize > 1 && fsize < 1048000) ? true : false;
      assert.strictEqual(fflag, true);

      let dirList = fs.readdirSync('./', { withFileTypes: true });
      let isCurrent = false;
      for (const ditem of dirList) {
        if (ditem.isFile()) {
          if (ditem.name.includes('dmesg')) {
            if (ditem.name != 'dmesg.log') {
              const now = new Date().toISOString();
              let strlist = now.split('.');
              let strcont = strlist[0].replace(/[:.]/g, '-')
              isCurrent = ditem.name.includes(strcont);
              if (isCurrent) {
                break;
              }
            }
          }
        }
      }
      
      assert.strictEqual(isCurrent, true);
      fs.unlinkSync(logFilePath);
    });

    //1, 测试error一般情况
    test('error_test_1', () => {
      let logger = logs.Logger.getInstance();
      logger.error('test error');
      let logFilePath = './dmesg.log';
      let isExist = fs.existsSync(logFilePath);
      assert.strictEqual(isExist, true);
      let fcontent = fs.readFileSync(logFilePath, 'utf-8');
      let isLike = fcontent.includes('test error');
      assert.strictEqual(isLike, true);
      fs.unlinkSync(logFilePath);
    });

    //1, 测试warn一般情况
    test('warn_test_4', () => {
      let logger = logs.Logger.getInstance();
      logger.warn('test warn');
      let logFilePath = './dmesg.log';
      let isExist = fs.existsSync(logFilePath);
      assert.strictEqual(isExist, true);
      let fcontent = fs.readFileSync(logFilePath, 'utf-8');
      let isLike = fcontent.includes('test warn');
      assert.strictEqual(isLike, true);
      fs.unlinkSync(logFilePath);
    });

    test('file_test_last', () => {
      let dirList = fs.readdirSync('./', { withFileTypes: true });
      for (const ditem of dirList) {
        if (ditem.isFile()) {
          const { name, ext } = path.parse(ditem.name);
          if (name.includes('dmesg') && ext.includes('.log')) {
            fs.unlinkSync(ditem.name);
          }
        }
      }
    });
});
