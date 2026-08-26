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
import basetype.common.Uint16Array;

import org.junit.jupiter.api.Test;

/**
 * Uint16Arraysubarray01 —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint16Arraysubarray01 extends BasTest {

    @Test
    void testUint16ArraySubarrayPart1001() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray();
    assertEqual(5, sub.length());
    assertEqual(10, sub.get(0));
    assertEqual(50, sub.get(4));}

    @Test
    void testUint16ArraySubarrayPart1002() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(1);
    assertEqual(4, sub.length());
    assertEqual(20, sub.get(0));
    assertEqual(50, sub.get(3));}

    @Test
    void testUint16ArraySubarrayPart1003() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(1, 3);
    assertEqual(2, sub.length());
    assertEqual(20, sub.get(0));
    assertEqual(30, sub.get(1));}

    @Test
    void testUint16ArraySubarrayPart1004() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0);
    assertEqual(5, sub.length());
    assertEqual(10, sub.get(0));}

    @Test
    void testUint16ArraySubarrayPart1005() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(2);
    assertEqual(3, sub.length());
    assertEqual(30, sub.get(0));}

    @Test
    void testUint16ArraySubarrayPart1006() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(3);
    assertEqual(2, sub.length());
    assertEqual(40, sub.get(0));}

    @Test
    void testUint16ArraySubarrayPart1007() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(4);
    assertEqual(1, sub.length());
    assertEqual(50, sub.get(0));}

    @Test
    void testUint16ArraySubarrayPart1008() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(5);
    assertEqual(0, sub.length());}

    @Test
    void testUint16ArraySubarrayPart1009() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(6);
    assertEqual(0, sub.length());}

    @Test
    void testUint16ArraySubarrayPart1010() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(100);
    assertEqual(0, sub.length());}

    @Test
    void testUint16ArraySubarrayPart1011() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(-1);
    assertEqual(1, sub.length());
    assertEqual(50, sub.get(0));}

    @Test
    void testUint16ArraySubarrayPart1012() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(-5);
    assertEqual(5, sub.length());
    assertEqual(10, sub.get(0));}

    @Test
    void testUint16ArraySubarrayPart1013() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(-6);
    assertEqual(5, sub.length());
    assertEqual(10, sub.get(0));}

    @Test
    void testUint16ArraySubarrayPart1014() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0xFFFF);
    assertEqual(0, sub.length());}

    @Test
    void testUint16ArraySubarrayPart1015() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray((int) (3e0));
    assertEqual(2, sub.length());
    assertEqual(40, sub.get(0));}

    @Test
    void testUint16ArraySubarrayPart1016() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray((int) (5e0));
    assertEqual(0, sub.length());}

    @Test
    void testUint16ArraySubarrayPart1017() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray((10 / 2));
    assertEqual(0, sub.length());}

    @Test
    void testUint16ArraySubarrayPart1018() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray((int) (3.0));
    assertEqual(2, sub.length());
    assertEqual(40, sub.get(0));}

    @Test
    void testUint16ArraySubarrayPart1019() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray((int) (3.14));
    assertEqual(2, sub.length());
    assertEqual(40, sub.get(0));}

    @Test
    void testUint16ArraySubarrayPart1020() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray((int) (-0.5));
    assertEqual(5, sub.length());
    assertEqual(10, sub.get(0));}

    @Test
    void testUint16ArraySubarrayPart1021() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0);
    assertEqual(5, sub.length());}

    @Test
    void testUint16ArraySubarrayPart1022() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(Double.POSITIVE_INFINITY);
    assertEqual(0, sub.length());}

    @Test
    void testUint16ArraySubarrayPart1023() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray((-Double.POSITIVE_INFINITY));
    assertEqual(5, sub.length());
    assertEqual(10, sub.get(0));}

    @Test
    void testUint16ArraySubarrayPart1024() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0, 0);
    assertEqual(0, sub.length());}

    @Test
    void testUint16ArraySubarrayPart1025() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0, 1);
    assertEqual(1, sub.length());
    assertEqual(10, sub.get(0));}

    @Test
    void testUint16ArraySubarrayPart1026() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0, 2);
    assertEqual(2, sub.length());
    assertEqual(20, sub.get(1));}

    @Test
    void testUint16ArraySubarrayPart1027() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0, 3);
    assertEqual(3, sub.length());
    assertEqual(30, sub.get(2));}

    @Test
    void testUint16ArraySubarrayPart1028() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0, 4);
    assertEqual(4, sub.length());
    assertEqual(40, sub.get(3));}

    @Test
    void testUint16ArraySubarrayPart1029() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0, 5);
    assertEqual(5, sub.length());
    assertEqual(50, sub.get(4));}

    @Test
    void testUint16ArraySubarrayPart1030() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0, 6);
    assertEqual(5, sub.length());}

    @Test
    void testUint16ArraySubarrayPart1031() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0, 100);
    assertEqual(5, sub.length());}

    @Test
    void testUint16ArraySubarrayPart1032() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0, -1);
    assertEqual(4, sub.length());
    assertEqual(40, sub.get(3));}

    @Test
    void testUint16ArraySubarrayPart1033() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0, -2);
    assertEqual(3, sub.length());
    assertEqual(30, sub.get(2));}

    @Test
    void testUint16ArraySubarrayPart1034() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0, -4);
    assertEqual(1, sub.length());
    assertEqual(10, sub.get(0));}

    @Test
    void testUint16ArraySubarrayPart1035() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0, -5);
    assertEqual(0, sub.length());}

    @Test
    void testUint16ArraySubarrayPart1036() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0, -6);
    assertEqual(0, sub.length());}

    @Test
    void testUint16ArraySubarrayPart1037() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0, -100);
    assertEqual(0, sub.length());}

    @Test
    void testUint16ArraySubarrayPart1038() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0, 0xFF);
    assertEqual(5, sub.length());}

    @Test
    void testUint16ArraySubarrayPart1039() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0, (int) (1e0));
    assertEqual(1, sub.length());
    assertEqual(10, sub.get(0));}

    @Test
    void testUint16ArraySubarrayPart1040() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0, (int) (3e0));
    assertEqual(3, sub.length());
    assertEqual(30, sub.get(2));}

    @Test
    void testUint16ArraySubarrayPart1041() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0, (int) (5e0));
    assertEqual(5, sub.length());}

    @Test
    void testUint16ArraySubarrayPart1042() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0, (1 + 2));
    assertEqual(3, sub.length());
    assertEqual(30, sub.get(2));}

    @Test
    void testUint16ArraySubarrayPart1043() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0, (5 - 1));
    assertEqual(4, sub.length());
    assertEqual(40, sub.get(3));}

    @Test
    void testUint16ArraySubarrayPart1044() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0, (10 / 2));
    assertEqual(5, sub.length());}

    @Test
    void testUint16ArraySubarrayPart1045() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0, (int) (3.0));
    assertEqual(3, sub.length());
    assertEqual(30, sub.get(2));}

    @Test
    void testUint16ArraySubarrayPart1046() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0, (int) (3.9));
    assertEqual(3, sub.length());
    assertEqual(30, sub.get(2));}

    @Test
    void testUint16ArraySubarrayPart1047() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0, (int) (-0.5));
    assertEqual(0, sub.length());}

    @Test
    void testUint16ArraySubarrayPart1048() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0, 0);
    assertEqual(0, sub.length());}

    @Test
    void testUint16ArraySubarrayPart1049() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0, Double.POSITIVE_INFINITY);
    assertEqual(5, sub.length());}

    @Test
    void testUint16ArraySubarrayPart1050() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0, (-Double.POSITIVE_INFINITY));
    assertEqual(0, sub.length());}

    @Test
    void testUint16ArraySubarrayPart1051() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(2, 4);
    assertEqual(2, sub.length());
    assertEqual(30, sub.get(0));
    assertEqual(40, sub.get(1));}

    @Test
    void testUint16ArraySubarrayPart1052() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(4, 2);
    assertEqual(0, sub.length());}

    @Test
    void testUint16ArraySubarrayPart1053() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(1, 1);
    assertEqual(0, sub.length());}

    @Test
    void testUint16ArraySubarrayPart1054() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(3, 3);
    assertEqual(0, sub.length());}

    @Test
    void testUint16ArraySubarrayPart1055() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(2, -1);
    assertEqual(2, sub.length());
    assertEqual(30, sub.get(0));
    assertEqual(40, sub.get(1));}

    @Test
    void testUint16ArraySubarrayPart1056() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(-3, -1);
    assertEqual(2, sub.length());
    assertEqual(30, sub.get(0));
    assertEqual(40, sub.get(1));}

    @Test
    void testUint16ArraySubarrayPart1057() {
    Uint16Array arr = Uint16Array.of();
    Uint16Array sub = arr.subarray();
    assertEqual(0, sub.length());}

    @Test
    void testUint16ArraySubarrayPart1058() {
    Uint16Array arr = Uint16Array.of();
    Uint16Array sub = arr.subarray(0, 0);
    assertEqual(0, sub.length());}

    @Test
    void testUint16ArraySubarrayPart1059() {
    Uint16Array arr = Uint16Array.of(42);
    Uint16Array sub = arr.subarray(0);
    assertEqual(1, sub.length());
    assertEqual(42, sub.get(0));}

    @Test
    void testUint16ArraySubarrayPart1060() {
    Uint16Array arr = Uint16Array.of(42);
    Uint16Array sub = arr.subarray(1);
    assertEqual(0, sub.length());}

    @Test
    void testUint16ArraySubarrayPart1061() {
    Uint16Array arr = Uint16Array.of(42);
    Uint16Array sub = arr.subarray(-1);
    assertEqual(1, sub.length());
    assertEqual(42, sub.get(0));}

    @Test
    void testUint16ArraySubarrayPart1062() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);
    Uint16Array sub = arr.subarray(5);
    assertEqual(5, sub.length());
    assertEqual(60, sub.get(0));
    assertEqual(100, sub.get(4));}

    @Test
    void testUint16ArraySubarrayPart1063() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);
    Uint16Array sub = arr.subarray(5, 8);
    assertEqual(3, sub.length());
    assertEqual(60, sub.get(0));
    assertEqual(80, sub.get(2));}

    @Test
    void testUint16ArraySubarrayPart1064() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(1, 4);
    assertEqual(3, sub.length());}

    @Test
    void testUint16ArraySubarrayPart1065() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(1, 4);
    assertEqual(6, sub.byteLength());}

    @Test
    void testUint16ArraySubarrayPart1066() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(2);
    assertEqual(4, sub.byteOffset());}

    @Test
    void testUint16ArraySubarrayPart1067() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(1, 3);
    assertEqual(arr.buffer(), sub.buffer());}

    @Test
    void testUint16ArraySubarrayPart1068() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(1, 4);
    sub.set(0, 99);
    assertEqual(99, arr.get(1));}

    @Test
    void testUint16ArraySubarrayPart1069() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(1, 4);
    arr.set(2, 88);
    assertEqual(88, sub.get(1));}

    @Test
    void testUint16ArraySubarrayPart1070() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub1 = arr.subarray(0, 2);
    Uint16Array sub2 = arr.subarray(2, 5);
    assertEqual(sub2.buffer(), sub1.buffer());}

    @Test
    void testUint16ArraySubarrayPart1071() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub1 = arr.subarray(1, 5);
    Uint16Array sub2 = sub1.subarray(0, 2);
    assertEqual(2, sub2.length());
    assertEqual(20, sub2.get(0));
    assertEqual(30, sub2.get(1));
    assertEqual(arr.buffer(), sub2.buffer());}

    @Test
    void testUint16ArraySubarrayPart1072() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(1, 4);
    sub.set(0, 65535);
    assertEqual(65535, arr.get(1));}

    @Test
    void testUint16ArraySubarrayPart1073() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(1, 4);
    sub.set(0, 0);
    assertEqual(0, arr.get(1));}

    @Test
    void testUint16ArraySubarrayPart1074() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(1, 4);
    sub.set(0, 65536);
    assertEqual(0, arr.get(1));}

    @Test
    void testUint16ArraySubarrayPart1075() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(1, 4);
    sub.set(0, -1);
    assertEqual(65535, arr.get(1));}

    @Test
    void testUint16ArraySubarrayPart1076() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(1, 4);
    sub.set(0, 3.14);
    assertEqual(3, arr.get(1));}

    @Test
    void testUint16ArraySubarrayPart1077() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(1, 4);
    arr.set(1, 65535);
    assertEqual(65535, sub.get(0));}

    @Test
    void testUint16ArraySubarrayPart1078() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(1, 4);
    arr.set(1, 0);
    assertEqual(0, sub.get(0));}

    @Test
    void testUint16ArraySubarrayPart1079() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(1, 4);
    arr.set(1, 65536);
    assertEqual(0, sub.get(0));}

    @Test
    void testUint16ArraySubarrayPart1080() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(1, 4);
    arr.set(1, -1);
    assertEqual(65535, sub.get(0));}

    @Test
    void testUint16ArraySubarrayPart1081() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub1 = arr.subarray(1, 4);
    Uint16Array sub2 = arr.subarray(1, 4);
    sub1.set(0, 77);
    assertEqual(77, sub2.get(0));}

    @Test
    void testUint16ArraySubarrayPart1082() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(1, 4);
    sub.set(0, Double.NaN);
    assertEqual(0, arr.get(1));}

    @Test
    void testUint16ArraySubarrayPart1083() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(1, 4);
    sub.set(0, Double.POSITIVE_INFINITY);
    assertEqual(0, arr.get(1));}

    @Test
    void testUint16ArraySubarrayPart1084() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(1, 4);
    sub.set(0, -Double.POSITIVE_INFINITY);
    assertEqual(0, arr.get(1));}

    @Test
    void testUint16ArraySubarrayPart1085() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0x10000);
    assertEqual(0, sub.length());}

    @Test
    void testUint16ArraySubarrayPart1086() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0, 0x10000);
    assertEqual(5, sub.length());}
}
