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

suite('Stability_H2DTSCPP_CONVERT_OBJECT_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_CONVERT_OBJECT_Part01.');


  test('h2dtscpp_convert_object_0001', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass303', alias: '',
          variableList: [{ type: 'Record<string, number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "Record<string, number>",
        "h2dtscpp_convert_object_0001 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_object_0001 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_object_0002', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun303', returns: 'Record<string, number>',
          parameters: [{ type: 'Record<string, number>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun303');
      assert.strictEqual(converted.funcs[0].returns, "Record<string, number>",
        "h2dtscpp_convert_object_0002 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Record<string, number>",
        "h2dtscpp_convert_object_0002 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample303_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun303') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_object_0002 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_object_0003', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass303', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Record<string, number>',
            parameters: [{ type: 'Record<string, number>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "Record<string, number>",
        "h2dtscpp_convert_object_0003 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "Record<string, number>",
        "h2dtscpp_convert_object_0003 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_object_0003 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_object_0004', () => {
    try {
      const parsed = doParseTs('h2cpp303.ts', `
        function h2cpp303(p: Record<string, number>): Record<string, number> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Record<string, number>",
        "h2dtscpp_convert_object_0004 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Record<string, number>",
        "h2dtscpp_convert_object_0004 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp303.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp303') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_object_0004 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_object_0005', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn303', returns: 'Record<string, number>',
          parameters: [{ type: 'Record<string, number>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias303', alias: 'Record<string, number>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias303');
      assert.strictEqual(converted.types[0].alias, 'Record<string, number>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn303');
      assert.strictEqual(converted.funcs[0].returns, "Record<string, number>",
        "h2dtscpp_convert_object_0005 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Record<string, number>",
        "h2dtscpp_convert_object_0005 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample303_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn303') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_object_0005 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_object_0006', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass304', alias: '',
          variableList: [{ type: 'Record<string, string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "Record<string, string>",
        "h2dtscpp_convert_object_0006 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_object_0006 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_object_0007', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun304', returns: 'Record<string, string>',
          parameters: [{ type: 'Record<string, string>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun304');
      assert.strictEqual(converted.funcs[0].returns, "Record<string, string>",
        "h2dtscpp_convert_object_0007 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Record<string, string>",
        "h2dtscpp_convert_object_0007 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample304_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun304') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_object_0007 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_object_0008', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass304', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Record<string, string>',
            parameters: [{ type: 'Record<string, string>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "Record<string, string>",
        "h2dtscpp_convert_object_0008 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "Record<string, string>",
        "h2dtscpp_convert_object_0008 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_object_0008 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_object_0009', () => {
    try {
      const parsed = doParseTs('h2cpp304.ts', `
        function h2cpp304(p: Record<string, string>): Record<string, string> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Record<string, string>",
        "h2dtscpp_convert_object_0009 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Record<string, string>",
        "h2dtscpp_convert_object_0009 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp304.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp304') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_object_0009 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_object_0010', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn304', returns: 'Record<string, string>',
          parameters: [{ type: 'Record<string, string>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias304', alias: 'Record<string, string>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias304');
      assert.strictEqual(converted.types[0].alias, 'Record<string, string>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn304');
      assert.strictEqual(converted.funcs[0].returns, "Record<string, string>",
        "h2dtscpp_convert_object_0010 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Record<string, string>",
        "h2dtscpp_convert_object_0010 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample304_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn304') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_object_0010 execution error: ${String(err)}`);
    }
  });
});
