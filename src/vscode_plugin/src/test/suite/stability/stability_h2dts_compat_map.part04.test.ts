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

suite('Stability_H2DTS_COMPAT_MAP_Part04', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_COMPAT_MAP_Part04.');


  test('h2dts_compat_map_0001', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat606(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0001 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0001 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_map_0001 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_map_0001 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0001 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_map_0002', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat606(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0002 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0002 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_map_0002 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_map_0002 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0002 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_map_0003', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat606(std::unordered_map<size_t, char> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0003 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0003 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_map_0003 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0003_param convert output non-empty");
        assert.strictEqual(converted, "Map<number, string>", "h2dts_compat_map_0003_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0003 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_map_0004', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat606(bad_type_606 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0004 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0004 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_map_0004 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_606", "h2dts_compat_map_0004 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0004 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_map_0005', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat606(std::unordered_map<size_t, char> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0005 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0005 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_map_0005 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0005_param convert output non-empty");
        assert.strictEqual(converted, "Map<number, string>", "h2dts_compat_map_0005_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0005 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_map_0006', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E606 { A, B }; void f(E606 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0006 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0006 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_map_0006 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0006 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_map_0007', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat606(std:unordered_map<size_t, char> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0007 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0007 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_map_0007 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:unordered_map<size_t, char>", "h2dts_compat_map_0007 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0007 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_map_0008', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat607(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0008 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0008 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_map_0008 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_map_0008 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0008 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_map_0009', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat607(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0009 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0009 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_map_0009 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_map_0009 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0009 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_map_0010', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat607(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0010 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0010 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_map_0010 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_map_0010 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0010 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_map_0011', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat607(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0011 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0011 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_map_0011 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_map_0011 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0011 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_map_0012', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat607(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0012 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0012 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_map_0012 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_map_0012 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0012 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_map_0013', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat607(std::unordered_map<unsigned, char> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0013 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0013 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_map_0013 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0013_param convert output non-empty");
        assert.strictEqual(converted, "Map<number, string>", "h2dts_compat_map_0013_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0013 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_map_0014', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat607(bad_type_607 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0014 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0014 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_map_0014 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_607", "h2dts_compat_map_0014 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0014 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_map_0015', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat607(std::unordered_map<unsigned, char> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0015 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0015 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_map_0015 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0015_param convert output non-empty");
        assert.strictEqual(converted, "Map<number, string>", "h2dts_compat_map_0015_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0015 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_map_0016', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E607 { A, B }; void f(E607 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0016 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0016 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_map_0016 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0016 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_map_0017', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat607(std:unordered_map<unsigned, char> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0017 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0017 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_map_0017 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:unordered_map<unsigned, char>", "h2dts_compat_map_0017 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0017 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_map_0018', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat624(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0018 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0018 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_map_0018 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_map_0018 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0018 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_map_0019', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat624(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0019 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0019 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_map_0019 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_map_0019 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0019 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_map_0020', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat624(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0020 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0020 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_map_0020 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_map_0020 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0020 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_map_0021', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat624(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0021 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0021 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_map_0021 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_map_0021 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0021 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_map_0022', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat624(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0022 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0022 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_map_0022 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_map_0022 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0022 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_map_0023', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat624(std::multimap<int, int> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0023 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0023 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_map_0023 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0023_param convert output non-empty");
        assert.strictEqual(converted, "Map<number, number>", "h2dts_compat_map_0023_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0023 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_map_0024', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat624(bad_type_624 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0024 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0024 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_map_0024 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_624", "h2dts_compat_map_0024 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0024 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_map_0025', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat624(std::multimap<int, int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0025 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0025 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_map_0025 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0025_param convert output non-empty");
        assert.strictEqual(converted, "Map<number, number>", "h2dts_compat_map_0025_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0025 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_map_0026', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E624 { A, B }; void f(E624 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0026 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0026 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_map_0026 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0026 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_map_0027', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat624(std:multimap<int, int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0027 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0027 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_map_0027 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:multimap<int, int>", "h2dts_compat_map_0027 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0027 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_map_0028', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat625(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0028 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0028 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_map_0028 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_map_0028 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0028 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_map_0029', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat625(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0029 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0029 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_map_0029 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_map_0029 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0029 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_map_0030', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat625(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0030 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0030 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_map_0030 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_map_0030 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0030 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_map_0031', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat625(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0031 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0031 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_map_0031 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_map_0031 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0031 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_map_0032', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat625(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0032 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0032 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_map_0032 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_map_0032 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0032 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_map_0033', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`namespace ns { void compat625(std::multimap<char, int> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0033 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0033 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_map_0033 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0033_param convert output non-empty");
        assert.strictEqual(converted, "Map<string, number>", "h2dts_compat_map_0033_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0033 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_map_0034', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat625(bad_type_625 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0034 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0034 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_map_0034 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_625", "h2dts_compat_map_0034 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0034 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_map_0035', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat625(std::multimap<char, int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0035 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0035 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_map_0035 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_map_0035_param convert output non-empty");
        assert.strictEqual(converted, "Map<string, number>", "h2dts_compat_map_0035_param convert output");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0035 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_map_0036', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E625 { A, B }; void f(E625 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0036 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0036 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_map_0036 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0036 execution error: ${String(err)}`);
    }
  });

  test('h2dts_compat_map_0037', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat625(std:multimap<char, int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0037 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_map_0037 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_map_0037 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:multimap<char, int>", "h2dts_compat_map_0037 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_map_0037 execution error: ${String(err)}`);
    }
  });
});
