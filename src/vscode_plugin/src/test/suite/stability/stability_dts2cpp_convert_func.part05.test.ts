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

suite('Stability_DTS2CPP_CONVERT_FUNC_Part05', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_CONVERT_FUNC_Part05.');


  test('dts2cpp_convert_func_0001', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline122.ts', `
        function pipeline122(p: (p0:any,p1:object)=>object): (p0:any,p1:object)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0001 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0001 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline122.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline122') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0001 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0002', () => {
    try {
      const result = transCkey2Dtskey('(p0:any,p1:number)=>object');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0002 convert output non-empty");
      assert.strictEqual(result,
        "std::function<std::any(std::any, double)>",
        "dts2cpp_convert_func_0002 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0002 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0003', () => {
    try {
      const converted = transParseObj(doParseTs('sample123.ts', `
        function sample123(p0: (p0:any,p1:number)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample123');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(std::any, double)>",
        "dts2cpp_convert_func_0003 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0003 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0004', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet123.ts', `
        function sampleRet123(): (p0:any,p1:number)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(std::any, double)>",
        "dts2cpp_convert_func_0004 return convert output");
      const generated = generateFunctions(converted, 'sampleRet123.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet123') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0004 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0005', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass123.ts', `
        class SampleClass123 { field: (p0:any,p1:number)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<std::any(std::any, double)>",
        "dts2cpp_convert_func_0005 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0005 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0006', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline123.ts', `
        function pipeline123(p: (p0:any,p1:number)=>object): (p0:any,p1:number)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(std::any, double)>",
        "dts2cpp_convert_func_0006 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(std::any, double)>",
        "dts2cpp_convert_func_0006 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline123.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline123') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0006 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0007', () => {
    try {
      const result = transCkey2Dtskey('(p0:any,p1:string)=>object');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0007 convert output non-empty");
      assert.strictEqual(result,
        "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0007 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0007 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0008', () => {
    try {
      const converted = transParseObj(doParseTs('sample124.ts', `
        function sample124(p0: (p0:any,p1:string)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample124');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0008 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0008 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0009', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet124.ts', `
        function sampleRet124(): (p0:any,p1:string)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0009 return convert output");
      const generated = generateFunctions(converted, 'sampleRet124.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet124') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0009 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0010', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass124.ts', `
        class SampleClass124 { field: (p0:any,p1:string)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0010 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0010 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0011', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline124.ts', `
        function pipeline124(p: (p0:any,p1:string)=>object): (p0:any,p1:string)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0011 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0011 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline124.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline124') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0011 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0012', () => {
    try {
      const result = transCkey2Dtskey('(p0:any,p1:boolean)=>object');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0012 convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::any, bool)>", "dts2cpp_convert_func_0012 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0012 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0013', () => {
    try {
      const converted = transParseObj(doParseTs('sample125.ts', `
        function sample125(p0: (p0:any,p1:boolean)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample125');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(std::any, bool)>",
        "dts2cpp_convert_func_0013 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0013 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0014', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet125.ts', `
        function sampleRet125(): (p0:any,p1:boolean)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(std::any, bool)>",
        "dts2cpp_convert_func_0014 return convert output");
      const generated = generateFunctions(converted, 'sampleRet125.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet125') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0014 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0015', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass125.ts', `
        class SampleClass125 { field: (p0:any,p1:boolean)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<std::any(std::any, bool)>",
        "dts2cpp_convert_func_0015 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0015 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0016', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline125.ts', `
        function pipeline125(p: (p0:any,p1:boolean)=>object): (p0:any,p1:boolean)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(std::any, bool)>",
        "dts2cpp_convert_func_0016 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(std::any, bool)>",
        "dts2cpp_convert_func_0016 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline125.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline125') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0016 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0017', () => {
    try {
      const result = transCkey2Dtskey('(p0:object,p1:any)=>object');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0017 convert output non-empty");
      assert.strictEqual(result,
        "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0017 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0017 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0018', () => {
    try {
      const converted = transParseObj(doParseTs('sample126.ts', `
        function sample126(p0: (p0:object,p1:any)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample126');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0018 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0018 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0019', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet126.ts', `
        function sampleRet126(): (p0:object,p1:any)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0019 return convert output");
      const generated = generateFunctions(converted, 'sampleRet126.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet126') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0019 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0020', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass126.ts', `
        class SampleClass126 { field: (p0:object,p1:any)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0020 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0020 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0021', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline126.ts', `
        function pipeline126(p: (p0:object,p1:any)=>object): (p0:object,p1:any)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0021 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0021 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline126.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline126') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0021 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0022', () => {
    try {
      const result = transCkey2Dtskey('(p0:object,p1:object)=>object');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0022 convert output non-empty");
      assert.strictEqual(result,
        "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0022 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0022 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0023', () => {
    try {
      const converted = transParseObj(doParseTs('sample127.ts', `
        function sample127(p0: (p0:object,p1:object)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample127');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0023 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0023 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0024', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet127.ts', `
        function sampleRet127(): (p0:object,p1:object)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0024 return convert output");
      const generated = generateFunctions(converted, 'sampleRet127.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet127') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0024 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0025', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass127.ts', `
        class SampleClass127 { field: (p0:object,p1:object)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0025 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0025 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0026', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline127.ts', `
        function pipeline127(p: (p0:object,p1:object)=>object): (p0:object,p1:object)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0026 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0026 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline127.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline127') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0026 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0027', () => {
    try {
      const result = transCkey2Dtskey('(p0:object,p1:number)=>object');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0027 convert output non-empty");
      assert.strictEqual(result,
        "std::function<std::any(std::any, double)>",
        "dts2cpp_convert_func_0027 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0027 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0028', () => {
    try {
      const converted = transParseObj(doParseTs('sample128.ts', `
        function sample128(p0: (p0:object,p1:number)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample128');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(std::any, double)>",
        "dts2cpp_convert_func_0028 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0028 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0029', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet128.ts', `
        function sampleRet128(): (p0:object,p1:number)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(std::any, double)>",
        "dts2cpp_convert_func_0029 return convert output");
      const generated = generateFunctions(converted, 'sampleRet128.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet128') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0029 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0030', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass128.ts', `
        class SampleClass128 { field: (p0:object,p1:number)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<std::any(std::any, double)>",
        "dts2cpp_convert_func_0030 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0030 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0031', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline128.ts', `
        function pipeline128(p: (p0:object,p1:number)=>object): (p0:object,p1:number)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(std::any, double)>",
        "dts2cpp_convert_func_0031 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(std::any, double)>",
        "dts2cpp_convert_func_0031 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline128.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline128') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0031 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0032', () => {
    try {
      const result = transCkey2Dtskey('(p0:object,p1:string)=>object');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0032 convert output non-empty");
      assert.strictEqual(result,
        "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0032 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0032 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0033', () => {
    try {
      const converted = transParseObj(doParseTs('sample129.ts', `
        function sample129(p0: (p0:object,p1:string)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample129');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0033 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0033 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0034', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet129.ts', `
        function sampleRet129(): (p0:object,p1:string)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0034 return convert output");
      const generated = generateFunctions(converted, 'sampleRet129.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet129') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0034 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0035', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass129.ts', `
        class SampleClass129 { field: (p0:object,p1:string)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0035 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0035 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0036', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline129.ts', `
        function pipeline129(p: (p0:object,p1:string)=>object): (p0:object,p1:string)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0036 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0036 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline129.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline129') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0036 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0037', () => {
    try {
      const result = transCkey2Dtskey('(p0:object,p1:boolean)=>object');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0037 convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::any, bool)>", "dts2cpp_convert_func_0037 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0037 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0038', () => {
    try {
      const converted = transParseObj(doParseTs('sample130.ts', `
        function sample130(p0: (p0:object,p1:boolean)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample130');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(std::any, bool)>",
        "dts2cpp_convert_func_0038 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0038 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0039', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet130.ts', `
        function sampleRet130(): (p0:object,p1:boolean)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(std::any, bool)>",
        "dts2cpp_convert_func_0039 return convert output");
      const generated = generateFunctions(converted, 'sampleRet130.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet130') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0039 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0040', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass130.ts', `
        class SampleClass130 { field: (p0:object,p1:boolean)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<std::any(std::any, bool)>",
        "dts2cpp_convert_func_0040 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0040 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0041', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline130.ts', `
        function pipeline130(p: (p0:object,p1:boolean)=>object): (p0:object,p1:boolean)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(std::any, bool)>",
        "dts2cpp_convert_func_0041 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(std::any, bool)>",
        "dts2cpp_convert_func_0041 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline130.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline130') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0041 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0042', () => {
    try {
      const result = transCkey2Dtskey('(p0:number,p1:any)=>object');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0042 convert output non-empty");
      assert.strictEqual(result,
        "std::function<std::any(double, std::any)>",
        "dts2cpp_convert_func_0042 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0042 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0043', () => {
    try {
      const converted = transParseObj(doParseTs('sample131.ts', `
        function sample131(p0: (p0:number,p1:any)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample131');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(double, std::any)>",
        "dts2cpp_convert_func_0043 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0043 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0044', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet131.ts', `
        function sampleRet131(): (p0:number,p1:any)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(double, std::any)>",
        "dts2cpp_convert_func_0044 return convert output");
      const generated = generateFunctions(converted, 'sampleRet131.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet131') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0044 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0045', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass131.ts', `
        class SampleClass131 { field: (p0:number,p1:any)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<std::any(double, std::any)>",
        "dts2cpp_convert_func_0045 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0045 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0046', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline131.ts', `
        function pipeline131(p: (p0:number,p1:any)=>object): (p0:number,p1:any)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(double, std::any)>",
        "dts2cpp_convert_func_0046 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(double, std::any)>",
        "dts2cpp_convert_func_0046 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline131.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline131') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0046 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0047', () => {
    try {
      const result = transCkey2Dtskey('(p0:number,p1:object)=>object');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0047 convert output non-empty");
      assert.strictEqual(result,
        "std::function<std::any(double, std::any)>",
        "dts2cpp_convert_func_0047 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0047 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0048', () => {
    try {
      const converted = transParseObj(doParseTs('sample132.ts', `
        function sample132(p0: (p0:number,p1:object)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample132');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(double, std::any)>",
        "dts2cpp_convert_func_0048 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0048 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0049', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet132.ts', `
        function sampleRet132(): (p0:number,p1:object)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(double, std::any)>",
        "dts2cpp_convert_func_0049 return convert output");
      const generated = generateFunctions(converted, 'sampleRet132.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet132') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0049 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0050', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass132.ts', `
        class SampleClass132 { field: (p0:number,p1:object)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<std::any(double, std::any)>",
        "dts2cpp_convert_func_0050 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0050 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0051', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline132.ts', `
        function pipeline132(p: (p0:number,p1:object)=>object): (p0:number,p1:object)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(double, std::any)>",
        "dts2cpp_convert_func_0051 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(double, std::any)>",
        "dts2cpp_convert_func_0051 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline132.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline132') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0051 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0052', () => {
    try {
      const result = transCkey2Dtskey('(p0:number,p1:number)=>object');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0052 convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(double, double)>", "dts2cpp_convert_func_0052 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0052 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0053', () => {
    try {
      const converted = transParseObj(doParseTs('sample133.ts', `
        function sample133(p0: (p0:number,p1:number)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample133');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(double, double)>",
        "dts2cpp_convert_func_0053 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0053 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0054', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet133.ts', `
        function sampleRet133(): (p0:number,p1:number)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(double, double)>",
        "dts2cpp_convert_func_0054 return convert output");
      const generated = generateFunctions(converted, 'sampleRet133.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet133') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0054 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0055', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass133.ts', `
        class SampleClass133 { field: (p0:number,p1:number)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<std::any(double, double)>",
        "dts2cpp_convert_func_0055 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0055 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0056', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline133.ts', `
        function pipeline133(p: (p0:number,p1:number)=>object): (p0:number,p1:number)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(double, double)>",
        "dts2cpp_convert_func_0056 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(double, double)>",
        "dts2cpp_convert_func_0056 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline133.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline133') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0056 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0057', () => {
    try {
      const result = transCkey2Dtskey('(p0:number,p1:string)=>object');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0057 convert output non-empty");
      assert.strictEqual(result,
        "std::function<std::any(double, std::string)>",
        "dts2cpp_convert_func_0057 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0057 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0058', () => {
    try {
      const converted = transParseObj(doParseTs('sample134.ts', `
        function sample134(p0: (p0:number,p1:string)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample134');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(double, std::string)>",
        "dts2cpp_convert_func_0058 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0058 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0059', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet134.ts', `
        function sampleRet134(): (p0:number,p1:string)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(double, std::string)>",
        "dts2cpp_convert_func_0059 return convert output");
      const generated = generateFunctions(converted, 'sampleRet134.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet134') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0059 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0060', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass134.ts', `
        class SampleClass134 { field: (p0:number,p1:string)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<std::any(double, std::string)>",
        "dts2cpp_convert_func_0060 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0060 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0061', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline134.ts', `
        function pipeline134(p: (p0:number,p1:string)=>object): (p0:number,p1:string)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(double, std::string)>",
        "dts2cpp_convert_func_0061 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(double, std::string)>",
        "dts2cpp_convert_func_0061 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline134.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline134') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0061 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0062', () => {
    try {
      const result = transCkey2Dtskey('(p0:number,p1:boolean)=>object');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0062 convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(double, bool)>", "dts2cpp_convert_func_0062 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0062 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0063', () => {
    try {
      const converted = transParseObj(doParseTs('sample135.ts', `
        function sample135(p0: (p0:number,p1:boolean)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample135');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(double, bool)>",
        "dts2cpp_convert_func_0063 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0063 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0064', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet135.ts', `
        function sampleRet135(): (p0:number,p1:boolean)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(double, bool)>",
        "dts2cpp_convert_func_0064 return convert output");
      const generated = generateFunctions(converted, 'sampleRet135.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet135') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0064 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0065', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass135.ts', `
        class SampleClass135 { field: (p0:number,p1:boolean)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<std::any(double, bool)>",
        "dts2cpp_convert_func_0065 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0065 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0066', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline135.ts', `
        function pipeline135(p: (p0:number,p1:boolean)=>object): (p0:number,p1:boolean)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(double, bool)>",
        "dts2cpp_convert_func_0066 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(double, bool)>",
        "dts2cpp_convert_func_0066 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline135.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline135') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0066 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0067', () => {
    try {
      const result = transCkey2Dtskey('(p0:string,p1:any)=>object');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0067 convert output non-empty");
      assert.strictEqual(result,
        "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0067 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0067 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0068', () => {
    try {
      const converted = transParseObj(doParseTs('sample136.ts', `
        function sample136(p0: (p0:string,p1:any)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample136');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0068 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0068 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0069', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet136.ts', `
        function sampleRet136(): (p0:string,p1:any)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0069 return convert output");
      const generated = generateFunctions(converted, 'sampleRet136.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet136') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0069 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0070', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass136.ts', `
        class SampleClass136 { field: (p0:string,p1:any)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0070 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0070 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0071', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline136.ts', `
        function pipeline136(p: (p0:string,p1:any)=>object): (p0:string,p1:any)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0071 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0071 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline136.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline136') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0071 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0072', () => {
    try {
      const result = transCkey2Dtskey('(p0:string,p1:object)=>object');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0072 convert output non-empty");
      assert.strictEqual(result,
        "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0072 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0072 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0073', () => {
    try {
      const converted = transParseObj(doParseTs('sample137.ts', `
        function sample137(p0: (p0:string,p1:object)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample137');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0073 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0073 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0074', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet137.ts', `
        function sampleRet137(): (p0:string,p1:object)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0074 return convert output");
      const generated = generateFunctions(converted, 'sampleRet137.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet137') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0074 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0075', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass137.ts', `
        class SampleClass137 { field: (p0:string,p1:object)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0075 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0075 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0076', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline137.ts', `
        function pipeline137(p: (p0:string,p1:object)=>object): (p0:string,p1:object)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0076 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0076 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline137.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline137') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0076 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0077', () => {
    try {
      const result = transCkey2Dtskey('(p0:string,p1:number)=>object');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0077 convert output non-empty");
      assert.strictEqual(result,
        "std::function<std::any(std::string, double)>",
        "dts2cpp_convert_func_0077 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0077 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0078', () => {
    try {
      const converted = transParseObj(doParseTs('sample138.ts', `
        function sample138(p0: (p0:string,p1:number)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample138');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(std::string, double)>",
        "dts2cpp_convert_func_0078 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0078 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0079', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet138.ts', `
        function sampleRet138(): (p0:string,p1:number)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(std::string, double)>",
        "dts2cpp_convert_func_0079 return convert output");
      const generated = generateFunctions(converted, 'sampleRet138.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet138') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0079 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0080', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass138.ts', `
        class SampleClass138 { field: (p0:string,p1:number)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<std::any(std::string, double)>",
        "dts2cpp_convert_func_0080 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0080 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0081', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline138.ts', `
        function pipeline138(p: (p0:string,p1:number)=>object): (p0:string,p1:number)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(std::string, double)>",
        "dts2cpp_convert_func_0081 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(std::string, double)>",
        "dts2cpp_convert_func_0081 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline138.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline138') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0081 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0082', () => {
    try {
      const result = transCkey2Dtskey('(p0:string,p1:string)=>object');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0082 convert output non-empty");
      assert.strictEqual(result,
        "std::function<std::any(std::string, std::string)>",
        "dts2cpp_convert_func_0082 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0082 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0083', () => {
    try {
      const converted = transParseObj(doParseTs('sample139.ts', `
        function sample139(p0: (p0:string,p1:string)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample139');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(std::string, std::string)>",
        "dts2cpp_convert_func_0083 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0083 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0084', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet139.ts', `
        function sampleRet139(): (p0:string,p1:string)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(std::string, std::string)>",
        "dts2cpp_convert_func_0084 return convert output");
      const generated = generateFunctions(converted, 'sampleRet139.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet139') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0084 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0085', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass139.ts', `
        class SampleClass139 { field: (p0:string,p1:string)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<std::any(std::string, std::string)>",
        "dts2cpp_convert_func_0085 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0085 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0086', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline139.ts', `
        function pipeline139(p: (p0:string,p1:string)=>object): (p0:string,p1:string)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(std::string, std::string)>",
        "dts2cpp_convert_func_0086 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(std::string, std::string)>",
        "dts2cpp_convert_func_0086 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline139.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline139') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0086 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0087', () => {
    try {
      const result = transCkey2Dtskey('(p0:string,p1:boolean)=>object');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0087 convert output non-empty");
      assert.strictEqual(result,
        "std::function<std::any(std::string, bool)>",
        "dts2cpp_convert_func_0087 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0087 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0088', () => {
    try {
      const converted = transParseObj(doParseTs('sample140.ts', `
        function sample140(p0: (p0:string,p1:boolean)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample140');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(std::string, bool)>",
        "dts2cpp_convert_func_0088 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0088 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0089', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet140.ts', `
        function sampleRet140(): (p0:string,p1:boolean)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(std::string, bool)>",
        "dts2cpp_convert_func_0089 return convert output");
      const generated = generateFunctions(converted, 'sampleRet140.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet140') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0089 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0090', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass140.ts', `
        class SampleClass140 { field: (p0:string,p1:boolean)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<std::any(std::string, bool)>",
        "dts2cpp_convert_func_0090 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0090 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0091', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline140.ts', `
        function pipeline140(p: (p0:string,p1:boolean)=>object): (p0:string,p1:boolean)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(std::string, bool)>",
        "dts2cpp_convert_func_0091 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(std::string, bool)>",
        "dts2cpp_convert_func_0091 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline140.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline140') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0091 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0092', () => {
    try {
      const result = transCkey2Dtskey('(p0:boolean,p1:any)=>object');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0092 convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(bool, std::any)>", "dts2cpp_convert_func_0092 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0092 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0093', () => {
    try {
      const converted = transParseObj(doParseTs('sample141.ts', `
        function sample141(p0: (p0:boolean,p1:any)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample141');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(bool, std::any)>",
        "dts2cpp_convert_func_0093 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0093 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0094', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet141.ts', `
        function sampleRet141(): (p0:boolean,p1:any)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(bool, std::any)>",
        "dts2cpp_convert_func_0094 return convert output");
      const generated = generateFunctions(converted, 'sampleRet141.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet141') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0094 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0095', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass141.ts', `
        class SampleClass141 { field: (p0:boolean,p1:any)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<std::any(bool, std::any)>",
        "dts2cpp_convert_func_0095 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0095 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0096', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline141.ts', `
        function pipeline141(p: (p0:boolean,p1:any)=>object): (p0:boolean,p1:any)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(bool, std::any)>",
        "dts2cpp_convert_func_0096 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(bool, std::any)>",
        "dts2cpp_convert_func_0096 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline141.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline141') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0096 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0097', () => {
    try {
      const result = transCkey2Dtskey('(p0:boolean,p1:object)=>object');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0097 convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(bool, std::any)>", "dts2cpp_convert_func_0097 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0097 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0098', () => {
    try {
      const converted = transParseObj(doParseTs('sample142.ts', `
        function sample142(p0: (p0:boolean,p1:object)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample142');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(bool, std::any)>",
        "dts2cpp_convert_func_0098 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0098 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0099', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet142.ts', `
        function sampleRet142(): (p0:boolean,p1:object)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(bool, std::any)>",
        "dts2cpp_convert_func_0099 return convert output");
      const generated = generateFunctions(converted, 'sampleRet142.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet142') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0099 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0100', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass142.ts', `
        class SampleClass142 { field: (p0:boolean,p1:object)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<std::any(bool, std::any)>",
        "dts2cpp_convert_func_0100 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0100 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0101', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline142.ts', `
        function pipeline142(p: (p0:boolean,p1:object)=>object): (p0:boolean,p1:object)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(bool, std::any)>",
        "dts2cpp_convert_func_0101 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(bool, std::any)>",
        "dts2cpp_convert_func_0101 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline142.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline142') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0101 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0102', () => {
    try {
      const result = transCkey2Dtskey('(p0:boolean,p1:number)=>object');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0102 convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(bool, double)>", "dts2cpp_convert_func_0102 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0102 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0103', () => {
    try {
      const converted = transParseObj(doParseTs('sample143.ts', `
        function sample143(p0: (p0:boolean,p1:number)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample143');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(bool, double)>",
        "dts2cpp_convert_func_0103 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0103 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0104', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet143.ts', `
        function sampleRet143(): (p0:boolean,p1:number)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(bool, double)>",
        "dts2cpp_convert_func_0104 return convert output");
      const generated = generateFunctions(converted, 'sampleRet143.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet143') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0104 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0105', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass143.ts', `
        class SampleClass143 { field: (p0:boolean,p1:number)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<std::any(bool, double)>",
        "dts2cpp_convert_func_0105 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0105 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0106', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline143.ts', `
        function pipeline143(p: (p0:boolean,p1:number)=>object): (p0:boolean,p1:number)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(bool, double)>",
        "dts2cpp_convert_func_0106 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(bool, double)>",
        "dts2cpp_convert_func_0106 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline143.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline143') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0106 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0107', () => {
    try {
      const result = transCkey2Dtskey('(p0:boolean,p1:string)=>object');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0107 convert output non-empty");
      assert.strictEqual(result,
        "std::function<std::any(bool, std::string)>",
        "dts2cpp_convert_func_0107 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0107 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0108', () => {
    try {
      const converted = transParseObj(doParseTs('sample144.ts', `
        function sample144(p0: (p0:boolean,p1:string)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample144');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(bool, std::string)>",
        "dts2cpp_convert_func_0108 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0108 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0109', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet144.ts', `
        function sampleRet144(): (p0:boolean,p1:string)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(bool, std::string)>",
        "dts2cpp_convert_func_0109 return convert output");
      const generated = generateFunctions(converted, 'sampleRet144.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet144') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0109 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0110', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass144.ts', `
        class SampleClass144 { field: (p0:boolean,p1:string)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<std::any(bool, std::string)>",
        "dts2cpp_convert_func_0110 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0110 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0111', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline144.ts', `
        function pipeline144(p: (p0:boolean,p1:string)=>object): (p0:boolean,p1:string)=>object { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns,
        "std::function<std::any(bool, std::string)>",
        "dts2cpp_convert_func_0111 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(bool, std::string)>",
        "dts2cpp_convert_func_0111 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline144.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string',
        "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline144') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0111 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0112', () => {
    try {
      const result = transCkey2Dtskey('(p0:boolean,p1:boolean)=>object');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_func_0112 convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(bool, bool)>", "dts2cpp_convert_func_0112 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0112 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0113', () => {
    try {
      const converted = transParseObj(doParseTs('sample145.ts', `
        function sample145(p0: (p0:boolean,p1:boolean)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample145');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type,
        "std::function<std::any(bool, bool)>",
        "dts2cpp_convert_func_0113 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0113 execution error: ${String(err)}`);
    }
  });
});
