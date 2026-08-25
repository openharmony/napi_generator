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
 * Uint16Arrayreduce01 —— Int16Array 方法族测试。
 */
public class Uint16Arrayreduce01 extends BasTest {

    @Test
    void testUint16ArrayReducePart1001() {
    Uint16Array arr = Uint16Array.of(4, 5, 6);
    Uint16Array.Uint16ArrayReducer2 cb = (prev, curr) -> prev + curr;
    int result = arr.reduce(cb, 0);
    assertEqual(15, result);
    }

    @Test
    void testUint16ArrayReducePart1002() {
    List<Uint16Array> inputs = java.util.Arrays.asList(Uint16Array.of(7, 8, 9), Uint16Array.of(3, 7), Uint16Array.of(1, 1, 1, 1, 1, 1, 1, 1, 1, 1), Uint16Array.of(0, 1, 2, 3, 4), Uint16Array.of(5, 10, 15));
    List<Integer> expected = java.util.Arrays.asList(24, 10, 10, 10, 30);
    for (int i = 0; i < inputs.size(); i++) {
    int result = inputs.get(i).reduce((prev, curr, $x2, $x3)-> prev + curr, 0);
    assertEqual(expected.get(i), result);
    }
    }

    @Test
    void testUint16ArrayReducePart1003() {
    Uint16Array arr = Uint16Array.of(100, 200, 300);
    int result = arr.reduce((prev, curr, $x2, $x3)-> prev + curr, 0);
    assertEqual(600, result);
    }

    @Test
    void testUint16ArrayReducePart1004() {
    Uint16Array arr = Uint16Array.of(2, 4, 6);
    int result = arr.reduce((prev, curr, idx, a)-> prev + curr + idx + a.length(), 0);
    assertEqual(24, result);
    }

    @Test
    void testUint16ArrayReducePart1005() {
    Uint16Array arr = Uint16Array.of(5, 10, 15);
    int factor = 2;
    double result = arr.reduceDouble((prev, curr, $x2, $x3)-> prev + curr * factor, 0);
    assertEqual(60, result);
    }

