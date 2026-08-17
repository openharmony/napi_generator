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

suite('Stability_DTS2CPP_CONVERT_FUNC_Part04', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_CONVERT_FUNC_Part04.');


  test('dts2cpp_convert_func_0001', () => {
    try {
      const converted = transParseObj(doParseTs('sample100.ts', `
        function sample100(p0: (p0:any,p1:number)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample100');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, double)>",
        "dts2cpp_convert_func_0001 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0001 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0002', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet100.ts', `
        function sampleRet100(): (p0:any,p1:number)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, double)>",
        "dts2cpp_convert_func_0002 return convert output");
      const generated = generateFunctions(converted, 'sampleRet100.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet100') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0002 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0003', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass100.ts', `
        class SampleClass100 { field: (p0:any,p1:number)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, double)>",
        "dts2cpp_convert_func_0003 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0003 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0004', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline100.ts', `
        function pipeline100(p: (p0:any,p1:number)=>any): (p0:any,p1:number)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, double)>",
        "dts2cpp_convert_func_0004 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, double)>",
        "dts2cpp_convert_func_0004 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline100.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline100') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0004 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0005', () => {
    try {
      const result = transCkey2Dtskey('(p0:any,p1:string)=>any');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0005 convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0005 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0005 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0006', () => {
    try {
      const converted = transParseObj(doParseTs('sample101.ts', `
        function sample101(p0: (p0:any,p1:string)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample101');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0006 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0006 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0007', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet101.ts', `
        function sampleRet101(): (p0:any,p1:string)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0007 return convert output");
      const generated = generateFunctions(converted, 'sampleRet101.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet101') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0007 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0008', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass101.ts', `
        class SampleClass101 { field: (p0:any,p1:string)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0008 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0008 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0009', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline101.ts', `
        function pipeline101(p: (p0:any,p1:string)=>any): (p0:any,p1:string)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0009 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0009 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline101.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline101') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0009 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0010', () => {
    try {
      const result = transCkey2Dtskey('(p0:any,p1:boolean)=>any');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0010 convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::any, bool)>", "dts2cpp_convert_func_0010 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0010 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0011', () => {
    try {
      const converted = transParseObj(doParseTs('sample102.ts', `
        function sample102(p0: (p0:any,p1:boolean)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample102');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, bool)>",
        "dts2cpp_convert_func_0011 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0011 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0012', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet102.ts', `
        function sampleRet102(): (p0:any,p1:boolean)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, bool)>",
        "dts2cpp_convert_func_0012 return convert output");
      const generated = generateFunctions(converted, 'sampleRet102.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet102') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0012 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0013', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass102.ts', `
        class SampleClass102 { field: (p0:any,p1:boolean)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, bool)>",
        "dts2cpp_convert_func_0013 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0013 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0014', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline102.ts', `
        function pipeline102(p: (p0:any,p1:boolean)=>any): (p0:any,p1:boolean)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, bool)>",
        "dts2cpp_convert_func_0014 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, bool)>",
        "dts2cpp_convert_func_0014 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline102.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline102') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0014 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0015', () => {
    try {
      const result = transCkey2Dtskey('(p0:object,p1:any)=>any');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0015 convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0015 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0015 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0016', () => {
    try {
      const converted = transParseObj(doParseTs('sample103.ts', `
        function sample103(p0: (p0:object,p1:any)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample103');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0016 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0016 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0017', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet103.ts', `
        function sampleRet103(): (p0:object,p1:any)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0017 return convert output");
      const generated = generateFunctions(converted, 'sampleRet103.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet103') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0017 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0018', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass103.ts', `
        class SampleClass103 { field: (p0:object,p1:any)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0018 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0018 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0019', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline103.ts', `
        function pipeline103(p: (p0:object,p1:any)=>any): (p0:object,p1:any)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0019 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0019 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline103.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline103') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0019 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0020', () => {
    try {
      const result = transCkey2Dtskey('(p0:object,p1:number)=>any');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0020 convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::any, double)>", "dts2cpp_convert_func_0020 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0020 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0021', () => {
    try {
      const converted = transParseObj(doParseTs('sample104.ts', `
        function sample104(p0: (p0:object,p1:number)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample104');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, double)>",
        "dts2cpp_convert_func_0021 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0021 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0022', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet104.ts', `
        function sampleRet104(): (p0:object,p1:number)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, double)>",
        "dts2cpp_convert_func_0022 return convert output");
      const generated = generateFunctions(converted, 'sampleRet104.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet104') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0022 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0023', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass104.ts', `
        class SampleClass104 { field: (p0:object,p1:number)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, double)>",
        "dts2cpp_convert_func_0023 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0023 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0024', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline104.ts', `
        function pipeline104(p: (p0:object,p1:number)=>any): (p0:object,p1:number)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, double)>",
        "dts2cpp_convert_func_0024 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, double)>",
        "dts2cpp_convert_func_0024 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline104.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline104') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0024 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0025', () => {
    try {
      const result = transCkey2Dtskey('(p0:object,p1:string)=>any');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0025 convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0025 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0025 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0026', () => {
    try {
      const converted = transParseObj(doParseTs('sample105.ts', `
        function sample105(p0: (p0:object,p1:string)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample105');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0026 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0026 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0027', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet105.ts', `
        function sampleRet105(): (p0:object,p1:string)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0027 return convert output");
      const generated = generateFunctions(converted, 'sampleRet105.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet105') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0027 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0028', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass105.ts', `
        class SampleClass105 { field: (p0:object,p1:string)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0028 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0028 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0029', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline105.ts', `
        function pipeline105(p: (p0:object,p1:string)=>any): (p0:object,p1:string)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0029 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::string)>",
        "dts2cpp_convert_func_0029 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline105.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline105') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0029 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0030', () => {
    try {
      const result = transCkey2Dtskey('(p0:object,p1:boolean)=>any');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0030 convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::any, bool)>", "dts2cpp_convert_func_0030 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0030 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0031', () => {
    try {
      const converted = transParseObj(doParseTs('sample106.ts', `
        function sample106(p0: (p0:object,p1:boolean)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample106');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, bool)>",
        "dts2cpp_convert_func_0031 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0031 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0032', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet106.ts', `
        function sampleRet106(): (p0:object,p1:boolean)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, bool)>",
        "dts2cpp_convert_func_0032 return convert output");
      const generated = generateFunctions(converted, 'sampleRet106.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet106') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0032 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0033', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass106.ts', `
        class SampleClass106 { field: (p0:object,p1:boolean)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, bool)>",
        "dts2cpp_convert_func_0033 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0033 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0034', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline106.ts', `
        function pipeline106(p: (p0:object,p1:boolean)=>any): (p0:object,p1:boolean)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, bool)>",
        "dts2cpp_convert_func_0034 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, bool)>",
        "dts2cpp_convert_func_0034 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline106.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline106') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0034 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0035', () => {
    try {
      const result = transCkey2Dtskey('(p0:number,p1:any)=>any');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0035 convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(double, std::any)>", "dts2cpp_convert_func_0035 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0035 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0036', () => {
    try {
      const converted = transParseObj(doParseTs('sample107.ts', `
        function sample107(p0: (p0:number,p1:any)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample107');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, std::any)>",
        "dts2cpp_convert_func_0036 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0036 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0037', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet107.ts', `
        function sampleRet107(): (p0:number,p1:any)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, std::any)>",
        "dts2cpp_convert_func_0037 return convert output");
      const generated = generateFunctions(converted, 'sampleRet107.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet107') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0037 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0038', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass107.ts', `
        class SampleClass107 { field: (p0:number,p1:any)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(double, std::any)>",
        "dts2cpp_convert_func_0038 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0038 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0039', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline107.ts', `
        function pipeline107(p: (p0:number,p1:any)=>any): (p0:number,p1:any)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, std::any)>",
        "dts2cpp_convert_func_0039 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, std::any)>",
        "dts2cpp_convert_func_0039 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline107.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline107') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0039 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0040', () => {
    try {
      const result = transCkey2Dtskey('(p0:number,p1:object)=>any');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0040 convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(double, std::any)>", "dts2cpp_convert_func_0040 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0040 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0041', () => {
    try {
      const converted = transParseObj(doParseTs('sample108.ts', `
        function sample108(p0: (p0:number,p1:object)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample108');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, std::any)>",
        "dts2cpp_convert_func_0041 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0041 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0042', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet108.ts', `
        function sampleRet108(): (p0:number,p1:object)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, std::any)>",
        "dts2cpp_convert_func_0042 return convert output");
      const generated = generateFunctions(converted, 'sampleRet108.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet108') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0042 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0043', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass108.ts', `
        class SampleClass108 { field: (p0:number,p1:object)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(double, std::any)>",
        "dts2cpp_convert_func_0043 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0043 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0044', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline108.ts', `
        function pipeline108(p: (p0:number,p1:object)=>any): (p0:number,p1:object)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, std::any)>",
        "dts2cpp_convert_func_0044 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, std::any)>",
        "dts2cpp_convert_func_0044 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline108.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline108') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0044 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0045', () => {
    try {
      const result = transCkey2Dtskey('(p0:number,p1:number)=>any');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0045 convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(double, double)>", "dts2cpp_convert_func_0045 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0045 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0046', () => {
    try {
      const converted = transParseObj(doParseTs('sample109.ts', `
        function sample109(p0: (p0:number,p1:number)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample109');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, double)>",
        "dts2cpp_convert_func_0046 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0046 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0047', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet109.ts', `
        function sampleRet109(): (p0:number,p1:number)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, double)>",
        "dts2cpp_convert_func_0047 return convert output");
      const generated = generateFunctions(converted, 'sampleRet109.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet109') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0047 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0048', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass109.ts', `
        class SampleClass109 { field: (p0:number,p1:number)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(double, double)>",
        "dts2cpp_convert_func_0048 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0048 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0049', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline109.ts', `
        function pipeline109(p: (p0:number,p1:number)=>any): (p0:number,p1:number)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, double)>",
        "dts2cpp_convert_func_0049 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, double)>",
        "dts2cpp_convert_func_0049 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline109.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline109') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0049 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0050', () => {
    try {
      const result = transCkey2Dtskey('(p0:number,p1:string)=>any');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0050 convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(double, std::string)>",
        "dts2cpp_convert_func_0050 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0050 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0051', () => {
    try {
      const converted = transParseObj(doParseTs('sample110.ts', `
        function sample110(p0: (p0:number,p1:string)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample110');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, std::string)>",
        "dts2cpp_convert_func_0051 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0051 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0052', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet110.ts', `
        function sampleRet110(): (p0:number,p1:string)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, std::string)>",
        "dts2cpp_convert_func_0052 return convert output");
      const generated = generateFunctions(converted, 'sampleRet110.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet110') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0052 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0053', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass110.ts', `
        class SampleClass110 { field: (p0:number,p1:string)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(double, std::string)>",
        "dts2cpp_convert_func_0053 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0053 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0054', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline110.ts', `
        function pipeline110(p: (p0:number,p1:string)=>any): (p0:number,p1:string)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, std::string)>",
        "dts2cpp_convert_func_0054 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, std::string)>",
        "dts2cpp_convert_func_0054 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline110.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline110') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0054 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0055', () => {
    try {
      const result = transCkey2Dtskey('(p0:number,p1:boolean)=>any');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0055 convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(double, bool)>", "dts2cpp_convert_func_0055 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0055 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0056', () => {
    try {
      const converted = transParseObj(doParseTs('sample111.ts', `
        function sample111(p0: (p0:number,p1:boolean)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample111');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, bool)>",
        "dts2cpp_convert_func_0056 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0056 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0057', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet111.ts', `
        function sampleRet111(): (p0:number,p1:boolean)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, bool)>",
        "dts2cpp_convert_func_0057 return convert output");
      const generated = generateFunctions(converted, 'sampleRet111.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet111') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0057 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0058', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass111.ts', `
        class SampleClass111 { field: (p0:number,p1:boolean)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(double, bool)>",
        "dts2cpp_convert_func_0058 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0058 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0059', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline111.ts', `
        function pipeline111(p: (p0:number,p1:boolean)=>any): (p0:number,p1:boolean)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, bool)>",
        "dts2cpp_convert_func_0059 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, bool)>",
        "dts2cpp_convert_func_0059 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline111.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline111') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0059 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0060', () => {
    try {
      const result = transCkey2Dtskey('(p0:string,p1:any)=>any');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0060 convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0060 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0060 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0061', () => {
    try {
      const converted = transParseObj(doParseTs('sample112.ts', `
        function sample112(p0: (p0:string,p1:any)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample112');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0061 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0061 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0062', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet112.ts', `
        function sampleRet112(): (p0:string,p1:any)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0062 return convert output");
      const generated = generateFunctions(converted, 'sampleRet112.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet112') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0062 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0063', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass112.ts', `
        class SampleClass112 { field: (p0:string,p1:any)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0063 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0063 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0064', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline112.ts', `
        function pipeline112(p: (p0:string,p1:any)=>any): (p0:string,p1:any)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0064 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0064 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline112.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline112') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0064 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0065', () => {
    try {
      const result = transCkey2Dtskey('(p0:string,p1:object)=>any');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0065 convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0065 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0065 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0066', () => {
    try {
      const converted = transParseObj(doParseTs('sample113.ts', `
        function sample113(p0: (p0:string,p1:object)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample113');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0066 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0066 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0067', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet113.ts', `
        function sampleRet113(): (p0:string,p1:object)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0067 return convert output");
      const generated = generateFunctions(converted, 'sampleRet113.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet113') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0067 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0068', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass113.ts', `
        class SampleClass113 { field: (p0:string,p1:object)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0068 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0068 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0069', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline113.ts', `
        function pipeline113(p: (p0:string,p1:object)=>any): (p0:string,p1:object)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0069 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::any)>",
        "dts2cpp_convert_func_0069 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline113.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline113') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0069 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0070', () => {
    try {
      const result = transCkey2Dtskey('(p0:string,p1:number)=>any');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0070 convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::string, double)>",
        "dts2cpp_convert_func_0070 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0070 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0071', () => {
    try {
      const converted = transParseObj(doParseTs('sample114.ts', `
        function sample114(p0: (p0:string,p1:number)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample114');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, double)>",
        "dts2cpp_convert_func_0071 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0071 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0072', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet114.ts', `
        function sampleRet114(): (p0:string,p1:number)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, double)>",
        "dts2cpp_convert_func_0072 return convert output");
      const generated = generateFunctions(converted, 'sampleRet114.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet114') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0072 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0073', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass114.ts', `
        class SampleClass114 { field: (p0:string,p1:number)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, double)>",
        "dts2cpp_convert_func_0073 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0073 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0074', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline114.ts', `
        function pipeline114(p: (p0:string,p1:number)=>any): (p0:string,p1:number)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, double)>",
        "dts2cpp_convert_func_0074 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, double)>",
        "dts2cpp_convert_func_0074 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline114.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline114') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0074 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0075', () => {
    try {
      const result = transCkey2Dtskey('(p0:string,p1:string)=>any');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0075 convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::string, std::string)>",
        "dts2cpp_convert_func_0075 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0075 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0076', () => {
    try {
      const converted = transParseObj(doParseTs('sample115.ts', `
        function sample115(p0: (p0:string,p1:string)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample115');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::string)>",
        "dts2cpp_convert_func_0076 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0076 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0077', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet115.ts', `
        function sampleRet115(): (p0:string,p1:string)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, std::string)>",
        "dts2cpp_convert_func_0077 return convert output");
      const generated = generateFunctions(converted, 'sampleRet115.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet115') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0077 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0078', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass115.ts', `
        class SampleClass115 { field: (p0:string,p1:string)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, std::string)>",
        "dts2cpp_convert_func_0078 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0078 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0079', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline115.ts', `
        function pipeline115(p: (p0:string,p1:string)=>any): (p0:string,p1:string)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, std::string)>",
        "dts2cpp_convert_func_0079 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::string)>",
        "dts2cpp_convert_func_0079 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline115.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline115') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0079 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0080', () => {
    try {
      const result = transCkey2Dtskey('(p0:string,p1:boolean)=>any');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0080 convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::string, bool)>",
        "dts2cpp_convert_func_0080 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0080 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0081', () => {
    try {
      const converted = transParseObj(doParseTs('sample116.ts', `
        function sample116(p0: (p0:string,p1:boolean)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample116');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, bool)>",
        "dts2cpp_convert_func_0081 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0081 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0082', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet116.ts', `
        function sampleRet116(): (p0:string,p1:boolean)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, bool)>",
        "dts2cpp_convert_func_0082 return convert output");
      const generated = generateFunctions(converted, 'sampleRet116.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet116') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0082 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0083', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass116.ts', `
        class SampleClass116 { field: (p0:string,p1:boolean)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, bool)>",
        "dts2cpp_convert_func_0083 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0083 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0084', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline116.ts', `
        function pipeline116(p: (p0:string,p1:boolean)=>any): (p0:string,p1:boolean)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, bool)>",
        "dts2cpp_convert_func_0084 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, bool)>",
        "dts2cpp_convert_func_0084 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline116.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline116') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0084 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0085', () => {
    try {
      const result = transCkey2Dtskey('(p0:boolean,p1:any)=>any');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0085 convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(bool, std::any)>", "dts2cpp_convert_func_0085 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0085 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0086', () => {
    try {
      const converted = transParseObj(doParseTs('sample117.ts', `
        function sample117(p0: (p0:boolean,p1:any)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample117');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, std::any)>",
        "dts2cpp_convert_func_0086 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0086 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0087', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet117.ts', `
        function sampleRet117(): (p0:boolean,p1:any)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool, std::any)>",
        "dts2cpp_convert_func_0087 return convert output");
      const generated = generateFunctions(converted, 'sampleRet117.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet117') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0087 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0088', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass117.ts', `
        class SampleClass117 { field: (p0:boolean,p1:any)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, std::any)>",
        "dts2cpp_convert_func_0088 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0088 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0089', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline117.ts', `
        function pipeline117(p: (p0:boolean,p1:any)=>any): (p0:boolean,p1:any)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool, std::any)>",
        "dts2cpp_convert_func_0089 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, std::any)>",
        "dts2cpp_convert_func_0089 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline117.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline117') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0089 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0090', () => {
    try {
      const result = transCkey2Dtskey('(p0:boolean,p1:object)=>any');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0090 convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(bool, std::any)>", "dts2cpp_convert_func_0090 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0090 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0091', () => {
    try {
      const converted = transParseObj(doParseTs('sample118.ts', `
        function sample118(p0: (p0:boolean,p1:object)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample118');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, std::any)>",
        "dts2cpp_convert_func_0091 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0091 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0092', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet118.ts', `
        function sampleRet118(): (p0:boolean,p1:object)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool, std::any)>",
        "dts2cpp_convert_func_0092 return convert output");
      const generated = generateFunctions(converted, 'sampleRet118.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet118') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0092 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0093', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass118.ts', `
        class SampleClass118 { field: (p0:boolean,p1:object)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, std::any)>",
        "dts2cpp_convert_func_0093 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0093 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0094', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline118.ts', `
        function pipeline118(p: (p0:boolean,p1:object)=>any): (p0:boolean,p1:object)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool, std::any)>",
        "dts2cpp_convert_func_0094 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, std::any)>",
        "dts2cpp_convert_func_0094 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline118.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline118') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0094 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0095', () => {
    try {
      const result = transCkey2Dtskey('(p0:boolean,p1:number)=>any');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0095 convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(bool, double)>", "dts2cpp_convert_func_0095 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0095 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0096', () => {
    try {
      const converted = transParseObj(doParseTs('sample119.ts', `
        function sample119(p0: (p0:boolean,p1:number)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample119');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, double)>",
        "dts2cpp_convert_func_0096 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0096 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0097', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet119.ts', `
        function sampleRet119(): (p0:boolean,p1:number)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool, double)>",
        "dts2cpp_convert_func_0097 return convert output");
      const generated = generateFunctions(converted, 'sampleRet119.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet119') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0097 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0098', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass119.ts', `
        class SampleClass119 { field: (p0:boolean,p1:number)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, double)>",
        "dts2cpp_convert_func_0098 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0098 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0099', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline119.ts', `
        function pipeline119(p: (p0:boolean,p1:number)=>any): (p0:boolean,p1:number)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool, double)>",
        "dts2cpp_convert_func_0099 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, double)>",
        "dts2cpp_convert_func_0099 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline119.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline119') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0099 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0100', () => {
    try {
      const result = transCkey2Dtskey('(p0:boolean,p1:string)=>any');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0100 convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(bool, std::string)>",
        "dts2cpp_convert_func_0100 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0100 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0101', () => {
    try {
      const converted = transParseObj(doParseTs('sample120.ts', `
        function sample120(p0: (p0:boolean,p1:string)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample120');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, std::string)>",
        "dts2cpp_convert_func_0101 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0101 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0102', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet120.ts', `
        function sampleRet120(): (p0:boolean,p1:string)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool, std::string)>",
        "dts2cpp_convert_func_0102 return convert output");
      const generated = generateFunctions(converted, 'sampleRet120.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet120') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0102 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0103', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass120.ts', `
        class SampleClass120 { field: (p0:boolean,p1:string)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, std::string)>",
        "dts2cpp_convert_func_0103 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0103 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0104', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline120.ts', `
        function pipeline120(p: (p0:boolean,p1:string)=>any): (p0:boolean,p1:string)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool, std::string)>",
        "dts2cpp_convert_func_0104 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, std::string)>",
        "dts2cpp_convert_func_0104 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline120.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline120') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0104 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0105', () => {
    try {
      const result = transCkey2Dtskey('(p0:boolean,p1:boolean)=>any');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0105 convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(bool, bool)>", "dts2cpp_convert_func_0105 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0105 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0106', () => {
    try {
      const converted = transParseObj(doParseTs('sample121.ts', `
        function sample121(p0: (p0:boolean,p1:boolean)=>any): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample121');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, bool)>",
        "dts2cpp_convert_func_0106 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0106 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0107', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet121.ts', `
        function sampleRet121(): (p0:boolean,p1:boolean)=>any { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool, bool)>",
        "dts2cpp_convert_func_0107 return convert output");
      const generated = generateFunctions(converted, 'sampleRet121.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet121') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0107 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0108', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass121.ts', `
        class SampleClass121 { field: (p0:boolean,p1:boolean)=>any; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, bool)>",
        "dts2cpp_convert_func_0108 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0108 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0109', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline121.ts', `
        function pipeline121(p: (p0:boolean,p1:boolean)=>any): (p0:boolean,p1:boolean)=>any { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool, bool)>",
        "dts2cpp_convert_func_0109 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, bool)>",
        "dts2cpp_convert_func_0109 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline121.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline121') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0109 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0110', () => {
    try {
      const result = transCkey2Dtskey('(p0:any,p1:object)=>object');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_func_0110 convert output non-empty");
      assert.strictEqual(result, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0110 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0110 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0111', () => {
    try {
      const converted = transParseObj(doParseTs('sample122.ts', `
        function sample122(p0: (p0:any,p1:object)=>object): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample122');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0111 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0111 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0112', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet122.ts', `
        function sampleRet122(): (p0:any,p1:object)=>object { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0112 return convert output");
      const generated = generateFunctions(converted, 'sampleRet122.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet122') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0112 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_func_0113', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass122.ts', `
        class SampleClass122 { field: (p0:any,p1:object)=>object; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, std::any)>",
        "dts2cpp_convert_func_0113 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_func_0113 execution error: ${String(err)}`);
    }
  });
});
