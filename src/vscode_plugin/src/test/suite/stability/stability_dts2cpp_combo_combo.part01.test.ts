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

suite('Stability_DTS2CPP_COMBO_COMBO_Part01', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_DTS2CPP_COMBO_COMBO_Part01.');


  test('dts2cpp_combo_combo_0001', () => {
    try {
      const converted = transParseObj(doParseTs('combo1.ts', `
        function combo1(a: number, b: number[]): number { return a; }`));
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0001_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0001_t2 convert output");
      assert.strictEqual(converted.funcs[0].parameters[0].type, "double",
        "dts2cpp_combo_combo_0001_fn_p0 convert output");
      assert.strictEqual(converted.funcs[0].parameters[1].type, "std::vector<double>",
        "dts2cpp_combo_combo_0001_fn_p1 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0001 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0002', () => {
    try {
      const converted = transParseObj(doParseTs('combo2.ts', `
        class ComboClass2 { primary: number; secondary: number[]; method(): void {} }`));
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0002_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0002_t2 convert output");
      assert.strictEqual(converted.classes[0].variableList[0].type, "double",
        "dts2cpp_combo_combo_0002_class_p0 convert output");
      assert.strictEqual(converted.classes[0].variableList[1].type, "std::vector<double>",
        "dts2cpp_combo_combo_0002_class_p1 convert output");
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0002 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0003', () => {
    try {
      const parsed = doParseTs('combo3.ts', `
        type ComboType3 = { primary: number; secondary: number[]; extra: boolean; };`);
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0003_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0003_t2 convert output");

      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      assert.ok(Array.isArray(parsed.types) || parsed !== null);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0003 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0004', () => {
    try {
      const converted = transParseObj(doParseTs('combo4.ts', `
        function getCombo4(): number[] { return null as any; } function setCombo4(v: number): void {}`));
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0004_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0004_t2 convert output");

      assert.ok(converted.funcs.length >= 2);
      const generated = generateFunctions(converted, 'combo4.d.ts');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0004 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0005', () => {
    try {
      const converted = transParseObj(doParseTs('combo5.ts', `
        function comboTriple5(a: number, b: number[], c: boolean): void {}`));
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0005_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0005_t2 convert output");

      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0005 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0006', () => {
    try {
      const converted = transParseObj(doParseTs('combo6.ts', `
        function combo6(a: number, b: string[]): number { return a; }`));
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0006_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0006_t2 convert output");
      assert.strictEqual(converted.funcs[0].parameters[0].type, "double",
        "dts2cpp_combo_combo_0006_fn_p0 convert output");
      assert.strictEqual(converted.funcs[0].parameters[1].type, "std::vector<std::string>",
        "dts2cpp_combo_combo_0006_fn_p1 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0006 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0007', () => {
    try {
      const converted = transParseObj(doParseTs('combo7.ts', `
        class ComboClass7 { primary: number; secondary: string[]; method(): void {} }`));
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0007_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0007_t2 convert output");
      assert.strictEqual(converted.classes[0].variableList[0].type, "double",
        "dts2cpp_combo_combo_0007_class_p0 convert output");
      assert.strictEqual(converted.classes[0].variableList[1].type, "std::vector<std::string>",
        "dts2cpp_combo_combo_0007_class_p1 convert output");
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0007 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0008', () => {
    try {
      const parsed = doParseTs('combo8.ts', `
        type ComboType8 = { primary: number; secondary: string[]; extra: boolean; };`);
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0008_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0008_t2 convert output");

      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      assert.ok(Array.isArray(parsed.types) || parsed !== null);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0008 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0009', () => {
    try {
      const converted = transParseObj(doParseTs('combo9.ts', `
        function getCombo9(): string[] { return null as any; } function setCombo9(v: number): void {}`));
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0009_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0009_t2 convert output");

      assert.ok(converted.funcs.length >= 2);
      const generated = generateFunctions(converted, 'combo9.d.ts');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0009 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0010', () => {
    try {
      const converted = transParseObj(doParseTs('combo10.ts', `
        function comboTriple10(a: number, b: string[], c: boolean): void {}`));
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0010_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0010_t2 convert output");

      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0010 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0011', () => {
    try {
      const converted = transParseObj(doParseTs('combo11.ts', `
        function combo11(a: number, b: Map<string,number>): number { return a; }`));
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0011_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0011_t2 convert output");
      assert.strictEqual(converted.funcs[0].parameters[0].type, "double",
        "dts2cpp_combo_combo_0011_fn_p0 convert output");
      assert.strictEqual(converted.funcs[0].parameters[1].type, "std::map<std::string, double>",
        "dts2cpp_combo_combo_0011_fn_p1 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0011 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0012', () => {
    try {
      const converted = transParseObj(doParseTs('combo12.ts', `
        class ComboClass12 { primary: number; secondary: Map<string,number>; method(): void {} }`));
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0012_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0012_t2 convert output");
      assert.strictEqual(converted.classes[0].variableList[0].type, "double",
        "dts2cpp_combo_combo_0012_class_p0 convert output");
      assert.strictEqual(converted.classes[0].variableList[1].type, "std::map<std::string, double>",
        "dts2cpp_combo_combo_0012_class_p1 convert output");
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0012 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0013', () => {
    try {
      const parsed = doParseTs('combo13.ts', `
        type ComboType13 = { primary: number; secondary: Map<string,number>; extra: boolean; };`);
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0013_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0013_t2 convert output");

      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      assert.ok(Array.isArray(parsed.types) || parsed !== null);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0013 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0014', () => {
    try {
      const converted = transParseObj(doParseTs('combo14.ts', `
        function getCombo14(): Map<string,number> { return null as any; } function setCombo14(v: number): void {}`));
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0014_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0014_t2 convert output");

      assert.ok(converted.funcs.length >= 2);
      const generated = generateFunctions(converted, 'combo14.d.ts');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0014 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0015', () => {
    try {
      const converted = transParseObj(doParseTs('combo15.ts', `
        function comboTriple15(a: number, b: Map<string,number>, c: boolean): void {}`));
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0015_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0015_t2 convert output");

      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0015 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0016', () => {
    try {
      const converted = transParseObj(doParseTs('combo16.ts', `
        function combo16(a: number, b: Set<number>): number { return a; }`));
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0016_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0016_t2 convert output");
      assert.strictEqual(converted.funcs[0].parameters[0].type, "double",
        "dts2cpp_combo_combo_0016_fn_p0 convert output");
      assert.strictEqual(converted.funcs[0].parameters[1].type, "std::set<double>",
        "dts2cpp_combo_combo_0016_fn_p1 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0016 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0017', () => {
    try {
      const converted = transParseObj(doParseTs('combo17.ts', `
        class ComboClass17 { primary: number; secondary: Set<number>; method(): void {} }`));
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0017_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0017_t2 convert output");
      assert.strictEqual(converted.classes[0].variableList[0].type, "double",
        "dts2cpp_combo_combo_0017_class_p0 convert output");
      assert.strictEqual(converted.classes[0].variableList[1].type, "std::set<double>",
        "dts2cpp_combo_combo_0017_class_p1 convert output");
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0017 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0018', () => {
    try {
      const parsed = doParseTs('combo18.ts', `
        type ComboType18 = { primary: number; secondary: Set<number>; extra: boolean; };`);
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0018_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0018_t2 convert output");

      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      assert.ok(Array.isArray(parsed.types) || parsed !== null);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0018 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0019', () => {
    try {
      const converted = transParseObj(doParseTs('combo19.ts', `
        function getCombo19(): Set<number> { return null as any; } function setCombo19(v: number): void {}`));
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0019_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0019_t2 convert output");

      assert.ok(converted.funcs.length >= 2);
      const generated = generateFunctions(converted, 'combo19.d.ts');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0019 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0020', () => {
    try {
      const converted = transParseObj(doParseTs('combo20.ts', `
        function comboTriple20(a: number, b: Set<number>, c: boolean): void {}`));
      const t1 = transCkey2Dtskey('number');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "double", "dts2cpp_combo_combo_0020_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0020_t2 convert output");

      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0020 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0021', () => {
    try {
      const converted = transParseObj(doParseTs('combo21.ts', `
        function combo21(a: string, b: number[]): string { return a; }`));
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0021_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0021_t2 convert output");
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::string",
        "dts2cpp_combo_combo_0021_fn_p0 convert output");
      assert.strictEqual(converted.funcs[0].parameters[1].type, "std::vector<double>",
        "dts2cpp_combo_combo_0021_fn_p1 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0021 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0022', () => {
    try {
      const converted = transParseObj(doParseTs('combo22.ts', `
        class ComboClass22 { primary: string; secondary: number[]; method(): void {} }`));
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0022_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0022_t2 convert output");
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::string",
        "dts2cpp_combo_combo_0022_class_p0 convert output");
      assert.strictEqual(converted.classes[0].variableList[1].type, "std::vector<double>",
        "dts2cpp_combo_combo_0022_class_p1 convert output");
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0022 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0023', () => {
    try {
      const parsed = doParseTs('combo23.ts', `
        type ComboType23 = { primary: string; secondary: number[]; extra: boolean; };`);
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0023_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0023_t2 convert output");

      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      assert.ok(Array.isArray(parsed.types) || parsed !== null);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0023 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0024', () => {
    try {
      const converted = transParseObj(doParseTs('combo24.ts', `
        function getCombo24(): number[] { return null as any; } function setCombo24(v: string): void {}`));
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0024_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0024_t2 convert output");

      assert.ok(converted.funcs.length >= 2);
      const generated = generateFunctions(converted, 'combo24.d.ts');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0024 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0025', () => {
    try {
      const converted = transParseObj(doParseTs('combo25.ts', `
        function comboTriple25(a: string, b: number[], c: boolean): void {}`));
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0025_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0025_t2 convert output");

      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0025 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0026', () => {
    try {
      const converted = transParseObj(doParseTs('combo26.ts', `
        function combo26(a: string, b: string[]): string { return a; }`));
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0026_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0026_t2 convert output");
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::string",
        "dts2cpp_combo_combo_0026_fn_p0 convert output");
      assert.strictEqual(converted.funcs[0].parameters[1].type, "std::vector<std::string>",
        "dts2cpp_combo_combo_0026_fn_p1 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0026 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0027', () => {
    try {
      const converted = transParseObj(doParseTs('combo27.ts', `
        class ComboClass27 { primary: string; secondary: string[]; method(): void {} }`));
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0027_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0027_t2 convert output");
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::string",
        "dts2cpp_combo_combo_0027_class_p0 convert output");
      assert.strictEqual(converted.classes[0].variableList[1].type, "std::vector<std::string>",
        "dts2cpp_combo_combo_0027_class_p1 convert output");
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0027 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0028', () => {
    try {
      const parsed = doParseTs('combo28.ts', `
        type ComboType28 = { primary: string; secondary: string[]; extra: boolean; };`);
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0028_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0028_t2 convert output");

      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      assert.ok(Array.isArray(parsed.types) || parsed !== null);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0028 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0029', () => {
    try {
      const converted = transParseObj(doParseTs('combo29.ts', `
        function getCombo29(): string[] { return null as any; } function setCombo29(v: string): void {}`));
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0029_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0029_t2 convert output");

      assert.ok(converted.funcs.length >= 2);
      const generated = generateFunctions(converted, 'combo29.d.ts');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0029 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0030', () => {
    try {
      const converted = transParseObj(doParseTs('combo30.ts', `
        function comboTriple30(a: string, b: string[], c: boolean): void {}`));
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0030_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0030_t2 convert output");

      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0030 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0031', () => {
    try {
      const converted = transParseObj(doParseTs('combo31.ts', `
        function combo31(a: string, b: Map<string,number>): string { return a; }`));
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0031_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0031_t2 convert output");
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::string",
        "dts2cpp_combo_combo_0031_fn_p0 convert output");
      assert.strictEqual(converted.funcs[0].parameters[1].type, "std::map<std::string, double>",
        "dts2cpp_combo_combo_0031_fn_p1 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0031 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0032', () => {
    try {
      const converted = transParseObj(doParseTs('combo32.ts', `
        class ComboClass32 { primary: string; secondary: Map<string,number>; method(): void {} }`));
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0032_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0032_t2 convert output");
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::string",
        "dts2cpp_combo_combo_0032_class_p0 convert output");
      assert.strictEqual(converted.classes[0].variableList[1].type, "std::map<std::string, double>",
        "dts2cpp_combo_combo_0032_class_p1 convert output");
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0032 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0033', () => {
    try {
      const parsed = doParseTs('combo33.ts', `
        type ComboType33 = { primary: string; secondary: Map<string,number>; extra: boolean; };`);
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0033_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0033_t2 convert output");

      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      assert.ok(Array.isArray(parsed.types) || parsed !== null);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0033 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0034', () => {
    try {
      const converted = transParseObj(doParseTs('combo34.ts', `
        function getCombo34(): Map<string,number> { return null as any; } function setCombo34(v: string): void {}`));
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0034_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0034_t2 convert output");

      assert.ok(converted.funcs.length >= 2);
      const generated = generateFunctions(converted, 'combo34.d.ts');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0034 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0035', () => {
    try {
      const converted = transParseObj(doParseTs('combo35.ts', `
        function comboTriple35(a: string, b: Map<string,number>, c: boolean): void {}`));
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0035_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0035_t2 convert output");

      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0035 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0036', () => {
    try {
      const converted = transParseObj(doParseTs('combo36.ts', `
        function combo36(a: string, b: Set<number>): string { return a; }`));
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0036_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0036_t2 convert output");
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::string",
        "dts2cpp_combo_combo_0036_fn_p0 convert output");
      assert.strictEqual(converted.funcs[0].parameters[1].type, "std::set<double>",
        "dts2cpp_combo_combo_0036_fn_p1 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0036 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0037', () => {
    try {
      const converted = transParseObj(doParseTs('combo37.ts', `
        class ComboClass37 { primary: string; secondary: Set<number>; method(): void {} }`));
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0037_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0037_t2 convert output");
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::string",
        "dts2cpp_combo_combo_0037_class_p0 convert output");
      assert.strictEqual(converted.classes[0].variableList[1].type, "std::set<double>",
        "dts2cpp_combo_combo_0037_class_p1 convert output");
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0037 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0038', () => {
    try {
      const parsed = doParseTs('combo38.ts', `
        type ComboType38 = { primary: string; secondary: Set<number>; extra: boolean; };`);
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0038_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0038_t2 convert output");

      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      assert.ok(Array.isArray(parsed.types) || parsed !== null);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0038 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0039', () => {
    try {
      const converted = transParseObj(doParseTs('combo39.ts', `
        function getCombo39(): Set<number> { return null as any; } function setCombo39(v: string): void {}`));
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0039_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0039_t2 convert output");

      assert.ok(converted.funcs.length >= 2);
      const generated = generateFunctions(converted, 'combo39.d.ts');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0039 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0040', () => {
    try {
      const converted = transParseObj(doParseTs('combo40.ts', `
        function comboTriple40(a: string, b: Set<number>, c: boolean): void {}`));
      const t1 = transCkey2Dtskey('string');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "std::string", "dts2cpp_combo_combo_0040_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0040_t2 convert output");

      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0040 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0041', () => {
    try {
      const converted = transParseObj(doParseTs('combo41.ts', `
        function combo41(a: boolean, b: number[]): boolean { return a; }`));
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0041_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0041_t2 convert output");
      assert.strictEqual(converted.funcs[0].parameters[0].type, "bool", "dts2cpp_combo_combo_0041_fn_p0 convert output");
      assert.strictEqual(converted.funcs[0].parameters[1].type, "std::vector<double>",
        "dts2cpp_combo_combo_0041_fn_p1 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0041 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0042', () => {
    try {
      const converted = transParseObj(doParseTs('combo42.ts', `
        class ComboClass42 { primary: boolean; secondary: number[]; method(): void {} }`));
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0042_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0042_t2 convert output");
      assert.strictEqual(converted.classes[0].variableList[0].type, "bool",
        "dts2cpp_combo_combo_0042_class_p0 convert output");
      assert.strictEqual(converted.classes[0].variableList[1].type, "std::vector<double>",
        "dts2cpp_combo_combo_0042_class_p1 convert output");
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0042 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0043', () => {
    try {
      const parsed = doParseTs('combo43.ts', `
        type ComboType43 = { primary: boolean; secondary: number[]; extra: boolean; };`);
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0043_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0043_t2 convert output");

      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      assert.ok(Array.isArray(parsed.types) || parsed !== null);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0043 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0044', () => {
    try {
      const converted = transParseObj(doParseTs('combo44.ts', `
        function getCombo44(): number[] { return null as any; } function setCombo44(v: boolean): void {}`));
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0044_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0044_t2 convert output");

      assert.ok(converted.funcs.length >= 2);
      const generated = generateFunctions(converted, 'combo44.d.ts');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0044 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0045', () => {
    try {
      const converted = transParseObj(doParseTs('combo45.ts', `
        function comboTriple45(a: boolean, b: number[], c: boolean): void {}`));
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0045_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0045_t2 convert output");

      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0045 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0046', () => {
    try {
      const converted = transParseObj(doParseTs('combo46.ts', `
        function combo46(a: boolean, b: string[]): boolean { return a; }`));
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0046_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0046_t2 convert output");
      assert.strictEqual(converted.funcs[0].parameters[0].type, "bool", "dts2cpp_combo_combo_0046_fn_p0 convert output");
      assert.strictEqual(converted.funcs[0].parameters[1].type, "std::vector<std::string>",
        "dts2cpp_combo_combo_0046_fn_p1 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0046 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0047', () => {
    try {
      const converted = transParseObj(doParseTs('combo47.ts', `
        class ComboClass47 { primary: boolean; secondary: string[]; method(): void {} }`));
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0047_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0047_t2 convert output");
      assert.strictEqual(converted.classes[0].variableList[0].type, "bool",
        "dts2cpp_combo_combo_0047_class_p0 convert output");
      assert.strictEqual(converted.classes[0].variableList[1].type, "std::vector<std::string>",
        "dts2cpp_combo_combo_0047_class_p1 convert output");
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0047 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0048', () => {
    try {
      const parsed = doParseTs('combo48.ts', `
        type ComboType48 = { primary: boolean; secondary: string[]; extra: boolean; };`);
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0048_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0048_t2 convert output");

      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      assert.ok(Array.isArray(parsed.types) || parsed !== null);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0048 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0049', () => {
    try {
      const converted = transParseObj(doParseTs('combo49.ts', `
        function getCombo49(): string[] { return null as any; } function setCombo49(v: boolean): void {}`));
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0049_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0049_t2 convert output");

      assert.ok(converted.funcs.length >= 2);
      const generated = generateFunctions(converted, 'combo49.d.ts');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0049 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0050', () => {
    try {
      const converted = transParseObj(doParseTs('combo50.ts', `
        function comboTriple50(a: boolean, b: string[], c: boolean): void {}`));
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0050_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0050_t2 convert output");

      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0050 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0051', () => {
    try {
      const converted = transParseObj(doParseTs('combo51.ts', `
        function combo51(a: boolean, b: Map<string,number>): boolean { return a; }`));
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0051_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0051_t2 convert output");
      assert.strictEqual(converted.funcs[0].parameters[0].type, "bool", "dts2cpp_combo_combo_0051_fn_p0 convert output");
      assert.strictEqual(converted.funcs[0].parameters[1].type, "std::map<std::string, double>",
        "dts2cpp_combo_combo_0051_fn_p1 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0051 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0052', () => {
    try {
      const converted = transParseObj(doParseTs('combo52.ts', `
        class ComboClass52 { primary: boolean; secondary: Map<string,number>; method(): void {} }`));
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0052_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0052_t2 convert output");
      assert.strictEqual(converted.classes[0].variableList[0].type, "bool",
        "dts2cpp_combo_combo_0052_class_p0 convert output");
      assert.strictEqual(converted.classes[0].variableList[1].type, "std::map<std::string, double>",
        "dts2cpp_combo_combo_0052_class_p1 convert output");
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0052 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0053', () => {
    try {
      const parsed = doParseTs('combo53.ts', `
        type ComboType53 = { primary: boolean; secondary: Map<string,number>; extra: boolean; };`);
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0053_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0053_t2 convert output");

      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      assert.ok(Array.isArray(parsed.types) || parsed !== null);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0053 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0054', () => {
    try {
      const converted = transParseObj(doParseTs('combo54.ts', `
        function getCombo54(): Map<string,number> { return null as any; } function setCombo54(v: boolean): void {}`));
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0054_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0054_t2 convert output");

      assert.ok(converted.funcs.length >= 2);
      const generated = generateFunctions(converted, 'combo54.d.ts');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0054 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0055', () => {
    try {
      const converted = transParseObj(doParseTs('combo55.ts', `
        function comboTriple55(a: boolean, b: Map<string,number>, c: boolean): void {}`));
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0055_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0055_t2 convert output");

      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0055 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0056', () => {
    try {
      const converted = transParseObj(doParseTs('combo56.ts', `
        function combo56(a: boolean, b: Set<number>): boolean { return a; }`));
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0056_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0056_t2 convert output");
      assert.strictEqual(converted.funcs[0].parameters[0].type, "bool", "dts2cpp_combo_combo_0056_fn_p0 convert output");
      assert.strictEqual(converted.funcs[0].parameters[1].type, "std::set<double>",
        "dts2cpp_combo_combo_0056_fn_p1 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0056 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0057', () => {
    try {
      const converted = transParseObj(doParseTs('combo57.ts', `
        class ComboClass57 { primary: boolean; secondary: Set<number>; method(): void {} }`));
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0057_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0057_t2 convert output");
      assert.strictEqual(converted.classes[0].variableList[0].type, "bool",
        "dts2cpp_combo_combo_0057_class_p0 convert output");
      assert.strictEqual(converted.classes[0].variableList[1].type, "std::set<double>",
        "dts2cpp_combo_combo_0057_class_p1 convert output");
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0057 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0058', () => {
    try {
      const parsed = doParseTs('combo58.ts', `
        type ComboType58 = { primary: boolean; secondary: Set<number>; extra: boolean; };`);
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0058_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0058_t2 convert output");

      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      assert.ok(Array.isArray(parsed.types) || parsed !== null);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0058 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0059', () => {
    try {
      const converted = transParseObj(doParseTs('combo59.ts', `
        function getCombo59(): Set<number> { return null as any; } function setCombo59(v: boolean): void {}`));
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0059_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0059_t2 convert output");

      assert.ok(converted.funcs.length >= 2);
      const generated = generateFunctions(converted, 'combo59.d.ts');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0059 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0060', () => {
    try {
      const converted = transParseObj(doParseTs('combo60.ts', `
        function comboTriple60(a: boolean, b: Set<number>, c: boolean): void {}`));
      const t1 = transCkey2Dtskey('boolean');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "bool", "dts2cpp_combo_combo_0060_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0060_t2 convert output");

      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0060 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0061', () => {
    try {
      const converted = transParseObj(doParseTs('combo61.ts', `
        function combo61(a: void, b: number[]): void { return a; }`));
      const t1 = transCkey2Dtskey('void');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "void", "dts2cpp_combo_combo_0061_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0061_t2 convert output");
      assert.strictEqual(converted.funcs[0].parameters[0].type, "void", "dts2cpp_combo_combo_0061_fn_p0 convert output");
      assert.strictEqual(converted.funcs[0].parameters[1].type, "std::vector<double>",
        "dts2cpp_combo_combo_0061_fn_p1 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0061 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0062', () => {
    try {
      const converted = transParseObj(doParseTs('combo62.ts', `
        class ComboClass62 { primary: void; secondary: number[]; method(): void {} }`));
      const t1 = transCkey2Dtskey('void');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "void", "dts2cpp_combo_combo_0062_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0062_t2 convert output");
      assert.strictEqual(converted.classes[0].variableList[0].type, "void",
        "dts2cpp_combo_combo_0062_class_p0 convert output");
      assert.strictEqual(converted.classes[0].variableList[1].type, "std::vector<double>",
        "dts2cpp_combo_combo_0062_class_p1 convert output");
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0062 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0063', () => {
    try {
      const parsed = doParseTs('combo63.ts', `
        type ComboType63 = { primary: void; secondary: number[]; extra: boolean; };`);
      const t1 = transCkey2Dtskey('void');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "void", "dts2cpp_combo_combo_0063_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0063_t2 convert output");

      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      assert.ok(Array.isArray(parsed.types) || parsed !== null);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0063 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0064', () => {
    try {
      const converted = transParseObj(doParseTs('combo64.ts', `
        function getCombo64(): number[] { return null as any; } function setCombo64(v: void): void {}`));
      const t1 = transCkey2Dtskey('void');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "void", "dts2cpp_combo_combo_0064_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0064_t2 convert output");

      assert.ok(converted.funcs.length >= 2);
      const generated = generateFunctions(converted, 'combo64.d.ts');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0064 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0065', () => {
    try {
      const converted = transParseObj(doParseTs('combo65.ts', `
        function comboTriple65(a: void, b: number[], c: boolean): void {}`));
      const t1 = transCkey2Dtskey('void');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "void", "dts2cpp_combo_combo_0065_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0065_t2 convert output");

      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0065 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0066', () => {
    try {
      const converted = transParseObj(doParseTs('combo66.ts', `
        function combo66(a: void, b: string[]): void { return a; }`));
      const t1 = transCkey2Dtskey('void');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "void", "dts2cpp_combo_combo_0066_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0066_t2 convert output");
      assert.strictEqual(converted.funcs[0].parameters[0].type, "void", "dts2cpp_combo_combo_0066_fn_p0 convert output");
      assert.strictEqual(converted.funcs[0].parameters[1].type, "std::vector<std::string>",
        "dts2cpp_combo_combo_0066_fn_p1 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0066 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0067', () => {
    try {
      const converted = transParseObj(doParseTs('combo67.ts', `
        class ComboClass67 { primary: void; secondary: string[]; method(): void {} }`));
      const t1 = transCkey2Dtskey('void');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "void", "dts2cpp_combo_combo_0067_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0067_t2 convert output");
      assert.strictEqual(converted.classes[0].variableList[0].type, "void",
        "dts2cpp_combo_combo_0067_class_p0 convert output");
      assert.strictEqual(converted.classes[0].variableList[1].type, "std::vector<std::string>",
        "dts2cpp_combo_combo_0067_class_p1 convert output");
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0067 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0068', () => {
    try {
      const parsed = doParseTs('combo68.ts', `
        type ComboType68 = { primary: void; secondary: string[]; extra: boolean; };`);
      const t1 = transCkey2Dtskey('void');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "void", "dts2cpp_combo_combo_0068_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0068_t2 convert output");

      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      assert.ok(Array.isArray(parsed.types) || parsed !== null);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0068 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0069', () => {
    try {
      const converted = transParseObj(doParseTs('combo69.ts', `
        function getCombo69(): string[] { return null as any; } function setCombo69(v: void): void {}`));
      const t1 = transCkey2Dtskey('void');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "void", "dts2cpp_combo_combo_0069_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0069_t2 convert output");

      assert.ok(converted.funcs.length >= 2);
      const generated = generateFunctions(converted, 'combo69.d.ts');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0069 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0070', () => {
    try {
      const converted = transParseObj(doParseTs('combo70.ts', `
        function comboTriple70(a: void, b: string[], c: boolean): void {}`));
      const t1 = transCkey2Dtskey('void');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "void", "dts2cpp_combo_combo_0070_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0070_t2 convert output");

      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0070 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0071', () => {
    try {
      const converted = transParseObj(doParseTs('combo71.ts', `
        function combo71(a: void, b: Map<string,number>): void { return a; }`));
      const t1 = transCkey2Dtskey('void');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "void", "dts2cpp_combo_combo_0071_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0071_t2 convert output");
      assert.strictEqual(converted.funcs[0].parameters[0].type, "void", "dts2cpp_combo_combo_0071_fn_p0 convert output");
      assert.strictEqual(converted.funcs[0].parameters[1].type, "std::map<std::string, double>",
        "dts2cpp_combo_combo_0071_fn_p1 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0071 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0072', () => {
    try {
      const converted = transParseObj(doParseTs('combo72.ts', `
        class ComboClass72 { primary: void; secondary: Map<string,number>; method(): void {} }`));
      const t1 = transCkey2Dtskey('void');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "void", "dts2cpp_combo_combo_0072_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0072_t2 convert output");
      assert.strictEqual(converted.classes[0].variableList[0].type, "void",
        "dts2cpp_combo_combo_0072_class_p0 convert output");
      assert.strictEqual(converted.classes[0].variableList[1].type, "std::map<std::string, double>",
        "dts2cpp_combo_combo_0072_class_p1 convert output");
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0072 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0073', () => {
    try {
      const parsed = doParseTs('combo73.ts', `
        type ComboType73 = { primary: void; secondary: Map<string,number>; extra: boolean; };`);
      const t1 = transCkey2Dtskey('void');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "void", "dts2cpp_combo_combo_0073_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0073_t2 convert output");

      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      assert.ok(Array.isArray(parsed.types) || parsed !== null);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0073 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0074', () => {
    try {
      const converted = transParseObj(doParseTs('combo74.ts', `
        function getCombo74(): Map<string,number> { return null as any; } function setCombo74(v: void): void {}`));
      const t1 = transCkey2Dtskey('void');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "void", "dts2cpp_combo_combo_0074_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0074_t2 convert output");

      assert.ok(converted.funcs.length >= 2);
      const generated = generateFunctions(converted, 'combo74.d.ts');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0074 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0075', () => {
    try {
      const converted = transParseObj(doParseTs('combo75.ts', `
        function comboTriple75(a: void, b: Map<string,number>, c: boolean): void {}`));
      const t1 = transCkey2Dtskey('void');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "void", "dts2cpp_combo_combo_0075_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0075_t2 convert output");

      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0075 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0076', () => {
    try {
      const converted = transParseObj(doParseTs('combo76.ts', `
        function combo76(a: void, b: Set<number>): void { return a; }`));
      const t1 = transCkey2Dtskey('void');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "void", "dts2cpp_combo_combo_0076_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0076_t2 convert output");
      assert.strictEqual(converted.funcs[0].parameters[0].type, "void", "dts2cpp_combo_combo_0076_fn_p0 convert output");
      assert.strictEqual(converted.funcs[0].parameters[1].type, "std::set<double>",
        "dts2cpp_combo_combo_0076_fn_p1 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0076 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0077', () => {
    try {
      const converted = transParseObj(doParseTs('combo77.ts', `
        class ComboClass77 { primary: void; secondary: Set<number>; method(): void {} }`));
      const t1 = transCkey2Dtskey('void');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "void", "dts2cpp_combo_combo_0077_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0077_t2 convert output");
      assert.strictEqual(converted.classes[0].variableList[0].type, "void",
        "dts2cpp_combo_combo_0077_class_p0 convert output");
      assert.strictEqual(converted.classes[0].variableList[1].type, "std::set<double>",
        "dts2cpp_combo_combo_0077_class_p1 convert output");
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0077 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0078', () => {
    try {
      const parsed = doParseTs('combo78.ts', `
        type ComboType78 = { primary: void; secondary: Set<number>; extra: boolean; };`);
      const t1 = transCkey2Dtskey('void');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "void", "dts2cpp_combo_combo_0078_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0078_t2 convert output");

      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      assert.ok(Array.isArray(parsed.types) || parsed !== null);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0078 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0079', () => {
    try {
      const converted = transParseObj(doParseTs('combo79.ts', `
        function getCombo79(): Set<number> { return null as any; } function setCombo79(v: void): void {}`));
      const t1 = transCkey2Dtskey('void');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "void", "dts2cpp_combo_combo_0079_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0079_t2 convert output");

      assert.ok(converted.funcs.length >= 2);
      const generated = generateFunctions(converted, 'combo79.d.ts');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0079 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0080', () => {
    try {
      const converted = transParseObj(doParseTs('combo80.ts', `
        function comboTriple80(a: void, b: Set<number>, c: boolean): void {}`));
      const t1 = transCkey2Dtskey('void');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "void", "dts2cpp_combo_combo_0080_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0080_t2 convert output");

      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0080 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0081', () => {
    try {
      const converted = transParseObj(doParseTs('combo81.ts', `
        function combo81(a: any, b: number[]): any { return a; }`));
      const t1 = transCkey2Dtskey('any');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0081_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0081_t2 convert output");
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::any",
        "dts2cpp_combo_combo_0081_fn_p0 convert output");
      assert.strictEqual(converted.funcs[0].parameters[1].type, "std::vector<double>",
        "dts2cpp_combo_combo_0081_fn_p1 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0081 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0082', () => {
    try {
      const converted = transParseObj(doParseTs('combo82.ts', `
        class ComboClass82 { primary: any; secondary: number[]; method(): void {} }`));
      const t1 = transCkey2Dtskey('any');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0082_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0082_t2 convert output");
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::any",
        "dts2cpp_combo_combo_0082_class_p0 convert output");
      assert.strictEqual(converted.classes[0].variableList[1].type, "std::vector<double>",
        "dts2cpp_combo_combo_0082_class_p1 convert output");
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0082 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0083', () => {
    try {
      const parsed = doParseTs('combo83.ts', `
        type ComboType83 = { primary: any; secondary: number[]; extra: boolean; };`);
      const t1 = transCkey2Dtskey('any');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0083_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0083_t2 convert output");

      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      assert.ok(Array.isArray(parsed.types) || parsed !== null);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0083 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0084', () => {
    try {
      const converted = transParseObj(doParseTs('combo84.ts', `
        function getCombo84(): number[] { return null as any; } function setCombo84(v: any): void {}`));
      const t1 = transCkey2Dtskey('any');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0084_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0084_t2 convert output");

      assert.ok(converted.funcs.length >= 2);
      const generated = generateFunctions(converted, 'combo84.d.ts');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0084 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0085', () => {
    try {
      const converted = transParseObj(doParseTs('combo85.ts', `
        function comboTriple85(a: any, b: number[], c: boolean): void {}`));
      const t1 = transCkey2Dtskey('any');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0085_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0085_t2 convert output");

      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0085 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0086', () => {
    try {
      const converted = transParseObj(doParseTs('combo86.ts', `
        function combo86(a: any, b: string[]): any { return a; }`));
      const t1 = transCkey2Dtskey('any');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0086_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0086_t2 convert output");
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::any",
        "dts2cpp_combo_combo_0086_fn_p0 convert output");
      assert.strictEqual(converted.funcs[0].parameters[1].type, "std::vector<std::string>",
        "dts2cpp_combo_combo_0086_fn_p1 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0086 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0087', () => {
    try {
      const converted = transParseObj(doParseTs('combo87.ts', `
        class ComboClass87 { primary: any; secondary: string[]; method(): void {} }`));
      const t1 = transCkey2Dtskey('any');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0087_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0087_t2 convert output");
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::any",
        "dts2cpp_combo_combo_0087_class_p0 convert output");
      assert.strictEqual(converted.classes[0].variableList[1].type, "std::vector<std::string>",
        "dts2cpp_combo_combo_0087_class_p1 convert output");
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0087 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0088', () => {
    try {
      const parsed = doParseTs('combo88.ts', `
        type ComboType88 = { primary: any; secondary: string[]; extra: boolean; };`);
      const t1 = transCkey2Dtskey('any');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0088_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0088_t2 convert output");

      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      assert.ok(Array.isArray(parsed.types) || parsed !== null);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0088 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0089', () => {
    try {
      const converted = transParseObj(doParseTs('combo89.ts', `
        function getCombo89(): string[] { return null as any; } function setCombo89(v: any): void {}`));
      const t1 = transCkey2Dtskey('any');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0089_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0089_t2 convert output");

      assert.ok(converted.funcs.length >= 2);
      const generated = generateFunctions(converted, 'combo89.d.ts');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0089 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0090', () => {
    try {
      const converted = transParseObj(doParseTs('combo90.ts', `
        function comboTriple90(a: any, b: string[], c: boolean): void {}`));
      const t1 = transCkey2Dtskey('any');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0090_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0090_t2 convert output");

      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0090 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0091', () => {
    try {
      const converted = transParseObj(doParseTs('combo91.ts', `
        function combo91(a: any, b: Map<string,number>): any { return a; }`));
      const t1 = transCkey2Dtskey('any');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0091_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0091_t2 convert output");
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::any",
        "dts2cpp_combo_combo_0091_fn_p0 convert output");
      assert.strictEqual(converted.funcs[0].parameters[1].type, "std::map<std::string, double>",
        "dts2cpp_combo_combo_0091_fn_p1 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0091 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0092', () => {
    try {
      const converted = transParseObj(doParseTs('combo92.ts', `
        class ComboClass92 { primary: any; secondary: Map<string,number>; method(): void {} }`));
      const t1 = transCkey2Dtskey('any');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0092_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0092_t2 convert output");
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::any",
        "dts2cpp_combo_combo_0092_class_p0 convert output");
      assert.strictEqual(converted.classes[0].variableList[1].type, "std::map<std::string, double>",
        "dts2cpp_combo_combo_0092_class_p1 convert output");
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0092 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0093', () => {
    try {
      const parsed = doParseTs('combo93.ts', `
        type ComboType93 = { primary: any; secondary: Map<string,number>; extra: boolean; };`);
      const t1 = transCkey2Dtskey('any');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0093_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0093_t2 convert output");

      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      assert.ok(Array.isArray(parsed.types) || parsed !== null);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0093 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0094', () => {
    try {
      const converted = transParseObj(doParseTs('combo94.ts', `
        function getCombo94(): Map<string,number> { return null as any; } function setCombo94(v: any): void {}`));
      const t1 = transCkey2Dtskey('any');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0094_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0094_t2 convert output");

      assert.ok(converted.funcs.length >= 2);
      const generated = generateFunctions(converted, 'combo94.d.ts');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0094 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0095', () => {
    try {
      const converted = transParseObj(doParseTs('combo95.ts', `
        function comboTriple95(a: any, b: Map<string,number>, c: boolean): void {}`));
      const t1 = transCkey2Dtskey('any');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0095_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0095_t2 convert output");

      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0095 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0096', () => {
    try {
      const converted = transParseObj(doParseTs('combo96.ts', `
        function combo96(a: any, b: Set<number>): any { return a; }`));
      const t1 = transCkey2Dtskey('any');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0096_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0096_t2 convert output");
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::any",
        "dts2cpp_combo_combo_0096_fn_p0 convert output");
      assert.strictEqual(converted.funcs[0].parameters[1].type, "std::set<double>",
        "dts2cpp_combo_combo_0096_fn_p1 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0096 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0097', () => {
    try {
      const converted = transParseObj(doParseTs('combo97.ts', `
        class ComboClass97 { primary: any; secondary: Set<number>; method(): void {} }`));
      const t1 = transCkey2Dtskey('any');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0097_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0097_t2 convert output");
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::any",
        "dts2cpp_combo_combo_0097_class_p0 convert output");
      assert.strictEqual(converted.classes[0].variableList[1].type, "std::set<double>",
        "dts2cpp_combo_combo_0097_class_p1 convert output");
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0097 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0098', () => {
    try {
      const parsed = doParseTs('combo98.ts', `
        type ComboType98 = { primary: any; secondary: Set<number>; extra: boolean; };`);
      const t1 = transCkey2Dtskey('any');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0098_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0098_t2 convert output");

      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      assert.ok(Array.isArray(parsed.types) || parsed !== null);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0098 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0099', () => {
    try {
      const converted = transParseObj(doParseTs('combo99.ts', `
        function getCombo99(): Set<number> { return null as any; } function setCombo99(v: any): void {}`));
      const t1 = transCkey2Dtskey('any');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0099_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0099_t2 convert output");

      assert.ok(converted.funcs.length >= 2);
      const generated = generateFunctions(converted, 'combo99.d.ts');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0099 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0100', () => {
    try {
      const converted = transParseObj(doParseTs('combo100.ts', `
        function comboTriple100(a: any, b: Set<number>, c: boolean): void {}`));
      const t1 = transCkey2Dtskey('any');
      const t2 = transCkey2Dtskey('Set<number>');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0100_t1 convert output");
      assert.strictEqual(t2, "std::set<double>", "dts2cpp_combo_combo_0100_t2 convert output");

      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0100 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0101', () => {
    try {
      const converted = transParseObj(doParseTs('combo101.ts', `
        function combo101(a: object, b: number[]): object { return a; }`));
      const t1 = transCkey2Dtskey('object');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0101_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0101_t2 convert output");
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::any",
        "dts2cpp_combo_combo_0101_fn_p0 convert output");
      assert.strictEqual(converted.funcs[0].parameters[1].type, "std::vector<double>",
        "dts2cpp_combo_combo_0101_fn_p1 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0101 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0102', () => {
    try {
      const converted = transParseObj(doParseTs('combo102.ts', `
        class ComboClass102 { primary: object; secondary: number[]; method(): void {} }`));
      const t1 = transCkey2Dtskey('object');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0102_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0102_t2 convert output");
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::any",
        "dts2cpp_combo_combo_0102_class_p0 convert output");
      assert.strictEqual(converted.classes[0].variableList[1].type, "std::vector<double>",
        "dts2cpp_combo_combo_0102_class_p1 convert output");
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0102 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0103', () => {
    try {
      const parsed = doParseTs('combo103.ts', `
        type ComboType103 = { primary: object; secondary: number[]; extra: boolean; };`);
      const t1 = transCkey2Dtskey('object');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0103_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0103_t2 convert output");

      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      assert.ok(Array.isArray(parsed.types) || parsed !== null);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0103 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0104', () => {
    try {
      const converted = transParseObj(doParseTs('combo104.ts', `
        function getCombo104(): number[] { return null as any; } function setCombo104(v: object): void {}`));
      const t1 = transCkey2Dtskey('object');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0104_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0104_t2 convert output");

      assert.ok(converted.funcs.length >= 2);
      const generated = generateFunctions(converted, 'combo104.d.ts');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0104 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0105', () => {
    try {
      const converted = transParseObj(doParseTs('combo105.ts', `
        function comboTriple105(a: object, b: number[], c: boolean): void {}`));
      const t1 = transCkey2Dtskey('object');
      const t2 = transCkey2Dtskey('number[]');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0105_t1 convert output");
      assert.strictEqual(t2, "std::vector<double>", "dts2cpp_combo_combo_0105_t2 convert output");

      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0105 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0106', () => {
    try {
      const converted = transParseObj(doParseTs('combo106.ts', `
        function combo106(a: object, b: string[]): object { return a; }`));
      const t1 = transCkey2Dtskey('object');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0106_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0106_t2 convert output");
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::any",
        "dts2cpp_combo_combo_0106_fn_p0 convert output");
      assert.strictEqual(converted.funcs[0].parameters[1].type, "std::vector<std::string>",
        "dts2cpp_combo_combo_0106_fn_p1 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0106 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0107', () => {
    try {
      const converted = transParseObj(doParseTs('combo107.ts', `
        class ComboClass107 { primary: object; secondary: string[]; method(): void {} }`));
      const t1 = transCkey2Dtskey('object');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0107_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0107_t2 convert output");
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::any",
        "dts2cpp_combo_combo_0107_class_p0 convert output");
      assert.strictEqual(converted.classes[0].variableList[1].type, "std::vector<std::string>",
        "dts2cpp_combo_combo_0107_class_p1 convert output");
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0107 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0108', () => {
    try {
      const parsed = doParseTs('combo108.ts', `
        type ComboType108 = { primary: object; secondary: string[]; extra: boolean; };`);
      const t1 = transCkey2Dtskey('object');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0108_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0108_t2 convert output");

      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      assert.ok(Array.isArray(parsed.types) || parsed !== null);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0108 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0109', () => {
    try {
      const converted = transParseObj(doParseTs('combo109.ts', `
        function getCombo109(): string[] { return null as any; } function setCombo109(v: object): void {}`));
      const t1 = transCkey2Dtskey('object');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0109_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0109_t2 convert output");

      assert.ok(converted.funcs.length >= 2);
      const generated = generateFunctions(converted, 'combo109.d.ts');
      assert.ok(typeof generated.napiHContent === 'string' && generated.napiHContent.length > 0);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0109 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0110', () => {
    try {
      const converted = transParseObj(doParseTs('combo110.ts', `
        function comboTriple110(a: object, b: string[], c: boolean): void {}`));
      const t1 = transCkey2Dtskey('object');
      const t2 = transCkey2Dtskey('string[]');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0110_t1 convert output");
      assert.strictEqual(t2, "std::vector<std::string>", "dts2cpp_combo_combo_0110_t2 convert output");

      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 3);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0110 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0111', () => {
    try {
      const converted = transParseObj(doParseTs('combo111.ts', `
        function combo111(a: object, b: Map<string,number>): object { return a; }`));
      const t1 = transCkey2Dtskey('object');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0111_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0111_t2 convert output");
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::any",
        "dts2cpp_combo_combo_0111_fn_p0 convert output");
      assert.strictEqual(converted.funcs[0].parameters[1].type, "std::map<std::string, double>",
        "dts2cpp_combo_combo_0111_fn_p1 convert output");
      assert.ok(converted.funcs.length >= 1);
      assert.ok(converted.funcs[0].parameters.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0111 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0112', () => {
    try {
      const converted = transParseObj(doParseTs('combo112.ts', `
        class ComboClass112 { primary: object; secondary: Map<string,number>; method(): void {} }`));
      const t1 = transCkey2Dtskey('object');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0112_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0112_t2 convert output");
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::any",
        "dts2cpp_combo_combo_0112_class_p0 convert output");
      assert.strictEqual(converted.classes[0].variableList[1].type, "std::map<std::string, double>",
        "dts2cpp_combo_combo_0112_class_p1 convert output");
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].variableList.length >= 2);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0112 execution error: ${String(err)}`);
    }
  });

  test('dts2cpp_combo_combo_0113', () => {
    try {
      const parsed = doParseTs('combo113.ts', `
        type ComboType113 = { primary: object; secondary: Map<string,number>; extra: boolean; };`);
      const t1 = transCkey2Dtskey('object');
      const t2 = transCkey2Dtskey('Map<string,number>');
      assert.strictEqual(t1, "std::any", "dts2cpp_combo_combo_0113_t1 convert output");
      assert.strictEqual(t2, "std::map<std::string, double>", "dts2cpp_combo_combo_0113_t2 convert output");

      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      assert.ok(Array.isArray(parsed.types) || parsed !== null);
    } catch (err) {
      assert.fail(`dts2cpp_combo_combo_0113 execution error: ${String(err)}`);
    }
  });
});
