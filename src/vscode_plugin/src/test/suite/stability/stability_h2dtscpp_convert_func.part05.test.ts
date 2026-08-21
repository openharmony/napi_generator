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

suite('Stability_H2DTSCPP_CONVERT_FUNC_Part05', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_CONVERT_FUNC_Part05.');


  test('h2dtscpp_convert_func_0001', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun91', returns: '(p0:boolean)=>object',
          parameters: [{ type: '(p0:boolean)=>object', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun91');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool)>",
        "h2dtscpp_convert_func_0001 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool)>",
        "h2dtscpp_convert_func_0001 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample91_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun91') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0001 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0002', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass91', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:boolean)=>object',
            parameters: [{ type: '(p0:boolean)=>object', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(bool)>",
        "h2dtscpp_convert_func_0002 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<std::any(bool)>",
        "h2dtscpp_convert_func_0002 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0002 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0003', () => {
    try {
      const parsed = doParseTs('h2cpp91.ts', `
        function h2cpp91(p: (p0:boolean)=>object): (p0:boolean)=>object { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool)>",
        "h2dtscpp_convert_func_0003 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool)>",
        "h2dtscpp_convert_func_0003 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp91.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp91') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0003 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0004', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn91', returns: '(p0:boolean)=>object',
          parameters: [{ type: '(p0:boolean)=>object', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias91', alias: '(p0:boolean)=>object', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias91');
      assert.strictEqual(converted.types[0].alias, '(p0:boolean)=>object');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn91');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(bool)>",
        "h2dtscpp_convert_func_0004 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(bool)>",
        "h2dtscpp_convert_func_0004 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample91_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn91') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0004 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0005', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass92', alias: '',
          variableList: [{ type: '(p0:any)=>void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0005 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0005 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0006', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun92', returns: '(p0:any)=>void',
          parameters: [{ type: '(p0:any)=>void', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun92');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0006 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0006 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample92_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun92') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0006 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0007', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass92', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:any)=>void',
            parameters: [{ type: '(p0:any)=>void', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0007 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0007 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0007 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0008', () => {
    try {
      const parsed = doParseTs('h2cpp92.ts', `function h2cpp92(p: (p0:any)=>void): (p0:any)=>void { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0008 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0008 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp92.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp92') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0008 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0009', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn92', returns: '(p0:any)=>void',
          parameters: [{ type: '(p0:any)=>void', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias92', alias: '(p0:any)=>void', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias92');
      assert.strictEqual(converted.types[0].alias, '(p0:any)=>void');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn92');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0009 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0009 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample92_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn92') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0009 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0010', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass93', alias: '',
          variableList: [{ type: '(p0:object)=>void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0010 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0010 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0011', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun93', returns: '(p0:object)=>void',
          parameters: [{ type: '(p0:object)=>void', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun93');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0011 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0011 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample93_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun93') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0011 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0012', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass93', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:object)=>void',
            parameters: [{ type: '(p0:object)=>void', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0012 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0012 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0012 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0013', () => {
    try {
      const parsed = doParseTs('h2cpp93.ts', `function h2cpp93(p: (p0:object)=>void): (p0:object)=>void { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0013 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0013 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp93.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp93') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0013 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0014', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn93', returns: '(p0:object)=>void',
          parameters: [{ type: '(p0:object)=>void', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias93', alias: '(p0:object)=>void', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias93');
      assert.strictEqual(converted.types[0].alias, '(p0:object)=>void');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn93');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0014 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any)>",
        "h2dtscpp_convert_func_0014 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample93_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn93') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0014 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0015', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass94', alias: '',
          variableList: [{ type: '(p0:any)=>number', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<double(std::any)>",
        "h2dtscpp_convert_func_0015 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0015 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0016', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun94', returns: '(p0:any)=>number',
          parameters: [{ type: '(p0:any)=>number', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun94');
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(std::any)>",
        "h2dtscpp_convert_func_0016 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(std::any)>",
        "h2dtscpp_convert_func_0016 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample94_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun94') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0016 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0017', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass94', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:any)=>number',
            parameters: [{ type: '(p0:any)=>number', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<double(std::any)>",
        "h2dtscpp_convert_func_0017 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<double(std::any)>",
        "h2dtscpp_convert_func_0017 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0017 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0018', () => {
    try {
      const parsed = doParseTs('h2cpp94.ts', `function h2cpp94(p: (p0:any)=>number): (p0:any)=>number { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(std::any)>",
        "h2dtscpp_convert_func_0018 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(std::any)>",
        "h2dtscpp_convert_func_0018 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp94.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp94') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0018 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0019', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn94', returns: '(p0:any)=>number',
          parameters: [{ type: '(p0:any)=>number', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias94', alias: '(p0:any)=>number', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias94');
      assert.strictEqual(converted.types[0].alias, '(p0:any)=>number');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn94');
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(std::any)>",
        "h2dtscpp_convert_func_0019 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(std::any)>",
        "h2dtscpp_convert_func_0019 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample94_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn94') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0019 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0020', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass95', alias: '',
          variableList: [{ type: '(p0:object)=>number', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<double(std::any)>",
        "h2dtscpp_convert_func_0020 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0020 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0021', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun95', returns: '(p0:object)=>number',
          parameters: [{ type: '(p0:object)=>number', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun95');
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(std::any)>",
        "h2dtscpp_convert_func_0021 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(std::any)>",
        "h2dtscpp_convert_func_0021 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample95_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun95') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0021 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0022', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass95', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:object)=>number',
            parameters: [{ type: '(p0:object)=>number', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<double(std::any)>",
        "h2dtscpp_convert_func_0022 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<double(std::any)>",
        "h2dtscpp_convert_func_0022 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0022 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0023', () => {
    try {
      const parsed = doParseTs('h2cpp95.ts', `
        function h2cpp95(p: (p0:object)=>number): (p0:object)=>number { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(std::any)>",
        "h2dtscpp_convert_func_0023 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(std::any)>",
        "h2dtscpp_convert_func_0023 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp95.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp95') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0023 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0024', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn95', returns: '(p0:object)=>number',
          parameters: [{ type: '(p0:object)=>number', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias95', alias: '(p0:object)=>number', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias95');
      assert.strictEqual(converted.types[0].alias, '(p0:object)=>number');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn95');
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(std::any)>",
        "h2dtscpp_convert_func_0024 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(std::any)>",
        "h2dtscpp_convert_func_0024 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample95_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn95') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0024 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0025', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass96', alias: '',
          variableList: [{ type: '(p0:any)=>string', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::string(std::any)>",
        "h2dtscpp_convert_func_0025 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0025 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0026', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun96', returns: '(p0:any)=>string',
          parameters: [{ type: '(p0:any)=>string', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun96');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(std::any)>",
        "h2dtscpp_convert_func_0026 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(std::any)>",
        "h2dtscpp_convert_func_0026 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample96_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun96') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0026 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0027', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass96', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:any)=>string',
            parameters: [{ type: '(p0:any)=>string', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::string(std::any)>",
        "h2dtscpp_convert_func_0027 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<std::string(std::any)>",
        "h2dtscpp_convert_func_0027 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0027 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0028', () => {
    try {
      const parsed = doParseTs('h2cpp96.ts', `function h2cpp96(p: (p0:any)=>string): (p0:any)=>string { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(std::any)>",
        "h2dtscpp_convert_func_0028 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(std::any)>",
        "h2dtscpp_convert_func_0028 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp96.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp96') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0028 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0029', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn96', returns: '(p0:any)=>string',
          parameters: [{ type: '(p0:any)=>string', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias96', alias: '(p0:any)=>string', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias96');
      assert.strictEqual(converted.types[0].alias, '(p0:any)=>string');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn96');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(std::any)>",
        "h2dtscpp_convert_func_0029 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(std::any)>",
        "h2dtscpp_convert_func_0029 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample96_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn96') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0029 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0030', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass97', alias: '',
          variableList: [{ type: '(p0:object)=>string', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::string(std::any)>",
        "h2dtscpp_convert_func_0030 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0030 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0031', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun97', returns: '(p0:object)=>string',
          parameters: [{ type: '(p0:object)=>string', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun97');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(std::any)>",
        "h2dtscpp_convert_func_0031 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(std::any)>",
        "h2dtscpp_convert_func_0031 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample97_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun97') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0031 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0032', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass97', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:object)=>string',
            parameters: [{ type: '(p0:object)=>string', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::string(std::any)>",
        "h2dtscpp_convert_func_0032 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<std::string(std::any)>",
        "h2dtscpp_convert_func_0032 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0032 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0033', () => {
    try {
      const parsed = doParseTs('h2cpp97.ts', `
        function h2cpp97(p: (p0:object)=>string): (p0:object)=>string { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(std::any)>",
        "h2dtscpp_convert_func_0033 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(std::any)>",
        "h2dtscpp_convert_func_0033 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp97.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp97') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0033 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0034', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn97', returns: '(p0:object)=>string',
          parameters: [{ type: '(p0:object)=>string', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias97', alias: '(p0:object)=>string', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias97');
      assert.strictEqual(converted.types[0].alias, '(p0:object)=>string');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn97');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(std::any)>",
        "h2dtscpp_convert_func_0034 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(std::any)>",
        "h2dtscpp_convert_func_0034 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample97_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn97') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0034 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0035', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass98', alias: '',
          variableList: [{ type: '(p0:any,p1:any)=>any', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0035 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0035 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0036', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun98', returns: '(p0:any,p1:any)=>any',
          parameters: [{ type: '(p0:any,p1:any)=>any', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun98');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0036 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0036 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample98_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun98') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0036 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0037', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass98', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:any,p1:any)=>any',
            parameters: [{ type: '(p0:any,p1:any)=>any', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0037 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0037 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0037 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0038', () => {
    try {
      const parsed = doParseTs('h2cpp98.ts', `
        function h2cpp98(p: (p0:any,p1:any)=>any): (p0:any,p1:any)=>any { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0038 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0038 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp98.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp98') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0038 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0039', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn98', returns: '(p0:any,p1:any)=>any',
          parameters: [{ type: '(p0:any,p1:any)=>any', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias98', alias: '(p0:any,p1:any)=>any', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias98');
      assert.strictEqual(converted.types[0].alias, '(p0:any,p1:any)=>any');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn98');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0039 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0039 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample98_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn98') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0039 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0040', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass99', alias: '',
          variableList: [{ type: '(p0:any,p1:object)=>any', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0040 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0040 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0041', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun99', returns: '(p0:any,p1:object)=>any',
          parameters: [{ type: '(p0:any,p1:object)=>any', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun99');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0041 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0041 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample99_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun99') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0041 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0042', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass99', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:any,p1:object)=>any',
            parameters: [{ type: '(p0:any,p1:object)=>any', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0042 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0042 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0042 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0043', () => {
    try {
      const parsed = doParseTs('h2cpp99.ts', `
        function h2cpp99(p: (p0:any,p1:object)=>any): (p0:any,p1:object)=>any { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0043 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0043 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp99.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp99') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0043 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0044', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn99', returns: '(p0:any,p1:object)=>any',
          parameters: [{ type: '(p0:any,p1:object)=>any', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias99', alias: '(p0:any,p1:object)=>any', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias99');
      assert.strictEqual(converted.types[0].alias, '(p0:any,p1:object)=>any');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn99');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0044 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0044 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample99_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn99') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0044 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0045', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass100', alias: '',
          variableList: [{ type: '(p0:any,p1:number)=>any', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, double)>",
        "h2dtscpp_convert_func_0045 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0045 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0046', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun100', returns: '(p0:any,p1:number)=>any',
          parameters: [{ type: '(p0:any,p1:number)=>any', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun100');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, double)>",
        "h2dtscpp_convert_func_0046 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, double)>",
        "h2dtscpp_convert_func_0046 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample100_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun100') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0046 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0047', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass100', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:any,p1:number)=>any',
            parameters: [{ type: '(p0:any,p1:number)=>any', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(std::any, double)>",
        "h2dtscpp_convert_func_0047 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::any(std::any, double)>",
        "h2dtscpp_convert_func_0047 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0047 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0048', () => {
    try {
      const parsed = doParseTs('h2cpp100.ts', `
        function h2cpp100(p: (p0:any,p1:number)=>any): (p0:any,p1:number)=>any { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, double)>",
        "h2dtscpp_convert_func_0048 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, double)>",
        "h2dtscpp_convert_func_0048 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp100.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp100') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0048 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0049', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn100', returns: '(p0:any,p1:number)=>any',
          parameters: [{ type: '(p0:any,p1:number)=>any', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias100', alias: '(p0:any,p1:number)=>any', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias100');
      assert.strictEqual(converted.types[0].alias, '(p0:any,p1:number)=>any');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn100');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, double)>",
        "h2dtscpp_convert_func_0049 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, double)>",
        "h2dtscpp_convert_func_0049 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample100_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn100') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0049 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0050', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass101', alias: '',
          variableList: [{ type: '(p0:any,p1:string)=>any', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, std::string)>",
        "h2dtscpp_convert_func_0050 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0050 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0051', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun101', returns: '(p0:any,p1:string)=>any',
          parameters: [{ type: '(p0:any,p1:string)=>any', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun101');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::string)>",
        "h2dtscpp_convert_func_0051 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::string)>",
        "h2dtscpp_convert_func_0051 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample101_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun101') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0051 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0052', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass101', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:any,p1:string)=>any',
            parameters: [{ type: '(p0:any,p1:string)=>any', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(std::any, std::string)>",
        "h2dtscpp_convert_func_0052 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::any(std::any, std::string)>",
        "h2dtscpp_convert_func_0052 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0052 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0053', () => {
    try {
      const parsed = doParseTs('h2cpp101.ts', `
        function h2cpp101(p: (p0:any,p1:string)=>any): (p0:any,p1:string)=>any { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::string)>",
        "h2dtscpp_convert_func_0053 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::string)>",
        "h2dtscpp_convert_func_0053 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp101.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp101') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0053 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0054', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn101', returns: '(p0:any,p1:string)=>any',
          parameters: [{ type: '(p0:any,p1:string)=>any', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias101', alias: '(p0:any,p1:string)=>any', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias101');
      assert.strictEqual(converted.types[0].alias, '(p0:any,p1:string)=>any');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn101');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::string)>",
        "h2dtscpp_convert_func_0054 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::string)>",
        "h2dtscpp_convert_func_0054 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample101_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn101') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0054 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0055', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass102', alias: '',
          variableList: [{ type: '(p0:any,p1:boolean)=>any', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, bool)>",
        "h2dtscpp_convert_func_0055 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0055 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0056', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun102', returns: '(p0:any,p1:boolean)=>any',
          parameters: [{ type: '(p0:any,p1:boolean)=>any', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun102');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, bool)>",
        "h2dtscpp_convert_func_0056 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, bool)>",
        "h2dtscpp_convert_func_0056 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample102_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun102') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0056 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0057', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass102', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:any,p1:boolean)=>any',
            parameters: [{ type: '(p0:any,p1:boolean)=>any', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(std::any, bool)>",
        "h2dtscpp_convert_func_0057 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::any(std::any, bool)>",
        "h2dtscpp_convert_func_0057 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0057 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0058', () => {
    try {
      const parsed = doParseTs('h2cpp102.ts', `
        function h2cpp102(p: (p0:any,p1:boolean)=>any): (p0:any,p1:boolean)=>any { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, bool)>",
        "h2dtscpp_convert_func_0058 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, bool)>",
        "h2dtscpp_convert_func_0058 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp102.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp102') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0058 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0059', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn102', returns: '(p0:any,p1:boolean)=>any',
          parameters: [{ type: '(p0:any,p1:boolean)=>any', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias102', alias: '(p0:any,p1:boolean)=>any', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias102');
      assert.strictEqual(converted.types[0].alias, '(p0:any,p1:boolean)=>any');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn102');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, bool)>",
        "h2dtscpp_convert_func_0059 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, bool)>",
        "h2dtscpp_convert_func_0059 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample102_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn102') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0059 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0060', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass103', alias: '',
          variableList: [{ type: '(p0:object,p1:any)=>any', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0060 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0060 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0061', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun103', returns: '(p0:object,p1:any)=>any',
          parameters: [{ type: '(p0:object,p1:any)=>any', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun103');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0061 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0061 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample103_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun103') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0061 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0062', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass103', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:object,p1:any)=>any',
            parameters: [{ type: '(p0:object,p1:any)=>any', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0062 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0062 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0062 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0063', () => {
    try {
      const parsed = doParseTs('h2cpp103.ts', `
        function h2cpp103(p: (p0:object,p1:any)=>any): (p0:object,p1:any)=>any { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0063 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0063 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp103.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp103') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0063 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0064', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn103', returns: '(p0:object,p1:any)=>any',
          parameters: [{ type: '(p0:object,p1:any)=>any', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias103', alias: '(p0:object,p1:any)=>any', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias103');
      assert.strictEqual(converted.types[0].alias, '(p0:object,p1:any)=>any');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn103');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0064 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::any)>",
        "h2dtscpp_convert_func_0064 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample103_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn103') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0064 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0065', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass104', alias: '',
          variableList: [{ type: '(p0:object,p1:number)=>any', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, double)>",
        "h2dtscpp_convert_func_0065 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0065 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0066', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun104', returns: '(p0:object,p1:number)=>any',
          parameters: [{ type: '(p0:object,p1:number)=>any', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun104');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, double)>",
        "h2dtscpp_convert_func_0066 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, double)>",
        "h2dtscpp_convert_func_0066 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample104_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun104') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0066 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0067', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass104', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:object,p1:number)=>any',
            parameters: [{ type: '(p0:object,p1:number)=>any', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(std::any, double)>",
        "h2dtscpp_convert_func_0067 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::any(std::any, double)>",
        "h2dtscpp_convert_func_0067 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0067 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0068', () => {
    try {
      const parsed = doParseTs('h2cpp104.ts', `
        function h2cpp104(p: (p0:object,p1:number)=>any): (p0:object,p1:number)=>any { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, double)>",
        "h2dtscpp_convert_func_0068 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, double)>",
        "h2dtscpp_convert_func_0068 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp104.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp104') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0068 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0069', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn104', returns: '(p0:object,p1:number)=>any',
          parameters: [{ type: '(p0:object,p1:number)=>any', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias104', alias: '(p0:object,p1:number)=>any', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias104');
      assert.strictEqual(converted.types[0].alias, '(p0:object,p1:number)=>any');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn104');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, double)>",
        "h2dtscpp_convert_func_0069 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, double)>",
        "h2dtscpp_convert_func_0069 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample104_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn104') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0069 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0070', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass105', alias: '',
          variableList: [{ type: '(p0:object,p1:string)=>any', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::any(std::any, std::string)>",
        "h2dtscpp_convert_func_0070 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0070 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0071', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun105', returns: '(p0:object,p1:string)=>any',
          parameters: [{ type: '(p0:object,p1:string)=>any', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun105');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::string)>",
        "h2dtscpp_convert_func_0071 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::string)>",
        "h2dtscpp_convert_func_0071 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample105_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun105') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0071 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0072', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass105', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:object,p1:string)=>any',
            parameters: [{ type: '(p0:object,p1:string)=>any', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::any(std::any, std::string)>",
        "h2dtscpp_convert_func_0072 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::any(std::any, std::string)>",
        "h2dtscpp_convert_func_0072 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0072 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0073', () => {
    try {
      const parsed = doParseTs('h2cpp105.ts', `
        function h2cpp105(p: (p0:object,p1:string)=>any): (p0:object,p1:string)=>any { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::string)>",
        "h2dtscpp_convert_func_0073 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::string)>",
        "h2dtscpp_convert_func_0073 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp105.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp105') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0073 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0074', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn105', returns: '(p0:object,p1:string)=>any',
          parameters: [{ type: '(p0:object,p1:string)=>any', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias105', alias: '(p0:object,p1:string)=>any', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias105');
      assert.strictEqual(converted.types[0].alias, '(p0:object,p1:string)=>any');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn105');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::any(std::any, std::string)>",
        "h2dtscpp_convert_func_0074 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::any(std::any, std::string)>",
        "h2dtscpp_convert_func_0074 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample105_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn105') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0074 execution error: ${String(err)}`);
    }
  });
});
