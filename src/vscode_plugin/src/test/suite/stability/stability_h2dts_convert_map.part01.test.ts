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

suite('Stability_H2DTS_CONVERT_MAP_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_CONVERT_MAP_Part01.');


  test('h2dts_convert_map_0001', () => {
    try {
      const result = transTskey2Ckey('std::map<int, int>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0001 convert output non-empty");
      assert.strictEqual(result, "Map<number, number>", "h2dts_convert_map_0001 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0001 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0002', () => {
    try {
      const r = parsec.parseFunction(`void sample560(std::map<int, int> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0002 param convert output non-empty");
      assert.strictEqual(converted, "Map<number, number>", "h2dts_convert_map_0002 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0002 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0003', () => {
    try {
      const r = parsec.parseFunction(`std::map<int, int> sampleRet560();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0003 return convert output non-empty");
      assert.strictEqual(converted, "Map<number, number>", "h2dts_convert_map_0003 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0003 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0004', () => {
    try {
      const r = parsec.parseClass(`class SampleClass560 { public: std::map<int, int> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0004 class field convert output non-empty");
      assert.strictEqual(converted, "Map<number, number>", "h2dts_convert_map_0004 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0004 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0005', () => {
    try {
      const r = parsec.parseFunction(`void pipeline560(std::map<int, int> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0005 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<number, number>", "h2dts_convert_map_0005 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0005 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0006', () => {
    try {
      const result = transTskey2Ckey('std::map<char, int>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0006 convert output non-empty");
      assert.strictEqual(result, "Map<string, number>", "h2dts_convert_map_0006 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0006 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0007', () => {
    try {
      const r = parsec.parseFunction(`void sample561(std::map<char, int> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0007 param convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0007 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0007 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0008', () => {
    try {
      const r = parsec.parseFunction(`std::map<char, int> sampleRet561();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0008 return convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0008 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0008 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0009', () => {
    try {
      const r = parsec.parseClass(`class SampleClass561 { public: std::map<char, int> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0009 class field convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0009 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0009 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0010', () => {
    try {
      const r = parsec.parseFunction(`void pipeline561(std::map<char, int> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0010 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0010 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0010 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0011', () => {
    try {
      const result = transTskey2Ckey('std::map<char, size_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0011 convert output non-empty");
      assert.strictEqual(result, "Map<string, number>", "h2dts_convert_map_0011 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0011 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0012', () => {
    try {
      const r = parsec.parseFunction(`void sample562(std::map<char, size_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0012 param convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0012 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0012 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0013', () => {
    try {
      const r = parsec.parseFunction(`std::map<char, size_t> sampleRet562();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0013 return convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0013 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0013 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0014', () => {
    try {
      const r = parsec.parseClass(`class SampleClass562 { public: std::map<char, size_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0014 class field convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0014 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0014 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0015', () => {
    try {
      const r = parsec.parseFunction(`void pipeline562(std::map<char, size_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0015 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0015 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0015 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0016', () => {
    try {
      const result = transTskey2Ckey('std::map<char, unsigned>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0016 convert output non-empty");
      assert.strictEqual(result, "Map<string, number>", "h2dts_convert_map_0016 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0016 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0017', () => {
    try {
      const r = parsec.parseFunction(`void sample563(std::map<char, unsigned> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0017 param convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0017 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0017 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0018', () => {
    try {
      const r = parsec.parseFunction(`std::map<char, unsigned> sampleRet563();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0018 return convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0018 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0018 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0019', () => {
    try {
      const r = parsec.parseClass(`class SampleClass563 { public: std::map<char, unsigned> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0019 class field convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0019 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0019 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0020', () => {
    try {
      const r = parsec.parseFunction(`void pipeline563(std::map<char, unsigned> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0020 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0020 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0020 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0021', () => {
    try {
      const result = transTskey2Ckey('std::map<char, double>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0021 convert output non-empty");
      assert.strictEqual(result, "Map<string, number>", "h2dts_convert_map_0021 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0021 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0022', () => {
    try {
      const r = parsec.parseFunction(`void sample564(std::map<char, double> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0022 param convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0022 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0022 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0023', () => {
    try {
      const r = parsec.parseFunction(`std::map<char, double> sampleRet564();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0023 return convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0023 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0023 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0024', () => {
    try {
      const r = parsec.parseClass(`class SampleClass564 { public: std::map<char, double> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0024 class field convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0024 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0024 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0025', () => {
    try {
      const r = parsec.parseFunction(`void pipeline564(std::map<char, double> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0025 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0025 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0025 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0026', () => {
    try {
      const result = transTskey2Ckey('std::map<char, float>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0026 convert output non-empty");
      assert.strictEqual(result, "Map<string, number>", "h2dts_convert_map_0026 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0026 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0027', () => {
    try {
      const r = parsec.parseFunction(`void sample565(std::map<char, float> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0027 param convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0027 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0027 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0028', () => {
    try {
      const r = parsec.parseFunction(`std::map<char, float> sampleRet565();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0028 return convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0028 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0028 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0029', () => {
    try {
      const r = parsec.parseClass(`class SampleClass565 { public: std::map<char, float> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0029 class field convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0029 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0029 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0030', () => {
    try {
      const r = parsec.parseFunction(`void pipeline565(std::map<char, float> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0030 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0030 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0030 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0031', () => {
    try {
      const result = transTskey2Ckey('std::map<char16_t, int32_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0031 convert output non-empty");
      assert.strictEqual(result, "Map<string, number>", "h2dts_convert_map_0031 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0031 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0032', () => {
    try {
      const r = parsec.parseFunction(`void sample566(std::map<char16_t, int32_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0032 param convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0032 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0032 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0033', () => {
    try {
      const r = parsec.parseFunction(`std::map<char16_t, int32_t> sampleRet566();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0033 return convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0033 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0033 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0034', () => {
    try {
      const r = parsec.parseClass(`class SampleClass566 { public: std::map<char16_t, int32_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0034 class field convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0034 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0034 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0035', () => {
    try {
      const r = parsec.parseFunction(`void pipeline566(std::map<char16_t, int32_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0035 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0035 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0035 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0036', () => {
    try {
      const result = transTskey2Ckey('std::map<char32_t, size_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0036 convert output non-empty");
      assert.strictEqual(result, "Map<string, number>", "h2dts_convert_map_0036 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0036 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0037', () => {
    try {
      const r = parsec.parseFunction(`void sample567(std::map<char32_t, size_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0037 param convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0037 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0037 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0038', () => {
    try {
      const r = parsec.parseFunction(`std::map<char32_t, size_t> sampleRet567();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0038 return convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0038 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0038 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0039', () => {
    try {
      const r = parsec.parseClass(`class SampleClass567 { public: std::map<char32_t, size_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0039 class field convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0039 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0039 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0040', () => {
    try {
      const r = parsec.parseFunction(`void pipeline567(std::map<char32_t, size_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0040 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0040 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0040 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0041', () => {
    try {
      const result = transTskey2Ckey('std::map<char8_t, uint32_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0041 convert output non-empty");
      assert.strictEqual(result, "Map<string, number>", "h2dts_convert_map_0041 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0041 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0042', () => {
    try {
      const r = parsec.parseFunction(`void sample568(std::map<char8_t, uint32_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0042 param convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0042 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0042 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0043', () => {
    try {
      const r = parsec.parseFunction(`std::map<char8_t, uint32_t> sampleRet568();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0043 return convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0043 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0043 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0044', () => {
    try {
      const r = parsec.parseClass(`class SampleClass568 { public: std::map<char8_t, uint32_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0044 class field convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0044 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0044 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0045', () => {
    try {
      const r = parsec.parseFunction(`void pipeline568(std::map<char8_t, uint32_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0045 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0045 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0045 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0046', () => {
    try {
      const result = transTskey2Ckey('std::map<char32_t, int8_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0046 convert output non-empty");
      assert.strictEqual(result, "Map<string, number>", "h2dts_convert_map_0046 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0046 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0047', () => {
    try {
      const r = parsec.parseFunction(`void sample569(std::map<char32_t, int8_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0047 param convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0047 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0047 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0048', () => {
    try {
      const r = parsec.parseFunction(`std::map<char32_t, int8_t> sampleRet569();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0048 return convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0048 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0048 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0049', () => {
    try {
      const r = parsec.parseClass(`class SampleClass569 { public: std::map<char32_t, int8_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0049 class field convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0049 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0049 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0050', () => {
    try {
      const r = parsec.parseFunction(`void pipeline569(std::map<char32_t, int8_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0050 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0050 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0050 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0051', () => {
    try {
      const result = transTskey2Ckey('std::map<wchar_t, uint16_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0051 convert output non-empty");
      assert.strictEqual(result, "Map<string, number>", "h2dts_convert_map_0051 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0051 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0052', () => {
    try {
      const r = parsec.parseFunction(`void sample570(std::map<wchar_t, uint16_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0052 param convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0052 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0052 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0053', () => {
    try {
      const r = parsec.parseFunction(`std::map<wchar_t, uint16_t> sampleRet570();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0053 return convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0053 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0053 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0054', () => {
    try {
      const r = parsec.parseClass(`class SampleClass570 { public: std::map<wchar_t, uint16_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0054 class field convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0054 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0054 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0055', () => {
    try {
      const r = parsec.parseFunction(`void pipeline570(std::map<wchar_t, uint16_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0055 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0055 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0055 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0056', () => {
    try {
      const result = transTskey2Ckey('std::map<int, bool>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0056 convert output non-empty");
      assert.strictEqual(result, "Map<number, boolean>", "h2dts_convert_map_0056 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0056 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0057', () => {
    try {
      const r = parsec.parseFunction(`void sample571(std::map<int, bool> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0057 param convert output non-empty");
      assert.strictEqual(converted, "Map<number, boolean>", "h2dts_convert_map_0057 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0057 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0058', () => {
    try {
      const r = parsec.parseFunction(`std::map<int, bool> sampleRet571();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0058 return convert output non-empty");
      assert.strictEqual(converted, "Map<number, boolean>", "h2dts_convert_map_0058 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0058 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0059', () => {
    try {
      const r = parsec.parseClass(`class SampleClass571 { public: std::map<int, bool> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0059 class field convert output non-empty");
      assert.strictEqual(converted, "Map<number, boolean>", "h2dts_convert_map_0059 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0059 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0060', () => {
    try {
      const r = parsec.parseFunction(`void pipeline571(std::map<int, bool> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0060 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<number, boolean>", "h2dts_convert_map_0060 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0060 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0061', () => {
    try {
      const result = transTskey2Ckey('std::map<char, bool>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0061 convert output non-empty");
      assert.strictEqual(result, "Map<string, boolean>", "h2dts_convert_map_0061 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0061 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0062', () => {
    try {
      const r = parsec.parseFunction(`void sample572(std::map<char, bool> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0062 param convert output non-empty");
      assert.strictEqual(converted, "Map<string, boolean>", "h2dts_convert_map_0062 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0062 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0063', () => {
    try {
      const r = parsec.parseFunction(`std::map<char, bool> sampleRet572();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0063 return convert output non-empty");
      assert.strictEqual(converted, "Map<string, boolean>", "h2dts_convert_map_0063 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0063 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0064', () => {
    try {
      const r = parsec.parseClass(`class SampleClass572 { public: std::map<char, bool> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0064 class field convert output non-empty");
      assert.strictEqual(converted, "Map<string, boolean>", "h2dts_convert_map_0064 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0064 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0065', () => {
    try {
      const r = parsec.parseFunction(`void pipeline572(std::map<char, bool> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0065 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<string, boolean>", "h2dts_convert_map_0065 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0065 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0066', () => {
    try {
      const result = transTskey2Ckey('std::map<int, char>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0066 convert output non-empty");
      assert.strictEqual(result, "Map<number, string>", "h2dts_convert_map_0066 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0066 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0067', () => {
    try {
      const r = parsec.parseFunction(`void sample573(std::map<int, char> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0067 param convert output non-empty");
      assert.strictEqual(converted, "Map<number, string>", "h2dts_convert_map_0067 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0067 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0068', () => {
    try {
      const r = parsec.parseFunction(`std::map<int, char> sampleRet573();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0068 return convert output non-empty");
      assert.strictEqual(converted, "Map<number, string>", "h2dts_convert_map_0068 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0068 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0069', () => {
    try {
      const r = parsec.parseClass(`class SampleClass573 { public: std::map<int, char> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0069 class field convert output non-empty");
      assert.strictEqual(converted, "Map<number, string>", "h2dts_convert_map_0069 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0069 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0070', () => {
    try {
      const r = parsec.parseFunction(`void pipeline573(std::map<int, char> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0070 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<number, string>", "h2dts_convert_map_0070 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0070 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0071', () => {
    try {
      const result = transTskey2Ckey('std::map<size_t, char>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0071 convert output non-empty");
      assert.strictEqual(result, "Map<number, string>", "h2dts_convert_map_0071 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0071 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0072', () => {
    try {
      const r = parsec.parseFunction(`void sample574(std::map<size_t, char> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0072 param convert output non-empty");
      assert.strictEqual(converted, "Map<number, string>", "h2dts_convert_map_0072 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0072 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0073', () => {
    try {
      const r = parsec.parseFunction(`std::map<size_t, char> sampleRet574();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0073 return convert output non-empty");
      assert.strictEqual(converted, "Map<number, string>", "h2dts_convert_map_0073 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0073 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0074', () => {
    try {
      const r = parsec.parseClass(`class SampleClass574 { public: std::map<size_t, char> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0074 class field convert output non-empty");
      assert.strictEqual(converted, "Map<number, string>", "h2dts_convert_map_0074 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0074 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0075', () => {
    try {
      const r = parsec.parseFunction(`void pipeline574(std::map<size_t, char> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0075 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<number, string>", "h2dts_convert_map_0075 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0075 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0076', () => {
    try {
      const result = transTskey2Ckey('std::map<unsigned, char>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0076 convert output non-empty");
      assert.strictEqual(result, "Map<number, string>", "h2dts_convert_map_0076 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0076 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0077', () => {
    try {
      const r = parsec.parseFunction(`void sample575(std::map<unsigned, char> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0077 param convert output non-empty");
      assert.strictEqual(converted, "Map<number, string>", "h2dts_convert_map_0077 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0077 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0078', () => {
    try {
      const r = parsec.parseFunction(`std::map<unsigned, char> sampleRet575();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0078 return convert output non-empty");
      assert.strictEqual(converted, "Map<number, string>", "h2dts_convert_map_0078 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0078 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0079', () => {
    try {
      const r = parsec.parseClass(`class SampleClass575 { public: std::map<unsigned, char> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0079 class field convert output non-empty");
      assert.strictEqual(converted, "Map<number, string>", "h2dts_convert_map_0079 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0079 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0080', () => {
    try {
      const r = parsec.parseFunction(`void pipeline575(std::map<unsigned, char> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0080 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<number, string>", "h2dts_convert_map_0080 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0080 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0081', () => {
    try {
      const result = transTskey2Ckey('std::unordered_map<int, int>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0081 convert output non-empty");
      assert.strictEqual(result, "Map<number, number>", "h2dts_convert_map_0081 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0081 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0082', () => {
    try {
      const r = parsec.parseFunction(`void sample592(std::unordered_map<int, int> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0082 param convert output non-empty");
      assert.strictEqual(converted, "Map<number, number>", "h2dts_convert_map_0082 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0082 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0083', () => {
    try {
      const r = parsec.parseFunction(`std::unordered_map<int, int> sampleRet592();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0083 return convert output non-empty");
      assert.strictEqual(converted, "Map<number, number>", "h2dts_convert_map_0083 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0083 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0084', () => {
    try {
      const r = parsec.parseClass(`class SampleClass592 { public: std::unordered_map<int, int> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0084 class field convert output non-empty");
      assert.strictEqual(converted, "Map<number, number>", "h2dts_convert_map_0084 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0084 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0085', () => {
    try {
      const r = parsec.parseFunction(`void pipeline592(std::unordered_map<int, int> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0085 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<number, number>", "h2dts_convert_map_0085 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0085 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0086', () => {
    try {
      const result = transTskey2Ckey('std::unordered_map<char, int>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0086 convert output non-empty");
      assert.strictEqual(result, "Map<string, number>", "h2dts_convert_map_0086 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0086 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0087', () => {
    try {
      const r = parsec.parseFunction(`void sample593(std::unordered_map<char, int> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0087 param convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0087 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0087 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0088', () => {
    try {
      const r = parsec.parseFunction(`std::unordered_map<char, int> sampleRet593();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0088 return convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0088 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0088 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0089', () => {
    try {
      const r = parsec.parseClass(`class SampleClass593 { public: std::unordered_map<char, int> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0089 class field convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0089 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0089 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0090', () => {
    try {
      const r = parsec.parseFunction(`void pipeline593(std::unordered_map<char, int> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0090 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0090 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0090 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0091', () => {
    try {
      const result = transTskey2Ckey('std::unordered_map<char, size_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0091 convert output non-empty");
      assert.strictEqual(result, "Map<string, number>", "h2dts_convert_map_0091 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0091 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0092', () => {
    try {
      const r = parsec.parseFunction(`void sample594(std::unordered_map<char, size_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0092 param convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0092 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0092 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0093', () => {
    try {
      const r = parsec.parseFunction(`std::unordered_map<char, size_t> sampleRet594();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0093 return convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0093 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0093 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0094', () => {
    try {
      const r = parsec.parseClass(`class SampleClass594 { public: std::unordered_map<char, size_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0094 class field convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0094 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0094 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0095', () => {
    try {
      const r = parsec.parseFunction(`void pipeline594(std::unordered_map<char, size_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0095 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0095 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0095 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0096', () => {
    try {
      const result = transTskey2Ckey('std::unordered_map<char, unsigned>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0096 convert output non-empty");
      assert.strictEqual(result, "Map<string, number>", "h2dts_convert_map_0096 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0096 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0097', () => {
    try {
      const r = parsec.parseFunction(`void sample595(std::unordered_map<char, unsigned> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0097 param convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0097 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0097 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0098', () => {
    try {
      const r = parsec.parseFunction(`std::unordered_map<char, unsigned> sampleRet595();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0098 return convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0098 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0098 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0099', () => {
    try {
      const r = parsec.parseClass(`class SampleClass595 { public: std::unordered_map<char, unsigned> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0099 class field convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0099 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0099 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0100', () => {
    try {
      const r = parsec.parseFunction(`void pipeline595(std::unordered_map<char, unsigned> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0100 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0100 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0100 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0101', () => {
    try {
      const result = transTskey2Ckey('std::unordered_map<char, double>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0101 convert output non-empty");
      assert.strictEqual(result, "Map<string, number>", "h2dts_convert_map_0101 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0101 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0102', () => {
    try {
      const r = parsec.parseFunction(`void sample596(std::unordered_map<char, double> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0102 param convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0102 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0102 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0103', () => {
    try {
      const r = parsec.parseFunction(`std::unordered_map<char, double> sampleRet596();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0103 return convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0103 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0103 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0104', () => {
    try {
      const r = parsec.parseClass(`class SampleClass596 { public: std::unordered_map<char, double> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0104 class field convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0104 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0104 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0105', () => {
    try {
      const r = parsec.parseFunction(`void pipeline596(std::unordered_map<char, double> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0105 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0105 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0105 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0106', () => {
    try {
      const result = transTskey2Ckey('std::unordered_map<char, float>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0106 convert output non-empty");
      assert.strictEqual(result, "Map<string, number>", "h2dts_convert_map_0106 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0106 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0107', () => {
    try {
      const r = parsec.parseFunction(`void sample597(std::unordered_map<char, float> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0107 param convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0107 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0107 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0108', () => {
    try {
      const r = parsec.parseFunction(`std::unordered_map<char, float> sampleRet597();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0108 return convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0108 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0108 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0109', () => {
    try {
      const r = parsec.parseClass(`class SampleClass597 { public: std::unordered_map<char, float> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0109 class field convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0109 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0109 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0110', () => {
    try {
      const r = parsec.parseFunction(`void pipeline597(std::unordered_map<char, float> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0110 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0110 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0110 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0111', () => {
    try {
      const result = transTskey2Ckey('std::unordered_map<char16_t, int32_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0111 convert output non-empty");
      assert.strictEqual(result, "Map<string, number>", "h2dts_convert_map_0111 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0111 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0112', () => {
    try {
      const r = parsec.parseFunction(`void sample598(std::unordered_map<char16_t, int32_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0112 param convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0112 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0112 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0113', () => {
    try {
      const r = parsec.parseFunction(`std::unordered_map<char16_t, int32_t> sampleRet598();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0113 return convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0113 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0113 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0114', () => {
    try {
      const r = parsec.parseClass(`class SampleClass598 { public: std::unordered_map<char16_t, int32_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0114 class field convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0114 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0114 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0115', () => {
    try {
      const r = parsec.parseFunction(`void pipeline598(std::unordered_map<char16_t, int32_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0115 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0115 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0115 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0116', () => {
    try {
      const result = transTskey2Ckey('std::unordered_map<char32_t, size_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0116 convert output non-empty");
      assert.strictEqual(result, "Map<string, number>", "h2dts_convert_map_0116 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0116 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0117', () => {
    try {
      const r = parsec.parseFunction(`void sample599(std::unordered_map<char32_t, size_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0117 param convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0117 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0117 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0118', () => {
    try {
      const r = parsec.parseFunction(`std::unordered_map<char32_t, size_t> sampleRet599();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0118 return convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0118 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0118 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0119', () => {
    try {
      const r = parsec.parseClass(`class SampleClass599 { public: std::unordered_map<char32_t, size_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0119 class field convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0119 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0119 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0120', () => {
    try {
      const r = parsec.parseFunction(`void pipeline599(std::unordered_map<char32_t, size_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0120 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0120 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0120 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0121', () => {
    try {
      const result = transTskey2Ckey('std::unordered_map<char8_t, uint32_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0121 convert output non-empty");
      assert.strictEqual(result, "Map<string, number>", "h2dts_convert_map_0121 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0121 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0122', () => {
    try {
      const r = parsec.parseFunction(`void sample600(std::unordered_map<char8_t, uint32_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0122 param convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0122 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0122 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0123', () => {
    try {
      const r = parsec.parseFunction(`std::unordered_map<char8_t, uint32_t> sampleRet600();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0123 return convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0123 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0123 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0124', () => {
    try {
      const r = parsec.parseClass(`class SampleClass600 { public: std::unordered_map<char8_t, uint32_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0124 class field convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0124 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0124 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0125', () => {
    try {
      const r = parsec.parseFunction(`void pipeline600(std::unordered_map<char8_t, uint32_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0125 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0125 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0125 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0126', () => {
    try {
      const result = transTskey2Ckey('std::unordered_map<char32_t, int8_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0126 convert output non-empty");
      assert.strictEqual(result, "Map<string, number>", "h2dts_convert_map_0126 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0126 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0127', () => {
    try {
      const r = parsec.parseFunction(`void sample601(std::unordered_map<char32_t, int8_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0127 param convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0127 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0127 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0128', () => {
    try {
      const r = parsec.parseFunction(`std::unordered_map<char32_t, int8_t> sampleRet601();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0128 return convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0128 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0128 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0129', () => {
    try {
      const r = parsec.parseClass(`class SampleClass601 { public: std::unordered_map<char32_t, int8_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0129 class field convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0129 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0129 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0130', () => {
    try {
      const r = parsec.parseFunction(`void pipeline601(std::unordered_map<char32_t, int8_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0130 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0130 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0130 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0131', () => {
    try {
      const result = transTskey2Ckey('std::unordered_map<wchar_t, uint16_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0131 convert output non-empty");
      assert.strictEqual(result, "Map<string, number>", "h2dts_convert_map_0131 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0131 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0132', () => {
    try {
      const r = parsec.parseFunction(`void sample602(std::unordered_map<wchar_t, uint16_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0132 param convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0132 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0132 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0133', () => {
    try {
      const r = parsec.parseFunction(`std::unordered_map<wchar_t, uint16_t> sampleRet602();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0133 return convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0133 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0133 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0134', () => {
    try {
      const r = parsec.parseClass(`class SampleClass602 { public: std::unordered_map<wchar_t, uint16_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0134 class field convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0134 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0134 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0135', () => {
    try {
      const r = parsec.parseFunction(`void pipeline602(std::unordered_map<wchar_t, uint16_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0135 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0135 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0135 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0136', () => {
    try {
      const result = transTskey2Ckey('std::unordered_map<int, bool>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0136 convert output non-empty");
      assert.strictEqual(result, "Map<number, boolean>", "h2dts_convert_map_0136 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0136 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0137', () => {
    try {
      const r = parsec.parseFunction(`void sample603(std::unordered_map<int, bool> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0137 param convert output non-empty");
      assert.strictEqual(converted, "Map<number, boolean>", "h2dts_convert_map_0137 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0137 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0138', () => {
    try {
      const r = parsec.parseFunction(`std::unordered_map<int, bool> sampleRet603();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0138 return convert output non-empty");
      assert.strictEqual(converted, "Map<number, boolean>", "h2dts_convert_map_0138 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0138 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0139', () => {
    try {
      const r = parsec.parseClass(`class SampleClass603 { public: std::unordered_map<int, bool> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0139 class field convert output non-empty");
      assert.strictEqual(converted, "Map<number, boolean>", "h2dts_convert_map_0139 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0139 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0140', () => {
    try {
      const r = parsec.parseFunction(`void pipeline603(std::unordered_map<int, bool> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0140 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<number, boolean>", "h2dts_convert_map_0140 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0140 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0141', () => {
    try {
      const result = transTskey2Ckey('std::unordered_map<char, bool>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0141 convert output non-empty");
      assert.strictEqual(result, "Map<string, boolean>", "h2dts_convert_map_0141 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0141 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0142', () => {
    try {
      const r = parsec.parseFunction(`void sample604(std::unordered_map<char, bool> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0142 param convert output non-empty");
      assert.strictEqual(converted, "Map<string, boolean>", "h2dts_convert_map_0142 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0142 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0143', () => {
    try {
      const r = parsec.parseFunction(`std::unordered_map<char, bool> sampleRet604();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0143 return convert output non-empty");
      assert.strictEqual(converted, "Map<string, boolean>", "h2dts_convert_map_0143 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0143 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0144', () => {
    try {
      const r = parsec.parseClass(`class SampleClass604 { public: std::unordered_map<char, bool> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0144 class field convert output non-empty");
      assert.strictEqual(converted, "Map<string, boolean>", "h2dts_convert_map_0144 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0144 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0145', () => {
    try {
      const r = parsec.parseFunction(`void pipeline604(std::unordered_map<char, bool> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0145 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<string, boolean>", "h2dts_convert_map_0145 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0145 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0146', () => {
    try {
      const result = transTskey2Ckey('std::unordered_map<int, char>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0146 convert output non-empty");
      assert.strictEqual(result, "Map<number, string>", "h2dts_convert_map_0146 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0146 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0147', () => {
    try {
      const r = parsec.parseFunction(`void sample605(std::unordered_map<int, char> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0147 param convert output non-empty");
      assert.strictEqual(converted, "Map<number, string>", "h2dts_convert_map_0147 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0147 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0148', () => {
    try {
      const r = parsec.parseFunction(`std::unordered_map<int, char> sampleRet605();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0148 return convert output non-empty");
      assert.strictEqual(converted, "Map<number, string>", "h2dts_convert_map_0148 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0148 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0149', () => {
    try {
      const r = parsec.parseClass(`class SampleClass605 { public: std::unordered_map<int, char> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0149 class field convert output non-empty");
      assert.strictEqual(converted, "Map<number, string>", "h2dts_convert_map_0149 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0149 execution error: ${String(err)}`);
    }
  });
});
