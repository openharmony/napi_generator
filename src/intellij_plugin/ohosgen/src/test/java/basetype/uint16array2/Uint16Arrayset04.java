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
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Uint16Arrayset04 —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint16Arrayset04 extends BasTest {

    @Test
    void testUint16ArraySetPart4001() {
    Uint16Array a = new Uint16Array(3);
    Uint16Array b = new Uint16Array(3);
    int v = 10;
    a.set(0, v);
    b.set(0, 10);
    assertEqualInt(10, a.get(0));
    assertEqual(b.get(0).intValue(), a.get(0).intValue());
    }

    @Test
    void testUint16ArraySetPart4002() {
    Uint16Array a = new Uint16Array(3);
    Uint16Array b = new Uint16Array(3);
    int v = 255;
    a.set(1, v);
    b.set(1, 255);
    assertEqualInt(255, a.get(1));
    assertEqual(b.get(1).intValue(), a.get(1).intValue());
    }

    @Test
    void testUint16ArraySetPart4003() {
    Uint16Array a = new Uint16Array(3);
    Uint16Array b = new Uint16Array(3);
    int v = 65535;
    a.set(2, v);
    b.set(2, 65535);
    assertEqualInt(65535, a.get(2));
    assertEqual(b.get(2).intValue(), a.get(2).intValue());
    }

    @Test
    void testUint16ArraySetPart4004() {
    Uint16Array a = new Uint16Array(3);
    Uint16Array b = new Uint16Array(3);
    int v = 0;
    a.set(0, v);
    b.set(0, 0);
    assertEqualInt(0, a.get(0));
    assertEqual(b.get(0).intValue(), a.get(0).intValue());
    }

    @Test
    void testUint16ArraySetPart4005() {
    Uint16Array a = new Uint16Array(3);
    Uint16Array b = new Uint16Array(3);
    int v = 32768;
    a.set(1, v);
    b.set(1, 32768);
    assertEqualInt(32768, a.get(1));
    assertEqual(b.get(1).intValue(), a.get(1).intValue());
    }

    @Test
    void testUint16ArraySetPart4006() {
    Uint16Array a = new Uint16Array(3);
    Uint16Array b = new Uint16Array(3);
    List<Integer> si = java.util.Arrays.asList(1, 2, 3);
    double[] sn = new double[] {1.0, 2.0, 3.0};
    a.set(si);
    b.set(sn);
    assertEqualInt(1, a.get(0));
    assertEqual(b.get(0).intValue(), a.get(0).intValue());
    assertEqualInt(2, a.get(1));
    assertEqual(b.get(1).intValue(), a.get(1).intValue());
    assertEqualInt(3, a.get(2));
    assertEqual(b.get(2).intValue(), a.get(2).intValue());
    }

    @Test
    void testUint16ArraySetPart4007() {
    Uint16Array a = new Uint16Array(2);
    Uint16Array b = new Uint16Array(2);
    List<Integer> si = java.util.Arrays.asList(65535, 0);
    double[] sn = new double[] {65535.0, 0.0};
    a.set(si);
    b.set(sn);
    assertEqualInt(65535, a.get(0));
    assertEqual(b.get(0).intValue(), a.get(0).intValue());
    assertEqualInt(0, a.get(1));
    assertEqual(b.get(1).intValue(), a.get(1).intValue());
    }

    @Test
    void testUint16ArraySetPart4008() {
    Uint16Array a = new Uint16Array(4);
    Uint16Array b = new Uint16Array(4);
    List<Integer> si = java.util.Arrays.asList(10, 20);
    double[] sn = new double[] {10.0, 20.0};
    a.set(si, 1);
    b.set(sn, 1);
    assertEqualInt(10, a.get(1));
    assertEqual(b.get(1).intValue(), a.get(1).intValue());
    assertEqualInt(20, a.get(2));
    assertEqual(b.get(2).intValue(), a.get(2).intValue());
    }

    @Test
    void testUint16ArraySetPart4009() {
    Uint16Array a = new Uint16Array(3);
    Uint16Array b = new Uint16Array(3);
    Uint16Array src = Uint16Array.of(100, 200, 300);
    List<Integer> arr = java.util.Arrays.asList(100, 200, 300);
    a.set(src);
    b.set(arr);
    assertEqualInt(100, a.get(0));
    assertEqualInt(100, b.get(0));
    assertEqualInt(200, a.get(1));
    assertEqual(b.get(1).intValue(), a.get(1).intValue());
    assertEqualInt(300, a.get(2));
    assertEqual(b.get(2).intValue(), a.get(2).intValue());
    }

    @Test
    void testUint16ArraySetPart4010() {
    Uint16Array a = new Uint16Array(4);
    Uint16Array b = new Uint16Array(4);
    Uint16Array src = Uint16Array.of(50, 60);
    List<Integer> arr = java.util.Arrays.asList(50, 60);
    a.set(src, 1);
    b.set(arr, 1);
    assertEqualInt(50, a.get(1));
    assertEqual(b.get(1).intValue(), a.get(1).intValue());
    assertEqualInt(60, a.get(2));
    assertEqual(b.get(2).intValue(), a.get(2).intValue());
    }

    @Test
    void testUint16ArraySetPart4011() {
    Uint16Array a = new Uint16Array(4);
    Uint16Array b = new Uint16Array(4);
    List<Integer> si = java.util.Arrays.asList(7, 8, 9);
    a.set(si, 0);
    b.set(new Uint16Array(new int[] {7, 8, 9}), 0);
    assertEqualInt(7, a.get(0));
    assertEqualInt(7, b.get(0));
    assertEqualInt(8, a.get(1));
    assertEqual(b.get(1).intValue(), a.get(1).intValue());
    assertEqualInt(9, a.get(2));
    assertEqual(b.get(2).intValue(), a.get(2).intValue());
    }

    @Test
    void testUint16ArraySetPart4012() {
    Uint16Array a = new Uint16Array(3);
    Uint16Array b = new Uint16Array(3);
    int v = 256;
    a.set(0, 0x100);
    b.set(0, v);
    assertEqualInt(256, a.get(0));
    assertEqualInt(256, b.get(0));
    }

    @Test
    void testUint16ArraySetPart4013() {
    Uint16Array a = new Uint16Array(3);
    Uint16Array b = new Uint16Array(3);
    int v = 2;
    a.set(0, 0b10);
    b.set(0, v);
    assertEqualInt(2, a.get(0));
    assertEqualInt(2, b.get(0));
    }

    @Test
    void testUint16ArraySetPart4014() {
    Uint16Array a = new Uint16Array(3);
    Uint16Array b = new Uint16Array(3);
    int v = 8;
    a.set(0, 010);
    b.set(0, v);
    assertEqualInt(8, a.get(0));
    assertEqualInt(8, b.get(0));
    }

    @Test
    void testUint16ArraySetPart4015() {
    Uint16Array a = new Uint16Array(1);
    Uint16Array b = new Uint16Array(1);
    List<Integer> si = java.util.Arrays.asList(3);
    a.set(new Uint16Array(new double[] {3.14}));
    b.set(si);
    assertEqualInt(3, a.get(0));
    assertEqual(b.get(0).intValue(), a.get(0).intValue());
    }

    @Test
    void testUint16ArraySetPart4016() {
    Uint16Array a = new Uint16Array(1);
    Uint16Array b = new Uint16Array(1);
    List<Integer> si = java.util.Arrays.asList(10000);
    a.set(new Uint16Array(new double[] {1e4}));
    b.set(si);
    assertEqualInt(10000, a.get(0));
    assertEqualInt(10000, b.get(0));
    }

    @Test
    void testUint16ArraySetPart4017() {
    Uint16Array a = new Uint16Array(3);
    Uint16Array b = new Uint16Array(3);
    int v = 0;
    a.set(0, 65536);
    b.set(0, v);
    assertEqualInt(0, a.get(0));
    assertEqualInt(0, b.get(0));
    }

    @Test
    void testUint16ArraySetPart4018() {
    Uint16Array a = new Uint16Array(3);
    Uint16Array b = new Uint16Array(3);
    int v = 65535;
    a.set(0, -1);
    b.set(0, v);
    assertEqualInt(65535, a.get(0));
    assertEqualInt(65535, b.get(0));
    }

    @Test
    void testUint16ArraySetPart4019() {
    Uint16Array a = new Uint16Array(1);
    Uint16Array b = new Uint16Array(1);
    List<Integer> si = java.util.Arrays.asList(0);
    a.set(new Uint16Array(new int[] {65536}));
    b.set(si);
    assertEqualInt(0, a.get(0));
    assertEqualInt(0, b.get(0));
    }

    @Test
    void testUint16ArraySetPart4020() {
    Uint16Array a = new Uint16Array(1);
    Uint16Array b = new Uint16Array(1);
    List<Integer> si = java.util.Arrays.asList(65535);
    a.set(new Uint16Array(new int[] {-1}));
    b.set(si);
    assertEqualInt(65535, a.get(0));
    assertEqualInt(65535, b.get(0));
    }

    @Test
    void testUint16ArraySetPart4021() {
    Uint16Array a = new Uint16Array(3);
    Uint16Array b = new Uint16Array(3);
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    a.set(src);
    b.set(src, 0);
    assertEqual("10,20,30", a.join(","));
    assertEqual("10,20,30", b.join(","));
    }

    @Test
    void testUint16ArraySetPart4022() {
    Uint16Array a = new Uint16Array(3);
    Uint16Array b = new Uint16Array(3);
    double[] src = new double[] {1.5, 2.5, 3.5};
    a.set(src);
    b.set(src, 0);
    assertEqual("1,2,3", a.join(","));
    assertEqual("1,2,3", b.join(","));
    }

    @Test
    void testUint16ArraySetPart4023() {
    Uint16Array a = new Uint16Array(3);
    Uint16Array b = new Uint16Array(3);
    Uint16Array src = Uint16Array.of(100, 200, 300);
    a.set(src);
    b.set(src, 0);
    assertEqual("100,200,300", a.join(","));
    assertEqual("100,200,300", b.join(","));
    }

    @Test
    void testUint16ArraySetPart4024() {
    Uint16Array a = new Uint16Array(3);
    Uint16Array b = new Uint16Array(3);
    a.set(new Uint16Array(new int[] {5, 6, 7}));
    b.set(new Uint16Array(new int[] {5, 6, 7}), 0);
    assertEqual("5,6,7", a.join(","));
    assertEqual("5,6,7", b.join(","));
    }

    @Test
    void testUint16ArraySetPart4025() {
    Uint16Array a = new Uint16Array(3);
    Uint16Array b = new Uint16Array(3);
    List<Integer> empty = new ArrayList<>();
    a.set(empty);
    b.set(empty, 0);
    assertEqualInt(0, a.get(0));
    assertEqualInt(0, b.get(0));
    }

    @Test
    void testUint16ArraySetPart4026() {
    Uint16Array a = new Uint16Array(3);
    Uint16Array b = new Uint16Array(3);
    List<Integer> src = java.util.Arrays.asList(42);
    a.set(src);
    b.set(src, 0);
    assertEqualInt(42, a.get(0));
    assertEqualInt(42, b.get(0));
    }

    @Test
    void testUint16ArraySetPart4027() {
    Uint16Array a = new Uint16Array(2);
    Uint16Array b = new Uint16Array(2);
    a.set(new Uint16Array(new int[] {1}));
    a.set(new Uint16Array(new int[] {2}), 1);
    b.set(new Uint16Array(new int[] {1, 2}));
    assertEqual("1,2", a.join(","));
    assertEqual("1,2", b.join(","));
    }

    @Test
    void testUint16ArraySetPart4028() {
    Uint16Array a = new Uint16Array(2);
    Uint16Array b = new Uint16Array(2);
    a.set(Uint16Array.of(10));
    a.set(Uint16Array.of(20), 1);
    b.set(Uint16Array.of(10, 20));
    assertEqual("10,20", a.join(","));
    assertEqual("10,20", b.join(","));
    }

    @Test
    void testUint16ArraySetPart4029() {
    Uint16Array t = new Uint16Array(5);
    t.set(0, 99);
    t.set(4, 88);
    t.set(new Uint16Array(new int[] {1, 2, 3}));
    assertEqualInt(1, t.get(0));
    assertEqualInt(88, t.get(4));
    }

    @Test
    void testUint16ArraySetPart4030() {
    Uint16Array a = Uint16Array.of(9, 9, 9);
    Uint16Array b = Uint16Array.of(9, 9, 9);
    List<Integer> src = java.util.Arrays.asList(4, 5);
    a.set(src);
    b.set(src, 0);
    assertEqual("4,5,9", a.join(","));
    assertEqual("4,5,9", b.join(","));
    }

    @Test
    void testUint16ArraySetPart4031() {
    Uint16Array a = Uint16Array.of(1, 2, 3);
    Uint16Array b = Uint16Array.of(1, 2, 3);
    Uint16Array empty = new Uint16Array(0);
    a.set(empty);
    b.set(empty, 0);
    assertEqualInt(1, a.get(0));
    assertEqualInt(1, b.get(0));
    }

    @Test
    void testUint16ArraySetPart4032() {
    Uint16Array t = new Uint16Array(3);
    int v = 5;
    Integer r = t.set(0, v);
    assertNull(r);
    }

    @Test
    void testUint16ArraySetPart4033() {
    Uint16Array t = new Uint16Array(3);
    Integer r = t.set(0, 5);
    assertNull(r);
    }

    @Test
    void testUint16ArraySetPart4034() {
    Uint16Array t = new Uint16Array(3);
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    Integer r = t.set(src);
    assertNull(r);
    }

    @Test
    void testUint16ArraySetPart4035() {
    Uint16Array t = new Uint16Array(3);
    double[] src = new double[] {1.0, 2.0, 3.0};
    Integer r = t.set(src);
    assertNull(r);
    }

    @Test
    void testUint16ArraySetPart4036() {
    Uint16Array t = new Uint16Array(3);
    Uint16Array src = Uint16Array.of(1, 2, 3);
    Integer r = t.set(src);
    assertNull(r);
    }

    @Test
    void testUint16ArraySetPart4037() {
    Uint16Array t = new Uint16Array(3);
    Integer r = t.set(new Uint16Array(new int[] {1, 2, 3}));
    assertNull(r);
    }

    @Test
    void testUint16ArraySetPart4038() {
    Uint16Array t = new Uint16Array(3);
    int v = 7;
    t.set(0, v);
    t.set(1, 8);
    t.set(2, 9);
    assertEqual("7,8,9", String.valueOf(t));
    }

    @Test
    void testUint16ArraySetPart4039() {
    Uint16Array t = new Uint16Array(3);
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    t.set(src);
    assertEqual("10,20,30", String.valueOf(t));
    }

    @Test
    void testUint16ArraySetPart4040() {
    Uint16Array t = new Uint16Array(3);
    t.set(Uint16Array.of(11, 22, 33));
    assertEqual("11,22,33", String.valueOf(t));
    }

    @Test
    void testUint16ArraySetPart4041() {
    Uint16Array t = new Uint16Array(3);
    t.set(new Uint16Array(new int[] {44, 55, 66}));
    assertEqual("44,55,66", String.valueOf(t));
    }

    @Test
    void testUint16ArraySetPart4042() {
    Uint16Array t = new Uint16Array(5);
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    t.set(src);
    assertEqual(5, t.length());
    assertEqual("1,2,3,0,0", t.join(","));
    }

    @Test
    void testUint16ArraySetPart4043() {
    Uint16Array t = new Uint16Array(5);
    int bl = t.byteLength();
    t.set(new Uint16Array(new int[] {1, 2, 3}));
    assertEqual(bl, t.byteLength());
    assertEqual("1,2,3,0,0", t.join(","));
    }

    @Test
    void testUint16ArraySetPart4044() {
    Uint16Array t = new Uint16Array(5);
    t.set(Uint16Array.of(1, 2));
    assertEqualInt(1, t.get(0));
    assertEqualInt(2, t.get(1));
    assertEqualInt(0, t.get(2));
    }

    @Test
    void testUint16ArraySetPart4045() {
    Uint16Array t = new Uint16Array(5);
    ArrayBuffer buf = t.buffer();
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    t.set(src);
    assertEqual(buf, t.buffer());
    }

    @Test
    void testUint16ArraySetPart4046() {
    Uint16Array t = new Uint16Array(5);
    int bo = t.byteOffset();
    t.set(new Uint16Array(new int[] {10, 20}));
    assertEqual(bo, t.byteOffset());
    }

    @Test
    void testUint16ArraySetPart4047() {
    Uint16Array a = new Uint16Array(3);
    Uint16Array b = new Uint16Array(3);
    List<Integer> src = java.util.Arrays.asList(5, 6, 7);
    a.set(src);
    b.set(new Uint16Array(new int[] {5, 6, 7}));
    assertEqual("5,6,7", a.join(","));
    assertEqual("5,6,7", b.join(","));
    }

    @Test
    void testUint16ArraySetPart4048() {
    Uint16Array t = new Uint16Array(5);
    t.set(0, 11);
    t.set(4, 55);
    List<Integer> src = java.util.Arrays.asList(22, 33, 44);
    t.set(src, 1);
    assertEqualInt(11, t.get(0));
    assertEqualInt(22, t.get(1));
    assertEqualInt(33, t.get(2));
    assertEqualInt(44, t.get(3));
    assertEqualInt(55, t.get(4));
    }

    @Test
    void testUint16ArraySetPart4049() {
    Uint16Array t = new Uint16Array(4);
    t.set(0, 99);
    t.set(3, 88);
    t.set(Uint16Array.of(10, 20), 1);
    assertEqualInt(99, t.get(0));
    assertEqualInt(10, t.get(1));
    assertEqualInt(20, t.get(2));
    assertEqualInt(88, t.get(3));
    }

    @Test
    void testUint16ArraySetPart4050() {
    Uint16Array t = new Uint16Array(3);
    List<Integer> src = java.util.Arrays.asList(1, 2);
    int len = t.length();
    try {
    t.set(src, -1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqual(len, t.length());
    }

    @Test
    void testUint16ArraySetPart4051() {
    Uint16Array t = new Uint16Array(3);
    double[] src = new double[] {1.0, 2.0};
    int bl = t.byteLength();
    try {
    t.set(src, -1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqual(bl, t.byteLength());
    }

    @Test
    void testUint16ArraySetPart4052() {
    Uint16Array t = new Uint16Array(3);
    Uint16Array src = Uint16Array.of(1, 2);
    int len = t.length();
    try {
    t.set(src, -1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqual(len, t.length());
    }

    @Test
    void testUint16ArraySetPart4053() {
    Uint16Array t = new Uint16Array(3);
    int bo = t.byteOffset();
    try {
    t.set(new Uint16Array(new int[] {1, 2}), -1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqual(bo, t.byteOffset());
    }

    @Test
    void testUint16ArraySetPart4054() {
    Uint16Array t = new Uint16Array(3);
    List<Integer> src = java.util.Arrays.asList(1);
    int len = t.length();
    try {
    t.set(src, 100);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqual(len, t.length());
    }

    @Test
    void testUint16ArraySetPart4055() {
    Uint16Array t = Uint16Array.of(9, 8);
    List<Integer> src = java.util.Arrays.asList(1, 2, 3);
    try {
    t.set(src);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqual("9,8", t.join(","));
    }

    @Test
    void testUint16ArraySetPart4056() {
    Uint16Array t = new Uint16Array(3);
    List<Integer> src = java.util.Arrays.asList(1, 2);
    int len = t.length();
    try {
    t.set(src, 2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqual(len, t.length());
    }

    @Test
    void testUint16ArraySetPart4057() {
    Uint16Array t = new Uint16Array(3);
    Uint16Array src = Uint16Array.of(1, 2);
    int len = t.length();
    try {
    t.set(src, 2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqual(len, t.length());
    }

    @Test
    void testUint16ArraySetPart4058() {
    Uint16Array t = new Uint16Array(3);
    List<Integer> src = java.util.Arrays.asList(1, 2);
    try {
    t.set(src, -1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    t.set(src, 0);
    assertEqualInt(1, t.get(0));
    assertEqualInt(2, t.get(1));
    }

    @Test
    void testUint16ArraySetPart4059() {
    Uint16Array t = new Uint16Array(3);
    ArrayBuffer buf = t.buffer();
    try {
    t.set(new Uint16Array(new int[] {1, 2, 3, 4}), 0);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqual(buf, t.buffer());
    }

    @Test
    void testUint16ArraySetPart4060() {
    Uint16Array t = new Uint16Array(4);
    int caught = 0;
    try {
    t.set(new Uint16Array(new int[] {1, 2, 3, 4, 5}));
    fail();
    } catch (RangeError e) {
    caught++;
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    try {
    t.set(new Uint16Array(new int[] {1, 2, 3}), -1);
    fail();
    } catch (RangeError e) {
    caught++;
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    try {
    t.set(new Uint16Array(new int[] {1, 2, 3, 4, 5}), 0);
    fail();
    } catch (RangeError e) {
    caught++;
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    assertEqual(3, caught);
    t.set(new Uint16Array(new int[] {10, 20}), 0);
    assertEqualInt(10, t.get(0));
    assertEqualInt(20, t.get(1));
    }

    @Test
    void testUint16ArraySetPart4061() {
    Uint16Array t = new Uint16Array(3);
    List<Integer> empty = new ArrayList<>();
    t.set(empty, 3);
    assertEqualInt(0, t.get(0));
    }

    @Test
    void testUint16ArraySetPart4062() {
    Uint16Array t = new Uint16Array(3);
    Uint16Array empty = new Uint16Array(0);
    t.set(empty, 3);
    assertEqual(3, t.length());
    }

    @Test
    void testUint16ArraySetPart4063() {
    Uint16Array t = new Uint16Array(3);
    try {
    t.set(new Uint16Array(new int[] {1}), -5);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArraySetPart4064() {
    Uint16Array t = new Uint16Array(2);
    double[] src = new double[] {1.0, 2.0, 3.0};
    try {
    t.set(src);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArraySetPart4065() {
    Uint16Array t = new Uint16Array(3);
    Uint16Array src = Uint16Array.of(1, 2);
    try {
    t.set(src, 2);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArraySetPart4066() {
    Uint16Array t = new Uint16Array(1);
    t.set(0, 65536);
    assertEqualInt(0, t.get(0));
    }

    @Test
    void testUint16ArraySetPart4067() {
    Uint16Array t = new Uint16Array(1);
    t.set(0, -1);
    assertEqualInt(65535, t.get(0));
    }

    @Test
    void testUint16ArraySetPart4068() {
    Uint16Array t = new Uint16Array(1);
    t.set(0, 3.14);
    assertEqualInt(3, t.get(0));
    }

    @Test
    void testUint16ArraySetPart4069() {
    Uint16Array t = new Uint16Array(1);
    t.set(0, 65535.9);
    assertEqualInt(65535, t.get(0));
    }

    @Test
    void testUint16ArraySetPart4070() {
    Uint16Array t = new Uint16Array(1);
    t.set(0, -0.5);
    assertEqualInt(0, t.get(0));
    }

    @Test
    void testUint16ArraySetPart4071() {
    Uint16Array t = new Uint16Array(1);
    t.set(0, Double.POSITIVE_INFINITY);
    assertEqualInt(0, t.get(0));
    }

    @Test
    void testUint16ArraySetPart4072() {
    Uint16Array t = new Uint16Array(1);
    t.set(0, -Double.POSITIVE_INFINITY);
    assertEqualInt(0, t.get(0));
    }

    @Test
    void testUint16ArraySetPart4073() {
    Uint16Array t = new Uint16Array(1);
    t.set(0, Double.NaN);
    assertEqualInt(0, t.get(0));
    }

    @Test
    void testUint16ArraySetPart4074() {
    Uint16Array t = new Uint16Array(1);
    t.set(new Uint16Array(new int[] {65536}));
    assertEqualInt(0, t.get(0));
    }

    @Test
    void testUint16ArraySetPart4075() {
    Uint16Array t = new Uint16Array(1);
    t.set(new Uint16Array(new int[] {-1}));
    assertEqualInt(65535, t.get(0));
    }

    @Test
    void testUint16ArraySetPart4076() {
    Uint16Array t = new Uint16Array(2);
    t.set(new Uint16Array(new double[] {3.14, 2.7}));
    assertEqualInt(3, t.get(0));
    assertEqualInt(2, t.get(1));
    }

    @Test
    void testUint16ArraySetPart4077() {
    Uint16Array t = new Uint16Array(1);
    t.set(new Uint16Array(new double[] {65535.9}));
    assertEqualInt(65535, t.get(0));
    }

    @Test
    void testUint16ArraySetPart4078() {
    Uint16Array t = new Uint16Array(1);
    t.set(new Uint16Array(new double[] {-0.5}));
    assertEqualInt(0, t.get(0));
    }

    @Test
    void testUint16ArraySetPart4079() {
    Uint16Array t = new Uint16Array(1);
    t.set(new Uint16Array(new double[] {Double.POSITIVE_INFINITY}));
    assertEqualInt(0, t.get(0));
    }

    @Test
    void testUint16ArraySetPart4080() {
    Uint16Array t = new Uint16Array(1);
    t.set(new Uint16Array(new double[] {-Double.POSITIVE_INFINITY}));
    assertEqualInt(0, t.get(0));
    }

    @Test
    void testUint16ArraySetPart4081() {
    Uint16Array t = new Uint16Array(1);
    t.set(new Uint16Array(new double[] {Double.NaN}));
    assertEqualInt(0, t.get(0));
    }

    @Test
    void testUint16ArraySetPart4082() {
    Uint16Array t = new Uint16Array(1);
    t.set(new Uint16Array(new int[] {0x10000}));
    assertEqualInt(0, t.get(0));
    }

    @Test
    void testUint16ArraySetPart4083() {
    Uint16Array t = new Uint16Array(1);
    t.set(new Uint16Array(new double[] {1e5}));
    assertEqualInt(34464, t.get(0));
    }

    @Test
    void testUint16ArraySetPart4084() {
    Uint16Array t = new Uint16Array(3);
    t.set(new Uint16Array(new double[] {65536, -1, 3.14}));
    assertEqualInt(0, t.get(0));
    assertEqualInt(65535, t.get(1));
    assertEqualInt(3, t.get(2));
    }

    @Test
    void testUint16ArraySetPart4085() {
    Uint16Array t = new Uint16Array(1);
    t.set(new Uint16Array(new int[] {-65536}));
    assertEqualInt(0, t.get(0));
    }

    @Test
    void testUint16ArraySetPart4086() {
    Uint16Array t = new Uint16Array(1);
    t.set(new Uint16Array(new int[] {0xFFFF}));
    assertEqualInt(65535, t.get(0));
    }

    @Test
    void testUint16ArraySetPart4087() {
    Uint16Array a = new Uint16Array(3);
    Uint16Array b = new Uint16Array(3);
    double[] fn = new double[] {1.9, 2.1, 3.99};
    List<Integer> ii = java.util.Arrays.asList(1, 2, 3);
    a.set(fn);
    b.set(ii);
    assertEqual(b.get(0).intValue(), a.get(0).intValue());
    assertEqual(b.get(1).intValue(), a.get(1).intValue());
    assertEqual(b.get(2).intValue(), a.get(2).intValue());
    }

    @Test
    void testUint16ArraySetPart4088() {
    Uint16Array a = new Uint16Array(2);
    Uint16Array b = new Uint16Array(2);
    double[] fn = new double[] {65536.9, -1.5};
    List<Integer> ii = java.util.Arrays.asList(0, 65535);
    a.set(fn);
    b.set(ii);
    assertEqual(b.get(0).intValue(), a.get(0).intValue());
    assertEqual(b.get(1).intValue(), a.get(1).intValue());
    }

    @Test
    void testUint16ArraySetPart4089() {
    Uint16Array src = Uint16Array.of(10, 20, 30);
    Uint16Array t = new Uint16Array(3);
    t.set(src);
    src.set(0, 99);
    assertEqualInt(10, t.get(0));
    }

    @Test
    void testUint16ArraySetPart4090() {
    Uint16Array src = Uint16Array.of(10, 20, 30);
    Uint16Array t = new Uint16Array(3);
    t.set(src);
    t.set(0, 99);
    assertEqualInt(10, src.get(0));
    }

    @Test
    void testUint16ArraySetPart4091() {
    List<Integer> src = java.util.Arrays.asList(5, 6, 7);
    Uint16Array t = new Uint16Array(3);
    t.set(src);
    t.set(0, 99);
    assertEqualInt(5, src.get(0));
    assertEqualInt(6, src.get(1));
    assertEqualInt(7, src.get(2));
    }

    @Test
    void testUint16ArraySetPart4092() {
    List<Integer> src = java.util.Arrays.asList(100, 200);
    Uint16Array t = new Uint16Array(3);
    t.set(src);
    t.set(1, 99);
    assertEqualInt(100, src.get(0));
    assertEqualInt(200, src.get(1));
    }

    @Test
    void testUint16ArraySetPart4093() {
    double[] src = new double[] {1.5, 2.5};
    Uint16Array t = new Uint16Array(3);
    t.set(src);
    t.set(0, 99);
    assertEqual(1.5, src[0]);
    assertEqual(2.5, src[1]);
    }

    @Test
    void testUint16ArraySetPart4094() {
    Uint16Array src = Uint16Array.of(7, 8, 9);
    Uint16Array a = new Uint16Array(3);
    Uint16Array b = new Uint16Array(3);
    a.set(src);
    b.set(src);
    a.set(0, 0);
    assertEqualInt(7, b.get(0));
    }

    @Test
    void testUint16ArraySetPart4095() {
    Uint16Array src = Uint16Array.of(1, 2);
    Uint16Array t = new Uint16Array(2);
    t.set(src);
    assertNotEqual(src.buffer(), t.buffer());
    }

    @Test
    void testUint16ArraySetPart4096() {
    List<Integer> src = java.util.Arrays.asList(3, 4);
    Uint16Array a = new Uint16Array(2);
    Uint16Array b = new Uint16Array(2);
    a.set(src);
    b.set(src);
    a.set(0, 99);
    assertEqualInt(3, b.get(0));
    }

    @Test
    void testUint16ArraySetPart4097() {
    Uint16Array t = Uint16Array.of(1, 2, 3);
    t.set(new Uint16Array(new int[] {10, 20}));
    assertEqualInt(10, t.get(0));
    assertEqualInt(20, t.get(1));
    assertEqualInt(3, t.get(2));
    }

    @Test
    void testUint16ArraySetPart4098() {
    Uint16Array t = new Uint16Array(5);
    t.set(0, 11);
    t.set(4, 55);
    t.set(new Uint16Array(new int[] {22, 33}), 1);
    assertEqualInt(11, t.get(0));
    assertEqualInt(22, t.get(1));
    assertEqualInt(33, t.get(2));
    assertEqualInt(0, t.get(3));
    assertEqualInt(55, t.get(4));
    }

    @Test
    void testUint16ArraySetPart4099() {
    Uint16Array t = new Uint16Array(2);
    Uint16Array src = Uint16Array.of(42, 43);
    t.set(src);
    src.set(0, 0);
    src.set(1, 0);
    assertEqualInt(42, t.get(0));
    assertEqualInt(43, t.get(1));
    }

    @Test
    void testUint16ArraySetPart4100() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30, 40, 50);
    Uint16Array t = new Uint16Array(5);
    t.set(src);
    for (int i = 0; i < 5; i++) {
    assertEqual(src.get(i).intValue(), t.get(i).intValue());
    }
    }

    @Test
    void testUint16ArraySetPart4101() {
    List<Integer> src = java.util.Arrays.asList(100, 200);
    Uint16Array t = new Uint16Array(4);
    t.set(0, 1);
    t.set(src, 2);
    assertEqualInt(100, t.get(2));
    assertEqualInt(200, t.get(3));
    assertEqualInt(1, t.get(0));
    }

    @Test
    void testUint16ArraySetPart4102() {
    Uint16Array full = Uint16Array.of(1, 2, 3, 4, 5);
    Uint16Array sub = full.subarray(1, 3);
    Uint16Array t = new Uint16Array(2);
    t.set(sub);
    full.set(1, 99);
    full.set(2, 88);
    assertEqualInt(2, t.get(0));
    assertEqualInt(3, t.get(1));
    }

    @Test
    void testUint16ArraySetPart4103() {
    List<Integer> src = java.util.Arrays.asList(5, 5, 5);
    Uint16Array a = new Uint16Array(3);
    Uint16Array b = new Uint16Array(3);
    a.set(src);
    b.set(src);
    a.set(0, 1);
    b.set(1, 2);
    assertEqualInt(5, a.get(1));
    assertEqualInt(5, b.get(0));
    }

    @Test
    void testUint16ArraySetPart4104() {
    Uint16Array src = new Uint16Array(3);
    src.set(0, 1);
    Uint16Array t = new Uint16Array(3);
    t.set(src);
    assertNotEqual(src.buffer(), t.buffer());
    }
}
