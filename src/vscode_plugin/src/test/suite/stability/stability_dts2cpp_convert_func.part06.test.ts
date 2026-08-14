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

suite('Stability_DTS2CPP_CONVERT_FUNC_Part06', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_CONVERT_FUNC_Part06.');


  test('dts2cpp_convert_func_0001', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet145.ts', `
        function sampleRet145(): (p0:boolean,p1:boolean)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(bool, bool)>",
        "dts2cpp_convert_func_0001 return convert output");
      const generated = generateFunctions(converted, 'sampleRet145.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet145') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0001 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0002', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass145.ts', `
        class SampleClass145 { field: (p0:boolean,p1:boolean)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<std::any(bool, bool)>",
        "dts2cpp_convert_func_0002 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0002 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0003', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline145.ts', `
        function pipeline145(p: (p0:boolean,p1:boolean)=>object): (p0:boolean,p1:boolean)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(bool, bool)>",
        "dts2cpp_convert_func_0003 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(bool, bool)>",
        "dts2cpp_convert_func_0003 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline145.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline145') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0003 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0004', () => {
    try {
      const result = transCkey2Dtskey('(p0:any,p1:any)=>void');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0004 convert output non-empty");
      assert.strictEqual(result, "std::function<void(std::any, std::any)>", "dts2cpp_convert_func_0004 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0004 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0005', () => {
    try {
      const converted = transParseObj(doParseTs('sample146.ts', `
        function sample146(p0: (p0:any,p1:any)=>void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample146');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<void(std::any, std::any)>",
        "dts2cpp_convert_func_0005 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0005 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0006', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet146.ts', `
        function sampleRet146(): (p0:any,p1:any)=>void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<void(std::any, std::any)>",
        "dts2cpp_convert_func_0006 return convert output");
      const generated = generateFunctions(converted, 'sampleRet146.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet146') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0006 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0007', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass146.ts', `
        class SampleClass146 { field: (p0:any,p1:any)=>void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<void(std::any, std::any)>",
        "dts2cpp_convert_func_0007 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0007 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0008', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline146.ts', `
        function pipeline146(p: (p0:any,p1:any)=>void): (p0:any,p1:any)=>void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<void(std::any, std::any)>",
        "dts2cpp_convert_func_0008 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<void(std::any, std::any)>",
        "dts2cpp_convert_func_0008 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline146.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline146') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0008 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0009', () => {
    try {
      const result = transCkey2Dtskey('(p0:any,p1:number)=>void');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0009 convert output non-empty");
      assert.strictEqual(result, "std::function<void(std::any, double)>", "dts2cpp_convert_func_0009 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0009 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0010', () => {
    try {
      const converted = transParseObj(doParseTs('sample147.ts', `
        function sample147(p0: (p0:any,p1:number)=>void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample147');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<void(std::any, double)>",
        "dts2cpp_convert_func_0010 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0010 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0011', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet147.ts', `
        function sampleRet147(): (p0:any,p1:number)=>void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<void(std::any, double)>",
        "dts2cpp_convert_func_0011 return convert output");
      const generated = generateFunctions(converted, 'sampleRet147.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet147') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0011 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0012', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass147.ts', `
        class SampleClass147 { field: (p0:any,p1:number)=>void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<void(std::any, double)>",
        "dts2cpp_convert_func_0012 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0012 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0013', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline147.ts', `
        function pipeline147(p: (p0:any,p1:number)=>void): (p0:any,p1:number)=>void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<void(std::any, double)>",
        "dts2cpp_convert_func_0013 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<void(std::any, double)>",
        "dts2cpp_convert_func_0013 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline147.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline147') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0013 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0014', () => {
    try {
      const result = transCkey2Dtskey('(p0:any,p1:string)=>void');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0014 convert output non-empty");
      assert.strictEqual(result,
        "std::function<void(std::any, std::string)>",
        "dts2cpp_convert_func_0014 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0014 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0015', () => {
    try {
      const converted = transParseObj(doParseTs('sample148.ts', `
        function sample148(p0: (p0:any,p1:string)=>void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample148');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<void(std::any, std::string)>",
        "dts2cpp_convert_func_0015 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0015 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0016', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet148.ts', `
        function sampleRet148(): (p0:any,p1:string)=>void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<void(std::any, std::string)>",
        "dts2cpp_convert_func_0016 return convert output");
      const generated = generateFunctions(converted, 'sampleRet148.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet148') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0016 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0017', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass148.ts', `
        class SampleClass148 { field: (p0:any,p1:string)=>void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<void(std::any, std::string)>",
        "dts2cpp_convert_func_0017 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0017 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0018', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline148.ts', `
        function pipeline148(p: (p0:any,p1:string)=>void): (p0:any,p1:string)=>void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<void(std::any, std::string)>",
        "dts2cpp_convert_func_0018 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<void(std::any, std::string)>",
        "dts2cpp_convert_func_0018 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline148.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline148') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0018 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0019', () => {
    try {
      const result = transCkey2Dtskey('(p0:any,p1:boolean)=>void');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0019 convert output non-empty");
      assert.strictEqual(result, "std::function<void(std::any, bool)>", "dts2cpp_convert_func_0019 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0019 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0020', () => {
    try {
      const converted = transParseObj(doParseTs('sample149.ts', `
        function sample149(p0: (p0:any,p1:boolean)=>void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample149');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<void(std::any, bool)>",
        "dts2cpp_convert_func_0020 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0020 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0021', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet149.ts', `
        function sampleRet149(): (p0:any,p1:boolean)=>void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<void(std::any, bool)>",
        "dts2cpp_convert_func_0021 return convert output");
      const generated = generateFunctions(converted, 'sampleRet149.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet149') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0021 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0022', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass149.ts', `
        class SampleClass149 { field: (p0:any,p1:boolean)=>void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<void(std::any, bool)>",
        "dts2cpp_convert_func_0022 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0022 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0023', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline149.ts', `
        function pipeline149(p: (p0:any,p1:boolean)=>void): (p0:any,p1:boolean)=>void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<void(std::any, bool)>",
        "dts2cpp_convert_func_0023 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<void(std::any, bool)>",
        "dts2cpp_convert_func_0023 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline149.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline149') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0023 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0024', () => {
    try {
      const result = transCkey2Dtskey('(p0:object,p1:any)=>void');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0024 convert output non-empty");
      assert.strictEqual(result, "std::function<void(std::any, std::any)>", "dts2cpp_convert_func_0024 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0024 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0025', () => {
    try {
      const converted = transParseObj(doParseTs('sample150.ts', `
        function sample150(p0: (p0:object,p1:any)=>void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample150');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<void(std::any, std::any)>",
        "dts2cpp_convert_func_0025 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0025 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0026', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet150.ts', `
        function sampleRet150(): (p0:object,p1:any)=>void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<void(std::any, std::any)>",
        "dts2cpp_convert_func_0026 return convert output");
      const generated = generateFunctions(converted, 'sampleRet150.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet150') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0026 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0027', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass150.ts', `
        class SampleClass150 { field: (p0:object,p1:any)=>void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<void(std::any, std::any)>",
        "dts2cpp_convert_func_0027 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0027 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0028', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline150.ts', `
        function pipeline150(p: (p0:object,p1:any)=>void): (p0:object,p1:any)=>void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<void(std::any, std::any)>",
        "dts2cpp_convert_func_0028 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<void(std::any, std::any)>",
        "dts2cpp_convert_func_0028 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline150.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline150') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0028 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0029', () => {
    try {
      const result = transCkey2Dtskey('(p0:object,p1:object)=>void');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0029 convert output non-empty");
      assert.strictEqual(result, "std::function<void(std::any, std::any)>", "dts2cpp_convert_func_0029 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0029 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0030', () => {
    try {
      const converted = transParseObj(doParseTs('sample151.ts', `
        function sample151(p0: (p0:object,p1:object)=>void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample151');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<void(std::any, std::any)>",
        "dts2cpp_convert_func_0030 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0030 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0031', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet151.ts', `
        function sampleRet151(): (p0:object,p1:object)=>void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<void(std::any, std::any)>",
        "dts2cpp_convert_func_0031 return convert output");
      const generated = generateFunctions(converted, 'sampleRet151.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet151') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0031 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0032', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass151.ts', `
        class SampleClass151 { field: (p0:object,p1:object)=>void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<void(std::any, std::any)>",
        "dts2cpp_convert_func_0032 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0032 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0033', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline151.ts', `
        function pipeline151(p: (p0:object,p1:object)=>void): (p0:object,p1:object)=>void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<void(std::any, std::any)>",
        "dts2cpp_convert_func_0033 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<void(std::any, std::any)>",
        "dts2cpp_convert_func_0033 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline151.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline151') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0033 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0034', () => {
    try {
      const result = transCkey2Dtskey('(p0:object,p1:number)=>void');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0034 convert output non-empty");
      assert.strictEqual(result, "std::function<void(std::any, double)>", "dts2cpp_convert_func_0034 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0034 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0035', () => {
    try {
      const converted = transParseObj(doParseTs('sample152.ts', `
        function sample152(p0: (p0:object,p1:number)=>void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample152');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<void(std::any, double)>",
        "dts2cpp_convert_func_0035 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0035 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0036', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet152.ts', `
        function sampleRet152(): (p0:object,p1:number)=>void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<void(std::any, double)>",
        "dts2cpp_convert_func_0036 return convert output");
      const generated = generateFunctions(converted, 'sampleRet152.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet152') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0036 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0037', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass152.ts', `
        class SampleClass152 { field: (p0:object,p1:number)=>void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<void(std::any, double)>",
        "dts2cpp_convert_func_0037 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0037 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0038', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline152.ts', `
        function pipeline152(p: (p0:object,p1:number)=>void): (p0:object,p1:number)=>void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<void(std::any, double)>",
        "dts2cpp_convert_func_0038 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<void(std::any, double)>",
        "dts2cpp_convert_func_0038 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline152.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline152') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0038 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0039', () => {
    try {
      const result = transCkey2Dtskey('(p0:object,p1:string)=>void');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0039 convert output non-empty");
      assert.strictEqual(result,
        "std::function<void(std::any, std::string)>",
        "dts2cpp_convert_func_0039 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0039 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0040', () => {
    try {
      const converted = transParseObj(doParseTs('sample153.ts', `
        function sample153(p0: (p0:object,p1:string)=>void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample153');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<void(std::any, std::string)>",
        "dts2cpp_convert_func_0040 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0040 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0041', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet153.ts', `
        function sampleRet153(): (p0:object,p1:string)=>void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<void(std::any, std::string)>",
        "dts2cpp_convert_func_0041 return convert output");
      const generated = generateFunctions(converted, 'sampleRet153.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet153') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0041 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0042', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass153.ts', `
        class SampleClass153 { field: (p0:object,p1:string)=>void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<void(std::any, std::string)>",
        "dts2cpp_convert_func_0042 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0042 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0043', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline153.ts', `
        function pipeline153(p: (p0:object,p1:string)=>void): (p0:object,p1:string)=>void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<void(std::any, std::string)>",
        "dts2cpp_convert_func_0043 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<void(std::any, std::string)>",
        "dts2cpp_convert_func_0043 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline153.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline153') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0043 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0044', () => {
    try {
      const result = transCkey2Dtskey('(p0:object,p1:boolean)=>void');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0044 convert output non-empty");
      assert.strictEqual(result, "std::function<void(std::any, bool)>", "dts2cpp_convert_func_0044 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0044 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0045', () => {
    try {
      const converted = transParseObj(doParseTs('sample154.ts', `
        function sample154(p0: (p0:object,p1:boolean)=>void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample154');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<void(std::any, bool)>",
        "dts2cpp_convert_func_0045 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0045 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0046', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet154.ts', `
        function sampleRet154(): (p0:object,p1:boolean)=>void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<void(std::any, bool)>",
        "dts2cpp_convert_func_0046 return convert output");
      const generated = generateFunctions(converted, 'sampleRet154.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet154') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0046 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0047', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass154.ts', `
        class SampleClass154 { field: (p0:object,p1:boolean)=>void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<void(std::any, bool)>",
        "dts2cpp_convert_func_0047 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0047 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0048', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline154.ts', `
        function pipeline154(p: (p0:object,p1:boolean)=>void): (p0:object,p1:boolean)=>void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<void(std::any, bool)>",
        "dts2cpp_convert_func_0048 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<void(std::any, bool)>",
        "dts2cpp_convert_func_0048 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline154.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline154') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0048 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0049', () => {
    try {
      const result = transCkey2Dtskey('(p0:number,p1:any)=>void');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0049 convert output non-empty");
      assert.strictEqual(result, "std::function<void(double, std::any)>", "dts2cpp_convert_func_0049 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0049 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0050', () => {
    try {
      const converted = transParseObj(doParseTs('sample155.ts', `
        function sample155(p0: (p0:number,p1:any)=>void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample155');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<void(double, std::any)>",
        "dts2cpp_convert_func_0050 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0050 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0051', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet155.ts', `
        function sampleRet155(): (p0:number,p1:any)=>void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<void(double, std::any)>",
        "dts2cpp_convert_func_0051 return convert output");
      const generated = generateFunctions(converted, 'sampleRet155.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet155') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0051 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0052', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass155.ts', `
        class SampleClass155 { field: (p0:number,p1:any)=>void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<void(double, std::any)>",
        "dts2cpp_convert_func_0052 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0052 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0053', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline155.ts', `
        function pipeline155(p: (p0:number,p1:any)=>void): (p0:number,p1:any)=>void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<void(double, std::any)>",
        "dts2cpp_convert_func_0053 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<void(double, std::any)>",
        "dts2cpp_convert_func_0053 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline155.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline155') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0053 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0054', () => {
    try {
      const result = transCkey2Dtskey('(p0:number,p1:object)=>void');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0054 convert output non-empty");
      assert.strictEqual(result, "std::function<void(double, std::any)>", "dts2cpp_convert_func_0054 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0054 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0055', () => {
    try {
      const converted = transParseObj(doParseTs('sample156.ts', `
        function sample156(p0: (p0:number,p1:object)=>void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample156');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<void(double, std::any)>",
        "dts2cpp_convert_func_0055 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0055 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0056', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet156.ts', `
        function sampleRet156(): (p0:number,p1:object)=>void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<void(double, std::any)>",
        "dts2cpp_convert_func_0056 return convert output");
      const generated = generateFunctions(converted, 'sampleRet156.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet156') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0056 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0057', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass156.ts', `
        class SampleClass156 { field: (p0:number,p1:object)=>void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<void(double, std::any)>",
        "dts2cpp_convert_func_0057 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0057 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0058', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline156.ts', `
        function pipeline156(p: (p0:number,p1:object)=>void): (p0:number,p1:object)=>void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<void(double, std::any)>",
        "dts2cpp_convert_func_0058 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<void(double, std::any)>",
        "dts2cpp_convert_func_0058 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline156.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline156') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0058 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0059', () => {
    try {
      const result = transCkey2Dtskey('(p0:number,p1:string)=>void');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0059 convert output non-empty");
      assert.strictEqual(result,
        "std::function<void(double, std::string)>",
        "dts2cpp_convert_func_0059 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0059 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0060', () => {
    try {
      const converted = transParseObj(doParseTs('sample157.ts', `
        function sample157(p0: (p0:number,p1:string)=>void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample157');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<void(double, std::string)>",
        "dts2cpp_convert_func_0060 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0060 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0061', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet157.ts', `
        function sampleRet157(): (p0:number,p1:string)=>void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<void(double, std::string)>",
        "dts2cpp_convert_func_0061 return convert output");
      const generated = generateFunctions(converted, 'sampleRet157.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet157') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0061 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0062', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass157.ts', `
        class SampleClass157 { field: (p0:number,p1:string)=>void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<void(double, std::string)>",
        "dts2cpp_convert_func_0062 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0062 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0063', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline157.ts', `
        function pipeline157(p: (p0:number,p1:string)=>void): (p0:number,p1:string)=>void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<void(double, std::string)>",
        "dts2cpp_convert_func_0063 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<void(double, std::string)>",
        "dts2cpp_convert_func_0063 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline157.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline157') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0063 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0064', () => {
    try {
      const result = transCkey2Dtskey('Promise<number>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0064 convert output non-empty");
      assert.strictEqual(result, "Promise<number>", "dts2cpp_convert_func_0064 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0064 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0065', () => {
    try {
      const converted = transParseObj(doParseTs('sample297.ts', `
        function sample297(p0: Promise<number>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample297');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "Promise<number>",
        "dts2cpp_convert_func_0065 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0065 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0066', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet297.ts', `
        function sampleRet297(): Promise<number> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "Promise<number>",
        "dts2cpp_convert_func_0066 return convert output");
      const generated = generateFunctions(converted, 'sampleRet297.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet297') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0066 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0067', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass297.ts', `
        class SampleClass297 { field: Promise<number>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "Promise<number>",
        "dts2cpp_convert_func_0067 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0067 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0068', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline297.ts', `
        function pipeline297(p: Promise<number>): Promise<number> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "Promise<number>",
        "dts2cpp_convert_func_0068 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "Promise<number>",
        "dts2cpp_convert_func_0068 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline297.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline297') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0068 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0069', () => {
    try {
      const result = transCkey2Dtskey('Promise<string>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0069 convert output non-empty");
      assert.strictEqual(result, "Promise<string>", "dts2cpp_convert_func_0069 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0069 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0070', () => {
    try {
      const converted = transParseObj(doParseTs('sample298.ts', `
        function sample298(p0: Promise<string>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample298');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "Promise<string>",
        "dts2cpp_convert_func_0070 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0070 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0071', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet298.ts', `
        function sampleRet298(): Promise<string> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "Promise<string>",
        "dts2cpp_convert_func_0071 return convert output");
      const generated = generateFunctions(converted, 'sampleRet298.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet298') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0071 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0072', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass298.ts', `
        class SampleClass298 { field: Promise<string>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "Promise<string>",
        "dts2cpp_convert_func_0072 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0072 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0073', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline298.ts', `
        function pipeline298(p: Promise<string>): Promise<string> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "Promise<string>",
        "dts2cpp_convert_func_0073 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "Promise<string>",
        "dts2cpp_convert_func_0073 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline298.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline298') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0073 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0074', () => {
    try {
      const result = transCkey2Dtskey('Promise<boolean>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0074 convert output non-empty");
      assert.strictEqual(result, "Promise<boolean>", "dts2cpp_convert_func_0074 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0074 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0075', () => {
    try {
      const converted = transParseObj(doParseTs('sample299.ts', `
        function sample299(p0: Promise<boolean>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample299');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "Promise<boolean>",
        "dts2cpp_convert_func_0075 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0075 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0076', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet299.ts', `
        function sampleRet299(): Promise<boolean> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "Promise<boolean>",
        "dts2cpp_convert_func_0076 return convert output");
      const generated = generateFunctions(converted, 'sampleRet299.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet299') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0076 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0077', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass299.ts', `
        class SampleClass299 { field: Promise<boolean>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "Promise<boolean>",
        "dts2cpp_convert_func_0077 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0077 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0078', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline299.ts', `
        function pipeline299(p: Promise<boolean>): Promise<boolean> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "Promise<boolean>",
        "dts2cpp_convert_func_0078 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "Promise<boolean>",
        "dts2cpp_convert_func_0078 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline299.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline299') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0078 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0079', () => {
    try {
      const result = transCkey2Dtskey('Promise<void>');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0079 convert output non-empty");
      assert.strictEqual(result, "Promise<void>", "dts2cpp_convert_func_0079 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0079 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0080', () => {
    try {
      const converted = transParseObj(doParseTs('sample300.ts', `
        function sample300(p0: Promise<void>): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample300');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "Promise<void>",
        "dts2cpp_convert_func_0080 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0080 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0081', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet300.ts', `
        function sampleRet300(): Promise<void> { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "Promise<void>",
        "dts2cpp_convert_func_0081 return convert output");
      const generated = generateFunctions(converted, 'sampleRet300.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet300') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0081 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0082', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass300.ts', `
        class SampleClass300 { field: Promise<void>; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "Promise<void>",
        "dts2cpp_convert_func_0082 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0082 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0083', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline300.ts', `
        function pipeline300(p: Promise<void>): Promise<void> { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "Promise<void>",
        "dts2cpp_convert_func_0083 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "Promise<void>",
        "dts2cpp_convert_func_0083 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline300.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline300') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0083 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0084', () => {
    try {
      const result = transCkey2Dtskey('((a: number)=> number)');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0084 convert output non-empty");
      assert.strictEqual(result, "std::function<double(double)>", "dts2cpp_convert_func_0084 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0084 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0085', () => {
    try {
      const converted = transParseObj(doParseTs('sample306.ts', `
        function sample306(p0: ((a: number)=> number)): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample306');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<double(double)>",
        "dts2cpp_convert_func_0085 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0085 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0086', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet306.ts', `
        function sampleRet306(): ((a: number)=> number) { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<double(double)>",
        "dts2cpp_convert_func_0086 return convert output");
      const generated = generateFunctions(converted, 'sampleRet306.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet306') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0086 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0087', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass306.ts', `
        class SampleClass306 { field: ((a: number)=> number); method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<double(double)>",
        "dts2cpp_convert_func_0087 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0087 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0088', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline306.ts', `
        function pipeline306(p: ((a: number)=> number)): ((a: number)=> number) { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<double(double)>",
        "dts2cpp_convert_func_0088 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<double(double)>",
        "dts2cpp_convert_func_0088 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline306.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline306') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0088 execution error: ${String(err)}`);
    }
  });
});
