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

suite('Stability_DTS2CPP_CONVERT_TUPLE_Part06', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_CONVERT_TUPLE_Part06.');


  test('dts2cpp_convert_tuple_0001', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline271.ts', `
        function pipeline271(p: [boolean, boolean, string, boolean]): [boolean, boolean, string, boolean] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[boolean, boolean, string, boolean]",
        "dts2cpp_convert_tuple_0001 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[boolean, boolean, string, boolean]",
        "dts2cpp_convert_tuple_0001 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline271.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline271') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0001 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0002', () => {
    try {
      const result = transCkey2Dtskey('[boolean, boolean, boolean, number]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0002 convert output non-empty");
      assert.strictEqual(result, "[boolean, boolean, boolean, number]", "dts2cpp_convert_tuple_0002 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0002 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0003', () => {
    try {
      const converted = transParseObj(doParseTs('sample272.ts', `
        function sample272(p0: [boolean, boolean, boolean, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample272');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[boolean, boolean, boolean, number]",
        "dts2cpp_convert_tuple_0003 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0003 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0004', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet272.ts', `
        function sampleRet272(): [boolean, boolean, boolean, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[boolean, boolean, boolean, number]",
        "dts2cpp_convert_tuple_0004 return convert output");
      const generated = generateFunctions(converted, 'sampleRet272.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet272') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0004 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0005', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass272.ts', `
        class SampleClass272 { field: [boolean, boolean, boolean, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[boolean, boolean, boolean, number]",
        "dts2cpp_convert_tuple_0005 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0005 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0006', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline272.ts', `
        function pipeline272(p: [boolean, boolean, boolean, number]): [boolean, boolean, boolean, number] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[boolean, boolean, boolean, number]",
        "dts2cpp_convert_tuple_0006 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[boolean, boolean, boolean, number]",
        "dts2cpp_convert_tuple_0006 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline272.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline272') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0006 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0007', () => {
    try {
      const result = transCkey2Dtskey('[boolean, boolean, boolean, string]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0007 convert output non-empty");
      assert.strictEqual(result, "[boolean, boolean, boolean, string]", "dts2cpp_convert_tuple_0007 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0007 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0008', () => {
    try {
      const converted = transParseObj(doParseTs('sample273.ts', `
        function sample273(p0: [boolean, boolean, boolean, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample273');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[boolean, boolean, boolean, string]",
        "dts2cpp_convert_tuple_0008 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0008 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0009', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet273.ts', `
        function sampleRet273(): [boolean, boolean, boolean, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[boolean, boolean, boolean, string]",
        "dts2cpp_convert_tuple_0009 return convert output");
      const generated = generateFunctions(converted, 'sampleRet273.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet273') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0009 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0010', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass273.ts', `
        class SampleClass273 { field: [boolean, boolean, boolean, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[boolean, boolean, boolean, string]",
        "dts2cpp_convert_tuple_0010 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0010 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0011', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline273.ts', `
        function pipeline273(p: [boolean, boolean, boolean, string]): [boolean, boolean, boolean, string] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[boolean, boolean, boolean, string]",
        "dts2cpp_convert_tuple_0011 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[boolean, boolean, boolean, string]",
        "dts2cpp_convert_tuple_0011 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline273.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline273') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0011 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0012', () => {
    try {
      const result = transCkey2Dtskey('[boolean, boolean, boolean, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0012 convert output non-empty");
      assert.strictEqual(result, "[boolean, boolean, boolean, boolean]", "dts2cpp_convert_tuple_0012 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0012 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0013', () => {
    try {
      const converted = transParseObj(doParseTs('sample274.ts', `
        function sample274(p0: [boolean, boolean, boolean, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample274');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[boolean, boolean, boolean, boolean]",
        "dts2cpp_convert_tuple_0013 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0013 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0014', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet274.ts', `
        function sampleRet274(): [boolean, boolean, boolean, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[boolean, boolean, boolean, boolean]",
        "dts2cpp_convert_tuple_0014 return convert output");
      const generated = generateFunctions(converted, 'sampleRet274.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet274') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0014 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0015', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass274.ts', `
        class SampleClass274 { field: [boolean, boolean, boolean, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[boolean, boolean, boolean, boolean]",
        "dts2cpp_convert_tuple_0015 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0015 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0016', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline274.ts', `
        function pipeline274(p: [boolean, boolean, boolean, boolean]): [boolean, boolean, boolean, boolean] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[boolean, boolean, boolean, boolean]",
        "dts2cpp_convert_tuple_0016 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[boolean, boolean, boolean, boolean]",
        "dts2cpp_convert_tuple_0016 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline274.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline274') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0016 execution error: ${String(err)}`);
    }
  });
});
