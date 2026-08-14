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

suite('Stability_DTS2CPP_CONVERT_TUPLE_Part03', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_CONVERT_TUPLE_Part03.');


  test('dts2cpp_convert_tuple_0001', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass203.ts', `
        class SampleClass203 { field: [number, string, number, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, number, number]",
        "dts2cpp_convert_tuple_0001 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0001 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0002', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline203.ts', `
        function pipeline203(p: [number, string, number, number]): [number, string, number, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, number, number]",
        "dts2cpp_convert_tuple_0002 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, number, number]",
        "dts2cpp_convert_tuple_0002 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline203.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline203') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0002 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0003', () => {
    try {
      const result = transCkey2Dtskey('[number, string, number, string]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0003 convert output non-empty");
      assert.strictEqual(result, "[number, string, number, string]", "dts2cpp_convert_tuple_0003 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0003 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0004', () => {
    try {
      const converted = transParseObj(doParseTs('sample204.ts', `
        function sample204(p0: [number, string, number, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample204');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, number, string]",
        "dts2cpp_convert_tuple_0004 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0004 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0005', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet204.ts', `
        function sampleRet204(): [number, string, number, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, number, string]",
        "dts2cpp_convert_tuple_0005 return convert output");
      const generated = generateFunctions(converted, 'sampleRet204.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet204') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0005 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0006', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass204.ts', `
        class SampleClass204 { field: [number, string, number, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, number, string]",
        "dts2cpp_convert_tuple_0006 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0006 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0007', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline204.ts', `
        function pipeline204(p: [number, string, number, string]): [number, string, number, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, number, string]",
        "dts2cpp_convert_tuple_0007 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, number, string]",
        "dts2cpp_convert_tuple_0007 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline204.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline204') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0007 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0008', () => {
    try {
      const result = transCkey2Dtskey('[number, string, number, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0008 convert output non-empty");
      assert.strictEqual(result, "[number, string, number, boolean]", "dts2cpp_convert_tuple_0008 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0008 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0009', () => {
    try {
      const converted = transParseObj(doParseTs('sample205.ts', `
        function sample205(p0: [number, string, number, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample205');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, number, boolean]",
        "dts2cpp_convert_tuple_0009 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0009 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0010', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet205.ts', `
        function sampleRet205(): [number, string, number, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, number, boolean]",
        "dts2cpp_convert_tuple_0010 return convert output");
      const generated = generateFunctions(converted, 'sampleRet205.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet205') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0010 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0011', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass205.ts', `
        class SampleClass205 { field: [number, string, number, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, number, boolean]",
        "dts2cpp_convert_tuple_0011 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0011 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0012', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline205.ts', `
        function pipeline205(p: [number, string, number, boolean]): [number, string, number, boolean] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, number, boolean]",
        "dts2cpp_convert_tuple_0012 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, number, boolean]",
        "dts2cpp_convert_tuple_0012 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline205.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline205') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0012 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0013', () => {
    try {
      const result = transCkey2Dtskey('[number, string, string, number]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0013 convert output non-empty");
      assert.strictEqual(result, "[number, string, string, number]", "dts2cpp_convert_tuple_0013 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0013 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0014', () => {
    try {
      const converted = transParseObj(doParseTs('sample206.ts', `
        function sample206(p0: [number, string, string, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample206');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, string, number]",
        "dts2cpp_convert_tuple_0014 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0014 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0015', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet206.ts', `
        function sampleRet206(): [number, string, string, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, string, number]",
        "dts2cpp_convert_tuple_0015 return convert output");
      const generated = generateFunctions(converted, 'sampleRet206.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet206') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0015 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0016', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass206.ts', `
        class SampleClass206 { field: [number, string, string, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, string, number]",
        "dts2cpp_convert_tuple_0016 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0016 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0017', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline206.ts', `
        function pipeline206(p: [number, string, string, number]): [number, string, string, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, string, number]",
        "dts2cpp_convert_tuple_0017 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, string, number]",
        "dts2cpp_convert_tuple_0017 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline206.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline206') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0017 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0018', () => {
    try {
      const result = transCkey2Dtskey('[number, string, string, string]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0018 convert output non-empty");
      assert.strictEqual(result, "[number, string, string, string]", "dts2cpp_convert_tuple_0018 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0018 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0019', () => {
    try {
      const converted = transParseObj(doParseTs('sample207.ts', `
        function sample207(p0: [number, string, string, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample207');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, string, string]",
        "dts2cpp_convert_tuple_0019 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0019 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0020', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet207.ts', `
        function sampleRet207(): [number, string, string, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, string, string]",
        "dts2cpp_convert_tuple_0020 return convert output");
      const generated = generateFunctions(converted, 'sampleRet207.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet207') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0020 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0021', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass207.ts', `
        class SampleClass207 { field: [number, string, string, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, string, string]",
        "dts2cpp_convert_tuple_0021 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0021 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0022', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline207.ts', `
        function pipeline207(p: [number, string, string, string]): [number, string, string, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, string, string]",
        "dts2cpp_convert_tuple_0022 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, string, string]",
        "dts2cpp_convert_tuple_0022 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline207.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline207') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0022 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0023', () => {
    try {
      const result = transCkey2Dtskey('[number, string, string, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0023 convert output non-empty");
      assert.strictEqual(result, "[number, string, string, boolean]", "dts2cpp_convert_tuple_0023 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0023 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0024', () => {
    try {
      const converted = transParseObj(doParseTs('sample208.ts', `
        function sample208(p0: [number, string, string, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample208');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, string, boolean]",
        "dts2cpp_convert_tuple_0024 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0024 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0025', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet208.ts', `
        function sampleRet208(): [number, string, string, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, string, boolean]",
        "dts2cpp_convert_tuple_0025 return convert output");
      const generated = generateFunctions(converted, 'sampleRet208.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet208') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0025 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0026', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass208.ts', `
        class SampleClass208 { field: [number, string, string, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, string, boolean]",
        "dts2cpp_convert_tuple_0026 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0026 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0027', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline208.ts', `
        function pipeline208(p: [number, string, string, boolean]): [number, string, string, boolean] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, string, boolean]",
        "dts2cpp_convert_tuple_0027 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, string, boolean]",
        "dts2cpp_convert_tuple_0027 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline208.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline208') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0027 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0028', () => {
    try {
      const result = transCkey2Dtskey('[number, string, boolean, number]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0028 convert output non-empty");
      assert.strictEqual(result, "[number, string, boolean, number]", "dts2cpp_convert_tuple_0028 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0028 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0029', () => {
    try {
      const converted = transParseObj(doParseTs('sample209.ts', `
        function sample209(p0: [number, string, boolean, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample209');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, boolean, number]",
        "dts2cpp_convert_tuple_0029 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0029 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0030', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet209.ts', `
        function sampleRet209(): [number, string, boolean, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, boolean, number]",
        "dts2cpp_convert_tuple_0030 return convert output");
      const generated = generateFunctions(converted, 'sampleRet209.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet209') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0030 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0031', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass209.ts', `
        class SampleClass209 { field: [number, string, boolean, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, boolean, number]",
        "dts2cpp_convert_tuple_0031 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0031 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0032', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline209.ts', `
        function pipeline209(p: [number, string, boolean, number]): [number, string, boolean, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, boolean, number]",
        "dts2cpp_convert_tuple_0032 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, boolean, number]",
        "dts2cpp_convert_tuple_0032 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline209.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline209') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0032 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0033', () => {
    try {
      const result = transCkey2Dtskey('[number, string, boolean, string]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0033 convert output non-empty");
      assert.strictEqual(result, "[number, string, boolean, string]", "dts2cpp_convert_tuple_0033 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0033 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0034', () => {
    try {
      const converted = transParseObj(doParseTs('sample210.ts', `
        function sample210(p0: [number, string, boolean, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample210');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, boolean, string]",
        "dts2cpp_convert_tuple_0034 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0034 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0035', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet210.ts', `
        function sampleRet210(): [number, string, boolean, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, boolean, string]",
        "dts2cpp_convert_tuple_0035 return convert output");
      const generated = generateFunctions(converted, 'sampleRet210.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet210') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0035 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0036', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass210.ts', `
        class SampleClass210 { field: [number, string, boolean, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, boolean, string]",
        "dts2cpp_convert_tuple_0036 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0036 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0037', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline210.ts', `
        function pipeline210(p: [number, string, boolean, string]): [number, string, boolean, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, boolean, string]",
        "dts2cpp_convert_tuple_0037 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, boolean, string]",
        "dts2cpp_convert_tuple_0037 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline210.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline210') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0037 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0038', () => {
    try {
      const result = transCkey2Dtskey('[number, string, boolean, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0038 convert output non-empty");
      assert.strictEqual(result, "[number, string, boolean, boolean]", "dts2cpp_convert_tuple_0038 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0038 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0039', () => {
    try {
      const converted = transParseObj(doParseTs('sample211.ts', `
        function sample211(p0: [number, string, boolean, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample211');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, boolean, boolean]",
        "dts2cpp_convert_tuple_0039 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0039 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0040', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet211.ts', `
        function sampleRet211(): [number, string, boolean, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, boolean, boolean]",
        "dts2cpp_convert_tuple_0040 return convert output");
      const generated = generateFunctions(converted, 'sampleRet211.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet211') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0040 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0041', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass211.ts', `
        class SampleClass211 { field: [number, string, boolean, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, boolean, boolean]",
        "dts2cpp_convert_tuple_0041 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0041 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0042', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline211.ts', `
        function pipeline211(p: [number, string, boolean, boolean]): [number, string, boolean, boolean] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, boolean, boolean]",
        "dts2cpp_convert_tuple_0042 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, boolean, boolean]",
        "dts2cpp_convert_tuple_0042 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline211.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline211') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0042 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0043', () => {
    try {
      const result = transCkey2Dtskey('[number, boolean, number, number]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0043 convert output non-empty");
      assert.strictEqual(result, "[number, boolean, number, number]", "dts2cpp_convert_tuple_0043 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0043 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0044', () => {
    try {
      const converted = transParseObj(doParseTs('sample212.ts', `
        function sample212(p0: [number, boolean, number, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample212');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, number, number]",
        "dts2cpp_convert_tuple_0044 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0044 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0045', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet212.ts', `
        function sampleRet212(): [number, boolean, number, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, number, number]",
        "dts2cpp_convert_tuple_0045 return convert output");
      const generated = generateFunctions(converted, 'sampleRet212.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet212') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0045 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0046', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass212.ts', `
        class SampleClass212 { field: [number, boolean, number, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, boolean, number, number]",
        "dts2cpp_convert_tuple_0046 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0046 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0047', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline212.ts', `
        function pipeline212(p: [number, boolean, number, number]): [number, boolean, number, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, number, number]",
        "dts2cpp_convert_tuple_0047 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, number, number]",
        "dts2cpp_convert_tuple_0047 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline212.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline212') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0047 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0048', () => {
    try {
      const result = transCkey2Dtskey('[number, boolean, number, string]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0048 convert output non-empty");
      assert.strictEqual(result, "[number, boolean, number, string]", "dts2cpp_convert_tuple_0048 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0048 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0049', () => {
    try {
      const converted = transParseObj(doParseTs('sample213.ts', `
        function sample213(p0: [number, boolean, number, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample213');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, number, string]",
        "dts2cpp_convert_tuple_0049 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0049 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0050', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet213.ts', `
        function sampleRet213(): [number, boolean, number, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, number, string]",
        "dts2cpp_convert_tuple_0050 return convert output");
      const generated = generateFunctions(converted, 'sampleRet213.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet213') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0050 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0051', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass213.ts', `
        class SampleClass213 { field: [number, boolean, number, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, boolean, number, string]",
        "dts2cpp_convert_tuple_0051 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0051 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0052', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline213.ts', `
        function pipeline213(p: [number, boolean, number, string]): [number, boolean, number, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, number, string]",
        "dts2cpp_convert_tuple_0052 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, number, string]",
        "dts2cpp_convert_tuple_0052 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline213.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline213') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0052 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0053', () => {
    try {
      const result = transCkey2Dtskey('[number, boolean, number, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0053 convert output non-empty");
      assert.strictEqual(result, "[number, boolean, number, boolean]", "dts2cpp_convert_tuple_0053 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0053 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0054', () => {
    try {
      const converted = transParseObj(doParseTs('sample214.ts', `
        function sample214(p0: [number, boolean, number, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample214');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, number, boolean]",
        "dts2cpp_convert_tuple_0054 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0054 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0055', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet214.ts', `
        function sampleRet214(): [number, boolean, number, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, number, boolean]",
        "dts2cpp_convert_tuple_0055 return convert output");
      const generated = generateFunctions(converted, 'sampleRet214.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet214') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0055 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0056', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass214.ts', `
        class SampleClass214 { field: [number, boolean, number, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, boolean, number, boolean]",
        "dts2cpp_convert_tuple_0056 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0056 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0057', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline214.ts', `
        function pipeline214(p: [number, boolean, number, boolean]): [number, boolean, number, boolean] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, number, boolean]",
        "dts2cpp_convert_tuple_0057 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, number, boolean]",
        "dts2cpp_convert_tuple_0057 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline214.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline214') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0057 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0058', () => {
    try {
      const result = transCkey2Dtskey('[number, boolean, string, number]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0058 convert output non-empty");
      assert.strictEqual(result, "[number, boolean, string, number]", "dts2cpp_convert_tuple_0058 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0058 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0059', () => {
    try {
      const converted = transParseObj(doParseTs('sample215.ts', `
        function sample215(p0: [number, boolean, string, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample215');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, string, number]",
        "dts2cpp_convert_tuple_0059 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0059 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0060', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet215.ts', `
        function sampleRet215(): [number, boolean, string, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, string, number]",
        "dts2cpp_convert_tuple_0060 return convert output");
      const generated = generateFunctions(converted, 'sampleRet215.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet215') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0060 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0061', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass215.ts', `
        class SampleClass215 { field: [number, boolean, string, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, boolean, string, number]",
        "dts2cpp_convert_tuple_0061 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0061 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0062', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline215.ts', `
        function pipeline215(p: [number, boolean, string, number]): [number, boolean, string, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, string, number]",
        "dts2cpp_convert_tuple_0062 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, string, number]",
        "dts2cpp_convert_tuple_0062 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline215.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline215') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0062 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0063', () => {
    try {
      const result = transCkey2Dtskey('[number, boolean, string, string]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0063 convert output non-empty");
      assert.strictEqual(result, "[number, boolean, string, string]", "dts2cpp_convert_tuple_0063 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0063 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0064', () => {
    try {
      const converted = transParseObj(doParseTs('sample216.ts', `
        function sample216(p0: [number, boolean, string, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample216');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, string, string]",
        "dts2cpp_convert_tuple_0064 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0064 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0065', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet216.ts', `
        function sampleRet216(): [number, boolean, string, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, string, string]",
        "dts2cpp_convert_tuple_0065 return convert output");
      const generated = generateFunctions(converted, 'sampleRet216.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet216') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0065 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0066', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass216.ts', `
        class SampleClass216 { field: [number, boolean, string, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, boolean, string, string]",
        "dts2cpp_convert_tuple_0066 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0066 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0067', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline216.ts', `
        function pipeline216(p: [number, boolean, string, string]): [number, boolean, string, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, string, string]",
        "dts2cpp_convert_tuple_0067 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, string, string]",
        "dts2cpp_convert_tuple_0067 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline216.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline216') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0067 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0068', () => {
    try {
      const result = transCkey2Dtskey('[number, boolean, string, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0068 convert output non-empty");
      assert.strictEqual(result, "[number, boolean, string, boolean]", "dts2cpp_convert_tuple_0068 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0068 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0069', () => {
    try {
      const converted = transParseObj(doParseTs('sample217.ts', `
        function sample217(p0: [number, boolean, string, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample217');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, string, boolean]",
        "dts2cpp_convert_tuple_0069 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0069 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0070', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet217.ts', `
        function sampleRet217(): [number, boolean, string, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, string, boolean]",
        "dts2cpp_convert_tuple_0070 return convert output");
      const generated = generateFunctions(converted, 'sampleRet217.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet217') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0070 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0071', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass217.ts', `
        class SampleClass217 { field: [number, boolean, string, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, boolean, string, boolean]",
        "dts2cpp_convert_tuple_0071 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0071 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0072', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline217.ts', `
        function pipeline217(p: [number, boolean, string, boolean]): [number, boolean, string, boolean] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, string, boolean]",
        "dts2cpp_convert_tuple_0072 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, string, boolean]",
        "dts2cpp_convert_tuple_0072 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline217.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline217') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0072 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0073', () => {
    try {
      const result = transCkey2Dtskey('[number, boolean, boolean, number]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0073 convert output non-empty");
      assert.strictEqual(result, "[number, boolean, boolean, number]", "dts2cpp_convert_tuple_0073 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0073 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0074', () => {
    try {
      const converted = transParseObj(doParseTs('sample218.ts', `
        function sample218(p0: [number, boolean, boolean, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample218');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, boolean, number]",
        "dts2cpp_convert_tuple_0074 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0074 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0075', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet218.ts', `
        function sampleRet218(): [number, boolean, boolean, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, boolean, number]",
        "dts2cpp_convert_tuple_0075 return convert output");
      const generated = generateFunctions(converted, 'sampleRet218.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet218') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0075 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0076', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass218.ts', `
        class SampleClass218 { field: [number, boolean, boolean, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, boolean, boolean, number]",
        "dts2cpp_convert_tuple_0076 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0076 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0077', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline218.ts', `
        function pipeline218(p: [number, boolean, boolean, number]): [number, boolean, boolean, number] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, boolean, number]",
        "dts2cpp_convert_tuple_0077 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, boolean, number]",
        "dts2cpp_convert_tuple_0077 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline218.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline218') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0077 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0078', () => {
    try {
      const result = transCkey2Dtskey('[number, boolean, boolean, string]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0078 convert output non-empty");
      assert.strictEqual(result, "[number, boolean, boolean, string]", "dts2cpp_convert_tuple_0078 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0078 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0079', () => {
    try {
      const converted = transParseObj(doParseTs('sample219.ts', `
        function sample219(p0: [number, boolean, boolean, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample219');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, boolean, string]",
        "dts2cpp_convert_tuple_0079 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0079 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0080', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet219.ts', `
        function sampleRet219(): [number, boolean, boolean, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, boolean, string]",
        "dts2cpp_convert_tuple_0080 return convert output");
      const generated = generateFunctions(converted, 'sampleRet219.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet219') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0080 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0081', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass219.ts', `
        class SampleClass219 { field: [number, boolean, boolean, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, boolean, boolean, string]",
        "dts2cpp_convert_tuple_0081 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0081 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0082', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline219.ts', `
        function pipeline219(p: [number, boolean, boolean, string]): [number, boolean, boolean, string] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, boolean, string]",
        "dts2cpp_convert_tuple_0082 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, boolean, string]",
        "dts2cpp_convert_tuple_0082 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline219.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline219') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0082 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0083', () => {
    try {
      const result = transCkey2Dtskey('[number, boolean, boolean, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0083 convert output non-empty");
      assert.strictEqual(result, "[number, boolean, boolean, boolean]", "dts2cpp_convert_tuple_0083 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0083 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0084', () => {
    try {
      const converted = transParseObj(doParseTs('sample220.ts', `
        function sample220(p0: [number, boolean, boolean, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample220');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, boolean, boolean]",
        "dts2cpp_convert_tuple_0084 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0084 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0085', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet220.ts', `
        function sampleRet220(): [number, boolean, boolean, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, boolean, boolean]",
        "dts2cpp_convert_tuple_0085 return convert output");
      const generated = generateFunctions(converted, 'sampleRet220.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet220') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0085 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0086', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass220.ts', `
        class SampleClass220 { field: [number, boolean, boolean, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, boolean, boolean, boolean]",
        "dts2cpp_convert_tuple_0086 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0086 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0087', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline220.ts', `
        function pipeline220(p: [number, boolean, boolean, boolean]): [number, boolean, boolean, boolean] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, boolean, boolean]",
        "dts2cpp_convert_tuple_0087 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, boolean, boolean]",
        "dts2cpp_convert_tuple_0087 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline220.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline220') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0087 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0088', () => {
    try {
      const result = transCkey2Dtskey('[string, number, number, number]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0088 convert output non-empty");
      assert.strictEqual(result, "[string, number, number, number]", "dts2cpp_convert_tuple_0088 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0088 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0089', () => {
    try {
      const converted = transParseObj(doParseTs('sample221.ts', `
        function sample221(p0: [string, number, number, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample221');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, number, number]",
        "dts2cpp_convert_tuple_0089 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0089 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0090', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet221.ts', `
        function sampleRet221(): [string, number, number, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, number, number, number]",
        "dts2cpp_convert_tuple_0090 return convert output");
      const generated = generateFunctions(converted, 'sampleRet221.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet221') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0090 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0091', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass221.ts', `
        class SampleClass221 { field: [string, number, number, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, number, number, number]",
        "dts2cpp_convert_tuple_0091 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0091 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0092', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline221.ts', `
        function pipeline221(p: [string, number, number, number]): [string, number, number, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, number, number, number]",
        "dts2cpp_convert_tuple_0092 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, number, number]",
        "dts2cpp_convert_tuple_0092 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline221.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline221') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0092 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0093', () => {
    try {
      const result = transCkey2Dtskey('[string, number, number, string]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0093 convert output non-empty");
      assert.strictEqual(result, "[string, number, number, string]", "dts2cpp_convert_tuple_0093 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0093 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0094', () => {
    try {
      const converted = transParseObj(doParseTs('sample222.ts', `
        function sample222(p0: [string, number, number, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample222');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, number, string]",
        "dts2cpp_convert_tuple_0094 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0094 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0095', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet222.ts', `
        function sampleRet222(): [string, number, number, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, number, number, string]",
        "dts2cpp_convert_tuple_0095 return convert output");
      const generated = generateFunctions(converted, 'sampleRet222.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet222') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0095 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0096', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass222.ts', `
        class SampleClass222 { field: [string, number, number, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, number, number, string]",
        "dts2cpp_convert_tuple_0096 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0096 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0097', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline222.ts', `
        function pipeline222(p: [string, number, number, string]): [string, number, number, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, number, number, string]",
        "dts2cpp_convert_tuple_0097 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, number, string]",
        "dts2cpp_convert_tuple_0097 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline222.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline222') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0097 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0098', () => {
    try {
      const result = transCkey2Dtskey('[string, number, number, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0098 convert output non-empty");
      assert.strictEqual(result, "[string, number, number, boolean]", "dts2cpp_convert_tuple_0098 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0098 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0099', () => {
    try {
      const converted = transParseObj(doParseTs('sample223.ts', `
        function sample223(p0: [string, number, number, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample223');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, number, boolean]",
        "dts2cpp_convert_tuple_0099 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0099 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0100', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet223.ts', `
        function sampleRet223(): [string, number, number, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, number, number, boolean]",
        "dts2cpp_convert_tuple_0100 return convert output");
      const generated = generateFunctions(converted, 'sampleRet223.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet223') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0100 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0101', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass223.ts', `
        class SampleClass223 { field: [string, number, number, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, number, number, boolean]",
        "dts2cpp_convert_tuple_0101 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0101 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0102', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline223.ts', `
        function pipeline223(p: [string, number, number, boolean]): [string, number, number, boolean] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, number, number, boolean]",
        "dts2cpp_convert_tuple_0102 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, number, boolean]",
        "dts2cpp_convert_tuple_0102 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline223.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline223') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0102 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0103', () => {
    try {
      const result = transCkey2Dtskey('[string, number, string, number]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0103 convert output non-empty");
      assert.strictEqual(result, "[string, number, string, number]", "dts2cpp_convert_tuple_0103 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0103 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0104', () => {
    try {
      const converted = transParseObj(doParseTs('sample224.ts', `
        function sample224(p0: [string, number, string, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample224');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, string, number]",
        "dts2cpp_convert_tuple_0104 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0104 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0105', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet224.ts', `
        function sampleRet224(): [string, number, string, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, number, string, number]",
        "dts2cpp_convert_tuple_0105 return convert output");
      const generated = generateFunctions(converted, 'sampleRet224.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet224') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0105 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0106', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass224.ts', `
        class SampleClass224 { field: [string, number, string, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, number, string, number]",
        "dts2cpp_convert_tuple_0106 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0106 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0107', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline224.ts', `
        function pipeline224(p: [string, number, string, number]): [string, number, string, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, number, string, number]",
        "dts2cpp_convert_tuple_0107 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, string, number]",
        "dts2cpp_convert_tuple_0107 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline224.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline224') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0107 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0108', () => {
    try {
      const result = transCkey2Dtskey('[string, number, string, string]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0108 convert output non-empty");
      assert.strictEqual(result, "[string, number, string, string]", "dts2cpp_convert_tuple_0108 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0108 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0109', () => {
    try {
      const converted = transParseObj(doParseTs('sample225.ts', `
        function sample225(p0: [string, number, string, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample225');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, string, string]",
        "dts2cpp_convert_tuple_0109 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0109 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0110', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet225.ts', `
        function sampleRet225(): [string, number, string, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, number, string, string]",
        "dts2cpp_convert_tuple_0110 return convert output");
      const generated = generateFunctions(converted, 'sampleRet225.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet225') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0110 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0111', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass225.ts', `
        class SampleClass225 { field: [string, number, string, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, number, string, string]",
        "dts2cpp_convert_tuple_0111 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0111 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0112', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline225.ts', `
        function pipeline225(p: [string, number, string, string]): [string, number, string, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, number, string, string]",
        "dts2cpp_convert_tuple_0112 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, string, string]",
        "dts2cpp_convert_tuple_0112 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline225.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline225') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0112 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0113', () => {
    try {
      const result = transCkey2Dtskey('[string, number, string, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0113 convert output non-empty");
      assert.strictEqual(result, "[string, number, string, boolean]", "dts2cpp_convert_tuple_0113 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0113 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0114', () => {
    try {
      const converted = transParseObj(doParseTs('sample226.ts', `
        function sample226(p0: [string, number, string, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample226');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, string, boolean]",
        "dts2cpp_convert_tuple_0114 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0114 execution error: ${String(err)}`);
    }
  });
});
