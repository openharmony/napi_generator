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

import org.junit.jupiter.api.Test;

/**
 * Uint16Arrayslice02 —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint16Arrayslice02 extends BasTest {

    @Test
    void testUint16ArraySlicePart2001() {
    Uint16Array src = Uint16Array.of(10, 20, 30);
    Uint16Array r = src.slice();
    assertEqual(3, r.length());
    assertEqualInt(10, r.get(0));
    assertEqualInt(30, r.get(2));
    }

    @Test
    void testUint16ArraySlicePart2002() {
    Uint16Array src = Uint16Array.of(10, 20, 30);
    Uint16Array r = src.slice(0, 0);
    assertEqual(0, r.length());
    }

    @Test
    void testUint16ArraySlicePart2003() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array r = src.slice(0);
    assertEqual(5, r.length());
    assertEqualInt(10, r.get(0));
    assertEqualInt(50, r.get(4));
    }

    @Test
    void testUint16ArraySlicePart2004() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array r = src.slice(1, 4);
    assertEqual(3, r.length());
    assertEqualInt(20, r.get(0));
    assertEqualInt(40, r.get(2));
    }

    @Test
    void testUint16ArraySlicePart2005() {
    Uint16Array src = Uint16Array.of(10, 20, 30);
    Uint16Array r = src.slice(2, 2);
    assertEqual(0, r.length());
    }

    @Test
    void testUint16ArraySlicePart2006() {
    Uint16Array src = Uint16Array.of(10, 20, 30);
    Uint16Array r = src.slice(0, 2);
    assertEqual(2, r.length());
    assertEqualInt(10, r.get(0));
    assertEqualInt(20, r.get(1));
    }

    @Test
    void testUint16ArraySlicePart2007() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array r = src.slice();
    assertEqual(5, r.length());
    assertEqualInt(10, r.get(0));
    assertEqualInt(50, r.get(4));
    }

    @Test
    void testUint16ArraySlicePart2008() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array r = src.slice(0, 5);
    assertEqual(5, r.length());
    assertEqualInt(10, r.get(0));
    assertEqualInt(50, r.get(4));
    }

    @Test
    void testUint16ArraySlicePart2009() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array r = src.slice(0, 1);
    assertEqual(1, r.length());
    assertEqualInt(10, r.get(0));
    }

    @Test
    void testUint16ArraySlicePart2010() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array r = src.slice(4, 5);
    assertEqual(1, r.length());
    assertEqualInt(50, r.get(0));
    }

    @Test
    void testUint16ArraySlicePart2011() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array r = src.slice(2, 3);
    assertEqual(1, r.length());
    assertEqualInt(30, r.get(0));
    }

    @Test
    void testUint16ArraySlicePart2012() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array r = src.slice(0, 3);
    assertEqual(3, r.length());
    assertEqualInt(10, r.get(0));
    assertEqualInt(30, r.get(2));
    }

    @Test
    void testUint16ArraySlicePart2013() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array r = src.slice(2, 5);
    assertEqual(3, r.length());
    assertEqualInt(30, r.get(0));
    assertEqualInt(50, r.get(2));
    }

    @Test
    void testUint16ArraySlicePart2014() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array r = src.slice(1, 2);
    assertEqual(1, r.length());
    assertEqualInt(20, r.get(0));
    }

    @Test
    void testUint16ArraySlicePart2015() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array r = src.slice(3, 5);
    assertEqual(2, r.length());
    assertEqualInt(40, r.get(0));
    assertEqualInt(50, r.get(1));
    }

    @Test
    void testUint16ArraySlicePart2016() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array r = src.slice(0, 0);
    assertEqual(0, r.length());
    }

    @Test
    void testUint16ArraySlicePart2017() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array r = src.slice(1, 1);
    assertEqual(0, r.length());
    }

    @Test
    void testUint16ArraySlicePart2018() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array r = src.slice(5);
    assertEqual(0, r.length());
    }

    @Test
    void testUint16ArraySlicePart2019() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array r = src.slice(-2);
    assertEqual(2, r.length());
    assertEqualInt(40, r.get(0));
    assertEqualInt(50, r.get(1));
    }

    @Test
    void testUint16ArraySlicePart2020() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array r = src.slice(-3, -1);
    assertEqual(2, r.length());
    assertEqualInt(30, r.get(0));
    assertEqualInt(40, r.get(1));
    }

    @Test
    void testUint16ArraySlicePart2021() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array r = src.slice(-1);
    assertEqual(1, r.length());
    assertEqualInt(50, r.get(0));
    }

    @Test
    void testUint16ArraySlicePart2022() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array r = src.slice(-5);
    assertEqual(5, r.length());
    assertEqualInt(10, r.get(0));
    assertEqualInt(50, r.get(4));
    }

    @Test
    void testUint16ArraySlicePart2023() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array r = src.slice(-3, 5);
    assertEqual(3, r.length());
    assertEqualInt(30, r.get(0));
    assertEqualInt(50, r.get(2));
    }

    @Test
    void testUint16ArraySlicePart2024() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array r = src.slice(0, -2);
    assertEqual(3, r.length());
    assertEqualInt(10, r.get(0));
    assertEqualInt(30, r.get(2));
    }

    @Test
    void testUint16ArraySlicePart2025() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array r = src.slice(-4, -2);
    assertEqual(2, r.length());
    assertEqualInt(20, r.get(0));
    assertEqualInt(30, r.get(1));
    }

    @Test
    void testUint16ArraySlicePart2026() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array r = src.slice(-2, -1);
    assertEqual(1, r.length());
    assertEqualInt(40, r.get(0));
    }

    @Test
    void testUint16ArraySlicePart2027() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array r = src.slice(-10);
    assertEqual(5, r.length());
    assertEqualInt(10, r.get(0));
    }

    @Test
    void testUint16ArraySlicePart2028() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array r = src.slice(0, 10);
    assertEqual(5, r.length());
    assertEqualInt(10, r.get(0));
    assertEqualInt(50, r.get(4));
    }

    @Test
    void testUint16ArraySlicePart2029() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array r = src.slice(10);
    assertEqual(0, r.length());
    }

    @Test
    void testUint16ArraySlicePart2030() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array r = src.slice(-10, 0);
    assertEqual(0, r.length());
    }

    @Test
    void testUint16ArraySlicePart2031() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array r = src.slice(3, 1);
    assertEqual(0, r.length());
    }

    @Test
    void testUint16ArraySlicePart2032() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array r = src.slice();
    assertEqual("10,20,30,40,50", r.join(","));
    assertNotEqual(src.buffer(), r.buffer());
    r.set(0, 99);
    assertEqualInt(10, src.get(0));
    src.set(1, 88);
    assertEqualInt(20, r.get(1));
    }

    @Test
    void testUint16ArraySlicePart2033() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array r = src.slice();
    assertEqual(10, r.byteLength());
    }

    @Test
    void testUint16ArraySlicePart2034() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array r = src.slice(1, 4);
    assertEqual(6, r.byteLength());
    }

    @Test
    void testUint16ArraySlicePart2035() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array r = src.slice(0, 1);
    assertEqual(2, r.byteLength());
    }

    @Test
    void testUint16ArraySlicePart2036() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array r = src.slice(-2);
    assertEqual(4, r.byteLength());
    }

    @Test
    void testUint16ArraySlicePart2037() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array result = src.slice();
    result.set(0, 99);
    assertEqualInt(10, src.get(0));
    }

    @Test
    void testUint16ArraySlicePart2038() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array result = src.slice(0, 3);
    assertEqual(3, result.length());
    assertEqual("10,20,30", result.join(","));
    }

    @Test
    void testUint16ArraySlicePart2039() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array result = src.slice(0, 3);
    result.set(1, 99);
    assertEqualInt(20, src.get(1));
    }

    @Test
    void testUint16ArraySlicePart2040() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array result = src.slice(-2);
    assertEqual(2, result.length());
    assertEqual("40,50", result.join(","));
    }

    @Test
    void testUint16ArraySlicePart2041() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array r = src.slice();
    assertNotEqual(src.buffer(), r.buffer());
    }

    @Test
    void testUint16ArraySlicePart2042() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array r = src.slice(1, 4);
    assertEqual(0, r.byteOffset());
    }

    @Test
    void testUint16ArraySlicePart2043() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array r = src.slice();
    src.set(0, 99);
    assertEqualInt(10, r.get(0));
    }

    @Test
    void testUint16ArraySlicePart2044() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array r = src.slice(1, 4);
    r.set(0, 99);
    assertEqualInt(20, src.get(1));
    }

    @Test
    void testUint16ArraySlicePart2045() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array r = src.slice(1, 4);
    src.set(1, 99);
    assertEqualInt(20, r.get(0));
    }

    @Test
    void testUint16ArraySlicePart2046() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array r = src.slice(1, 4);
    assertEqual(r.byteLength(), r.buffer().byteLength());
    }

    @Test
    void testUint16ArraySlicePart2047() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array r = src.slice(1, 4);
    assertNotEqual(src.buffer().byteLength(), r.buffer().byteLength());
    }

    @Test
    void testUint16ArraySlicePart2048() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array r = src.slice();
    Uint16Array bufView = new Uint16Array(r.buffer());
    bufView.set(0, 99);
    assertEqualInt(10, src.get(0));
    }

    @Test
    void testUint16ArraySlicePart2049() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array r = src.slice();
    Uint16Array bufView = new Uint16Array(src.buffer());
    bufView.set(0, 99);
    assertEqualInt(10, r.get(0));
    }

    @Test
    void testUint16ArraySlicePart2050() {
    Uint16Array src = Uint16Array.of(0, 65535, 32768, 65535);
    Uint16Array r = src.slice();
    assertEqualInt(0, r.get(0));
    assertEqualInt(65535, r.get(1));
    assertEqualInt(32768, r.get(2));
    assertEqualInt(65535, r.get(3));
    }

    @Test
    void testUint16ArraySlicePart2051() {
    Uint16Array src = Uint16Array.of(0, 65535, 32768);
    Uint16Array r = src.slice(0, 1);
    assertEqualInt(0, r.get(0));
    }

    @Test
    void testUint16ArraySlicePart2052() {
    Uint16Array src = Uint16Array.of(0, 65535, 32768);
    Uint16Array r = src.slice(1, 2);
    assertEqualInt(65535, r.get(0));
    }

    @Test
    void testUint16ArraySlicePart2053() {
    Uint16Array src = Uint16Array.of(0, 65535, 32768);
    Uint16Array r = src.slice(2, 3);
    assertEqualInt(32768, r.get(0));
    }

    @Test
    void testUint16ArraySlicePart2054() {
    Uint16Array src = Uint16Array.of(0, 65535, 32768);
    Uint16Array r = src.slice(-2, -1);
    assertEqualInt(65535, r.get(0));
    }

    @Test
    void testUint16ArraySlicePart2055() {
    Uint16Array src = new Uint16Array();
    Uint16Array r = src.slice(0);
    assertEqual(0, r.length());
    }

    @Test
    void testUint16ArraySlicePart2056() {
    Uint16Array src = new Uint16Array();
    Uint16Array r = src.slice(0, 0);
    assertEqual(0, r.length());
    }

    @Test
    void testUint16ArraySlicePart2057() {
    Uint16Array src = Uint16Array.of(42);
    Uint16Array r = src.slice();
    assertEqual(1, r.length());
    }

    @Test
    void testUint16ArraySlicePart2058() {
    Uint16Array src = Uint16Array.of(42);
    Uint16Array r = src.slice(0);
    assertEqual(1, r.length());
    }

    @Test
    void testUint16ArraySlicePart2059() {
    Uint16Array src = Uint16Array.of(42);
    Uint16Array r = src.slice(1);
    assertEqual(0, r.length());
    }

    @Test
    void testUint16ArraySlicePart2060() {
    Uint16Array src = Uint16Array.of(42);
    Uint16Array r = src.slice(-1);
    assertEqual(1, r.length());
    }

    @Test
    void testUint16ArraySlicePart2061() {
    Uint16Array src = Uint16Array.of(42);
    Uint16Array r = src.slice();
    assertEqualInt(42, r.get(0));
    }

    @Test
    void testUint16ArraySlicePart2062() {
    Uint16Array src = Uint16Array.of(100, 200);
    Uint16Array r = src.slice(0, 1);
    assertEqual(1, r.length());
    assertEqualInt(100, r.get(0));
    }

    @Test
    void testUint16ArraySlicePart2063() {
    Uint16Array src = Uint16Array.of(100, 200);
    Uint16Array r = src.slice(1, 2);
    assertEqual(1, r.length());
    assertEqualInt(200, r.get(0));
    }

    @Test
    void testUint16ArraySlicePart2064() {
    Uint16Array src = Uint16Array.of(100, 200);
    Uint16Array r = src.slice();
    assertEqual(4, r.byteLength());
    }

    @Test
    void testUint16ArraySlicePart2065() {
    Uint16Array src = Uint16Array.of(100, 200);
    Uint16Array r = src.slice(0, 1);
    assertEqual(2, r.byteLength());
    }

    @Test
    void testUint16ArraySlicePart2066() {
    Uint16Array src = Uint16Array.of(65535, 65535, 65535);
    Uint16Array r = src.slice();
    assertEqual(3, r.length());
    }

    @Test
    void testUint16ArraySlicePart2067() {
    Uint16Array src = Uint16Array.of(65535, 65535, 65535);
    Uint16Array r = src.slice();
    assertEqualInt(65535, r.get(0));
    assertEqualInt(65535, r.get(2));
    }

    @Test
    void testUint16ArraySlicePart2068() {
    Uint16Array src = Uint16Array.of(65535, 65535, 65535);
    Uint16Array r = src.slice(1);
    assertEqual(2, r.length());
    }

    @Test
    void testUint16ArraySlicePart2069() {
    Uint16Array src = Uint16Array.of(0, 0, 0);
    Uint16Array r = src.slice();
    assertEqual(3, r.length());
    }

    @Test
    void testUint16ArraySlicePart2070() {
    Uint16Array src = Uint16Array.of(0, 0, 0);
    Uint16Array r = src.slice();
    assertEqualInt(0, r.get(0));
    assertEqualInt(0, r.get(2));
    }

    @Test
    void testUint16ArraySlicePart2071() {
    Uint16Array src = Uint16Array.of(0, 0, 0);
    Uint16Array r = src.slice(1);
    assertEqual(2, r.length());
    }

    @Test
    void testUint16ArraySlicePart2072() {
    Uint16Array src = new Uint16Array(100);
    for (int i = 0; i < 100; i++) {
    src.set(i, i);
    }
    Uint16Array r = src.slice();
    assertEqual(100, r.length());
    }

    @Test
    void testUint16ArraySlicePart2073() {
    Uint16Array src = new Uint16Array(100);
    for (int i = 0; i < 100; i++) {
    src.set(i, i);
    }
    Uint16Array r = src.slice(50);
    assertEqual(50, r.length());
    }

    @Test
    void testUint16ArraySlicePart2074() {
    Uint16Array src = new Uint16Array(100);
    for (int i = 0; i < 100; i++) {
    src.set(i, i);
    }
    Uint16Array r = src.slice(0, 50);
    assertEqual(50, r.length());
    }

    @Test
    void testUint16ArraySlicePart2075() {
    Uint16Array src = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array r = src.slice();
    assertEqual(0, r.byteOffset());
    }

    @Test
    void testUint16ArraySlicePart2076() {
    Uint16Array a = Uint16Array.of(1, 2, 3, 4);
    Uint16Array r = a.slice(-99, 2);
    assertEqual("1,2", r.join(","));
    }

    @Test
    void testUint16ArraySlicePart2077() {
    Uint16Array a = Uint16Array.of(1, 2, 3, 4);
    Uint16Array r = a.slice(2, 99);
    assertEqual("3,4", r.join(","));
    }

    @Test
    void testUint16ArraySlicePart2078() {
    Uint16Array a = Uint16Array.of(1, 2, 3);
    Uint16Array r = a.slice(1, 1);
    assertEqual("", r.join(","));
    assertEqual(0, r.length());
    }

    @Test
    void testUint16ArraySlicePart2079() {
    Uint16Array a = Uint16Array.of(1, 2, 3, 4, 5);
    Uint16Array r = a.slice(-4, -1);
    assertEqual("2,3,4", r.join(","));
    }

    @Test
    void testUint16ArraySlicePart2080() {
    ArrayBuffer b = new ArrayBuffer(14);
    Uint16Array all = new Uint16Array(b);
    all.set(Uint16Array.of(9, 1, 2, 3, 4, 5, 8));
    Uint16Array v = new Uint16Array(b, 2, 5);
    Uint16Array r = v.slice(1, 4);
    assertEqual("2,3,4", r.join(","));
    assertEqual(0, r.byteOffset());
    }
}
