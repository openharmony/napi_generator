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

suite('Stability_H2DTS_CONVERT_BASIC_Part02', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_CONVERT_BASIC_Part02.');


  test('h2dts_convert_basic_0001', () => {
    try {
      const r = parsec.parseFunction(`void pipeline628(unsigned char p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0001 pipeline convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0001 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0001 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0002', () => {
    try {
      const result = transTskey2Ckey('long double');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0002 convert output non-empty");
      assert.strictEqual(result, "number", "h2dts_convert_basic_0002 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0002 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0003', () => {
    try {
      const r = parsec.parseFunction(`void sample629(long double p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0003 param convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0003 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0003 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0004', () => {
    try {
      const r = parsec.parseFunction(`long double sampleRet629();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0004 return convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0004 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0004 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0005', () => {
    try {
      const r = parsec.parseClass(`class SampleClass629 { public: long double field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0005 class field convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0005 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0005 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0006', () => {
    try {
      const r = parsec.parseFunction(`void pipeline629(long double p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0006 pipeline convert output non-empty");
      assert.strictEqual(converted, "number", "h2dts_convert_basic_0006 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0006 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0007', () => {
    try {
      const result = transTskey2Ckey('char*');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_basic_0007 convert output non-empty");
      assert.strictEqual(result, "string", "h2dts_convert_basic_0007 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0007 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0008', () => {
    try {
      const r = parsec.parseFunction(`void sample632(char* p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0008 param convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0008 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0008 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0009', () => {
    try {
      const r = parsec.parseFunction(`char* sampleRet632();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0009 return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0009 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0009 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0010', () => {
    try {
      const r = parsec.parseClass(`class SampleClass632 { public: char* field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0010 class field convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0010 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0010 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_basic_0011', () => {
    try {
      const r = parsec.parseFunction(`void pipeline632(char* p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_basic_0011 pipeline convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_basic_0011 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_basic_0011 execution error: ${String(err)}`);
    }
  });
});
