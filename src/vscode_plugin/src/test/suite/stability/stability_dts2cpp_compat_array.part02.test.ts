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

suite('Stability_DTS2CPP_COMPAT_ARRAY_Part02', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_COMPAT_ARRAY_Part02.');


  test('dts2cpp_compat_array_0001', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat62.ts', `function compat62(a: boolea): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_array_0001 param type");
          }
        }
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
        const parsed = doParseTs('compat62.ts', `function compat62(a: Array<object>): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "Array<object>",
              "dts2cpp_compat_array_0002_param convert output");
          }
        }
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
        const parsed = doParseTs('compat62.ts', `function compat62(a: Arrayobject>): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "Arrayobject>", "dts2cpp_compat_array_0003_param");
          }
        }
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
        const parsed = doParseTs('compat62.ts', `function compat62(a: ): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1) {
            assert.strictEqual(converted.funcs[0].name, "compat62", "dts2cpp_compat_array_0004 func name");
          }
        }
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
        const parsed = doParseTs('compat62.ts', `class Compat62 { field: Array<object>`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.classes && converted.classes.length >= 1 &&
              converted.classes[0].variableList && converted.classes[0].variableList.length >= 1) {
            assert.strictEqual(converted.classes[0].variableList[0].type,
              "Array<object>",
              "dts2cpp_compat_array_0005_field convert output");
          }
        }
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
        const parsed = doParseTs('compat62.ts', `type Compat62 = { x: Array<object>;`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.types && converted.types.length >= 1) {
            assert.strictEqual(converted.types[0].alias, "Array<object>", "dts2cpp_compat_array_0006_alias");
          }
        }
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
        const parsed = doParseTs('compat62.ts', `function compat62(a: Array<object>,): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "Array<object>",
              "dts2cpp_compat_array_0007_param convert output");
          }
        }
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
        const parsed = doParseTs('compat62.ts', `declare namespace ns { export function compat62(a: Numbr): void; }`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_array_0008 param type");
          }
        }
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
        const parsed = doParseTs('compat78.ts', `function compat78(a: numbr): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_array_0009 param type");
          }
        }
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
        const parsed = doParseTs('compat78.ts', `function compat78(a: strng): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_array_0010 param type");
          }
        }
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
        const parsed = doParseTs('compat78.ts', `function compat78(a: boolea): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_array_0011 param type");
          }
        }
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
        const parsed = doParseTs('compat78.ts', `function compat78(a: ReadonlyArray<any>): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "ReadonlyArray<any>",
              "dts2cpp_compat_array_0012_param convert output");
          }
        }
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
        const parsed = doParseTs('compat78.ts', `function compat78(a: ReadonlyArrayany>): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "ReadonlyArrayany>", "dts2cpp_compat_array_0013_param");
          }
        }
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
        const parsed = doParseTs('compat78.ts', `function compat78(a: ): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1) {
            assert.strictEqual(converted.funcs[0].name, "compat78", "dts2cpp_compat_array_0014 func name");
          }
        }
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
        const parsed = doParseTs('compat78.ts', `class Compat78 { field: ReadonlyArray<any>`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.classes && converted.classes.length >= 1 &&
              converted.classes[0].variableList && converted.classes[0].variableList.length >= 1) {
            assert.strictEqual(converted.classes[0].variableList[0].type,
              "ReadonlyArray<any>",
              "dts2cpp_compat_array_0015_field convert output");
          }
        }
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
        const parsed = doParseTs('compat78.ts', `type Compat78 = { x: ReadonlyArray<any>;`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.types && converted.types.length >= 1) {
            assert.strictEqual(converted.types[0].alias, "ReadonlyArray<any>", "dts2cpp_compat_array_0016_alias");
          }
        }
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
        const parsed = doParseTs('compat78.ts', `function compat78(a: ReadonlyArray<any>,): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "ReadonlyArray<any>",
              "dts2cpp_compat_array_0017_param convert output");
          }
        }
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
        const parsed = doParseTs('compat78.ts', `declare namespace ns { export function compat78(a: Numbr): void; }`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_array_0018 param type");
          }
        }
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
        const parsed = doParseTs('compat79.ts', `function compat79(a: numbr): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_array_0019 param type");
          }
        }
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
        const parsed = doParseTs('compat79.ts', `function compat79(a: strng): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_array_0020 param type");
          }
        }
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
        const parsed = doParseTs('compat79.ts', `function compat79(a: boolea): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_array_0021 param type");
          }
        }
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
        const parsed = doParseTs('compat79.ts', `function compat79(a: ReadonlyArray<object>): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "ReadonlyArray<object>",
              "dts2cpp_compat_array_0022_param convert output");
          }
        }
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
        const parsed = doParseTs('compat79.ts', `function compat79(a: ReadonlyArrayobject>): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "ReadonlyArrayobject>",
              "dts2cpp_compat_array_0023_param");
          }
        }
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
        const parsed = doParseTs('compat79.ts', `function compat79(a: ): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1) {
            assert.strictEqual(converted.funcs[0].name, "compat79", "dts2cpp_compat_array_0024 func name");
          }
        }
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
        const parsed = doParseTs('compat79.ts', `class Compat79 { field: ReadonlyArray<object>`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.classes && converted.classes.length >= 1 &&
              converted.classes[0].variableList && converted.classes[0].variableList.length >= 1) {
            assert.strictEqual(converted.classes[0].variableList[0].type,
              "ReadonlyArray<object>",
              "dts2cpp_compat_array_0025_field convert output");
          }
        }
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
        const parsed = doParseTs('compat79.ts', `type Compat79 = { x: ReadonlyArray<object>;`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.types && converted.types.length >= 1) {
            assert.strictEqual(converted.types[0].alias, "ReadonlyArray<object>", "dts2cpp_compat_array_0026_alias");
          }
        }
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
        const parsed = doParseTs('compat79.ts', `function compat79(a: ReadonlyArray<object>,): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "ReadonlyArray<object>",
              "dts2cpp_compat_array_0027_param convert output");
          }
        }
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
        const parsed = doParseTs('compat79.ts', `declare namespace ns { export function compat79(a: Numbr): void; }`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_array_0028 param type");
          }
        }
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
        const parsed = doParseTs('compat301.ts', `function compat301(a: numbr): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_array_0029 param type");
          }
        }
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
        const parsed = doParseTs('compat301.ts', `function compat301(a: strng): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_array_0030 param type");
          }
        }
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
        const parsed = doParseTs('compat301.ts', `function compat301(a: boolea): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_array_0031 param type");
          }
        }
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
        const parsed = doParseTs('compat301.ts', `function compat301(a: ReadonlyArray<number>): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "ReadonlyArray<number>",
              "dts2cpp_compat_array_0032_param convert output");
          }
        }
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
        const parsed = doParseTs('compat301.ts', `function compat301(a: ReadonlyArraynumber>): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "ReadonlyArraynumber>",
              "dts2cpp_compat_array_0033_param");
          }
        }
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
        const parsed = doParseTs('compat301.ts', `function compat301(a: ): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1) {
            assert.strictEqual(converted.funcs[0].name, "compat301", "dts2cpp_compat_array_0034 func name");
          }
        }
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
        const parsed = doParseTs('compat301.ts', `class Compat301 { field: ReadonlyArray<number>`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.classes && converted.classes.length >= 1 &&
              converted.classes[0].variableList && converted.classes[0].variableList.length >= 1) {
            assert.strictEqual(converted.classes[0].variableList[0].type,
              "ReadonlyArray<number>",
              "dts2cpp_compat_array_0035_field convert output");
          }
        }
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
        const parsed = doParseTs('compat301.ts', `type Compat301 = { x: ReadonlyArray<number>;`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.types && converted.types.length >= 1) {
            assert.strictEqual(converted.types[0].alias, "ReadonlyArray<number>", "dts2cpp_compat_array_0036_alias");
          }
        }
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
        const parsed = doParseTs('compat301.ts', `function compat301(a: ReadonlyArray<number>,): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "ReadonlyArray<number>",
              "dts2cpp_compat_array_0037_param convert output");
          }
        }
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
        const parsed = doParseTs('compat301.ts', `declare namespace ns { export function compat301(a: Numbr): void; }`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_array_0038 param type");
          }
        }
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
        const parsed = doParseTs('compat302.ts', `function compat302(a: numbr): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_array_0039 param type");
          }
        }
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
        const parsed = doParseTs('compat302.ts', `function compat302(a: strng): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_array_0040 param type");
          }
        }
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
        const parsed = doParseTs('compat302.ts', `function compat302(a: boolea): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_array_0041 param type");
          }
        }
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
        const parsed = doParseTs('compat302.ts', `function compat302(a: ReadonlyArray<string>): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "ReadonlyArray<string>",
              "dts2cpp_compat_array_0042_param convert output");
          }
        }
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
        const parsed = doParseTs('compat302.ts', `function compat302(a: ReadonlyArraystring>): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "ReadonlyArraystring>",
              "dts2cpp_compat_array_0043_param");
          }
        }
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
        const parsed = doParseTs('compat302.ts', `function compat302(a: ): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1) {
            assert.strictEqual(converted.funcs[0].name, "compat302", "dts2cpp_compat_array_0044 func name");
          }
        }
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
        const parsed = doParseTs('compat302.ts', `class Compat302 { field: ReadonlyArray<string>`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.classes && converted.classes.length >= 1 &&
              converted.classes[0].variableList && converted.classes[0].variableList.length >= 1) {
            assert.strictEqual(converted.classes[0].variableList[0].type,
              "ReadonlyArray<string>",
              "dts2cpp_compat_array_0045_field convert output");
          }
        }
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
        const parsed = doParseTs('compat302.ts', `type Compat302 = { x: ReadonlyArray<string>;`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.types && converted.types.length >= 1) {
            assert.strictEqual(converted.types[0].alias, "ReadonlyArray<string>", "dts2cpp_compat_array_0046_alias");
          }
        }
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
        const parsed = doParseTs('compat302.ts', `function compat302(a: ReadonlyArray<string>,): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "ReadonlyArray<string>",
              "dts2cpp_compat_array_0047_param convert output");
          }
        }
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
        const parsed = doParseTs('compat302.ts', `declare namespace ns { export function compat302(a: Numbr): void; }`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_array_0048 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_array_0048 execution error: ${String(err)}`);
    }
  });
});
