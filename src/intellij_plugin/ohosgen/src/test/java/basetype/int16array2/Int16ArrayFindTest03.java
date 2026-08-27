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

package basetype.int16array2;

import basetype.common.ArrayBuffer;
import basetype.common.BasTest;
import basetype.common.Error;
import basetype.common.RangeError;
import basetype.common.TypeError;
import basetype.common.Int16Array;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Int16ArrayFindTest03 —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Int16ArrayFindTest03 extends BasTest {

    @Test
    void testInt16ArrayFindTestThree001() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    try {
    arr.find((value, index, array) -> {
    throw new TypeError("type mismatch");
        });
    fail();
    } catch (TypeError e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("TypeError", actual1);
    }
    }

    @Test
    void testInt16ArrayFindTestThree002() {
    Int16Array arr = Int16Array.of(5, 6, 7);
    try {
    arr.find((value, index, array) -> {
    throw new RangeError("out of range");
        });
    fail();
    } catch (RangeError e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("RangeError", actual1);
    }
    }

    @Test
    void testInt16ArrayFindTestThree003() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    try {
    arr.find((value, index, array) -> {
    if (value == 2) {
    throw new Error("throw at second");
    }
    return false;
        });
    fail();
    } catch (Error e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("Error", actual1);
    }
    }

    @Test
    void testInt16ArrayFindTestThree004() {
    Int16Array arr = Int16Array.of(7, 8, 9);
    try {
    arr.find((value, index, array) -> {
    if (index == 2) {
    throw new Error("throw at last");
    }
    return false;
        });
    fail();
    } catch (Error e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("Error", actual1);
    }
    }

    @Test
    void testInt16ArrayFindTestThree005() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    try {
    arr.find((value, index, array) -> {
    throw new Error("custom-predicate-error");
        });
    fail();
    } catch (Error e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("Error", actual1);
    String actual2 = e.getMessage();
    assertEqual("custom-predicate-error", actual2);
    }
    }

    @Test
    void testInt16ArrayFindTestThree006() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Int16Array arr = new Int16Array(buf);
    Integer result = arr.find((value, index, array) -> { return true;
        });
    assertNull(result);
    }

    @Test
    void testInt16ArrayFindTestThree007() {
    int[] callCount = {0};
    ArrayBuffer buf = new ArrayBuffer(0);
    Int16Array arr = new Int16Array(buf);
    arr.find((value, index, array) -> {
    callCount[0] = callCount[0] + 1;
    return true;
        });
    assertEqual(0, callCount[0]);
    }

    @Test
    void testInt16ArrayFindTestThree008() {
    Int16Array arr = Int16Array.of(42);
    Integer result = arr.find((value, index, array) -> { return value == 42;
        });
    assertEqual(42, result);
    }

    @Test
    void testInt16ArrayFindTestThree009() {
    Int16Array arr = Int16Array.of(99);
    Integer result = arr.find((value, index, array) -> { return false;
        });
    assertNull(result);
    }

    @Test
    void testInt16ArrayFindTestThree010() {
    Int16Array arr = Int16Array.of(77);
    int[] capturedIndex = {-1};
    arr.find((value, index, array) -> {
    capturedIndex[0] = index;
    return true;
        });
    assertEqual(0, capturedIndex[0]);
    }

    @Test
    void testInt16ArrayFindTestThree011() {
    Int16Array arr = new Int16Array(5);
    arr.set(0, 0);
    arr.set(1, 0);
    arr.set(2, 0);
    arr.set(3, 0);
    arr.set(4, 0);
    Integer result = arr.find((value, index, array) -> { return false;
        });
    assertNull(result);
    }

    @Test
    void testInt16ArrayFindTestThree012() {
    Int16Array arr = new Int16Array(4);
    arr.set(0, 0);
    arr.set(1, 0);
    arr.set(2, 0);
    arr.set(3, 0);
    Integer result = arr.find((value, index, array) -> { return true;
        });
    assertEqual(0, result);
    }

    @Test
    void testInt16ArrayFindTestThree013() {
    Int16Array arr = new Int16Array(5);
    arr.set(0, 100);
    arr.set(1, 100);
    arr.set(2, 100);
    arr.set(3, 100);
    arr.set(4, 100);
    Integer result = arr.find((value, index, array) -> { return index >= 2;
        });
    assertEqual(100, result);
    }

    @Test
    void testInt16ArrayFindTestThree014() {
    Int16Array arr = Int16Array.of(50, 50, 50, 50);
    Integer result = arr.find((value, index, array) -> { return value == 50;
        });
    assertEqual(50, result);
    }

    @Test
    void testInt16ArrayFindTestThree015() {
    Int16Array arr = Int16Array.of(-1, -1, -1, -1);
    Integer result = arr.find((value, index, array) -> { return value == -1;
        });
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayFindTestThree016() {
    Int16Array arr = Int16Array.of(10, 10, 10, 10);
    Integer result = arr.find((value, index, array) -> { return value > 100;
        });
    assertNull(result);
    }

    @Test
    void testInt16ArrayFindTestThree017() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    try {
    arr.find((value, index, array) -> {
    return array.get(-1) == null;
        });
    fail();
    } catch (RangeError e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("RangeError", actual1);
    }
    }

    @Test
    void testInt16ArrayFindTestThree018() {
    Int16Array arr = Int16Array.of(5, 6, 7, 8);
    try {
    arr.find((value, index, array) -> {
    return array.get(4) == null;
        });
    fail();
    } catch (RangeError e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("RangeError", actual1);
    }
    }

    @Test
    void testInt16ArrayFindTestThree019() {
    Int16Array arr = Int16Array.of(11, 22);
    try {
    arr.find((value, index, array) -> {
    return array.get(3) == null;
        });
    fail();
    } catch (RangeError e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("RangeError", actual1);
    }
    }

    @Test
    void testInt16ArrayFindTestThree020() {
    Int16Array arr = Int16Array.of(3, 4, 5);
    try {
    arr.find((value, index, array) -> {
    return array.get(-4) == null;
        });
    fail();
    } catch (RangeError e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("RangeError", actual1);
    }
    }

    @Test
    void testInt16ArrayFindTestThree021() {
    Int16Array arr = Int16Array.of(7, 8);
    try {
    arr.find((value, index, array) -> {
    return array.get(10000) == null;
        });
    fail();
    } catch (RangeError e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("RangeError", actual1);
    }
    }

    @Test
    void testInt16ArrayFindTestThree022() {
    Int16Array arr = Int16Array.of(13, 14);
    try {
    arr.find((value, index, array) -> {
    return array.get(-9999) == null;
        });
    fail();
    } catch (RangeError e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("RangeError", actual1);
    }
    }

    @Test
    void testInt16ArrayFindTestThree023() {
    Int16Array arr = Int16Array.of(42, 43);
    try {
    arr.find((value, index, array) -> {
    Integer validGet = array.get(0);
    Integer oobGet = array.get(2);
    return validGet != null && oobGet == null;
        });
    fail();
    } catch (RangeError e) {
    String actual1 = e.getClass().getSimpleName();
    assertEqual("RangeError", actual1);
    }
    }

    @Test
    void testInt16ArrayFindTestThree024() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    int[] capturedAtIdx1 = {0};
    arr.find((value, index, array) -> {
    if (index == 0) {
    array.set(1, 999);
    return false;
    }
    if (index == 1) {
    capturedAtIdx1[0] = value;
    return false;
    }
    return false;
        });
    assertEqual(999, capturedAtIdx1[0]);
    }

    @Test
    void testInt16ArrayFindTestThree025() {
    Int16Array arr = Int16Array.of(5, 15, 25);
    int[] capturedAtIdx0 = {0};
    arr.find((value, index, array) -> {
    if (index == 0) {
    array.set(0, 888);
    capturedAtIdx0[0] = value;
    return false;
    }
    return false;
        });
    assertEqual(5, capturedAtIdx0[0]);
    }

    @Test
    void testInt16ArrayFindTestThree026() {
    Int16Array arr = Int16Array.of(3, 6, 9);
    int[] callCount = {0};
    arr.find((value, index, array) -> {
    callCount[0] = callCount[0] + 1;
    if (index >= 1) {
    array.set(0, 777);
    }
    return false;
        });
    assertEqual(3, callCount[0]);
    }

    @Test
    void testInt16ArrayFindTestThree027() {
    Int16Array arr = Int16Array.of(100, 200, 300);
    int[] nextValAtIdx0 = {0};
    arr.find((value, index, array) -> {
    if (index == 0) {
    nextValAtIdx0[0] = array.get(1);
    return false;
    }
    return false;
        });
    assertEqual(200, nextValAtIdx0[0]);
    }

    @Test
    void testInt16ArrayFindTestThree028() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    int[] externalCount = {0};
    arr.find((value, index, array) -> {
    externalCount[0] = externalCount[0] + 1;
    return false;
        });
    assertEqual(5, externalCount[0]);
    }

    @Test
    void testInt16ArrayFindTestThree029() {
    Int16Array arr = Int16Array.of(10, 20);
    boolean[] flag = {false};
    arr.find((value, index, array) -> {
    if (value == 10) {
    flag[0] = true;
    }
    return false;
        });
    assertTrue(flag[0]);
    }

    @Test
    void testInt16ArrayFindTestThree030() {
    Int16Array src = Int16Array.of(7, 14, 21);
    List<Integer> sideArr = java.util.Arrays.asList(0, 0, 0);
    src.find((value, index, array) -> {
    sideArr.set(index, 1);
    return false;
        });
    int actual1 = sideArr.get(0);
    assertEqual(1, actual1);
    int actual2 = sideArr.get(1);
    assertEqual(1, actual2);
    int actual3 = sideArr.get(2);
    assertEqual(1, actual3);
    }

    @Test
    void testInt16ArrayFindTestThree031() {
    Int16Array arr = Int16Array.of(30, 40, 50);
    int[] directReadAtIdx0 = {0};
    arr.find((value, index, array) -> {
    if (index == 0) {
    array.set(0, 99);
    directReadAtIdx0[0] = array.get(0);
    }
    return false;
        });
    assertEqual(99, directReadAtIdx0[0]);
    }

    @Test
    void testInt16ArrayFindTestThree032() {
    Int16Array arr = Int16Array.of(11, 22, 33);
    arr.find((value, index, array) -> {
    array.set(index, 0);
    return false;
        });
    Integer actual1 = arr.get(0);
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArrayFindTestThree033() {
    Int16Array arr = Int16Array.of(2, 4, 6, 8);
    Integer result = arr.find((value, index, array) -> {
        Integer inner = array.find((v, unusedIndex, unusedArray) -> { return v > value;
        });
        return inner != null;
    });
    assertEqual(2, result);
    }

    @Test
    void testInt16ArrayFindTestThree034() {
    Int16Array arr = Int16Array.of(3, 6, 9);
    Integer result = arr.find((value, index, array) -> {
        boolean[] hasSix = {false};
        array.find((v, unusedIndex, unusedArray) -> { if (v == 6) { hasSix[0] = true;
        return true;
        } return false;
        });
        return hasSix[0];
    });
    assertEqual(3, result);
    }

    @Test
    void testInt16ArrayFindTestThree035() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    int[] threshold = {0};
    Integer result = arr.find((value, index, array) -> {
        threshold[0] = threshold[0] + 1;
        return value > threshold[0];
    });
    assertNull(result);
    }

    @Test
    void testInt16ArrayFindTestThree036() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4);
    int[] sum = {0};
    Integer result = arr.find((value, index, array) -> {
        sum[0] = sum[0] + value;
        return sum[0] > 5;
    });
    assertEqual(3, result);
    }

    @Test
    void testInt16ArrayFindTestThree037() {
    Int16Array arr = Int16Array.of(5, 6, 7);
    Integer result = arr.find((value, index, array) -> { return false;
        });
    assertNull(result);
    }

    @Test
    void testInt16ArrayFindTestThree038() {
    Int16Array arr = Int16Array.of(1, 3, 5, 7);
    Integer result = arr.find((value, index, array) -> { return value % 2 == 0;
        });
    assertNull(result);
    }

    @Test
    void testInt16ArrayFindTestThree039() {
    Int16Array arr = Int16Array.of(10, 15, 20);
    Integer result = arr.find((value, index, array) -> { return value > 5 && value < 18;
        });
    assertEqual(10, result);
    }

    @Test
    void testInt16ArrayFindTestThree040() {
    Int16Array arr = Int16Array.of(1, 100, 200);
    Integer result = arr.find((value, index, array) -> { return value < 0 || value > 150;
        });
    assertEqual(200, result);
    }

    @Test
    void testInt16ArrayFindTestThree041() {
    Int16Array arr = Int16Array.of(0, 1, 2);
    Integer result = arr.find((value, index, array) -> { return !(value == 0);
        });
    assertEqual(1, result);
    }

    @Test
    void testInt16ArrayFindTestThree042() {
    Int16Array arr = Int16Array.of(-5, 0, 5);
    Integer result = arr.find((value, index, array) -> { return value != 0;
        });
    assertEqual(-5, result);
    }

    @Test
    void testInt16ArrayFindTestThree043() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    List<Integer> indices = java.util.Arrays.asList(0, 0, 0);
    arr.find((value, index, array) -> {
    indices.set(index, 1);
    return false;
        });
    int actual1 = indices.get(0);
    assertEqual(1, actual1);
    int actual2 = indices.get(1);
    assertEqual(1, actual2);
    int actual3 = indices.get(2);
    assertEqual(1, actual3);
    }

    @Test
    void testInt16ArrayFindTestThree044() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    int[] callCount = {0};
    arr.find((value, index, array) -> {
    callCount[0] = callCount[0] + 1;
    return value >= 3;
        });
    assertEqual(3, callCount[0]);
    }

    @Test
    void testInt16ArrayFindTestThree045() {
    Int16Array arr = Int16Array.of(17, 34, 51);
    boolean[] allMatch = {true};
    arr.find((value, index, array) -> {
    if (value != array.get(index)) {
    allMatch[0] = false;
    }
    return false;
        });
    assertTrue(allMatch[0]);
    }

    @Test
    void testInt16ArrayFindTestThree046() {
    Int16Array arr = Int16Array.of(2, 4);
    boolean[] isSameRef = {false};
    arr.find((value, index, array) -> {
    if (array == arr) {
    isSameRef[0] = true;
    }
    return false;
        });
    assertTrue(isSameRef[0]);
    }

    @Test
    void testInt16ArrayFindTestThree047() {
    Int16Array arr = Int16Array.of(5, 5, 5);
    int[] indexSum = {0};
    arr.find((value, index, array) -> {
    indexSum[0] = indexSum[0] + index;
    return false;
        });
    assertEqual(3, indexSum[0]);
    }

    @Test
    void testInt16ArrayFindTestThree048() {
    Int16Array arr = Int16Array.of(-32768, 0, 100);
    Integer result = arr.find((value, index, array) -> { return value == -32768;
        });
    assertEqual(-32768, result);
    }

    @Test
    void testInt16ArrayFindTestThree049() {
    Int16Array arr = Int16Array.of(0, 32767, 1);
    Integer result = arr.find((value, index, array) -> { return value == 32767;
        });
    assertEqual(32767, result);
    }

    @Test
    void testInt16ArrayFindTestThree050() {
    Int16Array arr = Int16Array.of(5, 10, 15);
    Integer first = arr.find((value, index, array) -> { return value > 7;
        });
    Integer second = arr.find((value, index, array) -> { return value > 7;
        });
    assertEqual(second, first);
    }

    @Test
    void testInt16ArrayFindTestThree051() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    arr.find((value, index, array) -> {
    return value > 5;
        });
    Integer actual1 = arr.get(0);
    assertEqual(1, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(2, actual2);
    Integer actual3 = arr.get(2);
    assertEqual(3, actual3);
    }

    @Test
    void testInt16ArrayFindTestThree052() {
    Int16Array arr = Int16Array.of(6, 7, 8, 9);
    int lenBefore = arr.length();
    arr.find((value, index, array) -> {
    return false;
        });
    int actual1 = arr.length();
    int expected1 = lenBefore;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayFindTestThree053() {
    Int16Array arr = Int16Array.of(-5, -3, 2, -1, 4);
    Integer result = arr.find((value, index, array) -> { return value > 0;
        });
    assertEqual(2, result);
    }

    @Test
    void testInt16ArrayFindTestThree054() {
    Int16Array arr = Int16Array.of(3, 1, -2, 5, -4);
    Integer result = arr.find((value, index, array) -> { return value < 0;
        });
    assertEqual(-2, result);
    }

    @Test
    void testInt16ArrayFindTestThree055() {
    Int16Array arr = Int16Array.of(0, 0, 5, 0);
    Integer result = arr.find((value, index, array) -> { return value != 0;
        });
    assertEqual(5, result);
    }

    @Test
    void testInt16ArrayFindTestThree056() {
    Int16Array arr = Int16Array.of(3, 0, 1);
    Integer result = arr.find((value, index, array) -> { return value == 0;
        });
    assertEqual(0, result);
    }

    @Test
    void testInt16ArrayFindTestThree057() {
    Int16Array arr = new Int16Array(50);
    for (int i = 0; i < 50; i++) {
    arr.set(i, i);
    }
    Integer result = arr.find((value, index, array) -> { return value == 25;
        });
    assertEqual(25, result);
    }

    @Test
    void testInt16ArrayFindTestThree058() {
    Int16Array arr = Int16Array.of(-32768, 0, 32767);
    Integer result = arr.find((value, index, array) -> { return value == 32767;
        });
    assertEqual(32767, result);
    }

    @Test
    void testInt16ArrayFindTestThree059() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    try {
    arr.find((value, index, array) -> {
    if (value == 20) {
    throw new Error("abort");
    }
    return false;
        });
    fail();
    } catch (Error e) {
    String actualErrorName = e.getClass().getSimpleName();
    String expectedErrorName = "Error";
    assertEqual(expectedErrorName, actualErrorName);
    }
    Integer actual1 = arr.get(0);
    assertEqual(10, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(20, actual2);
    Integer actual3 = arr.get(2);
    assertEqual(30, actual3);
    }

    @Test
    void testInt16ArrayFindTestThree060() {
    Int16Array arr = Int16Array.of(5, 10, 15);
    try {
    arr.find((value, index, array) -> {
    throw new Error("fail");
        });
    fail();
    } catch (Error e) {
    String actualErrorName = e.getClass().getSimpleName();
    String expectedErrorName = "Error";
    assertEqual(expectedErrorName, actualErrorName);
    }
    Integer result = arr.find((value, index, array) -> { return value > 7;
        });
    assertEqual(10, result);
    }
}
