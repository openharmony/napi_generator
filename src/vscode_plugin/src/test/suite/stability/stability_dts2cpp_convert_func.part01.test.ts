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

suite('Stability_DTS2CPP_CONVERT_FUNC_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_CONVERT_FUNC_Part01.');


  test('dts2cpp_convert_func_0001', () => {
    try {
      const result = transCkey2Dtskey('Callback<number>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0001 convert output non-empty");
      assert.strictEqual(result, "std::function<void(double)>", "dts2cpp_convert_func_0001 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0001 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0002', () => {
    try {
      const converted = transParseObj(doParseTs('sample20.ts', `
        function sample20(p0: Callback<number>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample20');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<void(double)>",
        "dts2cpp_convert_func_0002 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0002 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0003', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet20.ts', `
        function sampleRet20(): Callback<number> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<void(double)>",
        "dts2cpp_convert_func_0003 return convert output");
      const generated = generateFunctions(converted, 'sampleRet20.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet20') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0003 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0004', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass20.ts', `
        class SampleClass20 { field: Callback<number>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<void(double)>",
        "dts2cpp_convert_func_0004 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0004 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0005', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline20.ts', `
        function pipeline20(p: Callback<number>): Callback<number> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<void(double)>",
        "dts2cpp_convert_func_0005 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<void(double)>",
        "dts2cpp_convert_func_0005 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline20.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline20') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0005 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0006', () => {
    try {
      const result = transCkey2Dtskey('Callback<string>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0006 convert output non-empty");
      assert.strictEqual(result, "std::function<void(std::string)>", "dts2cpp_convert_func_0006 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0006 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0007', () => {
    try {
      const converted = transParseObj(doParseTs('sample21.ts', `
        function sample21(p0: Callback<string>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample21');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<void(std::string)>",
        "dts2cpp_convert_func_0007 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0007 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0008', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet21.ts', `
        function sampleRet21(): Callback<string> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<void(std::string)>",
        "dts2cpp_convert_func_0008 return convert output");
      const generated = generateFunctions(converted, 'sampleRet21.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet21') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0008 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0009', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass21.ts', `
        class SampleClass21 { field: Callback<string>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<void(std::string)>",
        "dts2cpp_convert_func_0009 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0009 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0010', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline21.ts', `
        function pipeline21(p: Callback<string>): Callback<string> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<void(std::string)>",
        "dts2cpp_convert_func_0010 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<void(std::string)>",
        "dts2cpp_convert_func_0010 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline21.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline21') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0010 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0011', () => {
    try {
      const result = transCkey2Dtskey('Callback<boolean>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0011 convert output non-empty");
      assert.strictEqual(result, "std::function<void(bool)>", "dts2cpp_convert_func_0011 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0011 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0012', () => {
    try {
      const converted = transParseObj(doParseTs('sample22.ts', `
        function sample22(p0: Callback<boolean>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample22');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<void(bool)>",
        "dts2cpp_convert_func_0012 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0012 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0013', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet22.ts', `
        function sampleRet22(): Callback<boolean> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<void(bool)>",
        "dts2cpp_convert_func_0013 return convert output");
      const generated = generateFunctions(converted, 'sampleRet22.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet22') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0013 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0014', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass22.ts', `
        class SampleClass22 { field: Callback<boolean>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<void(bool)>",
        "dts2cpp_convert_func_0014 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0014 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0015', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline22.ts', `
        function pipeline22(p: Callback<boolean>): Callback<boolean> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<void(bool)>",
        "dts2cpp_convert_func_0015 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<void(bool)>",
        "dts2cpp_convert_func_0015 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline22.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline22') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0015 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0016', () => {
    try {
      const result = transCkey2Dtskey('Callback<void>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0016 convert output non-empty");
      assert.strictEqual(result, "std::function<void(void)>", "dts2cpp_convert_func_0016 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0016 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0017', () => {
    try {
      const converted = transParseObj(doParseTs('sample23.ts', `
        function sample23(p0: Callback<void>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample23');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<void(void)>",
        "dts2cpp_convert_func_0017 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0017 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0018', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet23.ts', `
        function sampleRet23(): Callback<void> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<void(void)>",
        "dts2cpp_convert_func_0018 return convert output");
      const generated = generateFunctions(converted, 'sampleRet23.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet23') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0018 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0019', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass23.ts', `
        class SampleClass23 { field: Callback<void>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<void(void)>",
        "dts2cpp_convert_func_0019 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0019 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0020', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline23.ts', `
        function pipeline23(p: Callback<void>): Callback<void> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<void(void)>",
        "dts2cpp_convert_func_0020 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<void(void)>",
        "dts2cpp_convert_func_0020 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline23.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline23') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0020 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0021', () => {
    try {
      const result = transCkey2Dtskey('Callback<number[]>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0021 convert output non-empty");
      assert.strictEqual(result,
        "std::function<void(std::vector<double>)>",
        "dts2cpp_convert_func_0021 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0021 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0022', () => {
    try {
      const converted = transParseObj(doParseTs('sample24.ts', `
        function sample24(p0: Callback<number[]>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample24');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<void(std::vector<double>)>",
        "dts2cpp_convert_func_0022 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0022 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0023', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet24.ts', `
        function sampleRet24(): Callback<number[]> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<void(std::vector<double>)>",
        "dts2cpp_convert_func_0023 return convert output");
      const generated = generateFunctions(converted, 'sampleRet24.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet24') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0023 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0024', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass24.ts', `
        class SampleClass24 { field: Callback<number[]>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<void(std::vector<double>)>",
        "dts2cpp_convert_func_0024 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0024 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0025', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline24.ts', `
        function pipeline24(p: Callback<number[]>): Callback<number[]> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<void(std::vector<double>)>",
        "dts2cpp_convert_func_0025 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<void(std::vector<double>)>",
        "dts2cpp_convert_func_0025 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline24.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline24') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0025 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0026', () => {
    try {
      const result = transCkey2Dtskey('Callback<string[]>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0026 convert output non-empty");
      assert.strictEqual(result,
        "std::function<void(std::vector<std::string>)>",
        "dts2cpp_convert_func_0026 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0026 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0027', () => {
    try {
      const converted = transParseObj(doParseTs('sample25.ts', `
        function sample25(p0: Callback<string[]>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample25');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<void(std::vector<std::string>)>",
        "dts2cpp_convert_func_0027 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0027 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0028', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet25.ts', `
        function sampleRet25(): Callback<string[]> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<void(std::vector<std::string>)>",
        "dts2cpp_convert_func_0028 return convert output");
      const generated = generateFunctions(converted, 'sampleRet25.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet25') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0028 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0029', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass25.ts', `
        class SampleClass25 { field: Callback<string[]>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<void(std::vector<std::string>)>",
        "dts2cpp_convert_func_0029 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0029 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0030', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline25.ts', `
        function pipeline25(p: Callback<string[]>): Callback<string[]> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<void(std::vector<std::string>)>",
        "dts2cpp_convert_func_0030 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<void(std::vector<std::string>)>",
        "dts2cpp_convert_func_0030 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline25.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline25') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0030 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0031', () => {
    try {
      const result = transCkey2Dtskey('Callback<boolean[]>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0031 convert output non-empty");
      assert.strictEqual(result, "std::function<void(std::vector<bool>)>", "dts2cpp_convert_func_0031 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0031 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0032', () => {
    try {
      const converted = transParseObj(doParseTs('sample26.ts', `
        function sample26(p0: Callback<boolean[]>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample26');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<void(std::vector<bool>)>",
        "dts2cpp_convert_func_0032 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0032 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0033', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet26.ts', `
        function sampleRet26(): Callback<boolean[]> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<void(std::vector<bool>)>",
        "dts2cpp_convert_func_0033 return convert output");
      const generated = generateFunctions(converted, 'sampleRet26.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet26') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0033 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0034', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass26.ts', `
        class SampleClass26 { field: Callback<boolean[]>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<void(std::vector<bool>)>",
        "dts2cpp_convert_func_0034 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0034 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0035', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline26.ts', `
        function pipeline26(p: Callback<boolean[]>): Callback<boolean[]> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<void(std::vector<bool>)>",
        "dts2cpp_convert_func_0035 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<void(std::vector<bool>)>",
        "dts2cpp_convert_func_0035 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline26.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline26') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0035 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0036', () => {
    try {
      const result = transCkey2Dtskey('(p0:number)=>number');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0036 convert output non-empty");
      assert.strictEqual(result, "std::function<double(double)>", "dts2cpp_convert_func_0036 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0036 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0037', () => {
    try {
      const converted = transParseObj(doParseTs('sample27.ts', `
        function sample27(p0: (p0:number)=>number): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample27');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<double(double)>",
        "dts2cpp_convert_func_0037 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0037 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0038', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet27.ts', `
        function sampleRet27(): (p0:number)=>number { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<double(double)>",
        "dts2cpp_convert_func_0038 return convert output");
      const generated = generateFunctions(converted, 'sampleRet27.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet27') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0038 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0039', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass27.ts', `
        class SampleClass27 { field: (p0:number)=>number; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<double(double)>",
        "dts2cpp_convert_func_0039 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0039 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0040', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline27.ts', `
        function pipeline27(p: (p0:number)=>number): (p0:number)=>number { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<double(double)>",
        "dts2cpp_convert_func_0040 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<double(double)>",
        "dts2cpp_convert_func_0040 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline27.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline27') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0040 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0041', () => {
    try {
      const result = transCkey2Dtskey('(p0:string)=>number');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0041 convert output non-empty");
      assert.strictEqual(result, "std::function<double(std::string)>", "dts2cpp_convert_func_0041 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0041 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0042', () => {
    try {
      const converted = transParseObj(doParseTs('sample28.ts', `
        function sample28(p0: (p0:string)=>number): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample28');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<double(std::string)>",
        "dts2cpp_convert_func_0042 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0042 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0043', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet28.ts', `
        function sampleRet28(): (p0:string)=>number { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<double(std::string)>",
        "dts2cpp_convert_func_0043 return convert output");
      const generated = generateFunctions(converted, 'sampleRet28.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet28') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0043 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0044', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass28.ts', `
        class SampleClass28 { field: (p0:string)=>number; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<double(std::string)>",
        "dts2cpp_convert_func_0044 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0044 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0045', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline28.ts', `
        function pipeline28(p: (p0:string)=>number): (p0:string)=>number { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<double(std::string)>",
        "dts2cpp_convert_func_0045 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<double(std::string)>",
        "dts2cpp_convert_func_0045 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline28.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline28') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0045 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0046', () => {
    try {
      const result = transCkey2Dtskey('(p0:boolean)=>number');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0046 convert output non-empty");
      assert.strictEqual(result, "std::function<double(bool)>", "dts2cpp_convert_func_0046 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0046 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0047', () => {
    try {
      const converted = transParseObj(doParseTs('sample29.ts', `
        function sample29(p0: (p0:boolean)=>number): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample29');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<double(bool)>",
        "dts2cpp_convert_func_0047 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0047 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0048', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet29.ts', `
        function sampleRet29(): (p0:boolean)=>number { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<double(bool)>",
        "dts2cpp_convert_func_0048 return convert output");
      const generated = generateFunctions(converted, 'sampleRet29.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet29') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0048 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0049', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass29.ts', `
        class SampleClass29 { field: (p0:boolean)=>number; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<double(bool)>",
        "dts2cpp_convert_func_0049 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0049 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0050', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline29.ts', `
        function pipeline29(p: (p0:boolean)=>number): (p0:boolean)=>number { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<double(bool)>",
        "dts2cpp_convert_func_0050 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<double(bool)>",
        "dts2cpp_convert_func_0050 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline29.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline29') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0050 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0051', () => {
    try {
      const result = transCkey2Dtskey('(p0:number)=>string');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0051 convert output non-empty");
      assert.strictEqual(result, "std::function<std::string(double)>", "dts2cpp_convert_func_0051 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0051 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0052', () => {
    try {
      const converted = transParseObj(doParseTs('sample30.ts', `
        function sample30(p0: (p0:number)=>string): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample30');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::string(double)>",
        "dts2cpp_convert_func_0052 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0052 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0053', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet30.ts', `
        function sampleRet30(): (p0:number)=>string { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::string(double)>",
        "dts2cpp_convert_func_0053 return convert output");
      const generated = generateFunctions(converted, 'sampleRet30.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet30') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0053 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0054', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass30.ts', `
        class SampleClass30 { field: (p0:number)=>string; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<std::string(double)>",
        "dts2cpp_convert_func_0054 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0054 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0055', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline30.ts', `
        function pipeline30(p: (p0:number)=>string): (p0:number)=>string { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::string(double)>",
        "dts2cpp_convert_func_0055 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::string(double)>",
        "dts2cpp_convert_func_0055 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline30.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline30') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0055 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0056', () => {
    try {
      const result = transCkey2Dtskey('(p0:string)=>string');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0056 convert output non-empty");
      assert.strictEqual(result, "std::function<std::string(std::string)>", "dts2cpp_convert_func_0056 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0056 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0057', () => {
    try {
      const converted = transParseObj(doParseTs('sample31.ts', `
        function sample31(p0: (p0:string)=>string): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample31');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::string(std::string)>",
        "dts2cpp_convert_func_0057 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0057 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0058', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet31.ts', `
        function sampleRet31(): (p0:string)=>string { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::string(std::string)>",
        "dts2cpp_convert_func_0058 return convert output");
      const generated = generateFunctions(converted, 'sampleRet31.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet31') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0058 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0059', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass31.ts', `
        class SampleClass31 { field: (p0:string)=>string; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<std::string(std::string)>",
        "dts2cpp_convert_func_0059 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0059 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0060', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline31.ts', `
        function pipeline31(p: (p0:string)=>string): (p0:string)=>string { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::string(std::string)>",
        "dts2cpp_convert_func_0060 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::string(std::string)>",
        "dts2cpp_convert_func_0060 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline31.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline31') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0060 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0061', () => {
    try {
      const result = transCkey2Dtskey('(p0:boolean)=>string');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0061 convert output non-empty");
      assert.strictEqual(result, "std::function<std::string(bool)>", "dts2cpp_convert_func_0061 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0061 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0062', () => {
    try {
      const converted = transParseObj(doParseTs('sample32.ts', `
        function sample32(p0: (p0:boolean)=>string): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample32');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::string(bool)>",
        "dts2cpp_convert_func_0062 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0062 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0063', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet32.ts', `
        function sampleRet32(): (p0:boolean)=>string { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::string(bool)>",
        "dts2cpp_convert_func_0063 return convert output");
      const generated = generateFunctions(converted, 'sampleRet32.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet32') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0063 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0064', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass32.ts', `
        class SampleClass32 { field: (p0:boolean)=>string; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<std::string(bool)>",
        "dts2cpp_convert_func_0064 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0064 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0065', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline32.ts', `
        function pipeline32(p: (p0:boolean)=>string): (p0:boolean)=>string { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::string(bool)>",
        "dts2cpp_convert_func_0065 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::string(bool)>",
        "dts2cpp_convert_func_0065 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline32.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline32') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0065 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0066', () => {
    try {
      const result = transCkey2Dtskey('(p0:number)=>boolean');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0066 convert output non-empty");
      assert.strictEqual(result, "std::function<bool(double)>", "dts2cpp_convert_func_0066 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0066 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0067', () => {
    try {
      const converted = transParseObj(doParseTs('sample33.ts', `
        function sample33(p0: (p0:number)=>boolean): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample33');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<bool(double)>",
        "dts2cpp_convert_func_0067 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0067 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0068', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet33.ts', `
        function sampleRet33(): (p0:number)=>boolean { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<bool(double)>",
        "dts2cpp_convert_func_0068 return convert output");
      const generated = generateFunctions(converted, 'sampleRet33.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet33') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0068 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0069', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass33.ts', `
        class SampleClass33 { field: (p0:number)=>boolean; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<bool(double)>",
        "dts2cpp_convert_func_0069 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0069 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0070', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline33.ts', `
        function pipeline33(p: (p0:number)=>boolean): (p0:number)=>boolean { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<bool(double)>",
        "dts2cpp_convert_func_0070 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<bool(double)>",
        "dts2cpp_convert_func_0070 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline33.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline33') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0070 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0071', () => {
    try {
      const result = transCkey2Dtskey('(p0:string)=>boolean');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0071 convert output non-empty");
      assert.strictEqual(result, "std::function<bool(std::string)>", "dts2cpp_convert_func_0071 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0071 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0072', () => {
    try {
      const converted = transParseObj(doParseTs('sample34.ts', `
        function sample34(p0: (p0:string)=>boolean): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample34');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<bool(std::string)>",
        "dts2cpp_convert_func_0072 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0072 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0073', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet34.ts', `
        function sampleRet34(): (p0:string)=>boolean { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<bool(std::string)>",
        "dts2cpp_convert_func_0073 return convert output");
      const generated = generateFunctions(converted, 'sampleRet34.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet34') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0073 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0074', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass34.ts', `
        class SampleClass34 { field: (p0:string)=>boolean; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<bool(std::string)>",
        "dts2cpp_convert_func_0074 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0074 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0075', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline34.ts', `
        function pipeline34(p: (p0:string)=>boolean): (p0:string)=>boolean { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<bool(std::string)>",
        "dts2cpp_convert_func_0075 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<bool(std::string)>",
        "dts2cpp_convert_func_0075 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline34.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline34') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0075 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0076', () => {
    try {
      const result = transCkey2Dtskey('(p0:boolean)=>boolean');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0076 convert output non-empty");
      assert.strictEqual(result, "std::function<bool(bool)>", "dts2cpp_convert_func_0076 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0076 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0077', () => {
    try {
      const converted = transParseObj(doParseTs('sample35.ts', `
        function sample35(p0: (p0:boolean)=>boolean): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample35');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<bool(bool)>",
        "dts2cpp_convert_func_0077 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0077 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0078', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet35.ts', `
        function sampleRet35(): (p0:boolean)=>boolean { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<bool(bool)>",
        "dts2cpp_convert_func_0078 return convert output");
      const generated = generateFunctions(converted, 'sampleRet35.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet35') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0078 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0079', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass35.ts', `
        class SampleClass35 { field: (p0:boolean)=>boolean; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<bool(bool)>",
        "dts2cpp_convert_func_0079 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0079 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0080', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline35.ts', `
        function pipeline35(p: (p0:boolean)=>boolean): (p0:boolean)=>boolean { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<bool(bool)>",
        "dts2cpp_convert_func_0080 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<bool(bool)>",
        "dts2cpp_convert_func_0080 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline35.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline35') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0080 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0081', () => {
    try {
      const result = transCkey2Dtskey('(p0:number)=>void');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0081 convert output non-empty");
      assert.strictEqual(result, "std::function<void(double)>", "dts2cpp_convert_func_0081 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0081 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0082', () => {
    try {
      const converted = transParseObj(doParseTs('sample36.ts', `
        function sample36(p0: (p0:number)=>void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample36');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<void(double)>",
        "dts2cpp_convert_func_0082 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0082 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0083', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet36.ts', `
        function sampleRet36(): (p0:number)=>void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<void(double)>",
        "dts2cpp_convert_func_0083 return convert output");
      const generated = generateFunctions(converted, 'sampleRet36.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet36') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0083 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0084', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass36.ts', `
        class SampleClass36 { field: (p0:number)=>void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<void(double)>",
        "dts2cpp_convert_func_0084 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0084 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0085', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline36.ts', `
        function pipeline36(p: (p0:number)=>void): (p0:number)=>void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<void(double)>",
        "dts2cpp_convert_func_0085 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<void(double)>",
        "dts2cpp_convert_func_0085 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline36.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline36') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0085 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0086', () => {
    try {
      const result = transCkey2Dtskey('(p0:string)=>void');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0086 convert output non-empty");
      assert.strictEqual(result, "std::function<void(std::string)>", "dts2cpp_convert_func_0086 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0086 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0087', () => {
    try {
      const converted = transParseObj(doParseTs('sample37.ts', `
        function sample37(p0: (p0:string)=>void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample37');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<void(std::string)>",
        "dts2cpp_convert_func_0087 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0087 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0088', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet37.ts', `
        function sampleRet37(): (p0:string)=>void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<void(std::string)>",
        "dts2cpp_convert_func_0088 return convert output");
      const generated = generateFunctions(converted, 'sampleRet37.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet37') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0088 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0089', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass37.ts', `
        class SampleClass37 { field: (p0:string)=>void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<void(std::string)>",
        "dts2cpp_convert_func_0089 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0089 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0090', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline37.ts', `
        function pipeline37(p: (p0:string)=>void): (p0:string)=>void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<void(std::string)>",
        "dts2cpp_convert_func_0090 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<void(std::string)>",
        "dts2cpp_convert_func_0090 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline37.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline37') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0090 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0091', () => {
    try {
      const result = transCkey2Dtskey('(p0:boolean)=>void');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0091 convert output non-empty");
      assert.strictEqual(result, "std::function<void(bool)>", "dts2cpp_convert_func_0091 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0091 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0092', () => {
    try {
      const converted = transParseObj(doParseTs('sample38.ts', `
        function sample38(p0: (p0:boolean)=>void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample38');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<void(bool)>",
        "dts2cpp_convert_func_0092 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0092 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0093', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet38.ts', `
        function sampleRet38(): (p0:boolean)=>void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<void(bool)>",
        "dts2cpp_convert_func_0093 return convert output");
      const generated = generateFunctions(converted, 'sampleRet38.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet38') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0093 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0094', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass38.ts', `
        class SampleClass38 { field: (p0:boolean)=>void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<void(bool)>",
        "dts2cpp_convert_func_0094 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0094 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0095', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline38.ts', `
        function pipeline38(p: (p0:boolean)=>void): (p0:boolean)=>void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<void(bool)>",
        "dts2cpp_convert_func_0095 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<void(bool)>",
        "dts2cpp_convert_func_0095 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline38.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline38') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0095 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0096', () => {
    try {
      const result = transCkey2Dtskey('(p0:number,p1:number)=>number');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0096 convert output non-empty");
      assert.strictEqual(result, "std::function<double(double, double)>", "dts2cpp_convert_func_0096 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0096 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0097', () => {
    try {
      const converted = transParseObj(doParseTs('sample39.ts', `
        function sample39(p0: (p0:number,p1:number)=>number): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample39');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<double(double, double)>",
        "dts2cpp_convert_func_0097 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0097 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0098', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet39.ts', `
        function sampleRet39(): (p0:number,p1:number)=>number { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<double(double, double)>",
        "dts2cpp_convert_func_0098 return convert output");
      const generated = generateFunctions(converted, 'sampleRet39.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet39') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0098 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0099', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass39.ts', `
        class SampleClass39 { field: (p0:number,p1:number)=>number; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<double(double, double)>",
        "dts2cpp_convert_func_0099 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0099 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0100', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline39.ts', `
        function pipeline39(p: (p0:number,p1:number)=>number): (p0:number,p1:number)=>number { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<double(double, double)>",
        "dts2cpp_convert_func_0100 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<double(double, double)>",
        "dts2cpp_convert_func_0100 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline39.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline39') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0100 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0101', () => {
    try {
      const result = transCkey2Dtskey('(p0:number,p1:boolean)=>number');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0101 convert output non-empty");
      assert.strictEqual(result, "std::function<double(double, bool)>", "dts2cpp_convert_func_0101 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0101 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0102', () => {
    try {
      const converted = transParseObj(doParseTs('sample40.ts', `
        function sample40(p0: (p0:number,p1:boolean)=>number): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample40');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<double(double, bool)>",
        "dts2cpp_convert_func_0102 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0102 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0103', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet40.ts', `
        function sampleRet40(): (p0:number,p1:boolean)=>number { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<double(double, bool)>",
        "dts2cpp_convert_func_0103 return convert output");
      const generated = generateFunctions(converted, 'sampleRet40.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet40') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0103 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0104', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass40.ts', `
        class SampleClass40 { field: (p0:number,p1:boolean)=>number; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<double(double, bool)>",
        "dts2cpp_convert_func_0104 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0104 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0105', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline40.ts', `
        function pipeline40(p: (p0:number,p1:boolean)=>number): (p0:number,p1:boolean)=>number { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<double(double, bool)>",
        "dts2cpp_convert_func_0105 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<double(double, bool)>",
        "dts2cpp_convert_func_0105 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline40.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline40') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0105 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0106', () => {
    try {
      const result = transCkey2Dtskey('(p0:string,p1:string)=>number');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0106 convert output non-empty");
      assert.strictEqual(result,
        "std::function<double(std::string, std::string)>",
        "dts2cpp_convert_func_0106 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0106 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0107', () => {
    try {
      const converted = transParseObj(doParseTs('sample41.ts', `
        function sample41(p0: (p0:string,p1:string)=>number): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample41');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<double(std::string, std::string)>",
        "dts2cpp_convert_func_0107 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0107 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0108', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet41.ts', `
        function sampleRet41(): (p0:string,p1:string)=>number { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<double(std::string, std::string)>",
        "dts2cpp_convert_func_0108 return convert output");
      const generated = generateFunctions(converted, 'sampleRet41.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet41') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0108 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0109', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass41.ts', `
        class SampleClass41 { field: (p0:string,p1:string)=>number; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<double(std::string, std::string)>",
        "dts2cpp_convert_func_0109 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0109 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0110', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline41.ts', `
        function pipeline41(p: (p0:string,p1:string)=>number): (p0:string,p1:string)=>number { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<double(std::string, std::string)>",
        "dts2cpp_convert_func_0110 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<double(std::string, std::string)>",
        "dts2cpp_convert_func_0110 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline41.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline41') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0110 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0111', () => {
    try {
      const result = transCkey2Dtskey('(p0:boolean,p1:number)=>number');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0111 convert output non-empty");
      assert.strictEqual(result, "std::function<double(bool, double)>", "dts2cpp_convert_func_0111 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0111 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0112', () => {
    try {
      const converted = transParseObj(doParseTs('sample42.ts', `
        function sample42(p0: (p0:boolean,p1:number)=>number): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample42');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<double(bool, double)>",
        "dts2cpp_convert_func_0112 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0112 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0113', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet42.ts', `
        function sampleRet42(): (p0:boolean,p1:number)=>number { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<double(bool, double)>",
        "dts2cpp_convert_func_0113 return convert output");
      const generated = generateFunctions(converted, 'sampleRet42.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet42') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0113 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0114', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass42.ts', `
        class SampleClass42 { field: (p0:boolean,p1:number)=>number; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<double(bool, double)>",
        "dts2cpp_convert_func_0114 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0114 execution error: ${String(err)}`);
    }
  });
});
