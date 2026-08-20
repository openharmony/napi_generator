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

suite('Stability_H2DTSCPP_CONVERT_TUPLE_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_CONVERT_TUPLE_Part01.');


  test('h2dtscpp_convert_tuple_0001', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass158', alias: '',
          variableList: [{ type: '[number, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number]",
        "h2dtscpp_convert_tuple_0001 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0001 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0002', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun158', returns: '[number, number]',
          parameters: [{ type: '[number, number]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun158');
      assert.strictEqual(converted.funcs[0].returns, "[number, number]",
        "h2dtscpp_convert_tuple_0002 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number]",
        "h2dtscpp_convert_tuple_0002 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample158_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun158') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0002 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0003', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass158', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, number]',
            parameters: [{ type: '[number, number]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, number]",
        "h2dtscpp_convert_tuple_0003 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, number]",
        "h2dtscpp_convert_tuple_0003 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0003 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0004', () => {
    try {
      const parsed = doParseTs('h2cpp158.ts', `function h2cpp158(p: [number, number]): [number, number] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, number]",
        "h2dtscpp_convert_tuple_0004 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number]",
        "h2dtscpp_convert_tuple_0004 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp158.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp158') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0004 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0005', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn158', returns: '[number, number]',
          parameters: [{ type: '[number, number]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias158', alias: '[number, number]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias158');
      assert.strictEqual(converted.types[0].alias, '[number, number]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn158');
      assert.strictEqual(converted.funcs[0].returns, "[number, number]",
        "h2dtscpp_convert_tuple_0005 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number]",
        "h2dtscpp_convert_tuple_0005 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample158_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn158') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0005 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0006', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass159', alias: '',
          variableList: [{ type: '[number, string]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string]",
        "h2dtscpp_convert_tuple_0006 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0006 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0007', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun159', returns: '[number, string]',
          parameters: [{ type: '[number, string]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun159');
      assert.strictEqual(converted.funcs[0].returns, "[number, string]",
        "h2dtscpp_convert_tuple_0007 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string]",
        "h2dtscpp_convert_tuple_0007 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample159_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun159') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0007 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0008', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass159', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, string]',
            parameters: [{ type: '[number, string]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, string]",
        "h2dtscpp_convert_tuple_0008 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, string]",
        "h2dtscpp_convert_tuple_0008 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0008 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0009', () => {
    try {
      const parsed = doParseTs('h2cpp159.ts', `function h2cpp159(p: [number, string]): [number, string] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string]",
        "h2dtscpp_convert_tuple_0009 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string]",
        "h2dtscpp_convert_tuple_0009 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp159.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp159') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0009 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0010', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn159', returns: '[number, string]',
          parameters: [{ type: '[number, string]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias159', alias: '[number, string]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias159');
      assert.strictEqual(converted.types[0].alias, '[number, string]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn159');
      assert.strictEqual(converted.funcs[0].returns, "[number, string]",
        "h2dtscpp_convert_tuple_0010 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string]",
        "h2dtscpp_convert_tuple_0010 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample159_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn159') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0010 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0011', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass160', alias: '',
          variableList: [{ type: '[number, boolean]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, boolean]",
        "h2dtscpp_convert_tuple_0011 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0011 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0012', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun160', returns: '[number, boolean]',
          parameters: [{ type: '[number, boolean]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun160');
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean]",
        "h2dtscpp_convert_tuple_0012 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean]",
        "h2dtscpp_convert_tuple_0012 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample160_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun160') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0012 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0013', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass160', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, boolean]',
            parameters: [{ type: '[number, boolean]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, boolean]",
        "h2dtscpp_convert_tuple_0013 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, boolean]",
        "h2dtscpp_convert_tuple_0013 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0013 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0014', () => {
    try {
      const parsed = doParseTs('h2cpp160.ts', `
        function h2cpp160(p: [number, boolean]): [number, boolean] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean]",
        "h2dtscpp_convert_tuple_0014 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean]",
        "h2dtscpp_convert_tuple_0014 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp160.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp160') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0014 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0015', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn160', returns: '[number, boolean]',
          parameters: [{ type: '[number, boolean]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias160', alias: '[number, boolean]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias160');
      assert.strictEqual(converted.types[0].alias, '[number, boolean]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn160');
      assert.strictEqual(converted.funcs[0].returns, "[number, boolean]",
        "h2dtscpp_convert_tuple_0015 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, boolean]",
        "h2dtscpp_convert_tuple_0015 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample160_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn160') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0015 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0016', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass161', alias: '',
          variableList: [{ type: '[string, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, number]",
        "h2dtscpp_convert_tuple_0016 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0016 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0017', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun161', returns: '[string, number]',
          parameters: [{ type: '[string, number]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun161');
      assert.strictEqual(converted.funcs[0].returns, "[string, number]",
        "h2dtscpp_convert_tuple_0017 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number]",
        "h2dtscpp_convert_tuple_0017 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample161_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun161') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0017 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0018', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass161', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[string, number]',
            parameters: [{ type: '[string, number]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[string, number]",
        "h2dtscpp_convert_tuple_0018 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[string, number]",
        "h2dtscpp_convert_tuple_0018 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0018 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0019', () => {
    try {
      const parsed = doParseTs('h2cpp161.ts', `function h2cpp161(p: [string, number]): [string, number] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, number]",
        "h2dtscpp_convert_tuple_0019 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number]",
        "h2dtscpp_convert_tuple_0019 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp161.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp161') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0019 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0020', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn161', returns: '[string, number]',
          parameters: [{ type: '[string, number]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias161', alias: '[string, number]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias161');
      assert.strictEqual(converted.types[0].alias, '[string, number]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn161');
      assert.strictEqual(converted.funcs[0].returns, "[string, number]",
        "h2dtscpp_convert_tuple_0020 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, number]",
        "h2dtscpp_convert_tuple_0020 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample161_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn161') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0020 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0021', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass162', alias: '',
          variableList: [{ type: '[string, string]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, string]",
        "h2dtscpp_convert_tuple_0021 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0021 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0022', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun162', returns: '[string, string]',
          parameters: [{ type: '[string, string]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun162');
      assert.strictEqual(converted.funcs[0].returns, "[string, string]",
        "h2dtscpp_convert_tuple_0022 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string]",
        "h2dtscpp_convert_tuple_0022 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample162_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun162') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0022 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0023', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass162', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[string, string]',
            parameters: [{ type: '[string, string]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[string, string]",
        "h2dtscpp_convert_tuple_0023 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[string, string]",
        "h2dtscpp_convert_tuple_0023 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0023 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0024', () => {
    try {
      const parsed = doParseTs('h2cpp162.ts', `function h2cpp162(p: [string, string]): [string, string] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, string]",
        "h2dtscpp_convert_tuple_0024 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string]",
        "h2dtscpp_convert_tuple_0024 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp162.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp162') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0024 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0025', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn162', returns: '[string, string]',
          parameters: [{ type: '[string, string]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias162', alias: '[string, string]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias162');
      assert.strictEqual(converted.types[0].alias, '[string, string]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn162');
      assert.strictEqual(converted.funcs[0].returns, "[string, string]",
        "h2dtscpp_convert_tuple_0025 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, string]",
        "h2dtscpp_convert_tuple_0025 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample162_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn162') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0025 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0026', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass163', alias: '',
          variableList: [{ type: '[string, boolean]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[string, boolean]",
        "h2dtscpp_convert_tuple_0026 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0026 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0027', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun163', returns: '[string, boolean]',
          parameters: [{ type: '[string, boolean]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun163');
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean]",
        "h2dtscpp_convert_tuple_0027 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean]",
        "h2dtscpp_convert_tuple_0027 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample163_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun163') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0027 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0028', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass163', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[string, boolean]',
            parameters: [{ type: '[string, boolean]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[string, boolean]",
        "h2dtscpp_convert_tuple_0028 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[string, boolean]",
        "h2dtscpp_convert_tuple_0028 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0028 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0029', () => {
    try {
      const parsed = doParseTs('h2cpp163.ts', `
        function h2cpp163(p: [string, boolean]): [string, boolean] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean]",
        "h2dtscpp_convert_tuple_0029 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean]",
        "h2dtscpp_convert_tuple_0029 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp163.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp163') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0029 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0030', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn163', returns: '[string, boolean]',
          parameters: [{ type: '[string, boolean]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias163', alias: '[string, boolean]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias163');
      assert.strictEqual(converted.types[0].alias, '[string, boolean]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn163');
      assert.strictEqual(converted.funcs[0].returns, "[string, boolean]",
        "h2dtscpp_convert_tuple_0030 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[string, boolean]",
        "h2dtscpp_convert_tuple_0030 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample163_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn163') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0030 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0031', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass164', alias: '',
          variableList: [{ type: '[boolean, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, number]",
        "h2dtscpp_convert_tuple_0031 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0031 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0032', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun164', returns: '[boolean, number]',
          parameters: [{ type: '[boolean, number]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun164');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number]",
        "h2dtscpp_convert_tuple_0032 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number]",
        "h2dtscpp_convert_tuple_0032 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample164_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun164') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0032 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0033', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass164', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, number]',
            parameters: [{ type: '[boolean, number]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, number]",
        "h2dtscpp_convert_tuple_0033 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, number]",
        "h2dtscpp_convert_tuple_0033 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0033 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0034', () => {
    try {
      const parsed = doParseTs('h2cpp164.ts', `
        function h2cpp164(p: [boolean, number]): [boolean, number] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number]",
        "h2dtscpp_convert_tuple_0034 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number]",
        "h2dtscpp_convert_tuple_0034 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp164.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp164') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0034 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0035', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn164', returns: '[boolean, number]',
          parameters: [{ type: '[boolean, number]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias164', alias: '[boolean, number]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias164');
      assert.strictEqual(converted.types[0].alias, '[boolean, number]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn164');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, number]",
        "h2dtscpp_convert_tuple_0035 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, number]",
        "h2dtscpp_convert_tuple_0035 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample164_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn164') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0035 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0036', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass165', alias: '',
          variableList: [{ type: '[boolean, string]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, string]",
        "h2dtscpp_convert_tuple_0036 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0036 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0037', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun165', returns: '[boolean, string]',
          parameters: [{ type: '[boolean, string]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun165');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string]",
        "h2dtscpp_convert_tuple_0037 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string]",
        "h2dtscpp_convert_tuple_0037 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample165_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun165') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0037 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0038', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass165', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, string]',
            parameters: [{ type: '[boolean, string]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, string]",
        "h2dtscpp_convert_tuple_0038 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, string]",
        "h2dtscpp_convert_tuple_0038 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0038 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0039', () => {
    try {
      const parsed = doParseTs('h2cpp165.ts', `
        function h2cpp165(p: [boolean, string]): [boolean, string] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string]",
        "h2dtscpp_convert_tuple_0039 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string]",
        "h2dtscpp_convert_tuple_0039 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp165.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp165') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0039 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0040', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn165', returns: '[boolean, string]',
          parameters: [{ type: '[boolean, string]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias165', alias: '[boolean, string]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias165');
      assert.strictEqual(converted.types[0].alias, '[boolean, string]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn165');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, string]",
        "h2dtscpp_convert_tuple_0040 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, string]",
        "h2dtscpp_convert_tuple_0040 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample165_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn165') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0040 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0041', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass166', alias: '',
          variableList: [{ type: '[boolean, boolean]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean]",
        "h2dtscpp_convert_tuple_0041 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0041 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0042', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun166', returns: '[boolean, boolean]',
          parameters: [{ type: '[boolean, boolean]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun166');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean]",
        "h2dtscpp_convert_tuple_0042 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean]",
        "h2dtscpp_convert_tuple_0042 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample166_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun166') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0042 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0043', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass166', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[boolean, boolean]',
            parameters: [{ type: '[boolean, boolean]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[boolean, boolean]",
        "h2dtscpp_convert_tuple_0043 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[boolean, boolean]",
        "h2dtscpp_convert_tuple_0043 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0043 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0044', () => {
    try {
      const parsed = doParseTs('h2cpp166.ts', `
        function h2cpp166(p: [boolean, boolean]): [boolean, boolean] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean]",
        "h2dtscpp_convert_tuple_0044 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean]",
        "h2dtscpp_convert_tuple_0044 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp166.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp166') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0044 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0045', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn166', returns: '[boolean, boolean]',
          parameters: [{ type: '[boolean, boolean]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias166', alias: '[boolean, boolean]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias166');
      assert.strictEqual(converted.types[0].alias, '[boolean, boolean]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn166');
      assert.strictEqual(converted.funcs[0].returns, "[boolean, boolean]",
        "h2dtscpp_convert_tuple_0045 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean]",
        "h2dtscpp_convert_tuple_0045 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample166_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn166') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0045 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0046', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass167', alias: '',
          variableList: [{ type: '[number, number, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, number]",
        "h2dtscpp_convert_tuple_0046 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0046 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0047', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun167', returns: '[number, number, number]',
          parameters: [{ type: '[number, number, number]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun167');
      assert.strictEqual(converted.funcs[0].returns, "[number, number, number]",
        "h2dtscpp_convert_tuple_0047 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, number]",
        "h2dtscpp_convert_tuple_0047 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample167_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun167') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0047 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0048', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass167', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, number, number]',
            parameters: [{ type: '[number, number, number]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, number, number]",
        "h2dtscpp_convert_tuple_0048 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, number, number]",
        "h2dtscpp_convert_tuple_0048 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0048 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0049', () => {
    try {
      const parsed = doParseTs('h2cpp167.ts', `
        function h2cpp167(p: [number, number, number]): [number, number, number] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, number, number]",
        "h2dtscpp_convert_tuple_0049 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, number]",
        "h2dtscpp_convert_tuple_0049 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp167.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp167') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0049 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0050', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn167', returns: '[number, number, number]',
          parameters: [{ type: '[number, number, number]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias167', alias: '[number, number, number]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias167');
      assert.strictEqual(converted.types[0].alias, '[number, number, number]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn167');
      assert.strictEqual(converted.funcs[0].returns, "[number, number, number]",
        "h2dtscpp_convert_tuple_0050 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, number]",
        "h2dtscpp_convert_tuple_0050 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample167_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn167') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0050 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0051', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass168', alias: '',
          variableList: [{ type: '[number, number, string]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, string]",
        "h2dtscpp_convert_tuple_0051 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0051 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0052', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun168', returns: '[number, number, string]',
          parameters: [{ type: '[number, number, string]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun168');
      assert.strictEqual(converted.funcs[0].returns, "[number, number, string]",
        "h2dtscpp_convert_tuple_0052 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, string]",
        "h2dtscpp_convert_tuple_0052 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample168_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun168') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0052 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0053', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass168', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, number, string]',
            parameters: [{ type: '[number, number, string]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, number, string]",
        "h2dtscpp_convert_tuple_0053 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, number, string]",
        "h2dtscpp_convert_tuple_0053 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0053 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0054', () => {
    try {
      const parsed = doParseTs('h2cpp168.ts', `
        function h2cpp168(p: [number, number, string]): [number, number, string] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, number, string]",
        "h2dtscpp_convert_tuple_0054 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, string]",
        "h2dtscpp_convert_tuple_0054 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp168.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp168') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0054 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0055', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn168', returns: '[number, number, string]',
          parameters: [{ type: '[number, number, string]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias168', alias: '[number, number, string]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias168');
      assert.strictEqual(converted.types[0].alias, '[number, number, string]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn168');
      assert.strictEqual(converted.funcs[0].returns, "[number, number, string]",
        "h2dtscpp_convert_tuple_0055 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, string]",
        "h2dtscpp_convert_tuple_0055 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample168_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn168') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0055 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0056', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass169', alias: '',
          variableList: [{ type: '[number, number, boolean]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, boolean]",
        "h2dtscpp_convert_tuple_0056 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0056 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0057', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun169', returns: '[number, number, boolean]',
          parameters: [{ type: '[number, number, boolean]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun169');
      assert.strictEqual(converted.funcs[0].returns, "[number, number, boolean]",
        "h2dtscpp_convert_tuple_0057 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, boolean]",
        "h2dtscpp_convert_tuple_0057 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample169_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun169') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0057 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0058', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass169', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, number, boolean]',
            parameters: [{ type: '[number, number, boolean]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, number, boolean]",
        "h2dtscpp_convert_tuple_0058 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, number, boolean]",
        "h2dtscpp_convert_tuple_0058 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0058 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0059', () => {
    try {
      const parsed = doParseTs('h2cpp169.ts', `
        function h2cpp169(p: [number, number, boolean]): [number, number, boolean] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, number, boolean]",
        "h2dtscpp_convert_tuple_0059 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, boolean]",
        "h2dtscpp_convert_tuple_0059 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp169.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp169') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0059 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0060', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn169', returns: '[number, number, boolean]',
          parameters: [{ type: '[number, number, boolean]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias169', alias: '[number, number, boolean]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias169');
      assert.strictEqual(converted.types[0].alias, '[number, number, boolean]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn169');
      assert.strictEqual(converted.funcs[0].returns, "[number, number, boolean]",
        "h2dtscpp_convert_tuple_0060 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, boolean]",
        "h2dtscpp_convert_tuple_0060 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample169_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn169') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0060 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0061', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass170', alias: '',
          variableList: [{ type: '[number, string, number]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, number]",
        "h2dtscpp_convert_tuple_0061 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0061 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0062', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun170', returns: '[number, string, number]',
          parameters: [{ type: '[number, string, number]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun170');
      assert.strictEqual(converted.funcs[0].returns, "[number, string, number]",
        "h2dtscpp_convert_tuple_0062 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, number]",
        "h2dtscpp_convert_tuple_0062 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample170_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun170') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0062 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0063', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass170', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, string, number]',
            parameters: [{ type: '[number, string, number]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, string, number]",
        "h2dtscpp_convert_tuple_0063 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, string, number]",
        "h2dtscpp_convert_tuple_0063 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0063 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0064', () => {
    try {
      const parsed = doParseTs('h2cpp170.ts', `
        function h2cpp170(p: [number, string, number]): [number, string, number] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, number]",
        "h2dtscpp_convert_tuple_0064 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, number]",
        "h2dtscpp_convert_tuple_0064 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp170.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp170') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0064 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0065', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn170', returns: '[number, string, number]',
          parameters: [{ type: '[number, string, number]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias170', alias: '[number, string, number]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias170');
      assert.strictEqual(converted.types[0].alias, '[number, string, number]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn170');
      assert.strictEqual(converted.funcs[0].returns, "[number, string, number]",
        "h2dtscpp_convert_tuple_0065 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, number]",
        "h2dtscpp_convert_tuple_0065 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample170_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn170') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0065 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0066', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass171', alias: '',
          variableList: [{ type: '[number, string, string]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, string]",
        "h2dtscpp_convert_tuple_0066 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0066 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0067', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun171', returns: '[number, string, string]',
          parameters: [{ type: '[number, string, string]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun171');
      assert.strictEqual(converted.funcs[0].returns, "[number, string, string]",
        "h2dtscpp_convert_tuple_0067 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, string]",
        "h2dtscpp_convert_tuple_0067 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample171_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun171') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0067 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0068', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass171', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, string, string]',
            parameters: [{ type: '[number, string, string]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, string, string]",
        "h2dtscpp_convert_tuple_0068 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, string, string]",
        "h2dtscpp_convert_tuple_0068 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0068 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0069', () => {
    try {
      const parsed = doParseTs('h2cpp171.ts', `
        function h2cpp171(p: [number, string, string]): [number, string, string] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, string]",
        "h2dtscpp_convert_tuple_0069 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, string]",
        "h2dtscpp_convert_tuple_0069 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp171.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp171') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0069 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0070', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn171', returns: '[number, string, string]',
          parameters: [{ type: '[number, string, string]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias171', alias: '[number, string, string]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias171');
      assert.strictEqual(converted.types[0].alias, '[number, string, string]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn171');
      assert.strictEqual(converted.funcs[0].returns, "[number, string, string]",
        "h2dtscpp_convert_tuple_0070 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, string]",
        "h2dtscpp_convert_tuple_0070 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample171_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn171') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0070 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0071', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass172', alias: '',
          variableList: [{ type: '[number, string, boolean]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "[number, string, boolean]",
        "h2dtscpp_convert_tuple_0071 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0071 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0072', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun172', returns: '[number, string, boolean]',
          parameters: [{ type: '[number, string, boolean]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun172');
      assert.strictEqual(converted.funcs[0].returns, "[number, string, boolean]",
        "h2dtscpp_convert_tuple_0072 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, boolean]",
        "h2dtscpp_convert_tuple_0072 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample172_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun172') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0072 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0073', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass172', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '[number, string, boolean]',
            parameters: [{ type: '[number, string, boolean]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "[number, string, boolean]",
        "h2dtscpp_convert_tuple_0073 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "[number, string, boolean]",
        "h2dtscpp_convert_tuple_0073 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0073 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_tuple_0074', () => {
    try {
      const parsed = doParseTs('h2cpp172.ts', `
        function h2cpp172(p: [number, string, boolean]): [number, string, boolean] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "[number, string, boolean]",
        "h2dtscpp_convert_tuple_0074 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, string, boolean]",
        "h2dtscpp_convert_tuple_0074 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp172.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp172') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_tuple_0074 execution error: ${String(err)}`);
    }
  });
});
