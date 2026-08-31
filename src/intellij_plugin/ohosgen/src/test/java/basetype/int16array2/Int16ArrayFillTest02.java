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

import org.junit.jupiter.api.Test;

/**
 * Int16ArrayFillTest02 —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Int16ArrayFillTest02 extends BasTest {

    @Test
    void testInt16ArrayFillTestTwo001() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    arr.fill(99);
    Integer actual1 = arr.get(0);
    assertEqualInt(99, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(99, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(99, actual3);
    }

    @Test
    void testInt16ArrayFillTestTwo002() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    arr.fill(77, 2);
    Integer actual1 = arr.get(0);
    assertEqualInt(1, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(2, actual2);
    Integer actual3 = arr.get(2);
    assertEqualInt(77, actual3);
    Integer actual4 = arr.get(4);
    assertEqualInt(77, actual4);
    }

    @Test
    void testInt16ArrayFillTestTwo003() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    arr.fill(88, 1, 3);
    Integer actual1 = arr.get(0);
    assertEqualInt(1, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(88, actual2);
    Integer actual3 = arr.get(2);
    assertEqualInt(88, actual3);
    Integer actual4 = arr.get(3);
    assertEqualInt(4, actual4);
    }

    @Test
    void testInt16ArrayFillTestTwo004() {
    Int16Array arr = Int16Array.of(0, 0, 0);
    arr.fill(32767);
    Integer actual1 = arr.get(0);
    assertEqualInt(32767, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(32767, actual2);
    Integer actual3 = arr.get(2);
    assertEqualInt(32767, actual3);
    }

    @Test
    void testInt16ArrayFillTestTwo005() {
    Int16Array arr = Int16Array.of(0, 0, 0);
    arr.fill(-32768);
    Integer actual1 = arr.get(0);
    assertEqualInt(-32768, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(-32768, actual2);
    Integer actual3 = arr.get(2);
    assertEqualInt(-32768, actual3);
    }

    @Test
    void testInt16ArrayFillTestTwo006() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    arr.fill(0);
    Integer actual1 = arr.get(0);
    assertEqualInt(0, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(0, actual2);
    Integer actual3 = arr.get(2);
    assertEqualInt(0, actual3);
    }

    @Test
    void testInt16ArrayFillTestTwo007() {
    Int16Array arr = Int16Array.of(0, 0, 0);
    arr.fill(-1);
    Integer actual1 = arr.get(0);
    assertEqualInt(-1, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(-1, actual2);
    Integer actual3 = arr.get(2);
    assertEqualInt(-1, actual3);
    }

    @Test
    void testInt16ArrayFillTestTwo008() {
    Int16Array arr = new Int16Array();
    arr.fill(1);
    int actual1 = arr.length();
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArrayFillTestTwo009() {
    Int16Array arr = Int16Array.of(0);
    arr.fill(5);
    Integer actual1 = arr.get(0);
    assertEqualInt(5, actual1);
    }

    @Test
    void testInt16ArrayFillTestTwo010() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    int base = 10;
    arr.fill(base * 3);
    Integer actual1 = arr.get(0);
    assertEqualInt(30, actual1);
    }

    @Test
    void testInt16ArrayFillTestTwo011() {
    Int16Array arr = Int16Array.of(0, 0, 0);
    arr.fill(32768);
    Integer actual1 = arr.get(0);
    assertEqualInt(-32768, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(-32768, actual2);
    Integer actual3 = arr.get(2);
    assertEqualInt(-32768, actual3);
    }

    @Test
    void testInt16ArrayFillTestTwo012() {
    Int16Array arr = Int16Array.of(0, 0, 0);
    arr.fill(-32769);
    Integer actual1 = arr.get(0);
    assertEqualInt(32767, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(32767, actual2);
    Integer actual3 = arr.get(2);
    assertEqualInt(32767, actual3);
    }

    @Test
    void testInt16ArrayFillTestTwo013() {
    Int16Array arr = Int16Array.of(0, 0, 0);
    arr.fill(65535);
    Integer actual1 = arr.get(0);
    assertEqualInt(-1, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(-1, actual2);
    Integer actual3 = arr.get(2);
    assertEqualInt(-1, actual3);
    }

    @Test
    void testInt16ArrayFillTestTwo014() {
    Int16Array arr = Int16Array.of(1, 1, 1);
    arr.fill(65536);
    Integer actual1 = arr.get(0);
    assertEqualInt(0, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(0, actual2);
    }

    @Test
    void testInt16ArrayFillTestTwo015() {
    Int16Array arr = Int16Array.of(1, 1, 1);
    arr.fill(-65536);
    Integer actual1 = arr.get(0);
    assertEqualInt(0, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(0, actual2);
    }

    @Test
    void testInt16ArrayFillTestTwo016() {
    Int16Array arr = Int16Array.of(0, 0);
    arr.fill(0x8000);
    Integer actual1 = arr.get(0);
    assertEqualInt(-32768, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(-32768, actual2);
    }

    @Test
    void testInt16ArrayFillTestTwo017() {
    Int16Array arr = Int16Array.of(99, 99);
    arr.fill(0x10000);
    Integer actual1 = arr.get(0);
    assertEqualInt(0, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(0, actual2);
    }

    @Test
    void testInt16ArrayFillTestTwo018() {
    Int16Array arr = Int16Array.of(0);
    int v = 32767 + 1;
    arr.fill(v);
    Integer actual1 = arr.get(0);
    assertEqualInt(-32768, actual1);
    }

    @Test
    void testInt16ArrayFillTestTwo019() {
    Int16Array arr = Int16Array.of(0, 0);
    arr.fill(32767);
    Integer actual1 = arr.get(0);
    assertEqualInt(32767, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(32767, actual2);
    }

    @Test
    void testInt16ArrayFillTestTwo020() {
    Int16Array arr = Int16Array.of(0, 0);
    arr.fill(-32768);
    Integer actual1 = arr.get(0);
    assertEqualInt(-32768, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(-32768, actual2);
    }

    @Test
    void testInt16ArrayFillTestTwo021() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    arr.fill(Double.NaN);
    Integer actual1 = arr.get(0);
    assertEqualInt(0, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(0, actual2);
    Integer actual3 = arr.get(2);
    assertEqualInt(0, actual3);
    }

    @Test
    void testInt16ArrayFillTestTwo022() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    arr.fill(Double.POSITIVE_INFINITY);
    Integer actual1 = arr.get(0);
    assertEqualInt(0, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(0, actual2);
    Integer actual3 = arr.get(2);
    assertEqualInt(0, actual3);
    }

    @Test
    void testInt16ArrayFillTestTwo023() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    arr.fill(-Double.POSITIVE_INFINITY);
    Integer actual1 = arr.get(0);
    assertEqualInt(0, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(0, actual2);
    Integer actual3 = arr.get(2);
    assertEqualInt(0, actual3);
    }

    @Test
    void testInt16ArrayFillTestTwo024() {
    Int16Array arr = Int16Array.of(0, 0, 0);
    arr.fill(3.7);
    Integer actual1 = arr.get(0);
    assertEqualInt(3, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(3, actual2);
    }

    @Test
    void testInt16ArrayFillTestTwo025() {
    Int16Array arr = Int16Array.of(0, 0, 0);
    arr.fill(-3.7);
    Integer actual1 = arr.get(0);
    assertEqualInt(-3, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(-3, actual2);
    }

    @Test
    void testInt16ArrayFillTestTwo026() {
    Int16Array arr = Int16Array.of(1, 1);
    arr.fill(0.9);
    Integer actual1 = arr.get(0);
    assertEqualInt(0, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(0, actual2);
    }

    @Test
    void testInt16ArrayFillTestTwo027() {
    Int16Array arr = Int16Array.of(1, 1);
    arr.fill(-0.9);
    Integer actual1 = arr.get(0);
    assertEqualInt(0, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(0, actual2);
    }

    @Test
    void testInt16ArrayFillTestTwo028() {
    Int16Array arr = Int16Array.of(0, 0);
    arr.fill(32767.5);
    Integer actual1 = arr.get(0);
    assertEqualInt(32767, actual1);
    }

    @Test
    void testInt16ArrayFillTestTwo029() {
    Int16Array arr = Int16Array.of(0);
    arr.fill(32768.1);
    Integer actual1 = arr.get(0);
    assertEqualInt(-32768, actual1);
    }

    @Test
    void testInt16ArrayFillTestTwo030() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    arr.fill(-0);
    Integer actual1 = arr.get(0);
    assertEqualInt(0, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(0, actual2);
    Integer actual3 = arr.get(2);
    assertEqualInt(0, actual3);
    }

    @Test
    void testInt16ArrayFillTestTwo031() {
    Int16Array arr1 = Int16Array.of(1, 1);
    Int16Array arr2 = Int16Array.of(1, 1);
    arr1.fill(-0);
    arr2.fill(0);
    Integer actual1 = arr1.get(0);
    Integer expected1 = arr2.get(0);
    assertEqualInt(expected1, actual1);
    Integer actual2 = arr1.get(1);
    Integer expected2 = arr2.get(1);
    assertEqualInt(expected2, actual2);
    }

    @Test
    void testInt16ArrayFillTestTwo032() {
    Int16Array arr = Int16Array.of(99, 99);
    arr.fill(131072);
    Integer actual1 = arr.get(0);
    assertEqualInt(0, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(0, actual2);
    }

    @Test
    void testInt16ArrayFillTestTwo033() {
    Int16Array arr = Int16Array.of(0, 0);
    arr.fill(98304);
    Integer actual1 = arr.get(0);
    assertEqualInt(-32768, actual1);
    }

    @Test
    void testInt16ArrayFillTestTwo034() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    arr.fill(99, 0);
    Integer actual1 = arr.get(0);
    assertEqualInt(99, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(99, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(99, actual3);
    }

    @Test
    void testInt16ArrayFillTestTwo035() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    arr.fill(99, 1);
    Integer actual1 = arr.get(0);
    assertEqualInt(1, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(99, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(99, actual3);
    }

    @Test
    void testInt16ArrayFillTestTwo036() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    arr.fill(99, 4);
    Integer actual1 = arr.get(0);
    assertEqualInt(1, actual1);
    Integer actual2 = arr.get(3);
    assertEqualInt(4, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(99, actual3);
    }

    @Test
    void testInt16ArrayFillTestTwo037() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    int s = 2;
    arr.fill(55, s);
    Integer actual1 = arr.get(0);
    assertEqualInt(1, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(2, actual2);
    Integer actual3 = arr.get(2);
    assertEqualInt(55, actual3);
    }

    @Test
    void testInt16ArrayFillTestTwo038() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    arr.fill(99, -1);
    Integer actual1 = arr.get(0);
    assertEqualInt(1, actual1);
    Integer actual2 = arr.get(3);
    assertEqualInt(4, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(99, actual3);
    }

    @Test
    void testInt16ArrayFillTestTwo039() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    arr.fill(99, -2);
    Integer actual1 = arr.get(0);
    assertEqualInt(1, actual1);
    Integer actual2 = arr.get(2);
    assertEqualInt(3, actual2);
    Integer actual3 = arr.get(3);
    assertEqualInt(99, actual3);
    Integer actual4 = arr.get(4);
    assertEqualInt(99, actual4);
    }

    @Test
    void testInt16ArrayFillTestTwo040() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    arr.fill(99, -5);
    Integer actual1 = arr.get(0);
    assertEqualInt(99, actual1);
    Integer actual2 = arr.get(4);
    assertEqualInt(99, actual2);
    }

    @Test
    void testInt16ArrayFillTestTwo041() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    arr.fill(99, 5);
    Integer actual1 = arr.get(0);
    assertEqualInt(1, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(2, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(5, actual3);
    }

    @Test
    void testInt16ArrayFillTestTwo042() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    arr.fill(99, 6);
    Integer actual1 = arr.get(0);
    assertEqualInt(1, actual1);
    Integer actual2 = arr.get(4);
    assertEqualInt(5, actual2);
    }

    @Test
    void testInt16ArrayFillTestTwo043() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    arr.fill(99, 100);
    Integer actual1 = arr.get(0);
    assertEqualInt(1, actual1);
    Integer actual2 = arr.get(2);
    assertEqualInt(3, actual2);
    }

    @Test
    void testInt16ArrayFillTestTwo044() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    arr.fill(99, -6);
    Integer actual1 = arr.get(0);
    assertEqualInt(99, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(99, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(99, actual3);
    }

    @Test
    void testInt16ArrayFillTestTwo045() {
    Int16Array arr1 = Int16Array.of(1, 2, 3);
    Int16Array arr2 = Int16Array.of(1, 2, 3);
    arr1.fill(88, 0);
    arr2.fill(88);
    Integer actual1 = arr1.get(0);
    Integer expected1 = arr2.get(0);
    assertEqualInt(expected1, actual1);
    Integer actual2 = arr1.get(2);
    Integer expected2 = arr2.get(2);
    assertEqualInt(expected2, actual2);
    }

    @Test
    void testInt16ArrayFillTestTwo046() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    arr.fill(99, 0, 1);
    Integer actual1 = arr.get(0);
    assertEqualInt(99, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(2, actual2);
    Integer actual3 = arr.get(2);
    assertEqualInt(3, actual3);
    }

    @Test
    void testInt16ArrayFillTestTwo047() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    arr.fill(99, 0, 4);
    Integer actual1 = arr.get(0);
    assertEqualInt(99, actual1);
    Integer actual2 = arr.get(3);
    assertEqualInt(99, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(5, actual3);
    }

    @Test
    void testInt16ArrayFillTestTwo048() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    arr.fill(99, 0, 5);
    Integer actual1 = arr.get(0);
    assertEqualInt(99, actual1);
    Integer actual2 = arr.get(4);
    assertEqualInt(99, actual2);
    }

    @Test
    void testInt16ArrayFillTestTwo049() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    int e = 3;
    arr.fill(77, 1, e);
    Integer actual1 = arr.get(0);
    assertEqualInt(1, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(77, actual2);
    Integer actual3 = arr.get(2);
    assertEqualInt(77, actual3);
    Integer actual4 = arr.get(3);
    assertEqualInt(4, actual4);
    }

    @Test
    void testInt16ArrayFillTestTwo050() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    arr.fill(99, 0, -1);
    Integer actual1 = arr.get(0);
    assertEqualInt(99, actual1);
    Integer actual2 = arr.get(3);
    assertEqualInt(99, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(5, actual3);
    }

    @Test
    void testInt16ArrayFillTestTwo051() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    arr.fill(99, 0, -2);
    Integer actual1 = arr.get(0);
    assertEqualInt(99, actual1);
    Integer actual2 = arr.get(2);
    assertEqualInt(99, actual2);
    Integer actual3 = arr.get(3);
    assertEqualInt(4, actual3);
    Integer actual4 = arr.get(4);
    assertEqualInt(5, actual4);
    }

    @Test
    void testInt16ArrayFillTestTwo052() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    arr.fill(99, 1, -5);
    Integer actual1 = arr.get(0);
    assertEqualInt(1, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(2, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(5, actual3);
    }

    @Test
    void testInt16ArrayFillTestTwo053() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    arr.fill(99, 2, 6);
    Integer actual1 = arr.get(0);
    assertEqualInt(1, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(2, actual2);
    Integer actual3 = arr.get(2);
    assertEqualInt(99, actual3);
    Integer actual4 = arr.get(4);
    assertEqualInt(99, actual4);
    }

    @Test
    void testInt16ArrayFillTestTwo054() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    arr.fill(99, 1, 100);
    Integer actual1 = arr.get(0);
    assertEqualInt(1, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(99, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(99, actual3);
    }

    @Test
    void testInt16ArrayFillTestTwo055() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    arr.fill(99, 0, -6);
    Integer actual1 = arr.get(0);
    assertEqualInt(1, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(2, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(5, actual3);
    }

    @Test
    void testInt16ArrayFillTestTwo056() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    arr.fill(99, 2, 2);
    Integer actual1 = arr.get(0);
    assertEqualInt(1, actual1);
    Integer actual2 = arr.get(2);
    assertEqualInt(3, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(5, actual3);
    }

    @Test
    void testInt16ArrayFillTestTwo057() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    arr.fill(99, 3, 1);
    Integer actual1 = arr.get(0);
    assertEqualInt(1, actual1);
    Integer actual2 = arr.get(3);
    assertEqualInt(4, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(5, actual3);
    }

    @Test
    void testInt16ArrayFillTestTwo058() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    arr.fill(99, -1, -2);
    Integer actual1 = arr.get(0);
    assertEqualInt(1, actual1);
    Integer actual2 = arr.get(3);
    assertEqualInt(4, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(5, actual3);
    }

    @Test
    void testInt16ArrayFillTestTwo059() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    arr.fill(99, 0, 0);
    Integer actual1 = arr.get(0);
    assertEqualInt(1, actual1);
    Integer actual2 = arr.get(4);
    assertEqualInt(5, actual2);
    }

    @Test
    void testInt16ArrayFillTestTwo060() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    arr.fill(99, -1, 0);
    Integer actual1 = arr.get(4);
    assertEqualInt(5, actual1);
    }

    @Test
    void testInt16ArrayFillTestTwo061() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5, 6);
    arr.fill(99, -4, -2);
    Integer actual1 = arr.get(0);
    assertEqualInt(1, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(2, actual2);
    Integer actual3 = arr.get(2);
    assertEqualInt(99, actual3);
    Integer actual4 = arr.get(3);
    assertEqualInt(99, actual4);
    Integer actual5 = arr.get(4);
    assertEqualInt(5, actual5);
    }

    @Test
    void testInt16ArrayFillTestTwo062() {
    Int16Array arr = new Int16Array();
    arr.fill(99, 0);
    int actual1 = arr.length();
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArrayFillTestTwo063() {
    Int16Array arr = Int16Array.of(42);
    arr.fill(99, 0, 1);
    Integer actual1 = arr.get(0);
    assertEqualInt(99, actual1);
    }

    @Test
    void testInt16ArrayFillTestTwo064() {
    Int16Array arr = Int16Array.of(42);
    arr.fill(99, 0, 0);
    Integer actual1 = arr.get(0);
    assertEqualInt(42, actual1);
    }

    @Test
    void testInt16ArrayFillTestTwo065() {
    Int16Array arr = Int16Array.of(42);
    arr.fill(99, -1);
    Integer actual1 = arr.get(0);
    assertEqualInt(99, actual1);
    }

    @Test
    void testInt16ArrayFillTestTwo066() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    Int16Array result = arr.fill(99);
    boolean actual1 = result == arr;
    assertTrue(actual1);
    }

    @Test
    void testInt16ArrayFillTestTwo067() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    Int16Array returned = arr.fill(88, 0, 2);
    returned.set(0, 77);
    Integer actual1 = arr.get(0);
    assertEqualInt(77, actual1);
    }

    @Test
    void testInt16ArrayFillTestTwo068() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4);
    arr.fill(99, 0, 2).reverse();
    Integer actual1 = arr.get(0);
    assertEqualInt(4, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(3, actual2);
    Integer actual3 = arr.get(2);
    assertEqualInt(99, actual3);
    Integer actual4 = arr.get(3);
    assertEqualInt(99, actual4);
    }

    @Test
    void testInt16ArrayFillTestTwo069() {
    Int16Array arr = Int16Array.of(0, 0, 0, 0, 0);
    arr.fill(1, 0, 2).fill(2, 3, 5);
    Integer actual1 = arr.get(0);
    assertEqualInt(1, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(1, actual2);
    Integer actual3 = arr.get(2);
    assertEqualInt(0, actual3);
    Integer actual4 = arr.get(3);
    assertEqualInt(2, actual4);
    Integer actual5 = arr.get(4);
    assertEqualInt(2, actual5);
    }

    @Test
    void testInt16ArrayFillTestTwo070() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    Int16Array ret = arr.fill(0, 1, 4);
    Integer actual1 = ret.get(0);
    assertEqualInt(1, actual1);
    Integer actual2 = ret.get(1);
    assertEqualInt(0, actual2);
    Integer actual3 = ret.get(3);
    assertEqualInt(0, actual3);
    Integer actual4 = ret.get(4);
    assertEqualInt(5, actual4);
    }

    @Test
    void testInt16ArrayFillTestTwo071() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    Int16Array ret1 = arr.fill(10, 0, 1);
    Int16Array ret2 = ret1.fill(20, 1, 2);
    Int16Array ret3 = ret2.fill(30, 2, 3);
    boolean actual1 = ret3 == arr;
    assertTrue(actual1);
    }

    @Test
    void testInt16ArrayFillTestTwo072() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int16Array arr = new Int16Array(buf);
    arr.fill(32768);
    Integer actual1 = arr.get(0);
    assertEqualInt(-32768, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(-32768, actual2);
    }

    @Test
    void testInt16ArrayFillTestTwo073() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40);
    arr.fill(32768, 1, 3);
    Integer actual1 = arr.get(0);
    assertEqualInt(10, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(-32768, actual2);
    Integer actual3 = arr.get(2);
    assertEqualInt(-32768, actual3);
    Integer actual4 = arr.get(3);
    assertEqualInt(40, actual4);
    }

    @Test
    void testInt16ArrayFillTestTwo074() {
    Int16Array arr = Int16Array.of(1, 1, 1);
    arr.fill(Double.NaN, 1, 2);
    Integer actual1 = arr.get(1);
    assertEqualInt(0, actual1);
    }

    @Test
    void testInt16ArrayFillTestTwo075() {
    Int16Array arr = Int16Array.of(1, 1, 1);
    arr.fill(Double.POSITIVE_INFINITY, 0, 1);
    Integer actual1 = arr.get(0);
    assertEqualInt(0, actual1);
    }

    @Test
    void testInt16ArrayFillTestTwo076() {
    Int16Array arr1 = Int16Array.of(0, 0);
    Int16Array arr2 = Int16Array.of(0, 0);
    arr1.fill(3.7);
    arr2.fill(3);
    Integer actual1 = arr1.get(0);
    Integer expected1 = arr2.get(0);
    assertEqualInt(expected1, actual1);
    Integer actual2 = arr1.get(1);
    Integer expected2 = arr2.get(1);
    assertEqualInt(expected2, actual2);
    }

    @Test
    void testInt16ArrayFillTestTwo077() {
    Int16Array arr = Int16Array.of(0, 0, 0, 0, 0);
    arr.fill(16, 1, 4);
    Int16Array sliced = arr.slice(1, 4);
    Integer actual1 = sliced.get(0);
    assertEqualInt(16, actual1);
    Integer actual2 = sliced.get(2);
    assertEqualInt(16, actual2);
    }

    @Test
    void testInt16ArrayFillTestTwo078() {
    Int16Array arr = Int16Array.of(50, 10, 30, 20, 40);
    arr.fill(25, 1, 3);
    arr.sort();
    Integer actual1 = arr.get(0);
    assertEqualInt(20, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(25, actual2);
    Integer actual3 = arr.get(2);
    assertEqualInt(25, actual3);
    Integer actual4 = arr.get(3);
    assertEqualInt(40, actual4);
    Integer actual5 = arr.get(4);
    assertEqualInt(50, actual5);
    }

    @Test
    void testInt16ArrayFillTestTwo079() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    arr.fill(99, 2, 4);
    int[] count = {0};
    arr.forEach((v, i) -> {
    if (i >= 2 && i < 4) {
    assertEqual(99, v);
    }
    count[0]++;
        });
    assertEqual(5, count[0]);
    }
}
