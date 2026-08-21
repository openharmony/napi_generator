/*
* Copyright (c) 2026 Shenzhen Kaihong Digital Industry Development Co., Ltd.
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
import * as vscode from 'vscode';
import { transTskey2Ckey } from '../../../gen/gendts';
import * as parsec from '../../../parse/parsec';
import { runCompatSafe } from './stability_helpers';

suite('Stability_H2DTS_CONVERT_FUNC_Part03', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_CONVERT_FUNC_Part03.');


  test('h2dts_convert_func_0001', () => {
    try {
      const r = parsec.parseFunction(`void sample274(std::unique_ptr<unsigned long long> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0001 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0001 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0001 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0002', () => {
    try {
      const r = parsec.parseFunction(`std::unique_ptr<unsigned long long> sampleRet274();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0002 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0002 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0002 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0003', () => {
    try {
      const r = parsec.parseClass(`class SampleClass274 { public: std::unique_ptr<unsigned long long> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0003 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0003 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0003 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0004', () => {
    try {
      const r = parsec.parseFunction(`void pipeline274(std::unique_ptr<unsigned long long> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0004 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0004 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0004 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0005', () => {
    try {
      const result = transTskey2Ckey('std::unique_ptr<int *>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0005 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0005 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0005 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0006', () => {
    try {
      const r = parsec.parseFunction(`void sample275(std::unique_ptr<int *> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0006 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0006 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0006 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0007', () => {
    try {
      const r = parsec.parseFunction(`std::unique_ptr<int *> sampleRet275();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0007 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0007 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0007 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0008', () => {
    try {
      const r = parsec.parseClass(`class SampleClass275 { public: std::unique_ptr<int *> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0008 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0008 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0008 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0009', () => {
    try {
      const r = parsec.parseFunction(`void pipeline275(std::unique_ptr<int *> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0009 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0009 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0009 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0010', () => {
    try {
      const result = transTskey2Ckey('std::shared_ptr<std::string>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0010 convert output non-empty");
      assert.strictEqual(result, "string", "h2dts_convert_func_0010 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0010 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0011', () => {
    try {
      const r = parsec.parseFunction(`void sample276(std::shared_ptr<std::string> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0011 param convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0011 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0011 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0012', () => {
    try {
      const r = parsec.parseFunction(`std::shared_ptr<std::string> sampleRet276();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0012 return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0012 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0012 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0013', () => {
    try {
      const r = parsec.parseClass(`class SampleClass276 { public: std::shared_ptr<std::string> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0013 class field convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0013 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0013 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0014', () => {
    try {
      const r = parsec.parseFunction(`void pipeline276(std::shared_ptr<std::string> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0014 pipeline convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0014 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0014 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0015', () => {
    try {
      const result = transTskey2Ckey('std::shared_ptr<char *>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0015 convert output non-empty");
      assert.strictEqual(result, "string", "h2dts_convert_func_0015 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0015 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0016', () => {
    try {
      const r = parsec.parseFunction(`void sample277(std::shared_ptr<char *> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0016 param convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0016 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0016 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0017', () => {
    try {
      const r = parsec.parseFunction(`std::shared_ptr<char *> sampleRet277();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0017 return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0017 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0017 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0018', () => {
    try {
      const r = parsec.parseClass(`class SampleClass277 { public: std::shared_ptr<char *> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0018 class field convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0018 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0018 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0019', () => {
    try {
      const r = parsec.parseFunction(`void pipeline277(std::shared_ptr<char *> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0019 pipeline convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0019 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0019 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0020', () => {
    try {
      const result = transTskey2Ckey('std::shared_ptr<long long>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0020 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0020 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0020 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0021', () => {
    try {
      const r = parsec.parseFunction(`void sample278(std::shared_ptr<long long> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0021 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0021 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0021 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0022', () => {
    try {
      const r = parsec.parseFunction(`std::shared_ptr<long long> sampleRet278();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0022 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0022 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0022 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0023', () => {
    try {
      const r = parsec.parseClass(`class SampleClass278 { public: std::shared_ptr<long long> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0023 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0023 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0023 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0024', () => {
    try {
      const r = parsec.parseFunction(`void pipeline278(std::shared_ptr<long long> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0024 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0024 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0024 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0025', () => {
    try {
      const result = transTskey2Ckey('std::shared_ptr<unsigned short>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0025 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0025 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0025 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0026', () => {
    try {
      const r = parsec.parseFunction(`void sample279(std::shared_ptr<unsigned short> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0026 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0026 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0026 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0027', () => {
    try {
      const r = parsec.parseFunction(`std::shared_ptr<unsigned short> sampleRet279();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0027 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0027 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0027 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0028', () => {
    try {
      const r = parsec.parseClass(`class SampleClass279 { public: std::shared_ptr<unsigned short> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0028 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0028 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0028 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0029', () => {
    try {
      const r = parsec.parseFunction(`void pipeline279(std::shared_ptr<unsigned short> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0029 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0029 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0029 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0030', () => {
    try {
      const result = transTskey2Ckey('std::shared_ptr<unsigned long>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0030 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0030 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0030 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0031', () => {
    try {
      const r = parsec.parseFunction(`void sample280(std::shared_ptr<unsigned long> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0031 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0031 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0031 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0032', () => {
    try {
      const r = parsec.parseFunction(`std::shared_ptr<unsigned long> sampleRet280();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0032 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0032 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0032 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0033', () => {
    try {
      const r = parsec.parseClass(`class SampleClass280 { public: std::shared_ptr<unsigned long> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0033 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0033 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0033 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0034', () => {
    try {
      const r = parsec.parseFunction(`void pipeline280(std::shared_ptr<unsigned long> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0034 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0034 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0034 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0035', () => {
    try {
      const result = transTskey2Ckey('std::shared_ptr<unsigned long long>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0035 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0035 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0035 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0036', () => {
    try {
      const r = parsec.parseFunction(`void sample281(std::shared_ptr<unsigned long long> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0036 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0036 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0036 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0037', () => {
    try {
      const r = parsec.parseFunction(`std::shared_ptr<unsigned long long> sampleRet281();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0037 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0037 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0037 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0038', () => {
    try {
      const r = parsec.parseClass(`class SampleClass281 { public: std::shared_ptr<unsigned long long> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0038 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0038 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0038 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0039', () => {
    try {
      const r = parsec.parseFunction(`void pipeline281(std::shared_ptr<unsigned long long> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0039 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0039 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0039 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0040', () => {
    try {
      const result = transTskey2Ckey('std::shared_ptr<int *>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0040 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0040 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0040 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0041', () => {
    try {
      const r = parsec.parseFunction(`void sample282(std::shared_ptr<int *> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0041 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0041 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0041 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0042', () => {
    try {
      const r = parsec.parseFunction(`std::shared_ptr<int *> sampleRet282();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0042 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0042 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0042 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0043', () => {
    try {
      const r = parsec.parseClass(`class SampleClass282 { public: std::shared_ptr<int *> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0043 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0043 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0043 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0044', () => {
    try {
      const r = parsec.parseFunction(`void pipeline282(std::shared_ptr<int *> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0044 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0044 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0044 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0045', () => {
    try {
      const result = transTskey2Ckey('std::function<any(any)>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0045 convert output non-empty");
      assert.strictEqual(result, "(param0: any)=>any", "h2dts_convert_func_0045 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0045 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0046', () => {
    try {
      const r = parsec.parseFunction(`void sample304(std::function<any(any)> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0046 param convert output non-empty");
      assert.strictEqual(converted, "(param0: any)=>any", "h2dts_convert_func_0046 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0046 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0047', () => {
    try {
      const r = parsec.parseFunction(`std::function<any(any)> sampleRet304();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0047 return convert output non-empty");
      assert.strictEqual(converted, "(param0: any)=>any", "h2dts_convert_func_0047 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0047 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0048', () => {
    try {
      const r = parsec.parseClass(`class SampleClass304 { public: std::function<any(any)> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0048 class field convert output non-empty");
      assert.strictEqual(converted, "(param0: any)=>any", "h2dts_convert_func_0048 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0048 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0049', () => {
    try {
      const r = parsec.parseFunction(`void pipeline304(std::function<any(any)> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0049 pipeline convert output non-empty");
      assert.strictEqual(converted, "(param0: any)=>any", "h2dts_convert_func_0049 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0049 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0050', () => {
    try {
      const result = transTskey2Ckey('std::function<object(object)>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0050 convert output non-empty");
      assert.strictEqual(result, "(param0: any)=>any", "h2dts_convert_func_0050 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0050 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0051', () => {
    try {
      const r = parsec.parseFunction(`void sample305(std::function<object(object)> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0051 param convert output non-empty");
      assert.strictEqual(converted, "(param0: any)=>any", "h2dts_convert_func_0051 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0051 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0052', () => {
    try {
      const r = parsec.parseFunction(`std::function<object(object)> sampleRet305();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0052 return convert output non-empty");
      assert.strictEqual(converted, "(param0: any)=>any", "h2dts_convert_func_0052 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0052 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0053', () => {
    try {
      const r = parsec.parseClass(`class SampleClass305 { public: std::function<object(object)> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0053 class field convert output non-empty");
      assert.strictEqual(converted, "(param0: any)=>any", "h2dts_convert_func_0053 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0053 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0054', () => {
    try {
      const r = parsec.parseFunction(`void pipeline305(std::function<object(object)> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0054 pipeline convert output non-empty");
      assert.strictEqual(converted, "(param0: any)=>any", "h2dts_convert_func_0054 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0054 execution error: ${String(err)}`);
    }
  });
});
