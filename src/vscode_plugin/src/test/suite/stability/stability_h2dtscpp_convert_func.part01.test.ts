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

suite('Stability_H2DTSCPP_CONVERT_FUNC_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_CONVERT_FUNC_Part01.');


  test('h2dtscpp_convert_func_0001', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass20', alias: '',
          variableList: [{ type: 'Callback<number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double)>",
        "h2dtscpp_convert_func_0001 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0001 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0002', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun20', returns: 'Callback<number>',
          parameters: [{ type: 'Callback<number>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun20');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double)>",
        "h2dtscpp_convert_func_0002 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double)>",
        "h2dtscpp_convert_func_0002 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample20_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun20') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0002 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0003', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass20', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Callback<number>',
            parameters: [{ type: 'Callback<number>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(double)>",
        "h2dtscpp_convert_func_0003 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<void(double)>",
        "h2dtscpp_convert_func_0003 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0003 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0004', () => {
    try {
      const parsed = doParseTs('h2cpp20.ts', `function h2cpp20(p: Callback<number>): Callback<number> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double)>",
        "h2dtscpp_convert_func_0004 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double)>",
        "h2dtscpp_convert_func_0004 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp20.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp20') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0004 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0005', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn20', returns: 'Callback<number>',
          parameters: [{ type: 'Callback<number>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias20', alias: 'Callback<number>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias20');
      assert.strictEqual(converted.types[0].alias, 'Callback<number>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn20');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double)>",
        "h2dtscpp_convert_func_0005 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double)>",
        "h2dtscpp_convert_func_0005 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample20_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn20') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0005 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0006', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass21', alias: '',
          variableList: [{ type: 'Callback<string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::string)>",
        "h2dtscpp_convert_func_0006 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0006 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0007', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun21', returns: 'Callback<string>',
          parameters: [{ type: 'Callback<string>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun21');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::string)>",
        "h2dtscpp_convert_func_0007 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::string)>",
        "h2dtscpp_convert_func_0007 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample21_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun21') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0007 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0008', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass21', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Callback<string>',
            parameters: [{ type: 'Callback<string>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(std::string)>",
        "h2dtscpp_convert_func_0008 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<void(std::string)>",
        "h2dtscpp_convert_func_0008 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0008 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0009', () => {
    try {
      const parsed = doParseTs('h2cpp21.ts', `function h2cpp21(p: Callback<string>): Callback<string> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::string)>",
        "h2dtscpp_convert_func_0009 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::string)>",
        "h2dtscpp_convert_func_0009 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp21.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp21') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0009 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0010', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn21', returns: 'Callback<string>',
          parameters: [{ type: 'Callback<string>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias21', alias: 'Callback<string>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias21');
      assert.strictEqual(converted.types[0].alias, 'Callback<string>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn21');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::string)>",
        "h2dtscpp_convert_func_0010 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::string)>",
        "h2dtscpp_convert_func_0010 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample21_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn21') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0010 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0011', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass22', alias: '',
          variableList: [{ type: 'Callback<boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(bool)>",
        "h2dtscpp_convert_func_0011 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0011 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0012', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun22', returns: 'Callback<boolean>',
          parameters: [{ type: 'Callback<boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun22');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(bool)>",
        "h2dtscpp_convert_func_0012 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(bool)>",
        "h2dtscpp_convert_func_0012 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample22_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun22') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0012 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0013', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass22', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Callback<boolean>',
            parameters: [{ type: 'Callback<boolean>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(bool)>",
        "h2dtscpp_convert_func_0013 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<void(bool)>",
        "h2dtscpp_convert_func_0013 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0013 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0014', () => {
    try {
      const parsed = doParseTs('h2cpp22.ts', `function h2cpp22(p: Callback<boolean>): Callback<boolean> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(bool)>",
        "h2dtscpp_convert_func_0014 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(bool)>",
        "h2dtscpp_convert_func_0014 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp22.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp22') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0014 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0015', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn22', returns: 'Callback<boolean>',
          parameters: [{ type: 'Callback<boolean>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias22', alias: 'Callback<boolean>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias22');
      assert.strictEqual(converted.types[0].alias, 'Callback<boolean>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn22');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(bool)>",
        "h2dtscpp_convert_func_0015 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(bool)>",
        "h2dtscpp_convert_func_0015 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample22_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn22') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0015 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0016', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass23', alias: '',
          variableList: [{ type: 'Callback<void>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(void)>",
        "h2dtscpp_convert_func_0016 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0016 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0017', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun23', returns: 'Callback<void>',
          parameters: [{ type: 'Callback<void>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun23');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(void)>",
        "h2dtscpp_convert_func_0017 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(void)>",
        "h2dtscpp_convert_func_0017 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample23_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun23') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0017 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0018', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass23', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Callback<void>',
            parameters: [{ type: 'Callback<void>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(void)>",
        "h2dtscpp_convert_func_0018 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<void(void)>",
        "h2dtscpp_convert_func_0018 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0018 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0019', () => {
    try {
      const parsed = doParseTs('h2cpp23.ts', `function h2cpp23(p: Callback<void>): Callback<void> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(void)>",
        "h2dtscpp_convert_func_0019 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(void)>",
        "h2dtscpp_convert_func_0019 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp23.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp23') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0019 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0020', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn23', returns: 'Callback<void>',
          parameters: [{ type: 'Callback<void>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias23', alias: 'Callback<void>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias23');
      assert.strictEqual(converted.types[0].alias, 'Callback<void>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn23');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(void)>",
        "h2dtscpp_convert_func_0020 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(void)>",
        "h2dtscpp_convert_func_0020 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample23_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn23') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0020 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0021', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass24', alias: '',
          variableList: [{ type: 'Callback<number[]>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::vector<double>)>",
        "h2dtscpp_convert_func_0021 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0021 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0022', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun24', returns: 'Callback<number[]>',
          parameters: [{ type: 'Callback<number[]>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun24');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::vector<double>)>",
        "h2dtscpp_convert_func_0022 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::vector<double>)>",
        "h2dtscpp_convert_func_0022 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample24_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun24') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0022 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0023', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass24', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Callback<number[]>',
            parameters: [{ type: 'Callback<number[]>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(std::vector<double>)>",
        "h2dtscpp_convert_func_0023 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<void(std::vector<double>)>",
        "h2dtscpp_convert_func_0023 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0023 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0024', () => {
    try {
      const parsed = doParseTs('h2cpp24.ts', `
        function h2cpp24(p: Callback<number[]>): Callback<number[]> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::vector<double>)>",
        "h2dtscpp_convert_func_0024 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::vector<double>)>",
        "h2dtscpp_convert_func_0024 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp24.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp24') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0024 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0025', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn24', returns: 'Callback<number[]>',
          parameters: [{ type: 'Callback<number[]>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias24', alias: 'Callback<number[]>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias24');
      assert.strictEqual(converted.types[0].alias, 'Callback<number[]>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn24');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::vector<double>)>",
        "h2dtscpp_convert_func_0025 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::vector<double>)>",
        "h2dtscpp_convert_func_0025 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample24_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn24') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0025 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0026', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass25', alias: '',
          variableList: [{ type: 'Callback<string[]>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::vector<std::string>)>",
        "h2dtscpp_convert_func_0026 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0026 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0027', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun25', returns: 'Callback<string[]>',
          parameters: [{ type: 'Callback<string[]>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun25');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::vector<std::string>)>",
        "h2dtscpp_convert_func_0027 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::vector<std::string>)>",
        "h2dtscpp_convert_func_0027 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample25_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun25') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0027 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0028', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass25', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Callback<string[]>',
            parameters: [{ type: 'Callback<string[]>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(std::vector<std::string>)>",
        "h2dtscpp_convert_func_0028 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<void(std::vector<std::string>)>",
        "h2dtscpp_convert_func_0028 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0028 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0029', () => {
    try {
      const parsed = doParseTs('h2cpp25.ts', `
        function h2cpp25(p: Callback<string[]>): Callback<string[]> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::vector<std::string>)>",
        "h2dtscpp_convert_func_0029 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::vector<std::string>)>",
        "h2dtscpp_convert_func_0029 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp25.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp25') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0029 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0030', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn25', returns: 'Callback<string[]>',
          parameters: [{ type: 'Callback<string[]>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias25', alias: 'Callback<string[]>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias25');
      assert.strictEqual(converted.types[0].alias, 'Callback<string[]>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn25');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::vector<std::string>)>",
        "h2dtscpp_convert_func_0030 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::vector<std::string>)>",
        "h2dtscpp_convert_func_0030 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample25_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn25') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0030 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0031', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass26', alias: '',
          variableList: [{ type: 'Callback<boolean[]>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::vector<bool>)>",
        "h2dtscpp_convert_func_0031 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0031 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0032', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun26', returns: 'Callback<boolean[]>',
          parameters: [{ type: 'Callback<boolean[]>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun26');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::vector<bool>)>",
        "h2dtscpp_convert_func_0032 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::vector<bool>)>",
        "h2dtscpp_convert_func_0032 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample26_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun26') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0032 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0033', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass26', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Callback<boolean[]>',
            parameters: [{ type: 'Callback<boolean[]>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(std::vector<bool>)>",
        "h2dtscpp_convert_func_0033 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<void(std::vector<bool>)>",
        "h2dtscpp_convert_func_0033 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0033 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0034', () => {
    try {
      const parsed = doParseTs('h2cpp26.ts', `
        function h2cpp26(p: Callback<boolean[]>): Callback<boolean[]> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::vector<bool>)>",
        "h2dtscpp_convert_func_0034 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::vector<bool>)>",
        "h2dtscpp_convert_func_0034 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp26.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp26') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0034 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0035', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn26', returns: 'Callback<boolean[]>',
          parameters: [{ type: 'Callback<boolean[]>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias26', alias: 'Callback<boolean[]>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias26');
      assert.strictEqual(converted.types[0].alias, 'Callback<boolean[]>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn26');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::vector<bool>)>",
        "h2dtscpp_convert_func_0035 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::vector<bool>)>",
        "h2dtscpp_convert_func_0035 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample26_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn26') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0035 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0036', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass27', alias: '',
          variableList: [{ type: '(p0:number)=>number', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<double(double)>",
        "h2dtscpp_convert_func_0036 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0036 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0037', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun27', returns: '(p0:number)=>number',
          parameters: [{ type: '(p0:number)=>number', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun27');
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(double)>",
        "h2dtscpp_convert_func_0037 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(double)>",
        "h2dtscpp_convert_func_0037 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample27_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun27') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0037 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0038', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass27', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:number)=>number',
            parameters: [{ type: '(p0:number)=>number', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<double(double)>",
        "h2dtscpp_convert_func_0038 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<double(double)>",
        "h2dtscpp_convert_func_0038 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0038 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0039', () => {
    try {
      const parsed = doParseTs('h2cpp27.ts', `
        function h2cpp27(p: (p0:number)=>number): (p0:number)=>number { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(double)>",
        "h2dtscpp_convert_func_0039 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(double)>",
        "h2dtscpp_convert_func_0039 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp27.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp27') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0039 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0040', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn27', returns: '(p0:number)=>number',
          parameters: [{ type: '(p0:number)=>number', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias27', alias: '(p0:number)=>number', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias27');
      assert.strictEqual(converted.types[0].alias, '(p0:number)=>number');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn27');
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(double)>",
        "h2dtscpp_convert_func_0040 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(double)>",
        "h2dtscpp_convert_func_0040 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample27_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn27') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0040 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0041', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass28', alias: '',
          variableList: [{ type: '(p0:string)=>number', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<double(std::string)>",
        "h2dtscpp_convert_func_0041 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0041 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0042', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun28', returns: '(p0:string)=>number',
          parameters: [{ type: '(p0:string)=>number', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun28');
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(std::string)>",
        "h2dtscpp_convert_func_0042 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(std::string)>",
        "h2dtscpp_convert_func_0042 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample28_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun28') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0042 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0043', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass28', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:string)=>number',
            parameters: [{ type: '(p0:string)=>number', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<double(std::string)>",
        "h2dtscpp_convert_func_0043 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<double(std::string)>",
        "h2dtscpp_convert_func_0043 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0043 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0044', () => {
    try {
      const parsed = doParseTs('h2cpp28.ts', `
        function h2cpp28(p: (p0:string)=>number): (p0:string)=>number { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(std::string)>",
        "h2dtscpp_convert_func_0044 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(std::string)>",
        "h2dtscpp_convert_func_0044 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp28.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp28') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0044 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0045', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn28', returns: '(p0:string)=>number',
          parameters: [{ type: '(p0:string)=>number', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias28', alias: '(p0:string)=>number', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias28');
      assert.strictEqual(converted.types[0].alias, '(p0:string)=>number');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn28');
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(std::string)>",
        "h2dtscpp_convert_func_0045 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(std::string)>",
        "h2dtscpp_convert_func_0045 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample28_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn28') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0045 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0046', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass29', alias: '',
          variableList: [{ type: '(p0:boolean)=>number', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<double(bool)>",
        "h2dtscpp_convert_func_0046 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0046 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0047', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun29', returns: '(p0:boolean)=>number',
          parameters: [{ type: '(p0:boolean)=>number', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun29');
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(bool)>",
        "h2dtscpp_convert_func_0047 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(bool)>",
        "h2dtscpp_convert_func_0047 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample29_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun29') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0047 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0048', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass29', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:boolean)=>number',
            parameters: [{ type: '(p0:boolean)=>number', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<double(bool)>",
        "h2dtscpp_convert_func_0048 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<double(bool)>",
        "h2dtscpp_convert_func_0048 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0048 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0049', () => {
    try {
      const parsed = doParseTs('h2cpp29.ts', `
        function h2cpp29(p: (p0:boolean)=>number): (p0:boolean)=>number { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(bool)>",
        "h2dtscpp_convert_func_0049 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(bool)>",
        "h2dtscpp_convert_func_0049 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp29.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp29') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0049 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0050', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn29', returns: '(p0:boolean)=>number',
          parameters: [{ type: '(p0:boolean)=>number', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias29', alias: '(p0:boolean)=>number', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias29');
      assert.strictEqual(converted.types[0].alias, '(p0:boolean)=>number');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn29');
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(bool)>",
        "h2dtscpp_convert_func_0050 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(bool)>",
        "h2dtscpp_convert_func_0050 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample29_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn29') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0050 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0051', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass30', alias: '',
          variableList: [{ type: '(p0:number)=>string', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::string(double)>",
        "h2dtscpp_convert_func_0051 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0051 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0052', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun30', returns: '(p0:number)=>string',
          parameters: [{ type: '(p0:number)=>string', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun30');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(double)>",
        "h2dtscpp_convert_func_0052 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(double)>",
        "h2dtscpp_convert_func_0052 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample30_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun30') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0052 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0053', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass30', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:number)=>string',
            parameters: [{ type: '(p0:number)=>string', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::string(double)>",
        "h2dtscpp_convert_func_0053 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<std::string(double)>",
        "h2dtscpp_convert_func_0053 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0053 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0054', () => {
    try {
      const parsed = doParseTs('h2cpp30.ts', `
        function h2cpp30(p: (p0:number)=>string): (p0:number)=>string { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(double)>",
        "h2dtscpp_convert_func_0054 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(double)>",
        "h2dtscpp_convert_func_0054 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp30.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp30') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0054 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0055', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn30', returns: '(p0:number)=>string',
          parameters: [{ type: '(p0:number)=>string', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias30', alias: '(p0:number)=>string', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias30');
      assert.strictEqual(converted.types[0].alias, '(p0:number)=>string');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn30');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(double)>",
        "h2dtscpp_convert_func_0055 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(double)>",
        "h2dtscpp_convert_func_0055 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample30_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn30') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0055 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0056', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass31', alias: '',
          variableList: [{ type: '(p0:string)=>string', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::string(std::string)>",
        "h2dtscpp_convert_func_0056 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0056 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0057', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun31', returns: '(p0:string)=>string',
          parameters: [{ type: '(p0:string)=>string', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun31');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(std::string)>",
        "h2dtscpp_convert_func_0057 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(std::string)>",
        "h2dtscpp_convert_func_0057 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample31_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun31') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0057 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0058', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass31', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:string)=>string',
            parameters: [{ type: '(p0:string)=>string', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::string(std::string)>",
        "h2dtscpp_convert_func_0058 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<std::string(std::string)>",
        "h2dtscpp_convert_func_0058 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0058 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0059', () => {
    try {
      const parsed = doParseTs('h2cpp31.ts', `
        function h2cpp31(p: (p0:string)=>string): (p0:string)=>string { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(std::string)>",
        "h2dtscpp_convert_func_0059 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(std::string)>",
        "h2dtscpp_convert_func_0059 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp31.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp31') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0059 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0060', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn31', returns: '(p0:string)=>string',
          parameters: [{ type: '(p0:string)=>string', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias31', alias: '(p0:string)=>string', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias31');
      assert.strictEqual(converted.types[0].alias, '(p0:string)=>string');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn31');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(std::string)>",
        "h2dtscpp_convert_func_0060 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(std::string)>",
        "h2dtscpp_convert_func_0060 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample31_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn31') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0060 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0061', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass32', alias: '',
          variableList: [{ type: '(p0:boolean)=>string', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::string(bool)>",
        "h2dtscpp_convert_func_0061 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0061 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0062', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun32', returns: '(p0:boolean)=>string',
          parameters: [{ type: '(p0:boolean)=>string', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun32');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(bool)>",
        "h2dtscpp_convert_func_0062 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(bool)>",
        "h2dtscpp_convert_func_0062 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample32_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun32') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0062 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0063', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass32', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:boolean)=>string',
            parameters: [{ type: '(p0:boolean)=>string', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<std::string(bool)>",
        "h2dtscpp_convert_func_0063 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<std::string(bool)>",
        "h2dtscpp_convert_func_0063 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0063 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0064', () => {
    try {
      const parsed = doParseTs('h2cpp32.ts', `
        function h2cpp32(p: (p0:boolean)=>string): (p0:boolean)=>string { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(bool)>",
        "h2dtscpp_convert_func_0064 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(bool)>",
        "h2dtscpp_convert_func_0064 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp32.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp32') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0064 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0065', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn32', returns: '(p0:boolean)=>string',
          parameters: [{ type: '(p0:boolean)=>string', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias32', alias: '(p0:boolean)=>string', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias32');
      assert.strictEqual(converted.types[0].alias, '(p0:boolean)=>string');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn32');
      assert.strictEqual(converted.funcs[0].returns, "std::function<std::string(bool)>",
        "h2dtscpp_convert_func_0065 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(bool)>",
        "h2dtscpp_convert_func_0065 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample32_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn32') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0065 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0066', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass33', alias: '',
          variableList: [{ type: '(p0:number)=>boolean', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(double)>",
        "h2dtscpp_convert_func_0066 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0066 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0067', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun33', returns: '(p0:number)=>boolean',
          parameters: [{ type: '(p0:number)=>boolean', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun33');
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(double)>",
        "h2dtscpp_convert_func_0067 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(double)>",
        "h2dtscpp_convert_func_0067 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample33_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun33') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0067 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0068', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass33', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:number)=>boolean',
            parameters: [{ type: '(p0:number)=>boolean', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<bool(double)>",
        "h2dtscpp_convert_func_0068 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<bool(double)>",
        "h2dtscpp_convert_func_0068 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0068 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0069', () => {
    try {
      const parsed = doParseTs('h2cpp33.ts', `
        function h2cpp33(p: (p0:number)=>boolean): (p0:number)=>boolean { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(double)>",
        "h2dtscpp_convert_func_0069 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(double)>",
        "h2dtscpp_convert_func_0069 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp33.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp33') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0069 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0070', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn33', returns: '(p0:number)=>boolean',
          parameters: [{ type: '(p0:number)=>boolean', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias33', alias: '(p0:number)=>boolean', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias33');
      assert.strictEqual(converted.types[0].alias, '(p0:number)=>boolean');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn33');
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(double)>",
        "h2dtscpp_convert_func_0070 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(double)>",
        "h2dtscpp_convert_func_0070 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample33_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn33') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0070 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0071', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass34', alias: '',
          variableList: [{ type: '(p0:string)=>boolean', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(std::string)>",
        "h2dtscpp_convert_func_0071 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0071 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0072', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun34', returns: '(p0:string)=>boolean',
          parameters: [{ type: '(p0:string)=>boolean', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun34');
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(std::string)>",
        "h2dtscpp_convert_func_0072 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(std::string)>",
        "h2dtscpp_convert_func_0072 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample34_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun34') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0072 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0073', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass34', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:string)=>boolean',
            parameters: [{ type: '(p0:string)=>boolean', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<bool(std::string)>",
        "h2dtscpp_convert_func_0073 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<bool(std::string)>",
        "h2dtscpp_convert_func_0073 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0073 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0074', () => {
    try {
      const parsed = doParseTs('h2cpp34.ts', `
        function h2cpp34(p: (p0:string)=>boolean): (p0:string)=>boolean { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<bool(std::string)>",
        "h2dtscpp_convert_func_0074 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(std::string)>",
        "h2dtscpp_convert_func_0074 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp34.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp34') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0074 execution error: ${String(err)}`);
    }
  });
});
