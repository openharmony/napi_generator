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
import basetype.common.EntryResult;
import basetype.common.Error;
import basetype.common.Int8Array;
import basetype.common.IteratorResult;
import basetype.common.RangeError;
import basetype.common.TypeError;
import basetype.common.Uint16Array;
import basetype.common.DataView;
import basetype.common.Float32Array;
import basetype.common.Float64Array;
import basetype.common.Int32Array;
import basetype.common.IntlOptions;
import basetype.common.NullPointerError;
import basetype.common.Uint8Array;
import basetype.common.Uint8ClampedArray;
import basetype.common.Uint16Array;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint16Arraysome02 —— Int16Array 方法族测试。
 */
public class Uint16Arraysome02 extends BasTest {

    @Test
    void testUint16ArraySomePart2001() {
    {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    int[] sum = {0};
    arr.some((e) -> {
    sum[0] = sum[0] + e;
    return false;
    });
    assertEqual(6, sum[0]);
    }
    }

    @Test
    void testUint16ArraySomePart2002() {
    {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    arr.some((e, i) -> {
    arr.set(i, e * 10);
    return false;
    });
    assertEqual(10, arr.get(0));
    assertEqual(20, arr.get(1));
    assertEqual(30, arr.get(2));
    }
    }

    @Test
    void testUint16ArraySomePart2003() {
    {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    boolean outerResult = arr.some((e) -> { if (e > 1) { boolean inner = arr.some((x) -> x == 3); return inner; } return false; });
    assertTrue(outerResult);
    }
    }

