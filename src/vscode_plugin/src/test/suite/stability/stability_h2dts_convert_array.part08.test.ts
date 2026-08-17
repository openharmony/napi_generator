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
import { transTskey2Ckey } from '../../../../gen/gendts';
import * as parsec from '../../../../parse/parsec';
import { runCompatSafe } from './stability_helpers';

suite('Stability_H2DTS_CONVERT_ARRAY_Part08', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_CONVERT_ARRAY_Part08.');


  test('h2dts_convert_array_0001', () => {
    try {
      const r = parsec.parseClass(`class SampleClass467 { public: std::queue<int32_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0001 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0001 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0001 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0002', () => {
    try {
      const r = parsec.parseFunction(`void pipeline467(std::queue<int32_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0002 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0002 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0002 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0003', () => {
    try {
      const result = transTskey2Ckey('std::queue<int64_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0003 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0003 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0003 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0004', () => {
    try {
      const r = parsec.parseFunction(`void sample468(std::queue<int64_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0004 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0004 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0004 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0005', () => {
    try {
      const r = parsec.parseFunction(`std::queue<int64_t> sampleRet468();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0005 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0005 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0005 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0006', () => {
    try {
      const r = parsec.parseClass(`class SampleClass468 { public: std::queue<int64_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0006 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0006 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0006 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0007', () => {
    try {
      const r = parsec.parseFunction(`void pipeline468(std::queue<int64_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0007 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0007 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0007 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0008', () => {
    try {
      const result = transTskey2Ckey('std::queue<unsigned>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0008 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0008 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0008 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0009', () => {
    try {
      const r = parsec.parseFunction(`void sample469(std::queue<unsigned> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0009 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0009 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0009 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0010', () => {
    try {
      const r = parsec.parseFunction(`std::queue<unsigned> sampleRet469();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0010 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0010 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0010 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0011', () => {
    try {
      const r = parsec.parseClass(`class SampleClass469 { public: std::queue<unsigned> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0011 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0011 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0011 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0012', () => {
    try {
      const r = parsec.parseFunction(`void pipeline469(std::queue<unsigned> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0012 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0012 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0012 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0013', () => {
    try {
      const result = transTskey2Ckey('std::queue<bool>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0013 convert output non-empty");
      assert.strictEqual(result, "Array<boolean>", "h2dts_convert_array_0013 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0013 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0014', () => {
    try {
      const r = parsec.parseFunction(`void sample470(std::queue<bool> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0014 param convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>", "h2dts_convert_array_0014 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0014 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0015', () => {
    try {
      const r = parsec.parseFunction(`std::queue<bool> sampleRet470();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0015 return convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>", "h2dts_convert_array_0015 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0015 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0016', () => {
    try {
      const r = parsec.parseClass(`class SampleClass470 { public: std::queue<bool> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0016 class field convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>", "h2dts_convert_array_0016 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0016 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0017', () => {
    try {
      const r = parsec.parseFunction(`void pipeline470(std::queue<bool> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0017 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>", "h2dts_convert_array_0017 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0017 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0018', () => {
    try {
      const result = transTskey2Ckey('std::queue<char>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0018 convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_array_0018 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0018 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0019', () => {
    try {
      const r = parsec.parseFunction(`void sample471(std::queue<char> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0019 param convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0019 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0019 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0020', () => {
    try {
      const r = parsec.parseFunction(`std::queue<char> sampleRet471();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0020 return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0020 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0020 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0021', () => {
    try {
      const r = parsec.parseClass(`class SampleClass471 { public: std::queue<char> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0021 class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0021 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0021 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0022', () => {
    try {
      const r = parsec.parseFunction(`void pipeline471(std::queue<char> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0022 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0022 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0022 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0023', () => {
    try {
      const result = transTskey2Ckey('std::queue<wchar_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0023 convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_array_0023 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0023 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0024', () => {
    try {
      const r = parsec.parseFunction(`void sample472(std::queue<wchar_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0024 param convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0024 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0024 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0025', () => {
    try {
      const r = parsec.parseFunction(`std::queue<wchar_t> sampleRet472();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0025 return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0025 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0025 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0026', () => {
    try {
      const r = parsec.parseClass(`class SampleClass472 { public: std::queue<wchar_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0026 class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0026 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0026 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0027', () => {
    try {
      const r = parsec.parseFunction(`void pipeline472(std::queue<wchar_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0027 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0027 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0027 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0028', () => {
    try {
      const result = transTskey2Ckey('std::queue<char8_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0028 convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_array_0028 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0028 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0029', () => {
    try {
      const r = parsec.parseFunction(`void sample473(std::queue<char8_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0029 param convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0029 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0029 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0030', () => {
    try {
      const r = parsec.parseFunction(`std::queue<char8_t> sampleRet473();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0030 return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0030 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0030 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0031', () => {
    try {
      const r = parsec.parseClass(`class SampleClass473 { public: std::queue<char8_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0031 class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0031 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0031 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0032', () => {
    try {
      const r = parsec.parseFunction(`void pipeline473(std::queue<char8_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0032 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0032 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0032 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0033', () => {
    try {
      const result = transTskey2Ckey('std::queue<char16_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0033 convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_array_0033 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0033 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0034', () => {
    try {
      const r = parsec.parseFunction(`void sample474(std::queue<char16_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0034 param convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0034 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0034 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0035', () => {
    try {
      const r = parsec.parseFunction(`std::queue<char16_t> sampleRet474();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0035 return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0035 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0035 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0036', () => {
    try {
      const r = parsec.parseClass(`class SampleClass474 { public: std::queue<char16_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0036 class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0036 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0036 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0037', () => {
    try {
      const r = parsec.parseFunction(`void pipeline474(std::queue<char16_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0037 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0037 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0037 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0038', () => {
    try {
      const result = transTskey2Ckey('std::queue<char32_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0038 convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_array_0038 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0038 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0039', () => {
    try {
      const r = parsec.parseFunction(`void sample475(std::queue<char32_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0039 param convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0039 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0039 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0040', () => {
    try {
      const r = parsec.parseFunction(`std::queue<char32_t> sampleRet475();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0040 return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0040 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0040 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0041', () => {
    try {
      const r = parsec.parseClass(`class SampleClass475 { public: std::queue<char32_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0041 class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0041 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0041 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0042', () => {
    try {
      const r = parsec.parseFunction(`void pipeline475(std::queue<char32_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0042 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0042 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0042 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0043', () => {
    try {
      const result = transTskey2Ckey('std::priority_queue<int>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0043 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0043 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0043 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0044', () => {
    try {
      const r = parsec.parseFunction(`void sample518(std::priority_queue<int> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0044 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0044 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0044 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0045', () => {
    try {
      const r = parsec.parseFunction(`std::priority_queue<int> sampleRet518();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0045 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0045 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0045 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0046', () => {
    try {
      const r = parsec.parseClass(`class SampleClass518 { public: std::priority_queue<int> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0046 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0046 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0046 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0047', () => {
    try {
      const r = parsec.parseFunction(`void pipeline518(std::priority_queue<int> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0047 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0047 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0047 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0048', () => {
    try {
      const result = transTskey2Ckey('std::priority_queue<size_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0048 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0048 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0048 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0049', () => {
    try {
      const r = parsec.parseFunction(`void sample519(std::priority_queue<size_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0049 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0049 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0049 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0050', () => {
    try {
      const r = parsec.parseFunction(`std::priority_queue<size_t> sampleRet519();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0050 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0050 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0050 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0051', () => {
    try {
      const r = parsec.parseClass(`class SampleClass519 { public: std::priority_queue<size_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0051 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0051 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0051 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0052', () => {
    try {
      const r = parsec.parseFunction(`void pipeline519(std::priority_queue<size_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0052 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0052 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0052 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0053', () => {
    try {
      const result = transTskey2Ckey('std::priority_queue<double>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0053 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0053 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0053 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0054', () => {
    try {
      const r = parsec.parseFunction(`void sample520(std::priority_queue<double> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0054 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0054 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0054 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0055', () => {
    try {
      const r = parsec.parseFunction(`std::priority_queue<double> sampleRet520();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0055 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0055 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0055 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0056', () => {
    try {
      const r = parsec.parseClass(`class SampleClass520 { public: std::priority_queue<double> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0056 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0056 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0056 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0057', () => {
    try {
      const r = parsec.parseFunction(`void pipeline520(std::priority_queue<double> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0057 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0057 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0057 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0058', () => {
    try {
      const result = transTskey2Ckey('std::priority_queue<float>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0058 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0058 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0058 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0059', () => {
    try {
      const r = parsec.parseFunction(`void sample521(std::priority_queue<float> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0059 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0059 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0059 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0060', () => {
    try {
      const r = parsec.parseFunction(`std::priority_queue<float> sampleRet521();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0060 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0060 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0060 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0061', () => {
    try {
      const r = parsec.parseClass(`class SampleClass521 { public: std::priority_queue<float> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0061 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0061 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0061 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0062', () => {
    try {
      const r = parsec.parseFunction(`void pipeline521(std::priority_queue<float> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0062 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0062 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0062 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0063', () => {
    try {
      const result = transTskey2Ckey('std::priority_queue<long>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0063 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0063 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0063 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0064', () => {
    try {
      const r = parsec.parseFunction(`void sample522(std::priority_queue<long> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0064 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0064 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0064 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0065', () => {
    try {
      const r = parsec.parseFunction(`std::priority_queue<long> sampleRet522();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0065 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0065 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0065 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0066', () => {
    try {
      const r = parsec.parseClass(`class SampleClass522 { public: std::priority_queue<long> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0066 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0066 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0066 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0067', () => {
    try {
      const r = parsec.parseFunction(`void pipeline522(std::priority_queue<long> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0067 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0067 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0067 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0068', () => {
    try {
      const result = transTskey2Ckey('std::priority_queue<short>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0068 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0068 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0068 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0069', () => {
    try {
      const r = parsec.parseFunction(`void sample523(std::priority_queue<short> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0069 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0069 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0069 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0070', () => {
    try {
      const r = parsec.parseFunction(`std::priority_queue<short> sampleRet523();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0070 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0070 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0070 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0071', () => {
    try {
      const r = parsec.parseClass(`class SampleClass523 { public: std::priority_queue<short> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0071 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0071 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0071 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0072', () => {
    try {
      const r = parsec.parseFunction(`void pipeline523(std::priority_queue<short> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0072 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0072 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0072 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0073', () => {
    try {
      const result = transTskey2Ckey('std::priority_queue<uint8_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0073 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0073 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0073 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0074', () => {
    try {
      const r = parsec.parseFunction(`void sample524(std::priority_queue<uint8_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0074 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0074 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0074 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0075', () => {
    try {
      const r = parsec.parseFunction(`std::priority_queue<uint8_t> sampleRet524();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0075 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0075 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0075 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0076', () => {
    try {
      const r = parsec.parseClass(`class SampleClass524 { public: std::priority_queue<uint8_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0076 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0076 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0076 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0077', () => {
    try {
      const r = parsec.parseFunction(`void pipeline524(std::priority_queue<uint8_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0077 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0077 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0077 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0078', () => {
    try {
      const result = transTskey2Ckey('std::priority_queue<uint16_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0078 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0078 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0078 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0079', () => {
    try {
      const r = parsec.parseFunction(`void sample525(std::priority_queue<uint16_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0079 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0079 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0079 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0080', () => {
    try {
      const r = parsec.parseFunction(`std::priority_queue<uint16_t> sampleRet525();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0080 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0080 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0080 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0081', () => {
    try {
      const r = parsec.parseClass(`class SampleClass525 { public: std::priority_queue<uint16_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0081 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0081 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0081 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0082', () => {
    try {
      const r = parsec.parseFunction(`void pipeline525(std::priority_queue<uint16_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0082 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0082 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0082 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0083', () => {
    try {
      const result = transTskey2Ckey('std::priority_queue<uint32_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0083 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0083 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0083 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0084', () => {
    try {
      const r = parsec.parseFunction(`void sample526(std::priority_queue<uint32_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0084 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0084 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0084 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0085', () => {
    try {
      const r = parsec.parseFunction(`std::priority_queue<uint32_t> sampleRet526();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0085 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0085 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0085 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0086', () => {
    try {
      const r = parsec.parseClass(`class SampleClass526 { public: std::priority_queue<uint32_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0086 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0086 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0086 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0087', () => {
    try {
      const r = parsec.parseFunction(`void pipeline526(std::priority_queue<uint32_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0087 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0087 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0087 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0088', () => {
    try {
      const result = transTskey2Ckey('std::priority_queue<uint64_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0088 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0088 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0088 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0089', () => {
    try {
      const r = parsec.parseFunction(`void sample527(std::priority_queue<uint64_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0089 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0089 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0089 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0090', () => {
    try {
      const r = parsec.parseFunction(`std::priority_queue<uint64_t> sampleRet527();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0090 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0090 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0090 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0091', () => {
    try {
      const r = parsec.parseClass(`class SampleClass527 { public: std::priority_queue<uint64_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0091 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0091 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0091 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0092', () => {
    try {
      const r = parsec.parseFunction(`void pipeline527(std::priority_queue<uint64_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0092 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0092 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0092 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0093', () => {
    try {
      const result = transTskey2Ckey('std::priority_queue<int8_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0093 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0093 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0093 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0094', () => {
    try {
      const r = parsec.parseFunction(`void sample528(std::priority_queue<int8_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0094 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0094 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0094 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0095', () => {
    try {
      const r = parsec.parseFunction(`std::priority_queue<int8_t> sampleRet528();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0095 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0095 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0095 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0096', () => {
    try {
      const r = parsec.parseClass(`class SampleClass528 { public: std::priority_queue<int8_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0096 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0096 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0096 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0097', () => {
    try {
      const r = parsec.parseFunction(`void pipeline528(std::priority_queue<int8_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0097 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0097 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0097 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0098', () => {
    try {
      const result = transTskey2Ckey('std::priority_queue<int16_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0098 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0098 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0098 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0099', () => {
    try {
      const r = parsec.parseFunction(`void sample529(std::priority_queue<int16_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0099 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0099 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0099 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0100', () => {
    try {
      const r = parsec.parseFunction(`std::priority_queue<int16_t> sampleRet529();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0100 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0100 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0100 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0101', () => {
    try {
      const r = parsec.parseClass(`class SampleClass529 { public: std::priority_queue<int16_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0101 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0101 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0101 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0102', () => {
    try {
      const r = parsec.parseFunction(`void pipeline529(std::priority_queue<int16_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0102 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0102 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0102 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0103', () => {
    try {
      const result = transTskey2Ckey('std::priority_queue<int32_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0103 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0103 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0103 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0104', () => {
    try {
      const r = parsec.parseFunction(`void sample530(std::priority_queue<int32_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0104 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0104 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0104 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0105', () => {
    try {
      const r = parsec.parseFunction(`std::priority_queue<int32_t> sampleRet530();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0105 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0105 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0105 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0106', () => {
    try {
      const r = parsec.parseClass(`class SampleClass530 { public: std::priority_queue<int32_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0106 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0106 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0106 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0107', () => {
    try {
      const r = parsec.parseFunction(`void pipeline530(std::priority_queue<int32_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0107 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0107 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0107 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0108', () => {
    try {
      const result = transTskey2Ckey('std::priority_queue<int64_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0108 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0108 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0108 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0109', () => {
    try {
      const r = parsec.parseFunction(`void sample531(std::priority_queue<int64_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0109 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0109 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0109 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0110', () => {
    try {
      const r = parsec.parseFunction(`std::priority_queue<int64_t> sampleRet531();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0110 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0110 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0110 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0111', () => {
    try {
      const r = parsec.parseClass(`class SampleClass531 { public: std::priority_queue<int64_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0111 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0111 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0111 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0112', () => {
    try {
      const r = parsec.parseFunction(`void pipeline531(std::priority_queue<int64_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0112 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0112 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0112 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0113', () => {
    try {
      const result = transTskey2Ckey('std::priority_queue<unsigned>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0113 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0113 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0113 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0114', () => {
    try {
      const r = parsec.parseFunction(`void sample532(std::priority_queue<unsigned> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0114 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0114 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0114 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0115', () => {
    try {
      const r = parsec.parseFunction(`std::priority_queue<unsigned> sampleRet532();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0115 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0115 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0115 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0116', () => {
    try {
      const r = parsec.parseClass(`class SampleClass532 { public: std::priority_queue<unsigned> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0116 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0116 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0116 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0117', () => {
    try {
      const r = parsec.parseFunction(`void pipeline532(std::priority_queue<unsigned> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0117 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0117 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0117 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0118', () => {
    try {
      const result = transTskey2Ckey('std::priority_queue<bool>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0118 convert output non-empty");
      assert.strictEqual(result, "Array<boolean>", "h2dts_convert_array_0118 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0118 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0119', () => {
    try {
      const r = parsec.parseFunction(`void sample533(std::priority_queue<bool> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0119 param convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>", "h2dts_convert_array_0119 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0119 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0120', () => {
    try {
      const r = parsec.parseFunction(`std::priority_queue<bool> sampleRet533();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0120 return convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>", "h2dts_convert_array_0120 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0120 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0121', () => {
    try {
      const r = parsec.parseClass(`class SampleClass533 { public: std::priority_queue<bool> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0121 class field convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>", "h2dts_convert_array_0121 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0121 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0122', () => {
    try {
      const r = parsec.parseFunction(`void pipeline533(std::priority_queue<bool> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0122 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>", "h2dts_convert_array_0122 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0122 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0123', () => {
    try {
      const result = transTskey2Ckey('std::priority_queue<char>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0123 convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_array_0123 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0123 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0124', () => {
    try {
      const r = parsec.parseFunction(`void sample534(std::priority_queue<char> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0124 param convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0124 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0124 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0125', () => {
    try {
      const r = parsec.parseFunction(`std::priority_queue<char> sampleRet534();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0125 return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0125 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0125 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0126', () => {
    try {
      const r = parsec.parseClass(`class SampleClass534 { public: std::priority_queue<char> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0126 class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0126 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0126 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0127', () => {
    try {
      const r = parsec.parseFunction(`void pipeline534(std::priority_queue<char> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0127 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0127 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0127 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0128', () => {
    try {
      const result = transTskey2Ckey('std::priority_queue<wchar_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0128 convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_array_0128 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0128 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0129', () => {
    try {
      const r = parsec.parseFunction(`void sample535(std::priority_queue<wchar_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0129 param convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0129 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0129 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0130', () => {
    try {
      const r = parsec.parseFunction(`std::priority_queue<wchar_t> sampleRet535();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0130 return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0130 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0130 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0131', () => {
    try {
      const r = parsec.parseClass(`class SampleClass535 { public: std::priority_queue<wchar_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0131 class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0131 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0131 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0132', () => {
    try {
      const r = parsec.parseFunction(`void pipeline535(std::priority_queue<wchar_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0132 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0132 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0132 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0133', () => {
    try {
      const result = transTskey2Ckey('std::priority_queue<char8_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0133 convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_array_0133 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0133 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0134', () => {
    try {
      const r = parsec.parseFunction(`void sample536(std::priority_queue<char8_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0134 param convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0134 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0134 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0135', () => {
    try {
      const r = parsec.parseFunction(`std::priority_queue<char8_t> sampleRet536();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0135 return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0135 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0135 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0136', () => {
    try {
      const r = parsec.parseClass(`class SampleClass536 { public: std::priority_queue<char8_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0136 class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0136 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0136 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0137', () => {
    try {
      const r = parsec.parseFunction(`void pipeline536(std::priority_queue<char8_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0137 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0137 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0137 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0138', () => {
    try {
      const result = transTskey2Ckey('std::priority_queue<char16_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0138 convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_array_0138 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0138 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0139', () => {
    try {
      const r = parsec.parseFunction(`void sample537(std::priority_queue<char16_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0139 param convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0139 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0139 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0140', () => {
    try {
      const r = parsec.parseFunction(`std::priority_queue<char16_t> sampleRet537();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0140 return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0140 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0140 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0141', () => {
    try {
      const r = parsec.parseClass(`class SampleClass537 { public: std::priority_queue<char16_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0141 class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0141 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0141 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0142', () => {
    try {
      const r = parsec.parseFunction(`void pipeline537(std::priority_queue<char16_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0142 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0142 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0142 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0143', () => {
    try {
      const result = transTskey2Ckey('std::priority_queue<char32_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0143 convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_array_0143 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0143 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0144', () => {
    try {
      const r = parsec.parseFunction(`void sample538(std::priority_queue<char32_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0144 param convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0144 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0144 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0145', () => {
    try {
      const r = parsec.parseFunction(`std::priority_queue<char32_t> sampleRet538();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0145 return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0145 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0145 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0146', () => {
    try {
      const r = parsec.parseClass(`class SampleClass538 { public: std::priority_queue<char32_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0146 class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0146 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0146 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0147', () => {
    try {
      const r = parsec.parseFunction(`void pipeline538(std::priority_queue<char32_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0147 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0147 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0147 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0148', () => {
    try {
      const result = transTskey2Ckey('std::array<int,4>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0148 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0148 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0148 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0149', () => {
    try {
      const r = parsec.parseFunction(`void sample633(std::array<int,4> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0149 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0149 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0149 execution error: ${String(err)}`);
    }
  });
});
