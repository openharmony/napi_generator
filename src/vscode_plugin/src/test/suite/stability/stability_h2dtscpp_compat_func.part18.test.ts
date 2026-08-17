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

suite('Stability_H2DTSCPP_COMPAT_FUNC_Part18', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_COMPAT_FUNC_Part18.');


  test('h2dtscpp_compat_func_0001', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C156', alias: '',
            variableList: [{ type: '(p0:number,p1:object)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0001 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0001 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0001 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double, std::any)>",
          "h2dtscpp_compat_func_0001 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0001 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0002', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C156', alias: '',
            variableList: [{ type: '(p0:number,p1:object)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0002 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0002 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0002 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double, std::any)>",
          "h2dtscpp_compat_func_0002 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0002 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0003', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C156', alias: '',
            variableList: [{ type: '(p0:number,p1:object)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0003 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0003 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0003 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double, std::any)>",
          "h2dtscpp_compat_func_0003 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0003 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0004', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C156', alias: '',
            variableList: [{ type: '(p0:number,p1:object)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0004 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0004 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0004 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double, std::any)>",
          "h2dtscpp_compat_func_0004 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0004 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0005', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C156', alias: '',
            variableList: [{ type: '(p0:number,p1:object)=>voi', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0005 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0005 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0005 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<voi(double, std::any)>",
          "h2dtscpp_compat_func_0005 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0005 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0006', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C156', alias: '',
            variableList: [{ type: '(p0:number,p1:object)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0006 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0006 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0006 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double, std::any)>",
          "h2dtscpp_compat_func_0006 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0006 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0007', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C156', alias: '',
            variableList: [{ type: '(p0:number,p1:object)=>void,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0007 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0007 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0007 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void,(double, std::any)>",
          "h2dtscpp_compat_func_0007 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0007 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0008', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C156', alias: '',
            variableList: [{ type: '(p0:number,p1:object)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0008 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0008 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0008 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double, std::any)>",
          "h2dtscpp_compat_func_0008 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0008 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0009', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C156', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0009 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0009 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0009 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ", "h2dtscpp_compat_func_0009 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0009 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0010', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C157', alias: '',
            variableList: [{ type: '(p0:numbr,p1:string)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0010 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0010 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0010 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(numbr, std::string)>",
          "h2dtscpp_compat_func_0010 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0010 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0011', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C157', alias: '',
            variableList: [{ type: '(p0:number,p1:strng)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0011 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0011 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0011 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double, strng)>",
          "h2dtscpp_compat_func_0011 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0011 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0012', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C157', alias: '',
            variableList: [{ type: '(p0:number,p1:string)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0012 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0012 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0012 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double, std::string)>",
          "h2dtscpp_compat_func_0012 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0012 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0013', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C157', alias: '',
            variableList: [{ type: '(p0:number,p1:string)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0013 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0013 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0013 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double, std::string)>",
          "h2dtscpp_compat_func_0013 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0013 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0014', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C157', alias: '',
            variableList: [{ type: '(p0:number,p1:string)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0014 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0014 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0014 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double, std::string)>",
          "h2dtscpp_compat_func_0014 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0014 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0015', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C157', alias: '',
            variableList: [{ type: '(p0:number,p1:string)=>voi', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0015 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0015 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0015 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<voi(double, std::string)>",
          "h2dtscpp_compat_func_0015 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0015 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0016', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C157', alias: '',
            variableList: [{ type: '(p0:number,p1:string)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0016 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0016 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0016 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double, std::string)>",
          "h2dtscpp_compat_func_0016 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0016 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0017', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C157', alias: '',
            variableList: [{ type: '(p0:number,p1:string)=>void,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0017 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0017 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0017 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void,(double, std::string)>",
          "h2dtscpp_compat_func_0017 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0017 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0018', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C157', alias: '',
            variableList: [{ type: '(p0:number,p1:string)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0018 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0018 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0018 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double, std::string)>",
          "h2dtscpp_compat_func_0018 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0018 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0019', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C157', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0019 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0019 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0019 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ", "h2dtscpp_compat_func_0019 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0019 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0020', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C297', alias: '',
            variableList: [{ type: 'Promise<numbr>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0020 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0020 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0020 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<numbr>", "h2dtscpp_compat_func_0020 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0020 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0021', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C297', alias: '',
            variableList: [{ type: 'Promise<number>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0021 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0021 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0021 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<number>",
          "h2dtscpp_compat_func_0021 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0021 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0022', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C297', alias: '',
            variableList: [{ type: 'Promise<number>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0022 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0022 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0022 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<number>",
          "h2dtscpp_compat_func_0022 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0022 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0023', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C297', alias: '',
            variableList: [{ type: 'Promise<number>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0023 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0023 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0023 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<number>",
          "h2dtscpp_compat_func_0023 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0023 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0024', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C297', alias: '',
            variableList: [{ type: 'Promisenumber>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0024 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0024 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0024 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promisenumber>", "h2dtscpp_compat_func_0024 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0024 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0025', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C297', alias: '',
            variableList: [{ type: 'Promise<number', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0025 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0025 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0025 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<number", "h2dtscpp_compat_func_0025 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0025 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0026', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C297', alias: '',
            variableList: [{ type: 'Promise<number>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0026 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0026 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0026 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<number>",
          "h2dtscpp_compat_func_0026 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0026 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0027', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C297', alias: '',
            variableList: [{ type: 'Promise<number>,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0027 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0027 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0027 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<number>,",
          "h2dtscpp_compat_func_0027 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0027 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0028', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C297', alias: '',
            variableList: [{ type: 'Promise<number>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0028 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0028 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0028 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<number>",
          "h2dtscpp_compat_func_0028 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0028 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0029', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C297', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0029 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0029 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0029 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ", "h2dtscpp_compat_func_0029 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0029 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0030', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C298', alias: '',
            variableList: [{ type: 'Promise<string>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0030 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0030 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0030 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<string>",
          "h2dtscpp_compat_func_0030 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0030 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0031', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C298', alias: '',
            variableList: [{ type: 'Promise<strng>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0031 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0031 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0031 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<strng>", "h2dtscpp_compat_func_0031 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0031 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0032', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C298', alias: '',
            variableList: [{ type: 'Promise<string>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0032 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0032 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0032 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<string>",
          "h2dtscpp_compat_func_0032 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0032 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0033', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C298', alias: '',
            variableList: [{ type: 'Promise<string>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0033 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0033 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0033 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<string>",
          "h2dtscpp_compat_func_0033 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0033 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0034', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C298', alias: '',
            variableList: [{ type: 'Promisestring>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0034 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0034 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0034 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promisestring>", "h2dtscpp_compat_func_0034 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0034 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0035', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C298', alias: '',
            variableList: [{ type: 'Promise<string', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0035 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0035 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0035 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<string", "h2dtscpp_compat_func_0035 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0035 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0036', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C298', alias: '',
            variableList: [{ type: 'Promise<string>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0036 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0036 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0036 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<string>",
          "h2dtscpp_compat_func_0036 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0036 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0037', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C298', alias: '',
            variableList: [{ type: 'Promise<string>,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0037 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0037 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0037 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<string>,",
          "h2dtscpp_compat_func_0037 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0037 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0038', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C298', alias: '',
            variableList: [{ type: 'Promise<string>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0038 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0038 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0038 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<string>",
          "h2dtscpp_compat_func_0038 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0038 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0039', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C298', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0039 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0039 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0039 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ", "h2dtscpp_compat_func_0039 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0039 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0040', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C299', alias: '',
            variableList: [{ type: 'Promise<boolean>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0040 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0040 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0040 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<boolean>",
          "h2dtscpp_compat_func_0040 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0040 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0041', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C299', alias: '',
            variableList: [{ type: 'Promise<boolean>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0041 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0041 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0041 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<boolean>",
          "h2dtscpp_compat_func_0041 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0041 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0042', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C299', alias: '',
            variableList: [{ type: 'Promise<boolea>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0042 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0042 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0042 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<boolea>",
          "h2dtscpp_compat_func_0042 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0042 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0043', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C299', alias: '',
            variableList: [{ type: 'Promise<boolean>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0043 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0043 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0043 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<boolean>",
          "h2dtscpp_compat_func_0043 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0043 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0044', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C299', alias: '',
            variableList: [{ type: 'Promiseboolean>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0044 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0044 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0044 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promiseboolean>",
          "h2dtscpp_compat_func_0044 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0044 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0045', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C299', alias: '',
            variableList: [{ type: 'Promise<boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0045 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0045 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0045 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<boolean",
          "h2dtscpp_compat_func_0045 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0045 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0046', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C299', alias: '',
            variableList: [{ type: 'Promise<boolean>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0046 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0046 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0046 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<boolean>",
          "h2dtscpp_compat_func_0046 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0046 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0047', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C299', alias: '',
            variableList: [{ type: 'Promise<boolean>,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0047 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0047 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0047 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<boolean>,",
          "h2dtscpp_compat_func_0047 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0047 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0048', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C299', alias: '',
            variableList: [{ type: 'Promise<boolean>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0048 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0048 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0048 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<boolean>",
          "h2dtscpp_compat_func_0048 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0048 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0049', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C299', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0049 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0049 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0049 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ", "h2dtscpp_compat_func_0049 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0049 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0050', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C300', alias: '',
            variableList: [{ type: 'Promise<void>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0050 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0050 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0050 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<void>", "h2dtscpp_compat_func_0050 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0050 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0051', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C300', alias: '',
            variableList: [{ type: 'Promise<void>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0051 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0051 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0051 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<void>", "h2dtscpp_compat_func_0051 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0051 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0052', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C300', alias: '',
            variableList: [{ type: 'Promise<void>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0052 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0052 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0052 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<void>", "h2dtscpp_compat_func_0052 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0052 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0053', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C300', alias: '',
            variableList: [{ type: 'Promise<void>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0053 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0053 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0053 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<void>", "h2dtscpp_compat_func_0053 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0053 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0054', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C300', alias: '',
            variableList: [{ type: 'Promisevoid>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0054 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0054 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0054 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promisevoid>", "h2dtscpp_compat_func_0054 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0054 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0055', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C300', alias: '',
            variableList: [{ type: 'Promise<void', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0055 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0055 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0055 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<void", "h2dtscpp_compat_func_0055 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0055 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0056', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C300', alias: '',
            variableList: [{ type: 'Promise<void>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0056 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0056 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0056 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<void>", "h2dtscpp_compat_func_0056 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0056 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0057', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C300', alias: '',
            variableList: [{ type: 'Promise<void>,', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0057 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0057 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0057 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<void>,", "h2dtscpp_compat_func_0057 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0057 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0058', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C300', alias: '',
            variableList: [{ type: 'Promise<void>', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0058 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0058 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0058 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Promise<void>", "h2dtscpp_compat_func_0058 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0058 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0059', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C300', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0059 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0059 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0059 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ", "h2dtscpp_compat_func_0059 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0059 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0060', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C306', alias: '',
            variableList: [{ type: '((a: numbr)=> numbr)', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0060 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0060 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0060 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<numbr(numbr)>",
          "h2dtscpp_compat_func_0060 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0060 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0061', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C306', alias: '',
            variableList: [{ type: '((a: number)=> number)', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0061 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0061 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0061 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<double(double)>",
          "h2dtscpp_compat_func_0061 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0061 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0062', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C306', alias: '',
            variableList: [{ type: '((a: number)=> number)', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0062 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0062 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0062 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<double(double)>",
          "h2dtscpp_compat_func_0062 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0062 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0063', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C306', alias: '',
            variableList: [{ type: '((a: number)=> number)', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0063 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0063 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0063 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<double(double)>",
          "h2dtscpp_compat_func_0063 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0063 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0064', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C306', alias: '',
            variableList: [{ type: '((a: number)=> number)', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0064 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0064 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0064 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<double(double)>",
          "h2dtscpp_compat_func_0064 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0064 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0065', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C306', alias: '',
            variableList: [{ type: '((a: number)=> number', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0065 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0065 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0065 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<double(double)>",
          "h2dtscpp_compat_func_0065 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0065 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0066', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C306', alias: '',
            variableList: [{ type: '((a: number)=> number)', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0066 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0066 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0066 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<double(double)>",
          "h2dtscpp_compat_func_0066 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0066 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0067', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C306', alias: '',
            variableList: [{ type: '((a: number)=> number),', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0067 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0067 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0067 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<double(double)>",
          "h2dtscpp_compat_func_0067 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0067 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0068', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C306', alias: '',
            variableList: [{ type: '((a: number)=> number)', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0068 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0068 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0068 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<double(double)>",
          "h2dtscpp_compat_func_0068 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0068 execution error: ${String(err)}`);
    }
  });

  test('h2dtscpp_compat_func_0069', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const converted = transParseObj({
          enums: [], unions: [], structs: [],
          classes: [{ name: 'C306', alias: '',
            variableList: [{ type: 'InvalidTypeXYZ', name: 'v', arraySize: 0, arraySizeList: [] }],
            functionList: []
          }],
          funcs: [], types: []
        });
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "h2dtscpp_compat_func_0069 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "h2dtscpp_compat_func_0069 must have class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "h2dtscpp_compat_func_0069 must have field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "InvalidTypeXYZ", "h2dtscpp_compat_func_0069 field type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dtscpp_compat_func_0069 execution error: ${String(err)}`);
    }
  });
});
