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

suite('Stability_H2DTSCPP_CONVERT_TUPLE_Part05', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_CONVERT_TUPLE_Part05.');


  test('h2dtscpp_convert_tuple_0001', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun217', returns: '[number, boolean, string, boolean]',
          parameters: [{ type: '[number, boolean, string, boolean]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun217');
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, string, boolean]",
        "h2dtscpp_convert_tuple_0001 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, string, boolean]",
        "h2dtscpp_convert_tuple_0001 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample217_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun217') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0001 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0002', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass217', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, boolean, string, boolean]',
            parameters: [{ type: '[number, boolean, string, boolean]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, boolean, string, boolean]",
        "h2dtscpp_convert_tuple_0002 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, boolean, string, boolean]",
        "h2dtscpp_convert_tuple_0002 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0002 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0003', () => {
    try {
      const parsed = doParseTs('h2cpp217.ts', `
        function h2cpp217(p: [number, boolean, string, boolean]): [number, boolean, string, boolean] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, string, boolean]",
        "h2dtscpp_convert_tuple_0003 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, string, boolean]",
        "h2dtscpp_convert_tuple_0003 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp217.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp217') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0003 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0004', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn217', returns: '[number, boolean, string, boolean]',
          parameters: [{ type: '[number, boolean, string, boolean]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias217', alias: '[number, boolean, string, boolean]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias217');
      assert.strictEqual(converted.types[0].alias, '[number, boolean, string, boolean]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn217');
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, string, boolean]",
        "h2dtscpp_convert_tuple_0004 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, string, boolean]",
        "h2dtscpp_convert_tuple_0004 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample217_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn217') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0004 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0005', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass218', alias: '',
          variableList: [{ type: '[number, boolean, boolean, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, boolean, boolean, number]",
        "h2dtscpp_convert_tuple_0005 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0005 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0006', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun218', returns: '[number, boolean, boolean, number]',
          parameters: [{ type: '[number, boolean, boolean, number]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun218');
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, boolean, number]",
        "h2dtscpp_convert_tuple_0006 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, boolean, number]",
        "h2dtscpp_convert_tuple_0006 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample218_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun218') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0006 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0007', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass218', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, boolean, boolean, number]',
            parameters: [{ type: '[number, boolean, boolean, number]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, boolean, boolean, number]",
        "h2dtscpp_convert_tuple_0007 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, boolean, boolean, number]",
        "h2dtscpp_convert_tuple_0007 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0007 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0008', () => {
    try {
      const parsed = doParseTs('h2cpp218.ts', `
        function h2cpp218(p: [number, boolean, boolean, number]): [number, boolean, boolean, number] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, boolean, number]",
        "h2dtscpp_convert_tuple_0008 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, boolean, number]",
        "h2dtscpp_convert_tuple_0008 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp218.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp218') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0008 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0009', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn218', returns: '[number, boolean, boolean, number]',
          parameters: [{ type: '[number, boolean, boolean, number]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias218', alias: '[number, boolean, boolean, number]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias218');
      assert.strictEqual(converted.types[0].alias, '[number, boolean, boolean, number]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn218');
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, boolean, number]",
        "h2dtscpp_convert_tuple_0009 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, boolean, number]",
        "h2dtscpp_convert_tuple_0009 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample218_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn218') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0009 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0010', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass219', alias: '',
          variableList: [{ type: '[number, boolean, boolean, string]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, boolean, boolean, string]",
        "h2dtscpp_convert_tuple_0010 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0010 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0011', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun219', returns: '[number, boolean, boolean, string]',
          parameters: [{ type: '[number, boolean, boolean, string]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun219');
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, boolean, string]",
        "h2dtscpp_convert_tuple_0011 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, boolean, string]",
        "h2dtscpp_convert_tuple_0011 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample219_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun219') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0011 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0012', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass219', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, boolean, boolean, string]',
            parameters: [{ type: '[number, boolean, boolean, string]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, boolean, boolean, string]",
        "h2dtscpp_convert_tuple_0012 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, boolean, boolean, string]",
        "h2dtscpp_convert_tuple_0012 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0012 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0013', () => {
    try {
      const parsed = doParseTs('h2cpp219.ts', `
        function h2cpp219(p: [number, boolean, boolean, string]): [number, boolean, boolean, string] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, boolean, string]",
        "h2dtscpp_convert_tuple_0013 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, boolean, string]",
        "h2dtscpp_convert_tuple_0013 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp219.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp219') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0013 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0014', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn219', returns: '[number, boolean, boolean, string]',
          parameters: [{ type: '[number, boolean, boolean, string]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias219', alias: '[number, boolean, boolean, string]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias219');
      assert.strictEqual(converted.types[0].alias, '[number, boolean, boolean, string]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn219');
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, boolean, string]",
        "h2dtscpp_convert_tuple_0014 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, boolean, string]",
        "h2dtscpp_convert_tuple_0014 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample219_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn219') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0014 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0015', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass220', alias: '',
          variableList: [{ type: '[number, boolean, boolean, boolean]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, boolean, boolean, boolean]",
        "h2dtscpp_convert_tuple_0015 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0015 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0016', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun220', returns: '[number, boolean, boolean, boolean]',
          parameters: [{ type: '[number, boolean, boolean, boolean]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun220');
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, boolean, boolean]",
        "h2dtscpp_convert_tuple_0016 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, boolean, boolean]",
        "h2dtscpp_convert_tuple_0016 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample220_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun220') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0016 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0017', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass220', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, boolean, boolean, boolean]',
            parameters: [{ type: '[number, boolean, boolean, boolean]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, boolean, boolean, boolean]",
        "h2dtscpp_convert_tuple_0017 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, boolean, boolean, boolean]",
        "h2dtscpp_convert_tuple_0017 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0017 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0018', () => {
    try {
      const parsed = doParseTs('h2cpp220.ts', `
        function h2cpp220(p: [number, boolean, boolean, boolean]): [number, boolean, boolean, boolean] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, boolean, boolean]",
        "h2dtscpp_convert_tuple_0018 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, boolean, boolean]",
        "h2dtscpp_convert_tuple_0018 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp220.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp220') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0018 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0019', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn220', returns: '[number, boolean, boolean, boolean]',
          parameters: [{ type: '[number, boolean, boolean, boolean]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias220', alias: '[number, boolean, boolean, boolean]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias220');
      assert.strictEqual(converted.types[0].alias, '[number, boolean, boolean, boolean]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn220');
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean, boolean, boolean]",
        "h2dtscpp_convert_tuple_0019 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean, boolean, boolean]",
        "h2dtscpp_convert_tuple_0019 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample220_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn220') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0019 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0020', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass221', alias: '',
          variableList: [{ type: '[string, number, number, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, number, number, number]",
        "h2dtscpp_convert_tuple_0020 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0020 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0021', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun221', returns: '[string, number, number, number]',
          parameters: [{ type: '[string, number, number, number]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun221');
      assert.strictEqual(converted.funcs[0].returns, "[string, number, number, number]",
        "h2dtscpp_convert_tuple_0021 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, number, number]",
        "h2dtscpp_convert_tuple_0021 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample221_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun221') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0021 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0022', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass221', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[string, number, number, number]',
            parameters: [{ type: '[string, number, number, number]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[string, number, number, number]",
        "h2dtscpp_convert_tuple_0022 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[string, number, number, number]",
        "h2dtscpp_convert_tuple_0022 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0022 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0023', () => {
    try {
      const parsed = doParseTs('h2cpp221.ts', `
        function h2cpp221(p: [string, number, number, number]): [string, number, number, number] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, number, number, number]",
        "h2dtscpp_convert_tuple_0023 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, number, number]",
        "h2dtscpp_convert_tuple_0023 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp221.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp221') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0023 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0024', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn221', returns: '[string, number, number, number]',
          parameters: [{ type: '[string, number, number, number]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias221', alias: '[string, number, number, number]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias221');
      assert.strictEqual(converted.types[0].alias, '[string, number, number, number]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn221');
      assert.strictEqual(converted.funcs[0].returns, "[string, number, number, number]",
        "h2dtscpp_convert_tuple_0024 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, number, number]",
        "h2dtscpp_convert_tuple_0024 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample221_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn221') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0024 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0025', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass222', alias: '',
          variableList: [{ type: '[string, number, number, string]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, number, number, string]",
        "h2dtscpp_convert_tuple_0025 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0025 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0026', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun222', returns: '[string, number, number, string]',
          parameters: [{ type: '[string, number, number, string]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun222');
      assert.strictEqual(converted.funcs[0].returns, "[string, number, number, string]",
        "h2dtscpp_convert_tuple_0026 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, number, string]",
        "h2dtscpp_convert_tuple_0026 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample222_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun222') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0026 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0027', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass222', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[string, number, number, string]',
            parameters: [{ type: '[string, number, number, string]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[string, number, number, string]",
        "h2dtscpp_convert_tuple_0027 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[string, number, number, string]",
        "h2dtscpp_convert_tuple_0027 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0027 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0028', () => {
    try {
      const parsed = doParseTs('h2cpp222.ts', `
        function h2cpp222(p: [string, number, number, string]): [string, number, number, string] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, number, number, string]",
        "h2dtscpp_convert_tuple_0028 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, number, string]",
        "h2dtscpp_convert_tuple_0028 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp222.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp222') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0028 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0029', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn222', returns: '[string, number, number, string]',
          parameters: [{ type: '[string, number, number, string]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias222', alias: '[string, number, number, string]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias222');
      assert.strictEqual(converted.types[0].alias, '[string, number, number, string]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn222');
      assert.strictEqual(converted.funcs[0].returns, "[string, number, number, string]",
        "h2dtscpp_convert_tuple_0029 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, number, string]",
        "h2dtscpp_convert_tuple_0029 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample222_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn222') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0029 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0030', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass223', alias: '',
          variableList: [{ type: '[string, number, number, boolean]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, number, number, boolean]",
        "h2dtscpp_convert_tuple_0030 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0030 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0031', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun223', returns: '[string, number, number, boolean]',
          parameters: [{ type: '[string, number, number, boolean]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun223');
      assert.strictEqual(converted.funcs[0].returns, "[string, number, number, boolean]",
        "h2dtscpp_convert_tuple_0031 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, number, boolean]",
        "h2dtscpp_convert_tuple_0031 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample223_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun223') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0031 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0032', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass223', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[string, number, number, boolean]',
            parameters: [{ type: '[string, number, number, boolean]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[string, number, number, boolean]",
        "h2dtscpp_convert_tuple_0032 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[string, number, number, boolean]",
        "h2dtscpp_convert_tuple_0032 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0032 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0033', () => {
    try {
      const parsed = doParseTs('h2cpp223.ts', `
        function h2cpp223(p: [string, number, number, boolean]): [string, number, number, boolean] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, number, number, boolean]",
        "h2dtscpp_convert_tuple_0033 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, number, boolean]",
        "h2dtscpp_convert_tuple_0033 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp223.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp223') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0033 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0034', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn223', returns: '[string, number, number, boolean]',
          parameters: [{ type: '[string, number, number, boolean]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias223', alias: '[string, number, number, boolean]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias223');
      assert.strictEqual(converted.types[0].alias, '[string, number, number, boolean]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn223');
      assert.strictEqual(converted.funcs[0].returns, "[string, number, number, boolean]",
        "h2dtscpp_convert_tuple_0034 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, number, boolean]",
        "h2dtscpp_convert_tuple_0034 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample223_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn223') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0034 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0035', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass224', alias: '',
          variableList: [{ type: '[string, number, string, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, number, string, number]",
        "h2dtscpp_convert_tuple_0035 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0035 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0036', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun224', returns: '[string, number, string, number]',
          parameters: [{ type: '[string, number, string, number]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun224');
      assert.strictEqual(converted.funcs[0].returns, "[string, number, string, number]",
        "h2dtscpp_convert_tuple_0036 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, string, number]",
        "h2dtscpp_convert_tuple_0036 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample224_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun224') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0036 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0037', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass224', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[string, number, string, number]',
            parameters: [{ type: '[string, number, string, number]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[string, number, string, number]",
        "h2dtscpp_convert_tuple_0037 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[string, number, string, number]",
        "h2dtscpp_convert_tuple_0037 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0037 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0038', () => {
    try {
      const parsed = doParseTs('h2cpp224.ts', `
        function h2cpp224(p: [string, number, string, number]): [string, number, string, number] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, number, string, number]",
        "h2dtscpp_convert_tuple_0038 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, string, number]",
        "h2dtscpp_convert_tuple_0038 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp224.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp224') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0038 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0039', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn224', returns: '[string, number, string, number]',
          parameters: [{ type: '[string, number, string, number]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias224', alias: '[string, number, string, number]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias224');
      assert.strictEqual(converted.types[0].alias, '[string, number, string, number]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn224');
      assert.strictEqual(converted.funcs[0].returns, "[string, number, string, number]",
        "h2dtscpp_convert_tuple_0039 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, string, number]",
        "h2dtscpp_convert_tuple_0039 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample224_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn224') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0039 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0040', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass225', alias: '',
          variableList: [{ type: '[string, number, string, string]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, number, string, string]",
        "h2dtscpp_convert_tuple_0040 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0040 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0041', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun225', returns: '[string, number, string, string]',
          parameters: [{ type: '[string, number, string, string]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun225');
      assert.strictEqual(converted.funcs[0].returns, "[string, number, string, string]",
        "h2dtscpp_convert_tuple_0041 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, string, string]",
        "h2dtscpp_convert_tuple_0041 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample225_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun225') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0041 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0042', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass225', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[string, number, string, string]',
            parameters: [{ type: '[string, number, string, string]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[string, number, string, string]",
        "h2dtscpp_convert_tuple_0042 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[string, number, string, string]",
        "h2dtscpp_convert_tuple_0042 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0042 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0043', () => {
    try {
      const parsed = doParseTs('h2cpp225.ts', `
        function h2cpp225(p: [string, number, string, string]): [string, number, string, string] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, number, string, string]",
        "h2dtscpp_convert_tuple_0043 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, string, string]",
        "h2dtscpp_convert_tuple_0043 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp225.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp225') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0043 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0044', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn225', returns: '[string, number, string, string]',
          parameters: [{ type: '[string, number, string, string]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias225', alias: '[string, number, string, string]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias225');
      assert.strictEqual(converted.types[0].alias, '[string, number, string, string]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn225');
      assert.strictEqual(converted.funcs[0].returns, "[string, number, string, string]",
        "h2dtscpp_convert_tuple_0044 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, string, string]",
        "h2dtscpp_convert_tuple_0044 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample225_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn225') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0044 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0045', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass226', alias: '',
          variableList: [{ type: '[string, number, string, boolean]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, number, string, boolean]",
        "h2dtscpp_convert_tuple_0045 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0045 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0046', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun226', returns: '[string, number, string, boolean]',
          parameters: [{ type: '[string, number, string, boolean]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun226');
      assert.strictEqual(converted.funcs[0].returns, "[string, number, string, boolean]",
        "h2dtscpp_convert_tuple_0046 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, string, boolean]",
        "h2dtscpp_convert_tuple_0046 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample226_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun226') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0046 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0047', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass226', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[string, number, string, boolean]',
            parameters: [{ type: '[string, number, string, boolean]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[string, number, string, boolean]",
        "h2dtscpp_convert_tuple_0047 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[string, number, string, boolean]",
        "h2dtscpp_convert_tuple_0047 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0047 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0048', () => {
    try {
      const parsed = doParseTs('h2cpp226.ts', `
        function h2cpp226(p: [string, number, string, boolean]): [string, number, string, boolean] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, number, string, boolean]",
        "h2dtscpp_convert_tuple_0048 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, string, boolean]",
        "h2dtscpp_convert_tuple_0048 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp226.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp226') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0048 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0049', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn226', returns: '[string, number, string, boolean]',
          parameters: [{ type: '[string, number, string, boolean]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias226', alias: '[string, number, string, boolean]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias226');
      assert.strictEqual(converted.types[0].alias, '[string, number, string, boolean]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn226');
      assert.strictEqual(converted.funcs[0].returns, "[string, number, string, boolean]",
        "h2dtscpp_convert_tuple_0049 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, string, boolean]",
        "h2dtscpp_convert_tuple_0049 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample226_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn226') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0049 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0050', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass227', alias: '',
          variableList: [{ type: '[string, number, boolean, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, number, boolean, number]",
        "h2dtscpp_convert_tuple_0050 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0050 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0051', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun227', returns: '[string, number, boolean, number]',
          parameters: [{ type: '[string, number, boolean, number]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun227');
      assert.strictEqual(converted.funcs[0].returns, "[string, number, boolean, number]",
        "h2dtscpp_convert_tuple_0051 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, boolean, number]",
        "h2dtscpp_convert_tuple_0051 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample227_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun227') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0051 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0052', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass227', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[string, number, boolean, number]',
            parameters: [{ type: '[string, number, boolean, number]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[string, number, boolean, number]",
        "h2dtscpp_convert_tuple_0052 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[string, number, boolean, number]",
        "h2dtscpp_convert_tuple_0052 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0052 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0053', () => {
    try {
      const parsed = doParseTs('h2cpp227.ts', `
        function h2cpp227(p: [string, number, boolean, number]): [string, number, boolean, number] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, number, boolean, number]",
        "h2dtscpp_convert_tuple_0053 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, boolean, number]",
        "h2dtscpp_convert_tuple_0053 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp227.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp227') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0053 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0054', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn227', returns: '[string, number, boolean, number]',
          parameters: [{ type: '[string, number, boolean, number]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias227', alias: '[string, number, boolean, number]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias227');
      assert.strictEqual(converted.types[0].alias, '[string, number, boolean, number]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn227');
      assert.strictEqual(converted.funcs[0].returns, "[string, number, boolean, number]",
        "h2dtscpp_convert_tuple_0054 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, boolean, number]",
        "h2dtscpp_convert_tuple_0054 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample227_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn227') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0054 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0055', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass228', alias: '',
          variableList: [{ type: '[string, number, boolean, string]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, number, boolean, string]",
        "h2dtscpp_convert_tuple_0055 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0055 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0056', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun228', returns: '[string, number, boolean, string]',
          parameters: [{ type: '[string, number, boolean, string]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun228');
      assert.strictEqual(converted.funcs[0].returns, "[string, number, boolean, string]",
        "h2dtscpp_convert_tuple_0056 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, boolean, string]",
        "h2dtscpp_convert_tuple_0056 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample228_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun228') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0056 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0057', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass228', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[string, number, boolean, string]',
            parameters: [{ type: '[string, number, boolean, string]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[string, number, boolean, string]",
        "h2dtscpp_convert_tuple_0057 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[string, number, boolean, string]",
        "h2dtscpp_convert_tuple_0057 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0057 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0058', () => {
    try {
      const parsed = doParseTs('h2cpp228.ts', `
        function h2cpp228(p: [string, number, boolean, string]): [string, number, boolean, string] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, number, boolean, string]",
        "h2dtscpp_convert_tuple_0058 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, boolean, string]",
        "h2dtscpp_convert_tuple_0058 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp228.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp228') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0058 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0059', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn228', returns: '[string, number, boolean, string]',
          parameters: [{ type: '[string, number, boolean, string]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias228', alias: '[string, number, boolean, string]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias228');
      assert.strictEqual(converted.types[0].alias, '[string, number, boolean, string]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn228');
      assert.strictEqual(converted.funcs[0].returns, "[string, number, boolean, string]",
        "h2dtscpp_convert_tuple_0059 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, boolean, string]",
        "h2dtscpp_convert_tuple_0059 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample228_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn228') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0059 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0060', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass229', alias: '',
          variableList: [{ type: '[string, number, boolean, boolean]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, number, boolean, boolean]",
        "h2dtscpp_convert_tuple_0060 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0060 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0061', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun229', returns: '[string, number, boolean, boolean]',
          parameters: [{ type: '[string, number, boolean, boolean]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun229');
      assert.strictEqual(converted.funcs[0].returns, "[string, number, boolean, boolean]",
        "h2dtscpp_convert_tuple_0061 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, boolean, boolean]",
        "h2dtscpp_convert_tuple_0061 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample229_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun229') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0061 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0062', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass229', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[string, number, boolean, boolean]',
            parameters: [{ type: '[string, number, boolean, boolean]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[string, number, boolean, boolean]",
        "h2dtscpp_convert_tuple_0062 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[string, number, boolean, boolean]",
        "h2dtscpp_convert_tuple_0062 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0062 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0063', () => {
    try {
      const parsed = doParseTs('h2cpp229.ts', `
        function h2cpp229(p: [string, number, boolean, boolean]): [string, number, boolean, boolean] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, number, boolean, boolean]",
        "h2dtscpp_convert_tuple_0063 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, boolean, boolean]",
        "h2dtscpp_convert_tuple_0063 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp229.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp229') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0063 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0064', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn229', returns: '[string, number, boolean, boolean]',
          parameters: [{ type: '[string, number, boolean, boolean]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias229', alias: '[string, number, boolean, boolean]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias229');
      assert.strictEqual(converted.types[0].alias, '[string, number, boolean, boolean]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn229');
      assert.strictEqual(converted.funcs[0].returns, "[string, number, boolean, boolean]",
        "h2dtscpp_convert_tuple_0064 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number, boolean, boolean]",
        "h2dtscpp_convert_tuple_0064 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample229_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn229') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0064 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0065', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass230', alias: '',
          variableList: [{ type: '[string, string, number, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, number, number]",
        "h2dtscpp_convert_tuple_0065 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0065 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0066', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun230', returns: '[string, string, number, number]',
          parameters: [{ type: '[string, string, number, number]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun230');
      assert.strictEqual(converted.funcs[0].returns, "[string, string, number, number]",
        "h2dtscpp_convert_tuple_0066 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, number, number]",
        "h2dtscpp_convert_tuple_0066 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample230_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun230') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0066 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0067', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass230', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[string, string, number, number]',
            parameters: [{ type: '[string, string, number, number]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[string, string, number, number]",
        "h2dtscpp_convert_tuple_0067 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[string, string, number, number]",
        "h2dtscpp_convert_tuple_0067 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0067 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0068', () => {
    try {
      const parsed = doParseTs('h2cpp230.ts', `
        function h2cpp230(p: [string, string, number, number]): [string, string, number, number] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string, number, number]",
        "h2dtscpp_convert_tuple_0068 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, number, number]",
        "h2dtscpp_convert_tuple_0068 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp230.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp230') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0068 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0069', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn230', returns: '[string, string, number, number]',
          parameters: [{ type: '[string, string, number, number]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias230', alias: '[string, string, number, number]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias230');
      assert.strictEqual(converted.types[0].alias, '[string, string, number, number]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn230');
      assert.strictEqual(converted.funcs[0].returns, "[string, string, number, number]",
        "h2dtscpp_convert_tuple_0069 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, number, number]",
        "h2dtscpp_convert_tuple_0069 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample230_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn230') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0069 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0070', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass231', alias: '',
          variableList: [{ type: '[string, string, number, string]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string, number, string]",
        "h2dtscpp_convert_tuple_0070 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0070 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0071', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun231', returns: '[string, string, number, string]',
          parameters: [{ type: '[string, string, number, string]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun231');
      assert.strictEqual(converted.funcs[0].returns, "[string, string, number, string]",
        "h2dtscpp_convert_tuple_0071 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, number, string]",
        "h2dtscpp_convert_tuple_0071 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample231_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun231') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0071 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0072', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass231', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[string, string, number, string]',
            parameters: [{ type: '[string, string, number, string]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[string, string, number, string]",
        "h2dtscpp_convert_tuple_0072 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[string, string, number, string]",
        "h2dtscpp_convert_tuple_0072 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0072 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0073', () => {
    try {
      const parsed = doParseTs('h2cpp231.ts', `
        function h2cpp231(p: [string, string, number, string]): [string, string, number, string] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string, number, string]",
        "h2dtscpp_convert_tuple_0073 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, number, string]",
        "h2dtscpp_convert_tuple_0073 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp231.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp231') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0073 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0074', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn231', returns: '[string, string, number, string]',
          parameters: [{ type: '[string, string, number, string]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias231', alias: '[string, string, number, string]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias231');
      assert.strictEqual(converted.types[0].alias, '[string, string, number, string]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn231');
      assert.strictEqual(converted.funcs[0].returns, "[string, string, number, string]",
        "h2dtscpp_convert_tuple_0074 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string, number, string]",
        "h2dtscpp_convert_tuple_0074 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample231_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn231') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0074 execution error: ${String(err)}`);
    }
  });
});
