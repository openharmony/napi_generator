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
import { transParseObj, generateFunctions } from '../../../gen/gendtscpp';
import { doParseTs } from '../../../parse/parsets';
import { runCompatSafe } from './stability_helpers';

suite('Stability_H2DTSCPP_CONVERT_FUNC_Part08', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_CONVERT_FUNC_Part08.');


  test('h2dtscpp_convert_func_0001', () => {
    try {
      const parsed = doParseTs('h2cpp135.ts', `
        function h2cpp135(p: (p0:number,p1:boolean)=>object): (p0:number,p1:boolean)=>object { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, bool)>",
        "h2dtscpp_convert_func_0001 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, bool)>",
        "h2dtscpp_convert_func_0001 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp135.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp135') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0001 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0002', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn135', returns: '(p0:number,p1:boolean)=>object',
          parameters: [{ type: '(p0:number,p1:boolean)=>object', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias135', alias: '(p0:number,p1:boolean)=>object', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias135');
      assert.strictEqual(converted.types[0].alias, '(p0:number,p1:boolean)=>object');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn135');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(double, bool)>",
        "h2dtscpp_convert_func_0002 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(double, bool)>",
        "h2dtscpp_convert_func_0002 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample135_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn135') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0002 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0003', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass136', alias: '',
          variableList: [{ type: '(p0:string,p1:any)=>object', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0003 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0003 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0004', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun136', returns: '(p0:string,p1:any)=>object',
          parameters: [{ type: '(p0:string,p1:any)=>object', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun136');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0004 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0004 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample136_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun136') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0004 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0005', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass136', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:string,p1:any)=>object',
            parameters: [{ type: '(p0:string,p1:any)=>object', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0005 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0005 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0005 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0006', () => {
    try {
      const parsed = doParseTs('h2cpp136.ts', `
        function h2cpp136(p: (p0:string,p1:any)=>object): (p0:string,p1:any)=>object { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0006 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0006 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp136.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp136') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0006 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0007', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn136', returns: '(p0:string,p1:any)=>object',
          parameters: [{ type: '(p0:string,p1:any)=>object', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias136', alias: '(p0:string,p1:any)=>object', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias136');
      assert.strictEqual(converted.types[0].alias, '(p0:string,p1:any)=>object');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn136');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0007 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0007 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample136_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn136') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0007 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0008', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass137', alias: '',
          variableList: [{ type: '(p0:string,p1:object)=>object', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0008 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0008 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0009', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun137', returns: '(p0:string,p1:object)=>object',
          parameters: [{ type: '(p0:string,p1:object)=>object', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun137');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0009 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0009 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample137_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun137') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0009 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0010', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass137', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:string,p1:object)=>object',
            parameters: [{ type: '(p0:string,p1:object)=>object', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0010 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0010 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0010 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0011', () => {
    try {
      const parsed = doParseTs('h2cpp137.ts', `
        function h2cpp137(p: (p0:string,p1:object)=>object): (p0:string,p1:object)=>object { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0011 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0011 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp137.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp137') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0011 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0012', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn137', returns: '(p0:string,p1:object)=>object',
          parameters: [{ type: '(p0:string,p1:object)=>object', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias137', alias: '(p0:string,p1:object)=>object', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias137');
      assert.strictEqual(converted.types[0].alias, '(p0:string,p1:object)=>object');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn137');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0012 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::any)>",
        "h2dtscpp_convert_func_0012 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample137_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn137') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0012 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0013', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass138', alias: '',
          variableList: [{ type: '(p0:string,p1:number)=>object', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, double)>",
        "h2dtscpp_convert_func_0013 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0013 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0014', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun138', returns: '(p0:string,p1:number)=>object',
          parameters: [{ type: '(p0:string,p1:number)=>object', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun138');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, double)>",
        "h2dtscpp_convert_func_0014 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, double)>",
        "h2dtscpp_convert_func_0014 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample138_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun138') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0014 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0015', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass138', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:string,p1:number)=>object',
            parameters: [{ type: '(p0:string,p1:number)=>object', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(std::string, double)>",
        "h2dtscpp_convert_func_0015 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::any(std::string, double)>",
        "h2dtscpp_convert_func_0015 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0015 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0016', () => {
    try {
      const parsed = doParseTs('h2cpp138.ts', `
        function h2cpp138(p: (p0:string,p1:number)=>object): (p0:string,p1:number)=>object { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, double)>",
        "h2dtscpp_convert_func_0016 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, double)>",
        "h2dtscpp_convert_func_0016 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp138.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp138') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0016 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0017', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn138', returns: '(p0:string,p1:number)=>object',
          parameters: [{ type: '(p0:string,p1:number)=>object', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias138', alias: '(p0:string,p1:number)=>object', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias138');
      assert.strictEqual(converted.types[0].alias, '(p0:string,p1:number)=>object');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn138');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, double)>",
        "h2dtscpp_convert_func_0017 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, double)>",
        "h2dtscpp_convert_func_0017 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample138_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn138') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0017 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0018', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass139', alias: '',
          variableList: [{ type: '(p0:string,p1:string)=>object', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, std::string)>",
        "h2dtscpp_convert_func_0018 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0018 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0019', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun139', returns: '(p0:string,p1:string)=>object',
          parameters: [{ type: '(p0:string,p1:string)=>object', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun139');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, std::string)>",
        "h2dtscpp_convert_func_0019 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::string)>",
        "h2dtscpp_convert_func_0019 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample139_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun139') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0019 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0020', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass139', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:string,p1:string)=>object',
            parameters: [{ type: '(p0:string,p1:string)=>object', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns,
        "std::function<std::any(std::string, std::string)>",
        "h2dtscpp_convert_func_0020 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::any(std::string, std::string)>",
        "h2dtscpp_convert_func_0020 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0020 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0021', () => {
    try {
      const parsed = doParseTs('h2cpp139.ts', `
        function h2cpp139(p: (p0:string,p1:string)=>object): (p0:string,p1:string)=>object { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, std::string)>",
        "h2dtscpp_convert_func_0021 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::string)>",
        "h2dtscpp_convert_func_0021 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp139.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp139') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0021 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0022', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn139', returns: '(p0:string,p1:string)=>object',
          parameters: [{ type: '(p0:string,p1:string)=>object', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias139', alias: '(p0:string,p1:string)=>object', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias139');
      assert.strictEqual(converted.types[0].alias, '(p0:string,p1:string)=>object');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn139');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, std::string)>",
        "h2dtscpp_convert_func_0022 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, std::string)>",
        "h2dtscpp_convert_func_0022 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample139_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn139') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0022 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0023', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass140', alias: '',
          variableList: [{ type: '(p0:string,p1:boolean)=>object', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::string, bool)>",
        "h2dtscpp_convert_func_0023 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0023 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0024', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun140', returns: '(p0:string,p1:boolean)=>object',
          parameters: [{ type: '(p0:string,p1:boolean)=>object', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun140');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, bool)>",
        "h2dtscpp_convert_func_0024 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, bool)>",
        "h2dtscpp_convert_func_0024 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample140_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun140') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0024 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0025', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass140', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:string,p1:boolean)=>object',
            parameters: [{ type: '(p0:string,p1:boolean)=>object', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(std::string, bool)>",
        "h2dtscpp_convert_func_0025 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::any(std::string, bool)>",
        "h2dtscpp_convert_func_0025 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0025 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0026', () => {
    try {
      const parsed = doParseTs('h2cpp140.ts', `
        function h2cpp140(p: (p0:string,p1:boolean)=>object): (p0:string,p1:boolean)=>object { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, bool)>",
        "h2dtscpp_convert_func_0026 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, bool)>",
        "h2dtscpp_convert_func_0026 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp140.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp140') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0026 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0027', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn140', returns: '(p0:string,p1:boolean)=>object',
          parameters: [{ type: '(p0:string,p1:boolean)=>object', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias140', alias: '(p0:string,p1:boolean)=>object', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias140');
      assert.strictEqual(converted.types[0].alias, '(p0:string,p1:boolean)=>object');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn140');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::string, bool)>",
        "h2dtscpp_convert_func_0027 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::string, bool)>",
        "h2dtscpp_convert_func_0027 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample140_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn140') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0027 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0028', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass141', alias: '',
          variableList: [{ type: '(p0:boolean,p1:any)=>object', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, std::any)>",
        "h2dtscpp_convert_func_0028 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0028 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0029', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun141', returns: '(p0:boolean,p1:any)=>object',
          parameters: [{ type: '(p0:boolean,p1:any)=>object', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun141');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool, std::any)>",
        "h2dtscpp_convert_func_0029 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, std::any)>",
        "h2dtscpp_convert_func_0029 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample141_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun141') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0029 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0030', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass141', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:boolean,p1:any)=>object',
            parameters: [{ type: '(p0:boolean,p1:any)=>object', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(bool, std::any)>",
        "h2dtscpp_convert_func_0030 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::any(bool, std::any)>",
        "h2dtscpp_convert_func_0030 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0030 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0031', () => {
    try {
      const parsed = doParseTs('h2cpp141.ts', `
        function h2cpp141(p: (p0:boolean,p1:any)=>object): (p0:boolean,p1:any)=>object { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool, std::any)>",
        "h2dtscpp_convert_func_0031 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, std::any)>",
        "h2dtscpp_convert_func_0031 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp141.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp141') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0031 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0032', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn141', returns: '(p0:boolean,p1:any)=>object',
          parameters: [{ type: '(p0:boolean,p1:any)=>object', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias141', alias: '(p0:boolean,p1:any)=>object', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias141');
      assert.strictEqual(converted.types[0].alias, '(p0:boolean,p1:any)=>object');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn141');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool, std::any)>",
        "h2dtscpp_convert_func_0032 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, std::any)>",
        "h2dtscpp_convert_func_0032 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample141_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn141') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0032 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0033', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass142', alias: '',
          variableList: [{ type: '(p0:boolean,p1:object)=>object', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, std::any)>",
        "h2dtscpp_convert_func_0033 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0033 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0034', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun142', returns: '(p0:boolean,p1:object)=>object',
          parameters: [{ type: '(p0:boolean,p1:object)=>object', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun142');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool, std::any)>",
        "h2dtscpp_convert_func_0034 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, std::any)>",
        "h2dtscpp_convert_func_0034 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample142_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun142') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0034 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0035', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass142', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:boolean,p1:object)=>object',
            parameters: [{ type: '(p0:boolean,p1:object)=>object', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(bool, std::any)>",
        "h2dtscpp_convert_func_0035 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::any(bool, std::any)>",
        "h2dtscpp_convert_func_0035 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0035 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0036', () => {
    try {
      const parsed = doParseTs('h2cpp142.ts', `
        function h2cpp142(p: (p0:boolean,p1:object)=>object): (p0:boolean,p1:object)=>object { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool, std::any)>",
        "h2dtscpp_convert_func_0036 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, std::any)>",
        "h2dtscpp_convert_func_0036 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp142.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp142') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0036 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0037', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn142', returns: '(p0:boolean,p1:object)=>object',
          parameters: [{ type: '(p0:boolean,p1:object)=>object', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias142', alias: '(p0:boolean,p1:object)=>object', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias142');
      assert.strictEqual(converted.types[0].alias, '(p0:boolean,p1:object)=>object');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn142');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool, std::any)>",
        "h2dtscpp_convert_func_0037 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, std::any)>",
        "h2dtscpp_convert_func_0037 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample142_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn142') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0037 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0038', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass143', alias: '',
          variableList: [{ type: '(p0:boolean,p1:number)=>object', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, double)>",
        "h2dtscpp_convert_func_0038 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0038 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0039', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun143', returns: '(p0:boolean,p1:number)=>object',
          parameters: [{ type: '(p0:boolean,p1:number)=>object', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun143');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool, double)>",
        "h2dtscpp_convert_func_0039 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, double)>",
        "h2dtscpp_convert_func_0039 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample143_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun143') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0039 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0040', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass143', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:boolean,p1:number)=>object',
            parameters: [{ type: '(p0:boolean,p1:number)=>object', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(bool, double)>",
        "h2dtscpp_convert_func_0040 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::any(bool, double)>",
        "h2dtscpp_convert_func_0040 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0040 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0041', () => {
    try {
      const parsed = doParseTs('h2cpp143.ts', `
        function h2cpp143(p: (p0:boolean,p1:number)=>object): (p0:boolean,p1:number)=>object { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool, double)>",
        "h2dtscpp_convert_func_0041 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, double)>",
        "h2dtscpp_convert_func_0041 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp143.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp143') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0041 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0042', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn143', returns: '(p0:boolean,p1:number)=>object',
          parameters: [{ type: '(p0:boolean,p1:number)=>object', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias143', alias: '(p0:boolean,p1:number)=>object', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias143');
      assert.strictEqual(converted.types[0].alias, '(p0:boolean,p1:number)=>object');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn143');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool, double)>",
        "h2dtscpp_convert_func_0042 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, double)>",
        "h2dtscpp_convert_func_0042 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample143_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn143') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0042 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0043', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass144', alias: '',
          variableList: [{ type: '(p0:boolean,p1:string)=>object', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, std::string)>",
        "h2dtscpp_convert_func_0043 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0043 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0044', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun144', returns: '(p0:boolean,p1:string)=>object',
          parameters: [{ type: '(p0:boolean,p1:string)=>object', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun144');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool, std::string)>",
        "h2dtscpp_convert_func_0044 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, std::string)>",
        "h2dtscpp_convert_func_0044 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample144_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun144') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0044 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0045', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass144', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:boolean,p1:string)=>object',
            parameters: [{ type: '(p0:boolean,p1:string)=>object', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(bool, std::string)>",
        "h2dtscpp_convert_func_0045 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::any(bool, std::string)>",
        "h2dtscpp_convert_func_0045 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0045 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0046', () => {
    try {
      const parsed = doParseTs('h2cpp144.ts', `
        function h2cpp144(p: (p0:boolean,p1:string)=>object): (p0:boolean,p1:string)=>object { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool, std::string)>",
        "h2dtscpp_convert_func_0046 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, std::string)>",
        "h2dtscpp_convert_func_0046 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp144.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp144') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0046 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0047', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn144', returns: '(p0:boolean,p1:string)=>object',
          parameters: [{ type: '(p0:boolean,p1:string)=>object', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias144', alias: '(p0:boolean,p1:string)=>object', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias144');
      assert.strictEqual(converted.types[0].alias, '(p0:boolean,p1:string)=>object');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn144');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool, std::string)>",
        "h2dtscpp_convert_func_0047 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, std::string)>",
        "h2dtscpp_convert_func_0047 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample144_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn144') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0047 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0048', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass145', alias: '',
          variableList: [{ type: '(p0:boolean,p1:boolean)=>object', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(bool, bool)>",
        "h2dtscpp_convert_func_0048 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0048 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0049', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun145', returns: '(p0:boolean,p1:boolean)=>object',
          parameters: [{ type: '(p0:boolean,p1:boolean)=>object', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun145');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool, bool)>",
        "h2dtscpp_convert_func_0049 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, bool)>",
        "h2dtscpp_convert_func_0049 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample145_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun145') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0049 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0050', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass145', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:boolean,p1:boolean)=>object',
            parameters: [{ type: '(p0:boolean,p1:boolean)=>object', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(bool, bool)>",
        "h2dtscpp_convert_func_0050 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<std::any(bool, bool)>",
        "h2dtscpp_convert_func_0050 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0050 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0051', () => {
    try {
      const parsed = doParseTs('h2cpp145.ts', `
        function h2cpp145(p: (p0:boolean,p1:boolean)=>object): (p0:boolean,p1:boolean)=>object { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool, bool)>",
        "h2dtscpp_convert_func_0051 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, bool)>",
        "h2dtscpp_convert_func_0051 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp145.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp145') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0051 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0052', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn145', returns: '(p0:boolean,p1:boolean)=>object',
          parameters: [{ type: '(p0:boolean,p1:boolean)=>object', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias145', alias: '(p0:boolean,p1:boolean)=>object', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias145');
      assert.strictEqual(converted.types[0].alias, '(p0:boolean,p1:boolean)=>object');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn145');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool, bool)>",
        "h2dtscpp_convert_func_0052 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool, bool)>",
        "h2dtscpp_convert_func_0052 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample145_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn145') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0052 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0053', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass146', alias: '',
          variableList: [{ type: '(p0:any,p1:any)=>void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0053 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0053 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0054', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun146', returns: '(p0:any,p1:any)=>void',
          parameters: [{ type: '(p0:any,p1:any)=>void', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun146');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0054 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0054 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample146_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun146') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0054 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0055', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass146', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:any,p1:any)=>void',
            parameters: [{ type: '(p0:any,p1:any)=>void', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0055 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0055 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0055 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0056', () => {
    try {
      const parsed = doParseTs('h2cpp146.ts', `
        function h2cpp146(p: (p0:any,p1:any)=>void): (p0:any,p1:any)=>void { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0056 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0056 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp146.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp146') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0056 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0057', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn146', returns: '(p0:any,p1:any)=>void',
          parameters: [{ type: '(p0:any,p1:any)=>void', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias146', alias: '(p0:any,p1:any)=>void', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias146');
      assert.strictEqual(converted.types[0].alias, '(p0:any,p1:any)=>void');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn146');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0057 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0057 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample146_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn146') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0057 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0058', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass147', alias: '',
          variableList: [{ type: '(p0:any,p1:number)=>void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, double)>",
        "h2dtscpp_convert_func_0058 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0058 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0059', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun147', returns: '(p0:any,p1:number)=>void',
          parameters: [{ type: '(p0:any,p1:number)=>void', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun147');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, double)>",
        "h2dtscpp_convert_func_0059 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, double)>",
        "h2dtscpp_convert_func_0059 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample147_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun147') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0059 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0060', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass147', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:any,p1:number)=>void',
            parameters: [{ type: '(p0:any,p1:number)=>void', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(std::any, double)>",
        "h2dtscpp_convert_func_0060 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<void(std::any, double)>",
        "h2dtscpp_convert_func_0060 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0060 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0061', () => {
    try {
      const parsed = doParseTs('h2cpp147.ts', `
        function h2cpp147(p: (p0:any,p1:number)=>void): (p0:any,p1:number)=>void { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, double)>",
        "h2dtscpp_convert_func_0061 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, double)>",
        "h2dtscpp_convert_func_0061 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp147.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp147') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0061 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0062', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn147', returns: '(p0:any,p1:number)=>void',
          parameters: [{ type: '(p0:any,p1:number)=>void', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias147', alias: '(p0:any,p1:number)=>void', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias147');
      assert.strictEqual(converted.types[0].alias, '(p0:any,p1:number)=>void');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn147');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, double)>",
        "h2dtscpp_convert_func_0062 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, double)>",
        "h2dtscpp_convert_func_0062 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample147_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn147') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0062 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0063', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass148', alias: '',
          variableList: [{ type: '(p0:any,p1:string)=>void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, std::string)>",
        "h2dtscpp_convert_func_0063 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0063 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0064', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun148', returns: '(p0:any,p1:string)=>void',
          parameters: [{ type: '(p0:any,p1:string)=>void', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun148');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, std::string)>",
        "h2dtscpp_convert_func_0064 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, std::string)>",
        "h2dtscpp_convert_func_0064 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample148_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun148') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0064 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0065', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass148', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:any,p1:string)=>void',
            parameters: [{ type: '(p0:any,p1:string)=>void', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(std::any, std::string)>",
        "h2dtscpp_convert_func_0065 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<void(std::any, std::string)>",
        "h2dtscpp_convert_func_0065 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0065 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0066', () => {
    try {
      const parsed = doParseTs('h2cpp148.ts', `
        function h2cpp148(p: (p0:any,p1:string)=>void): (p0:any,p1:string)=>void { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, std::string)>",
        "h2dtscpp_convert_func_0066 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, std::string)>",
        "h2dtscpp_convert_func_0066 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp148.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp148') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0066 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0067', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn148', returns: '(p0:any,p1:string)=>void',
          parameters: [{ type: '(p0:any,p1:string)=>void', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias148', alias: '(p0:any,p1:string)=>void', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias148');
      assert.strictEqual(converted.types[0].alias, '(p0:any,p1:string)=>void');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn148');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, std::string)>",
        "h2dtscpp_convert_func_0067 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, std::string)>",
        "h2dtscpp_convert_func_0067 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample148_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn148') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0067 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0068', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass149', alias: '',
          variableList: [{ type: '(p0:any,p1:boolean)=>void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, bool)>",
        "h2dtscpp_convert_func_0068 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0068 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0069', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun149', returns: '(p0:any,p1:boolean)=>void',
          parameters: [{ type: '(p0:any,p1:boolean)=>void', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun149');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, bool)>",
        "h2dtscpp_convert_func_0069 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, bool)>",
        "h2dtscpp_convert_func_0069 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample149_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun149') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0069 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0070', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass149', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:any,p1:boolean)=>void',
            parameters: [{ type: '(p0:any,p1:boolean)=>void', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(std::any, bool)>",
        "h2dtscpp_convert_func_0070 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<void(std::any, bool)>",
        "h2dtscpp_convert_func_0070 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0070 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0071', () => {
    try {
      const parsed = doParseTs('h2cpp149.ts', `
        function h2cpp149(p: (p0:any,p1:boolean)=>void): (p0:any,p1:boolean)=>void { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, bool)>",
        "h2dtscpp_convert_func_0071 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, bool)>",
        "h2dtscpp_convert_func_0071 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp149.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp149') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0071 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0072', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn149', returns: '(p0:any,p1:boolean)=>void',
          parameters: [{ type: '(p0:any,p1:boolean)=>void', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias149', alias: '(p0:any,p1:boolean)=>void', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias149');
      assert.strictEqual(converted.types[0].alias, '(p0:any,p1:boolean)=>void');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn149');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, bool)>",
        "h2dtscpp_convert_func_0072 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, bool)>",
        "h2dtscpp_convert_func_0072 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample149_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn149') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0072 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0073', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass150', alias: '',
          variableList: [{ type: '(p0:object,p1:any)=>void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0073 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0073 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0074', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun150', returns: '(p0:object,p1:any)=>void',
          parameters: [{ type: '(p0:object,p1:any)=>void', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun150');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0074 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0074 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample150_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun150') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0074 execution error: ${String(err)}`);
    }
  });
});
