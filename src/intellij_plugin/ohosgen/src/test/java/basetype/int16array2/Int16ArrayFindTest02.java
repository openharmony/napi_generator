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
import basetype.common.Int16Array;

import java.util.List;
import org.junit.jupiter.api.Test;

/**
 * Int16ArrayFindTest02 —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Int16ArrayFindTest02 extends BasTest {

    @Test
    void testInt16ArrayFindTestTwo001() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    Integer result = arr.find((value, index, array) -> value > 100);
    assertNull(result);
    }

    @Test
    void testInt16ArrayFindTestTwo002() {
    Int16Array arr = Int16Array.of(5, 15, 25);
    Integer result = arr.find((value, index, array) -> value > 10);
    boolean actual1 = result == null;
    assertFalse(actual1);
    }

    @Test
    void testInt16ArrayFindTestTwo003() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    Integer result = arr.find((value, index, array) -> value == 2);
    assertEqualInt(2, result);
    }

    @Test
    void testInt16ArrayFindTestTwo004() {
    Int16Array arr = Int16Array.of(100, 200, 300);
    Integer result = arr.find((value, index, array) -> value > 150);
    boolean actual1 = isFinite((int) result);
    assertTrue(actual1);
    }

    @Test
    void testInt16ArrayFindTestTwo005() {
    Int16Array arr = new Int16Array(0);
    Integer result = arr.find((value, index, array) -> value > 0);
    assertNull(result);
    }

    @Test
    void testInt16ArrayFindTestTwo006() {
    Int16Array arr = Int16Array.of(42, 99, 7);
    Integer result = arr.find((value, index, array) -> true);
    assertEqualInt(42, result);
    }

    @Test
    void testInt16ArrayFindTestTwo007() {
    Int16Array arr = Int16Array.of(3, 8, 2, 9, 1);
    Integer result = arr.find((value, index, array) -> value > 5);
    assertEqualInt(8, result);
    }

    @Test
    void testInt16ArrayFindTestTwo008() {
    Int16Array arr = Int16Array.of(4, 5, 6, 7);
    Integer result = arr.find((value, index, array) -> value >= 5);
    assertEqualInt(5, result);
    }

    @Test
    void testInt16ArrayFindTestTwo009() {
    Int16Array arr = Int16Array.of(10, 8, 3, 15);
    Integer result = arr.find((value, index, array) -> value < 9);
    assertEqualInt(8, result);
    }

    @Test
    void testInt16ArrayFindTestTwo010() {
    Int16Array arr = Int16Array.of(20, 15, 10, 5);
    Integer result = arr.find((value, index, array) -> value <= 15);
    assertEqualInt(15, result);
    }

    @Test
    void testInt16ArrayFindTestTwo011() {
    Int16Array arr = Int16Array.of(7, 7, 3, 7, 5);
    Integer result = arr.find((value, index, array) -> value != 7);
    assertEqualInt(3, result);
    }

    @Test
    void testInt16ArrayFindTestTwo012() {
    Int16Array arr = Int16Array.of(-3, 0, 3);
    Integer result = arr.find((value, index, array) -> value == 0);
    assertEqualInt(0, result);
    }

    @Test
    void testInt16ArrayFindTestTwo013() {
    Int16Array arr = Int16Array.of(2, -1, 4, -1, 6);
    Integer result = arr.find((value, index, array) -> value == -1);
    assertEqualInt(-1, result);
    }

    @Test
    void testInt16ArrayFindTestTwo014() {
    Int16Array arr = Int16Array.of(100, 32767, 200);
    Integer result = arr.find((value, index, array) -> value == 32767);
    assertEqualInt(32767, result);
    }

    @Test
    void testInt16ArrayFindTestTwo015() {
    Int16Array arr = Int16Array.of(50, -32768, 150);
    Integer result = arr.find((value, index, array) -> value == -32768);
    assertEqualInt(-32768, result);
    }

    @Test
    void testInt16ArrayFindTestTwo016() {
    Int16Array arr = Int16Array.of(-5, 100, -10, 50);
    Integer result = arr.find((value, index, array) -> value == 100);
    assertEqualInt(100, result);
    }

    @Test
    void testInt16ArrayFindTestTwo017() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Integer result = arr.find((value, index, array) -> index >= 3);
    assertEqualInt(40, result);
    }

    @Test
    void testInt16ArrayFindTestTwo018() {
    Int16Array arr = Int16Array.of(5, 15, 25, 35, 45);
    Integer result = arr.find((value, index, array) -> index % 2 == 0);
    assertEqualInt(5, result);
    }

    @Test
    void testInt16ArrayFindTestTwo019() {
    Int16Array arr = Int16Array.of(1, 3, 7, 10, 15);
    Integer result = arr.find((value, index, array) -> value > 5 && index > 1);
    assertEqualInt(7, result);
    }

    @Test
    void testInt16ArrayFindTestTwo020() {
    Int16Array arr = Int16Array.of(3, 6, 9, 12, 15);
    Integer result = arr.find((value, index, array) -> value == array.length() * 3);
    assertEqualInt(15, result);
    }

    @Test
    void testInt16ArrayFindTestTwo021() {
    Int16Array arr = Int16Array.of(7, 14, 21);
    Integer result = arr.find((value, index, array) -> {
        return array == arr && value > 10;
        });
    assertEqualInt(14, result);
    }

    @Test
    void testInt16ArrayFindTestTwo022() {
    Int16Array arr = Int16Array.of(100, 200, 300);
    Integer result = arr.find((value, index, array) -> value > 32767);
    assertNull(result);
    }

    @Test
    void testInt16ArrayFindTestTwo023() {
    Int16Array arr = Int16Array.of(-100, -200, -300);
    Integer result = arr.find((value, index, array) -> value < -32768);
    assertNull(result);
    }

    @Test
    void testInt16ArrayFindTestTwo024() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    Integer result = arr.find((value, index, array) -> value == 999);
    assertNull(result);
    }

    @Test
    void testInt16ArrayFindTestTwo025() {
    Int16Array arr = Int16Array.of(5);
    Integer result = arr.find((value, index, array) -> value > 10);
    assertNull(result);
    }

    @Test
    void testInt16ArrayFindTestTwo026() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    int lenBefore = arr.length();
    Integer result = arr.find((value, index, array) -> value > 25);
    int actual1 = arr.length();
    int expected1 = lenBefore;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayFindTestTwo027() {
    Int16Array arr = Int16Array.of(1, 3, 5, 7, 9);
    int lenBefore = arr.length();
    Integer result = arr.find((value, index, array) -> value > 100);
    int actual1 = arr.length();
    int expected1 = lenBefore;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayFindTestTwo028() {
    Int16Array arr = new Int16Array(0);
    Integer result = arr.find((value, index, array) -> true);
    int actual1 = arr.length();
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArrayFindTestTwo029() {
    Int16Array arr = Int16Array.of(42);
    Integer result = arr.find((value, index, array) -> value == 42);
    int actual1 = arr.length();
    assertEqual(1, actual1);
    }

    @Test
    void testInt16ArrayFindTestTwo030() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    int bpeBefore = arr.BYTES_PER_ELEMENT;
    Integer result = arr.find((value, index, array) -> value > 3);
    int actual1 = arr.BYTES_PER_ELEMENT;
    int expected1 = bpeBefore;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayFindTestTwo031() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    int bpeBefore = arr.BYTES_PER_ELEMENT;
    Integer result = arr.find((value, index, array) -> value > 999);
    int actual1 = arr.BYTES_PER_ELEMENT;
    int expected1 = bpeBefore;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayFindTestTwo032() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5, 6);
    int blBefore = arr.byteLength();
    Integer result = arr.find((value, index, array) -> value > 3);
    int actual1 = arr.byteLength();
    int expected1 = blBefore;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayFindTestTwo033() {
    Int16Array arr = Int16Array.of(7, 14, 21, 28);
    int blBefore = arr.byteLength();
    Integer result = arr.find((value, index, array) -> value > 1000);
    int actual1 = arr.byteLength();
    int expected1 = blBefore;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayFindTestTwo034() {
    Int16Array arr = Int16Array.of(50, 60, 70, 80, 90);
    Integer result = arr.find((value, index, array) -> value > 65);
    Integer actual1 = arr.get(0);
    assertEqualInt(50, actual1);
    }

    @Test
    void testInt16ArrayFindTestTwo035() {
    Int16Array arr = Int16Array.of(15, 25, 35, 45);
    Integer result = arr.find((value, index, array) -> value < 0);
    Integer actual1 = arr.get(0);
    assertEqualInt(15, actual1);
    }

    @Test
    void testInt16ArrayFindTestTwo036() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Integer result = arr.find((value, index, array) -> value == 40);
    Integer actual1 = arr.get(2);
    assertEqualInt(30, actual1);
    }

    @Test
    void testInt16ArrayFindTestTwo037() {
    Int16Array arr = Int16Array.of(5, 10, 15, 20, 25);
    Integer result = arr.find((value, index, array) -> value > 100);
    Integer actual1 = arr.get(2);
    assertEqualInt(15, actual1);
    }

    @Test
    void testInt16ArrayFindTestTwo038() {
    Int16Array arr = Int16Array.of(1, 3, 5, 7, 9);
    Integer result = arr.find((value, index, array) -> value > 4);
    Integer actual1 = arr.get(4);
    assertEqualInt(9, actual1);
    }

    @Test
    void testInt16ArrayFindTestTwo039() {
    Int16Array arr = Int16Array.of(11, 22, 33, 44, 55);
    Integer result = arr.find((value, index, array) -> value == 44);
    Integer actual1 = arr.get(1);
    assertEqualInt(22, actual1);
    }

    @Test
    void testInt16ArrayFindTestTwo040() {
    Int16Array arr = Int16Array.of(3, 6, 9, 12, 15);
    Integer result = arr.find((value, index, array) -> value > 10);
    boolean allMatch = true;
    List<Integer> expected = java.util.Arrays.asList(3, 6, 9, 12, 15);
    for (int i = 0; i < arr.length(); i++) {
    if (arr.get(i) != expected.get(i)) {
    allMatch = false;
    break;
    }
    }
    assertTrue(allMatch);
    }

    @Test
    void testInt16ArrayFindTestTwo041() {
    Int16Array arr = Int16Array.of(7, 8, 9, 10, 11);
    Integer result = arr.find((value, index, array) -> value > 1000);
    boolean allMatch = true;
    List<Integer> expected = java.util.Arrays.asList(7, 8, 9, 10, 11);
    for (int i = 0; i < arr.length(); i++) {
    if (arr.get(i) != expected.get(i)) {
    allMatch = false;
    break;
    }
    }
    assertTrue(allMatch);
    }

    @Test
    void testInt16ArrayFindTestTwo042() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    ArrayBuffer bufBefore = arr.buffer();
    Integer result = arr.find((value, index, array) -> value > 3);
    boolean actual1 = arr.buffer() == bufBefore;
    assertTrue(actual1);
    }

    @Test
    void testInt16ArrayFindTestTwo043() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    ArrayBuffer bufBefore = arr.buffer();
    Integer result = arr.find((value, index, array) -> value < 0);
    boolean actual1 = arr.buffer() == bufBefore;
    assertTrue(actual1);
    }

    @Test
    void testInt16ArrayFindTestTwo044() {
    ArrayBuffer buf = new ArrayBuffer(20);
    Int16Array arr = new Int16Array(buf, 2, 5);
    arr.set(0, 10);
    arr.set(1, 20);
    arr.set(2, 30);
    arr.set(3, 40);
    arr.set(4, 50);
    int offsetBefore = arr.byteOffset();
    Integer result = arr.find((value, index, array) -> value > 25);
    int actual1 = arr.byteOffset();
    int expected1 = offsetBefore;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayFindTestTwo045() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int16Array arr = new Int16Array(buf, 4, 3);
    arr.set(0, 5);
    arr.set(1, 10);
    arr.set(2, 15);
    int offsetBefore = arr.byteOffset();
    Integer result = arr.find((value, index, array) -> value > 100);
    int actual1 = arr.byteOffset();
    int expected1 = offsetBefore;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayFindTestTwo046() {
    Int16Array arr = Int16Array.of(32767);
    Integer result = arr.find((value, index, array) -> value == 32767);
    assertEqualInt(32767, result);
    }

    @Test
    void testInt16ArrayFindTestTwo047() {
    Int16Array arr = Int16Array.of(100, -32768, 50);
    Integer result = arr.find((value, index, array) -> value < 0);
    if (result != null) {
    boolean actual1 = ((int) result) < 0;
    assertTrue(actual1);
    }
    }

    @Test
    void testInt16ArrayFindTestTwo048() {
    Int16Array arr = Int16Array.of(42, 42, 42, 42);
    Integer result = arr.find((value, index, array) -> true);
    assertEqual(arr.get(0).intValue(), result.intValue());
    }

    @Test
    void testInt16ArrayFindTestTwo049() {
    Int16Array arr = Int16Array.of(100, -1, 32767, -32768, 50);
    Integer result = arr.find((value, index, array) -> value < 0);
    assertEqualInt(-1, result);
    }

    @Test
    void testInt16ArrayFindTestTwo050() {
    Int16Array arr = Int16Array.of(-5, -10, 1, 32767, -32768);
    Integer result = arr.find((value, index, array) -> value > 0);
    assertEqualInt(1, result);
    }
}
