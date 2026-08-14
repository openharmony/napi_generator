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

suite('Stability_DTS2CPP_CONVERT_COMBO_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_CONVERT_COMBO_Part01.');


  test('dts2cpp_convert_combo_0001', () => {
    try {
      const result = transCkey2Dtskey('() => void');
      assert.ok(typeof result === 'string' && result.length > 0, "dts2cpp_convert_combo_0001 convert output non-empty");
      assert.strictEqual(result, "std::function<void()>", "dts2cpp_convert_combo_0001 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0001 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_combo_0002', () => {
    try {
      const converted = transParseObj(doParseTs('sample305.ts', `
        function sample305(p0: () => void): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample305');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void()>",
        "dts2cpp_convert_combo_0002 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0002 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_combo_0003', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet305.ts', `
        function sampleRet305(): () => void { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void()>",
        "dts2cpp_convert_combo_0003 return convert output");
      const generated = generateFunctions(converted, 'sampleRet305.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet305') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0003 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_combo_0004', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass305.ts', `
        class SampleClass305 { field: () => void; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void()>",
        "dts2cpp_convert_combo_0004 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0004 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_combo_0005', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline305.ts', `
        function pipeline305(p: () => void): () => void { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "std::function<void()>",
        "dts2cpp_convert_combo_0005 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void()>",
        "dts2cpp_convert_combo_0005 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline305.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline305') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_combo_0005 execution error: ${String(err)}`);
    }
  });
});
