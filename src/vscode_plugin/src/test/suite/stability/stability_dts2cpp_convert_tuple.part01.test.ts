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

suite('Stability_DTS2CPP_CONVERT_TUPLE_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_CONVERT_TUPLE_Part01.');


  test('dts2cpp_convert_tuple_0001', () => {
    try {
      const result = transCkey2Dtskey('[number, number]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0001 convert output non-empty");
      assert.strictEqual(result, "[number, number]", "dts2cpp_convert_tuple_0001 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0001 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0002', () => {
    try {
      const converted = transParseObj(doParseTs('sample158.ts', `
        function sample158(p0: [number, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample158');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[number, number]",
        "dts2cpp_convert_tuple_0002 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0002 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0003', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet158.ts', `
        function sampleRet158(): [number, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[number, number]",
        "dts2cpp_convert_tuple_0003 return convert output");
      const generated = generateFunctions(converted, 'sampleRet158.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet158') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0003 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0004', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass158.ts', `
        class SampleClass158 { field: [number, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[number, number]",
        "dts2cpp_convert_tuple_0004 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0004 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0005', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline158.ts', `
        function pipeline158(p: [number, number]): [number, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[number, number]",
        "dts2cpp_convert_tuple_0005 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[number, number]",
        "dts2cpp_convert_tuple_0005 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline158.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline158') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0005 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0006', () => {
    try {
      const result = transCkey2Dtskey('[number, string]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0006 convert output non-empty");
      assert.strictEqual(result, "[number, string]", "dts2cpp_convert_tuple_0006 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0006 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0007', () => {
    try {
      const converted = transParseObj(doParseTs('sample159.ts', `
        function sample159(p0: [number, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample159');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[number, string]",
        "dts2cpp_convert_tuple_0007 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0007 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0008', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet159.ts', `
        function sampleRet159(): [number, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[number, string]",
        "dts2cpp_convert_tuple_0008 return convert output");
      const generated = generateFunctions(converted, 'sampleRet159.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet159') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0008 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0009', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass159.ts', `
        class SampleClass159 { field: [number, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[number, string]",
        "dts2cpp_convert_tuple_0009 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0009 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0010', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline159.ts', `
        function pipeline159(p: [number, string]): [number, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[number, string]",
        "dts2cpp_convert_tuple_0010 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[number, string]",
        "dts2cpp_convert_tuple_0010 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline159.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline159') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0010 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0011', () => {
    try {
      const result = transCkey2Dtskey('[number, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0011 convert output non-empty");
      assert.strictEqual(result, "[number, boolean]", "dts2cpp_convert_tuple_0011 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0011 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0012', () => {
    try {
      const converted = transParseObj(doParseTs('sample160.ts', `
        function sample160(p0: [number, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample160');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[number, boolean]",
        "dts2cpp_convert_tuple_0012 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0012 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0013', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet160.ts', `
        function sampleRet160(): [number, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[number, boolean]",
        "dts2cpp_convert_tuple_0013 return convert output");
      const generated = generateFunctions(converted, 'sampleRet160.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet160') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0013 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0014', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass160.ts', `
        class SampleClass160 { field: [number, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[number, boolean]",
        "dts2cpp_convert_tuple_0014 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0014 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0015', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline160.ts', `
        function pipeline160(p: [number, boolean]): [number, boolean] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[number, boolean]",
        "dts2cpp_convert_tuple_0015 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[number, boolean]",
        "dts2cpp_convert_tuple_0015 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline160.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline160') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0015 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0016', () => {
    try {
      const result = transCkey2Dtskey('[string, number]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0016 convert output non-empty");
      assert.strictEqual(result, "[string, number]", "dts2cpp_convert_tuple_0016 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0016 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0017', () => {
    try {
      const converted = transParseObj(doParseTs('sample161.ts', `
        function sample161(p0: [string, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample161');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[string, number]",
        "dts2cpp_convert_tuple_0017 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0017 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0018', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet161.ts', `
        function sampleRet161(): [string, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[string, number]",
        "dts2cpp_convert_tuple_0018 return convert output");
      const generated = generateFunctions(converted, 'sampleRet161.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet161') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0018 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0019', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass161.ts', `
        class SampleClass161 { field: [string, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[string, number]",
        "dts2cpp_convert_tuple_0019 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0019 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0020', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline161.ts', `
        function pipeline161(p: [string, number]): [string, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[string, number]",
        "dts2cpp_convert_tuple_0020 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[string, number]",
        "dts2cpp_convert_tuple_0020 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline161.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline161') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0020 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0021', () => {
    try {
      const result = transCkey2Dtskey('[string, string]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0021 convert output non-empty");
      assert.strictEqual(result, "[string, string]", "dts2cpp_convert_tuple_0021 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0021 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0022', () => {
    try {
      const converted = transParseObj(doParseTs('sample162.ts', `
        function sample162(p0: [string, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample162');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[string, string]",
        "dts2cpp_convert_tuple_0022 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0022 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0023', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet162.ts', `
        function sampleRet162(): [string, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[string, string]",
        "dts2cpp_convert_tuple_0023 return convert output");
      const generated = generateFunctions(converted, 'sampleRet162.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet162') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0023 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0024', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass162.ts', `
        class SampleClass162 { field: [string, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[string, string]",
        "dts2cpp_convert_tuple_0024 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0024 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0025', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline162.ts', `
        function pipeline162(p: [string, string]): [string, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[string, string]",
        "dts2cpp_convert_tuple_0025 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[string, string]",
        "dts2cpp_convert_tuple_0025 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline162.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline162') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0025 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0026', () => {
    try {
      const result = transCkey2Dtskey('[string, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0026 convert output non-empty");
      assert.strictEqual(result, "[string, boolean]", "dts2cpp_convert_tuple_0026 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0026 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0027', () => {
    try {
      const converted = transParseObj(doParseTs('sample163.ts', `
        function sample163(p0: [string, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample163');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[string, boolean]",
        "dts2cpp_convert_tuple_0027 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0027 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0028', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet163.ts', `
        function sampleRet163(): [string, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[string, boolean]",
        "dts2cpp_convert_tuple_0028 return convert output");
      const generated = generateFunctions(converted, 'sampleRet163.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet163') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0028 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0029', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass163.ts', `
        class SampleClass163 { field: [string, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[string, boolean]",
        "dts2cpp_convert_tuple_0029 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0029 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0030', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline163.ts', `
        function pipeline163(p: [string, boolean]): [string, boolean] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[string, boolean]",
        "dts2cpp_convert_tuple_0030 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[string, boolean]",
        "dts2cpp_convert_tuple_0030 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline163.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline163') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0030 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0031', () => {
    try {
      const result = transCkey2Dtskey('[boolean, number]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0031 convert output non-empty");
      assert.strictEqual(result, "[boolean, number]", "dts2cpp_convert_tuple_0031 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0031 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0032', () => {
    try {
      const converted = transParseObj(doParseTs('sample164.ts', `
        function sample164(p0: [boolean, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample164');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[boolean, number]",
        "dts2cpp_convert_tuple_0032 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0032 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0033', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet164.ts', `
        function sampleRet164(): [boolean, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[boolean, number]",
        "dts2cpp_convert_tuple_0033 return convert output");
      const generated = generateFunctions(converted, 'sampleRet164.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet164') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0033 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0034', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass164.ts', `
        class SampleClass164 { field: [boolean, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[boolean, number]",
        "dts2cpp_convert_tuple_0034 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0034 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0035', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline164.ts', `
        function pipeline164(p: [boolean, number]): [boolean, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[boolean, number]",
        "dts2cpp_convert_tuple_0035 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[boolean, number]",
        "dts2cpp_convert_tuple_0035 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline164.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline164') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0035 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0036', () => {
    try {
      const result = transCkey2Dtskey('[boolean, string]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0036 convert output non-empty");
      assert.strictEqual(result, "[boolean, string]", "dts2cpp_convert_tuple_0036 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0036 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0037', () => {
    try {
      const converted = transParseObj(doParseTs('sample165.ts', `
        function sample165(p0: [boolean, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample165');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[boolean, string]",
        "dts2cpp_convert_tuple_0037 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0037 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0038', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet165.ts', `
        function sampleRet165(): [boolean, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[boolean, string]",
        "dts2cpp_convert_tuple_0038 return convert output");
      const generated = generateFunctions(converted, 'sampleRet165.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet165') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0038 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0039', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass165.ts', `
        class SampleClass165 { field: [boolean, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[boolean, string]",
        "dts2cpp_convert_tuple_0039 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0039 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0040', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline165.ts', `
        function pipeline165(p: [boolean, string]): [boolean, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[boolean, string]",
        "dts2cpp_convert_tuple_0040 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[boolean, string]",
        "dts2cpp_convert_tuple_0040 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline165.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline165') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0040 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0041', () => {
    try {
      const result = transCkey2Dtskey('[boolean, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0041 convert output non-empty");
      assert.strictEqual(result, "[boolean, boolean]", "dts2cpp_convert_tuple_0041 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0041 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0042', () => {
    try {
      const converted = transParseObj(doParseTs('sample166.ts', `
        function sample166(p0: [boolean, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample166');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[boolean, boolean]",
        "dts2cpp_convert_tuple_0042 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0042 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0043', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet166.ts', `
        function sampleRet166(): [boolean, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[boolean, boolean]",
        "dts2cpp_convert_tuple_0043 return convert output");
      const generated = generateFunctions(converted, 'sampleRet166.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet166') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0043 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0044', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass166.ts', `
        class SampleClass166 { field: [boolean, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[boolean, boolean]",
        "dts2cpp_convert_tuple_0044 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0044 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0045', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline166.ts', `
        function pipeline166(p: [boolean, boolean]): [boolean, boolean] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[boolean, boolean]",
        "dts2cpp_convert_tuple_0045 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[boolean, boolean]",
        "dts2cpp_convert_tuple_0045 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline166.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline166') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0045 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0046', () => {
    try {
      const result = transCkey2Dtskey('[number, number, number]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0046 convert output non-empty");
      assert.strictEqual(result, "[number, number, number]", "dts2cpp_convert_tuple_0046 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0046 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0047', () => {
    try {
      const converted = transParseObj(doParseTs('sample167.ts', `
        function sample167(p0: [number, number, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample167');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[number, number, number]",
        "dts2cpp_convert_tuple_0047 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0047 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0048', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet167.ts', `
        function sampleRet167(): [number, number, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[number, number, number]",
        "dts2cpp_convert_tuple_0048 return convert output");
      const generated = generateFunctions(converted, 'sampleRet167.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet167') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0048 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0049', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass167.ts', `
        class SampleClass167 { field: [number, number, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[number, number, number]",
        "dts2cpp_convert_tuple_0049 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0049 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0050', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline167.ts', `
        function pipeline167(p: [number, number, number]): [number, number, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[number, number, number]",
        "dts2cpp_convert_tuple_0050 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[number, number, number]",
        "dts2cpp_convert_tuple_0050 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline167.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline167') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0050 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0051', () => {
    try {
      const result = transCkey2Dtskey('[number, number, string]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0051 convert output non-empty");
      assert.strictEqual(result, "[number, number, string]", "dts2cpp_convert_tuple_0051 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0051 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0052', () => {
    try {
      const converted = transParseObj(doParseTs('sample168.ts', `
        function sample168(p0: [number, number, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample168');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[number, number, string]",
        "dts2cpp_convert_tuple_0052 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0052 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0053', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet168.ts', `
        function sampleRet168(): [number, number, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[number, number, string]",
        "dts2cpp_convert_tuple_0053 return convert output");
      const generated = generateFunctions(converted, 'sampleRet168.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet168') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0053 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0054', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass168.ts', `
        class SampleClass168 { field: [number, number, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[number, number, string]",
        "dts2cpp_convert_tuple_0054 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0054 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0055', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline168.ts', `
        function pipeline168(p: [number, number, string]): [number, number, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[number, number, string]",
        "dts2cpp_convert_tuple_0055 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[number, number, string]",
        "dts2cpp_convert_tuple_0055 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline168.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline168') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0055 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0056', () => {
    try {
      const result = transCkey2Dtskey('[number, number, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0056 convert output non-empty");
      assert.strictEqual(result, "[number, number, boolean]", "dts2cpp_convert_tuple_0056 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0056 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0057', () => {
    try {
      const converted = transParseObj(doParseTs('sample169.ts', `
        function sample169(p0: [number, number, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample169');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[number, number, boolean]",
        "dts2cpp_convert_tuple_0057 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0057 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0058', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet169.ts', `
        function sampleRet169(): [number, number, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[number, number, boolean]",
        "dts2cpp_convert_tuple_0058 return convert output");
      const generated = generateFunctions(converted, 'sampleRet169.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet169') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0058 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0059', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass169.ts', `
        class SampleClass169 { field: [number, number, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[number, number, boolean]",
        "dts2cpp_convert_tuple_0059 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0059 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0060', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline169.ts', `
        function pipeline169(p: [number, number, boolean]): [number, number, boolean] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[number, number, boolean]",
        "dts2cpp_convert_tuple_0060 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[number, number, boolean]",
        "dts2cpp_convert_tuple_0060 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline169.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline169') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0060 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0061', () => {
    try {
      const result = transCkey2Dtskey('[number, string, number]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0061 convert output non-empty");
      assert.strictEqual(result, "[number, string, number]", "dts2cpp_convert_tuple_0061 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0061 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0062', () => {
    try {
      const converted = transParseObj(doParseTs('sample170.ts', `
        function sample170(p0: [number, string, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample170');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[number, string, number]",
        "dts2cpp_convert_tuple_0062 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0062 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0063', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet170.ts', `
        function sampleRet170(): [number, string, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[number, string, number]",
        "dts2cpp_convert_tuple_0063 return convert output");
      const generated = generateFunctions(converted, 'sampleRet170.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet170') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0063 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0064', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass170.ts', `
        class SampleClass170 { field: [number, string, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[number, string, number]",
        "dts2cpp_convert_tuple_0064 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0064 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0065', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline170.ts', `
        function pipeline170(p: [number, string, number]): [number, string, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[number, string, number]",
        "dts2cpp_convert_tuple_0065 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[number, string, number]",
        "dts2cpp_convert_tuple_0065 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline170.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline170') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0065 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0066', () => {
    try {
      const result = transCkey2Dtskey('[number, string, string]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0066 convert output non-empty");
      assert.strictEqual(result, "[number, string, string]", "dts2cpp_convert_tuple_0066 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0066 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0067', () => {
    try {
      const converted = transParseObj(doParseTs('sample171.ts', `
        function sample171(p0: [number, string, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample171');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[number, string, string]",
        "dts2cpp_convert_tuple_0067 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0067 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0068', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet171.ts', `
        function sampleRet171(): [number, string, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[number, string, string]",
        "dts2cpp_convert_tuple_0068 return convert output");
      const generated = generateFunctions(converted, 'sampleRet171.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet171') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0068 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0069', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass171.ts', `
        class SampleClass171 { field: [number, string, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[number, string, string]",
        "dts2cpp_convert_tuple_0069 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0069 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0070', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline171.ts', `
        function pipeline171(p: [number, string, string]): [number, string, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[number, string, string]",
        "dts2cpp_convert_tuple_0070 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[number, string, string]",
        "dts2cpp_convert_tuple_0070 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline171.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline171') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0070 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0071', () => {
    try {
      const result = transCkey2Dtskey('[number, string, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0071 convert output non-empty");
      assert.strictEqual(result, "[number, string, boolean]", "dts2cpp_convert_tuple_0071 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0071 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0072', () => {
    try {
      const converted = transParseObj(doParseTs('sample172.ts', `
        function sample172(p0: [number, string, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample172');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[number, string, boolean]",
        "dts2cpp_convert_tuple_0072 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0072 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0073', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet172.ts', `
        function sampleRet172(): [number, string, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[number, string, boolean]",
        "dts2cpp_convert_tuple_0073 return convert output");
      const generated = generateFunctions(converted, 'sampleRet172.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet172') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0073 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0074', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass172.ts', `
        class SampleClass172 { field: [number, string, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[number, string, boolean]",
        "dts2cpp_convert_tuple_0074 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0074 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0075', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline172.ts', `
        function pipeline172(p: [number, string, boolean]): [number, string, boolean] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[number, string, boolean]",
        "dts2cpp_convert_tuple_0075 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[number, string, boolean]",
        "dts2cpp_convert_tuple_0075 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline172.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline172') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0075 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0076', () => {
    try {
      const result = transCkey2Dtskey('[number, boolean, number]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0076 convert output non-empty");
      assert.strictEqual(result, "[number, boolean, number]", "dts2cpp_convert_tuple_0076 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0076 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0077', () => {
    try {
      const converted = transParseObj(doParseTs('sample173.ts', `
        function sample173(p0: [number, boolean, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample173');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[number, boolean, number]",
        "dts2cpp_convert_tuple_0077 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0077 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0078', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet173.ts', `
        function sampleRet173(): [number, boolean, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[number, boolean, number]",
        "dts2cpp_convert_tuple_0078 return convert output");
      const generated = generateFunctions(converted, 'sampleRet173.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet173') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0078 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0079', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass173.ts', `
        class SampleClass173 { field: [number, boolean, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[number, boolean, number]",
        "dts2cpp_convert_tuple_0079 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0079 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0080', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline173.ts', `
        function pipeline173(p: [number, boolean, number]): [number, boolean, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[number, boolean, number]",
        "dts2cpp_convert_tuple_0080 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[number, boolean, number]",
        "dts2cpp_convert_tuple_0080 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline173.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline173') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0080 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0081', () => {
    try {
      const result = transCkey2Dtskey('[number, boolean, string]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0081 convert output non-empty");
      assert.strictEqual(result, "[number, boolean, string]", "dts2cpp_convert_tuple_0081 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0081 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0082', () => {
    try {
      const converted = transParseObj(doParseTs('sample174.ts', `
        function sample174(p0: [number, boolean, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample174');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[number, boolean, string]",
        "dts2cpp_convert_tuple_0082 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0082 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0083', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet174.ts', `
        function sampleRet174(): [number, boolean, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[number, boolean, string]",
        "dts2cpp_convert_tuple_0083 return convert output");
      const generated = generateFunctions(converted, 'sampleRet174.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet174') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0083 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0084', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass174.ts', `
        class SampleClass174 { field: [number, boolean, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[number, boolean, string]",
        "dts2cpp_convert_tuple_0084 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0084 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0085', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline174.ts', `
        function pipeline174(p: [number, boolean, string]): [number, boolean, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[number, boolean, string]",
        "dts2cpp_convert_tuple_0085 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[number, boolean, string]",
        "dts2cpp_convert_tuple_0085 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline174.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline174') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0085 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0086', () => {
    try {
      const result = transCkey2Dtskey('[number, boolean, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0086 convert output non-empty");
      assert.strictEqual(result, "[number, boolean, boolean]", "dts2cpp_convert_tuple_0086 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0086 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0087', () => {
    try {
      const converted = transParseObj(doParseTs('sample175.ts', `
        function sample175(p0: [number, boolean, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample175');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[number, boolean, boolean]",
        "dts2cpp_convert_tuple_0087 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0087 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0088', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet175.ts', `
        function sampleRet175(): [number, boolean, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[number, boolean, boolean]",
        "dts2cpp_convert_tuple_0088 return convert output");
      const generated = generateFunctions(converted, 'sampleRet175.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet175') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0088 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0089', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass175.ts', `
        class SampleClass175 { field: [number, boolean, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[number, boolean, boolean]",
        "dts2cpp_convert_tuple_0089 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0089 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0090', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline175.ts', `
        function pipeline175(p: [number, boolean, boolean]): [number, boolean, boolean] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[number, boolean, boolean]",
        "dts2cpp_convert_tuple_0090 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[number, boolean, boolean]",
        "dts2cpp_convert_tuple_0090 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline175.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline175') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0090 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0091', () => {
    try {
      const result = transCkey2Dtskey('[string, number, number]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0091 convert output non-empty");
      assert.strictEqual(result, "[string, number, number]", "dts2cpp_convert_tuple_0091 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0091 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0092', () => {
    try {
      const converted = transParseObj(doParseTs('sample176.ts', `
        function sample176(p0: [string, number, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample176');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[string, number, number]",
        "dts2cpp_convert_tuple_0092 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0092 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0093', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet176.ts', `
        function sampleRet176(): [string, number, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[string, number, number]",
        "dts2cpp_convert_tuple_0093 return convert output");
      const generated = generateFunctions(converted, 'sampleRet176.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet176') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0093 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0094', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass176.ts', `
        class SampleClass176 { field: [string, number, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[string, number, number]",
        "dts2cpp_convert_tuple_0094 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0094 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0095', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline176.ts', `
        function pipeline176(p: [string, number, number]): [string, number, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[string, number, number]",
        "dts2cpp_convert_tuple_0095 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[string, number, number]",
        "dts2cpp_convert_tuple_0095 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline176.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline176') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0095 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0096', () => {
    try {
      const result = transCkey2Dtskey('[string, number, string]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0096 convert output non-empty");
      assert.strictEqual(result, "[string, number, string]", "dts2cpp_convert_tuple_0096 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0096 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0097', () => {
    try {
      const converted = transParseObj(doParseTs('sample177.ts', `
        function sample177(p0: [string, number, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample177');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[string, number, string]",
        "dts2cpp_convert_tuple_0097 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0097 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0098', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet177.ts', `
        function sampleRet177(): [string, number, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[string, number, string]",
        "dts2cpp_convert_tuple_0098 return convert output");
      const generated = generateFunctions(converted, 'sampleRet177.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet177') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0098 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0099', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass177.ts', `
        class SampleClass177 { field: [string, number, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[string, number, string]",
        "dts2cpp_convert_tuple_0099 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0099 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0100', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline177.ts', `
        function pipeline177(p: [string, number, string]): [string, number, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[string, number, string]",
        "dts2cpp_convert_tuple_0100 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[string, number, string]",
        "dts2cpp_convert_tuple_0100 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline177.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline177') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0100 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0101', () => {
    try {
      const result = transCkey2Dtskey('[string, number, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0101 convert output non-empty");
      assert.strictEqual(result, "[string, number, boolean]", "dts2cpp_convert_tuple_0101 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0101 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0102', () => {
    try {
      const converted = transParseObj(doParseTs('sample178.ts', `
        function sample178(p0: [string, number, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample178');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[string, number, boolean]",
        "dts2cpp_convert_tuple_0102 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0102 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0103', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet178.ts', `
        function sampleRet178(): [string, number, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[string, number, boolean]",
        "dts2cpp_convert_tuple_0103 return convert output");
      const generated = generateFunctions(converted, 'sampleRet178.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet178') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0103 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0104', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass178.ts', `
        class SampleClass178 { field: [string, number, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[string, number, boolean]",
        "dts2cpp_convert_tuple_0104 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0104 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0105', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline178.ts', `
        function pipeline178(p: [string, number, boolean]): [string, number, boolean] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[string, number, boolean]",
        "dts2cpp_convert_tuple_0105 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[string, number, boolean]",
        "dts2cpp_convert_tuple_0105 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline178.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline178') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0105 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0106', () => {
    try {
      const result = transCkey2Dtskey('[string, string, number]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0106 convert output non-empty");
      assert.strictEqual(result, "[string, string, number]", "dts2cpp_convert_tuple_0106 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0106 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0107', () => {
    try {
      const converted = transParseObj(doParseTs('sample179.ts', `
        function sample179(p0: [string, string, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample179');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[string, string, number]",
        "dts2cpp_convert_tuple_0107 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0107 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0108', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet179.ts', `
        function sampleRet179(): [string, string, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[string, string, number]",
        "dts2cpp_convert_tuple_0108 return convert output");
      const generated = generateFunctions(converted, 'sampleRet179.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet179') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0108 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0109', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass179.ts', `
        class SampleClass179 { field: [string, string, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[string, string, number]",
        "dts2cpp_convert_tuple_0109 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0109 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0110', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline179.ts', `
        function pipeline179(p: [string, string, number]): [string, string, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[string, string, number]",
        "dts2cpp_convert_tuple_0110 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[string, string, number]",
        "dts2cpp_convert_tuple_0110 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline179.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline179') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0110 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0111', () => {
    try {
      const result = transCkey2Dtskey('[string, string, string]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0111 convert output non-empty");
      assert.strictEqual(result, "[string, string, string]", "dts2cpp_convert_tuple_0111 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0111 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0112', () => {
    try {
      const converted = transParseObj(doParseTs('sample180.ts', `
        function sample180(p0: [string, string, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample180');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[string, string, string]",
        "dts2cpp_convert_tuple_0112 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0112 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0113', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet180.ts', `
        function sampleRet180(): [string, string, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[string, string, string]",
        "dts2cpp_convert_tuple_0113 return convert output");
      const generated = generateFunctions(converted, 'sampleRet180.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet180') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0113 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0114', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass180.ts', `
        class SampleClass180 { field: [string, string, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[string, string, string]",
        "dts2cpp_convert_tuple_0114 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0114 execution error: ${String(err)}`);
    }
  });
});
