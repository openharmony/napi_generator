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

import basetype.common.BasTest;
import basetype.common.RangeError;
import basetype.common.Int16Array;

import org.junit.jupiter.api.Test;

/**
 * Int16ArraySubarrayTest01 —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Int16ArraySubarrayTest01 extends BasTest {

    @Test
    void testInt16ArraySubarrayTestOne001() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray();
    int actual1 = sub.length();
    assertEqual(5, actual1);
    Integer actual2 = sub.get(0);
    assertEqual(10, actual2);
    }

    @Test
    void testInt16ArraySubarrayTestOne002() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray();
    int actual1 = sub.length();
    int expected1 = arr.length();
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne003() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray();
    Integer actual1 = sub.get((int) 0);
    Integer expected1 = arr.get((int) 0);
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne004() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(1);
    Integer actual1 = sub.get((int) 0);
    Integer expected1 = arr.get((int) 1);
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne005() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(1);
    int actual1 = sub.length();
    int expected1 = arr.length() - 1;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne006() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(0, 2);
    int actual1 = sub.length();
    assertEqual(2, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne007() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(0);
    Integer actual1 = sub.get((int) 0);
    Integer expected1 = arr.get((int) 0);
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne008() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(0);
    int actual1 = sub.length();
    int expected1 = arr.length();
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne009() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(1);
    int actual1 = sub.length();
    assertEqual(4, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne010() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(4);
    Integer actual1 = sub.get((int) 0);
    Integer expected1 = arr.get((int) 4);
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne011() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(4);
    int actual1 = sub.length();
    assertEqual(1, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne012() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(5);
    int actual1 = sub.length();
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne013() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(2147483647);
    int actual1 = sub.length();
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne014() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(-1);
    Integer actual1 = sub.get((int) 0);
    Integer expected1 = arr.get((int) 4);
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne015() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(-1);
    int actual1 = sub.length();
    assertEqual(1, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne016() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(-2);
    Integer actual1 = sub.get((int) 0);
    Integer expected1 = arr.get((int) 3);
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne017() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(-2);
    int actual1 = sub.length();
    assertEqual(2, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne018() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(-5);
    int actual1 = sub.length();
    int expected1 = arr.length();
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne019() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(-5);
    Integer actual1 = sub.get((int) 0);
    Integer expected1 = arr.get((int) 0);
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne020() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(-6);
    int actual1 = sub.length();
    int expected1 = arr.length();
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne021() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(-6);
    Integer actual1 = sub.get((int) 0);
    Integer expected1 = arr.get((int) 0);
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne022() {
    Int16Array arr = new Int16Array();
    Int16Array sub = arr.subarray(-1);
    int actual1 = sub.length();
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne023() {
    Int16Array arr = new Int16Array();
    Int16Array sub = arr.subarray(1);
    int actual1 = sub.length();
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne024() {
    Int16Array arr = new Int16Array();
    Int16Array sub = arr.subarray(0);
    int actual1 = sub.length();
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne025() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(0, 0);
    int actual1 = sub.length();
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne026() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(0, 1);
    Integer actual1 = sub.get((int) 0);
    Integer expected1 = arr.get((int) 0);
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne027() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(0, 1);
    int actual1 = sub.length();
    assertEqual(1, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne028() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(0, 5);
    Integer actual1 = sub.get((int) 4);
    Integer expected1 = arr.get((int) 4);
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne029() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(0, 6);
    int actual1 = sub.length();
    int expected1 = arr.length();
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne030() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(1, 1);
    int actual1 = sub.length();
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne031() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(2, 1);
    int actual1 = sub.length();
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne032() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(0, -1);
    Integer actual1 = sub.get((int) (sub.length() - 1));
    Integer expected1 = arr.get((int) (arr.length() - 2));
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne033() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(0, -1);
    int actual1 = sub.length();
    int expected1 = arr.length() - 1;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne034() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(0, -2);
    int actual1 = sub.length();
    int expected1 = arr.length() - 2;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne035() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(0, -5);
    int actual1 = sub.length();
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne036() {
    Int16Array arr = new Int16Array();
    Int16Array sub = arr.subarray(0, 1);
    int actual1 = sub.length();
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne037() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(0, 1);
    int lenBefore = sub.length();
    try {
    sub.get((int) 1);
    fail();
    } catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());
    }
    int actual1 = sub.length();
    int expected1 = lenBefore;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne038() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(-2, -1);
    Integer actual1 = sub.get((int) 0);
    Integer expected1 = arr.get((int) 3);
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne039() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(-2, -1);
    int actual1 = sub.length();
    assertEqual(1, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne040() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(1, 4);
    int actual1 = sub.length();
    assertEqual(3, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne041() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(1, 4);
    Integer actual1 = sub.get((int) 0);
    assertEqual(20, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne042() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(1, 4);
    sub.set((int) 0, 99);
    Integer actual1 = arr.get((int) 1);
    assertEqual(99, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne043() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(1, 4);
    arr.set((int) 2, 88);
    Integer actual1 = sub.get((int) 1);
    assertEqual(88, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne044() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(0, 3);
    sub.set((int) 0, 11);
    sub.set((int) 1, 22);
    sub.set((int) 2, 33);
    Integer actual1 = arr.get((int) 0);
    assertEqual(11, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne045() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(1, 4);
    int actual1 = sub.byteOffset();
    assertEqual(2, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne046() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(0, 3);
    int actual1 = sub.byteOffset();
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne047() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(1, 4);
    int actual1 = sub.byteLength();
    assertEqual(6, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne048() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(1, 3);
    arr.set((int) 3, 99);
    Integer actual1 = sub.get((int) 1);
    assertEqual(30, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne049() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array subA = arr.subarray(0, 3);
    Int16Array subB = arr.subarray(2, 5);
    subA.set((int) 2, 77);
    Integer actual1 = subB.get((int) 0);
    assertEqual(77, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne050() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array subA = arr.subarray(0, 2);
    Int16Array subB = arr.subarray(3, 5);
    subA.set((int) 0, 99);
    Integer actual1 = subB.get((int) 0);
    assertEqual(40, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne051() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray();
    sub.set((int) 0, 55);
    Integer actual1 = arr.get((int) 0);
    assertEqual(55, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne052() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(1, 3);
    boolean actual1 = sub.buffer() == arr.buffer();
    assertTrue(actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne053() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(0, 3);
    int actual1 = sub.length();
    assertEqual(3, actual1);
    Integer actual2 = sub.get(0);
    assertEqual(10, actual2);
    }

    @Test
    void testInt16ArraySubarrayTestOne054() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(2, 2);
    boolean actual1 = sub.buffer() == arr.buffer();
    assertTrue(actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne055() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(0, 5);
    sub.set((int) 4, 999);
    Integer actual1 = arr.get((int) 4);
    assertEqual(999, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne056() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub1 = arr.subarray(1, 5);
    Int16Array sub2 = sub1.subarray(1, 3);
    sub2.set((int) 0, 555);
    Integer actual1 = arr.get((int) 2);
    assertEqual(555, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne057() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub1 = arr.subarray(1, 5);
    Int16Array sub2 = sub1.subarray(1, 3);
    int actual1 = sub2.byteOffset();
    assertEqual(4, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne058() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(-3, -1);
    sub.set((int) 0, 777);
    Integer actual1 = arr.get((int) 2);
    assertEqual(777, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestOne059() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = arr.subarray(-3);
    int actual1 = sub.byteOffset();
    assertEqual(4, actual1);
    }
}
