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

suite('Stability_H2DTSCPP_CONVERT_TUPLE_Part07', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_CONVERT_TUPLE_Part07.');


  test('h2dtscpp_convert_tuple_0001', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn246', returns: '[string, boolean, boolean, string]',
          parameters: [{ type: '[string, boolean, boolean, string]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias246', alias: '[string, boolean, boolean, string]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias246');
      assert.strictEqual(converted.types[0].alias, '[string, boolean, boolean, string]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn246');
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, boolean, string]",
        "h2dtscpp_convert_tuple_0001 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, boolean, string]",
        "h2dtscpp_convert_tuple_0001 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample246_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn246') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0001 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0002', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass247', alias: '',
          variableList: [{ type: '[string, boolean, boolean, boolean]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean, boolean, boolean]",
        "h2dtscpp_convert_tuple_0002 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0002 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0003', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun247', returns: '[string, boolean, boolean, boolean]',
          parameters: [{ type: '[string, boolean, boolean, boolean]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun247');
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, boolean, boolean]",
        "h2dtscpp_convert_tuple_0003 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, boolean, boolean]",
        "h2dtscpp_convert_tuple_0003 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample247_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun247') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0003 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0004', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass247', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[string, boolean, boolean, boolean]',
            parameters: [{ type: '[string, boolean, boolean, boolean]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[string, boolean, boolean, boolean]",
        "h2dtscpp_convert_tuple_0004 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[string, boolean, boolean, boolean]",
        "h2dtscpp_convert_tuple_0004 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0004 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0005', () => {
    try {
      const parsed = doParseTs('h2cpp247.ts', `
        function h2cpp247(p: [string, boolean, boolean, boolean]): [string, boolean, boolean, boolean] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, boolean, boolean]",
        "h2dtscpp_convert_tuple_0005 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, boolean, boolean]",
        "h2dtscpp_convert_tuple_0005 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp247.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp247') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0005 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0006', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn247', returns: '[string, boolean, boolean, boolean]',
          parameters: [{ type: '[string, boolean, boolean, boolean]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias247', alias: '[string, boolean, boolean, boolean]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias247');
      assert.strictEqual(converted.types[0].alias, '[string, boolean, boolean, boolean]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn247');
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean, boolean, boolean]",
        "h2dtscpp_convert_tuple_0006 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean, boolean, boolean]",
        "h2dtscpp_convert_tuple_0006 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample247_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn247') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0006 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0007', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass248', alias: '',
          variableList: [{ type: '[boolean, number, number, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, number, number]",
        "h2dtscpp_convert_tuple_0007 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0007 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0008', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun248', returns: '[boolean, number, number, number]',
          parameters: [{ type: '[boolean, number, number, number]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun248');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, number, number]",
        "h2dtscpp_convert_tuple_0008 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, number, number]",
        "h2dtscpp_convert_tuple_0008 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample248_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun248') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0008 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0009', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass248', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, number, number, number]',
            parameters: [{ type: '[boolean, number, number, number]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, number, number, number]",
        "h2dtscpp_convert_tuple_0009 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, number, number, number]",
        "h2dtscpp_convert_tuple_0009 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0009 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0010', () => {
    try {
      const parsed = doParseTs('h2cpp248.ts', `
        function h2cpp248(p: [boolean, number, number, number]): [boolean, number, number, number] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, number, number]",
        "h2dtscpp_convert_tuple_0010 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, number, number]",
        "h2dtscpp_convert_tuple_0010 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp248.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp248') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0010 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0011', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn248', returns: '[boolean, number, number, number]',
          parameters: [{ type: '[boolean, number, number, number]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias248', alias: '[boolean, number, number, number]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias248');
      assert.strictEqual(converted.types[0].alias, '[boolean, number, number, number]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn248');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, number, number]",
        "h2dtscpp_convert_tuple_0011 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, number, number]",
        "h2dtscpp_convert_tuple_0011 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample248_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn248') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0011 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0012', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass249', alias: '',
          variableList: [{ type: '[boolean, number, number, string]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, number, string]",
        "h2dtscpp_convert_tuple_0012 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0012 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0013', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun249', returns: '[boolean, number, number, string]',
          parameters: [{ type: '[boolean, number, number, string]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun249');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, number, string]",
        "h2dtscpp_convert_tuple_0013 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, number, string]",
        "h2dtscpp_convert_tuple_0013 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample249_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun249') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0013 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0014', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass249', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, number, number, string]',
            parameters: [{ type: '[boolean, number, number, string]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, number, number, string]",
        "h2dtscpp_convert_tuple_0014 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, number, number, string]",
        "h2dtscpp_convert_tuple_0014 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0014 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0015', () => {
    try {
      const parsed = doParseTs('h2cpp249.ts', `
        function h2cpp249(p: [boolean, number, number, string]): [boolean, number, number, string] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, number, string]",
        "h2dtscpp_convert_tuple_0015 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, number, string]",
        "h2dtscpp_convert_tuple_0015 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp249.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp249') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0015 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0016', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn249', returns: '[boolean, number, number, string]',
          parameters: [{ type: '[boolean, number, number, string]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias249', alias: '[boolean, number, number, string]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias249');
      assert.strictEqual(converted.types[0].alias, '[boolean, number, number, string]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn249');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, number, string]",
        "h2dtscpp_convert_tuple_0016 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, number, string]",
        "h2dtscpp_convert_tuple_0016 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample249_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn249') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0016 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0017', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass250', alias: '',
          variableList: [{ type: '[boolean, number, number, boolean]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, number, boolean]",
        "h2dtscpp_convert_tuple_0017 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0017 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0018', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun250', returns: '[boolean, number, number, boolean]',
          parameters: [{ type: '[boolean, number, number, boolean]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun250');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, number, boolean]",
        "h2dtscpp_convert_tuple_0018 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, number, boolean]",
        "h2dtscpp_convert_tuple_0018 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample250_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun250') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0018 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0019', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass250', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, number, number, boolean]',
            parameters: [{ type: '[boolean, number, number, boolean]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, number, number, boolean]",
        "h2dtscpp_convert_tuple_0019 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, number, number, boolean]",
        "h2dtscpp_convert_tuple_0019 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0019 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0020', () => {
    try {
      const parsed = doParseTs('h2cpp250.ts', `
        function h2cpp250(p: [boolean, number, number, boolean]): [boolean, number, number, boolean] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, number, boolean]",
        "h2dtscpp_convert_tuple_0020 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, number, boolean]",
        "h2dtscpp_convert_tuple_0020 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp250.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp250') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0020 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0021', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn250', returns: '[boolean, number, number, boolean]',
          parameters: [{ type: '[boolean, number, number, boolean]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias250', alias: '[boolean, number, number, boolean]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias250');
      assert.strictEqual(converted.types[0].alias, '[boolean, number, number, boolean]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn250');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, number, boolean]",
        "h2dtscpp_convert_tuple_0021 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, number, boolean]",
        "h2dtscpp_convert_tuple_0021 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample250_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn250') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0021 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0022', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass251', alias: '',
          variableList: [{ type: '[boolean, number, string, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, string, number]",
        "h2dtscpp_convert_tuple_0022 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0022 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0023', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun251', returns: '[boolean, number, string, number]',
          parameters: [{ type: '[boolean, number, string, number]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun251');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, string, number]",
        "h2dtscpp_convert_tuple_0023 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, string, number]",
        "h2dtscpp_convert_tuple_0023 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample251_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun251') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0023 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0024', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass251', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, number, string, number]',
            parameters: [{ type: '[boolean, number, string, number]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, number, string, number]",
        "h2dtscpp_convert_tuple_0024 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, number, string, number]",
        "h2dtscpp_convert_tuple_0024 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0024 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0025', () => {
    try {
      const parsed = doParseTs('h2cpp251.ts', `
        function h2cpp251(p: [boolean, number, string, number]): [boolean, number, string, number] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, string, number]",
        "h2dtscpp_convert_tuple_0025 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, string, number]",
        "h2dtscpp_convert_tuple_0025 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp251.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp251') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0025 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0026', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn251', returns: '[boolean, number, string, number]',
          parameters: [{ type: '[boolean, number, string, number]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias251', alias: '[boolean, number, string, number]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias251');
      assert.strictEqual(converted.types[0].alias, '[boolean, number, string, number]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn251');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, string, number]",
        "h2dtscpp_convert_tuple_0026 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, string, number]",
        "h2dtscpp_convert_tuple_0026 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample251_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn251') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0026 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0027', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass252', alias: '',
          variableList: [{ type: '[boolean, number, string, string]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, string, string]",
        "h2dtscpp_convert_tuple_0027 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0027 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0028', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun252', returns: '[boolean, number, string, string]',
          parameters: [{ type: '[boolean, number, string, string]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun252');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, string, string]",
        "h2dtscpp_convert_tuple_0028 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, string, string]",
        "h2dtscpp_convert_tuple_0028 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample252_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun252') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0028 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0029', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass252', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, number, string, string]',
            parameters: [{ type: '[boolean, number, string, string]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, number, string, string]",
        "h2dtscpp_convert_tuple_0029 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, number, string, string]",
        "h2dtscpp_convert_tuple_0029 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0029 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0030', () => {
    try {
      const parsed = doParseTs('h2cpp252.ts', `
        function h2cpp252(p: [boolean, number, string, string]): [boolean, number, string, string] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, string, string]",
        "h2dtscpp_convert_tuple_0030 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, string, string]",
        "h2dtscpp_convert_tuple_0030 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp252.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp252') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0030 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0031', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn252', returns: '[boolean, number, string, string]',
          parameters: [{ type: '[boolean, number, string, string]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias252', alias: '[boolean, number, string, string]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias252');
      assert.strictEqual(converted.types[0].alias, '[boolean, number, string, string]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn252');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, string, string]",
        "h2dtscpp_convert_tuple_0031 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, string, string]",
        "h2dtscpp_convert_tuple_0031 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample252_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn252') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0031 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0032', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass253', alias: '',
          variableList: [{ type: '[boolean, number, string, boolean]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, string, boolean]",
        "h2dtscpp_convert_tuple_0032 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0032 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0033', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun253', returns: '[boolean, number, string, boolean]',
          parameters: [{ type: '[boolean, number, string, boolean]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun253');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, string, boolean]",
        "h2dtscpp_convert_tuple_0033 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, string, boolean]",
        "h2dtscpp_convert_tuple_0033 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample253_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun253') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0033 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0034', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass253', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, number, string, boolean]',
            parameters: [{ type: '[boolean, number, string, boolean]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, number, string, boolean]",
        "h2dtscpp_convert_tuple_0034 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, number, string, boolean]",
        "h2dtscpp_convert_tuple_0034 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0034 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0035', () => {
    try {
      const parsed = doParseTs('h2cpp253.ts', `
        function h2cpp253(p: [boolean, number, string, boolean]): [boolean, number, string, boolean] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, string, boolean]",
        "h2dtscpp_convert_tuple_0035 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, string, boolean]",
        "h2dtscpp_convert_tuple_0035 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp253.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp253') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0035 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0036', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn253', returns: '[boolean, number, string, boolean]',
          parameters: [{ type: '[boolean, number, string, boolean]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias253', alias: '[boolean, number, string, boolean]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias253');
      assert.strictEqual(converted.types[0].alias, '[boolean, number, string, boolean]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn253');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, string, boolean]",
        "h2dtscpp_convert_tuple_0036 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, string, boolean]",
        "h2dtscpp_convert_tuple_0036 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample253_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn253') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0036 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0037', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass254', alias: '',
          variableList: [{ type: '[boolean, number, boolean, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, boolean, number]",
        "h2dtscpp_convert_tuple_0037 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0037 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0038', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun254', returns: '[boolean, number, boolean, number]',
          parameters: [{ type: '[boolean, number, boolean, number]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun254');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, boolean, number]",
        "h2dtscpp_convert_tuple_0038 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, boolean, number]",
        "h2dtscpp_convert_tuple_0038 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample254_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun254') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0038 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0039', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass254', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, number, boolean, number]',
            parameters: [{ type: '[boolean, number, boolean, number]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, number, boolean, number]",
        "h2dtscpp_convert_tuple_0039 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, number, boolean, number]",
        "h2dtscpp_convert_tuple_0039 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0039 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0040', () => {
    try {
      const parsed = doParseTs('h2cpp254.ts', `
        function h2cpp254(p: [boolean, number, boolean, number]): [boolean, number, boolean, number] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, boolean, number]",
        "h2dtscpp_convert_tuple_0040 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, boolean, number]",
        "h2dtscpp_convert_tuple_0040 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp254.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp254') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0040 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0041', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn254', returns: '[boolean, number, boolean, number]',
          parameters: [{ type: '[boolean, number, boolean, number]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias254', alias: '[boolean, number, boolean, number]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias254');
      assert.strictEqual(converted.types[0].alias, '[boolean, number, boolean, number]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn254');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, boolean, number]",
        "h2dtscpp_convert_tuple_0041 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, boolean, number]",
        "h2dtscpp_convert_tuple_0041 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample254_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn254') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0041 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0042', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass255', alias: '',
          variableList: [{ type: '[boolean, number, boolean, string]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, boolean, string]",
        "h2dtscpp_convert_tuple_0042 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0042 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0043', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun255', returns: '[boolean, number, boolean, string]',
          parameters: [{ type: '[boolean, number, boolean, string]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun255');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, boolean, string]",
        "h2dtscpp_convert_tuple_0043 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, boolean, string]",
        "h2dtscpp_convert_tuple_0043 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample255_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun255') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0043 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0044', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass255', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, number, boolean, string]',
            parameters: [{ type: '[boolean, number, boolean, string]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, number, boolean, string]",
        "h2dtscpp_convert_tuple_0044 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, number, boolean, string]",
        "h2dtscpp_convert_tuple_0044 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0044 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0045', () => {
    try {
      const parsed = doParseTs('h2cpp255.ts', `
        function h2cpp255(p: [boolean, number, boolean, string]): [boolean, number, boolean, string] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, boolean, string]",
        "h2dtscpp_convert_tuple_0045 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, boolean, string]",
        "h2dtscpp_convert_tuple_0045 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp255.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp255') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0045 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0046', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn255', returns: '[boolean, number, boolean, string]',
          parameters: [{ type: '[boolean, number, boolean, string]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias255', alias: '[boolean, number, boolean, string]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias255');
      assert.strictEqual(converted.types[0].alias, '[boolean, number, boolean, string]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn255');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, boolean, string]",
        "h2dtscpp_convert_tuple_0046 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, boolean, string]",
        "h2dtscpp_convert_tuple_0046 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample255_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn255') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0046 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0047', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass256', alias: '',
          variableList: [{ type: '[boolean, number, boolean, boolean]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number, boolean, boolean]",
        "h2dtscpp_convert_tuple_0047 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0047 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0048', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun256', returns: '[boolean, number, boolean, boolean]',
          parameters: [{ type: '[boolean, number, boolean, boolean]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun256');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, boolean, boolean]",
        "h2dtscpp_convert_tuple_0048 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, boolean, boolean]",
        "h2dtscpp_convert_tuple_0048 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample256_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun256') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0048 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0049', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass256', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, number, boolean, boolean]',
            parameters: [{ type: '[boolean, number, boolean, boolean]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, number, boolean, boolean]",
        "h2dtscpp_convert_tuple_0049 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, number, boolean, boolean]",
        "h2dtscpp_convert_tuple_0049 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0049 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0050', () => {
    try {
      const parsed = doParseTs('h2cpp256.ts', `
        function h2cpp256(p: [boolean, number, boolean, boolean]): [boolean, number, boolean, boolean] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, boolean, boolean]",
        "h2dtscpp_convert_tuple_0050 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, boolean, boolean]",
        "h2dtscpp_convert_tuple_0050 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp256.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp256') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0050 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0051', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn256', returns: '[boolean, number, boolean, boolean]',
          parameters: [{ type: '[boolean, number, boolean, boolean]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias256', alias: '[boolean, number, boolean, boolean]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias256');
      assert.strictEqual(converted.types[0].alias, '[boolean, number, boolean, boolean]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn256');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number, boolean, boolean]",
        "h2dtscpp_convert_tuple_0051 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number, boolean, boolean]",
        "h2dtscpp_convert_tuple_0051 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample256_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn256') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0051 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0052', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass257', alias: '',
          variableList: [{ type: '[boolean, string, number, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, number, number]",
        "h2dtscpp_convert_tuple_0052 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0052 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0053', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun257', returns: '[boolean, string, number, number]',
          parameters: [{ type: '[boolean, string, number, number]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun257');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, number, number]",
        "h2dtscpp_convert_tuple_0053 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, number, number]",
        "h2dtscpp_convert_tuple_0053 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample257_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun257') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0053 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0054', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass257', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, string, number, number]',
            parameters: [{ type: '[boolean, string, number, number]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, string, number, number]",
        "h2dtscpp_convert_tuple_0054 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, string, number, number]",
        "h2dtscpp_convert_tuple_0054 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0054 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0055', () => {
    try {
      const parsed = doParseTs('h2cpp257.ts', `
        function h2cpp257(p: [boolean, string, number, number]): [boolean, string, number, number] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, number, number]",
        "h2dtscpp_convert_tuple_0055 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, number, number]",
        "h2dtscpp_convert_tuple_0055 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp257.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp257') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0055 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0056', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn257', returns: '[boolean, string, number, number]',
          parameters: [{ type: '[boolean, string, number, number]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias257', alias: '[boolean, string, number, number]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias257');
      assert.strictEqual(converted.types[0].alias, '[boolean, string, number, number]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn257');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, number, number]",
        "h2dtscpp_convert_tuple_0056 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, number, number]",
        "h2dtscpp_convert_tuple_0056 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample257_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn257') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0056 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0057', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass258', alias: '',
          variableList: [{ type: '[boolean, string, number, string]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, number, string]",
        "h2dtscpp_convert_tuple_0057 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0057 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0058', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun258', returns: '[boolean, string, number, string]',
          parameters: [{ type: '[boolean, string, number, string]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun258');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, number, string]",
        "h2dtscpp_convert_tuple_0058 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, number, string]",
        "h2dtscpp_convert_tuple_0058 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample258_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun258') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0058 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0059', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass258', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, string, number, string]',
            parameters: [{ type: '[boolean, string, number, string]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, string, number, string]",
        "h2dtscpp_convert_tuple_0059 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, string, number, string]",
        "h2dtscpp_convert_tuple_0059 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0059 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0060', () => {
    try {
      const parsed = doParseTs('h2cpp258.ts', `
        function h2cpp258(p: [boolean, string, number, string]): [boolean, string, number, string] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, number, string]",
        "h2dtscpp_convert_tuple_0060 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, number, string]",
        "h2dtscpp_convert_tuple_0060 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp258.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp258') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0060 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0061', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn258', returns: '[boolean, string, number, string]',
          parameters: [{ type: '[boolean, string, number, string]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias258', alias: '[boolean, string, number, string]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias258');
      assert.strictEqual(converted.types[0].alias, '[boolean, string, number, string]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn258');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, number, string]",
        "h2dtscpp_convert_tuple_0061 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, number, string]",
        "h2dtscpp_convert_tuple_0061 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample258_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn258') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0061 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0062', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass259', alias: '',
          variableList: [{ type: '[boolean, string, number, boolean]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, number, boolean]",
        "h2dtscpp_convert_tuple_0062 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0062 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0063', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun259', returns: '[boolean, string, number, boolean]',
          parameters: [{ type: '[boolean, string, number, boolean]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun259');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, number, boolean]",
        "h2dtscpp_convert_tuple_0063 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, number, boolean]",
        "h2dtscpp_convert_tuple_0063 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample259_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun259') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0063 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0064', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass259', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, string, number, boolean]',
            parameters: [{ type: '[boolean, string, number, boolean]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, string, number, boolean]",
        "h2dtscpp_convert_tuple_0064 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, string, number, boolean]",
        "h2dtscpp_convert_tuple_0064 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0064 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0065', () => {
    try {
      const parsed = doParseTs('h2cpp259.ts', `
        function h2cpp259(p: [boolean, string, number, boolean]): [boolean, string, number, boolean] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, number, boolean]",
        "h2dtscpp_convert_tuple_0065 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, number, boolean]",
        "h2dtscpp_convert_tuple_0065 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp259.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp259') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0065 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0066', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn259', returns: '[boolean, string, number, boolean]',
          parameters: [{ type: '[boolean, string, number, boolean]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias259', alias: '[boolean, string, number, boolean]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias259');
      assert.strictEqual(converted.types[0].alias, '[boolean, string, number, boolean]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn259');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, number, boolean]",
        "h2dtscpp_convert_tuple_0066 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, number, boolean]",
        "h2dtscpp_convert_tuple_0066 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample259_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn259') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0066 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0067', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass260', alias: '',
          variableList: [{ type: '[boolean, string, string, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, string, number]",
        "h2dtscpp_convert_tuple_0067 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0067 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0068', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun260', returns: '[boolean, string, string, number]',
          parameters: [{ type: '[boolean, string, string, number]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun260');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, string, number]",
        "h2dtscpp_convert_tuple_0068 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, string, number]",
        "h2dtscpp_convert_tuple_0068 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample260_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun260') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0068 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0069', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass260', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, string, string, number]',
            parameters: [{ type: '[boolean, string, string, number]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, string, string, number]",
        "h2dtscpp_convert_tuple_0069 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, string, string, number]",
        "h2dtscpp_convert_tuple_0069 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0069 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0070', () => {
    try {
      const parsed = doParseTs('h2cpp260.ts', `
        function h2cpp260(p: [boolean, string, string, number]): [boolean, string, string, number] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, string, number]",
        "h2dtscpp_convert_tuple_0070 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, string, number]",
        "h2dtscpp_convert_tuple_0070 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp260.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp260') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0070 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0071', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn260', returns: '[boolean, string, string, number]',
          parameters: [{ type: '[boolean, string, string, number]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias260', alias: '[boolean, string, string, number]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias260');
      assert.strictEqual(converted.types[0].alias, '[boolean, string, string, number]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn260');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, string, number]",
        "h2dtscpp_convert_tuple_0071 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, string, number]",
        "h2dtscpp_convert_tuple_0071 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample260_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn260') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0071 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0072', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass261', alias: '',
          variableList: [{ type: '[boolean, string, string, string]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, string, string]",
        "h2dtscpp_convert_tuple_0072 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0072 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0073', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun261', returns: '[boolean, string, string, string]',
          parameters: [{ type: '[boolean, string, string, string]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun261');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, string, string]",
        "h2dtscpp_convert_tuple_0073 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, string, string]",
        "h2dtscpp_convert_tuple_0073 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample261_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun261') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0073 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0074', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass261', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, string, string, string]',
            parameters: [{ type: '[boolean, string, string, string]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, string, string, string]",
        "h2dtscpp_convert_tuple_0074 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, string, string, string]",
        "h2dtscpp_convert_tuple_0074 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0074 execution error: ${String(err)}`);
    }
  });
});
