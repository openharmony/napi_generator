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

suite('Stability_DTS2CPP_CONVERT_FUNC_Part02', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_CONVERT_FUNC_Part02.');


  test('dts2cpp_convert_func_0001', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline42.ts', `
        function pipeline42(p: (p0:boolean,p1:number)=>number): (p0:boolean,p1:number)=>number { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(bool, double)>",
        "dts2cpp_convert_func_0001 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(bool, double)>",
        "dts2cpp_convert_func_0001 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline42.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline42') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0001 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0002', () => {
    try {
      const result = transCkey2Dtskey('(p0:boolean,p1:boolean)=>number');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0002 convert output non-empty");
      assert.strictEqual(result, "std::function<double(bool, bool)>", "dts2cpp_convert_func_0002 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0002 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0003', () => {
    try {
      const converted = transParseObj(doParseTs('sample43.ts', `
        function sample43(p0: (p0:boolean,p1:boolean)=>number): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample43');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(bool, bool)>",
        "dts2cpp_convert_func_0003 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0003 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0004', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet43.ts', `
        function sampleRet43(): (p0:boolean,p1:boolean)=>number { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(bool, bool)>",
        "dts2cpp_convert_func_0004 return convert output");
      const generated = generateFunctions(converted, 'sampleRet43.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet43') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0004 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0005', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass43.ts', `
        class SampleClass43 { field: (p0:boolean,p1:boolean)=>number; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<double(bool, bool)>",
        "dts2cpp_convert_func_0005 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0005 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0006', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline43.ts', `
        function pipeline43(p: (p0:boolean,p1:boolean)=>number): (p0:boolean,p1:boolean)=>number { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(bool, bool)>",
        "dts2cpp_convert_func_0006 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(bool, bool)>",
        "dts2cpp_convert_func_0006 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline43.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline43') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0006 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0007', () => {
    try {
      const result = transCkey2Dtskey('(p0:number,p1:number)=>string');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0007 convert output non-empty");
      assert.strictEqual(result, "std::function<std::string(double, double)>",
        "dts2cpp_convert_func_0007 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0007 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0008', () => {
    try {
      const converted = transParseObj(doParseTs('sample44.ts', `
        function sample44(p0: (p0:number,p1:number)=>string): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample44');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(double, double)>",
        "dts2cpp_convert_func_0008 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0008 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0009', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet44.ts', `
        function sampleRet44(): (p0:number,p1:number)=>string { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(double, double)>",
        "dts2cpp_convert_func_0009 return convert output");
      const generated = generateFunctions(converted, 'sampleRet44.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet44') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0009 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0010', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass44.ts', `
        class SampleClass44 { field: (p0:number,p1:number)=>string; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::string(double, double)>",
        "dts2cpp_convert_func_0010 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0010 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0011', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline44.ts', `
        function pipeline44(p: (p0:number,p1:number)=>string): (p0:number,p1:number)=>string { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(double, double)>",
        "dts2cpp_convert_func_0011 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(double, double)>",
        "dts2cpp_convert_func_0011 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline44.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline44') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0011 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0012', () => {
    try {
      const result = transCkey2Dtskey('(p0:number,p1:boolean)=>string');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0012 convert output non-empty");
      assert.strictEqual(result, "std::function<std::string(double, bool)>", "dts2cpp_convert_func_0012 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0012 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0013', () => {
    try {
      const converted = transParseObj(doParseTs('sample45.ts', `
        function sample45(p0: (p0:number,p1:boolean)=>string): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample45');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(double, bool)>",
        "dts2cpp_convert_func_0013 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0013 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0014', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet45.ts', `
        function sampleRet45(): (p0:number,p1:boolean)=>string { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(double, bool)>",
        "dts2cpp_convert_func_0014 return convert output");
      const generated = generateFunctions(converted, 'sampleRet45.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet45') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0014 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0015', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass45.ts', `
        class SampleClass45 { field: (p0:number,p1:boolean)=>string; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::string(double, bool)>",
        "dts2cpp_convert_func_0015 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0015 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0016', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline45.ts', `
        function pipeline45(p: (p0:number,p1:boolean)=>string): (p0:number,p1:boolean)=>string { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(double, bool)>",
        "dts2cpp_convert_func_0016 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(double, bool)>",
        "dts2cpp_convert_func_0016 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline45.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline45') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0016 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0017', () => {
    try {
      const result = transCkey2Dtskey('(p0:string,p1:string)=>string');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0017 convert output non-empty");
      assert.strictEqual(result, "std::function<std::string(std::string, std::string)>",
        "dts2cpp_convert_func_0017 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0017 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0018', () => {
    try {
      const converted = transParseObj(doParseTs('sample46.ts', `
        function sample46(p0: (p0:string,p1:string)=>string): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample46');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(std::string, std::string)>",
        "dts2cpp_convert_func_0018 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0018 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0019', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet46.ts', `
        function sampleRet46(): (p0:string,p1:string)=>string { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(std::string, std::string)>",
        "dts2cpp_convert_func_0019 return convert output");
      const generated = generateFunctions(converted, 'sampleRet46.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet46') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0019 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0020', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass46.ts', `
        class SampleClass46 { field: (p0:string,p1:string)=>string; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<std::string(std::string, std::string)>", "dts2cpp_convert_func_0020 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0020 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0021', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline46.ts', `
        function pipeline46(p: (p0:string,p1:string)=>string): (p0:string,p1:string)=>string { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(std::string, std::string)>",
        "dts2cpp_convert_func_0021 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(std::string, std::string)>",
        "dts2cpp_convert_func_0021 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline46.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline46') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0021 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0022', () => {
    try {
      const result = transCkey2Dtskey('(p0:boolean,p1:number)=>string');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0022 convert output non-empty");
      assert.strictEqual(result, "std::function<std::string(bool, double)>", "dts2cpp_convert_func_0022 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0022 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0023', () => {
    try {
      const converted = transParseObj(doParseTs('sample47.ts', `
        function sample47(p0: (p0:boolean,p1:number)=>string): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample47');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(bool, double)>",
        "dts2cpp_convert_func_0023 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0023 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0024', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet47.ts', `
        function sampleRet47(): (p0:boolean,p1:number)=>string { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(bool, double)>",
        "dts2cpp_convert_func_0024 return convert output");
      const generated = generateFunctions(converted, 'sampleRet47.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet47') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0024 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0025', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass47.ts', `
        class SampleClass47 { field: (p0:boolean,p1:number)=>string; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::string(bool, double)>",
        "dts2cpp_convert_func_0025 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0025 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0026', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline47.ts', `
        function pipeline47(p: (p0:boolean,p1:number)=>string): (p0:boolean,p1:number)=>string { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(bool, double)>",
        "dts2cpp_convert_func_0026 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(bool, double)>",
        "dts2cpp_convert_func_0026 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline47.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline47') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0026 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0027', () => {
    try {
      const result = transCkey2Dtskey('(p0:boolean,p1:boolean)=>string');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0027 convert output non-empty");
      assert.strictEqual(result, "std::function<std::string(bool, bool)>", "dts2cpp_convert_func_0027 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0027 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0028', () => {
    try {
      const converted = transParseObj(doParseTs('sample48.ts', `
        function sample48(p0: (p0:boolean,p1:boolean)=>string): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample48');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(bool, bool)>",
        "dts2cpp_convert_func_0028 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0028 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0029', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet48.ts', `
        function sampleRet48(): (p0:boolean,p1:boolean)=>string { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(bool, bool)>",
        "dts2cpp_convert_func_0029 return convert output");
      const generated = generateFunctions(converted, 'sampleRet48.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet48') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0029 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0030', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass48.ts', `
        class SampleClass48 { field: (p0:boolean,p1:boolean)=>string; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::string(bool, bool)>",
        "dts2cpp_convert_func_0030 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0030 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0031', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline48.ts', `
        function pipeline48(p: (p0:boolean,p1:boolean)=>string): (p0:boolean,p1:boolean)=>string { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(bool, bool)>",
        "dts2cpp_convert_func_0031 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(bool, bool)>",
        "dts2cpp_convert_func_0031 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline48.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline48') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0031 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0032', () => {
    try {
      const result = transCkey2Dtskey('(p0:number,p1:number)=>boolean');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0032 convert output non-empty");
      assert.strictEqual(result, "std::function<bool(double, double)>", "dts2cpp_convert_func_0032 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0032 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0033', () => {
    try {
      const converted = transParseObj(doParseTs('sample49.ts', `
        function sample49(p0: (p0:number,p1:number)=>boolean): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample49');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(double, double)>",
        "dts2cpp_convert_func_0033 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0033 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0034', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet49.ts', `
        function sampleRet49(): (p0:number,p1:number)=>boolean { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(double, double)>",
        "dts2cpp_convert_func_0034 return convert output");
      const generated = generateFunctions(converted, 'sampleRet49.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet49') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0034 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0035', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass49.ts', `
        class SampleClass49 { field: (p0:number,p1:number)=>boolean; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(double, double)>",
        "dts2cpp_convert_func_0035 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0035 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0036', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline49.ts', `
        function pipeline49(p: (p0:number,p1:number)=>boolean): (p0:number,p1:number)=>boolean { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(double, double)>",
        "dts2cpp_convert_func_0036 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(double, double)>",
        "dts2cpp_convert_func_0036 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline49.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline49') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0036 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0037', () => {
    try {
      const result = transCkey2Dtskey('(p0:number,p1:boolean)=>boolean');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0037 convert output non-empty");
      assert.strictEqual(result, "std::function<bool(double, bool)>", "dts2cpp_convert_func_0037 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0037 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0038', () => {
    try {
      const converted = transParseObj(doParseTs('sample50.ts', `
        function sample50(p0: (p0:number,p1:boolean)=>boolean): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample50');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(double, bool)>",
        "dts2cpp_convert_func_0038 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0038 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0039', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet50.ts', `
        function sampleRet50(): (p0:number,p1:boolean)=>boolean { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(double, bool)>",
        "dts2cpp_convert_func_0039 return convert output");
      const generated = generateFunctions(converted, 'sampleRet50.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet50') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0039 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0040', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass50.ts', `
        class SampleClass50 { field: (p0:number,p1:boolean)=>boolean; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(double, bool)>",
        "dts2cpp_convert_func_0040 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0040 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0041', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline50.ts', `
        function pipeline50(p: (p0:number,p1:boolean)=>boolean): (p0:number,p1:boolean)=>boolean { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(double, bool)>",
        "dts2cpp_convert_func_0041 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(double, bool)>",
        "dts2cpp_convert_func_0041 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline50.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline50') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0041 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0042', () => {
    try {
      const result = transCkey2Dtskey('(p0:string,p1:string)=>boolean');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0042 convert output non-empty");
      assert.strictEqual(result, "std::function<bool(std::string, std::string)>",
        "dts2cpp_convert_func_0042 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0042 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0043', () => {
    try {
      const converted = transParseObj(doParseTs('sample51.ts', `
        function sample51(p0: (p0:string,p1:string)=>boolean): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample51');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(std::string, std::string)>",
        "dts2cpp_convert_func_0043 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0043 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0044', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet51.ts', `
        function sampleRet51(): (p0:string,p1:string)=>boolean { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(std::string, std::string)>",
        "dts2cpp_convert_func_0044 return convert output");
      const generated = generateFunctions(converted, 'sampleRet51.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet51') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0044 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0045', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass51.ts', `
        class SampleClass51 { field: (p0:string,p1:string)=>boolean; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(std::string, std::string)>",
        "dts2cpp_convert_func_0045 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0045 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0046', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline51.ts', `
        function pipeline51(p: (p0:string,p1:string)=>boolean): (p0:string,p1:string)=>boolean { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(std::string, std::string)>",
        "dts2cpp_convert_func_0046 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(std::string, std::string)>",
        "dts2cpp_convert_func_0046 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline51.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline51') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0046 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0047', () => {
    try {
      const result = transCkey2Dtskey('(p0:boolean,p1:number)=>boolean');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0047 convert output non-empty");
      assert.strictEqual(result, "std::function<bool(bool, double)>", "dts2cpp_convert_func_0047 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0047 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0048', () => {
    try {
      const converted = transParseObj(doParseTs('sample52.ts', `
        function sample52(p0: (p0:boolean,p1:number)=>boolean): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample52');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(bool, double)>",
        "dts2cpp_convert_func_0048 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0048 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0049', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet52.ts', `
        function sampleRet52(): (p0:boolean,p1:number)=>boolean { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(bool, double)>",
        "dts2cpp_convert_func_0049 return convert output");
      const generated = generateFunctions(converted, 'sampleRet52.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet52') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0049 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0050', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass52.ts', `
        class SampleClass52 { field: (p0:boolean,p1:number)=>boolean; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(bool, double)>",
        "dts2cpp_convert_func_0050 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0050 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0051', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline52.ts', `
        function pipeline52(p: (p0:boolean,p1:number)=>boolean): (p0:boolean,p1:number)=>boolean { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(bool, double)>",
        "dts2cpp_convert_func_0051 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(bool, double)>",
        "dts2cpp_convert_func_0051 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline52.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline52') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0051 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0052', () => {
    try {
      const result = transCkey2Dtskey('(p0:boolean,p1:boolean)=>boolean');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0052 convert output non-empty");
      assert.strictEqual(result, "std::function<bool(bool, bool)>", "dts2cpp_convert_func_0052 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0052 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0053', () => {
    try {
      const converted = transParseObj(doParseTs('sample53.ts', `
        function sample53(p0: (p0:boolean,p1:boolean)=>boolean): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample53');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(bool, bool)>",
        "dts2cpp_convert_func_0053 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0053 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0054', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet53.ts', `
        function sampleRet53(): (p0:boolean,p1:boolean)=>boolean { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(bool, bool)>",
        "dts2cpp_convert_func_0054 return convert output");
      const generated = generateFunctions(converted, 'sampleRet53.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet53') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0054 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0055', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass53.ts', `
        class SampleClass53 { field: (p0:boolean,p1:boolean)=>boolean; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(bool, bool)>",
        "dts2cpp_convert_func_0055 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0055 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0056', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline53.ts', `
        function pipeline53(p: (p0:boolean,p1:boolean)=>boolean): (p0:boolean,p1:boolean)=>boolean { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(bool, bool)>",
        "dts2cpp_convert_func_0056 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(bool, bool)>",
        "dts2cpp_convert_func_0056 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline53.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline53') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0056 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0057', () => {
    try {
      const result = transCkey2Dtskey('(p0:number,p1:number)=>void');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0057 convert output non-empty");
      assert.strictEqual(result, "std::function<void(double, double)>", "dts2cpp_convert_func_0057 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0057 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0058', () => {
    try {
      const converted = transParseObj(doParseTs('sample54.ts', `
        function sample54(p0: (p0:number,p1:number)=>void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample54');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, double)>",
        "dts2cpp_convert_func_0058 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0058 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0059', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet54.ts', `
        function sampleRet54(): (p0:number,p1:number)=>void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double, double)>",
        "dts2cpp_convert_func_0059 return convert output");
      const generated = generateFunctions(converted, 'sampleRet54.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet54') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0059 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0060', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass54.ts', `
        class SampleClass54 { field: (p0:number,p1:number)=>void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double, double)>",
        "dts2cpp_convert_func_0060 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0060 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0061', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline54.ts', `
        function pipeline54(p: (p0:number,p1:number)=>void): (p0:number,p1:number)=>void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double, double)>",
        "dts2cpp_convert_func_0061 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, double)>",
        "dts2cpp_convert_func_0061 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline54.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline54') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0061 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0062', () => {
    try {
      const result = transCkey2Dtskey('(p0:number,p1:boolean)=>void');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0062 convert output non-empty");
      assert.strictEqual(result, "std::function<void(double, bool)>", "dts2cpp_convert_func_0062 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0062 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0063', () => {
    try {
      const converted = transParseObj(doParseTs('sample55.ts', `
        function sample55(p0: (p0:number,p1:boolean)=>void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample55');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, bool)>",
        "dts2cpp_convert_func_0063 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0063 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0064', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet55.ts', `
        function sampleRet55(): (p0:number,p1:boolean)=>void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double, bool)>",
        "dts2cpp_convert_func_0064 return convert output");
      const generated = generateFunctions(converted, 'sampleRet55.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet55') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0064 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0065', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass55.ts', `
        class SampleClass55 { field: (p0:number,p1:boolean)=>void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double, bool)>",
        "dts2cpp_convert_func_0065 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0065 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0066', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline55.ts', `
        function pipeline55(p: (p0:number,p1:boolean)=>void): (p0:number,p1:boolean)=>void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double, bool)>",
        "dts2cpp_convert_func_0066 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, bool)>",
        "dts2cpp_convert_func_0066 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline55.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline55') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0066 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0067', () => {
    try {
      const result = transCkey2Dtskey('(p0:string,p1:string)=>void');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0067 convert output non-empty");
      assert.strictEqual(result, "std::function<void(std::string, std::string)>",
        "dts2cpp_convert_func_0067 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0067 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0068', () => {
    try {
      const converted = transParseObj(doParseTs('sample56.ts', `
        function sample56(p0: (p0:string,p1:string)=>void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample56');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::string, std::string)>",
        "dts2cpp_convert_func_0068 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0068 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0069', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet56.ts', `
        function sampleRet56(): (p0:string,p1:string)=>void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::string, std::string)>",
        "dts2cpp_convert_func_0069 return convert output");
      const generated = generateFunctions(converted, 'sampleRet56.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet56') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0069 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0070', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass56.ts', `
        class SampleClass56 { field: (p0:string,p1:string)=>void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::string, std::string)>",
        "dts2cpp_convert_func_0070 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0070 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0071', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline56.ts', `
        function pipeline56(p: (p0:string,p1:string)=>void): (p0:string,p1:string)=>void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::string, std::string)>",
        "dts2cpp_convert_func_0071 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::string, std::string)>",
        "dts2cpp_convert_func_0071 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline56.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline56') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0071 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0072', () => {
    try {
      const result = transCkey2Dtskey('(p0:boolean,p1:number)=>void');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0072 convert output non-empty");
      assert.strictEqual(result, "std::function<void(bool, double)>", "dts2cpp_convert_func_0072 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0072 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0073', () => {
    try {
      const converted = transParseObj(doParseTs('sample57.ts', `
        function sample57(p0: (p0:boolean,p1:number)=>void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample57');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(bool, double)>",
        "dts2cpp_convert_func_0073 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0073 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0074', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet57.ts', `
        function sampleRet57(): (p0:boolean,p1:number)=>void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(bool, double)>",
        "dts2cpp_convert_func_0074 return convert output");
      const generated = generateFunctions(converted, 'sampleRet57.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet57') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0074 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0075', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass57.ts', `
        class SampleClass57 { field: (p0:boolean,p1:number)=>void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(bool, double)>",
        "dts2cpp_convert_func_0075 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0075 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0076', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline57.ts', `
        function pipeline57(p: (p0:boolean,p1:number)=>void): (p0:boolean,p1:number)=>void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(bool, double)>",
        "dts2cpp_convert_func_0076 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(bool, double)>",
        "dts2cpp_convert_func_0076 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline57.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline57') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0076 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0077', () => {
    try {
      const result = transCkey2Dtskey('(p0:boolean,p1:boolean)=>void');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0077 convert output non-empty");
      assert.strictEqual(result, "std::function<void(bool, bool)>", "dts2cpp_convert_func_0077 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0077 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0078', () => {
    try {
      const converted = transParseObj(doParseTs('sample58.ts', `
        function sample58(p0: (p0:boolean,p1:boolean)=>void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample58');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(bool, bool)>",
        "dts2cpp_convert_func_0078 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0078 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0079', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet58.ts', `
        function sampleRet58(): (p0:boolean,p1:boolean)=>void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(bool, bool)>",
        "dts2cpp_convert_func_0079 return convert output");
      const generated = generateFunctions(converted, 'sampleRet58.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet58') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0079 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0080', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass58.ts', `
        class SampleClass58 { field: (p0:boolean,p1:boolean)=>void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(bool, bool)>",
        "dts2cpp_convert_func_0080 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0080 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0081', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline58.ts', `
        function pipeline58(p: (p0:boolean,p1:boolean)=>void): (p0:boolean,p1:boolean)=>void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(bool, bool)>",
        "dts2cpp_convert_func_0081 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(bool, bool)>",
        "dts2cpp_convert_func_0081 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline58.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline58') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0081 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0082', () => {
    try {
      const result = transCkey2Dtskey('Callback<any>');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0082 convert output non-empty");
      assert.strictEqual(result, "std::function<void(std::any)>", "dts2cpp_convert_func_0082 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0082 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0083', () => {
    try {
      const converted = transParseObj(doParseTs('sample69.ts', `
        function sample69(p0: Callback<any>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample69');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any)>",
        "dts2cpp_convert_func_0083 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0083 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0084', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet69.ts', `
        function sampleRet69(): Callback<any> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any)>",
        "dts2cpp_convert_func_0084 return convert output");
      const generated = generateFunctions(converted, 'sampleRet69.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet69') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0084 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0085', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass69.ts', `
        class SampleClass69 { field: Callback<any>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any)>",
        "dts2cpp_convert_func_0085 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0085 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0086', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline69.ts', `
        function pipeline69(p: Callback<any>): Callback<any> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any)>",
        "dts2cpp_convert_func_0086 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any)>",
        "dts2cpp_convert_func_0086 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline69.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline69') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0086 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0087', () => {
    try {
      const result = transCkey2Dtskey('Callback<object>');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0087 convert output non-empty");
      assert.strictEqual(result, "std::function<void(std::any)>", "dts2cpp_convert_func_0087 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0087 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0088', () => {
    try {
      const converted = transParseObj(doParseTs('sample70.ts', `
        function sample70(p0: Callback<object>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample70');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any)>",
        "dts2cpp_convert_func_0088 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0088 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0089', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet70.ts', `
        function sampleRet70(): Callback<object> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any)>",
        "dts2cpp_convert_func_0089 return convert output");
      const generated = generateFunctions(converted, 'sampleRet70.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet70') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0089 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0090', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass70.ts', `
        class SampleClass70 { field: Callback<object>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any)>",
        "dts2cpp_convert_func_0090 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0090 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0091', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline70.ts', `
        function pipeline70(p: Callback<object>): Callback<object> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any)>",
        "dts2cpp_convert_func_0091 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any)>",
        "dts2cpp_convert_func_0091 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline70.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline70') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0091 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0092', () => {
    try {
      const result = transCkey2Dtskey('Callback<any[]>');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0092 convert output non-empty");
      assert.strictEqual(result, "std::function<void(any[])>", "dts2cpp_convert_func_0092 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0092 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0093', () => {
    try {
      const converted = transParseObj(doParseTs('sample71.ts', `
        function sample71(p0: Callback<any[]>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample71');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(any[])>",
        "dts2cpp_convert_func_0093 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0093 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0094', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet71.ts', `
        function sampleRet71(): Callback<any[]> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(any[])>",
        "dts2cpp_convert_func_0094 return convert output");
      const generated = generateFunctions(converted, 'sampleRet71.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet71') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0094 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0095', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass71.ts', `
        class SampleClass71 { field: Callback<any[]>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(any[])>",
        "dts2cpp_convert_func_0095 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0095 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0096', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline71.ts', `
        function pipeline71(p: Callback<any[]>): Callback<any[]> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(any[])>",
        "dts2cpp_convert_func_0096 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(any[])>",
        "dts2cpp_convert_func_0096 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline71.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline71') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0096 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0097', () => {
    try {
      const result = transCkey2Dtskey('Callback<object[]>');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0097 convert output non-empty");
      assert.strictEqual(result, "std::function<void(object[])>", "dts2cpp_convert_func_0097 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0097 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0098', () => {
    try {
      const converted = transParseObj(doParseTs('sample72.ts', `
        function sample72(p0: Callback<object[]>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample72');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(object[])>",
        "dts2cpp_convert_func_0098 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0098 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0099', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet72.ts', `
        function sampleRet72(): Callback<object[]> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(object[])>",
        "dts2cpp_convert_func_0099 return convert output");
      const generated = generateFunctions(converted, 'sampleRet72.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet72') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0099 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0100', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass72.ts', `
        class SampleClass72 { field: Callback<object[]>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(object[])>",
        "dts2cpp_convert_func_0100 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0100 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0101', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline72.ts', `
        function pipeline72(p: Callback<object[]>): Callback<object[]> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(object[])>",
        "dts2cpp_convert_func_0101 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(object[])>",
        "dts2cpp_convert_func_0101 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline72.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline72') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0101 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0102', () => {
    try {
      const result = transCkey2Dtskey('(p0:any)=>any');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0102 convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::any)>", "dts2cpp_convert_func_0102 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0102 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0103', () => {
    try {
      const converted = transParseObj(doParseTs('sample73.ts', `
        function sample73(p0: (p0:any)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample73');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any)>",
        "dts2cpp_convert_func_0103 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0103 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0104', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet73.ts', `
        function sampleRet73(): (p0:any)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any)>",
        "dts2cpp_convert_func_0104 return convert output");
      const generated = generateFunctions(converted, 'sampleRet73.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet73') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0104 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0105', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass73.ts', `
        class SampleClass73 { field: (p0:any)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any)>",
        "dts2cpp_convert_func_0105 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0105 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0106', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline73.ts', `
        function pipeline73(p: (p0:any)=>any): (p0:any)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any)>",
        "dts2cpp_convert_func_0106 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any)>",
        "dts2cpp_convert_func_0106 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline73.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline73') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0106 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0107', () => {
    try {
      const result = transCkey2Dtskey('(p0:object)=>object');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0107 convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::any)>", "dts2cpp_convert_func_0107 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0107 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0108', () => {
    try {
      const converted = transParseObj(doParseTs('sample74.ts', `
        function sample74(p0: (p0:object)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample74');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any)>",
        "dts2cpp_convert_func_0108 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0108 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0109', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet74.ts', `
        function sampleRet74(): (p0:object)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any)>",
        "dts2cpp_convert_func_0109 return convert output");
      const generated = generateFunctions(converted, 'sampleRet74.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet74') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0109 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0110', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass74.ts', `
        class SampleClass74 { field: (p0:object)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any)>",
        "dts2cpp_convert_func_0110 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0110 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0111', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline74.ts', `
        function pipeline74(p: (p0:object)=>object): (p0:object)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any)>",
        "dts2cpp_convert_func_0111 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any)>",
        "dts2cpp_convert_func_0111 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline74.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline74') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0111 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0112', () => {
    try {
      const result = transCkey2Dtskey('(p0:any,p1:object)=>void');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0112 convert output non-empty");
      assert.strictEqual(result, "std::function<void(std::any, std::any)>", "dts2cpp_convert_func_0112 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0112 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0113', () => {
    try {
      const converted = transParseObj(doParseTs('sample75.ts', `
        function sample75(p0: (p0:any,p1:object)=>void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample75');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, std::any)>",
        "dts2cpp_convert_func_0113 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0113 execution error: ${String(err)}`);
    }
  });
});
