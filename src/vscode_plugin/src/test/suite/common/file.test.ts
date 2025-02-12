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
import * as files from '../../../common/file'
import { GEN_TYPE } from '../../../common/conf';
// import * as myExtension from '../../extension';

suite('Common_File_Test_Suite', () => {
    vscode.window.showInformationMessage('Start all tests.');

    //1, 测试一般情况
    test('saveFileSync_new_test_1', () => {
      let fPath = './testfile.txt';
      if (fs.existsSync(fPath)) {
        fs.unlinkSync(fPath);
      }
      files.Filer.getInstance().saveFileSync(fPath, 'test file');
      let isExist = fs.existsSync(fPath);
      assert.strictEqual(isExist, true);
      if (fs.existsSync(fPath)) {
        fs.unlinkSync(fPath);
      }
    });

    //2, 测试边界情况
    test('saveFileSync_new_test_2', () => {
        // 短文件名
        let fPath = './1.txt';
        let filer = files.Filer.getInstance();
        filer.saveFileSync(fPath, 'test file');
        let isExist = fs.existsSync(fPath);
        assert.strictEqual(isExist, true);
        // 长文件名
        fPath = './1';
        for (let i=0;i<100;i++) {
            fPath = './1' + i;
        }
        fPath = fPath + '.txt';
        filer.saveFileSync(fPath, 'test file');
        isExist = fs.existsSync(fPath);
        assert.strictEqual(isExist, true);
        // 中文文件名
        fPath = './测试中文.txt';
        filer.saveFileSync(fPath, 'test file');
        isExist = fs.existsSync(fPath);
        assert.strictEqual(isExist, true);
    });

    //3, 测试异常情况
    test('saveFileSync_new_test_3', () => {
			let resultStr = ''
			let fPath = './1.txt';
      let filer = files.Filer.getInstance();
			filer.saveFileSync(fPath, 'test file');
			let isExist = fs.existsSync(fPath);
			assert.strictEqual(isExist, true);
      let fcontent = fs.readFileSync(fPath);
      assert.strictEqual(fcontent.toString(), 'test file');
        
			filer.saveFileSync(fPath, 'test file');
			isExist = fs.existsSync(fPath);
			assert.strictEqual(isExist, true);
      fcontent = fs.readFileSync(fPath);
      assert.strictEqual(fcontent.toString(), 'test file');
    });

    //4, 测试错误情况
    test('saveFileSync_new_test_4', () => {
			let fPath = './';
      let filer = files.Filer.getInstance();
			try {
				filer.saveFileSync(fPath, 'test file');
			} catch (e) {
				let isError = true;
				assert.strictEqual(isError, true);
				let emsg = JSON.stringify(e);
        let isLike = emsg.includes('EISDIR');
				assert.strictEqual(isLike, true);
			}
    });

    //1, 测试一般情况
    test('saveFileSync_append_test_1', () => {
      files.Filer.getInstance().setGenType(GEN_TYPE.GEN_APPEND);
      let fPath = './testfile.txt';
      if (fs.existsSync(fPath)) {
        fs.unlinkSync(fPath);
      }
      
      let filer = files.Filer.getInstance();
      filer.saveFileSync(fPath, 'test file');
      let isExist = fs.existsSync(fPath);
      assert.strictEqual(isExist, true);
      let fcontent = fs.readFileSync(fPath);
      assert.strictEqual(fcontent.toString(), 'test file');

      filer.saveFileSync(fPath, 'test file');
      isExist = fs.existsSync(fPath);
      assert.strictEqual(isExist, true);
      fcontent = fs.readFileSync(fPath);
      assert.strictEqual(fcontent.toString(), 'test file'+'test file');
      if (fs.existsSync(fPath)) {
        fs.unlinkSync(fPath);
      }
    });

    //2, 测试边界情况
    test('saveFileSync_append_test_2', () => {
      // 短文件名
      let fPath = './1.txt';
      if (fs.existsSync(fPath)) {
        fs.unlinkSync(fPath);
      }
      let filer = files.Filer.getInstance();
      filer.saveFileSync(fPath, 'test file');
      let isExist = fs.existsSync(fPath);
      assert.strictEqual(isExist, true);
      filer.saveFileSync(fPath, fPath);
      let fcontent = fs.readFileSync(fPath);
      assert.strictEqual(fcontent.toString(), 'test file'+fPath);
      if (fs.existsSync(fPath)) {
        fs.unlinkSync(fPath);
      }
      
      // 长文件名
      fPath = './1';
      if (fs.existsSync(fPath)) {
        fs.unlinkSync(fPath);
      }
      for (let i=0;i<100;i++) {
          fPath = fPath + i;
      }
      fPath = fPath + '.txt';
      filer.saveFileSync(fPath, 'test file');
      isExist = fs.existsSync(fPath);
      assert.strictEqual(isExist, true);
      filer.saveFileSync(fPath, fPath);
      fcontent = fs.readFileSync(fPath);
      assert.strictEqual(fcontent.toString(), 'test file'+fPath);
      if (fs.existsSync(fPath)) {
        fs.unlinkSync(fPath);
      }


      // 中文文件名
      fPath = './测试中文.txt';
      if (fs.existsSync(fPath)) {
        fs.unlinkSync(fPath);
      }
      filer.saveFileSync(fPath, 'test file');
      isExist = fs.existsSync(fPath);
      assert.strictEqual(isExist, true);
      filer.saveFileSync(fPath, fPath);
      fcontent = fs.readFileSync(fPath);
      assert.strictEqual(fcontent.toString(), 'test file'+fPath);
      if (fs.existsSync(fPath)) {
        fs.unlinkSync(fPath);
      }
    });

    //3, 测试异常情况
    test('saveFileSync_append_test_3', () => {
			let fPath = './1.txt';
      if (fs.existsSync(fPath)) {
        fs.unlinkSync(fPath);
      }

      let filer = files.Filer.getInstance();
			filer.saveFileSync(fPath, 'test file');
			let isExist = fs.existsSync(fPath);
			assert.strictEqual(isExist, true);
      let fcontent = fs.readFileSync(fPath);
      assert.strictEqual(fcontent.toString(), 'test file');
    });

    //4, 测试错误情况
    test('saveFileSync_append_test_4', () => {
			let fPath = './';
      let filer = files.Filer.getInstance();
			try {
				filer.saveFileSync(fPath, 'test file');
			} catch (e) {
				let isError = true;
				assert.strictEqual(isError, true);
				let emsg = JSON.stringify(e);
        let isLike = emsg.includes('EISDIR');
				assert.strictEqual(isLike, true);
			}
    });
});
