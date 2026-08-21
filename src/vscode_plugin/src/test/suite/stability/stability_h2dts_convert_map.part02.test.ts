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

suite('Stability_H2DTS_CONVERT_MAP_Part02', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_CONVERT_MAP_Part02.');


  test('h2dts_convert_map_0001', () => {
    try {
      const r = parsec.parseFunction(`void pipeline605(std::unordered_map<int, char> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0001 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<number, string>", "h2dts_convert_map_0001 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0001 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0002', () => {
    try {
      const result = transTskey2Ckey('std::unordered_map<size_t, char>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0002 convert output non-empty");
      assert.strictEqual(result, "Map<number, string>", "h2dts_convert_map_0002 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0002 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0003', () => {
    try {
      const r = parsec.parseFunction(`void sample606(std::unordered_map<size_t, char> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0003 param convert output non-empty");
      assert.strictEqual(converted, "Map<number, string>", "h2dts_convert_map_0003 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0003 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0004', () => {
    try {
      const r = parsec.parseFunction(`std::unordered_map<size_t, char> sampleRet606();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0004 return convert output non-empty");
      assert.strictEqual(converted, "Map<number, string>", "h2dts_convert_map_0004 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0004 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0005', () => {
    try {
      const r = parsec.parseClass(`class SampleClass606 { public: std::unordered_map<size_t, char> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0005 class field convert output non-empty");
      assert.strictEqual(converted, "Map<number, string>", "h2dts_convert_map_0005 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0005 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0006', () => {
    try {
      const r = parsec.parseFunction(`void pipeline606(std::unordered_map<size_t, char> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0006 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<number, string>", "h2dts_convert_map_0006 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0006 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0007', () => {
    try {
      const result = transTskey2Ckey('std::unordered_map<unsigned, char>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0007 convert output non-empty");
      assert.strictEqual(result, "Map<number, string>", "h2dts_convert_map_0007 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0007 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0008', () => {
    try {
      const r = parsec.parseFunction(`void sample607(std::unordered_map<unsigned, char> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0008 param convert output non-empty");
      assert.strictEqual(converted, "Map<number, string>", "h2dts_convert_map_0008 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0008 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0009', () => {
    try {
      const r = parsec.parseFunction(`std::unordered_map<unsigned, char> sampleRet607();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0009 return convert output non-empty");
      assert.strictEqual(converted, "Map<number, string>", "h2dts_convert_map_0009 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0009 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0010', () => {
    try {
      const r = parsec.parseClass(`class SampleClass607 { public: std::unordered_map<unsigned, char> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0010 class field convert output non-empty");
      assert.strictEqual(converted, "Map<number, string>", "h2dts_convert_map_0010 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0010 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0011', () => {
    try {
      const r = parsec.parseFunction(`void pipeline607(std::unordered_map<unsigned, char> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0011 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<number, string>", "h2dts_convert_map_0011 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0011 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0012', () => {
    try {
      const result = transTskey2Ckey('std::multimap<int, int>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0012 convert output non-empty");
      assert.strictEqual(result, "Map<number, number>", "h2dts_convert_map_0012 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0012 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0013', () => {
    try {
      const r = parsec.parseFunction(`void sample624(std::multimap<int, int> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0013 param convert output non-empty");
      assert.strictEqual(converted, "Map<number, number>", "h2dts_convert_map_0013 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0013 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0014', () => {
    try {
      const r = parsec.parseFunction(`std::multimap<int, int> sampleRet624();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0014 return convert output non-empty");
      assert.strictEqual(converted, "Map<number, number>", "h2dts_convert_map_0014 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0014 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0015', () => {
    try {
      const r = parsec.parseClass(`class SampleClass624 { public: std::multimap<int, int> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0015 class field convert output non-empty");
      assert.strictEqual(converted, "Map<number, number>", "h2dts_convert_map_0015 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0015 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0016', () => {
    try {
      const r = parsec.parseFunction(`void pipeline624(std::multimap<int, int> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0016 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<number, number>", "h2dts_convert_map_0016 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0016 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0017', () => {
    try {
      const result = transTskey2Ckey('std::multimap<char, int>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_map_0017 convert output non-empty");
      assert.strictEqual(result, "Map<string, number>", "h2dts_convert_map_0017 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0017 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0018', () => {
    try {
      const r = parsec.parseFunction(`void sample625(std::multimap<char, int> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0018 param convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0018 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0018 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0019', () => {
    try {
      const r = parsec.parseFunction(`std::multimap<char, int> sampleRet625();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0019 return convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0019 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0019 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0020', () => {
    try {
      const r = parsec.parseClass(`class SampleClass625 { public: std::multimap<char, int> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0020 class field convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0020 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0020 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_map_0021', () => {
    try {
      const r = parsec.parseFunction(`void pipeline625(std::multimap<char, int> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_map_0021 pipeline convert output non-empty");
      assert.strictEqual(converted, "Map<string, number>", "h2dts_convert_map_0021 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_map_0021 execution error: ${String(err)}`);
    }
  });
});
