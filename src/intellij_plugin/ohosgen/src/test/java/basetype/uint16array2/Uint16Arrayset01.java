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

import basetype.common.ArrayBuffer;
import basetype.common.BasTest;
import basetype.common.RangeError;
import basetype.common.Uint16Array;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint16Arrayset01 —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint16Arrayset01 extends BasTest {

    @Test
    void testUint16ArraySetPart1001() {
    Uint16Array target = new Uint16Array(3);
    int val = 42;
    target.set(0, val);
    assertEqual(42, target.get(0));
    }

    @Test
    void testUint16ArraySetPart1002() {
    Uint16Array target = new Uint16Array(3);
    int val = 99;
    try {
    target.set(3, val);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArraySetPart1003() {
    Uint16Array target = new Uint16Array(3);
    int val = 99;
    try {
    target.set(-1, val);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArraySetPart1004() {
    Uint16Array target = new Uint16Array(3);
    int val = 0;
    target.set(0, val);
    assertEqual(0, target.get(0));
    }

    @Test
    void testUint16ArraySetPart1005() {
    Uint16Array target = new Uint16Array(3);
    int val = 65536;
    target.set(0, val);
    assertEqual(0, target.get(0));
    }

    @Test
    void testUint16ArraySetPart1006() {
    Uint16Array target = new Uint16Array(3);
    int val = -1;
    target.set(0, val);
    assertEqual(65535, target.get(0));
    }

    @Test
    void testUint16ArraySetPart1007() {
    Uint16Array target = new Uint16Array(3);
    int val = -65536;
    target.set(0, val);
    assertEqual(0, target.get(0));
    }

    @Test
    void testUint16ArraySetPart1008() {
    Uint16Array target = new Uint16Array(3);
    int val = 0x10000;
    target.set(0, val);
    assertEqual(0, target.get(0));
    }

    @Test
    void testUint16ArraySetPart1009() {
    Uint16Array target = new Uint16Array(3);
    int val = 0xFFFF;
    target.set(0, val);
    assertEqual(65535, target.get(0));
    }

    @Test
    void testUint16ArraySetPart1010() {
    Uint16Array target = new Uint16Array(3);
    int val = 65536 * 2;
    target.set(0, val);
    assertEqual(0, target.get(0));
    }

    @Test
    void testUint16ArraySetPart1011() {
    Uint16Array target = new Uint16Array(3);
    int val = 555;
    target.set(0, val);
    Integer result = target.get(0);
    assertEqual(555, result);
    }

    @Test
    void testUint16ArraySetPart1012() {
    Uint16Array target = new Uint16Array(3);
    target.set(0, 10);
    target.set(1, 20);
    target.set(2, 30);
    target.set(1, 99);
    assertEqual(10, target.get(0));
    assertEqual(30, target.get(2));
    }

    @Test
    void testUint16ArraySetPart1013() {
    Uint16Array target = new Uint16Array(5);
    target.set(0, 1);
    target.set(1, 2);
    target.set(2, 3);
    target.set(3, 4);
    target.set(4, 5);
    assertEqual(1, target.get(0));
    assertEqual(2, target.get(1));
    assertEqual(3, target.get(2));
    assertEqual(4, target.get(3));
    assertEqual(5, target.get(4));
    }

    @Test
    void testUint16ArraySetPart1014() {
    Uint16Array target = new Uint16Array(0);
    int val = 99;
    try {
    target.set(0, val);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArraySetPart1015() {
    Uint16Array target = new Uint16Array(3);
    target.set(0, 100);
    target.set(0, 200);
    assertEqual(200, target.get(0));
    }

    @Test
    void testUint16ArraySetPart1016() {
    Uint16Array target = new Uint16Array(3);
    double v1 = 3.14;
    double v2 = 65535.9;
    target.set(0, v1);
    assertEqual(3, target.get(0));
    target.set(0, v2);
    assertEqual(65535, target.get(0));
    int v3 = (int) (-0.5);
    target.set(0, v3);
    assertEqual(0, target.get(0));
    }

    @Test
    void testUint16ArraySetPart1017() {
    Uint16Array target = new Uint16Array(3);
    int val = 100000;
    target.set(0, val);
    assertEqual(34464, target.get(0));
    }

    @Test
    void testUint16ArraySetPart1018() {
    Uint16Array target = new Uint16Array(3);
    int val = 0x1FFFE;
    target.set(0, val);
    assertEqual(65534, target.get(0));
    }

    @Test
    void testUint16ArraySetPart1019() {
    Uint16Array target = new Uint16Array(3);
    int[] source = new int[] {10, 20};
    target.set(source, 1);
    assertEqual(10, target.get(1));
    assertEqual(20, target.get(2));
    }

    @Test
    void testUint16ArraySetPart1020() {
    Uint16Array target = new Uint16Array(3);
    int[] source = new int[] {1, 2};
    target.set(source, 0);
    assertEqual(1, target.get(0));
    assertEqual(2, target.get(1));
    }

    @Test
    void testUint16ArraySetPart1021() {
    Uint16Array target = new Uint16Array(3);
    int[] source = new int[] {1, 2};
    try {
    target.set(source, 2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArraySetPart1022() {
    Uint16Array target = new Uint16Array(3);
    target.set(0, 10);
    target.set(1, 20);
    target.set(2, 30);
    int[] source = new int[] {};
    target.set(source, 0);
    assertEqual(10, target.get(0));
    assertEqual(20, target.get(1));
    assertEqual(30, target.get(2));
    }

    @Test
    void testUint16ArraySetPart1023() {
    Uint16Array target = new Uint16Array(3);
    int[] source = new int[] {99};
    target.set(source, 1);
    assertEqual(99, target.get(1));
    }

    @Test
    void testUint16ArraySetPart1024() {
    Uint16Array target = new Uint16Array(4);
    int[] source = new int[] {1, 2, 3};
    target.set(source, 0);
    assertEqual(1, target.get(0));
    assertEqual(2, target.get(1));
    assertEqual(3, target.get(2));
    }

    @Test
    void testUint16ArraySetPart1025() {
    Uint16Array target = new Uint16Array(3);
    int[] source = new int[] {0, 0};
    target.set(source, 0);
    assertEqual(0, target.get(0));
    assertEqual(0, target.get(1));
    }

    @Test
    void testUint16ArraySetPart1026() {
    Uint16Array target = new Uint16Array(3);
    int[] source = new int[] {65536};
    target.set(source, 0);
    assertEqual(0, target.get(0));
    }

    @Test
    void testUint16ArraySetPart1027() {
    Uint16Array target = new Uint16Array(3);
    int[] source = new int[] {-1};
    target.set(source, 0);
    assertEqual(65535, target.get(0));
    }

    @Test
    void testUint16ArraySetPart1028() {
    Uint16Array target = new Uint16Array(5);
    int[] source = new int[] {1, 2};
    target.set(source, 0);
    assertEqual(1, target.get(0));
    assertEqual(2, target.get(1));
    assertEqual(0, target.get(2));
    }

    @Test
    void testUint16ArraySetPart1029() {
    Uint16Array target = new Uint16Array(4);
    int[] source = new int[] {10, 20, 30};
    target.set(source, 1);
    assertEqual(0, target.get(0));
    assertEqual(10, target.get(1));
    assertEqual(20, target.get(2));
    assertEqual(30, target.get(3));
    }

    @Test
    void testUint16ArraySetPart1030() {
    Uint16Array target = new Uint16Array(4);
    target.set(0, 100);
    target.set(1, 200);
    int[] source = new int[] {10, 20};
    target.set(source, 2);
    assertEqual(100, target.get(0));
    assertEqual(200, target.get(1));
    assertEqual(10, target.get(2));
    assertEqual(20, target.get(3));
    }

    @Test
    void testUint16ArraySetPart1031() {
    Uint16Array target = new Uint16Array(5);
    target.set(4, 999);
    int[] source = new int[] {1, 2, 3};
    target.set(source, 0);
    assertEqual(0, target.get(3));
    assertEqual(999, target.get(4));
    }

    @Test
    void testUint16ArraySetPart1032() {
    Uint16Array target = new Uint16Array(3);
    int[] source = new int[] {1, 2, 3};
    try {
    target.set(source, 1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArraySetPart1033() {
    Uint16Array target = new Uint16Array(3);
    int[] source = new int[] {777};
    target.set(source, 2);
    assertEqual(777, target.get(2));
    }

    @Test
    void testUint16ArraySetPart1034() {
    Uint16Array target = new Uint16Array(3);
    int[] source = new int[] {777};
    try {
    target.set(source, 3);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArraySetPart1035() {
    Uint16Array target = new Uint16Array(100);
    List<Integer> source = new ArrayList<>();
    int i = 0;
    while (i < 100) {
    source.add(i);
    i++;
    }
    target.set(source, 0);
    assertEqual(0, target.get(0));
    assertEqual(99, target.get(99));
    }

    @Test
    void testUint16ArraySetPart1036() {
    Uint16Array target = new Uint16Array(3);
    Uint16Array source = Uint16Array.of(10, 20, 30);
    target.set(source);
    assertEqual(10, target.get(0));
    assertEqual(20, target.get(1));
    assertEqual(30, target.get(2));
    }

    @Test
    void testUint16ArraySetPart1037() {
    Uint16Array target = new Uint16Array(3);
    Uint16Array source = Uint16Array.of(42);
    target.set(source);
    assertEqual(42, target.get(0));
    }

    @Test
    void testUint16ArraySetPart1038() {
    Uint16Array target = new Uint16Array(3);
    target.set(0, 99);
    target.set(1, 99);
    target.set(2, 99);
    Uint16Array source = Uint16Array.of(0, 0, 0);
    target.set(source);
    assertEqual(0, target.get(0));
    assertEqual(0, target.get(1));
    assertEqual(0, target.get(2));
    }

    @Test
    void testUint16ArraySetPart1039() {
    Uint16Array target = new Uint16Array(2);
    Uint16Array source = Uint16Array.of(65535, 65535);
    target.set(source);
    assertEqual(65535, target.get(0));
    assertEqual(65535, target.get(1));
    }

    @Test
    void testUint16ArraySetPart1040() {
    Uint16Array target = new Uint16Array(4);
    Uint16Array source = Uint16Array.of(0, 65535, 32768, 1);
    target.set(source);
    assertEqual(0, target.get(0));
    assertEqual(65535, target.get(1));
    assertEqual(32768, target.get(2));
    assertEqual(1, target.get(3));
    }

    @Test
    void testUint16ArraySetPart1041() {
    Uint16Array target = new Uint16Array(5);
    target.set(0, 100);
    target.set(1, 200);
    target.set(2, 300);
    target.set(3, 400);
    target.set(4, 500);
    Uint16Array source = Uint16Array.of(1, 2);
    target.set(source);
    assertEqual(1, target.get(0));
    assertEqual(2, target.get(1));
    assertEqual(300, target.get(2));
    assertEqual(400, target.get(3));
    assertEqual(500, target.get(4));
    }

    @Test
    void testUint16ArraySetPart1042() {
    Uint16Array target = new Uint16Array(2);
    Uint16Array source = Uint16Array.of(1, 2, 3);
    try {
    target.set(source);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArraySetPart1043() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint16Array srcView = new Uint16Array(buf);
    srcView.set(0, 111);
    srcView.set(1, 222);
    srcView.set(2, 333);
    Uint16Array target = new Uint16Array(3);
    target.set(srcView);
    assertEqual(111, target.get(0));
    assertEqual(222, target.get(1));
    assertEqual(333, target.get(2));
    }

    @Test
    void testUint16ArraySetPart1044() {
    Uint16Array target = new Uint16Array(4);
    target.set(3, 999);
    Uint16Array source = Uint16Array.of(1, 2, 3);
    target.set(source);
    assertEqual(1, target.get(0));
    assertEqual(2, target.get(1));
    assertEqual(3, target.get(2));
    assertEqual(999, target.get(3));
    }

    @Test
    void testUint16ArraySetPart1045() {
    Uint16Array target = Uint16Array.of(1, 2, 3, 4);
    Uint16Array source = target.subarray(0, 3);
    target.set(source, 1);
    assertEqual("1,1,2,3", target.join(","));
    }

    @Test
    void testUint16ArraySetPart1046() {
    Uint16Array target = new Uint16Array(3);
    ArrayBuffer bufBefore = target.buffer();
    Uint16Array source = Uint16Array.of(10, 20, 30);
    target.set(source);
    assertEqual(bufBefore, target.buffer());
    }

    @Test
    void testUint16ArraySetPart1047() {
    Uint16Array target = new Uint16Array(1);
    Uint16Array source = Uint16Array.of(1, 2);
    try {
    target.set(source);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArraySetPart1048() {
    Uint16Array target = new Uint16Array(3);
    target.set(0, 10);
    target.set(1, 20);
    target.set(2, 30);
    Uint16Array emptySrc = new Uint16Array(0);
    target.set(emptySrc);
    assertEqual(10, target.get(0));
    assertEqual(20, target.get(1));
    assertEqual(30, target.get(2));
    }

    @Test
    void testUint16ArraySetPart1049() {
    Uint16Array target = Uint16Array.of(10, 20, 30);
    target.set(1, 65537);
    assertEqual("10,1,30", target.join(","));
    }

    @Test
    void testUint16ArraySetPart1050() {
    Uint16Array a = Uint16Array.of(10, 20, 30);
    a.set(0, 99);
    assertEqual("99,20,30", a.join(","));
    }

    @Test
    void testUint16ArraySetPart1051() {
    Uint16Array a = Uint16Array.of(10, 20, 30);
    a.set(1, 99);
    assertEqual("10,99,30", a.join(","));
    }

    @Test
    void testUint16ArraySetPart1052() {
    Uint16Array a = Uint16Array.of(10, 20, 30);
    a.set(2, 99);
    assertEqual("10,20,99", a.join(","));
    }

    @Test
    void testUint16ArraySetPart1053() {
    Uint16Array a = Uint16Array.of(9, 9);
    a.set(0, 3.9);
    assertEqual("3,9", a.join(","));
    }

    @Test
    void testUint16ArraySetPart1054() {
    Uint16Array a = Uint16Array.of(9, 9);
    a.set(1, -0.9);
    assertEqual("9,0", a.join(","));
    }

    @Test
    void testUint16ArraySetPart1055() {
    Uint16Array a = new Uint16Array(2);
    a.set(0, 65536);
    assertEqual("0,0", a.join(","));
    }

    @Test
    void testUint16ArraySetPart1056() {
    Uint16Array a = new Uint16Array(2);
    a.set(1, -2);
    assertEqual("0,65534", a.join(","));
    }

    @Test
    void testUint16ArraySetPart1057() {
    Uint16Array a = new Uint16Array(1);
    a.set(0, 65535);
    assertEqual(65535, a.get(0));
    }

    @Test
    void testUint16ArraySetPart1058() {
    ArrayBuffer b = new ArrayBuffer(8);
    Uint16Array all = new Uint16Array(b);
    Uint16Array v = new Uint16Array(b, 2, 2);
    v.set(0, 77);
    assertEqual("0,77,0,0", all.join(","));
    }

    @Test
    void testUint16ArraySetPart1059() {
    ArrayBuffer b = new ArrayBuffer(8);
    Uint16Array x = new Uint16Array(b, 0, 3);
    Uint16Array y = new Uint16Array(b, 2, 2);
    x.set(1, 88);
    assertEqual(88, y.get(0));
    }

    @Test
    void testUint16ArraySetPart1060() {
    Uint16Array a = Uint16Array.of(1, 2, 3);
    a.set(1, 20);
    a.set(1, 200);
    assertEqual("1,200,3", a.join(","));
    }

    @Test
    void testUint16ArraySetPart1061() {
    Uint16Array a = Uint16Array.of(1, 2);
    ArrayBuffer b = a.buffer();
    a.set(0, 7);
    assertEqual(b, a.buffer());
    assertEqual("7,2", a.join(","));
    }

    @Test
    void testUint16ArraySetPart1062() {
    Uint16Array a = new Uint16Array(new ArrayBuffer(10), 2, 3);
    a.set(2, 7);
    assertEqual(2, a.byteOffset());
    assertEqual(6, a.byteLength());
    assertEqual(3, a.length());
    }

    @Test
    void testUint16ArraySetPart1063() {
    Uint16Array a = Uint16Array.of(1, 2, 3);
    try {
    a.set(3, 9);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    assertEqual("1,2,3", a.join(","));
    }
    }

    @Test
    void testUint16ArraySetPart1064() {
    Uint16Array a = Uint16Array.of(1, 2, 3);
    try {
    a.set(-1, 9);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    assertEqual("1,2,3", a.join(","));
    }
    }

    @Test
    void testUint16ArraySetPart1065() {
    Uint16Array a = Uint16Array.of(4, 5);
    try {
    a.set(100, 9);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    assertEqual("4,5", a.join(","));
    }
    }

    @Test
    void testUint16ArraySetPart1066() {
    Uint16Array a = new Uint16Array();
    try {
    a.set(0, 1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    assertEqual(0, a.length());
    }
    }

    @Test
    void testUint16ArraySetPart1067() {
    Uint16Array a = new Uint16Array(2);
    int v = 127;
    a.set(1, v);
    assertEqual("0,127", a.join(","));
    }

    @Test
    void testUint16ArraySetPart1068() {
    Uint16Array a = new Uint16Array(2);
    int v = 32000;
    a.set(0, v);
    assertEqual("32000,0", a.join(","));
    }

    @Test
    void testUint16ArraySetPart1069() {
    Uint16Array a = new Uint16Array(1);
    int v = 50000;
    a.set(0, v);
    assertEqual(50000, a.get(0));
    }

    @Test
    void testUint16ArraySetPart1070() {
    Uint16Array a = Uint16Array.of(1, 2, 3);
    int[] calls = {0};
    int v = ((java.util.function.IntSupplier) () -> {
        calls[0]++;
        return 44;
        }).getAsInt();
    a.set(2, v);
    assertEqual("1,2,44", a.join(","));
    assertEqual(1, calls[0]);
    }

    @Test
    void testUint16ArraySetPart1071() {
    ArrayBuffer b = new ArrayBuffer(6);
    Uint16Array a = new Uint16Array(b);
    a.set(1, 0x1234);
    assertEqual("0,4660,0", a.join(","));
    }

    @Test
    void testUint16ArraySetPart1072() {
    Uint16Array a = Uint16Array.of(5, 6, 7);
    a.set(0, 50);
    a.set(0, 5);
    assertEqual("5,6,7", a.join(","));
    }

    @Test
    void testUint16ArraySetPart1073() {
    Uint16Array src = Uint16Array.of(1, 2);
    Uint16Array copy = new Uint16Array(src);
    copy.set(0, 9);
    assertEqual("1,2", src.join(","));
    assertEqual("9,2", copy.join(","));
    }

    @Test
    void testUint16ArraySetPart1074() {
    Uint16Array src = Uint16Array.of(11, 22);
    Uint16Array dst = new Uint16Array(3);
    dst.set(2, src.get(1));
    assertEqual("0,0,22", dst.join(","));
    }

    @Test
    void testUint16ArraySetPart1075() {
    ArrayBuffer b = new ArrayBuffer(4);
    Uint16Array a = new Uint16Array(b);
    Uint16Array alias = new Uint16Array(b);
    alias.set(0, 12);
    a.set(1, alias.get(0));
    assertEqual("12,12", a.join(","));
    }

    @Test
    void testUint16ArraySetPart1076() {
    Uint16Array a = new Uint16Array(1);
    a.set(0, 196613);
    assertEqual(5, a.get(0));
    }

    @Test
    void testUint16ArraySetPart1077() {
    Uint16Array a = new Uint16Array(1);
    a.set(0, -65537.9);
    assertEqual(65535, a.get(0));
    }

    @Test
    void testUint16ArraySetPart1078() {
    ArrayBuffer b = new ArrayBuffer(8);
    Uint16Array left = new Uint16Array(b, 0, 2);
    Uint16Array right = new Uint16Array(b, 4, 2);
    right.set(0, 7);
    assertEqual("0,0", left.join(","));
    assertEqual("7,0", right.join(","));
    }

    @Test
    void testUint16ArraySetPart1079() {
    Uint16Array a = new Uint16Array(4);
    a.set(0, 1);
    a.set(3, 4);
    assertEqual("1,0,0,4", a.join(","));
    }

    @Test
    void testUint16ArraySetPart1080() {
    Uint16Array a = Uint16Array.of(8, 9);
    a.set(1, 0);
    assertEqual("8,0", a.join(","));
    }
}
