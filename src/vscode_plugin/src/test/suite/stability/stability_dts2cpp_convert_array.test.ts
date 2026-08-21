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

suite('Stability_DTS2CPP_CONVERT_ARRAY_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_CONVERT_ARRAY_Part01.');


  test('dts2cpp_convert_array_0001', () => {
    try {
      const result = transCkey2Dtskey('Array<number>');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_array_0001 convert output non-empty");
      assert.strictEqual(result, "std::vector<double>", "dts2cpp_convert_array_0001 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0001 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0002', () => {
    try {
      const converted = transParseObj(doParseTs('sample5.ts', `function sample5(p0: Array<number>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample5');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::vector<double>",
        "dts2cpp_convert_array_0002 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0002 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0003', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet5.ts', `
        function sampleRet5(): Array<number> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::vector<double>",
        "dts2cpp_convert_array_0003 return convert output");
      const generated = generateFunctions(converted, 'sampleRet5.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet5') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0003 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0004', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass5.ts', `
        class SampleClass5 { field: Array<number>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<double>",
        "dts2cpp_convert_array_0004 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0004 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0005', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline5.ts', `
        function pipeline5(p: Array<number>): Array<number> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::vector<double>",
        "dts2cpp_convert_array_0005 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::vector<double>",
        "dts2cpp_convert_array_0005 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline5.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline5') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0005 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0006', () => {
    try {
      const result = transCkey2Dtskey('number[]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_array_0006 convert output non-empty");
      assert.strictEqual(result, "std::vector<double>", "dts2cpp_convert_array_0006 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0006 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0007', () => {
    try {
      const converted = transParseObj(doParseTs('sample6.ts', `function sample6(p0: number[]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample6');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::vector<double>",
        "dts2cpp_convert_array_0007 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0007 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0008', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet6.ts', `
        function sampleRet6(): number[] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::vector<double>",
        "dts2cpp_convert_array_0008 return convert output");
      const generated = generateFunctions(converted, 'sampleRet6.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet6') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0008 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0009', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass6.ts', `
        class SampleClass6 { field: number[]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<double>",
        "dts2cpp_convert_array_0009 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0009 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0010', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline6.ts', `
        function pipeline6(p: number[]): number[] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::vector<double>",
        "dts2cpp_convert_array_0010 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::vector<double>",
        "dts2cpp_convert_array_0010 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline6.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline6') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0010 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0011', () => {
    try {
      const result = transCkey2Dtskey('Array<string>');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_array_0011 convert output non-empty");
      assert.strictEqual(result, "std::vector<std::string>", "dts2cpp_convert_array_0011 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0011 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0012', () => {
    try {
      const converted = transParseObj(doParseTs('sample7.ts', `function sample7(p0: Array<string>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample7');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::vector<std::string>",
        "dts2cpp_convert_array_0012 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0012 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0013', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet7.ts', `
        function sampleRet7(): Array<string> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::vector<std::string>",
        "dts2cpp_convert_array_0013 return convert output");
      const generated = generateFunctions(converted, 'sampleRet7.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet7') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0013 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0014', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass7.ts', `
        class SampleClass7 { field: Array<string>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<std::string>",
        "dts2cpp_convert_array_0014 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0014 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0015', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline7.ts', `
        function pipeline7(p: Array<string>): Array<string> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::vector<std::string>",
        "dts2cpp_convert_array_0015 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::vector<std::string>",
        "dts2cpp_convert_array_0015 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline7.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline7') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0015 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0016', () => {
    try {
      const result = transCkey2Dtskey('string[]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_array_0016 convert output non-empty");
      assert.strictEqual(result, "std::vector<std::string>", "dts2cpp_convert_array_0016 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0016 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0017', () => {
    try {
      const converted = transParseObj(doParseTs('sample8.ts', `function sample8(p0: string[]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample8');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::vector<std::string>",
        "dts2cpp_convert_array_0017 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0017 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0018', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet8.ts', `
        function sampleRet8(): string[] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::vector<std::string>",
        "dts2cpp_convert_array_0018 return convert output");
      const generated = generateFunctions(converted, 'sampleRet8.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet8') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0018 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0019', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass8.ts', `
        class SampleClass8 { field: string[]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<std::string>",
        "dts2cpp_convert_array_0019 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0019 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0020', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline8.ts', `
        function pipeline8(p: string[]): string[] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::vector<std::string>",
        "dts2cpp_convert_array_0020 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::vector<std::string>",
        "dts2cpp_convert_array_0020 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline8.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline8') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0020 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0021', () => {
    try {
      const result = transCkey2Dtskey('Array<boolean>');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_array_0021 convert output non-empty");
      assert.strictEqual(result, "std::vector<bool>", "dts2cpp_convert_array_0021 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0021 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0022', () => {
    try {
      const converted = transParseObj(doParseTs('sample9.ts', `
        function sample9(p0: Array<boolean>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample9');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::vector<bool>",
        "dts2cpp_convert_array_0022 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0022 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0023', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet9.ts', `
        function sampleRet9(): Array<boolean> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::vector<bool>",
        "dts2cpp_convert_array_0023 return convert output");
      const generated = generateFunctions(converted, 'sampleRet9.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet9') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0023 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0024', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass9.ts', `
        class SampleClass9 { field: Array<boolean>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<bool>",
        "dts2cpp_convert_array_0024 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0024 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0025', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline9.ts', `
        function pipeline9(p: Array<boolean>): Array<boolean> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::vector<bool>",
        "dts2cpp_convert_array_0025 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::vector<bool>",
        "dts2cpp_convert_array_0025 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline9.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline9') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0025 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0026', () => {
    try {
      const result = transCkey2Dtskey('boolean[]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_array_0026 convert output non-empty");
      assert.strictEqual(result, "std::vector<bool>", "dts2cpp_convert_array_0026 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0026 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0027', () => {
    try {
      const converted = transParseObj(doParseTs('sample10.ts', `function sample10(p0: boolean[]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample10');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::vector<bool>",
        "dts2cpp_convert_array_0027 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0027 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0028', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet10.ts', `
        function sampleRet10(): boolean[] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::vector<bool>",
        "dts2cpp_convert_array_0028 return convert output");
      const generated = generateFunctions(converted, 'sampleRet10.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet10') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0028 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0029', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass10.ts', `
        class SampleClass10 { field: boolean[]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<bool>",
        "dts2cpp_convert_array_0029 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0029 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0030', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline10.ts', `
        function pipeline10(p: boolean[]): boolean[] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::vector<bool>",
        "dts2cpp_convert_array_0030 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::vector<bool>",
        "dts2cpp_convert_array_0030 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline10.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline10') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0030 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0031', () => {
    try {
      const result = transCkey2Dtskey('any[]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_array_0031 convert output non-empty");
      assert.strictEqual(result, "any[]", "dts2cpp_convert_array_0031 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0031 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0032', () => {
    try {
      const converted = transParseObj(doParseTs('sample59.ts', `function sample59(p0: any[]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample59');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "any[]",
        "dts2cpp_convert_array_0032 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0032 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0033', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet59.ts', `
        function sampleRet59(): any[] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "any[]", "dts2cpp_convert_array_0033 return convert output");
      const generated = generateFunctions(converted, 'sampleRet59.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet59') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0033 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0034', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass59.ts', `
        class SampleClass59 { field: any[]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "any[]",
        "dts2cpp_convert_array_0034 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0034 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0035', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline59.ts', `function pipeline59(p: any[]): any[] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "any[]",
        "dts2cpp_convert_array_0035 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "any[]",
        "dts2cpp_convert_array_0035 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline59.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline59') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0035 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0036', () => {
    try {
      const result = transCkey2Dtskey('object[]');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_array_0036 convert output non-empty");
      assert.strictEqual(result, "object[]", "dts2cpp_convert_array_0036 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0036 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0037', () => {
    try {
      const converted = transParseObj(doParseTs('sample60.ts', `function sample60(p0: object[]): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample60');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "object[]",
        "dts2cpp_convert_array_0037 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0037 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0038', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet60.ts', `
        function sampleRet60(): object[] { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "object[]", "dts2cpp_convert_array_0038 return convert output");
      const generated = generateFunctions(converted, 'sampleRet60.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet60') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0038 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0039', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass60.ts', `
        class SampleClass60 { field: object[]; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "object[]",
        "dts2cpp_convert_array_0039 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0039 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0040', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline60.ts', `
        function pipeline60(p: object[]): object[] { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "object[]",
        "dts2cpp_convert_array_0040 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "object[]",
        "dts2cpp_convert_array_0040 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline60.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline60') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0040 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0041', () => {
    try {
      const result = transCkey2Dtskey('Array<any>');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_array_0041 convert output non-empty");
      assert.strictEqual(result, "Array<any>", "dts2cpp_convert_array_0041 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0041 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0042', () => {
    try {
      const converted = transParseObj(doParseTs('sample61.ts', `function sample61(p0: Array<any>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample61');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Array<any>",
        "dts2cpp_convert_array_0042 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0042 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0043', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet61.ts', `
        function sampleRet61(): Array<any> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Array<any>", "dts2cpp_convert_array_0043 return convert output");
      const generated = generateFunctions(converted, 'sampleRet61.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet61') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0043 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0044', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass61.ts', `
        class SampleClass61 { field: Array<any>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "Array<any>",
        "dts2cpp_convert_array_0044 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0044 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0045', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline61.ts', `
        function pipeline61(p: Array<any>): Array<any> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Array<any>",
        "dts2cpp_convert_array_0045 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Array<any>",
        "dts2cpp_convert_array_0045 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline61.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline61') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0045 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0046', () => {
    try {
      const result = transCkey2Dtskey('Array<object>');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_array_0046 convert output non-empty");
      assert.strictEqual(result, "Array<object>", "dts2cpp_convert_array_0046 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0046 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0047', () => {
    try {
      const converted = transParseObj(doParseTs('sample62.ts', `
        function sample62(p0: Array<object>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample62');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Array<object>",
        "dts2cpp_convert_array_0047 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0047 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0048', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet62.ts', `
        function sampleRet62(): Array<object> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Array<object>", "dts2cpp_convert_array_0048 return convert output");
      const generated = generateFunctions(converted, 'sampleRet62.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet62') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0048 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0049', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass62.ts', `
        class SampleClass62 { field: Array<object>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "Array<object>",
        "dts2cpp_convert_array_0049 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0049 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0050', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline62.ts', `
        function pipeline62(p: Array<object>): Array<object> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Array<object>",
        "dts2cpp_convert_array_0050 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Array<object>",
        "dts2cpp_convert_array_0050 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline62.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline62') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0050 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0051', () => {
    try {
      const result = transCkey2Dtskey('ReadonlyArray<any>');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_array_0051 convert output non-empty");
      assert.strictEqual(result, "ReadonlyArray<any>", "dts2cpp_convert_array_0051 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0051 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0052', () => {
    try {
      const converted = transParseObj(doParseTs('sample78.ts', `
        function sample78(p0: ReadonlyArray<any>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample78');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "ReadonlyArray<any>",
        "dts2cpp_convert_array_0052 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0052 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0053', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet78.ts', `
        function sampleRet78(): ReadonlyArray<any> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "ReadonlyArray<any>",
        "dts2cpp_convert_array_0053 return convert output");
      const generated = generateFunctions(converted, 'sampleRet78.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet78') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0053 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0054', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass78.ts', `
        class SampleClass78 { field: ReadonlyArray<any>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "ReadonlyArray<any>",
        "dts2cpp_convert_array_0054 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0054 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0055', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline78.ts', `
        function pipeline78(p: ReadonlyArray<any>): ReadonlyArray<any> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "ReadonlyArray<any>",
        "dts2cpp_convert_array_0055 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "ReadonlyArray<any>",
        "dts2cpp_convert_array_0055 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline78.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline78') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0055 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0056', () => {
    try {
      const result = transCkey2Dtskey('ReadonlyArray<object>');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_array_0056 convert output non-empty");
      assert.strictEqual(result, "ReadonlyArray<object>", "dts2cpp_convert_array_0056 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0056 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0057', () => {
    try {
      const converted = transParseObj(doParseTs('sample79.ts', `
        function sample79(p0: ReadonlyArray<object>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample79');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "ReadonlyArray<object>",
        "dts2cpp_convert_array_0057 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0057 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0058', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet79.ts', `
        function sampleRet79(): ReadonlyArray<object> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "ReadonlyArray<object>",
        "dts2cpp_convert_array_0058 return convert output");
      const generated = generateFunctions(converted, 'sampleRet79.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet79') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0058 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0059', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass79.ts', `
        class SampleClass79 { field: ReadonlyArray<object>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "ReadonlyArray<object>",
        "dts2cpp_convert_array_0059 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0059 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0060', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline79.ts', `
        function pipeline79(p: ReadonlyArray<object>): ReadonlyArray<object> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "ReadonlyArray<object>",
        "dts2cpp_convert_array_0060 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "ReadonlyArray<object>",
        "dts2cpp_convert_array_0060 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline79.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline79') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0060 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0061', () => {
    try {
      const result = transCkey2Dtskey('ReadonlyArray<number>');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_array_0061 convert output non-empty");
      assert.strictEqual(result, "ReadonlyArray<number>", "dts2cpp_convert_array_0061 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0061 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0062', () => {
    try {
      const converted = transParseObj(doParseTs('sample301.ts', `
        function sample301(p0: ReadonlyArray<number>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample301');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "ReadonlyArray<number>",
        "dts2cpp_convert_array_0062 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0062 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0063', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet301.ts', `
        function sampleRet301(): ReadonlyArray<number> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "ReadonlyArray<number>",
        "dts2cpp_convert_array_0063 return convert output");
      const generated = generateFunctions(converted, 'sampleRet301.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet301') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0063 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0064', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass301.ts', `
        class SampleClass301 { field: ReadonlyArray<number>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "ReadonlyArray<number>",
        "dts2cpp_convert_array_0064 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0064 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0065', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline301.ts', `
        function pipeline301(p: ReadonlyArray<number>): ReadonlyArray<number> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "ReadonlyArray<number>",
        "dts2cpp_convert_array_0065 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "ReadonlyArray<number>",
        "dts2cpp_convert_array_0065 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline301.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline301') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0065 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0066', () => {
    try {
      const result = transCkey2Dtskey('ReadonlyArray<string>');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_array_0066 convert output non-empty");
      assert.strictEqual(result, "ReadonlyArray<string>", "dts2cpp_convert_array_0066 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0066 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0067', () => {
    try {
      const converted = transParseObj(doParseTs('sample302.ts', `
        function sample302(p0: ReadonlyArray<string>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample302');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "ReadonlyArray<string>",
        "dts2cpp_convert_array_0067 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0067 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0068', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet302.ts', `
        function sampleRet302(): ReadonlyArray<string> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "ReadonlyArray<string>",
        "dts2cpp_convert_array_0068 return convert output");
      const generated = generateFunctions(converted, 'sampleRet302.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet302') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0068 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0069', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass302.ts', `
        class SampleClass302 { field: ReadonlyArray<string>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "ReadonlyArray<string>",
        "dts2cpp_convert_array_0069 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0069 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_array_0070', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline302.ts', `
        function pipeline302(p: ReadonlyArray<string>): ReadonlyArray<string> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "ReadonlyArray<string>",
        "dts2cpp_convert_array_0070 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "ReadonlyArray<string>",
        "dts2cpp_convert_array_0070 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline302.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline302') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_array_0070 execution error: ${String(err)}`);
    }
  });
});
