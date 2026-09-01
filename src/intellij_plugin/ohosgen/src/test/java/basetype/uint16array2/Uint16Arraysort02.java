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
import basetype.common.Error;
import basetype.common.Uint16Array;

import org.junit.jupiter.api.Test;

/**
 * Uint16Arraysort02 —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint16Arraysort02 extends BasTest {

    @Test
    void testUint16ArraySortPart2001() {
    Uint16Array arr = Uint16Array.of(65535, 0);
    Uint16Array result = arr.sort();
    assertEqualInt(0, result.get(0));
    assertEqualInt(65535, result.get(1));
    }

    @Test
    void testUint16ArraySortPart2002() {
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    Uint16Array result = arr.sort((a, b) -> a < b ? 1 : (a > b ? -1 : 0));
    assertEqualInt(3, result.get(0));
    assertEqualInt(2, result.get(1));
    assertEqualInt(1, result.get(2));
    }

    @Test
    void testUint16ArraySortPart2003() {
    Uint16Array arr = Uint16Array.of(32768);
    Uint16Array result = arr.sort();
    assertEqualInt(32768, result.get(0));
    }

    @Test
    void testUint16ArraySortPart2004() {
    Uint16Array arr = Uint16Array.of(5, 5, 5);
    Uint16Array result = arr.sort();
    assertEqualInt(5, result.get(0));
    assertEqualInt(5, result.get(2));
    }

    @Test
    void testUint16ArraySortPart2005() {
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    Uint16Array result = arr.sort();
    assertEqual(arr, result);
    }

    @Test
    void testUint16ArraySortPart2006() {
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    Uint16Array result = arr.sort((a, b) -> a < b ? -1 : (a > b ? 1 : 0));
    assertEqual(arr, result);
    }

    @Test
    void testUint16ArraySortPart2007() {
    Uint16Array arr = new Uint16Array();
    Uint16Array result = arr.sort();
    assertEqual(arr, result);
    }

    @Test
    void testUint16ArraySortPart2008() {
    Uint16Array arr = Uint16Array.of(100);
    Uint16Array result = arr.sort();
    assertEqual(arr, result);
    }

    @Test
    void testUint16ArraySortPart2009() {
    Uint16Array arr = Uint16Array.of(0, 0, 0);
    Uint16Array result = arr.sort();
    assertEqual(arr, result);
    }

    @Test
    void testUint16ArraySortPart2010() {
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    String joined = arr.sort().join(",");
    assertEqual("1,2,3", joined);
    }

    @Test
    void testUint16ArraySortPart2011() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    String joined = arr.sort((a, b) -> a < b ? 1 : (a > b ? -1 : 0)).join(",");
    assertEqual("3,2,1", joined);
    }

    @Test
    void testUint16ArraySortPart2012() {
    Uint16Array arr = Uint16Array.of(5, 5, 5);
    arr.sort();
    assertEqual("5,5,5", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart2013() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4, 5);
    arr.sort();
    assertEqual("1,2,3,4,5", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart2014() {
    Uint16Array arr = Uint16Array.of(5, 4, 3, 2, 1);
    arr.sort();
    assertEqual("1,2,3,4,5", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart2015() {
    Uint16Array arr = Uint16Array.of(0, 0, 0, 0);
    arr.sort();
    assertEqual("0,0,0,0", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart2016() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    arr.sort();
    assertEqual("10,20,30,40,50", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart2017() {
    Uint16Array arr = Uint16Array.of(1, 1, 2, 2);
    arr.sort();
    assertEqual("1,1,2,2", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart2018() {
    Uint16Array arr = Uint16Array.of(100, 200, 300);
    arr.sort();
    assertEqual("100,200,300", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart2019() {
    Uint16Array arr = Uint16Array.of(1, 3, 5, 2, 4, 6);
    arr.sort();
    assertEqual("1,2,3,4,5,6", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart2020() {
    Uint16Array arr = Uint16Array.of(0, 1, 65534, 65535);
    arr.sort();
    assertEqual("0,1,65534,65535", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart2021() {
    Uint16Array arr = Uint16Array.of(65535, 65534, 1, 0);
    arr.sort();
    assertEqual("0,1,65534,65535", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart2022() {
    Uint16Array arr = Uint16Array.of(32768, 32768, 32768);
    arr.sort();
    assertEqual("32768,32768,32768", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart2023() {
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    arr.sort((a, b) -> a < b ? -1 : (a > b ? 1 : 0));
    assertEqual("1,2,3", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart2024() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    arr.sort((a, b) -> a < b ? 1 : (a > b ? -1 : 0));
    assertEqual("3,2,1", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart2025() {
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    arr.sort((a, b) -> -1);
    assertEqual("2,1,3", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart2026() {
    Uint16Array arr = Uint16Array.of(5, 3, 8, 1);
    arr.sort((a, b) -> a < b ? -1 : (a > b ? 1 : 0));
    assertEqual("1,3,5,8", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart2027() {
    Uint16Array arr = Uint16Array.of(65535, 0);
    arr.sort((a, b) -> a < b ? -1 : (a > b ? 1 : 0));
    assertEqualInt(0, arr.get(0));
    assertEqualInt(65535, arr.get(1));
    }

    @Test
    void testUint16ArraySortPart2028() {
    Uint16Array arr = Uint16Array.of(0, 65535);
    arr.sort((a, b) -> a < b ? 1 : (a > b ? -1 : 0));
    assertEqualInt(65535, arr.get(0));
    assertEqualInt(0, arr.get(1));
    }

    @Test
    void testUint16ArraySortPart2029() {
    Uint16Array arr = Uint16Array.of(10, 10, 5, 5);
    arr.sort((a, b) -> a < b ? -1 : (a > b ? 1 : 0));
    assertEqual("5,5,10,10", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart2030() {
    Uint16Array arr = Uint16Array.of(32768, 0, 65535);
    arr.sort((a, b) -> a < b ? -1 : (a > b ? 1 : 0));
    assertEqual("0,32768,65535", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart2031() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    arr.sort((a, b) -> (a < b ? 1 : (a > b ? -1 : 0)));
    assertEqual("3,2,1", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart2032() {
    Uint16Array arr = Uint16Array.of(100, 50, 150, 200);
    arr.sort((a, b) -> a < b ? -1 : (a > b ? 1 : 0));
    assertEqual("50,100,150,200", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart2033() {
    Uint16Array arr = Uint16Array.of(0, 1, 2, 3);
    arr.sort((a, b) -> a < b ? -1 : (a > b ? 1 : 0));
    assertEqual("0,1,2,3", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart2034() {
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    arr.sort((a, b) -> (a > b ? Double.POSITIVE_INFINITY : (a < b ? -Double.POSITIVE_INFINITY : 0)));
    assertEqual("1,2,3", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart2035() {
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    arr.sort((a, b) -> (a > b ? 65535 : (a < b ? -65535 : 0)));
    assertEqual("1,2,3", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart2036() {
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    arr.sort((a, b) -> (a > b ? 1 : (a < b ? -1 : 0)));
    assertEqual("1,2,3", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart2037() {
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    arr.sort((a, b) -> (a > b ? Double.MAX_VALUE : (a < b ? -Double.MAX_VALUE : 0)));
    assertEqual("1,2,3", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart2038() {
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    arr.sort((a, b) -> {
    if (a < b) {
        return -0;
    }
    if (a > b) {
        return 0;
    }
    return 0;
        });
    assertEqual("3,1,2", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart2039() {
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    Uint16Array result = arr.sort();
    assertEqual("1,2,3", result.join(","));
    }

    @Test
    void testUint16ArraySortPart2040() {
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    Uint16Array result = arr.sort((a, b) -> a < b ? 1 : (a > b ? -1 : 0));
    assertEqual("3,2,1", result.join(","));
    }

    @Test
    void testUint16ArraySortPart2041() {
    Uint16Array arr = Uint16Array.of(99);
    Uint16Array result = arr.sort();
    assertEqualInt(99, result.get(0));
    }

    @Test
    void testUint16ArraySortPart2042() {
    Uint16Array arr = new Uint16Array(100);
    for (int i = 0; i < 100; i++) {
    arr.set(i, 100 - i);
    }
    Uint16Array result = arr.sort();
    assertEqualInt(1, result.get(0));
    assertEqualInt(100, result.get(99));
    }

    @Test
    void testUint16ArraySortPart2043() {
    Uint16Array arr = Uint16Array.of(65535, 0);
    Uint16Array result = arr.sort();
    assertEqual("0,65535", result.join(","));
    }

    @Test
    void testUint16ArraySortPart2044() {
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    int before = arr.byteLength();
    arr.sort();
    assertEqual(before, arr.byteLength());
    assertEqual("1,2,3", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart2045() {
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    int before = arr.byteLength();
    arr.sort((a, b) -> a < b ? -1 : (a > b ? 1 : 0));
    assertEqual(before, arr.byteLength());
    assertEqual("1,2,3", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart2046() {
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    int before = arr.byteOffset();
    arr.sort((a, b) -> a < b ? 1 : (a > b ? -1 : 0));
    assertEqual(before, arr.byteOffset());
    assertEqual("3,2,1", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart2047() {
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    ArrayBuffer before = arr.buffer();
    arr.sort();
    assertEqual(before, arr.buffer());
    assertEqual("1,2,3", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart2048() {
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    ArrayBuffer before = arr.buffer();
    arr.sort((a, b) -> a < b ? -1 : (a > b ? 1 : 0));
    assertEqual(before, arr.buffer());
    assertEqual("1,2,3", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart2049() {
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    arr.sort();
    assertEqual(2, Uint16Array.BYTES_PER_ELEMENT);
    assertEqual("1,2,3", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart2050() {
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    arr.sort((a, b) -> a < b ? -1 : (a > b ? 1 : 0));
    assertEqual(2, Uint16Array.BYTES_PER_ELEMENT);
    assertEqual("1,2,3", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart2051() {
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    arr.sort();
    assertEqual("Uint16Array", arr.getClass().getSimpleName());
    assertEqual("1,2,3", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart2052() {
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    arr.sort((a, b) -> a < b ? 1 : (a > b ? -1 : 0));
    assertEqual("Uint16Array", arr.getClass().getSimpleName());
    assertEqual("3,2,1", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart2053() {
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    arr.sort();
    assertEqual(arr.length() * Uint16Array.BYTES_PER_ELEMENT, arr.byteLength());
    assertEqual("1,2,3", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart2054() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint16Array arr = new Uint16Array(buf);
    arr.set(0, 3);
    arr.set(1, 1);
    arr.set(2, 2);
    ArrayBuffer before = arr.buffer();
    arr.sort();
    assertEqual(before, arr.buffer());
    assertEqual("1,2,3", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart2055() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint16Array arr = new Uint16Array(buf);
    arr.set(0, 3);
    arr.set(1, 1);
    arr.set(2, 2);
    int before = arr.byteOffset();
    arr.sort();
    assertEqual(before, arr.byteOffset());
    assertEqual("1,2,3", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart2056() {
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    Uint16Array sub = arr.subarray(0);
    sub.sort();
    assertEqual(arr.buffer(), sub.buffer());
    assertEqual("1,2,3", sub.join(","));
    }

    @Test
    void testUint16ArraySortPart2057() {
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    int before = arr.buffer().byteLength();
    Uint16Array result = arr.sort();
    assertEqual(before, result.buffer().byteLength());
    assertEqual("1,2,3", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart2058() {
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    try {
    arr.sort((a, b) -> {
    return BasTest.throwTestError("sort error");
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArraySortPart2059() {
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    String before = arr.join(",");
    try {
    arr.sort((a, b) -> {
    return BasTest.throwTestError("stop");
        });
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    assertEqual(before, arr.join(","));
    }

    @Test
    void testUint16ArraySortPart2060() {
    Uint16Array.Uint16ArrayReducer2 cmpAsc = (a, b) -> (a - b);
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    arr.sort((a, b) -> cmpAsc.apply(a, b));
    assertEqual("1,2,3", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart2061() {
    Uint16Array.Uint16ArrayReducer2 cmpDesc = (a, b) -> (b - a);
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    arr.sort((a, b) -> cmpDesc.apply(a, b));
    assertEqual("3,2,1", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart2062() {
    Uint16Array arr = Uint16Array.of(0);
    arr.sort();
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint16ArraySortPart2063() {
    Uint16Array arr = Uint16Array.of(65535);
    arr.sort();
    assertEqualInt(65535, arr.get(0));
    }

    @Test
    void testUint16ArraySortPart2064() {
    Uint16Array arr = Uint16Array.of(32768);
    arr.sort();
    assertEqualInt(32768, arr.get(0));
    }

    @Test
    void testUint16ArraySortPart2065() {
    Uint16Array arr = Uint16Array.of(0, 65535);
    arr.sort();
    assertEqualInt(65535, arr.get(1));
    }

    @Test
    void testUint16ArraySortPart2066() {
    Uint16Array arr = Uint16Array.of(65535, 0);
    arr.sort();
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint16ArraySortPart2067() {
    Uint16Array arr = Uint16Array.of(32768, 0);
    arr.sort();
    assertEqualInt(32768, arr.get(1));
    }

    @Test
    void testUint16ArraySortPart2068() {
    Uint16Array arr = new Uint16Array(1);
    arr.set(0, 65535.9);
    arr.sort();
    assertEqualInt(65535, arr.get(0));
    }

    @Test
    void testUint16ArraySortPart2069() {
    Uint16Array arr = new Uint16Array(1);
    arr.set(0, 3.14);
    arr.sort();
    assertEqualInt(3, arr.get(0));
    }

    @Test
    void testUint16ArraySortPart2070() {
    Uint16Array arr = Uint16Array.of(65535, 0, 32768);
    arr.sort();
    assertEqualInt(0, arr.get(0));
    assertEqualInt(0, arr.get(0) & 0xFFFF);
    assertEqual("0,32768,65535", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart2071() {
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    Uint16Array result = arr.sort();
    assertEqual(arr, result);
    assertEqualInt(1, result.get(0));
    assertEqualInt(2, result.get(1));
    assertEqualInt(3, result.get(2));
    }

    @Test
    void testUint16ArraySortPart2072() {
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    Uint16Array result = arr.sort();
    assertEqual(3, result.length());
    assertEqual(6, result.byteLength());
    assertEqual("1,2,3", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart2073() {
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    int before = arr.buffer().byteLength();
    arr.sort();
    assertEqual(before, arr.buffer().byteLength());
    assertEqual("1,2,3", arr.join(","));
    }

    @Test
    void testUint16ArraySortPart2074() {
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    arr.sort();
    assertEqual("1,2,3", String.valueOf(arr));
    }

    @Test
    void testUint16ArraySortPart2075() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    arr.sort((a, b) -> a < b ? 1 : (a > b ? -1 : 0));
    assertEqual("3,2,1", String.valueOf(arr));
    }

    @Test
    void testUint16ArraySortPart2076() {
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    int[] sum = {0};
    arr.sort().forEach((val) -> {
    sum[0] += val;
        });
    assertEqual(6, sum[0]);
    }

    @Test
    void testUint16ArraySortPart2077() {
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    Uint16Array mapped = arr.sort().map((val) -> val * 2);
    assertEqual("2,4,6", mapped.join(","));
    }

    @Test
    void testUint16ArraySortPart2078() {
    Uint16Array arr = new Uint16Array();
    arr.sort();
    assertEqual("", String.valueOf(arr));
    }

    @Test
    void testUint16ArraySortPart2079() {
    int[] counter = {0};
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    arr.sort((a, b) -> {
    counter[0]++;
    return (a - b);
        });
    assertEqual("1,2,3", arr.join(","));
    assertTrue(counter[0] > 0);
    }

    @Test
    void testUint16ArraySortPart2080() {
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    arr.sort();
    assertEqual(0, arr.indexOf(1));
    assertEqual(1, arr.indexOf(2));
    assertEqual(2, arr.indexOf(3));
    }

    @Test
    void testUint16ArraySortPart2081() {
    Uint16Array arr = Uint16Array.of(0, 10000, 20000, 30000, 40000, 50000, 60000, 65535);
    arr.sort((a, b) -> a < b ? 1 : (a > b ? -1 : 0));
    assertEqualInt(65535, arr.get(0));
    assertEqualInt(0, arr.get(7));
    }

    @Test
    void testUint16ArraySortPart2082() {
    Uint16Array arr = Uint16Array.of(100, 200);
    arr.sort((a, b) -> a < b ? 1 : (a > b ? -1 : 0));
    assertEqualInt(200, arr.get(0));
    assertEqualInt(100, arr.get(1));
    }

    @Test
    void testUint16ArraySortPart2083() {
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    Uint16Array result = arr.sort().sort((a, b) -> a < b ? 1 : (a > b ? -1 : 0));
    assertEqualInt(3, result.get(0));
    assertEqualInt(2, result.get(1));
    assertEqualInt(1, result.get(2));
    assertEqual(3, result.length());
    }

    @Test
    void testUint16ArraySortPart2084() {
    Uint16Array arr = Uint16Array.of(3, 1, 2);
    arr.sort();
    assertEqual("1,2,3", arr.join(","));
    assertEqual(6, arr.buffer().byteLength());
    }
}
