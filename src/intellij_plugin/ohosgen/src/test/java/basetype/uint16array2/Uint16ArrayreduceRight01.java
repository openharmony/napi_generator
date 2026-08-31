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

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Uint16ArrayreduceRight01 —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint16ArrayreduceRight01 extends BasTest {

    @Test
    void testUint16ArrayReduceRightPart1001() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    List<Integer> previousValues = new ArrayList<>();
    List<Integer> currentValues = new ArrayList<>();
    List<Integer> indexes = new ArrayList<>();
    int result = arr.reduceRight((prev, curr, idx, a) -> {
        previousValues.add(prev);
        currentValues.add(curr);
        indexes.add(idx);
        return prev - curr;
    });
    assertEqual(0, result);
    assertEqualInt(3, previousValues.get(0));
    assertEqualInt(2, currentValues.get(0));
    assertEqualInt(1, indexes.get(0));
    }

    @Test
    void testUint16ArrayReduceRightPart1002() {
    List<Uint16Array> inputs = java.util.Arrays.asList(Uint16Array.of(
        10, 20, 30), Uint16Array.of(5, 10, 15), Uint16Array.of(65535, 65535), Uint16Array.of(1, 2, 3, 4, 5),
        Uint16Array.of(7, 8, 9), Uint16Array.of(3, 6, 9)
    );
    List<Integer> expected = java.util.Arrays.asList(60, 30, 131070, 15, 24, 18);
    for (int i = 0; i < inputs.size(); i++) {
    int result = inputs.get(i).reduceRight((prev, curr, idx, a) -> prev + curr, 0);
    assertEqual(expected.get(i).intValue(), result);
    }
    }

    @Test
    void testUint16ArrayReduceRightPart1003() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    int result = arr.reduceRight((prev, curr, idx, a) -> prev + curr + idx, 0);
    assertEqual(9, result);
    }

    @Test
    void testUint16ArrayReduceRightPart1004() {
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    List<Integer> previousValues = new ArrayList<>();
    List<Integer> currentValues = new ArrayList<>();
    List<Integer> indexes = new ArrayList<>();
    Uint16Array[] callbackArray = {null};
    int result = arr.reduceRight((prev, curr, idx, a) -> {
        previousValues.add(prev);
        currentValues.add(curr);
        indexes.add(idx);
        callbackArray[0] = a;
        return prev - curr;
        }, 100);
    assertEqual(40, result);
    assertEqual("100,70,50", BasTest.joinList(previousValues, ","));
    assertEqual("30,20,10", BasTest.joinList(currentValues, ","));
    assertEqual("2,1,0", BasTest.joinList(indexes, ","));
    assertEqual(arr, callbackArray[0]);
    }

    @Test
    void testUint16ArrayReduceRightPart1005() {
    Uint16Array arr = Uint16Array.of(2, 3, 4);
    double result = arr.reduceRightDouble((prev, curr, idx, a) -> prev * curr, 1);
    assertEqual(24, result);
    }

    @Test
    void testUint16ArrayReduceRightPart1006() {
    Uint16Array arr = Uint16Array.of(1, 2, 4);
    int result = arr.reduceRight((prev, curr, idx, a) -> prev | curr, 0);
    assertEqual(7, result);
    }

    @Test
    void testUint16ArrayReduceRightPart1007() {
    Uint16Array arr = Uint16Array.of(255, 65535);
    int result = arr.reduceRight((prev, curr, idx, a) -> prev & curr, 65535);
    assertEqual(255, result);
    }

    @Test
    void testUint16ArrayReduceRightPart1008() {
    Uint16Array arr = Uint16Array.of(5, 12, 8);
    int result = arr.reduceRight((prev, curr, idx, a) -> prev > curr ? prev : curr, 0);
    assertEqual(12, result);
    }

    @Test
    void testUint16ArrayReduceRightPart1009() {
    Uint16Array arr = Uint16Array.of(5, 12, 8);
    int result = arr.reduceRight((prev, curr, idx, a) -> prev < curr ? prev : curr, 100);
    assertEqual(5, result);
    }

    @Test
    void testUint16ArrayReduceRightPart1010() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    int factor = 10;
    double result = arr.reduceRightDouble((prev, curr, idx, a) -> prev + curr * factor, 0);
    assertEqual(60, result);
    }

    @Test
    void testUint16ArrayReduceRightPart1011() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    int[] callCount = {0};
    List<Integer> currentValues = new ArrayList<>();
    int result = arr.reduceRight((prev, curr, idx, a) -> {
        callCount[0]++;
        currentValues.add(curr);
        return prev + curr;
        }, 0);
    assertEqual(3, callCount[0]);
    assertEqual("3,2,1", BasTest.joinList(currentValues, ","));
    assertEqual(6, result);
    }

    @Test
    void testUint16ArrayReduceRightPart1012() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    String result = arr.reduceRight((prev, curr, idx, a) -> prev + String.valueOf(curr), "");
    assertEqual("321", result);
    }

    @Test
    void testUint16ArrayReduceRightPart1013() {
    Uint16Array arr = Uint16Array.of(1, 2);
    int result = arr.reduceRight((prev, curr, idx, a) -> prev + curr, 65535);
    assertEqual(65538, result);
    }

    @Test
    void testUint16ArrayReduceRightPart1014() {
    Uint16Array arr = Uint16Array.of(1, 2);
    int result = arr.reduceRight((prev, curr, idx, a) -> prev + curr, -1);
    assertEqual(2, result);
    }

    @Test
    void testUint16ArrayReduceRightPart1015() {
    Uint16Array arr = Uint16Array.of(10, 20);
    int result = arr.reduceRight((prev, curr, idx, a) -> prev + curr, 100);
    assertEqual(130, result);
    }

    @Test
    void testUint16ArrayReduceRightPart1016() {
    Uint16Array arr = Uint16Array.of(10, 20);
    int result = arr.reduceRight((prev, curr, idx, a) -> prev + curr, -100);
    assertEqual(-70, result);
    }

    @Test
    void testUint16ArrayReduceRightPart1017() {
    Uint16Array arr = Uint16Array.of(10, 20);
    double result = arr.reduceRightDouble((prev, curr, idx, a) -> prev + curr, Double.NaN);
    assertTrue(Double.isNaN(result));
    }

    @Test
    void testUint16ArrayReduceRightPart1018() {
    Uint16Array arr = Uint16Array.of(10, 20);
    double result = arr.reduceRightDouble((prev, curr, idx, a) -> prev + curr, Double.POSITIVE_INFINITY);
    assertEqual(Double.POSITIVE_INFINITY, result);
    }

    @Test
    void testUint16ArrayReduceRightPart1019() {
    Uint16Array arr = Uint16Array.of(10, 20);
    double result = arr.reduceRightDouble((prev, curr, idx, a) -> prev + curr, -Double.POSITIVE_INFINITY);
    assertEqual(-Double.POSITIVE_INFINITY, result);
    }

    @Test
    void testUint16ArrayReduceRightPart1020() {
    Uint16Array arr = Uint16Array.of(10000, 20000);
    int result = arr.reduceRight((prev, curr, idx, a) -> prev + curr, 32768);
    assertEqual(62768, result);
    }

    @Test
    void testUint16ArrayReduceRightPart1021() {
    Uint16Array arr = Uint16Array.of(1, 2);
    double result = arr.reduceRightDouble((prev, curr, idx, a) -> prev + curr, 3.14);
    assertEqual(6.140000000000001, result);
    }

    @Test
    void testUint16ArrayReduceRightPart1022() {
    Uint16Array arr = Uint16Array.of(1, 2);
    int result = arr.reduceRight((prev, curr, idx, a) -> prev + curr, 0177777);
    assertEqual(65538, result);
    }

    @Test
    void testUint16ArrayReduceRightPart1023() {
    Uint16Array arr = Uint16Array.of(65, 66, 67);
    String result = arr.reduceRight((prev, curr, idx, a) -> prev + String.valueOf((char) curr), "");
    assertEqual("CBA", result);
    }

    @Test
    void testUint16ArrayReduceRightPart1024() {
    Uint16Array arr = Uint16Array.of(1, 2);
    String result = arr.reduceRight((prev, curr, idx, a) -> prev + String.valueOf(curr), "result:");
    assertEqual("result:21", result);
    }

    @Test
    void testUint16ArrayReduceRightPart1025() {
    Uint16Array arr = Uint16Array.of(3, 5, 7);
    double result = arr.reduceRightDouble((prev, curr, idx, a) -> prev * curr, 1);
    assertEqual(105, result);
    }

    @Test
    void testUint16ArrayReduceRightPart1026() {
    Uint16Array arr = Uint16Array.of(5, 10, 15);
    int result = arr.reduceRight((prev, curr, idx, a) -> prev + curr, 0);
    assertEqual(30, result);
    }

    @Test
    void testUint16ArrayReduceRightPart1027() {
    Uint16Array arr = Uint16Array.of(9, 8, 7);
    String result = arr.reduceRight((prev, curr, idx, a) -> prev + String.valueOf(curr), "");
    assertEqual("789", result);
    }

    @Test
    void testUint16ArrayReduceRightPart1028() {
    Uint16Array arr = Uint16Array.of(2, 4, 6);
    double result = arr.reduceRightDouble((prev, curr, idx, a) -> prev * curr, 1);
    assertEqual(48, result);
    }

    @Test
    void testUint16ArrayReduceRightPart1029() {
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    int result = arr.reduceRight((prev, curr, idx, a) -> prev + curr, 100);
    assertEqual(160, result);
    }

    @Test
    void testUint16ArrayReduceRightPart1030() {
    Uint16Array arr = Uint16Array.of();
    int result = arr.reduceRight((prev, curr, idx, a) -> prev + curr, 0);
    assertEqual(0, result);
    }

    @Test
    void testUint16ArrayReduceRightPart1031() {
    Uint16Array arr = Uint16Array.of();
    int result = arr.reduceRight((prev, curr, idx, a) -> prev + curr, 42);
    assertEqual(42, result);
    }

    @Test
    void testUint16ArrayReduceRightPart1032() {
    Uint16Array arr = Uint16Array.of(5);
    int result = arr.reduceRight((prev, curr, idx, a) -> prev + curr, 0);
    assertEqual(5, result);
    }

    @Test
    void testUint16ArrayReduceRightPart1033() {
    Uint16Array arr = Uint16Array.of(65535);
    int result = arr.reduceRight((prev, curr, idx, a) -> prev + curr, 0);
    assertEqual(65535, result);
    }

    @Test
    void testUint16ArrayReduceRightPart1034() {
    Uint16Array arr = Uint16Array.of(5);
    int result = arr.reduceRight((prev, curr, idx, a) -> prev + curr, 10);
    assertEqual(15, result);
    }

    @Test
    void testUint16ArrayReduceRightPart1035() {
    Uint16Array arr = Uint16Array.of(100, 200, 300);
    List<Integer> previousValues = new ArrayList<>();
    List<Integer> currentValues = new ArrayList<>();
    List<Integer> indexes = new ArrayList<>();
    int result = arr.reduceRight((prev, curr, idx, a) -> {
        previousValues.add(prev);
        currentValues.add(curr);
        indexes.add(idx);
        return prev * 10 + curr;
        }, 0);
    assertEqual(32100, result);
    assertEqual("0,300,3200", BasTest.joinList(previousValues, ","));
    assertEqual("300,200,100", BasTest.joinList(currentValues, ","));
    assertEqual("2,1,0", BasTest.joinList(indexes, ","));
    }

    @Test
    void testUint16ArrayReduceRightPart1036() {
    Uint16Array arr = Uint16Array.of(100, 200, 300);
    String result = arr.reduceRight((prev, curr, idx, a) -> prev + String.valueOf(curr), "");
    assertEqual("300200100", result);
    }

    @Test
    void testUint16ArrayReduceRightPart1037() {
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    List<Integer> indices = new ArrayList<>();
    arr.reduceRight((prev, curr, idx, a) -> {
    indices.add(idx);
    return prev + curr;
    }, 0);
    assertEqualInt(2, indices.get(0));
    assertEqualInt(1, indices.get(1));
    assertEqualInt(0, indices.get(2));
    }

    @Test
    void testUint16ArrayReduceRightPart1038() {
    Uint16Array arr = Uint16Array.of(10, 20, 30);
    List<Integer> values = new ArrayList<>();
    arr.reduceRight((prev, curr, idx, a) -> {
    values.add(curr);
    return prev + curr;
    }, 0);
    assertEqualInt(30, values.get(0));
    assertEqualInt(20, values.get(1));
    assertEqualInt(10, values.get(2));
    }

    @Test
    void testUint16ArrayReduceRightPart1039() {
    Uint16Array arr = Uint16Array.of(120, 121, 122);
    String result = arr.reduceRight((prev, curr, idx, a) -> prev + String.valueOf((char) curr), "");
    assertEqual("zyx", result);
    }

    @Test
    void testUint16ArrayReduceRightPart1040() {
    Uint16Array arr = Uint16Array.of(1, 2, 3, 4);
    int result = arr.reduceRight((prev, curr, idx, a) -> prev - curr, 0);
    assertEqual(-10, result);
    }

    @Test
    void testUint16ArrayReduceRightPart1041() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    try {
    arr.reduceRight((prev, curr, idx, a) -> {
    return BasTest.throwTestError("callback error");
    }, 0);
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    }
    }

    @Test
    void testUint16ArrayReduceRightPart1042() {
    Uint16Array arr = Uint16Array.of(0, 0, 0);
    int result = arr.reduceRight((prev, curr, idx, a) -> prev + curr, 0);
    assertEqual(0, result);
    }

    @Test
    void testUint16ArrayReduceRightPart1043() {
    Uint16Array arr = new Uint16Array(new int[] {-1, 1});
    int result = arr.reduceRight((prev, curr, idx, a) -> prev + curr, 0);
    assertEqual(65536, result);
    }

    @Test
    void testUint16ArrayReduceRightPart1044() {
    Uint16Array arr = new Uint16Array(new int[] {65536, 1});
    int result = arr.reduceRight((prev, curr, idx, a) -> prev + curr, 0);
    assertEqual(1, result);
    }

    @Test
    void testUint16ArrayReduceRightPart1045() {
    Uint16Array arr = new Uint16Array(new double[] {3.14, 2.71});
    int result = arr.reduceRight((prev, curr, idx, a) -> prev + curr, 0);
    assertEqual(5, result);
    }

    @Test
    void testUint16ArrayReduceRightPart1046() {
    Uint16Array arr = new Uint16Array(new double[] {Double.NaN, 5});
    int result = arr.reduceRight((prev, curr, idx, a) -> prev + curr, 0);
    assertEqual(5, result);
    }

    @Test
    void testUint16ArrayReduceRightPart1047() {
    Uint16Array arr = Uint16Array.of(0, 65535, 0, 65535);
    int result = arr.reduceRight((prev, curr, idx, a) -> prev + curr, 0);
    assertEqual(131070, result);
    }

    @Test
    void testUint16ArrayReduceRightPart1048() {
    Uint16Array arr = Uint16Array.of(65535);
    int result = arr.reduceRight((prev, curr, idx, a) -> prev + curr, 65535);
    assertEqual(131070, result);
    }

    @Test
    void testUint16ArrayReduceRightPart1049() {
    Uint16Array arr = new Uint16Array();
    int result = arr.reduceRight((prev, curr, idx, a) -> prev + curr, 100);
    assertEqual(100, result);
    }

    @Test
    void testUint16ArrayReduceRightPart1050() {
    Uint16Array arr = new Uint16Array(5);
    int result = arr.reduceRight((prev, curr, idx, a) -> prev + curr, 0);
    assertEqual(0, result);
    }

    @Test
    void testUint16ArrayReduceRightPart1051() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    boolean[] sameArray = {false};
    arr.reduceRight((prev, curr, idx, a) -> {
    sameArray[0] = a == arr;
    return prev + curr;
    }, 0);
    assertTrue(sameArray[0]);
    }

    @Test
    void testUint16ArrayReduceRightPart1052() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    int[] arrLen = {0};
    arr.reduceRight((prev, curr, idx, a) -> {
    arrLen[0] = a.length();
    return prev + curr;
    }, 0);
    assertEqual(3, arrLen[0]);
    }

    @Test
    void testUint16ArrayReduceRightPart1053() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    int[] bpe = {0};
    arr.reduceRight((prev, curr, idx, a) -> {
    bpe[0] = Uint16Array.BYTES_PER_ELEMENT;
    return prev + curr;
    }, 0);
    assertEqual(2, bpe[0]);
    }

    @Test
    void testUint16ArrayReduceRightPart1054() {
    Uint16Array arr = Uint16Array.of(100, 200, 300, 400);
    int[] firstIdx = {-1};
    int[] lastIdx = {-1};
    int[] count = {0};
    arr.reduceRight((prev, curr, idx, a) -> {
    if (count[0] == 0) {
    firstIdx[0] = idx;
    }
    lastIdx[0] = idx;
    count[0]++;
    return prev + curr;
    }, 0);
    assertEqual(3, firstIdx[0]);
    assertEqual(0, lastIdx[0]);
    }

    @Test
    void testUint16ArrayReduceRightPart1055() {
    Uint16Array arr = Uint16Array.of(50, 100, 150);
    boolean[] matchAll = {true};
    arr.reduceRight((prev, curr, idx, a) -> {
    if (curr != a.get(idx)) {
    matchAll[0] = false;
    }
    return prev + curr;
    }, 0);
    assertTrue(matchAll[0]);
    }

    @Test
    void testUint16ArrayReduceRightPart1056() {
    Uint16Array arr = Uint16Array.of(1, 2);
    double result = arr.reduceRightDouble((prev, curr, idx, a) -> prev + curr, 0.5);
    assertEqual(3.5, result);
    }

    @Test
    void testUint16ArrayReduceRightPart1057() {
    Uint16Array arr = Uint16Array.of(1, 2);
    double result = arr.reduceRightDouble((prev, curr, idx, a) -> prev + curr, -0.5);
    assertEqual(2.5, result);
    }

    @Test
    void testUint16ArrayReduceRightPart1058() {
    Uint16Array arr = Uint16Array.of(1, 2);
    double result = arr.reduceRightDouble((prev, curr, idx, a) -> prev + curr, 1e4);
    assertEqual(10003, result);
    }

    @Test
    void testUint16ArrayReduceRightPart1059() {
    Uint16Array arr = Uint16Array.of(4, 5, 6);
    int result = arr.reduceRight((prev, curr, idx, a) -> prev + curr, 0);
    assertEqual(15, result);
    }

    @Test
    void testUint16ArrayReduceRightPart1060() {
    Uint16Array arr = Uint16Array.of(1, 2, 3);
    String result = arr.reduceRight((prev, curr, idx, a) -> prev + "-" + String.valueOf(curr), "");
    assertEqual("-3-2-1", result);
    }

    @Test
    void testUint16ArrayReduceRightPart1061() {
    Uint16Array arr = new Uint16Array(3);
    int result = arr.reduceRight((prev, curr, idx, a) -> prev + curr, 0);
    assertEqual(0, result);
    }

    @Test
    void testUint16ArrayReduceRightPart1062() {
    Uint16Array arr = Uint16Array.of(65535, 65535, 65535);
    int result = arr.reduceRight((prev, curr, idx, a) -> prev + curr, 0);
    assertEqual(196605, result);
    }

    @Test
    void testUint16ArrayReduceRightPart1063() {
    Uint16Array a = Uint16Array.of(1, 2, 3);
    int[] calls = {0};
    int r = a.reduceRight((p, v, array, unused3) -> {
        calls[0]++;
        return p + v;
        }, 10);
    assertEqual(16, r);
    assertEqual(3, calls[0]);
    }

    @Test
    void testUint16ArrayReduceRightPart1064() {
    Uint16Array a = Uint16Array.of(4, 5, 6, 7);
    int r = a.reduceRight((p, v, i, unused3) -> {
        return p * 10 + i;
        }, 0);
    assertEqual(3210, r);
    }

    @Test
    void testUint16ArrayReduceRightPart1065() {
    Uint16Array a = Uint16Array.of(2, 4, 8);
    int[] same = {0};
    int r = a.reduceRight((p, v, i, x) -> {
        if (x == a) {
            same[0]++;
        }
        return p + v;
        }, 0);
    assertEqual(14, r);
    assertEqual(3, same[0]);
    }

    @Test
    void testUint16ArrayReduceRightPart1066() {
    Uint16Array a = Uint16Array.of(12, 34, 56);
    String r = a.reduceRight((p, v, i, unused3) -> {
        return p + String.valueOf(i) + ":" + String.valueOf(v) + ";";
        }, "");
    assertEqual("2:56;1:34;0:12;", r);
    }

    @Test
    void testUint16ArrayReduceRightPart1067() {
    Uint16Array a = Uint16Array.of(1, 2, 3);
    double r = a.reduceRightDouble((p, v, array, unused3) -> {
        return p + v;
        }, 0.5);
    assertEqual(6.5, r);
    }

    @Test
    void testUint16ArrayReduceRightPart1068() {
    Uint16Array a = Uint16Array.of(5, 6, 7);
    int r = a.reduceRight((p, v, i, unused3) -> {
        return p + v * (i + 1);
        }, 0);
    assertEqual(38, r);
    }

    @Test
    void testUint16ArrayReduceRightPart1069() {
    Uint16Array a = new Uint16Array();
    int[] calls = {0};
    int r = a.reduceRight((p, v, array, unused3) -> {
        calls[0]++;
        return p;
        }, 77);
    assertEqual(77, r);
    assertEqual(0, calls[0]);
    }

    @Test
    void testUint16ArrayReduceRightPart1070() {
    Uint16Array a = Uint16Array.of(1, 2, 3, 4);
    int[] calls = {0};
    try {
    a.reduceRight((p, v, i, unused3) -> {
    calls[0]++;
    if (i == 2) {
    return BasTest.throwTestError("stop");
    }
    return p;
    }, 0);
    fail();
    } catch (Error e) {
    assertEqual("Error", e.getClass().getSimpleName());
    assertEqual("stop", e.getMessage());
    assertEqual(2, calls[0]);
    }
    }

    @Test
    void testUint16ArrayReduceRightPart1071() {
    Uint16Array a = Uint16Array.of(1, 2, 3);
    int r = a.reduceRight((p, v, i, x) -> {
        if (i == 2) {
            x.set(0, 10);
        }
        return p + v;
        }, 0);
    assertEqual(15, r);
    assertEqualInt(10, a.get(0));
    }

    @Test
    void testUint16ArrayReduceRightPart1072() {
    Uint16Array a = Uint16Array.of(65535, 65535, 2);
    double r = a.reduceRightDouble((p, v, array, unused3) -> {
        return p * v;
        }, 1);
    assertEqual(8589672450L, r);
    }

    @Test
    void testUint16ArrayReduceRightPart1073() {
    ArrayBuffer b = new ArrayBuffer(10);
    Uint16Array all = new Uint16Array(b);
    all.set(Uint16Array.of(9, 4, 3, 2, 8));
    Uint16Array v = new Uint16Array(b, 2, 3);
    int r = v.reduceRight((p, n, array, unused3) -> {
        return p * 10 + n;
        }, 0);
    assertEqual(234, r);
    }

    @Test
    void testUint16ArrayReduceRightPart1074() {
    Uint16Array a = Uint16Array.of(3, 1, 4, 1);
    int r = a.reduceRight((p, v, array, unused3) -> {
        return p + v;
        }, 0);
    assertEqual(9, r);
    assertEqual("3,1,4,1", a.join(","));
    }

    @Test
    void testUint16ArrayReduceRightPart1075() {
    Uint16Array a = new Uint16Array(new int[] {-1, 65536, 65537});
    int r = a.reduceRight((p, v, array, unused3) -> {
        return p + v;
        }, 0);
    assertEqual("65535,0,1", a.join(","));
    assertEqual(65536, r);
    }

    @Test
    void testUint16ArrayReduceRightPart1076() {
    Uint16Array a = Uint16Array.of(7, 8);
    String r = a.reduceRight((p, v, array, unused3) -> {
        return p + "[" + String.valueOf(v) + "]";
        }, "");
    assertEqual("[8][7]", r);
    }

    @Test
    void testUint16ArrayReduceRightPart1077() {
    Uint16Array a = Uint16Array.of(5, 6);
    int r = a.reduceRight((p, v, array, unused3) -> {
        return p - v;
        }, -1);
    assertEqual(-12, r);
    }

    @Test
    void testUint16ArrayReduceRightPart1078() {
    Uint16Array a = Uint16Array.of(9, 1, 2, 3, 8);
    Uint16Array v = a.subarray(1, 4);
    int[] calls = {0};
    int r = v.reduceRight((p, n, array, unused3) -> {
        calls[0]++;
        return p + n;
        }, 0);
    assertEqual(6, r);
    assertEqual(3, calls[0]);
    }

    @Test
    void testUint16ArrayReduceRightPart1079() {
    Uint16Array a = new Uint16Array();
    String r = a.reduceRight((p, v, array, unused3) -> {
        return p + String.valueOf(v);
        }, "seed");
    assertEqual("seed", r);
    }

    @Test
    void testUint16ArrayReduceRightPart1080() {
    Uint16Array a = Uint16Array.of(10, 20, 30);
    int r = a.reduceRight((p, v, i, unused3) -> {
        return p + v - i;
        }, 0);
    assertEqual(57, r);
    }
}