    @Test
    void testUint16ArrayReducePart1006() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    int[] callCount = {0};
    int result = arr.reduce((prev, curr, $x2, $x3)-> { callCount[0] = callCount[0] + 1; return prev + curr; }, 0);
    assertEqual(6, result);
    assertEqual(3, callCount[0]);
    }

    @Test
    void testUint16ArrayReducePart1007() {
    Uint16Array arr = Uint16Array.of(2, 3, 4);
    double result = arr.reduceDouble((prev, curr, $x2, $x3)-> prev * curr, 1);
    assertEqual(24, result);
    }

    @Test
    void testUint16ArrayReducePart1008() {
    Uint16Array arr = Uint16Array.of(5, 3, 1);
    int result = arr.reduce((prev, curr, $x2, $x3)-> prev - curr, 20);
    assertEqual(11, result);
    }

    @Test
    void testUint16ArrayReducePart1009() {
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    int result = arr.reduce((prev, curr, $x2, $x3)-> prev + curr, 100);
    assertEqual(160, result);
    }

    @Test
    void testUint16ArrayReducePart1010() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    int result = arr.reduce((prev, curr, $x2, $x3)-> prev + curr, 1);
    assertEqual(7, result);
    }

    @Test
    void testUint16ArrayReducePart1011() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    int result = arr.reduce((prev, curr, $x2, $x3)-> prev + curr, -1);
    assertEqual(5, result);
    }

    @Test
    void testUint16ArrayReducePart1012() {
    Uint16Array arr = Uint16Array.of(1, 2);
    int result = arr.reduce((prev, curr, $x2, $x3)-> prev + curr, 65535);
    assertEqual(65538, result);
    }

    @Test
    void testUint16ArrayReducePart1013() {
    Uint16Array arr = Uint16Array.of(1, 2);
    int result = arr.reduce((prev, curr, $x2, $x3)-> prev + curr, 65536);
    assertEqual(65539, result);
    }

    @Test
    void testUint16ArrayReducePart1014() {
    Uint16Array arr = Uint16Array.of(1, 2);
    double result = arr.reduceDouble((prev, curr, $x2, $x3)-> prev + curr, Double.NaN);
    assertTrue(Double.isNaN(result));
    }

    @Test
    void testUint16ArrayReducePart1015() {
    Uint16Array arr = Uint16Array.of(1, 2);
    double result = arr.reduceDouble((prev, curr, $x2, $x3)-> prev + curr, Double.POSITIVE_INFINITY);
    assertEqual(Double.POSITIVE_INFINITY, result);
    }

    @Test
    void testUint16ArrayReducePart1016() {
    Uint16Array arr = Uint16Array.of(1, 2);
    double result = arr.reduceDouble((prev, curr, $x2, $x3)-> prev + curr, -Double.POSITIVE_INFINITY);
    assertEqual(-Double.POSITIVE_INFINITY, result);
    }

    @Test
    void testUint16ArrayReducePart1017() {
    Uint16Array arr = Uint16Array.of(1, 2);
    long result = arr.reduceLong((prev, curr, $x2, $x3)-> prev + curr, 9007199254740991L);
    assertEqual(9007199254740994L, result);
    }

    @Test
    void testUint16ArrayReducePart1018() {
    Uint16Array arr = Uint16Array.of(1, 2);
    double result = arr.reduceDouble((prev, curr, $x2, $x3)-> prev + curr, 5e-324);
    assertEqual(3, result);
    }

    @Test
    void testUint16ArrayReducePart1019() {
    Uint16Array arr = Uint16Array.of(1, 2);
    int result = arr.reduce((prev, curr, $x2, $x3)-> prev + curr, 0777);
    assertEqual(514, result);
    }

    @Test
    void testUint16ArrayReducePart1020() {
    Uint16Array arr = Uint16Array.of(1, 2);
    int result = arr.reduce((prev, curr, $x2, $x3)-> prev + curr, 0b1010);
    assertEqual(13, result);
    }

    @Test
    void testUint16ArrayReducePart1021() {
    Uint16Array arr = Uint16Array.of(1, 2);
    double result = arr.reduceDouble((prev, curr, $x2, $x3)-> prev + curr, 1e5);
    assertEqual(100003, result);
    }

    @Test
    void testUint16ArrayReducePart1022() {
    Uint16Array arr = Uint16Array.of(1, 2);
    int result = arr.reduce((prev, curr, $x2, $x3)-> prev + curr, -65535);
    assertEqual(-65532, result);
    }

    @Test
    void testUint16ArrayReducePart1023() {
    Uint16Array arr = Uint16Array.of(1, 2);
    int result = arr.reduce((prev, curr, $x2, $x3)-> prev + curr, 32768);
    assertEqual(32771, result);
    }

    @Test
    void testUint16ArrayReducePart1024() {
    Uint16Array arr = Uint16Array.of(1, 2);
    int result = arr.reduce((prev, curr, $x2, $x3)-> prev + curr, -32768);
    assertEqual(-32765, result);
    }

    @Test
    void testUint16ArrayReducePart1025() {
    Uint16Array arr = Uint16Array.of(65, 66, 67);
    String result = arr.reduce((prev, curr, $x2, $x3)-> prev + String.valueOf((char) curr), "");
    assertEqual("ABC", result);
    }

    @Test
    void testUint16ArrayReducePart1026() {
    Uint16Array arr = Uint16Array.of(65, 66);
    String result = arr.reduce((prev, curr, $x2, $x3)-> prev + String.valueOf((char) curr), "result:");
    assertEqual("result:AB", result);
    }

    @Test
    void testUint16ArrayReducePart1027() {
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    String result = arr.reduce((prev, curr, $x2, $x3)-> prev + String.valueOf(curr), "");
    assertEqual("102030", result);
    }

    @Test
    void testUint16ArrayReducePart1028() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    String result = arr.reduce((prev, curr, $x2, $x3)-> prev + "-" + String.valueOf(curr), "start");
    assertEqual("start-1-2-3", result);
    }

    @Test
    void testUint16ArrayReducePart1029() {
    Uint16Array arr = new Uint16Array();
    String r1 = arr.reduce((prev, curr, $x2, $x3)-> prev + String.valueOf(curr), "");
    assertEqual("", r1);
    String r2 = arr.reduce((prev, curr, $x2, $x3)-> prev + String.valueOf(curr), "base");
    assertEqual("base", r2);
    boolean r3 = arr.reduce((prev, curr, $x2, $x3)-> prev && (curr > 0), true);
    assertTrue(r3);
    boolean r4 = arr.reduce((prev, curr, $x2, $x3)-> prev || (curr > 0), false);
    assertFalse(r4);
    int r5 = arr.reduce((prev, curr, $x2, $x3)-> prev + curr, 42);
    assertEqual(42, r5);
    }

    @Test
    void testUint16ArrayReducePart1030() {
    Uint16Array arr = Uint16Array.of(99);
    String result = arr.reduce((prev, curr, $x2, $x3)-> prev + String.valueOf(curr), "val:");
    assertEqual("val:99", result);
    }

    @Test
    void testUint16ArrayReducePart1031() {
    Uint16Array arr = Uint16Array.of(5, 5, 5);
    String result = arr.reduce((prev, curr, idx, $x3)-> prev + String.valueOf(idx), "");
    assertEqual("012", result);
    }

    @Test
    void testUint16ArrayReducePart1032() {
    Uint16Array arr = Uint16Array.of(0, 1);
    String result = arr.reduce((prev, curr, $x2, $x3)-> prev + String.valueOf(curr), "");
    assertEqual("01", result);
    }

    @Test
    void testUint16ArrayReducePart1033() {
    Uint16Array arr = Uint16Array.of(65535, 1);
    String result = arr.reduce((prev, curr, $x2, $x3)-> prev + String.valueOf(curr), "");
    assertEqual("655351", result);
    }

    @Test
    void testUint16ArrayReducePart1034() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    boolean result = arr.reduce((prev, curr, $x2, $x3)-> prev && (curr > 0), true);
    assertTrue(result);
    }

    @Test
    void testUint16ArrayReducePart1035() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    int[] callCount = {0};
    boolean result = arr.reduce((prev, curr, idx, a)-> { callCount[0]++; return prev || curr == 2; }, false);
    assertEqual(3, callCount[0]);
    assertTrue(result);
    }

    @Test
    void testUint16ArrayReducePart1036() {
    Uint16Array arr = Uint16Array.of(0, 0, 1);
    int[] callCount = {0};
    boolean result = arr.reduce((prev, curr, idx, a)-> { callCount[0]++; return prev && curr > 0; }, true);
    assertEqual(3, callCount[0]);
    assertFalse(result);
    }

    @Test
    void testUint16ArrayReducePart1037() {
    Uint16Array arr = Uint16Array.of(0, 0, 0);
    boolean result = arr.reduce((prev, curr, $x2, $x3)-> prev || (curr > 0), false);
    assertFalse(result);
    }

    @Test
    void testUint16ArrayReducePart1038() {
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    int result = arr.reduce((prev, curr, idx, a)-> prev + curr, 0);
    assertEqual(60, result);
    }

    @Test
    void testUint16ArrayReducePart1039() {
    Uint16Array arr = Uint16Array.of(10, 20);
    int result = arr.reduce((prev, curr, idx, a)-> prev - curr, 100);
    assertEqual(70, result);
    }

    @Test
    void testUint16ArrayReducePart1040() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    double result = arr.reduceDouble((prev, curr, idx, a)-> prev + curr, 0.0);
    assertEqual(6.0, result);
    }

    @Test
    void testUint16ArrayReducePart1041() {
    Uint16Array arr = Uint16Array.of(1, 2);
    double result = arr.reduceDouble((prev, curr, idx, a)-> prev + curr, 3.14);
    assertEqual(6.140000000000001, result);
    }

    @Test
    void testUint16ArrayReducePart1042() {
    Uint16Array arr = Uint16Array.of(5);
    int result = arr.reduce((prev, curr, $x2, $x3)-> prev + curr, 10);
    assertEqual(15, result);
    }

    @Test
    void testUint16ArrayReducePart1043() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4, 5);
    int result = arr.reduce((prev, curr, $x2, $x3)-> prev + curr, 0);
    assertEqual(15, result);
    }

    @Test
    void testUint16ArrayReducePart1044() {
    List<Integer> elems = new ArrayList<>();
    int i = 0;
    while (i < 100) {
    elems.add(1);
    i = i + 1;
    }
    Uint16Array arr = Uint16Array.from(elems);
    int result = arr.reduce((prev, curr, $x2, $x3)-> prev + curr, 0);
    assertEqual(100, result);
    }

    @Test
    void testUint16ArrayReducePart1045() {
    Uint16Array arr = Uint16Array.of(0, 65535, 0, 65535);
    int result = arr.reduce((prev, curr, $x2, $x3)-> prev + curr, 0);
    assertEqual(131070, result);
    }

    @Test
    void testUint16ArrayReducePart1046() {
    Uint16Array arr = Uint16Array.of(0, 0, 0);
    int result = arr.reduce((prev, curr, $x2, $x3)-> prev + curr, 0);
    assertEqual(0, result);
    }

    @Test
    void testUint16ArrayReducePart1047() {
    Uint16Array arr = Uint16Array.of(65535, 65535, 65535);
    int result = arr.reduce((prev, curr, $x2, $x3)-> prev + curr, 0);
    assertEqual(196605, result);
    }

    @Test
    void testUint16ArrayReducePart1048() {
    Uint16Array arr = Uint16Array.of(65, 66);
    String result = arr.reduce((prev, curr, $x2, $x3)-> prev + String.valueOf((char) curr), "");
    assertEqual("AB", result);

    }

    @Test
    void testUint16ArrayReducePart1049() {
    Uint16Array arr = Uint16Array.of(1, 2);
    boolean result = arr.reduce((prev, curr, $x2, $x3)-> prev && (curr > 0), true);
    assertTrue(result);

    }

    @Test
    void testUint16ArrayReducePart1050() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    String result = arr.reduce((prev, curr, $x2, $x3)-> prev + String.valueOf(curr), "nums:");
    assertEqual("nums:123", result);
    }

    @Test
    void testUint16ArrayReducePart1051() {
    Uint16Array arr = Uint16Array.of(2, 4, 6);
    boolean result = arr.reduce((prev, curr, $x2, $x3)-> prev && (curr % 2 == 0), true);
    assertTrue(result);
    }

    @Test
    void testUint16ArrayReducePart1052() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    int result = arr.reduce((prev, curr, $x2, $x3)-> prev + curr, 0);
    assertEqual(6, result);
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    }

    @Test
    void testUint16ArrayReducePart1053() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    try {
    arr.reduce((prev, curr, $x2, $x3)-> {
    throw new Error("reduce_error");
    }, 0);
    fail();
    } catch (RuntimeException e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("reduce_error", e.getMessage());
    }
    }

    @Test
    void testUint16ArrayReducePart1054() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4, 5);
    int[] iteratedCount = {0};
    try {
    arr.reduce((prev, curr, $x2, $x3)-> {
    iteratedCount[0] = iteratedCount[0] + 1;
    if (curr > 2) {
    throw new Error("stop");
    }
    return prev + curr;
    }, 0);
    fail();
    } catch (RuntimeException e) {
    assertEqual(3, iteratedCount[0]);
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("stop", e.getMessage());
    }
    }

    @Test
    void testUint16ArrayReducePart1055() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    int result = arr.reduce((prev, curr, idx, a)-> { if (idx == 0) { a.set(1, 10); } return prev + curr; }, 0);
    assertEqual(14, result);
    }

    @Test
    void testUint16ArrayReducePart1056() {
    Uint16Array arr = Uint16Array.of(5, 10);
    int[] firstIndex = {-1};
    arr.reduce((prev, curr, idx, $x3)-> {
    if (idx == 0) {
    firstIndex[0] = idx;
    }
    return prev + curr;
    }, 0);
    assertEqual(0, firstIndex[0]);
    }

    @Test
    void testUint16ArrayReducePart1057() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    List<Integer> indices = new ArrayList<>();
    arr.reduce((prev, curr, idx, $x3)-> {
    indices.add(idx);
    return prev + curr;
    }, 0);
    assertEqual(0, indices.get(0));
    assertEqual(1, indices.get(1));
    assertEqual(2, indices.get(2));
    }

    @Test
    void testUint16ArrayReducePart1058() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    int[] maxIndex = {0};
    arr.reduce((prev, curr, idx, $x3)-> {
    if (idx > maxIndex[0]) {
    maxIndex[0] = idx;
    }
    return prev + curr;
    }, 0);
    assertEqual(4, maxIndex[0]);
    }

    @Test
    void testUint16ArrayReducePart1059() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    boolean[] sameRef = {false};
    arr.reduce((prev, curr, idx, a)-> {
    sameRef[0] = (a == arr);
    return prev + curr;
    }, 0);
    assertTrue(sameRef[0]);
    }

    @Test
    void testUint16ArrayReducePart1060() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    int[] arrLen = {0};
    arr.reduce((prev, curr, idx, a)-> {
    arrLen[0] = a.length();
    return prev + curr;
    }, 0);
    assertEqual(3, arrLen[0]);
    }

    @Test
    void testUint16ArrayReducePart1061() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    arr.reduce((prev, curr, idx, a)-> {
    if (idx == 0) {
    a.set(2, 99);
    }
    return prev + curr;
    }, 0);
    assertEqual(99, arr.get(2));
    }

    @Test
    void testUint16ArrayReducePart1062() {
    Uint16Array arr = Uint16Array.of(7, 14, 21);
    boolean[] matchAll = {true};
    arr.reduce((prev, curr, idx, a)-> {
    if (curr != a.get(idx)) {
    matchAll[0] = false;
    }
    return prev + curr;
    }, 0);
    assertTrue(matchAll[0]);
    }

    @Test
    void testUint16ArrayReducePart1063() {
    Uint16Array arr1 = Uint16Array.of(1, 2, 3);
    Uint16Array arr2 = Uint16Array.of(10, 20);
    int sum1 = arr1.reduce((p, c, $x2, $x3)-> p + c, 0);
    int sum2 = arr2.reduce((p, c, $x2, $x3)-> p + c, sum1);
    assertEqual(36, sum2);
    }

    @Test
    void testUint16ArrayReducePart1064() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4, 5);
    int total = arr.reduce((p, c, $x2, $x3)-> p + c, 0);
    double avg = arr.reduceDouble((p, c, $x2, $x3)-> p + c / 5, 0.0);
    assertEqual(15, total);
    assertEqual(3.0, avg);
    }

    @Test
    void testUint16ArrayReducePart1065() {
    Uint16Array arr = Uint16Array.of(2, 4, 6);
    int sum = arr.reduce((p, c, $x2, $x3)-> p + c, 0);
    double product = arr.reduceDouble((p, c, $x2, $x3)-> p * c, 1);
    assertEqual(12, sum);
    assertEqual(48, product);
    }

    @Test
    void testUint16ArrayReducePart1066() {
    Uint16Array arr = Uint16Array.of(65535, 65535);
    int result = arr.reduce((p, c, $x2, $x3)-> p + c, 65535);
    assertEqual(196605, result);
    }

    @Test
    void testUint16ArrayReducePart1067() {
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    int result = arr.reduce((p, c, $x2, $x3)-> p - c, 100);
    assertEqual(40, result);
    }

    @Test
    void testUint16ArrayReducePart1068() {
    Uint16Array arr = Uint16Array.of(3, 4, 5);
    double result = arr.reduceDouble((p, c, $x2, $x3)-> p * c, 2);
    assertEqual(120, result);
    }

    @Test
    void testUint16ArrayReducePart1069() {
    Uint16Array arr = Uint16Array.of(10, 5, 2);
    double result = arr.reduceDouble((p, c, $x2, $x3)-> (int) (p / c), 1000);
    assertEqual(10, result);
    }

    @Test
    void testUint16ArrayReducePart1070() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    int result = arr.reduce((p, c, $x2, $x3)-> p + c + 1, 0);
    assertEqual(9, result);
    }

    @Test
    void testUint16ArrayReducePart1071() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    int result = arr.reduce((p, c, $x2, $x3)-> p + c * 2, 0);
    assertEqual(12, result);
    }

    @Test
    void testUint16ArrayReducePart1072() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4, 5);
    double result = arr.reduceDouble((p, c, $x2, $x3)-> (c % 2 == 0) ? p + c : p, 0);
    assertEqual(6, result);
    }

    @Test
    void testUint16ArrayReducePart1073() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4, 5);
    double result = arr.reduceDouble((p, c, $x2, $x3)-> (c % 2 != 0) ? p + c : p, 0);
    assertEqual(9, result);
    }

    @Test
    void testUint16ArrayReducePart1074() {
    Uint16Array arr = Uint16Array.of(3, 7, 2, 9, 5);
    int result = arr.reduce((p, c, $x2, $x3)-> (c > p) ? c : p, 0);
    assertEqual(9, result);
    }

    @Test
    void testUint16ArrayReducePart1075() {
    Uint16Array arr = Uint16Array.of(3, 7, 2, 9, 5);
    int result = arr.reduce((p, c, $x2, $x3)-> (c < p) ? c : p, 65535);
    assertEqual(2, result);
    }

    @Test
    void testUint16ArrayReducePart1076() {
    Uint16Array arr = Uint16Array.of(10, 20, 30, 40, 50);
    int count = arr.reduce((p, c, $x2, $x3)-> p + 1, 0);
    assertEqual(5, count);
    }

    @Test
    void testUint16ArrayReducePart1077() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    String result = arr.reduce((p, c, $x2, $x3)-> p + "(" + String.valueOf(c) + ")", "");
    assertEqual("(1)(2)(3)", result);
    }

    @Test
    void testUint16ArrayReducePart1078() {
    Uint16Array arr = Uint16Array.of(72, 101, 108, 108, 111);
    String result = arr.reduce((p, c, $x2, $x3)-> p + String.valueOf((char) c), "");
    assertEqual("Hello", result);
    }

    @Test
    void testUint16ArrayReducePart1079() {
    Uint16Array arr = Uint16Array.of(0, 0, 0);
    boolean result = arr.reduce((p, c, $x2, $x3)-> p && (c > 0), true);
    assertFalse(result);
    }

    @Test
    void testUint16ArrayReducePart1080() {
    Uint16Array arr = Uint16Array.of(0, 0, 1);
    boolean result = arr.reduce((p, c, $x2, $x3)-> p || (c > 0), false);
    assertTrue(result);
    }
}
