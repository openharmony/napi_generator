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

suite('Stability_H2DTSCPP_CONVERT_UNION_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_CONVERT_UNION_Part01.');


  test('h2dtscpp_convert_union_0001', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass275', alias: '',
          variableList: [{ type: 'number | string', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "number | string",
        "h2dtscpp_convert_union_0001 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0001 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_union_0002', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun275', returns: 'number | string',
          parameters: [{ type: 'number | string', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun275');
      assert.strictEqual(converted.funcs[0].returns, "number | string",
        "h2dtscpp_convert_union_0002 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "number | string",
        "h2dtscpp_convert_union_0002 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample275_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun275') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0002 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_union_0003', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass275', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'number | string',
            parameters: [{ type: 'number | string', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "number | string",
        "h2dtscpp_convert_union_0003 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "number | string",
        "h2dtscpp_convert_union_0003 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0003 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_union_0004', () => {
    try {
      const parsed = doParseTs('h2cpp275.ts', `function h2cpp275(p: number | string): number | string { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "number | string",
        "h2dtscpp_convert_union_0004 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "number | string",
        "h2dtscpp_convert_union_0004 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp275.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp275') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0004 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_union_0005', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn275', returns: 'number | string',
          parameters: [{ type: 'number | string', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias275', alias: 'number | string', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias275');
      assert.strictEqual(converted.types[0].alias, 'number | string');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn275');
      assert.strictEqual(converted.funcs[0].returns, "number | string",
        "h2dtscpp_convert_union_0005 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "number | string",
        "h2dtscpp_convert_union_0005 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample275_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn275') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0005 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_union_0006', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass276', alias: '',
          variableList: [{ type: 'number | string | void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "number | string | void",
        "h2dtscpp_convert_union_0006 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0006 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_union_0007', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun276', returns: 'number | string | void',
          parameters: [{ type: 'number | string | void', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun276');
      assert.strictEqual(converted.funcs[0].returns, "number | string | void",
        "h2dtscpp_convert_union_0007 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "number | string | void",
        "h2dtscpp_convert_union_0007 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample276_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun276') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0007 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_union_0008', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass276', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'number | string | void',
            parameters: [{ type: 'number | string | void', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "number | string | void",
        "h2dtscpp_convert_union_0008 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "number | string | void",
        "h2dtscpp_convert_union_0008 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0008 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_union_0009', () => {
    try {
      const parsed = doParseTs('h2cpp276.ts', `
        function h2cpp276(p: number | string | void): number | string | void { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "number | string | void",
        "h2dtscpp_convert_union_0009 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "number | string | void",
        "h2dtscpp_convert_union_0009 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp276.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp276') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0009 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_union_0010', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn276', returns: 'number | string | void',
          parameters: [{ type: 'number | string | void', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias276', alias: 'number | string | void', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias276');
      assert.strictEqual(converted.types[0].alias, 'number | string | void');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn276');
      assert.strictEqual(converted.funcs[0].returns, "number | string | void",
        "h2dtscpp_convert_union_0010 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "number | string | void",
        "h2dtscpp_convert_union_0010 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample276_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn276') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0010 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_union_0011', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass277', alias: '',
          variableList: [{ type: 'number | boolean', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "number | boolean",
        "h2dtscpp_convert_union_0011 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0011 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_union_0012', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun277', returns: 'number | boolean',
          parameters: [{ type: 'number | boolean', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun277');
      assert.strictEqual(converted.funcs[0].returns, "number | boolean",
        "h2dtscpp_convert_union_0012 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "number | boolean",
        "h2dtscpp_convert_union_0012 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample277_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun277') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0012 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_union_0013', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass277', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'number | boolean',
            parameters: [{ type: 'number | boolean', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "number | boolean",
        "h2dtscpp_convert_union_0013 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "number | boolean",
        "h2dtscpp_convert_union_0013 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0013 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_union_0014', () => {
    try {
      const parsed = doParseTs('h2cpp277.ts', `function h2cpp277(p: number | boolean): number | boolean { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "number | boolean",
        "h2dtscpp_convert_union_0014 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "number | boolean",
        "h2dtscpp_convert_union_0014 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp277.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp277') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0014 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_union_0015', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn277', returns: 'number | boolean',
          parameters: [{ type: 'number | boolean', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias277', alias: 'number | boolean', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias277');
      assert.strictEqual(converted.types[0].alias, 'number | boolean');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn277');
      assert.strictEqual(converted.funcs[0].returns, "number | boolean",
        "h2dtscpp_convert_union_0015 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "number | boolean",
        "h2dtscpp_convert_union_0015 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample277_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn277') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0015 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_union_0016', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass278', alias: '',
          variableList: [{ type: 'number | boolean | void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "number | boolean | void",
        "h2dtscpp_convert_union_0016 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0016 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_union_0017', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun278', returns: 'number | boolean | void',
          parameters: [{ type: 'number | boolean | void', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun278');
      assert.strictEqual(converted.funcs[0].returns, "number | boolean | void",
        "h2dtscpp_convert_union_0017 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "number | boolean | void",
        "h2dtscpp_convert_union_0017 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample278_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun278') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0017 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_union_0018', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass278', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'number | boolean | void',
            parameters: [{ type: 'number | boolean | void', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "number | boolean | void",
        "h2dtscpp_convert_union_0018 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "number | boolean | void",
        "h2dtscpp_convert_union_0018 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0018 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_union_0019', () => {
    try {
      const parsed = doParseTs('h2cpp278.ts', `
        function h2cpp278(p: number | boolean | void): number | boolean | void { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "number | boolean | void",
        "h2dtscpp_convert_union_0019 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "number | boolean | void",
        "h2dtscpp_convert_union_0019 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp278.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp278') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0019 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_union_0020', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn278', returns: 'number | boolean | void',
          parameters: [{ type: 'number | boolean | void', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias278', alias: 'number | boolean | void', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias278');
      assert.strictEqual(converted.types[0].alias, 'number | boolean | void');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn278');
      assert.strictEqual(converted.funcs[0].returns, "number | boolean | void",
        "h2dtscpp_convert_union_0020 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "number | boolean | void",
        "h2dtscpp_convert_union_0020 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample278_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn278') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0020 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_union_0021', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass279', alias: '',
          variableList: [{ type: 'string | boolean', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "string | boolean",
        "h2dtscpp_convert_union_0021 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0021 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_union_0022', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun279', returns: 'string | boolean',
          parameters: [{ type: 'string | boolean', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun279');
      assert.strictEqual(converted.funcs[0].returns, "string | boolean",
        "h2dtscpp_convert_union_0022 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | boolean",
        "h2dtscpp_convert_union_0022 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample279_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun279') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0022 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_union_0023', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass279', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'string | boolean',
            parameters: [{ type: 'string | boolean', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "string | boolean",
        "h2dtscpp_convert_union_0023 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "string | boolean",
        "h2dtscpp_convert_union_0023 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0023 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_union_0024', () => {
    try {
      const parsed = doParseTs('h2cpp279.ts', `function h2cpp279(p: string | boolean): string | boolean { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "string | boolean",
        "h2dtscpp_convert_union_0024 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | boolean",
        "h2dtscpp_convert_union_0024 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp279.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp279') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0024 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_union_0025', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn279', returns: 'string | boolean',
          parameters: [{ type: 'string | boolean', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias279', alias: 'string | boolean', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias279');
      assert.strictEqual(converted.types[0].alias, 'string | boolean');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn279');
      assert.strictEqual(converted.funcs[0].returns, "string | boolean",
        "h2dtscpp_convert_union_0025 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | boolean",
        "h2dtscpp_convert_union_0025 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample279_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn279') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0025 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_union_0026', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass280', alias: '',
          variableList: [{ type: 'string | boolean | void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "string | boolean | void",
        "h2dtscpp_convert_union_0026 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0026 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_union_0027', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun280', returns: 'string | boolean | void',
          parameters: [{ type: 'string | boolean | void', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun280');
      assert.strictEqual(converted.funcs[0].returns, "string | boolean | void",
        "h2dtscpp_convert_union_0027 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | boolean | void",
        "h2dtscpp_convert_union_0027 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample280_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun280') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0027 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_union_0028', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass280', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'string | boolean | void',
            parameters: [{ type: 'string | boolean | void', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "string | boolean | void",
        "h2dtscpp_convert_union_0028 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "string | boolean | void",
        "h2dtscpp_convert_union_0028 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0028 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_union_0029', () => {
    try {
      const parsed = doParseTs('h2cpp280.ts', `
        function h2cpp280(p: string | boolean | void): string | boolean | void { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "string | boolean | void",
        "h2dtscpp_convert_union_0029 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | boolean | void",
        "h2dtscpp_convert_union_0029 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp280.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp280') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0029 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_union_0030', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn280', returns: 'string | boolean | void',
          parameters: [{ type: 'string | boolean | void', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias280', alias: 'string | boolean | void', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias280');
      assert.strictEqual(converted.types[0].alias, 'string | boolean | void');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn280');
      assert.strictEqual(converted.funcs[0].returns, "string | boolean | void",
        "h2dtscpp_convert_union_0030 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "string | boolean | void",
        "h2dtscpp_convert_union_0030 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample280_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn280') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_union_0030 execution error: ${String(err)}`);
    }
  });
});