    @Test
    void testUint16ArraySomePart2004() {
    {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4, 5});
    int threshold = 3;
    boolean result = arr.some((e) -> e > threshold);
    assertTrue(result);
    }
    }

    @Test
    void testUint16ArraySomePart2005() {
    {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    boolean result = arr.some((e) -> { return false; });
    assertFalse(result);
    }
    }

    @Test
    void testUint16ArraySomePart2006() {
    {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    boolean result = arr.some((e) -> { try { if (e == 2) { throw new Error("caught"); } return false; } catch (RuntimeException inner) { assertEqual("Error", inner.getClass().getSimpleName()); return true; } });
    assertTrue(result);
    }
    }

    @Test
    void testUint16ArraySomePart2007() {
    {
    Uint16Array arr = new Uint16Array(new int[] {4, 9, 16, 25});
    boolean result = arr.some((e) -> { double sqrt = Math.sqrt(e); return sqrt == 5; });
    assertTrue(result);
    }
    }

    @Test
    void testUint16ArraySomePart2008() {
    {
    Uint16Array arr = new Uint16Array(new int[] {10, 20, 30});
    boolean result = arr.some((e) -> e > 15);
    assertTrue(result);
    }
    }

    @Test
    void testUint16ArraySomePart2009() {
    {
    Uint16Array arr = new Uint16Array(new int[] {10, 20, 30});
    Uint16Array targets = new Uint16Array(new int[] {5, 15, 25, 30});
    boolean result = arr.some((e) -> { return targets.some((t) -> t == e); });
    assertTrue(result);
    }
    }

    @Test
    void testUint16ArraySomePart2010() {
    {
    Uint16Array arr = new Uint16Array(new int[] {5, 10, 15, 20});
    boolean[] found = {false};
    boolean result = arr.some((e) -> { if (e == 15) { found[0] = true; } return e == 15; });
    assertTrue(found[0]);
    assertTrue(result);
    }
    }

    @Test
    void testUint16ArraySomePart2011() {
    {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    Map<String, Integer> config = new HashMap<>();
    config.put("target", 2);
    boolean result = arr.some((e) -> e == config.get("target"));
    assertTrue(result);
    }
    }

    @Test
    void testUint16ArraySomePart2012() {
    {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4, 5});
    arr.some((e, i) -> {
    arr.set(i, e + 1);
    return false;
    });
    assertEqual(2, arr.get(0));
    assertEqual(3, arr.get(1));
    assertEqual(4, arr.get(2));
    assertEqual(5, arr.get(3));
    assertEqual(6, arr.get(4));
    }
    }

    @Test
    void testUint16ArraySomePart2013() {
    {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4, 5});
    int[] product = {1};
    boolean result = arr.some((e) -> { product[0] = product[0] * e; return product[0] >= 24; });
    assertTrue(result);
    assertEqual(24, product[0]);
    }
    }

    @Test
    void testUint16ArraySomePart2014() {
    {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint16Array arr = new Uint16Array(buf);
    arr.set(0, 1);
    arr.set(1, 2);
    arr.set(2, 3);
    arr.set(3, 4);
    boolean result = arr.some((e) -> e == 3);
    assertTrue(result);
    }
    }

    @Test
    void testUint16ArraySomePart2015() {
    {
    Uint8Array src = new Uint8Array(new int[] {10, 20, 30});
    Uint16Array arr = new Uint16Array(src);
    boolean result = arr.some((e) -> e == 20);
    assertTrue(result);
    }
    }

    @Test
    void testUint16ArraySomePart2016() {
    {
    Int32Array src = new Int32Array(new int[] {100, 200, 300});
    Uint16Array arr = new Uint16Array(src);
    boolean result = arr.some((e) -> e == 200);
    assertTrue(result);
    }
    }

    @Test
    void testUint16ArraySomePart2017() {
    {
    Float64Array src = new Float64Array(new double[] {3.9, 5.1, 7.8});
    Uint16Array arr = new Uint16Array(src);
    boolean result = arr.some((e) -> e == 5);
    assertTrue(result);
    }
    }

    @Test
    void testUint16ArraySomePart2018() {
    {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40);
    boolean result = arr.some((e) -> e == 40);
    assertTrue(result);
    }
    }

    @Test
    void testUint16ArraySomePart2019() {
    {
    Uint16Array arr = Uint16Array.from(new int[] {5, 10, 15, 20});
    boolean result = arr.some((e) -> e > 15);
    assertTrue(result);
    }
    }

    @Test
    void testUint16ArraySomePart2020() {
    {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4, 5});
    Uint16Array sub = arr.subarray(1, 4);
    boolean result = sub.some((e) -> e == 3);
    assertTrue(result);
    }
    }

    @Test
    void testUint16ArraySomePart2021() {
    {
    Uint16Array arr = new Uint16Array(new int[] {10, 20, 30, 40, 50});
    Uint16Array sliced = arr.slice(1, 4);
    boolean result = sliced.some((e) -> e == 30);
    assertTrue(result);
    }
    }

    @Test
    void testUint16ArraySomePart2022() {
    {
    Int8Array src = new Int8Array(new int[] {-1, -2, 127});
    Uint16Array arr = new Uint16Array(src);
    boolean result = arr.some((e) -> e == 127);
    assertTrue(result);
    }
    }

    @Test
    void testUint16ArraySomePart2023() {
    {
    Float32Array src = new Float32Array(new double[] {1.1, 2.9, 3.5});
    Uint16Array arr = new Uint16Array(src);
    boolean result = arr.some((e) -> e == 2);
    assertTrue(result);
    }
    }

    @Test
    void testUint16ArraySomePart2024() {
    {
    Uint16Array arr = new Uint16Array(new int[] {5, 10, 15});
    int[] idx0 = {-1};
    int[] idx1 = {-1};
    int[] idx2 = {-1};
    arr.some((e, i) -> {
    if (i == 0) {
    idx0[0] = i;
    }
    if (i == 1) {
    idx1[0] = i;
    }
    if (i == 2) {
    idx2[0] = i;
    }
    return false;
    });
    assertEqual(0, idx0[0]);
    assertEqual(1, idx1[0]);
    assertEqual(2, idx2[0]);
    }
    }

    @Test
    void testUint16ArraySomePart2025() {
    {
    Uint16Array arr = new Uint16Array(new int[] {100, 200, 300});
    int[] callCount = {0};
    int[] matchedIndex = {-1};
    boolean result = arr.some((e, i) -> { callCount[0]++; if (i == 0) { matchedIndex[0] = i; return true; } return false; });
    assertTrue(result);
    assertEqual(0, matchedIndex[0]);
    assertEqual(1, callCount[0]);
    }
    }

    @Test
    void testUint16ArraySomePart2026() {
    {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4, 5});
    int[] callCount = {0};
    int[] matchedIndex = {-1};
    boolean result = arr.some((e, i) -> { callCount[0]++; if (i == 4) { matchedIndex[0] = i; return true; } return false; });
    assertTrue(result);
    assertEqual(4, matchedIndex[0]);
    assertEqual(5, callCount[0]);
    }
    }

    @Test
    void testUint16ArraySomePart2027() {
    {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4, 5});
    int[] callCount = {0};
    int[] matchedIndex = {-1};
    boolean result = arr.some((e, i) -> { callCount[0]++; if (i % 2 == 0) { matchedIndex[0] = i; return true; } return false; });
    assertTrue(result);
    assertEqual(0, matchedIndex[0]);
    assertEqual(1, callCount[0]);
    }
    }

    @Test
    void testUint16ArraySomePart2028() {
    {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    int[] callCount = {0};
    int[] matchedIndex = {-1};
    boolean result = arr.some((e, i) -> { callCount[0]++; if (i >= 3) { matchedIndex[0] = i; return true; } return false; });
    assertFalse(result);
    assertEqual(-1, matchedIndex[0]);
    assertEqual(3, callCount[0]);
    }
    }

    @Test
    void testUint16ArraySomePart2029() {
    {
    Uint16Array arr = new Uint16Array(new int[] {10, 20, 30, 40});
    int[] callCount = {0};
    int[] matchedIndex = {-1};
    boolean result = arr.some((e, i) -> { callCount[0]++; if (i % 2 != 0) { matchedIndex[0] = i; return true; } return false; });
    assertTrue(result);
    assertEqual(1, matchedIndex[0]);
    assertEqual(2, callCount[0]);
    }
    }

    @Test
    void testUint16ArraySomePart2030() {
    {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4, 5, 6, 7});
    int[] callCount = {0};
    int[] matchedIndex = {-1};
    boolean result = arr.some((e, i) -> { callCount[0]++; if (i >= 2 && i <= 4) { matchedIndex[0] = i; return true; } return false; });
    assertTrue(result);
    assertEqual(2, matchedIndex[0]);
    assertEqual(3, callCount[0]);
    }
    }

    @Test
    void testUint16ArraySomePart2031() {
    {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    String[] idxType = {""};
    arr.some((e, i) -> {
    if (i == 0) {
    idxType[0] = "int";
    }
    return false;
    });
    assertEqual("int", idxType[0]);
    }
    }

    @Test
    void testUint16ArraySomePart2032() {
    {
    Uint16Array arr = new Uint16Array(5);
    boolean result = arr.some((e) -> e == 0);
    assertTrue(result);
    }
    }

    @Test
    void testUint16ArraySomePart2033() {
    {
    Uint16Array arr = new Uint16Array(new int[] {65535, 65535, 65535});
    boolean result = arr.some((e) -> e > 60000);
    assertTrue(result);
    }
    }

    @Test
    void testUint16ArraySomePart2034() {
    {
    Uint16Array arr = new Uint16Array(5);
    boolean result = arr.some((e) -> e > 0);
    assertFalse(result);
    }
    }

    @Test
    void testUint16ArraySomePart2035() {
    {
    Uint16Array arr = new Uint16Array(new int[] {0xFFFF, 0x0, 0x8000});
    boolean result = arr.some((e) -> e == 65535);
    assertTrue(result);
    }
    }

    @Test
    void testUint16ArraySomePart2036() {
    {
    Uint16Array arr = new Uint16Array(new int[] {0x0, 0x8000, 0xFFFF});
    boolean result = arr.some((e) -> e == 32768);
    assertTrue(result);
    }
    }

    @Test
    void testUint16ArraySomePart2037() {
    {
    Uint16Array arr = new Uint16Array(new int[] {0177777, 00});
    boolean result = arr.some((e) -> e == 65535);
    assertTrue(result);
    }
    }

    @Test
    void testUint16ArraySomePart2038() {
    {
    Uint16Array arr = new Uint16Array(new int[] {0b1111111111111111, 0b0});
    boolean result = arr.some((e) -> e == 65535);
    assertTrue(result);
    }
    }

    @Test
    void testUint16ArraySomePart2039() {
    {
    Uint16Array arr = new Uint16Array(new double[] {1e4, 2e4, 3e4});
    boolean result = arr.some((e) -> e == 10000);
    assertTrue(result);
    }
    }

    @Test
    void testUint16ArraySomePart2040() {
    {
    Uint16Array arr = new Uint16Array(7);
    arr.set(3, 42);
    boolean result = arr.some((e) -> e == 42);
    assertTrue(result);
    }
    }

    @Test
    void testUint16ArraySomePart2041() {
    {
    Uint16Array arr = new Uint16Array(new int[] {32768, 32768, 32768, 32768});
    boolean result = arr.some((e) -> e == 32768);
    assertTrue(result);
    }
    }

    @Test
    void testUint16ArraySomePart2042() {
    {
    Uint16Array arr = new Uint16Array(new int[] {32768, 32768, 32768});
    boolean result = arr.some((e) -> e > 50000);
    assertFalse(result);
    }
    }

    @Test
    void testUint16ArraySomePart2043() {
    {
    Uint16Array arr = new Uint16Array(2);
    arr.set(0, 65536 * 2);
    arr.set(1, 1);
    boolean result = arr.some((e) -> e == 0);
    assertTrue(result);
    }
    }

    @Test
    void testUint16ArraySomePart2044() {
    {
    Uint16Array arr = new Uint16Array(1);
    arr.set(0, -0.5);
    boolean result = arr.some((e) -> e == 0);
    assertTrue(result);
    }
    }

    @Test
    void testUint16ArraySomePart2045() {
    {
    Uint16Array arr = new Uint16Array(1);
    arr.set(0, 65535.9);
    boolean result = arr.some((e) -> e == 65535);
    assertTrue(result);
    }
    }

    @Test
    void testUint16ArraySomePart2046() {
    {
    Uint16Array arr = new Uint16Array(1);
    arr.set(0, Double.NaN);
    boolean result = arr.some((e) -> e == 0);
    assertTrue(result);
    }
    }

    @Test
    void testUint16ArraySomePart2047() {
    {
    Uint16Array arr = new Uint16Array(1);
    arr.set(0, Double.POSITIVE_INFINITY);
    boolean result = arr.some((e) -> e == 0);
    assertTrue(result);
    }
    }

    @Test
    void testUint16ArraySomePart2048() {
    {
    Uint16Array arr = new Uint16Array(1);
    arr.set(0, -Double.POSITIVE_INFINITY);
    boolean result = arr.some((e) -> e == 0);
    assertTrue(result);
    }
    }

    @Test
    void testUint16ArraySomePart2049() {
    {
    Uint16Array arr = new Uint16Array(1);
    arr.set(0, 0x10000);
    boolean result = arr.some((e) -> e == 0);
    assertTrue(result);
    }
    }

    @Test
    void testUint16ArraySomePart2050() {
    {
    Uint16Array arr = new Uint16Array(1);
    arr.set(0, 0xFFFFFFFF);
    boolean result = arr.some((e) -> e == 65535);
    assertTrue(result);
    }
    }

    @Test
    void testUint16ArraySomePart2051() {
    {
    Uint16Array arr = new Uint16Array(new int[] {});
    boolean r1 = arr.some((e) -> e == 0);
    boolean r2 = arr.some((e) -> e != 0);
    boolean r3 = arr.some(() -> true);
    boolean r4 = arr.some(() -> false);
    assertFalse(r1);
    assertFalse(r2);
    assertFalse(r3);
    assertFalse(r4);
    }
    }

    @Test
    void testUint16ArraySomePart2052() {
    {
    Uint16Array arr = new Uint16Array(0);
    boolean[] called = {false};
    boolean result = arr.some((e) -> { called[0] = true; return false; });
    assertFalse(result);
    assertFalse(called[0]);
    }
    }

    @Test
    void testUint16ArraySomePart2053() {
    {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4, 5});
    boolean result = arr.some((e) -> e > 3);
    assertTrue(result);
    }
    }

    @Test
    void testUint16ArraySomePart2054() {
    {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4, 5});
    boolean result = arr.some((e) -> e > 10);
    assertFalse(result);
    }
    }

    @Test
    void testUint16ArraySomePart2055() {
    {
    Uint16Array arr = new Uint16Array(new int[] {100, 200, 300});
    boolean result = arr.some((e) -> e % 7 == 0);
    assertFalse(result);
    }
    }

    @Test
    void testUint16ArraySomePart2056() {
    {
    Uint16Array arr = new Uint16Array(new int[] {7, 14, 21});
    boolean result = arr.some((e) -> e % 7 == 0);
    assertTrue(result);
    }
    }

    @Test
    void testUint16ArraySomePart2057() {
    {
    Uint16Array arr = new Uint16Array(new int[] {5, 10, 15, 20});
    boolean result = arr.some((e) -> { if (e < 2) { return false; } boolean isPrime = true; for (int d = 2; d * d <= e; d++) { if (e % d == 0) { isPrime = false; break; } } return isPrime; });
    assertTrue(result);
    }
    }

    @Test
    void testUint16ArraySomePart2058() {
    {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4, 5});
    boolean result = arr.some((e) -> e > 2 && e < 5);
    assertTrue(result);
    }
    }

    @Test
    void testUint16ArraySomePart2059() {
    {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    boolean result = arr.some((e) -> e == 0 || e == 3);
    assertTrue(result);
    }
    }

    @Test
    void testUint16ArraySomePart2060() {
    {
    Uint16Array arr = new Uint16Array(new int[] {10, 20, 30, 40});
    boolean result = arr.some((e) -> (e > 15 && e < 35) || e == 40);
    assertTrue(result);
    }
    }

    @Test
    void testUint16ArraySomePart2061() {
    {
    Uint16Array arr = new Uint16Array(new int[] {10, 20, 30});
    boolean result = arr.some((e) -> e > 100 && e < 200);
    assertFalse(result);
    }
    }

    @Test
    void testUint16ArraySomePart2062() {
    {
    Uint16Array arr = new Uint16Array(new double[] {1e2, 2e2, 3e2});
    boolean result = arr.some((e) -> e == 200);
    assertTrue(result);
    }
    }

    @Test
    void testUint16ArraySomePart2063() {
    {
    Uint16Array arr = new Uint16Array(new int[] {0xA, 0xB, 0xC});
    boolean result = arr.some((e) -> e == 11);
    assertTrue(result);
    }
    }

    @Test
    void testUint16ArraySomePart2064() {
    {
    Uint16Array arr = new Uint16Array(new int[] {0xFF, 0x100, 0x101});
    boolean result = arr.some((e) -> e == 255);
    assertTrue(result);
    }
    }

    @Test
    void testUint16ArraySomePart2065() {
    {
    Uint16Array arr = new Uint16Array(new int[] {0x0000, 0x7FFF, 0xFFFF});
    boolean result = arr.some((e) -> e == 0xFFFF);
    assertTrue(result);
    }
    }

    @Test
    void testUint16ArraySomePart2066() {
    {
    Uint16Array arr = new Uint16Array(100000);
    arr.set(0, 1);
    int[] callCount = {0};
    boolean result = arr.some((e) -> { callCount[0]++; return e == 1; });
    assertTrue(result);
    assertEqual(1, callCount[0]);
    }
    }

    @Test
    void testUint16ArraySomePart2067() {
    {
    Uint16Array arr = new Uint16Array(65536);
    boolean result = arr.some((e) -> e > 0);
    assertFalse(result);
    }
    }

    @Test
    void testUint16ArraySomePart2068() {
    Uint16Array a = Uint16Array.of(1, 2, 3);
    boolean r = a.some((v, i, x) -> { if (i == 0) { x.set(2, 30); } return v == 30; });
    assertTrue(r);
    assertEqual(30, a.get(2));
    }

    @Test
    void testUint16ArraySomePart2069() {
    Uint16Array a = Uint16Array.of(1, 2, 3);
    boolean r = a.some((v, i, x) -> { x.set(i, v * 10); return v == 2; });
    assertTrue(r);
    assertEqual("10,20,3", a.join(","));
    }

    @Test
    void testUint16ArraySomePart2070() {
    ArrayBuffer b = new ArrayBuffer(10);
    Uint16Array all = new Uint16Array(b);
    all.set(Uint16Array.of(99, 2, 4, 6, 99));
    Uint16Array v = new Uint16Array(b, 2, 3);
    boolean r = v.some((n) -> n == 99);
    assertFalse(r);
    assertEqual("2,4,6", v.join(","));
    }

    @Test
    void testUint16ArraySomePart2071() {
    Uint16Array a = Uint16Array.of(10, 20, 30, 40);
    Uint16Array v = a.subarray(1, 3);
    int[] found = {-1};
    boolean r = v.some((n, i) -> { if (n == 30) { found[0] = i; } return n == 30; });
    assertTrue(r);
    assertEqual(1, found[0]);
    }

    @Test
    void testUint16ArraySomePart2072() {
    Uint16Array a = new Uint16Array(new int[] {-1, 65536, 65537});
    boolean r = a.some((n, i) -> i == 2 && n == 1);
    assertEqual("65535,0,1", a.join(","));
    assertTrue(r);
    }

    @Test
    void testUint16ArraySomePart2073() {
    Uint16Array a = Uint16Array.of(1, 2, 3, 4);
    int[] calls = {0};
    try {
    a.some((n) -> {
    calls[0]++;
    if (n == 2) {
    throw new Error("some stop");
    }
    return false;
    });
    fail();
    } catch (RuntimeException e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("some stop", e.getMessage());
    assertEqual(2, calls[0]);
    }
    }

    @Test
    void testUint16ArraySomePart2074() {
    ArrayBuffer b = new ArrayBuffer(6);
    Uint16Array a = new Uint16Array(b);
    Uint16Array alias = new Uint16Array(b);
    a.set(Uint16Array.of(1, 2, 3));
    boolean r = a.some((n, i) -> { if (i == 0) { alias.set(2, 33); } return n == 33; });
    assertTrue(r);
    }

    @Test
    void testUint16ArraySomePart2075() {
    Uint16Array a = Uint16Array.of(1, 2, 3);
    boolean r = a.some((n, i, x) -> { if (i == 2) { x.set(2, 30); } return n == 1; });
    assertTrue(r);
    assertEqual("1,2,3", a.join(","));
    }

    @Test
    void testUint16ArraySomePart2076() {
    Uint16Array a = Uint16Array.of(9, 1, 2, 3, 8);
    Uint16Array v = a.subarray(1, 4);
    try {
    v.some((n) -> {
    throw new Error("view error");
    });
    fail();
    } catch (RuntimeException e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("view error", e.getMessage());
    assertEqual("9,1,2,3,8", a.join(","));
    }
    }

    @Test
    void testUint16ArraySomePart2077() {
    Uint16Array a = new Uint16Array(128);
    a.set(127, 1);
    int[] calls = {0};
    boolean r = a.some((n) -> { calls[0]++; return n == 1; });
    assertTrue(r);
    assertEqual(128, calls[0]);
    }

    @Test
    void testUint16ArraySomePart2078() {
    Uint16Array a = new Uint16Array(128);
    a.set(0, 1);
    int[] calls = {0};
    boolean r = a.some((n) -> { calls[0]++; return n == 1; });
    assertTrue(r);
    assertEqual(1, calls[0]);
    }

    @Test
    void testUint16ArraySomePart2079() {
    Uint16Array a = Uint16Array.of(1, 2, 3);
    boolean r = a.some((n, i, x) -> { if (i == 0) { x.set(2, 0); } return n == 3; });
    assertFalse(r);
    assertEqual("1,2,0", a.join(","));
    }

    @Test
    void testUint16ArraySomePart2080() {
    Uint16Array src = Uint16Array.of(1, 2, 3);
    Uint16Array copy = new Uint16Array(src);
    src.set(2, 30);
    boolean r = copy.some((n) -> n == 30);
    assertFalse(r);
    assertEqual("1,2,3", copy.join(","));
    }
}
