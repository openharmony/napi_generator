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
import basetype.common.TypeError;
import basetype.common.Uint16Array;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Uint16ArrayreduceRight02 —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint16ArrayreduceRight02 extends BasTest {

    @Test
    void testUint16ArrayReduceRightPart2001() {
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    int result = arr.reduceRight((prev, curr, idx, a)-> prev - curr);
    assertEqual(0, result);}

    @Test
    void testUint16ArrayReduceRightPart2002() {
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    int result = arr.reduceRight((prev, curr, idx, a)-> prev + curr);
    assertEqual(60, result);}

    @Test
    void testUint16ArrayReduceRightPart2003() {
    Uint16Array arr = Uint16Array.of(2, 3, 4);
    double result = arr.reduceRightDouble((prev, curr, idx, a)-> prev * curr);
    assertEqual(24, result);}

    @Test
    void testUint16ArrayReduceRightPart2004() {
    Uint16Array arr = Uint16Array.of(100, 10, 2);
    double result = arr.reduceRightDouble((prev, curr, idx, a)-> prev / curr);
    assertEqual(0.002, result);}

    @Test
    void testUint16ArrayReduceRightPart2005() {
    Uint16Array arr = Uint16Array.of(0x00, 0xF0, 0x0F);
    int result = arr.reduceRight((prev, curr, idx, a)-> prev | curr);
    assertEqual(0xFF, result);}

    @Test
    void testUint16ArrayReduceRightPart2006() {
    Uint16Array arr = Uint16Array.of(0xFFFF, 0xFF00, 0x0F0F);
    int result = arr.reduceRight((prev, curr, idx, a)-> prev & curr);
    assertEqual(0x0F00, result);}

    @Test
    void testUint16ArrayReduceRightPart2007() {
    Uint16Array arr = Uint16Array.of(0xAAAA, 0x5555, 0xFFFF);
    int result = arr.reduceRight((prev, curr, idx, a)-> prev ^ curr);
    assertEqual(0, result);}

    @Test
    void testUint16ArrayReduceRightPart2008() {
    Uint16Array arr = Uint16Array.of(100, 50, 200);
    int result = arr.reduceRight((prev, curr, idx, a)-> Math.min(prev, curr));
    assertEqual(50, result);}

    @Test
    void testUint16ArrayReduceRightPart2009() {
    Uint16Array arr = Uint16Array.of(100, 50, 200);
    int result = arr.reduceRight((prev, curr, idx, a)-> Math.max(prev, curr));
    assertEqual(200, result);}

    @Test
    void testUint16ArrayReduceRightPart2010() {
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    int result = arr.reduceRight((prev, curr, idx, a)-> prev);
    assertEqual(30, result);}

    @Test
    void testUint16ArrayReduceRightPart2011() {
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    int result = arr.reduceRight((prev, curr, idx, a)-> curr);
    assertEqual(10, result);}

    @Test
    void testUint16ArrayReduceRightPart2012() {
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    double result = arr.reduceRightDouble((prev, curr, idx, a)-> prev + Double.NaN);
    assertTrue(Double.isNaN(result));}

    @Test
    void testUint16ArrayReduceRightPart2013() {
    int[] callCount = {0};
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    arr.reduceRight((prev, curr, idx, a)-> {
    callCount[0] = callCount[0] + 1;
    return prev + curr;});
    assertEqual(2, callCount[0]);}

    @Test
    void testUint16ArrayReduceRightPart2014() {
    int factor = 2;
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    double result = arr.reduceRightDouble((prev, curr, idx, a)-> prev + curr * factor);
    assertEqual(90, result);}

    @Test
    void testUint16ArrayReduceRightPart2015() {
    Uint16Array.Uint16ArrayMapper1 doubleVal = (val) -> val * 2;
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    int result = arr.reduceRight((prev, curr, idx, a)-> prev + doubleVal.apply(curr));
    assertEqual(90, result);}

    @Test
    void testUint16ArrayReduceRightPart2016() {
    Uint16Array arr = Uint16Array.of(0);
    int result = arr.reduceRight((prev, curr, idx, a)-> prev - curr);
    assertEqual(0, result);}

    @Test
    void testUint16ArrayReduceRightPart2017() {
    Uint16Array arr = Uint16Array.of(65535);
    int result = arr.reduceRight((prev, curr, idx, a)-> prev - curr);
    assertEqual(65535, result);}

    @Test
    void testUint16ArrayReduceRightPart2018() {
    Uint16Array arr = Uint16Array.of(0x10);
    int result = arr.reduceRight((prev, curr, idx, a)-> prev + curr);
    assertEqual(16, result);}

    @Test
    void testUint16ArrayReduceRightPart2019() {
    Uint16Array arr = Uint16Array.of(1, 2);
    int result = arr.reduceRight((prev, curr, idx, a)-> prev - curr);
    assertEqual(1, result);}

    @Test
    void testUint16ArrayReduceRightPart2020() {
    Uint16Array arr = Uint16Array.of(10, 20);
    int result = arr.reduceRight((prev, curr, idx, a)-> prev + curr);
    assertEqual(30, result);}

    @Test
    void testUint16ArrayReduceRightPart2021() {
    Uint16Array arr = Uint16Array.of(65535, 0);
    int result = arr.reduceRight((prev, curr, idx, a)-> prev - curr);
    assertEqual(-65535, result);}

    @Test
    void testUint16ArrayReduceRightPart2022() {
    Uint16Array arr = Uint16Array.of(0, 65535);
    int result = arr.reduceRight((prev, curr, idx, a)-> prev - curr);
    assertEqual(65535, result);}

    @Test
    void testUint16ArrayReduceRightPart2023() {
    Uint16Array arr = Uint16Array.of(0, 0);
    int result = arr.reduceRight((prev, curr, idx, a)-> prev - curr);
    assertEqual(0, result);}

    @Test
    void testUint16ArrayReduceRightPart2024() {
    Uint16Array arr = Uint16Array.of(65535, 65535);
    int result = arr.reduceRight((prev, curr, idx, a)-> prev - curr);
    assertEqual(0, result);}

    @Test
    void testUint16ArrayReduceRightPart2025() {
    Uint16Array arr = Uint16Array.of(100, 200);
    int result = arr.reduceRight((prev, curr, idx, a)-> prev + curr);
    assertEqual(300, result);}

    @Test
    void testUint16ArrayReduceRightPart2026() {
    Uint16Array arr = Uint16Array.of(2, 3);
    double result = arr.reduceRightDouble((prev, curr, idx, a)-> prev * curr);
    assertEqual(6, result);}

    @Test
    void testUint16ArrayReduceRightPart2027() {
    Uint16Array arr = Uint16Array.of(5, 10);
    int result = arr.reduceRight((prev, curr, idx, a)-> prev - curr);
    assertEqual(5, result);}

    @Test
    void testUint16ArrayReduceRightPart2028() {
    Uint16Array arr = Uint16Array.of(10, 5);
    double result = arr.reduceRightDouble((prev, curr, idx, a)-> prev / curr);
    assertEqual(0.5, result);}

    @Test
    void testUint16ArrayReduceRightPart2029() {
    Uint16Array arr = Uint16Array.of(7, 3);
    int result = arr.reduceRight((prev, curr, idx, a)-> prev - curr);
    assertEqual(-4, result);}

    @Test
    void testUint16ArrayReduceRightPart2030() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    int result = arr.reduceRight((prev, curr, idx, a)-> prev - curr);
    assertEqual(0, result);}

    @Test
    void testUint16ArrayReduceRightPart2031() {
    Uint16Array arr = Uint16Array.of(0, 0, 0);
    int result = arr.reduceRight((prev, curr, idx, a)-> prev - curr);
    assertEqual(0, result);}

    @Test
    void testUint16ArrayReduceRightPart2032() {
    Uint16Array arr = Uint16Array.of(65535, 0, 65535);
    int result = arr.reduceRight((prev, curr, idx, a)-> prev - curr);
    assertEqual(0, result);}

    @Test
    void testUint16ArrayReduceRightPart2033() {
    Uint16Array arr = Uint16Array.of(100, 200, 300);
    int result = arr.reduceRight((prev, curr, idx, a)-> prev + curr);
    assertEqual(600, result);}

    @Test
    void testUint16ArrayReduceRightPart2034() {
    Uint16Array arr = Uint16Array.of(1, 1, 1);
    int result = arr.reduceRight((prev, curr, idx, a)-> prev + curr);
    assertEqual(3, result);}

    @Test
    void testUint16ArrayReduceRightPart2035() {
    Uint16Array arr = Uint16Array.of(1, 1, 1, 1, 1);
    int result = arr.reduceRight((prev, curr, idx, a)-> prev + curr);
    assertEqual(5, result);}

    @Test
    void testUint16ArrayReduceRightPart2036() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40);
    int result = arr.reduceRight((prev, curr, idx, a)-> prev - curr);
    assertEqual(-20, result);}

    @Test
    void testUint16ArrayReduceRightPart2037() {
    Uint16Array arr = new Uint16Array(100);
    for (int i = 0; i < 100; i = i + 1) {
    arr.set(i, 1);}
    int result = arr.reduceRight((prev, curr, idx, a)-> prev + curr);
    assertEqual(100, result);}

    @Test
    void testUint16ArrayReduceRightPart2038() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4, 5);
    double result = arr.reduceRightDouble((prev, curr, idx, a)-> prev * curr);
    assertEqual(120, result);}

    @Test
    void testUint16ArrayReduceRightPart2039() {
    Uint16Array arr = new Uint16Array(3);
    arr.set(0, 5);
    arr.set(1, 10);
    arr.set(2, 15);
    int result = arr.reduceRight((prev, curr, idx, a)-> prev + curr);
    assertEqual(30, result);}

    @Test
    void testUint16ArrayReduceRightPart2040() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint16Array arr = new Uint16Array(buf);
    arr.set(0, 100);
    arr.set(1, 200);
    arr.set(2, 300);
    arr.set(3, 400);
    int result = arr.reduceRight((prev, curr, idx, a)-> prev + curr);
    assertEqual(1000, result);}

    @Test
    void testUint16ArrayReduceRightPart2041() {
    List<Integer> indices = new ArrayList<>();
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40);
    arr.reduceRight((prev, curr, idx, a)-> {
    indices.add(idx);
    return prev + curr;});
    assertEqual(2, indices.get(0));
    assertEqual(1, indices.get(1));
    assertEqual(0, indices.get(2));}

    @Test
    void testUint16ArrayReduceRightPart2042() {
    int[] len = {0};
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    arr.reduceRight((prev, curr, idx, a)-> {
    len[0] = a.length();
    return prev + curr;});
    assertEqual(3, len[0]);}

    @Test
    void testUint16ArrayReduceRightPart2043() {
    int[] first = {0};
    Uint16Array arr = Uint16Array.of(100, 200, 300);
    arr.reduceRight((prev, curr, idx, a)-> {
    first[0] = a.get(0);
    return prev + curr;});
    assertEqual(100, first[0]);}

    @Test
    void testUint16ArrayReduceRightPart2044() {
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    int finalPrev = arr.reduceRight((prev, curr, idx, a)-> { return prev + curr;});
    assertEqual(60, finalPrev);}

    @Test
    void testUint16ArrayReduceRightPart2045() {
    List<Integer> prevValues = new ArrayList<>();
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    arr.reduceRight((prev, curr, idx, a)-> {
    prevValues.add(prev);
    return prev + curr;});
    assertEqual(30, prevValues.get(0));
    assertEqual(50, prevValues.get(1));}

    @Test
    void testUint16ArrayReduceRightPart2046() {
    List<Integer> currValues = new ArrayList<>();
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    arr.reduceRight((prev, curr, idx, a)-> {
    currValues.add(curr);
    return prev + curr;});
    assertEqual(20, currValues.get(0));
    assertEqual(10, currValues.get(1));}

    @Test
    void testUint16ArrayReduceRightPart2047() {
    Uint16Array arr = Uint16Array.of(100, 50);
    int result = arr.reduceRight((prev, curr, idx, a)-> prev - curr);
    assertEqual(-50, result);}

    @Test
    void testUint16ArrayReduceRightPart2048() {
    Uint16Array arr = Uint16Array.of(50, 100);
    int result = arr.reduceRight((prev, curr, idx, a)-> prev + curr);
    assertEqual(150, result);}

    @Test
    void testUint16ArrayReduceRightPart2049() {
    Uint16Array arr = Uint16Array.of(100, 200, 300, 400);
    int result = arr.reduceRight((prev, curr, idx, a)-> prev + curr);
    assertEqual(1000, result);}

    @Test
    void testUint16ArrayReduceRightPart2050() {
    Uint16Array arr = new Uint16Array();
    try {
    arr.reduceRight((prev, curr, idx, a)-> prev + curr);
    fail();} catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());}
    }

    @Test
    void testUint16ArrayReduceRightPart2051() {
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    try {
    arr.reduceRight((prev, curr, idx, a)-> {
    throw new Error("custom error");});
    fail();} catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());}
    }

    @Test
    void testUint16ArrayReduceRightPart2052() {
    boolean[] cbCalled = {false};
    Uint16Array arr = Uint16Array.of(42);
    int result = arr.reduceRight((prev, curr, idx, a)-> { cbCalled[0] = true; return prev - curr;});
    assertEqual(false, cbCalled[0]);
    assertEqual(42, result);}

    @Test
    void testUint16ArrayReduceRightPart2053() {
    boolean[] cbCalled = {false};
    Uint16Array arr = new Uint16Array();
    try {
    arr.reduceRight((prev, curr, idx, a)-> {
    cbCalled[0] = true;
    return prev + curr;});
    fail();} catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());}
    assertEqual(false, cbCalled[0]);}

    @Test
    void testUint16ArrayReduceRightPart2054() {
    Uint16Array arr = Uint16Array.of(0, 65535);
    int result = arr.reduceRight((prev, curr, idx, a)-> prev | curr);
    assertEqual(65535, result);}

    @Test
    void testUint16ArrayReduceRightPart2055() {
    Uint16Array arr = Uint16Array.of(65535, 0);
    int result = arr.reduceRight((prev, curr, idx, a)-> prev & curr);
    assertEqual(0, result);}

    @Test
    void testUint16ArrayReduceRightPart2056() {
    Uint16Array arr = Uint16Array.of(0x0F, 0xF0);
    int result = arr.reduceRight((prev, curr, idx, a)-> prev ^ curr);
    assertEqual(0xFF, result);}

    @Test
    void testUint16ArrayReduceRightPart2057() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4);
    int result = arr.reduceRight((prev, curr, idx, a)-> prev | curr);
    assertEqual(7, result);}

    @Test
    void testUint16ArrayReduceRightPart2058() {
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    arr.reduceRight((prev, curr, idx, a)-> {
    if (idx == 1) {
    a.set(0, 99);}
    return prev + curr;});
    assertEqual(99, arr.get(0));}

    @Test
    void testUint16ArrayReduceRightPart2059() {
    List<Integer> lengths = new ArrayList<>();
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    arr.reduceRight((prev, curr, idx, a)-> {
    lengths.add(a.length());
    return prev + curr;});
    assertEqual(3, lengths.get(0));
    assertEqual(3, lengths.get(1));}

    @Test
    void testUint16ArrayReduceRightPart2060() {
    Uint16Array arr = Uint16Array.of(40000, 40000);
    int result = arr.reduceRight((prev, curr, idx, a)-> prev + curr);
    assertEqual(80000, result);}

    @Test
    void testUint16ArrayReduceRightPart2061() {
    Uint16Array arr = Uint16Array.of(25000, 25000);
    int result = arr.reduceRight((prev, curr, idx, a)-> prev + curr);
    assertEqual(50000, result);}

    @Test
    void testUint16ArrayReduceRightPart2062() {
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    int result = arr.reduceRight((prev, curr, idx, a)-> prev > curr ? prev : curr);
    assertEqual(30, result);}

    @Test
    void testUint16ArrayReduceRightPart2063() {
    Uint16Array arr = Uint16Array.of(50000, 50000, 50000);
    double result = arr.reduceRightDouble((prev, curr, idx, a)-> (prev + curr) % 65536);
    assertEqual(18928, result);}

    @Test
    void testUint16ArrayReduceRightPart2064() {
    Uint16Array arr = Uint16Array.of(100, 200, 300);
    int result = arr.reduceRight((prev, curr, idx, a)-> (int) ((prev + curr) / 2));
    assertEqual(175, result);}

    @Test
    void testUint16ArrayReduceRightPart2065() {
    Uint16Array arr = Uint16Array.of(0xFFFF, 0x0000, 0xFFFF);
    int result = arr.reduceRight((prev, curr, idx, a)-> prev - curr);
    assertEqual(0, result);}

    @Test
    void testUint16ArrayReduceRightPart2066() {
    Uint16Array arr = Uint16Array.of(0x8000, 0x8000, 0x8000);
    int result = arr.reduceRight((prev, curr, idx, a)-> prev + curr);
    assertEqual(0x18000, result);}

    @Test
    void testUint16ArrayReduceRightPart2067() {
    Uint16Array arr = Uint16Array.of(8, 2);
    double result = arr.reduceRightDouble((prev, curr, idx, a)-> prev / curr);
    assertEqual(0.25, result);}

    @Test
    void testUint16ArrayReduceRightPart2068() {
    Uint16Array arr = Uint16Array.of(5, 10, 15);
    int result = arr.reduceRight((prev, curr, idx, a)-> prev + curr);
    assertEqual(30, result);}

    @Test
    void testUint16ArrayReduceRightPart2069() {
    Uint16Array arr = Uint16Array.of(100, 50, 25);
    int result = arr.reduceRight((prev, curr, idx, a)-> prev - curr);
    assertEqual(-125, result);}

    @Test
    void testUint16ArrayReduceRightPart2070() {
    Uint16Array a = Uint16Array.of(10, 3, 2);
    int[] calls = {0};
    int r = a.reduceRight((p, v, array, unused3)-> { calls[0]++; return p - v;});
    assertEqual(-11, r);
    assertEqual(2, calls[0]);}

    @Test
    void testUint16ArrayReduceRightPart2071() {
    Uint16Array a = Uint16Array.of(100, 10, 2);
    double r = a.reduceRightDouble((p, v, array, unused3)-> { return p / v;});
    assertEqual(0.002, r);}

    @Test
    void testUint16ArrayReduceRightPart2072() {
    Uint16Array a = Uint16Array.of(20, 5, 2);
    int r = a.reduceRight((p, v, array, unused3)-> { return p - v;});
    assertEqual(-23, r);}

    @Test
    void testUint16ArrayReduceRightPart2073() {
    Uint16Array a = Uint16Array.of(32768);
    int[] calls = {0};
    int r = a.reduceRight((p, v, array, unused3)-> { calls[0]++; return p + v;});
    assertEqual(32768, r);
    assertEqual(0, calls[0]);}

    @Test
    void testUint16ArrayReduceRightPart2074() {
    Uint16Array a = new Uint16Array();
    try {
    a.reduceRight((p, v, array, unused3)-> {
    return p + v;});
    fail();} catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());}
    }

    @Test
    void testUint16ArrayReduceRightPart2075() {
    Uint16Array a = Uint16Array.of(1, 2, 3, 4);
    int r = a.reduceRight((p, v, array, unused3)-> { return p * 10 + v;});
    assertEqual(4321, r);}

    @Test
    void testUint16ArrayReduceRightPart2076() {
    Uint16Array a = Uint16Array.of(9, 8, 7, 6, 5);
    Uint16Array v = a.subarray(1, 4);
    double r = v.reduceRightDouble((p, n, i, unused3)-> { return p + n * i;});
    assertEqual(13, r);}

    @Test
    void testUint16ArrayReduceRightPart2077() {
    Uint16Array a = Uint16Array.of(8, 2);
    double r = a.reduceRightDouble((p, v, array, unused3)-> { return p / v;});
    assertEqual(0.25, r);}

    @Test
    void testUint16ArrayReduceRightPart2078() {
    Uint16Array a = Uint16Array.of(1, 2, 3);
    int r = a.reduceRight((p, v, i, x)-> { x.set(i, v * 10); return p + v;});
    assertEqual(6, r);
    assertEqual("10,20,3", a.join(","));}

    @Test
    void testUint16ArrayReduceRightPart2079() {
    Uint16Array original = Uint16Array.of(2, 4, 8);
    Uint16Array copy = new Uint16Array(original);
    copy.set(2, 16);
    int r = copy.reduceRight((p, v, array, unused3)-> { return p + v;});
    assertEqual(22, r);
    assertEqual("2,4,8", original.join(","));}

    @Test
    void testUint16ArrayReduceRightPart2080() {
    Uint16Array a = Uint16Array.of(5, 0, 7);
    double r = a.reduceRightDouble((p, v, array, unused3)-> { return p * v;});
    assertEqual(0, r);}
}
