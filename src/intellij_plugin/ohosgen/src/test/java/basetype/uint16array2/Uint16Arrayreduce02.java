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
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint16Arrayreduce02 —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint16Arrayreduce02 extends BasTest {

    @Test
    void testUint16ArrayReducePart2001() {
    try {
    Uint16Array arr = new Uint16Array(0);
    arr.reduce((prev, curr, array, unused3) -> prev + curr);
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArrayReducePart2002() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    int result = arr.reduce((prev, curr, array, unused3) -> prev + curr);
    assertEqual(6, result);
    }

    @Test
    void testUint16ArrayReducePart2003() {
    List<Uint16Array> inputs = java.util.Arrays.asList(new Uint16Array(new int[] {0}), new Uint16Array(new int[] {99}), new Uint16Array(new int[] {65535}));
    List<Integer> expected = java.util.Arrays.asList(0, 99, 65535);
    for (int i = 0; i < inputs.size(); i++) {
    int result = inputs.get(i).reduce((prev, curr, array, unused3) -> prev + curr);
    assertEqual(expected.get(i), result);
    }
    }

    @Test
    void testUint16ArrayReducePart2004() {
    List<Uint16Array> inputs = java.util.Arrays.asList(new Uint16Array(new int[] {1, 2}), new Uint16Array(new int[] {10, 20, 30, 40, 50}), new Uint16Array(new int[] {1, 1, 1, 1, 1}), new Uint16Array(new int[] {0, 0, 0}), new Uint16Array(new int[] {10, 20, 30}), new Uint16Array(new int[] {100, 200, 300}));
    List<Integer> expected = java.util.Arrays.asList(3, 150, 5, 0, 60, 600);
    for (int i = 0; i < inputs.size(); i++) {
    int result = inputs.get(i).reduce((prev, curr, array, unused3) -> prev + curr);
    assertEqual(expected.get(i), result);
    }
    }

    @Test
    void testUint16ArrayReducePart2005() {
    List<Uint16Array> mul = java.util.Arrays.asList(new Uint16Array(new int[] {10, 20}), new Uint16Array(new int[] {1, 2, 3}));
    List<Integer> mulExpected = java.util.Arrays.asList(200, 6);
    for (int i = 0; i < mul.size(); i++) {
    double result = mul.get(i).reduceDouble((prev, curr, array, unused3) -> prev * curr);
    assertEqual(mulExpected.get(i), result);
    }
    List<Uint16Array> sub = java.util.Arrays.asList(new Uint16Array(new int[] {5, 3}), new Uint16Array(new int[] {100, 200, 300}));
    List<Integer> subExpected = java.util.Arrays.asList(2, -400);
    for (int i = 0; i < sub.size(); i++) {
    int result = sub.get(i).reduce((prev, curr, array, unused3) -> prev - curr);
    assertEqual(subExpected.get(i), result);
    }
    List<Uint16Array> maxArr = java.util.Arrays.asList(new Uint16Array(new int[] {0, 65535}), new Uint16Array(new int[] {5, 10, 15}));
    List<Integer> maxExpected = java.util.Arrays.asList(65535, 15);
    for (int i = 0; i < maxArr.size(); i++) {
    int result = maxArr.get(i).reduce((prev, curr, array, unused3) -> prev > curr ? prev : curr);
    assertEqual(maxExpected.get(i), result);
    }
    List<Uint16Array> minArr = java.util.Arrays.asList(new Uint16Array(new int[] {7, 2}), new Uint16Array(new int[] {100, 200, 300}));
    List<Integer> minExpected = java.util.Arrays.asList(2, 100);
    for (int i = 0; i < minArr.size(); i++) {
    int result = minArr.get(i).reduce((prev, curr, array, unused3) -> prev < curr ? prev : curr);
    assertEqual(minExpected.get(i), result);
    }
    }

    @Test
    void testUint16ArrayReducePart2006() {
    List<Uint16Array> orArr = java.util.Arrays.asList(new Uint16Array(new int[] {2, 4}), new Uint16Array(new int[] {2, 4, 8}));
    List<Integer> orExpected = java.util.Arrays.asList(6, 14);
    for (int i = 0; i < orArr.size(); i++) {
    int result = orArr.get(i).reduce((prev, curr, array, unused3) -> prev | curr);
    assertEqual(orExpected.get(i), result);
    }
    List<Uint16Array> andArr = java.util.Arrays.asList(new Uint16Array(new int[] {2, 4}), new Uint16Array(new int[] {3, 7}));
    List<Integer> andExpected = java.util.Arrays.asList(0, 3);
    for (int i = 0; i < andArr.size(); i++) {
    int result = andArr.get(i).reduce((prev, curr, array, unused3) -> prev & curr);
    assertEqual(andExpected.get(i), result);
    }
    }

    @Test
    void testUint16ArrayReducePart2007() {
    try {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    Uint16Array empty = arr.subarray(0, 0);
    empty.reduce((prev, curr, array, unused3) -> prev + curr);
    fail();
    } catch (TypeError e) {
    assertEqual("TypeError", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArrayReducePart2008() {
    boolean[] called = {false};
    Uint16Array arr = new Uint16Array(new int[] {99});
    int result = arr.reduce((prev, curr, array, unused3) -> {
        called[0] = true;
        return prev + curr;
    });
    assertFalse(called[0]);
    assertEqual(99, result);
    }

    @Test
    void testUint16ArrayReducePart2009() {
    Uint16Array arr = new Uint16Array(new int[] {10, 20});
    double result = arr.reduceDouble((prev, curr, array, unused3) -> prev * curr);
    assertEqual(200, result);
    }

    @Test
    void testUint16ArrayReducePart2010() {
    Uint16Array arr = new Uint16Array(new int[] {5, 3});
    int result = arr.reduce((prev, curr, array, unused3) -> prev - curr);
    assertEqual(2, result);
    }

    @Test
    void testUint16ArrayReducePart2011() {
    Uint16Array arr = new Uint16Array(new int[] {3, 5});
    int result = arr.reduce((prev, curr, array, unused3) -> prev > curr ? prev : curr);
    assertEqual(5, result);
    }

    @Test
    void testUint16ArrayReducePart2012() {
    Uint16Array arr = new Uint16Array(new int[] {7, 2});
    int result = arr.reduce((prev, curr, array, unused3) -> prev < curr ? prev : curr);
    assertEqual(2, result);
    }

    @Test
    void testUint16ArrayReducePart2013() {
    Uint16Array arr = new Uint16Array(new int[] {32768, 32768});
    int result = arr.reduce((prev, curr, array, unused3) -> prev + curr);
    assertEqual(65536, result);
    }

    @Test
    void testUint16ArrayReducePart2014() {
    Uint16Array arr = new Uint16Array(new int[] {100, 0});
    int result = arr.reduce((prev, curr, array, unused3) -> prev + curr);
    assertEqual(100, result);
    }

    @Test
    void testUint16ArrayReducePart2015() {
    Uint16Array arr = new Uint16Array(new int[] {65535, 65535});
    int result = arr.reduce((prev, curr, array, unused3) -> prev + curr);
    assertEqual(131070, result);
    }

    @Test
    void testUint16ArrayReducePart2016() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4, 5});
    int result = arr.reduce((prev, curr, array, unused3) -> prev + curr);
    assertEqual(15, result);
    }

    @Test
    void testUint16ArrayReducePart2017() {
    Uint16Array arr = new Uint16Array(new int[] {100, 200, 300});
    int result = arr.reduce((prev, curr, array, unused3) -> prev > curr ? prev : curr);
    assertEqual(300, result);
    }

    @Test
    void testUint16ArrayReducePart2018() {
    Uint16Array arr = new Uint16Array(new int[] {100, 200, 300});
    int result = arr.reduce((prev, curr, array, unused3) -> prev < curr ? prev : curr);
    assertEqual(100, result);
    }

    @Test
    void testUint16ArrayReducePart2019() {
    Uint16Array arr = new Uint16Array(new int[] {2, 4, 6, 8});
    double result = arr.reduceDouble((prev, curr, array, unused3) -> prev * curr);
    assertEqual(384, result);
    }

    @Test
    void testUint16ArrayReducePart2020() {
    Uint16Array arr = new Uint16Array(new int[] {100, 200, 300});
    int result = arr.reduce((prev, curr, array, unused3) -> prev - curr);
    assertEqual(-400, result);
    }

    @Test
    void testUint16ArrayReducePart2021() {
    Uint16Array arr = new Uint16Array(new int[] {7, 3, 5});
    int result = arr.reduce((prev, curr, array, unused3) -> prev ^ curr);
    assertEqual(1, result);
    }

    @Test
    void testUint16ArrayReducePart2022() {
    int[] firstIndex = {-1};
    Uint16Array arr = new Uint16Array(new int[] {10, 20, 30});
    arr.reduce((prev, curr, idx, unused3) -> {
    if (firstIndex[0] == -1) {
    firstIndex[0] = idx;
    }
    return prev + curr;
        });
    assertEqual(1, firstIndex[0]);
    }

    @Test
    void testUint16ArrayReducePart2023() {
    List<Integer> indices = new ArrayList<>();
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4, 5});
    arr.reduce((prev, curr, idx, unused3) -> {
    indices.add(idx);
    return prev + curr;
        });
    assertEqual(4, indices.size());
    assertEqual(1, indices.get(0));
    assertEqual(2, indices.get(1));
    assertEqual(3, indices.get(2));
    assertEqual(4, indices.get(3));
    }

    @Test
    void testUint16ArrayReducePart2024() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    int result = arr.reduce((prev, curr, idx, unused3) -> prev + curr + idx);
    assertEqual(9, result);
    }

    @Test
    void testUint16ArrayReducePart2025() {
    boolean[] startsAtZero = {false};
    Uint16Array arr = new Uint16Array(new int[] {5, 10, 15});
    arr.reduce((prev, curr, idx, unused3) -> {
    if (idx == 0) {
    startsAtZero[0] = true;
    }
    return prev + curr;
        });
    assertFalse(startsAtZero[0]);
    }

    @Test
    void testUint16ArrayReducePart2026() {
    int[] prevIdx = {-1};
    boolean[] monotonic = {true};
    Uint16Array arr = new Uint16Array(new int[] {1, 3, 5, 7, 9});
    arr.reduce((prev, curr, idx, unused3) -> {
    if (idx <= prevIdx[0]) {
    monotonic[0] = false;
    }
    prevIdx[0] = idx;
    return prev + curr;
        });
    assertTrue(monotonic[0]);
    }

    @Test
    void testUint16ArrayReducePart2027() {
    Uint16Array arr = new Uint16Array(new int[] {10, 20, 30, 40});
    double result = arr.reduceDouble((prev, curr, idx, unused3) -> {
        if (idx % 2 == 0) { return prev + curr;
        } return prev;
    });
    assertEqual(40, result);
    }

    @Test
    void testUint16ArrayReducePart2028() {
    int[] first = {0};
    Uint16Array arr = new Uint16Array(new int[] {10, 20, 30});
    arr.reduce((prev, curr, idx, a) -> {
    first[0] = a.get(0);
    return prev + curr;
        });
    assertEqual(10, first[0]);
    }

    @Test
    void testUint16ArrayReducePart2029() {
    int[] len = {0};
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4, 5});
    arr.reduce((prev, curr, idx, a) -> {
    len[0] = a.length();
    return prev + curr;
        });
    assertEqual(5, len[0]);
    }

    @Test
    void testUint16ArrayReducePart2030() {
    boolean[] sameRef = {false};
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    arr.reduce((prev, curr, idx, a) -> {
    sameRef[0] = (a == arr);
    return prev + curr;
        });
    assertTrue(sameRef[0]);
    }

    @Test
    void testUint16ArrayReducePart2031() {
    int[] matchCount = {0};
    Uint16Array arr = new Uint16Array(new int[] {10, 20, 30});
    arr.reduce((prev, curr, idx, a) -> {
    if (a.get(idx) == curr) {
    matchCount[0]++;
    }
    return prev + curr;
        });
    assertEqual(2, matchCount[0]);
    }

    @Test
    void testUint16ArrayReducePart2032() {
    Uint16Array arr = new Uint16Array(new int[] {5, 8, 3, 10});
    int result = arr.reduce((prev, curr, idx, a) -> {
        if (curr > a.get(0)) { return prev + curr;
        } return prev;
    });
    assertEqual(23, result);
    }

    @Test
    void testUint16ArrayReducePart2033() {
    int[] last = {0};
    Uint16Array arr = new Uint16Array(new int[] {2, 4, 6, 8});
    arr.reduce((prev, curr, idx, a) -> {
    last[0] = a.get(a.length() - 1);
    return prev + curr;
        });
    assertEqual(8, last[0]);
    }

    @Test
    void testUint16ArrayReducePart2034() {
    Uint16Array arr = new Uint16Array(new int[] {65535, 1});
    int result = arr.reduce((prev, curr, array, unused3) -> prev + curr);
    assertEqual(65536, result);
    }

    @Test
    void testUint16ArrayReducePart2035() {
    Uint16Array arr = new Uint16Array(new double[] {3.14, 7});
    int result = arr.reduce((prev, curr, array, unused3) -> prev + curr);
    assertEqual(10, result);
    }

    @Test
    void testUint16ArrayReducePart2036() {
    Uint16Array arr = new Uint16Array(new double[] {Double.NaN, 10});
    int result = arr.reduce((prev, curr, array, unused3) -> prev + curr);
    assertEqual(10, result);
    }

    @Test
    void testUint16ArrayReducePart2037() {
    Uint16Array arr = new Uint16Array(new double[] {Double.POSITIVE_INFINITY, 5});
    int result = arr.reduce((prev, curr, array, unused3) -> prev + curr);
    assertEqual(5, result);
    }

    @Test
    void testUint16ArrayReducePart2038() {
    Uint16Array arr = new Uint16Array(new int[] {0b1, 0b10, 0b11});
    int result = arr.reduce((prev, curr, array, unused3) -> prev + curr);
    assertEqual(6, result);
    }

    @Test
    void testUint16ArrayReducePart2039() {
    Uint16Array arr = new Uint16Array(new int[] {07777, 1});
    int result = arr.reduce((prev, curr, array, unused3) -> prev + curr);
    assertEqual(4096, result);
    }

    @Test
    void testUint16ArrayReducePart2040() {
    Uint16Array arr = new Uint16Array(new double[] {1e4, 1});
    int result = arr.reduce((prev, curr, array, unused3) -> prev + curr);
    assertEqual(10001, result);
    }

    @Test
    void testUint16ArrayReducePart2041() {
    Uint16Array arr = new Uint16Array(new double[] {-0.5, 0});
    int result = arr.reduce((prev, curr, array, unused3) -> prev + curr);
    assertEqual(0, result);
    }

    @Test
    void testUint16ArrayReducePart2042() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    int[] callCount = {0};
    int[] firstPrevious = {-1};
    int[] firstCurrent = {-1};
    double result = arr.reduceDouble((prev, curr, array, unused3) -> {
        callCount[0]++;
        if (callCount[0] == 1) { firstPrevious[0] = (int) prev;
        firstCurrent[0] = (int) curr;
        } return Double.NaN;
    });
    assertTrue(true);
    assertEqual(2, callCount[0]);
    assertEqual(1, firstPrevious[0]);
    assertEqual(2, firstCurrent[0]);
    }

    @Test
    void testUint16ArrayReducePart2043() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2});
    double result = arr.reduceDouble((prev, curr, array, unused3) -> Double.POSITIVE_INFINITY);
    assertEqual(Double.POSITIVE_INFINITY, result);
    }

    @Test
    void testUint16ArrayReducePart2044() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2});
    double result = arr.reduceDouble((prev, curr, array, unused3) -> -Double.POSITIVE_INFINITY);
    assertEqual(-Double.POSITIVE_INFINITY, result);
    }

    @Test
    void testUint16ArrayReducePart2045() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    int result = arr.reduce((prev, curr, array, unused3) -> prev - 100);
    assertEqual(-199, result);
    }

    @Test
    void testUint16ArrayReducePart2046() {
    Uint16Array arr = new Uint16Array(new int[] {5, 10, 15});
    int result = arr.reduce((prev, curr, array, unused3) -> 0);
    assertEqual(0, result);
    }

    @Test
    void testUint16ArrayReducePart2047() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    double result = arr.reduceDouble((prev, curr, array, unused3) -> prev + curr + 0.5);
    assertEqual(7, result);
    }

    @Test
    void testUint16ArrayReducePart2048() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2});
    int[] callCount = {0};
    int[] observedPrevious = {-1};
    int[] observedCurrent = {-1};
    double result = arr.reduceDouble((prev, curr, array, unused3) -> {
        callCount[0]++;
        observedPrevious[0] = (int) prev;
        observedCurrent[0] = (int) curr;
        return 9007199254740991L;
    });
    assertEqual(9007199254740991L, result);
    assertEqual(1, callCount[0]);
    assertEqual(1, observedPrevious[0]);
    assertEqual(2, observedCurrent[0]);
    }

    @Test
    void testUint16ArrayReducePart2049() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2});
    int[] callCount = {0};
    int result = arr.reduce((prev, curr, array, unused3) -> {
        callCount[0]++;
        return prev + curr * 10;
    });
    assertEqual(21, result);
    assertEqual(1, callCount[0]);
    }

    @Test
    void testUint16ArrayReducePart2050() {
    try {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    arr.reduce((prev, curr, array, unused3) -> {
    throw new Error("reduce error");
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("reduce error", e.getMessage());
    }
    }

    @Test
    void testUint16ArrayReducePart2051() {
    int[] callCount = {0};
    try {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4});
    arr.reduce((prev, curr, array, unused3) -> {
    callCount[0]++;
    if (callCount[0] == 2) {
    throw new Error("fail on second call");
    }
    return prev + curr;
        });
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("fail on second call", e.getMessage());
    assertEqual(2, callCount[0]);
    }
    }

    @Test
    void testUint16ArrayReducePart2052() {
    int base = 100;
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    int result = arr.reduce((prev, curr, array, unused3) -> prev + curr + base);
    assertEqual(206, result);
    }

    @Test
    void testUint16ArrayReducePart2053() {
    int[] counter = {0};
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    int result = arr.reduce((prev, curr, array, unused3) -> {
        counter[0]++;
        return prev + curr;
    });
    assertEqual(2, counter[0]);
    assertEqual(6, result);
    }

    @Test
    void testUint16ArrayReducePart2054() {
    List<Integer> collected = new ArrayList<>();
    Uint16Array arr = new Uint16Array(new int[] {10, 20, 30});
    int result = arr.reduce((prev, curr, array, unused3) -> {
        collected.add(curr);
        return prev + curr;
    });
    assertEqual(2, collected.size());
    assertEqual(20, collected.get(0));
    assertEqual(30, collected.get(1));
    assertEqual(60, result);
    }

    @Test
    void testUint16ArrayReducePart2055() {
    Uint16Array.Uint16ArrayReducer2 addWithBonus = (a, b) -> a + b + 1;
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    int result = arr.reduce((prev, curr, array, unused3) -> addWithBonus.apply(prev, curr));
    assertEqual(8, result);
    }

    @Test
    void testUint16ArrayReducePart2056() {
    int FACTOR = 2;
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    double result = arr.reduceDouble((prev, curr, array, unused3) -> prev + curr * FACTOR);
    assertEqual(11, result);
    }

    @Test
    void testUint16ArrayReducePart2057() {
    Map<Integer, Integer> idxMap = new HashMap<>();
    Uint16Array arr = new Uint16Array(new int[] {5, 10, 15});
    arr.reduce((prev, curr, idx, unused3) -> {
    idxMap.put(idx, curr);
    return prev + curr;
        });
    assertEqual(10, idxMap.get(1));
    assertEqual(15, idxMap.get(2));
    }

    @Test
    void testUint16ArrayReducePart2058() {
    Uint16Array src = new Uint16Array(new int[] {1, 2, 3});
    int sum = src.reduce((prev, curr, array, unused3) -> prev + curr);
    Uint16Array dest = new Uint16Array(sum);
    assertEqual(6, dest.length());
    }

    @Test
    void testUint16ArrayReducePart2059() {
    Uint16Array arr = new Uint16Array(new int[] {10, 20, 30});
    int sum = arr.reduce((prev, curr, array, unused3) -> prev + curr);
    int doubled = sum * 2;
    assertEqual(120, doubled);
    }

    @Test
    void testUint16ArrayReducePart2060() {
    Uint16Array a = new Uint16Array(new int[] {1, 2, 3});
    Uint16Array b = new Uint16Array(new int[] {4, 5, 6});
    int sumA = a.reduce((prev, curr, array, unused3) -> prev + curr);
    int sumB = b.reduce((prev, curr, array, unused3) -> prev + curr);
    assertEqual(6, sumA);
    assertEqual(15, sumB);
    }

    @Test
    void testUint16ArrayReducePart2061() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4, 5});
    Uint16Array sub = arr.subarray(1, 4);
    int result = sub.reduce((prev, curr, array, unused3) -> prev + curr);
    assertEqual(9, result);
    }

    @Test
    void testUint16ArrayReducePart2062() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4, 5});
    Uint16Array sliced = arr.slice(2);
    int result = sliced.reduce((prev, curr, array, unused3) -> prev + curr);
    assertEqual(12, result);
    }

    @Test
    void testUint16ArrayReducePart2063() {
    Uint16Array arr = new Uint16Array(new int[] {3, 6, 9});
    int result = arr.reduce((prev, curr, array, unused3) -> prev + curr);
    assertEqual(18, result);
    }

    @Test
    void testUint16ArrayReducePart2064() {
    List<Integer> data = new ArrayList<>();
    for (int i = 0; i < 100; i++) {
    data.add(i);
    }
    Uint16Array arr = new Uint16Array(data);
    int result = arr.reduce((prev, curr, array, unused3) -> prev > curr ? prev : curr);
    assertEqual(99, result);
    }

    @Test
    void testUint16ArrayReducePart2065() {
    List<Integer> data = new ArrayList<>();
    for (int i = 0; i < 256; i++) {
    data.add(1);
    }
    Uint16Array arr = new Uint16Array(data);
    int result = arr.reduce((prev, curr, array, unused3) -> prev + curr);
    assertEqual(256, result);
    }

    @Test
    void testUint16ArrayReducePart2066() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    int result = arr.reduce((prev, curr, array, unused3) -> Integer.parseInt(String.valueOf(prev) + String.valueOf(curr)));
    assertEqual(123, result);
    }

    @Test
    void testUint16ArrayReducePart2067() {
    Uint16Array arr = new Uint16Array(new int[] {10, 20, 30, 40, 50});
    int result = arr.reduce((prev, curr, array, unused3) -> prev + 1);
    assertEqual(14, result);
    }

    @Test
    void testUint16ArrayReducePart2068() {
    Uint16Array arr = new Uint16Array(new int[] {7, 8, 9});
    int result = arr.reduce((prev, curr, array, unused3) -> prev);
    assertEqual(7, result);
    }

    @Test
    void testUint16ArrayReducePart2069() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3, 4});
    int result = arr.reduce((prev, curr, array, unused3) -> curr);
    assertEqual(4, result);
    }

    @Test
    void testUint16ArrayReducePart2070() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    int result = arr.reduce((prev, curr, array, unused3) -> prev ^ curr);
    assertEqual(0, result);
    }

    @Test
    void testUint16ArrayReducePart2071() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2});
    int result = arr.reduce((prev, curr, array, unused3) -> prev << curr);
    assertEqual(4, result);
    }

    @Test
    void testUint16ArrayReducePart2072() {
    Uint16Array arr = new Uint16Array(new int[] {16, 2});
    int result = arr.reduce((prev, curr, array, unused3) -> prev >> curr);
    assertEqual(4, result);
    }

    @Test
    void testUint16ArrayReducePart2073() {
    Uint16Array arr = new Uint16Array(new int[] {100, 30, 20});
    double result = arr.reduceDouble((prev, curr, array, unused3) -> prev % curr);
    assertEqual(10, result);
    }

    @Test
    void testUint16ArrayReducePart2074() {
    Uint16Array arr = new Uint16Array(new int[] {1, 5, 2, 8, 3});
    int result = arr.reduce((prev, curr, array, unused3) -> curr > 3 ? prev + 1 : prev);
    assertEqual(3, result);
    }

    @Test
    void testUint16ArrayReducePart2075() {
    Uint16Array arr = new Uint16Array(new int[] {1, 2, 3});
    double result = arr.reduceDouble((prev, curr, array, unused3) -> prev + curr * curr);
    assertEqual(14, result);
    }

    @Test
    void testUint16ArrayReducePart2076() {
    Uint16Array arr = new Uint16Array(4);
    arr.set(new Uint16Array(new int[] {10, 20, 30, 40}));
    int result = arr.reduce((prev, curr, array, unused3) -> prev + curr);
    assertEqual(100, result);
    }

    @Test
    void testUint16ArrayReducePart2077() {
    ArrayBuffer buffer = new ArrayBuffer(8);
    Uint16Array view1 = new Uint16Array(buffer);
    view1.set(0, 1);
    view1.set(1, 2);
    view1.set(2, 3);
    view1.set(3, 4);
    int result = view1.reduce((prev, curr, array, unused3) -> prev + curr);
    assertEqual(10, result);
    }

    @Test
    void testUint16ArrayReducePart2078() {
    Uint16Array arr = Uint16Array.of(4, 6, 8);
    int result = arr.reduce((previous, current, array, unused3) -> previous + current);
    assertEqual(18, result);
    }

    @Test
    void testUint16ArrayReducePart2079() {
    Uint16Array arr = Uint16Array.of(3, 5, 7);
    boolean[] sameArray = {true};
    int result = arr.reduce((previous, current, index, source) -> {
        sameArray[0] = sameArray[0] && source == arr && source.get(index) == current;
        return previous + current;
    });
    assertEqual(15, result);
    assertTrue(sameArray[0]);
    }

    @Test
    void testUint16ArrayReducePart2080() {
    Uint16Array arr = Uint16Array.of(2, 4, 6, 8);
    int[] encodedIndexes = {0};
    int result = arr.reduce((previous, current, index, unused3) -> {
        encodedIndexes[0] = encodedIndexes[0] * 10 + index;
        return previous + current;
    });
    assertEqual(20, result);
    assertEqual(123, encodedIndexes[0]);
    }
}
