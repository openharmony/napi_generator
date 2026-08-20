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

suite('Stability_H2DTS_COMPAT_ARRAY_Part09', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_COMPAT_ARRAY_Part09.');


  test('h2dts_compat_array_0001', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`enum E101 { A, B }; void f(E101 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0001 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0001 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_array_0001 func name");
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
        const r = parsec.parseFunction(`void compat101(std:list<wchar_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0002 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0002 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0002 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:list<wchar_t>", "h2dts_compat_array_0002 param type");
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
        const r = parsec.parseFunction(`void compat102(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0003 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0003 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0003 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_array_0003 param type");
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
        const r = parsec.parseFunction(`void compat102(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0004 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0004 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0004 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_array_0004 param type");
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
        const r = parsec.parseFunction(`void compat102(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0005 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0005 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0005 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0005 param type");
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
        const r = parsec.parseFunction(`void compat102(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0006 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0006 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0006 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0006 param type");
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
        const r = parsec.parseFunction(`void compat102(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0007 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0007 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0007 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_array_0007 param type");
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
        const r = parsec.parseFunction(`namespace ns { void compat102(std::list<char8_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0008 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0008 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0008 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0008_param convert output non-empty");
        assert.strictEqual(converted, "Array<string>", "h2dts_compat_array_0008_param convert output");
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
        const r = parsec.parseFunction(`void compat102(bad_type_102 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0009 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0009 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0009 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_102", "h2dts_compat_array_0009 param type");
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
        const r = parsec.parseFunction(`void compat102(std::list<char8_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0010 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0010 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0010 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0010_param convert output non-empty");
        assert.strictEqual(converted, "Array<string>", "h2dts_compat_array_0010_param convert output");
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
        const r = parsec.parseFunction(`enum E102 { A, B }; void f(E102 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0011 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0011 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_array_0011 func name");
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
        const r = parsec.parseFunction(`void compat102(std:list<char8_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0012 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0012 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0012 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:list<char8_t>", "h2dts_compat_array_0012 param type");
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
        const r = parsec.parseFunction(`void compat103(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0013 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0013 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0013 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_array_0013 param type");
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
        const r = parsec.parseFunction(`void compat103(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0014 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0014 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0014 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_array_0014 param type");
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
        const r = parsec.parseFunction(`void compat103(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0015 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0015 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0015 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0015 param type");
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
        const r = parsec.parseFunction(`void compat103(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0016 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0016 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0016 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0016 param type");
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
        const r = parsec.parseFunction(`void compat103(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0017 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0017 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0017 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_array_0017 param type");
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
        const r = parsec.parseFunction(`namespace ns { void compat103(std::list<char16_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0018 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0018 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0018 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0018_param convert output non-empty");
        assert.strictEqual(converted, "Array<string>", "h2dts_compat_array_0018_param convert output");
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
        const r = parsec.parseFunction(`void compat103(bad_type_103 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0019 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0019 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0019 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_103", "h2dts_compat_array_0019 param type");
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
        const r = parsec.parseFunction(`void compat103(std::list<char16_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0020 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0020 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0020 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0020_param convert output non-empty");
        assert.strictEqual(converted, "Array<string>", "h2dts_compat_array_0020_param convert output");
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
        const r = parsec.parseFunction(`enum E103 { A, B }; void f(E103 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0021 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0021 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_array_0021 func name");
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
        const r = parsec.parseFunction(`void compat103(std:list<char16_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0022 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0022 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0022 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:list<char16_t>", "h2dts_compat_array_0022 param type");
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
        const r = parsec.parseFunction(`void compat104(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0023 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0023 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0023 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_array_0023 param type");
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
        const r = parsec.parseFunction(`void compat104(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0024 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0024 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0024 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_array_0024 param type");
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
        const r = parsec.parseFunction(`void compat104(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0025 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0025 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0025 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0025 param type");
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
        const r = parsec.parseFunction(`void compat104(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0026 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0026 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0026 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0026 param type");
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
        const r = parsec.parseFunction(`void compat104(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0027 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0027 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0027 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_array_0027 param type");
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
        const r = parsec.parseFunction(`namespace ns { void compat104(std::list<char32_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0028 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0028 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0028 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0028_param convert output non-empty");
        assert.strictEqual(converted, "Array<string>", "h2dts_compat_array_0028_param convert output");
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
        const r = parsec.parseFunction(`void compat104(bad_type_104 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0029 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0029 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0029 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_104", "h2dts_compat_array_0029 param type");
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
        const r = parsec.parseFunction(`void compat104(std::list<char32_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0030 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0030 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0030 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0030_param convert output non-empty");
        assert.strictEqual(converted, "Array<string>", "h2dts_compat_array_0030_param convert output");
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
        const r = parsec.parseFunction(`enum E104 { A, B }; void f(E104 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0031 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0031 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_array_0031 func name");
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
        const r = parsec.parseFunction(`void compat104(std:list<char32_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0032 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0032 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0032 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:list<char32_t>", "h2dts_compat_array_0032 param type");
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
        const r = parsec.parseFunction(`void compat105(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0033 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0033 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0033 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_array_0033 param type");
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
        const r = parsec.parseFunction(`void compat105(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0034 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0034 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0034 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_array_0034 param type");
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
        const r = parsec.parseFunction(`void compat105(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0035 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0035 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0035 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0035 param type");
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
        const r = parsec.parseFunction(`void compat105(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0036 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0036 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0036 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0036 param type");
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
        const r = parsec.parseFunction(`void compat105(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0037 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0037 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0037 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_array_0037 param type");
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
        const r = parsec.parseFunction(`namespace ns { void compat105(std::forward_list<int> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0038 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0038 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0038 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0038_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0038_param convert output");
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
        const r = parsec.parseFunction(`void compat105(bad_type_105 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0039 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0039 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0039 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_105", "h2dts_compat_array_0039 param type");
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
        const r = parsec.parseFunction(`void compat105(std::forward_list<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0040 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0040 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0040 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0040_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0040_param convert output");
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
        const r = parsec.parseFunction(`enum E105 { A, B }; void f(E105 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0041 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0041 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_array_0041 func name");
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
        const r = parsec.parseFunction(`void compat105(std:forward_list<int> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0042 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0042 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0042 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:forward_list<int>", "h2dts_compat_array_0042 param type");
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
        const r = parsec.parseFunction(`void compat106(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0043 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0043 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0043 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_array_0043 param type");
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
        const r = parsec.parseFunction(`void compat106(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0044 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0044 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0044 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_array_0044 param type");
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
        const r = parsec.parseFunction(`void compat106(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0045 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0045 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0045 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0045 param type");
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
        const r = parsec.parseFunction(`void compat106(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0046 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0046 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0046 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0046 param type");
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
        const r = parsec.parseFunction(`void compat106(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0047 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0047 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0047 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_array_0047 param type");
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
        const r = parsec.parseFunction(`namespace ns { void compat106(std::forward_list<size_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0048 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0048 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0048 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0048_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0048_param convert output");
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
        const r = parsec.parseFunction(`void compat106(bad_type_106 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0049 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0049 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0049 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_106", "h2dts_compat_array_0049 param type");
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
        const r = parsec.parseFunction(`void compat106(std::forward_list<size_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0050 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0050 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0050 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0050_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0050_param convert output");
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
        const r = parsec.parseFunction(`enum E106 { A, B }; void f(E106 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0051 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0051 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_array_0051 func name");
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
        const r = parsec.parseFunction(`void compat106(std:forward_list<size_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0052 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0052 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0052 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:forward_list<size_t>", "h2dts_compat_array_0052 param type");
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
        const r = parsec.parseFunction(`void compat107(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0053 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0053 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0053 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_array_0053 param type");
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
        const r = parsec.parseFunction(`void compat107(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0054 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0054 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0054 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_array_0054 param type");
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
        const r = parsec.parseFunction(`void compat107(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0055 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0055 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0055 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0055 param type");
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
        const r = parsec.parseFunction(`void compat107(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0056 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0056 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0056 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0056 param type");
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
        const r = parsec.parseFunction(`void compat107(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0057 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0057 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0057 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_array_0057 param type");
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
        const r = parsec.parseFunction(`namespace ns { void compat107(std::forward_list<double> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0058 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0058 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0058 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0058_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0058_param convert output");
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
        const r = parsec.parseFunction(`void compat107(bad_type_107 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0059 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0059 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0059 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_107", "h2dts_compat_array_0059 param type");
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
        const r = parsec.parseFunction(`void compat107(std::forward_list<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0060 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0060 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0060 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0060_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0060_param convert output");
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
        const r = parsec.parseFunction(`enum E107 { A, B }; void f(E107 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0061 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0061 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_array_0061 func name");
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
        const r = parsec.parseFunction(`void compat107(std:forward_list<double> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0062 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0062 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0062 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:forward_list<double>", "h2dts_compat_array_0062 param type");
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
        const r = parsec.parseFunction(`void compat108(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0063 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0063 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0063 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_array_0063 param type");
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
        const r = parsec.parseFunction(`void compat108(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0064 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0064 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0064 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_array_0064 param type");
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
        const r = parsec.parseFunction(`void compat108(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0065 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0065 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0065 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0065 param type");
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
        const r = parsec.parseFunction(`void compat108(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0066 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0066 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0066 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0066 param type");
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
        const r = parsec.parseFunction(`void compat108(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0067 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0067 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0067 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_array_0067 param type");
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
        const r = parsec.parseFunction(`namespace ns { void compat108(std::forward_list<float> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0068 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0068 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0068 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0068_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0068_param convert output");
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
        const r = parsec.parseFunction(`void compat108(bad_type_108 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0069 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0069 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0069 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_108", "h2dts_compat_array_0069 param type");
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
        const r = parsec.parseFunction(`void compat108(std::forward_list<float> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0070 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0070 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0070 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0070_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0070_param convert output");
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
        const r = parsec.parseFunction(`enum E108 { A, B }; void f(E108 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0071 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0071 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_array_0071 func name");
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
        const r = parsec.parseFunction(`void compat108(std:forward_list<float> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0072 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0072 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0072 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:forward_list<float>", "h2dts_compat_array_0072 param type");
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
        const r = parsec.parseFunction(`void compat109(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0073 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0073 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0073 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_array_0073 param type");
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
        const r = parsec.parseFunction(`void compat109(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0074 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0074 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0074 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_array_0074 param type");
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
        const r = parsec.parseFunction(`void compat109(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0075 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0075 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0075 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0075 param type");
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
        const r = parsec.parseFunction(`void compat109(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0076 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0076 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0076 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0076 param type");
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
        const r = parsec.parseFunction(`void compat109(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0077 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0077 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0077 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_array_0077 param type");
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
        const r = parsec.parseFunction(`namespace ns { void compat109(std::forward_list<long> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0078 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0078 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0078 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0078_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0078_param convert output");
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
        const r = parsec.parseFunction(`void compat109(bad_type_109 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0079 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0079 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0079 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_109", "h2dts_compat_array_0079 param type");
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
        const r = parsec.parseFunction(`void compat109(std::forward_list<long> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0080 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0080 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0080 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0080_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0080_param convert output");
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
        const r = parsec.parseFunction(`enum E109 { A, B }; void f(E109 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0081 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0081 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_array_0081 func name");
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
        const r = parsec.parseFunction(`void compat109(std:forward_list<long> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0082 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0082 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0082 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:forward_list<long>", "h2dts_compat_array_0082 param type");
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
        const r = parsec.parseFunction(`void compat110(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0083 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0083 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0083 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_array_0083 param type");
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
        const r = parsec.parseFunction(`void compat110(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0084 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0084 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0084 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_array_0084 param type");
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
        const r = parsec.parseFunction(`void compat110(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0085 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0085 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0085 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0085 param type");
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
        const r = parsec.parseFunction(`void compat110(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0086 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0086 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0086 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0086 param type");
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
        const r = parsec.parseFunction(`void compat110(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0087 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0087 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0087 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_array_0087 param type");
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
        const r = parsec.parseFunction(`namespace ns { void compat110(std::forward_list<short> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0088 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0088 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0088 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0088_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0088_param convert output");
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
        const r = parsec.parseFunction(`void compat110(bad_type_110 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0089 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0089 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0089 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_110", "h2dts_compat_array_0089 param type");
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
        const r = parsec.parseFunction(`void compat110(std::forward_list<short> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0090 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0090 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0090 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0090_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0090_param convert output");
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
        const r = parsec.parseFunction(`enum E110 { A, B }; void f(E110 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0091 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0091 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_array_0091 func name");
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
        const r = parsec.parseFunction(`void compat110(std:forward_list<short> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0092 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0092 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0092 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:forward_list<short>", "h2dts_compat_array_0092 param type");
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
        const r = parsec.parseFunction(`void compat111(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0093 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0093 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0093 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_array_0093 param type");
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
        const r = parsec.parseFunction(`void compat111(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0094 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0094 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0094 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_array_0094 param type");
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
        const r = parsec.parseFunction(`void compat111(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0095 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0095 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0095 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_array_0095 param type");
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
        const r = parsec.parseFunction(`void compat111(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0096 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0096 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0096 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_array_0096 param type");
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
        const r = parsec.parseFunction(`void compat111(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0097 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0097 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0097 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_array_0097 param type");
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
        const r = parsec.parseFunction(`namespace ns { void compat111(std::forward_list<uint8_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0098 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0098 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0098 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0098_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0098_param convert output");
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
        const r = parsec.parseFunction(`void compat111(bad_type_111 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0099 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0099 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0099 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_111", "h2dts_compat_array_0099 param type");
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
        const r = parsec.parseFunction(`void compat111(std::forward_list<uint8_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0100 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0100 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_array_0100 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_array_0100_param convert output non-empty");
        assert.strictEqual(converted, "Array<number>", "h2dts_compat_array_0100_param convert output");
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
        const r = parsec.parseFunction(`enum E111 { A, B }; void f(E111 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0101 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_array_0101 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_array_0101 func name");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_array_0101 execution error: ${String(err)}`);
    }
  });
});
