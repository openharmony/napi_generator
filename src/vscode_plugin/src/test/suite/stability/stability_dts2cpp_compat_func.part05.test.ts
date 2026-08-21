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
import { doParseTs } from '../../../parse/parsets';
import { runCompatSafe } from './stability_helpers';

suite('Stability_DTS2CPP_COMPAT_FUNC_Part05', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_COMPAT_FUNC_Part05.');


  test('dts2cpp_compat_func_0001', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat54.ts', `class Compat54 { field: (p0:number,p1:number)=>void; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0001 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0001 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "dts2cpp_compat_func_0001 must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_func_0001 must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double, double)>",
          "dts2cpp_compat_func_0001_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0001 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0002', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat54.ts', `type Compat54 = { x: (p0:number,p1:number)=>void; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0002 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0002 convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1, "dts2cpp_compat_func_0002 must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: (p0:number,p1:number)=>void; }", "dts2cpp_compat_func_0002_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0002 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0003', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat54.ts', `function compat54(a: (p0:number,p1:number)=>void,): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0003 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0003 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0003 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0003 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, double)>",
          "dts2cpp_compat_func_0003_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0003 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0004', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat54.ts', `function compat54(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0004 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0004 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0004 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0004 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_func_0004 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0004 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0005', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat55.ts', `function compat55(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0005 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0005 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0005 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0005 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_func_0005 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0005 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0006', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat55.ts', `function compat55(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0006 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0006 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0006 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0006 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_func_0006 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0006 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0007', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat55.ts', `function compat55(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0007 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0007 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0007 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0007 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_func_0007 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0007 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0008', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat55.ts', `function compat55(a: (p0:number,p1:boolean)=>void): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0008 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0008 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0008 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0008 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, bool)>",
          "dts2cpp_compat_func_0008_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0008 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0009', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat55.ts', `function compat55(a: (p0:numbr,p1:boolea)=>vod): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0009 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0009 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0009 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0009 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<vod(numbr, boolea)>",
          "dts2cpp_compat_func_0009_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0009 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0010', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat55.ts', `function compat55(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0010 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0010 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0010 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0010 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny", "dts2cpp_compat_func_0010 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0010 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0011', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat55.ts', `class Compat55 { field: (p0:number,p1:boolean)=>void; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0011 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0011 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "dts2cpp_compat_func_0011 must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_func_0011 must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double, bool)>",
          "dts2cpp_compat_func_0011_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0011 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0012', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat55.ts', `type Compat55 = { x: (p0:number,p1:boolean)=>void; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0012 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0012 convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1, "dts2cpp_compat_func_0012 must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: (p0:number,p1:boolean)=>void; }",
          "dts2cpp_compat_func_0012_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0012 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0013', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat55.ts', `function compat55(a: (p0:number,p1:boolean)=>void,): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0013 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0013 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0013 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0013 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double, bool)>",
          "dts2cpp_compat_func_0013_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0013 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0014', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat55.ts', `function compat55(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0014 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0014 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0014 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0014 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_func_0014 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0014 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0015', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat56.ts', `function compat56(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0015 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0015 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0015 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0015 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_func_0015 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0015 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0016', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat56.ts', `function compat56(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0016 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0016 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0016 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0016 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_func_0016 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0016 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0017', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat56.ts', `function compat56(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0017 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0017 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0017 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0017 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_func_0017 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0017 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0018', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat56.ts', `function compat56(a: (p0:string,p1:string)=>void): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0018 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0018 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0018 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0018 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::string, std::string)>",
          "dts2cpp_compat_func_0018_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0018 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0019', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat56.ts', `function compat56(a: (p0:strng,p1:strng)=>vod): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0019 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0019 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0019 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0019 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<vod(strng, strng)>",
          "dts2cpp_compat_func_0019_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0019 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0020', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat56.ts', `function compat56(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0020 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0020 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0020 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0020 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny", "dts2cpp_compat_func_0020 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0020 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0021', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat56.ts', `class Compat56 { field: (p0:string,p1:string)=>void; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0021 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0021 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "dts2cpp_compat_func_0021 must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_func_0021 must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::string, std::string)>",
          "dts2cpp_compat_func_0021_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0021 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0022', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat56.ts', `type Compat56 = { x: (p0:string,p1:string)=>void; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0022 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0022 convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1, "dts2cpp_compat_func_0022 must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: (p0:string,p1:string)=>void; }", "dts2cpp_compat_func_0022_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0022 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0023', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat56.ts', `function compat56(a: (p0:string,p1:string)=>void,): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0023 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0023 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0023 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0023 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::string, std::string)>",
          "dts2cpp_compat_func_0023_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0023 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0024', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat56.ts', `function compat56(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0024 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0024 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0024 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0024 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_func_0024 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0024 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0025', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat57.ts', `function compat57(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0025 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0025 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0025 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0025 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_func_0025 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0025 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0026', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat57.ts', `function compat57(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0026 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0026 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0026 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0026 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_func_0026 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0026 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0027', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat57.ts', `function compat57(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0027 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0027 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0027 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0027 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_func_0027 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0027 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0028', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat57.ts', `function compat57(a: (p0:boolean,p1:number)=>void): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0028 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0028 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0028 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0028 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(bool, double)>",
          "dts2cpp_compat_func_0028_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0028 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0029', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat57.ts', `function compat57(a: (p0:boolea,p1:numbr)=>vod): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0029 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0029 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0029 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0029 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<vod(boolea, numbr)>",
          "dts2cpp_compat_func_0029_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0029 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0030', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat57.ts', `function compat57(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0030 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0030 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0030 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0030 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny", "dts2cpp_compat_func_0030 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0030 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0031', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat57.ts', `class Compat57 { field: (p0:boolean,p1:number)=>void; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0031 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0031 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "dts2cpp_compat_func_0031 must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_func_0031 must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(bool, double)>",
          "dts2cpp_compat_func_0031_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0031 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0032', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat57.ts', `type Compat57 = { x: (p0:boolean,p1:number)=>void; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0032 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0032 convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1, "dts2cpp_compat_func_0032 must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: (p0:boolean,p1:number)=>void; }",
          "dts2cpp_compat_func_0032_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0032 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0033', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat57.ts', `function compat57(a: (p0:boolean,p1:number)=>void,): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0033 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0033 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0033 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0033 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(bool, double)>",
          "dts2cpp_compat_func_0033_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0033 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0034', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat57.ts', `function compat57(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0034 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0034 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0034 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0034 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_func_0034 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0034 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0035', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat58.ts', `function compat58(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0035 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0035 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0035 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0035 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_func_0035 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0035 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0036', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat58.ts', `function compat58(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0036 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0036 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0036 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0036 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_func_0036 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0036 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0037', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat58.ts', `function compat58(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0037 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0037 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0037 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0037 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_func_0037 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0037 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0038', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat58.ts', `function compat58(a: (p0:boolean,p1:boolean)=>void): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0038 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0038 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0038 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0038 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(bool, bool)>",
          "dts2cpp_compat_func_0038_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0038 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0039', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat58.ts', `function compat58(a: (p0:boolea,p1:boolea)=>vod): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0039 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0039 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0039 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0039 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<vod(boolea, boolea)>",
          "dts2cpp_compat_func_0039_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0039 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0040', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat58.ts', `function compat58(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0040 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0040 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0040 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0040 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny", "dts2cpp_compat_func_0040 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0040 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0041', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat58.ts', `class Compat58 { field: (p0:boolean,p1:boolean)=>void; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0041 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0041 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "dts2cpp_compat_func_0041 must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_func_0041 must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(bool, bool)>",
          "dts2cpp_compat_func_0041_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0041 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0042', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat58.ts', `type Compat58 = { x: (p0:boolean,p1:boolean)=>void; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0042 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0042 convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1, "dts2cpp_compat_func_0042 must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: (p0:boolean,p1:boolean)=>void; }",
          "dts2cpp_compat_func_0042_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0042 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0043', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat58.ts', `function compat58(a: (p0:boolean,p1:boolean)=>void,): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0043 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0043 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0043 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0043 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(bool, bool)>",
          "dts2cpp_compat_func_0043_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0043 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0044', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat58.ts', `function compat58(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0044 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0044 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0044 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0044 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_func_0044 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0044 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0045', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat69.ts', `function compat69(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0045 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0045 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0045 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0045 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_func_0045 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0045 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0046', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat69.ts', `function compat69(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0046 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0046 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0046 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0046 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_func_0046 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0046 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0047', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat69.ts', `function compat69(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0047 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0047 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0047 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0047 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_func_0047 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0047 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0048', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat69.ts', `function compat69(a: Callback<any>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0048 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0048 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0048 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0048 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any)>",
          "dts2cpp_compat_func_0048_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0048 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0049', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat69.ts', `function compat69(a: BadType69_Callback_any_): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0049 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0049 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0049 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0049 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType69_Callback_any_",
          "dts2cpp_compat_func_0049_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0049 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0050', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat69.ts', `function compat69(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0050 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0050 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0050 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0050 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny", "dts2cpp_compat_func_0050 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0050 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0051', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat69.ts', `class Compat69 { field: Callback<any>; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0051 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0051 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "dts2cpp_compat_func_0051 must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_func_0051 must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any)>",
          "dts2cpp_compat_func_0051_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0051 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0052', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat69.ts', `type Compat69 = { x: Callback<any>; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0052 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0052 convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1, "dts2cpp_compat_func_0052 must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: Callback<any>; }", "dts2cpp_compat_func_0052_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0052 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0053', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat69.ts', `function compat69(a: Callback<any>,): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0053 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0053 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0053 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0053 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any)>",
          "dts2cpp_compat_func_0053_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0053 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0054', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat69.ts', `function compat69(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0054 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0054 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0054 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0054 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_func_0054 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0054 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0055', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat70.ts', `function compat70(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0055 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0055 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0055 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0055 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_func_0055 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0055 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0056', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat70.ts', `function compat70(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0056 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0056 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0056 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0056 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_func_0056 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0056 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0057', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat70.ts', `function compat70(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0057 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0057 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0057 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0057 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_func_0057 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0057 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0058', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat70.ts', `function compat70(a: Callback<object>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0058 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0058 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0058 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0058 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any)>",
          "dts2cpp_compat_func_0058_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0058 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0059', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat70.ts', `function compat70(a: BadType70_Callback_object_): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0059 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0059 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0059 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0059 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType70_Callback_object_",
          "dts2cpp_compat_func_0059_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0059 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0060', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat70.ts', `function compat70(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0060 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0060 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0060 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0060 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny", "dts2cpp_compat_func_0060 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0060 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0061', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat70.ts', `class Compat70 { field: Callback<object>; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0061 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0061 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "dts2cpp_compat_func_0061 must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_func_0061 must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::any)>",
          "dts2cpp_compat_func_0061_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0061 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0062', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat70.ts', `type Compat70 = { x: Callback<object>; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0062 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0062 convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1, "dts2cpp_compat_func_0062 must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: Callback<object>; }", "dts2cpp_compat_func_0062_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0062 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0063', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat70.ts', `function compat70(a: Callback<object>,): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0063 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0063 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0063 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0063 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::any)>",
          "dts2cpp_compat_func_0063_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0063 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0064', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat70.ts', `function compat70(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0064 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0064 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0064 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0064 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_func_0064 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0064 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0065', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat71.ts', `function compat71(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0065 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0065 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0065 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0065 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_func_0065 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0065 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0066', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat71.ts', `function compat71(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0066 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0066 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0066 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0066 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_func_0066 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0066 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0067', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat71.ts', `function compat71(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0067 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0067 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0067 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0067 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_func_0067 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0067 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0068', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat71.ts', `function compat71(a: Callback<any[[>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0068 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0068 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0068 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0068 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(any[[)>",
          "dts2cpp_compat_func_0068_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0068 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0069', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat71.ts', `function compat71(a: BadType71_Callback_any___): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0069 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0069 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0069 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0069 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType71_Callback_any___",
          "dts2cpp_compat_func_0069_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0069 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0070', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat71.ts', `function compat71(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0070 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0070 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0070 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0070 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny", "dts2cpp_compat_func_0070 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0070 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0071', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat71.ts', `class Compat71 { field: Callback<any[]>; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0071 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0071 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "dts2cpp_compat_func_0071 must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_func_0071 must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(any[])>",
          "dts2cpp_compat_func_0071_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0071 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0072', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat71.ts', `type Compat71 = { x: Callback<any[]>; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0072 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0072 convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1, "dts2cpp_compat_func_0072 must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: Callback<any[]>; }", "dts2cpp_compat_func_0072_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0072 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0073', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat71.ts', `function compat71(a: Callback<any[]>,): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0073 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0073 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0073 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0073 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(any[])>",
          "dts2cpp_compat_func_0073_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0073 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0074', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat71.ts', `function compat71(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0074 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0074 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0074 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0074 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_func_0074 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0074 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0075', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat72.ts', `function compat72(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0075 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0075 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0075 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0075 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_func_0075 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0075 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0076', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat72.ts', `function compat72(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0076 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0076 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0076 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0076 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_func_0076 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0076 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0077', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat72.ts', `function compat72(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0077 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0077 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0077 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0077 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_func_0077 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0077 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0078', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat72.ts', `function compat72(a: Callback<object[[>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0078 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0078 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0078 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0078 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(object[[)>",
          "dts2cpp_compat_func_0078_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0078 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0079', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat72.ts', `function compat72(a: BadType72_Callback_object___): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0079 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0079 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0079 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0079 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType72_Callback_object___",
          "dts2cpp_compat_func_0079_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0079 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0080', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat72.ts', `function compat72(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0080 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0080 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0080 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0080 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny", "dts2cpp_compat_func_0080 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0080 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0081', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat72.ts', `class Compat72 { field: Callback<object[]>; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0081 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0081 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "dts2cpp_compat_func_0081 must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_func_0081 must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(object[])>",
          "dts2cpp_compat_func_0081_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0081 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0082', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat72.ts', `type Compat72 = { x: Callback<object[]>; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0082 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0082 convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1, "dts2cpp_compat_func_0082 must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: Callback<object[]>; }", "dts2cpp_compat_func_0082_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0082 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0083', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat72.ts', `function compat72(a: Callback<object[]>,): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0083 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0083 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0083 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0083 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(object[])>",
          "dts2cpp_compat_func_0083_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0083 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0084', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat72.ts', `function compat72(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0084 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0084 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0084 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0084 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_func_0084 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0084 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0085', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat73.ts', `function compat73(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0085 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0085 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0085 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0085 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_func_0085 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0085 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0086', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat73.ts', `function compat73(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0086 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0086 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0086 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0086 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_func_0086 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0086 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0087', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat73.ts', `function compat73(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0087 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0087 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0087 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0087 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_func_0087 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0087 execution error: ${String(err)}`);
    }
  });
});
