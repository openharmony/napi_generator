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

suite('Stability_H2DTSCPP_CONVERT_FUNC_Part03', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_CONVERT_FUNC_Part03.');


  test('h2dtscpp_convert_func_0001', () => {
    try {
      const parsed = doParseTs('h2cpp49.ts', `
        function h2cpp49(p: (p0:number,p1:number)=>boolean): (p0:number,p1:number)=>boolean { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(double, double)>",
        "h2dtscpp_convert_func_0001 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(double, double)>",
        "h2dtscpp_convert_func_0001 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp49.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp49') || generated.napiCppContent.length > 0,
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
        funcs: [{ type: 'function', name: 'typeFn49', returns: '(p0:number,p1:number)=>boolean',
          parameters: [{ type: '(p0:number,p1:number)=>boolean', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias49', alias: '(p0:number,p1:number)=>boolean', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias49');
      assert.strictEqual(converted.types[0].alias, '(p0:number,p1:number)=>boolean');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn49');
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(double, double)>",
        "h2dtscpp_convert_func_0002 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(double, double)>",
        "h2dtscpp_convert_func_0002 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample49_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn49') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0002 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0003', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass50', alias: '',
          variableList: [{ type: '(p0:number,p1:boolean)=>boolean', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(double, bool)>",
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
        funcs: [{ type: 'function', name: 'globalRun50', returns: '(p0:number,p1:boolean)=>boolean',
          parameters: [{ type: '(p0:number,p1:boolean)=>boolean', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun50');
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(double, bool)>",
        "h2dtscpp_convert_func_0004 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(double, bool)>",
        "h2dtscpp_convert_func_0004 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample50_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun50') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0004 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0005', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass50', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:number,p1:boolean)=>boolean',
            parameters: [{ type: '(p0:number,p1:boolean)=>boolean', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<bool(double, bool)>",
        "h2dtscpp_convert_func_0005 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<bool(double, bool)>",
        "h2dtscpp_convert_func_0005 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0005 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0006', () => {
    try {
      const parsed = doParseTs('h2cpp50.ts', `
        function h2cpp50(p: (p0:number,p1:boolean)=>boolean): (p0:number,p1:boolean)=>boolean { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(double, bool)>",
        "h2dtscpp_convert_func_0006 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(double, bool)>",
        "h2dtscpp_convert_func_0006 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp50.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp50') || generated.napiCppContent.length > 0,
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
        funcs: [{ type: 'function', name: 'typeFn50', returns: '(p0:number,p1:boolean)=>boolean',
          parameters: [{ type: '(p0:number,p1:boolean)=>boolean', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias50', alias: '(p0:number,p1:boolean)=>boolean', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias50');
      assert.strictEqual(converted.types[0].alias, '(p0:number,p1:boolean)=>boolean');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn50');
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(double, bool)>",
        "h2dtscpp_convert_func_0007 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(double, bool)>",
        "h2dtscpp_convert_func_0007 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample50_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn50') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0007 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0008', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass51', alias: '',
          variableList: [{ type: '(p0:string,p1:string)=>boolean', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(std::string, std::string)>",
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
        funcs: [{ type: 'function', name: 'globalRun51', returns: '(p0:string,p1:string)=>boolean',
          parameters: [{ type: '(p0:string,p1:string)=>boolean', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun51');
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(std::string, std::string)>",
        "h2dtscpp_convert_func_0009 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(std::string, std::string)>",
        "h2dtscpp_convert_func_0009 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample51_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun51') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0009 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0010', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass51', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:string,p1:string)=>boolean',
            parameters: [{ type: '(p0:string,p1:string)=>boolean', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<bool(std::string, std::string)>",
        "h2dtscpp_convert_func_0010 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<bool(std::string, std::string)>",
        "h2dtscpp_convert_func_0010 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0010 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0011', () => {
    try {
      const parsed = doParseTs('h2cpp51.ts', `
        function h2cpp51(p: (p0:string,p1:string)=>boolean): (p0:string,p1:string)=>boolean { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(std::string, std::string)>",
        "h2dtscpp_convert_func_0011 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(std::string, std::string)>",
        "h2dtscpp_convert_func_0011 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp51.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp51') || generated.napiCppContent.length > 0,
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
        funcs: [{ type: 'function', name: 'typeFn51', returns: '(p0:string,p1:string)=>boolean',
          parameters: [{ type: '(p0:string,p1:string)=>boolean', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias51', alias: '(p0:string,p1:string)=>boolean', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias51');
      assert.strictEqual(converted.types[0].alias, '(p0:string,p1:string)=>boolean');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn51');
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(std::string, std::string)>",
        "h2dtscpp_convert_func_0012 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(std::string, std::string)>",
        "h2dtscpp_convert_func_0012 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample51_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn51') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0012 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0013', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass52', alias: '',
          variableList: [{ type: '(p0:boolean,p1:number)=>boolean', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(bool, double)>",
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
        funcs: [{ type: 'function', name: 'globalRun52', returns: '(p0:boolean,p1:number)=>boolean',
          parameters: [{ type: '(p0:boolean,p1:number)=>boolean', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun52');
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(bool, double)>",
        "h2dtscpp_convert_func_0014 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(bool, double)>",
        "h2dtscpp_convert_func_0014 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample52_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun52') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0014 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0015', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass52', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:boolean,p1:number)=>boolean',
            parameters: [{ type: '(p0:boolean,p1:number)=>boolean', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<bool(bool, double)>",
        "h2dtscpp_convert_func_0015 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<bool(bool, double)>",
        "h2dtscpp_convert_func_0015 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0015 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0016', () => {
    try {
      const parsed = doParseTs('h2cpp52.ts', `
        function h2cpp52(p: (p0:boolean,p1:number)=>boolean): (p0:boolean,p1:number)=>boolean { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(bool, double)>",
        "h2dtscpp_convert_func_0016 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(bool, double)>",
        "h2dtscpp_convert_func_0016 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp52.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp52') || generated.napiCppContent.length > 0,
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
        funcs: [{ type: 'function', name: 'typeFn52', returns: '(p0:boolean,p1:number)=>boolean',
          parameters: [{ type: '(p0:boolean,p1:number)=>boolean', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias52', alias: '(p0:boolean,p1:number)=>boolean', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias52');
      assert.strictEqual(converted.types[0].alias, '(p0:boolean,p1:number)=>boolean');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn52');
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(bool, double)>",
        "h2dtscpp_convert_func_0017 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(bool, double)>",
        "h2dtscpp_convert_func_0017 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample52_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn52') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0017 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0018', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass53', alias: '',
          variableList: [{ type: '(p0:boolean,p1:boolean)=>boolean', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(bool, bool)>",
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
        funcs: [{ type: 'function', name: 'globalRun53', returns: '(p0:boolean,p1:boolean)=>boolean',
          parameters: [{ type: '(p0:boolean,p1:boolean)=>boolean', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun53');
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(bool, bool)>",
        "h2dtscpp_convert_func_0019 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(bool, bool)>",
        "h2dtscpp_convert_func_0019 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample53_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun53') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0019 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0020', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass53', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:boolean,p1:boolean)=>boolean',
            parameters: [{ type: '(p0:boolean,p1:boolean)=>boolean', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<bool(bool, bool)>",
        "h2dtscpp_convert_func_0020 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<bool(bool, bool)>",
        "h2dtscpp_convert_func_0020 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0020 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0021', () => {
    try {
      const parsed = doParseTs('h2cpp53.ts', `
        function h2cpp53(p: (p0:boolean,p1:boolean)=>boolean): (p0:boolean,p1:boolean)=>boolean { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(bool, bool)>",
        "h2dtscpp_convert_func_0021 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(bool, bool)>",
        "h2dtscpp_convert_func_0021 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp53.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp53') || generated.napiCppContent.length > 0,
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
        funcs: [{ type: 'function', name: 'typeFn53', returns: '(p0:boolean,p1:boolean)=>boolean',
          parameters: [{ type: '(p0:boolean,p1:boolean)=>boolean', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias53', alias: '(p0:boolean,p1:boolean)=>boolean', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias53');
      assert.strictEqual(converted.types[0].alias, '(p0:boolean,p1:boolean)=>boolean');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn53');
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(bool, bool)>",
        "h2dtscpp_convert_func_0022 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(bool, bool)>",
        "h2dtscpp_convert_func_0022 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample53_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn53') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0022 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0023', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass54', alias: '',
          variableList: [{ type: '(p0:number,p1:number)=>void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double, double)>",
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
        funcs: [{ type: 'function', name: 'globalRun54', returns: '(p0:number,p1:number)=>void',
          parameters: [{ type: '(p0:number,p1:number)=>void', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun54');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double, double)>",
        "h2dtscpp_convert_func_0024 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, double)>",
        "h2dtscpp_convert_func_0024 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample54_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun54') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0024 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0025', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass54', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:number,p1:number)=>void',
            parameters: [{ type: '(p0:number,p1:number)=>void', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(double, double)>",
        "h2dtscpp_convert_func_0025 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<void(double, double)>",
        "h2dtscpp_convert_func_0025 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0025 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0026', () => {
    try {
      const parsed = doParseTs('h2cpp54.ts', `
        function h2cpp54(p: (p0:number,p1:number)=>void): (p0:number,p1:number)=>void { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double, double)>",
        "h2dtscpp_convert_func_0026 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, double)>",
        "h2dtscpp_convert_func_0026 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp54.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp54') || generated.napiCppContent.length > 0,
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
        funcs: [{ type: 'function', name: 'typeFn54', returns: '(p0:number,p1:number)=>void',
          parameters: [{ type: '(p0:number,p1:number)=>void', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias54', alias: '(p0:number,p1:number)=>void', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias54');
      assert.strictEqual(converted.types[0].alias, '(p0:number,p1:number)=>void');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn54');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double, double)>",
        "h2dtscpp_convert_func_0027 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, double)>",
        "h2dtscpp_convert_func_0027 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample54_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn54') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0027 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0028', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass55', alias: '',
          variableList: [{ type: '(p0:number,p1:boolean)=>void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double, bool)>",
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
        funcs: [{ type: 'function', name: 'globalRun55', returns: '(p0:number,p1:boolean)=>void',
          parameters: [{ type: '(p0:number,p1:boolean)=>void', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun55');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double, bool)>",
        "h2dtscpp_convert_func_0029 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, bool)>",
        "h2dtscpp_convert_func_0029 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample55_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun55') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0029 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0030', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass55', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:number,p1:boolean)=>void',
            parameters: [{ type: '(p0:number,p1:boolean)=>void', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(double, bool)>",
        "h2dtscpp_convert_func_0030 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<void(double, bool)>",
        "h2dtscpp_convert_func_0030 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0030 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0031', () => {
    try {
      const parsed = doParseTs('h2cpp55.ts', `
        function h2cpp55(p: (p0:number,p1:boolean)=>void): (p0:number,p1:boolean)=>void { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double, bool)>",
        "h2dtscpp_convert_func_0031 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, bool)>",
        "h2dtscpp_convert_func_0031 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp55.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp55') || generated.napiCppContent.length > 0,
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
        funcs: [{ type: 'function', name: 'typeFn55', returns: '(p0:number,p1:boolean)=>void',
          parameters: [{ type: '(p0:number,p1:boolean)=>void', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias55', alias: '(p0:number,p1:boolean)=>void', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias55');
      assert.strictEqual(converted.types[0].alias, '(p0:number,p1:boolean)=>void');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn55');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double, bool)>",
        "h2dtscpp_convert_func_0032 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, bool)>",
        "h2dtscpp_convert_func_0032 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample55_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn55') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0032 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0033', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass56', alias: '',
          variableList: [{ type: '(p0:string,p1:string)=>void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::string, std::string)>",
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
        funcs: [{ type: 'function', name: 'globalRun56', returns: '(p0:string,p1:string)=>void',
          parameters: [{ type: '(p0:string,p1:string)=>void', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun56');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::string, std::string)>",
        "h2dtscpp_convert_func_0034 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::string, std::string)>",
        "h2dtscpp_convert_func_0034 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample56_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun56') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0034 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0035', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass56', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:string,p1:string)=>void',
            parameters: [{ type: '(p0:string,p1:string)=>void', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(std::string, std::string)>",
        "h2dtscpp_convert_func_0035 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<void(std::string, std::string)>",
        "h2dtscpp_convert_func_0035 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0035 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0036', () => {
    try {
      const parsed = doParseTs('h2cpp56.ts', `
        function h2cpp56(p: (p0:string,p1:string)=>void): (p0:string,p1:string)=>void { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::string, std::string)>",
        "h2dtscpp_convert_func_0036 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::string, std::string)>",
        "h2dtscpp_convert_func_0036 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp56.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp56') || generated.napiCppContent.length > 0,
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
        funcs: [{ type: 'function', name: 'typeFn56', returns: '(p0:string,p1:string)=>void',
          parameters: [{ type: '(p0:string,p1:string)=>void', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias56', alias: '(p0:string,p1:string)=>void', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias56');
      assert.strictEqual(converted.types[0].alias, '(p0:string,p1:string)=>void');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn56');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::string, std::string)>",
        "h2dtscpp_convert_func_0037 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::string, std::string)>",
        "h2dtscpp_convert_func_0037 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample56_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn56') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0037 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0038', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass57', alias: '',
          variableList: [{ type: '(p0:boolean,p1:number)=>void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(bool, double)>",
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
        funcs: [{ type: 'function', name: 'globalRun57', returns: '(p0:boolean,p1:number)=>void',
          parameters: [{ type: '(p0:boolean,p1:number)=>void', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun57');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(bool, double)>",
        "h2dtscpp_convert_func_0039 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(bool, double)>",
        "h2dtscpp_convert_func_0039 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample57_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun57') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0039 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0040', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass57', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:boolean,p1:number)=>void',
            parameters: [{ type: '(p0:boolean,p1:number)=>void', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(bool, double)>",
        "h2dtscpp_convert_func_0040 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<void(bool, double)>",
        "h2dtscpp_convert_func_0040 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0040 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0041', () => {
    try {
      const parsed = doParseTs('h2cpp57.ts', `
        function h2cpp57(p: (p0:boolean,p1:number)=>void): (p0:boolean,p1:number)=>void { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(bool, double)>",
        "h2dtscpp_convert_func_0041 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(bool, double)>",
        "h2dtscpp_convert_func_0041 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp57.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp57') || generated.napiCppContent.length > 0,
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
        funcs: [{ type: 'function', name: 'typeFn57', returns: '(p0:boolean,p1:number)=>void',
          parameters: [{ type: '(p0:boolean,p1:number)=>void', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias57', alias: '(p0:boolean,p1:number)=>void', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias57');
      assert.strictEqual(converted.types[0].alias, '(p0:boolean,p1:number)=>void');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn57');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(bool, double)>",
        "h2dtscpp_convert_func_0042 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(bool, double)>",
        "h2dtscpp_convert_func_0042 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample57_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn57') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0042 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0043', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass58', alias: '',
          variableList: [{ type: '(p0:boolean,p1:boolean)=>void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(bool, bool)>",
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
        funcs: [{ type: 'function', name: 'globalRun58', returns: '(p0:boolean,p1:boolean)=>void',
          parameters: [{ type: '(p0:boolean,p1:boolean)=>void', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun58');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(bool, bool)>",
        "h2dtscpp_convert_func_0044 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(bool, bool)>",
        "h2dtscpp_convert_func_0044 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample58_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun58') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0044 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0045', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass58', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:boolean,p1:boolean)=>void',
            parameters: [{ type: '(p0:boolean,p1:boolean)=>void', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(bool, bool)>",
        "h2dtscpp_convert_func_0045 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<void(bool, bool)>",
        "h2dtscpp_convert_func_0045 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0045 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0046', () => {
    try {
      const parsed = doParseTs('h2cpp58.ts', `
        function h2cpp58(p: (p0:boolean,p1:boolean)=>void): (p0:boolean,p1:boolean)=>void { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(bool, bool)>",
        "h2dtscpp_convert_func_0046 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(bool, bool)>",
        "h2dtscpp_convert_func_0046 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp58.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp58') || generated.napiCppContent.length > 0,
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
        funcs: [{ type: 'function', name: 'typeFn58', returns: '(p0:boolean,p1:boolean)=>void',
          parameters: [{ type: '(p0:boolean,p1:boolean)=>void', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias58', alias: '(p0:boolean,p1:boolean)=>void', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias58');
      assert.strictEqual(converted.types[0].alias, '(p0:boolean,p1:boolean)=>void');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn58');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(bool, bool)>",
        "h2dtscpp_convert_func_0047 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(bool, bool)>",
        "h2dtscpp_convert_func_0047 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample58_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn58') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0047 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0048', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass69', alias: '',
          variableList: [{ type: 'Callback<any>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any)>",
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
        funcs: [{ type: 'function', name: 'globalRun69', returns: 'Callback<any>',
          parameters: [{ type: 'Callback<any>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun69');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0049 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0049 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample69_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun69') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0049 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0050', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass69', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Callback<any>',
            parameters: [{ type: 'Callback<any>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0050 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0050 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0050 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0051', () => {
    try {
      const parsed = doParseTs('h2cpp69.ts', `function h2cpp69(p: Callback<any>): Callback<any> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0051 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0051 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp69.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp69') || generated.napiCppContent.length > 0,
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
        funcs: [{ type: 'function', name: 'typeFn69', returns: 'Callback<any>',
          parameters: [{ type: 'Callback<any>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias69', alias: 'Callback<any>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias69');
      assert.strictEqual(converted.types[0].alias, 'Callback<any>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn69');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0052 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0052 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample69_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn69') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0052 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0053', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass70', alias: '',
          variableList: [{ type: 'Callback<object>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any)>",
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
        funcs: [{ type: 'function', name: 'globalRun70', returns: 'Callback<object>',
          parameters: [{ type: 'Callback<object>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun70');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0054 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0054 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample70_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun70') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0054 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0055', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass70', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Callback<object>',
            parameters: [{ type: 'Callback<object>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0055 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0055 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0055 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0056', () => {
    try {
      const parsed = doParseTs('h2cpp70.ts', `function h2cpp70(p: Callback<object>): Callback<object> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0056 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0056 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp70.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp70') || generated.napiCppContent.length > 0,
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
        funcs: [{ type: 'function', name: 'typeFn70', returns: 'Callback<object>',
          parameters: [{ type: 'Callback<object>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias70', alias: 'Callback<object>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias70');
      assert.strictEqual(converted.types[0].alias, 'Callback<object>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn70');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0057 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0057 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample70_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn70') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0057 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0058', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass71', alias: '',
          variableList: [{ type: 'Callback<any[]>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(any[])>",
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
        funcs: [{ type: 'function', name: 'globalRun71', returns: 'Callback<any[]>',
          parameters: [{ type: 'Callback<any[]>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun71');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(any[])>",
        "h2dtscpp_convert_func_0059 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(any[])>",
        "h2dtscpp_convert_func_0059 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample71_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun71') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0059 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0060', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass71', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Callback<any[]>',
            parameters: [{ type: 'Callback<any[]>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(any[])>",
        "h2dtscpp_convert_func_0060 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<void(any[])>",
        "h2dtscpp_convert_func_0060 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0060 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0061', () => {
    try {
      const parsed = doParseTs('h2cpp71.ts', `function h2cpp71(p: Callback<any[]>): Callback<any[]> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(any[])>",
        "h2dtscpp_convert_func_0061 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(any[])>",
        "h2dtscpp_convert_func_0061 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp71.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp71') || generated.napiCppContent.length > 0,
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
        funcs: [{ type: 'function', name: 'typeFn71', returns: 'Callback<any[]>',
          parameters: [{ type: 'Callback<any[]>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias71', alias: 'Callback<any[]>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias71');
      assert.strictEqual(converted.types[0].alias, 'Callback<any[]>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn71');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(any[])>",
        "h2dtscpp_convert_func_0062 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(any[])>",
        "h2dtscpp_convert_func_0062 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample71_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn71') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0062 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0063', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass72', alias: '',
          variableList: [{ type: 'Callback<object[]>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(object[])>",
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
        funcs: [{ type: 'function', name: 'globalRun72', returns: 'Callback<object[]>',
          parameters: [{ type: 'Callback<object[]>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun72');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(object[])>",
        "h2dtscpp_convert_func_0064 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(object[])>",
        "h2dtscpp_convert_func_0064 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample72_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun72') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0064 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0065', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass72', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Callback<object[]>',
            parameters: [{ type: 'Callback<object[]>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(object[])>",
        "h2dtscpp_convert_func_0065 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<void(object[])>",
        "h2dtscpp_convert_func_0065 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0065 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0066', () => {
    try {
      const parsed = doParseTs('h2cpp72.ts', `
        function h2cpp72(p: Callback<object[]>): Callback<object[]> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(object[])>",
        "h2dtscpp_convert_func_0066 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(object[])>",
        "h2dtscpp_convert_func_0066 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp72.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp72') || generated.napiCppContent.length > 0,
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
        funcs: [{ type: 'function', name: 'typeFn72', returns: 'Callback<object[]>',
          parameters: [{ type: 'Callback<object[]>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias72', alias: 'Callback<object[]>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias72');
      assert.strictEqual(converted.types[0].alias, 'Callback<object[]>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn72');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(object[])>",
        "h2dtscpp_convert_func_0067 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(object[])>",
        "h2dtscpp_convert_func_0067 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample72_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn72') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0067 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0068', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass73', alias: '',
          variableList: [{ type: '(p0:any)=>any', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any)>",
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
        funcs: [{ type: 'function', name: 'globalRun73', returns: '(p0:any)=>any',
          parameters: [{ type: '(p0:any)=>any', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun73');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any)>",
        "h2dtscpp_convert_func_0069 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any)>",
        "h2dtscpp_convert_func_0069 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample73_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun73') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0069 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0070', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass73', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:any)=>any',
            parameters: [{ type: '(p0:any)=>any', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(std::any)>",
        "h2dtscpp_convert_func_0070 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<std::any(std::any)>",
        "h2dtscpp_convert_func_0070 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0070 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0071', () => {
    try {
      const parsed = doParseTs('h2cpp73.ts', `function h2cpp73(p: (p0:any)=>any): (p0:any)=>any { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any)>",
        "h2dtscpp_convert_func_0071 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any)>",
        "h2dtscpp_convert_func_0071 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp73.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp73') || generated.napiCppContent.length > 0,
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
        funcs: [{ type: 'function', name: 'typeFn73', returns: '(p0:any)=>any',
          parameters: [{ type: '(p0:any)=>any', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias73', alias: '(p0:any)=>any', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias73');
      assert.strictEqual(converted.types[0].alias, '(p0:any)=>any');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn73');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any)>",
        "h2dtscpp_convert_func_0072 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any)>",
        "h2dtscpp_convert_func_0072 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample73_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn73') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0072 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0073', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass74', alias: '',
          variableList: [{ type: '(p0:object)=>object', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any)>",
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
        funcs: [{ type: 'function', name: 'globalRun74', returns: '(p0:object)=>object',
          parameters: [{ type: '(p0:object)=>object', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun74');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any)>",
        "h2dtscpp_convert_func_0074 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any)>",
        "h2dtscpp_convert_func_0074 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample74_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun74') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0074 execution error: ${String(err)}`);
    }
  });
});
