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

suite('Stability_H2DTS_CONVERT_ARRAY_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_CONVERT_ARRAY_Part01.');


  test('h2dts_convert_array_0001', () => {
    try {
      const result = transTskey2Ckey('std::vector<int>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0001 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0001 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0001 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0002', () => {
    try {
      const r = parsec.parseFunction(`void sample21(std::vector<int> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0002 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0002 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0002 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0003', () => {
    try {
      const r = parsec.parseFunction(`std::vector<int> sampleRet21();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0003 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0003 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0003 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0004', () => {
    try {
      const r = parsec.parseClass(`class SampleClass21 { public: std::vector<int> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0004 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0004 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0004 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0005', () => {
    try {
      const r = parsec.parseFunction(`void pipeline21(std::vector<int> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0005 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0005 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0005 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0006', () => {
    try {
      const result = transTskey2Ckey('std::vector<size_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0006 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0006 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0006 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0007', () => {
    try {
      const r = parsec.parseFunction(`void sample22(std::vector<size_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0007 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0007 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0007 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0008', () => {
    try {
      const r = parsec.parseFunction(`std::vector<size_t> sampleRet22();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0008 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0008 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0008 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0009', () => {
    try {
      const r = parsec.parseClass(`class SampleClass22 { public: std::vector<size_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0009 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0009 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0009 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0010', () => {
    try {
      const r = parsec.parseFunction(`void pipeline22(std::vector<size_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0010 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0010 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0010 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0011', () => {
    try {
      const result = transTskey2Ckey('std::vector<double>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0011 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0011 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0011 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0012', () => {
    try {
      const r = parsec.parseFunction(`void sample23(std::vector<double> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0012 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0012 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0012 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0013', () => {
    try {
      const r = parsec.parseFunction(`std::vector<double> sampleRet23();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0013 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0013 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0013 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0014', () => {
    try {
      const r = parsec.parseClass(`class SampleClass23 { public: std::vector<double> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0014 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0014 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0014 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0015', () => {
    try {
      const r = parsec.parseFunction(`void pipeline23(std::vector<double> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0015 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0015 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0015 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0016', () => {
    try {
      const result = transTskey2Ckey('std::vector<float>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0016 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0016 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0016 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0017', () => {
    try {
      const r = parsec.parseFunction(`void sample24(std::vector<float> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0017 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0017 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0017 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0018', () => {
    try {
      const r = parsec.parseFunction(`std::vector<float> sampleRet24();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0018 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0018 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0018 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0019', () => {
    try {
      const r = parsec.parseClass(`class SampleClass24 { public: std::vector<float> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0019 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0019 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0019 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0020', () => {
    try {
      const r = parsec.parseFunction(`void pipeline24(std::vector<float> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0020 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0020 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0020 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0021', () => {
    try {
      const result = transTskey2Ckey('std::vector<long>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0021 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0021 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0021 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0022', () => {
    try {
      const r = parsec.parseFunction(`void sample25(std::vector<long> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0022 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0022 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0022 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0023', () => {
    try {
      const r = parsec.parseFunction(`std::vector<long> sampleRet25();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0023 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0023 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0023 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0024', () => {
    try {
      const r = parsec.parseClass(`class SampleClass25 { public: std::vector<long> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0024 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0024 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0024 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0025', () => {
    try {
      const r = parsec.parseFunction(`void pipeline25(std::vector<long> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0025 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0025 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0025 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0026', () => {
    try {
      const result = transTskey2Ckey('std::vector<short>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0026 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0026 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0026 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0027', () => {
    try {
      const r = parsec.parseFunction(`void sample26(std::vector<short> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0027 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0027 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0027 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0028', () => {
    try {
      const r = parsec.parseFunction(`std::vector<short> sampleRet26();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0028 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0028 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0028 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0029', () => {
    try {
      const r = parsec.parseClass(`class SampleClass26 { public: std::vector<short> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0029 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0029 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0029 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0030', () => {
    try {
      const r = parsec.parseFunction(`void pipeline26(std::vector<short> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0030 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0030 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0030 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0031', () => {
    try {
      const result = transTskey2Ckey('std::vector<uint8_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0031 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0031 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0031 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0032', () => {
    try {
      const r = parsec.parseFunction(`void sample27(std::vector<uint8_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0032 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0032 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0032 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0033', () => {
    try {
      const r = parsec.parseFunction(`std::vector<uint8_t> sampleRet27();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0033 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0033 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0033 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0034', () => {
    try {
      const r = parsec.parseClass(`class SampleClass27 { public: std::vector<uint8_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0034 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0034 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0034 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0035', () => {
    try {
      const r = parsec.parseFunction(`void pipeline27(std::vector<uint8_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0035 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0035 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0035 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0036', () => {
    try {
      const result = transTskey2Ckey('std::vector<uint16_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0036 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0036 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0036 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0037', () => {
    try {
      const r = parsec.parseFunction(`void sample28(std::vector<uint16_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0037 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0037 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0037 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0038', () => {
    try {
      const r = parsec.parseFunction(`std::vector<uint16_t> sampleRet28();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0038 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0038 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0038 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0039', () => {
    try {
      const r = parsec.parseClass(`class SampleClass28 { public: std::vector<uint16_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0039 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0039 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0039 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0040', () => {
    try {
      const r = parsec.parseFunction(`void pipeline28(std::vector<uint16_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0040 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0040 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0040 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0041', () => {
    try {
      const result = transTskey2Ckey('std::vector<uint32_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0041 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0041 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0041 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0042', () => {
    try {
      const r = parsec.parseFunction(`void sample29(std::vector<uint32_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0042 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0042 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0042 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0043', () => {
    try {
      const r = parsec.parseFunction(`std::vector<uint32_t> sampleRet29();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0043 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0043 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0043 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0044', () => {
    try {
      const r = parsec.parseClass(`class SampleClass29 { public: std::vector<uint32_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0044 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0044 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0044 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0045', () => {
    try {
      const r = parsec.parseFunction(`void pipeline29(std::vector<uint32_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0045 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0045 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0045 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0046', () => {
    try {
      const result = transTskey2Ckey('std::vector<uint64_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0046 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0046 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0046 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0047', () => {
    try {
      const r = parsec.parseFunction(`void sample30(std::vector<uint64_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0047 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0047 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0047 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0048', () => {
    try {
      const r = parsec.parseFunction(`std::vector<uint64_t> sampleRet30();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0048 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0048 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0048 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0049', () => {
    try {
      const r = parsec.parseClass(`class SampleClass30 { public: std::vector<uint64_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0049 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0049 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0049 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0050', () => {
    try {
      const r = parsec.parseFunction(`void pipeline30(std::vector<uint64_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0050 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0050 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0050 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0051', () => {
    try {
      const result = transTskey2Ckey('std::vector<int8_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0051 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0051 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0051 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0052', () => {
    try {
      const r = parsec.parseFunction(`void sample31(std::vector<int8_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0052 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0052 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0052 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0053', () => {
    try {
      const r = parsec.parseFunction(`std::vector<int8_t> sampleRet31();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0053 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0053 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0053 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0054', () => {
    try {
      const r = parsec.parseClass(`class SampleClass31 { public: std::vector<int8_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0054 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0054 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0054 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0055', () => {
    try {
      const r = parsec.parseFunction(`void pipeline31(std::vector<int8_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0055 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0055 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0055 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0056', () => {
    try {
      const result = transTskey2Ckey('std::vector<int16_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0056 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0056 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0056 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0057', () => {
    try {
      const r = parsec.parseFunction(`void sample32(std::vector<int16_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0057 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0057 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0057 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0058', () => {
    try {
      const r = parsec.parseFunction(`std::vector<int16_t> sampleRet32();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0058 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0058 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0058 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0059', () => {
    try {
      const r = parsec.parseClass(`class SampleClass32 { public: std::vector<int16_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0059 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0059 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0059 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0060', () => {
    try {
      const r = parsec.parseFunction(`void pipeline32(std::vector<int16_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0060 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0060 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0060 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0061', () => {
    try {
      const result = transTskey2Ckey('std::vector<int32_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0061 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0061 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0061 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0062', () => {
    try {
      const r = parsec.parseFunction(`void sample33(std::vector<int32_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0062 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0062 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0062 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0063', () => {
    try {
      const r = parsec.parseFunction(`std::vector<int32_t> sampleRet33();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0063 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0063 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0063 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0064', () => {
    try {
      const r = parsec.parseClass(`class SampleClass33 { public: std::vector<int32_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0064 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0064 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0064 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0065', () => {
    try {
      const r = parsec.parseFunction(`void pipeline33(std::vector<int32_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0065 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0065 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0065 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0066', () => {
    try {
      const result = transTskey2Ckey('std::vector<int64_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0066 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0066 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0066 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0067', () => {
    try {
      const r = parsec.parseFunction(`void sample34(std::vector<int64_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0067 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0067 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0067 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0068', () => {
    try {
      const r = parsec.parseFunction(`std::vector<int64_t> sampleRet34();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0068 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0068 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0068 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0069', () => {
    try {
      const r = parsec.parseClass(`class SampleClass34 { public: std::vector<int64_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0069 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0069 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0069 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0070', () => {
    try {
      const r = parsec.parseFunction(`void pipeline34(std::vector<int64_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0070 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0070 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0070 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0071', () => {
    try {
      const result = transTskey2Ckey('std::vector<unsigned>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0071 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0071 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0071 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0072', () => {
    try {
      const r = parsec.parseFunction(`void sample35(std::vector<unsigned> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0072 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0072 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0072 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0073', () => {
    try {
      const r = parsec.parseFunction(`std::vector<unsigned> sampleRet35();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0073 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0073 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0073 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0074', () => {
    try {
      const r = parsec.parseClass(`class SampleClass35 { public: std::vector<unsigned> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0074 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0074 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0074 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0075', () => {
    try {
      const r = parsec.parseFunction(`void pipeline35(std::vector<unsigned> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0075 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0075 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0075 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0076', () => {
    try {
      const result = transTskey2Ckey('std::vector<bool>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0076 convert output non-empty");
      assert.strictEqual(result, "Array<boolean>", "h2dts_convert_array_0076 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0076 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0077', () => {
    try {
      const r = parsec.parseFunction(`void sample36(std::vector<bool> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0077 param convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>", "h2dts_convert_array_0077 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0077 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0078', () => {
    try {
      const r = parsec.parseFunction(`std::vector<bool> sampleRet36();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0078 return convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>", "h2dts_convert_array_0078 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0078 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0079', () => {
    try {
      const r = parsec.parseClass(`class SampleClass36 { public: std::vector<bool> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0079 class field convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>", "h2dts_convert_array_0079 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0079 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0080', () => {
    try {
      const r = parsec.parseFunction(`void pipeline36(std::vector<bool> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0080 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>", "h2dts_convert_array_0080 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0080 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0081', () => {
    try {
      const result = transTskey2Ckey('std::vector<char>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0081 convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_array_0081 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0081 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0082', () => {
    try {
      const r = parsec.parseFunction(`void sample37(std::vector<char> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0082 param convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0082 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0082 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0083', () => {
    try {
      const r = parsec.parseFunction(`std::vector<char> sampleRet37();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0083 return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0083 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0083 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0084', () => {
    try {
      const r = parsec.parseClass(`class SampleClass37 { public: std::vector<char> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0084 class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0084 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0084 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0085', () => {
    try {
      const r = parsec.parseFunction(`void pipeline37(std::vector<char> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0085 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0085 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0085 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0086', () => {
    try {
      const result = transTskey2Ckey('std::vector<wchar_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0086 convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_array_0086 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0086 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0087', () => {
    try {
      const r = parsec.parseFunction(`void sample38(std::vector<wchar_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0087 param convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0087 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0087 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0088', () => {
    try {
      const r = parsec.parseFunction(`std::vector<wchar_t> sampleRet38();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0088 return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0088 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0088 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0089', () => {
    try {
      const r = parsec.parseClass(`class SampleClass38 { public: std::vector<wchar_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0089 class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0089 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0089 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0090', () => {
    try {
      const r = parsec.parseFunction(`void pipeline38(std::vector<wchar_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0090 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0090 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0090 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0091', () => {
    try {
      const result = transTskey2Ckey('std::vector<char8_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0091 convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_array_0091 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0091 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0092', () => {
    try {
      const r = parsec.parseFunction(`void sample39(std::vector<char8_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0092 param convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0092 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0092 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0093', () => {
    try {
      const r = parsec.parseFunction(`std::vector<char8_t> sampleRet39();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0093 return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0093 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0093 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0094', () => {
    try {
      const r = parsec.parseClass(`class SampleClass39 { public: std::vector<char8_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0094 class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0094 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0094 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0095', () => {
    try {
      const r = parsec.parseFunction(`void pipeline39(std::vector<char8_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0095 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0095 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0095 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0096', () => {
    try {
      const result = transTskey2Ckey('std::vector<char16_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0096 convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_array_0096 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0096 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0097', () => {
    try {
      const r = parsec.parseFunction(`void sample40(std::vector<char16_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0097 param convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0097 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0097 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0098', () => {
    try {
      const r = parsec.parseFunction(`std::vector<char16_t> sampleRet40();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0098 return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0098 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0098 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0099', () => {
    try {
      const r = parsec.parseClass(`class SampleClass40 { public: std::vector<char16_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0099 class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0099 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0099 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0100', () => {
    try {
      const r = parsec.parseFunction(`void pipeline40(std::vector<char16_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0100 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0100 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0100 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0101', () => {
    try {
      const result = transTskey2Ckey('std::vector<char32_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0101 convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_array_0101 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0101 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0102', () => {
    try {
      const r = parsec.parseFunction(`void sample41(std::vector<char32_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0102 param convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0102 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0102 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0103', () => {
    try {
      const r = parsec.parseFunction(`std::vector<char32_t> sampleRet41();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0103 return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0103 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0103 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0104', () => {
    try {
      const r = parsec.parseClass(`class SampleClass41 { public: std::vector<char32_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0104 class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0104 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0104 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0105', () => {
    try {
      const r = parsec.parseFunction(`void pipeline41(std::vector<char32_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0105 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0105 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0105 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0106', () => {
    try {
      const result = transTskey2Ckey('std::array<int, 10>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0106 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0106 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0106 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0107', () => {
    try {
      const r = parsec.parseFunction(`void sample42(std::array<int, 10> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0107 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0107 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0107 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0108', () => {
    try {
      const r = parsec.parseFunction(`std::array<int, 10> sampleRet42();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0108 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0108 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0108 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0109', () => {
    try {
      const r = parsec.parseClass(`class SampleClass42 { public: std::array<int, 10> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0109 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0109 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0109 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0110', () => {
    try {
      const r = parsec.parseFunction(`void pipeline42(std::array<int, 10> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0110 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0110 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0110 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0111', () => {
    try {
      const result = transTskey2Ckey('std::array<size_t, 10>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0111 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0111 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0111 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0112', () => {
    try {
      const r = parsec.parseFunction(`void sample43(std::array<size_t, 10> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0112 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0112 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0112 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0113', () => {
    try {
      const r = parsec.parseFunction(`std::array<size_t, 10> sampleRet43();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0113 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0113 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0113 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0114', () => {
    try {
      const r = parsec.parseClass(`class SampleClass43 { public: std::array<size_t, 10> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0114 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0114 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0114 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0115', () => {
    try {
      const r = parsec.parseFunction(`void pipeline43(std::array<size_t, 10> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0115 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0115 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0115 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0116', () => {
    try {
      const result = transTskey2Ckey('std::array<double, 10>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0116 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0116 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0116 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0117', () => {
    try {
      const r = parsec.parseFunction(`void sample44(std::array<double, 10> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0117 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0117 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0117 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0118', () => {
    try {
      const r = parsec.parseFunction(`std::array<double, 10> sampleRet44();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0118 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0118 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0118 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0119', () => {
    try {
      const r = parsec.parseClass(`class SampleClass44 { public: std::array<double, 10> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0119 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0119 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0119 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0120', () => {
    try {
      const r = parsec.parseFunction(`void pipeline44(std::array<double, 10> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0120 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0120 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0120 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0121', () => {
    try {
      const result = transTskey2Ckey('std::array<float, 10>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0121 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0121 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0121 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0122', () => {
    try {
      const r = parsec.parseFunction(`void sample45(std::array<float, 10> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0122 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0122 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0122 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0123', () => {
    try {
      const r = parsec.parseFunction(`std::array<float, 10> sampleRet45();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0123 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0123 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0123 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0124', () => {
    try {
      const r = parsec.parseClass(`class SampleClass45 { public: std::array<float, 10> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0124 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0124 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0124 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0125', () => {
    try {
      const r = parsec.parseFunction(`void pipeline45(std::array<float, 10> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0125 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0125 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0125 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0126', () => {
    try {
      const result = transTskey2Ckey('std::array<long, 10>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0126 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0126 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0126 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0127', () => {
    try {
      const r = parsec.parseFunction(`void sample46(std::array<long, 10> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0127 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0127 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0127 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0128', () => {
    try {
      const r = parsec.parseFunction(`std::array<long, 10> sampleRet46();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0128 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0128 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0128 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0129', () => {
    try {
      const r = parsec.parseClass(`class SampleClass46 { public: std::array<long, 10> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0129 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0129 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0129 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0130', () => {
    try {
      const r = parsec.parseFunction(`void pipeline46(std::array<long, 10> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0130 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0130 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0130 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0131', () => {
    try {
      const result = transTskey2Ckey('std::array<short, 10>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0131 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0131 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0131 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0132', () => {
    try {
      const r = parsec.parseFunction(`void sample47(std::array<short, 10> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0132 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0132 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0132 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0133', () => {
    try {
      const r = parsec.parseFunction(`std::array<short, 10> sampleRet47();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0133 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0133 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0133 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0134', () => {
    try {
      const r = parsec.parseClass(`class SampleClass47 { public: std::array<short, 10> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0134 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0134 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0134 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0135', () => {
    try {
      const r = parsec.parseFunction(`void pipeline47(std::array<short, 10> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0135 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0135 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0135 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0136', () => {
    try {
      const result = transTskey2Ckey('std::array<uint8_t, 10>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0136 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0136 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0136 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0137', () => {
    try {
      const r = parsec.parseFunction(`void sample48(std::array<uint8_t, 10> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0137 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0137 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0137 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0138', () => {
    try {
      const r = parsec.parseFunction(`std::array<uint8_t, 10> sampleRet48();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0138 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0138 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0138 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0139', () => {
    try {
      const r = parsec.parseClass(`class SampleClass48 { public: std::array<uint8_t, 10> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0139 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0139 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0139 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0140', () => {
    try {
      const r = parsec.parseFunction(`void pipeline48(std::array<uint8_t, 10> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0140 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0140 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0140 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0141', () => {
    try {
      const result = transTskey2Ckey('std::array<uint16_t, 10>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0141 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0141 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0141 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0142', () => {
    try {
      const r = parsec.parseFunction(`void sample49(std::array<uint16_t, 10> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0142 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0142 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0142 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0143', () => {
    try {
      const r = parsec.parseFunction(`std::array<uint16_t, 10> sampleRet49();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0143 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0143 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0143 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0144', () => {
    try {
      const r = parsec.parseClass(`class SampleClass49 { public: std::array<uint16_t, 10> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0144 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0144 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0144 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0145', () => {
    try {
      const r = parsec.parseFunction(`void pipeline49(std::array<uint16_t, 10> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0145 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0145 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0145 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0146', () => {
    try {
      const result = transTskey2Ckey('std::array<uint32_t, 10>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0146 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0146 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0146 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0147', () => {
    try {
      const r = parsec.parseFunction(`void sample50(std::array<uint32_t, 10> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0147 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0147 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0147 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0148', () => {
    try {
      const r = parsec.parseFunction(`std::array<uint32_t, 10> sampleRet50();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0148 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0148 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0148 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0149', () => {
    try {
      const r = parsec.parseClass(`class SampleClass50 { public: std::array<uint32_t, 10> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0149 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0149 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0149 execution error: ${String(err)}`);
    }
  });
});
