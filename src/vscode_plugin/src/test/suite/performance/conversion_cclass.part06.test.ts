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
import { parseFunction, parseClass, parseStruct, parseEnum, parseUnion } from '../../../parse/parsec';
import { getDtsFunction, getDtsClasses, getDtsStructs, getDtsEnum, getDtsUnions, genDtsFile } from '../../../gen/gendts';
import { transParseObj, transParameters } from '../../../gen/gendtscpp';
import { GenInfo, ParseObj } from '../../../gen/datatype';

/** 性能硬性要求（总耗时，非单次平均）：
 * - parse/gen：同一输入执行 PARSE_LOOP 次，总耗时 < PARSE_TOTAL_MS
 * 禁止将循环降到 1～2 次；性能测试必须多次执行。
 */
const PARSE_LOOP = 10;
const PARSE_TOTAL_MS = 6000;      // 执行 10 次 ≤ 6s（实测约 0.1~3s/用例）

function measureElapsed(task: () => void): number
{
  const start = Date.now();
  task();
  return Date.now() - start;
}

suite('Performance_C_Class_Suite', function ()
{
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Performance_C_Class_Suite part06.');

  /**
  * @tc.number c_class_0169
  * @tc.name c_class_0169
  * @tc.desc h2dts parseClass：扩充-规模：10 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0169', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsN010 {
    int p0;
    char p1;
    short p2;
    long p3;
    long long p4;
    float p5;
    double p6;
    bool p7;
    unsigned int p8;
    unsigned char p9;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsN010');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 10);
      assert.strictEqual(objList[0].variableList[0].name, 'p0');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'p1');
      assert.strictEqual(objList[0].variableList[1].type, 'char');
      assert.strictEqual(objList[0].variableList[2].name, 'p2');
      assert.strictEqual(objList[0].variableList[2].type, 'short');
      assert.strictEqual(objList[0].variableList[3].name, 'p3');
      assert.strictEqual(objList[0].variableList[3].type, 'long');
      assert.strictEqual(objList[0].variableList[4].name, 'p4');
      assert.strictEqual(objList[0].variableList[4].type, 'long long');
      assert.strictEqual(objList[0].variableList[5].name, 'p5');
      assert.strictEqual(objList[0].variableList[5].type, 'float');
      assert.strictEqual(objList[0].variableList[6].name, 'p6');
      assert.strictEqual(objList[0].variableList[6].type, 'double');
      assert.strictEqual(objList[0].variableList[7].name, 'p7');
      assert.strictEqual(objList[0].variableList[7].type, 'bool');
      assert.strictEqual(objList[0].variableList[8].name, 'p8');
      assert.strictEqual(objList[0].variableList[8].type, 'unsigned int');
      assert.strictEqual(objList[0].variableList[9].name, 'p9');
      assert.strictEqual(objList[0].variableList[9].type, 'unsigned char');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0169 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0169 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0170
  * @tc.name c_class_0170
  * @tc.desc h2dts parseClass：扩充-规模：15 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0170', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsN015 {
    int p0;
    char p1;
    short p2;
    long p3;
    long long p4;
    float p5;
    double p6;
    bool p7;
    unsigned int p8;
    unsigned char p9;
    unsigned short p10;
    unsigned long p11;
    unsigned long long p12;
    signed char p13;
    signed short p14;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsN015');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 15);
      assert.strictEqual(objList[0].variableList[0].name, 'p0');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'p1');
      assert.strictEqual(objList[0].variableList[1].type, 'char');
      assert.strictEqual(objList[0].variableList[2].name, 'p2');
      assert.strictEqual(objList[0].variableList[2].type, 'short');
      assert.strictEqual(objList[0].variableList[3].name, 'p3');
      assert.strictEqual(objList[0].variableList[3].type, 'long');
      assert.strictEqual(objList[0].variableList[4].name, 'p4');
      assert.strictEqual(objList[0].variableList[4].type, 'long long');
      assert.strictEqual(objList[0].variableList[5].name, 'p5');
      assert.strictEqual(objList[0].variableList[5].type, 'float');
      assert.strictEqual(objList[0].variableList[6].name, 'p6');
      assert.strictEqual(objList[0].variableList[6].type, 'double');
      assert.strictEqual(objList[0].variableList[7].name, 'p7');
      assert.strictEqual(objList[0].variableList[7].type, 'bool');
      assert.strictEqual(objList[0].variableList[8].name, 'p8');
      assert.strictEqual(objList[0].variableList[8].type, 'unsigned int');
      assert.strictEqual(objList[0].variableList[9].name, 'p9');
      assert.strictEqual(objList[0].variableList[9].type, 'unsigned char');
      assert.strictEqual(objList[0].variableList[10].name, 'p10');
      assert.strictEqual(objList[0].variableList[10].type, 'unsigned short');
      assert.strictEqual(objList[0].variableList[11].name, 'p11');
      assert.strictEqual(objList[0].variableList[11].type, 'unsigned long');
      assert.strictEqual(objList[0].variableList[12].name, 'p12');
      assert.strictEqual(objList[0].variableList[12].type, 'unsigned long long');
      assert.strictEqual(objList[0].variableList[13].name, 'p13');
      assert.strictEqual(objList[0].variableList[13].type, 'signed char');
      assert.strictEqual(objList[0].variableList[14].name, 'p14');
      assert.strictEqual(objList[0].variableList[14].type, 'signed short');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0170 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0170 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0171
  * @tc.name c_class_0171
  * @tc.desc h2dts parseClass：扩充-规模：20 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0171', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsN020 {
    int p0;
    char p1;
    short p2;
    long p3;
    long long p4;
    float p5;
    double p6;
    bool p7;
    unsigned int p8;
    unsigned char p9;
    unsigned short p10;
    unsigned long p11;
    unsigned long long p12;
    signed char p13;
    signed short p14;
    signed long p15;
    wchar_t p16;
    char16_t p17;
    char32_t p18;
    size_t p19;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsN020');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 20);
      assert.strictEqual(objList[0].variableList[0].name, 'p0');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'p1');
      assert.strictEqual(objList[0].variableList[1].type, 'char');
      assert.strictEqual(objList[0].variableList[2].name, 'p2');
      assert.strictEqual(objList[0].variableList[2].type, 'short');
      assert.strictEqual(objList[0].variableList[3].name, 'p3');
      assert.strictEqual(objList[0].variableList[3].type, 'long');
      assert.strictEqual(objList[0].variableList[4].name, 'p4');
      assert.strictEqual(objList[0].variableList[4].type, 'long long');
      assert.strictEqual(objList[0].variableList[5].name, 'p5');
      assert.strictEqual(objList[0].variableList[5].type, 'float');
      assert.strictEqual(objList[0].variableList[6].name, 'p6');
      assert.strictEqual(objList[0].variableList[6].type, 'double');
      assert.strictEqual(objList[0].variableList[7].name, 'p7');
      assert.strictEqual(objList[0].variableList[7].type, 'bool');
      assert.strictEqual(objList[0].variableList[8].name, 'p8');
      assert.strictEqual(objList[0].variableList[8].type, 'unsigned int');
      assert.strictEqual(objList[0].variableList[9].name, 'p9');
      assert.strictEqual(objList[0].variableList[9].type, 'unsigned char');
      assert.strictEqual(objList[0].variableList[10].name, 'p10');
      assert.strictEqual(objList[0].variableList[10].type, 'unsigned short');
      assert.strictEqual(objList[0].variableList[11].name, 'p11');
      assert.strictEqual(objList[0].variableList[11].type, 'unsigned long');
      assert.strictEqual(objList[0].variableList[12].name, 'p12');
      assert.strictEqual(objList[0].variableList[12].type, 'unsigned long long');
      assert.strictEqual(objList[0].variableList[13].name, 'p13');
      assert.strictEqual(objList[0].variableList[13].type, 'signed char');
      assert.strictEqual(objList[0].variableList[14].name, 'p14');
      assert.strictEqual(objList[0].variableList[14].type, 'signed short');
      assert.strictEqual(objList[0].variableList[15].name, 'p15');
      assert.strictEqual(objList[0].variableList[15].type, 'signed long');
      assert.strictEqual(objList[0].variableList[16].name, 'p16');
      assert.strictEqual(objList[0].variableList[16].type, 'wchar_t');
      assert.strictEqual(objList[0].variableList[17].name, 'p17');
      assert.strictEqual(objList[0].variableList[17].type, 'char16_t');
      assert.strictEqual(objList[0].variableList[18].name, 'p18');
      assert.strictEqual(objList[0].variableList[18].type, 'char32_t');
      assert.strictEqual(objList[0].variableList[19].name, 'p19');
      assert.strictEqual(objList[0].variableList[19].type, 'size_t');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0171 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0171 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0172
  * @tc.name c_class_0172
  * @tc.desc h2dts parseClass：扩充-规模：25 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0172', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsN025 {
    int p0;
    char p1;
    short p2;
    long p3;
    long long p4;
    float p5;
    double p6;
    bool p7;
    unsigned int p8;
    unsigned char p9;
    unsigned short p10;
    unsigned long p11;
    unsigned long long p12;
    signed char p13;
    signed short p14;
    signed long p15;
    wchar_t p16;
    char16_t p17;
    char32_t p18;
    size_t p19;
    int8_t p20;
    int16_t p21;
    int32_t p22;
    int64_t p23;
    uint8_t p24;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsN025');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 25);
      assert.strictEqual(objList[0].variableList[0].name, 'p0');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'p1');
      assert.strictEqual(objList[0].variableList[1].type, 'char');
      assert.strictEqual(objList[0].variableList[2].name, 'p2');
      assert.strictEqual(objList[0].variableList[2].type, 'short');
      assert.strictEqual(objList[0].variableList[3].name, 'p3');
      assert.strictEqual(objList[0].variableList[3].type, 'long');
      assert.strictEqual(objList[0].variableList[4].name, 'p4');
      assert.strictEqual(objList[0].variableList[4].type, 'long long');
      assert.strictEqual(objList[0].variableList[5].name, 'p5');
      assert.strictEqual(objList[0].variableList[5].type, 'float');
      assert.strictEqual(objList[0].variableList[6].name, 'p6');
      assert.strictEqual(objList[0].variableList[6].type, 'double');
      assert.strictEqual(objList[0].variableList[7].name, 'p7');
      assert.strictEqual(objList[0].variableList[7].type, 'bool');
      assert.strictEqual(objList[0].variableList[8].name, 'p8');
      assert.strictEqual(objList[0].variableList[8].type, 'unsigned int');
      assert.strictEqual(objList[0].variableList[9].name, 'p9');
      assert.strictEqual(objList[0].variableList[9].type, 'unsigned char');
      assert.strictEqual(objList[0].variableList[10].name, 'p10');
      assert.strictEqual(objList[0].variableList[10].type, 'unsigned short');
      assert.strictEqual(objList[0].variableList[11].name, 'p11');
      assert.strictEqual(objList[0].variableList[11].type, 'unsigned long');
      assert.strictEqual(objList[0].variableList[12].name, 'p12');
      assert.strictEqual(objList[0].variableList[12].type, 'unsigned long long');
      assert.strictEqual(objList[0].variableList[13].name, 'p13');
      assert.strictEqual(objList[0].variableList[13].type, 'signed char');
      assert.strictEqual(objList[0].variableList[14].name, 'p14');
      assert.strictEqual(objList[0].variableList[14].type, 'signed short');
      assert.strictEqual(objList[0].variableList[15].name, 'p15');
      assert.strictEqual(objList[0].variableList[15].type, 'signed long');
      assert.strictEqual(objList[0].variableList[16].name, 'p16');
      assert.strictEqual(objList[0].variableList[16].type, 'wchar_t');
      assert.strictEqual(objList[0].variableList[17].name, 'p17');
      assert.strictEqual(objList[0].variableList[17].type, 'char16_t');
      assert.strictEqual(objList[0].variableList[18].name, 'p18');
      assert.strictEqual(objList[0].variableList[18].type, 'char32_t');
      assert.strictEqual(objList[0].variableList[19].name, 'p19');
      assert.strictEqual(objList[0].variableList[19].type, 'size_t');
      assert.strictEqual(objList[0].variableList[20].name, 'p20');
      assert.strictEqual(objList[0].variableList[20].type, 'int8_t');
      assert.strictEqual(objList[0].variableList[21].name, 'p21');
      assert.strictEqual(objList[0].variableList[21].type, 'int16_t');
      assert.strictEqual(objList[0].variableList[22].name, 'p22');
      assert.strictEqual(objList[0].variableList[22].type, 'int32_t');
      assert.strictEqual(objList[0].variableList[23].name, 'p23');
      assert.strictEqual(objList[0].variableList[23].type, 'int64_t');
      assert.strictEqual(objList[0].variableList[24].name, 'p24');
      assert.strictEqual(objList[0].variableList[24].type, 'uint8_t');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0172 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0172 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0173
  * @tc.name c_class_0173
  * @tc.desc h2dts parseClass：扩充-规模：30 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0173', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsN030 {
    int p0;
    char p1;
    short p2;
    long p3;
    long long p4;
    float p5;
    double p6;
    bool p7;
    unsigned int p8;
    unsigned char p9;
    unsigned short p10;
    unsigned long p11;
    unsigned long long p12;
    signed char p13;
    signed short p14;
    signed long p15;
    wchar_t p16;
    char16_t p17;
    char32_t p18;
    size_t p19;
    int8_t p20;
    int16_t p21;
    int32_t p22;
    int64_t p23;
    uint8_t p24;
    uint16_t p25;
    uint32_t p26;
    uint64_t p27;
    std::string p28;
    string p29;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsN030');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 30);
      assert.strictEqual(objList[0].variableList[0].name, 'p0');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'p1');
      assert.strictEqual(objList[0].variableList[1].type, 'char');
      assert.strictEqual(objList[0].variableList[2].name, 'p2');
      assert.strictEqual(objList[0].variableList[2].type, 'short');
      assert.strictEqual(objList[0].variableList[3].name, 'p3');
      assert.strictEqual(objList[0].variableList[3].type, 'long');
      assert.strictEqual(objList[0].variableList[4].name, 'p4');
      assert.strictEqual(objList[0].variableList[4].type, 'long long');
      assert.strictEqual(objList[0].variableList[5].name, 'p5');
      assert.strictEqual(objList[0].variableList[5].type, 'float');
      assert.strictEqual(objList[0].variableList[6].name, 'p6');
      assert.strictEqual(objList[0].variableList[6].type, 'double');
      assert.strictEqual(objList[0].variableList[7].name, 'p7');
      assert.strictEqual(objList[0].variableList[7].type, 'bool');
      assert.strictEqual(objList[0].variableList[8].name, 'p8');
      assert.strictEqual(objList[0].variableList[8].type, 'unsigned int');
      assert.strictEqual(objList[0].variableList[9].name, 'p9');
      assert.strictEqual(objList[0].variableList[9].type, 'unsigned char');
      assert.strictEqual(objList[0].variableList[10].name, 'p10');
      assert.strictEqual(objList[0].variableList[10].type, 'unsigned short');
      assert.strictEqual(objList[0].variableList[11].name, 'p11');
      assert.strictEqual(objList[0].variableList[11].type, 'unsigned long');
      assert.strictEqual(objList[0].variableList[12].name, 'p12');
      assert.strictEqual(objList[0].variableList[12].type, 'unsigned long long');
      assert.strictEqual(objList[0].variableList[13].name, 'p13');
      assert.strictEqual(objList[0].variableList[13].type, 'signed char');
      assert.strictEqual(objList[0].variableList[14].name, 'p14');
      assert.strictEqual(objList[0].variableList[14].type, 'signed short');
      assert.strictEqual(objList[0].variableList[15].name, 'p15');
      assert.strictEqual(objList[0].variableList[15].type, 'signed long');
      assert.strictEqual(objList[0].variableList[16].name, 'p16');
      assert.strictEqual(objList[0].variableList[16].type, 'wchar_t');
      assert.strictEqual(objList[0].variableList[17].name, 'p17');
      assert.strictEqual(objList[0].variableList[17].type, 'char16_t');
      assert.strictEqual(objList[0].variableList[18].name, 'p18');
      assert.strictEqual(objList[0].variableList[18].type, 'char32_t');
      assert.strictEqual(objList[0].variableList[19].name, 'p19');
      assert.strictEqual(objList[0].variableList[19].type, 'size_t');
      assert.strictEqual(objList[0].variableList[20].name, 'p20');
      assert.strictEqual(objList[0].variableList[20].type, 'int8_t');
      assert.strictEqual(objList[0].variableList[21].name, 'p21');
      assert.strictEqual(objList[0].variableList[21].type, 'int16_t');
      assert.strictEqual(objList[0].variableList[22].name, 'p22');
      assert.strictEqual(objList[0].variableList[22].type, 'int32_t');
      assert.strictEqual(objList[0].variableList[23].name, 'p23');
      assert.strictEqual(objList[0].variableList[23].type, 'int64_t');
      assert.strictEqual(objList[0].variableList[24].name, 'p24');
      assert.strictEqual(objList[0].variableList[24].type, 'uint8_t');
      assert.strictEqual(objList[0].variableList[25].name, 'p25');
      assert.strictEqual(objList[0].variableList[25].type, 'uint16_t');
      assert.strictEqual(objList[0].variableList[26].name, 'p26');
      assert.strictEqual(objList[0].variableList[26].type, 'uint32_t');
      assert.strictEqual(objList[0].variableList[27].name, 'p27');
      assert.strictEqual(objList[0].variableList[27].type, 'uint64_t');
      assert.strictEqual(objList[0].variableList[28].name, 'p28');
      assert.strictEqual(objList[0].variableList[28].type, 'std::string');
      assert.strictEqual(objList[0].variableList[29].name, 'p29');
      assert.strictEqual(objList[0].variableList[29].type, 'string');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0173 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0173 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0174
  * @tc.name c_class_0174
  * @tc.desc h2dts parseClass：扩充-规模：35 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0174', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsN035 {
    int p0;
    char p1;
    short p2;
    long p3;
    long long p4;
    float p5;
    double p6;
    bool p7;
    unsigned int p8;
    unsigned char p9;
    unsigned short p10;
    unsigned long p11;
    unsigned long long p12;
    signed char p13;
    signed short p14;
    signed long p15;
    wchar_t p16;
    char16_t p17;
    char32_t p18;
    size_t p19;
    int8_t p20;
    int16_t p21;
    int32_t p22;
    int64_t p23;
    uint8_t p24;
    uint16_t p25;
    uint32_t p26;
    uint64_t p27;
    std::string p28;
    string p29;
    std::wstring p30;
    long double p31;
    void p32;
    std::vector<int> p33;
    std::vector<std::string> p34;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsN035');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 35);
      assert.strictEqual(objList[0].variableList[0].name, 'p0');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'p1');
      assert.strictEqual(objList[0].variableList[1].type, 'char');
      assert.strictEqual(objList[0].variableList[2].name, 'p2');
      assert.strictEqual(objList[0].variableList[2].type, 'short');
      assert.strictEqual(objList[0].variableList[3].name, 'p3');
      assert.strictEqual(objList[0].variableList[3].type, 'long');
      assert.strictEqual(objList[0].variableList[4].name, 'p4');
      assert.strictEqual(objList[0].variableList[4].type, 'long long');
      assert.strictEqual(objList[0].variableList[5].name, 'p5');
      assert.strictEqual(objList[0].variableList[5].type, 'float');
      assert.strictEqual(objList[0].variableList[6].name, 'p6');
      assert.strictEqual(objList[0].variableList[6].type, 'double');
      assert.strictEqual(objList[0].variableList[7].name, 'p7');
      assert.strictEqual(objList[0].variableList[7].type, 'bool');
      assert.strictEqual(objList[0].variableList[8].name, 'p8');
      assert.strictEqual(objList[0].variableList[8].type, 'unsigned int');
      assert.strictEqual(objList[0].variableList[9].name, 'p9');
      assert.strictEqual(objList[0].variableList[9].type, 'unsigned char');
      assert.strictEqual(objList[0].variableList[10].name, 'p10');
      assert.strictEqual(objList[0].variableList[10].type, 'unsigned short');
      assert.strictEqual(objList[0].variableList[11].name, 'p11');
      assert.strictEqual(objList[0].variableList[11].type, 'unsigned long');
      assert.strictEqual(objList[0].variableList[12].name, 'p12');
      assert.strictEqual(objList[0].variableList[12].type, 'unsigned long long');
      assert.strictEqual(objList[0].variableList[13].name, 'p13');
      assert.strictEqual(objList[0].variableList[13].type, 'signed char');
      assert.strictEqual(objList[0].variableList[14].name, 'p14');
      assert.strictEqual(objList[0].variableList[14].type, 'signed short');
      assert.strictEqual(objList[0].variableList[15].name, 'p15');
      assert.strictEqual(objList[0].variableList[15].type, 'signed long');
      assert.strictEqual(objList[0].variableList[16].name, 'p16');
      assert.strictEqual(objList[0].variableList[16].type, 'wchar_t');
      assert.strictEqual(objList[0].variableList[17].name, 'p17');
      assert.strictEqual(objList[0].variableList[17].type, 'char16_t');
      assert.strictEqual(objList[0].variableList[18].name, 'p18');
      assert.strictEqual(objList[0].variableList[18].type, 'char32_t');
      assert.strictEqual(objList[0].variableList[19].name, 'p19');
      assert.strictEqual(objList[0].variableList[19].type, 'size_t');
      assert.strictEqual(objList[0].variableList[20].name, 'p20');
      assert.strictEqual(objList[0].variableList[20].type, 'int8_t');
      assert.strictEqual(objList[0].variableList[21].name, 'p21');
      assert.strictEqual(objList[0].variableList[21].type, 'int16_t');
      assert.strictEqual(objList[0].variableList[22].name, 'p22');
      assert.strictEqual(objList[0].variableList[22].type, 'int32_t');
      assert.strictEqual(objList[0].variableList[23].name, 'p23');
      assert.strictEqual(objList[0].variableList[23].type, 'int64_t');
      assert.strictEqual(objList[0].variableList[24].name, 'p24');
      assert.strictEqual(objList[0].variableList[24].type, 'uint8_t');
      assert.strictEqual(objList[0].variableList[25].name, 'p25');
      assert.strictEqual(objList[0].variableList[25].type, 'uint16_t');
      assert.strictEqual(objList[0].variableList[26].name, 'p26');
      assert.strictEqual(objList[0].variableList[26].type, 'uint32_t');
      assert.strictEqual(objList[0].variableList[27].name, 'p27');
      assert.strictEqual(objList[0].variableList[27].type, 'uint64_t');
      assert.strictEqual(objList[0].variableList[28].name, 'p28');
      assert.strictEqual(objList[0].variableList[28].type, 'std::string');
      assert.strictEqual(objList[0].variableList[29].name, 'p29');
      assert.strictEqual(objList[0].variableList[29].type, 'string');
      assert.strictEqual(objList[0].variableList[30].name, 'p30');
      assert.strictEqual(objList[0].variableList[30].type, 'std::wstring');
      assert.strictEqual(objList[0].variableList[31].name, 'p31');
      assert.strictEqual(objList[0].variableList[31].type, 'long double');
      assert.strictEqual(objList[0].variableList[32].name, 'p32');
      assert.strictEqual(objList[0].variableList[32].type, 'void');
      assert.strictEqual(objList[0].variableList[33].name, 'p33');
      assert.strictEqual(objList[0].variableList[33].type, 'std::vector<int>');
      assert.strictEqual(objList[0].variableList[34].name, 'p34');
      assert.strictEqual(objList[0].variableList[34].type, 'std::vector<std::string>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0174 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0174 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0175
  * @tc.name c_class_0175
  * @tc.desc h2dts parseClass：扩充-规模：40 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0175', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsN040 {
    int p0;
    char p1;
    short p2;
    long p3;
    long long p4;
    float p5;
    double p6;
    bool p7;
    unsigned int p8;
    unsigned char p9;
    unsigned short p10;
    unsigned long p11;
    unsigned long long p12;
    signed char p13;
    signed short p14;
    signed long p15;
    wchar_t p16;
    char16_t p17;
    char32_t p18;
    size_t p19;
    int8_t p20;
    int16_t p21;
    int32_t p22;
    int64_t p23;
    uint8_t p24;
    uint16_t p25;
    uint32_t p26;
    uint64_t p27;
    std::string p28;
    string p29;
    std::wstring p30;
    long double p31;
    void p32;
    std::vector<int> p33;
    std::vector<std::string> p34;
    std::vector<double> p35;
    std::vector<bool> p36;
    std::map<std::string,int> p37;
    std::map<int,std::string> p38;
    std::set<int> p39;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsN040');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 40);
      assert.strictEqual(objList[0].variableList[0].name, 'p0');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'p1');
      assert.strictEqual(objList[0].variableList[1].type, 'char');
      assert.strictEqual(objList[0].variableList[2].name, 'p2');
      assert.strictEqual(objList[0].variableList[2].type, 'short');
      assert.strictEqual(objList[0].variableList[3].name, 'p3');
      assert.strictEqual(objList[0].variableList[3].type, 'long');
      assert.strictEqual(objList[0].variableList[4].name, 'p4');
      assert.strictEqual(objList[0].variableList[4].type, 'long long');
      assert.strictEqual(objList[0].variableList[5].name, 'p5');
      assert.strictEqual(objList[0].variableList[5].type, 'float');
      assert.strictEqual(objList[0].variableList[6].name, 'p6');
      assert.strictEqual(objList[0].variableList[6].type, 'double');
      assert.strictEqual(objList[0].variableList[7].name, 'p7');
      assert.strictEqual(objList[0].variableList[7].type, 'bool');
      assert.strictEqual(objList[0].variableList[8].name, 'p8');
      assert.strictEqual(objList[0].variableList[8].type, 'unsigned int');
      assert.strictEqual(objList[0].variableList[9].name, 'p9');
      assert.strictEqual(objList[0].variableList[9].type, 'unsigned char');
      assert.strictEqual(objList[0].variableList[10].name, 'p10');
      assert.strictEqual(objList[0].variableList[10].type, 'unsigned short');
      assert.strictEqual(objList[0].variableList[11].name, 'p11');
      assert.strictEqual(objList[0].variableList[11].type, 'unsigned long');
      assert.strictEqual(objList[0].variableList[12].name, 'p12');
      assert.strictEqual(objList[0].variableList[12].type, 'unsigned long long');
      assert.strictEqual(objList[0].variableList[13].name, 'p13');
      assert.strictEqual(objList[0].variableList[13].type, 'signed char');
      assert.strictEqual(objList[0].variableList[14].name, 'p14');
      assert.strictEqual(objList[0].variableList[14].type, 'signed short');
      assert.strictEqual(objList[0].variableList[15].name, 'p15');
      assert.strictEqual(objList[0].variableList[15].type, 'signed long');
      assert.strictEqual(objList[0].variableList[16].name, 'p16');
      assert.strictEqual(objList[0].variableList[16].type, 'wchar_t');
      assert.strictEqual(objList[0].variableList[17].name, 'p17');
      assert.strictEqual(objList[0].variableList[17].type, 'char16_t');
      assert.strictEqual(objList[0].variableList[18].name, 'p18');
      assert.strictEqual(objList[0].variableList[18].type, 'char32_t');
      assert.strictEqual(objList[0].variableList[19].name, 'p19');
      assert.strictEqual(objList[0].variableList[19].type, 'size_t');
      assert.strictEqual(objList[0].variableList[20].name, 'p20');
      assert.strictEqual(objList[0].variableList[20].type, 'int8_t');
      assert.strictEqual(objList[0].variableList[21].name, 'p21');
      assert.strictEqual(objList[0].variableList[21].type, 'int16_t');
      assert.strictEqual(objList[0].variableList[22].name, 'p22');
      assert.strictEqual(objList[0].variableList[22].type, 'int32_t');
      assert.strictEqual(objList[0].variableList[23].name, 'p23');
      assert.strictEqual(objList[0].variableList[23].type, 'int64_t');
      assert.strictEqual(objList[0].variableList[24].name, 'p24');
      assert.strictEqual(objList[0].variableList[24].type, 'uint8_t');
      assert.strictEqual(objList[0].variableList[25].name, 'p25');
      assert.strictEqual(objList[0].variableList[25].type, 'uint16_t');
      assert.strictEqual(objList[0].variableList[26].name, 'p26');
      assert.strictEqual(objList[0].variableList[26].type, 'uint32_t');
      assert.strictEqual(objList[0].variableList[27].name, 'p27');
      assert.strictEqual(objList[0].variableList[27].type, 'uint64_t');
      assert.strictEqual(objList[0].variableList[28].name, 'p28');
      assert.strictEqual(objList[0].variableList[28].type, 'std::string');
      assert.strictEqual(objList[0].variableList[29].name, 'p29');
      assert.strictEqual(objList[0].variableList[29].type, 'string');
      assert.strictEqual(objList[0].variableList[30].name, 'p30');
      assert.strictEqual(objList[0].variableList[30].type, 'std::wstring');
      assert.strictEqual(objList[0].variableList[31].name, 'p31');
      assert.strictEqual(objList[0].variableList[31].type, 'long double');
      assert.strictEqual(objList[0].variableList[32].name, 'p32');
      assert.strictEqual(objList[0].variableList[32].type, 'void');
      assert.strictEqual(objList[0].variableList[33].name, 'p33');
      assert.strictEqual(objList[0].variableList[33].type, 'std::vector<int>');
      assert.strictEqual(objList[0].variableList[34].name, 'p34');
      assert.strictEqual(objList[0].variableList[34].type, 'std::vector<std::string>');
      assert.strictEqual(objList[0].variableList[35].name, 'p35');
      assert.strictEqual(objList[0].variableList[35].type, 'std::vector<double>');
      assert.strictEqual(objList[0].variableList[36].name, 'p36');
      assert.strictEqual(objList[0].variableList[36].type, 'std::vector<bool>');
      assert.strictEqual(objList[0].variableList[37].name, 'p37');
      assert.strictEqual(objList[0].variableList[37].type, 'std::map<std::string,int>');
      assert.strictEqual(objList[0].variableList[38].name, 'p38');
      assert.strictEqual(objList[0].variableList[38].type, 'std::map<int,std::string>');
      assert.strictEqual(objList[0].variableList[39].name, 'p39');
      assert.strictEqual(objList[0].variableList[39].type, 'std::set<int>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0175 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0175 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0176
  * @tc.name c_class_0176
  * @tc.desc h2dts parseClass：扩充-规模：45 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0176', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsN045 {
    int p0;
    char p1;
    short p2;
    long p3;
    long long p4;
    float p5;
    double p6;
    bool p7;
    unsigned int p8;
    unsigned char p9;
    unsigned short p10;
    unsigned long p11;
    unsigned long long p12;
    signed char p13;
    signed short p14;
    signed long p15;
    wchar_t p16;
    char16_t p17;
    char32_t p18;
    size_t p19;
    int8_t p20;
    int16_t p21;
    int32_t p22;
    int64_t p23;
    uint8_t p24;
    uint16_t p25;
    uint32_t p26;
    uint64_t p27;
    std::string p28;
    string p29;
    std::wstring p30;
    long double p31;
    void p32;
    std::vector<int> p33;
    std::vector<std::string> p34;
    std::vector<double> p35;
    std::vector<bool> p36;
    std::map<std::string,int> p37;
    std::map<int,std::string> p38;
    std::set<int> p39;
    std::set<std::string> p40;
    std::list<int> p41;
    std::list<std::string> p42;
    std::deque<int> p43;
    std::deque<std::string> p44;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsN045');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 45);
      assert.strictEqual(objList[0].variableList[0].name, 'p0');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'p1');
      assert.strictEqual(objList[0].variableList[1].type, 'char');
      assert.strictEqual(objList[0].variableList[2].name, 'p2');
      assert.strictEqual(objList[0].variableList[2].type, 'short');
      assert.strictEqual(objList[0].variableList[3].name, 'p3');
      assert.strictEqual(objList[0].variableList[3].type, 'long');
      assert.strictEqual(objList[0].variableList[4].name, 'p4');
      assert.strictEqual(objList[0].variableList[4].type, 'long long');
      assert.strictEqual(objList[0].variableList[5].name, 'p5');
      assert.strictEqual(objList[0].variableList[5].type, 'float');
      assert.strictEqual(objList[0].variableList[6].name, 'p6');
      assert.strictEqual(objList[0].variableList[6].type, 'double');
      assert.strictEqual(objList[0].variableList[7].name, 'p7');
      assert.strictEqual(objList[0].variableList[7].type, 'bool');
      assert.strictEqual(objList[0].variableList[8].name, 'p8');
      assert.strictEqual(objList[0].variableList[8].type, 'unsigned int');
      assert.strictEqual(objList[0].variableList[9].name, 'p9');
      assert.strictEqual(objList[0].variableList[9].type, 'unsigned char');
      assert.strictEqual(objList[0].variableList[10].name, 'p10');
      assert.strictEqual(objList[0].variableList[10].type, 'unsigned short');
      assert.strictEqual(objList[0].variableList[11].name, 'p11');
      assert.strictEqual(objList[0].variableList[11].type, 'unsigned long');
      assert.strictEqual(objList[0].variableList[12].name, 'p12');
      assert.strictEqual(objList[0].variableList[12].type, 'unsigned long long');
      assert.strictEqual(objList[0].variableList[13].name, 'p13');
      assert.strictEqual(objList[0].variableList[13].type, 'signed char');
      assert.strictEqual(objList[0].variableList[14].name, 'p14');
      assert.strictEqual(objList[0].variableList[14].type, 'signed short');
      assert.strictEqual(objList[0].variableList[15].name, 'p15');
      assert.strictEqual(objList[0].variableList[15].type, 'signed long');
      assert.strictEqual(objList[0].variableList[16].name, 'p16');
      assert.strictEqual(objList[0].variableList[16].type, 'wchar_t');
      assert.strictEqual(objList[0].variableList[17].name, 'p17');
      assert.strictEqual(objList[0].variableList[17].type, 'char16_t');
      assert.strictEqual(objList[0].variableList[18].name, 'p18');
      assert.strictEqual(objList[0].variableList[18].type, 'char32_t');
      assert.strictEqual(objList[0].variableList[19].name, 'p19');
      assert.strictEqual(objList[0].variableList[19].type, 'size_t');
      assert.strictEqual(objList[0].variableList[20].name, 'p20');
      assert.strictEqual(objList[0].variableList[20].type, 'int8_t');
      assert.strictEqual(objList[0].variableList[21].name, 'p21');
      assert.strictEqual(objList[0].variableList[21].type, 'int16_t');
      assert.strictEqual(objList[0].variableList[22].name, 'p22');
      assert.strictEqual(objList[0].variableList[22].type, 'int32_t');
      assert.strictEqual(objList[0].variableList[23].name, 'p23');
      assert.strictEqual(objList[0].variableList[23].type, 'int64_t');
      assert.strictEqual(objList[0].variableList[24].name, 'p24');
      assert.strictEqual(objList[0].variableList[24].type, 'uint8_t');
      assert.strictEqual(objList[0].variableList[25].name, 'p25');
      assert.strictEqual(objList[0].variableList[25].type, 'uint16_t');
      assert.strictEqual(objList[0].variableList[26].name, 'p26');
      assert.strictEqual(objList[0].variableList[26].type, 'uint32_t');
      assert.strictEqual(objList[0].variableList[27].name, 'p27');
      assert.strictEqual(objList[0].variableList[27].type, 'uint64_t');
      assert.strictEqual(objList[0].variableList[28].name, 'p28');
      assert.strictEqual(objList[0].variableList[28].type, 'std::string');
      assert.strictEqual(objList[0].variableList[29].name, 'p29');
      assert.strictEqual(objList[0].variableList[29].type, 'string');
      assert.strictEqual(objList[0].variableList[30].name, 'p30');
      assert.strictEqual(objList[0].variableList[30].type, 'std::wstring');
      assert.strictEqual(objList[0].variableList[31].name, 'p31');
      assert.strictEqual(objList[0].variableList[31].type, 'long double');
      assert.strictEqual(objList[0].variableList[32].name, 'p32');
      assert.strictEqual(objList[0].variableList[32].type, 'void');
      assert.strictEqual(objList[0].variableList[33].name, 'p33');
      assert.strictEqual(objList[0].variableList[33].type, 'std::vector<int>');
      assert.strictEqual(objList[0].variableList[34].name, 'p34');
      assert.strictEqual(objList[0].variableList[34].type, 'std::vector<std::string>');
      assert.strictEqual(objList[0].variableList[35].name, 'p35');
      assert.strictEqual(objList[0].variableList[35].type, 'std::vector<double>');
      assert.strictEqual(objList[0].variableList[36].name, 'p36');
      assert.strictEqual(objList[0].variableList[36].type, 'std::vector<bool>');
      assert.strictEqual(objList[0].variableList[37].name, 'p37');
      assert.strictEqual(objList[0].variableList[37].type, 'std::map<std::string,int>');
      assert.strictEqual(objList[0].variableList[38].name, 'p38');
      assert.strictEqual(objList[0].variableList[38].type, 'std::map<int,std::string>');
      assert.strictEqual(objList[0].variableList[39].name, 'p39');
      assert.strictEqual(objList[0].variableList[39].type, 'std::set<int>');
      assert.strictEqual(objList[0].variableList[40].name, 'p40');
      assert.strictEqual(objList[0].variableList[40].type, 'std::set<std::string>');
      assert.strictEqual(objList[0].variableList[41].name, 'p41');
      assert.strictEqual(objList[0].variableList[41].type, 'std::list<int>');
      assert.strictEqual(objList[0].variableList[42].name, 'p42');
      assert.strictEqual(objList[0].variableList[42].type, 'std::list<std::string>');
      assert.strictEqual(objList[0].variableList[43].name, 'p43');
      assert.strictEqual(objList[0].variableList[43].type, 'std::deque<int>');
      assert.strictEqual(objList[0].variableList[44].name, 'p44');
      assert.strictEqual(objList[0].variableList[44].type, 'std::deque<std::string>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0176 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0176 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0177
  * @tc.name c_class_0177
  * @tc.desc h2dts parseClass：扩充-规模：50 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0177', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsN050 {
    int p0;
    char p1;
    short p2;
    long p3;
    long long p4;
    float p5;
    double p6;
    bool p7;
    unsigned int p8;
    unsigned char p9;
    unsigned short p10;
    unsigned long p11;
    unsigned long long p12;
    signed char p13;
    signed short p14;
    signed long p15;
    wchar_t p16;
    char16_t p17;
    char32_t p18;
    size_t p19;
    int8_t p20;
    int16_t p21;
    int32_t p22;
    int64_t p23;
    uint8_t p24;
    uint16_t p25;
    uint32_t p26;
    uint64_t p27;
    std::string p28;
    string p29;
    std::wstring p30;
    long double p31;
    void p32;
    std::vector<int> p33;
    std::vector<std::string> p34;
    std::vector<double> p35;
    std::vector<bool> p36;
    std::map<std::string,int> p37;
    std::map<int,std::string> p38;
    std::set<int> p39;
    std::set<std::string> p40;
    std::list<int> p41;
    std::list<std::string> p42;
    std::deque<int> p43;
    std::deque<std::string> p44;
    std::pair<int,int> p45;
    std::pair<std::string,int> p46;
    std::tuple<int,int,int> p47;
    std::tuple<std::string,int,double> p48;
    std::queue<int> p49;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsN050');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 50);
      assert.strictEqual(objList[0].variableList[0].name, 'p0');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'p1');
      assert.strictEqual(objList[0].variableList[1].type, 'char');
      assert.strictEqual(objList[0].variableList[2].name, 'p2');
      assert.strictEqual(objList[0].variableList[2].type, 'short');
      assert.strictEqual(objList[0].variableList[3].name, 'p3');
      assert.strictEqual(objList[0].variableList[3].type, 'long');
      assert.strictEqual(objList[0].variableList[4].name, 'p4');
      assert.strictEqual(objList[0].variableList[4].type, 'long long');
      assert.strictEqual(objList[0].variableList[5].name, 'p5');
      assert.strictEqual(objList[0].variableList[5].type, 'float');
      assert.strictEqual(objList[0].variableList[6].name, 'p6');
      assert.strictEqual(objList[0].variableList[6].type, 'double');
      assert.strictEqual(objList[0].variableList[7].name, 'p7');
      assert.strictEqual(objList[0].variableList[7].type, 'bool');
      assert.strictEqual(objList[0].variableList[8].name, 'p8');
      assert.strictEqual(objList[0].variableList[8].type, 'unsigned int');
      assert.strictEqual(objList[0].variableList[9].name, 'p9');
      assert.strictEqual(objList[0].variableList[9].type, 'unsigned char');
      assert.strictEqual(objList[0].variableList[10].name, 'p10');
      assert.strictEqual(objList[0].variableList[10].type, 'unsigned short');
      assert.strictEqual(objList[0].variableList[11].name, 'p11');
      assert.strictEqual(objList[0].variableList[11].type, 'unsigned long');
      assert.strictEqual(objList[0].variableList[12].name, 'p12');
      assert.strictEqual(objList[0].variableList[12].type, 'unsigned long long');
      assert.strictEqual(objList[0].variableList[13].name, 'p13');
      assert.strictEqual(objList[0].variableList[13].type, 'signed char');
      assert.strictEqual(objList[0].variableList[14].name, 'p14');
      assert.strictEqual(objList[0].variableList[14].type, 'signed short');
      assert.strictEqual(objList[0].variableList[15].name, 'p15');
      assert.strictEqual(objList[0].variableList[15].type, 'signed long');
      assert.strictEqual(objList[0].variableList[16].name, 'p16');
      assert.strictEqual(objList[0].variableList[16].type, 'wchar_t');
      assert.strictEqual(objList[0].variableList[17].name, 'p17');
      assert.strictEqual(objList[0].variableList[17].type, 'char16_t');
      assert.strictEqual(objList[0].variableList[18].name, 'p18');
      assert.strictEqual(objList[0].variableList[18].type, 'char32_t');
      assert.strictEqual(objList[0].variableList[19].name, 'p19');
      assert.strictEqual(objList[0].variableList[19].type, 'size_t');
      assert.strictEqual(objList[0].variableList[20].name, 'p20');
      assert.strictEqual(objList[0].variableList[20].type, 'int8_t');
      assert.strictEqual(objList[0].variableList[21].name, 'p21');
      assert.strictEqual(objList[0].variableList[21].type, 'int16_t');
      assert.strictEqual(objList[0].variableList[22].name, 'p22');
      assert.strictEqual(objList[0].variableList[22].type, 'int32_t');
      assert.strictEqual(objList[0].variableList[23].name, 'p23');
      assert.strictEqual(objList[0].variableList[23].type, 'int64_t');
      assert.strictEqual(objList[0].variableList[24].name, 'p24');
      assert.strictEqual(objList[0].variableList[24].type, 'uint8_t');
      assert.strictEqual(objList[0].variableList[25].name, 'p25');
      assert.strictEqual(objList[0].variableList[25].type, 'uint16_t');
      assert.strictEqual(objList[0].variableList[26].name, 'p26');
      assert.strictEqual(objList[0].variableList[26].type, 'uint32_t');
      assert.strictEqual(objList[0].variableList[27].name, 'p27');
      assert.strictEqual(objList[0].variableList[27].type, 'uint64_t');
      assert.strictEqual(objList[0].variableList[28].name, 'p28');
      assert.strictEqual(objList[0].variableList[28].type, 'std::string');
      assert.strictEqual(objList[0].variableList[29].name, 'p29');
      assert.strictEqual(objList[0].variableList[29].type, 'string');
      assert.strictEqual(objList[0].variableList[30].name, 'p30');
      assert.strictEqual(objList[0].variableList[30].type, 'std::wstring');
      assert.strictEqual(objList[0].variableList[31].name, 'p31');
      assert.strictEqual(objList[0].variableList[31].type, 'long double');
      assert.strictEqual(objList[0].variableList[32].name, 'p32');
      assert.strictEqual(objList[0].variableList[32].type, 'void');
      assert.strictEqual(objList[0].variableList[33].name, 'p33');
      assert.strictEqual(objList[0].variableList[33].type, 'std::vector<int>');
      assert.strictEqual(objList[0].variableList[34].name, 'p34');
      assert.strictEqual(objList[0].variableList[34].type, 'std::vector<std::string>');
      assert.strictEqual(objList[0].variableList[35].name, 'p35');
      assert.strictEqual(objList[0].variableList[35].type, 'std::vector<double>');
      assert.strictEqual(objList[0].variableList[36].name, 'p36');
      assert.strictEqual(objList[0].variableList[36].type, 'std::vector<bool>');
      assert.strictEqual(objList[0].variableList[37].name, 'p37');
      assert.strictEqual(objList[0].variableList[37].type, 'std::map<std::string,int>');
      assert.strictEqual(objList[0].variableList[38].name, 'p38');
      assert.strictEqual(objList[0].variableList[38].type, 'std::map<int,std::string>');
      assert.strictEqual(objList[0].variableList[39].name, 'p39');
      assert.strictEqual(objList[0].variableList[39].type, 'std::set<int>');
      assert.strictEqual(objList[0].variableList[40].name, 'p40');
      assert.strictEqual(objList[0].variableList[40].type, 'std::set<std::string>');
      assert.strictEqual(objList[0].variableList[41].name, 'p41');
      assert.strictEqual(objList[0].variableList[41].type, 'std::list<int>');
      assert.strictEqual(objList[0].variableList[42].name, 'p42');
      assert.strictEqual(objList[0].variableList[42].type, 'std::list<std::string>');
      assert.strictEqual(objList[0].variableList[43].name, 'p43');
      assert.strictEqual(objList[0].variableList[43].type, 'std::deque<int>');
      assert.strictEqual(objList[0].variableList[44].name, 'p44');
      assert.strictEqual(objList[0].variableList[44].type, 'std::deque<std::string>');
      assert.strictEqual(objList[0].variableList[45].name, 'p45');
      assert.strictEqual(objList[0].variableList[45].type, 'std::pair<int,int>');
      assert.strictEqual(objList[0].variableList[46].name, 'p46');
      assert.strictEqual(objList[0].variableList[46].type, 'std::pair<std::string,int>');
      assert.strictEqual(objList[0].variableList[47].name, 'p47');
      assert.strictEqual(objList[0].variableList[47].type, 'std::tuple<int,int,int>');
      assert.strictEqual(objList[0].variableList[48].name, 'p48');
      assert.strictEqual(objList[0].variableList[48].type, 'std::tuple<std::string,int,double>');
      assert.strictEqual(objList[0].variableList[49].name, 'p49');
      assert.strictEqual(objList[0].variableList[49].type, 'std::queue<int>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0177 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0177 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0178
  * @tc.name c_class_0178
  * @tc.desc h2dts parseClass：扩充-规模：55 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0178', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsN055 {
    int p0;
    char p1;
    short p2;
    long p3;
    long long p4;
    float p5;
    double p6;
    bool p7;
    unsigned int p8;
    unsigned char p9;
    unsigned short p10;
    unsigned long p11;
    unsigned long long p12;
    signed char p13;
    signed short p14;
    signed long p15;
    wchar_t p16;
    char16_t p17;
    char32_t p18;
    size_t p19;
    int8_t p20;
    int16_t p21;
    int32_t p22;
    int64_t p23;
    uint8_t p24;
    uint16_t p25;
    uint32_t p26;
    uint64_t p27;
    std::string p28;
    string p29;
    std::wstring p30;
    long double p31;
    void p32;
    std::vector<int> p33;
    std::vector<std::string> p34;
    std::vector<double> p35;
    std::vector<bool> p36;
    std::map<std::string,int> p37;
    std::map<int,std::string> p38;
    std::set<int> p39;
    std::set<std::string> p40;
    std::list<int> p41;
    std::list<std::string> p42;
    std::deque<int> p43;
    std::deque<std::string> p44;
    std::pair<int,int> p45;
    std::pair<std::string,int> p46;
    std::tuple<int,int,int> p47;
    std::tuple<std::string,int,double> p48;
    std::queue<int> p49;
    std::stack<int> p50;
    std::priority_queue<int> p51;
    std::multimap<int,int> p52;
    std::multiset<int> p53;
    std::unordered_map<std::string,int> p54;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsN055');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 55);
      assert.strictEqual(objList[0].variableList[0].name, 'p0');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'p1');
      assert.strictEqual(objList[0].variableList[1].type, 'char');
      assert.strictEqual(objList[0].variableList[2].name, 'p2');
      assert.strictEqual(objList[0].variableList[2].type, 'short');
      assert.strictEqual(objList[0].variableList[3].name, 'p3');
      assert.strictEqual(objList[0].variableList[3].type, 'long');
      assert.strictEqual(objList[0].variableList[4].name, 'p4');
      assert.strictEqual(objList[0].variableList[4].type, 'long long');
      assert.strictEqual(objList[0].variableList[5].name, 'p5');
      assert.strictEqual(objList[0].variableList[5].type, 'float');
      assert.strictEqual(objList[0].variableList[6].name, 'p6');
      assert.strictEqual(objList[0].variableList[6].type, 'double');
      assert.strictEqual(objList[0].variableList[7].name, 'p7');
      assert.strictEqual(objList[0].variableList[7].type, 'bool');
      assert.strictEqual(objList[0].variableList[8].name, 'p8');
      assert.strictEqual(objList[0].variableList[8].type, 'unsigned int');
      assert.strictEqual(objList[0].variableList[9].name, 'p9');
      assert.strictEqual(objList[0].variableList[9].type, 'unsigned char');
      assert.strictEqual(objList[0].variableList[10].name, 'p10');
      assert.strictEqual(objList[0].variableList[10].type, 'unsigned short');
      assert.strictEqual(objList[0].variableList[11].name, 'p11');
      assert.strictEqual(objList[0].variableList[11].type, 'unsigned long');
      assert.strictEqual(objList[0].variableList[12].name, 'p12');
      assert.strictEqual(objList[0].variableList[12].type, 'unsigned long long');
      assert.strictEqual(objList[0].variableList[13].name, 'p13');
      assert.strictEqual(objList[0].variableList[13].type, 'signed char');
      assert.strictEqual(objList[0].variableList[14].name, 'p14');
      assert.strictEqual(objList[0].variableList[14].type, 'signed short');
      assert.strictEqual(objList[0].variableList[15].name, 'p15');
      assert.strictEqual(objList[0].variableList[15].type, 'signed long');
      assert.strictEqual(objList[0].variableList[16].name, 'p16');
      assert.strictEqual(objList[0].variableList[16].type, 'wchar_t');
      assert.strictEqual(objList[0].variableList[17].name, 'p17');
      assert.strictEqual(objList[0].variableList[17].type, 'char16_t');
      assert.strictEqual(objList[0].variableList[18].name, 'p18');
      assert.strictEqual(objList[0].variableList[18].type, 'char32_t');
      assert.strictEqual(objList[0].variableList[19].name, 'p19');
      assert.strictEqual(objList[0].variableList[19].type, 'size_t');
      assert.strictEqual(objList[0].variableList[20].name, 'p20');
      assert.strictEqual(objList[0].variableList[20].type, 'int8_t');
      assert.strictEqual(objList[0].variableList[21].name, 'p21');
      assert.strictEqual(objList[0].variableList[21].type, 'int16_t');
      assert.strictEqual(objList[0].variableList[22].name, 'p22');
      assert.strictEqual(objList[0].variableList[22].type, 'int32_t');
      assert.strictEqual(objList[0].variableList[23].name, 'p23');
      assert.strictEqual(objList[0].variableList[23].type, 'int64_t');
      assert.strictEqual(objList[0].variableList[24].name, 'p24');
      assert.strictEqual(objList[0].variableList[24].type, 'uint8_t');
      assert.strictEqual(objList[0].variableList[25].name, 'p25');
      assert.strictEqual(objList[0].variableList[25].type, 'uint16_t');
      assert.strictEqual(objList[0].variableList[26].name, 'p26');
      assert.strictEqual(objList[0].variableList[26].type, 'uint32_t');
      assert.strictEqual(objList[0].variableList[27].name, 'p27');
      assert.strictEqual(objList[0].variableList[27].type, 'uint64_t');
      assert.strictEqual(objList[0].variableList[28].name, 'p28');
      assert.strictEqual(objList[0].variableList[28].type, 'std::string');
      assert.strictEqual(objList[0].variableList[29].name, 'p29');
      assert.strictEqual(objList[0].variableList[29].type, 'string');
      assert.strictEqual(objList[0].variableList[30].name, 'p30');
      assert.strictEqual(objList[0].variableList[30].type, 'std::wstring');
      assert.strictEqual(objList[0].variableList[31].name, 'p31');
      assert.strictEqual(objList[0].variableList[31].type, 'long double');
      assert.strictEqual(objList[0].variableList[32].name, 'p32');
      assert.strictEqual(objList[0].variableList[32].type, 'void');
      assert.strictEqual(objList[0].variableList[33].name, 'p33');
      assert.strictEqual(objList[0].variableList[33].type, 'std::vector<int>');
      assert.strictEqual(objList[0].variableList[34].name, 'p34');
      assert.strictEqual(objList[0].variableList[34].type, 'std::vector<std::string>');
      assert.strictEqual(objList[0].variableList[35].name, 'p35');
      assert.strictEqual(objList[0].variableList[35].type, 'std::vector<double>');
      assert.strictEqual(objList[0].variableList[36].name, 'p36');
      assert.strictEqual(objList[0].variableList[36].type, 'std::vector<bool>');
      assert.strictEqual(objList[0].variableList[37].name, 'p37');
      assert.strictEqual(objList[0].variableList[37].type, 'std::map<std::string,int>');
      assert.strictEqual(objList[0].variableList[38].name, 'p38');
      assert.strictEqual(objList[0].variableList[38].type, 'std::map<int,std::string>');
      assert.strictEqual(objList[0].variableList[39].name, 'p39');
      assert.strictEqual(objList[0].variableList[39].type, 'std::set<int>');
      assert.strictEqual(objList[0].variableList[40].name, 'p40');
      assert.strictEqual(objList[0].variableList[40].type, 'std::set<std::string>');
      assert.strictEqual(objList[0].variableList[41].name, 'p41');
      assert.strictEqual(objList[0].variableList[41].type, 'std::list<int>');
      assert.strictEqual(objList[0].variableList[42].name, 'p42');
      assert.strictEqual(objList[0].variableList[42].type, 'std::list<std::string>');
      assert.strictEqual(objList[0].variableList[43].name, 'p43');
      assert.strictEqual(objList[0].variableList[43].type, 'std::deque<int>');
      assert.strictEqual(objList[0].variableList[44].name, 'p44');
      assert.strictEqual(objList[0].variableList[44].type, 'std::deque<std::string>');
      assert.strictEqual(objList[0].variableList[45].name, 'p45');
      assert.strictEqual(objList[0].variableList[45].type, 'std::pair<int,int>');
      assert.strictEqual(objList[0].variableList[46].name, 'p46');
      assert.strictEqual(objList[0].variableList[46].type, 'std::pair<std::string,int>');
      assert.strictEqual(objList[0].variableList[47].name, 'p47');
      assert.strictEqual(objList[0].variableList[47].type, 'std::tuple<int,int,int>');
      assert.strictEqual(objList[0].variableList[48].name, 'p48');
      assert.strictEqual(objList[0].variableList[48].type, 'std::tuple<std::string,int,double>');
      assert.strictEqual(objList[0].variableList[49].name, 'p49');
      assert.strictEqual(objList[0].variableList[49].type, 'std::queue<int>');
      assert.strictEqual(objList[0].variableList[50].name, 'p50');
      assert.strictEqual(objList[0].variableList[50].type, 'std::stack<int>');
      assert.strictEqual(objList[0].variableList[51].name, 'p51');
      assert.strictEqual(objList[0].variableList[51].type, 'std::priority_queue<int>');
      assert.strictEqual(objList[0].variableList[52].name, 'p52');
      assert.strictEqual(objList[0].variableList[52].type, 'std::multimap<int,int>');
      assert.strictEqual(objList[0].variableList[53].name, 'p53');
      assert.strictEqual(objList[0].variableList[53].type, 'std::multiset<int>');
      assert.strictEqual(objList[0].variableList[54].name, 'p54');
      assert.strictEqual(objList[0].variableList[54].type, 'std::unordered_map<std::string,int>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0178 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0178 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0179
  * @tc.name c_class_0179
  * @tc.desc h2dts parseClass：扩充-规模：60 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0179', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsN060 {
    int p0;
    char p1;
    short p2;
    long p3;
    long long p4;
    float p5;
    double p6;
    bool p7;
    unsigned int p8;
    unsigned char p9;
    unsigned short p10;
    unsigned long p11;
    unsigned long long p12;
    signed char p13;
    signed short p14;
    signed long p15;
    wchar_t p16;
    char16_t p17;
    char32_t p18;
    size_t p19;
    int8_t p20;
    int16_t p21;
    int32_t p22;
    int64_t p23;
    uint8_t p24;
    uint16_t p25;
    uint32_t p26;
    uint64_t p27;
    std::string p28;
    string p29;
    std::wstring p30;
    long double p31;
    void p32;
    std::vector<int> p33;
    std::vector<std::string> p34;
    std::vector<double> p35;
    std::vector<bool> p36;
    std::map<std::string,int> p37;
    std::map<int,std::string> p38;
    std::set<int> p39;
    std::set<std::string> p40;
    std::list<int> p41;
    std::list<std::string> p42;
    std::deque<int> p43;
    std::deque<std::string> p44;
    std::pair<int,int> p45;
    std::pair<std::string,int> p46;
    std::tuple<int,int,int> p47;
    std::tuple<std::string,int,double> p48;
    std::queue<int> p49;
    std::stack<int> p50;
    std::priority_queue<int> p51;
    std::multimap<int,int> p52;
    std::multiset<int> p53;
    std::unordered_map<std::string,int> p54;
    std::unordered_set<int> p55;
    std::unordered_multimap<int,int> p56;
    std::unordered_multiset<int> p57;
    std::array<int,10> p58;
    std::array<std::string,5> p59;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsN060');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 60);
      assert.strictEqual(objList[0].variableList[0].name, 'p0');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'p1');
      assert.strictEqual(objList[0].variableList[1].type, 'char');
      assert.strictEqual(objList[0].variableList[2].name, 'p2');
      assert.strictEqual(objList[0].variableList[2].type, 'short');
      assert.strictEqual(objList[0].variableList[3].name, 'p3');
      assert.strictEqual(objList[0].variableList[3].type, 'long');
      assert.strictEqual(objList[0].variableList[4].name, 'p4');
      assert.strictEqual(objList[0].variableList[4].type, 'long long');
      assert.strictEqual(objList[0].variableList[5].name, 'p5');
      assert.strictEqual(objList[0].variableList[5].type, 'float');
      assert.strictEqual(objList[0].variableList[6].name, 'p6');
      assert.strictEqual(objList[0].variableList[6].type, 'double');
      assert.strictEqual(objList[0].variableList[7].name, 'p7');
      assert.strictEqual(objList[0].variableList[7].type, 'bool');
      assert.strictEqual(objList[0].variableList[8].name, 'p8');
      assert.strictEqual(objList[0].variableList[8].type, 'unsigned int');
      assert.strictEqual(objList[0].variableList[9].name, 'p9');
      assert.strictEqual(objList[0].variableList[9].type, 'unsigned char');
      assert.strictEqual(objList[0].variableList[10].name, 'p10');
      assert.strictEqual(objList[0].variableList[10].type, 'unsigned short');
      assert.strictEqual(objList[0].variableList[11].name, 'p11');
      assert.strictEqual(objList[0].variableList[11].type, 'unsigned long');
      assert.strictEqual(objList[0].variableList[12].name, 'p12');
      assert.strictEqual(objList[0].variableList[12].type, 'unsigned long long');
      assert.strictEqual(objList[0].variableList[13].name, 'p13');
      assert.strictEqual(objList[0].variableList[13].type, 'signed char');
      assert.strictEqual(objList[0].variableList[14].name, 'p14');
      assert.strictEqual(objList[0].variableList[14].type, 'signed short');
      assert.strictEqual(objList[0].variableList[15].name, 'p15');
      assert.strictEqual(objList[0].variableList[15].type, 'signed long');
      assert.strictEqual(objList[0].variableList[16].name, 'p16');
      assert.strictEqual(objList[0].variableList[16].type, 'wchar_t');
      assert.strictEqual(objList[0].variableList[17].name, 'p17');
      assert.strictEqual(objList[0].variableList[17].type, 'char16_t');
      assert.strictEqual(objList[0].variableList[18].name, 'p18');
      assert.strictEqual(objList[0].variableList[18].type, 'char32_t');
      assert.strictEqual(objList[0].variableList[19].name, 'p19');
      assert.strictEqual(objList[0].variableList[19].type, 'size_t');
      assert.strictEqual(objList[0].variableList[20].name, 'p20');
      assert.strictEqual(objList[0].variableList[20].type, 'int8_t');
      assert.strictEqual(objList[0].variableList[21].name, 'p21');
      assert.strictEqual(objList[0].variableList[21].type, 'int16_t');
      assert.strictEqual(objList[0].variableList[22].name, 'p22');
      assert.strictEqual(objList[0].variableList[22].type, 'int32_t');
      assert.strictEqual(objList[0].variableList[23].name, 'p23');
      assert.strictEqual(objList[0].variableList[23].type, 'int64_t');
      assert.strictEqual(objList[0].variableList[24].name, 'p24');
      assert.strictEqual(objList[0].variableList[24].type, 'uint8_t');
      assert.strictEqual(objList[0].variableList[25].name, 'p25');
      assert.strictEqual(objList[0].variableList[25].type, 'uint16_t');
      assert.strictEqual(objList[0].variableList[26].name, 'p26');
      assert.strictEqual(objList[0].variableList[26].type, 'uint32_t');
      assert.strictEqual(objList[0].variableList[27].name, 'p27');
      assert.strictEqual(objList[0].variableList[27].type, 'uint64_t');
      assert.strictEqual(objList[0].variableList[28].name, 'p28');
      assert.strictEqual(objList[0].variableList[28].type, 'std::string');
      assert.strictEqual(objList[0].variableList[29].name, 'p29');
      assert.strictEqual(objList[0].variableList[29].type, 'string');
      assert.strictEqual(objList[0].variableList[30].name, 'p30');
      assert.strictEqual(objList[0].variableList[30].type, 'std::wstring');
      assert.strictEqual(objList[0].variableList[31].name, 'p31');
      assert.strictEqual(objList[0].variableList[31].type, 'long double');
      assert.strictEqual(objList[0].variableList[32].name, 'p32');
      assert.strictEqual(objList[0].variableList[32].type, 'void');
      assert.strictEqual(objList[0].variableList[33].name, 'p33');
      assert.strictEqual(objList[0].variableList[33].type, 'std::vector<int>');
      assert.strictEqual(objList[0].variableList[34].name, 'p34');
      assert.strictEqual(objList[0].variableList[34].type, 'std::vector<std::string>');
      assert.strictEqual(objList[0].variableList[35].name, 'p35');
      assert.strictEqual(objList[0].variableList[35].type, 'std::vector<double>');
      assert.strictEqual(objList[0].variableList[36].name, 'p36');
      assert.strictEqual(objList[0].variableList[36].type, 'std::vector<bool>');
      assert.strictEqual(objList[0].variableList[37].name, 'p37');
      assert.strictEqual(objList[0].variableList[37].type, 'std::map<std::string,int>');
      assert.strictEqual(objList[0].variableList[38].name, 'p38');
      assert.strictEqual(objList[0].variableList[38].type, 'std::map<int,std::string>');
      assert.strictEqual(objList[0].variableList[39].name, 'p39');
      assert.strictEqual(objList[0].variableList[39].type, 'std::set<int>');
      assert.strictEqual(objList[0].variableList[40].name, 'p40');
      assert.strictEqual(objList[0].variableList[40].type, 'std::set<std::string>');
      assert.strictEqual(objList[0].variableList[41].name, 'p41');
      assert.strictEqual(objList[0].variableList[41].type, 'std::list<int>');
      assert.strictEqual(objList[0].variableList[42].name, 'p42');
      assert.strictEqual(objList[0].variableList[42].type, 'std::list<std::string>');
      assert.strictEqual(objList[0].variableList[43].name, 'p43');
      assert.strictEqual(objList[0].variableList[43].type, 'std::deque<int>');
      assert.strictEqual(objList[0].variableList[44].name, 'p44');
      assert.strictEqual(objList[0].variableList[44].type, 'std::deque<std::string>');
      assert.strictEqual(objList[0].variableList[45].name, 'p45');
      assert.strictEqual(objList[0].variableList[45].type, 'std::pair<int,int>');
      assert.strictEqual(objList[0].variableList[46].name, 'p46');
      assert.strictEqual(objList[0].variableList[46].type, 'std::pair<std::string,int>');
      assert.strictEqual(objList[0].variableList[47].name, 'p47');
      assert.strictEqual(objList[0].variableList[47].type, 'std::tuple<int,int,int>');
      assert.strictEqual(objList[0].variableList[48].name, 'p48');
      assert.strictEqual(objList[0].variableList[48].type, 'std::tuple<std::string,int,double>');
      assert.strictEqual(objList[0].variableList[49].name, 'p49');
      assert.strictEqual(objList[0].variableList[49].type, 'std::queue<int>');
      assert.strictEqual(objList[0].variableList[50].name, 'p50');
      assert.strictEqual(objList[0].variableList[50].type, 'std::stack<int>');
      assert.strictEqual(objList[0].variableList[51].name, 'p51');
      assert.strictEqual(objList[0].variableList[51].type, 'std::priority_queue<int>');
      assert.strictEqual(objList[0].variableList[52].name, 'p52');
      assert.strictEqual(objList[0].variableList[52].type, 'std::multimap<int,int>');
      assert.strictEqual(objList[0].variableList[53].name, 'p53');
      assert.strictEqual(objList[0].variableList[53].type, 'std::multiset<int>');
      assert.strictEqual(objList[0].variableList[54].name, 'p54');
      assert.strictEqual(objList[0].variableList[54].type, 'std::unordered_map<std::string,int>');
      assert.strictEqual(objList[0].variableList[55].name, 'p55');
      assert.strictEqual(objList[0].variableList[55].type, 'std::unordered_set<int>');
      assert.strictEqual(objList[0].variableList[56].name, 'p56');
      assert.strictEqual(objList[0].variableList[56].type, 'std::unordered_multimap<int,int>');
      assert.strictEqual(objList[0].variableList[57].name, 'p57');
      assert.strictEqual(objList[0].variableList[57].type, 'std::unordered_multiset<int>');
      assert.strictEqual(objList[0].variableList[58].name, 'p58');
      assert.strictEqual(objList[0].variableList[58].type, 'std::array<int,10>');
      assert.strictEqual(objList[0].variableList[59].name, 'p59');
      assert.strictEqual(objList[0].variableList[59].type, 'std::array<std::string,5>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0179 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0179 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0180
  * @tc.name c_class_0180
  * @tc.desc h2dts parseClass：扩充-规模：65 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0180', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsN065 {
    int p0;
    char p1;
    short p2;
    long p3;
    long long p4;
    float p5;
    double p6;
    bool p7;
    unsigned int p8;
    unsigned char p9;
    unsigned short p10;
    unsigned long p11;
    unsigned long long p12;
    signed char p13;
    signed short p14;
    signed long p15;
    wchar_t p16;
    char16_t p17;
    char32_t p18;
    size_t p19;
    int8_t p20;
    int16_t p21;
    int32_t p22;
    int64_t p23;
    uint8_t p24;
    uint16_t p25;
    uint32_t p26;
    uint64_t p27;
    std::string p28;
    string p29;
    std::wstring p30;
    long double p31;
    void p32;
    std::vector<int> p33;
    std::vector<std::string> p34;
    std::vector<double> p35;
    std::vector<bool> p36;
    std::map<std::string,int> p37;
    std::map<int,std::string> p38;
    std::set<int> p39;
    std::set<std::string> p40;
    std::list<int> p41;
    std::list<std::string> p42;
    std::deque<int> p43;
    std::deque<std::string> p44;
    std::pair<int,int> p45;
    std::pair<std::string,int> p46;
    std::tuple<int,int,int> p47;
    std::tuple<std::string,int,double> p48;
    std::queue<int> p49;
    std::stack<int> p50;
    std::priority_queue<int> p51;
    std::multimap<int,int> p52;
    std::multiset<int> p53;
    std::unordered_map<std::string,int> p54;
    std::unordered_set<int> p55;
    std::unordered_multimap<int,int> p56;
    std::unordered_multiset<int> p57;
    std::array<int,10> p58;
    std::array<std::string,5> p59;
    std::forward_list<int> p60;
    std::valarray<double> p61;
    std::complex<double> p62;
    std::function<int(int,int)> p63;
    std::function<void(std::string)> p64;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsN065');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 65);
      assert.strictEqual(objList[0].variableList[0].name, 'p0');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].variableList[1].name, 'p1');
      assert.strictEqual(objList[0].variableList[1].type, 'char');
      assert.strictEqual(objList[0].variableList[2].name, 'p2');
      assert.strictEqual(objList[0].variableList[2].type, 'short');
      assert.strictEqual(objList[0].variableList[3].name, 'p3');
      assert.strictEqual(objList[0].variableList[3].type, 'long');
      assert.strictEqual(objList[0].variableList[4].name, 'p4');
      assert.strictEqual(objList[0].variableList[4].type, 'long long');
      assert.strictEqual(objList[0].variableList[5].name, 'p5');
      assert.strictEqual(objList[0].variableList[5].type, 'float');
      assert.strictEqual(objList[0].variableList[6].name, 'p6');
      assert.strictEqual(objList[0].variableList[6].type, 'double');
      assert.strictEqual(objList[0].variableList[7].name, 'p7');
      assert.strictEqual(objList[0].variableList[7].type, 'bool');
      assert.strictEqual(objList[0].variableList[8].name, 'p8');
      assert.strictEqual(objList[0].variableList[8].type, 'unsigned int');
      assert.strictEqual(objList[0].variableList[9].name, 'p9');
      assert.strictEqual(objList[0].variableList[9].type, 'unsigned char');
      assert.strictEqual(objList[0].variableList[10].name, 'p10');
      assert.strictEqual(objList[0].variableList[10].type, 'unsigned short');
      assert.strictEqual(objList[0].variableList[11].name, 'p11');
      assert.strictEqual(objList[0].variableList[11].type, 'unsigned long');
      assert.strictEqual(objList[0].variableList[12].name, 'p12');
      assert.strictEqual(objList[0].variableList[12].type, 'unsigned long long');
      assert.strictEqual(objList[0].variableList[13].name, 'p13');
      assert.strictEqual(objList[0].variableList[13].type, 'signed char');
      assert.strictEqual(objList[0].variableList[14].name, 'p14');
      assert.strictEqual(objList[0].variableList[14].type, 'signed short');
      assert.strictEqual(objList[0].variableList[15].name, 'p15');
      assert.strictEqual(objList[0].variableList[15].type, 'signed long');
      assert.strictEqual(objList[0].variableList[16].name, 'p16');
      assert.strictEqual(objList[0].variableList[16].type, 'wchar_t');
      assert.strictEqual(objList[0].variableList[17].name, 'p17');
      assert.strictEqual(objList[0].variableList[17].type, 'char16_t');
      assert.strictEqual(objList[0].variableList[18].name, 'p18');
      assert.strictEqual(objList[0].variableList[18].type, 'char32_t');
      assert.strictEqual(objList[0].variableList[19].name, 'p19');
      assert.strictEqual(objList[0].variableList[19].type, 'size_t');
      assert.strictEqual(objList[0].variableList[20].name, 'p20');
      assert.strictEqual(objList[0].variableList[20].type, 'int8_t');
      assert.strictEqual(objList[0].variableList[21].name, 'p21');
      assert.strictEqual(objList[0].variableList[21].type, 'int16_t');
      assert.strictEqual(objList[0].variableList[22].name, 'p22');
      assert.strictEqual(objList[0].variableList[22].type, 'int32_t');
      assert.strictEqual(objList[0].variableList[23].name, 'p23');
      assert.strictEqual(objList[0].variableList[23].type, 'int64_t');
      assert.strictEqual(objList[0].variableList[24].name, 'p24');
      assert.strictEqual(objList[0].variableList[24].type, 'uint8_t');
      assert.strictEqual(objList[0].variableList[25].name, 'p25');
      assert.strictEqual(objList[0].variableList[25].type, 'uint16_t');
      assert.strictEqual(objList[0].variableList[26].name, 'p26');
      assert.strictEqual(objList[0].variableList[26].type, 'uint32_t');
      assert.strictEqual(objList[0].variableList[27].name, 'p27');
      assert.strictEqual(objList[0].variableList[27].type, 'uint64_t');
      assert.strictEqual(objList[0].variableList[28].name, 'p28');
      assert.strictEqual(objList[0].variableList[28].type, 'std::string');
      assert.strictEqual(objList[0].variableList[29].name, 'p29');
      assert.strictEqual(objList[0].variableList[29].type, 'string');
      assert.strictEqual(objList[0].variableList[30].name, 'p30');
      assert.strictEqual(objList[0].variableList[30].type, 'std::wstring');
      assert.strictEqual(objList[0].variableList[31].name, 'p31');
      assert.strictEqual(objList[0].variableList[31].type, 'long double');
      assert.strictEqual(objList[0].variableList[32].name, 'p32');
      assert.strictEqual(objList[0].variableList[32].type, 'void');
      assert.strictEqual(objList[0].variableList[33].name, 'p33');
      assert.strictEqual(objList[0].variableList[33].type, 'std::vector<int>');
      assert.strictEqual(objList[0].variableList[34].name, 'p34');
      assert.strictEqual(objList[0].variableList[34].type, 'std::vector<std::string>');
      assert.strictEqual(objList[0].variableList[35].name, 'p35');
      assert.strictEqual(objList[0].variableList[35].type, 'std::vector<double>');
      assert.strictEqual(objList[0].variableList[36].name, 'p36');
      assert.strictEqual(objList[0].variableList[36].type, 'std::vector<bool>');
      assert.strictEqual(objList[0].variableList[37].name, 'p37');
      assert.strictEqual(objList[0].variableList[37].type, 'std::map<std::string,int>');
      assert.strictEqual(objList[0].variableList[38].name, 'p38');
      assert.strictEqual(objList[0].variableList[38].type, 'std::map<int,std::string>');
      assert.strictEqual(objList[0].variableList[39].name, 'p39');
      assert.strictEqual(objList[0].variableList[39].type, 'std::set<int>');
      assert.strictEqual(objList[0].variableList[40].name, 'p40');
      assert.strictEqual(objList[0].variableList[40].type, 'std::set<std::string>');
      assert.strictEqual(objList[0].variableList[41].name, 'p41');
      assert.strictEqual(objList[0].variableList[41].type, 'std::list<int>');
      assert.strictEqual(objList[0].variableList[42].name, 'p42');
      assert.strictEqual(objList[0].variableList[42].type, 'std::list<std::string>');
      assert.strictEqual(objList[0].variableList[43].name, 'p43');
      assert.strictEqual(objList[0].variableList[43].type, 'std::deque<int>');
      assert.strictEqual(objList[0].variableList[44].name, 'p44');
      assert.strictEqual(objList[0].variableList[44].type, 'std::deque<std::string>');
      assert.strictEqual(objList[0].variableList[45].name, 'p45');
      assert.strictEqual(objList[0].variableList[45].type, 'std::pair<int,int>');
      assert.strictEqual(objList[0].variableList[46].name, 'p46');
      assert.strictEqual(objList[0].variableList[46].type, 'std::pair<std::string,int>');
      assert.strictEqual(objList[0].variableList[47].name, 'p47');
      assert.strictEqual(objList[0].variableList[47].type, 'std::tuple<int,int,int>');
      assert.strictEqual(objList[0].variableList[48].name, 'p48');
      assert.strictEqual(objList[0].variableList[48].type, 'std::tuple<std::string,int,double>');
      assert.strictEqual(objList[0].variableList[49].name, 'p49');
      assert.strictEqual(objList[0].variableList[49].type, 'std::queue<int>');
      assert.strictEqual(objList[0].variableList[50].name, 'p50');
      assert.strictEqual(objList[0].variableList[50].type, 'std::stack<int>');
      assert.strictEqual(objList[0].variableList[51].name, 'p51');
      assert.strictEqual(objList[0].variableList[51].type, 'std::priority_queue<int>');
      assert.strictEqual(objList[0].variableList[52].name, 'p52');
      assert.strictEqual(objList[0].variableList[52].type, 'std::multimap<int,int>');
      assert.strictEqual(objList[0].variableList[53].name, 'p53');
      assert.strictEqual(objList[0].variableList[53].type, 'std::multiset<int>');
      assert.strictEqual(objList[0].variableList[54].name, 'p54');
      assert.strictEqual(objList[0].variableList[54].type, 'std::unordered_map<std::string,int>');
      assert.strictEqual(objList[0].variableList[55].name, 'p55');
      assert.strictEqual(objList[0].variableList[55].type, 'std::unordered_set<int>');
      assert.strictEqual(objList[0].variableList[56].name, 'p56');
      assert.strictEqual(objList[0].variableList[56].type, 'std::unordered_multimap<int,int>');
      assert.strictEqual(objList[0].variableList[57].name, 'p57');
      assert.strictEqual(objList[0].variableList[57].type, 'std::unordered_multiset<int>');
      assert.strictEqual(objList[0].variableList[58].name, 'p58');
      assert.strictEqual(objList[0].variableList[58].type, 'std::array<int,10>');
      assert.strictEqual(objList[0].variableList[59].name, 'p59');
      assert.strictEqual(objList[0].variableList[59].type, 'std::array<std::string,5>');
      assert.strictEqual(objList[0].variableList[60].name, 'p60');
      assert.strictEqual(objList[0].variableList[60].type, 'std::forward_list<int>');
      assert.strictEqual(objList[0].variableList[61].name, 'p61');
      assert.strictEqual(objList[0].variableList[61].type, 'std::valarray<double>');
      assert.strictEqual(objList[0].variableList[62].name, 'p62');
      assert.strictEqual(objList[0].variableList[62].type, 'std::complex<double>');
      assert.strictEqual(objList[0].variableList[63].name, 'p63');
      assert.strictEqual(objList[0].variableList[63].type, 'std::function<int(int,int)>');
      assert.strictEqual(objList[0].variableList[64].name, 'p64');
      assert.strictEqual(objList[0].variableList[64].type, 'std::function<void(std::string)>');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0180 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0180 执行异常: ${String(err)}`);
    }
  });

});
