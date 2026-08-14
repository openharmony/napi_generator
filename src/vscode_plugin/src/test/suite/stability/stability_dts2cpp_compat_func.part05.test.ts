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
        const parsed = doParseTs('compat56.ts', `function compat56(a: ): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1) {
            assert.strictEqual(converted.funcs[0].name, "compat56", "dts2cpp_compat_func_0001 func name");
          }
        }
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
        const parsed = doParseTs('compat56.ts', `class Compat56 { field: (p0:string,p1:string)=>void`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.classes && converted.classes.length >= 1 &&
              converted.classes[0].variableList && converted.classes[0].variableList.length >= 1) {
            assert.strictEqual(converted.classes[0].variableList[0].type,
              "std::function<void(std::string, std::string)>",
              "dts2cpp_compat_func_0002_field convert output");
          }
        }
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
        const parsed = doParseTs('compat56.ts', `type Compat56 = { x: (p0:string,p1:string)=>void;`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.types && converted.types.length >= 1) {
            assert.strictEqual(converted.types[0].alias, "(p0:string,p1:string)=>void", "dts2cpp_compat_func_0003_alias");
          }
        }
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
        const parsed = doParseTs('compat56.ts', `function compat56(a: (p0:string,p1:string)=>void,): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "std::function<void(std::string, std::string)>",
              "dts2cpp_compat_func_0004_param convert output");
          }
        }
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
        const parsed = doParseTs('compat56.ts', `declare namespace ns { export function compat56(a: Numbr): void; }`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_func_0005 param type");
          }
        }
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
        const parsed = doParseTs('compat57.ts', `function compat57(a: numbr): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_func_0006 param type");
          }
        }
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
        const parsed = doParseTs('compat57.ts', `function compat57(a: strng): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_func_0007 param type");
          }
        }
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
        const parsed = doParseTs('compat57.ts', `function compat57(a: boolea): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_func_0008 param type");
          }
        }
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
        const parsed = doParseTs('compat57.ts', `function compat57(a: (p0:boolean,p1:number)=>void): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "std::function<void(bool, double)>",
              "dts2cpp_compat_func_0009_param convert output");
          }
        }
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
        const parsed = doParseTs('compat57.ts', `function compat57(a: (p0:boolean,p1:number)=>void): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "std::function<void(bool, double)>",
              "dts2cpp_compat_func_0010_param");
          }
        }
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
        const parsed = doParseTs('compat57.ts', `function compat57(a: ): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1) {
            assert.strictEqual(converted.funcs[0].name, "compat57", "dts2cpp_compat_func_0011 func name");
          }
        }
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
        const parsed = doParseTs('compat57.ts', `class Compat57 { field: (p0:boolean,p1:number)=>void`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.classes && converted.classes.length >= 1 &&
              converted.classes[0].variableList && converted.classes[0].variableList.length >= 1) {
            assert.strictEqual(converted.classes[0].variableList[0].type,
              "std::function<void(bool, double)>",
              "dts2cpp_compat_func_0012_field convert output");
          }
        }
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
        const parsed = doParseTs('compat57.ts', `type Compat57 = { x: (p0:boolean,p1:number)=>void;`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.types && converted.types.length >= 1) {
            assert.strictEqual(converted.types[0].alias, "(p0:boolean,p1:number)=>void", "dts2cpp_compat_func_0013_alias");
          }
        }
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
        const parsed = doParseTs('compat57.ts', `function compat57(a: (p0:boolean,p1:number)=>void,): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "std::function<void(bool, double)>",
              "dts2cpp_compat_func_0014_param convert output");
          }
        }
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
        const parsed = doParseTs('compat57.ts', `declare namespace ns { export function compat57(a: Numbr): void; }`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_func_0015 param type");
          }
        }
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
        const parsed = doParseTs('compat58.ts', `function compat58(a: numbr): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_func_0016 param type");
          }
        }
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
        const parsed = doParseTs('compat58.ts', `function compat58(a: strng): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_func_0017 param type");
          }
        }
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
        const parsed = doParseTs('compat58.ts', `function compat58(a: boolea): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_func_0018 param type");
          }
        }
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
        const parsed = doParseTs('compat58.ts', `function compat58(a: (p0:boolean,p1:boolean)=>void): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "std::function<void(bool, bool)>",
              "dts2cpp_compat_func_0019_param convert output");
          }
        }
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
        const parsed = doParseTs('compat58.ts', `function compat58(a: (p0:boolean,p1:boolean)=>void): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "std::function<void(bool, bool)>",
              "dts2cpp_compat_func_0020_param");
          }
        }
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
        const parsed = doParseTs('compat58.ts', `function compat58(a: ): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1) {
            assert.strictEqual(converted.funcs[0].name, "compat58", "dts2cpp_compat_func_0021 func name");
          }
        }
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
        const parsed = doParseTs('compat58.ts', `class Compat58 { field: (p0:boolean,p1:boolean)=>void`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.classes && converted.classes.length >= 1 &&
              converted.classes[0].variableList && converted.classes[0].variableList.length >= 1) {
            assert.strictEqual(converted.classes[0].variableList[0].type,
              "std::function<void(bool, bool)>",
              "dts2cpp_compat_func_0022_field convert output");
          }
        }
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
        const parsed = doParseTs('compat58.ts', `type Compat58 = { x: (p0:boolean,p1:boolean)=>void;`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.types && converted.types.length >= 1) {
            assert.strictEqual(converted.types[0].alias, "(p0:boolean,p1:boolean)=>void", "dts2cpp_compat_func_0023_alias");
          }
        }
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
        const parsed = doParseTs('compat58.ts', `function compat58(a: (p0:boolean,p1:boolean)=>void,): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "std::function<void(bool, bool)>",
              "dts2cpp_compat_func_0024_param convert output");
          }
        }
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
        const parsed = doParseTs('compat58.ts', `declare namespace ns { export function compat58(a: Numbr): void; }`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_func_0025 param type");
          }
        }
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
        const parsed = doParseTs('compat69.ts', `function compat69(a: numbr): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_func_0026 param type");
          }
        }
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
        const parsed = doParseTs('compat69.ts', `function compat69(a: strng): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_func_0027 param type");
          }
        }
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
        const parsed = doParseTs('compat69.ts', `function compat69(a: boolea): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_func_0028 param type");
          }
        }
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
        const parsed = doParseTs('compat69.ts', `function compat69(a: Callback<any>): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "std::function<void(std::any)>",
              "dts2cpp_compat_func_0029_param convert output");
          }
        }
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
        const parsed = doParseTs('compat69.ts', `function compat69(a: Callbackany>): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "Callbackany>", "dts2cpp_compat_func_0030_param");
          }
        }
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
        const parsed = doParseTs('compat69.ts', `function compat69(a: ): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1) {
            assert.strictEqual(converted.funcs[0].name, "compat69", "dts2cpp_compat_func_0031 func name");
          }
        }
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
        const parsed = doParseTs('compat69.ts', `class Compat69 { field: Callback<any>`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.classes && converted.classes.length >= 1 &&
              converted.classes[0].variableList && converted.classes[0].variableList.length >= 1) {
            assert.strictEqual(converted.classes[0].variableList[0].type,
              "std::function<void(std::any)>",
              "dts2cpp_compat_func_0032_field convert output");
          }
        }
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
        const parsed = doParseTs('compat69.ts', `type Compat69 = { x: Callback<any>;`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.types && converted.types.length >= 1) {
            assert.strictEqual(converted.types[0].alias, "Callback<any>", "dts2cpp_compat_func_0033_alias");
          }
        }
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
        const parsed = doParseTs('compat69.ts', `function compat69(a: Callback<any>,): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "std::function<void(std::any)>",
              "dts2cpp_compat_func_0034_param convert output");
          }
        }
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
        const parsed = doParseTs('compat69.ts', `declare namespace ns { export function compat69(a: Numbr): void; }`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_func_0035 param type");
          }
        }
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
        const parsed = doParseTs('compat70.ts', `function compat70(a: numbr): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_func_0036 param type");
          }
        }
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
        const parsed = doParseTs('compat70.ts', `function compat70(a: strng): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_func_0037 param type");
          }
        }
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
        const parsed = doParseTs('compat70.ts', `function compat70(a: boolea): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_func_0038 param type");
          }
        }
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
        const parsed = doParseTs('compat70.ts', `function compat70(a: Callback<object>): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "std::function<void(std::any)>",
              "dts2cpp_compat_func_0039_param convert output");
          }
        }
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
        const parsed = doParseTs('compat70.ts', `function compat70(a: Callbackobject>): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "Callbackobject>", "dts2cpp_compat_func_0040_param");
          }
        }
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
        const parsed = doParseTs('compat70.ts', `function compat70(a: ): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1) {
            assert.strictEqual(converted.funcs[0].name, "compat70", "dts2cpp_compat_func_0041 func name");
          }
        }
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
        const parsed = doParseTs('compat70.ts', `class Compat70 { field: Callback<object>`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.classes && converted.classes.length >= 1 &&
              converted.classes[0].variableList && converted.classes[0].variableList.length >= 1) {
            assert.strictEqual(converted.classes[0].variableList[0].type,
              "std::function<void(std::any)>",
              "dts2cpp_compat_func_0042_field convert output");
          }
        }
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
        const parsed = doParseTs('compat70.ts', `type Compat70 = { x: Callback<object>;`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.types && converted.types.length >= 1) {
            assert.strictEqual(converted.types[0].alias, "Callback<object>", "dts2cpp_compat_func_0043_alias");
          }
        }
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
        const parsed = doParseTs('compat70.ts', `function compat70(a: Callback<object>,): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "std::function<void(std::any)>",
              "dts2cpp_compat_func_0044_param convert output");
          }
        }
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
        const parsed = doParseTs('compat70.ts', `declare namespace ns { export function compat70(a: Numbr): void; }`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_func_0045 param type");
          }
        }
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
        const parsed = doParseTs('compat71.ts', `function compat71(a: numbr): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_func_0046 param type");
          }
        }
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
        const parsed = doParseTs('compat71.ts', `function compat71(a: strng): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_func_0047 param type");
          }
        }
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
        const parsed = doParseTs('compat71.ts', `function compat71(a: boolea): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_func_0048 param type");
          }
        }
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
        const parsed = doParseTs('compat71.ts', `function compat71(a: Callback<any[[>): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "std::function<void(any[])>",
              "dts2cpp_compat_func_0049_param convert output");
          }
        }
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
        const parsed = doParseTs('compat71.ts', `function compat71(a: Callbackany[]>): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "Callbackany[]>", "dts2cpp_compat_func_0050_param");
          }
        }
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
        const parsed = doParseTs('compat71.ts', `function compat71(a: ): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1) {
            assert.strictEqual(converted.funcs[0].name, "compat71", "dts2cpp_compat_func_0051 func name");
          }
        }
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
        const parsed = doParseTs('compat71.ts', `class Compat71 { field: Callback<any[]>`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.classes && converted.classes.length >= 1 &&
              converted.classes[0].variableList && converted.classes[0].variableList.length >= 1) {
            assert.strictEqual(converted.classes[0].variableList[0].type,
              "std::function<void(any[])>",
              "dts2cpp_compat_func_0052_field convert output");
          }
        }
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
        const parsed = doParseTs('compat71.ts', `type Compat71 = { x: Callback<any[]>;`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.types && converted.types.length >= 1) {
            assert.strictEqual(converted.types[0].alias, "Callback<any[]>", "dts2cpp_compat_func_0053_alias");
          }
        }
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
        const parsed = doParseTs('compat71.ts', `function compat71(a: Callback<any[]>,): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "std::function<void(any[])>",
              "dts2cpp_compat_func_0054_param convert output");
          }
        }
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
        const parsed = doParseTs('compat71.ts', `declare namespace ns { export function compat71(a: Numbr): void; }`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_func_0055 param type");
          }
        }
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
        const parsed = doParseTs('compat72.ts', `function compat72(a: numbr): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_func_0056 param type");
          }
        }
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
        const parsed = doParseTs('compat72.ts', `function compat72(a: strng): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_func_0057 param type");
          }
        }
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
        const parsed = doParseTs('compat72.ts', `function compat72(a: boolea): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_func_0058 param type");
          }
        }
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
        const parsed = doParseTs('compat72.ts', `function compat72(a: Callback<object[[>): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "std::function<void(object[])>",
              "dts2cpp_compat_func_0059_param convert output");
          }
        }
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
        const parsed = doParseTs('compat72.ts', `function compat72(a: Callbackobject[]>): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "Callbackobject[]>", "dts2cpp_compat_func_0060_param");
          }
        }
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
        const parsed = doParseTs('compat72.ts', `function compat72(a: ): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1) {
            assert.strictEqual(converted.funcs[0].name, "compat72", "dts2cpp_compat_func_0061 func name");
          }
        }
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
        const parsed = doParseTs('compat72.ts', `class Compat72 { field: Callback<object[]>`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.classes && converted.classes.length >= 1 &&
              converted.classes[0].variableList && converted.classes[0].variableList.length >= 1) {
            assert.strictEqual(converted.classes[0].variableList[0].type,
              "std::function<void(object[])>",
              "dts2cpp_compat_func_0062_field convert output");
          }
        }
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
        const parsed = doParseTs('compat72.ts', `type Compat72 = { x: Callback<object[]>;`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.types && converted.types.length >= 1) {
            assert.strictEqual(converted.types[0].alias, "Callback<object[]>", "dts2cpp_compat_func_0063_alias");
          }
        }
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
        const parsed = doParseTs('compat72.ts', `function compat72(a: Callback<object[]>,): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "std::function<void(object[])>",
              "dts2cpp_compat_func_0064_param convert output");
          }
        }
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
        const parsed = doParseTs('compat72.ts', `declare namespace ns { export function compat72(a: Numbr): void; }`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_func_0065 param type");
          }
        }
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
        const parsed = doParseTs('compat73.ts', `function compat73(a: numbr): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_func_0066 param type");
          }
        }
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
        const parsed = doParseTs('compat73.ts', `function compat73(a: strng): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_func_0067 param type");
          }
        }
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
        const parsed = doParseTs('compat73.ts', `function compat73(a: boolea): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_func_0068 param type");
          }
        }
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
        const parsed = doParseTs('compat73.ts', `function compat73(a: (p0:any)=>any): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "std::function<std::any(std::any)>",
              "dts2cpp_compat_func_0069_param convert output");
          }
        }
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
        const parsed = doParseTs('compat73.ts', `function compat73(a: (p0:any)=>any): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "std::function<std::any(std::any)>",
              "dts2cpp_compat_func_0070_param");
          }
        }
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
        const parsed = doParseTs('compat73.ts', `function compat73(a: ): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1) {
            assert.strictEqual(converted.funcs[0].name, "compat73", "dts2cpp_compat_func_0071 func name");
          }
        }
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
        const parsed = doParseTs('compat73.ts', `class Compat73 { field: (p0:any)=>any`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.classes && converted.classes.length >= 1 &&
              converted.classes[0].variableList && converted.classes[0].variableList.length >= 1) {
            assert.strictEqual(converted.classes[0].variableList[0].type,
              "std::function<std::any(std::any)>",
              "dts2cpp_compat_func_0072_field convert output");
          }
        }
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
        const parsed = doParseTs('compat73.ts', `type Compat73 = { x: (p0:any)=>any;`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.types && converted.types.length >= 1) {
            assert.strictEqual(converted.types[0].alias, "(p0:any)=>any", "dts2cpp_compat_func_0073_alias");
          }
        }
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
        const parsed = doParseTs('compat73.ts', `function compat73(a: (p0:any)=>any,): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "std::function<std::any(std::any)>",
              "dts2cpp_compat_func_0074_param convert output");
          }
        }
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
        const parsed = doParseTs('compat73.ts', `declare namespace ns { export function compat73(a: Numbr): void; }`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_func_0075 param type");
          }
        }
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
        const parsed = doParseTs('compat74.ts', `function compat74(a: numbr): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_func_0076 param type");
          }
        }
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
        const parsed = doParseTs('compat74.ts', `function compat74(a: strng): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_func_0077 param type");
          }
        }
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
        const parsed = doParseTs('compat74.ts', `function compat74(a: boolea): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_func_0078 param type");
          }
        }
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
        const parsed = doParseTs('compat74.ts', `function compat74(a: (p0:object)=>object): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "std::function<std::any(std::any)>",
              "dts2cpp_compat_func_0079_param convert output");
          }
        }
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
        const parsed = doParseTs('compat74.ts', `function compat74(a: (p0:object)=>object): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "std::function<std::any(std::any)>",
              "dts2cpp_compat_func_0080_param");
          }
        }
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
        const parsed = doParseTs('compat74.ts', `function compat74(a: ): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1) {
            assert.strictEqual(converted.funcs[0].name, "compat74", "dts2cpp_compat_func_0081 func name");
          }
        }
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
        const parsed = doParseTs('compat74.ts', `class Compat74 { field: (p0:object)=>object`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.classes && converted.classes.length >= 1 &&
              converted.classes[0].variableList && converted.classes[0].variableList.length >= 1) {
            assert.strictEqual(converted.classes[0].variableList[0].type,
              "std::function<std::any(std::any)>",
              "dts2cpp_compat_func_0082_field convert output");
          }
        }
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
        const parsed = doParseTs('compat74.ts', `type Compat74 = { x: (p0:object)=>object;`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.types && converted.types.length >= 1) {
            assert.strictEqual(converted.types[0].alias, "(p0:object)=>object", "dts2cpp_compat_func_0083_alias");
          }
        }
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
        const parsed = doParseTs('compat74.ts', `function compat74(a: (p0:object)=>object,): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "std::function<std::any(std::any)>",
              "dts2cpp_compat_func_0084_param convert output");
          }
        }
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
        const parsed = doParseTs('compat74.ts', `declare namespace ns { export function compat74(a: Numbr): void; }`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "Numbr", "dts2cpp_compat_func_0085 param type");
          }
        }
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
        const parsed = doParseTs('compat75.ts', `function compat75(a: numbr): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "numbr", "dts2cpp_compat_func_0086 param type");
          }
        }
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
        const parsed = doParseTs('compat75.ts', `function compat75(a: strng): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "strng", "dts2cpp_compat_func_0087 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0087 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0088', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat75.ts', `function compat75(a: boolea): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type, "boolea", "dts2cpp_compat_func_0088 param type");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0088 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0089', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat75.ts', `function compat75(a: (p0:any,p1:object)=>void): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "std::function<void(std::any, std::any)>",
              "dts2cpp_compat_func_0089_param convert output");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0089 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0090', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat75.ts', `function compat75(a: (p0:any,p1:object)=>void): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1 &&
              converted.funcs[0].parameters && converted.funcs[0].parameters.length >= 1) {
            assert.strictEqual(converted.funcs[0].parameters[0].type,
              "std::function<void(std::any, std::any)>",
              "dts2cpp_compat_func_0090_param");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0090 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_compat_func_0091', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const parsed = doParseTs('compat75.ts', `function compat75(a: ): void {}`);
        assert.ok(parsed === undefined || typeof parsed === 'object');
        if (parsed !== undefined && parsed !== null && typeof parsed === 'object') {
          const converted = transParseObj(parsed);
          assert.ok(converted === undefined || typeof converted === 'object');
          if (converted.funcs && converted.funcs.length >= 1) {
            assert.strictEqual(converted.funcs[0].name, "compat75", "dts2cpp_compat_func_0091 func name");
          }
        }
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`dts2cpp_compat_func_0091 execution error: ${String(err)}`);
    }
  });
});
