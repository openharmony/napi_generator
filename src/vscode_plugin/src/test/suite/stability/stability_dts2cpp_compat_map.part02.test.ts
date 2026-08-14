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

suite('Stability_DTS2CPP_COMPAT_MAP_Part02', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_COMPAT_MAP_Part02.');


  test('dts2cpp_compat_map_0001', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat66.ts', `function compat66(a: boolea): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_map_0001 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0001 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0002', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat66.ts', `function compat66(a: Map<any,number>): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "Map<any,number>",
              "dts2cpp_compat_map_0002_param convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0002 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0003', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat66.ts', `function compat66(a: Mapany,number>): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "Mapany,number>", "dts2cpp_compat_map_0003_param");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0003 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0004', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat66.ts', `function compat66(a: ): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1) {
            assert.strictEqual(converted.funcs[0].name, "compat66", "dts2cpp_compat_map_0004 func name");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0004 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0005', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat66.ts', `class Compat66 { field: Map<any,number>`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.classes && converted.classes.length >= 1 &&
              converted.classes[0].variableList && converted.classes[0].variableList.length >= 1) {
            assert.strictEqual(converted.classes[0].variableList[0].type,
              "Map<any,number>",
              "dts2cpp_compat_map_0005_field convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0005 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0006', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat66.ts', `type Compat66 = { x: Map<any,number>;`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.types && converted.types.length >= 1) {
            assert.strictEqual(converted.types[0].alias, "Map<any,number>", "dts2cpp_compat_map_0006_alias");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0006 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0007', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat66.ts', `function compat66(a: Map<any,number>,): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "Map<any,number>",
              "dts2cpp_compat_map_0007_param convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0007 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0008', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat66.ts', `declare namespace ns { export function compat66(a: Numbr): void; }`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_map_0008 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0008 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0009', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat281.ts', `function compat281(a: numbr): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_map_0009 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0009 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0010', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat281.ts', `function compat281(a: strng): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_map_0010 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0010 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0011', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat281.ts', `function compat281(a: boolea): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_map_0011 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0011 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0012', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat281.ts', `function compat281(a: Map<string, number>): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "std::map<std::string, double>",
              "dts2cpp_compat_map_0012_param convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0012 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0013', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat281.ts', `function compat281(a: Mapstring, number>): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "Mapstring, number>", "dts2cpp_compat_map_0013_param");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0013 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0014', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat281.ts', `function compat281(a: ): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1) {
            assert.strictEqual(converted.funcs[0].name, "compat281", "dts2cpp_compat_map_0014 func name");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0014 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0015', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat281.ts', `class Compat281 { field: Map<string, number>`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.classes && converted.classes.length >= 1 &&
              converted.classes[0].variableList && converted.classes[0].variableList.length >= 1) {
            assert.strictEqual(converted.classes[0].variableList[0].type,
              "std::map<std::string, double>",
              "dts2cpp_compat_map_0015_field convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0015 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0016', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat281.ts', `type Compat281 = { x: Map<string, number>;`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.types && converted.types.length >= 1) {
            assert.strictEqual(converted.types[0].alias, "Map<string, number>", "dts2cpp_compat_map_0016_alias");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0016 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0017', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat281.ts', `function compat281(a: Map<string, number>,): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "std::map<std::string, double>",
              "dts2cpp_compat_map_0017_param convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0017 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0018', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat281.ts', `declare namespace ns { export function compat281(a: Numbr): void; }`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_map_0018 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0018 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0019', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat282.ts', `function compat282(a: numbr): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_map_0019 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0019 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0020', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat282.ts', `function compat282(a: strng): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_map_0020 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0020 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0021', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat282.ts', `function compat282(a: boolea): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_map_0021 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0021 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0022', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat282.ts', `function compat282(a: Map<string, string>): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "std::map<std::string, std::string>",
              "dts2cpp_compat_map_0022_param convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0022 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0023', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat282.ts', `function compat282(a: Mapstring, string>): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "Mapstring, string>", "dts2cpp_compat_map_0023_param");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0023 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0024', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat282.ts', `function compat282(a: ): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1) {
            assert.strictEqual(converted.funcs[0].name, "compat282", "dts2cpp_compat_map_0024 func name");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0024 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0025', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat282.ts', `class Compat282 { field: Map<string, string>`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.classes && converted.classes.length >= 1 &&
              converted.classes[0].variableList && converted.classes[0].variableList.length >= 1) {
            assert.strictEqual(converted.classes[0].variableList[0].type,
              "std::map<std::string, std::string>",
              "dts2cpp_compat_map_0025_field convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0025 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0026', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat282.ts', `type Compat282 = { x: Map<string, string>;`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.types && converted.types.length >= 1) {
            assert.strictEqual(converted.types[0].alias, "Map<string, string>", "dts2cpp_compat_map_0026_alias");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0026 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0027', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat282.ts', `function compat282(a: Map<string, string>,): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "std::map<std::string, std::string>",
              "dts2cpp_compat_map_0027_param convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0027 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0028', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat282.ts', `declare namespace ns { export function compat282(a: Numbr): void; }`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_map_0028 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0028 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0029', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat283.ts', `function compat283(a: numbr): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_map_0029 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0029 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0030', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat283.ts', `function compat283(a: strng): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_map_0030 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0030 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0031', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat283.ts', `function compat283(a: boolea): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_map_0031 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0031 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0032', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat283.ts', `function compat283(a: Map<string, boolean>): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "std::map<std::string, bool>",
              "dts2cpp_compat_map_0032_param convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0032 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0033', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat283.ts', `function compat283(a: Mapstring, boolean>): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "Mapstring, boolean>", "dts2cpp_compat_map_0033_param");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0033 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0034', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat283.ts', `function compat283(a: ): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1) {
            assert.strictEqual(converted.funcs[0].name, "compat283", "dts2cpp_compat_map_0034 func name");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0034 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0035', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat283.ts', `class Compat283 { field: Map<string, boolean>`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.classes && converted.classes.length >= 1 &&
              converted.classes[0].variableList && converted.classes[0].variableList.length >= 1) {
            assert.strictEqual(converted.classes[0].variableList[0].type,
              "std::map<std::string, bool>",
              "dts2cpp_compat_map_0035_field convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0035 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0036', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat283.ts', `type Compat283 = { x: Map<string, boolean>;`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.types && converted.types.length >= 1) {
            assert.strictEqual(converted.types[0].alias, "Map<string, boolean>", "dts2cpp_compat_map_0036_alias");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0036 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0037', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat283.ts', `function compat283(a: Map<string, boolean>,): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "std::map<std::string, bool>",
              "dts2cpp_compat_map_0037_param convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0037 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0038', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat283.ts', `declare namespace ns { export function compat283(a: Numbr): void; }`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_map_0038 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0038 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0039', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat284.ts', `function compat284(a: numbr): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_map_0039 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0039 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0040', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat284.ts', `function compat284(a: strng): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_map_0040 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0040 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0041', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat284.ts', `function compat284(a: boolea): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_map_0041 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0041 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0042', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat284.ts', `function compat284(a: Map<number, number>): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "std::map<double, double>",
              "dts2cpp_compat_map_0042_param convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0042 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0043', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat284.ts', `function compat284(a: Mapnumber, number>): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "Mapnumber, number>", "dts2cpp_compat_map_0043_param");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0043 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0044', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat284.ts', `function compat284(a: ): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1) {
            assert.strictEqual(converted.funcs[0].name, "compat284", "dts2cpp_compat_map_0044 func name");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0044 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0045', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat284.ts', `class Compat284 { field: Map<number, number>`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.classes && converted.classes.length >= 1 &&
              converted.classes[0].variableList && converted.classes[0].variableList.length >= 1) {
            assert.strictEqual(converted.classes[0].variableList[0].type,
              "std::map<double, double>",
              "dts2cpp_compat_map_0045_field convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0045 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0046', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat284.ts', `type Compat284 = { x: Map<number, number>;`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.types && converted.types.length >= 1) {
            assert.strictEqual(converted.types[0].alias, "Map<number, number>", "dts2cpp_compat_map_0046_alias");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0046 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0047', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat284.ts', `function compat284(a: Map<number, number>,): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "std::map<double, double>",
              "dts2cpp_compat_map_0047_param convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0047 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0048', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat284.ts', `declare namespace ns { export function compat284(a: Numbr): void; }`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_map_0048 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0048 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0049', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat285.ts', `function compat285(a: numbr): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_map_0049 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0049 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0050', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat285.ts', `function compat285(a: strng): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_map_0050 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0050 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0051', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat285.ts', `function compat285(a: boolea): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_map_0051 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0051 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0052', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat285.ts', `function compat285(a: Map<number, string>): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "std::map<double, std::string>",
              "dts2cpp_compat_map_0052_param convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0052 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0053', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat285.ts', `function compat285(a: Mapnumber, string>): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "Mapnumber, string>", "dts2cpp_compat_map_0053_param");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0053 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0054', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat285.ts', `function compat285(a: ): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1) {
            assert.strictEqual(converted.funcs[0].name, "compat285", "dts2cpp_compat_map_0054 func name");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0054 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0055', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat285.ts', `class Compat285 { field: Map<number, string>`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.classes && converted.classes.length >= 1 &&
              converted.classes[0].variableList && converted.classes[0].variableList.length >= 1) {
            assert.strictEqual(converted.classes[0].variableList[0].type,
              "std::map<double, std::string>",
              "dts2cpp_compat_map_0055_field convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0055 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0056', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat285.ts', `type Compat285 = { x: Map<number, string>;`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.types && converted.types.length >= 1) {
            assert.strictEqual(converted.types[0].alias, "Map<number, string>", "dts2cpp_compat_map_0056_alias");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0056 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0057', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat285.ts', `function compat285(a: Map<number, string>,): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "std::map<double, std::string>",
              "dts2cpp_compat_map_0057_param convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0057 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0058', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat285.ts', `declare namespace ns { export function compat285(a: Numbr): void; }`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_map_0058 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0058 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0059', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat286.ts', `function compat286(a: numbr): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_map_0059 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0059 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0060', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat286.ts', `function compat286(a: strng): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_map_0060 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0060 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0061', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat286.ts', `function compat286(a: boolea): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_map_0061 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0061 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0062', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat286.ts', `function compat286(a: Map<number, boolean>): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "std::map<double, bool>",
              "dts2cpp_compat_map_0062_param convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0062 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0063', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat286.ts', `function compat286(a: Mapnumber, boolean>): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "Mapnumber, boolean>", "dts2cpp_compat_map_0063_param");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0063 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0064', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat286.ts', `function compat286(a: ): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1) {
            assert.strictEqual(converted.funcs[0].name, "compat286", "dts2cpp_compat_map_0064 func name");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0064 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0065', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat286.ts', `class Compat286 { field: Map<number, boolean>`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.classes && converted.classes.length >= 1 &&
              converted.classes[0].variableList && converted.classes[0].variableList.length >= 1) {
            assert.strictEqual(converted.classes[0].variableList[0].type,
              "std::map<double, bool>",
              "dts2cpp_compat_map_0065_field convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0065 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0066', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat286.ts', `type Compat286 = { x: Map<number, boolean>;`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.types && converted.types.length >= 1) {
            assert.strictEqual(converted.types[0].alias, "Map<number, boolean>", "dts2cpp_compat_map_0066_alias");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0066 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0067', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat286.ts', `function compat286(a: Map<number, boolean>,): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "std::map<double, bool>",
              "dts2cpp_compat_map_0067_param convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0067 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_map_0068', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat286.ts', `declare namespace ns { export function compat286(a: Numbr): void; }`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_map_0068 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_map_0068 execution error: ${String(err)}`);
    }
  });
});
