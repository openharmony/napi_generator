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

suite('Stability_H2DTSCPP_CONVERT_MAP_Part02', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_CONVERT_MAP_Part02.');


  test('h2dtscpp_convert_map_0001', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn285', returns: 'Map<number, string>',
          parameters: [{ type: 'Map<number, string>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias285', alias: 'Map<number, string>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias285');
      assert.strictEqual(converted.types[0].alias, 'Map<number, string>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn285');
      assert.strictEqual(converted.funcs[0].returns, "std::map<double, std::string>",
        "h2dtscpp_convert_map_0001 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<double, std::string>",
        "h2dtscpp_convert_map_0001 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample285_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn285') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0001 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0002', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass286', alias: '',
          variableList: [{ type: 'Map<number, boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<double, bool>",
        "h2dtscpp_convert_map_0002 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0002 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0003', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun286', returns: 'Map<number, boolean>',
          parameters: [{ type: 'Map<number, boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun286');
      assert.strictEqual(converted.funcs[0].returns, "std::map<double, bool>",
        "h2dtscpp_convert_map_0003 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<double, bool>",
        "h2dtscpp_convert_map_0003 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample286_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun286') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0003 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0004', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass286', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<number, boolean>',
            parameters: [{ type: 'Map<number, boolean>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::map<double, bool>",
        "h2dtscpp_convert_map_0004 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::map<double, bool>",
        "h2dtscpp_convert_map_0004 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0004 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0005', () => {
    try {
      const parsed = doParseTs('h2cpp286.ts', `
        function h2cpp286(p: Map<number, boolean>): Map<number, boolean> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::map<double, bool>",
        "h2dtscpp_convert_map_0005 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<double, bool>",
        "h2dtscpp_convert_map_0005 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp286.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp286') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0005 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0006', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn286', returns: 'Map<number, boolean>',
          parameters: [{ type: 'Map<number, boolean>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias286', alias: 'Map<number, boolean>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias286');
      assert.strictEqual(converted.types[0].alias, 'Map<number, boolean>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn286');
      assert.strictEqual(converted.funcs[0].returns, "std::map<double, bool>",
        "h2dtscpp_convert_map_0006 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<double, bool>",
        "h2dtscpp_convert_map_0006 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample286_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn286') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0006 execution error: ${String(err)}`);
    }
  });
});
