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

package basetype.uint8clampedarray;

import basetype.common.ArrayBuffer;
import basetype.common.BasTest;
import basetype.common.Uint8ClampedArray;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayForEach02Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayForEach02Test extends BasTest {
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_TWO_0100
     * @tc.name testUint8ClampedArrayForEachTwo001
     * @tc.desc Verify forEach callback receives the receiver and matching indexed values
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachTwo001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    int[] callbackCount = {0};
    boolean[] receivedReceiver = {true};
    arr.forEach((v, i, a) -> {
    callbackCount[0]++;
    receivedReceiver[0] = receivedReceiver[0] && a == arr && a.get(i) == v;});
    assertEqual(2, callbackCount[0]);
    assertTrue(receivedReceiver[0]);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_TWO_0200
     * @tc.name testUint8ClampedArrayForEachTwo002
     * @tc.desc Verify callback value NaN clamps to 0 (not NaN)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachTwo002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.NaN, Double.NaN, Double.NaN});
    int[] cnt = {0};
    boolean[] anyNaN = {false};
    arr.forEach((v, i, a) -> { cnt[0]++; if (BasTest.isNaN(v)) { anyNaN[0] = true;} });
    assertEqual(3, cnt[0]);
    assertFalse(anyNaN[0]);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_TWO_0300
     * @tc.name testUint8ClampedArrayForEachTwo003
     * @tc.desc Verify callback value Infinity clamps to finite (255/0)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachTwo003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.POSITIVE_INFINITY, -Double.POSITIVE_INFINITY});
    int[] cnt = {0};
    boolean[] anyInf = {false};
    arr.forEach((v, i, a) -> { cnt[0]++; if (!BasTest.isFinite(v)) { anyInf[0] = true;} });
    assertEqual(2, cnt[0]);
    assertFalse(anyInf[0]);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_TWO_0400
     * @tc.name testUint8ClampedArrayForEachTwo004
     * @tc.desc Verify all clamped values are within 0-255 range for array [0, 100, 200, 255]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachTwo004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 100, 200, 255});
    int[] cnt = {0};
    boolean[] inRange = {true};
    arr.forEach((v, i, a) -> { cnt[0]++; if (v < 0 || v > 255) { inRange[0] = false;} });
    assertEqual(4, cnt[0]);
    assertTrue(inRange[0]);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_TWO_0500
     * @tc.name testUint8ClampedArrayForEachTwo005
     * @tc.desc Verify all callback indices are non-negative for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachTwo005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int[] cnt = {0};
    boolean[] allNonNeg = {true};
    arr.forEach((v, i, a) -> { cnt[0]++; if (i < 0) { allNonNeg[0] = false;} });
    assertEqual(3, cnt[0]);
    assertTrue(allNonNeg[0]);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_TWO_0600
     * @tc.name testUint8ClampedArrayForEachTwo006
     * @tc.desc Verify all callback indices are less than array length for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachTwo006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int[] cnt = {0};
    boolean[] allLtLen = {true};
    arr.forEach((v, i, a) -> { cnt[0]++; if (i >= arr.length()) { allLtLen[0] = false;} });
    assertEqual(4, cnt[0]);
    assertTrue(allLtLen[0]);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_TWO_0700
     * @tc.name testUint8ClampedArrayForEachTwo007
     * @tc.desc Verify forEach capturedValue equals arr[0] for array [7, 14, 21]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachTwo007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 14, 21});
    int[] capturedValue = {-1};
    arr.forEach((v, i, a) -> { if (i == 0) { capturedValue[0] = v;} });
    assertEqual(arr.get(0), capturedValue[0]);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_TWO_0800
     * @tc.name testUint8ClampedArrayForEachTwo008
     * @tc.desc Verify forEach last key equals arr[2] for array [7, 14, 21]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachTwo008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 14, 21});
    int[] vLast = {-1};
    arr.forEach((v, i, a) -> { if (i == a.length() - 1) { vLast[0] = v;} });
    assertEqual(arr.get(2), vLast[0]);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_TWO_0900
     * @tc.name testUint8ClampedArrayForEachTwo009
     * @tc.desc Verify each callback value equals arr[i] for array [7, 14, 21, 28]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachTwo009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 14, 21, 28});
    int[] cnt = {0};
    boolean[] matchAll = {true};
    arr.forEach((v, i, a) -> { cnt[0]++; if (v != arr.get(i)) { matchAll[0] = false;} });
    assertEqual(4, cnt[0]);
    assertTrue(matchAll[0]);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_TWO_1000
     * @tc.name testUint8ClampedArrayForEachTwo010
     * @tc.desc Verify each callback value matches $_get(i) for array [100, 150, 200]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachTwo010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 150, 200});
    int[] cnt = {0};
    boolean[] allMatch = {true};
    arr.forEach((v, i, a) -> { cnt[0]++; if (v != arr.get(i)) { allMatch[0] = false;} });
    assertEqual(3, cnt[0]);
    assertTrue(allMatch[0]);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_TWO_1100
     * @tc.name testUint8ClampedArrayForEachTwo011
     * @tc.desc Verify forEach cnt equals 4 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachTwo011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int[] cnt = {0};
    arr.forEach((v, i, a) -> { cnt[0] = cnt[0] + 1;});
    assertEqual(4, cnt[0]);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_TWO_1200
     * @tc.name testUint8ClampedArrayForEachTwo012
     * @tc.desc Verify forEach cnt equals 3 for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachTwo012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    int[] cnt = {0};
    arr.forEach((v, i, a) -> { cnt[0] = cnt[0] + 1;});
    assertEqual(3, cnt[0]);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_TWO_1300
     * @tc.name testUint8ClampedArrayForEachTwo013
     * @tc.desc Verify forEach visits all 4 elements of array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachTwo013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int[] cnt = {0};
    arr.forEach((v, i, a) -> { cnt[0] = cnt[0] + 1;});
    assertEqual(4, cnt[0]);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_TWO_1400
     * @tc.name testUint8ClampedArrayForEachTwo014
     * @tc.desc Verify at crossVal equals 30 for array [10, 20, 30]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachTwo014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    int[] crossVal = {-1};
    arr.forEach((v, i, a) -> { if (i == 0) { crossVal[0] = BasTest.coalesce(a.at(2), 0);} });
    assertEqual(30, crossVal[0]);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_TWO_1500
     * @tc.name testUint8ClampedArrayForEachTwo015
     * @tc.desc Verify forEach yields length 4 for array [1, 2, 3, 4]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachTwo015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int[] cnt = {0};
    arr.forEach((v, i, a) -> { cnt[0]++;});
    Uint8ClampedArray view = new Uint8ClampedArray(arr.buffer());
    assertEqual(4, cnt[0]);
    assertEqual(4, view.length());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_TWO_1600
     * @tc.name testUint8ClampedArrayForEachTwo016
     * @tc.desc Verify forEach zeroCnt equals 3 for array [0, 1, 0, 2, 0]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachTwo016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 1, 0, 2, 0});
    int[] zeroCnt = {0};
    arr.forEach((v, i, a) -> { if (v == 0) { zeroCnt[0] = zeroCnt[0] + 1;} });
    assertEqual(3, zeroCnt[0]);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_TWO_1700
     * @tc.name testUint8ClampedArrayForEachTwo017
     * @tc.desc Verify forEach maxCnt equals 3 for array [255, 1, 255, 2, 255]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachTwo017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255, 1, 255, 2, 255});
    int[] maxCnt = {0};
    arr.forEach((v, i, a) -> { if (v == 255) { maxCnt[0] = maxCnt[0] + 1;} });
    assertEqual(3, maxCnt[0]);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_TWO_1800
     * @tc.name testUint8ClampedArrayForEachTwo018
     * @tc.desc Verify forEach accumulates odd and even sums as 4 and 6
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachTwo018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int[] oddSum = {0};
    int[] evenSum = {0};
    arr.forEach((v, i, a) -> {
    if ((v ) % 2 == 0) { evenSum[0] = evenSum[0] + v;} else { oddSum[0] = oddSum[0] + v;};});
    assertEqual(4, oddSum[0]);
    assertEqual(6, evenSum[0]);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_TWO_1900
     * @tc.name testUint8ClampedArrayForEachTwo019
     * @tc.desc Verify forEach accumulated sum equals 255 for array [0xFF, 0x00]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachTwo019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0xFF, 0x00});
    int[] sum = {0};
    arr.forEach((v, i, a) -> { sum[0] = sum[0] + v;});
    assertEqual(255, sum[0]);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_TWO_2000
     * @tc.name testUint8ClampedArrayForEachTwo020
     * @tc.desc Verify forEach accumulated sum equals 192 for array [0o100, 0o200]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachTwo020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0100, 0200});
    int[] sum = {0};
    arr.forEach((v, i, a) -> { sum[0] = sum[0] + v;});
    assertEqual(192, sum[0]);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_TWO_2100
     * @tc.name testUint8ClampedArrayForEachTwo021
     * @tc.desc Verify forEach accumulated sum equals 300 for array [1e2, 2e2]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachTwo021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {1e2, 2e2});
    int[] sum = {0};
    arr.forEach((v, i, a) -> { sum[0] = sum[0] + v;});
    assertEqual(300, sum[0]);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_TWO_2200
     * @tc.name testUint8ClampedArrayForEachTwo022
     * @tc.desc Verify forEach sum arithmetic expr values 55
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachTwo022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10 + 5, 20 * 2});
    int[] sum = {0};
    arr.forEach((v, i, a) -> { sum[0] = sum[0] + v;});
    assertEqual(55, sum[0]);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_TWO_2300
     * @tc.name testUint8ClampedArrayForEachTwo023
     * @tc.desc Verify forEach yields byteLength before for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachTwo023() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 4);
    int before = buf.byteLength();
    int[] cnt = {0};
    arr.forEach((v, i, a) -> { cnt[0]++;});
    assertEqual(4, cnt[0]);
    assertEqual(before, buf.byteLength());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_TWO_2400
     * @tc.name testUint8ClampedArrayForEachTwo024
     * @tc.desc Verify forEach element at reader[0] equals 100 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachTwo024() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.forEach((v, i, a) -> { arr.set(i, 100);});
    Uint8ClampedArray reader = new Uint8ClampedArray(buf);
    assertEqual(100, reader.get(0));
    assertEqual(100, reader.get(1));
    assertEqual(100, reader.get(2));
    assertEqual(100, reader.get(3));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_TWO_2500
     * @tc.name testUint8ClampedArrayForEachTwo025
     * @tc.desc Verify forEach element at secondView[0] equals 50 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachTwo025() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray firstView = new Uint8ClampedArray(buf);
    Uint8ClampedArray secondView = new Uint8ClampedArray(buf);
    firstView.forEach((v, i, a) -> { firstView.set(i, 50);});
    assertEqual(50, secondView.get(0));
    assertEqual(50, secondView.get(3));}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_TWO_2600
     * @tc.name testUint8ClampedArrayForEachTwo026
     * @tc.desc Verify new Uint8ClampedArray(0) forEach
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachTwo026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    int[] calls = {0};
    arr.forEach((v, i, a) -> { calls[0]++;});
    assertEqual(0, arr.length());
    assertEqual(0, calls[0]);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_TWO_2700
     * @tc.name testUint8ClampedArrayForEachTwo027
     * @tc.desc Verify forEach cnt equals 0 for ArrayBuffer-backed array
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachTwo027() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    int[] cnt = {0};
    arr.forEach((v, i, a) -> { cnt[0] = cnt[0] + 1;});
    assertEqual(0, cnt[0]);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_TWO_2800
     * @tc.name testUint8ClampedArrayForEachTwo028
     * @tc.desc Verify Uint8ClampedArray.from cnt equals 0 for from(src)
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachTwo028() {
    List<Number> src = new ArrayList<>();
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    int[] cnt = {0};
    arr.forEach((v, i, a) -> { cnt[0] = cnt[0] + 1;});
    assertEqual(0, cnt[0]);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_TWO_2900
     * @tc.name testUint8ClampedArrayForEachTwo029
     * @tc.desc Verify forEach continues after the callback returns at index 1
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachTwo029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    int[] cnt = {0};
    arr.forEach((v, i, a) -> {
    if (i == 1) { return;};
    cnt[0] = cnt[0] + 1;});
    assertEqual(3, cnt[0]);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_TWO_3000
     * @tc.name testUint8ClampedArrayForEachTwo030
     * @tc.desc Verify forEach minV equals 1 for array [3, 1, 4, 1, 5, 9, 2, 6]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachTwo030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 1, 4, 1, 5, 9, 2, 6});
    int[] minV = {255};
    arr.forEach((v, i, a) -> { if (v < minV[0]) { minV[0] = v;} });
    assertEqual(1, minV[0]);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_TWO_3100
     * @tc.name testUint8ClampedArrayForEachTwo031
     * @tc.desc Verify forEach avg equals 25 for array [10, 20, 30, 40]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachTwo031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    int[] sum = {0};
    arr.forEach((v, i, a) -> { sum[0] = sum[0] + v;});
    int avg = sum[0] / arr.length();
    assertEqual(25, avg);}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_TWO_3200
     * @tc.name testUint8ClampedArrayForEachTwo032
     * @tc.desc Verify callback (index, value) Map<int,number>
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachTwo032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Map<Integer, Integer> m = new HashMap<>();
    arr.forEach((v, i, a) -> { m.put(i, v);});
    assertEqual(3, m.size());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_TWO_3300
     * @tc.name testUint8ClampedArrayForEachTwo033
     * @tc.desc Verify forEach s.size equals 3 for array [1, 2, 2, 3, 3, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachTwo033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 2, 3, 3, 3});
    Set<Number> s = new LinkedHashSet<>();
    arr.forEach((v, i, a) -> { s.add(v);});
    assertEqual(3, s.size());}
    /**
     * @tc.number SUB_COMMONLIBRARY_UTIL_UINT8_CLAMPED_ARRAY_FOR_EACH_TWO_3400
     * @tc.name testUint8ClampedArrayForEachTwo034
     * @tc.desc Verify forEach s equals '0:1;1:2;2:3;' for array [1, 2, 3]
     * @tc.size MediumTest
     * @tc.type Function
     * @tc.level Level 2
     */

    @Test
    void testUint8ClampedArrayForEachTwo034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    String[] s = {""};
    arr.forEach((v, i, a) -> { s[0] = s[0] + String.valueOf(i) + ":" + String.valueOf(v) + ";";});
    assertEqual("0:1;1:2;2:3;", s[0]);}
}
