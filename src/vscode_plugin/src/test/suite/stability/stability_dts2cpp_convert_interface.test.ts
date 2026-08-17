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

suite('Stability_DTS2CPP_CONVERT_INTERFACE_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_CONVERT_INTERFACE_Part01.');


  test('dts2cpp_convert_interface_0001', () => {
    try {
      const result = transCkey2Dtskey('interface');
      assert.ok(typeof result === 'string' && result.length > 0,
        "dts2cpp_convert_interface_0001 convert output non-empty");
      assert.strictEqual(result, "interface", "dts2cpp_convert_interface_0001 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_interface_0001 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_interface_0002', () => {
    try {
      const converted = transParseObj(doParseTs('sample295.ts', `function sample295(p0: interface): void { return; }`));
      assert.ok(Array.isArray(converted.funcs) && converted.funcs.length >= 1, 'must parse function');
      assert.strictEqual(converted.funcs[0].name, 'sample295');
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "interface",
        "dts2cpp_convert_interface_0002 param convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_interface_0002 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_interface_0003', () => {
    try {
      const converted = transParseObj(doParseTs('sampleRet295.ts', `
        function sampleRet295(): interface { return undefined as any; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "interface",
        "dts2cpp_convert_interface_0003 return convert output");
      const generated = generateFunctions(converted, 'sampleRet295.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('sampleRet295') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_interface_0003 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_interface_0004', () => {
    try {
      const converted = transParseObj(doParseTs('sampleClass295.ts', `
        class SampleClass295 { field: interface; method(): void {} }`));
      assert.ok(converted.classes.length >= 1, 'parse must produce class');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].type, "interface",
        "dts2cpp_convert_interface_0004 class convert output");
    } catch (err) {
      assert.fail(`dts2cpp_convert_interface_0004 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_convert_interface_0005', () => {
    try {
      const converted = transParseObj(doParseTs('pipeline295.ts', `
        function pipeline295(p: interface): interface { return p; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].returns, "interface",
        "dts2cpp_convert_interface_0005 pipeline return convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "interface",
        "dts2cpp_convert_interface_0005 pipeline param convert output");
      const generated = generateFunctions(converted, 'pipeline295.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0,
        "napiH must be non-empty");
      assert.ok(typeof generated.napiCppContent === 'string', "napiCpp must exist");
      assert.ok(generated.napiHContent.includes('pipeline295') || generated.napiCppContent.length > 0,
        "gen must reference function");
    } catch (err) {
      assert.fail(`dts2cpp_convert_interface_0005 execution error: ${String(err)}`);
    }
  });
});
