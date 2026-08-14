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

suite('Stability_DTS2CPP_CONVERT_TUPLE_Part04', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_CONVERT_TUPLE_Part04.');


  test('dts2cpp_convert_tuple_0001', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet226.ts', `
        function sampleRet226(): [string, number, string, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, number, string, boolean]",
        "dts2cpp_convert_tuple_0001 return convert output");
      const generated = generateFunctions(converted, 'sampleRet226.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet226') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0001 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0002', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass226.ts', `
        class SampleClass226 { field: [string, number, string, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, number, string, boolean]",
        "dts2cpp_convert_tuple_0002 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0002 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0003', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline226.ts', `
        function pipeline226(p: [string, number, string, boolean]): [string, number, string, boolean] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, number, string, boolean]",
        "dts2cpp_convert_tuple_0003 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, string, boolean]",
        "dts2cpp_convert_tuple_0003 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline226.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline226') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0003 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0004', () => {
    try {
      const result = transCkey2Dtskey('[string, number, boolean, number]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0004 convert output non-empty");
      assert.strictEqual(result, "[string, number, boolean, number]", "dts2cpp_convert_tuple_0004 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0004 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0005', () => {
    try {
      const converted = transParseObj(doParseTs('sample227.ts', `
        function sample227(p0: [string, number, boolean, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample227');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, boolean, number]",
        "dts2cpp_convert_tuple_0005 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0005 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0006', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet227.ts', `
        function sampleRet227(): [string, number, boolean, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, number, boolean, number]",
        "dts2cpp_convert_tuple_0006 return convert output");
      const generated = generateFunctions(converted, 'sampleRet227.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet227') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0006 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0007', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass227.ts', `
        class SampleClass227 { field: [string, number, boolean, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, number, boolean, number]",
        "dts2cpp_convert_tuple_0007 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0007 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0008', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline227.ts', `
        function pipeline227(p: [string, number, boolean, number]): [string, number, boolean, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, number, boolean, number]",
        "dts2cpp_convert_tuple_0008 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, boolean, number]",
        "dts2cpp_convert_tuple_0008 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline227.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline227') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0008 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0009', () => {
    try {
      const result = transCkey2Dtskey('[string, number, boolean, string]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0009 convert output non-empty");
      assert.strictEqual(result, "[string, number, boolean, string]", "dts2cpp_convert_tuple_0009 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0009 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0010', () => {
    try {
      const converted = transParseObj(doParseTs('sample228.ts', `
        function sample228(p0: [string, number, boolean, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample228');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, boolean, string]",
        "dts2cpp_convert_tuple_0010 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0010 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0011', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet228.ts', `
        function sampleRet228(): [string, number, boolean, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, number, boolean, string]",
        "dts2cpp_convert_tuple_0011 return convert output");
      const generated = generateFunctions(converted, 'sampleRet228.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet228') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0011 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0012', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass228.ts', `
        class SampleClass228 { field: [string, number, boolean, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, number, boolean, string]",
        "dts2cpp_convert_tuple_0012 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0012 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0013', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline228.ts', `
        function pipeline228(p: [string, number, boolean, string]): [string, number, boolean, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, number, boolean, string]",
        "dts2cpp_convert_tuple_0013 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, boolean, string]",
        "dts2cpp_convert_tuple_0013 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline228.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline228') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0013 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0014', () => {
    try {
      const result = transCkey2Dtskey('[string, number, boolean, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0014 convert output non-empty");
      assert.strictEqual(result, "[string, number, boolean, boolean]", "dts2cpp_convert_tuple_0014 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0014 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0015', () => {
    try {
      const converted = transParseObj(doParseTs('sample229.ts', `
        function sample229(p0: [string, number, boolean, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample229');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, boolean, boolean]",
        "dts2cpp_convert_tuple_0015 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0015 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0016', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet229.ts', `
        function sampleRet229(): [string, number, boolean, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, number, boolean, boolean]",
        "dts2cpp_convert_tuple_0016 return convert output");
      const generated = generateFunctions(converted, 'sampleRet229.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet229') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0016 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0017', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass229.ts', `
        class SampleClass229 { field: [string, number, boolean, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, number, boolean, boolean]",
        "dts2cpp_convert_tuple_0017 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0017 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0018', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline229.ts', `
        function pipeline229(p: [string, number, boolean, boolean]): [string, number, boolean, boolean] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, number, boolean, boolean]",
        "dts2cpp_convert_tuple_0018 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, boolean, boolean]",
        "dts2cpp_convert_tuple_0018 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline229.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline229') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0018 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0019', () => {
    try {
      const result = transCkey2Dtskey('[string, string, number, number]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0019 convert output non-empty");
      assert.strictEqual(result, "[string, string, number, number]", "dts2cpp_convert_tuple_0019 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0019 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0020', () => {
    try {
      const converted = transParseObj(doParseTs('sample230.ts', `
        function sample230(p0: [string, string, number, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample230');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, number, number]",
        "dts2cpp_convert_tuple_0020 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0020 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0021', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet230.ts', `
        function sampleRet230(): [string, string, number, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string, number, number]",
        "dts2cpp_convert_tuple_0021 return convert output");
      const generated = generateFunctions(converted, 'sampleRet230.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet230') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0021 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0022', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass230.ts', `
        class SampleClass230 { field: [string, string, number, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, number, number]",
        "dts2cpp_convert_tuple_0022 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0022 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0023', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline230.ts', `
        function pipeline230(p: [string, string, number, number]): [string, string, number, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string, number, number]",
        "dts2cpp_convert_tuple_0023 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, number, number]",
        "dts2cpp_convert_tuple_0023 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline230.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline230') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0023 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0024', () => {
    try {
      const result = transCkey2Dtskey('[string, string, number, string]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0024 convert output non-empty");
      assert.strictEqual(result, "[string, string, number, string]", "dts2cpp_convert_tuple_0024 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0024 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0025', () => {
    try {
      const converted = transParseObj(doParseTs('sample231.ts', `
        function sample231(p0: [string, string, number, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample231');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, number, string]",
        "dts2cpp_convert_tuple_0025 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0025 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0026', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet231.ts', `
        function sampleRet231(): [string, string, number, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string, number, string]",
        "dts2cpp_convert_tuple_0026 return convert output");
      const generated = generateFunctions(converted, 'sampleRet231.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet231') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0026 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0027', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass231.ts', `
        class SampleClass231 { field: [string, string, number, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, number, string]",
        "dts2cpp_convert_tuple_0027 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0027 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0028', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline231.ts', `
        function pipeline231(p: [string, string, number, string]): [string, string, number, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string, number, string]",
        "dts2cpp_convert_tuple_0028 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, number, string]",
        "dts2cpp_convert_tuple_0028 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline231.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline231') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0028 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0029', () => {
    try {
      const result = transCkey2Dtskey('[string, string, number, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0029 convert output non-empty");
      assert.strictEqual(result, "[string, string, number, boolean]", "dts2cpp_convert_tuple_0029 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0029 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0030', () => {
    try {
      const converted = transParseObj(doParseTs('sample232.ts', `
        function sample232(p0: [string, string, number, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample232');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, number, boolean]",
        "dts2cpp_convert_tuple_0030 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0030 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0031', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet232.ts', `
        function sampleRet232(): [string, string, number, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string, number, boolean]",
        "dts2cpp_convert_tuple_0031 return convert output");
      const generated = generateFunctions(converted, 'sampleRet232.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet232') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0031 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0032', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass232.ts', `
        class SampleClass232 { field: [string, string, number, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, number, boolean]",
        "dts2cpp_convert_tuple_0032 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0032 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0033', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline232.ts', `
        function pipeline232(p: [string, string, number, boolean]): [string, string, number, boolean] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string, number, boolean]",
        "dts2cpp_convert_tuple_0033 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, number, boolean]",
        "dts2cpp_convert_tuple_0033 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline232.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline232') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0033 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0034', () => {
    try {
      const result = transCkey2Dtskey('[string, string, string, number]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0034 convert output non-empty");
      assert.strictEqual(result, "[string, string, string, number]", "dts2cpp_convert_tuple_0034 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0034 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0035', () => {
    try {
      const converted = transParseObj(doParseTs('sample233.ts', `
        function sample233(p0: [string, string, string, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample233');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, string, number]",
        "dts2cpp_convert_tuple_0035 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0035 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0036', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet233.ts', `
        function sampleRet233(): [string, string, string, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string, string, number]",
        "dts2cpp_convert_tuple_0036 return convert output");
      const generated = generateFunctions(converted, 'sampleRet233.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet233') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0036 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0037', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass233.ts', `
        class SampleClass233 { field: [string, string, string, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, string, number]",
        "dts2cpp_convert_tuple_0037 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0037 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0038', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline233.ts', `
        function pipeline233(p: [string, string, string, number]): [string, string, string, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string, string, number]",
        "dts2cpp_convert_tuple_0038 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, string, number]",
        "dts2cpp_convert_tuple_0038 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline233.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline233') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0038 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0039', () => {
    try {
      const result = transCkey2Dtskey('[string, string, string, string]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0039 convert output non-empty");
      assert.strictEqual(result, "[string, string, string, string]", "dts2cpp_convert_tuple_0039 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0039 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0040', () => {
    try {
      const converted = transParseObj(doParseTs('sample234.ts', `
        function sample234(p0: [string, string, string, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample234');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, string, string]",
        "dts2cpp_convert_tuple_0040 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0040 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0041', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet234.ts', `
        function sampleRet234(): [string, string, string, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string, string, string]",
        "dts2cpp_convert_tuple_0041 return convert output");
      const generated = generateFunctions(converted, 'sampleRet234.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet234') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0041 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0042', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass234.ts', `
        class SampleClass234 { field: [string, string, string, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, string, string]",
        "dts2cpp_convert_tuple_0042 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0042 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0043', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline234.ts', `
        function pipeline234(p: [string, string, string, string]): [string, string, string, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string, string, string]",
        "dts2cpp_convert_tuple_0043 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, string, string]",
        "dts2cpp_convert_tuple_0043 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline234.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline234') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0043 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0044', () => {
    try {
      const result = transCkey2Dtskey('[string, string, string, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0044 convert output non-empty");
      assert.strictEqual(result, "[string, string, string, boolean]", "dts2cpp_convert_tuple_0044 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0044 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0045', () => {
    try {
      const converted = transParseObj(doParseTs('sample235.ts', `
        function sample235(p0: [string, string, string, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample235');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, string, boolean]",
        "dts2cpp_convert_tuple_0045 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0045 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0046', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet235.ts', `
        function sampleRet235(): [string, string, string, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string, string, boolean]",
        "dts2cpp_convert_tuple_0046 return convert output");
      const generated = generateFunctions(converted, 'sampleRet235.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet235') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0046 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0047', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass235.ts', `
        class SampleClass235 { field: [string, string, string, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, string, boolean]",
        "dts2cpp_convert_tuple_0047 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0047 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0048', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline235.ts', `
        function pipeline235(p: [string, string, string, boolean]): [string, string, string, boolean] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string, string, boolean]",
        "dts2cpp_convert_tuple_0048 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, string, boolean]",
        "dts2cpp_convert_tuple_0048 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline235.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline235') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0048 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0049', () => {
    try {
      const result = transCkey2Dtskey('[string, string, boolean, number]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0049 convert output non-empty");
      assert.strictEqual(result, "[string, string, boolean, number]", "dts2cpp_convert_tuple_0049 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0049 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0050', () => {
    try {
      const converted = transParseObj(doParseTs('sample236.ts', `
        function sample236(p0: [string, string, boolean, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample236');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, boolean, number]",
        "dts2cpp_convert_tuple_0050 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0050 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0051', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet236.ts', `
        function sampleRet236(): [string, string, boolean, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string, boolean, number]",
        "dts2cpp_convert_tuple_0051 return convert output");
      const generated = generateFunctions(converted, 'sampleRet236.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet236') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0051 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0052', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass236.ts', `
        class SampleClass236 { field: [string, string, boolean, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, boolean, number]",
        "dts2cpp_convert_tuple_0052 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0052 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0053', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline236.ts', `
        function pipeline236(p: [string, string, boolean, number]): [string, string, boolean, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string, boolean, number]",
        "dts2cpp_convert_tuple_0053 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, boolean, number]",
        "dts2cpp_convert_tuple_0053 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline236.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline236') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0053 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0054', () => {
    try {
      const result = transCkey2Dtskey('[string, string, boolean, string]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0054 convert output non-empty");
      assert.strictEqual(result, "[string, string, boolean, string]", "dts2cpp_convert_tuple_0054 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0054 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0055', () => {
    try {
      const converted = transParseObj(doParseTs('sample237.ts', `
        function sample237(p0: [string, string, boolean, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample237');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, boolean, string]",
        "dts2cpp_convert_tuple_0055 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0055 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0056', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet237.ts', `
        function sampleRet237(): [string, string, boolean, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string, boolean, string]",
        "dts2cpp_convert_tuple_0056 return convert output");
      const generated = generateFunctions(converted, 'sampleRet237.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet237') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0056 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0057', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass237.ts', `
        class SampleClass237 { field: [string, string, boolean, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, boolean, string]",
        "dts2cpp_convert_tuple_0057 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0057 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0058', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline237.ts', `
        function pipeline237(p: [string, string, boolean, string]): [string, string, boolean, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string, boolean, string]",
        "dts2cpp_convert_tuple_0058 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, boolean, string]",
        "dts2cpp_convert_tuple_0058 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline237.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline237') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0058 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0059', () => {
    try {
      const result = transCkey2Dtskey('[string, string, boolean, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0059 convert output non-empty");
      assert.strictEqual(result, "[string, string, boolean, boolean]", "dts2cpp_convert_tuple_0059 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0059 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0060', () => {
    try {
      const converted = transParseObj(doParseTs('sample238.ts', `
        function sample238(p0: [string, string, boolean, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample238');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, boolean, boolean]",
        "dts2cpp_convert_tuple_0060 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0060 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0061', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet238.ts', `
        function sampleRet238(): [string, string, boolean, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string, boolean, boolean]",
        "dts2cpp_convert_tuple_0061 return convert output");
      const generated = generateFunctions(converted, 'sampleRet238.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet238') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0061 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0062', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass238.ts', `
        class SampleClass238 { field: [string, string, boolean, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, boolean, boolean]",
        "dts2cpp_convert_tuple_0062 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0062 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0063', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline238.ts', `
        function pipeline238(p: [string, string, boolean, boolean]): [string, string, boolean, boolean] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string, boolean, boolean]",
        "dts2cpp_convert_tuple_0063 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, boolean, boolean]",
        "dts2cpp_convert_tuple_0063 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline238.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline238') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0063 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0064', () => {
    try {
      const result = transCkey2Dtskey('[string, boolean, number, number]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0064 convert output non-empty");
      assert.strictEqual(result, "[string, boolean, number, number]", "dts2cpp_convert_tuple_0064 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0064 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0065', () => {
    try {
      const converted = transParseObj(doParseTs('sample239.ts', `
        function sample239(p0: [string, boolean, number, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample239');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, number, number]",
        "dts2cpp_convert_tuple_0065 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0065 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0066', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet239.ts', `
        function sampleRet239(): [string, boolean, number, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, number, number]",
        "dts2cpp_convert_tuple_0066 return convert output");
      const generated = generateFunctions(converted, 'sampleRet239.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet239') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0066 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0067', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass239.ts', `
        class SampleClass239 { field: [string, boolean, number, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean, number, number]",
        "dts2cpp_convert_tuple_0067 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0067 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0068', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline239.ts', `
        function pipeline239(p: [string, boolean, number, number]): [string, boolean, number, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, number, number]",
        "dts2cpp_convert_tuple_0068 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, number, number]",
        "dts2cpp_convert_tuple_0068 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline239.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline239') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0068 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0069', () => {
    try {
      const result = transCkey2Dtskey('[string, boolean, number, string]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0069 convert output non-empty");
      assert.strictEqual(result, "[string, boolean, number, string]", "dts2cpp_convert_tuple_0069 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0069 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0070', () => {
    try {
      const converted = transParseObj(doParseTs('sample240.ts', `
        function sample240(p0: [string, boolean, number, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample240');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, number, string]",
        "dts2cpp_convert_tuple_0070 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0070 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0071', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet240.ts', `
        function sampleRet240(): [string, boolean, number, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, number, string]",
        "dts2cpp_convert_tuple_0071 return convert output");
      const generated = generateFunctions(converted, 'sampleRet240.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet240') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0071 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0072', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass240.ts', `
        class SampleClass240 { field: [string, boolean, number, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean, number, string]",
        "dts2cpp_convert_tuple_0072 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0072 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0073', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline240.ts', `
        function pipeline240(p: [string, boolean, number, string]): [string, boolean, number, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, number, string]",
        "dts2cpp_convert_tuple_0073 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, number, string]",
        "dts2cpp_convert_tuple_0073 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline240.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline240') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0073 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0074', () => {
    try {
      const result = transCkey2Dtskey('[string, boolean, number, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0074 convert output non-empty");
      assert.strictEqual(result, "[string, boolean, number, boolean]", "dts2cpp_convert_tuple_0074 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0074 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0075', () => {
    try {
      const converted = transParseObj(doParseTs('sample241.ts', `
        function sample241(p0: [string, boolean, number, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample241');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, number, boolean]",
        "dts2cpp_convert_tuple_0075 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0075 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0076', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet241.ts', `
        function sampleRet241(): [string, boolean, number, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, number, boolean]",
        "dts2cpp_convert_tuple_0076 return convert output");
      const generated = generateFunctions(converted, 'sampleRet241.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet241') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0076 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0077', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass241.ts', `
        class SampleClass241 { field: [string, boolean, number, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean, number, boolean]",
        "dts2cpp_convert_tuple_0077 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0077 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0078', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline241.ts', `
        function pipeline241(p: [string, boolean, number, boolean]): [string, boolean, number, boolean] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, number, boolean]",
        "dts2cpp_convert_tuple_0078 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, number, boolean]",
        "dts2cpp_convert_tuple_0078 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline241.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline241') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0078 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0079', () => {
    try {
      const result = transCkey2Dtskey('[string, boolean, string, number]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0079 convert output non-empty");
      assert.strictEqual(result, "[string, boolean, string, number]", "dts2cpp_convert_tuple_0079 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0079 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0080', () => {
    try {
      const converted = transParseObj(doParseTs('sample242.ts', `
        function sample242(p0: [string, boolean, string, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample242');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, string, number]",
        "dts2cpp_convert_tuple_0080 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0080 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0081', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet242.ts', `
        function sampleRet242(): [string, boolean, string, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, string, number]",
        "dts2cpp_convert_tuple_0081 return convert output");
      const generated = generateFunctions(converted, 'sampleRet242.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet242') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0081 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0082', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass242.ts', `
        class SampleClass242 { field: [string, boolean, string, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean, string, number]",
        "dts2cpp_convert_tuple_0082 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0082 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0083', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline242.ts', `
        function pipeline242(p: [string, boolean, string, number]): [string, boolean, string, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, string, number]",
        "dts2cpp_convert_tuple_0083 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, string, number]",
        "dts2cpp_convert_tuple_0083 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline242.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline242') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0083 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0084', () => {
    try {
      const result = transCkey2Dtskey('[string, boolean, string, string]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0084 convert output non-empty");
      assert.strictEqual(result, "[string, boolean, string, string]", "dts2cpp_convert_tuple_0084 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0084 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0085', () => {
    try {
      const converted = transParseObj(doParseTs('sample243.ts', `
        function sample243(p0: [string, boolean, string, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample243');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, string, string]",
        "dts2cpp_convert_tuple_0085 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0085 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0086', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet243.ts', `
        function sampleRet243(): [string, boolean, string, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, string, string]",
        "dts2cpp_convert_tuple_0086 return convert output");
      const generated = generateFunctions(converted, 'sampleRet243.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet243') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0086 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0087', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass243.ts', `
        class SampleClass243 { field: [string, boolean, string, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean, string, string]",
        "dts2cpp_convert_tuple_0087 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0087 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0088', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline243.ts', `
        function pipeline243(p: [string, boolean, string, string]): [string, boolean, string, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, string, string]",
        "dts2cpp_convert_tuple_0088 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, string, string]",
        "dts2cpp_convert_tuple_0088 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline243.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline243') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0088 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0089', () => {
    try {
      const result = transCkey2Dtskey('[string, boolean, string, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0089 convert output non-empty");
      assert.strictEqual(result, "[string, boolean, string, boolean]", "dts2cpp_convert_tuple_0089 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0089 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0090', () => {
    try {
      const converted = transParseObj(doParseTs('sample244.ts', `
        function sample244(p0: [string, boolean, string, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample244');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, string, boolean]",
        "dts2cpp_convert_tuple_0090 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0090 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0091', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet244.ts', `
        function sampleRet244(): [string, boolean, string, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, string, boolean]",
        "dts2cpp_convert_tuple_0091 return convert output");
      const generated = generateFunctions(converted, 'sampleRet244.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet244') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0091 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0092', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass244.ts', `
        class SampleClass244 { field: [string, boolean, string, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean, string, boolean]",
        "dts2cpp_convert_tuple_0092 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0092 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0093', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline244.ts', `
        function pipeline244(p: [string, boolean, string, boolean]): [string, boolean, string, boolean] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, string, boolean]",
        "dts2cpp_convert_tuple_0093 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, string, boolean]",
        "dts2cpp_convert_tuple_0093 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline244.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline244') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0093 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0094', () => {
    try {
      const result = transCkey2Dtskey('[string, boolean, boolean, number]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0094 convert output non-empty");
      assert.strictEqual(result, "[string, boolean, boolean, number]", "dts2cpp_convert_tuple_0094 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0094 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0095', () => {
    try {
      const converted = transParseObj(doParseTs('sample245.ts', `
        function sample245(p0: [string, boolean, boolean, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample245');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, boolean, number]",
        "dts2cpp_convert_tuple_0095 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0095 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0096', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet245.ts', `
        function sampleRet245(): [string, boolean, boolean, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, boolean, number]",
        "dts2cpp_convert_tuple_0096 return convert output");
      const generated = generateFunctions(converted, 'sampleRet245.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet245') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0096 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0097', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass245.ts', `
        class SampleClass245 { field: [string, boolean, boolean, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean, boolean, number]",
        "dts2cpp_convert_tuple_0097 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0097 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0098', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline245.ts', `
        function pipeline245(p: [string, boolean, boolean, number]): [string, boolean, boolean, number] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, boolean, number]",
        "dts2cpp_convert_tuple_0098 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, boolean, number]",
        "dts2cpp_convert_tuple_0098 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline245.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline245') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0098 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0099', () => {
    try {
      const result = transCkey2Dtskey('[string, boolean, boolean, string]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0099 convert output non-empty");
      assert.strictEqual(result, "[string, boolean, boolean, string]", "dts2cpp_convert_tuple_0099 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0099 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0100', () => {
    try {
      const converted = transParseObj(doParseTs('sample246.ts', `
        function sample246(p0: [string, boolean, boolean, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample246');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, boolean, string]",
        "dts2cpp_convert_tuple_0100 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0100 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0101', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet246.ts', `
        function sampleRet246(): [string, boolean, boolean, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, boolean, string]",
        "dts2cpp_convert_tuple_0101 return convert output");
      const generated = generateFunctions(converted, 'sampleRet246.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet246') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0101 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0102', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass246.ts', `
        class SampleClass246 { field: [string, boolean, boolean, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean, boolean, string]",
        "dts2cpp_convert_tuple_0102 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0102 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0103', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline246.ts', `
        function pipeline246(p: [string, boolean, boolean, string]): [string, boolean, boolean, string] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, boolean, string]",
        "dts2cpp_convert_tuple_0103 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, boolean, string]",
        "dts2cpp_convert_tuple_0103 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline246.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline246') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0103 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0104', () => {
    try {
      const result = transCkey2Dtskey('[string, boolean, boolean, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0104 convert output non-empty");
      assert.strictEqual(result, "[string, boolean, boolean, boolean]", "dts2cpp_convert_tuple_0104 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0104 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0105', () => {
    try {
      const converted = transParseObj(doParseTs('sample247.ts', `
        function sample247(p0: [string, boolean, boolean, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample247');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, boolean, boolean]",
        "dts2cpp_convert_tuple_0105 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0105 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0106', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet247.ts', `
        function sampleRet247(): [string, boolean, boolean, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, boolean, boolean]",
        "dts2cpp_convert_tuple_0106 return convert output");
      const generated = generateFunctions(converted, 'sampleRet247.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet247') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0106 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0107', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass247.ts', `
        class SampleClass247 { field: [string, boolean, boolean, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean, boolean, boolean]",
        "dts2cpp_convert_tuple_0107 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0107 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0108', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline247.ts', `
        function pipeline247(p: [string, boolean, boolean, boolean]): [string, boolean, boolean, boolean] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, boolean, boolean]",
        "dts2cpp_convert_tuple_0108 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, boolean, boolean]",
        "dts2cpp_convert_tuple_0108 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline247.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline247') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0108 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0109', () => {
    try {
      const result = transCkey2Dtskey('[boolean, number, number, number]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0109 convert output non-empty");
      assert.strictEqual(result, "[boolean, number, number, number]", "dts2cpp_convert_tuple_0109 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0109 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0110', () => {
    try {
      const converted = transParseObj(doParseTs('sample248.ts', `
        function sample248(p0: [boolean, number, number, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample248');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, number, number]",
        "dts2cpp_convert_tuple_0110 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0110 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0111', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet248.ts', `
        function sampleRet248(): [boolean, number, number, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, number, number]",
        "dts2cpp_convert_tuple_0111 return convert output");
      const generated = generateFunctions(converted, 'sampleRet248.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet248') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0111 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0112', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass248.ts', `
        class SampleClass248 { field: [boolean, number, number, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, number, number]",
        "dts2cpp_convert_tuple_0112 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0112 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0113', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline248.ts', `
        function pipeline248(p: [boolean, number, number, number]): [boolean, number, number, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, number, number]",
        "dts2cpp_convert_tuple_0113 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, number, number]",
        "dts2cpp_convert_tuple_0113 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline248.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline248') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0113 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0114', () => {
    try {
      const result = transCkey2Dtskey('[boolean, number, number, string]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_tuple_0114 convert output non-empty");
      assert.strictEqual(result, "[boolean, number, number, string]", "dts2cpp_convert_tuple_0114 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0114 execution error: ${String(err)}`);
    }
  });
});
