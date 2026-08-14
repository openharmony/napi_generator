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

suite('Stability_DTS2CPP_CONVERT_TUPLE_Part05', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_CONVERT_TUPLE_Part05.');


  test('dts2cpp_convert_tuple_0001', () => {
    try {
      const converted = transParseObj(doParseTs('sample249.ts', `
        function sample249(p0: [boolean, number, number, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample249');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, number, string]",
        "dts2cpp_convert_tuple_0001 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0001 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0002', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet249.ts', `
        function sampleRet249(): [boolean, number, number, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, number, string]",
        "dts2cpp_convert_tuple_0002 return convert output");
      const generated = generateFunctions(converted, 'sampleRet249.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet249') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0002 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0003', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass249.ts', `
        class SampleClass249 { field: [boolean, number, number, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, number, string]",
        "dts2cpp_convert_tuple_0003 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0003 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0004', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline249.ts', `
        function pipeline249(p: [boolean, number, number, string]): [boolean, number, number, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, number, string]",
        "dts2cpp_convert_tuple_0004 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, number, string]",
        "dts2cpp_convert_tuple_0004 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline249.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline249') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0004 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0005', () => {
    try {
      const result = transCkey2Dtskey('[boolean, number, number, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0005 convert output non-empty");
      assert.strictEqual(result, "[boolean, number, number, boolean]", "dts2cpp_convert_tuple_0005 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0005 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0006', () => {
    try {
      const converted = transParseObj(doParseTs('sample250.ts', `
        function sample250(p0: [boolean, number, number, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample250');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, number, boolean]",
        "dts2cpp_convert_tuple_0006 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0006 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0007', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet250.ts', `
        function sampleRet250(): [boolean, number, number, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, number, boolean]",
        "dts2cpp_convert_tuple_0007 return convert output");
      const generated = generateFunctions(converted, 'sampleRet250.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet250') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0007 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0008', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass250.ts', `
        class SampleClass250 { field: [boolean, number, number, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, number, boolean]",
        "dts2cpp_convert_tuple_0008 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0008 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0009', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline250.ts', `
        function pipeline250(p: [boolean, number, number, boolean]): [boolean, number, number, boolean] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, number, boolean]",
        "dts2cpp_convert_tuple_0009 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, number, boolean]",
        "dts2cpp_convert_tuple_0009 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline250.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline250') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0009 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0010', () => {
    try {
      const result = transCkey2Dtskey('[boolean, number, string, number]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0010 convert output non-empty");
      assert.strictEqual(result, "[boolean, number, string, number]", "dts2cpp_convert_tuple_0010 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0010 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0011', () => {
    try {
      const converted = transParseObj(doParseTs('sample251.ts', `
        function sample251(p0: [boolean, number, string, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample251');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, string, number]",
        "dts2cpp_convert_tuple_0011 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0011 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0012', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet251.ts', `
        function sampleRet251(): [boolean, number, string, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, string, number]",
        "dts2cpp_convert_tuple_0012 return convert output");
      const generated = generateFunctions(converted, 'sampleRet251.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet251') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0012 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0013', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass251.ts', `
        class SampleClass251 { field: [boolean, number, string, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, string, number]",
        "dts2cpp_convert_tuple_0013 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0013 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0014', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline251.ts', `
        function pipeline251(p: [boolean, number, string, number]): [boolean, number, string, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, string, number]",
        "dts2cpp_convert_tuple_0014 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, string, number]",
        "dts2cpp_convert_tuple_0014 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline251.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline251') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0014 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0015', () => {
    try {
      const result = transCkey2Dtskey('[boolean, number, string, string]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0015 convert output non-empty");
      assert.strictEqual(result, "[boolean, number, string, string]", "dts2cpp_convert_tuple_0015 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0015 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0016', () => {
    try {
      const converted = transParseObj(doParseTs('sample252.ts', `
        function sample252(p0: [boolean, number, string, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample252');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, string, string]",
        "dts2cpp_convert_tuple_0016 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0016 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0017', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet252.ts', `
        function sampleRet252(): [boolean, number, string, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, string, string]",
        "dts2cpp_convert_tuple_0017 return convert output");
      const generated = generateFunctions(converted, 'sampleRet252.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet252') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0017 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0018', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass252.ts', `
        class SampleClass252 { field: [boolean, number, string, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, string, string]",
        "dts2cpp_convert_tuple_0018 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0018 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0019', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline252.ts', `
        function pipeline252(p: [boolean, number, string, string]): [boolean, number, string, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, string, string]",
        "dts2cpp_convert_tuple_0019 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, string, string]",
        "dts2cpp_convert_tuple_0019 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline252.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline252') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0019 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0020', () => {
    try {
      const result = transCkey2Dtskey('[boolean, number, string, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0020 convert output non-empty");
      assert.strictEqual(result, "[boolean, number, string, boolean]", "dts2cpp_convert_tuple_0020 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0020 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0021', () => {
    try {
      const converted = transParseObj(doParseTs('sample253.ts', `
        function sample253(p0: [boolean, number, string, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample253');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, string, boolean]",
        "dts2cpp_convert_tuple_0021 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0021 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0022', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet253.ts', `
        function sampleRet253(): [boolean, number, string, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, string, boolean]",
        "dts2cpp_convert_tuple_0022 return convert output");
      const generated = generateFunctions(converted, 'sampleRet253.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet253') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0022 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0023', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass253.ts', `
        class SampleClass253 { field: [boolean, number, string, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, string, boolean]",
        "dts2cpp_convert_tuple_0023 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0023 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0024', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline253.ts', `
        function pipeline253(p: [boolean, number, string, boolean]): [boolean, number, string, boolean] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, string, boolean]",
        "dts2cpp_convert_tuple_0024 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, string, boolean]",
        "dts2cpp_convert_tuple_0024 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline253.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline253') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0024 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0025', () => {
    try {
      const result = transCkey2Dtskey('[boolean, number, boolean, number]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0025 convert output non-empty");
      assert.strictEqual(result, "[boolean, number, boolean, number]", "dts2cpp_convert_tuple_0025 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0025 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0026', () => {
    try {
      const converted = transParseObj(doParseTs('sample254.ts', `
        function sample254(p0: [boolean, number, boolean, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample254');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, boolean, number]",
        "dts2cpp_convert_tuple_0026 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0026 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0027', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet254.ts', `
        function sampleRet254(): [boolean, number, boolean, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, boolean, number]",
        "dts2cpp_convert_tuple_0027 return convert output");
      const generated = generateFunctions(converted, 'sampleRet254.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet254') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0027 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0028', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass254.ts', `
        class SampleClass254 { field: [boolean, number, boolean, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, boolean, number]",
        "dts2cpp_convert_tuple_0028 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0028 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0029', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline254.ts', `
        function pipeline254(p: [boolean, number, boolean, number]): [boolean, number, boolean, number] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, boolean, number]",
        "dts2cpp_convert_tuple_0029 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, boolean, number]",
        "dts2cpp_convert_tuple_0029 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline254.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline254') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0029 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0030', () => {
    try {
      const result = transCkey2Dtskey('[boolean, number, boolean, string]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0030 convert output non-empty");
      assert.strictEqual(result, "[boolean, number, boolean, string]", "dts2cpp_convert_tuple_0030 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0030 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0031', () => {
    try {
      const converted = transParseObj(doParseTs('sample255.ts', `
        function sample255(p0: [boolean, number, boolean, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample255');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, boolean, string]",
        "dts2cpp_convert_tuple_0031 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0031 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0032', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet255.ts', `
        function sampleRet255(): [boolean, number, boolean, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, boolean, string]",
        "dts2cpp_convert_tuple_0032 return convert output");
      const generated = generateFunctions(converted, 'sampleRet255.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet255') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0032 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0033', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass255.ts', `
        class SampleClass255 { field: [boolean, number, boolean, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, boolean, string]",
        "dts2cpp_convert_tuple_0033 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0033 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0034', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline255.ts', `
        function pipeline255(p: [boolean, number, boolean, string]): [boolean, number, boolean, string] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, boolean, string]",
        "dts2cpp_convert_tuple_0034 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, boolean, string]",
        "dts2cpp_convert_tuple_0034 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline255.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline255') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0034 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0035', () => {
    try {
      const result = transCkey2Dtskey('[boolean, number, boolean, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0035 convert output non-empty");
      assert.strictEqual(result, "[boolean, number, boolean, boolean]", "dts2cpp_convert_tuple_0035 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0035 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0036', () => {
    try {
      const converted = transParseObj(doParseTs('sample256.ts', `
        function sample256(p0: [boolean, number, boolean, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample256');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, boolean, boolean]",
        "dts2cpp_convert_tuple_0036 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0036 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0037', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet256.ts', `
        function sampleRet256(): [boolean, number, boolean, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, boolean, boolean]",
        "dts2cpp_convert_tuple_0037 return convert output");
      const generated = generateFunctions(converted, 'sampleRet256.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet256') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0037 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0038', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass256.ts', `
        class SampleClass256 { field: [boolean, number, boolean, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, boolean, boolean]",
        "dts2cpp_convert_tuple_0038 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0038 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0039', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline256.ts', `
        function pipeline256(p: [boolean, number, boolean, boolean]): [boolean, number, boolean, boolean] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, boolean, boolean]",
        "dts2cpp_convert_tuple_0039 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, boolean, boolean]",
        "dts2cpp_convert_tuple_0039 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline256.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline256') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0039 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0040', () => {
    try {
      const result = transCkey2Dtskey('[boolean, string, number, number]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0040 convert output non-empty");
      assert.strictEqual(result, "[boolean, string, number, number]", "dts2cpp_convert_tuple_0040 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0040 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0041', () => {
    try {
      const converted = transParseObj(doParseTs('sample257.ts', `
        function sample257(p0: [boolean, string, number, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample257');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, number, number]",
        "dts2cpp_convert_tuple_0041 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0041 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0042', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet257.ts', `
        function sampleRet257(): [boolean, string, number, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, number, number]",
        "dts2cpp_convert_tuple_0042 return convert output");
      const generated = generateFunctions(converted, 'sampleRet257.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet257') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0042 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0043', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass257.ts', `
        class SampleClass257 { field: [boolean, string, number, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, number, number]",
        "dts2cpp_convert_tuple_0043 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0043 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0044', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline257.ts', `
        function pipeline257(p: [boolean, string, number, number]): [boolean, string, number, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, number, number]",
        "dts2cpp_convert_tuple_0044 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, number, number]",
        "dts2cpp_convert_tuple_0044 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline257.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline257') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0044 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0045', () => {
    try {
      const result = transCkey2Dtskey('[boolean, string, number, string]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0045 convert output non-empty");
      assert.strictEqual(result, "[boolean, string, number, string]", "dts2cpp_convert_tuple_0045 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0045 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0046', () => {
    try {
      const converted = transParseObj(doParseTs('sample258.ts', `
        function sample258(p0: [boolean, string, number, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample258');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, number, string]",
        "dts2cpp_convert_tuple_0046 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0046 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0047', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet258.ts', `
        function sampleRet258(): [boolean, string, number, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, number, string]",
        "dts2cpp_convert_tuple_0047 return convert output");
      const generated = generateFunctions(converted, 'sampleRet258.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet258') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0047 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0048', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass258.ts', `
        class SampleClass258 { field: [boolean, string, number, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, number, string]",
        "dts2cpp_convert_tuple_0048 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0048 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0049', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline258.ts', `
        function pipeline258(p: [boolean, string, number, string]): [boolean, string, number, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, number, string]",
        "dts2cpp_convert_tuple_0049 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, number, string]",
        "dts2cpp_convert_tuple_0049 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline258.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline258') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0049 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0050', () => {
    try {
      const result = transCkey2Dtskey('[boolean, string, number, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0050 convert output non-empty");
      assert.strictEqual(result, "[boolean, string, number, boolean]", "dts2cpp_convert_tuple_0050 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0050 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0051', () => {
    try {
      const converted = transParseObj(doParseTs('sample259.ts', `
        function sample259(p0: [boolean, string, number, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample259');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, number, boolean]",
        "dts2cpp_convert_tuple_0051 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0051 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0052', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet259.ts', `
        function sampleRet259(): [boolean, string, number, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, number, boolean]",
        "dts2cpp_convert_tuple_0052 return convert output");
      const generated = generateFunctions(converted, 'sampleRet259.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet259') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0052 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0053', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass259.ts', `
        class SampleClass259 { field: [boolean, string, number, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, number, boolean]",
        "dts2cpp_convert_tuple_0053 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0053 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0054', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline259.ts', `
        function pipeline259(p: [boolean, string, number, boolean]): [boolean, string, number, boolean] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, number, boolean]",
        "dts2cpp_convert_tuple_0054 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, number, boolean]",
        "dts2cpp_convert_tuple_0054 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline259.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline259') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0054 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0055', () => {
    try {
      const result = transCkey2Dtskey('[boolean, string, string, number]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0055 convert output non-empty");
      assert.strictEqual(result, "[boolean, string, string, number]", "dts2cpp_convert_tuple_0055 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0055 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0056', () => {
    try {
      const converted = transParseObj(doParseTs('sample260.ts', `
        function sample260(p0: [boolean, string, string, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample260');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, string, number]",
        "dts2cpp_convert_tuple_0056 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0056 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0057', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet260.ts', `
        function sampleRet260(): [boolean, string, string, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, string, number]",
        "dts2cpp_convert_tuple_0057 return convert output");
      const generated = generateFunctions(converted, 'sampleRet260.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet260') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0057 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0058', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass260.ts', `
        class SampleClass260 { field: [boolean, string, string, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, string, number]",
        "dts2cpp_convert_tuple_0058 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0058 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0059', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline260.ts', `
        function pipeline260(p: [boolean, string, string, number]): [boolean, string, string, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, string, number]",
        "dts2cpp_convert_tuple_0059 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, string, number]",
        "dts2cpp_convert_tuple_0059 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline260.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline260') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0059 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0060', () => {
    try {
      const result = transCkey2Dtskey('[boolean, string, string, string]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0060 convert output non-empty");
      assert.strictEqual(result, "[boolean, string, string, string]", "dts2cpp_convert_tuple_0060 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0060 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0061', () => {
    try {
      const converted = transParseObj(doParseTs('sample261.ts', `
        function sample261(p0: [boolean, string, string, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample261');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, string, string]",
        "dts2cpp_convert_tuple_0061 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0061 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0062', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet261.ts', `
        function sampleRet261(): [boolean, string, string, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, string, string]",
        "dts2cpp_convert_tuple_0062 return convert output");
      const generated = generateFunctions(converted, 'sampleRet261.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet261') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0062 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0063', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass261.ts', `
        class SampleClass261 { field: [boolean, string, string, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, string, string]",
        "dts2cpp_convert_tuple_0063 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0063 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0064', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline261.ts', `
        function pipeline261(p: [boolean, string, string, string]): [boolean, string, string, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, string, string]",
        "dts2cpp_convert_tuple_0064 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, string, string]",
        "dts2cpp_convert_tuple_0064 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline261.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline261') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0064 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0065', () => {
    try {
      const result = transCkey2Dtskey('[boolean, string, string, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0065 convert output non-empty");
      assert.strictEqual(result, "[boolean, string, string, boolean]", "dts2cpp_convert_tuple_0065 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0065 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0066', () => {
    try {
      const converted = transParseObj(doParseTs('sample262.ts', `
        function sample262(p0: [boolean, string, string, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample262');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, string, boolean]",
        "dts2cpp_convert_tuple_0066 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0066 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0067', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet262.ts', `
        function sampleRet262(): [boolean, string, string, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, string, boolean]",
        "dts2cpp_convert_tuple_0067 return convert output");
      const generated = generateFunctions(converted, 'sampleRet262.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet262') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0067 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0068', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass262.ts', `
        class SampleClass262 { field: [boolean, string, string, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, string, boolean]",
        "dts2cpp_convert_tuple_0068 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0068 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0069', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline262.ts', `
        function pipeline262(p: [boolean, string, string, boolean]): [boolean, string, string, boolean] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, string, boolean]",
        "dts2cpp_convert_tuple_0069 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, string, boolean]",
        "dts2cpp_convert_tuple_0069 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline262.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline262') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0069 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0070', () => {
    try {
      const result = transCkey2Dtskey('[boolean, string, boolean, number]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0070 convert output non-empty");
      assert.strictEqual(result, "[boolean, string, boolean, number]", "dts2cpp_convert_tuple_0070 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0070 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0071', () => {
    try {
      const converted = transParseObj(doParseTs('sample263.ts', `
        function sample263(p0: [boolean, string, boolean, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample263');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, boolean, number]",
        "dts2cpp_convert_tuple_0071 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0071 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0072', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet263.ts', `
        function sampleRet263(): [boolean, string, boolean, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, boolean, number]",
        "dts2cpp_convert_tuple_0072 return convert output");
      const generated = generateFunctions(converted, 'sampleRet263.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet263') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0072 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0073', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass263.ts', `
        class SampleClass263 { field: [boolean, string, boolean, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, boolean, number]",
        "dts2cpp_convert_tuple_0073 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0073 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0074', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline263.ts', `
        function pipeline263(p: [boolean, string, boolean, number]): [boolean, string, boolean, number] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, boolean, number]",
        "dts2cpp_convert_tuple_0074 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, boolean, number]",
        "dts2cpp_convert_tuple_0074 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline263.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline263') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0074 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0075', () => {
    try {
      const result = transCkey2Dtskey('[boolean, string, boolean, string]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0075 convert output non-empty");
      assert.strictEqual(result, "[boolean, string, boolean, string]", "dts2cpp_convert_tuple_0075 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0075 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0076', () => {
    try {
      const converted = transParseObj(doParseTs('sample264.ts', `
        function sample264(p0: [boolean, string, boolean, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample264');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, boolean, string]",
        "dts2cpp_convert_tuple_0076 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0076 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0077', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet264.ts', `
        function sampleRet264(): [boolean, string, boolean, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, boolean, string]",
        "dts2cpp_convert_tuple_0077 return convert output");
      const generated = generateFunctions(converted, 'sampleRet264.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet264') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0077 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0078', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass264.ts', `
        class SampleClass264 { field: [boolean, string, boolean, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, boolean, string]",
        "dts2cpp_convert_tuple_0078 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0078 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0079', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline264.ts', `
        function pipeline264(p: [boolean, string, boolean, string]): [boolean, string, boolean, string] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, boolean, string]",
        "dts2cpp_convert_tuple_0079 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, boolean, string]",
        "dts2cpp_convert_tuple_0079 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline264.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline264') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0079 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0080', () => {
    try {
      const result = transCkey2Dtskey('[boolean, string, boolean, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0080 convert output non-empty");
      assert.strictEqual(result, "[boolean, string, boolean, boolean]", "dts2cpp_convert_tuple_0080 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0080 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0081', () => {
    try {
      const converted = transParseObj(doParseTs('sample265.ts', `
        function sample265(p0: [boolean, string, boolean, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample265');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, boolean, boolean]",
        "dts2cpp_convert_tuple_0081 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0081 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0082', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet265.ts', `
        function sampleRet265(): [boolean, string, boolean, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, boolean, boolean]",
        "dts2cpp_convert_tuple_0082 return convert output");
      const generated = generateFunctions(converted, 'sampleRet265.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet265') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0082 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0083', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass265.ts', `
        class SampleClass265 { field: [boolean, string, boolean, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, boolean, boolean]",
        "dts2cpp_convert_tuple_0083 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0083 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0084', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline265.ts', `
        function pipeline265(p: [boolean, string, boolean, boolean]): [boolean, string, boolean, boolean] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, boolean, boolean]",
        "dts2cpp_convert_tuple_0084 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, boolean, boolean]",
        "dts2cpp_convert_tuple_0084 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline265.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline265') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0084 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0085', () => {
    try {
      const result = transCkey2Dtskey('[boolean, boolean, number, number]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0085 convert output non-empty");
      assert.strictEqual(result, "[boolean, boolean, number, number]", "dts2cpp_convert_tuple_0085 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0085 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0086', () => {
    try {
      const converted = transParseObj(doParseTs('sample266.ts', `
        function sample266(p0: [boolean, boolean, number, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample266');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, number, number]",
        "dts2cpp_convert_tuple_0086 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0086 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0087', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet266.ts', `
        function sampleRet266(): [boolean, boolean, number, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, number, number]",
        "dts2cpp_convert_tuple_0087 return convert output");
      const generated = generateFunctions(converted, 'sampleRet266.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet266') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0087 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0088', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass266.ts', `
        class SampleClass266 { field: [boolean, boolean, number, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, number, number]",
        "dts2cpp_convert_tuple_0088 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0088 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0089', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline266.ts', `
        function pipeline266(p: [boolean, boolean, number, number]): [boolean, boolean, number, number] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, number, number]",
        "dts2cpp_convert_tuple_0089 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, number, number]",
        "dts2cpp_convert_tuple_0089 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline266.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline266') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0089 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0090', () => {
    try {
      const result = transCkey2Dtskey('[boolean, boolean, number, string]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0090 convert output non-empty");
      assert.strictEqual(result, "[boolean, boolean, number, string]", "dts2cpp_convert_tuple_0090 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0090 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0091', () => {
    try {
      const converted = transParseObj(doParseTs('sample267.ts', `
        function sample267(p0: [boolean, boolean, number, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample267');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, number, string]",
        "dts2cpp_convert_tuple_0091 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0091 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0092', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet267.ts', `
        function sampleRet267(): [boolean, boolean, number, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, number, string]",
        "dts2cpp_convert_tuple_0092 return convert output");
      const generated = generateFunctions(converted, 'sampleRet267.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet267') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0092 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0093', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass267.ts', `
        class SampleClass267 { field: [boolean, boolean, number, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, number, string]",
        "dts2cpp_convert_tuple_0093 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0093 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0094', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline267.ts', `
        function pipeline267(p: [boolean, boolean, number, string]): [boolean, boolean, number, string] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, number, string]",
        "dts2cpp_convert_tuple_0094 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, number, string]",
        "dts2cpp_convert_tuple_0094 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline267.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline267') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0094 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0095', () => {
    try {
      const result = transCkey2Dtskey('[boolean, boolean, number, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0095 convert output non-empty");
      assert.strictEqual(result, "[boolean, boolean, number, boolean]", "dts2cpp_convert_tuple_0095 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0095 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0096', () => {
    try {
      const converted = transParseObj(doParseTs('sample268.ts', `
        function sample268(p0: [boolean, boolean, number, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample268');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, number, boolean]",
        "dts2cpp_convert_tuple_0096 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0096 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0097', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet268.ts', `
        function sampleRet268(): [boolean, boolean, number, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, number, boolean]",
        "dts2cpp_convert_tuple_0097 return convert output");
      const generated = generateFunctions(converted, 'sampleRet268.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet268') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0097 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0098', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass268.ts', `
        class SampleClass268 { field: [boolean, boolean, number, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, number, boolean]",
        "dts2cpp_convert_tuple_0098 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0098 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0099', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline268.ts', `
        function pipeline268(p: [boolean, boolean, number, boolean]): [boolean, boolean, number, boolean] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, number, boolean]",
        "dts2cpp_convert_tuple_0099 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, number, boolean]",
        "dts2cpp_convert_tuple_0099 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline268.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline268') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0099 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0100', () => {
    try {
      const result = transCkey2Dtskey('[boolean, boolean, string, number]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0100 convert output non-empty");
      assert.strictEqual(result, "[boolean, boolean, string, number]", "dts2cpp_convert_tuple_0100 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0100 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0101', () => {
    try {
      const converted = transParseObj(doParseTs('sample269.ts', `
        function sample269(p0: [boolean, boolean, string, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample269');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, string, number]",
        "dts2cpp_convert_tuple_0101 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0101 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0102', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet269.ts', `
        function sampleRet269(): [boolean, boolean, string, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, string, number]",
        "dts2cpp_convert_tuple_0102 return convert output");
      const generated = generateFunctions(converted, 'sampleRet269.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet269') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0102 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0103', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass269.ts', `
        class SampleClass269 { field: [boolean, boolean, string, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, string, number]",
        "dts2cpp_convert_tuple_0103 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0103 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0104', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline269.ts', `
        function pipeline269(p: [boolean, boolean, string, number]): [boolean, boolean, string, number] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, string, number]",
        "dts2cpp_convert_tuple_0104 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, string, number]",
        "dts2cpp_convert_tuple_0104 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline269.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline269') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0104 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0105', () => {
    try {
      const result = transCkey2Dtskey('[boolean, boolean, string, string]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0105 convert output non-empty");
      assert.strictEqual(result, "[boolean, boolean, string, string]", "dts2cpp_convert_tuple_0105 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0105 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0106', () => {
    try {
      const converted = transParseObj(doParseTs('sample270.ts', `
        function sample270(p0: [boolean, boolean, string, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample270');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, string, string]",
        "dts2cpp_convert_tuple_0106 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0106 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0107', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet270.ts', `
        function sampleRet270(): [boolean, boolean, string, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, string, string]",
        "dts2cpp_convert_tuple_0107 return convert output");
      const generated = generateFunctions(converted, 'sampleRet270.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet270') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0107 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0108', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass270.ts', `
        class SampleClass270 { field: [boolean, boolean, string, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, string, string]",
        "dts2cpp_convert_tuple_0108 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0108 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0109', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline270.ts', `
        function pipeline270(p: [boolean, boolean, string, string]): [boolean, boolean, string, string] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, string, string]",
        "dts2cpp_convert_tuple_0109 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, string, string]",
        "dts2cpp_convert_tuple_0109 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline270.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline270') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0109 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0110', () => {
    try {
      const result = transCkey2Dtskey('[boolean, boolean, string, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0110 convert output non-empty");
      assert.strictEqual(result, "[boolean, boolean, string, boolean]", "dts2cpp_convert_tuple_0110 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0110 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0111', () => {
    try {
      const converted = transParseObj(doParseTs('sample271.ts', `
        function sample271(p0: [boolean, boolean, string, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample271');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, string, boolean]",
        "dts2cpp_convert_tuple_0111 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0111 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0112', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet271.ts', `
        function sampleRet271(): [boolean, boolean, string, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, string, boolean]",
        "dts2cpp_convert_tuple_0112 return convert output");
      const generated = generateFunctions(converted, 'sampleRet271.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet271') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0112 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0113', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass271.ts', `
        class SampleClass271 { field: [boolean, boolean, string, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, string, boolean]",
        "dts2cpp_convert_tuple_0113 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0113 execution error: ${String(err)}`);
    }
  });
});
