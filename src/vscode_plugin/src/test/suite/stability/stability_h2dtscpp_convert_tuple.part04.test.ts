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

suite('Stability_H2DTSCPP_CONVERT_TUPLE_Part04', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_CONVERT_TUPLE_Part04.');


  test('h2dtscpp_convert_tuple_0001', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass202', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, number, boolean, boolean]',
            parameters: [{ type: '[number, number, boolean, boolean]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, number, boolean, boolean]",
        "h2dtscpp_convert_tuple_0001 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, number, boolean, boolean]",
        "h2dtscpp_convert_tuple_0001 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0001 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0002', () => {
    try {
      const parsed = doParseTs('h2cpp202.ts', `
        function h2cpp202(p: [number, number, boolean, boolean]): [number, number, boolean, boolean] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, number, boolean, boolean]",
        "h2dtscpp_convert_tuple_0002 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, boolean, boolean]",
        "h2dtscpp_convert_tuple_0002 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp202.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp202') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0002 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0003', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn202', returns: '[number, number, boolean, boolean]',
          parameters: [{ type: '[number, number, boolean, boolean]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias202', alias: '[number, number, boolean, boolean]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias202');
      assert.strictEqual(converted.types[0].alias, '[number, number, boolean, boolean]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn202');
      assert.strictEqual(converted.funcs[0].returns, "[number, number, boolean, boolean]",
        "h2dtscpp_convert_tuple_0003 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, boolean, boolean]",
        "h2dtscpp_convert_tuple_0003 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample202_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn202') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0003 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0004', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass203', alias: '',
          variableList: [{ type: '[number, string, number, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, number, number]",
        "h2dtscpp_convert_tuple_0004 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0004 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0005', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun203', returns: '[number, string, number, number]',
          parameters: [{ type: '[number, string, number, number]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun203');
      assert.strictEqual(converted.funcs[0].returns, "[number, string, number, number]",
        "h2dtscpp_convert_tuple_0005 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, number, number]",
        "h2dtscpp_convert_tuple_0005 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample203_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun203') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0005 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0006', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass203', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, string, number, number]',
            parameters: [{ type: '[number, string, number, number]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, string, number, number]",
        "h2dtscpp_convert_tuple_0006 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, string, number, number]",
        "h2dtscpp_convert_tuple_0006 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0006 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0007', () => {
    try {
      const parsed = doParseTs('h2cpp203.ts', `
        function h2cpp203(p: [number, string, number, number]): [number, string, number, number] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, number, number]",
        "h2dtscpp_convert_tuple_0007 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, number, number]",
        "h2dtscpp_convert_tuple_0007 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp203.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp203') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0007 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0008', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn203', returns: '[number, string, number, number]',
          parameters: [{ type: '[number, string, number, number]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias203', alias: '[number, string, number, number]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias203');
      assert.strictEqual(converted.types[0].alias, '[number, string, number, number]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn203');
      assert.strictEqual(converted.funcs[0].returns, "[number, string, number, number]",
        "h2dtscpp_convert_tuple_0008 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, number, number]",
        "h2dtscpp_convert_tuple_0008 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample203_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn203') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0008 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0009', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass204', alias: '',
          variableList: [{ type: '[number, string, number, string]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, number, string]",
        "h2dtscpp_convert_tuple_0009 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0009 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0010', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun204', returns: '[number, string, number, string]',
          parameters: [{ type: '[number, string, number, string]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun204');
      assert.strictEqual(converted.funcs[0].returns, "[number, string, number, string]",
        "h2dtscpp_convert_tuple_0010 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, number, string]",
        "h2dtscpp_convert_tuple_0010 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample204_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun204') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0010 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0011', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass204', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, string, number, string]',
            parameters: [{ type: '[number, string, number, string]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, string, number, string]",
        "h2dtscpp_convert_tuple_0011 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, string, number, string]",
        "h2dtscpp_convert_tuple_0011 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0011 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0012', () => {
    try {
      const parsed = doParseTs('h2cpp204.ts', `
        function h2cpp204(p: [number, string, number, string]): [number, string, number, string] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, number, string]",
        "h2dtscpp_convert_tuple_0012 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, number, string]",
        "h2dtscpp_convert_tuple_0012 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp204.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp204') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0012 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0013', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn204', returns: '[number, string, number, string]',
          parameters: [{ type: '[number, string, number, string]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias204', alias: '[number, string, number, string]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias204');
      assert.strictEqual(converted.types[0].alias, '[number, string, number, string]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn204');
      assert.strictEqual(converted.funcs[0].returns, "[number, string, number, string]",
        "h2dtscpp_convert_tuple_0013 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, number, string]",
        "h2dtscpp_convert_tuple_0013 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample204_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn204') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0013 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0014', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass205', alias: '',
          variableList: [{ type: '[number, string, number, boolean]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, number, boolean]",
        "h2dtscpp_convert_tuple_0014 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0014 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0015', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun205', returns: '[number, string, number, boolean]',
          parameters: [{ type: '[number, string, number, boolean]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun205');
      assert.strictEqual(converted.funcs[0].returns, "[number, string, number, boolean]",
        "h2dtscpp_convert_tuple_0015 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, number, boolean]",
        "h2dtscpp_convert_tuple_0015 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample205_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun205') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0015 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0016', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass205', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, string, number, boolean]',
            parameters: [{ type: '[number, string, number, boolean]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, string, number, boolean]",
        "h2dtscpp_convert_tuple_0016 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, string, number, boolean]",
        "h2dtscpp_convert_tuple_0016 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0016 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0017', () => {
    try {
      const parsed = doParseTs('h2cpp205.ts', `
        function h2cpp205(p: [number, string, number, boolean]): [number, string, number, boolean] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, number, boolean]",
        "h2dtscpp_convert_tuple_0017 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, number, boolean]",
        "h2dtscpp_convert_tuple_0017 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp205.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp205') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0017 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0018', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn205', returns: '[number, string, number, boolean]',
          parameters: [{ type: '[number, string, number, boolean]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias205', alias: '[number, string, number, boolean]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias205');
      assert.strictEqual(converted.types[0].alias, '[number, string, number, boolean]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn205');
      assert.strictEqual(converted.funcs[0].returns, "[number, string, number, boolean]",
        "h2dtscpp_convert_tuple_0018 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, number, boolean]",
        "h2dtscpp_convert_tuple_0018 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample205_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn205') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0018 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0019', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass206', alias: '',
          variableList: [{ type: '[number, string, string, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, string, number]",
        "h2dtscpp_convert_tuple_0019 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0019 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0020', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun206', returns: '[number, string, string, number]',
          parameters: [{ type: '[number, string, string, number]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun206');
      assert.strictEqual(converted.funcs[0].returns, "[number, string, string, number]",
        "h2dtscpp_convert_tuple_0020 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, string, number]",
        "h2dtscpp_convert_tuple_0020 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample206_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun206') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0020 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0021', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass206', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, string, string, number]',
            parameters: [{ type: '[number, string, string, number]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, string, string, number]",
        "h2dtscpp_convert_tuple_0021 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, string, string, number]",
        "h2dtscpp_convert_tuple_0021 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0021 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0022', () => {
    try {
      const parsed = doParseTs('h2cpp206.ts', `
        function h2cpp206(p: [number, string, string, number]): [number, string, string, number] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, string, number]",
        "h2dtscpp_convert_tuple_0022 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, string, number]",
        "h2dtscpp_convert_tuple_0022 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp206.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp206') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0022 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0023', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn206', returns: '[number, string, string, number]',
          parameters: [{ type: '[number, string, string, number]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias206', alias: '[number, string, string, number]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias206');
      assert.strictEqual(converted.types[0].alias, '[number, string, string, number]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn206');
      assert.strictEqual(converted.funcs[0].returns, "[number, string, string, number]",
        "h2dtscpp_convert_tuple_0023 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, string, number]",
        "h2dtscpp_convert_tuple_0023 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample206_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn206') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0023 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0024', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass207', alias: '',
          variableList: [{ type: '[number, string, string, string]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, string, string]",
        "h2dtscpp_convert_tuple_0024 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0024 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0025', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun207', returns: '[number, string, string, string]',
          parameters: [{ type: '[number, string, string, string]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun207');
      assert.strictEqual(converted.funcs[0].returns, "[number, string, string, string]",
        "h2dtscpp_convert_tuple_0025 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, string, string]",
        "h2dtscpp_convert_tuple_0025 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample207_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun207') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0025 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0026', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass207', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, string, string, string]',
            parameters: [{ type: '[number, string, string, string]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, string, string, string]",
        "h2dtscpp_convert_tuple_0026 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, string, string, string]",
        "h2dtscpp_convert_tuple_0026 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0026 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0027', () => {
    try {
      const parsed = doParseTs('h2cpp207.ts', `
        function h2cpp207(p: [number, string, string, string]): [number, string, string, string] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, string, string]",
        "h2dtscpp_convert_tuple_0027 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, string, string]",
        "h2dtscpp_convert_tuple_0027 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp207.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp207') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0027 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0028', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn207', returns: '[number, string, string, string]',
          parameters: [{ type: '[number, string, string, string]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias207', alias: '[number, string, string, string]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias207');
      assert.strictEqual(converted.types[0].alias, '[number, string, string, string]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn207');
      assert.strictEqual(converted.funcs[0].returns, "[number, string, string, string]",
        "h2dtscpp_convert_tuple_0028 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, string, string]",
        "h2dtscpp_convert_tuple_0028 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample207_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn207') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0028 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0029', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass208', alias: '',
          variableList: [{ type: '[number, string, string, boolean]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, string, boolean]",
        "h2dtscpp_convert_tuple_0029 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0029 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0030', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun208', returns: '[number, string, string, boolean]',
          parameters: [{ type: '[number, string, string, boolean]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun208');
      assert.strictEqual(converted.funcs[0].returns, "[number, string, string, boolean]",
        "h2dtscpp_convert_tuple_0030 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, string, boolean]",
        "h2dtscpp_convert_tuple_0030 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample208_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun208') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0030 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0031', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass208', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, string, string, boolean]',
            parameters: [{ type: '[number, string, string, boolean]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, string, string, boolean]",
        "h2dtscpp_convert_tuple_0031 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, string, string, boolean]",
        "h2dtscpp_convert_tuple_0031 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0031 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0032', () => {
    try {
      const parsed = doParseTs('h2cpp208.ts', `
        function h2cpp208(p: [number, string, string, boolean]): [number, string, string, boolean] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, string, boolean]",
        "h2dtscpp_convert_tuple_0032 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, string, boolean]",
        "h2dtscpp_convert_tuple_0032 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp208.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp208') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0032 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0033', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn208', returns: '[number, string, string, boolean]',
          parameters: [{ type: '[number, string, string, boolean]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias208', alias: '[number, string, string, boolean]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias208');
      assert.strictEqual(converted.types[0].alias, '[number, string, string, boolean]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn208');
      assert.strictEqual(converted.funcs[0].returns, "[number, string, string, boolean]",
        "h2dtscpp_convert_tuple_0033 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, string, boolean]",
        "h2dtscpp_convert_tuple_0033 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample208_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn208') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0033 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0034', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass209', alias: '',
          variableList: [{ type: '[number, string, boolean, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, boolean, number]",
        "h2dtscpp_convert_tuple_0034 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0034 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0035', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun209', returns: '[number, string, boolean, number]',
          parameters: [{ type: '[number, string, boolean, number]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun209');
      assert.strictEqual(converted.funcs[0].returns, "[number, string, boolean, number]",
        "h2dtscpp_convert_tuple_0035 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, boolean, number]",
        "h2dtscpp_convert_tuple_0035 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample209_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun209') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0035 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0036', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass209', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, string, boolean, number]',
            parameters: [{ type: '[number, string, boolean, number]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, string, boolean, number]",
        "h2dtscpp_convert_tuple_0036 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, string, boolean, number]",
        "h2dtscpp_convert_tuple_0036 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0036 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0037', () => {
    try {
      const parsed = doParseTs('h2cpp209.ts', `
        function h2cpp209(p: [number, string, boolean, number]): [number, string, boolean, number] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, boolean, number]",
        "h2dtscpp_convert_tuple_0037 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, boolean, number]",
        "h2dtscpp_convert_tuple_0037 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp209.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp209') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0037 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0038', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn209', returns: '[number, string, boolean, number]',
          parameters: [{ type: '[number, string, boolean, number]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias209', alias: '[number, string, boolean, number]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias209');
      assert.strictEqual(converted.types[0].alias, '[number, string, boolean, number]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn209');
      assert.strictEqual(converted.funcs[0].returns, "[number, string, boolean, number]",
        "h2dtscpp_convert_tuple_0038 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, boolean, number]",
        "h2dtscpp_convert_tuple_0038 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample209_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn209') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0038 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0039', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass210', alias: '',
          variableList: [{ type: '[number, string, boolean, string]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, boolean, string]",
        "h2dtscpp_convert_tuple_0039 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0039 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0040', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun210', returns: '[number, string, boolean, string]',
          parameters: [{ type: '[number, string, boolean, string]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun210');
      assert.strictEqual(converted.funcs[0].returns, "[number, string, boolean, string]",
        "h2dtscpp_convert_tuple_0040 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, boolean, string]",
        "h2dtscpp_convert_tuple_0040 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample210_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun210') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0040 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0041', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass210', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, string, boolean, string]',
            parameters: [{ type: '[number, string, boolean, string]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, string, boolean, string]",
        "h2dtscpp_convert_tuple_0041 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, string, boolean, string]",
        "h2dtscpp_convert_tuple_0041 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0041 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0042', () => {
    try {
      const parsed = doParseTs('h2cpp210.ts', `
        function h2cpp210(p: [number, string, boolean, string]): [number, string, boolean, string] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, boolean, string]",
        "h2dtscpp_convert_tuple_0042 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, boolean, string]",
        "h2dtscpp_convert_tuple_0042 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp210.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp210') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0042 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0043', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn210', returns: '[number, string, boolean, string]',
          parameters: [{ type: '[number, string, boolean, string]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias210', alias: '[number, string, boolean, string]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias210');
      assert.strictEqual(converted.types[0].alias, '[number, string, boolean, string]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn210');
      assert.strictEqual(converted.funcs[0].returns, "[number, string, boolean, string]",
        "h2dtscpp_convert_tuple_0043 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, boolean, string]",
        "h2dtscpp_convert_tuple_0043 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample210_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn210') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0043 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0044', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass211', alias: '',
          variableList: [{ type: '[number, string, boolean, boolean]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, boolean, boolean]",
        "h2dtscpp_convert_tuple_0044 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0044 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0045', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun211', returns: '[number, string, boolean, boolean]',
          parameters: [{ type: '[number, string, boolean, boolean]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun211');
      assert.strictEqual(converted.funcs[0].returns, "[number, string, boolean, boolean]",
        "h2dtscpp_convert_tuple_0045 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, boolean, boolean]",
        "h2dtscpp_convert_tuple_0045 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample211_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun211') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0045 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0046', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass211', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, string, boolean, boolean]',
            parameters: [{ type: '[number, string, boolean, boolean]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, string, boolean, boolean]",
        "h2dtscpp_convert_tuple_0046 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, string, boolean, boolean]",
        "h2dtscpp_convert_tuple_0046 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0046 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0047', () => {
    try {
      const parsed = doParseTs('h2cpp211.ts', `
        function h2cpp211(p: [number, string, boolean, boolean]): [number, string, boolean, boolean] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, boolean, boolean]",
        "h2dtscpp_convert_tuple_0047 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, boolean, boolean]",
        "h2dtscpp_convert_tuple_0047 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp211.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp211') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0047 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0048', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn211', returns: '[number, string, boolean, boolean]',
          parameters: [{ type: '[number, string, boolean, boolean]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias211', alias: '[number, string, boolean, boolean]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias211');
      assert.strictEqual(converted.types[0].alias, '[number, string, boolean, boolean]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn211');
      assert.strictEqual(converted.funcs[0].returns, "[number, string, boolean, boolean]",
        "h2dtscpp_convert_tuple_0048 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, boolean, boolean]",
        "h2dtscpp_convert_tuple_0048 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample211_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn211') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0048 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0049', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass212', alias: '',
          variableList: [{ type: '[number, boolean, number, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, boolean, number, number]",
        "h2dtscpp_convert_tuple_0049 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0049 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0050', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun212', returns: '[number, boolean, number, number]',
          parameters: [{ type: '[number, boolean, number, number]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun212');
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, number, number]",
        "h2dtscpp_convert_tuple_0050 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, number, number]",
        "h2dtscpp_convert_tuple_0050 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample212_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun212') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0050 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0051', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass212', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, boolean, number, number]',
            parameters: [{ type: '[number, boolean, number, number]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, boolean, number, number]",
        "h2dtscpp_convert_tuple_0051 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, boolean, number, number]",
        "h2dtscpp_convert_tuple_0051 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0051 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0052', () => {
    try {
      const parsed = doParseTs('h2cpp212.ts', `
        function h2cpp212(p: [number, boolean, number, number]): [number, boolean, number, number] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, number, number]",
        "h2dtscpp_convert_tuple_0052 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, number, number]",
        "h2dtscpp_convert_tuple_0052 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp212.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp212') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0052 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0053', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn212', returns: '[number, boolean, number, number]',
          parameters: [{ type: '[number, boolean, number, number]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias212', alias: '[number, boolean, number, number]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias212');
      assert.strictEqual(converted.types[0].alias, '[number, boolean, number, number]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn212');
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, number, number]",
        "h2dtscpp_convert_tuple_0053 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, number, number]",
        "h2dtscpp_convert_tuple_0053 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample212_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn212') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0053 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0054', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass213', alias: '',
          variableList: [{ type: '[number, boolean, number, string]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, boolean, number, string]",
        "h2dtscpp_convert_tuple_0054 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0054 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0055', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun213', returns: '[number, boolean, number, string]',
          parameters: [{ type: '[number, boolean, number, string]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun213');
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, number, string]",
        "h2dtscpp_convert_tuple_0055 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, number, string]",
        "h2dtscpp_convert_tuple_0055 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample213_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun213') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0055 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0056', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass213', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, boolean, number, string]',
            parameters: [{ type: '[number, boolean, number, string]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, boolean, number, string]",
        "h2dtscpp_convert_tuple_0056 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, boolean, number, string]",
        "h2dtscpp_convert_tuple_0056 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0056 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0057', () => {
    try {
      const parsed = doParseTs('h2cpp213.ts', `
        function h2cpp213(p: [number, boolean, number, string]): [number, boolean, number, string] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, number, string]",
        "h2dtscpp_convert_tuple_0057 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, number, string]",
        "h2dtscpp_convert_tuple_0057 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp213.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp213') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0057 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0058', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn213', returns: '[number, boolean, number, string]',
          parameters: [{ type: '[number, boolean, number, string]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias213', alias: '[number, boolean, number, string]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias213');
      assert.strictEqual(converted.types[0].alias, '[number, boolean, number, string]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn213');
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, number, string]",
        "h2dtscpp_convert_tuple_0058 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, number, string]",
        "h2dtscpp_convert_tuple_0058 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample213_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn213') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0058 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0059', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass214', alias: '',
          variableList: [{ type: '[number, boolean, number, boolean]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, boolean, number, boolean]",
        "h2dtscpp_convert_tuple_0059 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0059 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0060', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun214', returns: '[number, boolean, number, boolean]',
          parameters: [{ type: '[number, boolean, number, boolean]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun214');
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, number, boolean]",
        "h2dtscpp_convert_tuple_0060 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, number, boolean]",
        "h2dtscpp_convert_tuple_0060 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample214_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun214') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0060 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0061', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass214', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, boolean, number, boolean]',
            parameters: [{ type: '[number, boolean, number, boolean]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, boolean, number, boolean]",
        "h2dtscpp_convert_tuple_0061 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, boolean, number, boolean]",
        "h2dtscpp_convert_tuple_0061 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0061 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0062', () => {
    try {
      const parsed = doParseTs('h2cpp214.ts', `
        function h2cpp214(p: [number, boolean, number, boolean]): [number, boolean, number, boolean] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, number, boolean]",
        "h2dtscpp_convert_tuple_0062 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, number, boolean]",
        "h2dtscpp_convert_tuple_0062 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp214.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp214') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0062 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0063', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn214', returns: '[number, boolean, number, boolean]',
          parameters: [{ type: '[number, boolean, number, boolean]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias214', alias: '[number, boolean, number, boolean]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias214');
      assert.strictEqual(converted.types[0].alias, '[number, boolean, number, boolean]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn214');
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, number, boolean]",
        "h2dtscpp_convert_tuple_0063 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, number, boolean]",
        "h2dtscpp_convert_tuple_0063 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample214_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn214') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0063 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0064', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass215', alias: '',
          variableList: [{ type: '[number, boolean, string, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, boolean, string, number]",
        "h2dtscpp_convert_tuple_0064 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0064 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0065', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun215', returns: '[number, boolean, string, number]',
          parameters: [{ type: '[number, boolean, string, number]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun215');
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, string, number]",
        "h2dtscpp_convert_tuple_0065 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, string, number]",
        "h2dtscpp_convert_tuple_0065 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample215_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun215') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0065 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0066', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass215', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, boolean, string, number]',
            parameters: [{ type: '[number, boolean, string, number]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, boolean, string, number]",
        "h2dtscpp_convert_tuple_0066 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, boolean, string, number]",
        "h2dtscpp_convert_tuple_0066 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0066 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0067', () => {
    try {
      const parsed = doParseTs('h2cpp215.ts', `
        function h2cpp215(p: [number, boolean, string, number]): [number, boolean, string, number] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, string, number]",
        "h2dtscpp_convert_tuple_0067 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, string, number]",
        "h2dtscpp_convert_tuple_0067 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp215.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp215') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0067 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0068', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn215', returns: '[number, boolean, string, number]',
          parameters: [{ type: '[number, boolean, string, number]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias215', alias: '[number, boolean, string, number]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias215');
      assert.strictEqual(converted.types[0].alias, '[number, boolean, string, number]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn215');
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, string, number]",
        "h2dtscpp_convert_tuple_0068 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, string, number]",
        "h2dtscpp_convert_tuple_0068 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample215_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn215') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0068 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0069', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass216', alias: '',
          variableList: [{ type: '[number, boolean, string, string]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, boolean, string, string]",
        "h2dtscpp_convert_tuple_0069 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0069 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0070', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun216', returns: '[number, boolean, string, string]',
          parameters: [{ type: '[number, boolean, string, string]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun216');
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, string, string]",
        "h2dtscpp_convert_tuple_0070 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, string, string]",
        "h2dtscpp_convert_tuple_0070 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample216_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun216') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0070 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0071', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass216', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, boolean, string, string]',
            parameters: [{ type: '[number, boolean, string, string]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, boolean, string, string]",
        "h2dtscpp_convert_tuple_0071 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, boolean, string, string]",
        "h2dtscpp_convert_tuple_0071 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0071 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0072', () => {
    try {
      const parsed = doParseTs('h2cpp216.ts', `
        function h2cpp216(p: [number, boolean, string, string]): [number, boolean, string, string] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, string, string]",
        "h2dtscpp_convert_tuple_0072 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, string, string]",
        "h2dtscpp_convert_tuple_0072 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp216.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp216') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0072 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0073', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn216', returns: '[number, boolean, string, string]',
          parameters: [{ type: '[number, boolean, string, string]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias216', alias: '[number, boolean, string, string]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias216');
      assert.strictEqual(converted.types[0].alias, '[number, boolean, string, string]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn216');
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, string, string]",
        "h2dtscpp_convert_tuple_0073 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, string, string]",
        "h2dtscpp_convert_tuple_0073 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample216_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn216') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0073 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0074', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass217', alias: '',
          variableList: [{ type: '[number, boolean, string, boolean]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, boolean, string, boolean]",
        "h2dtscpp_convert_tuple_0074 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0074 execution error: ${String(err)}`);
    }
  });
});
