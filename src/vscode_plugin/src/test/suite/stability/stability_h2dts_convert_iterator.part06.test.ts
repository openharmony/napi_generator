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

suite('Stability_H2DTS_CONVERT_ITERATOR_Part06', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_CONVERT_ITERATOR_Part06.');


  test('h2dts_convert_iterator_0001', () => {
    try {
      const r = parsec.parseFunction(`void sample489(std::queue<int64_t>::iterator p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0001 param convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0001 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0001 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0002', () => {
    try {
      const r = parsec.parseFunction(`std::queue<int64_t>::iterator sampleRet489();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0002 return convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0002 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0002 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0003', () => {
    try {
      const r = parsec.parseClass(`class SampleClass489 { public: std::queue<int64_t>::iterator field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0003 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_iterator_0003 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0003 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0004', () => {
    try {
      const r = parsec.parseFunction(`void pipeline489(std::queue<int64_t>::iterator p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0004 pipeline convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0004 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0004 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0005', () => {
    try {
      const result = transTskey2Ckey('std::queue<unsigned>::iterator');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_iterator_0005 convert output non-empty");
      assert.strictEqual(result, "IterableIterator<Array<number>>", "h2dts_convert_iterator_0005 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0005 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0006', () => {
    try {
      const r = parsec.parseFunction(`void sample490(std::queue<unsigned>::iterator p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0006 param convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0006 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0006 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0007', () => {
    try {
      const r = parsec.parseFunction(`std::queue<unsigned>::iterator sampleRet490();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0007 return convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0007 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0007 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0008', () => {
    try {
      const r = parsec.parseClass(`class SampleClass490 { public: std::queue<unsigned>::iterator field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0008 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_iterator_0008 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0008 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0009', () => {
    try {
      const r = parsec.parseFunction(`void pipeline490(std::queue<unsigned>::iterator p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0009 pipeline convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0009 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0009 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0010', () => {
    try {
      const result = transTskey2Ckey('std::queue<bool>::iterator');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_iterator_0010 convert output non-empty");
      assert.strictEqual(result, "IterableIterator<Array<boolean>>", "h2dts_convert_iterator_0010 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0010 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0011', () => {
    try {
      const r = parsec.parseFunction(`void sample491(std::queue<bool>::iterator p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0011 param convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<boolean>>",
        "h2dts_convert_iterator_0011 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0011 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0012', () => {
    try {
      const r = parsec.parseFunction(`std::queue<bool>::iterator sampleRet491();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0012 return convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<boolean>>",
        "h2dts_convert_iterator_0012 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0012 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0013', () => {
    try {
      const r = parsec.parseClass(`class SampleClass491 { public: std::queue<bool>::iterator field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0013 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_iterator_0013 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0013 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0014', () => {
    try {
      const r = parsec.parseFunction(`void pipeline491(std::queue<bool>::iterator p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0014 pipeline convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<boolean>>",
        "h2dts_convert_iterator_0014 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0014 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0015', () => {
    try {
      const result = transTskey2Ckey('std::queue<char>::iterator');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_iterator_0015 convert output non-empty");
      assert.strictEqual(result, "IterableIterator<Array<string>>", "h2dts_convert_iterator_0015 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0015 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0016', () => {
    try {
      const r = parsec.parseFunction(`void sample492(std::queue<char>::iterator p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0016 param convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<string>>",
        "h2dts_convert_iterator_0016 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0016 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0017', () => {
    try {
      const r = parsec.parseFunction(`std::queue<char>::iterator sampleRet492();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0017 return convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<string>>",
        "h2dts_convert_iterator_0017 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0017 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0018', () => {
    try {
      const r = parsec.parseClass(`class SampleClass492 { public: std::queue<char>::iterator field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0018 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_iterator_0018 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0018 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0019', () => {
    try {
      const r = parsec.parseFunction(`void pipeline492(std::queue<char>::iterator p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0019 pipeline convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<string>>",
        "h2dts_convert_iterator_0019 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0019 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0020', () => {
    try {
      const result = transTskey2Ckey('std::queue<wchar_t>::iterator');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_iterator_0020 convert output non-empty");
      assert.strictEqual(result, "IterableIterator<Array<string>>", "h2dts_convert_iterator_0020 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0020 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0021', () => {
    try {
      const r = parsec.parseFunction(`void sample493(std::queue<wchar_t>::iterator p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0021 param convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<string>>",
        "h2dts_convert_iterator_0021 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0021 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0022', () => {
    try {
      const r = parsec.parseFunction(`std::queue<wchar_t>::iterator sampleRet493();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0022 return convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<string>>",
        "h2dts_convert_iterator_0022 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0022 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0023', () => {
    try {
      const r = parsec.parseClass(`class SampleClass493 { public: std::queue<wchar_t>::iterator field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0023 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_iterator_0023 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0023 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0024', () => {
    try {
      const r = parsec.parseFunction(`void pipeline493(std::queue<wchar_t>::iterator p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0024 pipeline convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<string>>",
        "h2dts_convert_iterator_0024 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0024 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0025', () => {
    try {
      const result = transTskey2Ckey('std::queue<char8_t>::iterator');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_iterator_0025 convert output non-empty");
      assert.strictEqual(result, "IterableIterator<Array<string>>", "h2dts_convert_iterator_0025 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0025 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0026', () => {
    try {
      const r = parsec.parseFunction(`void sample494(std::queue<char8_t>::iterator p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0026 param convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<string>>",
        "h2dts_convert_iterator_0026 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0026 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0027', () => {
    try {
      const r = parsec.parseFunction(`std::queue<char8_t>::iterator sampleRet494();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0027 return convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<string>>",
        "h2dts_convert_iterator_0027 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0027 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0028', () => {
    try {
      const r = parsec.parseClass(`class SampleClass494 { public: std::queue<char8_t>::iterator field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0028 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_iterator_0028 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0028 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0029', () => {
    try {
      const r = parsec.parseFunction(`void pipeline494(std::queue<char8_t>::iterator p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0029 pipeline convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<string>>",
        "h2dts_convert_iterator_0029 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0029 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0030', () => {
    try {
      const result = transTskey2Ckey('std::queue<char16_t>::iterator');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_iterator_0030 convert output non-empty");
      assert.strictEqual(result, "IterableIterator<Array<string>>", "h2dts_convert_iterator_0030 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0030 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0031', () => {
    try {
      const r = parsec.parseFunction(`void sample495(std::queue<char16_t>::iterator p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0031 param convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<string>>",
        "h2dts_convert_iterator_0031 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0031 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0032', () => {
    try {
      const r = parsec.parseFunction(`std::queue<char16_t>::iterator sampleRet495();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0032 return convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<string>>",
        "h2dts_convert_iterator_0032 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0032 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0033', () => {
    try {
      const r = parsec.parseClass(`class SampleClass495 { public: std::queue<char16_t>::iterator field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0033 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_iterator_0033 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0033 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0034', () => {
    try {
      const r = parsec.parseFunction(`void pipeline495(std::queue<char16_t>::iterator p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0034 pipeline convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<string>>",
        "h2dts_convert_iterator_0034 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0034 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0035', () => {
    try {
      const result = transTskey2Ckey('std::queue<char32_t>::iterator');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_iterator_0035 convert output non-empty");
      assert.strictEqual(result, "IterableIterator<Array<string>>", "h2dts_convert_iterator_0035 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0035 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0036', () => {
    try {
      const r = parsec.parseFunction(`void sample496(std::queue<char32_t>::iterator p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0036 param convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<string>>",
        "h2dts_convert_iterator_0036 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0036 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0037', () => {
    try {
      const r = parsec.parseFunction(`std::queue<char32_t>::iterator sampleRet496();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0037 return convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<string>>",
        "h2dts_convert_iterator_0037 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0037 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0038', () => {
    try {
      const r = parsec.parseClass(`class SampleClass496 { public: std::queue<char32_t>::iterator field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0038 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_iterator_0038 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0038 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0039', () => {
    try {
      const r = parsec.parseFunction(`void pipeline496(std::queue<char32_t>::iterator p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0039 pipeline convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<string>>",
        "h2dts_convert_iterator_0039 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0039 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0040', () => {
    try {
      const result = transTskey2Ckey('std::valarray<int>::iterator');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_iterator_0040 convert output non-empty");
      assert.strictEqual(result, "IterableIterator<Array<number>>", "h2dts_convert_iterator_0040 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0040 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0041', () => {
    try {
      const r = parsec.parseFunction(`void sample497(std::valarray<int>::iterator p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0041 param convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0041 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0041 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0042', () => {
    try {
      const r = parsec.parseFunction(`std::valarray<int>::iterator sampleRet497();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0042 return convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0042 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0042 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0043', () => {
    try {
      const r = parsec.parseClass(`class SampleClass497 { public: std::valarray<int>::iterator field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0043 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_iterator_0043 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0043 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0044', () => {
    try {
      const r = parsec.parseFunction(`void pipeline497(std::valarray<int>::iterator p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0044 pipeline convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0044 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0044 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0045', () => {
    try {
      const result = transTskey2Ckey('std::valarray<size_t>::iterator');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_iterator_0045 convert output non-empty");
      assert.strictEqual(result, "IterableIterator<Array<number>>", "h2dts_convert_iterator_0045 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0045 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0046', () => {
    try {
      const r = parsec.parseFunction(`void sample498(std::valarray<size_t>::iterator p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0046 param convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0046 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0046 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0047', () => {
    try {
      const r = parsec.parseFunction(`std::valarray<size_t>::iterator sampleRet498();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0047 return convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0047 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0047 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0048', () => {
    try {
      const r = parsec.parseClass(`class SampleClass498 { public: std::valarray<size_t>::iterator field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0048 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_iterator_0048 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0048 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0049', () => {
    try {
      const r = parsec.parseFunction(`void pipeline498(std::valarray<size_t>::iterator p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0049 pipeline convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0049 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0049 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0050', () => {
    try {
      const result = transTskey2Ckey('std::valarray<double>::iterator');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_iterator_0050 convert output non-empty");
      assert.strictEqual(result, "IterableIterator<Array<number>>", "h2dts_convert_iterator_0050 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0050 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0051', () => {
    try {
      const r = parsec.parseFunction(`void sample499(std::valarray<double>::iterator p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0051 param convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0051 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0051 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0052', () => {
    try {
      const r = parsec.parseFunction(`std::valarray<double>::iterator sampleRet499();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0052 return convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0052 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0052 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0053', () => {
    try {
      const r = parsec.parseClass(`class SampleClass499 { public: std::valarray<double>::iterator field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0053 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_iterator_0053 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0053 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0054', () => {
    try {
      const r = parsec.parseFunction(`void pipeline499(std::valarray<double>::iterator p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0054 pipeline convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0054 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0054 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0055', () => {
    try {
      const result = transTskey2Ckey('std::valarray<float>::iterator');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_iterator_0055 convert output non-empty");
      assert.strictEqual(result, "IterableIterator<Array<number>>", "h2dts_convert_iterator_0055 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0055 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0056', () => {
    try {
      const r = parsec.parseFunction(`void sample500(std::valarray<float>::iterator p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0056 param convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0056 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0056 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0057', () => {
    try {
      const r = parsec.parseFunction(`std::valarray<float>::iterator sampleRet500();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0057 return convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0057 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0057 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0058', () => {
    try {
      const r = parsec.parseClass(`class SampleClass500 { public: std::valarray<float>::iterator field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0058 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_iterator_0058 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0058 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0059', () => {
    try {
      const r = parsec.parseFunction(`void pipeline500(std::valarray<float>::iterator p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0059 pipeline convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0059 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0059 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0060', () => {
    try {
      const result = transTskey2Ckey('std::valarray<long>::iterator');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_iterator_0060 convert output non-empty");
      assert.strictEqual(result, "IterableIterator<Array<number>>", "h2dts_convert_iterator_0060 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0060 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0061', () => {
    try {
      const r = parsec.parseFunction(`void sample501(std::valarray<long>::iterator p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0061 param convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0061 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0061 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0062', () => {
    try {
      const r = parsec.parseFunction(`std::valarray<long>::iterator sampleRet501();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0062 return convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0062 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0062 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0063', () => {
    try {
      const r = parsec.parseClass(`class SampleClass501 { public: std::valarray<long>::iterator field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0063 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_iterator_0063 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0063 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0064', () => {
    try {
      const r = parsec.parseFunction(`void pipeline501(std::valarray<long>::iterator p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0064 pipeline convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0064 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0064 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0065', () => {
    try {
      const result = transTskey2Ckey('std::valarray<short>::iterator');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_iterator_0065 convert output non-empty");
      assert.strictEqual(result, "IterableIterator<Array<number>>", "h2dts_convert_iterator_0065 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0065 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0066', () => {
    try {
      const r = parsec.parseFunction(`void sample502(std::valarray<short>::iterator p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0066 param convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0066 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0066 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0067', () => {
    try {
      const r = parsec.parseFunction(`std::valarray<short>::iterator sampleRet502();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0067 return convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0067 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0067 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0068', () => {
    try {
      const r = parsec.parseClass(`class SampleClass502 { public: std::valarray<short>::iterator field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0068 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_iterator_0068 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0068 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0069', () => {
    try {
      const r = parsec.parseFunction(`void pipeline502(std::valarray<short>::iterator p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0069 pipeline convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0069 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0069 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0070', () => {
    try {
      const result = transTskey2Ckey('std::valarray<uint8_t>::iterator');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_iterator_0070 convert output non-empty");
      assert.strictEqual(result, "IterableIterator<Array<number>>", "h2dts_convert_iterator_0070 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0070 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0071', () => {
    try {
      const r = parsec.parseFunction(`void sample503(std::valarray<uint8_t>::iterator p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0071 param convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0071 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0071 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0072', () => {
    try {
      const r = parsec.parseFunction(`std::valarray<uint8_t>::iterator sampleRet503();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0072 return convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0072 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0072 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0073', () => {
    try {
      const r = parsec.parseClass(`class SampleClass503 { public: std::valarray<uint8_t>::iterator field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0073 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_iterator_0073 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0073 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0074', () => {
    try {
      const r = parsec.parseFunction(`void pipeline503(std::valarray<uint8_t>::iterator p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0074 pipeline convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0074 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0074 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0075', () => {
    try {
      const result = transTskey2Ckey('std::valarray<uint16_t>::iterator');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_iterator_0075 convert output non-empty");
      assert.strictEqual(result, "IterableIterator<Array<number>>", "h2dts_convert_iterator_0075 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0075 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0076', () => {
    try {
      const r = parsec.parseFunction(`void sample504(std::valarray<uint16_t>::iterator p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0076 param convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0076 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0076 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0077', () => {
    try {
      const r = parsec.parseFunction(`std::valarray<uint16_t>::iterator sampleRet504();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0077 return convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0077 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0077 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0078', () => {
    try {
      const r = parsec.parseClass(`class SampleClass504 { public: std::valarray<uint16_t>::iterator field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0078 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_iterator_0078 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0078 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0079', () => {
    try {
      const r = parsec.parseFunction(`void pipeline504(std::valarray<uint16_t>::iterator p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0079 pipeline convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0079 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0079 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0080', () => {
    try {
      const result = transTskey2Ckey('std::valarray<uint32_t>::iterator');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_iterator_0080 convert output non-empty");
      assert.strictEqual(result, "IterableIterator<Array<number>>", "h2dts_convert_iterator_0080 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0080 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0081', () => {
    try {
      const r = parsec.parseFunction(`void sample505(std::valarray<uint32_t>::iterator p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0081 param convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0081 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0081 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0082', () => {
    try {
      const r = parsec.parseFunction(`std::valarray<uint32_t>::iterator sampleRet505();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0082 return convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0082 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0082 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0083', () => {
    try {
      const r = parsec.parseClass(`class SampleClass505 { public: std::valarray<uint32_t>::iterator field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0083 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_iterator_0083 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0083 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0084', () => {
    try {
      const r = parsec.parseFunction(`void pipeline505(std::valarray<uint32_t>::iterator p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0084 pipeline convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0084 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0084 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0085', () => {
    try {
      const result = transTskey2Ckey('std::valarray<uint64_t>::iterator');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_iterator_0085 convert output non-empty");
      assert.strictEqual(result, "IterableIterator<Array<number>>", "h2dts_convert_iterator_0085 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0085 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0086', () => {
    try {
      const r = parsec.parseFunction(`void sample506(std::valarray<uint64_t>::iterator p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0086 param convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0086 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0086 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0087', () => {
    try {
      const r = parsec.parseFunction(`std::valarray<uint64_t>::iterator sampleRet506();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0087 return convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0087 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0087 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0088', () => {
    try {
      const r = parsec.parseClass(`class SampleClass506 { public: std::valarray<uint64_t>::iterator field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0088 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_iterator_0088 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0088 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0089', () => {
    try {
      const r = parsec.parseFunction(`void pipeline506(std::valarray<uint64_t>::iterator p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0089 pipeline convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0089 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0089 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0090', () => {
    try {
      const result = transTskey2Ckey('std::valarray<int8_t>::iterator');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_iterator_0090 convert output non-empty");
      assert.strictEqual(result, "IterableIterator<Array<number>>", "h2dts_convert_iterator_0090 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0090 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0091', () => {
    try {
      const r = parsec.parseFunction(`void sample507(std::valarray<int8_t>::iterator p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0091 param convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0091 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0091 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0092', () => {
    try {
      const r = parsec.parseFunction(`std::valarray<int8_t>::iterator sampleRet507();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0092 return convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0092 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0092 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0093', () => {
    try {
      const r = parsec.parseClass(`class SampleClass507 { public: std::valarray<int8_t>::iterator field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0093 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_iterator_0093 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0093 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0094', () => {
    try {
      const r = parsec.parseFunction(`void pipeline507(std::valarray<int8_t>::iterator p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0094 pipeline convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0094 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0094 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0095', () => {
    try {
      const result = transTskey2Ckey('std::valarray<int16_t>::iterator');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_iterator_0095 convert output non-empty");
      assert.strictEqual(result, "IterableIterator<Array<number>>", "h2dts_convert_iterator_0095 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0095 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0096', () => {
    try {
      const r = parsec.parseFunction(`void sample508(std::valarray<int16_t>::iterator p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0096 param convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0096 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0096 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0097', () => {
    try {
      const r = parsec.parseFunction(`std::valarray<int16_t>::iterator sampleRet508();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0097 return convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0097 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0097 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0098', () => {
    try {
      const r = parsec.parseClass(`class SampleClass508 { public: std::valarray<int16_t>::iterator field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0098 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_iterator_0098 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0098 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0099', () => {
    try {
      const r = parsec.parseFunction(`void pipeline508(std::valarray<int16_t>::iterator p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0099 pipeline convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0099 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0099 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0100', () => {
    try {
      const result = transTskey2Ckey('std::valarray<int32_t>::iterator');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_iterator_0100 convert output non-empty");
      assert.strictEqual(result, "IterableIterator<Array<number>>", "h2dts_convert_iterator_0100 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0100 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0101', () => {
    try {
      const r = parsec.parseFunction(`void sample509(std::valarray<int32_t>::iterator p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0101 param convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0101 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0101 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0102', () => {
    try {
      const r = parsec.parseFunction(`std::valarray<int32_t>::iterator sampleRet509();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0102 return convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0102 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0102 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0103', () => {
    try {
      const r = parsec.parseClass(`class SampleClass509 { public: std::valarray<int32_t>::iterator field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0103 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_iterator_0103 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0103 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0104', () => {
    try {
      const r = parsec.parseFunction(`void pipeline509(std::valarray<int32_t>::iterator p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0104 pipeline convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0104 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0104 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0105', () => {
    try {
      const result = transTskey2Ckey('std::valarray<int64_t>::iterator');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_iterator_0105 convert output non-empty");
      assert.strictEqual(result, "IterableIterator<Array<number>>", "h2dts_convert_iterator_0105 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0105 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0106', () => {
    try {
      const r = parsec.parseFunction(`void sample510(std::valarray<int64_t>::iterator p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0106 param convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0106 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0106 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0107', () => {
    try {
      const r = parsec.parseFunction(`std::valarray<int64_t>::iterator sampleRet510();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0107 return convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0107 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0107 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0108', () => {
    try {
      const r = parsec.parseClass(`class SampleClass510 { public: std::valarray<int64_t>::iterator field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0108 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_iterator_0108 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0108 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0109', () => {
    try {
      const r = parsec.parseFunction(`void pipeline510(std::valarray<int64_t>::iterator p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0109 pipeline convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0109 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0109 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0110', () => {
    try {
      const result = transTskey2Ckey('std::valarray<unsigned>::iterator');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_iterator_0110 convert output non-empty");
      assert.strictEqual(result, "IterableIterator<Array<number>>", "h2dts_convert_iterator_0110 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0110 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0111', () => {
    try {
      const r = parsec.parseFunction(`void sample511(std::valarray<unsigned>::iterator p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0111 param convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0111 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0111 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0112', () => {
    try {
      const r = parsec.parseFunction(`std::valarray<unsigned>::iterator sampleRet511();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0112 return convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0112 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0112 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0113', () => {
    try {
      const r = parsec.parseClass(`class SampleClass511 { public: std::valarray<unsigned>::iterator field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0113 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_iterator_0113 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0113 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0114', () => {
    try {
      const r = parsec.parseFunction(`void pipeline511(std::valarray<unsigned>::iterator p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0114 pipeline convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<number>>",
        "h2dts_convert_iterator_0114 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0114 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0115', () => {
    try {
      const result = transTskey2Ckey('std::valarray<bool>::iterator');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_iterator_0115 convert output non-empty");
      assert.strictEqual(result, "IterableIterator<Array<boolean>>", "h2dts_convert_iterator_0115 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0115 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0116', () => {
    try {
      const r = parsec.parseFunction(`void sample512(std::valarray<bool>::iterator p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0116 param convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<boolean>>",
        "h2dts_convert_iterator_0116 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0116 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0117', () => {
    try {
      const r = parsec.parseFunction(`std::valarray<bool>::iterator sampleRet512();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0117 return convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<boolean>>",
        "h2dts_convert_iterator_0117 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0117 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0118', () => {
    try {
      const r = parsec.parseClass(`class SampleClass512 { public: std::valarray<bool>::iterator field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0118 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_iterator_0118 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0118 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0119', () => {
    try {
      const r = parsec.parseFunction(`void pipeline512(std::valarray<bool>::iterator p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0119 pipeline convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<boolean>>",
        "h2dts_convert_iterator_0119 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0119 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0120', () => {
    try {
      const result = transTskey2Ckey('std::valarray<char>::iterator');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_iterator_0120 convert output non-empty");
      assert.strictEqual(result, "IterableIterator<Array<string>>", "h2dts_convert_iterator_0120 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0120 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0121', () => {
    try {
      const r = parsec.parseFunction(`void sample513(std::valarray<char>::iterator p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0121 param convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<string>>",
        "h2dts_convert_iterator_0121 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0121 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0122', () => {
    try {
      const r = parsec.parseFunction(`std::valarray<char>::iterator sampleRet513();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0122 return convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<string>>",
        "h2dts_convert_iterator_0122 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0122 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0123', () => {
    try {
      const r = parsec.parseClass(`class SampleClass513 { public: std::valarray<char>::iterator field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0123 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_iterator_0123 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0123 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0124', () => {
    try {
      const r = parsec.parseFunction(`void pipeline513(std::valarray<char>::iterator p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0124 pipeline convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<string>>",
        "h2dts_convert_iterator_0124 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0124 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0125', () => {
    try {
      const result = transTskey2Ckey('std::valarray<wchar_t>::iterator');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_iterator_0125 convert output non-empty");
      assert.strictEqual(result, "IterableIterator<Array<string>>", "h2dts_convert_iterator_0125 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0125 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0126', () => {
    try {
      const r = parsec.parseFunction(`void sample514(std::valarray<wchar_t>::iterator p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0126 param convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<string>>",
        "h2dts_convert_iterator_0126 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0126 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0127', () => {
    try {
      const r = parsec.parseFunction(`std::valarray<wchar_t>::iterator sampleRet514();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0127 return convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<string>>",
        "h2dts_convert_iterator_0127 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0127 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0128', () => {
    try {
      const r = parsec.parseClass(`class SampleClass514 { public: std::valarray<wchar_t>::iterator field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0128 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_iterator_0128 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0128 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0129', () => {
    try {
      const r = parsec.parseFunction(`void pipeline514(std::valarray<wchar_t>::iterator p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0129 pipeline convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<string>>",
        "h2dts_convert_iterator_0129 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0129 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0130', () => {
    try {
      const result = transTskey2Ckey('std::valarray<char8_t>::iterator');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_iterator_0130 convert output non-empty");
      assert.strictEqual(result, "IterableIterator<Array<string>>", "h2dts_convert_iterator_0130 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0130 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0131', () => {
    try {
      const r = parsec.parseFunction(`void sample515(std::valarray<char8_t>::iterator p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0131 param convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<string>>",
        "h2dts_convert_iterator_0131 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0131 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0132', () => {
    try {
      const r = parsec.parseFunction(`std::valarray<char8_t>::iterator sampleRet515();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0132 return convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<string>>",
        "h2dts_convert_iterator_0132 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0132 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0133', () => {
    try {
      const r = parsec.parseClass(`class SampleClass515 { public: std::valarray<char8_t>::iterator field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0133 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_iterator_0133 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0133 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0134', () => {
    try {
      const r = parsec.parseFunction(`void pipeline515(std::valarray<char8_t>::iterator p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0134 pipeline convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<string>>",
        "h2dts_convert_iterator_0134 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0134 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0135', () => {
    try {
      const result = transTskey2Ckey('std::valarray<char16_t>::iterator');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_iterator_0135 convert output non-empty");
      assert.strictEqual(result, "IterableIterator<Array<string>>", "h2dts_convert_iterator_0135 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0135 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0136', () => {
    try {
      const r = parsec.parseFunction(`void sample516(std::valarray<char16_t>::iterator p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0136 param convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<string>>",
        "h2dts_convert_iterator_0136 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0136 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0137', () => {
    try {
      const r = parsec.parseFunction(`std::valarray<char16_t>::iterator sampleRet516();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0137 return convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<string>>",
        "h2dts_convert_iterator_0137 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0137 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0138', () => {
    try {
      const r = parsec.parseClass(`class SampleClass516 { public: std::valarray<char16_t>::iterator field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0138 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_iterator_0138 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0138 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0139', () => {
    try {
      const r = parsec.parseFunction(`void pipeline516(std::valarray<char16_t>::iterator p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_iterator_0139 pipeline convert output non-empty");
      assert.strictEqual(converted, "IterableIterator<Array<string>>",
        "h2dts_convert_iterator_0139 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0139 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_iterator_0140', () => {
    try {
      const result = transTskey2Ckey('std::valarray<char32_t>::iterator');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_iterator_0140 convert output non-empty");
      assert.strictEqual(result, "IterableIterator<Array<string>>", "h2dts_convert_iterator_0140 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_iterator_0140 execution error: ${String(err)}`);
    }
  });
});
