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

suite('Stability_H2DTS_CONVERT_ARRAY_Part04', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_CONVERT_ARRAY_Part04.');


  test('h2dts_convert_array_0001', () => {
    try {
      const r = parsec.parseFunction(`std::forward_list<short> sampleRet110();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0001 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0001 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0001 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0002', () => {
    try {
      const r = parsec.parseClass(`class SampleClass110 { public: std::forward_list<short> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0002 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0002 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0002 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0003', () => {
    try {
      const r = parsec.parseFunction(`void pipeline110(std::forward_list<short> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0003 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0003 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0003 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0004', () => {
    try {
      const result = transTskey2Ckey('std::forward_list<uint8_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0004 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0004 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0004 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0005', () => {
    try {
      const r = parsec.parseFunction(`void sample111(std::forward_list<uint8_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0005 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0005 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0005 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0006', () => {
    try {
      const r = parsec.parseFunction(`std::forward_list<uint8_t> sampleRet111();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0006 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0006 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0006 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0007', () => {
    try {
      const r = parsec.parseClass(`class SampleClass111 { public: std::forward_list<uint8_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0007 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0007 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0007 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0008', () => {
    try {
      const r = parsec.parseFunction(`void pipeline111(std::forward_list<uint8_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0008 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0008 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0008 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0009', () => {
    try {
      const result = transTskey2Ckey('std::forward_list<uint16_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0009 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0009 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0009 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0010', () => {
    try {
      const r = parsec.parseFunction(`void sample112(std::forward_list<uint16_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0010 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0010 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0010 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0011', () => {
    try {
      const r = parsec.parseFunction(`std::forward_list<uint16_t> sampleRet112();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0011 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0011 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0011 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0012', () => {
    try {
      const r = parsec.parseClass(`class SampleClass112 { public: std::forward_list<uint16_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0012 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0012 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0012 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0013', () => {
    try {
      const r = parsec.parseFunction(`void pipeline112(std::forward_list<uint16_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0013 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0013 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0013 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0014', () => {
    try {
      const result = transTskey2Ckey('std::forward_list<uint32_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0014 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0014 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0014 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0015', () => {
    try {
      const r = parsec.parseFunction(`void sample113(std::forward_list<uint32_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0015 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0015 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0015 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0016', () => {
    try {
      const r = parsec.parseFunction(`std::forward_list<uint32_t> sampleRet113();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0016 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0016 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0016 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0017', () => {
    try {
      const r = parsec.parseClass(`class SampleClass113 { public: std::forward_list<uint32_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0017 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0017 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0017 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0018', () => {
    try {
      const r = parsec.parseFunction(`void pipeline113(std::forward_list<uint32_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0018 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0018 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0018 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0019', () => {
    try {
      const result = transTskey2Ckey('std::forward_list<uint64_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0019 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0019 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0019 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0020', () => {
    try {
      const r = parsec.parseFunction(`void sample114(std::forward_list<uint64_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0020 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0020 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0020 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0021', () => {
    try {
      const r = parsec.parseFunction(`std::forward_list<uint64_t> sampleRet114();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0021 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0021 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0021 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0022', () => {
    try {
      const r = parsec.parseClass(`class SampleClass114 { public: std::forward_list<uint64_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0022 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0022 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0022 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0023', () => {
    try {
      const r = parsec.parseFunction(`void pipeline114(std::forward_list<uint64_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0023 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0023 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0023 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0024', () => {
    try {
      const result = transTskey2Ckey('std::forward_list<int8_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0024 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0024 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0024 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0025', () => {
    try {
      const r = parsec.parseFunction(`void sample115(std::forward_list<int8_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0025 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0025 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0025 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0026', () => {
    try {
      const r = parsec.parseFunction(`std::forward_list<int8_t> sampleRet115();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0026 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0026 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0026 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0027', () => {
    try {
      const r = parsec.parseClass(`class SampleClass115 { public: std::forward_list<int8_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0027 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0027 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0027 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0028', () => {
    try {
      const r = parsec.parseFunction(`void pipeline115(std::forward_list<int8_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0028 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0028 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0028 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0029', () => {
    try {
      const result = transTskey2Ckey('std::forward_list<int16_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0029 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0029 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0029 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0030', () => {
    try {
      const r = parsec.parseFunction(`void sample116(std::forward_list<int16_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0030 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0030 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0030 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0031', () => {
    try {
      const r = parsec.parseFunction(`std::forward_list<int16_t> sampleRet116();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0031 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0031 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0031 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0032', () => {
    try {
      const r = parsec.parseClass(`class SampleClass116 { public: std::forward_list<int16_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0032 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0032 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0032 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0033', () => {
    try {
      const r = parsec.parseFunction(`void pipeline116(std::forward_list<int16_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0033 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0033 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0033 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0034', () => {
    try {
      const result = transTskey2Ckey('std::forward_list<int32_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0034 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0034 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0034 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0035', () => {
    try {
      const r = parsec.parseFunction(`void sample117(std::forward_list<int32_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0035 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0035 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0035 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0036', () => {
    try {
      const r = parsec.parseFunction(`std::forward_list<int32_t> sampleRet117();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0036 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0036 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0036 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0037', () => {
    try {
      const r = parsec.parseClass(`class SampleClass117 { public: std::forward_list<int32_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0037 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0037 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0037 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0038', () => {
    try {
      const r = parsec.parseFunction(`void pipeline117(std::forward_list<int32_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0038 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0038 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0038 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0039', () => {
    try {
      const result = transTskey2Ckey('std::forward_list<int64_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0039 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0039 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0039 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0040', () => {
    try {
      const r = parsec.parseFunction(`void sample118(std::forward_list<int64_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0040 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0040 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0040 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0041', () => {
    try {
      const r = parsec.parseFunction(`std::forward_list<int64_t> sampleRet118();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0041 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0041 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0041 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0042', () => {
    try {
      const r = parsec.parseClass(`class SampleClass118 { public: std::forward_list<int64_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0042 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0042 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0042 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0043', () => {
    try {
      const r = parsec.parseFunction(`void pipeline118(std::forward_list<int64_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0043 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0043 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0043 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0044', () => {
    try {
      const result = transTskey2Ckey('std::forward_list<unsigned>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0044 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0044 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0044 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0045', () => {
    try {
      const r = parsec.parseFunction(`void sample119(std::forward_list<unsigned> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0045 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0045 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0045 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0046', () => {
    try {
      const r = parsec.parseFunction(`std::forward_list<unsigned> sampleRet119();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0046 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0046 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0046 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0047', () => {
    try {
      const r = parsec.parseClass(`class SampleClass119 { public: std::forward_list<unsigned> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0047 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0047 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0047 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0048', () => {
    try {
      const r = parsec.parseFunction(`void pipeline119(std::forward_list<unsigned> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0048 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0048 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0048 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0049', () => {
    try {
      const result = transTskey2Ckey('std::forward_list<bool>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0049 convert output non-empty");
      assert.strictEqual(result, "Array<boolean>", "h2dts_convert_array_0049 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0049 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0050', () => {
    try {
      const r = parsec.parseFunction(`void sample120(std::forward_list<bool> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0050 param convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>", "h2dts_convert_array_0050 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0050 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0051', () => {
    try {
      const r = parsec.parseFunction(`std::forward_list<bool> sampleRet120();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0051 return convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>", "h2dts_convert_array_0051 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0051 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0052', () => {
    try {
      const r = parsec.parseClass(`class SampleClass120 { public: std::forward_list<bool> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0052 class field convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>", "h2dts_convert_array_0052 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0052 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0053', () => {
    try {
      const r = parsec.parseFunction(`void pipeline120(std::forward_list<bool> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0053 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>", "h2dts_convert_array_0053 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0053 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0054', () => {
    try {
      const result = transTskey2Ckey('std::forward_list<char>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0054 convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_array_0054 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0054 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0055', () => {
    try {
      const r = parsec.parseFunction(`void sample121(std::forward_list<char> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0055 param convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0055 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0055 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0056', () => {
    try {
      const r = parsec.parseFunction(`std::forward_list<char> sampleRet121();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0056 return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0056 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0056 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0057', () => {
    try {
      const r = parsec.parseClass(`class SampleClass121 { public: std::forward_list<char> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0057 class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0057 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0057 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0058', () => {
    try {
      const r = parsec.parseFunction(`void pipeline121(std::forward_list<char> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0058 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0058 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0058 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0059', () => {
    try {
      const result = transTskey2Ckey('std::forward_list<wchar_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0059 convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_array_0059 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0059 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0060', () => {
    try {
      const r = parsec.parseFunction(`void sample122(std::forward_list<wchar_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0060 param convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0060 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0060 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0061', () => {
    try {
      const r = parsec.parseFunction(`std::forward_list<wchar_t> sampleRet122();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0061 return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0061 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0061 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0062', () => {
    try {
      const r = parsec.parseClass(`class SampleClass122 { public: std::forward_list<wchar_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0062 class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0062 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0062 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0063', () => {
    try {
      const r = parsec.parseFunction(`void pipeline122(std::forward_list<wchar_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0063 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0063 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0063 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0064', () => {
    try {
      const result = transTskey2Ckey('std::forward_list<char8_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0064 convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_array_0064 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0064 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0065', () => {
    try {
      const r = parsec.parseFunction(`void sample123(std::forward_list<char8_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0065 param convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0065 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0065 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0066', () => {
    try {
      const r = parsec.parseFunction(`std::forward_list<char8_t> sampleRet123();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0066 return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0066 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0066 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0067', () => {
    try {
      const r = parsec.parseClass(`class SampleClass123 { public: std::forward_list<char8_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0067 class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0067 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0067 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0068', () => {
    try {
      const r = parsec.parseFunction(`void pipeline123(std::forward_list<char8_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0068 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0068 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0068 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0069', () => {
    try {
      const result = transTskey2Ckey('std::forward_list<char16_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0069 convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_array_0069 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0069 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0070', () => {
    try {
      const r = parsec.parseFunction(`void sample124(std::forward_list<char16_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0070 param convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0070 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0070 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0071', () => {
    try {
      const r = parsec.parseFunction(`std::forward_list<char16_t> sampleRet124();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0071 return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0071 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0071 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0072', () => {
    try {
      const r = parsec.parseClass(`class SampleClass124 { public: std::forward_list<char16_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0072 class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0072 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0072 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0073', () => {
    try {
      const r = parsec.parseFunction(`void pipeline124(std::forward_list<char16_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0073 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0073 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0073 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0074', () => {
    try {
      const result = transTskey2Ckey('std::forward_list<char32_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0074 convert output non-empty");
      assert.strictEqual(result, "Array<string>", "h2dts_convert_array_0074 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0074 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0075', () => {
    try {
      const r = parsec.parseFunction(`void sample125(std::forward_list<char32_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0075 param convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0075 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0075 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0076', () => {
    try {
      const r = parsec.parseFunction(`std::forward_list<char32_t> sampleRet125();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0076 return convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0076 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0076 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0077', () => {
    try {
      const r = parsec.parseClass(`class SampleClass125 { public: std::forward_list<char32_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0077 class field convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0077 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0077 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0078', () => {
    try {
      const r = parsec.parseFunction(`void pipeline125(std::forward_list<char32_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0078 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "h2dts_convert_array_0078 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0078 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0079', () => {
    try {
      const result = transTskey2Ckey('std::valarray<int>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0079 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0079 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0079 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0080', () => {
    try {
      const r = parsec.parseFunction(`void sample126(std::valarray<int> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0080 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0080 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0080 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0081', () => {
    try {
      const r = parsec.parseFunction(`std::valarray<int> sampleRet126();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0081 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0081 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0081 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0082', () => {
    try {
      const r = parsec.parseClass(`class SampleClass126 { public: std::valarray<int> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0082 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0082 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0082 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0083', () => {
    try {
      const r = parsec.parseFunction(`void pipeline126(std::valarray<int> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0083 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0083 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0083 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0084', () => {
    try {
      const result = transTskey2Ckey('std::valarray<size_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0084 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0084 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0084 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0085', () => {
    try {
      const r = parsec.parseFunction(`void sample127(std::valarray<size_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0085 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0085 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0085 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0086', () => {
    try {
      const r = parsec.parseFunction(`std::valarray<size_t> sampleRet127();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0086 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0086 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0086 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0087', () => {
    try {
      const r = parsec.parseClass(`class SampleClass127 { public: std::valarray<size_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0087 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0087 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0087 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0088', () => {
    try {
      const r = parsec.parseFunction(`void pipeline127(std::valarray<size_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0088 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0088 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0088 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0089', () => {
    try {
      const result = transTskey2Ckey('std::valarray<double>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0089 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0089 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0089 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0090', () => {
    try {
      const r = parsec.parseFunction(`void sample128(std::valarray<double> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0090 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0090 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0090 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0091', () => {
    try {
      const r = parsec.parseFunction(`std::valarray<double> sampleRet128();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0091 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0091 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0091 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0092', () => {
    try {
      const r = parsec.parseClass(`class SampleClass128 { public: std::valarray<double> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0092 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0092 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0092 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0093', () => {
    try {
      const r = parsec.parseFunction(`void pipeline128(std::valarray<double> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0093 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0093 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0093 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0094', () => {
    try {
      const result = transTskey2Ckey('std::valarray<float>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0094 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0094 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0094 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0095', () => {
    try {
      const r = parsec.parseFunction(`void sample129(std::valarray<float> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0095 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0095 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0095 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0096', () => {
    try {
      const r = parsec.parseFunction(`std::valarray<float> sampleRet129();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0096 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0096 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0096 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0097', () => {
    try {
      const r = parsec.parseClass(`class SampleClass129 { public: std::valarray<float> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0097 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0097 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0097 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0098', () => {
    try {
      const r = parsec.parseFunction(`void pipeline129(std::valarray<float> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0098 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0098 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0098 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0099', () => {
    try {
      const result = transTskey2Ckey('std::valarray<long>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0099 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0099 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0099 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0100', () => {
    try {
      const r = parsec.parseFunction(`void sample130(std::valarray<long> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0100 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0100 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0100 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0101', () => {
    try {
      const r = parsec.parseFunction(`std::valarray<long> sampleRet130();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0101 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0101 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0101 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0102', () => {
    try {
      const r = parsec.parseClass(`class SampleClass130 { public: std::valarray<long> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0102 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0102 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0102 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0103', () => {
    try {
      const r = parsec.parseFunction(`void pipeline130(std::valarray<long> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0103 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0103 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0103 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0104', () => {
    try {
      const result = transTskey2Ckey('std::valarray<short>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0104 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0104 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0104 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0105', () => {
    try {
      const r = parsec.parseFunction(`void sample131(std::valarray<short> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0105 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0105 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0105 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0106', () => {
    try {
      const r = parsec.parseFunction(`std::valarray<short> sampleRet131();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0106 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0106 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0106 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0107', () => {
    try {
      const r = parsec.parseClass(`class SampleClass131 { public: std::valarray<short> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0107 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0107 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0107 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0108', () => {
    try {
      const r = parsec.parseFunction(`void pipeline131(std::valarray<short> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0108 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0108 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0108 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0109', () => {
    try {
      const result = transTskey2Ckey('std::valarray<uint8_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0109 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0109 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0109 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0110', () => {
    try {
      const r = parsec.parseFunction(`void sample132(std::valarray<uint8_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0110 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0110 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0110 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0111', () => {
    try {
      const r = parsec.parseFunction(`std::valarray<uint8_t> sampleRet132();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0111 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0111 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0111 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0112', () => {
    try {
      const r = parsec.parseClass(`class SampleClass132 { public: std::valarray<uint8_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0112 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0112 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0112 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0113', () => {
    try {
      const r = parsec.parseFunction(`void pipeline132(std::valarray<uint8_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0113 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0113 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0113 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0114', () => {
    try {
      const result = transTskey2Ckey('std::valarray<uint16_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0114 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0114 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0114 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0115', () => {
    try {
      const r = parsec.parseFunction(`void sample133(std::valarray<uint16_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0115 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0115 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0115 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0116', () => {
    try {
      const r = parsec.parseFunction(`std::valarray<uint16_t> sampleRet133();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0116 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0116 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0116 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0117', () => {
    try {
      const r = parsec.parseClass(`class SampleClass133 { public: std::valarray<uint16_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0117 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0117 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0117 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0118', () => {
    try {
      const r = parsec.parseFunction(`void pipeline133(std::valarray<uint16_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0118 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0118 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0118 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0119', () => {
    try {
      const result = transTskey2Ckey('std::valarray<uint32_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0119 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0119 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0119 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0120', () => {
    try {
      const r = parsec.parseFunction(`void sample134(std::valarray<uint32_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0120 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0120 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0120 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0121', () => {
    try {
      const r = parsec.parseFunction(`std::valarray<uint32_t> sampleRet134();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0121 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0121 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0121 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0122', () => {
    try {
      const r = parsec.parseClass(`class SampleClass134 { public: std::valarray<uint32_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0122 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0122 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0122 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0123', () => {
    try {
      const r = parsec.parseFunction(`void pipeline134(std::valarray<uint32_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0123 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0123 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0123 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0124', () => {
    try {
      const result = transTskey2Ckey('std::valarray<uint64_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0124 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0124 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0124 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0125', () => {
    try {
      const r = parsec.parseFunction(`void sample135(std::valarray<uint64_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0125 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0125 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0125 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0126', () => {
    try {
      const r = parsec.parseFunction(`std::valarray<uint64_t> sampleRet135();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0126 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0126 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0126 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0127', () => {
    try {
      const r = parsec.parseClass(`class SampleClass135 { public: std::valarray<uint64_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0127 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0127 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0127 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0128', () => {
    try {
      const r = parsec.parseFunction(`void pipeline135(std::valarray<uint64_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0128 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0128 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0128 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0129', () => {
    try {
      const result = transTskey2Ckey('std::valarray<int8_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0129 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0129 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0129 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0130', () => {
    try {
      const r = parsec.parseFunction(`void sample136(std::valarray<int8_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0130 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0130 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0130 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0131', () => {
    try {
      const r = parsec.parseFunction(`std::valarray<int8_t> sampleRet136();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0131 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0131 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0131 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0132', () => {
    try {
      const r = parsec.parseClass(`class SampleClass136 { public: std::valarray<int8_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0132 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0132 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0132 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0133', () => {
    try {
      const r = parsec.parseFunction(`void pipeline136(std::valarray<int8_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0133 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0133 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0133 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0134', () => {
    try {
      const result = transTskey2Ckey('std::valarray<int16_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0134 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0134 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0134 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0135', () => {
    try {
      const r = parsec.parseFunction(`void sample137(std::valarray<int16_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0135 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0135 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0135 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0136', () => {
    try {
      const r = parsec.parseFunction(`std::valarray<int16_t> sampleRet137();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0136 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0136 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0136 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0137', () => {
    try {
      const r = parsec.parseClass(`class SampleClass137 { public: std::valarray<int16_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0137 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0137 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0137 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0138', () => {
    try {
      const r = parsec.parseFunction(`void pipeline137(std::valarray<int16_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0138 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0138 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0138 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0139', () => {
    try {
      const result = transTskey2Ckey('std::valarray<int32_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0139 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0139 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0139 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0140', () => {
    try {
      const r = parsec.parseFunction(`void sample138(std::valarray<int32_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0140 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0140 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0140 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0141', () => {
    try {
      const r = parsec.parseFunction(`std::valarray<int32_t> sampleRet138();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0141 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0141 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0141 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0142', () => {
    try {
      const r = parsec.parseClass(`class SampleClass138 { public: std::valarray<int32_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0142 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0142 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0142 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0143', () => {
    try {
      const r = parsec.parseFunction(`void pipeline138(std::valarray<int32_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0143 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0143 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0143 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0144', () => {
    try {
      const result = transTskey2Ckey('std::valarray<int64_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0144 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0144 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0144 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0145', () => {
    try {
      const r = parsec.parseFunction(`void sample139(std::valarray<int64_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0145 param convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0145 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0145 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0146', () => {
    try {
      const r = parsec.parseFunction(`std::valarray<int64_t> sampleRet139();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0146 return convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0146 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0146 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0147', () => {
    try {
      const r = parsec.parseClass(`class SampleClass139 { public: std::valarray<int64_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0147 class field convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0147 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0147 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0148', () => {
    try {
      const r = parsec.parseFunction(`void pipeline139(std::valarray<int64_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_array_0148 pipeline convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "h2dts_convert_array_0148 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0148 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0149', () => {
    try {
      const result = transTskey2Ckey('std::valarray<unsigned>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0149 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0149 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0149 execution error: ${String(err)}`);
    }
  });
});
