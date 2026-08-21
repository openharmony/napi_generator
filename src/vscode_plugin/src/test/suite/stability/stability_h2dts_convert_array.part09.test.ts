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

suite('Stability_H2DTS_CONVERT_ARRAY_Part09', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_CONVERT_ARRAY_Part09.');


  test('h2dts_convert_array_0001', () => {
    try {
      const r = parsec.parseFunction(`std::array<int,4> sampleRet633();`);
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
      const r = parsec.parseClass(`class SampleClass633 { public: std::array<int,4> field; };`);
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
      const r = parsec.parseFunction(`void pipeline633(std::array<int,4> p);`);
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
      const result = transTskey2Ckey('std::array<double,8>');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_array_0004 convert output non-empty");
      assert.strictEqual(result, "Array<number>", "h2dts_convert_array_0004 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_array_0004 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_array_0005', () => {
    try {
      const r = parsec.parseFunction(`void sample634(std::array<double,8> p0);`);
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
      const r = parsec.parseFunction(`std::array<double,8> sampleRet634();`);
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
      const r = parsec.parseClass(`class SampleClass634 { public: std::array<double,8> field; };`);
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
      const r = parsec.parseFunction(`void pipeline634(std::array<double,8> p);`);
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
});
