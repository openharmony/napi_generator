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

suite('Stability_DTS2CPP_COMPAT_FUNC_Part02', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_COMPAT_FUNC_Part02.');


  test('dts2cpp_compat_func_0001', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat28.ts', `type Compat28 = { x: (p0:string)=>number; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0001 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0001 convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1, "dts2cpp_compat_func_0001 must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: (p0:string)=>number; }", "dts2cpp_compat_func_0001_alias");
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
        const parsed = doParseTs('compat28.ts', `function compat28(a: (p0:string)=>number,): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0002 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0002 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0002 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0002 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(std::string)>",
          "dts2cpp_compat_func_0002_param convert output");
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
        const parsed = doParseTs('compat28.ts', `function compat28(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0003 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0003 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0003 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0003 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_func_0003 param type");
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
        const parsed = doParseTs('compat29.ts', `function compat29(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0004 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0004 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0004 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0004 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_func_0004 param type");
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
        const parsed = doParseTs('compat29.ts', `function compat29(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0005 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0005 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0005 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0005 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_func_0005 param type");
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
        const parsed = doParseTs('compat29.ts', `function compat29(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0006 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0006 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0006 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0006 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_func_0006 param type");
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
        const parsed = doParseTs('compat29.ts', `function compat29(a: (p0:boolean)=>number): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0007 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0007 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0007 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0007 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(bool)>",
          "dts2cpp_compat_func_0007_param");
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
        const parsed = doParseTs('compat29.ts', `function compat29(a: (p0:boolea)=>numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0008 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0008 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0008 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0008 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<numbr(boolea)>",
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
        const parsed = doParseTs('compat29.ts', `function compat29(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0009 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0009 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0009 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0009 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny", "dts2cpp_compat_func_0009 param type");
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
        const parsed = doParseTs('compat29.ts', `class Compat29 { field: (p0:boolean)=>number; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0010 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0010 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "dts2cpp_compat_func_0010 must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_func_0010 must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<double(bool)>",
          "dts2cpp_compat_func_0010_field convert output");
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
        const parsed = doParseTs('compat29.ts', `type Compat29 = { x: (p0:boolean)=>number; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0011 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0011 convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1, "dts2cpp_compat_func_0011 must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: (p0:boolean)=>number; }", "dts2cpp_compat_func_0011_alias");
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
        const parsed = doParseTs('compat29.ts', `function compat29(a: (p0:boolean)=>number,): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0012 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0012 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0012 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0012 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(bool)>",
          "dts2cpp_compat_func_0012_param convert output");
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
        const parsed = doParseTs('compat29.ts', `function compat29(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0013 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0013 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0013 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0013 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_func_0013 param type");
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
        const parsed = doParseTs('compat30.ts', `function compat30(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0014 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0014 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0014 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0014 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_func_0014 param type");
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
        const parsed = doParseTs('compat30.ts', `function compat30(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0015 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0015 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0015 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0015 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_func_0015 param type");
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
        const parsed = doParseTs('compat30.ts', `function compat30(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0016 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0016 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0016 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0016 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_func_0016 param type");
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
        const parsed = doParseTs('compat30.ts', `function compat30(a: (p0:number)=>string): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0017 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0017 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0017 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0017 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(double)>",
          "dts2cpp_compat_func_0017_param");
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
        const parsed = doParseTs('compat30.ts', `function compat30(a: (p0:numbr)=>strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0018 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0018 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0018 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0018 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<strng(numbr)>",
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
        const parsed = doParseTs('compat30.ts', `function compat30(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0019 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0019 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0019 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0019 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny", "dts2cpp_compat_func_0019 param type");
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
        const parsed = doParseTs('compat30.ts', `class Compat30 { field: (p0:number)=>string; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0020 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0020 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "dts2cpp_compat_func_0020 must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_func_0020 must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::string(double)>",
          "dts2cpp_compat_func_0020_field convert output");
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
        const parsed = doParseTs('compat30.ts', `type Compat30 = { x: (p0:number)=>string; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0021 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0021 convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1, "dts2cpp_compat_func_0021 must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: (p0:number)=>string; }", "dts2cpp_compat_func_0021_alias");
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
        const parsed = doParseTs('compat30.ts', `function compat30(a: (p0:number)=>string,): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0022 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0022 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0022 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0022 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(double)>",
          "dts2cpp_compat_func_0022_param convert output");
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
        const parsed = doParseTs('compat30.ts', `function compat30(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0023 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0023 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0023 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0023 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_func_0023 param type");
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
        const parsed = doParseTs('compat31.ts', `function compat31(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0024 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0024 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0024 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0024 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_func_0024 param type");
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
        const parsed = doParseTs('compat31.ts', `function compat31(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0025 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0025 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0025 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0025 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_func_0025 param type");
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
        const parsed = doParseTs('compat31.ts', `function compat31(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0026 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0026 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0026 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0026 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_func_0026 param type");
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
        const parsed = doParseTs('compat31.ts', `function compat31(a: (p0:string)=>string): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0027 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0027 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0027 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0027 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(std::string)>",
          "dts2cpp_compat_func_0027_param");
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
        const parsed = doParseTs('compat31.ts', `function compat31(a: (p0:strng)=>strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0028 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0028 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0028 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0028 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<strng(strng)>",
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
        const parsed = doParseTs('compat31.ts', `function compat31(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0029 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0029 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0029 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0029 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny", "dts2cpp_compat_func_0029 param type");
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
        const parsed = doParseTs('compat31.ts', `class Compat31 { field: (p0:string)=>string; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0030 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0030 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "dts2cpp_compat_func_0030 must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_func_0030 must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::string(std::string)>",
          "dts2cpp_compat_func_0030_field convert output");
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
        const parsed = doParseTs('compat31.ts', `type Compat31 = { x: (p0:string)=>string; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0031 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0031 convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1, "dts2cpp_compat_func_0031 must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: (p0:string)=>string; }", "dts2cpp_compat_func_0031_alias");
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
        const parsed = doParseTs('compat31.ts', `function compat31(a: (p0:string)=>string,): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0032 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0032 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0032 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0032 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(std::string)>",
          "dts2cpp_compat_func_0032_param convert output");
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
        const parsed = doParseTs('compat31.ts', `function compat31(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0033 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0033 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0033 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0033 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_func_0033 param type");
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
        const parsed = doParseTs('compat32.ts', `function compat32(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0034 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0034 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0034 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0034 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_func_0034 param type");
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
        const parsed = doParseTs('compat32.ts', `function compat32(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0035 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0035 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0035 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0035 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_func_0035 param type");
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
        const parsed = doParseTs('compat32.ts', `function compat32(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0036 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0036 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0036 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0036 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_func_0036 param type");
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
        const parsed = doParseTs('compat32.ts', `function compat32(a: (p0:boolean)=>string): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0037 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0037 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0037 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0037 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(bool)>",
          "dts2cpp_compat_func_0037_param");
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
        const parsed = doParseTs('compat32.ts', `function compat32(a: (p0:boolea)=>strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0038 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0038 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0038 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0038 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<strng(boolea)>",
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
        const parsed = doParseTs('compat32.ts', `function compat32(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0039 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0039 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0039 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0039 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny", "dts2cpp_compat_func_0039 param type");
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
        const parsed = doParseTs('compat32.ts', `class Compat32 { field: (p0:boolean)=>string; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0040 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0040 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "dts2cpp_compat_func_0040 must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_func_0040 must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::string(bool)>",
          "dts2cpp_compat_func_0040_field convert output");
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
        const parsed = doParseTs('compat32.ts', `type Compat32 = { x: (p0:boolean)=>string; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0041 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0041 convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1, "dts2cpp_compat_func_0041 must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: (p0:boolean)=>string; }", "dts2cpp_compat_func_0041_alias");
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
        const parsed = doParseTs('compat32.ts', `function compat32(a: (p0:boolean)=>string,): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0042 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0042 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0042 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0042 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(bool)>",
          "dts2cpp_compat_func_0042_param convert output");
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
        const parsed = doParseTs('compat32.ts', `function compat32(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0043 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0043 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0043 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0043 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_func_0043 param type");
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
        const parsed = doParseTs('compat33.ts', `function compat33(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0044 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0044 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0044 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0044 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_func_0044 param type");
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
        const parsed = doParseTs('compat33.ts', `function compat33(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0045 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0045 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0045 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0045 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_func_0045 param type");
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
        const parsed = doParseTs('compat33.ts', `function compat33(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0046 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0046 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0046 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0046 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_func_0046 param type");
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
        const parsed = doParseTs('compat33.ts', `function compat33(a: (p0:number)=>boolean): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0047 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0047 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0047 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0047 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(double)>",
          "dts2cpp_compat_func_0047_param");
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
        const parsed = doParseTs('compat33.ts', `function compat33(a: (p0:numbr)=>boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0048 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0048 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0048 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0048 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<boolea(numbr)>",
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
        const parsed = doParseTs('compat33.ts', `function compat33(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0049 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0049 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0049 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0049 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny", "dts2cpp_compat_func_0049 param type");
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
        const parsed = doParseTs('compat33.ts', `class Compat33 { field: (p0:number)=>boolean; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0050 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0050 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "dts2cpp_compat_func_0050 must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_func_0050 must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(double)>",
          "dts2cpp_compat_func_0050_field convert output");
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
        const parsed = doParseTs('compat33.ts', `type Compat33 = { x: (p0:number)=>boolean; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0051 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0051 convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1, "dts2cpp_compat_func_0051 must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: (p0:number)=>boolean; }", "dts2cpp_compat_func_0051_alias");
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
        const parsed = doParseTs('compat33.ts', `function compat33(a: (p0:number)=>boolean,): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0052 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0052 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0052 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0052 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(double)>",
          "dts2cpp_compat_func_0052_param convert output");
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
        const parsed = doParseTs('compat33.ts', `function compat33(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0053 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0053 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0053 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0053 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_func_0053 param type");
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
        const parsed = doParseTs('compat34.ts', `function compat34(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0054 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0054 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0054 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0054 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_func_0054 param type");
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
        const parsed = doParseTs('compat34.ts', `function compat34(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0055 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0055 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0055 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0055 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_func_0055 param type");
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
        const parsed = doParseTs('compat34.ts', `function compat34(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0056 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0056 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0056 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0056 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_func_0056 param type");
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
        const parsed = doParseTs('compat34.ts', `function compat34(a: (p0:string)=>boolean): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0057 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0057 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0057 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0057 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(std::string)>",
          "dts2cpp_compat_func_0057_param");
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
        const parsed = doParseTs('compat34.ts', `function compat34(a: (p0:strng)=>boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0058 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0058 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0058 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0058 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<boolea(strng)>",
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
        const parsed = doParseTs('compat34.ts', `function compat34(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0059 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0059 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0059 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0059 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny", "dts2cpp_compat_func_0059 param type");
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
        const parsed = doParseTs('compat34.ts', `class Compat34 { field: (p0:string)=>boolean; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0060 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0060 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "dts2cpp_compat_func_0060 must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_func_0060 must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(std::string)>",
          "dts2cpp_compat_func_0060_field convert output");
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
        const parsed = doParseTs('compat34.ts', `type Compat34 = { x: (p0:string)=>boolean; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0061 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0061 convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1, "dts2cpp_compat_func_0061 must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: (p0:string)=>boolean; }", "dts2cpp_compat_func_0061_alias");
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
        const parsed = doParseTs('compat34.ts', `function compat34(a: (p0:string)=>boolean,): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0062 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0062 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0062 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0062 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(std::string)>",
          "dts2cpp_compat_func_0062_param convert output");
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
        const parsed = doParseTs('compat34.ts', `function compat34(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0063 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0063 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0063 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0063 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_func_0063 param type");
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
        const parsed = doParseTs('compat35.ts', `function compat35(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0064 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0064 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0064 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0064 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_func_0064 param type");
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
        const parsed = doParseTs('compat35.ts', `function compat35(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0065 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0065 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0065 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0065 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_func_0065 param type");
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
        const parsed = doParseTs('compat35.ts', `function compat35(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0066 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0066 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0066 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0066 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_func_0066 param type");
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
        const parsed = doParseTs('compat35.ts', `function compat35(a: (p0:boolean)=>boolean): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0067 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0067 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0067 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0067 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(bool)>",
          "dts2cpp_compat_func_0067_param");
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
        const parsed = doParseTs('compat35.ts', `function compat35(a: (p0:boolea)=>boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0068 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0068 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0068 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0068 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<boolea(boolea)>",
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
        const parsed = doParseTs('compat35.ts', `function compat35(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0069 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0069 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0069 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0069 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny", "dts2cpp_compat_func_0069 param type");
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
        const parsed = doParseTs('compat35.ts', `class Compat35 { field: (p0:boolean)=>boolean; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0070 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0070 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "dts2cpp_compat_func_0070 must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_func_0070 must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(bool)>",
          "dts2cpp_compat_func_0070_field convert output");
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
        const parsed = doParseTs('compat35.ts', `type Compat35 = { x: (p0:boolean)=>boolean; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0071 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0071 convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1, "dts2cpp_compat_func_0071 must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: (p0:boolean)=>boolean; }", "dts2cpp_compat_func_0071_alias");
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
        const parsed = doParseTs('compat35.ts', `function compat35(a: (p0:boolean)=>boolean,): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0072 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0072 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0072 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0072 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(bool)>",
          "dts2cpp_compat_func_0072_param convert output");
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
        const parsed = doParseTs('compat35.ts', `function compat35(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0073 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0073 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0073 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0073 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_func_0073 param type");
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
        const parsed = doParseTs('compat36.ts', `function compat36(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0074 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0074 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0074 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0074 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_func_0074 param type");
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
        const parsed = doParseTs('compat36.ts', `function compat36(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0075 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0075 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0075 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0075 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_func_0075 param type");
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
        const parsed = doParseTs('compat36.ts', `function compat36(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0076 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0076 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0076 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0076 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_func_0076 param type");
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
        const parsed = doParseTs('compat36.ts', `function compat36(a: (p0:number)=>void): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0077 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0077 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0077 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0077 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double)>",
          "dts2cpp_compat_func_0077_param");
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
        const parsed = doParseTs('compat36.ts', `function compat36(a: (p0:numbr)=>vod): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0078 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0078 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0078 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0078 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<vod(numbr)>",
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
        const parsed = doParseTs('compat36.ts', `function compat36(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0079 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0079 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0079 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0079 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny", "dts2cpp_compat_func_0079 param type");
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
        const parsed = doParseTs('compat36.ts', `class Compat36 { field: (p0:number)=>void; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0080 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0080 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "dts2cpp_compat_func_0080 must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_func_0080 must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double)>",
          "dts2cpp_compat_func_0080_field convert output");
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
        const parsed = doParseTs('compat36.ts', `type Compat36 = { x: (p0:number)=>void; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0081 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0081 convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1, "dts2cpp_compat_func_0081 must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: (p0:number)=>void; }", "dts2cpp_compat_func_0081_alias");
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
        const parsed = doParseTs('compat36.ts', `function compat36(a: (p0:number)=>void,): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0082 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0082 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0082 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0082 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double)>",
          "dts2cpp_compat_func_0082_param convert output");
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
        const parsed = doParseTs('compat36.ts', `function compat36(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0083 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0083 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0083 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0083 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_func_0083 param type");
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
        const parsed = doParseTs('compat37.ts', `function compat37(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0084 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0084 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0084 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0084 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_func_0084 param type");
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
        const parsed = doParseTs('compat37.ts', `function compat37(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0085 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0085 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0085 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0085 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_func_0085 param type");
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
        const parsed = doParseTs('compat37.ts', `function compat37(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0086 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0086 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0086 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0086 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_func_0086 param type");
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
        const parsed = doParseTs('compat37.ts', `function compat37(a: (p0:string)=>void): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_func_0087 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_func_0087 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_func_0087 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_func_0087 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::string)>",
          "dts2cpp_compat_func_0087_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0087 execution error: ${String(err)}`);
    }
  });
});
