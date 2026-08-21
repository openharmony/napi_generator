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

suite('Stability_DTS2CPP_CONVERT_SET_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_CONVERT_SET_Part01.');


  test('dts2cpp_convert_set_0001', () => {
    try {
      const result = transCkey2Dtskey('Set<string>');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_set_0001 convert output non-empty");
      assert.strictEqual(result, "std::set<std::string>", "dts2cpp_convert_set_0001 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_set_0001 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_set_0002', () => {
    try {
      const converted = transParseObj(doParseTs('sample17.ts', `function sample17(p0: Set<string>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample17');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::set<std::string>",
        "dts2cpp_convert_set_0002 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_set_0002 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_set_0003', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet17.ts', `
        function sampleRet17(): Set<string> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::set<std::string>",
        "dts2cpp_convert_set_0003 return convert output");
      const generated = generateFunctions(converted, 'sampleRet17.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet17') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_set_0003 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_set_0004', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass17.ts', `
        class SampleClass17 { field: Set<string>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::set<std::string>",
        "dts2cpp_convert_set_0004 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_set_0004 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_set_0005', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline17.ts', `
        function pipeline17(p: Set<string>): Set<string> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::set<std::string>",
        "dts2cpp_convert_set_0005 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::set<std::string>",
        "dts2cpp_convert_set_0005 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline17.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline17') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_set_0005 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_set_0006', () => {
    try {
      const result = transCkey2Dtskey('Set<number>');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_set_0006 convert output non-empty");
      assert.strictEqual(result, "std::set<double>", "dts2cpp_convert_set_0006 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_set_0006 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_set_0007', () => {
    try {
      const converted = transParseObj(doParseTs('sample18.ts', `function sample18(p0: Set<number>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample18');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::set<double>",
        "dts2cpp_convert_set_0007 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_set_0007 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_set_0008', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet18.ts', `
        function sampleRet18(): Set<number> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::set<double>",
        "dts2cpp_convert_set_0008 return convert output");
      const generated = generateFunctions(converted, 'sampleRet18.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet18') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_set_0008 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_set_0009', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass18.ts', `
        class SampleClass18 { field: Set<number>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::set<double>",
        "dts2cpp_convert_set_0009 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_set_0009 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_set_0010', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline18.ts', `
        function pipeline18(p: Set<number>): Set<number> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::set<double>",
        "dts2cpp_convert_set_0010 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::set<double>",
        "dts2cpp_convert_set_0010 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline18.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline18') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_set_0010 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_set_0011', () => {
    try {
      const result = transCkey2Dtskey('Set<boolean>');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_set_0011 convert output non-empty");
      assert.strictEqual(result, "std::set<bool>", "dts2cpp_convert_set_0011 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_set_0011 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_set_0012', () => {
    try {
      const converted = transParseObj(doParseTs('sample19.ts', `
        function sample19(p0: Set<boolean>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample19');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::set<bool>",
        "dts2cpp_convert_set_0012 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_set_0012 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_set_0013', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet19.ts', `
        function sampleRet19(): Set<boolean> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::set<bool>", "dts2cpp_convert_set_0013 return convert output");
      const generated = generateFunctions(converted, 'sampleRet19.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet19') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_set_0013 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_set_0014', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass19.ts', `
        class SampleClass19 { field: Set<boolean>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::set<bool>",
        "dts2cpp_convert_set_0014 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_set_0014 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_set_0015', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline19.ts', `
        function pipeline19(p: Set<boolean>): Set<boolean> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::set<bool>",
        "dts2cpp_convert_set_0015 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::set<bool>",
        "dts2cpp_convert_set_0015 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline19.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline19') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_set_0015 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_set_0016', () => {
    try {
      const result = transCkey2Dtskey('Set<any>');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_set_0016 convert output non-empty");
      assert.strictEqual(result, "Set<any>", "dts2cpp_convert_set_0016 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_set_0016 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_set_0017', () => {
    try {
      const converted = transParseObj(doParseTs('sample67.ts', `function sample67(p0: Set<any>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample67');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Set<any>",
        "dts2cpp_convert_set_0017 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_set_0017 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_set_0018', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet67.ts', `
        function sampleRet67(): Set<any> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Set<any>", "dts2cpp_convert_set_0018 return convert output");
      const generated = generateFunctions(converted, 'sampleRet67.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet67') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_set_0018 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_set_0019', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass67.ts', `
        class SampleClass67 { field: Set<any>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "Set<any>",
        "dts2cpp_convert_set_0019 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_set_0019 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_set_0020', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline67.ts', `
        function pipeline67(p: Set<any>): Set<any> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Set<any>",
        "dts2cpp_convert_set_0020 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Set<any>",
        "dts2cpp_convert_set_0020 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline67.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline67') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_set_0020 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_set_0021', () => {
    try {
      const result = transCkey2Dtskey('Set<object>');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_set_0021 convert output non-empty");
      assert.strictEqual(result, "Set<object>", "dts2cpp_convert_set_0021 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_set_0021 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_set_0022', () => {
    try {
      const converted = transParseObj(doParseTs('sample68.ts', `function sample68(p0: Set<object>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample68');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Set<object>",
        "dts2cpp_convert_set_0022 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_set_0022 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_set_0023', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet68.ts', `
        function sampleRet68(): Set<object> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Set<object>", "dts2cpp_convert_set_0023 return convert output");
      const generated = generateFunctions(converted, 'sampleRet68.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet68') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_set_0023 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_set_0024', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass68.ts', `
        class SampleClass68 { field: Set<object>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "Set<object>",
        "dts2cpp_convert_set_0024 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_set_0024 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_set_0025', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline68.ts', `
        function pipeline68(p: Set<object>): Set<object> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Set<object>",
        "dts2cpp_convert_set_0025 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Set<object>",
        "dts2cpp_convert_set_0025 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline68.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline68') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_set_0025 execution error: ${String(err)}`);
    }
  });
});
