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

suite('Stability_DTS2CPP_COMPAT_BASIC_Part02', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_COMPAT_BASIC_Part02.');


  test('dts2cpp_compat_basic_0001', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat292.ts', `function compat292(a: boolea): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_basic_0001 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0001 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0002', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat292.ts', `function compat292(a: never): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "never",
              "dts2cpp_compat_basic_0002_param convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0002 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0003', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat292.ts', `function compat292(a: never): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "never", "dts2cpp_compat_basic_0003_param");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0003 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0004', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat292.ts', `function compat292(a: ): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1) {
            assert.strictEqual(converted.funcs[0].name, "compat292", "dts2cpp_compat_basic_0004 func name");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0004 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0005', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat292.ts', `class Compat292 { field: never`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.classes && converted.classes.length >= 1 &&
              converted.classes[0].variableList && converted.classes[0].variableList.length >= 1) {
            assert.strictEqual(converted.classes[0].variableList[0].type,
              "never",
              "dts2cpp_compat_basic_0005_field convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0005 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0006', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat292.ts', `type Compat292 = { x: never;`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.types && converted.types.length >= 1) {
            assert.strictEqual(converted.types[0].alias, "never", "dts2cpp_compat_basic_0006_alias");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0006 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0007', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat292.ts', `function compat292(a: never,): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "never",
              "dts2cpp_compat_basic_0007_param convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0007 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0008', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat292.ts', `declare namespace ns { export function compat292(a: Numbr): void; }`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_basic_0008 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0008 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0009', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat293.ts', `function compat293(a: numbr): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_basic_0009 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0009 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0010', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat293.ts', `function compat293(a: strng): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_basic_0010 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0010 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0011', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat293.ts', `function compat293(a: boolea): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_basic_0011 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0011 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0012', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat293.ts', `function compat293(a: any): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "std::any",
              "dts2cpp_compat_basic_0012_param convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0012 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0013', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat293.ts', `function compat293(a: any): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "std::any", "dts2cpp_compat_basic_0013_param");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0013 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0014', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat293.ts', `function compat293(a: ): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1) {
            assert.strictEqual(converted.funcs[0].name, "compat293", "dts2cpp_compat_basic_0014 func name");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0014 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0015', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat293.ts', `class Compat293 { field: any`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.classes && converted.classes.length >= 1 &&
              converted.classes[0].variableList && converted.classes[0].variableList.length >= 1) {
            assert.strictEqual(converted.classes[0].variableList[0].type,
              "std::any",
              "dts2cpp_compat_basic_0015_field convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0015 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0016', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat293.ts', `type Compat293 = { x: any;`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.types && converted.types.length >= 1) {
            assert.strictEqual(converted.types[0].alias, "any", "dts2cpp_compat_basic_0016_alias");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0016 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0017', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat293.ts', `function compat293(a: any,): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "std::any",
              "dts2cpp_compat_basic_0017_param convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0017 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0018', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat293.ts', `declare namespace ns { export function compat293(a: Numbr): void; }`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_basic_0018 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0018 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0019', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat294.ts', `function compat294(a: numbr): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_basic_0019 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0019 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0020', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat294.ts', `function compat294(a: strng): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_basic_0020 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0020 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0021', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat294.ts', `function compat294(a: boolea): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_basic_0021 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0021 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0022', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat294.ts', `function compat294(a: object): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "std::any",
              "dts2cpp_compat_basic_0022_param convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0022 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0023', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat294.ts', `function compat294(a: object): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "std::any", "dts2cpp_compat_basic_0023_param");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0023 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0024', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat294.ts', `function compat294(a: ): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1) {
            assert.strictEqual(converted.funcs[0].name, "compat294", "dts2cpp_compat_basic_0024 func name");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0024 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0025', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat294.ts', `class Compat294 { field: object`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.classes && converted.classes.length >= 1 &&
              converted.classes[0].variableList && converted.classes[0].variableList.length >= 1) {
            assert.strictEqual(converted.classes[0].variableList[0].type,
              "std::any",
              "dts2cpp_compat_basic_0025_field convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0025 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0026', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat294.ts', `type Compat294 = { x: object;`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.types && converted.types.length >= 1) {
            assert.strictEqual(converted.types[0].alias, "object", "dts2cpp_compat_basic_0026_alias");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0026 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0027', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat294.ts', `function compat294(a: object,): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "std::any",
              "dts2cpp_compat_basic_0027_param convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0027 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0028', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat294.ts', `declare namespace ns { export function compat294(a: Numbr): void; }`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_basic_0028 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0028 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0029', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat296.ts', `function compat296(a: numbr): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_basic_0029 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0029 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0030', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat296.ts', `function compat296(a: strng): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_basic_0030 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0030 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0031', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat296.ts', `function compat296(a: boolea): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_basic_0031 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0031 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0032', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat296.ts', `function compat296(a: map): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "map",
              "dts2cpp_compat_basic_0032_param convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0032 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0033', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat296.ts', `function compat296(a: map): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "map", "dts2cpp_compat_basic_0033_param");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0033 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0034', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat296.ts', `function compat296(a: ): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1) {
            assert.strictEqual(converted.funcs[0].name, "compat296", "dts2cpp_compat_basic_0034 func name");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0034 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0035', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat296.ts', `class Compat296 { field: map`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.classes && converted.classes.length >= 1 &&
              converted.classes[0].variableList && converted.classes[0].variableList.length >= 1) {
            assert.strictEqual(converted.classes[0].variableList[0].type,
              "map",
              "dts2cpp_compat_basic_0035_field convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0035 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0036', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat296.ts', `type Compat296 = { x: map;`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.types && converted.types.length >= 1) {
            assert.strictEqual(converted.types[0].alias, "map", "dts2cpp_compat_basic_0036_alias");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0036 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0037', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat296.ts', `function compat296(a: map,): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "map",
              "dts2cpp_compat_basic_0037_param convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0037 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0038', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat296.ts', `declare namespace ns { export function compat296(a: Numbr): void; }`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_basic_0038 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0038 execution error: ${String(err)}`);
    }
  });
});
