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

suite('Stability_DTS2CPP_COMPAT_TUPLE_Part03', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_COMPAT_TUPLE_Part03.');


  test('dts2cpp_compat_tuple_0001', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat193.ts', `function compat193(a: [boolean, boolean, boolean[): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0001 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0001 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0001 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0001 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, boolean[",
            "dts2cpp_compat_tuple_0001_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0001 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0002', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat193.ts', `function compat193(a: BadType193__boolean__boolean__boolean_): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0002 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0002 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0002 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0002 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType193__boolean__boolean__boolean_",
            "dts2cpp_compat_tuple_0002_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0002 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0003', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat193.ts', `function compat193(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0003 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0003 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0003 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0003 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "anny", "dts2cpp_compat_tuple_0003 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0003 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0004', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat193.ts', `class Compat193 { field: [boolean, boolean, boolean]; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0004 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0004 convert result must be object");
          assert.ok(converted.classes && converted.classes.length >= 1,
            "dts2cpp_compat_tuple_0004 must parse class");
          assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
            "dts2cpp_compat_tuple_0004 must parse class field");
          assert.strictEqual(converted.classes[0].variableList[0].type, "[boolean, boolean, boolean]",
            "dts2cpp_compat_tuple_0004_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0004 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0005', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat193.ts', `type Compat193 = { x: [boolean, boolean, boolean]; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0005 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0005 convert result must be object");
          assert.ok(converted.types && converted.types.length >= 1,
            "dts2cpp_compat_tuple_0005 must parse type alias");
          assert.strictEqual(converted.types[0].alias, "{ x: [boolean, boolean, boolean]; }",
            "dts2cpp_compat_tuple_0005_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0005 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0006', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat193.ts', `function compat193(a: [boolean, boolean, boolean],): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0006 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0006 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0006 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0006 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "[boolean, boolean, boolean]",
            "dts2cpp_compat_tuple_0006_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0006 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0007', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat193.ts', `function compat193(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0007 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0007 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0007 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0007 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_tuple_0007 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0007 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0008', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat194.ts', `function compat194(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0008 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0008 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0008 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0008 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_tuple_0008 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0008 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0009', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat194.ts', `function compat194(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0009 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0009 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0009 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0009 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_tuple_0009 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0009 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0010', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat194.ts', `function compat194(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0010 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0010 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0010 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0010 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_tuple_0010 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0010 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0011', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat194.ts', `function compat194(a: [number, number, number, number[): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0011 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0011 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0011 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0011 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, number, number[",
            "dts2cpp_compat_tuple_0011_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0011 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0012', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat194.ts', `function compat194(a: BadType194__number__number__number__number_): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0012 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0012 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0012 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0012 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType194__number__number__number__number_",
            "dts2cpp_compat_tuple_0012_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0012 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0013', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat194.ts', `function compat194(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0013 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0013 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0013 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0013 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "anny", "dts2cpp_compat_tuple_0013 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0013 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0014', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat194.ts', `class Compat194 { field: [number, number, number, number]; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0014 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0014 convert result must be object");
          assert.ok(converted.classes && converted.classes.length >= 1,
            "dts2cpp_compat_tuple_0014 must parse class");
          assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
            "dts2cpp_compat_tuple_0014 must parse class field");
          assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, number, number]",
            "dts2cpp_compat_tuple_0014_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0014 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0015', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat194.ts', `type Compat194 = { x: [number, number, number, number]; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0015 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0015 convert result must be object");
          assert.ok(converted.types && converted.types.length >= 1,
            "dts2cpp_compat_tuple_0015 must parse type alias");
          assert.strictEqual(converted.types[0].alias, "{ x: [number, number, number, number]; }",
            "dts2cpp_compat_tuple_0015_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0015 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0016', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat194.ts', `function compat194(a: [number, number, number, number],): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0016 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0016 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0016 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0016 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, number, number]",
            "dts2cpp_compat_tuple_0016_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0016 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0017', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat194.ts', `function compat194(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0017 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0017 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0017 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0017 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_tuple_0017 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0017 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0018', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat195.ts', `function compat195(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0018 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0018 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0018 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0018 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_tuple_0018 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0018 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0019', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat195.ts', `function compat195(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0019 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0019 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0019 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0019 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_tuple_0019 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0019 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0020', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat195.ts', `function compat195(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0020 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0020 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0020 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0020 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_tuple_0020 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0020 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0021', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat195.ts', `function compat195(a: [number, number, number, string[): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0021 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0021 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0021 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0021 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, number, string[",
            "dts2cpp_compat_tuple_0021_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0021 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0022', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat195.ts', `function compat195(a: BadType195__number__number__number__string_): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0022 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0022 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0022 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0022 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType195__number__number__number__string_",
            "dts2cpp_compat_tuple_0022_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0022 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0023', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat195.ts', `function compat195(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0023 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0023 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0023 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0023 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "anny", "dts2cpp_compat_tuple_0023 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0023 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0024', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat195.ts', `class Compat195 { field: [number, number, number, string]; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0024 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0024 convert result must be object");
          assert.ok(converted.classes && converted.classes.length >= 1,
            "dts2cpp_compat_tuple_0024 must parse class");
          assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
            "dts2cpp_compat_tuple_0024 must parse class field");
          assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, number, string]",
            "dts2cpp_compat_tuple_0024_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0024 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0025', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat195.ts', `type Compat195 = { x: [number, number, number, string]; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0025 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0025 convert result must be object");
          assert.ok(converted.types && converted.types.length >= 1,
            "dts2cpp_compat_tuple_0025 must parse type alias");
          assert.strictEqual(converted.types[0].alias, "{ x: [number, number, number, string]; }",
            "dts2cpp_compat_tuple_0025_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0025 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0026', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat195.ts', `function compat195(a: [number, number, number, string],): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0026 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0026 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0026 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0026 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, number, string]",
            "dts2cpp_compat_tuple_0026_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0026 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0027', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat195.ts', `function compat195(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0027 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0027 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0027 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0027 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_tuple_0027 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0027 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0028', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat196.ts', `function compat196(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0028 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0028 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0028 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0028 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_tuple_0028 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0028 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0029', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat196.ts', `function compat196(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0029 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0029 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0029 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0029 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_tuple_0029 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0029 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0030', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat196.ts', `function compat196(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0030 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0030 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0030 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0030 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_tuple_0030 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0030 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0031', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat196.ts', `function compat196(a: [number, number, number, boolean[): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0031 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0031 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0031 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0031 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, number, boolean[",
            "dts2cpp_compat_tuple_0031_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0031 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0032', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat196.ts', `
          function compat196(a: BadType196__number__number__number__boolean_): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0032 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0032 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0032 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0032 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType196__number__number__number__boolean_",
            "dts2cpp_compat_tuple_0032_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0032 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0033', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat196.ts', `function compat196(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0033 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0033 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0033 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0033 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "anny", "dts2cpp_compat_tuple_0033 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0033 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0034', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat196.ts', `class Compat196 { field: [number, number, number, boolean]; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0034 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0034 convert result must be object");
          assert.ok(converted.classes && converted.classes.length >= 1,
            "dts2cpp_compat_tuple_0034 must parse class");
          assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
            "dts2cpp_compat_tuple_0034 must parse class field");
          assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, number, boolean]",
            "dts2cpp_compat_tuple_0034_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0034 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0035', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat196.ts', `type Compat196 = { x: [number, number, number, boolean]; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0035 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0035 convert result must be object");
          assert.ok(converted.types && converted.types.length >= 1,
            "dts2cpp_compat_tuple_0035 must parse type alias");
          assert.strictEqual(converted.types[0].alias, "{ x: [number, number, number, boolean]; }",
            "dts2cpp_compat_tuple_0035_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0035 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0036', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat196.ts', `function compat196(a: [number, number, number, boolean],): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0036 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0036 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0036 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0036 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, number, boolean]",
            "dts2cpp_compat_tuple_0036_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0036 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0037', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat196.ts', `function compat196(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0037 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0037 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0037 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0037 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_tuple_0037 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0037 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0038', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat197.ts', `function compat197(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0038 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0038 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0038 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0038 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_tuple_0038 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0038 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0039', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat197.ts', `function compat197(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0039 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0039 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0039 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0039 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_tuple_0039 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0039 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0040', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat197.ts', `function compat197(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0040 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0040 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0040 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0040 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_tuple_0040 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0040 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0041', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat197.ts', `function compat197(a: [number, number, string, number[): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0041 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0041 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0041 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0041 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, string, number[",
            "dts2cpp_compat_tuple_0041_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0041 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0042', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat197.ts', `function compat197(a: BadType197__number__number__string__number_): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0042 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0042 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0042 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0042 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType197__number__number__string__number_",
            "dts2cpp_compat_tuple_0042_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0042 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0043', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat197.ts', `function compat197(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0043 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0043 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0043 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0043 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "anny", "dts2cpp_compat_tuple_0043 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0043 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0044', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat197.ts', `class Compat197 { field: [number, number, string, number]; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0044 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0044 convert result must be object");
          assert.ok(converted.classes && converted.classes.length >= 1,
            "dts2cpp_compat_tuple_0044 must parse class");
          assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
            "dts2cpp_compat_tuple_0044 must parse class field");
          assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, string, number]",
            "dts2cpp_compat_tuple_0044_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0044 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0045', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat197.ts', `type Compat197 = { x: [number, number, string, number]; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0045 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0045 convert result must be object");
          assert.ok(converted.types && converted.types.length >= 1,
            "dts2cpp_compat_tuple_0045 must parse type alias");
          assert.strictEqual(converted.types[0].alias, "{ x: [number, number, string, number]; }",
            "dts2cpp_compat_tuple_0045_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0045 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0046', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat197.ts', `function compat197(a: [number, number, string, number],): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0046 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0046 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0046 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0046 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, string, number]",
            "dts2cpp_compat_tuple_0046_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0046 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0047', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat197.ts', `function compat197(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0047 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0047 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0047 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0047 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_tuple_0047 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0047 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0048', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat198.ts', `function compat198(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0048 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0048 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0048 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0048 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_tuple_0048 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0048 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0049', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat198.ts', `function compat198(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0049 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0049 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0049 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0049 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_tuple_0049 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0049 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0050', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat198.ts', `function compat198(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0050 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0050 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0050 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0050 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_tuple_0050 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0050 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0051', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat198.ts', `function compat198(a: [number, number, string, string[): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0051 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0051 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0051 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0051 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, string, string[",
            "dts2cpp_compat_tuple_0051_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0051 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0052', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat198.ts', `function compat198(a: BadType198__number__number__string__string_): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0052 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0052 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0052 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0052 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType198__number__number__string__string_",
            "dts2cpp_compat_tuple_0052_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0052 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0053', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat198.ts', `function compat198(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0053 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0053 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0053 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0053 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "anny", "dts2cpp_compat_tuple_0053 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0053 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0054', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat198.ts', `class Compat198 { field: [number, number, string, string]; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0054 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0054 convert result must be object");
          assert.ok(converted.classes && converted.classes.length >= 1,
            "dts2cpp_compat_tuple_0054 must parse class");
          assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
            "dts2cpp_compat_tuple_0054 must parse class field");
          assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, string, string]",
            "dts2cpp_compat_tuple_0054_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0054 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0055', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat198.ts', `type Compat198 = { x: [number, number, string, string]; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0055 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0055 convert result must be object");
          assert.ok(converted.types && converted.types.length >= 1,
            "dts2cpp_compat_tuple_0055 must parse type alias");
          assert.strictEqual(converted.types[0].alias, "{ x: [number, number, string, string]; }",
            "dts2cpp_compat_tuple_0055_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0055 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0056', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat198.ts', `function compat198(a: [number, number, string, string],): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0056 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0056 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0056 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0056 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, string, string]",
            "dts2cpp_compat_tuple_0056_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0056 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0057', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat198.ts', `function compat198(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0057 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0057 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0057 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0057 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_tuple_0057 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0057 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0058', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat199.ts', `function compat199(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0058 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0058 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0058 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0058 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_tuple_0058 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0058 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0059', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat199.ts', `function compat199(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0059 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0059 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0059 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0059 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_tuple_0059 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0059 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0060', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat199.ts', `function compat199(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0060 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0060 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0060 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0060 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_tuple_0060 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0060 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0061', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat199.ts', `function compat199(a: [number, number, string, boolean[): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0061 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0061 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0061 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0061 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, string, boolean[",
            "dts2cpp_compat_tuple_0061_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0061 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0062', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat199.ts', `
          function compat199(a: BadType199__number__number__string__boolean_): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0062 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0062 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0062 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0062 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType199__number__number__string__boolean_",
            "dts2cpp_compat_tuple_0062_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0062 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0063', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat199.ts', `function compat199(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0063 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0063 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0063 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0063 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "anny", "dts2cpp_compat_tuple_0063 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0063 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0064', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat199.ts', `class Compat199 { field: [number, number, string, boolean]; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0064 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0064 convert result must be object");
          assert.ok(converted.classes && converted.classes.length >= 1,
            "dts2cpp_compat_tuple_0064 must parse class");
          assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
            "dts2cpp_compat_tuple_0064 must parse class field");
          assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, string, boolean]",
            "dts2cpp_compat_tuple_0064_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0064 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0065', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat199.ts', `type Compat199 = { x: [number, number, string, boolean]; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0065 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0065 convert result must be object");
          assert.ok(converted.types && converted.types.length >= 1,
            "dts2cpp_compat_tuple_0065 must parse type alias");
          assert.strictEqual(converted.types[0].alias, "{ x: [number, number, string, boolean]; }",
            "dts2cpp_compat_tuple_0065_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0065 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0066', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat199.ts', `function compat199(a: [number, number, string, boolean],): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0066 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0066 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0066 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0066 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, string, boolean]",
            "dts2cpp_compat_tuple_0066_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0066 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0067', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat199.ts', `function compat199(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0067 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0067 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0067 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0067 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_tuple_0067 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0067 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0068', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat200.ts', `function compat200(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0068 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0068 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0068 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0068 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_tuple_0068 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0068 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0069', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat200.ts', `function compat200(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0069 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0069 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0069 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0069 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_tuple_0069 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0069 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0070', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat200.ts', `function compat200(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0070 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0070 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0070 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0070 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_tuple_0070 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0070 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0071', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat200.ts', `function compat200(a: [number, number, boolean, number[): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0071 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0071 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0071 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0071 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, boolean, number[",
            "dts2cpp_compat_tuple_0071_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0071 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0072', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat200.ts', `
          function compat200(a: BadType200__number__number__boolean__number_): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0072 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0072 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0072 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0072 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType200__number__number__boolean__number_",
            "dts2cpp_compat_tuple_0072_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0072 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0073', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat200.ts', `function compat200(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0073 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0073 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0073 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0073 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "anny", "dts2cpp_compat_tuple_0073 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0073 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0074', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat200.ts', `class Compat200 { field: [number, number, boolean, number]; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0074 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0074 convert result must be object");
          assert.ok(converted.classes && converted.classes.length >= 1,
            "dts2cpp_compat_tuple_0074 must parse class");
          assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
            "dts2cpp_compat_tuple_0074 must parse class field");
          assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, boolean, number]",
            "dts2cpp_compat_tuple_0074_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0074 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0075', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat200.ts', `type Compat200 = { x: [number, number, boolean, number]; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0075 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0075 convert result must be object");
          assert.ok(converted.types && converted.types.length >= 1,
            "dts2cpp_compat_tuple_0075 must parse type alias");
          assert.strictEqual(converted.types[0].alias, "{ x: [number, number, boolean, number]; }",
            "dts2cpp_compat_tuple_0075_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0075 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0076', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat200.ts', `function compat200(a: [number, number, boolean, number],): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0076 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0076 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0076 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0076 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, boolean, number]",
            "dts2cpp_compat_tuple_0076_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0076 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0077', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat200.ts', `function compat200(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0077 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0077 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0077 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0077 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_tuple_0077 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0077 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0078', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat201.ts', `function compat201(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0078 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0078 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0078 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0078 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_tuple_0078 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0078 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0079', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat201.ts', `function compat201(a: strng): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0079 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0079 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0079 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0079 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_tuple_0079 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0079 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0080', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat201.ts', `function compat201(a: boolea): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0080 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0080 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0080 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0080 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_tuple_0080 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0080 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0081', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat201.ts', `function compat201(a: [number, number, boolean, string[): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0081 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0081 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0081 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0081 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, boolean, string[",
            "dts2cpp_compat_tuple_0081_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0081 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0082', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat201.ts', `
          function compat201(a: BadType201__number__number__boolean__string_): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0082 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0082 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0082 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0082 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "BadType201__number__number__boolean__string_",
            "dts2cpp_compat_tuple_0082_param");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0082 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0083', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat201.ts', `function compat201(a: anny): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0083 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0083 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0083 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0083 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "anny", "dts2cpp_compat_tuple_0083 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0083 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0084', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat201.ts', `class Compat201 { field: [number, number, boolean, string]; }`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0084 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0084 convert result must be object");
          assert.ok(converted.classes && converted.classes.length >= 1,
            "dts2cpp_compat_tuple_0084 must parse class");
          assert.ok(converted.classes[0].variableList && converted.classes[0].variableList.length >= 1,
            "dts2cpp_compat_tuple_0084 must parse class field");
          assert.strictEqual(converted.classes[0].variableList[0].type, "[number, number, boolean, string]",
            "dts2cpp_compat_tuple_0084_field convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0084 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0085', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat201.ts', `type Compat201 = { x: [number, number, boolean, string]; };`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0085 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0085 convert result must be object");
          assert.ok(converted.types && converted.types.length >= 1,
            "dts2cpp_compat_tuple_0085 must parse type alias");
          assert.strictEqual(converted.types[0].alias, "{ x: [number, number, boolean, string]; }",
            "dts2cpp_compat_tuple_0085_alias");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0085 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0086', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat201.ts', `function compat201(a: [number, number, boolean, string],): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0086 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0086 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0086 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0086 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "[number, number, boolean, string]",
            "dts2cpp_compat_tuple_0086_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0086 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0087', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat201.ts', `function compat201(a: Numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0087 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0087 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0087 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0087 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_tuple_0087 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0087 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_tuple_0088', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat202.ts', `function compat202(a: numbr): void {}`);
        assert.ok(parsed !== undefined && parsed !== null && typeof parsed === 'object',
          "dts2cpp_compat_tuple_0088 parse result must be object");
        const converted = transParseObj(parsed);
        assert.ok(converted !== undefined && converted !== null && typeof converted === 'object',
          "dts2cpp_compat_tuple_0088 convert result must be object");
          assert.ok(converted.funcs && converted.funcs.length >= 1,
            "dts2cpp_compat_tuple_0088 must parse function");
          assert.ok(converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1,
            "dts2cpp_compat_tuple_0088 must parse param");
          assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_tuple_0088 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_tuple_0088 execution error: ${String(err)}`);
    }
  });
});
