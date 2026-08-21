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
import { transCkey2Dtskey, transParseObj, generateFunctions } from '../../../gen/gendtscpp';
import { doParseTs } from '../../../parse/parsets';
import { runCompatSafe } from './stability_helpers';

suite('Stability_DTS2CPP_CONVERT_OBJECT_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_CONVERT_OBJECT_Part01.');


  test('dts2cpp_convert_object_0001', () => {
    try {
      const result = transCkey2Dtskey('Record<string, number>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_object_0001 convert output non-empty");
      assert.strictEqual(result, "Record<string, number>", "dts2cpp_convert_object_0001 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_object_0001 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_object_0002', () => {
    try {
      const converted = transParseObj(doParseTs('sample303.ts', `
        function sample303(p0: Record<string, number>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample303');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Record<string, number>",
        "dts2cpp_convert_object_0002 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_object_0002 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_object_0003', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet303.ts', `
        function sampleRet303(): Record<string, number> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Record<string, number>",
        "dts2cpp_convert_object_0003 return convert output");
      const generated = generateFunctions(converted, 'sampleRet303.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet303') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_object_0003 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_object_0004', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass303.ts', `
        class SampleClass303 { field: Record<string, number>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "Record<string, number>",
        "dts2cpp_convert_object_0004 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_object_0004 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_object_0005', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline303.ts', `
        function pipeline303(p: Record<string, number>): Record<string, number> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Record<string, number>",
        "dts2cpp_convert_object_0005 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Record<string, number>",
        "dts2cpp_convert_object_0005 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline303.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline303') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_object_0005 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_object_0006', () => {
    try {
      const result = transCkey2Dtskey('Record<string, string>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_object_0006 convert output non-empty");
      assert.strictEqual(result, "Record<string, string>", "dts2cpp_convert_object_0006 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_object_0006 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_object_0007', () => {
    try {
      const converted = transParseObj(doParseTs('sample304.ts', `
        function sample304(p0: Record<string, string>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample304');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Record<string, string>",
        "dts2cpp_convert_object_0007 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_object_0007 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_object_0008', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet304.ts', `
        function sampleRet304(): Record<string, string> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Record<string, string>",
        "dts2cpp_convert_object_0008 return convert output");
      const generated = generateFunctions(converted, 'sampleRet304.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet304') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_object_0008 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_object_0009', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass304.ts', `
        class SampleClass304 { field: Record<string, string>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "Record<string, string>",
        "dts2cpp_convert_object_0009 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_object_0009 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_object_0010', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline304.ts', `
        function pipeline304(p: Record<string, string>): Record<string, string> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Record<string, string>",
        "dts2cpp_convert_object_0010 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Record<string, string>",
        "dts2cpp_convert_object_0010 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline304.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline304') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_object_0010 execution error: ${String(err)}`);
    }
  });
});
