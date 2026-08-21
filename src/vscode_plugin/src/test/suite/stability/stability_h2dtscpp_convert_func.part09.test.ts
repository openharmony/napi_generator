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

suite('Stability_H2DTSCPP_CONVERT_FUNC_Part09', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_CONVERT_FUNC_Part09.');


  test('h2dtscpp_convert_func_0001', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass150', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:object,p1:any)=>void',
            parameters: [{ type: '(p0:object,p1:any)=>void', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0001 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0001 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0001 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0002', () => {
    try {
      const parsed = doParseTs('h2cpp150.ts', `
        function h2cpp150(p: (p0:object,p1:any)=>void): (p0:object,p1:any)=>void { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0002 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0002 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp150.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp150') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0002 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0003', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn150', returns: '(p0:object,p1:any)=>void',
          parameters: [{ type: '(p0:object,p1:any)=>void', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias150', alias: '(p0:object,p1:any)=>void', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias150');
      assert.strictEqual(converted.types[0].alias, '(p0:object,p1:any)=>void');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn150');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0003 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0003 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample150_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn150') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0003 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0004', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass151', alias: '',
          variableList: [{ type: '(p0:object,p1:object)=>void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0004 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0004 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0005', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun151', returns: '(p0:object,p1:object)=>void',
          parameters: [{ type: '(p0:object,p1:object)=>void', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun151');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0005 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0005 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample151_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun151') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0005 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0006', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass151', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:object,p1:object)=>void',
            parameters: [{ type: '(p0:object,p1:object)=>void', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0006 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0006 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0006 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0007', () => {
    try {
      const parsed = doParseTs('h2cpp151.ts', `
        function h2cpp151(p: (p0:object,p1:object)=>void): (p0:object,p1:object)=>void { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0007 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0007 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp151.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp151') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0007 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0008', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn151', returns: '(p0:object,p1:object)=>void',
          parameters: [{ type: '(p0:object,p1:object)=>void', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias151', alias: '(p0:object,p1:object)=>void', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias151');
      assert.strictEqual(converted.types[0].alias, '(p0:object,p1:object)=>void');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn151');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0008 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, std::any)>",
        "h2dtscpp_convert_func_0008 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample151_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn151') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0008 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0009', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass152', alias: '',
          variableList: [{ type: '(p0:object,p1:number)=>void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, double)>",
        "h2dtscpp_convert_func_0009 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0009 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0010', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun152', returns: '(p0:object,p1:number)=>void',
          parameters: [{ type: '(p0:object,p1:number)=>void', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun152');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, double)>",
        "h2dtscpp_convert_func_0010 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, double)>",
        "h2dtscpp_convert_func_0010 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample152_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun152') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0010 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0011', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass152', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:object,p1:number)=>void',
            parameters: [{ type: '(p0:object,p1:number)=>void', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(std::any, double)>",
        "h2dtscpp_convert_func_0011 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<void(std::any, double)>",
        "h2dtscpp_convert_func_0011 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0011 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0012', () => {
    try {
      const parsed = doParseTs('h2cpp152.ts', `
        function h2cpp152(p: (p0:object,p1:number)=>void): (p0:object,p1:number)=>void { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, double)>",
        "h2dtscpp_convert_func_0012 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, double)>",
        "h2dtscpp_convert_func_0012 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp152.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp152') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0012 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0013', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn152', returns: '(p0:object,p1:number)=>void',
          parameters: [{ type: '(p0:object,p1:number)=>void', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias152', alias: '(p0:object,p1:number)=>void', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias152');
      assert.strictEqual(converted.types[0].alias, '(p0:object,p1:number)=>void');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn152');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, double)>",
        "h2dtscpp_convert_func_0013 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, double)>",
        "h2dtscpp_convert_func_0013 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample152_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn152') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0013 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0014', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass153', alias: '',
          variableList: [{ type: '(p0:object,p1:string)=>void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, std::string)>",
        "h2dtscpp_convert_func_0014 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0014 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0015', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun153', returns: '(p0:object,p1:string)=>void',
          parameters: [{ type: '(p0:object,p1:string)=>void', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun153');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, std::string)>",
        "h2dtscpp_convert_func_0015 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, std::string)>",
        "h2dtscpp_convert_func_0015 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample153_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun153') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0015 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0016', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass153', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:object,p1:string)=>void',
            parameters: [{ type: '(p0:object,p1:string)=>void', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(std::any, std::string)>",
        "h2dtscpp_convert_func_0016 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<void(std::any, std::string)>",
        "h2dtscpp_convert_func_0016 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0016 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0017', () => {
    try {
      const parsed = doParseTs('h2cpp153.ts', `
        function h2cpp153(p: (p0:object,p1:string)=>void): (p0:object,p1:string)=>void { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, std::string)>",
        "h2dtscpp_convert_func_0017 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, std::string)>",
        "h2dtscpp_convert_func_0017 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp153.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp153') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0017 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0018', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn153', returns: '(p0:object,p1:string)=>void',
          parameters: [{ type: '(p0:object,p1:string)=>void', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias153', alias: '(p0:object,p1:string)=>void', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias153');
      assert.strictEqual(converted.types[0].alias, '(p0:object,p1:string)=>void');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn153');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, std::string)>",
        "h2dtscpp_convert_func_0018 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, std::string)>",
        "h2dtscpp_convert_func_0018 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample153_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn153') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0018 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0019', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass154', alias: '',
          variableList: [{ type: '(p0:object,p1:boolean)=>void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any, bool)>",
        "h2dtscpp_convert_func_0019 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0019 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0020', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun154', returns: '(p0:object,p1:boolean)=>void',
          parameters: [{ type: '(p0:object,p1:boolean)=>void', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun154');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, bool)>",
        "h2dtscpp_convert_func_0020 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, bool)>",
        "h2dtscpp_convert_func_0020 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample154_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun154') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0020 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0021', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass154', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:object,p1:boolean)=>void',
            parameters: [{ type: '(p0:object,p1:boolean)=>void', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(std::any, bool)>",
        "h2dtscpp_convert_func_0021 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<void(std::any, bool)>",
        "h2dtscpp_convert_func_0021 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0021 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0022', () => {
    try {
      const parsed = doParseTs('h2cpp154.ts', `
        function h2cpp154(p: (p0:object,p1:boolean)=>void): (p0:object,p1:boolean)=>void { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, bool)>",
        "h2dtscpp_convert_func_0022 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, bool)>",
        "h2dtscpp_convert_func_0022 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp154.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp154') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0022 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0023', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn154', returns: '(p0:object,p1:boolean)=>void',
          parameters: [{ type: '(p0:object,p1:boolean)=>void', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias154', alias: '(p0:object,p1:boolean)=>void', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias154');
      assert.strictEqual(converted.types[0].alias, '(p0:object,p1:boolean)=>void');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn154');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(std::any, bool)>",
        "h2dtscpp_convert_func_0023 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any, bool)>",
        "h2dtscpp_convert_func_0023 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample154_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn154') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0023 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0024', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass155', alias: '',
          variableList: [{ type: '(p0:number,p1:any)=>void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double, std::any)>",
        "h2dtscpp_convert_func_0024 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0024 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0025', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun155', returns: '(p0:number,p1:any)=>void',
          parameters: [{ type: '(p0:number,p1:any)=>void', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun155');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double, std::any)>",
        "h2dtscpp_convert_func_0025 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, std::any)>",
        "h2dtscpp_convert_func_0025 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample155_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun155') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0025 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0026', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass155', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:number,p1:any)=>void',
            parameters: [{ type: '(p0:number,p1:any)=>void', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(double, std::any)>",
        "h2dtscpp_convert_func_0026 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<void(double, std::any)>",
        "h2dtscpp_convert_func_0026 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0026 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0027', () => {
    try {
      const parsed = doParseTs('h2cpp155.ts', `
        function h2cpp155(p: (p0:number,p1:any)=>void): (p0:number,p1:any)=>void { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double, std::any)>",
        "h2dtscpp_convert_func_0027 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, std::any)>",
        "h2dtscpp_convert_func_0027 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp155.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp155') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0027 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0028', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn155', returns: '(p0:number,p1:any)=>void',
          parameters: [{ type: '(p0:number,p1:any)=>void', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias155', alias: '(p0:number,p1:any)=>void', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias155');
      assert.strictEqual(converted.types[0].alias, '(p0:number,p1:any)=>void');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn155');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double, std::any)>",
        "h2dtscpp_convert_func_0028 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, std::any)>",
        "h2dtscpp_convert_func_0028 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample155_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn155') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0028 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0029', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass156', alias: '',
          variableList: [{ type: '(p0:number,p1:object)=>void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double, std::any)>",
        "h2dtscpp_convert_func_0029 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0029 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0030', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun156', returns: '(p0:number,p1:object)=>void',
          parameters: [{ type: '(p0:number,p1:object)=>void', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun156');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double, std::any)>",
        "h2dtscpp_convert_func_0030 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, std::any)>",
        "h2dtscpp_convert_func_0030 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample156_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun156') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0030 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0031', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass156', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:number,p1:object)=>void',
            parameters: [{ type: '(p0:number,p1:object)=>void', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(double, std::any)>",
        "h2dtscpp_convert_func_0031 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<void(double, std::any)>",
        "h2dtscpp_convert_func_0031 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0031 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0032', () => {
    try {
      const parsed = doParseTs('h2cpp156.ts', `
        function h2cpp156(p: (p0:number,p1:object)=>void): (p0:number,p1:object)=>void { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double, std::any)>",
        "h2dtscpp_convert_func_0032 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, std::any)>",
        "h2dtscpp_convert_func_0032 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp156.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp156') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0032 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0033', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn156', returns: '(p0:number,p1:object)=>void',
          parameters: [{ type: '(p0:number,p1:object)=>void', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias156', alias: '(p0:number,p1:object)=>void', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias156');
      assert.strictEqual(converted.types[0].alias, '(p0:number,p1:object)=>void');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn156');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double, std::any)>",
        "h2dtscpp_convert_func_0033 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, std::any)>",
        "h2dtscpp_convert_func_0033 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample156_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn156') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0033 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0034', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass157', alias: '',
          variableList: [{ type: '(p0:number,p1:string)=>void', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double, std::string)>",
        "h2dtscpp_convert_func_0034 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0034 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0035', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun157', returns: '(p0:number,p1:string)=>void',
          parameters: [{ type: '(p0:number,p1:string)=>void', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun157');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double, std::string)>",
        "h2dtscpp_convert_func_0035 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, std::string)>",
        "h2dtscpp_convert_func_0035 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample157_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun157') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0035 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0036', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass157', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '(p0:number,p1:string)=>void',
            parameters: [{ type: '(p0:number,p1:string)=>void', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<void(double, std::string)>",
        "h2dtscpp_convert_func_0036 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "std::function<void(double, std::string)>",
        "h2dtscpp_convert_func_0036 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0036 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0037', () => {
    try {
      const parsed = doParseTs('h2cpp157.ts', `
        function h2cpp157(p: (p0:number,p1:string)=>void): (p0:number,p1:string)=>void { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double, std::string)>",
        "h2dtscpp_convert_func_0037 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, std::string)>",
        "h2dtscpp_convert_func_0037 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp157.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp157') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0037 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0038', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn157', returns: '(p0:number,p1:string)=>void',
          parameters: [{ type: '(p0:number,p1:string)=>void', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias157', alias: '(p0:number,p1:string)=>void', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias157');
      assert.strictEqual(converted.types[0].alias, '(p0:number,p1:string)=>void');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn157');
      assert.strictEqual(converted.funcs[0].returns, "std::function<void(double, std::string)>",
        "h2dtscpp_convert_func_0038 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, std::string)>",
        "h2dtscpp_convert_func_0038 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample157_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn157') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0038 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0039', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass297', alias: '',
          variableList: [{ type: 'Promise<number>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<number>",
        "h2dtscpp_convert_func_0039 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0039 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0040', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun297', returns: 'Promise<number>',
          parameters: [{ type: 'Promise<number>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun297');
      assert.strictEqual(converted.funcs[0].returns, "Promise<number>",
        "h2dtscpp_convert_func_0040 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Promise<number>",
        "h2dtscpp_convert_func_0040 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample297_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun297') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0040 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0041', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass297', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Promise<number>',
            parameters: [{ type: 'Promise<number>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "Promise<number>",
        "h2dtscpp_convert_func_0041 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "Promise<number>",
        "h2dtscpp_convert_func_0041 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0041 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0042', () => {
    try {
      const parsed = doParseTs('h2cpp297.ts', `function h2cpp297(p: Promise<number>): Promise<number> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Promise<number>",
        "h2dtscpp_convert_func_0042 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Promise<number>",
        "h2dtscpp_convert_func_0042 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp297.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp297') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0042 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0043', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn297', returns: 'Promise<number>',
          parameters: [{ type: 'Promise<number>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias297', alias: 'Promise<number>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias297');
      assert.strictEqual(converted.types[0].alias, 'Promise<number>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn297');
      assert.strictEqual(converted.funcs[0].returns, "Promise<number>",
        "h2dtscpp_convert_func_0043 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Promise<number>",
        "h2dtscpp_convert_func_0043 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample297_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn297') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0043 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0044', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass298', alias: '',
          variableList: [{ type: 'Promise<string>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<string>",
        "h2dtscpp_convert_func_0044 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0044 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0045', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun298', returns: 'Promise<string>',
          parameters: [{ type: 'Promise<string>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun298');
      assert.strictEqual(converted.funcs[0].returns, "Promise<string>",
        "h2dtscpp_convert_func_0045 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Promise<string>",
        "h2dtscpp_convert_func_0045 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample298_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun298') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0045 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0046', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass298', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Promise<string>',
            parameters: [{ type: 'Promise<string>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "Promise<string>",
        "h2dtscpp_convert_func_0046 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "Promise<string>",
        "h2dtscpp_convert_func_0046 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0046 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0047', () => {
    try {
      const parsed = doParseTs('h2cpp298.ts', `function h2cpp298(p: Promise<string>): Promise<string> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Promise<string>",
        "h2dtscpp_convert_func_0047 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Promise<string>",
        "h2dtscpp_convert_func_0047 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp298.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp298') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0047 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0048', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn298', returns: 'Promise<string>',
          parameters: [{ type: 'Promise<string>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias298', alias: 'Promise<string>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias298');
      assert.strictEqual(converted.types[0].alias, 'Promise<string>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn298');
      assert.strictEqual(converted.funcs[0].returns, "Promise<string>",
        "h2dtscpp_convert_func_0048 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Promise<string>",
        "h2dtscpp_convert_func_0048 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample298_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn298') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0048 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0049', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass299', alias: '',
          variableList: [{ type: 'Promise<boolean>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<boolean>",
        "h2dtscpp_convert_func_0049 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0049 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0050', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun299', returns: 'Promise<boolean>',
          parameters: [{ type: 'Promise<boolean>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun299');
      assert.strictEqual(converted.funcs[0].returns, "Promise<boolean>",
        "h2dtscpp_convert_func_0050 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Promise<boolean>",
        "h2dtscpp_convert_func_0050 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample299_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun299') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0050 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0051', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass299', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Promise<boolean>',
            parameters: [{ type: 'Promise<boolean>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "Promise<boolean>",
        "h2dtscpp_convert_func_0051 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "Promise<boolean>",
        "h2dtscpp_convert_func_0051 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0051 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0052', () => {
    try {
      const parsed = doParseTs('h2cpp299.ts', `function h2cpp299(p: Promise<boolean>): Promise<boolean> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Promise<boolean>",
        "h2dtscpp_convert_func_0052 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Promise<boolean>",
        "h2dtscpp_convert_func_0052 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp299.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp299') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0052 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0053', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn299', returns: 'Promise<boolean>',
          parameters: [{ type: 'Promise<boolean>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias299', alias: 'Promise<boolean>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias299');
      assert.strictEqual(converted.types[0].alias, 'Promise<boolean>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn299');
      assert.strictEqual(converted.funcs[0].returns, "Promise<boolean>",
        "h2dtscpp_convert_func_0053 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Promise<boolean>",
        "h2dtscpp_convert_func_0053 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample299_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn299') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0053 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0054', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass300', alias: '',
          variableList: [{ type: 'Promise<void>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<void>",
        "h2dtscpp_convert_func_0054 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0054 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0055', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun300', returns: 'Promise<void>',
          parameters: [{ type: 'Promise<void>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun300');
      assert.strictEqual(converted.funcs[0].returns, "Promise<void>",
        "h2dtscpp_convert_func_0055 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Promise<void>",
        "h2dtscpp_convert_func_0055 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample300_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun300') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0055 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0056', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass300', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Promise<void>',
            parameters: [{ type: 'Promise<void>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "Promise<void>",
        "h2dtscpp_convert_func_0056 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "Promise<void>",
        "h2dtscpp_convert_func_0056 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0056 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0057', () => {
    try {
      const parsed = doParseTs('h2cpp300.ts', `function h2cpp300(p: Promise<void>): Promise<void> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "Promise<void>",
        "h2dtscpp_convert_func_0057 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Promise<void>",
        "h2dtscpp_convert_func_0057 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp300.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp300') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0057 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0058', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn300', returns: 'Promise<void>',
          parameters: [{ type: 'Promise<void>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias300', alias: 'Promise<void>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias300');
      assert.strictEqual(converted.types[0].alias, 'Promise<void>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn300');
      assert.strictEqual(converted.funcs[0].returns, "Promise<void>",
        "h2dtscpp_convert_func_0058 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Promise<void>",
        "h2dtscpp_convert_func_0058 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample300_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn300') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0058 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0059', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass306', alias: '',
          variableList: [{ type: '((a: number)=> number)', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<double(double)>",
        "h2dtscpp_convert_func_0059 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0059 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0060', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun306', returns: '((a: number)=> number)',
          parameters: [{ type: '((a: number)=> number)', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun306');
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(double)>",
        "h2dtscpp_convert_func_0060 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(double)>",
        "h2dtscpp_convert_func_0060 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample306_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('globalRun306') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0060 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0061', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass306', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '((a: number)=> number)',
            parameters: [{ type: '((a: number)=> number)', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "std::function<double(double)>",
        "h2dtscpp_convert_func_0061 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "std::function<double(double)>",
        "h2dtscpp_convert_func_0061 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0061 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0062', () => {
    try {
      const parsed = doParseTs('h2cpp306.ts', `
        function h2cpp306(p: ((a: number)=> number)): ((a: number)=> number) { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(double)>",
        "h2dtscpp_convert_func_0062 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(double)>",
        "h2dtscpp_convert_func_0062 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp306.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('h2cpp306') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0062 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_convert_func_0063', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn306', returns: '((a: number)=> number)',
          parameters: [{ type: '((a: number)=> number)', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias306', alias: '((a: number)=> number)', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias306');
      assert.strictEqual(converted.types[0].alias, '((a: number)=> number)');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn306');
      assert.strictEqual(converted.funcs[0].returns, "std::function<double(double)>",
        "h2dtscpp_convert_func_0063 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(double)>",
        "h2dtscpp_convert_func_0063 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample306_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('typeFn306') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_func_0063 execution error: ${String(err)}`);
    }
  });
});
