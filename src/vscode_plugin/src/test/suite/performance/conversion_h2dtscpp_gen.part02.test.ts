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

suite('Performance_H2DTSCPP_Gen_Suite', function ()
{
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Performance_H2DTSCPP_Gen_Suite part02.');

  /**
  * @tc.number h2dtscpp_gen_0011
  * @tc.name h2dtscpp_gen_0011
  * @tc.desc h2dtscpp transParseObj：扩充-transParseObj：基础类型组 1 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0011', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef enum { B0, C0 } E0;
int fn000(int v);
typedef struct S000 {
    int v;
} S000;
typedef enum { B1, C1 } E1;
char fn001(char v);
typedef struct S001 {
    char v;
} S001;
typedef enum { B2, C2 } E2;
short fn002(short v);`),
        unions: parseUnion(`typedef enum { B0, C0 } E0;
int fn000(int v);
typedef struct S000 {
    int v;
} S000;
typedef enum { B1, C1 } E1;
char fn001(char v);
typedef struct S001 {
    char v;
} S001;
typedef enum { B2, C2 } E2;
short fn002(short v);`),
        structs: parseStruct(`typedef enum { B0, C0 } E0;
int fn000(int v);
typedef struct S000 {
    int v;
} S000;
typedef enum { B1, C1 } E1;
char fn001(char v);
typedef struct S001 {
    char v;
} S001;
typedef enum { B2, C2 } E2;
short fn002(short v);`),
        classes: parseClass(`typedef enum { B0, C0 } E0;
int fn000(int v);
typedef struct S000 {
    int v;
} S000;
typedef enum { B1, C1 } E1;
char fn001(char v);
typedef struct S001 {
    char v;
} S001;
typedef enum { B2, C2 } E2;
short fn002(short v);`),
        funcs: parseFunction(`typedef enum { B0, C0 } E0;
int fn000(int v);
typedef struct S000 {
    int v;
} S000;
typedef enum { B1, C1 } E1;
char fn001(char v);
typedef struct S001 {
    char v;
} S001;
typedef enum { B2, C2 } E2;
short fn002(short v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 3);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 2);
      assert.strictEqual(transResult.enums.length, 3);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0011 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0011 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0012
  * @tc.name h2dtscpp_gen_0012
  * @tc.desc h2dtscpp transParseObj：扩充-transParseObj：基础类型组 2 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0012', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct S002 {
    short v;
} S002;
typedef enum { B3, C3 } E3;
long fn003(long v);
typedef struct S003 {
    long v;
} S003;
typedef enum { B4, C4 } E4;
long long fn004(long long v);
typedef struct S004 {
    long long v;
} S004;
typedef enum { B5, C5 } E5;`),
        unions: parseUnion(`typedef struct S002 {
    short v;
} S002;
typedef enum { B3, C3 } E3;
long fn003(long v);
typedef struct S003 {
    long v;
} S003;
typedef enum { B4, C4 } E4;
long long fn004(long long v);
typedef struct S004 {
    long long v;
} S004;
typedef enum { B5, C5 } E5;`),
        structs: parseStruct(`typedef struct S002 {
    short v;
} S002;
typedef enum { B3, C3 } E3;
long fn003(long v);
typedef struct S003 {
    long v;
} S003;
typedef enum { B4, C4 } E4;
long long fn004(long long v);
typedef struct S004 {
    long long v;
} S004;
typedef enum { B5, C5 } E5;`),
        classes: parseClass(`typedef struct S002 {
    short v;
} S002;
typedef enum { B3, C3 } E3;
long fn003(long v);
typedef struct S003 {
    long v;
} S003;
typedef enum { B4, C4 } E4;
long long fn004(long long v);
typedef struct S004 {
    long long v;
} S004;
typedef enum { B5, C5 } E5;`),
        funcs: parseFunction(`typedef struct S002 {
    short v;
} S002;
typedef enum { B3, C3 } E3;
long fn003(long v);
typedef struct S003 {
    long v;
} S003;
typedef enum { B4, C4 } E4;
long long fn004(long long v);
typedef struct S004 {
    long long v;
} S004;
typedef enum { B5, C5 } E5;`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 2);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 3);
      assert.strictEqual(transResult.enums.length, 3);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0012 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0012 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0013
  * @tc.name h2dtscpp_gen_0013
  * @tc.desc h2dtscpp transParseObj：扩充-transParseObj：基础类型组 3 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0013', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`float fn005(float v);
typedef struct S005 {
    float v;
} S005;
typedef enum { B6, C6 } E6;
double fn006(double v);
typedef struct S006 {
    double v;
} S006;
typedef enum { B7, C7 } E7;
bool fn007(bool v);
typedef struct S007 {
    bool v;
} S007;`),
        unions: parseUnion(`float fn005(float v);
typedef struct S005 {
    float v;
} S005;
typedef enum { B6, C6 } E6;
double fn006(double v);
typedef struct S006 {
    double v;
} S006;
typedef enum { B7, C7 } E7;
bool fn007(bool v);
typedef struct S007 {
    bool v;
} S007;`),
        structs: parseStruct(`float fn005(float v);
typedef struct S005 {
    float v;
} S005;
typedef enum { B6, C6 } E6;
double fn006(double v);
typedef struct S006 {
    double v;
} S006;
typedef enum { B7, C7 } E7;
bool fn007(bool v);
typedef struct S007 {
    bool v;
} S007;`),
        classes: parseClass(`float fn005(float v);
typedef struct S005 {
    float v;
} S005;
typedef enum { B6, C6 } E6;
double fn006(double v);
typedef struct S006 {
    double v;
} S006;
typedef enum { B7, C7 } E7;
bool fn007(bool v);
typedef struct S007 {
    bool v;
} S007;`),
        funcs: parseFunction(`float fn005(float v);
typedef struct S005 {
    float v;
} S005;
typedef enum { B6, C6 } E6;
double fn006(double v);
typedef struct S006 {
    double v;
} S006;
typedef enum { B7, C7 } E7;
bool fn007(bool v);
typedef struct S007 {
    bool v;
} S007;`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 3);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 3);
      assert.strictEqual(transResult.enums.length, 2);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0013 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0013 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0014
  * @tc.name h2dtscpp_gen_0014
  * @tc.desc h2dtscpp transParseObj：扩充-transParseObj：基础类型组 4 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0014', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef enum { B8, C8 } E8;
unsigned int fn008(unsigned int v);
typedef struct S008 {
    unsigned int v;
} S008;
typedef enum { B9, C9 } E9;
unsigned char fn009(unsigned char v);
typedef struct S009 {
    unsigned char v;
} S009;
typedef enum { B10, C10 } E10;
unsigned short fn010(unsigned short v);`),
        unions: parseUnion(`typedef enum { B8, C8 } E8;
unsigned int fn008(unsigned int v);
typedef struct S008 {
    unsigned int v;
} S008;
typedef enum { B9, C9 } E9;
unsigned char fn009(unsigned char v);
typedef struct S009 {
    unsigned char v;
} S009;
typedef enum { B10, C10 } E10;
unsigned short fn010(unsigned short v);`),
        structs: parseStruct(`typedef enum { B8, C8 } E8;
unsigned int fn008(unsigned int v);
typedef struct S008 {
    unsigned int v;
} S008;
typedef enum { B9, C9 } E9;
unsigned char fn009(unsigned char v);
typedef struct S009 {
    unsigned char v;
} S009;
typedef enum { B10, C10 } E10;
unsigned short fn010(unsigned short v);`),
        classes: parseClass(`typedef enum { B8, C8 } E8;
unsigned int fn008(unsigned int v);
typedef struct S008 {
    unsigned int v;
} S008;
typedef enum { B9, C9 } E9;
unsigned char fn009(unsigned char v);
typedef struct S009 {
    unsigned char v;
} S009;
typedef enum { B10, C10 } E10;
unsigned short fn010(unsigned short v);`),
        funcs: parseFunction(`typedef enum { B8, C8 } E8;
unsigned int fn008(unsigned int v);
typedef struct S008 {
    unsigned int v;
} S008;
typedef enum { B9, C9 } E9;
unsigned char fn009(unsigned char v);
typedef struct S009 {
    unsigned char v;
} S009;
typedef enum { B10, C10 } E10;
unsigned short fn010(unsigned short v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 3);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 2);
      assert.strictEqual(transResult.enums.length, 3);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0014 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0014 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0015
  * @tc.name h2dtscpp_gen_0015
  * @tc.desc h2dtscpp transParseObj：扩充-transParseObj：基础类型组 5 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0015', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct S010 {
    unsigned short v;
} S010;
typedef enum { B11, C11 } E11;
unsigned long fn011(unsigned long v);
typedef struct S011 {
    unsigned long v;
} S011;
typedef enum { B12, C12 } E12;
unsigned long long fn012(unsigned long long v);
typedef struct S012 {
    unsigned long long v;
} S012;
typedef enum { B13, C13 } E13;`),
        unions: parseUnion(`typedef struct S010 {
    unsigned short v;
} S010;
typedef enum { B11, C11 } E11;
unsigned long fn011(unsigned long v);
typedef struct S011 {
    unsigned long v;
} S011;
typedef enum { B12, C12 } E12;
unsigned long long fn012(unsigned long long v);
typedef struct S012 {
    unsigned long long v;
} S012;
typedef enum { B13, C13 } E13;`),
        structs: parseStruct(`typedef struct S010 {
    unsigned short v;
} S010;
typedef enum { B11, C11 } E11;
unsigned long fn011(unsigned long v);
typedef struct S011 {
    unsigned long v;
} S011;
typedef enum { B12, C12 } E12;
unsigned long long fn012(unsigned long long v);
typedef struct S012 {
    unsigned long long v;
} S012;
typedef enum { B13, C13 } E13;`),
        classes: parseClass(`typedef struct S010 {
    unsigned short v;
} S010;
typedef enum { B11, C11 } E11;
unsigned long fn011(unsigned long v);
typedef struct S011 {
    unsigned long v;
} S011;
typedef enum { B12, C12 } E12;
unsigned long long fn012(unsigned long long v);
typedef struct S012 {
    unsigned long long v;
} S012;
typedef enum { B13, C13 } E13;`),
        funcs: parseFunction(`typedef struct S010 {
    unsigned short v;
} S010;
typedef enum { B11, C11 } E11;
unsigned long fn011(unsigned long v);
typedef struct S011 {
    unsigned long v;
} S011;
typedef enum { B12, C12 } E12;
unsigned long long fn012(unsigned long long v);
typedef struct S012 {
    unsigned long long v;
} S012;
typedef enum { B13, C13 } E13;`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 2);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 3);
      assert.strictEqual(transResult.enums.length, 3);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0015 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0015 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0016
  * @tc.name h2dtscpp_gen_0016
  * @tc.desc h2dtscpp transParseObj：扩充-transParseObj：基础类型组 6 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0016', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`signed char fn013(signed char v);
typedef struct S013 {
    signed char v;
} S013;
typedef enum { B14, C14 } E14;
signed short fn014(signed short v);
typedef struct S014 {
    signed short v;
} S014;
typedef enum { B15, C15 } E15;
signed long fn015(signed long v);
typedef struct S015 {
    signed long v;
} S015;`),
        unions: parseUnion(`signed char fn013(signed char v);
typedef struct S013 {
    signed char v;
} S013;
typedef enum { B14, C14 } E14;
signed short fn014(signed short v);
typedef struct S014 {
    signed short v;
} S014;
typedef enum { B15, C15 } E15;
signed long fn015(signed long v);
typedef struct S015 {
    signed long v;
} S015;`),
        structs: parseStruct(`signed char fn013(signed char v);
typedef struct S013 {
    signed char v;
} S013;
typedef enum { B14, C14 } E14;
signed short fn014(signed short v);
typedef struct S014 {
    signed short v;
} S014;
typedef enum { B15, C15 } E15;
signed long fn015(signed long v);
typedef struct S015 {
    signed long v;
} S015;`),
        classes: parseClass(`signed char fn013(signed char v);
typedef struct S013 {
    signed char v;
} S013;
typedef enum { B14, C14 } E14;
signed short fn014(signed short v);
typedef struct S014 {
    signed short v;
} S014;
typedef enum { B15, C15 } E15;
signed long fn015(signed long v);
typedef struct S015 {
    signed long v;
} S015;`),
        funcs: parseFunction(`signed char fn013(signed char v);
typedef struct S013 {
    signed char v;
} S013;
typedef enum { B14, C14 } E14;
signed short fn014(signed short v);
typedef struct S014 {
    signed short v;
} S014;
typedef enum { B15, C15 } E15;
signed long fn015(signed long v);
typedef struct S015 {
    signed long v;
} S015;`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 3);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 3);
      assert.strictEqual(transResult.enums.length, 2);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0016 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0016 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0017
  * @tc.name h2dtscpp_gen_0017
  * @tc.desc h2dtscpp transParseObj：扩充-transParseObj：基础类型组 7 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0017', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef enum { B16, C16 } E16;
wchar_t fn016(wchar_t v);
typedef struct S016 {
    wchar_t v;
} S016;
typedef enum { B17, C17 } E17;
char16_t fn017(char16_t v);
typedef struct S017 {
    char16_t v;
} S017;
typedef enum { B18, C18 } E18;
char32_t fn018(char32_t v);`),
        unions: parseUnion(`typedef enum { B16, C16 } E16;
wchar_t fn016(wchar_t v);
typedef struct S016 {
    wchar_t v;
} S016;
typedef enum { B17, C17 } E17;
char16_t fn017(char16_t v);
typedef struct S017 {
    char16_t v;
} S017;
typedef enum { B18, C18 } E18;
char32_t fn018(char32_t v);`),
        structs: parseStruct(`typedef enum { B16, C16 } E16;
wchar_t fn016(wchar_t v);
typedef struct S016 {
    wchar_t v;
} S016;
typedef enum { B17, C17 } E17;
char16_t fn017(char16_t v);
typedef struct S017 {
    char16_t v;
} S017;
typedef enum { B18, C18 } E18;
char32_t fn018(char32_t v);`),
        classes: parseClass(`typedef enum { B16, C16 } E16;
wchar_t fn016(wchar_t v);
typedef struct S016 {
    wchar_t v;
} S016;
typedef enum { B17, C17 } E17;
char16_t fn017(char16_t v);
typedef struct S017 {
    char16_t v;
} S017;
typedef enum { B18, C18 } E18;
char32_t fn018(char32_t v);`),
        funcs: parseFunction(`typedef enum { B16, C16 } E16;
wchar_t fn016(wchar_t v);
typedef struct S016 {
    wchar_t v;
} S016;
typedef enum { B17, C17 } E17;
char16_t fn017(char16_t v);
typedef struct S017 {
    char16_t v;
} S017;
typedef enum { B18, C18 } E18;
char32_t fn018(char32_t v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 3);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 2);
      assert.strictEqual(transResult.enums.length, 3);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0017 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0017 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0018
  * @tc.name h2dtscpp_gen_0018
  * @tc.desc h2dtscpp transParseObj：扩充-transParseObj：基础类型组 8 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0018', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct S018 {
    char32_t v;
} S018;
typedef enum { B19, C19 } E19;
size_t fn019(size_t v);
typedef struct S019 {
    size_t v;
} S019;
typedef enum { B20, C20 } E20;
int8_t fn020(int8_t v);
typedef struct S020 {
    int8_t v;
} S020;
typedef enum { B21, C21 } E21;`),
        unions: parseUnion(`typedef struct S018 {
    char32_t v;
} S018;
typedef enum { B19, C19 } E19;
size_t fn019(size_t v);
typedef struct S019 {
    size_t v;
} S019;
typedef enum { B20, C20 } E20;
int8_t fn020(int8_t v);
typedef struct S020 {
    int8_t v;
} S020;
typedef enum { B21, C21 } E21;`),
        structs: parseStruct(`typedef struct S018 {
    char32_t v;
} S018;
typedef enum { B19, C19 } E19;
size_t fn019(size_t v);
typedef struct S019 {
    size_t v;
} S019;
typedef enum { B20, C20 } E20;
int8_t fn020(int8_t v);
typedef struct S020 {
    int8_t v;
} S020;
typedef enum { B21, C21 } E21;`),
        classes: parseClass(`typedef struct S018 {
    char32_t v;
} S018;
typedef enum { B19, C19 } E19;
size_t fn019(size_t v);
typedef struct S019 {
    size_t v;
} S019;
typedef enum { B20, C20 } E20;
int8_t fn020(int8_t v);
typedef struct S020 {
    int8_t v;
} S020;
typedef enum { B21, C21 } E21;`),
        funcs: parseFunction(`typedef struct S018 {
    char32_t v;
} S018;
typedef enum { B19, C19 } E19;
size_t fn019(size_t v);
typedef struct S019 {
    size_t v;
} S019;
typedef enum { B20, C20 } E20;
int8_t fn020(int8_t v);
typedef struct S020 {
    int8_t v;
} S020;
typedef enum { B21, C21 } E21;`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 2);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 3);
      assert.strictEqual(transResult.enums.length, 3);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0018 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0018 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0019
  * @tc.name h2dtscpp_gen_0019
  * @tc.desc h2dtscpp transParseObj：扩充-transParseObj：基础类型组 9 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0019', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`int16_t fn021(int16_t v);
typedef struct S021 {
    int16_t v;
} S021;
typedef enum { B22, C22 } E22;
int32_t fn022(int32_t v);
typedef struct S022 {
    int32_t v;
} S022;
typedef enum { B23, C23 } E23;
int64_t fn023(int64_t v);
typedef struct S023 {
    int64_t v;
} S023;`),
        unions: parseUnion(`int16_t fn021(int16_t v);
typedef struct S021 {
    int16_t v;
} S021;
typedef enum { B22, C22 } E22;
int32_t fn022(int32_t v);
typedef struct S022 {
    int32_t v;
} S022;
typedef enum { B23, C23 } E23;
int64_t fn023(int64_t v);
typedef struct S023 {
    int64_t v;
} S023;`),
        structs: parseStruct(`int16_t fn021(int16_t v);
typedef struct S021 {
    int16_t v;
} S021;
typedef enum { B22, C22 } E22;
int32_t fn022(int32_t v);
typedef struct S022 {
    int32_t v;
} S022;
typedef enum { B23, C23 } E23;
int64_t fn023(int64_t v);
typedef struct S023 {
    int64_t v;
} S023;`),
        classes: parseClass(`int16_t fn021(int16_t v);
typedef struct S021 {
    int16_t v;
} S021;
typedef enum { B22, C22 } E22;
int32_t fn022(int32_t v);
typedef struct S022 {
    int32_t v;
} S022;
typedef enum { B23, C23 } E23;
int64_t fn023(int64_t v);
typedef struct S023 {
    int64_t v;
} S023;`),
        funcs: parseFunction(`int16_t fn021(int16_t v);
typedef struct S021 {
    int16_t v;
} S021;
typedef enum { B22, C22 } E22;
int32_t fn022(int32_t v);
typedef struct S022 {
    int32_t v;
} S022;
typedef enum { B23, C23 } E23;
int64_t fn023(int64_t v);
typedef struct S023 {
    int64_t v;
} S023;`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 3);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 3);
      assert.strictEqual(transResult.enums.length, 2);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0019 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0019 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0020
  * @tc.name h2dtscpp_gen_0020
  * @tc.desc h2dtscpp transParseObj：扩充-transParseObj：基础类型组 10 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0020', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef enum { B24, C24 } E24;
uint8_t fn024(uint8_t v);
typedef struct S024 {
    uint8_t v;
} S024;
typedef enum { B25, C25 } E25;
uint16_t fn025(uint16_t v);
typedef struct S025 {
    uint16_t v;
} S025;
typedef enum { B26, C26 } E26;
uint32_t fn026(uint32_t v);`),
        unions: parseUnion(`typedef enum { B24, C24 } E24;
uint8_t fn024(uint8_t v);
typedef struct S024 {
    uint8_t v;
} S024;
typedef enum { B25, C25 } E25;
uint16_t fn025(uint16_t v);
typedef struct S025 {
    uint16_t v;
} S025;
typedef enum { B26, C26 } E26;
uint32_t fn026(uint32_t v);`),
        structs: parseStruct(`typedef enum { B24, C24 } E24;
uint8_t fn024(uint8_t v);
typedef struct S024 {
    uint8_t v;
} S024;
typedef enum { B25, C25 } E25;
uint16_t fn025(uint16_t v);
typedef struct S025 {
    uint16_t v;
} S025;
typedef enum { B26, C26 } E26;
uint32_t fn026(uint32_t v);`),
        classes: parseClass(`typedef enum { B24, C24 } E24;
uint8_t fn024(uint8_t v);
typedef struct S024 {
    uint8_t v;
} S024;
typedef enum { B25, C25 } E25;
uint16_t fn025(uint16_t v);
typedef struct S025 {
    uint16_t v;
} S025;
typedef enum { B26, C26 } E26;
uint32_t fn026(uint32_t v);`),
        funcs: parseFunction(`typedef enum { B24, C24 } E24;
uint8_t fn024(uint8_t v);
typedef struct S024 {
    uint8_t v;
} S024;
typedef enum { B25, C25 } E25;
uint16_t fn025(uint16_t v);
typedef struct S025 {
    uint16_t v;
} S025;
typedef enum { B26, C26 } E26;
uint32_t fn026(uint32_t v);`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 3);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 2);
      assert.strictEqual(transResult.enums.length, 3);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0020 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0020 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0021
  * @tc.name h2dtscpp_gen_0021
  * @tc.desc h2dtscpp transParseObj：扩充-transParseObj：基础类型组 11 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0021', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`typedef struct S026 {
    uint32_t v;
} S026;
typedef enum { B27, C27 } E27;
uint64_t fn027(uint64_t v);
typedef struct S027 {
    uint64_t v;
} S027;
typedef enum { B28, C28 } E28;
std::string fn028(std::string v);
typedef struct S028 {
    std::string v;
} S028;
typedef enum { B29, C29 } E29;`),
        unions: parseUnion(`typedef struct S026 {
    uint32_t v;
} S026;
typedef enum { B27, C27 } E27;
uint64_t fn027(uint64_t v);
typedef struct S027 {
    uint64_t v;
} S027;
typedef enum { B28, C28 } E28;
std::string fn028(std::string v);
typedef struct S028 {
    std::string v;
} S028;
typedef enum { B29, C29 } E29;`),
        structs: parseStruct(`typedef struct S026 {
    uint32_t v;
} S026;
typedef enum { B27, C27 } E27;
uint64_t fn027(uint64_t v);
typedef struct S027 {
    uint64_t v;
} S027;
typedef enum { B28, C28 } E28;
std::string fn028(std::string v);
typedef struct S028 {
    std::string v;
} S028;
typedef enum { B29, C29 } E29;`),
        classes: parseClass(`typedef struct S026 {
    uint32_t v;
} S026;
typedef enum { B27, C27 } E27;
uint64_t fn027(uint64_t v);
typedef struct S027 {
    uint64_t v;
} S027;
typedef enum { B28, C28 } E28;
std::string fn028(std::string v);
typedef struct S028 {
    std::string v;
} S028;
typedef enum { B29, C29 } E29;`),
        funcs: parseFunction(`typedef struct S026 {
    uint32_t v;
} S026;
typedef enum { B27, C27 } E27;
uint64_t fn027(uint64_t v);
typedef struct S027 {
    uint64_t v;
} S027;
typedef enum { B28, C28 } E28;
std::string fn028(std::string v);
typedef struct S028 {
    std::string v;
} S028;
typedef enum { B29, C29 } E29;`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 2);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 3);
      assert.strictEqual(transResult.enums.length, 3);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0021 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0021 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0022
  * @tc.name h2dtscpp_gen_0022
  * @tc.desc h2dtscpp transParseObj：扩充-transParseObj：基础类型组 12 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0022', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`string fn029(string v);
typedef struct S029 {
    string v;
} S029;
typedef enum { B30, C30 } E30;
std::wstring fn030(std::wstring v);
typedef struct S030 {
    std::wstring v;
} S030;
typedef enum { B31, C31 } E31;
long double fn031(long double v);
typedef struct S031 {
    long double v;
} S031;`),
        unions: parseUnion(`string fn029(string v);
typedef struct S029 {
    string v;
} S029;
typedef enum { B30, C30 } E30;
std::wstring fn030(std::wstring v);
typedef struct S030 {
    std::wstring v;
} S030;
typedef enum { B31, C31 } E31;
long double fn031(long double v);
typedef struct S031 {
    long double v;
} S031;`),
        structs: parseStruct(`string fn029(string v);
typedef struct S029 {
    string v;
} S029;
typedef enum { B30, C30 } E30;
std::wstring fn030(std::wstring v);
typedef struct S030 {
    std::wstring v;
} S030;
typedef enum { B31, C31 } E31;
long double fn031(long double v);
typedef struct S031 {
    long double v;
} S031;`),
        classes: parseClass(`string fn029(string v);
typedef struct S029 {
    string v;
} S029;
typedef enum { B30, C30 } E30;
std::wstring fn030(std::wstring v);
typedef struct S030 {
    std::wstring v;
} S030;
typedef enum { B31, C31 } E31;
long double fn031(long double v);
typedef struct S031 {
    long double v;
} S031;`),
        funcs: parseFunction(`string fn029(string v);
typedef struct S029 {
    string v;
} S029;
typedef enum { B30, C30 } E30;
std::wstring fn030(std::wstring v);
typedef struct S030 {
    std::wstring v;
} S030;
typedef enum { B31, C31 } E31;
long double fn031(long double v);
typedef struct S031 {
    long double v;
} S031;`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 3);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 3);
      assert.strictEqual(transResult.enums.length, 2);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0022 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0022 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0023
  * @tc.name h2dtscpp_gen_0023
  * @tc.desc h2dtscpp transParseObj：扩充-transParseObj：容器类型组 1 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0023', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void cf0_0(std::vector<int> v);
std::vector<int> gf0_0();
void cf0_1(std::vector<std::string> v);
std::vector<std::string> gf0_1();
void cf0_2(std::vector<double> v);
std::vector<double> gf0_2();
void cf0_3(std::vector<bool> v);
std::vector<bool> gf0_3();`),
        unions: parseUnion(`void cf0_0(std::vector<int> v);
std::vector<int> gf0_0();
void cf0_1(std::vector<std::string> v);
std::vector<std::string> gf0_1();
void cf0_2(std::vector<double> v);
std::vector<double> gf0_2();
void cf0_3(std::vector<bool> v);
std::vector<bool> gf0_3();`),
        structs: parseStruct(`void cf0_0(std::vector<int> v);
std::vector<int> gf0_0();
void cf0_1(std::vector<std::string> v);
std::vector<std::string> gf0_1();
void cf0_2(std::vector<double> v);
std::vector<double> gf0_2();
void cf0_3(std::vector<bool> v);
std::vector<bool> gf0_3();`),
        classes: parseClass(`void cf0_0(std::vector<int> v);
std::vector<int> gf0_0();
void cf0_1(std::vector<std::string> v);
std::vector<std::string> gf0_1();
void cf0_2(std::vector<double> v);
std::vector<double> gf0_2();
void cf0_3(std::vector<bool> v);
std::vector<bool> gf0_3();`),
        funcs: parseFunction(`void cf0_0(std::vector<int> v);
std::vector<int> gf0_0();
void cf0_1(std::vector<std::string> v);
std::vector<std::string> gf0_1();
void cf0_2(std::vector<double> v);
std::vector<double> gf0_2();
void cf0_3(std::vector<bool> v);
std::vector<bool> gf0_3();`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 8);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0023 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0023 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0024
  * @tc.name h2dtscpp_gen_0024
  * @tc.desc h2dtscpp transParseObj：扩充-transParseObj：容器类型组 2 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0024', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void cf1_0(std::map<std::string,int> v);
std::map<std::string,int> gf1_0();
void cf1_1(std::map<int,std::string> v);
std::map<int,std::string> gf1_1();
void cf1_2(std::set<int> v);
std::set<int> gf1_2();
void cf1_3(std::set<std::string> v);
std::set<std::string> gf1_3();`),
        unions: parseUnion(`void cf1_0(std::map<std::string,int> v);
std::map<std::string,int> gf1_0();
void cf1_1(std::map<int,std::string> v);
std::map<int,std::string> gf1_1();
void cf1_2(std::set<int> v);
std::set<int> gf1_2();
void cf1_3(std::set<std::string> v);
std::set<std::string> gf1_3();`),
        structs: parseStruct(`void cf1_0(std::map<std::string,int> v);
std::map<std::string,int> gf1_0();
void cf1_1(std::map<int,std::string> v);
std::map<int,std::string> gf1_1();
void cf1_2(std::set<int> v);
std::set<int> gf1_2();
void cf1_3(std::set<std::string> v);
std::set<std::string> gf1_3();`),
        classes: parseClass(`void cf1_0(std::map<std::string,int> v);
std::map<std::string,int> gf1_0();
void cf1_1(std::map<int,std::string> v);
std::map<int,std::string> gf1_1();
void cf1_2(std::set<int> v);
std::set<int> gf1_2();
void cf1_3(std::set<std::string> v);
std::set<std::string> gf1_3();`),
        funcs: parseFunction(`void cf1_0(std::map<std::string,int> v);
std::map<std::string,int> gf1_0();
void cf1_1(std::map<int,std::string> v);
std::map<int,std::string> gf1_1();
void cf1_2(std::set<int> v);
std::set<int> gf1_2();
void cf1_3(std::set<std::string> v);
std::set<std::string> gf1_3();`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 8);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0024 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0024 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0025
  * @tc.name h2dtscpp_gen_0025
  * @tc.desc h2dtscpp transParseObj：扩充-transParseObj：容器类型组 3 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0025', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void cf2_0(std::list<int> v);
std::list<int> gf2_0();
void cf2_1(std::list<std::string> v);
std::list<std::string> gf2_1();
void cf2_2(std::deque<int> v);
std::deque<int> gf2_2();
void cf2_3(std::deque<std::string> v);
std::deque<std::string> gf2_3();`),
        unions: parseUnion(`void cf2_0(std::list<int> v);
std::list<int> gf2_0();
void cf2_1(std::list<std::string> v);
std::list<std::string> gf2_1();
void cf2_2(std::deque<int> v);
std::deque<int> gf2_2();
void cf2_3(std::deque<std::string> v);
std::deque<std::string> gf2_3();`),
        structs: parseStruct(`void cf2_0(std::list<int> v);
std::list<int> gf2_0();
void cf2_1(std::list<std::string> v);
std::list<std::string> gf2_1();
void cf2_2(std::deque<int> v);
std::deque<int> gf2_2();
void cf2_3(std::deque<std::string> v);
std::deque<std::string> gf2_3();`),
        classes: parseClass(`void cf2_0(std::list<int> v);
std::list<int> gf2_0();
void cf2_1(std::list<std::string> v);
std::list<std::string> gf2_1();
void cf2_2(std::deque<int> v);
std::deque<int> gf2_2();
void cf2_3(std::deque<std::string> v);
std::deque<std::string> gf2_3();`),
        funcs: parseFunction(`void cf2_0(std::list<int> v);
std::list<int> gf2_0();
void cf2_1(std::list<std::string> v);
std::list<std::string> gf2_1();
void cf2_2(std::deque<int> v);
std::deque<int> gf2_2();
void cf2_3(std::deque<std::string> v);
std::deque<std::string> gf2_3();`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 8);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0025 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0025 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0026
  * @tc.name h2dtscpp_gen_0026
  * @tc.desc h2dtscpp transParseObj：扩充-transParseObj：容器类型组 4 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0026', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void cf3_0(std::pair<int,int> v);
std::pair<int,int> gf3_0();
void cf3_1(std::pair<std::string,int> v);
std::pair<std::string,int> gf3_1();
void cf3_2(std::tuple<int,int,int> v);
std::tuple<int,int,int> gf3_2();
void cf3_3(std::tuple<std::string,int,double> v);
std::tuple<std::string,int,double> gf3_3();`),
        unions: parseUnion(`void cf3_0(std::pair<int,int> v);
std::pair<int,int> gf3_0();
void cf3_1(std::pair<std::string,int> v);
std::pair<std::string,int> gf3_1();
void cf3_2(std::tuple<int,int,int> v);
std::tuple<int,int,int> gf3_2();
void cf3_3(std::tuple<std::string,int,double> v);
std::tuple<std::string,int,double> gf3_3();`),
        structs: parseStruct(`void cf3_0(std::pair<int,int> v);
std::pair<int,int> gf3_0();
void cf3_1(std::pair<std::string,int> v);
std::pair<std::string,int> gf3_1();
void cf3_2(std::tuple<int,int,int> v);
std::tuple<int,int,int> gf3_2();
void cf3_3(std::tuple<std::string,int,double> v);
std::tuple<std::string,int,double> gf3_3();`),
        classes: parseClass(`void cf3_0(std::pair<int,int> v);
std::pair<int,int> gf3_0();
void cf3_1(std::pair<std::string,int> v);
std::pair<std::string,int> gf3_1();
void cf3_2(std::tuple<int,int,int> v);
std::tuple<int,int,int> gf3_2();
void cf3_3(std::tuple<std::string,int,double> v);
std::tuple<std::string,int,double> gf3_3();`),
        funcs: parseFunction(`void cf3_0(std::pair<int,int> v);
std::pair<int,int> gf3_0();
void cf3_1(std::pair<std::string,int> v);
std::pair<std::string,int> gf3_1();
void cf3_2(std::tuple<int,int,int> v);
std::tuple<int,int,int> gf3_2();
void cf3_3(std::tuple<std::string,int,double> v);
std::tuple<std::string,int,double> gf3_3();`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 8);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0026 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0026 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0027
  * @tc.name h2dtscpp_gen_0027
  * @tc.desc h2dtscpp transParseObj：扩充-transParseObj：容器类型组 5 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0027', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void cf4_0(std::queue<int> v);
std::queue<int> gf4_0();
void cf4_1(std::stack<int> v);
std::stack<int> gf4_1();
void cf4_2(std::priority_queue<int> v);
std::priority_queue<int> gf4_2();
void cf4_3(std::multimap<int,int> v);
std::multimap<int,int> gf4_3();`),
        unions: parseUnion(`void cf4_0(std::queue<int> v);
std::queue<int> gf4_0();
void cf4_1(std::stack<int> v);
std::stack<int> gf4_1();
void cf4_2(std::priority_queue<int> v);
std::priority_queue<int> gf4_2();
void cf4_3(std::multimap<int,int> v);
std::multimap<int,int> gf4_3();`),
        structs: parseStruct(`void cf4_0(std::queue<int> v);
std::queue<int> gf4_0();
void cf4_1(std::stack<int> v);
std::stack<int> gf4_1();
void cf4_2(std::priority_queue<int> v);
std::priority_queue<int> gf4_2();
void cf4_3(std::multimap<int,int> v);
std::multimap<int,int> gf4_3();`),
        classes: parseClass(`void cf4_0(std::queue<int> v);
std::queue<int> gf4_0();
void cf4_1(std::stack<int> v);
std::stack<int> gf4_1();
void cf4_2(std::priority_queue<int> v);
std::priority_queue<int> gf4_2();
void cf4_3(std::multimap<int,int> v);
std::multimap<int,int> gf4_3();`),
        funcs: parseFunction(`void cf4_0(std::queue<int> v);
std::queue<int> gf4_0();
void cf4_1(std::stack<int> v);
std::stack<int> gf4_1();
void cf4_2(std::priority_queue<int> v);
std::priority_queue<int> gf4_2();
void cf4_3(std::multimap<int,int> v);
std::multimap<int,int> gf4_3();`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 8);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0027 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0027 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0028
  * @tc.name h2dtscpp_gen_0028
  * @tc.desc h2dtscpp transParseObj：扩充-transParseObj：容器类型组 6 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0028', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void cf5_0(std::multiset<int> v);
std::multiset<int> gf5_0();
void cf5_1(std::unordered_map<std::string,int> v);
std::unordered_map<std::string,int> gf5_1();
void cf5_2(std::unordered_set<int> v);
std::unordered_set<int> gf5_2();
void cf5_3(std::unordered_multimap<int,int> v);
std::unordered_multimap<int,int> gf5_3();`),
        unions: parseUnion(`void cf5_0(std::multiset<int> v);
std::multiset<int> gf5_0();
void cf5_1(std::unordered_map<std::string,int> v);
std::unordered_map<std::string,int> gf5_1();
void cf5_2(std::unordered_set<int> v);
std::unordered_set<int> gf5_2();
void cf5_3(std::unordered_multimap<int,int> v);
std::unordered_multimap<int,int> gf5_3();`),
        structs: parseStruct(`void cf5_0(std::multiset<int> v);
std::multiset<int> gf5_0();
void cf5_1(std::unordered_map<std::string,int> v);
std::unordered_map<std::string,int> gf5_1();
void cf5_2(std::unordered_set<int> v);
std::unordered_set<int> gf5_2();
void cf5_3(std::unordered_multimap<int,int> v);
std::unordered_multimap<int,int> gf5_3();`),
        classes: parseClass(`void cf5_0(std::multiset<int> v);
std::multiset<int> gf5_0();
void cf5_1(std::unordered_map<std::string,int> v);
std::unordered_map<std::string,int> gf5_1();
void cf5_2(std::unordered_set<int> v);
std::unordered_set<int> gf5_2();
void cf5_3(std::unordered_multimap<int,int> v);
std::unordered_multimap<int,int> gf5_3();`),
        funcs: parseFunction(`void cf5_0(std::multiset<int> v);
std::multiset<int> gf5_0();
void cf5_1(std::unordered_map<std::string,int> v);
std::unordered_map<std::string,int> gf5_1();
void cf5_2(std::unordered_set<int> v);
std::unordered_set<int> gf5_2();
void cf5_3(std::unordered_multimap<int,int> v);
std::unordered_multimap<int,int> gf5_3();`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 8);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0028 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0028 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0029
  * @tc.name h2dtscpp_gen_0029
  * @tc.desc h2dtscpp transParseObj：扩充-transParseObj：容器类型组 7 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0029', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void cf6_0(std::unordered_multiset<int> v);
std::unordered_multiset<int> gf6_0();
void cf6_1(std::array<int,10> v);
std::array<int,10> gf6_1();
void cf6_2(std::array<std::string,5> v);
std::array<std::string,5> gf6_2();
void cf6_3(std::forward_list<int> v);
std::forward_list<int> gf6_3();`),
        unions: parseUnion(`void cf6_0(std::unordered_multiset<int> v);
std::unordered_multiset<int> gf6_0();
void cf6_1(std::array<int,10> v);
std::array<int,10> gf6_1();
void cf6_2(std::array<std::string,5> v);
std::array<std::string,5> gf6_2();
void cf6_3(std::forward_list<int> v);
std::forward_list<int> gf6_3();`),
        structs: parseStruct(`void cf6_0(std::unordered_multiset<int> v);
std::unordered_multiset<int> gf6_0();
void cf6_1(std::array<int,10> v);
std::array<int,10> gf6_1();
void cf6_2(std::array<std::string,5> v);
std::array<std::string,5> gf6_2();
void cf6_3(std::forward_list<int> v);
std::forward_list<int> gf6_3();`),
        classes: parseClass(`void cf6_0(std::unordered_multiset<int> v);
std::unordered_multiset<int> gf6_0();
void cf6_1(std::array<int,10> v);
std::array<int,10> gf6_1();
void cf6_2(std::array<std::string,5> v);
std::array<std::string,5> gf6_2();
void cf6_3(std::forward_list<int> v);
std::forward_list<int> gf6_3();`),
        funcs: parseFunction(`void cf6_0(std::unordered_multiset<int> v);
std::unordered_multiset<int> gf6_0();
void cf6_1(std::array<int,10> v);
std::array<int,10> gf6_1();
void cf6_2(std::array<std::string,5> v);
std::array<std::string,5> gf6_2();
void cf6_3(std::forward_list<int> v);
std::forward_list<int> gf6_3();`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 8);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0029 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0029 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0030
  * @tc.name h2dtscpp_gen_0030
  * @tc.desc h2dtscpp transParseObj：扩充-transParseObj：容器类型组 8 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0030', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void cf7_0(std::valarray<double> v);
std::valarray<double> gf7_0();
void cf7_1(std::complex<double> v);
std::complex<double> gf7_1();
void cf7_2(std::function<int(int,int)> v);
std::function<int(int,int)> gf7_2();
void cf7_3(std::function<void(std::string)> v);
std::function<void(std::string)> gf7_3();`),
        unions: parseUnion(`void cf7_0(std::valarray<double> v);
std::valarray<double> gf7_0();
void cf7_1(std::complex<double> v);
std::complex<double> gf7_1();
void cf7_2(std::function<int(int,int)> v);
std::function<int(int,int)> gf7_2();
void cf7_3(std::function<void(std::string)> v);
std::function<void(std::string)> gf7_3();`),
        structs: parseStruct(`void cf7_0(std::valarray<double> v);
std::valarray<double> gf7_0();
void cf7_1(std::complex<double> v);
std::complex<double> gf7_1();
void cf7_2(std::function<int(int,int)> v);
std::function<int(int,int)> gf7_2();
void cf7_3(std::function<void(std::string)> v);
std::function<void(std::string)> gf7_3();`),
        classes: parseClass(`void cf7_0(std::valarray<double> v);
std::valarray<double> gf7_0();
void cf7_1(std::complex<double> v);
std::complex<double> gf7_1();
void cf7_2(std::function<int(int,int)> v);
std::function<int(int,int)> gf7_2();
void cf7_3(std::function<void(std::string)> v);
std::function<void(std::string)> gf7_3();`),
        funcs: parseFunction(`void cf7_0(std::valarray<double> v);
std::valarray<double> gf7_0();
void cf7_1(std::complex<double> v);
std::complex<double> gf7_1();
void cf7_2(std::function<int(int,int)> v);
std::function<int(int,int)> gf7_2();
void cf7_3(std::function<void(std::string)> v);
std::function<void(std::string)> gf7_3();`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 6);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0030 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0030 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number h2dtscpp_gen_0031
  * @tc.name h2dtscpp_gen_0031
  * @tc.desc h2dtscpp transParseObj：扩充-transParseObj：容器类型组 9 的转换结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('h2dtscpp_gen_0031', () => {
    try {
      const parseObj: ParseObj = {
        enums: parseEnum(`void cf8_0(std::vector<int> v);
std::vector<int> gf8_0();
void cf8_1(std::vector<std::string> v);
std::vector<std::string> gf8_1();
void cf8_2(std::vector<double> v);
std::vector<double> gf8_2();
void cf8_3(std::vector<bool> v);
std::vector<bool> gf8_3();`),
        unions: parseUnion(`void cf8_0(std::vector<int> v);
std::vector<int> gf8_0();
void cf8_1(std::vector<std::string> v);
std::vector<std::string> gf8_1();
void cf8_2(std::vector<double> v);
std::vector<double> gf8_2();
void cf8_3(std::vector<bool> v);
std::vector<bool> gf8_3();`),
        structs: parseStruct(`void cf8_0(std::vector<int> v);
std::vector<int> gf8_0();
void cf8_1(std::vector<std::string> v);
std::vector<std::string> gf8_1();
void cf8_2(std::vector<double> v);
std::vector<double> gf8_2();
void cf8_3(std::vector<bool> v);
std::vector<bool> gf8_3();`),
        classes: parseClass(`void cf8_0(std::vector<int> v);
std::vector<int> gf8_0();
void cf8_1(std::vector<std::string> v);
std::vector<std::string> gf8_1();
void cf8_2(std::vector<double> v);
std::vector<double> gf8_2();
void cf8_3(std::vector<bool> v);
std::vector<bool> gf8_3();`),
        funcs: parseFunction(`void cf8_0(std::vector<int> v);
std::vector<int> gf8_0();
void cf8_1(std::vector<std::string> v);
std::vector<std::string> gf8_1();
void cf8_2(std::vector<double> v);
std::vector<double> gf8_2();
void cf8_3(std::vector<bool> v);
std::vector<bool> gf8_3();`),
        types: [],
      };
      let transResult: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          transResult = transParseObj(parseObj);
        }
      });
      assert.ok(transResult);
      assert.strictEqual(transResult.funcs.length, 8);
      assert.strictEqual(transResult.classes.length, 0);
      assert.strictEqual(transResult.structs.length, 0);
      assert.strictEqual(transResult.enums.length, 0);
      assert.strictEqual(transResult.unions.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `h2dtscpp_gen_0031 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`h2dtscpp_gen_0031 执行异常: ${String(err)}`);
    }
  });

});
