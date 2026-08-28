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
import basetype.common.Uint16Array;

import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Uint16ArraytoReversed —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint16ArraytoReversed extends BasTest {

    @Test
    void testUint16ArrayToReversed001() {
    Uint16Array arr = new Uint16Array();
    Uint16Array result = arr.toReversed();
    assertEqual(0, result.length());
    }

    @Test
    void testUint16ArrayToReversed002() {
    Uint16Array arr = Uint16Array.of(0);
    Uint16Array result = arr.toReversed();
    assertEqual(0, result.get(0));
    }

    @Test
    void testUint16ArrayToReversed003() {
    Uint16Array arr = Uint16Array.of(65535);
    Uint16Array result = arr.toReversed();
    assertEqual(65535, result.get(0));
    }

    @Test
    void testUint16ArrayToReversed004() {
    Uint16Array arr = Uint16Array.of(1);
    Uint16Array result = arr.toReversed();
    assertEqual(1, result.get(0));
    }

    @Test
    void testUint16ArrayToReversed005() {
    Uint16Array arr = Uint16Array.of(32768);
    Uint16Array result = arr.toReversed();
    assertEqual(32768, result.get(0));
    }

    @Test
    void testUint16ArrayToReversed006() {
    Uint16Array arr = Uint16Array.of(42);
    Uint16Array result = arr.toReversed();
    assertEqual(42, result.get(0));
    }

    @Test
    void testUint16ArrayToReversed007() {
    Uint16Array arr = Uint16Array.of(99);
    Uint16Array result = arr.toReversed();
    assertEqual(1, result.length());
    }

    @Test
    void testUint16ArrayToReversed008() {
    Uint16Array arr = Uint16Array.of(0, 1);
    Uint16Array result = arr.toReversed();
    assertEqual(1, result.get(0));
    assertEqual(0, result.get(1));
    }

    @Test
    void testUint16ArrayToReversed009() {
    Uint16Array arr = Uint16Array.of(1, 0);
    Uint16Array result = arr.toReversed();
    assertEqual(0, result.get(0));
    assertEqual(1, result.get(1));
    }

    @Test
    void testUint16ArrayToReversed010() {
    Uint16Array arr = Uint16Array.of(65535, 0);
    Uint16Array result = arr.toReversed();
    assertEqual(0, result.get(0));
    assertEqual(65535, result.get(1));
    }

    @Test
    void testUint16ArrayToReversed011() {
    Uint16Array arr = Uint16Array.of(0, 65535);
    Uint16Array result = arr.toReversed();
    assertEqual(65535, result.get(0));
    assertEqual(0, result.get(1));
    }

    @Test
    void testUint16ArrayToReversed012() {
    Uint16Array arr = Uint16Array.of(100, 200);
    Uint16Array result = arr.toReversed();
    assertEqual(200, result.get(0));
    assertEqual(100, result.get(1));
    }

    @Test
    void testUint16ArrayToReversed013() {
    Uint16Array arr = Uint16Array.of(32768, 65535);
    Uint16Array result = arr.toReversed();
    assertEqual(65535, result.get(0));
    assertEqual(32768, result.get(1));
    }

    @Test
    void testUint16ArrayToReversed014() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    Uint16Array result = arr.toReversed();
    assertEqual(3, result.get(0));
    assertEqual(2, result.get(1));
    assertEqual(1, result.get(2));
    }

    @Test
    void testUint16ArrayToReversed015() {
    Uint16Array arr = Uint16Array.of(3, 2, 1);
    Uint16Array result = arr.toReversed();
    assertEqual(1, result.get(0));
    assertEqual(2, result.get(1));
    assertEqual(3, result.get(2));
    }

    @Test
    void testUint16ArrayToReversed016() {
    Uint16Array arr = Uint16Array.of(0, 0, 0);
    Uint16Array result = arr.toReversed();
    assertEqual(0, result.get(0));
    assertEqual(0, result.get(1));
    assertEqual(0, result.get(2));
    }

    @Test
    void testUint16ArrayToReversed017() {
    Uint16Array arr = Uint16Array.of(65535, 65535, 65535);
    Uint16Array result = arr.toReversed();
    assertEqual(65535, result.get(0));
    assertEqual(65535, result.get(1));
    assertEqual(65535, result.get(2));
    }

    @Test
    void testUint16ArrayToReversed018() {
    Uint16Array arr = Uint16Array.of(0, 65535, 0);
    Uint16Array result = arr.toReversed();
    assertEqual(0, result.get(0));
    assertEqual(65535, result.get(1));
    assertEqual(0, result.get(2));
    }

    @Test
    void testUint16ArrayToReversed019() {
    Uint16Array arr = Uint16Array.of(1, 2, 1);
    Uint16Array result = arr.toReversed();
    assertEqual(1, result.get(0));
    assertEqual(2, result.get(1));
    assertEqual(1, result.get(2));
    }

    @Test
    void testUint16ArrayToReversed020() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4);
    Uint16Array result = arr.toReversed();
    assertEqual(4, result.get(0));
    assertEqual(3, result.get(1));
    assertEqual(2, result.get(2));
    assertEqual(1, result.get(3));
    }

    @Test
    void testUint16ArrayToReversed021() {
    Uint16Array arr = Uint16Array.of(4, 3, 2, 1);
    Uint16Array result = arr.toReversed();
    assertEqual(1, result.get(0));
    assertEqual(2, result.get(1));
    assertEqual(3, result.get(2));
    assertEqual(4, result.get(3));
    }

    @Test
    void testUint16ArrayToReversed022() {
    Uint16Array arr = Uint16Array.of(0, 1, 2, 3);
    Uint16Array result = arr.toReversed();
    assertEqual(3, result.get(0));
    assertEqual(2, result.get(1));
    assertEqual(1, result.get(2));
    assertEqual(0, result.get(3));
    }

    @Test
    void testUint16ArrayToReversed023() {
    Uint16Array arr = Uint16Array.of(100, 200, 300, 400);
    Uint16Array result = arr.toReversed();
    assertEqual(400, result.get(0));
    assertEqual(300, result.get(1));
    assertEqual(200, result.get(2));
    assertEqual(100, result.get(3));
    }

    @Test
    void testUint16ArrayToReversed024() {
    Uint16Array arr = Uint16Array.of(1, 2, 2, 1);
    Uint16Array result = arr.toReversed();
    assertEqual(1, result.get(0));
    assertEqual(2, result.get(1));
    assertEqual(2, result.get(2));
    assertEqual(1, result.get(3));
    }

    @Test
    void testUint16ArrayToReversed025() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4, 5);
    Uint16Array result = arr.toReversed();
    assertEqual(5, result.get(0));
    assertEqual(4, result.get(1));
    assertEqual(3, result.get(2));
    assertEqual(2, result.get(3));
    assertEqual(1, result.get(4));
    }

    @Test
    void testUint16ArrayToReversed026() {
    Uint16Array arr = Uint16Array.of(5, 4, 3, 2, 1);
    Uint16Array result = arr.toReversed();
    assertEqual(1, result.get(0));
    assertEqual(2, result.get(1));
    assertEqual(3, result.get(2));
    assertEqual(4, result.get(3));
    assertEqual(5, result.get(4));
    }

    @Test
    void testUint16ArrayToReversed027() {
    Uint16Array arr = Uint16Array.of(0, 1, 2, 3, 4);
    Uint16Array result = arr.toReversed();
    assertEqual(4, result.get(0));
    assertEqual(3, result.get(1));
    assertEqual(2, result.get(2));
    assertEqual(1, result.get(3));
    assertEqual(0, result.get(4));
    }

    @Test
    void testUint16ArrayToReversed028() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array result = arr.toReversed();
    assertEqual(50, result.get(0));
    assertEqual(40, result.get(1));
    assertEqual(30, result.get(2));
    assertEqual(20, result.get(3));
    assertEqual(10, result.get(4));
    }

    @Test
    void testUint16ArrayToReversed029() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 2, 1);
    Uint16Array result = arr.toReversed();
    assertEqual(1, result.get(0));
    assertEqual(2, result.get(1));
    assertEqual(3, result.get(2));
    assertEqual(2, result.get(3));
    assertEqual(1, result.get(4));
    }

    @Test
    void testUint16ArrayToReversed030() {
    Uint16Array arr = Uint16Array.of(1, 1, 2, 2, 3, 3);
    Uint16Array result = arr.toReversed();
    assertEqual(3, result.get(0));
    assertEqual(3, result.get(1));
    assertEqual(2, result.get(2));
    assertEqual(2, result.get(3));
    assertEqual(1, result.get(4));
    assertEqual(1, result.get(5));
    }

    @Test
    void testUint16ArrayToReversed031() {
    Uint16Array arr = Uint16Array.of(0, 0, 0, 1, 1, 1);
    Uint16Array result = arr.toReversed();
    assertEqual(1, result.get(0));
    assertEqual(1, result.get(1));
    assertEqual(1, result.get(2));
    assertEqual(0, result.get(3));
    assertEqual(0, result.get(4));
    assertEqual(0, result.get(5));
    }

    @Test
    void testUint16ArrayToReversed032() {
    Uint16Array arr = Uint16Array.of(6, 5, 4, 3, 2, 1);
    Uint16Array result = arr.toReversed();
    assertEqual(1, result.get(0));
    assertEqual(2, result.get(1));
    assertEqual(3, result.get(2));
    assertEqual(4, result.get(3));
    assertEqual(5, result.get(4));
    assertEqual(6, result.get(5));
    }

    @Test
    void testUint16ArrayToReversed033() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4, 5, 6);
    Uint16Array result = arr.toReversed();
    assertEqual(6, result.get(0));
    assertEqual(5, result.get(1));
    assertEqual(4, result.get(2));
    assertEqual(3, result.get(3));
    assertEqual(2, result.get(4));
    assertEqual(1, result.get(5));
    }

    @Test
    void testUint16ArrayToReversed034() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50, 60, 70, 80);
    Uint16Array result = arr.toReversed();
    assertEqual(80, result.get(0));
    assertEqual(70, result.get(1));
    assertEqual(60, result.get(2));
    assertEqual(50, result.get(3));
    assertEqual(40, result.get(4));
    assertEqual(30, result.get(5));
    assertEqual(20, result.get(6));
    assertEqual(10, result.get(7));
    }

    @Test
    void testUint16ArrayToReversed035() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    Uint16Array result = arr.toReversed();
    assertEqual(10, result.get(0));
    assertEqual(9, result.get(1));
    assertEqual(8, result.get(2));
    assertEqual(7, result.get(3));
    assertEqual(6, result.get(4));
    assertEqual(5, result.get(5));
    assertEqual(4, result.get(6));
    assertEqual(3, result.get(7));
    assertEqual(2, result.get(8));
    assertEqual(1, result.get(9));
    }

    @Test
    void testUint16ArrayToReversed036() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    Uint16Array result = arr.toReversed();
    assertEqual(3, result.get(0));
    assertEqual(1, result.get(2));
    assertEqual(1, arr.get(0));
    }

    @Test
    void testUint16ArrayToReversed037() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    Uint16Array result = arr.toReversed();
    assertNotEqual(arr, result);
    assertEqual("3,2,1", result.join(","));
    assertEqual("1,2,3", arr.join(","));
    }

    @Test
    void testUint16ArrayToReversed038() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4, 5);
    Uint16Array result = arr.toReversed();
    assertEqual(arr.length(), result.length());
    }

    @Test
    void testUint16ArrayToReversed039() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    int originalLength = arr.length();
    Uint16Array result = arr.toReversed();
    assertEqual(originalLength, arr.length());
    }

    @Test
    void testUint16ArrayToReversed040() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    int first = arr.get(0);
    Uint16Array result = arr.toReversed();
    assertEqual(first, arr.get(0));
    }

    @Test
    void testUint16ArrayToReversed041() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    int last = arr.get(arr.length() - 1);
    Uint16Array result = arr.toReversed();
    assertEqual(last, arr.get(arr.length() - 1));
    }

    @Test
    void testUint16ArrayToReversed042() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40);
    Uint16Array snapshot = Uint16Array.of(10, 20, 30, 40);
    Uint16Array result = arr.toReversed();
    for (int i = 0; i < arr.length(); i++) {
    assertEqual(snapshot.get(i).intValue(), arr.get(i));
    }
    }

    @Test
    void testUint16ArrayToReversed043() {
    Uint16Array arr = Uint16Array.of(5, 4, 3, 2, 1);
    Uint16Array result = arr.toReversed();
    assertEqual("1,2,3,4,5", result.join(","));
    assertNotEqual(arr, result);
    assertEqual(5, arr.get(0));
    assertEqual(1, arr.get(4));
    }

    @Test
    void testUint16ArrayToReversed044() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4, 5);
    Uint16Array reversed = arr.toReversed();
    Uint16Array doubleReversed = reversed.toReversed();
    assertEqual(1, doubleReversed.get(0));
    assertEqual(2, doubleReversed.get(1));
    assertEqual(3, doubleReversed.get(2));
    assertEqual(4, doubleReversed.get(3));
    assertEqual(5, doubleReversed.get(4));
    }

    @Test
    void testUint16ArrayToReversed045() {
    Uint16Array arr = Uint16Array.of(100, 200, 300);
    Uint16Array reversed = arr.toReversed();
    Uint16Array doubleReversed = reversed.toReversed();
    assertEqual(arr.length(), doubleReversed.length());
    }

    @Test
    void testUint16ArrayToReversed046() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    Uint16Array reversed = arr.toReversed();
    Uint16Array doubleReversed = reversed.toReversed();
    assertNotEqual(arr, reversed);
    assertNotEqual(reversed, doubleReversed);
    assertEqual("3,2,1", reversed.join(","));
    assertEqual("1,2,3", doubleReversed.join(","));
    assertEqual("1,2,3", arr.join(","));
    }

    @Test
    void testUint16ArrayToReversed047() {
    Uint16Array arr = Uint16Array.of(17, 4096, 65535, 802);
    Uint16Array result = arr.toReversed();
    assertNotEqual(arr, result);
    assertEqual("802,65535,4096,17", result.join(","));
    assertEqual("17,4096,65535,802", arr.join(","));
    }

    @Test
    void testUint16ArrayToReversed048() {
    Uint16Array arr = Uint16Array.of(100, 200, 300, 400, 500);
    Uint16Array result = arr.toReversed();
    assertNotEqual(arr, result);
    assertEqual("500,400,300,200,100", result.join(","));
    assertEqual("100,200,300,400,500", arr.join(","));
    }

    @Test
    void testUint16ArrayToReversed049() {
    Uint16Array arr = Uint16Array.of(54321, 9, 1200, 77, 30005, 2);
    Uint16Array result = arr.toReversed();
    assertNotEqual(arr, result);
    assertEqual("2,30005,77,1200,9,54321", result.join(","));
    assertEqual("54321,9,1200,77,30005,2", arr.join(","));
    }

    @Test
    void testUint16ArrayToReversed050() {
    Uint16Array arr = Uint16Array.of(1, 60000, 23, 45001, 999);
    Uint16Array result = arr.toReversed();
    assertNotEqual(arr, result);
    assertEqual("999,45001,23,60000,1", result.join(","));
    assertEqual("1,60000,23,45001,999", arr.join(","));
    }

    @Test
    void testUint16ArrayToReversed051() {
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    Uint16Array result = arr.toReversed();
    assertEqual(2, result.get(0));
    assertEqual(1, result.get(1));
    assertEqual(3, result.get(2));
    }

    @Test
    void testUint16ArrayToReversed052() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30);
    Uint16Array arr = new Uint16Array(src);
    Uint16Array result = arr.toReversed();
    assertEqual(30, result.get(0));
    assertEqual(20, result.get(1));
    assertEqual(10, result.get(2));
    }

    @Test
    void testUint16ArrayToReversed053() {
    Uint16Array arr = new Uint16Array(4);
    arr.set(0, 7);
    arr.set(1, 8);
    arr.set(2, 9);
    arr.set(3, 10);
    Uint16Array result = arr.toReversed();
    assertEqual(10, result.get(0));
    assertEqual(9, result.get(1));
    assertEqual(8, result.get(2));
    assertEqual(7, result.get(3));
    }

    @Test
    void testUint16ArrayToReversed054() {
    Uint16Array original = Uint16Array.of(5, 15, 25);
    Uint16Array arr = new Uint16Array(original);
    Uint16Array result = arr.toReversed();
    assertEqual(25, result.get(0));
    assertEqual(15, result.get(1));
    assertEqual(5, result.get(2));
    }

    @Test
    void testUint16ArrayToReversed055() {
    Uint16Array arr = Uint16Array.of(0, 0, 0, 0, 0);
    Uint16Array result = arr.toReversed();
    assertEqual(0, result.get(0));
    assertEqual(0, result.get(4));
    }

    @Test
    void testUint16ArrayToReversed056() {
    Uint16Array arr = Uint16Array.of(65535, 65535, 65535, 65535);
    Uint16Array result = arr.toReversed();
    assertEqual(65535, result.get(0));
    assertEqual(65535, result.get(1));
    assertEqual(65535, result.get(2));
    assertEqual(65535, result.get(3));
    }

    @Test
    void testUint16ArrayToReversed057() {
    Uint16Array arr = Uint16Array.of(0, 65535, 32768, 1);
    Uint16Array result = arr.toReversed();
    assertEqual(1, result.get(0));
    assertEqual(32768, result.get(1));
    assertEqual(65535, result.get(2));
    assertEqual(0, result.get(3));
    }

    @Test
    void testUint16ArrayToReversed058() {
    Uint16Array arr = Uint16Array.of(65535, 0, 1, 65535);
    Uint16Array result = arr.toReversed();
    assertEqual(65535, result.get(0));
    assertEqual(1, result.get(1));
    assertEqual(0, result.get(2));
    assertEqual(65535, result.get(3));
    }

    @Test
    void testUint16ArrayToReversed059() {
    Uint16Array arr = Uint16Array.of(42, 42, 42, 42);
    Uint16Array result = arr.toReversed();
    assertEqual(42, result.get(0));
    assertEqual(42, result.get(1));
    assertEqual(42, result.get(2));
    assertEqual(42, result.get(3));
    }

    @Test
    void testUint16ArrayToReversed060() {
    Uint16Array arr = Uint16Array.of(16384, 32768, 49152);
    Uint16Array result = arr.toReversed();
    assertEqual(49152, result.get(0));
    assertEqual(32768, result.get(1));
    assertEqual(16384, result.get(2));
    }

    @Test
    void testUint16ArrayToReversed061() {
    Uint16Array s = new Uint16Array();
    Uint16Array r = s.toReversed();
    assertEqual("", r.join(","));
    assertEqual("", s.join(","));
    }

    @Test
    void testUint16ArrayToReversed062() {
    Uint16Array s = Uint16Array.of(42);
    Uint16Array r = s.toReversed();
    assertEqual("42", r.join(","));
    assertEqual("42", s.join(","));
    }

    @Test
    void testUint16ArrayToReversed063() {
    Uint16Array s = Uint16Array.of(1, 2, 3, 4);
    Uint16Array r = s.toReversed();
    assertEqual("4,3,2,1", r.join(","));
    assertEqual("1,2,3,4", s.join(","));
    }

    @Test
    void testUint16ArrayToReversed064() {
    Uint16Array s = Uint16Array.of(1, 2, 3, 4, 5);
    Uint16Array r = s.toReversed();
    assertEqual("5,4,3,2,1", r.join(","));
    assertEqual("1,2,3,4,5", s.join(","));
    }

    @Test
    void testUint16ArrayToReversed065() {
    Uint16Array s = Uint16Array.of(0, 32768, 65535);
    Uint16Array r = s.toReversed();
    assertEqual("65535,32768,0", r.join(","));
    assertEqual("0,32768,65535", s.join(","));
    }

    @Test
    void testUint16ArrayToReversed066() {
    Uint16Array s = new Uint16Array(new int[] {-1, 65536, 65537});
    Uint16Array r = s.toReversed();
    assertEqual("1,0,65535", r.join(","));
    assertEqual("65535,0,1", s.join(","));
    }

    @Test
    void testUint16ArrayToReversed067() {
    Uint16Array s = Uint16Array.of(2, 2, 3, 3, 4);
    Uint16Array r = s.toReversed();
    assertEqual("4,3,3,2,2", r.join(","));
    assertEqual("2,2,3,3,4", s.join(","));
    }

    @Test
    void testUint16ArrayToReversed068() {
    Uint16Array s = Uint16Array.of(10, 20, 30);
    Uint16Array r = s.toReversed();
    r.set(0, 99);
    assertEqual("99,20,10", r.join(","));
    assertEqual("10,20,30", s.join(","));
    }

    @Test
    void testUint16ArrayToReversed069() {
    Uint16Array s = Uint16Array.of(10, 20, 30);
    Uint16Array r = s.toReversed();
    s.set(2, 77);
    assertEqual("30,20,10", r.join(","));
    assertEqual("10,20,77", s.join(","));
    }

    @Test
    void testUint16ArrayToReversed070() {
    ArrayBuffer b = new ArrayBuffer(10);
    Uint16Array all = new Uint16Array(b);
    all.set(Uint16Array.of(9, 1, 2, 3, 8));
    Uint16Array v = new Uint16Array(b, 2, 3);
    Uint16Array r = v.toReversed();
    assertEqual("3,2,1", r.join(","));
    assertEqual("9,1,2,3,8", all.join(","));
    }

    @Test
    void testUint16ArrayToReversed071() {
    Uint16Array s = Uint16Array.of(4, 5, 6);
    Uint16Array r = s.toReversed();
    assertNotEqual(s.buffer(), r.buffer());
    assertEqual("6,5,4", r.join(","));
    }

    @Test
    void testUint16ArrayToReversed072() {
    Uint16Array s = Uint16Array.of(6, 7, 8, 9);
    Uint16Array a = s.toReversed();
    Uint16Array b = a.toReversed();
    assertEqual("9,8,7,6", a.join(","));
    assertEqual("6,7,8,9", b.join(","));
    assertEqual("6,7,8,9", s.join(","));
    }

    @Test
    void testUint16ArrayToReversed073() {
    Uint16Array base = Uint16Array.of(9, 2, 4, 6, 8);
    Uint16Array v = base.subarray(1, 4);
    Uint16Array r = v.toReversed();
    base.set(2, 44);
    assertEqual("6,4,2", r.join(","));
    assertEqual("2,44,6", v.join(","));
    }

    @Test
    void testUint16ArrayToReversed074() {
    Uint16Array s = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array r = s.toReversed();
    assertEqual("50,40,30,20,10", r.join(","));
    assertEqual(30, r.get(2));
    }

    @Test
    void testUint16ArrayToReversed075() {
    Uint16Array s = Uint16Array.of(1, 2, 1, 2, 1, 2);
    Uint16Array r = s.toReversed();
    assertEqual("2,1,2,1,2,1", r.join(","));
    }

    @Test
    void testUint16ArrayToReversed076() {
    ArrayBuffer b = new ArrayBuffer(12);
    Uint16Array v = new Uint16Array(b, 4, 3);
    v.set(Uint16Array.of(3, 2, 1));
    Uint16Array r = v.toReversed();
    assertEqual(0, r.byteOffset());
    assertEqual("1,2,3", r.join(","));
    }

    @Test
    void testUint16ArrayToReversed077() {
    ArrayBuffer b = new ArrayBuffer(6);
    Uint16Array s = new Uint16Array(b);
    s.set(Uint16Array.of(1, 2, 3));
    Uint16Array r = s.toReversed();
    new Uint16Array(b).set(0, 9);
    assertEqual("3,2,1", r.join(","));
    assertEqual("9,2,3", s.join(","));
    }

    @Test
    void testUint16ArrayToReversed078() {
    Uint16Array original = Uint16Array.of(1, 2, 3);
    Uint16Array copy = new Uint16Array(original);
    copy.set(0, 9);
    Uint16Array r = copy.toReversed();
    assertEqual("3,2,9", r.join(","));
    assertEqual("1,2,3", original.join(","));
    }

    @Test
    void testUint16ArrayToReversed079() {
    Uint16Array s = Uint16Array.of(1, 10, 100, 1000, 10000);
    Uint16Array r = s.toReversed();
    assertEqual("10000,1000,100,10,1", r.join(","));
    }
}
