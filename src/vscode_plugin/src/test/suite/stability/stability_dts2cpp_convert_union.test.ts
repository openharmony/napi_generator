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

suite('Stability_DTS2CPP_CONVERT_UNION_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_CONVERT_UNION_Part01.');


  test('dts2cpp_convert_union_0001', () => {
    try {
      const result = transCkey2Dtskey('number | string');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_union_0001 convert output non-empty");
      assert.strictEqual(result, "number | string", "dts2cpp_convert_union_0001 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0001 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_union_0002', () => {
    try {
      const converted = transParseObj(doParseTs('sample275.ts', `
        function sample275(p0: number | string): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample275');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "number | string",
        "dts2cpp_convert_union_0002 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0002 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_union_0003', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet275.ts', `
        function sampleRet275(): number | string { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "number | string",
        "dts2cpp_convert_union_0003 return convert output");
      const generated = generateFunctions(converted, 'sampleRet275.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet275') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0003 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_union_0004', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass275.ts', `
        class SampleClass275 { field: number | string; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "number | string",
        "dts2cpp_convert_union_0004 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0004 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_union_0005', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline275.ts', `
        function pipeline275(p: number | string): number | string { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "number | string",
        "dts2cpp_convert_union_0005 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "number | string",
        "dts2cpp_convert_union_0005 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline275.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline275') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0005 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_union_0006', () => {
    try {
      const result = transCkey2Dtskey('number | string | void');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_union_0006 convert output non-empty");
      assert.strictEqual(result, "number | string | void", "dts2cpp_convert_union_0006 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0006 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_union_0007', () => {
    try {
      const converted = transParseObj(doParseTs('sample276.ts', `
        function sample276(p0: number | string | void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample276');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "number | string | void",
        "dts2cpp_convert_union_0007 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0007 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_union_0008', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet276.ts', `
        function sampleRet276(): number | string | void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "number | string | void",
        "dts2cpp_convert_union_0008 return convert output");
      const generated = generateFunctions(converted, 'sampleRet276.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet276') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0008 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_union_0009', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass276.ts', `
        class SampleClass276 { field: number | string | void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "number | string | void",
        "dts2cpp_convert_union_0009 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0009 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_union_0010', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline276.ts', `
        function pipeline276(p: number | string | void): number | string | void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "number | string | void",
        "dts2cpp_convert_union_0010 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "number | string | void",
        "dts2cpp_convert_union_0010 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline276.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline276') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0010 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_union_0011', () => {
    try {
      const result = transCkey2Dtskey('number | boolean');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_union_0011 convert output non-empty");
      assert.strictEqual(result, "number | boolean", "dts2cpp_convert_union_0011 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0011 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_union_0012', () => {
    try {
      const converted = transParseObj(doParseTs('sample277.ts', `
        function sample277(p0: number | boolean): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample277');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "number | boolean",
        "dts2cpp_convert_union_0012 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0012 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_union_0013', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet277.ts', `
        function sampleRet277(): number | boolean { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "number | boolean",
        "dts2cpp_convert_union_0013 return convert output");
      const generated = generateFunctions(converted, 'sampleRet277.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet277') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0013 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_union_0014', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass277.ts', `
        class SampleClass277 { field: number | boolean; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "number | boolean",
        "dts2cpp_convert_union_0014 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0014 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_union_0015', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline277.ts', `
        function pipeline277(p: number | boolean): number | boolean { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "number | boolean",
        "dts2cpp_convert_union_0015 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "number | boolean",
        "dts2cpp_convert_union_0015 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline277.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline277') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0015 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_union_0016', () => {
    try {
      const result = transCkey2Dtskey('number | boolean | void');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_union_0016 convert output non-empty");
      assert.strictEqual(result, "number | boolean | void", "dts2cpp_convert_union_0016 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0016 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_union_0017', () => {
    try {
      const converted = transParseObj(doParseTs('sample278.ts', `
        function sample278(p0: number | boolean | void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample278');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "number | boolean | void",
        "dts2cpp_convert_union_0017 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0017 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_union_0018', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet278.ts', `
        function sampleRet278(): number | boolean | void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "number | boolean | void",
        "dts2cpp_convert_union_0018 return convert output");
      const generated = generateFunctions(converted, 'sampleRet278.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet278') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0018 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_union_0019', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass278.ts', `
        class SampleClass278 { field: number | boolean | void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "number | boolean | void",
        "dts2cpp_convert_union_0019 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0019 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_union_0020', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline278.ts', `
        function pipeline278(p: number | boolean | void): number | boolean | void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "number | boolean | void",
        "dts2cpp_convert_union_0020 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "number | boolean | void",
        "dts2cpp_convert_union_0020 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline278.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline278') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0020 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_union_0021', () => {
    try {
      const result = transCkey2Dtskey('string | boolean');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_union_0021 convert output non-empty");
      assert.strictEqual(result, "string | boolean", "dts2cpp_convert_union_0021 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0021 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_union_0022', () => {
    try {
      const converted = transParseObj(doParseTs('sample279.ts', `
        function sample279(p0: string | boolean): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample279');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | boolean",
        "dts2cpp_convert_union_0022 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0022 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_union_0023', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet279.ts', `
        function sampleRet279(): string | boolean { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "string | boolean",
        "dts2cpp_convert_union_0023 return convert output");
      const generated = generateFunctions(converted, 'sampleRet279.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet279') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0023 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_union_0024', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass279.ts', `
        class SampleClass279 { field: string | boolean; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "string | boolean",
        "dts2cpp_convert_union_0024 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0024 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_union_0025', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline279.ts', `
        function pipeline279(p: string | boolean): string | boolean { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "string | boolean",
        "dts2cpp_convert_union_0025 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | boolean",
        "dts2cpp_convert_union_0025 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline279.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline279') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0025 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_union_0026', () => {
    try {
      const result = transCkey2Dtskey('string | boolean | void');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_union_0026 convert output non-empty");
      assert.strictEqual(result, "string | boolean | void", "dts2cpp_convert_union_0026 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0026 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_union_0027', () => {
    try {
      const converted = transParseObj(doParseTs('sample280.ts', `
        function sample280(p0: string | boolean | void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample280');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | boolean | void",
        "dts2cpp_convert_union_0027 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0027 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_union_0028', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet280.ts', `
        function sampleRet280(): string | boolean | void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "string | boolean | void",
        "dts2cpp_convert_union_0028 return convert output");
      const generated = generateFunctions(converted, 'sampleRet280.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet280') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0028 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_union_0029', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass280.ts', `
        class SampleClass280 { field: string | boolean | void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "string | boolean | void",
        "dts2cpp_convert_union_0029 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0029 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_union_0030', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline280.ts', `
        function pipeline280(p: string | boolean | void): string | boolean | void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "string | boolean | void",
        "dts2cpp_convert_union_0030 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | boolean | void",
        "dts2cpp_convert_union_0030 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline280.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline280') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_union_0030 execution error: ${String(err)}`);
    }
  });
});
