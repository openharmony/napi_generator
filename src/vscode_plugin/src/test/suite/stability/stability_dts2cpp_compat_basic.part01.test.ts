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

suite('Stability_DTS2CPP_COMPAT_BASIC_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_COMPAT_BASIC_Part01.');


  test('dts2cpp_compat_basic_0001', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat1.ts', `function compat1(a: numbr): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_basic_0001 param type");
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
        const parsed = doParseTs('compat1.ts', `function compat1(a: strng): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_basic_0002 param type");
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
        const parsed = doParseTs('compat1.ts', `function compat1(a: boolea): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_basic_0003 param type");
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
        const parsed = doParseTs('compat1.ts', `function compat1(a: number): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "double",
              "dts2cpp_compat_basic_0004_param convert output");
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
        const parsed = doParseTs('compat1.ts', `function compat1(a: number): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "double", "dts2cpp_compat_basic_0005_param");
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
        const parsed = doParseTs('compat1.ts', `function compat1(a: ): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1) {
            assert.strictEqual(converted.funcs[0].name, "compat1", "dts2cpp_compat_basic_0006 func name");
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
        const parsed = doParseTs('compat1.ts', `class Compat1 { field: number`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.classes && converted.classes.length >= 1 &&
              converted.classes[0].variableList && converted.classes[0].variableList.length >= 1) {
            assert.strictEqual(converted.classes[0].variableList[0].type,
              "double",
              "dts2cpp_compat_basic_0007_field convert output");
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
        const parsed = doParseTs('compat1.ts', `type Compat1 = { x: number;`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.types && converted.types.length >= 1) {
            assert.strictEqual(converted.types[0].alias, "number", "dts2cpp_compat_basic_0008_alias");
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
        const parsed = doParseTs('compat1.ts', `function compat1(a: number,): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "double",
              "dts2cpp_compat_basic_0009_param convert output");
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
        const parsed = doParseTs('compat1.ts', `declare namespace ns { export function compat1(a: Numbr): void; }`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_basic_0010 param type");
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
        const parsed = doParseTs('compat2.ts', `function compat2(a: numbr): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_basic_0011 param type");
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
        const parsed = doParseTs('compat2.ts', `function compat2(a: strng): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_basic_0012 param type");
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
        const parsed = doParseTs('compat2.ts', `function compat2(a: boolea): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_basic_0013 param type");
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
        const parsed = doParseTs('compat2.ts', `function compat2(a: string): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "std::string",
              "dts2cpp_compat_basic_0014_param convert output");
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
        const parsed = doParseTs('compat2.ts', `function compat2(a: string): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "std::string", "dts2cpp_compat_basic_0015_param");
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
        const parsed = doParseTs('compat2.ts', `function compat2(a: ): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1) {
            assert.strictEqual(converted.funcs[0].name, "compat2", "dts2cpp_compat_basic_0016 func name");
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
        const parsed = doParseTs('compat2.ts', `class Compat2 { field: string`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.classes && converted.classes.length >= 1 &&
              converted.classes[0].variableList && converted.classes[0].variableList.length >= 1) {
            assert.strictEqual(converted.classes[0].variableList[0].type,
              "std::string",
              "dts2cpp_compat_basic_0017_field convert output");
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
        const parsed = doParseTs('compat2.ts', `type Compat2 = { x: string;`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.types && converted.types.length >= 1) {
            assert.strictEqual(converted.types[0].alias, "string", "dts2cpp_compat_basic_0018_alias");
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
        const parsed = doParseTs('compat2.ts', `function compat2(a: string,): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "std::string",
              "dts2cpp_compat_basic_0019_param convert output");
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
        const parsed = doParseTs('compat2.ts', `declare namespace ns { export function compat2(a: Numbr): void; }`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_basic_0020 param type");
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
        const parsed = doParseTs('compat3.ts', `function compat3(a: numbr): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_basic_0021 param type");
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
        const parsed = doParseTs('compat3.ts', `function compat3(a: strng): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_basic_0022 param type");
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
        const parsed = doParseTs('compat3.ts', `function compat3(a: boolea): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_basic_0023 param type");
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
        const parsed = doParseTs('compat3.ts', `function compat3(a: boolean): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "bool",
              "dts2cpp_compat_basic_0024_param convert output");
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
        const parsed = doParseTs('compat3.ts', `function compat3(a: boolean): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "bool", "dts2cpp_compat_basic_0025_param");
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
        const parsed = doParseTs('compat3.ts', `function compat3(a: ): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1) {
            assert.strictEqual(converted.funcs[0].name, "compat3", "dts2cpp_compat_basic_0026 func name");
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
        const parsed = doParseTs('compat3.ts', `class Compat3 { field: boolean`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.classes && converted.classes.length >= 1 &&
              converted.classes[0].variableList && converted.classes[0].variableList.length >= 1) {
            assert.strictEqual(converted.classes[0].variableList[0].type,
              "bool",
              "dts2cpp_compat_basic_0027_field convert output");
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
        const parsed = doParseTs('compat3.ts', `type Compat3 = { x: boolean;`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.types && converted.types.length >= 1) {
            assert.strictEqual(converted.types[0].alias, "boolean", "dts2cpp_compat_basic_0028_alias");
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
        const parsed = doParseTs('compat3.ts', `function compat3(a: boolean,): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "bool",
              "dts2cpp_compat_basic_0029_param convert output");
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
        const parsed = doParseTs('compat3.ts', `declare namespace ns { export function compat3(a: Numbr): void; }`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_basic_0030 param type");
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
        const parsed = doParseTs('compat4.ts', `function compat4(a: numbr): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_basic_0031 param type");
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
        const parsed = doParseTs('compat4.ts', `function compat4(a: strng): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_basic_0032 param type");
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
        const parsed = doParseTs('compat4.ts', `function compat4(a: boolea): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_basic_0033 param type");
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
        const parsed = doParseTs('compat4.ts', `function compat4(a: void): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "void",
              "dts2cpp_compat_basic_0034_param convert output");
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
        const parsed = doParseTs('compat4.ts', `function compat4(a: void): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "void", "dts2cpp_compat_basic_0035_param");
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
        const parsed = doParseTs('compat4.ts', `function compat4(a: ): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1) {
            assert.strictEqual(converted.funcs[0].name, "compat4", "dts2cpp_compat_basic_0036 func name");
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
        const parsed = doParseTs('compat4.ts', `class Compat4 { field: void`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.classes && converted.classes.length >= 1 &&
              converted.classes[0].variableList && converted.classes[0].variableList.length >= 1) {
            assert.strictEqual(converted.classes[0].variableList[0].type,
              "void",
              "dts2cpp_compat_basic_0037_field convert output");
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
        const parsed = doParseTs('compat4.ts', `type Compat4 = { x: void;`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.types && converted.types.length >= 1) {
            assert.strictEqual(converted.types[0].alias, "void", "dts2cpp_compat_basic_0038_alias");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0038 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0039', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat4.ts', `function compat4(a: void,): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "void",
              "dts2cpp_compat_basic_0039_param convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0039 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0040', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat4.ts', `declare namespace ns { export function compat4(a: Numbr): void; }`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_basic_0040 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0040 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0041', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat287.ts', `function compat287(a: numbr): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_basic_0041 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0041 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0042', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat287.ts', `function compat287(a: strng): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_basic_0042 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0042 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0043', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat287.ts', `function compat287(a: boolea): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_basic_0043 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0043 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0044', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat287.ts', `function compat287(a: null): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "null",
              "dts2cpp_compat_basic_0044_param convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0044 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0045', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat287.ts', `function compat287(a: null): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "null", "dts2cpp_compat_basic_0045_param");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0045 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0046', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat287.ts', `function compat287(a: ): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1) {
            assert.strictEqual(converted.funcs[0].name, "compat287", "dts2cpp_compat_basic_0046 func name");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0046 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0047', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat287.ts', `class Compat287 { field: null`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.classes && converted.classes.length >= 1 &&
              converted.classes[0].variableList && converted.classes[0].variableList.length >= 1) {
            assert.strictEqual(converted.classes[0].variableList[0].type,
              "null",
              "dts2cpp_compat_basic_0047_field convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0047 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0048', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat287.ts', `type Compat287 = { x: null;`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.types && converted.types.length >= 1) {
            assert.strictEqual(converted.types[0].alias, "null", "dts2cpp_compat_basic_0048_alias");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0048 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0049', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat287.ts', `function compat287(a: null,): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "null",
              "dts2cpp_compat_basic_0049_param convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0049 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0050', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat287.ts', `declare namespace ns { export function compat287(a: Numbr): void; }`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_basic_0050 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0050 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0051', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat288.ts', `function compat288(a: numbr): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_basic_0051 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0051 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0052', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat288.ts', `function compat288(a: strng): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_basic_0052 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0052 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0053', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat288.ts', `function compat288(a: boolea): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_basic_0053 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0053 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0054', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat288.ts', `function compat288(a: undefined): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "undefined",
              "dts2cpp_compat_basic_0054_param convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0054 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0055', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat288.ts', `function compat288(a: undefined): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "undefined", "dts2cpp_compat_basic_0055_param");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0055 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0056', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat288.ts', `function compat288(a: ): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1) {
            assert.strictEqual(converted.funcs[0].name, "compat288", "dts2cpp_compat_basic_0056 func name");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0056 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0057', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat288.ts', `class Compat288 { field: undefined`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.classes && converted.classes.length >= 1 &&
              converted.classes[0].variableList && converted.classes[0].variableList.length >= 1) {
            assert.strictEqual(converted.classes[0].variableList[0].type,
              "undefined",
              "dts2cpp_compat_basic_0057_field convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0057 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0058', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat288.ts', `type Compat288 = { x: undefined;`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.types && converted.types.length >= 1) {
            assert.strictEqual(converted.types[0].alias, "undefined", "dts2cpp_compat_basic_0058_alias");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0058 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0059', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat288.ts', `function compat288(a: undefined,): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "undefined",
              "dts2cpp_compat_basic_0059_param convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0059 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0060', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat288.ts', `declare namespace ns { export function compat288(a: Numbr): void; }`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_basic_0060 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0060 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0061', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat289.ts', `function compat289(a: numbr): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_basic_0061 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0061 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0062', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat289.ts', `function compat289(a: strng): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_basic_0062 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0062 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0063', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat289.ts', `function compat289(a: boolea): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_basic_0063 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0063 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0064', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat289.ts', `function compat289(a: symbol): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "symbol",
              "dts2cpp_compat_basic_0064_param convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0064 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0065', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat289.ts', `function compat289(a: symbol): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "symbol", "dts2cpp_compat_basic_0065_param");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0065 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0066', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat289.ts', `function compat289(a: ): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1) {
            assert.strictEqual(converted.funcs[0].name, "compat289", "dts2cpp_compat_basic_0066 func name");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0066 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0067', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat289.ts', `class Compat289 { field: symbol`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.classes && converted.classes.length >= 1 &&
              converted.classes[0].variableList && converted.classes[0].variableList.length >= 1) {
            assert.strictEqual(converted.classes[0].variableList[0].type,
              "symbol",
              "dts2cpp_compat_basic_0067_field convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0067 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0068', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat289.ts', `type Compat289 = { x: symbol;`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.types && converted.types.length >= 1) {
            assert.strictEqual(converted.types[0].alias, "symbol", "dts2cpp_compat_basic_0068_alias");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0068 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0069', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat289.ts', `function compat289(a: symbol,): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "symbol",
              "dts2cpp_compat_basic_0069_param convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0069 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0070', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat289.ts', `declare namespace ns { export function compat289(a: Numbr): void; }`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_basic_0070 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0070 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0071', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat290.ts', `function compat290(a: numbr): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_basic_0071 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0071 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0072', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat290.ts', `function compat290(a: strng): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_basic_0072 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0072 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0073', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat290.ts', `function compat290(a: boolea): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_basic_0073 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0073 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0074', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat290.ts', `function compat290(a: bigint): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "bigint",
              "dts2cpp_compat_basic_0074_param convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0074 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0075', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat290.ts', `function compat290(a: bigint): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "bigint", "dts2cpp_compat_basic_0075_param");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0075 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0076', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat290.ts', `function compat290(a: ): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1) {
            assert.strictEqual(converted.funcs[0].name, "compat290", "dts2cpp_compat_basic_0076 func name");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0076 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0077', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat290.ts', `class Compat290 { field: bigint`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.classes && converted.classes.length >= 1 &&
              converted.classes[0].variableList && converted.classes[0].variableList.length >= 1) {
            assert.strictEqual(converted.classes[0].variableList[0].type,
              "bigint",
              "dts2cpp_compat_basic_0077_field convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0077 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0078', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat290.ts', `type Compat290 = { x: bigint;`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.types && converted.types.length >= 1) {
            assert.strictEqual(converted.types[0].alias, "bigint", "dts2cpp_compat_basic_0078_alias");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0078 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0079', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat290.ts', `function compat290(a: bigint,): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "bigint",
              "dts2cpp_compat_basic_0079_param convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0079 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0080', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat290.ts', `declare namespace ns { export function compat290(a: Numbr): void; }`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_basic_0080 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0080 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0081', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat291.ts', `function compat291(a: numbr): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_basic_0081 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0081 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0082', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat291.ts', `function compat291(a: strng): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_basic_0082 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0082 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0083', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat291.ts', `function compat291(a: boolea): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_basic_0083 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0083 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0084', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat291.ts', `function compat291(a: unknown): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "unknown",
              "dts2cpp_compat_basic_0084_param convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0084 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0085', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat291.ts', `function compat291(a: unknown): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "unknown", "dts2cpp_compat_basic_0085_param");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0085 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0086', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat291.ts', `function compat291(a: ): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1) {
            assert.strictEqual(converted.funcs[0].name, "compat291", "dts2cpp_compat_basic_0086 func name");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0086 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0087', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat291.ts', `class Compat291 { field: unknown`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.classes && converted.classes.length >= 1 &&
              converted.classes[0].variableList && converted.classes[0].variableList.length >= 1) {
            assert.strictEqual(converted.classes[0].variableList[0].type,
              "unknown",
              "dts2cpp_compat_basic_0087_field convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0087 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0088', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat291.ts', `type Compat291 = { x: unknown;`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.types && converted.types.length >= 1) {
            assert.strictEqual(converted.types[0].alias, "unknown", "dts2cpp_compat_basic_0088_alias");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0088 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0089', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat291.ts', `function compat291(a: unknown,): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "unknown",
              "dts2cpp_compat_basic_0089_param convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0089 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0090', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat291.ts', `declare namespace ns { export function compat291(a: Numbr): void; }`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_basic_0090 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0090 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0091', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat292.ts', `function compat292(a: numbr): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_basic_0091 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0091 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_basic_0092', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat292.ts', `function compat292(a: strng): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_basic_0092 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_basic_0092 execution error: ${String(err)}`);
    }
  });
});
