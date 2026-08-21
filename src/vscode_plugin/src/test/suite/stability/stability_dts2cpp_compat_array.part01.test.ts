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

suite('Stability_DTS2CPP_COMPAT_ARRAY_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_COMPAT_ARRAY_Part01.');


  test('dts2cpp_compat_array_0001', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat5.ts', `function compat5(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0001 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0001 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0001 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0001 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_array_0001 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0001 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0002', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat5.ts', `function compat5(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0002 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0002 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0002 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0002 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_array_0002 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0002 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0003', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat5.ts', `function compat5(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0003 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0003 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0003 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0003 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_array_0003 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0003 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0004', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat5.ts', `function compat5(a: Array<number>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0004 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0004 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0004 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0004 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::vector<double>", "dts2cpp_compat_array_0004_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0004 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0005', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat5.ts', `function compat5(a: BadType5_Array_number_): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0005 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0005 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0005 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0005 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType5_Array_number_",
          "dts2cpp_compat_array_0005_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0005 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0006', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat5.ts', `function compat5(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0006 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0006 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0006 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0006 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny", "dts2cpp_compat_array_0006 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0006 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0007', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat5.ts', `class Compat5 { field: Array<number>; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0007 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0007 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "dts2cpp_compat_array_0007 must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_array_0007 must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<double>",
          "dts2cpp_compat_array_0007_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0007 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0008', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat5.ts', `type Compat5 = { x: Array<number>; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0008 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0008 convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1, "dts2cpp_compat_array_0008 must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: Array<number>; }", "dts2cpp_compat_array_0008_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0008 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0009', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat5.ts', `function compat5(a: Array<number>,): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0009 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0009 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0009 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0009 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::vector<double>",
          "dts2cpp_compat_array_0009_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0009 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0010', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat5.ts', `function compat5(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0010 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0010 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0010 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0010 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_array_0010 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0010 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0011', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat6.ts', `function compat6(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0011 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0011 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0011 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0011 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_array_0011 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0011 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0012', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat6.ts', `function compat6(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0012 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0012 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0012 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0012 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_array_0012 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0012 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0013', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat6.ts', `function compat6(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0013 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0013 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0013 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0013 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_array_0013 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0013 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0014', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat6.ts', `function compat6(a: number[[): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0014 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0014 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0014 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0014 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "number[[", "dts2cpp_compat_array_0014_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0014 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0015', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat6.ts', `function compat6(a: BadType6_number__): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0015 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0015 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0015 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0015 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType6_number__", "dts2cpp_compat_array_0015_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0015 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0016', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat6.ts', `function compat6(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0016 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0016 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0016 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0016 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny", "dts2cpp_compat_array_0016 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0016 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0017', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat6.ts', `class Compat6 { field: number[]; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0017 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0017 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "dts2cpp_compat_array_0017 must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_array_0017 must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<double>",
          "dts2cpp_compat_array_0017_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0017 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0018', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat6.ts', `type Compat6 = { x: number[]; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0018 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0018 convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1, "dts2cpp_compat_array_0018 must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: number[]; }", "dts2cpp_compat_array_0018_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0018 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0019', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat6.ts', `function compat6(a: number[],): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0019 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0019 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0019 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0019 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::vector<double>",
          "dts2cpp_compat_array_0019_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0019 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0020', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat6.ts', `function compat6(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0020 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0020 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0020 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0020 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_array_0020 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0020 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0021', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat7.ts', `function compat7(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0021 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0021 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0021 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0021 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_array_0021 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0021 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0022', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat7.ts', `function compat7(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0022 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0022 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0022 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0022 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_array_0022 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0022 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0023', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat7.ts', `function compat7(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0023 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0023 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0023 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0023 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_array_0023 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0023 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0024', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat7.ts', `function compat7(a: Array<string>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0024 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0024 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0024 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0024 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::vector<std::string>",
          "dts2cpp_compat_array_0024_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0024 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0025', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat7.ts', `function compat7(a: BadType7_Array_string_): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0025 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0025 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0025 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0025 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType7_Array_string_",
          "dts2cpp_compat_array_0025_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0025 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0026', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat7.ts', `function compat7(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0026 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0026 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0026 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0026 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny", "dts2cpp_compat_array_0026 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0026 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0027', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat7.ts', `class Compat7 { field: Array<string>; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0027 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0027 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "dts2cpp_compat_array_0027 must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_array_0027 must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<std::string>",
          "dts2cpp_compat_array_0027_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0027 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0028', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat7.ts', `type Compat7 = { x: Array<string>; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0028 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0028 convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1, "dts2cpp_compat_array_0028 must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: Array<string>; }", "dts2cpp_compat_array_0028_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0028 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0029', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat7.ts', `function compat7(a: Array<string>,): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0029 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0029 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0029 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0029 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::vector<std::string>",
          "dts2cpp_compat_array_0029_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0029 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0030', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat7.ts', `function compat7(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0030 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0030 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0030 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0030 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_array_0030 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0030 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0031', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat8.ts', `function compat8(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0031 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0031 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0031 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0031 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_array_0031 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0031 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0032', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat8.ts', `function compat8(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0032 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0032 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0032 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0032 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_array_0032 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0032 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0033', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat8.ts', `function compat8(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0033 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0033 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0033 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0033 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_array_0033 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0033 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0034', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat8.ts', `function compat8(a: string[[): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0034 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0034 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0034 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0034 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "string[[", "dts2cpp_compat_array_0034_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0034 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0035', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat8.ts', `function compat8(a: BadType8_string__): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0035 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0035 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0035 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0035 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType8_string__", "dts2cpp_compat_array_0035_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0035 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0036', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat8.ts', `function compat8(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0036 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0036 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0036 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0036 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny", "dts2cpp_compat_array_0036 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0036 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0037', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat8.ts', `class Compat8 { field: string[]; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0037 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0037 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "dts2cpp_compat_array_0037 must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_array_0037 must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<std::string>",
          "dts2cpp_compat_array_0037_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0037 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0038', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat8.ts', `type Compat8 = { x: string[]; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0038 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0038 convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1, "dts2cpp_compat_array_0038 must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: string[]; }", "dts2cpp_compat_array_0038_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0038 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0039', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat8.ts', `function compat8(a: string[],): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0039 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0039 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0039 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0039 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::vector<std::string>",
          "dts2cpp_compat_array_0039_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0039 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0040', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat8.ts', `function compat8(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0040 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0040 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0040 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0040 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_array_0040 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0040 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0041', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat9.ts', `function compat9(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0041 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0041 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0041 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0041 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_array_0041 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0041 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0042', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat9.ts', `function compat9(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0042 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0042 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0042 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0042 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_array_0042 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0042 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0043', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat9.ts', `function compat9(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0043 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0043 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0043 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0043 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_array_0043 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0043 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0044', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat9.ts', `function compat9(a: Array<boolean>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0044 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0044 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0044 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0044 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::vector<bool>", "dts2cpp_compat_array_0044_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0044 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0045', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat9.ts', `function compat9(a: BadType9_Array_boolean_): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0045 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0045 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0045 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0045 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType9_Array_boolean_",
          "dts2cpp_compat_array_0045_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0045 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0046', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat9.ts', `function compat9(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0046 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0046 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0046 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0046 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny", "dts2cpp_compat_array_0046 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0046 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0047', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat9.ts', `class Compat9 { field: Array<boolean>; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0047 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0047 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "dts2cpp_compat_array_0047 must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_array_0047 must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<bool>",
          "dts2cpp_compat_array_0047_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0047 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0048', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat9.ts', `type Compat9 = { x: Array<boolean>; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0048 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0048 convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1, "dts2cpp_compat_array_0048 must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: Array<boolean>; }", "dts2cpp_compat_array_0048_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0048 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0049', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat9.ts', `function compat9(a: Array<boolean>,): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0049 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0049 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0049 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0049 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::vector<bool>",
          "dts2cpp_compat_array_0049_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0049 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0050', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat9.ts', `function compat9(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0050 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0050 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0050 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0050 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_array_0050 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0050 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0051', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat10.ts', `function compat10(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0051 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0051 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0051 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0051 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_array_0051 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0051 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0052', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat10.ts', `function compat10(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0052 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0052 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0052 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0052 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_array_0052 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0052 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0053', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat10.ts', `function compat10(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0053 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0053 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0053 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0053 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_array_0053 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0053 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0054', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat10.ts', `function compat10(a: boolean[[): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0054 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0054 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0054 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0054 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolean[[", "dts2cpp_compat_array_0054_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0054 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0055', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat10.ts', `function compat10(a: BadType10_boolean__): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0055 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0055 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0055 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0055 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType10_boolean__", "dts2cpp_compat_array_0055_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0055 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0056', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat10.ts', `function compat10(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0056 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0056 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0056 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0056 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny", "dts2cpp_compat_array_0056 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0056 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0057', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat10.ts', `class Compat10 { field: boolean[]; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0057 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0057 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "dts2cpp_compat_array_0057 must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_array_0057 must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "std::vector<bool>",
          "dts2cpp_compat_array_0057_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0057 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0058', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat10.ts', `type Compat10 = { x: boolean[]; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0058 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0058 convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1, "dts2cpp_compat_array_0058 must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: boolean[]; }", "dts2cpp_compat_array_0058_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0058 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0059', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat10.ts', `function compat10(a: boolean[],): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0059 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0059 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0059 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0059 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "std::vector<bool>",
          "dts2cpp_compat_array_0059_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0059 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0060', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat10.ts', `function compat10(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0060 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0060 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0060 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0060 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_array_0060 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0060 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0061', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat59.ts', `function compat59(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0061 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0061 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0061 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0061 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_array_0061 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0061 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0062', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat59.ts', `function compat59(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0062 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0062 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0062 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0062 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_array_0062 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0062 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0063', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat59.ts', `function compat59(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0063 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0063 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0063 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0063 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_array_0063 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0063 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0064', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat59.ts', `function compat59(a: any[[): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0064 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0064 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0064 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0064 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "any[[", "dts2cpp_compat_array_0064_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0064 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0065', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat59.ts', `function compat59(a: BadType59_any__): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0065 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0065 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0065 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0065 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType59_any__", "dts2cpp_compat_array_0065_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0065 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0066', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat59.ts', `function compat59(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0066 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0066 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0066 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0066 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny", "dts2cpp_compat_array_0066 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0066 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0067', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat59.ts', `class Compat59 { field: any[]; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0067 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0067 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "dts2cpp_compat_array_0067 must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_array_0067 must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "any[]",
          "dts2cpp_compat_array_0067_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0067 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0068', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat59.ts', `type Compat59 = { x: any[]; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0068 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0068 convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1, "dts2cpp_compat_array_0068 must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: any[]; }", "dts2cpp_compat_array_0068_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0068 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0069', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat59.ts', `function compat59(a: any[],): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0069 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0069 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0069 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0069 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "any[]",
          "dts2cpp_compat_array_0069_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0069 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0070', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat59.ts', `function compat59(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0070 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0070 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0070 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0070 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_array_0070 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0070 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0071', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat60.ts', `function compat60(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0071 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0071 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0071 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0071 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_array_0071 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0071 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0072', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat60.ts', `function compat60(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0072 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0072 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0072 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0072 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_array_0072 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0072 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0073', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat60.ts', `function compat60(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0073 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0073 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0073 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0073 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_array_0073 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0073 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0074', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat60.ts', `function compat60(a: object[[): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0074 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0074 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0074 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0074 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "object[[", "dts2cpp_compat_array_0074_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0074 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0075', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat60.ts', `function compat60(a: BadType60_object__): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0075 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0075 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0075 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0075 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType60_object__", "dts2cpp_compat_array_0075_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0075 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0076', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat60.ts', `function compat60(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0076 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0076 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0076 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0076 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny", "dts2cpp_compat_array_0076 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0076 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0077', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat60.ts', `class Compat60 { field: object[]; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0077 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0077 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "dts2cpp_compat_array_0077 must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_array_0077 must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "object[]",
          "dts2cpp_compat_array_0077_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0077 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0078', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat60.ts', `type Compat60 = { x: object[]; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0078 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0078 convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1, "dts2cpp_compat_array_0078 must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: object[]; }", "dts2cpp_compat_array_0078_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0078 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0079', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat60.ts', `function compat60(a: object[],): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0079 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0079 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0079 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0079 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "object[]",
          "dts2cpp_compat_array_0079_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0079 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0080', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat60.ts', `function compat60(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0080 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0080 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0080 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0080 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_array_0080 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0080 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0081', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat61.ts', `function compat61(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0081 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0081 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0081 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0081 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_array_0081 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0081 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0082', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat61.ts', `function compat61(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0082 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0082 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0082 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0082 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_array_0082 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0082 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0083', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat61.ts', `function compat61(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0083 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0083 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0083 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0083 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_array_0083 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0083 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0084', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat61.ts', `function compat61(a: Array<any>): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0084 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0084 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0084 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0084 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "Array<any>", "dts2cpp_compat_array_0084_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0084 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0085', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat61.ts', `function compat61(a: BadType61_Array_any_): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0085 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0085 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0085 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0085 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType61_Array_any_", "dts2cpp_compat_array_0085_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0085 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0086', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat61.ts', `function compat61(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0086 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0086 convert result must be object");
        assert.ok(converted.funcs && converted.funcs.length >= 1, "dts2cpp_compat_array_0086 must parse function");
        assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
          "dts2cpp_compat_array_0086 must parse param");
        assert.strictEqual(converted.funcs[0].parameters[0].type, "anny", "dts2cpp_compat_array_0086 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0086 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0087', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat61.ts', `class Compat61 { field: Array<any>; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0087 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0087 convert result must be object");
        assert.ok(converted.classes && converted.classes.length >= 1, "dts2cpp_compat_array_0087 must parse class");
        assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
          "dts2cpp_compat_array_0087 must parse class field");
        assert.strictEqual(converted.classes[0].variableList[0].type, "Array<any>",
          "dts2cpp_compat_array_0087_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0087 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_array_0088', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat61.ts', `type Compat61 = { x: Array<any>; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_array_0088 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_array_0088 convert result must be object");
        assert.ok(converted.types && converted.types.length >= 1, "dts2cpp_compat_array_0088 must parse type alias");
        assert.strictEqual(converted.types[0].alias, "{ x: Array<any>; }", "dts2cpp_compat_array_0088_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0088 execution error: ${String(err)}`);
    }
  });
});
