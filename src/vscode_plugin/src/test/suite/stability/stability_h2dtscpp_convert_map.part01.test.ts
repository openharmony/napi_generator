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

suite('Stability_H2DTSCPP_CONVERT_MAP_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_CONVERT_MAP_Part01.');


  test('h2dtscpp_convert_map_0001', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass11', alias: '',
          variableList: [{ type: 'Map<string,number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<std::string, double>",
        "h2dtscpp_convert_map_0001 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0001 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0002', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun11', returns: 'Map<string,number>',
          parameters: [{ type: 'Map<string,number>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun11');
      assert.strictEqual(converted.funcs[0].returns, "std::map<std::string, double>",
        "h2dtscpp_convert_map_0002 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<std::string, double>",
        "h2dtscpp_convert_map_0002 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample11_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun11') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0002 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0003', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass11', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<string,number>',
            parameters: [{ type: 'Map<string,number>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::map<std::string, double>",
        "h2dtscpp_convert_map_0003 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::map<std::string, double>",
        "h2dtscpp_convert_map_0003 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0003 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0004', () => {
    try {
      const parsed = doParseTs('h2cpp11.ts', `
        function h2cpp11(p: Map<string,number>): Map<string,number> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::map<std::string, double>",
        "h2dtscpp_convert_map_0004 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<std::string, double>",
        "h2dtscpp_convert_map_0004 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp11.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp11') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0004 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0005', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn11', returns: 'Map<string,number>',
          parameters: [{ type: 'Map<string,number>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias11', alias: 'Map<string,number>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias11');
      assert.strictEqual(converted.types[0].alias, 'Map<string,number>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn11');
      assert.strictEqual(converted.funcs[0].returns, "std::map<std::string, double>",
        "h2dtscpp_convert_map_0005 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<std::string, double>",
        "h2dtscpp_convert_map_0005 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample11_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn11') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0005 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0006', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass12', alias: '',
          variableList: [{ type: 'Map<string,string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<std::string, std::string>",
        "h2dtscpp_convert_map_0006 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0006 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0007', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun12', returns: 'Map<string,string>',
          parameters: [{ type: 'Map<string,string>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun12');
      assert.strictEqual(converted.funcs[0].returns, "std::map<std::string, std::string>",
        "h2dtscpp_convert_map_0007 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<std::string, std::string>",
        "h2dtscpp_convert_map_0007 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample12_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun12') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0007 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0008', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass12', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<string,string>',
            parameters: [{ type: 'Map<string,string>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::map<std::string, std::string>",
        "h2dtscpp_convert_map_0008 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::map<std::string, std::string>",
        "h2dtscpp_convert_map_0008 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0008 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0009', () => {
    try {
      const parsed = doParseTs('h2cpp12.ts', `
        function h2cpp12(p: Map<string,string>): Map<string,string> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::map<std::string, std::string>",
        "h2dtscpp_convert_map_0009 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<std::string, std::string>",
        "h2dtscpp_convert_map_0009 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp12.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp12') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0009 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0010', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn12', returns: 'Map<string,string>',
          parameters: [{ type: 'Map<string,string>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias12', alias: 'Map<string,string>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias12');
      assert.strictEqual(converted.types[0].alias, 'Map<string,string>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn12');
      assert.strictEqual(converted.funcs[0].returns, "std::map<std::string, std::string>",
        "h2dtscpp_convert_map_0010 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<std::string, std::string>",
        "h2dtscpp_convert_map_0010 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample12_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn12') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0010 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0011', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass13', alias: '',
          variableList: [{ type: 'Map<string,boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<std::string, bool>",
        "h2dtscpp_convert_map_0011 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0011 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0012', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun13', returns: 'Map<string,boolean>',
          parameters: [{ type: 'Map<string,boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun13');
      assert.strictEqual(converted.funcs[0].returns, "std::map<std::string, bool>",
        "h2dtscpp_convert_map_0012 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<std::string, bool>",
        "h2dtscpp_convert_map_0012 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample13_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun13') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0012 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0013', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass13', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<string,boolean>',
            parameters: [{ type: 'Map<string,boolean>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::map<std::string, bool>",
        "h2dtscpp_convert_map_0013 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::map<std::string, bool>",
        "h2dtscpp_convert_map_0013 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0013 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0014', () => {
    try {
      const parsed = doParseTs('h2cpp13.ts', `
        function h2cpp13(p: Map<string,boolean>): Map<string,boolean> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::map<std::string, bool>",
        "h2dtscpp_convert_map_0014 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<std::string, bool>",
        "h2dtscpp_convert_map_0014 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp13.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp13') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0014 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0015', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn13', returns: 'Map<string,boolean>',
          parameters: [{ type: 'Map<string,boolean>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias13', alias: 'Map<string,boolean>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias13');
      assert.strictEqual(converted.types[0].alias, 'Map<string,boolean>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn13');
      assert.strictEqual(converted.funcs[0].returns, "std::map<std::string, bool>",
        "h2dtscpp_convert_map_0015 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<std::string, bool>",
        "h2dtscpp_convert_map_0015 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample13_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn13') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0015 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0016', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass14', alias: '',
          variableList: [{ type: 'Map<number,number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<double, double>",
        "h2dtscpp_convert_map_0016 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0016 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0017', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun14', returns: 'Map<number,number>',
          parameters: [{ type: 'Map<number,number>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun14');
      assert.strictEqual(converted.funcs[0].returns, "std::map<double, double>",
        "h2dtscpp_convert_map_0017 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<double, double>",
        "h2dtscpp_convert_map_0017 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample14_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun14') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0017 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0018', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass14', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<number,number>',
            parameters: [{ type: 'Map<number,number>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::map<double, double>",
        "h2dtscpp_convert_map_0018 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::map<double, double>",
        "h2dtscpp_convert_map_0018 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0018 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0019', () => {
    try {
      const parsed = doParseTs('h2cpp14.ts', `
        function h2cpp14(p: Map<number,number>): Map<number,number> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::map<double, double>",
        "h2dtscpp_convert_map_0019 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<double, double>",
        "h2dtscpp_convert_map_0019 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp14.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp14') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0019 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0020', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn14', returns: 'Map<number,number>',
          parameters: [{ type: 'Map<number,number>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias14', alias: 'Map<number,number>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias14');
      assert.strictEqual(converted.types[0].alias, 'Map<number,number>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn14');
      assert.strictEqual(converted.funcs[0].returns, "std::map<double, double>",
        "h2dtscpp_convert_map_0020 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<double, double>",
        "h2dtscpp_convert_map_0020 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample14_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn14') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0020 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0021', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass15', alias: '',
          variableList: [{ type: 'Map<number,string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<double, std::string>",
        "h2dtscpp_convert_map_0021 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0021 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0022', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun15', returns: 'Map<number,string>',
          parameters: [{ type: 'Map<number,string>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun15');
      assert.strictEqual(converted.funcs[0].returns, "std::map<double, std::string>",
        "h2dtscpp_convert_map_0022 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<double, std::string>",
        "h2dtscpp_convert_map_0022 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample15_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun15') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0022 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0023', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass15', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<number,string>',
            parameters: [{ type: 'Map<number,string>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::map<double, std::string>",
        "h2dtscpp_convert_map_0023 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::map<double, std::string>",
        "h2dtscpp_convert_map_0023 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0023 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0024', () => {
    try {
      const parsed = doParseTs('h2cpp15.ts', `
        function h2cpp15(p: Map<number,string>): Map<number,string> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::map<double, std::string>",
        "h2dtscpp_convert_map_0024 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<double, std::string>",
        "h2dtscpp_convert_map_0024 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp15.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp15') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0024 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0025', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn15', returns: 'Map<number,string>',
          parameters: [{ type: 'Map<number,string>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias15', alias: 'Map<number,string>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias15');
      assert.strictEqual(converted.types[0].alias, 'Map<number,string>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn15');
      assert.strictEqual(converted.funcs[0].returns, "std::map<double, std::string>",
        "h2dtscpp_convert_map_0025 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<double, std::string>",
        "h2dtscpp_convert_map_0025 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample15_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn15') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0025 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0026', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass16', alias: '',
          variableList: [{ type: 'Map<number,boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<double, bool>",
        "h2dtscpp_convert_map_0026 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0026 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0027', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun16', returns: 'Map<number,boolean>',
          parameters: [{ type: 'Map<number,boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun16');
      assert.strictEqual(converted.funcs[0].returns, "std::map<double, bool>",
        "h2dtscpp_convert_map_0027 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<double, bool>",
        "h2dtscpp_convert_map_0027 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample16_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun16') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0027 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0028', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass16', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<number,boolean>',
            parameters: [{ type: 'Map<number,boolean>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::map<double, bool>",
        "h2dtscpp_convert_map_0028 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::map<double, bool>",
        "h2dtscpp_convert_map_0028 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0028 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0029', () => {
    try {
      const parsed = doParseTs('h2cpp16.ts', `
        function h2cpp16(p: Map<number,boolean>): Map<number,boolean> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::map<double, bool>",
        "h2dtscpp_convert_map_0029 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<double, bool>",
        "h2dtscpp_convert_map_0029 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp16.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp16') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0029 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0030', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn16', returns: 'Map<number,boolean>',
          parameters: [{ type: 'Map<number,boolean>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias16', alias: 'Map<number,boolean>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias16');
      assert.strictEqual(converted.types[0].alias, 'Map<number,boolean>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn16');
      assert.strictEqual(converted.funcs[0].returns, "std::map<double, bool>",
        "h2dtscpp_convert_map_0030 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<double, bool>",
        "h2dtscpp_convert_map_0030 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample16_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn16') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0030 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0031', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass63', alias: '',
          variableList: [{ type: 'Map<string,any>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "Map<string,any>",
        "h2dtscpp_convert_map_0031 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0031 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0032', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun63', returns: 'Map<string,any>',
          parameters: [{ type: 'Map<string,any>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun63');
      assert.strictEqual(converted.funcs[0].returns, "Map<string,any>",
        "h2dtscpp_convert_map_0032 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Map<string,any>",
        "h2dtscpp_convert_map_0032 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample63_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun63') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0032 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0033', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass63', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<string,any>',
            parameters: [{ type: 'Map<string,any>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "Map<string,any>",
        "h2dtscpp_convert_map_0033 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "Map<string,any>",
        "h2dtscpp_convert_map_0033 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0033 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0034', () => {
    try {
      const parsed = doParseTs('h2cpp63.ts', `function h2cpp63(p: Map<string,any>): Map<string,any> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Map<string,any>",
        "h2dtscpp_convert_map_0034 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Map<string,any>",
        "h2dtscpp_convert_map_0034 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp63.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp63') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0034 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0035', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn63', returns: 'Map<string,any>',
          parameters: [{ type: 'Map<string,any>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias63', alias: 'Map<string,any>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias63');
      assert.strictEqual(converted.types[0].alias, 'Map<string,any>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn63');
      assert.strictEqual(converted.funcs[0].returns, "Map<string,any>",
        "h2dtscpp_convert_map_0035 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Map<string,any>",
        "h2dtscpp_convert_map_0035 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample63_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn63') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0035 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0036', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass64', alias: '',
          variableList: [{ type: 'Map<string,object>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "Map<string,object>",
        "h2dtscpp_convert_map_0036 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0036 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0037', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun64', returns: 'Map<string,object>',
          parameters: [{ type: 'Map<string,object>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun64');
      assert.strictEqual(converted.funcs[0].returns, "Map<string,object>",
        "h2dtscpp_convert_map_0037 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Map<string,object>",
        "h2dtscpp_convert_map_0037 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample64_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun64') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0037 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0038', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass64', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<string,object>',
            parameters: [{ type: 'Map<string,object>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "Map<string,object>",
        "h2dtscpp_convert_map_0038 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "Map<string,object>",
        "h2dtscpp_convert_map_0038 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0038 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0039', () => {
    try {
      const parsed = doParseTs('h2cpp64.ts', `
        function h2cpp64(p: Map<string,object>): Map<string,object> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Map<string,object>",
        "h2dtscpp_convert_map_0039 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Map<string,object>",
        "h2dtscpp_convert_map_0039 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp64.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp64') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0039 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0040', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn64', returns: 'Map<string,object>',
          parameters: [{ type: 'Map<string,object>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias64', alias: 'Map<string,object>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias64');
      assert.strictEqual(converted.types[0].alias, 'Map<string,object>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn64');
      assert.strictEqual(converted.funcs[0].returns, "Map<string,object>",
        "h2dtscpp_convert_map_0040 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Map<string,object>",
        "h2dtscpp_convert_map_0040 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample64_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn64') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0040 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0041', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass65', alias: '',
          variableList: [{ type: 'Map<object,string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "Map<object,string>",
        "h2dtscpp_convert_map_0041 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0041 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0042', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun65', returns: 'Map<object,string>',
          parameters: [{ type: 'Map<object,string>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun65');
      assert.strictEqual(converted.funcs[0].returns, "Map<object,string>",
        "h2dtscpp_convert_map_0042 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Map<object,string>",
        "h2dtscpp_convert_map_0042 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample65_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun65') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0042 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0043', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass65', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<object,string>',
            parameters: [{ type: 'Map<object,string>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "Map<object,string>",
        "h2dtscpp_convert_map_0043 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "Map<object,string>",
        "h2dtscpp_convert_map_0043 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0043 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0044', () => {
    try {
      const parsed = doParseTs('h2cpp65.ts', `
        function h2cpp65(p: Map<object,string>): Map<object,string> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Map<object,string>",
        "h2dtscpp_convert_map_0044 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Map<object,string>",
        "h2dtscpp_convert_map_0044 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp65.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp65') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0044 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0045', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn65', returns: 'Map<object,string>',
          parameters: [{ type: 'Map<object,string>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias65', alias: 'Map<object,string>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias65');
      assert.strictEqual(converted.types[0].alias, 'Map<object,string>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn65');
      assert.strictEqual(converted.funcs[0].returns, "Map<object,string>",
        "h2dtscpp_convert_map_0045 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Map<object,string>",
        "h2dtscpp_convert_map_0045 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample65_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn65') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0045 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0046', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass66', alias: '',
          variableList: [{ type: 'Map<any,number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "Map<any,number>",
        "h2dtscpp_convert_map_0046 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0046 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0047', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun66', returns: 'Map<any,number>',
          parameters: [{ type: 'Map<any,number>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun66');
      assert.strictEqual(converted.funcs[0].returns, "Map<any,number>",
        "h2dtscpp_convert_map_0047 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Map<any,number>",
        "h2dtscpp_convert_map_0047 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample66_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun66') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0047 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0048', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass66', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<any,number>',
            parameters: [{ type: 'Map<any,number>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "Map<any,number>",
        "h2dtscpp_convert_map_0048 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "Map<any,number>",
        "h2dtscpp_convert_map_0048 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0048 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0049', () => {
    try {
      const parsed = doParseTs('h2cpp66.ts', `function h2cpp66(p: Map<any,number>): Map<any,number> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Map<any,number>",
        "h2dtscpp_convert_map_0049 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Map<any,number>",
        "h2dtscpp_convert_map_0049 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp66.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp66') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0049 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0050', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn66', returns: 'Map<any,number>',
          parameters: [{ type: 'Map<any,number>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias66', alias: 'Map<any,number>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias66');
      assert.strictEqual(converted.types[0].alias, 'Map<any,number>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn66');
      assert.strictEqual(converted.funcs[0].returns, "Map<any,number>",
        "h2dtscpp_convert_map_0050 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Map<any,number>",
        "h2dtscpp_convert_map_0050 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample66_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn66') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0050 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0051', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass281', alias: '',
          variableList: [{ type: 'Map<string, number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<std::string, double>",
        "h2dtscpp_convert_map_0051 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0051 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0052', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun281', returns: 'Map<string, number>',
          parameters: [{ type: 'Map<string, number>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun281');
      assert.strictEqual(converted.funcs[0].returns, "std::map<std::string, double>",
        "h2dtscpp_convert_map_0052 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<std::string, double>",
        "h2dtscpp_convert_map_0052 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample281_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun281') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0052 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0053', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass281', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<string, number>',
            parameters: [{ type: 'Map<string, number>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::map<std::string, double>",
        "h2dtscpp_convert_map_0053 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::map<std::string, double>",
        "h2dtscpp_convert_map_0053 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0053 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0054', () => {
    try {
      const parsed = doParseTs('h2cpp281.ts', `
        function h2cpp281(p: Map<string, number>): Map<string, number> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::map<std::string, double>",
        "h2dtscpp_convert_map_0054 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<std::string, double>",
        "h2dtscpp_convert_map_0054 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp281.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp281') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0054 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0055', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn281', returns: 'Map<string, number>',
          parameters: [{ type: 'Map<string, number>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias281', alias: 'Map<string, number>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias281');
      assert.strictEqual(converted.types[0].alias, 'Map<string, number>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn281');
      assert.strictEqual(converted.funcs[0].returns, "std::map<std::string, double>",
        "h2dtscpp_convert_map_0055 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<std::string, double>",
        "h2dtscpp_convert_map_0055 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample281_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn281') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0055 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0056', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass282', alias: '',
          variableList: [{ type: 'Map<string, string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<std::string, std::string>",
        "h2dtscpp_convert_map_0056 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0056 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0057', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun282', returns: 'Map<string, string>',
          parameters: [{ type: 'Map<string, string>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun282');
      assert.strictEqual(converted.funcs[0].returns, "std::map<std::string, std::string>",
        "h2dtscpp_convert_map_0057 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<std::string, std::string>",
        "h2dtscpp_convert_map_0057 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample282_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun282') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0057 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0058', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass282', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<string, string>',
            parameters: [{ type: 'Map<string, string>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::map<std::string, std::string>",
        "h2dtscpp_convert_map_0058 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::map<std::string, std::string>",
        "h2dtscpp_convert_map_0058 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0058 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0059', () => {
    try {
      const parsed = doParseTs('h2cpp282.ts', `
        function h2cpp282(p: Map<string, string>): Map<string, string> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::map<std::string, std::string>",
        "h2dtscpp_convert_map_0059 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<std::string, std::string>",
        "h2dtscpp_convert_map_0059 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp282.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp282') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0059 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0060', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn282', returns: 'Map<string, string>',
          parameters: [{ type: 'Map<string, string>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias282', alias: 'Map<string, string>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias282');
      assert.strictEqual(converted.types[0].alias, 'Map<string, string>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn282');
      assert.strictEqual(converted.funcs[0].returns, "std::map<std::string, std::string>",
        "h2dtscpp_convert_map_0060 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<std::string, std::string>",
        "h2dtscpp_convert_map_0060 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample282_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn282') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0060 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0061', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass283', alias: '',
          variableList: [{ type: 'Map<string, boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<std::string, bool>",
        "h2dtscpp_convert_map_0061 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0061 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0062', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun283', returns: 'Map<string, boolean>',
          parameters: [{ type: 'Map<string, boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun283');
      assert.strictEqual(converted.funcs[0].returns, "std::map<std::string, bool>",
        "h2dtscpp_convert_map_0062 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<std::string, bool>",
        "h2dtscpp_convert_map_0062 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample283_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun283') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0062 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0063', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass283', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<string, boolean>',
            parameters: [{ type: 'Map<string, boolean>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::map<std::string, bool>",
        "h2dtscpp_convert_map_0063 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::map<std::string, bool>",
        "h2dtscpp_convert_map_0063 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0063 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0064', () => {
    try {
      const parsed = doParseTs('h2cpp283.ts', `
        function h2cpp283(p: Map<string, boolean>): Map<string, boolean> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::map<std::string, bool>",
        "h2dtscpp_convert_map_0064 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<std::string, bool>",
        "h2dtscpp_convert_map_0064 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp283.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp283') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0064 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0065', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn283', returns: 'Map<string, boolean>',
          parameters: [{ type: 'Map<string, boolean>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias283', alias: 'Map<string, boolean>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias283');
      assert.strictEqual(converted.types[0].alias, 'Map<string, boolean>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn283');
      assert.strictEqual(converted.funcs[0].returns, "std::map<std::string, bool>",
        "h2dtscpp_convert_map_0065 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<std::string, bool>",
        "h2dtscpp_convert_map_0065 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample283_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn283') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0065 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0066', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass284', alias: '',
          variableList: [{ type: 'Map<number, number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<double, double>",
        "h2dtscpp_convert_map_0066 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0066 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0067', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun284', returns: 'Map<number, number>',
          parameters: [{ type: 'Map<number, number>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun284');
      assert.strictEqual(converted.funcs[0].returns, "std::map<double, double>",
        "h2dtscpp_convert_map_0067 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<double, double>",
        "h2dtscpp_convert_map_0067 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample284_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun284') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0067 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0068', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass284', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<number, number>',
            parameters: [{ type: 'Map<number, number>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::map<double, double>",
        "h2dtscpp_convert_map_0068 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::map<double, double>",
        "h2dtscpp_convert_map_0068 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0068 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0069', () => {
    try {
      const parsed = doParseTs('h2cpp284.ts', `
        function h2cpp284(p: Map<number, number>): Map<number, number> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::map<double, double>",
        "h2dtscpp_convert_map_0069 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<double, double>",
        "h2dtscpp_convert_map_0069 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp284.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp284') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0069 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0070', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn284', returns: 'Map<number, number>',
          parameters: [{ type: 'Map<number, number>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias284', alias: 'Map<number, number>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias284');
      assert.strictEqual(converted.types[0].alias, 'Map<number, number>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn284');
      assert.strictEqual(converted.funcs[0].returns, "std::map<double, double>",
        "h2dtscpp_convert_map_0070 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<double, double>",
        "h2dtscpp_convert_map_0070 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample284_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn284') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0070 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0071', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass285', alias: '',
          variableList: [{ type: 'Map<number, string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<double, std::string>",
        "h2dtscpp_convert_map_0071 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0071 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0072', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun285', returns: 'Map<number, string>',
          parameters: [{ type: 'Map<number, string>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun285');
      assert.strictEqual(converted.funcs[0].returns, "std::map<double, std::string>",
        "h2dtscpp_convert_map_0072 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<double, std::string>",
        "h2dtscpp_convert_map_0072 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample285_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun285') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0072 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0073', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass285', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Map<number, string>',
            parameters: [{ type: 'Map<number, string>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::map<double, std::string>",
        "h2dtscpp_convert_map_0073 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::map<double, std::string>",
        "h2dtscpp_convert_map_0073 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0073 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_map_0074', () => {
    try {
      const parsed = doParseTs('h2cpp285.ts', `
        function h2cpp285(p: Map<number, string>): Map<number, string> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::map<double, std::string>",
        "h2dtscpp_convert_map_0074 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<double, std::string>",
        "h2dtscpp_convert_map_0074 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp285.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp285') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_map_0074 execution error: ${String(err)}`);
    }
  });
});
