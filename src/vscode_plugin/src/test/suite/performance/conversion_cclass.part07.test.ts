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
  vscode.window.showInformationMessage('Start Performance_C_Class_Suite part07.');

  /**
  * @tc.number c_class_0181
  * @tc.name c_class_0181
  * @tc.desc h2dts parseClass：扩充-规模：70 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0181', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsN070 {
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
    int p65;
    char p66;
    short p67;
    long p68;
    long long p69;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsN070');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 70);
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
      assert.strictEqual(objList[0].variableList[65].name, 'p65');
      assert.strictEqual(objList[0].variableList[65].type, 'int');
      assert.strictEqual(objList[0].variableList[66].name, 'p66');
      assert.strictEqual(objList[0].variableList[66].type, 'char');
      assert.strictEqual(objList[0].variableList[67].name, 'p67');
      assert.strictEqual(objList[0].variableList[67].type, 'short');
      assert.strictEqual(objList[0].variableList[68].name, 'p68');
      assert.strictEqual(objList[0].variableList[68].type, 'long');
      assert.strictEqual(objList[0].variableList[69].name, 'p69');
      assert.strictEqual(objList[0].variableList[69].type, 'long long');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0181 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0181 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0182
  * @tc.name c_class_0182
  * @tc.desc h2dts parseClass：扩充-规模：75 成员 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0182', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class ClsN075 {
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
    int p65;
    char p66;
    short p67;
    long p68;
    long long p69;
    float p70;
    double p71;
    bool p72;
    unsigned int p73;
    unsigned char p74;
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'ClsN075');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 75);
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
      assert.strictEqual(objList[0].variableList[65].name, 'p65');
      assert.strictEqual(objList[0].variableList[65].type, 'int');
      assert.strictEqual(objList[0].variableList[66].name, 'p66');
      assert.strictEqual(objList[0].variableList[66].type, 'char');
      assert.strictEqual(objList[0].variableList[67].name, 'p67');
      assert.strictEqual(objList[0].variableList[67].type, 'short');
      assert.strictEqual(objList[0].variableList[68].name, 'p68');
      assert.strictEqual(objList[0].variableList[68].type, 'long');
      assert.strictEqual(objList[0].variableList[69].name, 'p69');
      assert.strictEqual(objList[0].variableList[69].type, 'long long');
      assert.strictEqual(objList[0].variableList[70].name, 'p70');
      assert.strictEqual(objList[0].variableList[70].type, 'float');
      assert.strictEqual(objList[0].variableList[71].name, 'p71');
      assert.strictEqual(objList[0].variableList[71].type, 'double');
      assert.strictEqual(objList[0].variableList[72].name, 'p72');
      assert.strictEqual(objList[0].variableList[72].type, 'bool');
      assert.strictEqual(objList[0].variableList[73].name, 'p73');
      assert.strictEqual(objList[0].variableList[73].type, 'unsigned int');
      assert.strictEqual(objList[0].variableList[74].name, 'p74');
      assert.strictEqual(objList[0].variableList[74].type, 'unsigned char');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0182 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0182 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0183
  * @tc.name c_class_0183
  * @tc.desc h2dts parseClass：扩充-多类：同文件 2 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0183', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class Multi0_0 { int v0; };
class Multi0_1 { int v1; };;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 2);
      assert.strictEqual(objList[0].name, 'Multi0_0');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 1);
      assert.strictEqual(objList[0].variableList[0].name, 'v0');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.strictEqual(objList[1].name, 'Multi0_1');
      assert.strictEqual(objList[1].alias, '');
      assert.strictEqual(objList[1].variableList.length, 1);
      assert.strictEqual(objList[1].variableList[0].name, 'v1');
      assert.strictEqual(objList[1].variableList[0].type, 'int');
      assert.strictEqual(objList[1].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0183 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0183 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0184
  * @tc.name c_class_0184
  * @tc.desc h2dts parseClass：扩充-多类：同文件 3 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0184', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class Multi1_0 { int v0; };
class Multi1_1 { int v1; };
class Multi1_2 { int v2; };;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 3);
      assert.strictEqual(objList[0].name, 'Multi1_0');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 1);
      assert.strictEqual(objList[0].variableList[0].name, 'v0');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.strictEqual(objList[1].name, 'Multi1_1');
      assert.strictEqual(objList[1].alias, '');
      assert.strictEqual(objList[1].variableList.length, 1);
      assert.strictEqual(objList[1].variableList[0].name, 'v1');
      assert.strictEqual(objList[1].variableList[0].type, 'int');
      assert.strictEqual(objList[1].functionList.length, 0);
      assert.strictEqual(objList[2].name, 'Multi1_2');
      assert.strictEqual(objList[2].alias, '');
      assert.strictEqual(objList[2].variableList.length, 1);
      assert.strictEqual(objList[2].variableList[0].name, 'v2');
      assert.strictEqual(objList[2].variableList[0].type, 'int');
      assert.strictEqual(objList[2].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0184 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0184 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0185
  * @tc.name c_class_0185
  * @tc.desc h2dts parseClass：扩充-多类：同文件 4 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0185', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class Multi2_0 { int v0; };
class Multi2_1 { int v1; };
class Multi2_2 { int v2; };
class Multi2_3 { int v3; };;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 4);
      assert.strictEqual(objList[0].name, 'Multi2_0');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 1);
      assert.strictEqual(objList[0].variableList[0].name, 'v0');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.strictEqual(objList[1].name, 'Multi2_1');
      assert.strictEqual(objList[1].alias, '');
      assert.strictEqual(objList[1].variableList.length, 1);
      assert.strictEqual(objList[1].variableList[0].name, 'v1');
      assert.strictEqual(objList[1].variableList[0].type, 'int');
      assert.strictEqual(objList[1].functionList.length, 0);
      assert.strictEqual(objList[2].name, 'Multi2_2');
      assert.strictEqual(objList[2].alias, '');
      assert.strictEqual(objList[2].variableList.length, 1);
      assert.strictEqual(objList[2].variableList[0].name, 'v2');
      assert.strictEqual(objList[2].variableList[0].type, 'int');
      assert.strictEqual(objList[2].functionList.length, 0);
      assert.strictEqual(objList[3].name, 'Multi2_3');
      assert.strictEqual(objList[3].alias, '');
      assert.strictEqual(objList[3].variableList.length, 1);
      assert.strictEqual(objList[3].variableList[0].name, 'v3');
      assert.strictEqual(objList[3].variableList[0].type, 'int');
      assert.strictEqual(objList[3].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0185 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0185 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0186
  * @tc.name c_class_0186
  * @tc.desc h2dts parseClass：扩充-多类：同文件 5 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0186', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class Multi3_0 { int v0; };
class Multi3_1 { int v1; };
class Multi3_2 { int v2; };
class Multi3_3 { int v3; };
class Multi3_4 { int v4; };;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 5);
      assert.strictEqual(objList[0].name, 'Multi3_0');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 1);
      assert.strictEqual(objList[0].variableList[0].name, 'v0');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.strictEqual(objList[1].name, 'Multi3_1');
      assert.strictEqual(objList[1].alias, '');
      assert.strictEqual(objList[1].variableList.length, 1);
      assert.strictEqual(objList[1].variableList[0].name, 'v1');
      assert.strictEqual(objList[1].variableList[0].type, 'int');
      assert.strictEqual(objList[1].functionList.length, 0);
      assert.strictEqual(objList[2].name, 'Multi3_2');
      assert.strictEqual(objList[2].alias, '');
      assert.strictEqual(objList[2].variableList.length, 1);
      assert.strictEqual(objList[2].variableList[0].name, 'v2');
      assert.strictEqual(objList[2].variableList[0].type, 'int');
      assert.strictEqual(objList[2].functionList.length, 0);
      assert.strictEqual(objList[3].name, 'Multi3_3');
      assert.strictEqual(objList[3].alias, '');
      assert.strictEqual(objList[3].variableList.length, 1);
      assert.strictEqual(objList[3].variableList[0].name, 'v3');
      assert.strictEqual(objList[3].variableList[0].type, 'int');
      assert.strictEqual(objList[3].functionList.length, 0);
      assert.strictEqual(objList[4].name, 'Multi3_4');
      assert.strictEqual(objList[4].alias, '');
      assert.strictEqual(objList[4].variableList.length, 1);
      assert.strictEqual(objList[4].variableList[0].name, 'v4');
      assert.strictEqual(objList[4].variableList[0].type, 'int');
      assert.strictEqual(objList[4].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0186 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0186 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0187
  * @tc.name c_class_0187
  * @tc.desc h2dts parseClass：扩充-多类：同文件 6 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0187', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class Multi4_0 { int v0; };
class Multi4_1 { int v1; };
class Multi4_2 { int v2; };
class Multi4_3 { int v3; };
class Multi4_4 { int v4; };
class Multi4_5 { int v5; };;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 6);
      assert.strictEqual(objList[0].name, 'Multi4_0');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 1);
      assert.strictEqual(objList[0].variableList[0].name, 'v0');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.strictEqual(objList[1].name, 'Multi4_1');
      assert.strictEqual(objList[1].alias, '');
      assert.strictEqual(objList[1].variableList.length, 1);
      assert.strictEqual(objList[1].variableList[0].name, 'v1');
      assert.strictEqual(objList[1].variableList[0].type, 'int');
      assert.strictEqual(objList[1].functionList.length, 0);
      assert.strictEqual(objList[2].name, 'Multi4_2');
      assert.strictEqual(objList[2].alias, '');
      assert.strictEqual(objList[2].variableList.length, 1);
      assert.strictEqual(objList[2].variableList[0].name, 'v2');
      assert.strictEqual(objList[2].variableList[0].type, 'int');
      assert.strictEqual(objList[2].functionList.length, 0);
      assert.strictEqual(objList[3].name, 'Multi4_3');
      assert.strictEqual(objList[3].alias, '');
      assert.strictEqual(objList[3].variableList.length, 1);
      assert.strictEqual(objList[3].variableList[0].name, 'v3');
      assert.strictEqual(objList[3].variableList[0].type, 'int');
      assert.strictEqual(objList[3].functionList.length, 0);
      assert.strictEqual(objList[4].name, 'Multi4_4');
      assert.strictEqual(objList[4].alias, '');
      assert.strictEqual(objList[4].variableList.length, 1);
      assert.strictEqual(objList[4].variableList[0].name, 'v4');
      assert.strictEqual(objList[4].variableList[0].type, 'int');
      assert.strictEqual(objList[4].functionList.length, 0);
      assert.strictEqual(objList[5].name, 'Multi4_5');
      assert.strictEqual(objList[5].alias, '');
      assert.strictEqual(objList[5].variableList.length, 1);
      assert.strictEqual(objList[5].variableList[0].name, 'v5');
      assert.strictEqual(objList[5].variableList[0].type, 'int');
      assert.strictEqual(objList[5].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0187 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0187 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0188
  * @tc.name c_class_0188
  * @tc.desc h2dts parseClass：扩充-多类：同文件 7 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0188', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class Multi5_0 { int v0; };
class Multi5_1 { int v1; };
class Multi5_2 { int v2; };
class Multi5_3 { int v3; };
class Multi5_4 { int v4; };
class Multi5_5 { int v5; };
class Multi5_6 { int v6; };;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 7);
      assert.strictEqual(objList[0].name, 'Multi5_0');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 1);
      assert.strictEqual(objList[0].variableList[0].name, 'v0');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.strictEqual(objList[1].name, 'Multi5_1');
      assert.strictEqual(objList[1].alias, '');
      assert.strictEqual(objList[1].variableList.length, 1);
      assert.strictEqual(objList[1].variableList[0].name, 'v1');
      assert.strictEqual(objList[1].variableList[0].type, 'int');
      assert.strictEqual(objList[1].functionList.length, 0);
      assert.strictEqual(objList[2].name, 'Multi5_2');
      assert.strictEqual(objList[2].alias, '');
      assert.strictEqual(objList[2].variableList.length, 1);
      assert.strictEqual(objList[2].variableList[0].name, 'v2');
      assert.strictEqual(objList[2].variableList[0].type, 'int');
      assert.strictEqual(objList[2].functionList.length, 0);
      assert.strictEqual(objList[3].name, 'Multi5_3');
      assert.strictEqual(objList[3].alias, '');
      assert.strictEqual(objList[3].variableList.length, 1);
      assert.strictEqual(objList[3].variableList[0].name, 'v3');
      assert.strictEqual(objList[3].variableList[0].type, 'int');
      assert.strictEqual(objList[3].functionList.length, 0);
      assert.strictEqual(objList[4].name, 'Multi5_4');
      assert.strictEqual(objList[4].alias, '');
      assert.strictEqual(objList[4].variableList.length, 1);
      assert.strictEqual(objList[4].variableList[0].name, 'v4');
      assert.strictEqual(objList[4].variableList[0].type, 'int');
      assert.strictEqual(objList[4].functionList.length, 0);
      assert.strictEqual(objList[5].name, 'Multi5_5');
      assert.strictEqual(objList[5].alias, '');
      assert.strictEqual(objList[5].variableList.length, 1);
      assert.strictEqual(objList[5].variableList[0].name, 'v5');
      assert.strictEqual(objList[5].variableList[0].type, 'int');
      assert.strictEqual(objList[5].functionList.length, 0);
      assert.strictEqual(objList[6].name, 'Multi5_6');
      assert.strictEqual(objList[6].alias, '');
      assert.strictEqual(objList[6].variableList.length, 1);
      assert.strictEqual(objList[6].variableList[0].name, 'v6');
      assert.strictEqual(objList[6].variableList[0].type, 'int');
      assert.strictEqual(objList[6].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0188 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0188 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0189
  * @tc.name c_class_0189
  * @tc.desc h2dts parseClass：扩充-多类：同文件 8 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0189', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class Multi6_0 { int v0; };
class Multi6_1 { int v1; };
class Multi6_2 { int v2; };
class Multi6_3 { int v3; };
class Multi6_4 { int v4; };
class Multi6_5 { int v5; };
class Multi6_6 { int v6; };
class Multi6_7 { int v7; };;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 8);
      assert.strictEqual(objList[0].name, 'Multi6_0');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 1);
      assert.strictEqual(objList[0].variableList[0].name, 'v0');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.strictEqual(objList[1].name, 'Multi6_1');
      assert.strictEqual(objList[1].alias, '');
      assert.strictEqual(objList[1].variableList.length, 1);
      assert.strictEqual(objList[1].variableList[0].name, 'v1');
      assert.strictEqual(objList[1].variableList[0].type, 'int');
      assert.strictEqual(objList[1].functionList.length, 0);
      assert.strictEqual(objList[2].name, 'Multi6_2');
      assert.strictEqual(objList[2].alias, '');
      assert.strictEqual(objList[2].variableList.length, 1);
      assert.strictEqual(objList[2].variableList[0].name, 'v2');
      assert.strictEqual(objList[2].variableList[0].type, 'int');
      assert.strictEqual(objList[2].functionList.length, 0);
      assert.strictEqual(objList[3].name, 'Multi6_3');
      assert.strictEqual(objList[3].alias, '');
      assert.strictEqual(objList[3].variableList.length, 1);
      assert.strictEqual(objList[3].variableList[0].name, 'v3');
      assert.strictEqual(objList[3].variableList[0].type, 'int');
      assert.strictEqual(objList[3].functionList.length, 0);
      assert.strictEqual(objList[4].name, 'Multi6_4');
      assert.strictEqual(objList[4].alias, '');
      assert.strictEqual(objList[4].variableList.length, 1);
      assert.strictEqual(objList[4].variableList[0].name, 'v4');
      assert.strictEqual(objList[4].variableList[0].type, 'int');
      assert.strictEqual(objList[4].functionList.length, 0);
      assert.strictEqual(objList[5].name, 'Multi6_5');
      assert.strictEqual(objList[5].alias, '');
      assert.strictEqual(objList[5].variableList.length, 1);
      assert.strictEqual(objList[5].variableList[0].name, 'v5');
      assert.strictEqual(objList[5].variableList[0].type, 'int');
      assert.strictEqual(objList[5].functionList.length, 0);
      assert.strictEqual(objList[6].name, 'Multi6_6');
      assert.strictEqual(objList[6].alias, '');
      assert.strictEqual(objList[6].variableList.length, 1);
      assert.strictEqual(objList[6].variableList[0].name, 'v6');
      assert.strictEqual(objList[6].variableList[0].type, 'int');
      assert.strictEqual(objList[6].functionList.length, 0);
      assert.strictEqual(objList[7].name, 'Multi6_7');
      assert.strictEqual(objList[7].alias, '');
      assert.strictEqual(objList[7].variableList.length, 1);
      assert.strictEqual(objList[7].variableList[0].name, 'v7');
      assert.strictEqual(objList[7].variableList[0].type, 'int');
      assert.strictEqual(objList[7].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0189 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0189 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0190
  * @tc.name c_class_0190
  * @tc.desc h2dts parseClass：扩充-多类：同文件 10 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0190', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class Multi7_0 { int v0; };
class Multi7_1 { int v1; };
class Multi7_2 { int v2; };
class Multi7_3 { int v3; };
class Multi7_4 { int v4; };
class Multi7_5 { int v5; };
class Multi7_6 { int v6; };
class Multi7_7 { int v7; };
class Multi7_8 { int v8; };
class Multi7_9 { int v9; };;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 10);
      assert.strictEqual(objList[0].name, 'Multi7_0');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 1);
      assert.strictEqual(objList[0].variableList[0].name, 'v0');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.strictEqual(objList[1].name, 'Multi7_1');
      assert.strictEqual(objList[1].alias, '');
      assert.strictEqual(objList[1].variableList.length, 1);
      assert.strictEqual(objList[1].variableList[0].name, 'v1');
      assert.strictEqual(objList[1].variableList[0].type, 'int');
      assert.strictEqual(objList[1].functionList.length, 0);
      assert.strictEqual(objList[2].name, 'Multi7_2');
      assert.strictEqual(objList[2].alias, '');
      assert.strictEqual(objList[2].variableList.length, 1);
      assert.strictEqual(objList[2].variableList[0].name, 'v2');
      assert.strictEqual(objList[2].variableList[0].type, 'int');
      assert.strictEqual(objList[2].functionList.length, 0);
      assert.strictEqual(objList[3].name, 'Multi7_3');
      assert.strictEqual(objList[3].alias, '');
      assert.strictEqual(objList[3].variableList.length, 1);
      assert.strictEqual(objList[3].variableList[0].name, 'v3');
      assert.strictEqual(objList[3].variableList[0].type, 'int');
      assert.strictEqual(objList[3].functionList.length, 0);
      assert.strictEqual(objList[4].name, 'Multi7_4');
      assert.strictEqual(objList[4].alias, '');
      assert.strictEqual(objList[4].variableList.length, 1);
      assert.strictEqual(objList[4].variableList[0].name, 'v4');
      assert.strictEqual(objList[4].variableList[0].type, 'int');
      assert.strictEqual(objList[4].functionList.length, 0);
      assert.strictEqual(objList[5].name, 'Multi7_5');
      assert.strictEqual(objList[5].alias, '');
      assert.strictEqual(objList[5].variableList.length, 1);
      assert.strictEqual(objList[5].variableList[0].name, 'v5');
      assert.strictEqual(objList[5].variableList[0].type, 'int');
      assert.strictEqual(objList[5].functionList.length, 0);
      assert.strictEqual(objList[6].name, 'Multi7_6');
      assert.strictEqual(objList[6].alias, '');
      assert.strictEqual(objList[6].variableList.length, 1);
      assert.strictEqual(objList[6].variableList[0].name, 'v6');
      assert.strictEqual(objList[6].variableList[0].type, 'int');
      assert.strictEqual(objList[6].functionList.length, 0);
      assert.strictEqual(objList[7].name, 'Multi7_7');
      assert.strictEqual(objList[7].alias, '');
      assert.strictEqual(objList[7].variableList.length, 1);
      assert.strictEqual(objList[7].variableList[0].name, 'v7');
      assert.strictEqual(objList[7].variableList[0].type, 'int');
      assert.strictEqual(objList[7].functionList.length, 0);
      assert.strictEqual(objList[8].name, 'Multi7_8');
      assert.strictEqual(objList[8].alias, '');
      assert.strictEqual(objList[8].variableList.length, 1);
      assert.strictEqual(objList[8].variableList[0].name, 'v8');
      assert.strictEqual(objList[8].variableList[0].type, 'int');
      assert.strictEqual(objList[8].functionList.length, 0);
      assert.strictEqual(objList[9].name, 'Multi7_9');
      assert.strictEqual(objList[9].alias, '');
      assert.strictEqual(objList[9].variableList.length, 1);
      assert.strictEqual(objList[9].variableList[0].name, 'v9');
      assert.strictEqual(objList[9].variableList[0].type, 'int');
      assert.strictEqual(objList[9].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0190 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0190 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0191
  * @tc.name c_class_0191
  * @tc.desc h2dts parseClass：扩充-多类：同文件 12 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0191', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class Multi8_0 { int v0; };
class Multi8_1 { int v1; };
class Multi8_2 { int v2; };
class Multi8_3 { int v3; };
class Multi8_4 { int v4; };
class Multi8_5 { int v5; };
class Multi8_6 { int v6; };
class Multi8_7 { int v7; };
class Multi8_8 { int v8; };
class Multi8_9 { int v9; };
class Multi8_10 { int v10; };
class Multi8_11 { int v11; };;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 12);
      assert.strictEqual(objList[0].name, 'Multi8_0');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 1);
      assert.strictEqual(objList[0].variableList[0].name, 'v0');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.strictEqual(objList[1].name, 'Multi8_1');
      assert.strictEqual(objList[1].alias, '');
      assert.strictEqual(objList[1].variableList.length, 1);
      assert.strictEqual(objList[1].variableList[0].name, 'v1');
      assert.strictEqual(objList[1].variableList[0].type, 'int');
      assert.strictEqual(objList[1].functionList.length, 0);
      assert.strictEqual(objList[2].name, 'Multi8_2');
      assert.strictEqual(objList[2].alias, '');
      assert.strictEqual(objList[2].variableList.length, 1);
      assert.strictEqual(objList[2].variableList[0].name, 'v2');
      assert.strictEqual(objList[2].variableList[0].type, 'int');
      assert.strictEqual(objList[2].functionList.length, 0);
      assert.strictEqual(objList[3].name, 'Multi8_3');
      assert.strictEqual(objList[3].alias, '');
      assert.strictEqual(objList[3].variableList.length, 1);
      assert.strictEqual(objList[3].variableList[0].name, 'v3');
      assert.strictEqual(objList[3].variableList[0].type, 'int');
      assert.strictEqual(objList[3].functionList.length, 0);
      assert.strictEqual(objList[4].name, 'Multi8_4');
      assert.strictEqual(objList[4].alias, '');
      assert.strictEqual(objList[4].variableList.length, 1);
      assert.strictEqual(objList[4].variableList[0].name, 'v4');
      assert.strictEqual(objList[4].variableList[0].type, 'int');
      assert.strictEqual(objList[4].functionList.length, 0);
      assert.strictEqual(objList[5].name, 'Multi8_5');
      assert.strictEqual(objList[5].alias, '');
      assert.strictEqual(objList[5].variableList.length, 1);
      assert.strictEqual(objList[5].variableList[0].name, 'v5');
      assert.strictEqual(objList[5].variableList[0].type, 'int');
      assert.strictEqual(objList[5].functionList.length, 0);
      assert.strictEqual(objList[6].name, 'Multi8_6');
      assert.strictEqual(objList[6].alias, '');
      assert.strictEqual(objList[6].variableList.length, 1);
      assert.strictEqual(objList[6].variableList[0].name, 'v6');
      assert.strictEqual(objList[6].variableList[0].type, 'int');
      assert.strictEqual(objList[6].functionList.length, 0);
      assert.strictEqual(objList[7].name, 'Multi8_7');
      assert.strictEqual(objList[7].alias, '');
      assert.strictEqual(objList[7].variableList.length, 1);
      assert.strictEqual(objList[7].variableList[0].name, 'v7');
      assert.strictEqual(objList[7].variableList[0].type, 'int');
      assert.strictEqual(objList[7].functionList.length, 0);
      assert.strictEqual(objList[8].name, 'Multi8_8');
      assert.strictEqual(objList[8].alias, '');
      assert.strictEqual(objList[8].variableList.length, 1);
      assert.strictEqual(objList[8].variableList[0].name, 'v8');
      assert.strictEqual(objList[8].variableList[0].type, 'int');
      assert.strictEqual(objList[8].functionList.length, 0);
      assert.strictEqual(objList[9].name, 'Multi8_9');
      assert.strictEqual(objList[9].alias, '');
      assert.strictEqual(objList[9].variableList.length, 1);
      assert.strictEqual(objList[9].variableList[0].name, 'v9');
      assert.strictEqual(objList[9].variableList[0].type, 'int');
      assert.strictEqual(objList[9].functionList.length, 0);
      assert.strictEqual(objList[10].name, 'Multi8_10');
      assert.strictEqual(objList[10].alias, '');
      assert.strictEqual(objList[10].variableList.length, 1);
      assert.strictEqual(objList[10].variableList[0].name, 'v10');
      assert.strictEqual(objList[10].variableList[0].type, 'int');
      assert.strictEqual(objList[10].functionList.length, 0);
      assert.strictEqual(objList[11].name, 'Multi8_11');
      assert.strictEqual(objList[11].alias, '');
      assert.strictEqual(objList[11].variableList.length, 1);
      assert.strictEqual(objList[11].variableList[0].name, 'v11');
      assert.strictEqual(objList[11].variableList[0].type, 'int');
      assert.strictEqual(objList[11].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0191 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0191 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0192
  * @tc.name c_class_0192
  * @tc.desc h2dts parseClass：扩充-多类：同文件 15 个 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0192', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class Multi9_0 { int v0; };
class Multi9_1 { int v1; };
class Multi9_2 { int v2; };
class Multi9_3 { int v3; };
class Multi9_4 { int v4; };
class Multi9_5 { int v5; };
class Multi9_6 { int v6; };
class Multi9_7 { int v7; };
class Multi9_8 { int v8; };
class Multi9_9 { int v9; };
class Multi9_10 { int v10; };
class Multi9_11 { int v11; };
class Multi9_12 { int v12; };
class Multi9_13 { int v13; };
class Multi9_14 { int v14; };;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 15);
      assert.strictEqual(objList[0].name, 'Multi9_0');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 1);
      assert.strictEqual(objList[0].variableList[0].name, 'v0');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].functionList.length, 0);
      assert.strictEqual(objList[1].name, 'Multi9_1');
      assert.strictEqual(objList[1].alias, '');
      assert.strictEqual(objList[1].variableList.length, 1);
      assert.strictEqual(objList[1].variableList[0].name, 'v1');
      assert.strictEqual(objList[1].variableList[0].type, 'int');
      assert.strictEqual(objList[1].functionList.length, 0);
      assert.strictEqual(objList[2].name, 'Multi9_2');
      assert.strictEqual(objList[2].alias, '');
      assert.strictEqual(objList[2].variableList.length, 1);
      assert.strictEqual(objList[2].variableList[0].name, 'v2');
      assert.strictEqual(objList[2].variableList[0].type, 'int');
      assert.strictEqual(objList[2].functionList.length, 0);
      assert.strictEqual(objList[3].name, 'Multi9_3');
      assert.strictEqual(objList[3].alias, '');
      assert.strictEqual(objList[3].variableList.length, 1);
      assert.strictEqual(objList[3].variableList[0].name, 'v3');
      assert.strictEqual(objList[3].variableList[0].type, 'int');
      assert.strictEqual(objList[3].functionList.length, 0);
      assert.strictEqual(objList[4].name, 'Multi9_4');
      assert.strictEqual(objList[4].alias, '');
      assert.strictEqual(objList[4].variableList.length, 1);
      assert.strictEqual(objList[4].variableList[0].name, 'v4');
      assert.strictEqual(objList[4].variableList[0].type, 'int');
      assert.strictEqual(objList[4].functionList.length, 0);
      assert.strictEqual(objList[5].name, 'Multi9_5');
      assert.strictEqual(objList[5].alias, '');
      assert.strictEqual(objList[5].variableList.length, 1);
      assert.strictEqual(objList[5].variableList[0].name, 'v5');
      assert.strictEqual(objList[5].variableList[0].type, 'int');
      assert.strictEqual(objList[5].functionList.length, 0);
      assert.strictEqual(objList[6].name, 'Multi9_6');
      assert.strictEqual(objList[6].alias, '');
      assert.strictEqual(objList[6].variableList.length, 1);
      assert.strictEqual(objList[6].variableList[0].name, 'v6');
      assert.strictEqual(objList[6].variableList[0].type, 'int');
      assert.strictEqual(objList[6].functionList.length, 0);
      assert.strictEqual(objList[7].name, 'Multi9_7');
      assert.strictEqual(objList[7].alias, '');
      assert.strictEqual(objList[7].variableList.length, 1);
      assert.strictEqual(objList[7].variableList[0].name, 'v7');
      assert.strictEqual(objList[7].variableList[0].type, 'int');
      assert.strictEqual(objList[7].functionList.length, 0);
      assert.strictEqual(objList[8].name, 'Multi9_8');
      assert.strictEqual(objList[8].alias, '');
      assert.strictEqual(objList[8].variableList.length, 1);
      assert.strictEqual(objList[8].variableList[0].name, 'v8');
      assert.strictEqual(objList[8].variableList[0].type, 'int');
      assert.strictEqual(objList[8].functionList.length, 0);
      assert.strictEqual(objList[9].name, 'Multi9_9');
      assert.strictEqual(objList[9].alias, '');
      assert.strictEqual(objList[9].variableList.length, 1);
      assert.strictEqual(objList[9].variableList[0].name, 'v9');
      assert.strictEqual(objList[9].variableList[0].type, 'int');
      assert.strictEqual(objList[9].functionList.length, 0);
      assert.strictEqual(objList[10].name, 'Multi9_10');
      assert.strictEqual(objList[10].alias, '');
      assert.strictEqual(objList[10].variableList.length, 1);
      assert.strictEqual(objList[10].variableList[0].name, 'v10');
      assert.strictEqual(objList[10].variableList[0].type, 'int');
      assert.strictEqual(objList[10].functionList.length, 0);
      assert.strictEqual(objList[11].name, 'Multi9_11');
      assert.strictEqual(objList[11].alias, '');
      assert.strictEqual(objList[11].variableList.length, 1);
      assert.strictEqual(objList[11].variableList[0].name, 'v11');
      assert.strictEqual(objList[11].variableList[0].type, 'int');
      assert.strictEqual(objList[11].functionList.length, 0);
      assert.strictEqual(objList[12].name, 'Multi9_12');
      assert.strictEqual(objList[12].alias, '');
      assert.strictEqual(objList[12].variableList.length, 1);
      assert.strictEqual(objList[12].variableList[0].name, 'v12');
      assert.strictEqual(objList[12].variableList[0].type, 'int');
      assert.strictEqual(objList[12].functionList.length, 0);
      assert.strictEqual(objList[13].name, 'Multi9_13');
      assert.strictEqual(objList[13].alias, '');
      assert.strictEqual(objList[13].variableList.length, 1);
      assert.strictEqual(objList[13].variableList[0].name, 'v13');
      assert.strictEqual(objList[13].variableList[0].type, 'int');
      assert.strictEqual(objList[13].functionList.length, 0);
      assert.strictEqual(objList[14].name, 'Multi9_14');
      assert.strictEqual(objList[14].alias, '');
      assert.strictEqual(objList[14].variableList.length, 1);
      assert.strictEqual(objList[14].variableList[0].name, 'v14');
      assert.strictEqual(objList[14].variableList[0].type, 'int');
      assert.strictEqual(objList[14].functionList.length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0192 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0192 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0193
  * @tc.name c_class_0193
  * @tc.desc h2dts parseClass：扩充-typedef class 别名 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0193', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`typedef class NsCls000 {
    int v;
    void run();
} Alias000;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'NsCls000');
      assert.strictEqual(objList[0].alias, 'Alias000');
      assert.strictEqual(objList[0].variableList.length, 1);
      assert.strictEqual(objList[0].variableList[0].name, 'v');
      assert.strictEqual(objList[0].variableList[0].type, 'int');
      assert.strictEqual(objList[0].functionList.length, 1);
      assert.strictEqual(objList[0].functionList[0].name, 'run');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0193 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0193 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0194
  * @tc.name c_class_0194
  * @tc.desc h2dts parseClass：扩充-static 成员/方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0194', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class StaticCls001 {
    static char s;
    static char get();
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StaticCls001');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 1);
      assert.strictEqual(objList[0].variableList[0].name, 's');
      assert.strictEqual(objList[0].variableList[0].type, 'static char');
      assert.strictEqual(objList[0].functionList.length, 1);
      assert.strictEqual(objList[0].functionList[0].name, 'get');
      assert.strictEqual(objList[0].functionList[0].returns, 'static char');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0194 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0194 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0195
  * @tc.name c_class_0195
  * @tc.desc h2dts parseClass：扩充-namespace 内 class 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0195', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`namespace ns2 {
class Inner002 {
    short v;
    void run();
};
}`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Inner002');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 1);
      assert.strictEqual(objList[0].variableList[0].name, 'v');
      assert.strictEqual(objList[0].variableList[0].type, 'short');
      assert.strictEqual(objList[0].functionList.length, 1);
      assert.strictEqual(objList[0].functionList[0].name, 'run');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0195 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0195 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0196
  * @tc.name c_class_0196
  * @tc.desc h2dts parseClass：扩充-typedef class 别名 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0196', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`typedef class NsCls003 {
    long v;
    void run();
} Alias003;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'NsCls003');
      assert.strictEqual(objList[0].alias, 'Alias003');
      assert.strictEqual(objList[0].variableList.length, 1);
      assert.strictEqual(objList[0].variableList[0].name, 'v');
      assert.strictEqual(objList[0].variableList[0].type, 'long');
      assert.strictEqual(objList[0].functionList.length, 1);
      assert.strictEqual(objList[0].functionList[0].name, 'run');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0196 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0196 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0197
  * @tc.name c_class_0197
  * @tc.desc h2dts parseClass：扩充-static 成员/方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0197', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class StaticCls004 {
    static long long s;
    static long long get();
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StaticCls004');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 1);
      assert.strictEqual(objList[0].variableList[0].name, 's');
      assert.strictEqual(objList[0].variableList[0].type, 'static long long');
      assert.strictEqual(objList[0].functionList.length, 1);
      assert.strictEqual(objList[0].functionList[0].name, 'get');
      assert.strictEqual(objList[0].functionList[0].returns, 'static long long');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0197 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0197 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0198
  * @tc.name c_class_0198
  * @tc.desc h2dts parseClass：扩充-namespace 内 class 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0198', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`namespace ns5 {
class Inner005 {
    float v;
    void run();
};
}`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Inner005');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 1);
      assert.strictEqual(objList[0].variableList[0].name, 'v');
      assert.strictEqual(objList[0].variableList[0].type, 'float');
      assert.strictEqual(objList[0].functionList.length, 1);
      assert.strictEqual(objList[0].functionList[0].name, 'run');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0198 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0198 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0199
  * @tc.name c_class_0199
  * @tc.desc h2dts parseClass：扩充-typedef class 别名 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0199', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`typedef class NsCls006 {
    double v;
    void run();
} Alias006;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'NsCls006');
      assert.strictEqual(objList[0].alias, 'Alias006');
      assert.strictEqual(objList[0].variableList.length, 1);
      assert.strictEqual(objList[0].variableList[0].name, 'v');
      assert.strictEqual(objList[0].variableList[0].type, 'double');
      assert.strictEqual(objList[0].functionList.length, 1);
      assert.strictEqual(objList[0].functionList[0].name, 'run');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0199 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0199 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0200
  * @tc.name c_class_0200
  * @tc.desc h2dts parseClass：扩充-static 成员/方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0200', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class StaticCls007 {
    static bool s;
    static bool get();
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StaticCls007');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 1);
      assert.strictEqual(objList[0].variableList[0].name, 's');
      assert.strictEqual(objList[0].variableList[0].type, 'static bool');
      assert.strictEqual(objList[0].functionList.length, 1);
      assert.strictEqual(objList[0].functionList[0].name, 'get');
      assert.strictEqual(objList[0].functionList[0].returns, 'static bool');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0200 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0200 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0201
  * @tc.name c_class_0201
  * @tc.desc h2dts parseClass：扩充-namespace 内 class 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0201', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`namespace ns8 {
class Inner008 {
    unsigned int v;
    void run();
};
}`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Inner008');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 1);
      assert.strictEqual(objList[0].variableList[0].name, 'v');
      assert.strictEqual(objList[0].variableList[0].type, 'unsigned int');
      assert.strictEqual(objList[0].functionList.length, 1);
      assert.strictEqual(objList[0].functionList[0].name, 'run');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0201 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0201 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0202
  * @tc.name c_class_0202
  * @tc.desc h2dts parseClass：扩充-typedef class 别名 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0202', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`typedef class NsCls009 {
    unsigned char v;
    void run();
} Alias009;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'NsCls009');
      assert.strictEqual(objList[0].alias, 'Alias009');
      assert.strictEqual(objList[0].variableList.length, 1);
      assert.strictEqual(objList[0].variableList[0].name, 'v');
      assert.strictEqual(objList[0].variableList[0].type, 'unsigned char');
      assert.strictEqual(objList[0].functionList.length, 1);
      assert.strictEqual(objList[0].functionList[0].name, 'run');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0202 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0202 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0203
  * @tc.name c_class_0203
  * @tc.desc h2dts parseClass：扩充-static 成员/方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0203', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class StaticCls010 {
    static unsigned short s;
    static unsigned short get();
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StaticCls010');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 1);
      assert.strictEqual(objList[0].variableList[0].name, 's');
      assert.strictEqual(objList[0].variableList[0].type, 'static unsigned short');
      assert.strictEqual(objList[0].functionList.length, 1);
      assert.strictEqual(objList[0].functionList[0].name, 'get');
      assert.strictEqual(objList[0].functionList[0].returns, 'static unsigned short');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0203 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0203 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0204
  * @tc.name c_class_0204
  * @tc.desc h2dts parseClass：扩充-namespace 内 class 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0204', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`namespace ns11 {
class Inner011 {
    unsigned long v;
    void run();
};
}`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Inner011');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 1);
      assert.strictEqual(objList[0].variableList[0].name, 'v');
      assert.strictEqual(objList[0].variableList[0].type, 'unsigned long');
      assert.strictEqual(objList[0].functionList.length, 1);
      assert.strictEqual(objList[0].functionList[0].name, 'run');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0204 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0204 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0205
  * @tc.name c_class_0205
  * @tc.desc h2dts parseClass：扩充-typedef class 别名 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0205', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`typedef class NsCls012 {
    unsigned long long v;
    void run();
} Alias012;`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'NsCls012');
      assert.strictEqual(objList[0].alias, 'Alias012');
      assert.strictEqual(objList[0].variableList.length, 1);
      assert.strictEqual(objList[0].variableList[0].name, 'v');
      assert.strictEqual(objList[0].variableList[0].type, 'unsigned long long');
      assert.strictEqual(objList[0].functionList.length, 1);
      assert.strictEqual(objList[0].functionList[0].name, 'run');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0205 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0205 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0206
  * @tc.name c_class_0206
  * @tc.desc h2dts parseClass：扩充-static 成员/方法 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0206', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`class StaticCls013 {
    static signed char s;
    static signed char get();
};`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'StaticCls013');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 1);
      assert.strictEqual(objList[0].variableList[0].name, 's');
      assert.strictEqual(objList[0].variableList[0].type, 'static signed char');
      assert.strictEqual(objList[0].functionList.length, 1);
      assert.strictEqual(objList[0].functionList[0].name, 'get');
      assert.strictEqual(objList[0].functionList[0].returns, 'static signed char');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0206 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0206 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_class_0207
  * @tc.name c_class_0207
  * @tc.desc h2dts parseClass：扩充-namespace 内 class 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('c_class_0207', () => {
    try {
      let objList: any;
      const localLoop = PARSE_LOOP;
      const elapsed = measureElapsed(() => {
        for (let i = 0; i < localLoop; i++) {
          objList = parseClass(`namespace ns14 {
class Inner014 {
    signed short v;
    void run();
};
}`);
        }
      });
      assert.ok(objList);
      assert.strictEqual(objList.length, 1);
      assert.strictEqual(objList[0].name, 'Inner014');
      assert.strictEqual(objList[0].alias, '');
      assert.strictEqual(objList[0].variableList.length, 1);
      assert.strictEqual(objList[0].variableList[0].name, 'v');
      assert.strictEqual(objList[0].variableList[0].type, 'signed short');
      assert.strictEqual(objList[0].functionList.length, 1);
      assert.strictEqual(objList[0].functionList[0].name, 'run');
      assert.strictEqual(objList[0].functionList[0].returns, 'void');
      assert.strictEqual((objList[0].functionList[0].parameters || []).length, 0);
      assert.ok(
        elapsed < PARSE_TOTAL_MS,
        `c_class_0207 总耗时 ${elapsed}ms 超过阈值 ${PARSE_TOTAL_MS}ms（次数 ${localLoop}）`
      );
    } catch (err) {
      assert.fail(`c_class_0207 执行异常: ${String(err)}`);
    }
  });

});
