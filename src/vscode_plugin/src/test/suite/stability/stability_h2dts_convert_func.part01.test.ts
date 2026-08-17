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

suite('Stability_H2DTS_CONVERT_FUNC_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_CONVERT_FUNC_Part01.');


  test('h2dts_convert_func_0001', () => {
    try {
      const result = transTskey2Ckey('std::function<int(int, int)>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0001 convert output non-empty");
      assert.strictEqual(result, "(param0: number, param1: number)=>number", "h2dts_convert_func_0001 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0001 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0002', () => {
    try {
      const r = parsec.parseFunction(`void sample147(std::function<int(int, int)> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0002 param convert output non-empty");
      assert.strictEqual(converted, "(param0: number, param1: number)=>number",
        "h2dts_convert_func_0002 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0002 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0003', () => {
    try {
      const r = parsec.parseFunction(`std::function<int(int, int)> sampleRet147();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0003 return convert output non-empty");
      assert.strictEqual(converted, "(param0: number, param1: number)=>number",
        "h2dts_convert_func_0003 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0003 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0004', () => {
    try {
      const r = parsec.parseClass(`class SampleClass147 { public: std::function<int(int, int)> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0004 class field convert output non-empty");
      assert.strictEqual(converted, "(param0: number, param1: number)=>number",
        "h2dts_convert_func_0004 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0004 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0005', () => {
    try {
      const r = parsec.parseFunction(`void pipeline147(std::function<int(int, int)> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0005 pipeline convert output non-empty");
      assert.strictEqual(converted, "(param0: number, param1: number)=>number",
        "h2dts_convert_func_0005 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0005 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0006', () => {
    try {
      const result = transTskey2Ckey('std::function<void(long, long)>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0006 convert output non-empty");
      assert.strictEqual(result, "(param0: number, param1: number)=>void", "h2dts_convert_func_0006 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0006 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0007', () => {
    try {
      const r = parsec.parseFunction(`void sample148(std::function<void(long, long)> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0007 param convert output non-empty");
      assert.strictEqual(converted, "(param0: number, param1: number)=>void",
        "h2dts_convert_func_0007 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0007 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0008', () => {
    try {
      const r = parsec.parseFunction(`std::function<void(long, long)> sampleRet148();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0008 return convert output non-empty");
      assert.strictEqual(converted, "(param0: number, param1: number)=>void",
        "h2dts_convert_func_0008 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0008 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0009', () => {
    try {
      const r = parsec.parseClass(`class SampleClass148 { public: std::function<void(long, long)> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0009 class field convert output non-empty");
      assert.strictEqual(converted, "(param0: number, param1: number)=>void",
        "h2dts_convert_func_0009 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0009 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0010', () => {
    try {
      const r = parsec.parseFunction(`void pipeline148(std::function<void(long, long)> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0010 pipeline convert output non-empty");
      assert.strictEqual(converted, "(param0: number, param1: number)=>void",
        "h2dts_convert_func_0010 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0010 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0011', () => {
    try {
      const result = transTskey2Ckey('std::function<int(float)>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0011 convert output non-empty");
      assert.strictEqual(result, "(param0: number)=>number", "h2dts_convert_func_0011 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0011 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0012', () => {
    try {
      const r = parsec.parseFunction(`void sample149(std::function<int(float)> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0012 param convert output non-empty");
      assert.strictEqual(converted, "(param0: number)=>number", "h2dts_convert_func_0012 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0012 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0013', () => {
    try {
      const r = parsec.parseFunction(`std::function<int(float)> sampleRet149();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0013 return convert output non-empty");
      assert.strictEqual(converted, "(param0: number)=>number", "h2dts_convert_func_0013 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0013 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0014', () => {
    try {
      const r = parsec.parseClass(`class SampleClass149 { public: std::function<int(float)> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0014 class field convert output non-empty");
      assert.strictEqual(converted, "(param0: number)=>number", "h2dts_convert_func_0014 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0014 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0015', () => {
    try {
      const r = parsec.parseFunction(`void pipeline149(std::function<int(float)> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0015 pipeline convert output non-empty");
      assert.strictEqual(converted, "(param0: number)=>number", "h2dts_convert_func_0015 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0015 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0016', () => {
    try {
      const result = transTskey2Ckey('std::function<void(double)>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0016 convert output non-empty");
      assert.strictEqual(result, "(param0: number)=>void", "h2dts_convert_func_0016 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0016 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0017', () => {
    try {
      const r = parsec.parseFunction(`void sample150(std::function<void(double)> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0017 param convert output non-empty");
      assert.strictEqual(converted, "(param0: number)=>void", "h2dts_convert_func_0017 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0017 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0018', () => {
    try {
      const r = parsec.parseFunction(`std::function<void(double)> sampleRet150();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0018 return convert output non-empty");
      assert.strictEqual(converted, "(param0: number)=>void", "h2dts_convert_func_0018 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0018 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0019', () => {
    try {
      const r = parsec.parseClass(`class SampleClass150 { public: std::function<void(double)> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0019 class field convert output non-empty");
      assert.strictEqual(converted, "(param0: number)=>void", "h2dts_convert_func_0019 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0019 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0020', () => {
    try {
      const r = parsec.parseFunction(`void pipeline150(std::function<void(double)> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0020 pipeline convert output non-empty");
      assert.strictEqual(converted, "(param0: number)=>void", "h2dts_convert_func_0020 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0020 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0021', () => {
    try {
      const result = transTskey2Ckey('std::function<void(char, short, short)>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0021 convert output non-empty");
      assert.strictEqual(result, "(param0: string, param1: number, param2: number)=>void",
        "h2dts_convert_func_0021 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0021 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0022', () => {
    try {
      const r = parsec.parseFunction(`void sample151(std::function<void(char, short, short)> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0022 param convert output non-empty");
      assert.strictEqual(converted, "(param0: string, param1: number, param2: number)=>void",
        "h2dts_convert_func_0022 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0022 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0023', () => {
    try {
      const r = parsec.parseFunction(`std::function<void(char, short, short)> sampleRet151();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0023 return convert output non-empty");
      assert.strictEqual(converted, "(param0: string, param1: number, param2: number)=>void",
        "h2dts_convert_func_0023 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0023 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0024', () => {
    try {
      const r = parsec.parseClass(`class SampleClass151 { public: std::function<void(char, short, short)> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0024 class field convert output non-empty");
      assert.strictEqual(converted, "(param0: string, param1: number, param2: number)=>void",
        "h2dts_convert_func_0024 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0024 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0025', () => {
    try {
      const r = parsec.parseFunction(`void pipeline151(std::function<void(char, short, short)> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0025 pipeline convert output non-empty");
      assert.strictEqual(converted, "(param0: string, param1: number, param2: number)=>void",
        "h2dts_convert_func_0025 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0025 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0026', () => {
    try {
      const result = transTskey2Ckey('std::function<void(char16_t, uint16_t)>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0026 convert output non-empty");
      assert.strictEqual(result, "(param0: string, param1: number)=>void", "h2dts_convert_func_0026 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0026 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0027', () => {
    try {
      const r = parsec.parseFunction(`void sample152(std::function<void(char16_t, uint16_t)> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0027 param convert output non-empty");
      assert.strictEqual(converted, "(param0: string, param1: number)=>void",
        "h2dts_convert_func_0027 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0027 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0028', () => {
    try {
      const r = parsec.parseFunction(`std::function<void(char16_t, uint16_t)> sampleRet152();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0028 return convert output non-empty");
      assert.strictEqual(converted, "(param0: string, param1: number)=>void",
        "h2dts_convert_func_0028 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0028 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0029', () => {
    try {
      const r = parsec.parseClass(`class SampleClass152 { public: std::function<void(char16_t, uint16_t)> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0029 class field convert output non-empty");
      assert.strictEqual(converted, "(param0: string, param1: number)=>void",
        "h2dts_convert_func_0029 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0029 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0030', () => {
    try {
      const r = parsec.parseFunction(`void pipeline152(std::function<void(char16_t, uint16_t)> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0030 pipeline convert output non-empty");
      assert.strictEqual(converted, "(param0: string, param1: number)=>void",
        "h2dts_convert_func_0030 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0030 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0031', () => {
    try {
      const result = transTskey2Ckey('std::function<unsigned(char64_t, size_t)>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0031 convert output non-empty");
      assert.strictEqual(result, "(param0: string, param1: number)=>number", "h2dts_convert_func_0031 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0031 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0032', () => {
    try {
      const r = parsec.parseFunction(`void sample153(std::function<unsigned(char64_t, size_t)> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0032 param convert output non-empty");
      assert.strictEqual(converted, "(param0: string, param1: number)=>number",
        "h2dts_convert_func_0032 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0032 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0033', () => {
    try {
      const r = parsec.parseFunction(`std::function<unsigned(char64_t, size_t)> sampleRet153();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0033 return convert output non-empty");
      assert.strictEqual(converted, "(param0: string, param1: number)=>number",
        "h2dts_convert_func_0033 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0033 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0034', () => {
    try {
      const r = parsec.parseClass(`class SampleClass153 { public: std::function<unsigned(char64_t, size_t)> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0034 class field convert output non-empty");
      assert.strictEqual(converted, "(param0: string, param1: number)=>number",
        "h2dts_convert_func_0034 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0034 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0035', () => {
    try {
      const r = parsec.parseFunction(`void pipeline153(std::function<unsigned(char64_t, size_t)> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0035 pipeline convert output non-empty");
      assert.strictEqual(converted, "(param0: string, param1: number)=>number",
        "h2dts_convert_func_0035 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0035 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0036', () => {
    try {
      const result = transTskey2Ckey('std::function<char32_t(char8_t, int32_t)>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0036 convert output non-empty");
      assert.strictEqual(result, "(param0: string, param1: number)=>string", "h2dts_convert_func_0036 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0036 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0037', () => {
    try {
      const r = parsec.parseFunction(`void sample154(std::function<char32_t(char8_t, int32_t)> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0037 param convert output non-empty");
      assert.strictEqual(converted, "(param0: string, param1: number)=>string",
        "h2dts_convert_func_0037 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0037 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0038', () => {
    try {
      const r = parsec.parseFunction(`std::function<char32_t(char8_t, int32_t)> sampleRet154();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0038 return convert output non-empty");
      assert.strictEqual(converted, "(param0: string, param1: number)=>string",
        "h2dts_convert_func_0038 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0038 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0039', () => {
    try {
      const r = parsec.parseClass(`class SampleClass154 { public: std::function<char32_t(char8_t, int32_t)> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0039 class field convert output non-empty");
      assert.strictEqual(converted, "(param0: string, param1: number)=>string",
        "h2dts_convert_func_0039 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0039 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0040', () => {
    try {
      const r = parsec.parseFunction(`void pipeline154(std::function<char32_t(char8_t, int32_t)> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0040 pipeline convert output non-empty");
      assert.strictEqual(converted, "(param0: string, param1: number)=>string",
        "h2dts_convert_func_0040 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0040 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0041', () => {
    try {
      const result = transTskey2Ckey('std::function<uint64_t(wchar_t, uint32_t)>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0041 convert output non-empty");
      assert.strictEqual(result, "(param0: string, param1: number)=>number", "h2dts_convert_func_0041 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0041 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0042', () => {
    try {
      const r = parsec.parseFunction(`void sample155(std::function<uint64_t(wchar_t, uint32_t)> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0042 param convert output non-empty");
      assert.strictEqual(converted, "(param0: string, param1: number)=>number",
        "h2dts_convert_func_0042 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0042 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0043', () => {
    try {
      const r = parsec.parseFunction(`std::function<uint64_t(wchar_t, uint32_t)> sampleRet155();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0043 return convert output non-empty");
      assert.strictEqual(converted, "(param0: string, param1: number)=>number",
        "h2dts_convert_func_0043 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0043 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0044', () => {
    try {
      const r = parsec.parseClass(`
        class SampleClass155 { public: std::function<uint64_t(wchar_t, uint32_t)> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0044 class field convert output non-empty");
      assert.strictEqual(converted, "(param0: string, param1: number)=>number",
        "h2dts_convert_func_0044 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0044 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0045', () => {
    try {
      const r = parsec.parseFunction(`void pipeline155(std::function<uint64_t(wchar_t, uint32_t)> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0045 pipeline convert output non-empty");
      assert.strictEqual(converted, "(param0: string, param1: number)=>number",
        "h2dts_convert_func_0045 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0045 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0046', () => {
    try {
      const result = transTskey2Ckey('std::function<int64_t(int8_t, int16_t)>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0046 convert output non-empty");
      assert.strictEqual(result, "(param0: number, param1: number)=>number", "h2dts_convert_func_0046 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0046 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0047', () => {
    try {
      const r = parsec.parseFunction(`void sample156(std::function<int64_t(int8_t, int16_t)> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0047 param convert output non-empty");
      assert.strictEqual(converted, "(param0: number, param1: number)=>number",
        "h2dts_convert_func_0047 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0047 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0048', () => {
    try {
      const r = parsec.parseFunction(`std::function<int64_t(int8_t, int16_t)> sampleRet156();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0048 return convert output non-empty");
      assert.strictEqual(converted, "(param0: number, param1: number)=>number",
        "h2dts_convert_func_0048 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0048 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0049', () => {
    try {
      const r = parsec.parseClass(`class SampleClass156 { public: std::function<int64_t(int8_t, int16_t)> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0049 class field convert output non-empty");
      assert.strictEqual(converted, "(param0: number, param1: number)=>number",
        "h2dts_convert_func_0049 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0049 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0050', () => {
    try {
      const r = parsec.parseFunction(`void pipeline156(std::function<int64_t(int8_t, int16_t)> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0050 pipeline convert output non-empty");
      assert.strictEqual(converted, "(param0: number, param1: number)=>number",
        "h2dts_convert_func_0050 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0050 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0051', () => {
    try {
      const result = transTskey2Ckey('std::function<bool(int32_t)>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0051 convert output non-empty");
      assert.strictEqual(result, "(param0: number)=>boolean", "h2dts_convert_func_0051 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0051 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0052', () => {
    try {
      const r = parsec.parseFunction(`void sample157(std::function<bool(int32_t)> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0052 param convert output non-empty");
      assert.strictEqual(converted, "(param0: number)=>boolean", "h2dts_convert_func_0052 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0052 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0053', () => {
    try {
      const r = parsec.parseFunction(`std::function<bool(int32_t)> sampleRet157();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0053 return convert output non-empty");
      assert.strictEqual(converted, "(param0: number)=>boolean", "h2dts_convert_func_0053 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0053 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0054', () => {
    try {
      const r = parsec.parseClass(`class SampleClass157 { public: std::function<bool(int32_t)> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0054 class field convert output non-empty");
      assert.strictEqual(converted, "(param0: number)=>boolean", "h2dts_convert_func_0054 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0054 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0055', () => {
    try {
      const r = parsec.parseFunction(`void pipeline157(std::function<bool(int32_t)> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0055 pipeline convert output non-empty");
      assert.strictEqual(converted, "(param0: number)=>boolean", "h2dts_convert_func_0055 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0055 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0056', () => {
    try {
      const result = transTskey2Ckey('std::unique_ptr<int>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0056 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0056 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0056 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0057', () => {
    try {
      const r = parsec.parseFunction(`void sample158(std::unique_ptr<int> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0057 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0057 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0057 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0058', () => {
    try {
      const r = parsec.parseFunction(`std::unique_ptr<int> sampleRet158();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0058 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0058 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0058 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0059', () => {
    try {
      const r = parsec.parseClass(`class SampleClass158 { public: std::unique_ptr<int> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0059 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0059 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0059 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0060', () => {
    try {
      const r = parsec.parseFunction(`void pipeline158(std::unique_ptr<int> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0060 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0060 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0060 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0061', () => {
    try {
      const result = transTskey2Ckey('std::unique_ptr<size_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0061 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0061 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0061 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0062', () => {
    try {
      const r = parsec.parseFunction(`void sample159(std::unique_ptr<size_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0062 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0062 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0062 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0063', () => {
    try {
      const r = parsec.parseFunction(`std::unique_ptr<size_t> sampleRet159();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0063 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0063 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0063 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0064', () => {
    try {
      const r = parsec.parseClass(`class SampleClass159 { public: std::unique_ptr<size_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0064 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0064 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0064 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0065', () => {
    try {
      const r = parsec.parseFunction(`void pipeline159(std::unique_ptr<size_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0065 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0065 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0065 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0066', () => {
    try {
      const result = transTskey2Ckey('std::unique_ptr<double>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0066 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0066 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0066 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0067', () => {
    try {
      const r = parsec.parseFunction(`void sample160(std::unique_ptr<double> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0067 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0067 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0067 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0068', () => {
    try {
      const r = parsec.parseFunction(`std::unique_ptr<double> sampleRet160();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0068 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0068 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0068 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0069', () => {
    try {
      const r = parsec.parseClass(`class SampleClass160 { public: std::unique_ptr<double> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0069 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0069 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0069 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0070', () => {
    try {
      const r = parsec.parseFunction(`void pipeline160(std::unique_ptr<double> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0070 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0070 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0070 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0071', () => {
    try {
      const result = transTskey2Ckey('std::unique_ptr<float>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0071 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0071 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0071 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0072', () => {
    try {
      const r = parsec.parseFunction(`void sample161(std::unique_ptr<float> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0072 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0072 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0072 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0073', () => {
    try {
      const r = parsec.parseFunction(`std::unique_ptr<float> sampleRet161();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0073 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0073 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0073 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0074', () => {
    try {
      const r = parsec.parseClass(`class SampleClass161 { public: std::unique_ptr<float> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0074 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0074 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0074 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0075', () => {
    try {
      const r = parsec.parseFunction(`void pipeline161(std::unique_ptr<float> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0075 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0075 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0075 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0076', () => {
    try {
      const result = transTskey2Ckey('std::unique_ptr<long>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0076 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0076 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0076 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0077', () => {
    try {
      const r = parsec.parseFunction(`void sample162(std::unique_ptr<long> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0077 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0077 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0077 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0078', () => {
    try {
      const r = parsec.parseFunction(`std::unique_ptr<long> sampleRet162();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0078 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0078 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0078 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0079', () => {
    try {
      const r = parsec.parseClass(`class SampleClass162 { public: std::unique_ptr<long> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0079 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0079 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0079 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0080', () => {
    try {
      const r = parsec.parseFunction(`void pipeline162(std::unique_ptr<long> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0080 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0080 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0080 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0081', () => {
    try {
      const result = transTskey2Ckey('std::unique_ptr<short>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0081 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0081 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0081 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0082', () => {
    try {
      const r = parsec.parseFunction(`void sample163(std::unique_ptr<short> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0082 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0082 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0082 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0083', () => {
    try {
      const r = parsec.parseFunction(`std::unique_ptr<short> sampleRet163();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0083 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0083 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0083 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0084', () => {
    try {
      const r = parsec.parseClass(`class SampleClass163 { public: std::unique_ptr<short> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0084 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0084 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0084 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0085', () => {
    try {
      const r = parsec.parseFunction(`void pipeline163(std::unique_ptr<short> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0085 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0085 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0085 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0086', () => {
    try {
      const result = transTskey2Ckey('std::unique_ptr<uint8_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0086 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0086 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0086 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0087', () => {
    try {
      const r = parsec.parseFunction(`void sample164(std::unique_ptr<uint8_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0087 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0087 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0087 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0088', () => {
    try {
      const r = parsec.parseFunction(`std::unique_ptr<uint8_t> sampleRet164();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0088 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0088 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0088 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0089', () => {
    try {
      const r = parsec.parseClass(`class SampleClass164 { public: std::unique_ptr<uint8_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0089 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0089 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0089 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0090', () => {
    try {
      const r = parsec.parseFunction(`void pipeline164(std::unique_ptr<uint8_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0090 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0090 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0090 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0091', () => {
    try {
      const result = transTskey2Ckey('std::unique_ptr<uint16_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0091 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0091 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0091 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0092', () => {
    try {
      const r = parsec.parseFunction(`void sample165(std::unique_ptr<uint16_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0092 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0092 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0092 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0093', () => {
    try {
      const r = parsec.parseFunction(`std::unique_ptr<uint16_t> sampleRet165();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0093 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0093 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0093 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0094', () => {
    try {
      const r = parsec.parseClass(`class SampleClass165 { public: std::unique_ptr<uint16_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0094 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0094 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0094 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0095', () => {
    try {
      const r = parsec.parseFunction(`void pipeline165(std::unique_ptr<uint16_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0095 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0095 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0095 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0096', () => {
    try {
      const result = transTskey2Ckey('std::unique_ptr<uint32_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0096 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0096 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0096 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0097', () => {
    try {
      const r = parsec.parseFunction(`void sample166(std::unique_ptr<uint32_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0097 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0097 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0097 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0098', () => {
    try {
      const r = parsec.parseFunction(`std::unique_ptr<uint32_t> sampleRet166();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0098 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0098 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0098 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0099', () => {
    try {
      const r = parsec.parseClass(`class SampleClass166 { public: std::unique_ptr<uint32_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0099 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0099 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0099 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0100', () => {
    try {
      const r = parsec.parseFunction(`void pipeline166(std::unique_ptr<uint32_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0100 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0100 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0100 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0101', () => {
    try {
      const result = transTskey2Ckey('std::unique_ptr<uint64_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0101 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0101 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0101 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0102', () => {
    try {
      const r = parsec.parseFunction(`void sample167(std::unique_ptr<uint64_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0102 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0102 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0102 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0103', () => {
    try {
      const r = parsec.parseFunction(`std::unique_ptr<uint64_t> sampleRet167();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0103 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0103 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0103 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0104', () => {
    try {
      const r = parsec.parseClass(`class SampleClass167 { public: std::unique_ptr<uint64_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0104 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0104 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0104 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0105', () => {
    try {
      const r = parsec.parseFunction(`void pipeline167(std::unique_ptr<uint64_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0105 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0105 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0105 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0106', () => {
    try {
      const result = transTskey2Ckey('std::unique_ptr<int8_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0106 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0106 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0106 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0107', () => {
    try {
      const r = parsec.parseFunction(`void sample168(std::unique_ptr<int8_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0107 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0107 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0107 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0108', () => {
    try {
      const r = parsec.parseFunction(`std::unique_ptr<int8_t> sampleRet168();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0108 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0108 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0108 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0109', () => {
    try {
      const r = parsec.parseClass(`class SampleClass168 { public: std::unique_ptr<int8_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0109 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0109 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0109 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0110', () => {
    try {
      const r = parsec.parseFunction(`void pipeline168(std::unique_ptr<int8_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0110 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0110 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0110 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0111', () => {
    try {
      const result = transTskey2Ckey('std::unique_ptr<int16_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0111 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0111 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0111 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0112', () => {
    try {
      const r = parsec.parseFunction(`void sample169(std::unique_ptr<int16_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0112 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0112 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0112 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0113', () => {
    try {
      const r = parsec.parseFunction(`std::unique_ptr<int16_t> sampleRet169();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0113 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0113 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0113 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0114', () => {
    try {
      const r = parsec.parseClass(`class SampleClass169 { public: std::unique_ptr<int16_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0114 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0114 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0114 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0115', () => {
    try {
      const r = parsec.parseFunction(`void pipeline169(std::unique_ptr<int16_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0115 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0115 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0115 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0116', () => {
    try {
      const result = transTskey2Ckey('std::unique_ptr<int32_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0116 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0116 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0116 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0117', () => {
    try {
      const r = parsec.parseFunction(`void sample170(std::unique_ptr<int32_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0117 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0117 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0117 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0118', () => {
    try {
      const r = parsec.parseFunction(`std::unique_ptr<int32_t> sampleRet170();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0118 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0118 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0118 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0119', () => {
    try {
      const r = parsec.parseClass(`class SampleClass170 { public: std::unique_ptr<int32_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0119 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0119 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0119 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0120', () => {
    try {
      const r = parsec.parseFunction(`void pipeline170(std::unique_ptr<int32_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0120 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0120 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0120 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0121', () => {
    try {
      const result = transTskey2Ckey('std::unique_ptr<int64_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0121 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_func_0121 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0121 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0122', () => {
    try {
      const r = parsec.parseFunction(`void sample171(std::unique_ptr<int64_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0122 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0122 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0122 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0123', () => {
    try {
      const r = parsec.parseFunction(`std::unique_ptr<int64_t> sampleRet171();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0123 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0123 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0123 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0124', () => {
    try {
      const r = parsec.parseClass(`class SampleClass171 { public: std::unique_ptr<int64_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0124 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0124 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0124 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0125', () => {
    try {
      const r = parsec.parseFunction(`void pipeline171(std::unique_ptr<int64_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0125 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_func_0125 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0125 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0126', () => {
    try {
      const result = transTskey2Ckey('std::unique_ptr<bool>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0126 convert output non-empty");
      assert.strictEqual(result, "boolean", "h2dts_convert_func_0126 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0126 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0127', () => {
    try {
      const r = parsec.parseFunction(`void sample172(std::unique_ptr<bool> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0127 param convert output non-empty");
      assert.strictEqual(converted, "boolean", "h2dts_convert_func_0127 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0127 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0128', () => {
    try {
      const r = parsec.parseFunction(`std::unique_ptr<bool> sampleRet172();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0128 return convert output non-empty");
      assert.strictEqual(converted, "boolean", "h2dts_convert_func_0128 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0128 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0129', () => {
    try {
      const r = parsec.parseClass(`class SampleClass172 { public: std::unique_ptr<bool> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0129 class field convert output non-empty");
      assert.strictEqual(converted, "boolean", "h2dts_convert_func_0129 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0129 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0130', () => {
    try {
      const r = parsec.parseFunction(`void pipeline172(std::unique_ptr<bool> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0130 pipeline convert output non-empty");
      assert.strictEqual(converted, "boolean", "h2dts_convert_func_0130 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0130 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0131', () => {
    try {
      const result = transTskey2Ckey('std::unique_ptr<char>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0131 convert output non-empty");
      assert.strictEqual(result, "string", "h2dts_convert_func_0131 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0131 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0132', () => {
    try {
      const r = parsec.parseFunction(`void sample173(std::unique_ptr<char> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0132 param convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0132 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0132 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0133', () => {
    try {
      const r = parsec.parseFunction(`std::unique_ptr<char> sampleRet173();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0133 return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0133 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0133 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0134', () => {
    try {
      const r = parsec.parseClass(`class SampleClass173 { public: std::unique_ptr<char> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0134 class field convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0134 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0134 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0135', () => {
    try {
      const r = parsec.parseFunction(`void pipeline173(std::unique_ptr<char> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0135 pipeline convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0135 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0135 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0136', () => {
    try {
      const result = transTskey2Ckey('std::unique_ptr<wchar_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0136 convert output non-empty");
      assert.strictEqual(result, "string", "h2dts_convert_func_0136 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0136 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0137', () => {
    try {
      const r = parsec.parseFunction(`void sample174(std::unique_ptr<wchar_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0137 param convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0137 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0137 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0138', () => {
    try {
      const r = parsec.parseFunction(`std::unique_ptr<wchar_t> sampleRet174();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0138 return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0138 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0138 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0139', () => {
    try {
      const r = parsec.parseClass(`class SampleClass174 { public: std::unique_ptr<wchar_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0139 class field convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0139 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0139 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0140', () => {
    try {
      const r = parsec.parseFunction(`void pipeline174(std::unique_ptr<wchar_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0140 pipeline convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0140 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0140 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0141', () => {
    try {
      const result = transTskey2Ckey('std::unique_ptr<char8_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0141 convert output non-empty");
      assert.strictEqual(result, "string", "h2dts_convert_func_0141 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0141 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0142', () => {
    try {
      const r = parsec.parseFunction(`void sample175(std::unique_ptr<char8_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0142 param convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0142 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0142 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0143', () => {
    try {
      const r = parsec.parseFunction(`std::unique_ptr<char8_t> sampleRet175();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0143 return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0143 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0143 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0144', () => {
    try {
      const r = parsec.parseClass(`class SampleClass175 { public: std::unique_ptr<char8_t> field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0144 class field convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0144 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0144 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0145', () => {
    try {
      const r = parsec.parseFunction(`void pipeline175(std::unique_ptr<char8_t> p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0145 pipeline convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0145 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0145 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0146', () => {
    try {
      const result = transTskey2Ckey('std::unique_ptr<char16_t>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_func_0146 convert output non-empty");
      assert.strictEqual(result, "string", "h2dts_convert_func_0146 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0146 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_func_0147', () => {
    try {
      const r = parsec.parseFunction(`void sample176(std::unique_ptr<char16_t> p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_func_0147 param convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_func_0147 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_func_0147 execution error: ${String(err)}`);
    }
  });
});
