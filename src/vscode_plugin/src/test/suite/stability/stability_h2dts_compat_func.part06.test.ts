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

suite('Stability_H2DTS_COMPAT_FUNC_Part06', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTS_COMPAT_FUNC_Part06.');


  test('h2dts_compat_func_0001', function() {
    this.timeout(15000);
    try {
      const finished = runCompatSafe(() => {
        const r = parsec.parseFunction(`void compat197(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0001 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0001 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0001 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_func_0001 param type");
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
        const r = parsec.parseFunction(`namespace ns { void compat197(std::shared_ptr<char32_t> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0002 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0002 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0002 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0002_param convert output non-empty");
        assert.strictEqual(converted, "string", "h2dts_compat_func_0002_param convert output");
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
        const r = parsec.parseFunction(`void compat197(bad_type_197 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0003 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0003 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0003 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_197", "h2dts_compat_func_0003 param type");
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
        const r = parsec.parseFunction(`void compat197(std::shared_ptr<char32_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0004 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0004 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0004 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0004_param convert output non-empty");
        assert.strictEqual(converted, "string", "h2dts_compat_func_0004_param convert output");
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
        const r = parsec.parseFunction(`enum E197 { A, B }; void f(E197 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0005 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0005 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_func_0005 func name");
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
        const r = parsec.parseFunction(`void compat197(std:shared_ptr<char32_t> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0006 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0006 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0006 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:shared_ptr<char32_t>", "h2dts_compat_func_0006 param type");
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
        const r = parsec.parseFunction(`void compat266(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0007 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0007 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0007 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_func_0007 param type");
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
        const r = parsec.parseFunction(`void compat266(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0008 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0008 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0008 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_func_0008 param type");
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
        const r = parsec.parseFunction(`void compat266(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0009 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0009 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0009 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_func_0009 param type");
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
        const r = parsec.parseFunction(`void compat266(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0010 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0010 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0010 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_func_0010 param type");
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
        const r = parsec.parseFunction(`void compat266(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0011 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0011 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0011 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_func_0011 param type");
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
        const r = parsec.parseFunction(`namespace ns { void compat266(std::function<std::string(char *)> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0012 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0012 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0012 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0012_param convert output non-empty");
        assert.strictEqual(converted, "(param0: string)=>string", "h2dts_compat_func_0012_param convert output");
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
        const r = parsec.parseFunction(`void compat266(bad_type_266 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0013 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0013 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0013 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_266", "h2dts_compat_func_0013 param type");
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
        const r = parsec.parseFunction(`void compat266(std::function<std::string(char *)> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0014 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0014 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0014 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0014_param convert output non-empty");
        assert.strictEqual(converted, "(param0: string)=>string", "h2dts_compat_func_0014_param convert output");
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
        const r = parsec.parseFunction(`enum E266 { A, B }; void f(E266 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0015 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0015 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_func_0015 func name");
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
        const r = parsec.parseFunction(`void compat266(std:function<std:string(char *)> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0016 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0016 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0016 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:function<std:string(char *)>", "h2dts_compat_func_0016 param type");
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
        const r = parsec.parseFunction(`void compat267(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0017 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0017 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0017 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_func_0017 param type");
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
        const r = parsec.parseFunction(`void compat267(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0018 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0018 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0018 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_func_0018 param type");
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
        const r = parsec.parseFunction(`void compat267(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0019 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0019 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0019 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_func_0019 param type");
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
        const r = parsec.parseFunction(`void compat267(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0020 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0020 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0020 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_func_0020 param type");
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
        const r = parsec.parseFunction(`void compat267(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0021 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0021 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0021 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_func_0021 param type");
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
        const r = parsec.parseFunction(`namespace ns { void compat267(std::function<unsigned short(long long
        , unsigned long)> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0022 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0022 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0022 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0022_param convert output non-empty");
        assert.strictEqual(converted, "(param0: number, param1: number)=>number",
          "h2dts_compat_func_0022_param convert output");
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
        const r = parsec.parseFunction(`void compat267(bad_type_267 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0023 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0023 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0023 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_267", "h2dts_compat_func_0023 param type");
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
        const r = parsec.parseFunction(`void compat267(std::function<unsigned short(long long, unsigned long)> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0024 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0024 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0024 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0024_param convert output non-empty");
        assert.strictEqual(converted, "(param0: number, param1: number)=>number",
          "h2dts_compat_func_0024_param convert output");
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
        const r = parsec.parseFunction(`enum E267 { A, B }; void f(E267 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0025 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0025 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_func_0025 func name");
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
        const r = parsec.parseFunction(`void compat267(std:function<unsigned short(long long, unsigned long)> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0026 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0026 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0026 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:function<unsigned short(long long, unsigned long)>",
          "h2dts_compat_func_0026 param type");
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
        const r = parsec.parseFunction(`void compat268(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0027 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0027 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0027 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_func_0027 param type");
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
        const r = parsec.parseFunction(`void compat268(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0028 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0028 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0028 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_func_0028 param type");
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
        const r = parsec.parseFunction(`void compat268(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0029 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0029 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0029 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_func_0029 param type");
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
        const r = parsec.parseFunction(`void compat268(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0030 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0030 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0030 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_func_0030 param type");
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
        const r = parsec.parseFunction(`void compat268(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0031 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0031 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0031 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_func_0031 param type");
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
        const r = parsec.parseFunction(`namespace ns { void compat268(std::function<void(int *
        , unsigned long long)> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0032 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0032 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0032 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0032_param convert output non-empty");
        assert.strictEqual(converted, "(param0: number, param1: number)=>void",
          "h2dts_compat_func_0032_param convert output");
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
        const r = parsec.parseFunction(`void compat268(bad_type_268 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0033 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0033 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0033 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_268", "h2dts_compat_func_0033 param type");
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
        const r = parsec.parseFunction(`void compat268(std::function<void(int *, unsigned long long)> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0034 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0034 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0034 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0034_param convert output non-empty");
        assert.strictEqual(converted, "(param0: number, param1: number)=>void",
          "h2dts_compat_func_0034_param convert output");
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
        const r = parsec.parseFunction(`enum E268 { A, B }; void f(E268 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0035 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0035 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_func_0035 func name");
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
        const r = parsec.parseFunction(`void compat268(std:function<void(int *, unsigned long long)> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0036 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0036 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0036 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:function<void(int *, unsigned long long)>",
          "h2dts_compat_func_0036 param type");
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
        const r = parsec.parseFunction(`void compat269(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0037 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0037 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0037 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_func_0037 param type");
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
        const r = parsec.parseFunction(`void compat269(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0038 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0038 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0038 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_func_0038 param type");
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
        const r = parsec.parseFunction(`void compat269(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0039 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0039 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0039 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_func_0039 param type");
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
        const r = parsec.parseFunction(`void compat269(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0040 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0040 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0040 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_func_0040 param type");
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
        const r = parsec.parseFunction(`void compat269(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0041 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0041 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0041 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_func_0041 param type");
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
        const r = parsec.parseFunction(`namespace ns { void compat269(std::unique_ptr<std::string> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0042 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0042 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0042 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0042_param convert output non-empty");
        assert.strictEqual(converted, "string", "h2dts_compat_func_0042_param convert output");
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
        const r = parsec.parseFunction(`void compat269(bad_type_269 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0043 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0043 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0043 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_269", "h2dts_compat_func_0043 param type");
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
        const r = parsec.parseFunction(`void compat269(std::unique_ptr<std::string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0044 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0044 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0044 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0044_param convert output non-empty");
        assert.strictEqual(converted, "string", "h2dts_compat_func_0044_param convert output");
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
        const r = parsec.parseFunction(`enum E269 { A, B }; void f(E269 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0045 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0045 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_func_0045 func name");
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
        const r = parsec.parseFunction(`void compat269(std:unique_ptr<std:string> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0046 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0046 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0046 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:unique_ptr<std:string>", "h2dts_compat_func_0046 param type");
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
        const r = parsec.parseFunction(`void compat270(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0047 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0047 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0047 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_func_0047 param type");
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
        const r = parsec.parseFunction(`void compat270(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0048 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0048 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0048 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_func_0048 param type");
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
        const r = parsec.parseFunction(`void compat270(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0049 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0049 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0049 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_func_0049 param type");
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
        const r = parsec.parseFunction(`void compat270(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0050 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0050 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0050 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_func_0050 param type");
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
        const r = parsec.parseFunction(`void compat270(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0051 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0051 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0051 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_func_0051 param type");
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
        const r = parsec.parseFunction(`namespace ns { void compat270(std::unique_ptr<char *> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0052 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0052 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0052 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0052_param convert output non-empty");
        assert.strictEqual(converted, "string", "h2dts_compat_func_0052_param convert output");
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
        const r = parsec.parseFunction(`void compat270(bad_type_270 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0053 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0053 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0053 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_270", "h2dts_compat_func_0053 param type");
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
        const r = parsec.parseFunction(`void compat270(std::unique_ptr<char *> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0054 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0054 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0054 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0054_param convert output non-empty");
        assert.strictEqual(converted, "string", "h2dts_compat_func_0054_param convert output");
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
        const r = parsec.parseFunction(`enum E270 { A, B }; void f(E270 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0055 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0055 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_func_0055 func name");
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
        const r = parsec.parseFunction(`void compat270(std:unique_ptr<char *> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0056 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0056 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0056 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:unique_ptr<char *>", "h2dts_compat_func_0056 param type");
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
        const r = parsec.parseFunction(`void compat271(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0057 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0057 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0057 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_func_0057 param type");
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
        const r = parsec.parseFunction(`void compat271(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0058 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0058 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0058 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_func_0058 param type");
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
        const r = parsec.parseFunction(`void compat271(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0059 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0059 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0059 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_func_0059 param type");
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
        const r = parsec.parseFunction(`void compat271(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0060 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0060 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0060 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_func_0060 param type");
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
        const r = parsec.parseFunction(`void compat271(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0061 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0061 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0061 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_func_0061 param type");
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
        const r = parsec.parseFunction(`namespace ns { void compat271(std::unique_ptr<long long> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0062 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0062 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0062 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0062_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_func_0062_param convert output");
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
        const r = parsec.parseFunction(`void compat271(bad_type_271 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0063 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0063 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0063 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_271", "h2dts_compat_func_0063 param type");
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
        const r = parsec.parseFunction(`void compat271(std::unique_ptr<long long> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0064 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0064 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0064 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0064_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_func_0064_param convert output");
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
        const r = parsec.parseFunction(`enum E271 { A, B }; void f(E271 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0065 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0065 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_func_0065 func name");
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
        const r = parsec.parseFunction(`void compat271(std:unique_ptr<long long> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0066 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0066 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0066 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:unique_ptr<long long>", "h2dts_compat_func_0066 param type");
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
        const r = parsec.parseFunction(`void compat272(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0067 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0067 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0067 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_func_0067 param type");
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
        const r = parsec.parseFunction(`void compat272(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0068 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0068 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0068 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_func_0068 param type");
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
        const r = parsec.parseFunction(`void compat272(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0069 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0069 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0069 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_func_0069 param type");
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
        const r = parsec.parseFunction(`void compat272(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0070 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0070 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0070 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_func_0070 param type");
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
        const r = parsec.parseFunction(`void compat272(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0071 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0071 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0071 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_func_0071 param type");
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
        const r = parsec.parseFunction(`namespace ns { void compat272(std::unique_ptr<unsigned short> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0072 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0072 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0072 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0072_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_func_0072_param convert output");
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
        const r = parsec.parseFunction(`void compat272(bad_type_272 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0073 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0073 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0073 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_272", "h2dts_compat_func_0073 param type");
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
        const r = parsec.parseFunction(`void compat272(std::unique_ptr<unsigned short> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0074 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0074 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0074 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0074_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_func_0074_param convert output");
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
        const r = parsec.parseFunction(`enum E272 { A, B }; void f(E272 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0075 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0075 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_func_0075 func name");
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
        const r = parsec.parseFunction(`void compat272(std:unique_ptr<unsigned short> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0076 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0076 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0076 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:unique_ptr<unsigned short>", "h2dts_compat_func_0076 param type");
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
        const r = parsec.parseFunction(`void compat273(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0077 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0077 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0077 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_func_0077 param type");
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
        const r = parsec.parseFunction(`void compat273(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0078 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0078 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0078 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_func_0078 param type");
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
        const r = parsec.parseFunction(`void compat273(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0079 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0079 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0079 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_func_0079 param type");
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
        const r = parsec.parseFunction(`void compat273(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0080 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0080 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0080 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_func_0080 param type");
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
        const r = parsec.parseFunction(`void compat273(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0081 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0081 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0081 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_func_0081 param type");
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
        const r = parsec.parseFunction(`namespace ns { void compat273(std::unique_ptr<unsigned long> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0082 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0082 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0082 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0082_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_func_0082_param convert output");
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
        const r = parsec.parseFunction(`void compat273(bad_type_273 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0083 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0083 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0083 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_273", "h2dts_compat_func_0083 param type");
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
        const r = parsec.parseFunction(`void compat273(std::unique_ptr<unsigned long> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0084 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0084 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0084 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0084_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_func_0084_param convert output");
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
        const r = parsec.parseFunction(`enum E273 { A, B }; void f(E273 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0085 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0085 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_func_0085 func name");
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
        const r = parsec.parseFunction(`void compat273(std:unique_ptr<unsigned long> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0086 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0086 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0086 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:unique_ptr<unsigned long>", "h2dts_compat_func_0086 param type");
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
        const r = parsec.parseFunction(`void compat274(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0087 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0087 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0087 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_func_0087 param type");
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
        const r = parsec.parseFunction(`void compat274(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0088 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0088 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0088 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_func_0088 param type");
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
        const r = parsec.parseFunction(`void compat274(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0089 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0089 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0089 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_func_0089 param type");
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
        const r = parsec.parseFunction(`void compat274(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0090 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0090 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0090 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_func_0090 param type");
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
        const r = parsec.parseFunction(`void compat274(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0091 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0091 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0091 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_func_0091 param type");
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
        const r = parsec.parseFunction(`namespace ns { void compat274(std::unique_ptr<unsigned long long> p); }`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0092 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0092 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0092 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0092_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_func_0092_param convert output");
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
        const r = parsec.parseFunction(`void compat274(bad_type_274 p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0093 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0093 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0093 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "bad_type_274", "h2dts_compat_func_0093 param type");
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
        const r = parsec.parseFunction(`void compat274(std::unique_ptr<unsigned long long> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0094 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0094 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0094 must parse param");
        const converted = transTskey2Ckey(r[0].parameters[0].type);
        assert.ok(typeof converted === 'string' && converted.length > 0,
          "h2dts_compat_func_0094_param convert output non-empty");
        assert.strictEqual(converted, "number", "h2dts_compat_func_0094_param convert output");
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
        const r = parsec.parseFunction(`enum E274 { A, B }; void f(E274 e);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0095 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0095 must parse function");
        assert.strictEqual(r[0].name, "f", "h2dts_compat_func_0095 func name");
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
        const r = parsec.parseFunction(`void compat274(std:unique_ptr<unsigned long long> p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0096 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0096 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0096 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "std:unique_ptr<unsigned long long>", "h2dts_compat_func_0096 param type");
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
        const r = parsec.parseFunction(`void compat275(itn p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0097 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0097 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0097 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "itn", "h2dts_compat_func_0097 param type");
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
        const r = parsec.parseFunction(`void compat275(doubl p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0098 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0098 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0098 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "doubl", "h2dts_compat_func_0098 param type");
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
        const r = parsec.parseFunction(`void compat275(boool p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0099 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0099 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0099 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "boool", "h2dts_compat_func_0099 param type");
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
        const r = parsec.parseFunction(`void compat275(intt p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0100 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0100 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0100 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "intt", "h2dts_compat_func_0100 param type");
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
        const r = parsec.parseFunction(`void compat275(flot p);`);
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0101 parseFunction must return non-empty array");
        assert.ok(Array.isArray(r) && r.length >= 1, "h2dts_compat_func_0101 must parse function");
        assert.ok(r[0].parameters && r[0].parameters.length >= 1, "h2dts_compat_func_0101 must parse param");
        assert.strictEqual(r[0].parameters[0].type, "flot", "h2dts_compat_func_0101 param type");
      });
      assert.ok(finished, 'compat task must finish without process crash');
    } catch (err) {
      assert.fail(`h2dts_compat_func_0101 execution error: ${String(err)}`);
    }
  });
});
