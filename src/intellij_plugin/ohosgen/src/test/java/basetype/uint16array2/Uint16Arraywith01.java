/*
 * Copyright (c) 2026 Kaihong Digital.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package basetype.uint16array2;

import basetype.common.BasTest;
import basetype.common.RangeError;
import basetype.common.Uint16Array;

import org.junit.jupiter.api.Test;

/**
 * Uint16Arraywith01 —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint16Arraywith01 extends BasTest {

    @Test
    void testUint16ArrayWithPart1001() {
    Uint16Array arr = Uint16Array.of(1017, 2019, 3023);
    int val = 99;
    Uint16Array result = arr.with(1, val);
    assertEqual(99, result.get(1));}

    @Test
    void testUint16ArrayWithPart1002() {
    Uint16Array arr = Uint16Array.of(1034, 2038, 3046);
    int val = 5;
    Uint16Array result = arr.with(0, val);
    assertEqual(5, result.get(0));}

    @Test
    void testUint16ArrayWithPart1003() {
    Uint16Array arr = Uint16Array.of(1051, 2057, 3069);
    int val = 9;
    Uint16Array result = arr.with(2, val);
    assertEqual(9, result.get(2));}

    @Test
    void testUint16ArrayWithPart1004() {
    Uint16Array arr = Uint16Array.of(100);
    int val = 200;
    Uint16Array result = arr.with(0, val);
    assertEqual(200, result.get(0));}

    @Test
    void testUint16ArrayWithPart1005() {
    Uint16Array arr = Uint16Array.of(11, 22, 33, 44, 55);
    int val = 255;
    Uint16Array result = arr.with(4, val);
    assertEqual(255, result.get(4));}

    @Test
    void testUint16ArrayWithPart1006() {
    Uint16Array arr = Uint16Array.of(6, 12, 18, 24, 30);
    int val = 128;
    Uint16Array result = arr.with(3, val);
    assertEqual(128, result.get(3));}

    @Test
    void testUint16ArrayWithPart1007() {
    Uint16Array arr = Uint16Array.of(1068, 2076, 3092);
    int val = 99;
    Uint16Array result = arr.with(-1, val);
    assertEqual(1068, result.get(0));
    assertEqual(2076, result.get(1));
    assertEqual(val, result.get(2));
    assertEqual(3092, arr.get(2));}

    @Test
    void testUint16ArrayWithPart1008() {
    Uint16Array arr = Uint16Array.of(1, 48, 96);
    int val = 76;
    Uint16Array result = arr.with(-3, val);
    assertEqual(val, result.get(0));
    assertEqual(48, result.get(1));
    assertEqual(96, result.get(2));
    assertEqual(1, arr.get(0));}

    @Test
    void testUint16ArrayWithPart1009() {
    Uint16Array arr = Uint16Array.of(1085, 2095, 3115);
    int val = 99;
    try {
    arr.with(-4, val);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());}
    }

    @Test
    void testUint16ArrayWithPart1010() {
    Uint16Array arr = Uint16Array.of(1102, 2114, 3138);
    int val = 99;
    try {
    arr.with(-1000, val);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());}
    }

    @Test
    void testUint16ArrayWithPart1011() {
    Uint16Array arr = Uint16Array.of(1119, 2133, 3161);
    int val = 99;
    try {
    arr.with(3, val);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());}
    }

    @Test
    void testUint16ArrayWithPart1012() {
    Uint16Array arr = Uint16Array.of(1136, 2152, 3184);
    int val = 99;
    try {
    arr.with(4, val);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());}
    }

    @Test
    void testUint16ArrayWithPart1013() {
    Uint16Array arr = Uint16Array.of(1153, 2171, 3207);
    int val = 99;
    try {
    arr.with(100000, val);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());}
    }

    @Test
    void testUint16ArrayWithPart1014() {
    Uint16Array arr = new Uint16Array();
    int val = 99;
    try {
    arr.with(0, val);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());}
    }

    @Test
    void testUint16ArrayWithPart1015() {
    Uint16Array arr = Uint16Array.of(1170, 2190, 3230);
    int val = 0;
    Uint16Array result = arr.with(0, val);
    assertEqual(0, result.get(0));}

    @Test
    void testUint16ArrayWithPart1016() {
    Uint16Array arr = Uint16Array.of(1187, 2209, 3253);
    int val = 1;
    Uint16Array result = arr.with(0, val);
    assertEqual(1, result.get(0));}

    @Test
    void testUint16ArrayWithPart1017() {
    Uint16Array arr = Uint16Array.of(1204, 2228, 3276);
    int val = 127;
    Uint16Array result = arr.with(0, val);
    assertEqual(127, result.get(0));}

    @Test
    void testUint16ArrayWithPart1018() {
    Uint16Array arr = Uint16Array.of(1221, 2247, 3299);
    int val = 128;
    Uint16Array result = arr.with(0, val);
    assertEqual(128, result.get(0));}

    @Test
    void testUint16ArrayWithPart1019() {
    Uint16Array arr = Uint16Array.of(1238, 2266, 3322);
    int val = 255;
    Uint16Array result = arr.with(0, val);
    assertEqual(255, result.get(0));}

    @Test
    void testUint16ArrayWithPart1020() {
    Uint16Array arr = Uint16Array.of(1255, 2285, 3345);
    int val = 0x0F;
    Uint16Array result = arr.with(0, val);
    assertEqual(15, result.get(0));}

    @Test
    void testUint16ArrayWithPart1021() {
    Uint16Array arr = Uint16Array.of(1272, 2304, 3368);
    int val = 0xFF;
    Uint16Array result = arr.with(0, val);
    assertEqual(255, result.get(0));}

    @Test
    void testUint16ArrayWithPart1022() {
    Uint16Array arr = Uint16Array.of(1289, 2323, 3391);
    int val = 0b00001111;
    Uint16Array result = arr.with(0, val);
    assertEqual(15, result.get(0));}

    @Test
    void testUint16ArrayWithPart1023() {
    Uint16Array arr = Uint16Array.of(1306, 2342, 3414);
    int val = 0b11111111;
    Uint16Array result = arr.with(0, val);
    assertEqual(255, result.get(0));}

    @Test
    void testUint16ArrayWithPart1024() {
    Uint16Array arr = Uint16Array.of(1323, 2361, 3437);
    int val = 0377;
    Uint16Array result = arr.with(0, val);
    assertEqual(255, result.get(0));}

    @Test
    void testUint16ArrayWithPart1025() {
    Uint16Array arr = Uint16Array.of(1340, 2380, 3460);
    int val = 65535;
    Uint16Array result = arr.with(0, val);
    assertEqual(65535, result.get(0));}

    @Test
    void testUint16ArrayWithPart1026() {
    Uint16Array arr = Uint16Array.of(1357, 2399, 3483);
    int val = 65536;
    Uint16Array result = arr.with(0, val);
    assertEqual(0, result.get(0));}

    @Test
    void testUint16ArrayWithPart1027() {
    Uint16Array arr = Uint16Array.of(1374, 2418, 3506);
    int val = -1;
    Uint16Array result = arr.with(0, val);
    assertEqual(65535, result.get(0));}

    @Test
    void testUint16ArrayWithPart1028() {
    Uint16Array arr = Uint16Array.of(1391, 2437, 3529);
    int val = -65536;
    Uint16Array result = arr.with(0, val);
    assertEqual(0, result.get(0));}

    @Test
    void testUint16ArrayWithPart1029() {
    Uint16Array arr = Uint16Array.of(1408, 2456, 3552);
    int val = 0x10000;
    Uint16Array result = arr.with(0, val);
    assertEqual(0, result.get(0));}

    @Test
    void testUint16ArrayWithPart1030() {
    Uint16Array arr = Uint16Array.of(1425, 2475, 3575);
    int val = 0xFFFF;
    Uint16Array result = arr.with(0, val);
    assertEqual(65535, result.get(0));}

    @Test
    void testUint16ArrayWithPart1031() {
    Uint16Array arr = Uint16Array.of(1442, 2494, 3598);
    int val = 0x1FFFF;
    Uint16Array result = arr.with(0, val);
    assertEqual(65535, result.get(0));}

    @Test
    void testUint16ArrayWithPart1032() {
    Uint16Array arr = Uint16Array.of(1459, 2513, 3621);
    int val = 131071;
    Uint16Array result = arr.with(0, val);
    assertEqual(65535, result.get(0));}

    @Test
    void testUint16ArrayWithPart1033() {
    Uint16Array arr = Uint16Array.of(1476, 2532, 3644);
    int val = -32768;
    Uint16Array result = arr.with(0, val);
    assertEqual(32768, result.get(0));}

    @Test
    void testUint16ArrayWithPart1034() {
    Uint16Array arr = Uint16Array.of(1493, 2551, 3667);
    int val = 65535 + 65536;
    Uint16Array result = arr.with(0, val);
    assertEqual(65535, result.get(0));}

    @Test
    void testUint16ArrayWithPart1035() {
    Uint16Array arr = Uint16Array.of(1510, 2570, 3690);
    int val = 2 * 65536;
    Uint16Array result = arr.with(0, val);
    assertEqual(0, result.get(0));}

    @Test
    void testUint16ArrayWithPart1036() {
    Uint16Array arr = Uint16Array.of(1527, 2589, 3713);
    int val = -2;
    Uint16Array result = arr.with(0, val);
    assertEqual(65534, result.get(0));}

    @Test
    void testUint16ArrayWithPart1037() {
    Uint16Array arr = Uint16Array.of(1544, 2608, 3736);
    int val = 65537;
    Uint16Array result = arr.with(0, val);
    assertEqual(1, result.get(0));}

    @Test
    void testUint16ArrayWithPart1038() {
    Uint16Array arr = Uint16Array.of(1561, 2627, 3759);
    int val = -65535;
    Uint16Array result = arr.with(0, val);
    assertEqual(1, result.get(0));}

    @Test
    void testUint16ArrayWithPart1039() {
    Uint16Array arr = Uint16Array.of(1578, 2646, 3782);
    int val = 0x00;
    Uint16Array result = arr.with(0, val);
    assertEqual(0, result.get(0));}

    @Test
    void testUint16ArrayWithPart1040() {
    Uint16Array arr = Uint16Array.of(1595, 2665, 3805);
    int val = 0b0;
    Uint16Array result = arr.with(0, val);
    assertEqual(0, result.get(0));}

    @Test
    void testUint16ArrayWithPart1041() {
    Uint16Array arr = Uint16Array.of(1612, 2684, 3828);
    int val = 0b1111111111111111;
    Uint16Array result = arr.with(0, val);
    assertEqual(65535, result.get(0));}

    @Test
    void testUint16ArrayWithPart1042() {
    Uint16Array arr = Uint16Array.of(1629, 2703, 3851);
    int val = 0177777;
    Uint16Array result = arr.with(0, val);
    assertEqual(65535, result.get(0));}

    @Test
    void testUint16ArrayWithPart1043() {
    Uint16Array arr = Uint16Array.of(1646, 2722, 3874);
    int val = 00;
    Uint16Array result = arr.with(0, val);
    assertEqual(0, result.get(0));}

    @Test
    void testUint16ArrayWithPart1044() {
    Uint16Array arr = Uint16Array.of(1663, 2741, 3897);
    int val = 0x8000;
    Uint16Array result = arr.with(0, val);
    assertEqual(32768, result.get(0));}

    @Test
    void testUint16ArrayWithPart1045() {
    Uint16Array arr = Uint16Array.of(1680, 2760, 3920);
    int val = 0100000;
    Uint16Array result = arr.with(0, val);
    assertEqual(32768, result.get(0));}

    @Test
    void testUint16ArrayWithPart1046() {
    Uint16Array arr = Uint16Array.of(1697, 2779, 3943);
    int val = 0xABCD;
    Uint16Array result = arr.with(0, val);
    assertEqual(43981, result.get(0));}

    @Test
    void testUint16ArrayWithPart1047() {
    Uint16Array arr = Uint16Array.of(1714, 2798, 3966);
    int val = 0x5555;
    Uint16Array result = arr.with(0, val);
    assertEqual(21845, result.get(0));}

    @Test
    void testUint16ArrayWithPart1048() {
    Uint16Array arr = Uint16Array.of(1731, 2817, 3989);
    int val = 99;
    Uint16Array result = arr.with(1, val);
    assertEqual(val, result.get(1));
    assertEqual(2817, arr.get(1));}

    @Test
    void testUint16ArrayWithPart1049() {
    Uint16Array arr = Uint16Array.of(1748, 2836, 4012);
    int val = 99;
    Uint16Array result = arr.with(1, val);
    assertEqual(arr.length(), result.length());
    assertEqual("1748,99,4012", result.join(","));
    assertNotEqual(arr, result);
    assertNotEqual(arr.buffer(), result.buffer());
    assertEqual("1748,2836,4012", arr.join(","));}

    @Test
    void testUint16ArrayWithPart1050() {
    Uint16Array arr = Uint16Array.of(49152, 7, 32001, 88);
    int val = 605;
    Uint16Array result = arr.with(2, val);
    assertNotEqual(arr, result);}

    @Test
    void testUint16ArrayWithPart1051() {
    Uint16Array arr = Uint16Array.of(901, 65534, 42, 17000, 3);
    int val = 808;
    Uint16Array result = arr.with(3, val);
    assertNotEqual(arr.buffer(), result.buffer());}

    @Test
    void testUint16ArrayWithPart1052() {
    Uint16Array arr = Uint16Array.of(1765, 2855, 4035);
    int val = 77;
    Uint16Array result = arr.with(2, val);
    assertEqual(77, result.get(2));}

    @Test
    void testUint16ArrayWithPart1053() {
    Uint16Array arr = Uint16Array.of(1782, 2874, 4058);
    int val = 99;
    Uint16Array result = arr.with(1, val);
    assertEqual(1782, result.get(0));
    assertEqual(4058, result.get(2));}

    @Test
    void testUint16ArrayWithPart1054() {
    Uint16Array arr = Uint16Array.of(60001, 14, 4095, 222);
    int val = 50000;
    Uint16Array result = arr.with(0, val);
    assertEqual("50000,14,4095,222", result.join(","));
    assertEqual(60001, arr.get(0));
    assertEqual(14, arr.get(1));
    assertEqual(4095, arr.get(2));
    assertEqual(222, arr.get(3));}

    @Test
    void testUint16ArrayWithPart1055() {
    Uint16Array arr = Uint16Array.of(17, 60999, 404, 2, 33008, 71);
    int val = 12345;
    Uint16Array result = arr.with(4, val);
    assertEqual(6, result.length());
    assertEqual(12345, result.get(4));
    assertEqual("17,60999,404,2,33008,71", arr.join(","));}

    @Test
    void testUint16ArrayWithPart1056() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    int val = 200;
    Uint16Array result = arr.with(0, val);
    assertEqual(200, result.get(0));
    assertEqual(20, result.get(1));
    assertEqual(30, result.get(2));
    assertEqual(40, result.get(3));
    assertEqual(50, result.get(4));}

    @Test
    void testUint16ArrayWithPart1057() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    int val = 200;
    Uint16Array result = arr.with(4, val);
    assertEqual(10, result.get(0));
    assertEqual(20, result.get(1));
    assertEqual(30, result.get(2));
    assertEqual(40, result.get(3));
    assertEqual(200, result.get(4));}

    @Test
    void testUint16ArrayWithPart1058() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    int val = 200;
    Uint16Array result = arr.with(2, val);
    assertEqual(10, result.get(0));
    assertEqual(20, result.get(1));
    assertEqual(200, result.get(2));
    assertEqual(40, result.get(3));
    assertEqual(50, result.get(4));}

    @Test
    void testUint16ArrayWithPart1059() {
    Uint16Array arr = Uint16Array.of(1799, 2893, 4081);
    int val = 99;
    Uint16Array result = arr.with(1, val);
    assertEqual(val, result.get(1));}

    @Test
    void testUint16ArrayWithPart1060() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    int val = 99;
    Uint16Array result = arr.with(-1, val);
    assertEqual(10, result.get(0));
    assertEqual(20, result.get(1));
    assertEqual(30, result.get(2));
    assertEqual(40, result.get(3));
    assertEqual(val, result.get(4));
    assertEqual(50, arr.get(4));}

    @Test
    void testUint16ArrayWithPart1061() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    int val = 99;
    try {
    arr.with(5, val);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());}
    }

    @Test
    void testUint16ArrayWithPart1062() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    int val = 99;
    try {
    arr.with(15, val);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());}
    }

    @Test
    void testUint16ArrayWithPart1063() {
    Uint16Array arr = Uint16Array.of(1816, 2912, 4104);
    int val = 99;
    try {
    arr.with(0x7FFFFFFF, val);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());}
    }

    @Test
    void testUint16ArrayWithPart1064() {
    Uint16Array arr = Uint16Array.of(1833, 2931, 4127);
    int val = 99;
    try {
    arr.with(-5, val);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());}
    }

    @Test
    void testUint16ArrayWithPart1065() {
    Uint16Array arr = Uint16Array.of(1850, 2950, 4150);
    int val = 65535;
    Uint16Array result = arr.with(0, val);
    assertEqual(65535, result.get(0));
    assertEqual(2950, result.get(1));
    assertEqual(4150, result.get(2));}

    @Test
    void testUint16ArrayWithPart1066() {
    Uint16Array arr = Uint16Array.of(1867, 2969, 4173);
    int val = 65536;
    Uint16Array result = arr.with(2, val);
    assertEqual(1867, result.get(0));
    assertEqual(2969, result.get(1));
    assertEqual(0, result.get(2));}

    @Test
    void testUint16ArrayWithPart1067() {
    Uint16Array arr = Uint16Array.of(1884, 2988, 4196);
    int val = -1;
    Uint16Array result = arr.with(0, val);
    assertEqual(65535, result.get(0));
    assertEqual(2988, result.get(1));
    assertEqual(4196, result.get(2));}

    @Test
    void testUint16ArrayWithPart1068() {
    Uint16Array arr = Uint16Array.of(1901, 3007, 4219);
    int val = 0xFFFF;
    Uint16Array result = arr.with(1, val);
    assertEqual(1901, result.get(0));
    assertEqual(65535, result.get(1));
    assertEqual(4219, result.get(2));}

    @Test
    void testUint16ArrayWithPart1069() {
    Uint16Array arr = Uint16Array.of(1918, 3026, 4242);
    int val = 0x10000;
    Uint16Array result = arr.with(1, val);
    assertEqual(1918, result.get(0));
    assertEqual(0, result.get(1));
    assertEqual(4242, result.get(2));}

    @Test
    void testUint16ArrayWithPart1070() {
    Uint16Array arr = Uint16Array.of(1935, 3045, 4265);
    int v1 = 100;
    int v2 = 200;
    Uint16Array r1 = arr.with(0, v1);
    Uint16Array r2 = arr.with(2, v2);
    assertEqual(100, r1.get(0));
    assertEqual(200, r2.get(2));}

    @Test
    void testUint16ArrayWithPart1071() {
    Uint16Array arr = Uint16Array.of(1952, 3064, 4288);
    int v1 = 100;
    int v2 = 200;
    Uint16Array result = arr.with(0, v1).with(1, v2);
    assertEqual(100, result.get(0));
    assertEqual(200, result.get(1));
    assertEqual(4288, result.get(2));}

    @Test
    void testUint16ArrayWithPart1072() {
    Uint16Array arr = Uint16Array.of(1969, 3083, 4311);
    int v1 = 100;
    int v2 = 200;
    Uint16Array r1 = arr.with(0, v1);
    Uint16Array r2 = arr.with(0, v2);
    assertEqual(100, r1.get(0));
    assertEqual(200, r2.get(0));
    assertEqual(1969, arr.get(0));}

    @Test
    void testUint16ArrayWithPart1073() {
    Uint16Array arr = Uint16Array.of(5, 10, 15, 20);
    int val = 50;
    Uint16Array result = arr.with(2, val);
    assertEqual(50, result.get(2));
    assertEqual(5, result.get(0));
    assertEqual(20, result.get(3));}

    @Test
    void testUint16ArrayWithPart1074() {
    int[] source = new int[] {1, 2, 3, 4};
    Uint16Array arr = Uint16Array.from(source);
    int val = 99;
    Uint16Array result = arr.with(1, val);
    assertEqual(99, result.get(1));
    assertEqual(1, result.get(0));
    assertEqual(3, result.get(2));}

    @Test
    void testUint16ArrayWithPart1075() {
    Uint16Array arr = new Uint16Array(4);
    int val = 55;
    Uint16Array result = arr.with(3, val);
    assertEqual(0, result.get(0));
    assertEqual(0, result.get(1));
    assertEqual(0, result.get(2));
    assertEqual(55, result.get(3));}

    @Test
    void testUint16ArrayWithPart1076() {
    Uint16Array src = Uint16Array.of(1, 2, 3);
    Uint16Array arr = new Uint16Array(src);
    int val = 100;
    Uint16Array result = arr.with(0, val);
    assertEqual(100, result.get(0));
    assertEqual(1, arr.get(0));}

    @Test
    void testUint16ArrayWithPart1077() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    Uint16Array r0 = arr.with(0, 10);
    Uint16Array r1 = arr.with(1, 20);
    Uint16Array r2 = arr.with(2, 30);
    assertEqual(10, r0.get(0));
    assertEqual(20, r1.get(1));
    assertEqual(30, r2.get(2));}

    @Test
    void testUint16ArrayWithPart1078() {
    Uint16Array arr = Uint16Array.of(0, 0, 0);
    int val = 0x7FFF;
    Uint16Array result = arr.with(1, val);
    assertEqual(32767, result.get(1));}

    @Test
    void testUint16ArrayWithPart1079() {
    Uint16Array arr = Uint16Array.of(0, 0, 0);
    int val = 0x8000;
    Uint16Array result = arr.with(1, val);
    assertEqual(32768, result.get(1));}

    @Test
    void testUint16ArrayWithPart1080() {
    Uint16Array arr = Uint16Array.of(50001, 6, 712, 40960, 93);
    int val = 1205;
    Uint16Array result = arr.with(1, val);
    assertEqual("50001,1205,712,40960,93", result.join(","));
    assertNotEqual(arr, result);
    assertEqual("50001,6,712,40960,93", arr.join(","));}

    @Test
    void testUint16ArrayWithPart1081() {
    Uint16Array arr = Uint16Array.of(1986, 3102, 4334);
    int val = -65537;
    Uint16Array result = arr.with(0, val);
    assertEqual(65535, result.get(0));}

    @Test
    void testUint16ArrayWithPart1082() {
    Uint16Array arr = Uint16Array.of(2003, 3121, 4357);
    int val = 65534;
    Uint16Array result = arr.with(0, val);
    assertEqual(65534, result.get(0));
    assertEqual(3121, result.get(1));
    assertEqual(4357, result.get(2));
    assertEqual(arr.length(), result.length());
    assertNotEqual(arr, result);
    assertNotEqual(arr.buffer(), result.buffer());
    assertEqual("2003,3121,4357", arr.join(","));}

    @Test
    void testUint16ArrayWithPart1083() {
    Uint16Array arr = Uint16Array.of(2020, 3140, 4380);
    int val = 65538;
    Uint16Array result = arr.with(0, val);
    assertEqual(2, result.get(0));}

    @Test
    void testUint16ArrayWithPart1084() {
    Uint16Array arr = Uint16Array.of(2037, 3159, 4403);
    int val = -3;
    Uint16Array result = arr.with(0, val);
    assertEqual(65533, result.get(0));}

    @Test
    void testUint16ArrayWithPart1085() {
    Uint16Array arr = Uint16Array.of(2054, 3178, 4426);
    int val = 0x10001;
    Uint16Array result = arr.with(0, val);
    assertEqual(1, result.get(0));}

    @Test
    void testUint16ArrayWithPart1086() {
    Uint16Array arr = Uint16Array.of(2071, 3197, 4449);
    int val = 0x2FFFF;
    Uint16Array result = arr.with(0, val);
    assertEqual(65535, result.get(0));}

    @Test
    void testUint16ArrayWithPart1087() {
    Uint16Array arr = Uint16Array.of(2088, 3216, 4472);
    int val = 0x10000 + 1;
    Uint16Array result = arr.with(0, val);
    assertEqual(1, result.get(0));}

    @Test
    void testUint16ArrayWithPart1088() {
    Uint16Array arr = Uint16Array.of(2105, 3235, 4495);
    int val = -65534;
    Uint16Array result = arr.with(0, val);
    assertEqual(2, result.get(0));}
}
