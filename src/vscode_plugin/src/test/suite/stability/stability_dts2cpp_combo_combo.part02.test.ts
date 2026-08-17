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

suite('Stability_DTS2CPP_COMBO_COMBO_Part02', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_COMBO_COMBO_Part02.');


  test('dts2cpp_combo_combo_0001', () => {
    try {
      const converted = transParseObj(doParseTs('combo114.ts', `
        function getCombo114(): Map<string,number> { return null as any; } function setCombo114(v: object): void {}`));
      const t1 = transCkey2Dtskey('object');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0001_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0001_t2 convert output");

      assert.ok(converted.funcs.length >= 2);
      const generated = generateFunctions(converted, 'combo114.d.ts');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0001 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0002', () => {
    try {
      const converted = transParseObj(doParseTs('combo115.ts', `
        function comboTriple115(a: object, b: Map<string,number>, c: boolean): void {}`));
      const t1 = transCkey2Dtskey('object');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0002_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0002_t2 convert output");

      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0002 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0003', () => {
    try {
      const converted = transParseObj(doParseTs('combo116.ts', `
        function combo116(a: object, b: Set<number>): object { return a; }`));
      const t1 = transCkey2Dtskey('object');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0003_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0003_t2 convert output");
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::any",
        "dts2cpp_combo_combo_0003_fn_p0 convert output");
      assert.strictEqual(converted.funcs[0].parameters[1].type, "std::set<double>",
        "dts2cpp_combo_combo_0003_fn_p1 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0003 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0004', () => {
    try {
      const converted = transParseObj(doParseTs('combo117.ts', `
        class ComboClass117 { primary: object; secondary: Set<number>; method(): void {} }`));
      const t1 = transCkey2Dtskey('object');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0004_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0004_t2 convert output");
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::any",
        "dts2cpp_combo_combo_0004_class_p0 convert output");
      assert.strictEqual(converted.classes[0].variableList[1].type, "std::set<double>",
        "dts2cpp_combo_combo_0004_class_p1 convert output");
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0004 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0005', () => {
    try {
      const parsed = doParseTs('combo118.ts', `
        type ComboType118 = { primary: object; secondary: Set<number>; extra: boolean; };`);
      const t1 = transCkey2Dtskey('object');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0005_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0005_t2 convert output");

      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      assert.ok(Array.isArray(parsed.types) || parsed !== null);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0005 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0006', () => {
    try {
      const converted = transParseObj(doParseTs('combo119.ts', `
        function getCombo119(): Set<number> { return null as any; } function setCombo119(v: object): void {}`));
      const t1 = transCkey2Dtskey('object');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0006_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0006_t2 convert output");

      assert.ok(converted.funcs.length >= 2);
      const generated = generateFunctions(converted, 'combo119.d.ts');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0006 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0007', () => {
    try {
      const converted = transParseObj(doParseTs('combo120.ts', `
        function comboTriple120(a: object, b: Set<number>, c: boolean): void {}`));
      const t1 = transCkey2Dtskey('object');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0007_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0007_t2 convert output");

      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0007 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0008', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10001.ts', `
        function comboExt10001(a: number, b: number[], c: boolean): number { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('number[]');
      const t3 = transCkey2Dtskey('boolean');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0008_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0008_t2 convert output");
      assert.strictEqual(t3, "bool", "dts2cpp_combo_combo_0008_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0008 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0009', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10002.ts', `
        function comboExt10002(a: number, b: number[], c: void): number { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('number[]');
      const t3 = transCkey2Dtskey('void');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0009_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0009_t2 convert output");
      assert.strictEqual(t3, "void", "dts2cpp_combo_combo_0009_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0009 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0010', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10003.ts', `
        function comboExt10003(a: number, b: number[], c: any): number { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('number[]');
      const t3 = transCkey2Dtskey('any');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0010_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0010_t2 convert output");
      assert.strictEqual(t3, "std::any", "dts2cpp_combo_combo_0010_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0010 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0011', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10004.ts', `
        function comboExt10004(a: number, b: Map<string,number>, c: boolean): number { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('Map<string,number>');
      const t3 = transCkey2Dtskey('boolean');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0011_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0011_t2 convert output");
      assert.strictEqual(t3, "bool", "dts2cpp_combo_combo_0011_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0011 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0012', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10005.ts', `
        function comboExt10005(a: number, b: Map<string,number>, c: void): number { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('Map<string,number>');
      const t3 = transCkey2Dtskey('void');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0012_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0012_t2 convert output");
      assert.strictEqual(t3, "void", "dts2cpp_combo_combo_0012_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0012 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0013', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10006.ts', `
        function comboExt10006(a: number, b: Map<string,number>, c: any): number { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('Map<string,number>');
      const t3 = transCkey2Dtskey('any');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0013_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0013_t2 convert output");
      assert.strictEqual(t3, "std::any", "dts2cpp_combo_combo_0013_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0013 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0014', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10007.ts', `
        function comboExt10007(a: number, b: Set<string>, c: boolean): number { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('Set<string>');
      const t3 = transCkey2Dtskey('boolean');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0014_t1 convert output");
      assert.strictEqual(t2, "std::set<std::string>", "dts2cpp_combo_combo_0014_t2 convert output");
      assert.strictEqual(t3, "bool", "dts2cpp_combo_combo_0014_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0014 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0015', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10008.ts', `
        function comboExt10008(a: number, b: Set<string>, c: void): number { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('Set<string>');
      const t3 = transCkey2Dtskey('void');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0015_t1 convert output");
      assert.strictEqual(t2, "std::set<std::string>", "dts2cpp_combo_combo_0015_t2 convert output");
      assert.strictEqual(t3, "void", "dts2cpp_combo_combo_0015_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0015 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0016', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10009.ts', `
        function comboExt10009(a: number, b: Set<string>, c: any): number { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('Set<string>');
      const t3 = transCkey2Dtskey('any');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0016_t1 convert output");
      assert.strictEqual(t2, "std::set<std::string>", "dts2cpp_combo_combo_0016_t2 convert output");
      assert.strictEqual(t3, "std::any", "dts2cpp_combo_combo_0016_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0016 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0017', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10010.ts', `
        function comboExt10010(a: string, b: number[], c: boolean): string { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('number[]');
      const t3 = transCkey2Dtskey('boolean');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0017_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0017_t2 convert output");
      assert.strictEqual(t3, "bool", "dts2cpp_combo_combo_0017_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0017 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0018', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10011.ts', `
        function comboExt10011(a: string, b: number[], c: void): string { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('number[]');
      const t3 = transCkey2Dtskey('void');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0018_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0018_t2 convert output");
      assert.strictEqual(t3, "void", "dts2cpp_combo_combo_0018_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0018 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0019', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10012.ts', `
        function comboExt10012(a: string, b: number[], c: any): string { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('number[]');
      const t3 = transCkey2Dtskey('any');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0019_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0019_t2 convert output");
      assert.strictEqual(t3, "std::any", "dts2cpp_combo_combo_0019_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0019 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0020', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10013.ts', `
        function comboExt10013(a: string, b: Map<string,number>, c: boolean): string { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('Map<string,number>');
      const t3 = transCkey2Dtskey('boolean');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0020_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0020_t2 convert output");
      assert.strictEqual(t3, "bool", "dts2cpp_combo_combo_0020_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0020 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0021', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10014.ts', `
        function comboExt10014(a: string, b: Map<string,number>, c: void): string { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('Map<string,number>');
      const t3 = transCkey2Dtskey('void');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0021_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0021_t2 convert output");
      assert.strictEqual(t3, "void", "dts2cpp_combo_combo_0021_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0021 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0022', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10015.ts', `
        function comboExt10015(a: string, b: Map<string,number>, c: any): string { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('Map<string,number>');
      const t3 = transCkey2Dtskey('any');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0022_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0022_t2 convert output");
      assert.strictEqual(t3, "std::any", "dts2cpp_combo_combo_0022_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0022 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0023', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10016.ts', `
        function comboExt10016(a: string, b: Set<string>, c: boolean): string { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('Set<string>');
      const t3 = transCkey2Dtskey('boolean');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0023_t1 convert output");
      assert.strictEqual(t2, "std::set<std::string>", "dts2cpp_combo_combo_0023_t2 convert output");
      assert.strictEqual(t3, "bool", "dts2cpp_combo_combo_0023_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0023 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0024', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10017.ts', `
        function comboExt10017(a: string, b: Set<string>, c: void): string { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('Set<string>');
      const t3 = transCkey2Dtskey('void');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0024_t1 convert output");
      assert.strictEqual(t2, "std::set<std::string>", "dts2cpp_combo_combo_0024_t2 convert output");
      assert.strictEqual(t3, "void", "dts2cpp_combo_combo_0024_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0024 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0025', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10018.ts', `
        function comboExt10018(a: string, b: Set<string>, c: any): string { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('Set<string>');
      const t3 = transCkey2Dtskey('any');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0025_t1 convert output");
      assert.strictEqual(t2, "std::set<std::string>", "dts2cpp_combo_combo_0025_t2 convert output");
      assert.strictEqual(t3, "std::any", "dts2cpp_combo_combo_0025_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0025 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0026', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10019.ts', `
        function comboExt10019(a: boolean, b: number[], c: boolean): boolean { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('number[]');
      const t3 = transCkey2Dtskey('boolean');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0026_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0026_t2 convert output");
      assert.strictEqual(t3, "bool", "dts2cpp_combo_combo_0026_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0026 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0027', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10020.ts', `
        function comboExt10020(a: boolean, b: number[], c: void): boolean { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('number[]');
      const t3 = transCkey2Dtskey('void');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0027_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0027_t2 convert output");
      assert.strictEqual(t3, "void", "dts2cpp_combo_combo_0027_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0027 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0028', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10021.ts', `
        function comboExt10021(a: boolean, b: number[], c: any): boolean { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('number[]');
      const t3 = transCkey2Dtskey('any');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0028_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0028_t2 convert output");
      assert.strictEqual(t3, "std::any", "dts2cpp_combo_combo_0028_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0028 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0029', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10022.ts', `
        function comboExt10022(a: boolean, b: Map<string,number>, c: boolean): boolean { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('Map<string,number>');
      const t3 = transCkey2Dtskey('boolean');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0029_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0029_t2 convert output");
      assert.strictEqual(t3, "bool", "dts2cpp_combo_combo_0029_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0029 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0030', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10023.ts', `
        function comboExt10023(a: boolean, b: Map<string,number>, c: void): boolean { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('Map<string,number>');
      const t3 = transCkey2Dtskey('void');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0030_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0030_t2 convert output");
      assert.strictEqual(t3, "void", "dts2cpp_combo_combo_0030_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0030 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0031', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10024.ts', `
        function comboExt10024(a: boolean, b: Map<string,number>, c: any): boolean { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('Map<string,number>');
      const t3 = transCkey2Dtskey('any');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0031_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0031_t2 convert output");
      assert.strictEqual(t3, "std::any", "dts2cpp_combo_combo_0031_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0031 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0032', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10025.ts', `
        function comboExt10025(a: boolean, b: Set<string>, c: boolean): boolean { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('Set<string>');
      const t3 = transCkey2Dtskey('boolean');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0032_t1 convert output");
      assert.strictEqual(t2, "std::set<std::string>", "dts2cpp_combo_combo_0032_t2 convert output");
      assert.strictEqual(t3, "bool", "dts2cpp_combo_combo_0032_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0032 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0033', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10026.ts', `
        function comboExt10026(a: boolean, b: Set<string>, c: void): boolean { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('Set<string>');
      const t3 = transCkey2Dtskey('void');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0033_t1 convert output");
      assert.strictEqual(t2, "std::set<std::string>", "dts2cpp_combo_combo_0033_t2 convert output");
      assert.strictEqual(t3, "void", "dts2cpp_combo_combo_0033_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0033 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0034', () => {
    try {
      const converted = transParseObj(doParseTs('comboExt10027.ts', `
        function comboExt10027(a: boolean, b: Set<string>, c: any): boolean { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('Set<string>');
      const t3 = transCkey2Dtskey('any');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0034_t1 convert output");
      assert.strictEqual(t2, "std::set<std::string>", "dts2cpp_combo_combo_0034_t2 convert output");
      assert.strictEqual(t3, "std::any", "dts2cpp_combo_combo_0034_t3 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0034 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0035', () => {
    try {
      const converted = transParseObj(doParseTs('comboNest10028.ts', `
        function comboNest10028(a: Map<string, number[]>, b: number): Map<string, number[]> { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
      const r1 = transCkey2Dtskey('Map<string, number[]>');
      const r2 = transCkey2Dtskey('number');
      assert.strictEqual(r1, "Map<string, number[]>", "dts2cpp_combo_combo_0035_r1 convert output");
      assert.strictEqual(r2, "double", "dts2cpp_combo_combo_0035_r2 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0035 (nested map-array) execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0036', () => {
    try {
      const converted = transParseObj(doParseTs('comboNest10029.ts', `
        function comboNest10029(a: Array<Map<string, number>>, b: string): Array<Map<string, number>> { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
      const r1 = transCkey2Dtskey('Array<Map<string, number>>');
      const r2 = transCkey2Dtskey('string');
      assert.strictEqual(r1, "Array<Map<string, number>>", "dts2cpp_combo_combo_0036_r1 convert output");
      assert.strictEqual(r2, "std::string", "dts2cpp_combo_combo_0036_r2 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0036 (nested array-map) execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0037', () => {
    try {
      const converted = transParseObj(doParseTs('comboNest10030.ts', `
        function comboNest10030(a: (number | string), b: boolean[]): (number | string) { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
      const r1 = transCkey2Dtskey('(number | string)');
      const r2 = transCkey2Dtskey('boolean[]');
      assert.strictEqual(r1, "(number | string)", "dts2cpp_combo_combo_0037_r1 convert output");
      assert.strictEqual(r2, "std::vector<bool>", "dts2cpp_combo_combo_0037_r2 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0037 (union-array combo) execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0038', () => {
    try {
      const converted = transParseObj(doParseTs('comboNest10031.ts', `
        function comboNest10031(a: Record<string, number>, b: Map<string, boolean>): Record<string, number> { return a;
        }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
      const r1 = transCkey2Dtskey('Record<string, number>');
      const r2 = transCkey2Dtskey('Map<string, boolean>');
      assert.strictEqual(r1, "Record<string, number>", "dts2cpp_combo_combo_0038_r1 convert output");
      assert.strictEqual(r2, "std::map<std::string, bool>", "dts2cpp_combo_combo_0038_r2 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0038 (record-map combo) execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0039', () => {
    try {
      const converted = transParseObj(doParseTs('comboNest10032.ts', `
        function comboNest10032(a: Promise<number>, b: Callback<string>): Promise<number> { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
      const r1 = transCkey2Dtskey('Promise<number>');
      const r2 = transCkey2Dtskey('Callback<string>');
      assert.strictEqual(r1, "Promise<number>", "dts2cpp_combo_combo_0039_r1 convert output");
      assert.strictEqual(r2, "std::function<void(std::string)>", "dts2cpp_combo_combo_0039_r2 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0039 (promise-callback combo) execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0040', () => {
    try {
      const converted = transParseObj(doParseTs('comboNest10033.ts', `
        function comboNest10033(a: [number, string], b: boolean): [number, string] { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
      const r1 = transCkey2Dtskey('[number, string]');
      const r2 = transCkey2Dtskey('boolean');
      assert.strictEqual(r1, "[number, string]", "dts2cpp_combo_combo_0040_r1 convert output");
      assert.strictEqual(r2, "bool", "dts2cpp_combo_combo_0040_r2 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0040 (tuple-basic combo) execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0041', () => {
    try {
      const converted = transParseObj(doParseTs('comboNest10034.ts', `
        function comboNest10034(a: ReadonlyArray<number>, b: Set<boolean>): ReadonlyArray<number> { return a; }`));
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
      const r1 = transCkey2Dtskey('ReadonlyArray<number>');
      const r2 = transCkey2Dtskey('Set<boolean>');
      assert.strictEqual(r1, "ReadonlyArray<number>", "dts2cpp_combo_combo_0041_r1 convert output");
      assert.strictEqual(r2, "std::set<bool>", "dts2cpp_combo_combo_0041_r2 convert output");
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0041 (readonly-set combo) execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0042', () => {
    try {
      const parsed = doParseTs('comboIface10035.ts', `
        interface ComboIfaceA { id: number; tags: string[]; flags: Map<string, boolean>; handler: (k: string) => number;
        }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted !== undefined && typeof converted === 'object');
      assert.ok(converted.interfaces !== undefined || converted.types !== undefined || converted.classes !== undefined);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0042 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0043', () => {
    try {
      const parsed = doParseTs('comboIface10036.ts', `
        interface ComboIfaceB { data: Array<Map<string, number>>; count: Set<number>; meta: Record<string, any>; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted !== undefined && typeof converted === 'object');
      assert.ok(converted.interfaces !== undefined || converted.types !== undefined || converted.classes !== undefined);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0043 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0044', () => {
    try {
      const parsed = doParseTs('comboIface10037.ts', `
        type ComboAliasC = { nums: number[]; mapping: Map<number, string>; cb: Callback<boolean>; };`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted !== undefined && typeof converted === 'object');
      assert.ok(converted.interfaces !== undefined || converted.types !== undefined || converted.classes !== undefined);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0044 execution error: ${String(err)}`);
    }
  });
});
