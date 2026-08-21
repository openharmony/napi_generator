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

suite('Stability_DTS2CPP_CONVERT_FUNC_Part03', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_CONVERT_FUNC_Part03.');


  test('dts2cpp_convert_func_0001', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet75.ts', `
        function sampleRet75(): (p0:any,p1:object)=>void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, std::any)>",
        "dts2cpp_convert_func_0001 return convert output");
      const generated = generateFunctions(converted, 'sampleRet75.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet75') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0001 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0002', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass75.ts', `
        class SampleClass75 { field: (p0:any,p1:object)=>void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, std::any)>",
        "dts2cpp_convert_func_0002 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0002 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0003', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline75.ts', `
        function pipeline75(p: (p0:any,p1:object)=>void): (p0:any,p1:object)=>void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, std::any)>",
        "dts2cpp_convert_func_0003 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, std::any)>",
        "dts2cpp_convert_func_0003 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline75.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline75') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0003 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0004', () => {
    try {
      const result = transCkey2Dtskey('(p0:any,p1:any)=>object');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0004 convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0004 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0004 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0005', () => {
    try {
      const converted = transParseObj(doParseTs('sample76.ts', `
        function sample76(p0: (p0:any,p1:any)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample76');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0005 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0005 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0006', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet76.ts', `
        function sampleRet76(): (p0:any,p1:any)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0006 return convert output");
      const generated = generateFunctions(converted, 'sampleRet76.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet76') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0006 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0007', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass76.ts', `
        class SampleClass76 { field: (p0:any,p1:any)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0007 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0007 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0008', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline76.ts', `
        function pipeline76(p: (p0:any,p1:any)=>object): (p0:any,p1:any)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0008 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0008 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline76.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline76') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0008 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0009', () => {
    try {
      const result = transCkey2Dtskey('(p0:object,p1:object)=>any');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0009 convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0009 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0009 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0010', () => {
    try {
      const converted = transParseObj(doParseTs('sample77.ts', `
        function sample77(p0: (p0:object,p1:object)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample77');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0010 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0010 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0011', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet77.ts', `
        function sampleRet77(): (p0:object,p1:object)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0011 return convert output");
      const generated = generateFunctions(converted, 'sampleRet77.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet77') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0011 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0012', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass77.ts', `
        class SampleClass77 { field: (p0:object,p1:object)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0012 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0012 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0013', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline77.ts', `
        function pipeline77(p: (p0:object,p1:object)=>any): (p0:object,p1:object)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0013 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0013 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline77.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline77') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0013 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0014', () => {
    try {
      const result = transCkey2Dtskey('Promise<any>');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0014 convert output non-empty");
      assert.strictEqual(result, "Promise<any>", "dts2cpp_convert_func_0014 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0014 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0015', () => {
    try {
      const converted = transParseObj(doParseTs('sample80.ts', `
        function sample80(p0: Promise<any>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample80');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Promise<any>",
        "dts2cpp_convert_func_0015 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0015 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0016', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet80.ts', `
        function sampleRet80(): Promise<any> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Promise<any>", "dts2cpp_convert_func_0016 return convert output");
      const generated = generateFunctions(converted, 'sampleRet80.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet80') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0016 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0017', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass80.ts', `
        class SampleClass80 { field: Promise<any>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<any>",
        "dts2cpp_convert_func_0017 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0017 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0018', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline80.ts', `
        function pipeline80(p: Promise<any>): Promise<any> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Promise<any>",
        "dts2cpp_convert_func_0018 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Promise<any>",
        "dts2cpp_convert_func_0018 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline80.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline80') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0018 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0019', () => {
    try {
      const result = transCkey2Dtskey('Promise<object>');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0019 convert output non-empty");
      assert.strictEqual(result, "Promise<object>", "dts2cpp_convert_func_0019 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0019 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0020', () => {
    try {
      const converted = transParseObj(doParseTs('sample81.ts', `
        function sample81(p0: Promise<object>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample81');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Promise<object>",
        "dts2cpp_convert_func_0020 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0020 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0021', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet81.ts', `
        function sampleRet81(): Promise<object> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Promise<object>",
        "dts2cpp_convert_func_0021 return convert output");
      const generated = generateFunctions(converted, 'sampleRet81.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet81') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0021 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0022', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass81.ts', `
        class SampleClass81 { field: Promise<object>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<object>",
        "dts2cpp_convert_func_0022 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0022 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0023', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline81.ts', `
        function pipeline81(p: Promise<object>): Promise<object> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Promise<object>",
        "dts2cpp_convert_func_0023 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Promise<object>",
        "dts2cpp_convert_func_0023 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline81.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline81') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0023 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0024', () => {
    try {
      const result = transCkey2Dtskey('Callback<Array<any>>');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0024 convert output non-empty");
      assert.strictEqual(result, "std::function<void(Array<any)>", "dts2cpp_convert_func_0024 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0024 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0025', () => {
    try {
      const converted = transParseObj(doParseTs('sample82.ts', `
        function sample82(p0: Callback<Array<any>>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample82');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(Array<any)>",
        "dts2cpp_convert_func_0025 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0025 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0026', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet82.ts', `
        function sampleRet82(): Callback<Array<any>> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(Array<any)>",
        "dts2cpp_convert_func_0026 return convert output");
      const generated = generateFunctions(converted, 'sampleRet82.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet82') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0026 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0027', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass82.ts', `
        class SampleClass82 { field: Callback<Array<any>>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(Array<any)>",
        "dts2cpp_convert_func_0027 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0027 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0028', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline82.ts', `
        function pipeline82(p: Callback<Array<any>>): Callback<Array<any>> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(Array<any)>",
        "dts2cpp_convert_func_0028 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(Array<any)>",
        "dts2cpp_convert_func_0028 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline82.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline82') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0028 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0029', () => {
    try {
      const result = transCkey2Dtskey('Callback<Array<object>>');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0029 convert output non-empty");
      assert.strictEqual(result, "std::function<void(Array<object)>", "dts2cpp_convert_func_0029 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0029 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0030', () => {
    try {
      const converted = transParseObj(doParseTs('sample83.ts', `
        function sample83(p0: Callback<Array<object>>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample83');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(Array<object)>",
        "dts2cpp_convert_func_0030 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0030 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0031', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet83.ts', `
        function sampleRet83(): Callback<Array<object>> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(Array<object)>",
        "dts2cpp_convert_func_0031 return convert output");
      const generated = generateFunctions(converted, 'sampleRet83.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet83') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0031 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0032', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass83.ts', `
        class SampleClass83 { field: Callback<Array<object>>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(Array<object)>",
        "dts2cpp_convert_func_0032 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0032 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0033', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline83.ts', `
        function pipeline83(p: Callback<Array<object>>): Callback<Array<object>> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(Array<object)>",
        "dts2cpp_convert_func_0033 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(Array<object)>",
        "dts2cpp_convert_func_0033 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline83.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline83') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0033 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0034', () => {
    try {
      const result = transCkey2Dtskey('(p0:object)=>any');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0034 convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::any)>", "dts2cpp_convert_func_0034 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0034 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0035', () => {
    try {
      const converted = transParseObj(doParseTs('sample84.ts', `
        function sample84(p0: (p0:object)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample84');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any)>",
        "dts2cpp_convert_func_0035 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0035 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0036', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet84.ts', `
        function sampleRet84(): (p0:object)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any)>",
        "dts2cpp_convert_func_0036 return convert output");
      const generated = generateFunctions(converted, 'sampleRet84.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet84') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0036 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0037', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass84.ts', `
        class SampleClass84 { field: (p0:object)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any)>",
        "dts2cpp_convert_func_0037 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0037 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0038', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline84.ts', `
        function pipeline84(p: (p0:object)=>any): (p0:object)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any)>",
        "dts2cpp_convert_func_0038 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any)>",
        "dts2cpp_convert_func_0038 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline84.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline84') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0038 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0039', () => {
    try {
      const result = transCkey2Dtskey('(p0:number)=>any');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0039 convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(double)>", "dts2cpp_convert_func_0039 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0039 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0040', () => {
    try {
      const converted = transParseObj(doParseTs('sample85.ts', `
        function sample85(p0: (p0:number)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample85');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double)>",
        "dts2cpp_convert_func_0040 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0040 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0041', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet85.ts', `
        function sampleRet85(): (p0:number)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double)>",
        "dts2cpp_convert_func_0041 return convert output");
      const generated = generateFunctions(converted, 'sampleRet85.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet85') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0041 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0042', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass85.ts', `
        class SampleClass85 { field: (p0:number)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(double)>",
        "dts2cpp_convert_func_0042 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0042 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0043', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline85.ts', `
        function pipeline85(p: (p0:number)=>any): (p0:number)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double)>",
        "dts2cpp_convert_func_0043 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double)>",
        "dts2cpp_convert_func_0043 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline85.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline85') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0043 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0044', () => {
    try {
      const result = transCkey2Dtskey('(p0:string)=>any');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0044 convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::string)>", "dts2cpp_convert_func_0044 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0044 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0045', () => {
    try {
      const converted = transParseObj(doParseTs('sample86.ts', `
        function sample86(p0: (p0:string)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample86');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string)>",
        "dts2cpp_convert_func_0045 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0045 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0046', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet86.ts', `
        function sampleRet86(): (p0:string)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string)>",
        "dts2cpp_convert_func_0046 return convert output");
      const generated = generateFunctions(converted, 'sampleRet86.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet86') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0046 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0047', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass86.ts', `
        class SampleClass86 { field: (p0:string)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string)>",
        "dts2cpp_convert_func_0047 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0047 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0048', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline86.ts', `
        function pipeline86(p: (p0:string)=>any): (p0:string)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string)>",
        "dts2cpp_convert_func_0048 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string)>",
        "dts2cpp_convert_func_0048 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline86.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline86') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0048 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0049', () => {
    try {
      const result = transCkey2Dtskey('(p0:boolean)=>any');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0049 convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(bool)>", "dts2cpp_convert_func_0049 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0049 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0050', () => {
    try {
      const converted = transParseObj(doParseTs('sample87.ts', `
        function sample87(p0: (p0:boolean)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample87');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool)>",
        "dts2cpp_convert_func_0050 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0050 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0051', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet87.ts', `
        function sampleRet87(): (p0:boolean)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool)>",
        "dts2cpp_convert_func_0051 return convert output");
      const generated = generateFunctions(converted, 'sampleRet87.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet87') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0051 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0052', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass87.ts', `
        class SampleClass87 { field: (p0:boolean)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool)>",
        "dts2cpp_convert_func_0052 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0052 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0053', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline87.ts', `
        function pipeline87(p: (p0:boolean)=>any): (p0:boolean)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool)>",
        "dts2cpp_convert_func_0053 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool)>",
        "dts2cpp_convert_func_0053 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline87.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline87') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0053 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0054', () => {
    try {
      const result = transCkey2Dtskey('(p0:any)=>object');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0054 convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::any)>", "dts2cpp_convert_func_0054 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0054 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0055', () => {
    try {
      const converted = transParseObj(doParseTs('sample88.ts', `
        function sample88(p0: (p0:any)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample88');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any)>",
        "dts2cpp_convert_func_0055 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0055 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0056', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet88.ts', `
        function sampleRet88(): (p0:any)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any)>",
        "dts2cpp_convert_func_0056 return convert output");
      const generated = generateFunctions(converted, 'sampleRet88.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet88') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0056 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0057', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass88.ts', `
        class SampleClass88 { field: (p0:any)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any)>",
        "dts2cpp_convert_func_0057 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0057 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0058', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline88.ts', `
        function pipeline88(p: (p0:any)=>object): (p0:any)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any)>",
        "dts2cpp_convert_func_0058 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any)>",
        "dts2cpp_convert_func_0058 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline88.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline88') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0058 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0059', () => {
    try {
      const result = transCkey2Dtskey('(p0:number)=>object');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0059 convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(double)>", "dts2cpp_convert_func_0059 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0059 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0060', () => {
    try {
      const converted = transParseObj(doParseTs('sample89.ts', `
        function sample89(p0: (p0:number)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample89');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double)>",
        "dts2cpp_convert_func_0060 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0060 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0061', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet89.ts', `
        function sampleRet89(): (p0:number)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double)>",
        "dts2cpp_convert_func_0061 return convert output");
      const generated = generateFunctions(converted, 'sampleRet89.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet89') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0061 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0062', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass89.ts', `
        class SampleClass89 { field: (p0:number)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(double)>",
        "dts2cpp_convert_func_0062 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0062 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0063', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline89.ts', `
        function pipeline89(p: (p0:number)=>object): (p0:number)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double)>",
        "dts2cpp_convert_func_0063 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double)>",
        "dts2cpp_convert_func_0063 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline89.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline89') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0063 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0064', () => {
    try {
      const result = transCkey2Dtskey('(p0:string)=>object');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0064 convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::string)>", "dts2cpp_convert_func_0064 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0064 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0065', () => {
    try {
      const converted = transParseObj(doParseTs('sample90.ts', `
        function sample90(p0: (p0:string)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample90');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string)>",
        "dts2cpp_convert_func_0065 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0065 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0066', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet90.ts', `
        function sampleRet90(): (p0:string)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string)>",
        "dts2cpp_convert_func_0066 return convert output");
      const generated = generateFunctions(converted, 'sampleRet90.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet90') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0066 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0067', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass90.ts', `
        class SampleClass90 { field: (p0:string)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string)>",
        "dts2cpp_convert_func_0067 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0067 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0068', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline90.ts', `
        function pipeline90(p: (p0:string)=>object): (p0:string)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string)>",
        "dts2cpp_convert_func_0068 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string)>",
        "dts2cpp_convert_func_0068 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline90.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline90') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0068 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0069', () => {
    try {
      const result = transCkey2Dtskey('(p0:boolean)=>object');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0069 convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(bool)>", "dts2cpp_convert_func_0069 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0069 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0070', () => {
    try {
      const converted = transParseObj(doParseTs('sample91.ts', `
        function sample91(p0: (p0:boolean)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample91');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool)>",
        "dts2cpp_convert_func_0070 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0070 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0071', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet91.ts', `
        function sampleRet91(): (p0:boolean)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool)>",
        "dts2cpp_convert_func_0071 return convert output");
      const generated = generateFunctions(converted, 'sampleRet91.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet91') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0071 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0072', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass91.ts', `
        class SampleClass91 { field: (p0:boolean)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool)>",
        "dts2cpp_convert_func_0072 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0072 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0073', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline91.ts', `
        function pipeline91(p: (p0:boolean)=>object): (p0:boolean)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool)>",
        "dts2cpp_convert_func_0073 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool)>",
        "dts2cpp_convert_func_0073 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline91.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline91') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0073 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0074', () => {
    try {
      const result = transCkey2Dtskey('(p0:any)=>void');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0074 convert output non-empty");
      assert.strictEqual(result, "std::function<void(std::any)>", "dts2cpp_convert_func_0074 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0074 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0075', () => {
    try {
      const converted = transParseObj(doParseTs('sample92.ts', `
        function sample92(p0: (p0:any)=>void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample92');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any)>",
        "dts2cpp_convert_func_0075 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0075 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0076', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet92.ts', `
        function sampleRet92(): (p0:any)=>void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any)>",
        "dts2cpp_convert_func_0076 return convert output");
      const generated = generateFunctions(converted, 'sampleRet92.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet92') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0076 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0077', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass92.ts', `
        class SampleClass92 { field: (p0:any)=>void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any)>",
        "dts2cpp_convert_func_0077 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0077 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0078', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline92.ts', `
        function pipeline92(p: (p0:any)=>void): (p0:any)=>void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any)>",
        "dts2cpp_convert_func_0078 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any)>",
        "dts2cpp_convert_func_0078 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline92.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline92') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0078 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0079', () => {
    try {
      const result = transCkey2Dtskey('(p0:object)=>void');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0079 convert output non-empty");
      assert.strictEqual(result, "std::function<void(std::any)>", "dts2cpp_convert_func_0079 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0079 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0080', () => {
    try {
      const converted = transParseObj(doParseTs('sample93.ts', `
        function sample93(p0: (p0:object)=>void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample93');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any)>",
        "dts2cpp_convert_func_0080 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0080 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0081', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet93.ts', `
        function sampleRet93(): (p0:object)=>void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any)>",
        "dts2cpp_convert_func_0081 return convert output");
      const generated = generateFunctions(converted, 'sampleRet93.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet93') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0081 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0082', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass93.ts', `
        class SampleClass93 { field: (p0:object)=>void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any)>",
        "dts2cpp_convert_func_0082 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0082 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0083', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline93.ts', `
        function pipeline93(p: (p0:object)=>void): (p0:object)=>void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any)>",
        "dts2cpp_convert_func_0083 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any)>",
        "dts2cpp_convert_func_0083 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline93.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline93') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0083 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0084', () => {
    try {
      const result = transCkey2Dtskey('(p0:any)=>number');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0084 convert output non-empty");
      assert.strictEqual(result, "std::function<double(std::any)>", "dts2cpp_convert_func_0084 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0084 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0085', () => {
    try {
      const converted = transParseObj(doParseTs('sample94.ts', `
        function sample94(p0: (p0:any)=>number): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample94');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(std::any)>",
        "dts2cpp_convert_func_0085 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0085 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0086', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet94.ts', `
        function sampleRet94(): (p0:any)=>number { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(std::any)>",
        "dts2cpp_convert_func_0086 return convert output");
      const generated = generateFunctions(converted, 'sampleRet94.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet94') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0086 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0087', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass94.ts', `
        class SampleClass94 { field: (p0:any)=>number; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<double(std::any)>",
        "dts2cpp_convert_func_0087 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0087 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0088', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline94.ts', `
        function pipeline94(p: (p0:any)=>number): (p0:any)=>number { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(std::any)>",
        "dts2cpp_convert_func_0088 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(std::any)>",
        "dts2cpp_convert_func_0088 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline94.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline94') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0088 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0089', () => {
    try {
      const result = transCkey2Dtskey('(p0:object)=>number');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0089 convert output non-empty");
      assert.strictEqual(result, "std::function<double(std::any)>", "dts2cpp_convert_func_0089 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0089 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0090', () => {
    try {
      const converted = transParseObj(doParseTs('sample95.ts', `
        function sample95(p0: (p0:object)=>number): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample95');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(std::any)>",
        "dts2cpp_convert_func_0090 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0090 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0091', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet95.ts', `
        function sampleRet95(): (p0:object)=>number { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(std::any)>",
        "dts2cpp_convert_func_0091 return convert output");
      const generated = generateFunctions(converted, 'sampleRet95.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet95') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0091 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0092', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass95.ts', `
        class SampleClass95 { field: (p0:object)=>number; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<double(std::any)>",
        "dts2cpp_convert_func_0092 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0092 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0093', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline95.ts', `
        function pipeline95(p: (p0:object)=>number): (p0:object)=>number { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(std::any)>",
        "dts2cpp_convert_func_0093 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(std::any)>",
        "dts2cpp_convert_func_0093 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline95.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline95') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0093 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0094', () => {
    try {
      const result = transCkey2Dtskey('(p0:any)=>string');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0094 convert output non-empty");
      assert.strictEqual(result, "std::function<std::string(std::any)>", "dts2cpp_convert_func_0094 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0094 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0095', () => {
    try {
      const converted = transParseObj(doParseTs('sample96.ts', `
        function sample96(p0: (p0:any)=>string): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample96');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(std::any)>",
        "dts2cpp_convert_func_0095 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0095 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0096', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet96.ts', `
        function sampleRet96(): (p0:any)=>string { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(std::any)>",
        "dts2cpp_convert_func_0096 return convert output");
      const generated = generateFunctions(converted, 'sampleRet96.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet96') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0096 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0097', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass96.ts', `
        class SampleClass96 { field: (p0:any)=>string; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::string(std::any)>",
        "dts2cpp_convert_func_0097 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0097 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0098', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline96.ts', `
        function pipeline96(p: (p0:any)=>string): (p0:any)=>string { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(std::any)>",
        "dts2cpp_convert_func_0098 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(std::any)>",
        "dts2cpp_convert_func_0098 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline96.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline96') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0098 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0099', () => {
    try {
      const result = transCkey2Dtskey('(p0:object)=>string');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0099 convert output non-empty");
      assert.strictEqual(result, "std::function<std::string(std::any)>", "dts2cpp_convert_func_0099 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0099 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0100', () => {
    try {
      const converted = transParseObj(doParseTs('sample97.ts', `
        function sample97(p0: (p0:object)=>string): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample97');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(std::any)>",
        "dts2cpp_convert_func_0100 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0100 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0101', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet97.ts', `
        function sampleRet97(): (p0:object)=>string { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(std::any)>",
        "dts2cpp_convert_func_0101 return convert output");
      const generated = generateFunctions(converted, 'sampleRet97.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet97') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0101 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0102', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass97.ts', `
        class SampleClass97 { field: (p0:object)=>string; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::string(std::any)>",
        "dts2cpp_convert_func_0102 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0102 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0103', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline97.ts', `
        function pipeline97(p: (p0:object)=>string): (p0:object)=>string { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(std::any)>",
        "dts2cpp_convert_func_0103 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(std::any)>",
        "dts2cpp_convert_func_0103 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline97.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline97') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0103 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0104', () => {
    try {
      const result = transCkey2Dtskey('(p0:any,p1:any)=>any');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0104 convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0104 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0104 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0105', () => {
    try {
      const converted = transParseObj(doParseTs('sample98.ts', `
        function sample98(p0: (p0:any,p1:any)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample98');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0105 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0105 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0106', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet98.ts', `
        function sampleRet98(): (p0:any,p1:any)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0106 return convert output");
      const generated = generateFunctions(converted, 'sampleRet98.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet98') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0106 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0107', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass98.ts', `
        class SampleClass98 { field: (p0:any,p1:any)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0107 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0107 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0108', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline98.ts', `
        function pipeline98(p: (p0:any,p1:any)=>any): (p0:any,p1:any)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0108 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0108 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline98.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline98') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0108 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0109', () => {
    try {
      const result = transCkey2Dtskey('(p0:any,p1:object)=>any');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0109 convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0109 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0109 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0110', () => {
    try {
      const converted = transParseObj(doParseTs('sample99.ts', `
        function sample99(p0: (p0:any,p1:object)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample99');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0110 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0110 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0111', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet99.ts', `
        function sampleRet99(): (p0:any,p1:object)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0111 return convert output");
      const generated = generateFunctions(converted, 'sampleRet99.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet99') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0111 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0112', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass99.ts', `
        class SampleClass99 { field: (p0:any,p1:object)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0112 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0112 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0113', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline99.ts', `
        function pipeline99(p: (p0:any,p1:object)=>any): (p0:any,p1:object)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0113 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0113 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline99.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline99') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0113 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0114', () => {
    try {
      const result = transCkey2Dtskey('(p0:any,p1:number)=>any');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0114 convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::any, double)>", "dts2cpp_convert_func_0114 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0114 execution error: ${String(err)}`);
    }
  });
});
