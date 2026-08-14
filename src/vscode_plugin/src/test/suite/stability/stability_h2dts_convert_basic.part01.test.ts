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

suite('Stability_H2DTS_CONVERT_BASIC_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_CONVERT_BASIC_Part01.');


  test('h2dts_convert_basic_0001', () => {
    try {
      const result = transTskey2Ckey('int');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0001 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_basic_0001 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0001 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0002', () => {
    try {
      const r = parsec.parseFunction(`void sample1(int p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0002 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0002 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0002 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0003', () => {
    try {
      const r = parsec.parseFunction(`int sampleRet1();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0003 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0003 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0003 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0004', () => {
    try {
      const r = parsec.parseClass(`class SampleClass1 { public: int field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0004 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0004 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0004 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0005', () => {
    try {
      const r = parsec.parseFunction(`void pipeline1(int p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0005 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0005 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0005 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0006', () => {
    try {
      const result = transTskey2Ckey('size_t');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0006 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_basic_0006 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0006 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0007', () => {
    try {
      const r = parsec.parseFunction(`void sample2(size_t p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0007 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0007 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0007 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0008', () => {
    try {
      const r = parsec.parseFunction(`size_t sampleRet2();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0008 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0008 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0008 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0009', () => {
    try {
      const r = parsec.parseClass(`class SampleClass2 { public: size_t field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0009 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0009 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0009 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0010', () => {
    try {
      const r = parsec.parseFunction(`void pipeline2(size_t p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0010 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0010 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0010 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0011', () => {
    try {
      const result = transTskey2Ckey('double');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0011 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_basic_0011 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0011 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0012', () => {
    try {
      const r = parsec.parseFunction(`void sample3(double p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0012 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0012 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0012 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0013', () => {
    try {
      const r = parsec.parseFunction(`double sampleRet3();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0013 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0013 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0013 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0014', () => {
    try {
      const r = parsec.parseClass(`class SampleClass3 { public: double field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0014 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0014 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0014 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0015', () => {
    try {
      const r = parsec.parseFunction(`void pipeline3(double p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0015 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0015 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0015 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0016', () => {
    try {
      const result = transTskey2Ckey('float');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0016 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_basic_0016 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0016 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0017', () => {
    try {
      const r = parsec.parseFunction(`void sample4(float p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0017 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0017 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0017 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0018', () => {
    try {
      const r = parsec.parseFunction(`float sampleRet4();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0018 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0018 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0018 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0019', () => {
    try {
      const r = parsec.parseClass(`class SampleClass4 { public: float field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0019 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0019 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0019 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0020', () => {
    try {
      const r = parsec.parseFunction(`void pipeline4(float p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0020 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0020 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0020 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0021', () => {
    try {
      const result = transTskey2Ckey('short');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0021 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_basic_0021 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0021 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0022', () => {
    try {
      const r = parsec.parseFunction(`void sample5(short p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0022 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0022 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0022 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0023', () => {
    try {
      const r = parsec.parseFunction(`short sampleRet5();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0023 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0023 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0023 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0024', () => {
    try {
      const r = parsec.parseClass(`class SampleClass5 { public: short field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0024 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0024 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0024 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0025', () => {
    try {
      const r = parsec.parseFunction(`void pipeline5(short p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0025 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0025 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0025 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0026', () => {
    try {
      const result = transTskey2Ckey('long');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0026 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_basic_0026 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0026 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0027', () => {
    try {
      const r = parsec.parseFunction(`void sample6(long p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0027 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0027 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0027 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0028', () => {
    try {
      const r = parsec.parseFunction(`long sampleRet6();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0028 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0028 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0028 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0029', () => {
    try {
      const r = parsec.parseClass(`class SampleClass6 { public: long field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0029 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0029 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0029 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0030', () => {
    try {
      const r = parsec.parseFunction(`void pipeline6(long p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0030 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0030 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0030 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0031', () => {
    try {
      const result = transTskey2Ckey('uint8_t');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0031 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_basic_0031 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0031 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0032', () => {
    try {
      const r = parsec.parseFunction(`void sample7(uint8_t p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0032 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0032 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0032 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0033', () => {
    try {
      const r = parsec.parseFunction(`uint8_t sampleRet7();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0033 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0033 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0033 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0034', () => {
    try {
      const r = parsec.parseClass(`class SampleClass7 { public: uint8_t field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0034 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0034 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0034 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0035', () => {
    try {
      const r = parsec.parseFunction(`void pipeline7(uint8_t p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0035 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0035 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0035 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0036', () => {
    try {
      const result = transTskey2Ckey('uint16_t');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0036 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_basic_0036 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0036 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0037', () => {
    try {
      const r = parsec.parseFunction(`void sample8(uint16_t p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0037 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0037 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0037 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0038', () => {
    try {
      const r = parsec.parseFunction(`uint16_t sampleRet8();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0038 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0038 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0038 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0039', () => {
    try {
      const r = parsec.parseClass(`class SampleClass8 { public: uint16_t field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0039 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0039 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0039 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0040', () => {
    try {
      const r = parsec.parseFunction(`void pipeline8(uint16_t p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0040 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0040 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0040 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0041', () => {
    try {
      const result = transTskey2Ckey('uint32_t');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0041 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_basic_0041 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0041 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0042', () => {
    try {
      const r = parsec.parseFunction(`void sample9(uint32_t p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0042 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0042 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0042 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0043', () => {
    try {
      const r = parsec.parseFunction(`uint32_t sampleRet9();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0043 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0043 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0043 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0044', () => {
    try {
      const r = parsec.parseClass(`class SampleClass9 { public: uint32_t field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0044 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0044 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0044 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0045', () => {
    try {
      const r = parsec.parseFunction(`void pipeline9(uint32_t p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0045 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0045 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0045 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0046', () => {
    try {
      const result = transTskey2Ckey('uint64_t');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0046 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_basic_0046 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0046 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0047', () => {
    try {
      const r = parsec.parseFunction(`void sample10(uint64_t p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0047 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0047 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0047 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0048', () => {
    try {
      const r = parsec.parseFunction(`uint64_t sampleRet10();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0048 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0048 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0048 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0049', () => {
    try {
      const r = parsec.parseClass(`class SampleClass10 { public: uint64_t field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0049 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0049 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0049 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0050', () => {
    try {
      const r = parsec.parseFunction(`void pipeline10(uint64_t p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0050 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0050 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0050 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0051', () => {
    try {
      const result = transTskey2Ckey('int8_t');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0051 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_basic_0051 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0051 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0052', () => {
    try {
      const r = parsec.parseFunction(`void sample11(int8_t p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0052 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0052 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0052 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0053', () => {
    try {
      const r = parsec.parseFunction(`int8_t sampleRet11();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0053 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0053 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0053 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0054', () => {
    try {
      const r = parsec.parseClass(`class SampleClass11 { public: int8_t field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0054 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0054 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0054 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0055', () => {
    try {
      const r = parsec.parseFunction(`void pipeline11(int8_t p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0055 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0055 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0055 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0056', () => {
    try {
      const result = transTskey2Ckey('int16_t');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0056 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_basic_0056 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0056 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0057', () => {
    try {
      const r = parsec.parseFunction(`void sample12(int16_t p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0057 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0057 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0057 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0058', () => {
    try {
      const r = parsec.parseFunction(`int16_t sampleRet12();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0058 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0058 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0058 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0059', () => {
    try {
      const r = parsec.parseClass(`class SampleClass12 { public: int16_t field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0059 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0059 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0059 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0060', () => {
    try {
      const r = parsec.parseFunction(`void pipeline12(int16_t p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0060 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0060 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0060 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0061', () => {
    try {
      const result = transTskey2Ckey('int32_t');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0061 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_basic_0061 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0061 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0062', () => {
    try {
      const r = parsec.parseFunction(`void sample13(int32_t p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0062 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0062 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0062 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0063', () => {
    try {
      const r = parsec.parseFunction(`int32_t sampleRet13();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0063 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0063 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0063 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0064', () => {
    try {
      const r = parsec.parseClass(`class SampleClass13 { public: int32_t field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0064 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0064 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0064 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0065', () => {
    try {
      const r = parsec.parseFunction(`void pipeline13(int32_t p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0065 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0065 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0065 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0066', () => {
    try {
      const result = transTskey2Ckey('int64_t');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0066 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_basic_0066 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0066 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0067', () => {
    try {
      const r = parsec.parseFunction(`void sample14(int64_t p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0067 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0067 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0067 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0068', () => {
    try {
      const r = parsec.parseFunction(`int64_t sampleRet14();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0068 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0068 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0068 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0069', () => {
    try {
      const r = parsec.parseClass(`class SampleClass14 { public: int64_t field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0069 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0069 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0069 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0070', () => {
    try {
      const r = parsec.parseFunction(`void pipeline14(int64_t p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0070 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0070 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0070 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0071', () => {
    try {
      const result = transTskey2Ckey('bool');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0071 convert output non-empty");
      assert.strictEqual(result, "boolean", "h2dts_convert_basic_0071 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0071 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0072', () => {
    try {
      const r = parsec.parseFunction(`void sample15(bool p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0072 param convert output non-empty");
      assert.strictEqual(converted, "boolean", "h2dts_convert_basic_0072 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0072 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0073', () => {
    try {
      const r = parsec.parseFunction(`bool sampleRet15();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0073 return convert output non-empty");
      assert.strictEqual(converted, "boolean", "h2dts_convert_basic_0073 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0073 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0074', () => {
    try {
      const r = parsec.parseClass(`class SampleClass15 { public: bool field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0074 class field convert output non-empty");
      assert.strictEqual(converted, "boolean", "h2dts_convert_basic_0074 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0074 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0075', () => {
    try {
      const r = parsec.parseFunction(`void pipeline15(bool p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0075 pipeline convert output non-empty");
      assert.strictEqual(converted, "boolean", "h2dts_convert_basic_0075 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0075 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0076', () => {
    try {
      const result = transTskey2Ckey('char');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0076 convert output non-empty");
      assert.strictEqual(result, "string", "h2dts_convert_basic_0076 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0076 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0077', () => {
    try {
      const r = parsec.parseFunction(`void sample16(char p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0077 param convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0077 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0077 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0078', () => {
    try {
      const r = parsec.parseFunction(`char sampleRet16();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0078 return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0078 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0078 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0079', () => {
    try {
      const r = parsec.parseClass(`class SampleClass16 { public: char field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0079 class field convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0079 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0079 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0080', () => {
    try {
      const r = parsec.parseFunction(`void pipeline16(char p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0080 pipeline convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0080 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0080 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0081', () => {
    try {
      const result = transTskey2Ckey('char8_t');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0081 convert output non-empty");
      assert.strictEqual(result, "string", "h2dts_convert_basic_0081 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0081 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0082', () => {
    try {
      const r = parsec.parseFunction(`void sample18(char8_t p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0082 param convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0082 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0082 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0083', () => {
    try {
      const r = parsec.parseFunction(`char8_t sampleRet18();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0083 return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0083 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0083 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0084', () => {
    try {
      const r = parsec.parseClass(`class SampleClass18 { public: char8_t field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0084 class field convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0084 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0084 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0085', () => {
    try {
      const r = parsec.parseFunction(`void pipeline18(char8_t p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0085 pipeline convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0085 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0085 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0086', () => {
    try {
      const result = transTskey2Ckey('char16_t');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0086 convert output non-empty");
      assert.strictEqual(result, "string", "h2dts_convert_basic_0086 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0086 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0087', () => {
    try {
      const r = parsec.parseFunction(`void sample19(char16_t p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0087 param convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0087 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0087 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0088', () => {
    try {
      const r = parsec.parseFunction(`char16_t sampleRet19();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0088 return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0088 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0088 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0089', () => {
    try {
      const r = parsec.parseClass(`class SampleClass19 { public: char16_t field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0089 class field convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0089 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0089 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0090', () => {
    try {
      const r = parsec.parseFunction(`void pipeline19(char16_t p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0090 pipeline convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0090 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0090 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0091', () => {
    try {
      const result = transTskey2Ckey('char32_t');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0091 convert output non-empty");
      assert.strictEqual(result, "string", "h2dts_convert_basic_0091 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0091 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0092', () => {
    try {
      const r = parsec.parseFunction(`void sample20(char32_t p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0092 param convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0092 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0092 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0093', () => {
    try {
      const r = parsec.parseFunction(`char32_t sampleRet20();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0093 return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0093 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0093 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0094', () => {
    try {
      const r = parsec.parseClass(`class SampleClass20 { public: char32_t field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0094 class field convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0094 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0094 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0095', () => {
    try {
      const r = parsec.parseFunction(`void pipeline20(char32_t p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0095 pipeline convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0095 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0095 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0096', () => {
    try {
      const result = transTskey2Ckey('std::string');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0096 convert output non-empty");
      assert.strictEqual(result, "string", "h2dts_convert_basic_0096 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0096 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0097', () => {
    try {
      const r = parsec.parseFunction(`void sample218(std::string p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0097 param convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0097 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0097 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0098', () => {
    try {
      const r = parsec.parseFunction(`std::string sampleRet218();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0098 return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0098 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0098 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0099', () => {
    try {
      const r = parsec.parseClass(`class SampleClass218 { public: std::string field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0099 class field convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0099 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0099 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0100', () => {
    try {
      const r = parsec.parseFunction(`void pipeline218(std::string p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0100 pipeline convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0100 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0100 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0101', () => {
    try {
      const result = transTskey2Ckey('char *');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0101 convert output non-empty");
      assert.strictEqual(result, "string", "h2dts_convert_basic_0101 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0101 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0102', () => {
    try {
      const r = parsec.parseFunction(`void sample220(char * p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0102 param convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0102 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0102 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0103', () => {
    try {
      const r = parsec.parseFunction(`char * sampleRet220();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0103 return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0103 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0103 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0104', () => {
    try {
      const r = parsec.parseClass(`class SampleClass220 { public: char * field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0104 class field convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0104 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0104 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0105', () => {
    try {
      const r = parsec.parseFunction(`void pipeline220(char * p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0105 pipeline convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0105 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0105 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0106', () => {
    try {
      const result = transTskey2Ckey('long long');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0106 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_basic_0106 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0106 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0107', () => {
    try {
      const r = parsec.parseFunction(`void sample221(long long p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0107 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0107 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0107 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0108', () => {
    try {
      const r = parsec.parseFunction(`long long sampleRet221();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0108 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0108 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0108 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0109', () => {
    try {
      const r = parsec.parseClass(`class SampleClass221 { public: long long field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0109 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0109 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0109 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0110', () => {
    try {
      const r = parsec.parseFunction(`void pipeline221(long long p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0110 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0110 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0110 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0111', () => {
    try {
      const result = transTskey2Ckey('unsigned short');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0111 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_basic_0111 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0111 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0112', () => {
    try {
      const r = parsec.parseFunction(`void sample222(unsigned short p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0112 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0112 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0112 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0113', () => {
    try {
      const r = parsec.parseFunction(`unsigned short sampleRet222();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0113 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0113 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0113 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0114', () => {
    try {
      const r = parsec.parseClass(`class SampleClass222 { public: unsigned short field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0114 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0114 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0114 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0115', () => {
    try {
      const r = parsec.parseFunction(`void pipeline222(unsigned short p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0115 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0115 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0115 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0116', () => {
    try {
      const result = transTskey2Ckey('unsigned long');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0116 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_basic_0116 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0116 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0117', () => {
    try {
      const r = parsec.parseFunction(`void sample223(unsigned long p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0117 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0117 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0117 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0118', () => {
    try {
      const r = parsec.parseFunction(`unsigned long sampleRet223();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0118 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0118 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0118 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0119', () => {
    try {
      const r = parsec.parseClass(`class SampleClass223 { public: unsigned long field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0119 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0119 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0119 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0120', () => {
    try {
      const r = parsec.parseFunction(`void pipeline223(unsigned long p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0120 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0120 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0120 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0121', () => {
    try {
      const result = transTskey2Ckey('unsigned long long');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0121 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_basic_0121 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0121 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0122', () => {
    try {
      const r = parsec.parseFunction(`void sample224(unsigned long long p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0122 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0122 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0122 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0123', () => {
    try {
      const r = parsec.parseFunction(`unsigned long long sampleRet224();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0123 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0123 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0123 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0124', () => {
    try {
      const r = parsec.parseClass(`class SampleClass224 { public: unsigned long long field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0124 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0124 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0124 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0125', () => {
    try {
      const r = parsec.parseFunction(`void pipeline224(unsigned long long p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0125 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0125 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0125 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0126', () => {
    try {
      const result = transTskey2Ckey('int *');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0126 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_basic_0126 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0126 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0127', () => {
    try {
      const r = parsec.parseFunction(`void sample229(int * p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0127 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0127 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0127 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0128', () => {
    try {
      const r = parsec.parseFunction(`int * sampleRet229();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0128 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0128 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0128 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0129', () => {
    try {
      const r = parsec.parseClass(`class SampleClass229 { public: int * field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0129 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0129 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0129 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0130', () => {
    try {
      const r = parsec.parseFunction(`void pipeline229(int * p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0130 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0130 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0130 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0131', () => {
    try {
      const result = transTskey2Ckey('int$#');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0131 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_basic_0131 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0131 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0132', () => {
    try {
      const r = parsec.parseFunction(`void sample290(int$# p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0132 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0132 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0132 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0133', () => {
    try {
      const r = parsec.parseFunction(`int$# sampleRet290();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0133 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0133 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0133 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0134', () => {
    try {
      const r = parsec.parseClass(`class SampleClass290 { public: int$# field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0134 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0134 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0134 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0135', () => {
    try {
      const r = parsec.parseFunction(`void pipeline290(int$# p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0135 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0135 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0135 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0136', () => {
    try {
      const result = transTskey2Ckey('unsigned');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0136 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_basic_0136 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0136 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0137', () => {
    try {
      const r = parsec.parseFunction(`void sample306(unsigned p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0137 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0137 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0137 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0138', () => {
    try {
      const r = parsec.parseFunction(`unsigned sampleRet306();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0138 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0138 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0138 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0139', () => {
    try {
      const r = parsec.parseClass(`class SampleClass306 { public: unsigned field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0139 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0139 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0139 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0140', () => {
    try {
      const r = parsec.parseFunction(`void pipeline306(unsigned p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0140 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0140 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0140 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0141', () => {
    try {
      const result = transTskey2Ckey('unsigned int');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0141 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_basic_0141 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0141 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0142', () => {
    try {
      const r = parsec.parseFunction(`void sample626(unsigned int p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0142 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0142 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0142 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0143', () => {
    try {
      const r = parsec.parseFunction(`unsigned int sampleRet626();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0143 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0143 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0143 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0144', () => {
    try {
      const r = parsec.parseClass(`class SampleClass626 { public: unsigned int field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0144 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0144 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0144 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0145', () => {
    try {
      const r = parsec.parseFunction(`void pipeline626(unsigned int p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0145 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0145 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0145 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0146', () => {
    try {
      const result = transTskey2Ckey('unsigned char');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0146 convert output non-empty");
      assert.strictEqual(result, "string", "h2dts_convert_basic_0146 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0146 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0147', () => {
    try {
      const r = parsec.parseFunction(`void sample628(unsigned char p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0147 param convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0147 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0147 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0148', () => {
    try {
      const r = parsec.parseFunction(`unsigned char sampleRet628();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0148 return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0148 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0148 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0149', () => {
    try {
      const r = parsec.parseClass(`class SampleClass628 { public: unsigned char field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0149 class field convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0149 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0149 execution error: ${String(err)}`);
    }
  });
});
