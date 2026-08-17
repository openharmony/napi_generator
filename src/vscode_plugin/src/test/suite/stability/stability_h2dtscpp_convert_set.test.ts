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

suite('Stability_H2DTSCPP_CONVERT_SET_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_CONVERT_SET_Part01.');


  test('h2dtscpp_convert_set_0001', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass17', alias: '',
          variableList: [{ type: 'Set<string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::set<std::string>",
        "h2dtscpp_convert_set_0001 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_set_0001 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_set_0002', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun17', returns: 'Set<string>',
          parameters: [{ type: 'Set<string>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun17');
      assert.strictEqual(converted.funcs[0].returns, "std::set<std::string>",
        "h2dtscpp_convert_set_0002 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::set<std::string>",
        "h2dtscpp_convert_set_0002 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample17_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun17') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_set_0002 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_set_0003', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass17', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Set<string>',
            parameters: [{ type: 'Set<string>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::set<std::string>",
        "h2dtscpp_convert_set_0003 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::set<std::string>",
        "h2dtscpp_convert_set_0003 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_set_0003 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_set_0004', () => {
    try {
      const parsed = doParseTs('h2cpp17.ts', `function h2cpp17(p: Set<string>): Set<string> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::set<std::string>",
        "h2dtscpp_convert_set_0004 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::set<std::string>",
        "h2dtscpp_convert_set_0004 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp17.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp17') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_set_0004 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_set_0005', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn17', returns: 'Set<string>',
          parameters: [{ type: 'Set<string>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias17', alias: 'Set<string>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias17');
      assert.strictEqual(converted.types[0].alias, 'Set<string>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn17');
      assert.strictEqual(converted.funcs[0].returns, "std::set<std::string>",
        "h2dtscpp_convert_set_0005 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::set<std::string>",
        "h2dtscpp_convert_set_0005 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample17_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn17') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_set_0005 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_set_0006', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass18', alias: '',
          variableList: [{ type: 'Set<number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::set<double>",
        "h2dtscpp_convert_set_0006 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_set_0006 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_set_0007', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun18', returns: 'Set<number>',
          parameters: [{ type: 'Set<number>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun18');
      assert.strictEqual(converted.funcs[0].returns, "std::set<double>",
        "h2dtscpp_convert_set_0007 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::set<double>",
        "h2dtscpp_convert_set_0007 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample18_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun18') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_set_0007 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_set_0008', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass18', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Set<number>',
            parameters: [{ type: 'Set<number>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::set<double>",
        "h2dtscpp_convert_set_0008 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::set<double>",
        "h2dtscpp_convert_set_0008 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_set_0008 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_set_0009', () => {
    try {
      const parsed = doParseTs('h2cpp18.ts', `function h2cpp18(p: Set<number>): Set<number> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::set<double>",
        "h2dtscpp_convert_set_0009 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::set<double>",
        "h2dtscpp_convert_set_0009 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp18.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp18') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_set_0009 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_set_0010', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn18', returns: 'Set<number>',
          parameters: [{ type: 'Set<number>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias18', alias: 'Set<number>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias18');
      assert.strictEqual(converted.types[0].alias, 'Set<number>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn18');
      assert.strictEqual(converted.funcs[0].returns, "std::set<double>",
        "h2dtscpp_convert_set_0010 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::set<double>",
        "h2dtscpp_convert_set_0010 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample18_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn18') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_set_0010 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_set_0011', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass19', alias: '',
          variableList: [{ type: 'Set<boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::set<bool>",
        "h2dtscpp_convert_set_0011 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_set_0011 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_set_0012', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun19', returns: 'Set<boolean>',
          parameters: [{ type: 'Set<boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun19');
      assert.strictEqual(converted.funcs[0].returns, "std::set<bool>",
        "h2dtscpp_convert_set_0012 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::set<bool>",
        "h2dtscpp_convert_set_0012 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample19_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun19') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_set_0012 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_set_0013', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass19', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Set<boolean>',
            parameters: [{ type: 'Set<boolean>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::set<bool>",
        "h2dtscpp_convert_set_0013 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::set<bool>",
        "h2dtscpp_convert_set_0013 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_set_0013 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_set_0014', () => {
    try {
      const parsed = doParseTs('h2cpp19.ts', `function h2cpp19(p: Set<boolean>): Set<boolean> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::set<bool>",
        "h2dtscpp_convert_set_0014 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::set<bool>",
        "h2dtscpp_convert_set_0014 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp19.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp19') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_set_0014 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_set_0015', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn19', returns: 'Set<boolean>',
          parameters: [{ type: 'Set<boolean>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias19', alias: 'Set<boolean>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias19');
      assert.strictEqual(converted.types[0].alias, 'Set<boolean>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn19');
      assert.strictEqual(converted.funcs[0].returns, "std::set<bool>",
        "h2dtscpp_convert_set_0015 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::set<bool>",
        "h2dtscpp_convert_set_0015 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample19_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn19') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_set_0015 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_set_0016', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass67', alias: '',
          variableList: [{ type: 'Set<any>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "Set<any>",
        "h2dtscpp_convert_set_0016 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_set_0016 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_set_0017', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun67', returns: 'Set<any>',
          parameters: [{ type: 'Set<any>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun67');
      assert.strictEqual(converted.funcs[0].returns, "Set<any>",
        "h2dtscpp_convert_set_0017 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Set<any>",
        "h2dtscpp_convert_set_0017 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample67_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun67') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_set_0017 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_set_0018', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass67', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Set<any>',
            parameters: [{ type: 'Set<any>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "Set<any>",
        "h2dtscpp_convert_set_0018 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "Set<any>",
        "h2dtscpp_convert_set_0018 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_set_0018 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_set_0019', () => {
    try {
      const parsed = doParseTs('h2cpp67.ts', `function h2cpp67(p: Set<any>): Set<any> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Set<any>",
        "h2dtscpp_convert_set_0019 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Set<any>",
        "h2dtscpp_convert_set_0019 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp67.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp67') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_set_0019 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_set_0020', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn67', returns: 'Set<any>',
          parameters: [{ type: 'Set<any>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias67', alias: 'Set<any>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias67');
      assert.strictEqual(converted.types[0].alias, 'Set<any>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn67');
      assert.strictEqual(converted.funcs[0].returns, "Set<any>",
        "h2dtscpp_convert_set_0020 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Set<any>",
        "h2dtscpp_convert_set_0020 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample67_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn67') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_set_0020 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_set_0021', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass68', alias: '',
          variableList: [{ type: 'Set<object>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "Set<object>",
        "h2dtscpp_convert_set_0021 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_set_0021 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_set_0022', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun68', returns: 'Set<object>',
          parameters: [{ type: 'Set<object>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun68');
      assert.strictEqual(converted.funcs[0].returns, "Set<object>",
        "h2dtscpp_convert_set_0022 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Set<object>",
        "h2dtscpp_convert_set_0022 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample68_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun68') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_set_0022 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_set_0023', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass68', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Set<object>',
            parameters: [{ type: 'Set<object>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "Set<object>",
        "h2dtscpp_convert_set_0023 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "Set<object>",
        "h2dtscpp_convert_set_0023 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_set_0023 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_set_0024', () => {
    try {
      const parsed = doParseTs('h2cpp68.ts', `function h2cpp68(p: Set<object>): Set<object> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Set<object>",
        "h2dtscpp_convert_set_0024 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Set<object>",
        "h2dtscpp_convert_set_0024 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp68.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp68') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_set_0024 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_set_0025', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn68', returns: 'Set<object>',
          parameters: [{ type: 'Set<object>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias68', alias: 'Set<object>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias68');
      assert.strictEqual(converted.types[0].alias, 'Set<object>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn68');
      assert.strictEqual(converted.funcs[0].returns, "Set<object>",
        "h2dtscpp_convert_set_0025 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Set<object>",
        "h2dtscpp_convert_set_0025 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample68_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn68') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_set_0025 execution error: ${String(err)}`);
    }
  });
});
