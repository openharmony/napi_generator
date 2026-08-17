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

suite('Stability_Full_Scenario_Part02', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_Full_Scenario_Part02.');


  test('stability_scenario_h2dtscpp_type_041', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen40', alias: '',
          variableList: [{ type: '(p0:string,p1:string)=>number', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<double(std::string, std::string)>",
        "stability_scenario_h2dtscpp_type_041 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_40.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_042', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_41.ts', `
        function scen41(p: (p0:boolean,p1:number)=>number): (p0:boolean,p1:number)=>number { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(bool, double)>",
        "stability_scenario_dts2cpp_type_042_param convert output");
      const generated = generateFunctions(converted, 'scen_41.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:boolean,p1:number)=>number: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_042', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_41(std::array<int, 10> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_042 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_042 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_042', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen41', alias: '',
          variableList: [{ type: '(p0:boolean,p1:number)=>number', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<double(bool, double)>",
        "stability_scenario_h2dtscpp_type_042 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_41.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_043', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_42.ts', `
        function scen42(p: (p0:boolean,p1:boolean)=>number): (p0:boolean,p1:boolean)=>number { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(bool, bool)>",
        "stability_scenario_dts2cpp_type_043_param convert output");
      const generated = generateFunctions(converted, 'scen_42.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:boolean,p1:boolean)=>number: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_043', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_42(std::array<size_t, 10> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_043 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_043 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_043', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen42', alias: '',
          variableList: [{ type: '(p0:boolean,p1:boolean)=>number', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<double(bool, bool)>",
        "stability_scenario_h2dtscpp_type_043 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_42.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_044', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_43.ts', `
        function scen43(p: (p0:number,p1:number)=>string): (p0:number,p1:number)=>string { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(double, double)>",
        "stability_scenario_dts2cpp_type_044_param convert output");
      const generated = generateFunctions(converted, 'scen_43.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:number,p1:number)=>string: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_044', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_43(std::array<double, 10> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_044 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_044 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_044', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen43', alias: '',
          variableList: [{ type: '(p0:number,p1:number)=>string', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::string(double, double)>",
        "stability_scenario_h2dtscpp_type_044 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_43.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_045', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_44.ts', `
        function scen44(p: (p0:number,p1:boolean)=>string): (p0:number,p1:boolean)=>string { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(double, bool)>",
        "stability_scenario_dts2cpp_type_045_param convert output");
      const generated = generateFunctions(converted, 'scen_44.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:number,p1:boolean)=>string: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_045', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_44(std::array<float, 10> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_045 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_045 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_045', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen44', alias: '',
          variableList: [{ type: '(p0:number,p1:boolean)=>string', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::string(double, bool)>",
        "stability_scenario_h2dtscpp_type_045 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_44.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_046', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_45.ts', `
        function scen45(p: (p0:string,p1:string)=>string): (p0:string,p1:string)=>string { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(std::string, std::string)>",
        "stability_scenario_dts2cpp_type_046_param convert output");
      const generated = generateFunctions(converted, 'scen_45.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:string,p1:string)=>string: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_046', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_45(std::array<long, 10> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_046 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_046 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_046', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen45', alias: '',
          variableList: [{ type: '(p0:string,p1:string)=>string', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<std::string(std::string, std::string)>",
        "stability_scenario_h2dtscpp_type_046 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_45.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_047', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_46.ts', `
        function scen46(p: (p0:boolean,p1:number)=>string): (p0:boolean,p1:number)=>string { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(bool, double)>",
        "stability_scenario_dts2cpp_type_047_param convert output");
      const generated = generateFunctions(converted, 'scen_46.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:boolean,p1:number)=>string: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_047', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_46(std::array<short, 10> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_047 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_047 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_047', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen46', alias: '',
          variableList: [{ type: '(p0:boolean,p1:number)=>string', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::string(bool, double)>",
        "stability_scenario_h2dtscpp_type_047 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_46.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_048', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_47.ts', `
        function scen47(p: (p0:boolean,p1:boolean)=>string): (p0:boolean,p1:boolean)=>string { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(bool, bool)>",
        "stability_scenario_dts2cpp_type_048_param convert output");
      const generated = generateFunctions(converted, 'scen_47.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:boolean,p1:boolean)=>string: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_048', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_47(std::array<uint8_t, 10> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_048 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_048 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_048', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen47', alias: '',
          variableList: [{ type: '(p0:boolean,p1:boolean)=>string', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::string(bool, bool)>",
        "stability_scenario_h2dtscpp_type_048 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_47.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_049', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_48.ts', `
        function scen48(p: (p0:number,p1:number)=>boolean): (p0:number,p1:number)=>boolean { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(double, double)>",
        "stability_scenario_dts2cpp_type_049_param convert output");
      const generated = generateFunctions(converted, 'scen_48.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:number,p1:number)=>boolean: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_049', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_48(std::array<uint16_t, 10> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_049 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_049 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_049', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen48', alias: '',
          variableList: [{ type: '(p0:number,p1:number)=>boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(double, double)>",
        "stability_scenario_h2dtscpp_type_049 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_48.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_050', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_49.ts', `
        function scen49(p: (p0:number,p1:boolean)=>boolean): (p0:number,p1:boolean)=>boolean { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(double, bool)>",
        "stability_scenario_dts2cpp_type_050_param convert output");
      const generated = generateFunctions(converted, 'scen_49.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:number,p1:boolean)=>boolean: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_050', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_49(std::array<uint32_t, 10> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_050 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_050 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_050', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen49', alias: '',
          variableList: [{ type: '(p0:number,p1:boolean)=>boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(double, bool)>",
        "stability_scenario_h2dtscpp_type_050 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_49.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_051', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_50.ts', `
        function scen50(p: (p0:string,p1:string)=>boolean): (p0:string,p1:string)=>boolean { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(std::string, std::string)>",
        "stability_scenario_dts2cpp_type_051_param convert output");
      const generated = generateFunctions(converted, 'scen_50.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:string,p1:string)=>boolean: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_051', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_50(std::array<uint64_t, 10> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_051 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_051 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_051', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen50', alias: '',
          variableList: [{ type: '(p0:string,p1:string)=>boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(std::string, std::string)>",
        "stability_scenario_h2dtscpp_type_051 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_50.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_052', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_51.ts', `
        function scen51(p: (p0:boolean,p1:number)=>boolean): (p0:boolean,p1:number)=>boolean { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(bool, double)>",
        "stability_scenario_dts2cpp_type_052_param convert output");
      const generated = generateFunctions(converted, 'scen_51.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:boolean,p1:number)=>boolean: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_052', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_51(std::array<int8_t, 10> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_052 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_052 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_052', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen51', alias: '',
          variableList: [{ type: '(p0:boolean,p1:number)=>boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(bool, double)>",
        "stability_scenario_h2dtscpp_type_052 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_51.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_053', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_52.ts', `
        function scen52(p: (p0:boolean,p1:boolean)=>boolean): (p0:boolean,p1:boolean)=>boolean { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(bool, bool)>",
        "stability_scenario_dts2cpp_type_053_param convert output");
      const generated = generateFunctions(converted, 'scen_52.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:boolean,p1:boolean)=>boolean: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_053', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_52(std::array<int16_t, 10> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_053 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_053 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_053', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen52', alias: '',
          variableList: [{ type: '(p0:boolean,p1:boolean)=>boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(bool, bool)>",
        "stability_scenario_h2dtscpp_type_053 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_52.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_054', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_53.ts', `
        function scen53(p: (p0:number,p1:number)=>void): (p0:number,p1:number)=>void { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, double)>",
        "stability_scenario_dts2cpp_type_054_param convert output");
      const generated = generateFunctions(converted, 'scen_53.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:number,p1:number)=>void: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_054', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_53(std::array<int32_t, 10> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_054 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_054 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_054', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen53', alias: '',
          variableList: [{ type: '(p0:number,p1:number)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double, double)>",
        "stability_scenario_h2dtscpp_type_054 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_53.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_055', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_54.ts', `
        function scen54(p: (p0:number,p1:boolean)=>void): (p0:number,p1:boolean)=>void { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, bool)>",
        "stability_scenario_dts2cpp_type_055_param convert output");
      const generated = generateFunctions(converted, 'scen_54.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:number,p1:boolean)=>void: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_055', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_54(std::array<int64_t, 10> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_055 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_055 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_055', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen54', alias: '',
          variableList: [{ type: '(p0:number,p1:boolean)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double, bool)>",
        "stability_scenario_h2dtscpp_type_055 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_54.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_056', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_55.ts', `
        function scen55(p: (p0:string,p1:string)=>void): (p0:string,p1:string)=>void { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::string, std::string)>",
        "stability_scenario_dts2cpp_type_056_param convert output");
      const generated = generateFunctions(converted, 'scen_55.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:string,p1:string)=>void: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_056', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_55(std::array<unsigned, 10> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_056 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_056 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_056', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen55', alias: '',
          variableList: [{ type: '(p0:string,p1:string)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::string, std::string)>",
        "stability_scenario_h2dtscpp_type_056 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_55.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_057', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_56.ts', `
        function scen56(p: (p0:boolean,p1:number)=>void): (p0:boolean,p1:number)=>void { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(bool, double)>",
        "stability_scenario_dts2cpp_type_057_param convert output");
      const generated = generateFunctions(converted, 'scen_56.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:boolean,p1:number)=>void: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_057', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_56(std::array<bool, 10> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_057 convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>", "stability_scenario_h2dts_type_057 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_057', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen56', alias: '',
          variableList: [{ type: '(p0:boolean,p1:number)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(bool, double)>",
        "stability_scenario_h2dtscpp_type_057 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_56.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_058', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_57.ts', `
        function scen57(p: (p0:boolean,p1:boolean)=>void): (p0:boolean,p1:boolean)=>void { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(bool, bool)>",
        "stability_scenario_dts2cpp_type_058_param convert output");
      const generated = generateFunctions(converted, 'scen_57.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:boolean,p1:boolean)=>void: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_058', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_57(std::array<char, 10> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_058 convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "stability_scenario_h2dts_type_058 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_058', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen57', alias: '',
          variableList: [{ type: '(p0:boolean,p1:boolean)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(bool, bool)>",
        "stability_scenario_h2dtscpp_type_058 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_57.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_059', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_58.ts', `function scen58(p: any[]): any[] { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "any[]",
        "stability_scenario_dts2cpp_type_059_param convert output");
      const generated = generateFunctions(converted, 'scen_58.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario any[]: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_059', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_58(std::array<wchar_t, 10> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_059 convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "stability_scenario_h2dts_type_059 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_059', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen58', alias: '',
          variableList: [{ type: 'any[]', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "any[]",
        "stability_scenario_h2dtscpp_type_059 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_58.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_060', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_59.ts', `
        function scen59(p: object[]): object[] { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "object[]",
        "stability_scenario_dts2cpp_type_060_param convert output");
      const generated = generateFunctions(converted, 'scen_59.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario object[]: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_060', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_59(std::array<char8_t, 10> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_060 convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "stability_scenario_h2dts_type_060 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_060', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen59', alias: '',
          variableList: [{ type: 'object[]', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "object[]",
        "stability_scenario_h2dtscpp_type_060 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_59.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_061', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_60.ts', `
        function scen60(p: Array<any>): Array<any> { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Array<any>",
        "stability_scenario_dts2cpp_type_061_param convert output");
      const generated = generateFunctions(converted, 'scen_60.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario Array<any>: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_061', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_60(std::array<char16_t, 10> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_061 convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "stability_scenario_h2dts_type_061 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_061', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen60', alias: '',
          variableList: [{ type: 'Array<any>', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "Array<any>",
        "stability_scenario_h2dtscpp_type_061 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_60.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  test('stability_scenario_dts2cpp_type_062', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_61.ts', `
        function scen61(p: Array<object>): Array<object> { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Array<object>",
        "stability_scenario_dts2cpp_type_062_param convert output");
      const generated = generateFunctions(converted, 'scen_61.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario Array<object>: ' + String(err));
    }
  });

  test('stability_scenario_h2dts_type_062', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_61(std::array<char32_t, 10> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_062 convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "stability_scenario_h2dts_type_062 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  test('stability_scenario_h2dtscpp_type_062', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen61', alias: '',
          variableList: [{ type: 'Array<object>', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "Array<object>",
        "stability_scenario_h2dtscpp_type_062 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_61.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });
});
