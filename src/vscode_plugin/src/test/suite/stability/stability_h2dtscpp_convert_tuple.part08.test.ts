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

suite('Stability_H2DTSCPP_CONVERT_TUPLE_Part08', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_CONVERT_TUPLE_Part08.');


  test('h2dtscpp_convert_tuple_0001', () => {
    try {
      const parsed = doParseTs('h2cpp261.ts', `
        function h2cpp261(p: [boolean, string, string, string]): [boolean, string, string, string] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, string, string]",
        "h2dtscpp_convert_tuple_0001 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, string, string]",
        "h2dtscpp_convert_tuple_0001 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp261.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp261') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0001 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0002', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn261', returns: '[boolean, string, string, string]',
          parameters: [{ type: '[boolean, string, string, string]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias261', alias: '[boolean, string, string, string]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias261');
      assert.strictEqual(converted.types[0].alias, '[boolean, string, string, string]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn261');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, string, string]",
        "h2dtscpp_convert_tuple_0002 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, string, string]",
        "h2dtscpp_convert_tuple_0002 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample261_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn261') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0002 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0003', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass262', alias: '',
          variableList: [{ type: '[boolean, string, string, boolean]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, string, boolean]",
        "h2dtscpp_convert_tuple_0003 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0003 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0004', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun262', returns: '[boolean, string, string, boolean]',
          parameters: [{ type: '[boolean, string, string, boolean]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun262');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, string, boolean]",
        "h2dtscpp_convert_tuple_0004 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, string, boolean]",
        "h2dtscpp_convert_tuple_0004 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample262_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun262') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0004 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0005', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass262', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, string, string, boolean]',
            parameters: [{ type: '[boolean, string, string, boolean]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, string, string, boolean]",
        "h2dtscpp_convert_tuple_0005 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, string, string, boolean]",
        "h2dtscpp_convert_tuple_0005 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0005 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0006', () => {
    try {
      const parsed = doParseTs('h2cpp262.ts', `
        function h2cpp262(p: [boolean, string, string, boolean]): [boolean, string, string, boolean] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, string, boolean]",
        "h2dtscpp_convert_tuple_0006 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, string, boolean]",
        "h2dtscpp_convert_tuple_0006 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp262.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp262') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0006 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0007', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn262', returns: '[boolean, string, string, boolean]',
          parameters: [{ type: '[boolean, string, string, boolean]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias262', alias: '[boolean, string, string, boolean]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias262');
      assert.strictEqual(converted.types[0].alias, '[boolean, string, string, boolean]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn262');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, string, boolean]",
        "h2dtscpp_convert_tuple_0007 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, string, boolean]",
        "h2dtscpp_convert_tuple_0007 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample262_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn262') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0007 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0008', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass263', alias: '',
          variableList: [{ type: '[boolean, string, boolean, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, boolean, number]",
        "h2dtscpp_convert_tuple_0008 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0008 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0009', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun263', returns: '[boolean, string, boolean, number]',
          parameters: [{ type: '[boolean, string, boolean, number]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun263');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, boolean, number]",
        "h2dtscpp_convert_tuple_0009 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, boolean, number]",
        "h2dtscpp_convert_tuple_0009 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample263_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun263') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0009 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0010', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass263', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, string, boolean, number]',
            parameters: [{ type: '[boolean, string, boolean, number]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, string, boolean, number]",
        "h2dtscpp_convert_tuple_0010 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, string, boolean, number]",
        "h2dtscpp_convert_tuple_0010 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0010 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0011', () => {
    try {
      const parsed = doParseTs('h2cpp263.ts', `
        function h2cpp263(p: [boolean, string, boolean, number]): [boolean, string, boolean, number] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, boolean, number]",
        "h2dtscpp_convert_tuple_0011 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, boolean, number]",
        "h2dtscpp_convert_tuple_0011 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp263.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp263') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0011 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0012', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn263', returns: '[boolean, string, boolean, number]',
          parameters: [{ type: '[boolean, string, boolean, number]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias263', alias: '[boolean, string, boolean, number]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias263');
      assert.strictEqual(converted.types[0].alias, '[boolean, string, boolean, number]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn263');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, boolean, number]",
        "h2dtscpp_convert_tuple_0012 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, boolean, number]",
        "h2dtscpp_convert_tuple_0012 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample263_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn263') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0012 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0013', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass264', alias: '',
          variableList: [{ type: '[boolean, string, boolean, string]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, boolean, string]",
        "h2dtscpp_convert_tuple_0013 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0013 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0014', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun264', returns: '[boolean, string, boolean, string]',
          parameters: [{ type: '[boolean, string, boolean, string]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun264');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, boolean, string]",
        "h2dtscpp_convert_tuple_0014 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, boolean, string]",
        "h2dtscpp_convert_tuple_0014 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample264_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun264') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0014 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0015', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass264', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, string, boolean, string]',
            parameters: [{ type: '[boolean, string, boolean, string]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, string, boolean, string]",
        "h2dtscpp_convert_tuple_0015 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, string, boolean, string]",
        "h2dtscpp_convert_tuple_0015 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0015 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0016', () => {
    try {
      const parsed = doParseTs('h2cpp264.ts', `
        function h2cpp264(p: [boolean, string, boolean, string]): [boolean, string, boolean, string] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, boolean, string]",
        "h2dtscpp_convert_tuple_0016 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, boolean, string]",
        "h2dtscpp_convert_tuple_0016 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp264.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp264') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0016 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0017', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn264', returns: '[boolean, string, boolean, string]',
          parameters: [{ type: '[boolean, string, boolean, string]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias264', alias: '[boolean, string, boolean, string]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias264');
      assert.strictEqual(converted.types[0].alias, '[boolean, string, boolean, string]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn264');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, boolean, string]",
        "h2dtscpp_convert_tuple_0017 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, boolean, string]",
        "h2dtscpp_convert_tuple_0017 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample264_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn264') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0017 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0018', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass265', alias: '',
          variableList: [{ type: '[boolean, string, boolean, boolean]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string, boolean, boolean]",
        "h2dtscpp_convert_tuple_0018 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0018 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0019', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun265', returns: '[boolean, string, boolean, boolean]',
          parameters: [{ type: '[boolean, string, boolean, boolean]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun265');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, boolean, boolean]",
        "h2dtscpp_convert_tuple_0019 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, boolean, boolean]",
        "h2dtscpp_convert_tuple_0019 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample265_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun265') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0019 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0020', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass265', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, string, boolean, boolean]',
            parameters: [{ type: '[boolean, string, boolean, boolean]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, string, boolean, boolean]",
        "h2dtscpp_convert_tuple_0020 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, string, boolean, boolean]",
        "h2dtscpp_convert_tuple_0020 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0020 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0021', () => {
    try {
      const parsed = doParseTs('h2cpp265.ts', `
        function h2cpp265(p: [boolean, string, boolean, boolean]): [boolean, string, boolean, boolean] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, boolean, boolean]",
        "h2dtscpp_convert_tuple_0021 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, boolean, boolean]",
        "h2dtscpp_convert_tuple_0021 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp265.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp265') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0021 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0022', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn265', returns: '[boolean, string, boolean, boolean]',
          parameters: [{ type: '[boolean, string, boolean, boolean]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias265', alias: '[boolean, string, boolean, boolean]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias265');
      assert.strictEqual(converted.types[0].alias, '[boolean, string, boolean, boolean]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn265');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string, boolean, boolean]",
        "h2dtscpp_convert_tuple_0022 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string, boolean, boolean]",
        "h2dtscpp_convert_tuple_0022 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample265_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn265') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0022 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0023', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass266', alias: '',
          variableList: [{ type: '[boolean, boolean, number, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, number, number]",
        "h2dtscpp_convert_tuple_0023 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0023 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0024', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun266', returns: '[boolean, boolean, number, number]',
          parameters: [{ type: '[boolean, boolean, number, number]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun266');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, number, number]",
        "h2dtscpp_convert_tuple_0024 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, number, number]",
        "h2dtscpp_convert_tuple_0024 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample266_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun266') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0024 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0025', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass266', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, boolean, number, number]',
            parameters: [{ type: '[boolean, boolean, number, number]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, boolean, number, number]",
        "h2dtscpp_convert_tuple_0025 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, boolean, number, number]",
        "h2dtscpp_convert_tuple_0025 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0025 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0026', () => {
    try {
      const parsed = doParseTs('h2cpp266.ts', `
        function h2cpp266(p: [boolean, boolean, number, number]): [boolean, boolean, number, number] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, number, number]",
        "h2dtscpp_convert_tuple_0026 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, number, number]",
        "h2dtscpp_convert_tuple_0026 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp266.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp266') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0026 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0027', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn266', returns: '[boolean, boolean, number, number]',
          parameters: [{ type: '[boolean, boolean, number, number]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias266', alias: '[boolean, boolean, number, number]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias266');
      assert.strictEqual(converted.types[0].alias, '[boolean, boolean, number, number]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn266');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, number, number]",
        "h2dtscpp_convert_tuple_0027 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, number, number]",
        "h2dtscpp_convert_tuple_0027 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample266_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn266') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0027 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0028', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass267', alias: '',
          variableList: [{ type: '[boolean, boolean, number, string]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, number, string]",
        "h2dtscpp_convert_tuple_0028 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0028 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0029', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun267', returns: '[boolean, boolean, number, string]',
          parameters: [{ type: '[boolean, boolean, number, string]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun267');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, number, string]",
        "h2dtscpp_convert_tuple_0029 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, number, string]",
        "h2dtscpp_convert_tuple_0029 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample267_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun267') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0029 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0030', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass267', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, boolean, number, string]',
            parameters: [{ type: '[boolean, boolean, number, string]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, boolean, number, string]",
        "h2dtscpp_convert_tuple_0030 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, boolean, number, string]",
        "h2dtscpp_convert_tuple_0030 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0030 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0031', () => {
    try {
      const parsed = doParseTs('h2cpp267.ts', `
        function h2cpp267(p: [boolean, boolean, number, string]): [boolean, boolean, number, string] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, number, string]",
        "h2dtscpp_convert_tuple_0031 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, number, string]",
        "h2dtscpp_convert_tuple_0031 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp267.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp267') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0031 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0032', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn267', returns: '[boolean, boolean, number, string]',
          parameters: [{ type: '[boolean, boolean, number, string]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias267', alias: '[boolean, boolean, number, string]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias267');
      assert.strictEqual(converted.types[0].alias, '[boolean, boolean, number, string]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn267');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, number, string]",
        "h2dtscpp_convert_tuple_0032 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, number, string]",
        "h2dtscpp_convert_tuple_0032 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample267_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn267') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0032 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0033', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass268', alias: '',
          variableList: [{ type: '[boolean, boolean, number, boolean]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, number, boolean]",
        "h2dtscpp_convert_tuple_0033 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0033 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0034', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun268', returns: '[boolean, boolean, number, boolean]',
          parameters: [{ type: '[boolean, boolean, number, boolean]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun268');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, number, boolean]",
        "h2dtscpp_convert_tuple_0034 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, number, boolean]",
        "h2dtscpp_convert_tuple_0034 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample268_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun268') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0034 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0035', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass268', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, boolean, number, boolean]',
            parameters: [{ type: '[boolean, boolean, number, boolean]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, boolean, number, boolean]",
        "h2dtscpp_convert_tuple_0035 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, boolean, number, boolean]",
        "h2dtscpp_convert_tuple_0035 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0035 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0036', () => {
    try {
      const parsed = doParseTs('h2cpp268.ts', `
        function h2cpp268(p: [boolean, boolean, number, boolean]): [boolean, boolean, number, boolean] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, number, boolean]",
        "h2dtscpp_convert_tuple_0036 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, number, boolean]",
        "h2dtscpp_convert_tuple_0036 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp268.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp268') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0036 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0037', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn268', returns: '[boolean, boolean, number, boolean]',
          parameters: [{ type: '[boolean, boolean, number, boolean]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias268', alias: '[boolean, boolean, number, boolean]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias268');
      assert.strictEqual(converted.types[0].alias, '[boolean, boolean, number, boolean]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn268');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, number, boolean]",
        "h2dtscpp_convert_tuple_0037 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, number, boolean]",
        "h2dtscpp_convert_tuple_0037 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample268_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn268') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0037 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0038', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass269', alias: '',
          variableList: [{ type: '[boolean, boolean, string, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, string, number]",
        "h2dtscpp_convert_tuple_0038 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0038 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0039', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun269', returns: '[boolean, boolean, string, number]',
          parameters: [{ type: '[boolean, boolean, string, number]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun269');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, string, number]",
        "h2dtscpp_convert_tuple_0039 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, string, number]",
        "h2dtscpp_convert_tuple_0039 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample269_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun269') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0039 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0040', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass269', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, boolean, string, number]',
            parameters: [{ type: '[boolean, boolean, string, number]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, boolean, string, number]",
        "h2dtscpp_convert_tuple_0040 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, boolean, string, number]",
        "h2dtscpp_convert_tuple_0040 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0040 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0041', () => {
    try {
      const parsed = doParseTs('h2cpp269.ts', `
        function h2cpp269(p: [boolean, boolean, string, number]): [boolean, boolean, string, number] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, string, number]",
        "h2dtscpp_convert_tuple_0041 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, string, number]",
        "h2dtscpp_convert_tuple_0041 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp269.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp269') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0041 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0042', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn269', returns: '[boolean, boolean, string, number]',
          parameters: [{ type: '[boolean, boolean, string, number]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias269', alias: '[boolean, boolean, string, number]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias269');
      assert.strictEqual(converted.types[0].alias, '[boolean, boolean, string, number]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn269');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, string, number]",
        "h2dtscpp_convert_tuple_0042 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, string, number]",
        "h2dtscpp_convert_tuple_0042 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample269_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn269') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0042 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0043', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass270', alias: '',
          variableList: [{ type: '[boolean, boolean, string, string]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, string, string]",
        "h2dtscpp_convert_tuple_0043 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0043 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0044', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun270', returns: '[boolean, boolean, string, string]',
          parameters: [{ type: '[boolean, boolean, string, string]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun270');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, string, string]",
        "h2dtscpp_convert_tuple_0044 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, string, string]",
        "h2dtscpp_convert_tuple_0044 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample270_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun270') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0044 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0045', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass270', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, boolean, string, string]',
            parameters: [{ type: '[boolean, boolean, string, string]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, boolean, string, string]",
        "h2dtscpp_convert_tuple_0045 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, boolean, string, string]",
        "h2dtscpp_convert_tuple_0045 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0045 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0046', () => {
    try {
      const parsed = doParseTs('h2cpp270.ts', `
        function h2cpp270(p: [boolean, boolean, string, string]): [boolean, boolean, string, string] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, string, string]",
        "h2dtscpp_convert_tuple_0046 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, string, string]",
        "h2dtscpp_convert_tuple_0046 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp270.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp270') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0046 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0047', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn270', returns: '[boolean, boolean, string, string]',
          parameters: [{ type: '[boolean, boolean, string, string]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias270', alias: '[boolean, boolean, string, string]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias270');
      assert.strictEqual(converted.types[0].alias, '[boolean, boolean, string, string]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn270');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, string, string]",
        "h2dtscpp_convert_tuple_0047 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, string, string]",
        "h2dtscpp_convert_tuple_0047 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample270_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn270') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0047 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0048', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass271', alias: '',
          variableList: [{ type: '[boolean, boolean, string, boolean]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, string, boolean]",
        "h2dtscpp_convert_tuple_0048 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0048 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0049', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun271', returns: '[boolean, boolean, string, boolean]',
          parameters: [{ type: '[boolean, boolean, string, boolean]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun271');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, string, boolean]",
        "h2dtscpp_convert_tuple_0049 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, string, boolean]",
        "h2dtscpp_convert_tuple_0049 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample271_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun271') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0049 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0050', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass271', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, boolean, string, boolean]',
            parameters: [{ type: '[boolean, boolean, string, boolean]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, boolean, string, boolean]",
        "h2dtscpp_convert_tuple_0050 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, boolean, string, boolean]",
        "h2dtscpp_convert_tuple_0050 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0050 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0051', () => {
    try {
      const parsed = doParseTs('h2cpp271.ts', `
        function h2cpp271(p: [boolean, boolean, string, boolean]): [boolean, boolean, string, boolean] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, string, boolean]",
        "h2dtscpp_convert_tuple_0051 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, string, boolean]",
        "h2dtscpp_convert_tuple_0051 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp271.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp271') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0051 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0052', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn271', returns: '[boolean, boolean, string, boolean]',
          parameters: [{ type: '[boolean, boolean, string, boolean]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias271', alias: '[boolean, boolean, string, boolean]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias271');
      assert.strictEqual(converted.types[0].alias, '[boolean, boolean, string, boolean]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn271');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, string, boolean]",
        "h2dtscpp_convert_tuple_0052 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, string, boolean]",
        "h2dtscpp_convert_tuple_0052 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample271_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn271') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0052 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0053', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass272', alias: '',
          variableList: [{ type: '[boolean, boolean, boolean, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, boolean, number]",
        "h2dtscpp_convert_tuple_0053 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0053 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0054', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun272', returns: '[boolean, boolean, boolean, number]',
          parameters: [{ type: '[boolean, boolean, boolean, number]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun272');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, boolean, number]",
        "h2dtscpp_convert_tuple_0054 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, boolean, number]",
        "h2dtscpp_convert_tuple_0054 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample272_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun272') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0054 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0055', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass272', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, boolean, boolean, number]',
            parameters: [{ type: '[boolean, boolean, boolean, number]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, boolean, boolean, number]",
        "h2dtscpp_convert_tuple_0055 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, boolean, boolean, number]",
        "h2dtscpp_convert_tuple_0055 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0055 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0056', () => {
    try {
      const parsed = doParseTs('h2cpp272.ts', `
        function h2cpp272(p: [boolean, boolean, boolean, number]): [boolean, boolean, boolean, number] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, boolean, number]",
        "h2dtscpp_convert_tuple_0056 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, boolean, number]",
        "h2dtscpp_convert_tuple_0056 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp272.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp272') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0056 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0057', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn272', returns: '[boolean, boolean, boolean, number]',
          parameters: [{ type: '[boolean, boolean, boolean, number]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias272', alias: '[boolean, boolean, boolean, number]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias272');
      assert.strictEqual(converted.types[0].alias, '[boolean, boolean, boolean, number]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn272');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, boolean, number]",
        "h2dtscpp_convert_tuple_0057 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, boolean, number]",
        "h2dtscpp_convert_tuple_0057 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample272_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn272') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0057 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0058', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass273', alias: '',
          variableList: [{ type: '[boolean, boolean, boolean, string]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, boolean, string]",
        "h2dtscpp_convert_tuple_0058 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0058 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0059', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun273', returns: '[boolean, boolean, boolean, string]',
          parameters: [{ type: '[boolean, boolean, boolean, string]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun273');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, boolean, string]",
        "h2dtscpp_convert_tuple_0059 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, boolean, string]",
        "h2dtscpp_convert_tuple_0059 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample273_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun273') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0059 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0060', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass273', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, boolean, boolean, string]',
            parameters: [{ type: '[boolean, boolean, boolean, string]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, boolean, boolean, string]",
        "h2dtscpp_convert_tuple_0060 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, boolean, boolean, string]",
        "h2dtscpp_convert_tuple_0060 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0060 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0061', () => {
    try {
      const parsed = doParseTs('h2cpp273.ts', `
        function h2cpp273(p: [boolean, boolean, boolean, string]): [boolean, boolean, boolean, string] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, boolean, string]",
        "h2dtscpp_convert_tuple_0061 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, boolean, string]",
        "h2dtscpp_convert_tuple_0061 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp273.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp273') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0061 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0062', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn273', returns: '[boolean, boolean, boolean, string]',
          parameters: [{ type: '[boolean, boolean, boolean, string]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias273', alias: '[boolean, boolean, boolean, string]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias273');
      assert.strictEqual(converted.types[0].alias, '[boolean, boolean, boolean, string]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn273');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, boolean, string]",
        "h2dtscpp_convert_tuple_0062 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, boolean, string]",
        "h2dtscpp_convert_tuple_0062 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample273_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn273') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0062 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0063', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass274', alias: '',
          variableList: [{ type: '[boolean, boolean, boolean, boolean]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, boolean, boolean]",
        "h2dtscpp_convert_tuple_0063 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0063 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0064', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun274', returns: '[boolean, boolean, boolean, boolean]',
          parameters: [{ type: '[boolean, boolean, boolean, boolean]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun274');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, boolean, boolean]",
        "h2dtscpp_convert_tuple_0064 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, boolean, boolean]",
        "h2dtscpp_convert_tuple_0064 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample274_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun274') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0064 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0065', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass274', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, boolean, boolean, boolean]',
            parameters: [{ type: '[boolean, boolean, boolean, boolean]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, boolean, boolean, boolean]",
        "h2dtscpp_convert_tuple_0065 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, boolean, boolean, boolean]",
        "h2dtscpp_convert_tuple_0065 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0065 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0066', () => {
    try {
      const parsed = doParseTs('h2cpp274.ts', `
        function h2cpp274(p: [boolean, boolean, boolean, boolean]): [boolean, boolean, boolean, boolean] { return p;
        }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, boolean, boolean]",
        "h2dtscpp_convert_tuple_0066 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, boolean, boolean]",
        "h2dtscpp_convert_tuple_0066 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp274.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp274') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0066 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0067', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn274', returns: '[boolean, boolean, boolean, boolean]',
          parameters: [{ type: '[boolean, boolean, boolean, boolean]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias274', alias: '[boolean, boolean, boolean, boolean]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias274');
      assert.strictEqual(converted.types[0].alias, '[boolean, boolean, boolean, boolean]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn274');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean, boolean, boolean]",
        "h2dtscpp_convert_tuple_0067 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, boolean, boolean]",
        "h2dtscpp_convert_tuple_0067 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample274_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn274') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0067 execution error: ${String(err)}`);
    }
  });
});
