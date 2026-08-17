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

suite('Stability_H2DTS_CONVERT_COMBO_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_CONVERT_COMBO_Part01.');


  test('h2dts_convert_combo_0001', () => {
    try {
      const result = transTskey2Ckey('wchar_t');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0001 convert output non-empty");
      assert.strictEqual(result, "string", "h2dts_convert_combo_0001 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0001 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0002', () => {
    try {
      const r = parsec.parseFunction(`void sample17(wchar_t p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0002 param convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0002 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0002 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0003', () => {
    try {
      const r = parsec.parseFunction(`wchar_t sampleRet17();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0003 return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0003 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0003 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0004', () => {
    try {
      const r = parsec.parseClass(`class SampleClass17 { public: wchar_t field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0004 class field convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0004 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0004 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0005', () => {
    try {
      const r = parsec.parseFunction(`void pipeline17(wchar_t p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0005 pipeline convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0005 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0005 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0006', () => {
    try {
      const result = transTskey2Ckey('std::weak_ptr<int>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0006 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_combo_0006 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0006 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0007', () => {
    try {
      const r = parsec.parseFunction(`void sample198(std::weak_ptr<int> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0007 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0007 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0007 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0008', () => {
    try {
      const r = parsec.parseFunction(`std::weak_ptr<int> sampleRet198();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0008 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0008 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0008 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0009', () => {
    try {
      const r = parsec.parseClass(`class SampleClass198 { public: std::weak_ptr<int> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0009 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0009 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0009 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0010', () => {
    try {
      const r = parsec.parseFunction(`void pipeline198(std::weak_ptr<int> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0010 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0010 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0010 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0011', () => {
    try {
      const result = transTskey2Ckey('std::weak_ptr<size_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0011 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_combo_0011 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0011 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0012', () => {
    try {
      const r = parsec.parseFunction(`void sample199(std::weak_ptr<size_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0012 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0012 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0012 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0013', () => {
    try {
      const r = parsec.parseFunction(`std::weak_ptr<size_t> sampleRet199();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0013 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0013 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0013 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0014', () => {
    try {
      const r = parsec.parseClass(`class SampleClass199 { public: std::weak_ptr<size_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0014 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0014 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0014 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0015', () => {
    try {
      const r = parsec.parseFunction(`void pipeline199(std::weak_ptr<size_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0015 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0015 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0015 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0016', () => {
    try {
      const result = transTskey2Ckey('std::weak_ptr<double>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0016 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_combo_0016 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0016 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0017', () => {
    try {
      const r = parsec.parseFunction(`void sample200(std::weak_ptr<double> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0017 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0017 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0017 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0018', () => {
    try {
      const r = parsec.parseFunction(`std::weak_ptr<double> sampleRet200();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0018 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0018 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0018 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0019', () => {
    try {
      const r = parsec.parseClass(`class SampleClass200 { public: std::weak_ptr<double> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0019 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0019 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0019 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0020', () => {
    try {
      const r = parsec.parseFunction(`void pipeline200(std::weak_ptr<double> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0020 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0020 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0020 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0021', () => {
    try {
      const result = transTskey2Ckey('std::weak_ptr<float>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0021 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_combo_0021 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0021 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0022', () => {
    try {
      const r = parsec.parseFunction(`void sample201(std::weak_ptr<float> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0022 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0022 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0022 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0023', () => {
    try {
      const r = parsec.parseFunction(`std::weak_ptr<float> sampleRet201();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0023 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0023 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0023 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0024', () => {
    try {
      const r = parsec.parseClass(`class SampleClass201 { public: std::weak_ptr<float> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0024 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0024 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0024 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0025', () => {
    try {
      const r = parsec.parseFunction(`void pipeline201(std::weak_ptr<float> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0025 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0025 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0025 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0026', () => {
    try {
      const result = transTskey2Ckey('std::weak_ptr<long>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0026 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_combo_0026 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0026 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0027', () => {
    try {
      const r = parsec.parseFunction(`void sample202(std::weak_ptr<long> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0027 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0027 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0027 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0028', () => {
    try {
      const r = parsec.parseFunction(`std::weak_ptr<long> sampleRet202();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0028 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0028 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0028 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0029', () => {
    try {
      const r = parsec.parseClass(`class SampleClass202 { public: std::weak_ptr<long> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0029 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0029 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0029 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0030', () => {
    try {
      const r = parsec.parseFunction(`void pipeline202(std::weak_ptr<long> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0030 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0030 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0030 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0031', () => {
    try {
      const result = transTskey2Ckey('std::weak_ptr<short>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0031 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_combo_0031 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0031 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0032', () => {
    try {
      const r = parsec.parseFunction(`void sample203(std::weak_ptr<short> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0032 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0032 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0032 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0033', () => {
    try {
      const r = parsec.parseFunction(`std::weak_ptr<short> sampleRet203();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0033 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0033 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0033 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0034', () => {
    try {
      const r = parsec.parseClass(`class SampleClass203 { public: std::weak_ptr<short> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0034 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0034 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0034 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0035', () => {
    try {
      const r = parsec.parseFunction(`void pipeline203(std::weak_ptr<short> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0035 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0035 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0035 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0036', () => {
    try {
      const result = transTskey2Ckey('std::weak_ptr<uint8_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0036 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_combo_0036 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0036 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0037', () => {
    try {
      const r = parsec.parseFunction(`void sample204(std::weak_ptr<uint8_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0037 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0037 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0037 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0038', () => {
    try {
      const r = parsec.parseFunction(`std::weak_ptr<uint8_t> sampleRet204();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0038 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0038 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0038 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0039', () => {
    try {
      const r = parsec.parseClass(`class SampleClass204 { public: std::weak_ptr<uint8_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0039 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0039 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0039 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0040', () => {
    try {
      const r = parsec.parseFunction(`void pipeline204(std::weak_ptr<uint8_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0040 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0040 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0040 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0041', () => {
    try {
      const result = transTskey2Ckey('std::weak_ptr<uint16_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0041 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_combo_0041 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0041 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0042', () => {
    try {
      const r = parsec.parseFunction(`void sample205(std::weak_ptr<uint16_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0042 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0042 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0042 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0043', () => {
    try {
      const r = parsec.parseFunction(`std::weak_ptr<uint16_t> sampleRet205();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0043 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0043 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0043 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0044', () => {
    try {
      const r = parsec.parseClass(`class SampleClass205 { public: std::weak_ptr<uint16_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0044 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0044 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0044 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0045', () => {
    try {
      const r = parsec.parseFunction(`void pipeline205(std::weak_ptr<uint16_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0045 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0045 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0045 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0046', () => {
    try {
      const result = transTskey2Ckey('std::weak_ptr<uint32_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0046 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_combo_0046 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0046 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0047', () => {
    try {
      const r = parsec.parseFunction(`void sample206(std::weak_ptr<uint32_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0047 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0047 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0047 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0048', () => {
    try {
      const r = parsec.parseFunction(`std::weak_ptr<uint32_t> sampleRet206();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0048 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0048 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0048 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0049', () => {
    try {
      const r = parsec.parseClass(`class SampleClass206 { public: std::weak_ptr<uint32_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0049 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0049 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0049 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0050', () => {
    try {
      const r = parsec.parseFunction(`void pipeline206(std::weak_ptr<uint32_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0050 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0050 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0050 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0051', () => {
    try {
      const result = transTskey2Ckey('std::weak_ptr<uint64_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0051 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_combo_0051 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0051 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0052', () => {
    try {
      const r = parsec.parseFunction(`void sample207(std::weak_ptr<uint64_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0052 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0052 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0052 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0053', () => {
    try {
      const r = parsec.parseFunction(`std::weak_ptr<uint64_t> sampleRet207();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0053 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0053 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0053 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0054', () => {
    try {
      const r = parsec.parseClass(`class SampleClass207 { public: std::weak_ptr<uint64_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0054 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0054 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0054 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0055', () => {
    try {
      const r = parsec.parseFunction(`void pipeline207(std::weak_ptr<uint64_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0055 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0055 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0055 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0056', () => {
    try {
      const result = transTskey2Ckey('std::weak_ptr<int8_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0056 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_combo_0056 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0056 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0057', () => {
    try {
      const r = parsec.parseFunction(`void sample208(std::weak_ptr<int8_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0057 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0057 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0057 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0058', () => {
    try {
      const r = parsec.parseFunction(`std::weak_ptr<int8_t> sampleRet208();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0058 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0058 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0058 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0059', () => {
    try {
      const r = parsec.parseClass(`class SampleClass208 { public: std::weak_ptr<int8_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0059 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0059 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0059 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0060', () => {
    try {
      const r = parsec.parseFunction(`void pipeline208(std::weak_ptr<int8_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0060 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0060 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0060 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0061', () => {
    try {
      const result = transTskey2Ckey('std::weak_ptr<int16_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0061 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_combo_0061 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0061 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0062', () => {
    try {
      const r = parsec.parseFunction(`void sample209(std::weak_ptr<int16_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0062 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0062 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0062 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0063', () => {
    try {
      const r = parsec.parseFunction(`std::weak_ptr<int16_t> sampleRet209();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0063 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0063 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0063 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0064', () => {
    try {
      const r = parsec.parseClass(`class SampleClass209 { public: std::weak_ptr<int16_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0064 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0064 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0064 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0065', () => {
    try {
      const r = parsec.parseFunction(`void pipeline209(std::weak_ptr<int16_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0065 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0065 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0065 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0066', () => {
    try {
      const result = transTskey2Ckey('std::weak_ptr<int32_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0066 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_combo_0066 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0066 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0067', () => {
    try {
      const r = parsec.parseFunction(`void sample210(std::weak_ptr<int32_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0067 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0067 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0067 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0068', () => {
    try {
      const r = parsec.parseFunction(`std::weak_ptr<int32_t> sampleRet210();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0068 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0068 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0068 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0069', () => {
    try {
      const r = parsec.parseClass(`class SampleClass210 { public: std::weak_ptr<int32_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0069 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0069 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0069 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0070', () => {
    try {
      const r = parsec.parseFunction(`void pipeline210(std::weak_ptr<int32_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0070 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0070 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0070 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0071', () => {
    try {
      const result = transTskey2Ckey('std::weak_ptr<int64_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0071 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_combo_0071 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0071 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0072', () => {
    try {
      const r = parsec.parseFunction(`void sample211(std::weak_ptr<int64_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0072 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0072 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0072 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0073', () => {
    try {
      const r = parsec.parseFunction(`std::weak_ptr<int64_t> sampleRet211();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0073 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0073 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0073 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0074', () => {
    try {
      const r = parsec.parseClass(`class SampleClass211 { public: std::weak_ptr<int64_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0074 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0074 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0074 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0075', () => {
    try {
      const r = parsec.parseFunction(`void pipeline211(std::weak_ptr<int64_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0075 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0075 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0075 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0076', () => {
    try {
      const result = transTskey2Ckey('std::weak_ptr<bool>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0076 convert output non-empty");
      assert.strictEqual(result, "boolean", "h2dts_convert_combo_0076 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0076 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0077', () => {
    try {
      const r = parsec.parseFunction(`void sample212(std::weak_ptr<bool> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0077 param convert output non-empty");
      assert.strictEqual(converted, "boolean", "h2dts_convert_combo_0077 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0077 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0078', () => {
    try {
      const r = parsec.parseFunction(`std::weak_ptr<bool> sampleRet212();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0078 return convert output non-empty");
      assert.strictEqual(converted, "boolean", "h2dts_convert_combo_0078 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0078 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0079', () => {
    try {
      const r = parsec.parseClass(`class SampleClass212 { public: std::weak_ptr<bool> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0079 class field convert output non-empty");
      assert.strictEqual(converted, "boolean", "h2dts_convert_combo_0079 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0079 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0080', () => {
    try {
      const r = parsec.parseFunction(`void pipeline212(std::weak_ptr<bool> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0080 pipeline convert output non-empty");
      assert.strictEqual(converted, "boolean", "h2dts_convert_combo_0080 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0080 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0081', () => {
    try {
      const result = transTskey2Ckey('std::weak_ptr<char>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0081 convert output non-empty");
      assert.strictEqual(result, "string", "h2dts_convert_combo_0081 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0081 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0082', () => {
    try {
      const r = parsec.parseFunction(`void sample213(std::weak_ptr<char> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0082 param convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0082 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0082 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0083', () => {
    try {
      const r = parsec.parseFunction(`std::weak_ptr<char> sampleRet213();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0083 return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0083 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0083 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0084', () => {
    try {
      const r = parsec.parseClass(`class SampleClass213 { public: std::weak_ptr<char> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0084 class field convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0084 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0084 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0085', () => {
    try {
      const r = parsec.parseFunction(`void pipeline213(std::weak_ptr<char> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0085 pipeline convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0085 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0085 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0086', () => {
    try {
      const result = transTskey2Ckey('std::weak_ptr<wchar_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0086 convert output non-empty");
      assert.strictEqual(result, "string", "h2dts_convert_combo_0086 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0086 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0087', () => {
    try {
      const r = parsec.parseFunction(`void sample214(std::weak_ptr<wchar_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0087 param convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0087 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0087 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0088', () => {
    try {
      const r = parsec.parseFunction(`std::weak_ptr<wchar_t> sampleRet214();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0088 return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0088 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0088 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0089', () => {
    try {
      const r = parsec.parseClass(`class SampleClass214 { public: std::weak_ptr<wchar_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0089 class field convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0089 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0089 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0090', () => {
    try {
      const r = parsec.parseFunction(`void pipeline214(std::weak_ptr<wchar_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0090 pipeline convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0090 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0090 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0091', () => {
    try {
      const result = transTskey2Ckey('std::weak_ptr<char8_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0091 convert output non-empty");
      assert.strictEqual(result, "string", "h2dts_convert_combo_0091 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0091 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0092', () => {
    try {
      const r = parsec.parseFunction(`void sample215(std::weak_ptr<char8_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0092 param convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0092 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0092 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0093', () => {
    try {
      const r = parsec.parseFunction(`std::weak_ptr<char8_t> sampleRet215();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0093 return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0093 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0093 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0094', () => {
    try {
      const r = parsec.parseClass(`class SampleClass215 { public: std::weak_ptr<char8_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0094 class field convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0094 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0094 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0095', () => {
    try {
      const r = parsec.parseFunction(`void pipeline215(std::weak_ptr<char8_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0095 pipeline convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0095 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0095 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0096', () => {
    try {
      const result = transTskey2Ckey('std::weak_ptr<char16_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0096 convert output non-empty");
      assert.strictEqual(result, "string", "h2dts_convert_combo_0096 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0096 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0097', () => {
    try {
      const r = parsec.parseFunction(`void sample216(std::weak_ptr<char16_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0097 param convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0097 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0097 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0098', () => {
    try {
      const r = parsec.parseFunction(`std::weak_ptr<char16_t> sampleRet216();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0098 return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0098 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0098 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0099', () => {
    try {
      const r = parsec.parseClass(`class SampleClass216 { public: std::weak_ptr<char16_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0099 class field convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0099 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0099 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0100', () => {
    try {
      const r = parsec.parseFunction(`void pipeline216(std::weak_ptr<char16_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0100 pipeline convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0100 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0100 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0101', () => {
    try {
      const result = transTskey2Ckey('std::weak_ptr<char32_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0101 convert output non-empty");
      assert.strictEqual(result, "string", "h2dts_convert_combo_0101 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0101 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0102', () => {
    try {
      const r = parsec.parseFunction(`void sample217(std::weak_ptr<char32_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0102 param convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0102 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0102 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0103', () => {
    try {
      const r = parsec.parseFunction(`std::weak_ptr<char32_t> sampleRet217();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0103 return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0103 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0103 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0104', () => {
    try {
      const r = parsec.parseClass(`class SampleClass217 { public: std::weak_ptr<char32_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0104 class field convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0104 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0104 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0105', () => {
    try {
      const r = parsec.parseFunction(`void pipeline217(std::weak_ptr<char32_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0105 pipeline convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0105 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0105 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0106', () => {
    try {
      const result = transTskey2Ckey('std::weak_ptr<std::string>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0106 convert output non-empty");
      assert.strictEqual(result, "string", "h2dts_convert_combo_0106 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0106 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0107', () => {
    try {
      const r = parsec.parseFunction(`void sample283(std::weak_ptr<std::string> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0107 param convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0107 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0107 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0108', () => {
    try {
      const r = parsec.parseFunction(`std::weak_ptr<std::string> sampleRet283();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0108 return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0108 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0108 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0109', () => {
    try {
      const r = parsec.parseClass(`class SampleClass283 { public: std::weak_ptr<std::string> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0109 class field convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0109 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0109 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0110', () => {
    try {
      const r = parsec.parseFunction(`void pipeline283(std::weak_ptr<std::string> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0110 pipeline convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0110 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0110 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0111', () => {
    try {
      const result = transTskey2Ckey('std::weak_ptr<char *>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0111 convert output non-empty");
      assert.strictEqual(result, "string", "h2dts_convert_combo_0111 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0111 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0112', () => {
    try {
      const r = parsec.parseFunction(`void sample284(std::weak_ptr<char *> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0112 param convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0112 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0112 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0113', () => {
    try {
      const r = parsec.parseFunction(`std::weak_ptr<char *> sampleRet284();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0113 return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0113 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0113 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0114', () => {
    try {
      const r = parsec.parseClass(`class SampleClass284 { public: std::weak_ptr<char *> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0114 class field convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0114 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0114 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0115', () => {
    try {
      const r = parsec.parseFunction(`void pipeline284(std::weak_ptr<char *> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0115 pipeline convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0115 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0115 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0116', () => {
    try {
      const result = transTskey2Ckey('std::weak_ptr<long long>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0116 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_combo_0116 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0116 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0117', () => {
    try {
      const r = parsec.parseFunction(`void sample285(std::weak_ptr<long long> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0117 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0117 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0117 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0118', () => {
    try {
      const r = parsec.parseFunction(`std::weak_ptr<long long> sampleRet285();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0118 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0118 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0118 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0119', () => {
    try {
      const r = parsec.parseClass(`class SampleClass285 { public: std::weak_ptr<long long> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0119 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0119 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0119 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0120', () => {
    try {
      const r = parsec.parseFunction(`void pipeline285(std::weak_ptr<long long> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0120 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0120 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0120 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0121', () => {
    try {
      const result = transTskey2Ckey('std::weak_ptr<unsigned short>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0121 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_combo_0121 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0121 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0122', () => {
    try {
      const r = parsec.parseFunction(`void sample286(std::weak_ptr<unsigned short> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0122 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0122 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0122 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0123', () => {
    try {
      const r = parsec.parseFunction(`std::weak_ptr<unsigned short> sampleRet286();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0123 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0123 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0123 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0124', () => {
    try {
      const r = parsec.parseClass(`class SampleClass286 { public: std::weak_ptr<unsigned short> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0124 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0124 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0124 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0125', () => {
    try {
      const r = parsec.parseFunction(`void pipeline286(std::weak_ptr<unsigned short> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0125 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0125 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0125 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0126', () => {
    try {
      const result = transTskey2Ckey('std::weak_ptr<unsigned long>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0126 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_combo_0126 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0126 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0127', () => {
    try {
      const r = parsec.parseFunction(`void sample287(std::weak_ptr<unsigned long> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0127 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0127 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0127 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0128', () => {
    try {
      const r = parsec.parseFunction(`std::weak_ptr<unsigned long> sampleRet287();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0128 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0128 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0128 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0129', () => {
    try {
      const r = parsec.parseClass(`class SampleClass287 { public: std::weak_ptr<unsigned long> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0129 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0129 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0129 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0130', () => {
    try {
      const r = parsec.parseFunction(`void pipeline287(std::weak_ptr<unsigned long> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0130 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0130 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0130 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0131', () => {
    try {
      const result = transTskey2Ckey('std::weak_ptr<unsigned long long>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0131 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_combo_0131 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0131 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0132', () => {
    try {
      const r = parsec.parseFunction(`void sample288(std::weak_ptr<unsigned long long> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0132 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0132 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0132 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0133', () => {
    try {
      const r = parsec.parseFunction(`std::weak_ptr<unsigned long long> sampleRet288();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0133 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0133 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0133 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0134', () => {
    try {
      const r = parsec.parseClass(`class SampleClass288 { public: std::weak_ptr<unsigned long long> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0134 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0134 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0134 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0135', () => {
    try {
      const r = parsec.parseFunction(`void pipeline288(std::weak_ptr<unsigned long long> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0135 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0135 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0135 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0136', () => {
    try {
      const result = transTskey2Ckey('std::weak_ptr<int *>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0136 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_combo_0136 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0136 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0137', () => {
    try {
      const r = parsec.parseFunction(`void sample289(std::weak_ptr<int *> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0137 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0137 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0137 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0138', () => {
    try {
      const r = parsec.parseFunction(`std::weak_ptr<int *> sampleRet289();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0138 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0138 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0138 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0139', () => {
    try {
      const r = parsec.parseClass(`class SampleClass289 { public: std::weak_ptr<int *> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0139 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0139 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0139 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0140', () => {
    try {
      const r = parsec.parseFunction(`void pipeline289(std::weak_ptr<int *> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0140 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_combo_0140 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0140 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0141', () => {
    try {
      const result = transTskey2Ckey('any');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0141 convert output non-empty");
      assert.strictEqual(result, "any", "h2dts_convert_combo_0141 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0141 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0142', () => {
    try {
      const r = parsec.parseFunction(`void sample291(any p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0142 param convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_combo_0142 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0142 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0143', () => {
    try {
      const r = parsec.parseFunction(`any sampleRet291();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0143 return convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_combo_0143 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0143 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0144', () => {
    try {
      const r = parsec.parseClass(`class SampleClass291 { public: any field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0144 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_combo_0144 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0144 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0145', () => {
    try {
      const r = parsec.parseFunction(`void pipeline291(any p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0145 pipeline convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_combo_0145 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0145 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0146', () => {
    try {
      const result = transTskey2Ckey('object');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0146 convert output non-empty");
      assert.strictEqual(result, "any", "h2dts_convert_combo_0146 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0146 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0147', () => {
    try {
      const r = parsec.parseFunction(`void sample292(object p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0147 param convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_combo_0147 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0147 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0148', () => {
    try {
      const r = parsec.parseFunction(`object sampleRet292();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0148 return convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_combo_0148 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0148 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0149', () => {
    try {
      const r = parsec.parseClass(`class SampleClass292 { public: object field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0149 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_combo_0149 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0149 execution error: ${String(err)}`);
    }
  });
});
