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

suite('Stability_DTS2CPP_CONVERT_TUPLE_Part02', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_CONVERT_TUPLE_Part02.');


  test('dts2cpp_convert_tuple_0001', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline180.ts', `
        function pipeline180(p: [string, string, string]): [string, string, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[string, string, string]",
        "dts2cpp_convert_tuple_0001 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[string, string, string]",
        "dts2cpp_convert_tuple_0001 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline180.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline180') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0001 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0002', () => {
    try {
      const result = transCkey2Dtskey('[string, string, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0002 convert output non-empty");
      assert.strictEqual(result, "[string, string, boolean]", "dts2cpp_convert_tuple_0002 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0002 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0003', () => {
    try {
      const converted = transParseObj(doParseTs('sample181.ts', `
        function sample181(p0: [string, string, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample181');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[string, string, boolean]",
        "dts2cpp_convert_tuple_0003 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0003 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0004', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet181.ts', `
        function sampleRet181(): [string, string, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[string, string, boolean]",
        "dts2cpp_convert_tuple_0004 return convert output");
      const generated = generateFunctions(converted, 'sampleRet181.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet181') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0004 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0005', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass181.ts', `
        class SampleClass181 { field: [string, string, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[string, string, boolean]",
        "dts2cpp_convert_tuple_0005 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0005 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0006', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline181.ts', `
        function pipeline181(p: [string, string, boolean]): [string, string, boolean] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[string, string, boolean]",
        "dts2cpp_convert_tuple_0006 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[string, string, boolean]",
        "dts2cpp_convert_tuple_0006 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline181.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline181') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0006 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0007', () => {
    try {
      const result = transCkey2Dtskey('[string, boolean, number]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0007 convert output non-empty");
      assert.strictEqual(result, "[string, boolean, number]", "dts2cpp_convert_tuple_0007 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0007 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0008', () => {
    try {
      const converted = transParseObj(doParseTs('sample182.ts', `
        function sample182(p0: [string, boolean, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample182');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[string, boolean, number]",
        "dts2cpp_convert_tuple_0008 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0008 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0009', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet182.ts', `
        function sampleRet182(): [string, boolean, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[string, boolean, number]",
        "dts2cpp_convert_tuple_0009 return convert output");
      const generated = generateFunctions(converted, 'sampleRet182.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet182') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0009 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0010', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass182.ts', `
        class SampleClass182 { field: [string, boolean, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[string, boolean, number]",
        "dts2cpp_convert_tuple_0010 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0010 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0011', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline182.ts', `
        function pipeline182(p: [string, boolean, number]): [string, boolean, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[string, boolean, number]",
        "dts2cpp_convert_tuple_0011 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[string, boolean, number]",
        "dts2cpp_convert_tuple_0011 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline182.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline182') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0011 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0012', () => {
    try {
      const result = transCkey2Dtskey('[string, boolean, string]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0012 convert output non-empty");
      assert.strictEqual(result, "[string, boolean, string]", "dts2cpp_convert_tuple_0012 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0012 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0013', () => {
    try {
      const converted = transParseObj(doParseTs('sample183.ts', `
        function sample183(p0: [string, boolean, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample183');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[string, boolean, string]",
        "dts2cpp_convert_tuple_0013 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0013 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0014', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet183.ts', `
        function sampleRet183(): [string, boolean, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[string, boolean, string]",
        "dts2cpp_convert_tuple_0014 return convert output");
      const generated = generateFunctions(converted, 'sampleRet183.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet183') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0014 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0015', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass183.ts', `
        class SampleClass183 { field: [string, boolean, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[string, boolean, string]",
        "dts2cpp_convert_tuple_0015 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0015 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0016', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline183.ts', `
        function pipeline183(p: [string, boolean, string]): [string, boolean, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[string, boolean, string]",
        "dts2cpp_convert_tuple_0016 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[string, boolean, string]",
        "dts2cpp_convert_tuple_0016 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline183.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline183') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0016 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0017', () => {
    try {
      const result = transCkey2Dtskey('[string, boolean, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0017 convert output non-empty");
      assert.strictEqual(result, "[string, boolean, boolean]", "dts2cpp_convert_tuple_0017 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0017 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0018', () => {
    try {
      const converted = transParseObj(doParseTs('sample184.ts', `
        function sample184(p0: [string, boolean, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample184');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[string, boolean, boolean]",
        "dts2cpp_convert_tuple_0018 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0018 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0019', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet184.ts', `
        function sampleRet184(): [string, boolean, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[string, boolean, boolean]",
        "dts2cpp_convert_tuple_0019 return convert output");
      const generated = generateFunctions(converted, 'sampleRet184.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet184') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0019 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0020', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass184.ts', `
        class SampleClass184 { field: [string, boolean, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[string, boolean, boolean]",
        "dts2cpp_convert_tuple_0020 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0020 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0021', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline184.ts', `
        function pipeline184(p: [string, boolean, boolean]): [string, boolean, boolean] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[string, boolean, boolean]",
        "dts2cpp_convert_tuple_0021 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[string, boolean, boolean]",
        "dts2cpp_convert_tuple_0021 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline184.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline184') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0021 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0022', () => {
    try {
      const result = transCkey2Dtskey('[boolean, number, number]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0022 convert output non-empty");
      assert.strictEqual(result, "[boolean, number, number]", "dts2cpp_convert_tuple_0022 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0022 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0023', () => {
    try {
      const converted = transParseObj(doParseTs('sample185.ts', `
        function sample185(p0: [boolean, number, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample185');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[boolean, number, number]",
        "dts2cpp_convert_tuple_0023 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0023 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0024', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet185.ts', `
        function sampleRet185(): [boolean, number, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[boolean, number, number]",
        "dts2cpp_convert_tuple_0024 return convert output");
      const generated = generateFunctions(converted, 'sampleRet185.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet185') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0024 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0025', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass185.ts', `
        class SampleClass185 { field: [boolean, number, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[boolean, number, number]",
        "dts2cpp_convert_tuple_0025 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0025 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0026', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline185.ts', `
        function pipeline185(p: [boolean, number, number]): [boolean, number, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[boolean, number, number]",
        "dts2cpp_convert_tuple_0026 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[boolean, number, number]",
        "dts2cpp_convert_tuple_0026 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline185.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline185') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0026 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0027', () => {
    try {
      const result = transCkey2Dtskey('[boolean, number, string]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0027 convert output non-empty");
      assert.strictEqual(result, "[boolean, number, string]", "dts2cpp_convert_tuple_0027 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0027 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0028', () => {
    try {
      const converted = transParseObj(doParseTs('sample186.ts', `
        function sample186(p0: [boolean, number, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample186');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[boolean, number, string]",
        "dts2cpp_convert_tuple_0028 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0028 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0029', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet186.ts', `
        function sampleRet186(): [boolean, number, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[boolean, number, string]",
        "dts2cpp_convert_tuple_0029 return convert output");
      const generated = generateFunctions(converted, 'sampleRet186.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet186') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0029 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0030', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass186.ts', `
        class SampleClass186 { field: [boolean, number, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[boolean, number, string]",
        "dts2cpp_convert_tuple_0030 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0030 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0031', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline186.ts', `
        function pipeline186(p: [boolean, number, string]): [boolean, number, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[boolean, number, string]",
        "dts2cpp_convert_tuple_0031 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[boolean, number, string]",
        "dts2cpp_convert_tuple_0031 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline186.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline186') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0031 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0032', () => {
    try {
      const result = transCkey2Dtskey('[boolean, number, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0032 convert output non-empty");
      assert.strictEqual(result, "[boolean, number, boolean]", "dts2cpp_convert_tuple_0032 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0032 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0033', () => {
    try {
      const converted = transParseObj(doParseTs('sample187.ts', `
        function sample187(p0: [boolean, number, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample187');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[boolean, number, boolean]",
        "dts2cpp_convert_tuple_0033 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0033 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0034', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet187.ts', `
        function sampleRet187(): [boolean, number, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[boolean, number, boolean]",
        "dts2cpp_convert_tuple_0034 return convert output");
      const generated = generateFunctions(converted, 'sampleRet187.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet187') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0034 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0035', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass187.ts', `
        class SampleClass187 { field: [boolean, number, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[boolean, number, boolean]",
        "dts2cpp_convert_tuple_0035 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0035 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0036', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline187.ts', `
        function pipeline187(p: [boolean, number, boolean]): [boolean, number, boolean] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[boolean, number, boolean]",
        "dts2cpp_convert_tuple_0036 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[boolean, number, boolean]",
        "dts2cpp_convert_tuple_0036 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline187.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline187') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0036 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0037', () => {
    try {
      const result = transCkey2Dtskey('[boolean, string, number]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0037 convert output non-empty");
      assert.strictEqual(result, "[boolean, string, number]", "dts2cpp_convert_tuple_0037 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0037 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0038', () => {
    try {
      const converted = transParseObj(doParseTs('sample188.ts', `
        function sample188(p0: [boolean, string, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample188');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[boolean, string, number]",
        "dts2cpp_convert_tuple_0038 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0038 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0039', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet188.ts', `
        function sampleRet188(): [boolean, string, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[boolean, string, number]",
        "dts2cpp_convert_tuple_0039 return convert output");
      const generated = generateFunctions(converted, 'sampleRet188.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet188') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0039 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0040', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass188.ts', `
        class SampleClass188 { field: [boolean, string, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[boolean, string, number]",
        "dts2cpp_convert_tuple_0040 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0040 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0041', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline188.ts', `
        function pipeline188(p: [boolean, string, number]): [boolean, string, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[boolean, string, number]",
        "dts2cpp_convert_tuple_0041 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[boolean, string, number]",
        "dts2cpp_convert_tuple_0041 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline188.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline188') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0041 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0042', () => {
    try {
      const result = transCkey2Dtskey('[boolean, string, string]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0042 convert output non-empty");
      assert.strictEqual(result, "[boolean, string, string]", "dts2cpp_convert_tuple_0042 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0042 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0043', () => {
    try {
      const converted = transParseObj(doParseTs('sample189.ts', `
        function sample189(p0: [boolean, string, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample189');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[boolean, string, string]",
        "dts2cpp_convert_tuple_0043 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0043 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0044', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet189.ts', `
        function sampleRet189(): [boolean, string, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[boolean, string, string]",
        "dts2cpp_convert_tuple_0044 return convert output");
      const generated = generateFunctions(converted, 'sampleRet189.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet189') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0044 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0045', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass189.ts', `
        class SampleClass189 { field: [boolean, string, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[boolean, string, string]",
        "dts2cpp_convert_tuple_0045 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0045 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0046', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline189.ts', `
        function pipeline189(p: [boolean, string, string]): [boolean, string, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[boolean, string, string]",
        "dts2cpp_convert_tuple_0046 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[boolean, string, string]",
        "dts2cpp_convert_tuple_0046 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline189.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline189') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0046 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0047', () => {
    try {
      const result = transCkey2Dtskey('[boolean, string, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0047 convert output non-empty");
      assert.strictEqual(result, "[boolean, string, boolean]", "dts2cpp_convert_tuple_0047 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0047 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0048', () => {
    try {
      const converted = transParseObj(doParseTs('sample190.ts', `
        function sample190(p0: [boolean, string, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample190');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[boolean, string, boolean]",
        "dts2cpp_convert_tuple_0048 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0048 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0049', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet190.ts', `
        function sampleRet190(): [boolean, string, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[boolean, string, boolean]",
        "dts2cpp_convert_tuple_0049 return convert output");
      const generated = generateFunctions(converted, 'sampleRet190.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet190') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0049 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0050', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass190.ts', `
        class SampleClass190 { field: [boolean, string, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[boolean, string, boolean]",
        "dts2cpp_convert_tuple_0050 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0050 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0051', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline190.ts', `
        function pipeline190(p: [boolean, string, boolean]): [boolean, string, boolean] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[boolean, string, boolean]",
        "dts2cpp_convert_tuple_0051 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[boolean, string, boolean]",
        "dts2cpp_convert_tuple_0051 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline190.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline190') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0051 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0052', () => {
    try {
      const result = transCkey2Dtskey('[boolean, boolean, number]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0052 convert output non-empty");
      assert.strictEqual(result, "[boolean, boolean, number]", "dts2cpp_convert_tuple_0052 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0052 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0053', () => {
    try {
      const converted = transParseObj(doParseTs('sample191.ts', `
        function sample191(p0: [boolean, boolean, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample191');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[boolean, boolean, number]",
        "dts2cpp_convert_tuple_0053 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0053 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0054', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet191.ts', `
        function sampleRet191(): [boolean, boolean, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[boolean, boolean, number]",
        "dts2cpp_convert_tuple_0054 return convert output");
      const generated = generateFunctions(converted, 'sampleRet191.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet191') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0054 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0055', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass191.ts', `
        class SampleClass191 { field: [boolean, boolean, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[boolean, boolean, number]",
        "dts2cpp_convert_tuple_0055 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0055 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0056', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline191.ts', `
        function pipeline191(p: [boolean, boolean, number]): [boolean, boolean, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[boolean, boolean, number]",
        "dts2cpp_convert_tuple_0056 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[boolean, boolean, number]",
        "dts2cpp_convert_tuple_0056 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline191.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline191') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0056 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0057', () => {
    try {
      const result = transCkey2Dtskey('[boolean, boolean, string]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0057 convert output non-empty");
      assert.strictEqual(result, "[boolean, boolean, string]", "dts2cpp_convert_tuple_0057 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0057 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0058', () => {
    try {
      const converted = transParseObj(doParseTs('sample192.ts', `
        function sample192(p0: [boolean, boolean, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample192');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[boolean, boolean, string]",
        "dts2cpp_convert_tuple_0058 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0058 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0059', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet192.ts', `
        function sampleRet192(): [boolean, boolean, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[boolean, boolean, string]",
        "dts2cpp_convert_tuple_0059 return convert output");
      const generated = generateFunctions(converted, 'sampleRet192.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet192') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0059 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0060', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass192.ts', `
        class SampleClass192 { field: [boolean, boolean, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[boolean, boolean, string]",
        "dts2cpp_convert_tuple_0060 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0060 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0061', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline192.ts', `
        function pipeline192(p: [boolean, boolean, string]): [boolean, boolean, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[boolean, boolean, string]",
        "dts2cpp_convert_tuple_0061 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[boolean, boolean, string]",
        "dts2cpp_convert_tuple_0061 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline192.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline192') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0061 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0062', () => {
    try {
      const result = transCkey2Dtskey('[boolean, boolean, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0062 convert output non-empty");
      assert.strictEqual(result, "[boolean, boolean, boolean]", "dts2cpp_convert_tuple_0062 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0062 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0063', () => {
    try {
      const converted = transParseObj(doParseTs('sample193.ts', `
        function sample193(p0: [boolean, boolean, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample193');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[boolean, boolean, boolean]",
        "dts2cpp_convert_tuple_0063 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0063 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0064', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet193.ts', `
        function sampleRet193(): [boolean, boolean, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[boolean, boolean, boolean]",
        "dts2cpp_convert_tuple_0064 return convert output");
      const generated = generateFunctions(converted, 'sampleRet193.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet193') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0064 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0065', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass193.ts', `
        class SampleClass193 { field: [boolean, boolean, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[boolean, boolean, boolean]",
        "dts2cpp_convert_tuple_0065 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0065 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0066', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline193.ts', `
        function pipeline193(p: [boolean, boolean, boolean]): [boolean, boolean, boolean] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[boolean, boolean, boolean]",
        "dts2cpp_convert_tuple_0066 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[boolean, boolean, boolean]",
        "dts2cpp_convert_tuple_0066 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline193.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline193') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0066 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0067', () => {
    try {
      const result = transCkey2Dtskey('[number, number, number, number]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0067 convert output non-empty");
      assert.strictEqual(result, "[number, number, number, number]", "dts2cpp_convert_tuple_0067 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0067 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0068', () => {
    try {
      const converted = transParseObj(doParseTs('sample194.ts', `
        function sample194(p0: [number, number, number, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample194');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[number, number, number, number]",
        "dts2cpp_convert_tuple_0068 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0068 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0069', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet194.ts', `
        function sampleRet194(): [number, number, number, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[number, number, number, number]",
        "dts2cpp_convert_tuple_0069 return convert output");
      const generated = generateFunctions(converted, 'sampleRet194.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet194') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0069 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0070', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass194.ts', `
        class SampleClass194 { field: [number, number, number, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[number, number, number, number]",
        "dts2cpp_convert_tuple_0070 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0070 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0071', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline194.ts', `
        function pipeline194(p: [number, number, number, number]): [number, number, number, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[number, number, number, number]",
        "dts2cpp_convert_tuple_0071 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[number, number, number, number]",
        "dts2cpp_convert_tuple_0071 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline194.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline194') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0071 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0072', () => {
    try {
      const result = transCkey2Dtskey('[number, number, number, string]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0072 convert output non-empty");
      assert.strictEqual(result, "[number, number, number, string]", "dts2cpp_convert_tuple_0072 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0072 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0073', () => {
    try {
      const converted = transParseObj(doParseTs('sample195.ts', `
        function sample195(p0: [number, number, number, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample195');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[number, number, number, string]",
        "dts2cpp_convert_tuple_0073 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0073 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0074', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet195.ts', `
        function sampleRet195(): [number, number, number, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[number, number, number, string]",
        "dts2cpp_convert_tuple_0074 return convert output");
      const generated = generateFunctions(converted, 'sampleRet195.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet195') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0074 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0075', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass195.ts', `
        class SampleClass195 { field: [number, number, number, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[number, number, number, string]",
        "dts2cpp_convert_tuple_0075 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0075 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0076', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline195.ts', `
        function pipeline195(p: [number, number, number, string]): [number, number, number, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[number, number, number, string]",
        "dts2cpp_convert_tuple_0076 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[number, number, number, string]",
        "dts2cpp_convert_tuple_0076 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline195.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline195') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0076 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0077', () => {
    try {
      const result = transCkey2Dtskey('[number, number, number, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0077 convert output non-empty");
      assert.strictEqual(result, "[number, number, number, boolean]", "dts2cpp_convert_tuple_0077 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0077 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0078', () => {
    try {
      const converted = transParseObj(doParseTs('sample196.ts', `
        function sample196(p0: [number, number, number, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample196');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[number, number, number, boolean]",
        "dts2cpp_convert_tuple_0078 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0078 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0079', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet196.ts', `
        function sampleRet196(): [number, number, number, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[number, number, number, boolean]",
        "dts2cpp_convert_tuple_0079 return convert output");
      const generated = generateFunctions(converted, 'sampleRet196.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet196') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0079 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0080', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass196.ts', `
        class SampleClass196 { field: [number, number, number, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[number, number, number, boolean]",
        "dts2cpp_convert_tuple_0080 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0080 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0081', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline196.ts', `
        function pipeline196(p: [number, number, number, boolean]): [number, number, number, boolean] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[number, number, number, boolean]",
        "dts2cpp_convert_tuple_0081 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[number, number, number, boolean]",
        "dts2cpp_convert_tuple_0081 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline196.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline196') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0081 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0082', () => {
    try {
      const result = transCkey2Dtskey('[number, number, string, number]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0082 convert output non-empty");
      assert.strictEqual(result, "[number, number, string, number]", "dts2cpp_convert_tuple_0082 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0082 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0083', () => {
    try {
      const converted = transParseObj(doParseTs('sample197.ts', `
        function sample197(p0: [number, number, string, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample197');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[number, number, string, number]",
        "dts2cpp_convert_tuple_0083 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0083 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0084', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet197.ts', `
        function sampleRet197(): [number, number, string, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[number, number, string, number]",
        "dts2cpp_convert_tuple_0084 return convert output");
      const generated = generateFunctions(converted, 'sampleRet197.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet197') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0084 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0085', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass197.ts', `
        class SampleClass197 { field: [number, number, string, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[number, number, string, number]",
        "dts2cpp_convert_tuple_0085 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0085 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0086', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline197.ts', `
        function pipeline197(p: [number, number, string, number]): [number, number, string, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[number, number, string, number]",
        "dts2cpp_convert_tuple_0086 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[number, number, string, number]",
        "dts2cpp_convert_tuple_0086 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline197.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline197') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0086 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0087', () => {
    try {
      const result = transCkey2Dtskey('[number, number, string, string]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0087 convert output non-empty");
      assert.strictEqual(result, "[number, number, string, string]", "dts2cpp_convert_tuple_0087 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0087 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0088', () => {
    try {
      const converted = transParseObj(doParseTs('sample198.ts', `
        function sample198(p0: [number, number, string, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample198');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[number, number, string, string]",
        "dts2cpp_convert_tuple_0088 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0088 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0089', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet198.ts', `
        function sampleRet198(): [number, number, string, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[number, number, string, string]",
        "dts2cpp_convert_tuple_0089 return convert output");
      const generated = generateFunctions(converted, 'sampleRet198.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet198') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0089 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0090', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass198.ts', `
        class SampleClass198 { field: [number, number, string, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[number, number, string, string]",
        "dts2cpp_convert_tuple_0090 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0090 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0091', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline198.ts', `
        function pipeline198(p: [number, number, string, string]): [number, number, string, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[number, number, string, string]",
        "dts2cpp_convert_tuple_0091 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[number, number, string, string]",
        "dts2cpp_convert_tuple_0091 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline198.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline198') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0091 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0092', () => {
    try {
      const result = transCkey2Dtskey('[number, number, string, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0092 convert output non-empty");
      assert.strictEqual(result, "[number, number, string, boolean]", "dts2cpp_convert_tuple_0092 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0092 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0093', () => {
    try {
      const converted = transParseObj(doParseTs('sample199.ts', `
        function sample199(p0: [number, number, string, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample199');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[number, number, string, boolean]",
        "dts2cpp_convert_tuple_0093 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0093 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0094', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet199.ts', `
        function sampleRet199(): [number, number, string, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[number, number, string, boolean]",
        "dts2cpp_convert_tuple_0094 return convert output");
      const generated = generateFunctions(converted, 'sampleRet199.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet199') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0094 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0095', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass199.ts', `
        class SampleClass199 { field: [number, number, string, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[number, number, string, boolean]",
        "dts2cpp_convert_tuple_0095 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0095 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0096', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline199.ts', `
        function pipeline199(p: [number, number, string, boolean]): [number, number, string, boolean] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[number, number, string, boolean]",
        "dts2cpp_convert_tuple_0096 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[number, number, string, boolean]",
        "dts2cpp_convert_tuple_0096 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline199.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline199') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0096 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0097', () => {
    try {
      const result = transCkey2Dtskey('[number, number, boolean, number]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0097 convert output non-empty");
      assert.strictEqual(result, "[number, number, boolean, number]", "dts2cpp_convert_tuple_0097 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0097 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0098', () => {
    try {
      const converted = transParseObj(doParseTs('sample200.ts', `
        function sample200(p0: [number, number, boolean, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample200');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[number, number, boolean, number]",
        "dts2cpp_convert_tuple_0098 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0098 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0099', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet200.ts', `
        function sampleRet200(): [number, number, boolean, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[number, number, boolean, number]",
        "dts2cpp_convert_tuple_0099 return convert output");
      const generated = generateFunctions(converted, 'sampleRet200.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet200') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0099 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0100', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass200.ts', `
        class SampleClass200 { field: [number, number, boolean, number]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[number, number, boolean, number]",
        "dts2cpp_convert_tuple_0100 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0100 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0101', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline200.ts', `
        function pipeline200(p: [number, number, boolean, number]): [number, number, boolean, number] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[number, number, boolean, number]",
        "dts2cpp_convert_tuple_0101 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[number, number, boolean, number]",
        "dts2cpp_convert_tuple_0101 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline200.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline200') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0101 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0102', () => {
    try {
      const result = transCkey2Dtskey('[number, number, boolean, string]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0102 convert output non-empty");
      assert.strictEqual(result, "[number, number, boolean, string]", "dts2cpp_convert_tuple_0102 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0102 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0103', () => {
    try {
      const converted = transParseObj(doParseTs('sample201.ts', `
        function sample201(p0: [number, number, boolean, string]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample201');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[number, number, boolean, string]",
        "dts2cpp_convert_tuple_0103 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0103 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0104', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet201.ts', `
        function sampleRet201(): [number, number, boolean, string] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[number, number, boolean, string]",
        "dts2cpp_convert_tuple_0104 return convert output");
      const generated = generateFunctions(converted, 'sampleRet201.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet201') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0104 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0105', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass201.ts', `
        class SampleClass201 { field: [number, number, boolean, string]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[number, number, boolean, string]",
        "dts2cpp_convert_tuple_0105 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0105 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0106', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline201.ts', `
        function pipeline201(p: [number, number, boolean, string]): [number, number, boolean, string] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[number, number, boolean, string]",
        "dts2cpp_convert_tuple_0106 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[number, number, boolean, string]",
        "dts2cpp_convert_tuple_0106 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline201.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline201') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0106 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0107', () => {
    try {
      const result = transCkey2Dtskey('[number, number, boolean, boolean]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0107 convert output non-empty");
      assert.strictEqual(result, "[number, number, boolean, boolean]", "dts2cpp_convert_tuple_0107 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0107 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0108', () => {
    try {
      const converted = transParseObj(doParseTs('sample202.ts', `
        function sample202(p0: [number, number, boolean, boolean]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample202');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[number, number, boolean, boolean]",
        "dts2cpp_convert_tuple_0108 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0108 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0109', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet202.ts', `
        function sampleRet202(): [number, number, boolean, boolean] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[number, number, boolean, boolean]",
        "dts2cpp_convert_tuple_0109 return convert output");
      const generated = generateFunctions(converted, 'sampleRet202.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet202') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0109 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0110', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass202.ts', `
        class SampleClass202 { field: [number, number, boolean, boolean]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "[number, number, boolean, boolean]",
        "dts2cpp_convert_tuple_0110 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0110 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0111', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline202.ts', `
        function pipeline202(p: [number, number, boolean, boolean]): [number, number, boolean, boolean] { return p;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[number, number, boolean, boolean]",
        "dts2cpp_convert_tuple_0111 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[number, number, boolean, boolean]",
        "dts2cpp_convert_tuple_0111 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline202.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline202') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0111 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0112', () => {
    try {
      const result = transCkey2Dtskey('[number, string, number, number]');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_tuple_0112 convert output non-empty");
      assert.strictEqual(result, "[number, string, number, number]", "dts2cpp_convert_tuple_0112 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0112 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0113', () => {
    try {
      const converted = transParseObj(doParseTs('sample203.ts', `
        function sample203(p0: [number, string, number, number]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample203');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "[number, string, number, number]",
        "dts2cpp_convert_tuple_0113 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0113 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_tuple_0114', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet203.ts', `
        function sampleRet203(): [number, string, number, number] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "[number, string, number, number]",
        "dts2cpp_convert_tuple_0114 return convert output");
      const generated = generateFunctions(converted, 'sampleRet203.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet203') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_tuple_0114 execution error: ${String(err)}`);
    }
  });
});
