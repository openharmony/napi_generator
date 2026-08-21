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
import { transCkey2Dtskey, transParseObj, generateFunctions } from '../../../gen/gendtscpp';
import { transTskey2Ckey } from '../../../gen/gendts';
import { doParseTs } from '../../../parse/parsets';
import * as parsec from '../../../parse/parsec';
}

suite('Stability_Full_Scenario_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_Full_Scenario_Part01.');


  test('stability_scenario_dts2cpp_overall_001', () => {
    try {
      const converted = transParseObj(doParseTs('full_namespace_import.ts', `import { ExternalType } from './external';
        declare namespace MyNs { export interface Config { id: number; name: string; enabled: boolean; }
          export function init(cfg: Config): void;
          export function on(event: string, cb: Callback<number>): void;
          export function off(event: string, cb: Callback<number>): void; }`));
      assert.ok(converted !== undefined && typeof converted === 'object');
      const generated = generateFunctions(converted, 'full_namespace_import.d.ts');
      assert.ok(generated !== undefined && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('场景 full_namespace_import execution error: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_overall_002', () => {
    try {
      const converted = transParseObj(doParseTs('full_promise_callback.ts', `
        function asyncWork(input: number): Promise<string> { return Promise.resolve(''); }
        function register(cb: Callback<boolean>): void {}
        function threadsafe(cb: Callback<number>): void {}`));
      assert.ok(converted !== undefined && typeof converted === 'object');
      const generated = generateFunctions(converted, 'full_promise_callback.d.ts');
      assert.ok(generated !== undefined && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('场景 full_promise_callback execution error: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_overall_003', () => {
    try {
      const converted = transParseObj(doParseTs('full_class_static.ts', `
        class Service { static id: number; static getInstance(): Service;
        on(event: string, handler: (data: string)=>void): void;
        off(event: string, handler: (data: string)=>void): void;
        $special(): void; }`));
      assert.ok(converted !== undefined && typeof converted === 'object');
      const generated = generateFunctions(converted, 'full_class_static.d.ts');
      assert.ok(generated !== undefined && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('场景 full_class_static execution error: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_overall_004', () => {
    try {
      const converted = transParseObj(doParseTs('full_map_array_combo.ts', `
        type DataStore = { nums: number[]; strs: Array<string>; flags: boolean[];
        mapping: Map<string, number>; tags: Set<string>;
        handler: (key: string, val: number) => boolean; };`));
      assert.ok(converted !== undefined && typeof converted === 'object');
      const generated = generateFunctions(converted, 'full_map_array_combo.d.ts');
      assert.ok(generated !== undefined && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('场景 full_map_array_combo execution error: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_overall_001', () => {
    try {
      const r = parsec.parseClass(`class Api { public: static int init(); };`);
      assert.ok(r !== undefined);
    } catch (err) {
      assert.fail('场景 h2dts execution error: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_overall_002', () => {
    try {
      const r = parsec.parseClass(`namespace utils { struct Point { double x; double y; }; };`);
      assert.ok(r !== undefined);
    } catch (err) {
      assert.fail('场景 h2dts execution error: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_overall_003', () => {
    try {
      const r = parsec.parseClass(`enum Status { OK, ERR }; struct Result { Status code; std::string msg; };`);
      assert.ok(r !== undefined);
    } catch (err) {
      assert.fail('场景 h2dts execution error: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_overall_001', () => {
    try {
      const parseObj = {
        enums: [], unions: [], structs: [],
        classes: [{ name: 'OverallApi', alias: '',
          variableList: [{ type: 'number', name: 'id', arraySize: 0, arraySizeList: [] }],
          functionList: [{ type: 'function', name: 'run', returns: 'string',
            parameters: [{ type: 'number', name: 'x', arraySize: 0, arraySizeList: [] }] }]
        }],
        funcs: [], types: []
      };
      const converted = transParseObj(parseObj);
      const generated = generateFunctions(converted, 'overall.d.ts');
      assert.ok(converted !== undefined && generated !== undefined && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('场景 h2dtscpp execution error: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_001', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_0.ts', `function scen0(p: number): number { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "double",
        "stability_scenario_dts2cpp_type_001_param convert output");
      const generated = generateFunctions(converted, 'scen_0.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario number: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_001', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_0(int p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_001 convert output non-empty");
      assert.strictEqual(converted, "number", "stability_scenario_h2dts_type_001 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_001', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen0', alias: '',
          variableList: [{ type: 'number', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "double",
        "stability_scenario_h2dtscpp_type_001 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_0.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_002', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_1.ts', `function scen1(p: string): string { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::string",
        "stability_scenario_dts2cpp_type_002_param convert output");
      const generated = generateFunctions(converted, 'scen_1.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario string: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_002', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_1(size_t p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_002 convert output non-empty");
      assert.strictEqual(converted, "number", "stability_scenario_h2dts_type_002 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_002', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen1', alias: '',
          variableList: [{ type: 'string', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::string",
        "stability_scenario_h2dtscpp_type_002 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_1.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_003', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_2.ts', `function scen2(p: boolean): boolean { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "bool",
        "stability_scenario_dts2cpp_type_003_param convert output");
      const generated = generateFunctions(converted, 'scen_2.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario boolean: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_003', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_2(double p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_003 convert output non-empty");
      assert.strictEqual(converted, "number", "stability_scenario_h2dts_type_003 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_003', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen2', alias: '',
          variableList: [{ type: 'boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "bool",
        "stability_scenario_h2dtscpp_type_003 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_2.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_004', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_3.ts', `function scen3(p: void): void { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "void",
        "stability_scenario_dts2cpp_type_004_param convert output");
      const generated = generateFunctions(converted, 'scen_3.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario void: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_004', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_3(float p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_004 convert output non-empty");
      assert.strictEqual(converted, "number", "stability_scenario_h2dts_type_004 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_004', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen3', alias: '',
          variableList: [{ type: 'void', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "void",
        "stability_scenario_h2dtscpp_type_004 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_3.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_005', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_4.ts', `
        function scen4(p: Array<number>): Array<number> { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::vector<double>",
        "stability_scenario_dts2cpp_type_005_param convert output");
      const generated = generateFunctions(converted, 'scen_4.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario Array<number>: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_005', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_4(short p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_005 convert output non-empty");
      assert.strictEqual(converted, "number", "stability_scenario_h2dts_type_005 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_005', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen4', alias: '',
          variableList: [{ type: 'Array<number>', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<double>",
        "stability_scenario_h2dtscpp_type_005 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_4.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_006', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_5.ts', `
        function scen5(p: number[]): number[] { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::vector<double>",
        "stability_scenario_dts2cpp_type_006_param convert output");
      const generated = generateFunctions(converted, 'scen_5.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario number[]: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_006', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_5(long p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_006 convert output non-empty");
      assert.strictEqual(converted, "number", "stability_scenario_h2dts_type_006 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_006', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen5', alias: '',
          variableList: [{ type: 'number[]', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<double>",
        "stability_scenario_h2dtscpp_type_006 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_5.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_007', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_6.ts', `
        function scen6(p: Array<string>): Array<string> { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::vector<std::string>",
        "stability_scenario_dts2cpp_type_007_param convert output");
      const generated = generateFunctions(converted, 'scen_6.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario Array<string>: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_007', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_6(uint8_t p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_007 convert output non-empty");
      assert.strictEqual(converted, "number", "stability_scenario_h2dts_type_007 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_007', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen6', alias: '',
          variableList: [{ type: 'Array<string>', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<std::string>",
        "stability_scenario_h2dtscpp_type_007 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_6.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_008', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_7.ts', `
        function scen7(p: string[]): string[] { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::vector<std::string>",
        "stability_scenario_dts2cpp_type_008_param convert output");
      const generated = generateFunctions(converted, 'scen_7.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario string[]: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_008', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_7(uint16_t p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_008 convert output non-empty");
      assert.strictEqual(converted, "number", "stability_scenario_h2dts_type_008 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_008', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen7', alias: '',
          variableList: [{ type: 'string[]', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<std::string>",
        "stability_scenario_h2dtscpp_type_008 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_7.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_009', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_8.ts', `
        function scen8(p: Array<boolean>): Array<boolean> { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::vector<bool>",
        "stability_scenario_dts2cpp_type_009_param convert output");
      const generated = generateFunctions(converted, 'scen_8.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario Array<boolean>: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_009', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_8(uint32_t p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_009 convert output non-empty");
      assert.strictEqual(converted, "number", "stability_scenario_h2dts_type_009 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_009', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen8', alias: '',
          variableList: [{ type: 'Array<boolean>', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<bool>",
        "stability_scenario_h2dtscpp_type_009 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_8.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_010', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_9.ts', `
        function scen9(p: boolean[]): boolean[] { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::vector<bool>",
        "stability_scenario_dts2cpp_type_010_param convert output");
      const generated = generateFunctions(converted, 'scen_9.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario boolean[]: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_010', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_9(uint64_t p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_010 convert output non-empty");
      assert.strictEqual(converted, "number", "stability_scenario_h2dts_type_010 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_010', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen9', alias: '',
          variableList: [{ type: 'boolean[]', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<bool>",
        "stability_scenario_h2dtscpp_type_010 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_9.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_011', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_10.ts', `
        function scen10(p: Map<string,number>): Map<string,number> { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<std::string, double>",
        "stability_scenario_dts2cpp_type_011_param convert output");
      const generated = generateFunctions(converted, 'scen_10.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario Map<string,number>: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_011', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_10(int8_t p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_011 convert output non-empty");
      assert.strictEqual(converted, "number", "stability_scenario_h2dts_type_011 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_011', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen10', alias: '',
          variableList: [{ type: 'Map<string,number>', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<std::string, double>",
        "stability_scenario_h2dtscpp_type_011 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_10.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_012', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_11.ts', `
        function scen11(p: Map<string,string>): Map<string,string> { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<std::string, std::string>",
        "stability_scenario_dts2cpp_type_012_param convert output");
      const generated = generateFunctions(converted, 'scen_11.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario Map<string,string>: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_012', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_11(int16_t p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_012 convert output non-empty");
      assert.strictEqual(converted, "number", "stability_scenario_h2dts_type_012 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_012', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen11', alias: '',
          variableList: [{ type: 'Map<string,string>', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<std::string, std::string>",
        "stability_scenario_h2dtscpp_type_012 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_11.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_013', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_12.ts', `
        function scen12(p: Map<string,boolean>): Map<string,boolean> { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<std::string, bool>",
        "stability_scenario_dts2cpp_type_013_param convert output");
      const generated = generateFunctions(converted, 'scen_12.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario Map<string,boolean>: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_013', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_12(int32_t p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_013 convert output non-empty");
      assert.strictEqual(converted, "number", "stability_scenario_h2dts_type_013 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_013', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen12', alias: '',
          variableList: [{ type: 'Map<string,boolean>', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<std::string, bool>",
        "stability_scenario_h2dtscpp_type_013 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_12.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_014', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_13.ts', `
        function scen13(p: Map<number,number>): Map<number,number> { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<double, double>",
        "stability_scenario_dts2cpp_type_014_param convert output");
      const generated = generateFunctions(converted, 'scen_13.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario Map<number,number>: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_014', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_13(int64_t p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_014 convert output non-empty");
      assert.strictEqual(converted, "number", "stability_scenario_h2dts_type_014 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_014', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen13', alias: '',
          variableList: [{ type: 'Map<number,number>', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<double, double>",
        "stability_scenario_h2dtscpp_type_014 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_13.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_015', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_14.ts', `
        function scen14(p: Map<number,string>): Map<number,string> { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<double, std::string>",
        "stability_scenario_dts2cpp_type_015_param convert output");
      const generated = generateFunctions(converted, 'scen_14.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario Map<number,string>: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_015', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_14(bool p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_015 convert output non-empty");
      assert.strictEqual(converted, "boolean", "stability_scenario_h2dts_type_015 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_015', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen14', alias: '',
          variableList: [{ type: 'Map<number,string>', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<double, std::string>",
        "stability_scenario_h2dtscpp_type_015 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_14.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_016', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_15.ts', `
        function scen15(p: Map<number,boolean>): Map<number,boolean> { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::map<double, bool>",
        "stability_scenario_dts2cpp_type_016_param convert output");
      const generated = generateFunctions(converted, 'scen_15.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario Map<number,boolean>: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_016', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_15(char p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_016 convert output non-empty");
      assert.strictEqual(converted, "string", "stability_scenario_h2dts_type_016 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_016', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen15', alias: '',
          variableList: [{ type: 'Map<number,boolean>', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::map<double, bool>",
        "stability_scenario_h2dtscpp_type_016 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_15.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_017', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_16.ts', `
        function scen16(p: Set<string>): Set<string> { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::set<std::string>",
        "stability_scenario_dts2cpp_type_017_param convert output");
      const generated = generateFunctions(converted, 'scen_16.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario Set<string>: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_017', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_16(wchar_t p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_017 convert output non-empty");
      assert.strictEqual(converted, "string", "stability_scenario_h2dts_type_017 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_017', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen16', alias: '',
          variableList: [{ type: 'Set<string>', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::set<std::string>",
        "stability_scenario_h2dtscpp_type_017 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_16.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_018', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_17.ts', `
        function scen17(p: Set<number>): Set<number> { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::set<double>",
        "stability_scenario_dts2cpp_type_018_param convert output");
      const generated = generateFunctions(converted, 'scen_17.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario Set<number>: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_018', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_17(char8_t p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_018 convert output non-empty");
      assert.strictEqual(converted, "string", "stability_scenario_h2dts_type_018 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_018', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen17', alias: '',
          variableList: [{ type: 'Set<number>', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::set<double>",
        "stability_scenario_h2dtscpp_type_018 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_17.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_019', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_18.ts', `
        function scen18(p: Set<boolean>): Set<boolean> { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::set<bool>",
        "stability_scenario_dts2cpp_type_019_param convert output");
      const generated = generateFunctions(converted, 'scen_18.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario Set<boolean>: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_019', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_18(char16_t p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_019 convert output non-empty");
      assert.strictEqual(converted, "string", "stability_scenario_h2dts_type_019 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_019', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen18', alias: '',
          variableList: [{ type: 'Set<boolean>', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::set<bool>",
        "stability_scenario_h2dtscpp_type_019 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_18.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_020', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_19.ts', `
        function scen19(p: Callback<number>): Callback<number> { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double)>",
        "stability_scenario_dts2cpp_type_020_param convert output");
      const generated = generateFunctions(converted, 'scen_19.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario Callback<number>: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_020', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_19(char32_t p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_020 convert output non-empty");
      assert.strictEqual(converted, "string", "stability_scenario_h2dts_type_020 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_020', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen19', alias: '',
          variableList: [{ type: 'Callback<number>', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double)>",
        "stability_scenario_h2dtscpp_type_020 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_19.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_021', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_20.ts', `
        function scen20(p: Callback<string>): Callback<string> { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::string)>",
        "stability_scenario_dts2cpp_type_021_param convert output");
      const generated = generateFunctions(converted, 'scen_20.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario Callback<string>: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_021', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_20(std::vector<int> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_021 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_021 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_021', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen20', alias: '',
          variableList: [{ type: 'Callback<string>', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::string)>",
        "stability_scenario_h2dtscpp_type_021 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_20.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_022', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_21.ts', `
        function scen21(p: Callback<boolean>): Callback<boolean> { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(bool)>",
        "stability_scenario_dts2cpp_type_022_param convert output");
      const generated = generateFunctions(converted, 'scen_21.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario Callback<boolean>: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_022', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_21(std::vector<size_t> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_022 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_022 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_022', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen21', alias: '',
          variableList: [{ type: 'Callback<boolean>', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(bool)>",
        "stability_scenario_h2dtscpp_type_022 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_21.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_023', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_22.ts', `
        function scen22(p: Callback<void>): Callback<void> { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(void)>",
        "stability_scenario_dts2cpp_type_023_param convert output");
      const generated = generateFunctions(converted, 'scen_22.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario Callback<void>: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_023', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_22(std::vector<double> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_023 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_023 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_023', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen22', alias: '',
          variableList: [{ type: 'Callback<void>', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(void)>",
        "stability_scenario_h2dtscpp_type_023 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_22.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_024', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_23.ts', `
        function scen23(p: Callback<number[]>): Callback<number[]> { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::vector<double>)>",
        "stability_scenario_dts2cpp_type_024_param convert output");
      const generated = generateFunctions(converted, 'scen_23.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario Callback<number[]>: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_024', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_23(std::vector<float> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_024 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_024 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_024', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen23', alias: '',
          variableList: [{ type: 'Callback<number[]>', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::vector<double>)>",
        "stability_scenario_h2dtscpp_type_024 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_23.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_025', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_24.ts', `
        function scen24(p: Callback<string[]>): Callback<string[]> { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::vector<std::string>)>",
        "stability_scenario_dts2cpp_type_025_param convert output");
      const generated = generateFunctions(converted, 'scen_24.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario Callback<string[]>: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_025', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_24(std::vector<long> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_025 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_025 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_025', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen24', alias: '',
          variableList: [{ type: 'Callback<string[]>', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::vector<std::string>)>",
        "stability_scenario_h2dtscpp_type_025 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_24.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_026', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_25.ts', `
        function scen25(p: Callback<boolean[]>): Callback<boolean[]> { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::vector<bool>)>",
        "stability_scenario_dts2cpp_type_026_param convert output");
      const generated = generateFunctions(converted, 'scen_25.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario Callback<boolean[]>: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_026', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_25(std::vector<short> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_026 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_026 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_026', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen25', alias: '',
          variableList: [{ type: 'Callback<boolean[]>', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::vector<bool>)>",
        "stability_scenario_h2dtscpp_type_026 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_25.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_027', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_26.ts', `
        function scen26(p: (p0:number)=>number): (p0:number)=>number { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(double)>",
        "stability_scenario_dts2cpp_type_027_param convert output");
      const generated = generateFunctions(converted, 'scen_26.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:number)=>number: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_027', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_26(std::vector<uint8_t> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_027 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_027 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_027', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen26', alias: '',
          variableList: [{ type: '(p0:number)=>number', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<double(double)>",
        "stability_scenario_h2dtscpp_type_027 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_26.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_028', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_27.ts', `
        function scen27(p: (p0:string)=>number): (p0:string)=>number { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(std::string)>",
        "stability_scenario_dts2cpp_type_028_param convert output");
      const generated = generateFunctions(converted, 'scen_27.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:string)=>number: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_028', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_27(std::vector<uint16_t> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_028 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_028 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_028', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen27', alias: '',
          variableList: [{ type: '(p0:string)=>number', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<double(std::string)>",
        "stability_scenario_h2dtscpp_type_028 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_27.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_029', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_28.ts', `
        function scen28(p: (p0:boolean)=>number): (p0:boolean)=>number { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(bool)>",
        "stability_scenario_dts2cpp_type_029_param convert output");
      const generated = generateFunctions(converted, 'scen_28.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:boolean)=>number: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_029', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_28(std::vector<uint32_t> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_029 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_029 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_029', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen28', alias: '',
          variableList: [{ type: '(p0:boolean)=>number', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<double(bool)>",
        "stability_scenario_h2dtscpp_type_029 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_28.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_030', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_29.ts', `
        function scen29(p: (p0:number)=>string): (p0:number)=>string { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(double)>",
        "stability_scenario_dts2cpp_type_030_param convert output");
      const generated = generateFunctions(converted, 'scen_29.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:number)=>string: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_030', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_29(std::vector<uint64_t> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_030 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_030 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_030', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen29', alias: '',
          variableList: [{ type: '(p0:number)=>string', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::string(double)>",
        "stability_scenario_h2dtscpp_type_030 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_29.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_031', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_30.ts', `
        function scen30(p: (p0:string)=>string): (p0:string)=>string { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(std::string)>",
        "stability_scenario_dts2cpp_type_031_param convert output");
      const generated = generateFunctions(converted, 'scen_30.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:string)=>string: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_031', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_30(std::vector<int8_t> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_031 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_031 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_031', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen30', alias: '',
          variableList: [{ type: '(p0:string)=>string', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::string(std::string)>",
        "stability_scenario_h2dtscpp_type_031 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_30.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_032', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_31.ts', `
        function scen31(p: (p0:boolean)=>string): (p0:boolean)=>string { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(bool)>",
        "stability_scenario_dts2cpp_type_032_param convert output");
      const generated = generateFunctions(converted, 'scen_31.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:boolean)=>string: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_032', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_31(std::vector<int16_t> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_032 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_032 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_032', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen31', alias: '',
          variableList: [{ type: '(p0:boolean)=>string', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::string(bool)>",
        "stability_scenario_h2dtscpp_type_032 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_31.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_033', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_32.ts', `
        function scen32(p: (p0:number)=>boolean): (p0:number)=>boolean { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(double)>",
        "stability_scenario_dts2cpp_type_033_param convert output");
      const generated = generateFunctions(converted, 'scen_32.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:number)=>boolean: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_033', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_32(std::vector<int32_t> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_033 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_033 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_033', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen32', alias: '',
          variableList: [{ type: '(p0:number)=>boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(double)>",
        "stability_scenario_h2dtscpp_type_033 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_32.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_034', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_33.ts', `
        function scen33(p: (p0:string)=>boolean): (p0:string)=>boolean { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(std::string)>",
        "stability_scenario_dts2cpp_type_034_param convert output");
      const generated = generateFunctions(converted, 'scen_33.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:string)=>boolean: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_034', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_33(std::vector<int64_t> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_034 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_034 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_034', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen33', alias: '',
          variableList: [{ type: '(p0:string)=>boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(std::string)>",
        "stability_scenario_h2dtscpp_type_034 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_33.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_035', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_34.ts', `
        function scen34(p: (p0:boolean)=>boolean): (p0:boolean)=>boolean { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(bool)>",
        "stability_scenario_dts2cpp_type_035_param convert output");
      const generated = generateFunctions(converted, 'scen_34.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:boolean)=>boolean: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_035', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_34(std::vector<unsigned> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_035 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_035 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_035', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen34', alias: '',
          variableList: [{ type: '(p0:boolean)=>boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(bool)>",
        "stability_scenario_h2dtscpp_type_035 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_34.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_036', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_35.ts', `
        function scen35(p: (p0:number)=>void): (p0:number)=>void { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double)>",
        "stability_scenario_dts2cpp_type_036_param convert output");
      const generated = generateFunctions(converted, 'scen_35.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:number)=>void: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_036', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_35(std::vector<bool> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_036 convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>", "stability_scenario_h2dts_type_036 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_036', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen35', alias: '',
          variableList: [{ type: '(p0:number)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double)>",
        "stability_scenario_h2dtscpp_type_036 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_35.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_037', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_36.ts', `
        function scen36(p: (p0:string)=>void): (p0:string)=>void { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::string)>",
        "stability_scenario_dts2cpp_type_037_param convert output");
      const generated = generateFunctions(converted, 'scen_36.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:string)=>void: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_037', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_36(std::vector<char> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_037 convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "stability_scenario_h2dts_type_037 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_037', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen36', alias: '',
          variableList: [{ type: '(p0:string)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::string)>",
        "stability_scenario_h2dtscpp_type_037 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_36.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_038', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_37.ts', `
        function scen37(p: (p0:boolean)=>void): (p0:boolean)=>void { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(bool)>",
        "stability_scenario_dts2cpp_type_038_param convert output");
      const generated = generateFunctions(converted, 'scen_37.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:boolean)=>void: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_038', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_37(std::vector<wchar_t> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_038 convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "stability_scenario_h2dts_type_038 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_038', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen37', alias: '',
          variableList: [{ type: '(p0:boolean)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(bool)>",
        "stability_scenario_h2dtscpp_type_038 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_37.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_039', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_38.ts', `
        function scen38(p: (p0:number,p1:number)=>number): (p0:number,p1:number)=>number { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(double, double)>",
        "stability_scenario_dts2cpp_type_039_param convert output");
      const generated = generateFunctions(converted, 'scen_38.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:number,p1:number)=>number: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_039', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_38(std::vector<char8_t> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_039 convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "stability_scenario_h2dts_type_039 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_039', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen38', alias: '',
          variableList: [{ type: '(p0:number,p1:number)=>number', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<double(double, double)>",
        "stability_scenario_h2dtscpp_type_039 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_38.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_040', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_39.ts', `
        function scen39(p: (p0:number,p1:boolean)=>number): (p0:number,p1:boolean)=>number { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(double, bool)>",
        "stability_scenario_dts2cpp_type_040_param convert output");
      const generated = generateFunctions(converted, 'scen_39.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:number,p1:boolean)=>number: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_040', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_39(std::vector<char16_t> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_040 convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "stability_scenario_h2dts_type_040 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_040', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen39', alias: '',
          variableList: [{ type: '(p0:number,p1:boolean)=>number', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<double(double, bool)>",
        "stability_scenario_h2dtscpp_type_040 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_39.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_041', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_40.ts', `
        function scen40(p: (p0:string,p1:string)=>number): (p0:string,p1:string)=>number { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(std::string, std::string)>",
        "stability_scenario_dts2cpp_type_041_param convert output");
      const generated = generateFunctions(converted, 'scen_40.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:string,p1:string)=>number: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_041', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_40(std::vector<char32_t> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_041 convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "stability_scenario_h2dts_type_041 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });
});
