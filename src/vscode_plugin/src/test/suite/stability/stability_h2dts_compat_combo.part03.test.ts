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

suite('Stability_H2DTS_COMPAT_COMBO_Part03', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_COMPAT_COMBO_Part03.');


  test('h2dts_compat_combo_0001', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat217(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0001 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0001 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0001 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_combo_0001 param type");
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
        const r = parsec.parseFunction(`void compat217(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0002 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0002 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0002 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_combo_0002 param type");
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
        const r = parsec.parseFunction(`void compat217(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0003 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0003 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0003 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_combo_0003 param type");
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
        const r = parsec.parseFunction(`namespace ns { void compat217(std::weak_ptr<char32_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0004 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0004 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0004 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0004_param convert output non-empty");
        assert.strictEqual(converted, "string", "h2dts_compat_combo_0004_param convert output");
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
        const r = parsec.parseFunction(`void compat217(bad_type_217 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0005 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0005 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0005 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_217", "h2dts_compat_combo_0005 param type");
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
        const r = parsec.parseFunction(`void compat217(std::weak_ptr<char32_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0006 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0006 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0006 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0006_param convert output non-empty");
        assert.strictEqual(converted, "string", "h2dts_compat_combo_0006_param convert output");
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
        const r = parsec.parseFunction(`enum E217 { A, B }; void f(E217 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0007 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0007 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_combo_0007 func name");
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
        const r = parsec.parseFunction(`void compat217(std:weak_ptr<char32_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0008 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0008 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0008 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:weak_ptr<char32_t>", "h2dts_compat_combo_0008 param type");
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
        const r = parsec.parseFunction(`void compat283(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0009 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0009 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0009 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_combo_0009 param type");
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
        const r = parsec.parseFunction(`void compat283(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0010 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0010 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0010 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_combo_0010 param type");
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
        const r = parsec.parseFunction(`void compat283(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0011 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0011 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0011 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_combo_0011 param type");
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
        const r = parsec.parseFunction(`void compat283(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0012 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0012 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0012 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_combo_0012 param type");
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
        const r = parsec.parseFunction(`void compat283(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0013 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0013 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0013 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_combo_0013 param type");
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
        const r = parsec.parseFunction(`namespace ns { void compat283(std::weak_ptr<std::string> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0014 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0014 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0014 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0014_param convert output non-empty");
        assert.strictEqual(converted, "string", "h2dts_compat_combo_0014_param convert output");
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
        const r = parsec.parseFunction(`void compat283(bad_type_283 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0015 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0015 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0015 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_283", "h2dts_compat_combo_0015 param type");
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
        const r = parsec.parseFunction(`void compat283(std::weak_ptr<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0016 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0016 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0016 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0016_param convert output non-empty");
        assert.strictEqual(converted, "string", "h2dts_compat_combo_0016_param convert output");
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
        const r = parsec.parseFunction(`enum E283 { A, B }; void f(E283 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0017 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0017 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_combo_0017 func name");
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
        const r = parsec.parseFunction(`void compat283(std:weak_ptr<std:string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0018 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0018 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0018 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:weak_ptr<std:string>", "h2dts_compat_combo_0018 param type");
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
        const r = parsec.parseFunction(`void compat284(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0019 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0019 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0019 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_combo_0019 param type");
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
        const r = parsec.parseFunction(`void compat284(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0020 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0020 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0020 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_combo_0020 param type");
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
        const r = parsec.parseFunction(`void compat284(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0021 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0021 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0021 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_combo_0021 param type");
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
        const r = parsec.parseFunction(`void compat284(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0022 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0022 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0022 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_combo_0022 param type");
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
        const r = parsec.parseFunction(`void compat284(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0023 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0023 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0023 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_combo_0023 param type");
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
        const r = parsec.parseFunction(`namespace ns { void compat284(std::weak_ptr<char *> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0024 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0024 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0024 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0024_param convert output non-empty");
        assert.strictEqual(converted, "string", "h2dts_compat_combo_0024_param convert output");
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
        const r = parsec.parseFunction(`void compat284(bad_type_284 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0025 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0025 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0025 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_284", "h2dts_compat_combo_0025 param type");
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
        const r = parsec.parseFunction(`void compat284(std::weak_ptr<char *> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0026 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0026 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0026 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0026_param convert output non-empty");
        assert.strictEqual(converted, "string", "h2dts_compat_combo_0026_param convert output");
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
        const r = parsec.parseFunction(`enum E284 { A, B }; void f(E284 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0027 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0027 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_combo_0027 func name");
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
        const r = parsec.parseFunction(`void compat284(std:weak_ptr<char *> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0028 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0028 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0028 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:weak_ptr<char *>", "h2dts_compat_combo_0028 param type");
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
        const r = parsec.parseFunction(`void compat285(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0029 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0029 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0029 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_combo_0029 param type");
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
        const r = parsec.parseFunction(`void compat285(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0030 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0030 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0030 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_combo_0030 param type");
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
        const r = parsec.parseFunction(`void compat285(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0031 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0031 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0031 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_combo_0031 param type");
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
        const r = parsec.parseFunction(`void compat285(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0032 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0032 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0032 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_combo_0032 param type");
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
        const r = parsec.parseFunction(`void compat285(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0033 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0033 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0033 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_combo_0033 param type");
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
        const r = parsec.parseFunction(`namespace ns { void compat285(std::weak_ptr<long long> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0034 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0034 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0034 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0034_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_combo_0034_param convert output");
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
        const r = parsec.parseFunction(`void compat285(bad_type_285 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0035 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0035 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0035 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_285", "h2dts_compat_combo_0035 param type");
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
        const r = parsec.parseFunction(`void compat285(std::weak_ptr<long long> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0036 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0036 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0036 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0036_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_combo_0036_param convert output");
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
        const r = parsec.parseFunction(`enum E285 { A, B }; void f(E285 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0037 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0037 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_combo_0037 func name");
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
        const r = parsec.parseFunction(`void compat285(std:weak_ptr<long long> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0038 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0038 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0038 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:weak_ptr<long long>", "h2dts_compat_combo_0038 param type");
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
        const r = parsec.parseFunction(`void compat286(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0039 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0039 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0039 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_combo_0039 param type");
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
        const r = parsec.parseFunction(`void compat286(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0040 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0040 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0040 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_combo_0040 param type");
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
        const r = parsec.parseFunction(`void compat286(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0041 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0041 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0041 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_combo_0041 param type");
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
        const r = parsec.parseFunction(`void compat286(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0042 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0042 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0042 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_combo_0042 param type");
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
        const r = parsec.parseFunction(`void compat286(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0043 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0043 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0043 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_combo_0043 param type");
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
        const r = parsec.parseFunction(`namespace ns { void compat286(std::weak_ptr<unsigned short> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0044 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0044 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0044 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0044_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_combo_0044_param convert output");
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
        const r = parsec.parseFunction(`void compat286(bad_type_286 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0045 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0045 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0045 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_286", "h2dts_compat_combo_0045 param type");
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
        const r = parsec.parseFunction(`void compat286(std::weak_ptr<unsigned short> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0046 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0046 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0046 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0046_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_combo_0046_param convert output");
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
        const r = parsec.parseFunction(`enum E286 { A, B }; void f(E286 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0047 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0047 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_combo_0047 func name");
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
        const r = parsec.parseFunction(`void compat286(std:weak_ptr<unsigned short> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0048 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0048 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0048 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:weak_ptr<unsigned short>", "h2dts_compat_combo_0048 param type");
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
        const r = parsec.parseFunction(`void compat287(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0049 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0049 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0049 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_combo_0049 param type");
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
        const r = parsec.parseFunction(`void compat287(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0050 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0050 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0050 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_combo_0050 param type");
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
        const r = parsec.parseFunction(`void compat287(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0051 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0051 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0051 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_combo_0051 param type");
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
        const r = parsec.parseFunction(`void compat287(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0052 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0052 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0052 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_combo_0052 param type");
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
        const r = parsec.parseFunction(`void compat287(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0053 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0053 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0053 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_combo_0053 param type");
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
        const r = parsec.parseFunction(`namespace ns { void compat287(std::weak_ptr<unsigned long> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0054 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0054 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0054 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0054_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_combo_0054_param convert output");
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
        const r = parsec.parseFunction(`void compat287(bad_type_287 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0055 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0055 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0055 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_287", "h2dts_compat_combo_0055 param type");
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
        const r = parsec.parseFunction(`void compat287(std::weak_ptr<unsigned long> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0056 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0056 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0056 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0056_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_combo_0056_param convert output");
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
        const r = parsec.parseFunction(`enum E287 { A, B }; void f(E287 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0057 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0057 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_combo_0057 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0057 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0058', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat287(std:weak_ptr<unsigned long> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0058 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0058 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0058 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:weak_ptr<unsigned long>", "h2dts_compat_combo_0058 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0058 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0059', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat288(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0059 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0059 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0059 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_combo_0059 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0059 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0060', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat288(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0060 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0060 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0060 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_combo_0060 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0060 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0061', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat288(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0061 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0061 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0061 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_combo_0061 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0061 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0062', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat288(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0062 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0062 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0062 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_combo_0062 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0062 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0063', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat288(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0063 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0063 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0063 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_combo_0063 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0063 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0064', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat288(std::weak_ptr<unsigned long long> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0064 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0064 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0064 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0064_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_combo_0064_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0064 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0065', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat288(bad_type_288 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0065 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0065 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0065 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_288", "h2dts_compat_combo_0065 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0065 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0066', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat288(std::weak_ptr<unsigned long long> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0066 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0066 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0066 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0066_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_combo_0066_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0066 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0067', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E288 { A, B }; void f(E288 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0067 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0067 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_combo_0067 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0067 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0068', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat288(std:weak_ptr<unsigned long long> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0068 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0068 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0068 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:weak_ptr<unsigned long long>", "h2dts_compat_combo_0068 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0068 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0069', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat289(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0069 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0069 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0069 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_combo_0069 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0069 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0070', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat289(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0070 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0070 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0070 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_combo_0070 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0070 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0071', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat289(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0071 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0071 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0071 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_combo_0071 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0071 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0072', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat289(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0072 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0072 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0072 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_combo_0072 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0072 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0073', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat289(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0073 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0073 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0073 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_combo_0073 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0073 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0074', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat289(std::weak_ptr<int *> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0074 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0074 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0074 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0074_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_combo_0074_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0074 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0075', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat289(bad_type_289 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0075 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0075 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0075 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_289", "h2dts_compat_combo_0075 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0075 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0076', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat289(std::weak_ptr<int *> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0076 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0076 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0076 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0076_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_combo_0076_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0076 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0077', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E289 { A, B }; void f(E289 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0077 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0077 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_combo_0077 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0077 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0078', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat289(std:weak_ptr<int *> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0078 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0078 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0078 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:weak_ptr<int *>", "h2dts_compat_combo_0078 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0078 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0079', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat291(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0079 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0079 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0079 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_combo_0079 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0079 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0080', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat291(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0080 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0080 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0080 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_combo_0080 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0080 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0081', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat291(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0081 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0081 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0081 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_combo_0081 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0081 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0082', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat291(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0082 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0082 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0082 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_combo_0082 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0082 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0083', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat291(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0083 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0083 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0083 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_combo_0083 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0083 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0084', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat291(any p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0084 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0084 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0084 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0084_param convert output non-empty");
        assert.strictEqual(converted, "any", "h2dts_compat_combo_0084_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0084 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0085', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat291(bad_type_291 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0085 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0085 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0085 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_291", "h2dts_compat_combo_0085 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0085 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0086', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat291(any p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0086 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0086 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0086 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0086_param convert output non-empty");
        assert.strictEqual(converted, "any", "h2dts_compat_combo_0086_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0086 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0087', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E291 { A, B }; void f(E291 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0087 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0087 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_combo_0087 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0087 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0088', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat291(any p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0088 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0088 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0088 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "any", "h2dts_compat_combo_0088 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0088 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0089', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat292(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0089 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0089 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0089 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_combo_0089 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0089 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0090', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat292(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0090 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0090 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0090 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_combo_0090 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0090 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0091', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat292(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0091 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0091 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0091 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_combo_0091 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0091 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0092', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat292(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0092 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0092 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0092 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_combo_0092 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0092 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0093', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat292(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0093 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0093 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0093 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_combo_0093 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0093 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0094', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat292(object p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0094 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0094 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0094 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0094_param convert output non-empty");
        assert.strictEqual(converted, "any", "h2dts_compat_combo_0094_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0094 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0095', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat292(bad_type_292 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0095 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0095 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0095 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_292", "h2dts_compat_combo_0095 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0095 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0096', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat292(object p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0096 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0096 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0096 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_combo_0096_param convert output non-empty");
        assert.strictEqual(converted, "any", "h2dts_compat_combo_0096_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0096 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0097', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E292 { A, B }; void f(E292 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0097 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0097 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_combo_0097 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0097 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0098', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat292(object p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0098 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0098 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0098 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "object", "h2dts_compat_combo_0098 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0098 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0099', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat293(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0099 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0099 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0099 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_combo_0099 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0099 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0100', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat293(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0100 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0100 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0100 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_combo_0100 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0100 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_combo_0101', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat293(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0101 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1,
          "h2dts_compat_combo_0101 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1,
          "h2dts_compat_combo_0101 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_combo_0101 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_combo_0101 execution error: ${String(err)}`);
    }
  });
});
