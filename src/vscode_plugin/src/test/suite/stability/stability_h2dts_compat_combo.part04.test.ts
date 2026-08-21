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
import { transTskey2Ckey } from '../../../../gen/gendts';
import * as parsec from '../../../../parse/parsec';
import { runCompatSafe } from './stability_helpers';

suite('Stability_H2DTS_COMPAT_COMBO_Part04', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_COMPAT_COMBO_Part04.');


  test('h2dts_compat_combo_0001', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat293(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0001 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0001 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0001 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_combo_0001 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0001 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0002', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat293(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0002 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0002 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0002 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_combo_0002 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0002 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0003', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat293(CustomObject p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0003 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0003 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0003 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0003_param convert output non-empty");
        assert.strictEqual(converted, "any", "h2dts_compat_combo_0003_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0003 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0004', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat293(bad_type_293 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0004 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0004 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0004 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_293", "h2dts_compat_combo_0004 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0004 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0005', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat293(CustomObject p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0005 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0005 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0005 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0005_param convert output non-empty");
        assert.strictEqual(converted, "any", "h2dts_compat_combo_0005_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0005 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0006', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E293 { A, B }; void f(E293 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0006 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0006 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_combo_0006 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0006 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0007', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat293(CustomObject p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0007 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0007 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0007 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "CustomObject", "h2dts_compat_combo_0007 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0007 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0008', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat294(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0008 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0008 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0008 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_combo_0008 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0008 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0009', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat294(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0009 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0009 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0009 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_combo_0009 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0009 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0010', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat294(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0010 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0010 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0010 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_combo_0010 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0010 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0011', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat294(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0011 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0011 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0011 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_combo_0011 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0011 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0012', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat294(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0012 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0012 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0012 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_combo_0012 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0012 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0013', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat294(UserAnyType p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0013 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0013 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0013 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0013_param convert output non-empty");
        assert.strictEqual(converted, "any", "h2dts_compat_combo_0013_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0013 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0014', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat294(bad_type_294 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0014 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0014 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0014 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_294", "h2dts_compat_combo_0014 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0014 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0015', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat294(UserAnyType p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0015 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0015 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0015 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0015_param convert output non-empty");
        assert.strictEqual(converted, "any", "h2dts_compat_combo_0015_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0015 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0016', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E294 { A, B }; void f(E294 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0016 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0016 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_combo_0016 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0016 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0017', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat294(UserAnyType p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0017 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0017 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0017 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "UserAnyType", "h2dts_compat_combo_0017 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0017 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0018', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat295(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0018 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0018 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0018 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_combo_0018 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0018 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0019', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat295(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0019 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0019 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0019 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_combo_0019 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0019 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0020', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat295(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0020 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0020 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0020 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_combo_0020 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0020 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0021', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat295(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0021 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0021 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0021 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_combo_0021 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0021 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0022', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat295(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0022 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0022 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0022 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_combo_0022 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0022 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0023', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat295(Ns::UnknownObject p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0023 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0023 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0023 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0023_param convert output non-empty");
        assert.strictEqual(converted, "any", "h2dts_compat_combo_0023_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0023 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0024', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat295(bad_type_295 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0024 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0024 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0024 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_295", "h2dts_compat_combo_0024 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0024 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0025', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat295(Ns::UnknownObject p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0025 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0025 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0025 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0025_param convert output non-empty");
        assert.strictEqual(converted, "any", "h2dts_compat_combo_0025_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0025 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0026', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E295 { A, B }; void f(E295 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0026 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0026 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_combo_0026 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0026 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0027', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat295(Ns:UnknownObject p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0027 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0027 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0027 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "Ns:UnknownObject", "h2dts_compat_combo_0027 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0027 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0028', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat627(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0028 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0028 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0028 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_combo_0028 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0028 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0029', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat627(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0029 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0029 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0029 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_combo_0029 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0029 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0030', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat627(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0030 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0030 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0030 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_combo_0030 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0030 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0031', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat627(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0031 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0031 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0031 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_combo_0031 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0031 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0032', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat627(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0032 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0032 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0032 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_combo_0032 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0032 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0033', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat627(signed char p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0033 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0033 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0033 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0033_param convert output non-empty");
        assert.strictEqual(converted, "string", "h2dts_compat_combo_0033_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0033 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0034', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat627(bad_type_627 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0034 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0034 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0034 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_627", "h2dts_compat_combo_0034 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0034 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0035', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat627(signed char p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0035 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0035 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0035 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0035_param convert output non-empty");
        assert.strictEqual(converted, "string", "h2dts_compat_combo_0035_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0035 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0036', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E627 { A, B }; void f(E627 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0036 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0036 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_combo_0036 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0036 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0037', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat627(signed char p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0037 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0037 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0037 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "signed char", "h2dts_compat_combo_0037 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0037 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0038', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat630(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0038 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0038 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0038 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_combo_0038 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0038 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0039', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat630(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0039 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0039 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0039 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_combo_0039 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0039 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0040', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat630(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0040 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0040 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0040 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_combo_0040 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0040 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0041', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat630(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0041 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0041 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0041 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_combo_0041 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0041 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0042', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat630(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0042 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0042 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0042 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_combo_0042 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0042 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0043', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat630(std::wstring p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0043 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0043 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0043 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0043_param convert output non-empty");
        assert.strictEqual(converted, "string", "h2dts_compat_combo_0043_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0043 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0044', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat630(bad_type_630 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0044 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0044 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0044 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_630", "h2dts_compat_combo_0044 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0044 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0045', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat630(std::wstring p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0045 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0045 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0045 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0045_param convert output non-empty");
        assert.strictEqual(converted, "string", "h2dts_compat_combo_0045_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0045 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0046', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E630 { A, B }; void f(E630 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0046 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0046 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_combo_0046 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0046 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0047', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat630(std:wstring p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0047 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0047 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0047 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:wstring", "h2dts_compat_combo_0047 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0047 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0048', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat631(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0048 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0048 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0048 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_combo_0048 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0048 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0049', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat631(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0049 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0049 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0049 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_combo_0049 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0049 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0050', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat631(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0050 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0050 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0050 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_combo_0050 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0050 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0051', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat631(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0051 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0051 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0051 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_combo_0051 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0051 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0052', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat631(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0052 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0052 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0052 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_combo_0052 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0052 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0053', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat631(const char* p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0053 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0053 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0053 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0053_param convert output non-empty");
        assert.strictEqual(converted, "string", "h2dts_compat_combo_0053_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0053 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0054', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat631(bad_type_631 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0054 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0054 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0054 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_631", "h2dts_compat_combo_0054 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0054 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0055', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat631(const char* p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0055 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0055 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0055 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0055_param convert output non-empty");
        assert.strictEqual(converted, "string", "h2dts_compat_combo_0055_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0055 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0056', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E631 { A, B }; void f(E631 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0056 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0056 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_combo_0056 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0056 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0057', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat631(const char* p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0057 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0057 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0057 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "char*", "h2dts_compat_combo_0057 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0057 execution error: ${String(err)}`);
    }
  });
});
