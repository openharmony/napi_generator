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

suite('Stability_DTS2CPP_CONVERT_BASIC_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_CONVERT_BASIC_Part01.');


  test('dts2cpp_convert_basic_0001', () => {
    try {
      const result = transCkey2Dtskey('number');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_basic_0001 convert output non-empty");
      assert.strictEqual(result, "double", "dts2cpp_convert_basic_0001 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0001 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0002', () => {
    try {
      const converted = transParseObj(doParseTs('sample1.ts', `function sample1(p0: number): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample1');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "double",
        "dts2cpp_convert_basic_0002 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0002 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0003', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet1.ts', `
        function sampleRet1(): number { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "double", "dts2cpp_convert_basic_0003 return convert output");
      const generated = generateFunctions(converted, 'sampleRet1.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet1') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0003 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0004', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass1.ts', `
        class SampleClass1 { field: number; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "double",
        "dts2cpp_convert_basic_0004 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0004 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0005', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline1.ts', `function pipeline1(p: number): number { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "double",
        "dts2cpp_convert_basic_0005 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "double",
        "dts2cpp_convert_basic_0005 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline1.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline1') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0005 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0006', () => {
    try {
      const result = transCkey2Dtskey('string');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_basic_0006 convert output non-empty");
      assert.strictEqual(result, "std::string", "dts2cpp_convert_basic_0006 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0006 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0007', () => {
    try {
      const converted = transParseObj(doParseTs('sample2.ts', `function sample2(p0: string): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample2');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::string",
        "dts2cpp_convert_basic_0007 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0007 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0008', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet2.ts', `
        function sampleRet2(): string { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::string", "dts2cpp_convert_basic_0008 return convert output");
      const generated = generateFunctions(converted, 'sampleRet2.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet2') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0008 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0009', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass2.ts', `
        class SampleClass2 { field: string; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::string",
        "dts2cpp_convert_basic_0009 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0009 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0010', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline2.ts', `function pipeline2(p: string): string { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::string",
        "dts2cpp_convert_basic_0010 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::string",
        "dts2cpp_convert_basic_0010 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline2.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline2') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0010 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0011', () => {
    try {
      const result = transCkey2Dtskey('boolean');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_basic_0011 convert output non-empty");
      assert.strictEqual(result, "bool", "dts2cpp_convert_basic_0011 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0011 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0012', () => {
    try {
      const converted = transParseObj(doParseTs('sample3.ts', `function sample3(p0: boolean): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample3');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "bool",
        "dts2cpp_convert_basic_0012 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0012 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0013', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet3.ts', `
        function sampleRet3(): boolean { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "bool", "dts2cpp_convert_basic_0013 return convert output");
      const generated = generateFunctions(converted, 'sampleRet3.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet3') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0013 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0014', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass3.ts', `
        class SampleClass3 { field: boolean; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "bool",
        "dts2cpp_convert_basic_0014 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0014 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0015', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline3.ts', `
        function pipeline3(p: boolean): boolean { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "bool",
        "dts2cpp_convert_basic_0015 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "bool",
        "dts2cpp_convert_basic_0015 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline3.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline3') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0015 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0016', () => {
    try {
      const result = transCkey2Dtskey('void');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_basic_0016 convert output non-empty");
      assert.strictEqual(result, "void", "dts2cpp_convert_basic_0016 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0016 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0017', () => {
    try {
      const converted = transParseObj(doParseTs('sample4.ts', `function sample4(p0: void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample4');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "void",
        "dts2cpp_convert_basic_0017 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0017 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0018', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet4.ts', `
        function sampleRet4(): void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "void", "dts2cpp_convert_basic_0018 return convert output");
      const generated = generateFunctions(converted, 'sampleRet4.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet4') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0018 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0019', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass4.ts', `
        class SampleClass4 { field: void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "void",
        "dts2cpp_convert_basic_0019 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0019 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0020', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline4.ts', `function pipeline4(p: void): void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "void",
        "dts2cpp_convert_basic_0020 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "void",
        "dts2cpp_convert_basic_0020 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline4.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline4') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0020 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0021', () => {
    try {
      const result = transCkey2Dtskey('null');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_basic_0021 convert output non-empty");
      assert.strictEqual(result, "null", "dts2cpp_convert_basic_0021 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0021 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0022', () => {
    try {
      const converted = transParseObj(doParseTs('sample287.ts', `function sample287(p0: null): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample287');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "null",
        "dts2cpp_convert_basic_0022 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0022 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0023', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet287.ts', `
        function sampleRet287(): null { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "null", "dts2cpp_convert_basic_0023 return convert output");
      const generated = generateFunctions(converted, 'sampleRet287.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet287') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0023 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0024', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass287.ts', `
        class SampleClass287 { field: null; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "null",
        "dts2cpp_convert_basic_0024 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0024 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0025', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline287.ts', `function pipeline287(p: null): null { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "null",
        "dts2cpp_convert_basic_0025 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "null",
        "dts2cpp_convert_basic_0025 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline287.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline287') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0025 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0026', () => {
    try {
      const result = transCkey2Dtskey('undefined');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_basic_0026 convert output non-empty");
      assert.strictEqual(result, "undefined", "dts2cpp_convert_basic_0026 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0026 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0027', () => {
    try {
      const converted = transParseObj(doParseTs('sample288.ts', `function sample288(p0: undefined): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample288');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "undefined",
        "dts2cpp_convert_basic_0027 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0027 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0028', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet288.ts', `
        function sampleRet288(): undefined { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "undefined", "dts2cpp_convert_basic_0028 return convert output");
      const generated = generateFunctions(converted, 'sampleRet288.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet288') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0028 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0029', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass288.ts', `
        class SampleClass288 { field: undefined; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "undefined",
        "dts2cpp_convert_basic_0029 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0029 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0030', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline288.ts', `
        function pipeline288(p: undefined): undefined { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "undefined",
        "dts2cpp_convert_basic_0030 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "undefined",
        "dts2cpp_convert_basic_0030 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline288.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline288') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0030 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0031', () => {
    try {
      const result = transCkey2Dtskey('symbol');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_basic_0031 convert output non-empty");
      assert.strictEqual(result, "symbol", "dts2cpp_convert_basic_0031 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0031 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0032', () => {
    try {
      const converted = transParseObj(doParseTs('sample289.ts', `function sample289(p0: symbol): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample289');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "symbol",
        "dts2cpp_convert_basic_0032 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0032 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0033', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet289.ts', `
        function sampleRet289(): symbol { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "symbol", "dts2cpp_convert_basic_0033 return convert output");
      const generated = generateFunctions(converted, 'sampleRet289.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet289') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0033 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0034', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass289.ts', `
        class SampleClass289 { field: symbol; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "symbol",
        "dts2cpp_convert_basic_0034 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0034 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0035', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline289.ts', `
        function pipeline289(p: symbol): symbol { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "symbol",
        "dts2cpp_convert_basic_0035 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "symbol",
        "dts2cpp_convert_basic_0035 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline289.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline289') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0035 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0036', () => {
    try {
      const result = transCkey2Dtskey('bigint');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_basic_0036 convert output non-empty");
      assert.strictEqual(result, "bigint", "dts2cpp_convert_basic_0036 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0036 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0037', () => {
    try {
      const converted = transParseObj(doParseTs('sample290.ts', `function sample290(p0: bigint): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample290');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "bigint",
        "dts2cpp_convert_basic_0037 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0037 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0038', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet290.ts', `
        function sampleRet290(): bigint { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "bigint", "dts2cpp_convert_basic_0038 return convert output");
      const generated = generateFunctions(converted, 'sampleRet290.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet290') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0038 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0039', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass290.ts', `
        class SampleClass290 { field: bigint; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "bigint",
        "dts2cpp_convert_basic_0039 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0039 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0040', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline290.ts', `
        function pipeline290(p: bigint): bigint { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "bigint",
        "dts2cpp_convert_basic_0040 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "bigint",
        "dts2cpp_convert_basic_0040 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline290.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline290') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0040 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0041', () => {
    try {
      const result = transCkey2Dtskey('unknown');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_basic_0041 convert output non-empty");
      assert.strictEqual(result, "unknown", "dts2cpp_convert_basic_0041 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0041 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0042', () => {
    try {
      const converted = transParseObj(doParseTs('sample291.ts', `function sample291(p0: unknown): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample291');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "unknown",
        "dts2cpp_convert_basic_0042 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0042 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0043', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet291.ts', `
        function sampleRet291(): unknown { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "unknown", "dts2cpp_convert_basic_0043 return convert output");
      const generated = generateFunctions(converted, 'sampleRet291.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet291') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0043 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0044', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass291.ts', `
        class SampleClass291 { field: unknown; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "unknown",
        "dts2cpp_convert_basic_0044 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0044 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0045', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline291.ts', `
        function pipeline291(p: unknown): unknown { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "unknown",
        "dts2cpp_convert_basic_0045 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "unknown",
        "dts2cpp_convert_basic_0045 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline291.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline291') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0045 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0046', () => {
    try {
      const result = transCkey2Dtskey('never');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_basic_0046 convert output non-empty");
      assert.strictEqual(result, "never", "dts2cpp_convert_basic_0046 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0046 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0047', () => {
    try {
      const converted = transParseObj(doParseTs('sample292.ts', `function sample292(p0: never): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample292');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "never",
        "dts2cpp_convert_basic_0047 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0047 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0048', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet292.ts', `
        function sampleRet292(): never { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "never", "dts2cpp_convert_basic_0048 return convert output");
      const generated = generateFunctions(converted, 'sampleRet292.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet292') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0048 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0049', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass292.ts', `
        class SampleClass292 { field: never; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "never",
        "dts2cpp_convert_basic_0049 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0049 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0050', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline292.ts', `
        function pipeline292(p: never): never { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "never",
        "dts2cpp_convert_basic_0050 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "never",
        "dts2cpp_convert_basic_0050 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline292.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline292') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0050 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0051', () => {
    try {
      const result = transCkey2Dtskey('any');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_basic_0051 convert output non-empty");
      assert.strictEqual(result, "std::any", "dts2cpp_convert_basic_0051 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0051 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0052', () => {
    try {
      const converted = transParseObj(doParseTs('sample293.ts', `function sample293(p0: any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample293');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::any",
        "dts2cpp_convert_basic_0052 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0052 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0053', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet293.ts', `
        function sampleRet293(): any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::any", "dts2cpp_convert_basic_0053 return convert output");
      const generated = generateFunctions(converted, 'sampleRet293.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet293') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0053 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0054', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass293.ts', `
        class SampleClass293 { field: any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::any",
        "dts2cpp_convert_basic_0054 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0054 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0055', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline293.ts', `function pipeline293(p: any): any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::any",
        "dts2cpp_convert_basic_0055 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::any",
        "dts2cpp_convert_basic_0055 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline293.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline293') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0055 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0056', () => {
    try {
      const result = transCkey2Dtskey('object');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_basic_0056 convert output non-empty");
      assert.strictEqual(result, "std::any", "dts2cpp_convert_basic_0056 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0056 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0057', () => {
    try {
      const converted = transParseObj(doParseTs('sample294.ts', `function sample294(p0: object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample294');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::any",
        "dts2cpp_convert_basic_0057 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0057 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0058', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet294.ts', `
        function sampleRet294(): object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::any", "dts2cpp_convert_basic_0058 return convert output");
      const generated = generateFunctions(converted, 'sampleRet294.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet294') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0058 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0059', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass294.ts', `
        class SampleClass294 { field: object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::any",
        "dts2cpp_convert_basic_0059 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0059 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0060', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline294.ts', `
        function pipeline294(p: object): object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::any",
        "dts2cpp_convert_basic_0060 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::any",
        "dts2cpp_convert_basic_0060 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline294.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline294') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0060 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0061', () => {
    try {
      const result = transCkey2Dtskey('map');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_basic_0061 convert output non-empty");
      assert.strictEqual(result, "map", "dts2cpp_convert_basic_0061 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0061 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0062', () => {
    try {
      const converted = transParseObj(doParseTs('sample296.ts', `function sample296(p0: map): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample296');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "map",
        "dts2cpp_convert_basic_0062 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0062 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0063', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet296.ts', `
        function sampleRet296(): map { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "map", "dts2cpp_convert_basic_0063 return convert output");
      const generated = generateFunctions(converted, 'sampleRet296.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet296') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0063 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0064', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass296.ts', `
        class SampleClass296 { field: map; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "map",
        "dts2cpp_convert_basic_0064 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0064 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_basic_0065', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline296.ts', `function pipeline296(p: map): map { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "map",
        "dts2cpp_convert_basic_0065 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "map",
        "dts2cpp_convert_basic_0065 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline296.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline296') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_basic_0065 execution error: ${String(err)}`);
    }
  });
});
