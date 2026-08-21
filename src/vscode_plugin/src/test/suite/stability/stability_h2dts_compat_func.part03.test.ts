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
import { transTskey2Ckey } from '../../../gen/gendts';
import * as parsec from '../../../parse/parsec';
import { runCompatSafe } from './stability_helpers';

suite('Stability_H2DTS_COMPAT_FUNC_Part03', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_COMPAT_FUNC_Part03.');


  test('h2dts_compat_func_0001', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat167(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0001 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0001 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0001 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_func_0001 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0001 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0002', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat167(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0002 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0002 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0002 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_func_0002 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0002 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0003', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat167(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0003 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0003 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0003 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_func_0003 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0003 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0004', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat167(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0004 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0004 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0004 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_func_0004 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0004 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0005', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat167(std::unique_ptr<uint64_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0005 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0005 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0005 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0005_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_func_0005_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0005 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0006', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat167(bad_type_167 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0006 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0006 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0006 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_167", "h2dts_compat_func_0006 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0006 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0007', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat167(std::unique_ptr<uint64_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0007 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0007 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0007 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0007_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_func_0007_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0007 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0008', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E167 { A, B }; void f(E167 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0008 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0008 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_func_0008 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0008 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0009', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat167(std:unique_ptr<uint64_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0009 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0009 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0009 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:unique_ptr<uint64_t>", "h2dts_compat_func_0009 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0009 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0010', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat168(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0010 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0010 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0010 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_func_0010 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0010 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0011', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat168(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0011 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0011 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0011 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_func_0011 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0011 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0012', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat168(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0012 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0012 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0012 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_func_0012 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0012 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0013', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat168(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0013 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0013 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0013 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_func_0013 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0013 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0014', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat168(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0014 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0014 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0014 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_func_0014 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0014 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0015', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat168(std::unique_ptr<int8_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0015 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0015 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0015 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0015_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_func_0015_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0015 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0016', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat168(bad_type_168 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0016 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0016 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0016 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_168", "h2dts_compat_func_0016 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0016 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0017', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat168(std::unique_ptr<int8_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0017 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0017 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0017 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0017_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_func_0017_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0017 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0018', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E168 { A, B }; void f(E168 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0018 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0018 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_func_0018 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0018 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0019', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat168(std:unique_ptr<int8_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0019 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0019 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0019 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:unique_ptr<int8_t>", "h2dts_compat_func_0019 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0019 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0020', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat169(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0020 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0020 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0020 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_func_0020 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0020 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0021', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat169(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0021 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0021 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0021 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_func_0021 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0021 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0022', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat169(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0022 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0022 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0022 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_func_0022 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0022 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0023', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat169(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0023 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0023 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0023 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_func_0023 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0023 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0024', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat169(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0024 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0024 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0024 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_func_0024 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0024 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0025', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat169(std::unique_ptr<int16_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0025 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0025 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0025 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0025_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_func_0025_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0025 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0026', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat169(bad_type_169 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0026 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0026 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0026 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_169", "h2dts_compat_func_0026 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0026 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0027', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat169(std::unique_ptr<int16_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0027 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0027 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0027 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0027_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_func_0027_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0027 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0028', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E169 { A, B }; void f(E169 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0028 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0028 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_func_0028 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0028 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0029', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat169(std:unique_ptr<int16_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0029 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0029 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0029 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:unique_ptr<int16_t>", "h2dts_compat_func_0029 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0029 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0030', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat170(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0030 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0030 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0030 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_func_0030 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0030 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0031', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat170(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0031 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0031 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0031 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_func_0031 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0031 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0032', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat170(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0032 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0032 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0032 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_func_0032 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0032 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0033', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat170(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0033 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0033 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0033 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_func_0033 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0033 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0034', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat170(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0034 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0034 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0034 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_func_0034 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0034 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0035', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat170(std::unique_ptr<int32_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0035 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0035 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0035 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0035_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_func_0035_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0035 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0036', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat170(bad_type_170 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0036 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0036 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0036 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_170", "h2dts_compat_func_0036 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0036 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0037', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat170(std::unique_ptr<int32_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0037 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0037 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0037 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0037_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_func_0037_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0037 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0038', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E170 { A, B }; void f(E170 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0038 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0038 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_func_0038 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0038 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0039', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat170(std:unique_ptr<int32_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0039 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0039 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0039 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:unique_ptr<int32_t>", "h2dts_compat_func_0039 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0039 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0040', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat171(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0040 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0040 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0040 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_func_0040 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0040 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0041', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat171(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0041 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0041 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0041 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_func_0041 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0041 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0042', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat171(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0042 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0042 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0042 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_func_0042 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0042 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0043', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat171(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0043 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0043 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0043 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_func_0043 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0043 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0044', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat171(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0044 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0044 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0044 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_func_0044 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0044 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0045', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat171(std::unique_ptr<int64_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0045 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0045 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0045 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0045_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_func_0045_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0045 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0046', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat171(bad_type_171 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0046 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0046 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0046 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_171", "h2dts_compat_func_0046 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0046 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0047', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat171(std::unique_ptr<int64_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0047 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0047 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0047 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0047_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_func_0047_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0047 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0048', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E171 { A, B }; void f(E171 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0048 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0048 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_func_0048 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0048 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0049', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat171(std:unique_ptr<int64_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0049 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0049 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0049 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:unique_ptr<int64_t>", "h2dts_compat_func_0049 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0049 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0050', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat172(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0050 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0050 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0050 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_func_0050 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0050 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0051', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat172(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0051 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0051 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0051 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_func_0051 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0051 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0052', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat172(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0052 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0052 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0052 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_func_0052 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0052 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0053', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat172(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0053 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0053 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0053 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_func_0053 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0053 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0054', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat172(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0054 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0054 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0054 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_func_0054 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0054 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0055', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat172(std::unique_ptr<bool> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0055 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0055 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0055 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0055_param convert output non-empty");
        assert.strictEqual(converted, "boolean", "h2dts_compat_func_0055_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0055 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0056', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat172(bad_type_172 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0056 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0056 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0056 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_172", "h2dts_compat_func_0056 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0056 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0057', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat172(std::unique_ptr<bool> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0057 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0057 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0057 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0057_param convert output non-empty");
        assert.strictEqual(converted, "boolean", "h2dts_compat_func_0057_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0057 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0058', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E172 { A, B }; void f(E172 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0058 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0058 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_func_0058 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0058 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0059', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat172(std:unique_ptr<bool> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0059 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0059 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0059 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:unique_ptr<bool>", "h2dts_compat_func_0059 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0059 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0060', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat173(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0060 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0060 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0060 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_func_0060 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0060 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0061', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat173(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0061 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0061 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0061 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_func_0061 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0061 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0062', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat173(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0062 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0062 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0062 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_func_0062 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0062 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0063', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat173(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0063 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0063 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0063 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_func_0063 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0063 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0064', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat173(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0064 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0064 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0064 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_func_0064 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0064 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0065', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat173(std::unique_ptr<char> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0065 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0065 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0065 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0065_param convert output non-empty");
        assert.strictEqual(converted, "string", "h2dts_compat_func_0065_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0065 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0066', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat173(bad_type_173 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0066 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0066 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0066 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_173", "h2dts_compat_func_0066 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0066 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0067', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat173(std::unique_ptr<char> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0067 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0067 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0067 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0067_param convert output non-empty");
        assert.strictEqual(converted, "string", "h2dts_compat_func_0067_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0067 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0068', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E173 { A, B }; void f(E173 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0068 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0068 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_func_0068 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0068 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0069', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat173(std:unique_ptr<char> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0069 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0069 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0069 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:unique_ptr<char>", "h2dts_compat_func_0069 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0069 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0070', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat174(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0070 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0070 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0070 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_func_0070 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0070 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0071', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat174(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0071 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0071 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0071 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_func_0071 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0071 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0072', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat174(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0072 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0072 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0072 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_func_0072 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0072 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0073', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat174(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0073 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0073 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0073 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_func_0073 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0073 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0074', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat174(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0074 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0074 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0074 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_func_0074 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0074 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0075', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat174(std::unique_ptr<wchar_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0075 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0075 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0075 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0075_param convert output non-empty");
        assert.strictEqual(converted, "string", "h2dts_compat_func_0075_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0075 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0076', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat174(bad_type_174 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0076 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0076 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0076 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_174", "h2dts_compat_func_0076 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0076 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0077', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat174(std::unique_ptr<wchar_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0077 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0077 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0077 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0077_param convert output non-empty");
        assert.strictEqual(converted, "string", "h2dts_compat_func_0077_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0077 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0078', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E174 { A, B }; void f(E174 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0078 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0078 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_func_0078 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0078 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0079', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat174(std:unique_ptr<wchar_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0079 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0079 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0079 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:unique_ptr<wchar_t>", "h2dts_compat_func_0079 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0079 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0080', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat175(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0080 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0080 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0080 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_func_0080 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0080 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0081', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat175(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0081 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0081 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0081 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_func_0081 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0081 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0082', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat175(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0082 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0082 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0082 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_func_0082 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0082 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0083', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat175(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0083 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0083 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0083 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_func_0083 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0083 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0084', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat175(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0084 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0084 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0084 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_func_0084 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0084 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0085', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat175(std::unique_ptr<char8_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0085 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0085 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0085 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0085_param convert output non-empty");
        assert.strictEqual(converted, "string", "h2dts_compat_func_0085_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0085 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0086', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat175(bad_type_175 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0086 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0086 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0086 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_175", "h2dts_compat_func_0086 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0086 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0087', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat175(std::unique_ptr<char8_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0087 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0087 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0087 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0087_param convert output non-empty");
        assert.strictEqual(converted, "string", "h2dts_compat_func_0087_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0087 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0088', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E175 { A, B }; void f(E175 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0088 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0088 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_func_0088 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0088 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0089', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat175(std:unique_ptr<char8_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0089 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0089 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0089 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:unique_ptr<char8_t>", "h2dts_compat_func_0089 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0089 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0090', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat176(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0090 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0090 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0090 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_func_0090 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0090 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0091', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat176(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0091 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0091 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0091 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_func_0091 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0091 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0092', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat176(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0092 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0092 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0092 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_func_0092 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0092 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0093', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat176(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0093 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0093 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0093 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_func_0093 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0093 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0094', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat176(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0094 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0094 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0094 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_func_0094 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0094 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0095', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat176(std::unique_ptr<char16_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0095 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0095 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0095 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0095_param convert output non-empty");
        assert.strictEqual(converted, "string", "h2dts_compat_func_0095_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0095 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0096', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat176(bad_type_176 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0096 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0096 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0096 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_176", "h2dts_compat_func_0096 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0096 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0097', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat176(std::unique_ptr<char16_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0097 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0097 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0097 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0097_param convert output non-empty");
        assert.strictEqual(converted, "string", "h2dts_compat_func_0097_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0097 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0098', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E176 { A, B }; void f(E176 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0098 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0098 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_func_0098 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0098 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0099', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat176(std:unique_ptr<char16_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0099 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0099 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0099 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:unique_ptr<char16_t>", "h2dts_compat_func_0099 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0099 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0100', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat177(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0100 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0100 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0100 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_func_0100 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0100 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_func_0101', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat177(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0101 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0101 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0101 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_func_0101 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0101 execution error: ${String(err)}`);
    }
  });
});
