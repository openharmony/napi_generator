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
 * Uint16Arraysubarray02 —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint16Arraysubarray02 extends BasTest {

    @Test
    void testUint16ArraySubarrayPart2001() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray();
    assertEqual(5, sub.length());
    assertEqual(10, sub.get(0));
    assertEqual(50, sub.get(4));
    }

    @Test
    void testUint16ArraySubarrayPart2002() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0);
    assertEqual(5, sub.length());
    assertEqual(10, sub.get(0));
    assertEqual(50, sub.get(4));
    }

    @Test
    void testUint16ArraySubarrayPart2003() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0, 5);
    assertEqual(10, sub.get(0));
    assertEqual(50, sub.get(4));
    }

    @Test
    void testUint16ArraySubarrayPart2004() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(3, 3);
    assertEqual(0, sub.length());
    }

    @Test
    void testUint16ArraySubarrayPart2005() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0, 10);
    assertEqual(10, sub.get(0));
    assertEqual(50, sub.get(4));
    }

    @Test
    void testUint16ArraySubarrayPart2006() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(-3);
    assertEqual(30, sub.get(0));
    assertEqual(50, sub.get(2));
    }

    @Test
    void testUint16ArraySubarrayPart2007() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(-1);
    assertEqual(50, sub.get(0));
    }

    @Test
    void testUint16ArraySubarrayPart2008() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0, -1);
    assertEqual(10, sub.get(0));
    assertEqual(40, sub.get(3));
    }

    @Test
    void testUint16ArraySubarrayPart2009() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(-4, -1);
    assertEqual(20, sub.get(0));
    assertEqual(40, sub.get(2));
    }

    @Test
    void testUint16ArraySubarrayPart2010() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(-10);
    assertEqual(10, sub.get(0));
    assertEqual(50, sub.get(4));
    }

    @Test
    void testUint16ArraySubarrayPart2011() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(-1, -3);
    assertEqual(0, sub.length());
    }

    @Test
    void testUint16ArraySubarrayPart2012() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(1);
    assertEqual(20, sub.get(0));
    assertEqual(50, sub.get(3));
    }

    @Test
    void testUint16ArraySubarrayPart2013() {
    Uint16Array arr = Uint16Array.of(49152, 7, 32001, 88, 605, 17003);
    Uint16Array sub = arr.subarray(0, 3);
    assertEqual(49152, sub.get(0));
    assertEqual(32001, sub.get(2));
    }

    @Test
    void testUint16ArraySubarrayPart2014() {
    Uint16Array arr = new Uint16Array();
    Uint16Array sub = arr.subarray();
    assertEqual(0, sub.length());
    }

    @Test
    void testUint16ArraySubarrayPart2015() {
    Uint16Array arr = Uint16Array.of(901, 65534, 42, 17000, 3, 808);
    Uint16Array sub = arr.subarray();
    assertEqual(901, sub.get(0));
    assertEqual(808, sub.get(5));
    }

    @Test
    void testUint16ArraySubarrayPart2016() {
    Uint16Array arr = Uint16Array.of(60001, 14, 4095, 222, 50000, 71);
    Uint16Array sub = arr.subarray(1, 4);
    assertEqual(14, sub.get(0));
    assertEqual(222, sub.get(2));
    }

    @Test
    void testUint16ArraySubarrayPart2017() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(1, 4);
    assertEqual(20, sub.get(0));
    assertEqual(30, sub.get(1));
    assertEqual(40, sub.get(2));
    }

    @Test
    void testUint16ArraySubarrayPart2018() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0, 1);
    assertEqual(10, sub.get(0));
    }

    @Test
    void testUint16ArraySubarrayPart2019() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(3, 5);
    assertEqual(40, sub.get(0));
    assertEqual(50, sub.get(1));
    }

    @Test
    void testUint16ArraySubarrayPart2020() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(-3);
    assertEqual(30, sub.get(0));
    assertEqual(40, sub.get(1));
    assertEqual(50, sub.get(2));
    }

    @Test
    void testUint16ArraySubarrayPart2021() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(-4, -1);
    assertEqual(20, sub.get(0));
    assertEqual(30, sub.get(1));
    assertEqual(40, sub.get(2));
    }

    @Test
    void testUint16ArraySubarrayPart2022() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0, 3);
    assertEqual(10, sub.get(0));
    assertEqual(20, sub.get(1));
    assertEqual(30, sub.get(2));
    }

    @Test
    void testUint16ArraySubarrayPart2023() {
    Uint16Array arr = Uint16Array.of(100, 200, 300);
    Uint16Array sub = arr.subarray(1, 3);
    assertEqual(200, sub.get(0));
    assertEqual(300, sub.get(1));
    }

    @Test
    void testUint16ArraySubarrayPart2024() {
    Uint16Array arr = Uint16Array.of(65535, 0, 32768);
    Uint16Array sub = arr.subarray(0, 3);
    assertEqual(65535, sub.get(0));
    assertEqual(0, sub.get(1));
    assertEqual(32768, sub.get(2));
    }

    @Test
    void testUint16ArraySubarrayPart2025() {
    Uint16Array arr = Uint16Array.of(42);
    Uint16Array sub = arr.subarray(0);
    assertEqual(42, sub.get(0));
    }

    @Test
    void testUint16ArraySubarrayPart2026() {
    Uint16Array arr = Uint16Array.of(7, 7, 7, 7);
    Uint16Array sub = arr.subarray(0, 2);
    assertEqual(7, sub.get(0));
    assertEqual(7, sub.get(1));
    }

    @Test
    void testUint16ArraySubarrayPart2027() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0, 5);
    assertEqual(5, sub.length());
    }

    @Test
    void testUint16ArraySubarrayPart2028() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(1, 4);
    assertEqual(3, sub.length());
    }

    @Test
    void testUint16ArraySubarrayPart2029() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(-3);
    assertEqual(3, sub.length());
    }

    @Test
    void testUint16ArraySubarrayPart2030() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(-1);
    assertEqual(1, sub.length());
    }

    @Test
    void testUint16ArraySubarrayPart2031() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0, -1);
    assertEqual(4, sub.length());
    }

    @Test
    void testUint16ArraySubarrayPart2032() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(-4, -1);
    assertEqual(3, sub.length());
    }

    @Test
    void testUint16ArraySubarrayPart2033() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(1);
    assertEqual(4, sub.length());
    }

    @Test
    void testUint16ArraySubarrayPart2034() {
    Uint16Array arr = Uint16Array.of(100, 200, 300);
    Uint16Array sub = arr.subarray(0, 2);
    assertEqual(2, sub.length());
    }

    @Test
    void testUint16ArraySubarrayPart2035() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4, 5, 6, 7, 8);
    Uint16Array sub = arr.subarray(2, 6);
    assertEqual(4, sub.length());
    }

    @Test
    void testUint16ArraySubarrayPart2036() {
    Uint16Array arr = Uint16Array.of(42);
    Uint16Array sub = arr.subarray(0);
    assertEqual(1, sub.length());
    }

    @Test
    void testUint16ArraySubarrayPart2037() {
    Uint16Array arr = Uint16Array.of(65535, 0, 32768);
    Uint16Array sub = arr.subarray(1, 3);
    assertEqual(2, sub.length());
    }

    @Test
    void testUint16ArraySubarrayPart2038() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray();
    assertEqual(10, sub.byteLength());
    }

    @Test
    void testUint16ArraySubarrayPart2039() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0, 5);
    assertEqual(10, sub.byteLength());
    }

    @Test
    void testUint16ArraySubarrayPart2040() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(1, 4);
    assertEqual(6, sub.byteLength());
    }

    @Test
    void testUint16ArraySubarrayPart2041() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(-3);
    assertEqual(6, sub.byteLength());
    }

    @Test
    void testUint16ArraySubarrayPart2042() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(-1);
    assertEqual(2, sub.byteLength());
    }

    @Test
    void testUint16ArraySubarrayPart2043() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0, -1);
    assertEqual(8, sub.byteLength());
    }

    @Test
    void testUint16ArraySubarrayPart2044() {
    Uint16Array arr = Uint16Array.of(100, 200, 300);
    Uint16Array sub = arr.subarray(0, 3);
    assertEqual(6, sub.byteLength());
    }

    @Test
    void testUint16ArraySubarrayPart2045() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4, 5, 6, 7, 8);
    Uint16Array sub = arr.subarray(2, 6);
    assertEqual(8, sub.byteLength());
    }

    @Test
    void testUint16ArraySubarrayPart2046() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray();
    assertEqual(0, sub.byteOffset());
    }

    @Test
    void testUint16ArraySubarrayPart2047() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0, 5);
    assertEqual(0, sub.byteOffset());
    }

    @Test
    void testUint16ArraySubarrayPart2048() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(1, 4);
    assertEqual(2, sub.byteOffset());
    }

    @Test
    void testUint16ArraySubarrayPart2049() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(2, 5);
    assertEqual(4, sub.byteOffset());
    }

    @Test
    void testUint16ArraySubarrayPart2050() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(3, 3);
    assertEqual(6, sub.byteOffset());
    }

    @Test
    void testUint16ArraySubarrayPart2051() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(-3);
    assertEqual(4, sub.byteOffset());
    }

    @Test
    void testUint16ArraySubarrayPart2052() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(-1);
    assertEqual(8, sub.byteOffset());
    }

    @Test
    void testUint16ArraySubarrayPart2053() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0, -1);
    assertEqual(0, sub.byteOffset());
    }

    @Test
    void testUint16ArraySubarrayPart2054() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(-4, -1);
    assertEqual(2, sub.byteOffset());
    }

    @Test
    void testUint16ArraySubarrayPart2055() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(1, 4);
    assertEqual(3, sub.length());
    assertEqual("20,30,40", sub.join(","));
    assertEqual(2, sub.byteOffset());
    assertEqual(arr.buffer(), sub.buffer());
    sub.set(0, 99);
    assertEqual(99, arr.get(1));
    arr.set(2, 88);
    assertEqual(88, sub.get(1));
    }

    @Test
    void testUint16ArraySubarrayPart2056() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(-3);
    assertEqual(3, sub.length());
    assertEqual("30,40,50", sub.join(","));
    assertEqual(arr.buffer(), sub.buffer());
    sub.set(0, 77);
    assertEqual(77, arr.get(2));
    arr.set(3, 66);
    assertEqual(66, sub.get(1));
    }

    @Test
    void testUint16ArraySubarrayPart2057() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0, 0);
    assertEqual(0, sub.length());
    assertEqual(0, sub.byteOffset());
    assertEqual(arr.buffer(), sub.buffer());
    }

    @Test
    void testUint16ArraySubarrayPart2058() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(5);
    assertEqual(0, sub.length());
    assertEqual(10, sub.byteOffset());
    assertEqual(arr.buffer(), sub.buffer());
    }

    @Test
    void testUint16ArraySubarrayPart2059() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(4, 2);
    assertEqual(0, sub.length());
    assertEqual(arr.buffer(), sub.buffer());
    }

    @Test
    void testUint16ArraySubarrayPart2060() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0, 10);
    assertEqual(5, sub.length());
    assertEqual("10,20,30,40,50", sub.join(","));
    assertEqual(arr.buffer(), sub.buffer());
    sub.set(0, 99);
    assertEqual(99, arr.get(0));
    arr.set(4, 88);
    assertEqual(88, sub.get(4));
    }

    @Test
    void testUint16ArraySubarrayPart2061() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array s1 = arr.subarray(0, 2);
    Uint16Array s2 = arr.subarray(3, 5);
    assertEqual("10,20", s1.join(","));
    assertEqual("40,50", s2.join(","));
    assertEqual(arr.buffer(), s1.buffer());
    assertEqual(arr.buffer(), s2.buffer());
    s1.set(0, 99);
    assertEqual(99, arr.get(0));
    arr.set(4, 88);
    assertEqual(88, s2.get(1));
    }

    @Test
    void testUint16ArraySubarrayPart2062() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray();
    assertEqual(arr.buffer(), sub.buffer());
    }

    @Test
    void testUint16ArraySubarrayPart2063() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(1, 4);
    assertEqual(arr.buffer(), sub.buffer());
    }

    @Test
    void testUint16ArraySubarrayPart2064() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(1, 4);
    sub.set(0, 99);
    assertEqual(99, arr.get(1));
    }

    @Test
    void testUint16ArraySubarrayPart2065() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(1, 4);
    arr.set(2, 88);
    assertEqual(88, sub.get(1));
    }

    @Test
    void testUint16ArraySubarrayPart2066() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0, 2);
    sub.set(1, 77);
    assertEqual(77, arr.get(1));
    }

    @Test
    void testUint16ArraySubarrayPart2067() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0, 2);
    arr.set(4, 66);
    assertEqual(20, sub.get(1));
    }

    @Test
    void testUint16ArraySubarrayPart2068() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array s1 = arr.subarray(0, 3);
    Uint16Array s2 = arr.subarray(1, 4);
    s1.set(2, 55);
    assertEqual(55, s2.get(1));
    }

    @Test
    void testUint16ArraySubarrayPart2069() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub1 = arr.subarray(0, 4);
    Uint16Array sub2 = sub1.subarray(1, 3);
    sub2.set(0, 44);
    assertEqual(44, arr.get(1));
    }

    @Test
    void testUint16ArraySubarrayPart2070() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub1 = arr.subarray(0, 4);
    Uint16Array sub2 = sub1.subarray(1, 3);
    assertEqual(arr.buffer(), sub2.buffer());
    sub2.set(0, 44);
    assertEqual(44, arr.get(1));
    arr.set(2, 55);
    assertEqual(55, sub2.get(1));
    }

    @Test
    void testUint16ArraySubarrayPart2071() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(-3);
    sub.set(0, 33);
    assertEqual(33, arr.get(2));
    }

    @Test
    void testUint16ArraySubarrayPart2072() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(4, 2);
    assertEqual(arr.buffer(), sub.buffer());
    }

    @Test
    void testUint16ArraySubarrayPart2073() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray(0, 0);
    assertEqual(arr.buffer(), sub.buffer());
    }

    @Test
    void testUint16ArraySubarrayPart2074() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    Uint16Array sub = arr.subarray();
    assertEqual(arr.buffer(), sub.buffer());
    sub.set(0, 99);
    assertEqual(99, arr.get(0));
    arr.set(4, 88);
    assertEqual(88, sub.get(4));
    }

    @Test
    void testUint16ArraySubarrayPart2075() {
    Uint16Array a = Uint16Array.of(1, 2, 3, 4);
    Uint16Array r = a.subarray(-99, 2);
    assertEqual("1,2", r.join(","));
    }

    @Test
    void testUint16ArraySubarrayPart2076() {
    Uint16Array a = Uint16Array.of(1, 2, 3, 4);
    Uint16Array r = a.subarray(2, 99);
    assertEqual("3,4", r.join(","));
    }

    @Test
    void testUint16ArraySubarrayPart2077() {
    Uint16Array a = Uint16Array.of(1, 2, 3);
    Uint16Array r = a.subarray(1, 1);
    assertEqual("", r.join(","));
    assertEqual(0, r.length());
    }

    @Test
    void testUint16ArraySubarrayPart2078() {
    Uint16Array a = Uint16Array.of(1, 2, 3, 4, 5);
    Uint16Array r = a.subarray(-4, -1);
    assertEqual("2,3,4", r.join(","));
    }

    @Test
    void testUint16ArraySubarrayPart2079() {
    ArrayBuffer b = new ArrayBuffer(14);
    Uint16Array all = new Uint16Array(b);
    all.set(Uint16Array.of(9, 1, 2, 3, 4, 5, 8));
    Uint16Array v = new Uint16Array(b, 2, 5);
    Uint16Array r = v.subarray(1, 4);
    assertEqual("2,3,4", r.join(","));
    assertEqual(4, r.byteOffset());
    }

    @Test
    void testUint16ArraySubarrayPart2080() {
    Uint16Array a = Uint16Array.of(5, 6, 7, 8);
    Uint16Array r = a.subarray(1, 3);
    r.set(0, 66);
    assertEqual("5,66,7,8", a.join(","));
    assertEqual("66,7", r.join(","));
    }
}
