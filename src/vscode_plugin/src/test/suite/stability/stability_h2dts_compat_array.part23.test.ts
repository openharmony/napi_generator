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

suite('Stability_H2DTS_COMPAT_ARRAY_Part23', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_COMPAT_ARRAY_Part23.');


  test('h2dts_compat_array_0001', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat523(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0001 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0001 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0001 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0001 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0001 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0002', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat523(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0002 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0002 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0002 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0002 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0002 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0003', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat523(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0003 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0003 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0003 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_array_0003 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0003 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0004', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat523(std::priority_queue<short> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0004 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0004 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0004 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0004_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0004_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0004 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0005', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat523(bad_type_523 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0005 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0005 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0005 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_523", "h2dts_compat_array_0005 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0005 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0006', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat523(std::priority_queue<short> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0006 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0006 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0006 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0006_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0006_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0006 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0007', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E523 { A, B }; void f(E523 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0007 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0007 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_array_0007 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0007 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0008', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat523(std:priority_queue<short> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0008 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0008 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0008 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:priority_queue<short>", "h2dts_compat_array_0008 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0008 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0009', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat524(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0009 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0009 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0009 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_array_0009 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0009 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0010', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat524(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0010 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0010 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0010 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_array_0010 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0010 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0011', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat524(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0011 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0011 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0011 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0011 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0011 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0012', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat524(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0012 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0012 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0012 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0012 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0012 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0013', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat524(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0013 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0013 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0013 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_array_0013 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0013 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0014', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat524(std::priority_queue<uint8_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0014 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0014 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0014 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0014_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0014_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0014 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0015', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat524(bad_type_524 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0015 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0015 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0015 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_524", "h2dts_compat_array_0015 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0015 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0016', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat524(std::priority_queue<uint8_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0016 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0016 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0016 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0016_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0016_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0016 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0017', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E524 { A, B }; void f(E524 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0017 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0017 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_array_0017 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0017 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0018', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat524(std:priority_queue<uint8_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0018 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0018 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0018 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:priority_queue<uint8_t>", "h2dts_compat_array_0018 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0018 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0019', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat525(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0019 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0019 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0019 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_array_0019 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0019 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0020', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat525(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0020 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0020 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0020 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_array_0020 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0020 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0021', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat525(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0021 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0021 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0021 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0021 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0021 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0022', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat525(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0022 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0022 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0022 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0022 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0022 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0023', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat525(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0023 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0023 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0023 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_array_0023 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0023 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0024', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat525(std::priority_queue<uint16_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0024 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0024 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0024 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0024_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0024_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0024 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0025', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat525(bad_type_525 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0025 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0025 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0025 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_525", "h2dts_compat_array_0025 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0025 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0026', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat525(std::priority_queue<uint16_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0026 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0026 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0026 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0026_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0026_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0026 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0027', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E525 { A, B }; void f(E525 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0027 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0027 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_array_0027 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0027 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0028', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat525(std:priority_queue<uint16_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0028 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0028 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0028 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:priority_queue<uint16_t>", "h2dts_compat_array_0028 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0028 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0029', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat526(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0029 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0029 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0029 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_array_0029 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0029 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0030', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat526(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0030 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0030 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0030 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_array_0030 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0030 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0031', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat526(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0031 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0031 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0031 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0031 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0031 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0032', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat526(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0032 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0032 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0032 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0032 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0032 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0033', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat526(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0033 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0033 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0033 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_array_0033 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0033 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0034', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat526(std::priority_queue<uint32_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0034 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0034 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0034 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0034_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0034_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0034 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0035', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat526(bad_type_526 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0035 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0035 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0035 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_526", "h2dts_compat_array_0035 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0035 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0036', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat526(std::priority_queue<uint32_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0036 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0036 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0036 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0036_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0036_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0036 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0037', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E526 { A, B }; void f(E526 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0037 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0037 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_array_0037 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0037 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0038', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat526(std:priority_queue<uint32_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0038 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0038 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0038 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:priority_queue<uint32_t>", "h2dts_compat_array_0038 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0038 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0039', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat527(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0039 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0039 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0039 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_array_0039 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0039 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0040', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat527(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0040 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0040 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0040 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_array_0040 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0040 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0041', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat527(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0041 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0041 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0041 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0041 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0041 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0042', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat527(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0042 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0042 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0042 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0042 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0042 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0043', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat527(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0043 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0043 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0043 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_array_0043 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0043 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0044', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat527(std::priority_queue<uint64_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0044 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0044 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0044 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0044_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0044_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0044 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0045', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat527(bad_type_527 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0045 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0045 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0045 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_527", "h2dts_compat_array_0045 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0045 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0046', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat527(std::priority_queue<uint64_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0046 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0046 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0046 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0046_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0046_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0046 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0047', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E527 { A, B }; void f(E527 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0047 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0047 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_array_0047 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0047 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0048', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat527(std:priority_queue<uint64_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0048 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0048 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0048 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:priority_queue<uint64_t>", "h2dts_compat_array_0048 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0048 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0049', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat528(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0049 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0049 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0049 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_array_0049 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0049 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0050', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat528(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0050 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0050 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0050 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_array_0050 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0050 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0051', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat528(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0051 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0051 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0051 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0051 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0051 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0052', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat528(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0052 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0052 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0052 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0052 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0052 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0053', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat528(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0053 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0053 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0053 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_array_0053 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0053 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0054', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat528(std::priority_queue<int8_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0054 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0054 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0054 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0054_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0054_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0054 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0055', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat528(bad_type_528 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0055 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0055 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0055 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_528", "h2dts_compat_array_0055 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0055 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0056', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat528(std::priority_queue<int8_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0056 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0056 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0056 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0056_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0056_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0056 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0057', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E528 { A, B }; void f(E528 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0057 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0057 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_array_0057 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0057 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0058', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat528(std:priority_queue<int8_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0058 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0058 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0058 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:priority_queue<int8_t>", "h2dts_compat_array_0058 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0058 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0059', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat529(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0059 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0059 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0059 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_array_0059 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0059 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0060', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat529(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0060 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0060 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0060 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_array_0060 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0060 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0061', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat529(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0061 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0061 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0061 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0061 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0061 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0062', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat529(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0062 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0062 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0062 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0062 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0062 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0063', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat529(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0063 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0063 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0063 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_array_0063 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0063 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0064', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat529(std::priority_queue<int16_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0064 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0064 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0064 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0064_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0064_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0064 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0065', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat529(bad_type_529 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0065 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0065 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0065 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_529", "h2dts_compat_array_0065 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0065 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0066', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat529(std::priority_queue<int16_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0066 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0066 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0066 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0066_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0066_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0066 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0067', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E529 { A, B }; void f(E529 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0067 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0067 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_array_0067 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0067 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0068', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat529(std:priority_queue<int16_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0068 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0068 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0068 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:priority_queue<int16_t>", "h2dts_compat_array_0068 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0068 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0069', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat530(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0069 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0069 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0069 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_array_0069 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0069 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0070', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat530(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0070 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0070 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0070 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_array_0070 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0070 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0071', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat530(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0071 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0071 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0071 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0071 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0071 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0072', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat530(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0072 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0072 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0072 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0072 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0072 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0073', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat530(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0073 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0073 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0073 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_array_0073 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0073 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0074', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat530(std::priority_queue<int32_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0074 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0074 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0074 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0074_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0074_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0074 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0075', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat530(bad_type_530 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0075 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0075 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0075 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_530", "h2dts_compat_array_0075 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0075 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0076', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat530(std::priority_queue<int32_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0076 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0076 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0076 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0076_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0076_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0076 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0077', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E530 { A, B }; void f(E530 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0077 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0077 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_array_0077 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0077 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0078', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat530(std:priority_queue<int32_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0078 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0078 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0078 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:priority_queue<int32_t>", "h2dts_compat_array_0078 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0078 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0079', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat531(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0079 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0079 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0079 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_array_0079 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0079 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0080', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat531(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0080 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0080 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0080 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_array_0080 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0080 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0081', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat531(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0081 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0081 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0081 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0081 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0081 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0082', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat531(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0082 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0082 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0082 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0082 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0082 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0083', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat531(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0083 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0083 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0083 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_array_0083 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0083 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0084', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat531(std::priority_queue<int64_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0084 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0084 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0084 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0084_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0084_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0084 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0085', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat531(bad_type_531 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0085 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0085 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0085 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_531", "h2dts_compat_array_0085 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0085 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0086', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat531(std::priority_queue<int64_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0086 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0086 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0086 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0086_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0086_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0086 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0087', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E531 { A, B }; void f(E531 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0087 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0087 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_array_0087 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0087 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0088', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat531(std:priority_queue<int64_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0088 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0088 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0088 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:priority_queue<int64_t>", "h2dts_compat_array_0088 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0088 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0089', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat532(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0089 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0089 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0089 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_array_0089 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0089 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0090', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat532(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0090 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0090 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0090 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_array_0090 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0090 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0091', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat532(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0091 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0091 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0091 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0091 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0091 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0092', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat532(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0092 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0092 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0092 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0092 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0092 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0093', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat532(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0093 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0093 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0093 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_array_0093 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0093 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0094', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat532(std::priority_queue<unsigned> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0094 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0094 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0094 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0094_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0094_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0094 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0095', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat532(bad_type_532 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0095 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0095 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0095 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_532", "h2dts_compat_array_0095 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0095 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0096', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat532(std::priority_queue<unsigned> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0096 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0096 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0096 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0096_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0096_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0096 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0097', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E532 { A, B }; void f(E532 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0097 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0097 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_array_0097 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0097 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0098', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat532(std:priority_queue<unsigned> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0098 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0098 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0098 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:priority_queue<unsigned>", "h2dts_compat_array_0098 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0098 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0099', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat533(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0099 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0099 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0099 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_array_0099 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0099 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0100', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat533(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0100 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0100 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0100 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_array_0100 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0100 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_array_0101', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat533(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0101 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0101 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0101 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0101 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0101 execution error: ${String(err)}`);
    }
  });
});
