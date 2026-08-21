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

suite('Stability_H2DTS_CONVERT_COMBO_Part02', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_CONVERT_COMBO_Part02.');


  test('h2dts_convert_combo_0001', () => {
    try {
      const r = parsec.parseFunction(`void pipeline292(object p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0001 pipeline convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_combo_0001 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0001 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0002', () => {
    try {
      const result = transTskey2Ckey('CustomObject');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0002 convert output non-empty");
      assert.strictEqual(result, "any", "h2dts_convert_combo_0002 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0002 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0003', () => {
    try {
      const r = parsec.parseFunction(`void sample293(CustomObject p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0003 param convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_combo_0003 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0003 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0004', () => {
    try {
      const r = parsec.parseFunction(`CustomObject sampleRet293();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0004 return convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_combo_0004 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0004 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0005', () => {
    try {
      const r = parsec.parseClass(`class SampleClass293 { public: CustomObject field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0005 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_combo_0005 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0005 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0006', () => {
    try {
      const r = parsec.parseFunction(`void pipeline293(CustomObject p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0006 pipeline convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_combo_0006 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0006 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0007', () => {
    try {
      const result = transTskey2Ckey('UserAnyType');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0007 convert output non-empty");
      assert.strictEqual(result, "any", "h2dts_convert_combo_0007 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0007 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0008', () => {
    try {
      const r = parsec.parseFunction(`void sample294(UserAnyType p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0008 param convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_combo_0008 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0008 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0009', () => {
    try {
      const r = parsec.parseFunction(`UserAnyType sampleRet294();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0009 return convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_combo_0009 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0009 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0010', () => {
    try {
      const r = parsec.parseClass(`class SampleClass294 { public: UserAnyType field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0010 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_combo_0010 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0010 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0011', () => {
    try {
      const r = parsec.parseFunction(`void pipeline294(UserAnyType p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0011 pipeline convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_combo_0011 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0011 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0012', () => {
    try {
      const result = transTskey2Ckey('Ns::UnknownObject');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0012 convert output non-empty");
      assert.strictEqual(result, "any", "h2dts_convert_combo_0012 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0012 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0013', () => {
    try {
      const r = parsec.parseFunction(`void sample295(Ns::UnknownObject p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0013 param convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_combo_0013 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0013 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0014', () => {
    try {
      const r = parsec.parseFunction(`Ns::UnknownObject sampleRet295();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0014 return convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_combo_0014 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0014 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0015', () => {
    try {
      const r = parsec.parseClass(`class SampleClass295 { public: Ns::UnknownObject field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0015 class field convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_combo_0015 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0015 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0016', () => {
    try {
      const r = parsec.parseFunction(`void pipeline295(Ns::UnknownObject p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0016 pipeline convert output non-empty");
      assert.strictEqual(converted, "any", "h2dts_convert_combo_0016 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0016 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0017', () => {
    try {
      const result = transTskey2Ckey('signed char');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0017 convert output non-empty");
      assert.strictEqual(result, "string", "h2dts_convert_combo_0017 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0017 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0018', () => {
    try {
      const r = parsec.parseFunction(`void sample627(signed char p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0018 param convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0018 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0018 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0019', () => {
    try {
      const r = parsec.parseFunction(`signed char sampleRet627();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0019 return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0019 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0019 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0020', () => {
    try {
      const r = parsec.parseClass(`class SampleClass627 { public: signed char field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0020 class field convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0020 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0020 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0021', () => {
    try {
      const r = parsec.parseFunction(`void pipeline627(signed char p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0021 pipeline convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0021 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0021 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0022', () => {
    try {
      const result = transTskey2Ckey('std::wstring');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0022 convert output non-empty");
      assert.strictEqual(result, "string", "h2dts_convert_combo_0022 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0022 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0023', () => {
    try {
      const r = parsec.parseFunction(`void sample630(std::wstring p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0023 param convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0023 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0023 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0024', () => {
    try {
      const r = parsec.parseFunction(`std::wstring sampleRet630();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0024 return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0024 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0024 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0025', () => {
    try {
      const r = parsec.parseClass(`class SampleClass630 { public: std::wstring field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0025 class field convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0025 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0025 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0026', () => {
    try {
      const r = parsec.parseFunction(`void pipeline630(std::wstring p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0026 pipeline convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0026 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0026 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0027', () => {
    try {
      const result = transTskey2Ckey('const char*');
      assert.ok(typeof result === 'string' && result.length > 0, "h2dts_convert_combo_0027 convert output non-empty");
      assert.strictEqual(result, "string", "h2dts_convert_combo_0027 convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0027 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0028', () => {
    try {
      const r = parsec.parseFunction(`void sample631(const char* p0);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(typeof r[0] === 'object');
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0028 param convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0028 param convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0028 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0029', () => {
    try {
      const r = parsec.parseFunction(`const char* sampleRet631();`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      const converted = transTskey2Ckey(r[0].returns);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0029 return convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0029 return convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0029 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0030', () => {
    try {
      const r = parsec.parseClass(`class SampleClass631 { public: const char* field; };`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].variableList && r[0].variableList.length >= 1);
      const converted = transTskey2Ckey(r[0].variableList[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0030 class field convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0030 class field convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0030 execution error: ${String(err)}`);
    }
  });

  test('h2dts_convert_combo_0031', () => {
    try {
      const r = parsec.parseFunction(`void pipeline631(const char* p);`);
      assert.ok(Array.isArray(r) && r.length >= 1);
      assert.ok(r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "h2dts_convert_combo_0031 pipeline convert output non-empty");
      assert.strictEqual(converted, "string", "h2dts_convert_combo_0031 pipeline convert output");
    } catch (err) {
      assert.fail(`h2dts_convert_combo_0031 execution error: ${String(err)}`);
    }
  });
});
