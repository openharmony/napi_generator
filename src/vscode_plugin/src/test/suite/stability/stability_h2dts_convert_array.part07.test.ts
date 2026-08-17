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

suite('Stability_H2DTS_CONVERT_ARRAY_Part07', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_CONVERT_ARRAY_Part07.');


  test('h2dts_convert_array_0001', () => {
    try {
      const r = parsec.parseFunction(`void pipeline416(std::stack<float> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0001 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0001 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0001 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0002', () => {
    try {
      const result = transTskey2Ckey('std::stack<long>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0002 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0002 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0002 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0003', () => {
    try {
      const r = parsec.parseFunction(`void sample417(std::stack<long> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0003 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0003 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0003 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0004', () => {
    try {
      const r = parsec.parseFunction(`std::stack<long> sampleRet417();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0004 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0004 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0004 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0005', () => {
    try {
      const r = parsec.parseClass(`class SampleClass417 { public: std::stack<long> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0005 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0005 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0005 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0006', () => {
    try {
      const r = parsec.parseFunction(`void pipeline417(std::stack<long> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0006 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0006 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0006 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0007', () => {
    try {
      const result = transTskey2Ckey('std::stack<short>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0007 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0007 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0007 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0008', () => {
    try {
      const r = parsec.parseFunction(`void sample418(std::stack<short> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0008 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0008 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0008 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0009', () => {
    try {
      const r = parsec.parseFunction(`std::stack<short> sampleRet418();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0009 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0009 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0009 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0010', () => {
    try {
      const r = parsec.parseClass(`class SampleClass418 { public: std::stack<short> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0010 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0010 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0010 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0011', () => {
    try {
      const r = parsec.parseFunction(`void pipeline418(std::stack<short> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0011 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0011 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0011 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0012', () => {
    try {
      const result = transTskey2Ckey('std::stack<uint8_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0012 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0012 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0012 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0013', () => {
    try {
      const r = parsec.parseFunction(`void sample419(std::stack<uint8_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0013 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0013 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0013 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0014', () => {
    try {
      const r = parsec.parseFunction(`std::stack<uint8_t> sampleRet419();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0014 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0014 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0014 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0015', () => {
    try {
      const r = parsec.parseClass(`class SampleClass419 { public: std::stack<uint8_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0015 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0015 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0015 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0016', () => {
    try {
      const r = parsec.parseFunction(`void pipeline419(std::stack<uint8_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0016 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0016 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0016 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0017', () => {
    try {
      const result = transTskey2Ckey('std::stack<uint16_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0017 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0017 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0017 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0018', () => {
    try {
      const r = parsec.parseFunction(`void sample420(std::stack<uint16_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0018 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0018 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0018 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0019', () => {
    try {
      const r = parsec.parseFunction(`std::stack<uint16_t> sampleRet420();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0019 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0019 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0019 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0020', () => {
    try {
      const r = parsec.parseClass(`class SampleClass420 { public: std::stack<uint16_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0020 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0020 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0020 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0021', () => {
    try {
      const r = parsec.parseFunction(`void pipeline420(std::stack<uint16_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0021 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0021 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0021 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0022', () => {
    try {
      const result = transTskey2Ckey('std::stack<uint32_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0022 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0022 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0022 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0023', () => {
    try {
      const r = parsec.parseFunction(`void sample421(std::stack<uint32_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0023 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0023 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0023 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0024', () => {
    try {
      const r = parsec.parseFunction(`std::stack<uint32_t> sampleRet421();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0024 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0024 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0024 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0025', () => {
    try {
      const r = parsec.parseClass(`class SampleClass421 { public: std::stack<uint32_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0025 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0025 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0025 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0026', () => {
    try {
      const r = parsec.parseFunction(`void pipeline421(std::stack<uint32_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0026 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0026 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0026 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0027', () => {
    try {
      const result = transTskey2Ckey('std::stack<uint64_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0027 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0027 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0027 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0028', () => {
    try {
      const r = parsec.parseFunction(`void sample422(std::stack<uint64_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0028 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0028 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0028 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0029', () => {
    try {
      const r = parsec.parseFunction(`std::stack<uint64_t> sampleRet422();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0029 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0029 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0029 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0030', () => {
    try {
      const r = parsec.parseClass(`class SampleClass422 { public: std::stack<uint64_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0030 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0030 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0030 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0031', () => {
    try {
      const r = parsec.parseFunction(`void pipeline422(std::stack<uint64_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0031 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0031 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0031 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0032', () => {
    try {
      const result = transTskey2Ckey('std::stack<int8_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0032 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0032 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0032 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0033', () => {
    try {
      const r = parsec.parseFunction(`void sample423(std::stack<int8_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0033 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0033 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0033 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0034', () => {
    try {
      const r = parsec.parseFunction(`std::stack<int8_t> sampleRet423();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0034 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0034 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0034 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0035', () => {
    try {
      const r = parsec.parseClass(`class SampleClass423 { public: std::stack<int8_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0035 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0035 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0035 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0036', () => {
    try {
      const r = parsec.parseFunction(`void pipeline423(std::stack<int8_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0036 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0036 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0036 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0037', () => {
    try {
      const result = transTskey2Ckey('std::stack<int16_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0037 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0037 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0037 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0038', () => {
    try {
      const r = parsec.parseFunction(`void sample424(std::stack<int16_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0038 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0038 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0038 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0039', () => {
    try {
      const r = parsec.parseFunction(`std::stack<int16_t> sampleRet424();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0039 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0039 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0039 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0040', () => {
    try {
      const r = parsec.parseClass(`class SampleClass424 { public: std::stack<int16_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0040 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0040 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0040 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0041', () => {
    try {
      const r = parsec.parseFunction(`void pipeline424(std::stack<int16_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0041 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0041 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0041 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0042', () => {
    try {
      const result = transTskey2Ckey('std::stack<int32_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0042 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0042 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0042 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0043', () => {
    try {
      const r = parsec.parseFunction(`void sample425(std::stack<int32_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0043 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0043 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0043 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0044', () => {
    try {
      const r = parsec.parseFunction(`std::stack<int32_t> sampleRet425();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0044 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0044 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0044 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0045', () => {
    try {
      const r = parsec.parseClass(`class SampleClass425 { public: std::stack<int32_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0045 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0045 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0045 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0046', () => {
    try {
      const r = parsec.parseFunction(`void pipeline425(std::stack<int32_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0046 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0046 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0046 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0047', () => {
    try {
      const result = transTskey2Ckey('std::stack<int64_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0047 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0047 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0047 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0048', () => {
    try {
      const r = parsec.parseFunction(`void sample426(std::stack<int64_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0048 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0048 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0048 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0049', () => {
    try {
      const r = parsec.parseFunction(`std::stack<int64_t> sampleRet426();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0049 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0049 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0049 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0050', () => {
    try {
      const r = parsec.parseClass(`class SampleClass426 { public: std::stack<int64_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0050 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0050 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0050 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0051', () => {
    try {
      const r = parsec.parseFunction(`void pipeline426(std::stack<int64_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0051 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0051 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0051 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0052', () => {
    try {
      const result = transTskey2Ckey('std::stack<unsigned>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0052 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0052 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0052 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0053', () => {
    try {
      const r = parsec.parseFunction(`void sample427(std::stack<unsigned> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0053 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0053 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0053 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0054', () => {
    try {
      const r = parsec.parseFunction(`std::stack<unsigned> sampleRet427();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0054 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0054 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0054 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0055', () => {
    try {
      const r = parsec.parseClass(`class SampleClass427 { public: std::stack<unsigned> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0055 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0055 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0055 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0056', () => {
    try {
      const r = parsec.parseFunction(`void pipeline427(std::stack<unsigned> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0056 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0056 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0056 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0057', () => {
    try {
      const result = transTskey2Ckey('std::stack<bool>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0057 convert output non-empty");
      assert.strictEqual(result, "Array<boolean>", "h2dts_convert_array_0057 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0057 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0058', () => {
    try {
      const r = parsec.parseFunction(`void sample428(std::stack<bool> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0058 param convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>", "h2dts_convert_array_0058 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0058 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0059', () => {
    try {
      const r = parsec.parseFunction(`std::stack<bool> sampleRet428();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0059 return convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>", "h2dts_convert_array_0059 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0059 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0060', () => {
    try {
      const r = parsec.parseClass(`class SampleClass428 { public: std::stack<bool> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0060 class field convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>", "h2dts_convert_array_0060 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0060 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0061', () => {
    try {
      const r = parsec.parseFunction(`void pipeline428(std::stack<bool> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0061 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>", "h2dts_convert_array_0061 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0061 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0062', () => {
    try {
      const result = transTskey2Ckey('std::stack<char>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0062 convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_array_0062 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0062 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0063', () => {
    try {
      const r = parsec.parseFunction(`void sample429(std::stack<char> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0063 param convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0063 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0063 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0064', () => {
    try {
      const r = parsec.parseFunction(`std::stack<char> sampleRet429();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0064 return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0064 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0064 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0065', () => {
    try {
      const r = parsec.parseClass(`class SampleClass429 { public: std::stack<char> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0065 class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0065 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0065 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0066', () => {
    try {
      const r = parsec.parseFunction(`void pipeline429(std::stack<char> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0066 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0066 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0066 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0067', () => {
    try {
      const result = transTskey2Ckey('std::stack<wchar_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0067 convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_array_0067 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0067 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0068', () => {
    try {
      const r = parsec.parseFunction(`void sample430(std::stack<wchar_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0068 param convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0068 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0068 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0069', () => {
    try {
      const r = parsec.parseFunction(`std::stack<wchar_t> sampleRet430();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0069 return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0069 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0069 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0070', () => {
    try {
      const r = parsec.parseClass(`class SampleClass430 { public: std::stack<wchar_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0070 class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0070 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0070 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0071', () => {
    try {
      const r = parsec.parseFunction(`void pipeline430(std::stack<wchar_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0071 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0071 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0071 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0072', () => {
    try {
      const result = transTskey2Ckey('std::stack<char8_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0072 convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_array_0072 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0072 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0073', () => {
    try {
      const r = parsec.parseFunction(`void sample431(std::stack<char8_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0073 param convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0073 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0073 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0074', () => {
    try {
      const r = parsec.parseFunction(`std::stack<char8_t> sampleRet431();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0074 return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0074 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0074 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0075', () => {
    try {
      const r = parsec.parseClass(`class SampleClass431 { public: std::stack<char8_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0075 class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0075 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0075 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0076', () => {
    try {
      const r = parsec.parseFunction(`void pipeline431(std::stack<char8_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0076 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0076 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0076 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0077', () => {
    try {
      const result = transTskey2Ckey('std::stack<char16_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0077 convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_array_0077 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0077 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0078', () => {
    try {
      const r = parsec.parseFunction(`void sample432(std::stack<char16_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0078 param convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0078 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0078 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0079', () => {
    try {
      const r = parsec.parseFunction(`std::stack<char16_t> sampleRet432();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0079 return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0079 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0079 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0080', () => {
    try {
      const r = parsec.parseClass(`class SampleClass432 { public: std::stack<char16_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0080 class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0080 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0080 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0081', () => {
    try {
      const r = parsec.parseFunction(`void pipeline432(std::stack<char16_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0081 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0081 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0081 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0082', () => {
    try {
      const result = transTskey2Ckey('std::stack<char32_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0082 convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_array_0082 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0082 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0083', () => {
    try {
      const r = parsec.parseFunction(`void sample433(std::stack<char32_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0083 param convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0083 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0083 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0084', () => {
    try {
      const r = parsec.parseFunction(`std::stack<char32_t> sampleRet433();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0084 return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0084 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0084 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0085', () => {
    try {
      const r = parsec.parseClass(`class SampleClass433 { public: std::stack<char32_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0085 class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0085 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0085 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0086', () => {
    try {
      const r = parsec.parseFunction(`void pipeline433(std::stack<char32_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0086 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0086 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0086 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0087', () => {
    try {
      const result = transTskey2Ckey('std::queue<int>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0087 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0087 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0087 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0088', () => {
    try {
      const r = parsec.parseFunction(`void sample455(std::queue<int> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0088 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0088 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0088 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0089', () => {
    try {
      const r = parsec.parseFunction(`std::queue<int> sampleRet455();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0089 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0089 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0089 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0090', () => {
    try {
      const r = parsec.parseClass(`class SampleClass455 { public: std::queue<int> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0090 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0090 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0090 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0091', () => {
    try {
      const r = parsec.parseFunction(`void pipeline455(std::queue<int> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0091 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0091 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0091 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0092', () => {
    try {
      const result = transTskey2Ckey('std::queue<size_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0092 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0092 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0092 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0093', () => {
    try {
      const r = parsec.parseFunction(`void sample456(std::queue<size_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0093 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0093 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0093 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0094', () => {
    try {
      const r = parsec.parseFunction(`std::queue<size_t> sampleRet456();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0094 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0094 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0094 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0095', () => {
    try {
      const r = parsec.parseClass(`class SampleClass456 { public: std::queue<size_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0095 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0095 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0095 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0096', () => {
    try {
      const r = parsec.parseFunction(`void pipeline456(std::queue<size_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0096 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0096 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0096 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0097', () => {
    try {
      const result = transTskey2Ckey('std::queue<double>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0097 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0097 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0097 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0098', () => {
    try {
      const r = parsec.parseFunction(`void sample457(std::queue<double> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0098 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0098 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0098 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0099', () => {
    try {
      const r = parsec.parseFunction(`std::queue<double> sampleRet457();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0099 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0099 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0099 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0100', () => {
    try {
      const r = parsec.parseClass(`class SampleClass457 { public: std::queue<double> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0100 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0100 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0100 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0101', () => {
    try {
      const r = parsec.parseFunction(`void pipeline457(std::queue<double> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0101 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0101 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0101 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0102', () => {
    try {
      const result = transTskey2Ckey('std::queue<float>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0102 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0102 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0102 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0103', () => {
    try {
      const r = parsec.parseFunction(`void sample458(std::queue<float> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0103 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0103 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0103 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0104', () => {
    try {
      const r = parsec.parseFunction(`std::queue<float> sampleRet458();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0104 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0104 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0104 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0105', () => {
    try {
      const r = parsec.parseClass(`class SampleClass458 { public: std::queue<float> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0105 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0105 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0105 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0106', () => {
    try {
      const r = parsec.parseFunction(`void pipeline458(std::queue<float> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0106 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0106 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0106 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0107', () => {
    try {
      const result = transTskey2Ckey('std::queue<long>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0107 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0107 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0107 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0108', () => {
    try {
      const r = parsec.parseFunction(`void sample459(std::queue<long> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0108 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0108 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0108 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0109', () => {
    try {
      const r = parsec.parseFunction(`std::queue<long> sampleRet459();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0109 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0109 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0109 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0110', () => {
    try {
      const r = parsec.parseClass(`class SampleClass459 { public: std::queue<long> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0110 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0110 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0110 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0111', () => {
    try {
      const r = parsec.parseFunction(`void pipeline459(std::queue<long> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0111 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0111 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0111 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0112', () => {
    try {
      const result = transTskey2Ckey('std::queue<short>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0112 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0112 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0112 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0113', () => {
    try {
      const r = parsec.parseFunction(`void sample460(std::queue<short> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0113 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0113 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0113 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0114', () => {
    try {
      const r = parsec.parseFunction(`std::queue<short> sampleRet460();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0114 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0114 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0114 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0115', () => {
    try {
      const r = parsec.parseClass(`class SampleClass460 { public: std::queue<short> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0115 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0115 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0115 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0116', () => {
    try {
      const r = parsec.parseFunction(`void pipeline460(std::queue<short> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0116 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0116 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0116 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0117', () => {
    try {
      const result = transTskey2Ckey('std::queue<uint8_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0117 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0117 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0117 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0118', () => {
    try {
      const r = parsec.parseFunction(`void sample461(std::queue<uint8_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0118 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0118 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0118 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0119', () => {
    try {
      const r = parsec.parseFunction(`std::queue<uint8_t> sampleRet461();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0119 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0119 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0119 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0120', () => {
    try {
      const r = parsec.parseClass(`class SampleClass461 { public: std::queue<uint8_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0120 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0120 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0120 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0121', () => {
    try {
      const r = parsec.parseFunction(`void pipeline461(std::queue<uint8_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0121 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0121 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0121 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0122', () => {
    try {
      const result = transTskey2Ckey('std::queue<uint16_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0122 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0122 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0122 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0123', () => {
    try {
      const r = parsec.parseFunction(`void sample462(std::queue<uint16_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0123 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0123 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0123 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0124', () => {
    try {
      const r = parsec.parseFunction(`std::queue<uint16_t> sampleRet462();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0124 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0124 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0124 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0125', () => {
    try {
      const r = parsec.parseClass(`class SampleClass462 { public: std::queue<uint16_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0125 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0125 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0125 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0126', () => {
    try {
      const r = parsec.parseFunction(`void pipeline462(std::queue<uint16_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0126 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0126 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0126 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0127', () => {
    try {
      const result = transTskey2Ckey('std::queue<uint32_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0127 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0127 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0127 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0128', () => {
    try {
      const r = parsec.parseFunction(`void sample463(std::queue<uint32_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0128 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0128 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0128 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0129', () => {
    try {
      const r = parsec.parseFunction(`std::queue<uint32_t> sampleRet463();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0129 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0129 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0129 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0130', () => {
    try {
      const r = parsec.parseClass(`class SampleClass463 { public: std::queue<uint32_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0130 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0130 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0130 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0131', () => {
    try {
      const r = parsec.parseFunction(`void pipeline463(std::queue<uint32_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0131 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0131 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0131 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0132', () => {
    try {
      const result = transTskey2Ckey('std::queue<uint64_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0132 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0132 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0132 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0133', () => {
    try {
      const r = parsec.parseFunction(`void sample464(std::queue<uint64_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0133 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0133 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0133 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0134', () => {
    try {
      const r = parsec.parseFunction(`std::queue<uint64_t> sampleRet464();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0134 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0134 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0134 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0135', () => {
    try {
      const r = parsec.parseClass(`class SampleClass464 { public: std::queue<uint64_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0135 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0135 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0135 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0136', () => {
    try {
      const r = parsec.parseFunction(`void pipeline464(std::queue<uint64_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0136 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0136 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0136 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0137', () => {
    try {
      const result = transTskey2Ckey('std::queue<int8_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0137 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0137 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0137 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0138', () => {
    try {
      const r = parsec.parseFunction(`void sample465(std::queue<int8_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0138 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0138 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0138 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0139', () => {
    try {
      const r = parsec.parseFunction(`std::queue<int8_t> sampleRet465();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0139 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0139 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0139 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0140', () => {
    try {
      const r = parsec.parseClass(`class SampleClass465 { public: std::queue<int8_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0140 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0140 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0140 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0141', () => {
    try {
      const r = parsec.parseFunction(`void pipeline465(std::queue<int8_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0141 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0141 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0141 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0142', () => {
    try {
      const result = transTskey2Ckey('std::queue<int16_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0142 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0142 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0142 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0143', () => {
    try {
      const r = parsec.parseFunction(`void sample466(std::queue<int16_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0143 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0143 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0143 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0144', () => {
    try {
      const r = parsec.parseFunction(`std::queue<int16_t> sampleRet466();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0144 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0144 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0144 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0145', () => {
    try {
      const r = parsec.parseClass(`class SampleClass466 { public: std::queue<int16_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0145 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0145 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0145 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0146', () => {
    try {
      const r = parsec.parseFunction(`void pipeline466(std::queue<int16_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0146 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0146 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0146 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0147', () => {
    try {
      const result = transTskey2Ckey('std::queue<int32_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0147 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0147 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0147 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0148', () => {
    try {
      const r = parsec.parseFunction(`void sample467(std::queue<int32_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0148 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0148 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0148 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0149', () => {
    try {
      const r = parsec.parseFunction(`std::queue<int32_t> sampleRet467();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0149 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0149 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0149 execution error: ${String(err)}`);
    }
  });
});
