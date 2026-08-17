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

suite('Stability_H2DTS_CONVERT_FUNC_Part02', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_CONVERT_FUNC_Part02.');


  test('h2dts_convert_func_0001', () => {
    try {
      const r = parsec.parseFunction(`std::unique_ptr<char16_t> sampleRet176();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0001 return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0001 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0001 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0002', () => {
    try {
      const r = parsec.parseClass(`class SampleClass176 { public: std::unique_ptr<char16_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0002 class field convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0002 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0002 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0003', () => {
    try {
      const r = parsec.parseFunction(`void pipeline176(std::unique_ptr<char16_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0003 pipeline convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0003 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0003 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0004', () => {
    try {
      const result = transTskey2Ckey('std::unique_ptr<char32_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0004 convert output non-empty");
      assert.strictEqual(result, "string", "h2dts_convert_func_0004 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0004 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0005', () => {
    try {
      const r = parsec.parseFunction(`void sample177(std::unique_ptr<char32_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0005 param convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0005 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0005 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0006', () => {
    try {
      const r = parsec.parseFunction(`std::unique_ptr<char32_t> sampleRet177();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0006 return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0006 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0006 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0007', () => {
    try {
      const r = parsec.parseClass(`class SampleClass177 { public: std::unique_ptr<char32_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0007 class field convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0007 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0007 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0008', () => {
    try {
      const r = parsec.parseFunction(`void pipeline177(std::unique_ptr<char32_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0008 pipeline convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0008 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0008 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0009', () => {
    try {
      const result = transTskey2Ckey('std::shared_ptr<int>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0009 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0009 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0009 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0010', () => {
    try {
      const r = parsec.parseFunction(`void sample178(std::shared_ptr<int> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0010 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0010 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0010 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0011', () => {
    try {
      const r = parsec.parseFunction(`std::shared_ptr<int> sampleRet178();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0011 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0011 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0011 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0012', () => {
    try {
      const r = parsec.parseClass(`class SampleClass178 { public: std::shared_ptr<int> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0012 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0012 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0012 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0013', () => {
    try {
      const r = parsec.parseFunction(`void pipeline178(std::shared_ptr<int> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0013 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0013 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0013 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0014', () => {
    try {
      const result = transTskey2Ckey('std::shared_ptr<size_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0014 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0014 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0014 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0015', () => {
    try {
      const r = parsec.parseFunction(`void sample179(std::shared_ptr<size_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0015 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0015 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0015 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0016', () => {
    try {
      const r = parsec.parseFunction(`std::shared_ptr<size_t> sampleRet179();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0016 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0016 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0016 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0017', () => {
    try {
      const r = parsec.parseClass(`class SampleClass179 { public: std::shared_ptr<size_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0017 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0017 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0017 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0018', () => {
    try {
      const r = parsec.parseFunction(`void pipeline179(std::shared_ptr<size_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0018 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0018 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0018 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0019', () => {
    try {
      const result = transTskey2Ckey('std::shared_ptr<double>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0019 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0019 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0019 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0020', () => {
    try {
      const r = parsec.parseFunction(`void sample180(std::shared_ptr<double> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0020 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0020 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0020 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0021', () => {
    try {
      const r = parsec.parseFunction(`std::shared_ptr<double> sampleRet180();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0021 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0021 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0021 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0022', () => {
    try {
      const r = parsec.parseClass(`class SampleClass180 { public: std::shared_ptr<double> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0022 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0022 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0022 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0023', () => {
    try {
      const r = parsec.parseFunction(`void pipeline180(std::shared_ptr<double> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0023 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0023 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0023 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0024', () => {
    try {
      const result = transTskey2Ckey('std::shared_ptr<float>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0024 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0024 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0024 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0025', () => {
    try {
      const r = parsec.parseFunction(`void sample181(std::shared_ptr<float> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0025 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0025 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0025 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0026', () => {
    try {
      const r = parsec.parseFunction(`std::shared_ptr<float> sampleRet181();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0026 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0026 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0026 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0027', () => {
    try {
      const r = parsec.parseClass(`class SampleClass181 { public: std::shared_ptr<float> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0027 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0027 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0027 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0028', () => {
    try {
      const r = parsec.parseFunction(`void pipeline181(std::shared_ptr<float> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0028 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0028 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0028 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0029', () => {
    try {
      const result = transTskey2Ckey('std::shared_ptr<long>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0029 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0029 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0029 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0030', () => {
    try {
      const r = parsec.parseFunction(`void sample182(std::shared_ptr<long> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0030 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0030 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0030 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0031', () => {
    try {
      const r = parsec.parseFunction(`std::shared_ptr<long> sampleRet182();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0031 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0031 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0031 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0032', () => {
    try {
      const r = parsec.parseClass(`class SampleClass182 { public: std::shared_ptr<long> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0032 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0032 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0032 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0033', () => {
    try {
      const r = parsec.parseFunction(`void pipeline182(std::shared_ptr<long> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0033 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0033 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0033 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0034', () => {
    try {
      const result = transTskey2Ckey('std::shared_ptr<short>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0034 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0034 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0034 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0035', () => {
    try {
      const r = parsec.parseFunction(`void sample183(std::shared_ptr<short> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0035 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0035 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0035 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0036', () => {
    try {
      const r = parsec.parseFunction(`std::shared_ptr<short> sampleRet183();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0036 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0036 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0036 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0037', () => {
    try {
      const r = parsec.parseClass(`class SampleClass183 { public: std::shared_ptr<short> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0037 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0037 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0037 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0038', () => {
    try {
      const r = parsec.parseFunction(`void pipeline183(std::shared_ptr<short> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0038 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0038 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0038 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0039', () => {
    try {
      const result = transTskey2Ckey('std::shared_ptr<uint8_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0039 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0039 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0039 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0040', () => {
    try {
      const r = parsec.parseFunction(`void sample184(std::shared_ptr<uint8_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0040 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0040 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0040 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0041', () => {
    try {
      const r = parsec.parseFunction(`std::shared_ptr<uint8_t> sampleRet184();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0041 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0041 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0041 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0042', () => {
    try {
      const r = parsec.parseClass(`class SampleClass184 { public: std::shared_ptr<uint8_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0042 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0042 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0042 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0043', () => {
    try {
      const r = parsec.parseFunction(`void pipeline184(std::shared_ptr<uint8_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0043 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0043 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0043 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0044', () => {
    try {
      const result = transTskey2Ckey('std::shared_ptr<uint16_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0044 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0044 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0044 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0045', () => {
    try {
      const r = parsec.parseFunction(`void sample185(std::shared_ptr<uint16_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0045 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0045 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0045 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0046', () => {
    try {
      const r = parsec.parseFunction(`std::shared_ptr<uint16_t> sampleRet185();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0046 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0046 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0046 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0047', () => {
    try {
      const r = parsec.parseClass(`class SampleClass185 { public: std::shared_ptr<uint16_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0047 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0047 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0047 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0048', () => {
    try {
      const r = parsec.parseFunction(`void pipeline185(std::shared_ptr<uint16_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0048 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0048 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0048 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0049', () => {
    try {
      const result = transTskey2Ckey('std::shared_ptr<uint32_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0049 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0049 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0049 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0050', () => {
    try {
      const r = parsec.parseFunction(`void sample186(std::shared_ptr<uint32_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0050 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0050 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0050 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0051', () => {
    try {
      const r = parsec.parseFunction(`std::shared_ptr<uint32_t> sampleRet186();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0051 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0051 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0051 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0052', () => {
    try {
      const r = parsec.parseClass(`class SampleClass186 { public: std::shared_ptr<uint32_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0052 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0052 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0052 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0053', () => {
    try {
      const r = parsec.parseFunction(`void pipeline186(std::shared_ptr<uint32_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0053 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0053 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0053 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0054', () => {
    try {
      const result = transTskey2Ckey('std::shared_ptr<uint64_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0054 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0054 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0054 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0055', () => {
    try {
      const r = parsec.parseFunction(`void sample187(std::shared_ptr<uint64_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0055 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0055 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0055 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0056', () => {
    try {
      const r = parsec.parseFunction(`std::shared_ptr<uint64_t> sampleRet187();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0056 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0056 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0056 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0057', () => {
    try {
      const r = parsec.parseClass(`class SampleClass187 { public: std::shared_ptr<uint64_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0057 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0057 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0057 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0058', () => {
    try {
      const r = parsec.parseFunction(`void pipeline187(std::shared_ptr<uint64_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0058 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0058 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0058 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0059', () => {
    try {
      const result = transTskey2Ckey('std::shared_ptr<int8_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0059 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0059 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0059 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0060', () => {
    try {
      const r = parsec.parseFunction(`void sample188(std::shared_ptr<int8_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0060 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0060 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0060 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0061', () => {
    try {
      const r = parsec.parseFunction(`std::shared_ptr<int8_t> sampleRet188();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0061 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0061 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0061 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0062', () => {
    try {
      const r = parsec.parseClass(`class SampleClass188 { public: std::shared_ptr<int8_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0062 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0062 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0062 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0063', () => {
    try {
      const r = parsec.parseFunction(`void pipeline188(std::shared_ptr<int8_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0063 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0063 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0063 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0064', () => {
    try {
      const result = transTskey2Ckey('std::shared_ptr<int16_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0064 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0064 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0064 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0065', () => {
    try {
      const r = parsec.parseFunction(`void sample189(std::shared_ptr<int16_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0065 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0065 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0065 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0066', () => {
    try {
      const r = parsec.parseFunction(`std::shared_ptr<int16_t> sampleRet189();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0066 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0066 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0066 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0067', () => {
    try {
      const r = parsec.parseClass(`class SampleClass189 { public: std::shared_ptr<int16_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0067 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0067 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0067 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0068', () => {
    try {
      const r = parsec.parseFunction(`void pipeline189(std::shared_ptr<int16_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0068 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0068 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0068 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0069', () => {
    try {
      const result = transTskey2Ckey('std::shared_ptr<int32_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0069 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0069 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0069 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0070', () => {
    try {
      const r = parsec.parseFunction(`void sample190(std::shared_ptr<int32_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0070 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0070 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0070 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0071', () => {
    try {
      const r = parsec.parseFunction(`std::shared_ptr<int32_t> sampleRet190();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0071 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0071 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0071 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0072', () => {
    try {
      const r = parsec.parseClass(`class SampleClass190 { public: std::shared_ptr<int32_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0072 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0072 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0072 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0073', () => {
    try {
      const r = parsec.parseFunction(`void pipeline190(std::shared_ptr<int32_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0073 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0073 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0073 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0074', () => {
    try {
      const result = transTskey2Ckey('std::shared_ptr<int64_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0074 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0074 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0074 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0075', () => {
    try {
      const r = parsec.parseFunction(`void sample191(std::shared_ptr<int64_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0075 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0075 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0075 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0076', () => {
    try {
      const r = parsec.parseFunction(`std::shared_ptr<int64_t> sampleRet191();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0076 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0076 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0076 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0077', () => {
    try {
      const r = parsec.parseClass(`class SampleClass191 { public: std::shared_ptr<int64_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0077 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0077 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0077 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0078', () => {
    try {
      const r = parsec.parseFunction(`void pipeline191(std::shared_ptr<int64_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0078 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0078 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0078 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0079', () => {
    try {
      const result = transTskey2Ckey('std::shared_ptr<bool>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0079 convert output non-empty");
      assert.strictEqual(result, "boolean", "h2dts_convert_func_0079 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0079 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0080', () => {
    try {
      const r = parsec.parseFunction(`void sample192(std::shared_ptr<bool> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0080 param convert output non-empty");
      assert.strictEqual(converted, "boolean", "h2dts_convert_func_0080 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0080 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0081', () => {
    try {
      const r = parsec.parseFunction(`std::shared_ptr<bool> sampleRet192();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0081 return convert output non-empty");
      assert.strictEqual(converted, "boolean", "h2dts_convert_func_0081 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0081 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0082', () => {
    try {
      const r = parsec.parseClass(`class SampleClass192 { public: std::shared_ptr<bool> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0082 class field convert output non-empty");
      assert.strictEqual(converted, "boolean", "h2dts_convert_func_0082 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0082 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0083', () => {
    try {
      const r = parsec.parseFunction(`void pipeline192(std::shared_ptr<bool> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0083 pipeline convert output non-empty");
      assert.strictEqual(converted, "boolean", "h2dts_convert_func_0083 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0083 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0084', () => {
    try {
      const result = transTskey2Ckey('std::shared_ptr<char>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0084 convert output non-empty");
      assert.strictEqual(result, "string", "h2dts_convert_func_0084 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0084 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0085', () => {
    try {
      const r = parsec.parseFunction(`void sample193(std::shared_ptr<char> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0085 param convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0085 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0085 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0086', () => {
    try {
      const r = parsec.parseFunction(`std::shared_ptr<char> sampleRet193();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0086 return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0086 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0086 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0087', () => {
    try {
      const r = parsec.parseClass(`class SampleClass193 { public: std::shared_ptr<char> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0087 class field convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0087 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0087 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0088', () => {
    try {
      const r = parsec.parseFunction(`void pipeline193(std::shared_ptr<char> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0088 pipeline convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0088 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0088 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0089', () => {
    try {
      const result = transTskey2Ckey('std::shared_ptr<wchar_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0089 convert output non-empty");
      assert.strictEqual(result, "string", "h2dts_convert_func_0089 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0089 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0090', () => {
    try {
      const r = parsec.parseFunction(`void sample194(std::shared_ptr<wchar_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0090 param convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0090 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0090 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0091', () => {
    try {
      const r = parsec.parseFunction(`std::shared_ptr<wchar_t> sampleRet194();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0091 return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0091 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0091 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0092', () => {
    try {
      const r = parsec.parseClass(`class SampleClass194 { public: std::shared_ptr<wchar_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0092 class field convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0092 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0092 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0093', () => {
    try {
      const r = parsec.parseFunction(`void pipeline194(std::shared_ptr<wchar_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0093 pipeline convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0093 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0093 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0094', () => {
    try {
      const result = transTskey2Ckey('std::shared_ptr<char8_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0094 convert output non-empty");
      assert.strictEqual(result, "string", "h2dts_convert_func_0094 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0094 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0095', () => {
    try {
      const r = parsec.parseFunction(`void sample195(std::shared_ptr<char8_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0095 param convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0095 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0095 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0096', () => {
    try {
      const r = parsec.parseFunction(`std::shared_ptr<char8_t> sampleRet195();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0096 return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0096 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0096 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0097', () => {
    try {
      const r = parsec.parseClass(`class SampleClass195 { public: std::shared_ptr<char8_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0097 class field convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0097 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0097 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0098', () => {
    try {
      const r = parsec.parseFunction(`void pipeline195(std::shared_ptr<char8_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0098 pipeline convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0098 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0098 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0099', () => {
    try {
      const result = transTskey2Ckey('std::shared_ptr<char16_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0099 convert output non-empty");
      assert.strictEqual(result, "string", "h2dts_convert_func_0099 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0099 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0100', () => {
    try {
      const r = parsec.parseFunction(`void sample196(std::shared_ptr<char16_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0100 param convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0100 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0100 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0101', () => {
    try {
      const r = parsec.parseFunction(`std::shared_ptr<char16_t> sampleRet196();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0101 return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0101 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0101 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0102', () => {
    try {
      const r = parsec.parseClass(`class SampleClass196 { public: std::shared_ptr<char16_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0102 class field convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0102 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0102 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0103', () => {
    try {
      const r = parsec.parseFunction(`void pipeline196(std::shared_ptr<char16_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0103 pipeline convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0103 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0103 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0104', () => {
    try {
      const result = transTskey2Ckey('std::shared_ptr<char32_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0104 convert output non-empty");
      assert.strictEqual(result, "string", "h2dts_convert_func_0104 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0104 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0105', () => {
    try {
      const r = parsec.parseFunction(`void sample197(std::shared_ptr<char32_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0105 param convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0105 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0105 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0106', () => {
    try {
      const r = parsec.parseFunction(`std::shared_ptr<char32_t> sampleRet197();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0106 return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0106 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0106 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0107', () => {
    try {
      const r = parsec.parseClass(`class SampleClass197 { public: std::shared_ptr<char32_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0107 class field convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0107 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0107 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0108', () => {
    try {
      const r = parsec.parseFunction(`void pipeline197(std::shared_ptr<char32_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0108 pipeline convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0108 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0108 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0109', () => {
    try {
      const result = transTskey2Ckey('std::function<std::string(char *)>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0109 convert output non-empty");
      assert.strictEqual(result, "(param0: string)=>string", "h2dts_convert_func_0109 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0109 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0110', () => {
    try {
      const r = parsec.parseFunction(`void sample266(std::function<std::string(char *)> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0110 param convert output non-empty");
      assert.strictEqual(converted, "(param0: string)=>string", "h2dts_convert_func_0110 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0110 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0111', () => {
    try {
      const r = parsec.parseFunction(`std::function<std::string(char *)> sampleRet266();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0111 return convert output non-empty");
      assert.strictEqual(converted, "(param0: string)=>string", "h2dts_convert_func_0111 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0111 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0112', () => {
    try {
      const r = parsec.parseClass(`class SampleClass266 { public: std::function<std::string(char *)> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0112 class field convert output non-empty");
      assert.strictEqual(converted, "(param0: string)=>string", "h2dts_convert_func_0112 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0112 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0113', () => {
    try {
      const r = parsec.parseFunction(`void pipeline266(std::function<std::string(char *)> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0113 pipeline convert output non-empty");
      assert.strictEqual(converted, "(param0: string)=>string", "h2dts_convert_func_0113 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0113 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0114', () => {
    try {
      const result = transTskey2Ckey('std::function<unsigned short(long long, unsigned long)>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0114 convert output non-empty");
      assert.strictEqual(result, "(param0: number, param1: number)=>number", "h2dts_convert_func_0114 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0114 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0115', () => {
    try {
      const r = parsec.parseFunction(`void sample267(std::function<unsigned short(long long, unsigned long)> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0115 param convert output non-empty");
      assert.strictEqual(converted, "(param0: number, param1: number)=>number",
        "h2dts_convert_func_0115 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0115 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0116', () => {
    try {
      const r = parsec.parseFunction(`std::function<unsigned short(long long, unsigned long)> sampleRet267();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0116 return convert output non-empty");
      assert.strictEqual(converted, "(param0: number, param1: number)=>number",
        "h2dts_convert_func_0116 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0116 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0117', () => {
    try {
      const result = transTskey2Ckey('std::function<unsigned short(long long, unsigned long)>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0117 convert output non-empty");
      assert.strictEqual(result, "(param0: number, param1: number)=>number", "h2dts_convert_func_0117 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0117 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0118', () => {
    try {
      const r = parsec.parseFunction(`void pipeline267(std::function<unsigned short(long long, unsigned long)> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0118 pipeline convert output non-empty");
      assert.strictEqual(converted, "(param0: number, param1: number)=>number",
        "h2dts_convert_func_0118 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0118 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0119', () => {
    try {
      const result = transTskey2Ckey('std::function<void(int *, unsigned long long)>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0119 convert output non-empty");
      assert.strictEqual(result, "(param0: number, param1: number)=>void", "h2dts_convert_func_0119 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0119 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0120', () => {
    try {
      const r = parsec.parseFunction(`void sample268(std::function<void(int *, unsigned long long)> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0120 param convert output non-empty");
      assert.strictEqual(converted, "(param0: number, param1: number)=>void",
        "h2dts_convert_func_0120 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0120 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0121', () => {
    try {
      const r = parsec.parseFunction(`std::function<void(int *, unsigned long long)> sampleRet268();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0121 return convert output non-empty");
      assert.strictEqual(converted, "(param0: number, param1: number)=>void",
        "h2dts_convert_func_0121 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0121 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0122', () => {
    try {
      const r = parsec.parseClass(`
        class SampleClass268 { public: std::function<void(int *, unsigned long long)> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0122 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0122 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0122 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0123', () => {
    try {
      const r = parsec.parseFunction(`void pipeline268(std::function<void(int *, unsigned long long)> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0123 pipeline convert output non-empty");
      assert.strictEqual(converted, "(param0: number, param1: number)=>void",
        "h2dts_convert_func_0123 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0123 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0124', () => {
    try {
      const result = transTskey2Ckey('std::unique_ptr<std::string>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0124 convert output non-empty");
      assert.strictEqual(result, "string", "h2dts_convert_func_0124 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0124 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0125', () => {
    try {
      const r = parsec.parseFunction(`void sample269(std::unique_ptr<std::string> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0125 param convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0125 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0125 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0126', () => {
    try {
      const r = parsec.parseFunction(`std::unique_ptr<std::string> sampleRet269();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0126 return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0126 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0126 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0127', () => {
    try {
      const r = parsec.parseClass(`class SampleClass269 { public: std::unique_ptr<std::string> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0127 class field convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0127 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0127 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0128', () => {
    try {
      const r = parsec.parseFunction(`void pipeline269(std::unique_ptr<std::string> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0128 pipeline convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0128 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0128 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0129', () => {
    try {
      const result = transTskey2Ckey('std::unique_ptr<char *>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0129 convert output non-empty");
      assert.strictEqual(result, "string", "h2dts_convert_func_0129 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0129 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0130', () => {
    try {
      const r = parsec.parseFunction(`void sample270(std::unique_ptr<char *> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0130 param convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0130 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0130 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0131', () => {
    try {
      const r = parsec.parseFunction(`std::unique_ptr<char *> sampleRet270();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0131 return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0131 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0131 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0132', () => {
    try {
      const r = parsec.parseClass(`class SampleClass270 { public: std::unique_ptr<char *> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0132 class field convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0132 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0132 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0133', () => {
    try {
      const r = parsec.parseFunction(`void pipeline270(std::unique_ptr<char *> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0133 pipeline convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0133 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0133 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0134', () => {
    try {
      const result = transTskey2Ckey('std::unique_ptr<long long>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0134 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0134 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0134 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0135', () => {
    try {
      const r = parsec.parseFunction(`void sample271(std::unique_ptr<long long> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0135 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0135 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0135 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0136', () => {
    try {
      const r = parsec.parseFunction(`std::unique_ptr<long long> sampleRet271();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0136 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0136 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0136 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0137', () => {
    try {
      const r = parsec.parseClass(`class SampleClass271 { public: std::unique_ptr<long long> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0137 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0137 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0137 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0138', () => {
    try {
      const r = parsec.parseFunction(`void pipeline271(std::unique_ptr<long long> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0138 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0138 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0138 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0139', () => {
    try {
      const result = transTskey2Ckey('std::unique_ptr<unsigned short>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0139 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0139 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0139 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0140', () => {
    try {
      const r = parsec.parseFunction(`void sample272(std::unique_ptr<unsigned short> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0140 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0140 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0140 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0141', () => {
    try {
      const r = parsec.parseFunction(`std::unique_ptr<unsigned short> sampleRet272();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0141 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0141 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0141 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0142', () => {
    try {
      const r = parsec.parseClass(`class SampleClass272 { public: std::unique_ptr<unsigned short> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0142 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0142 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0142 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0143', () => {
    try {
      const r = parsec.parseFunction(`void pipeline272(std::unique_ptr<unsigned short> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0143 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0143 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0143 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0144', () => {
    try {
      const result = transTskey2Ckey('std::unique_ptr<unsigned long>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0144 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0144 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0144 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0145', () => {
    try {
      const r = parsec.parseFunction(`void sample273(std::unique_ptr<unsigned long> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0145 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0145 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0145 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0146', () => {
    try {
      const r = parsec.parseFunction(`std::unique_ptr<unsigned long> sampleRet273();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0146 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0146 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0146 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0147', () => {
    try {
      const r = parsec.parseClass(`class SampleClass273 { public: std::unique_ptr<unsigned long> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0147 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0147 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0147 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0148', () => {
    try {
      const r = parsec.parseFunction(`void pipeline273(std::unique_ptr<unsigned long> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0148 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0148 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0148 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0149', () => {
    try {
      const result = transTskey2Ckey('std::unique_ptr<unsigned long long>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0149 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0149 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0149 execution error: ${String(err)}`);
    }
  });
});
