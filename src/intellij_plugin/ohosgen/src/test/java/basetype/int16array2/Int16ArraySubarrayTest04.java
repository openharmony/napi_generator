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

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.jupiter.api.Test;

/**
 * Int16ArraySubarrayTest04 —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Int16ArraySubarrayTest04 extends BasTest {

    @Test
    void testInt16ArraySubarrayTestFour001() {
    Int16Array arr = Int16Array.of(0, 0, 0, 0);
    Int16Array ret = arr.subarray(1, 3);
    ret.set((int) 0, 32769);
    Integer actual1 = arr.get((int) 1);
    assertEqual(-32767, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestFour002() {
    Int16Array arr = Int16Array.of(0, 0, 0, 0);
    Int16Array ret = arr.subarray(1, 3);
    ret.set((int) 0, -32769);
    Integer actual1 = arr.get((int) 1);
    assertEqual(32767, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestFour003() {
    Int16Array arr = Int16Array.of(0, 0, 0, 0);
    Int16Array ret = arr.subarray(0, 2);
    ret.set((int) 0, 65536);
    Integer actual1 = arr.get((int) 0);
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestFour004() {
    Int16Array arr = Int16Array.of(0, 0, 0, 0);
    Int16Array ret = arr.subarray(1, 3);
    ret.set((int) 0, 3.7);
    Integer actual1 = arr.get((int) 1);
    assertEqual(3, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestFour005() {
    Int16Array arr = Int16Array.of(0, 0, 0, 0);
    Int16Array ret = arr.subarray(2, 4);
    ret.set((int) 0, -3.7);
    Integer actual1 = arr.get((int) 2);
    assertEqual(-3, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestFour006() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4);
    Int16Array ret = arr.subarray(0, 2);
    int nullVal = 0;
    ret.set((int) 0, nullVal);
    Integer actual1 = arr.get((int) 0);
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestFour007() {
    Int16Array arr = Int16Array.of(0, 0, 0);
    Int16Array ret = arr.subarray(0, 2);
    ret.set((int) 0, 32769);
    Integer actual1 = ret.get((int) 0);
    assertEqual(-32767, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestFour008() {
    Int16Array arr = Int16Array.of(0, 0, 0);
    Int16Array ret = arr.subarray(1, 3);
    ret.set((int) 0, -32769);
    Integer actual1 = ret.get((int) 0);
    assertEqual(32767, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestFour009() {
    Int16Array arr = Int16Array.of(0, 0, 0);
    Int16Array ret = arr.subarray(0, 2);
    ret.set((int) 0, 3.7);
    Integer actual1 = ret.get((int) 0);
    assertEqual(3, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestFour010() {
    Int16Array arr = Int16Array.of(0, 0, 0);
    Int16Array ret = arr.subarray(1, 2);
    ret.set((int) 0, 2147483647);
    Integer actual1 = arr.get((int) 1);
    assertEqual(-1, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestFour011() {
    Int16Array arr = Int16Array.of(0, 0, 0);
    Int16Array ret = arr.subarray(1, 2);
    ret.set((int) 0, 32768);
    Integer actual1 = ret.get((int) 0);
    Integer expected1 = arr.get((int) 1);
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestFour012() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array ret = arr.subarray(1, 4);
    arr.set((int) 2, 77);
    Integer actual1 = ret.get((int) 1);
    assertEqual(77, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestFour013() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40);
    Int16Array ret = arr.subarray(2, 4);
    arr.set((int) 1, 99);
    Integer actual1 = ret.get((int) 0);
    assertEqual(30, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestFour014() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40);
    Int16Array ret = arr.subarray(0, 2);
    arr.set((int) 2, 99);
    Integer actual1 = ret.get((int) 1);
    assertEqual(20, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestFour015() {
    Int16Array arr = Int16Array.of(0, 0, 0);
    Int16Array ret = arr.subarray(0, 2);
    arr.set((int) 0, 32769);
    Integer actual1 = ret.get((int) 0);
    assertEqual(-32767, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestFour016() {
    Int16Array arr = Int16Array.of(0, 0, 0);
    Int16Array ret = arr.subarray(1, 2);
    arr.set((int) 1, 3.7);
    Integer actual1 = ret.get((int) 0);
    assertEqual(3, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestFour017() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40);
    Int16Array ret = arr.subarray(1, 3);
    arr.fill(99);
    Integer actual1 = ret.get((int) 0);
    assertEqual(99, actual1);
    Integer actual2 = ret.get((int) 1);
    assertEqual(99, actual2);
    }

    @Test
    void testInt16ArraySubarrayTestFour018() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array ret = arr.subarray(2, 5);
    arr.fill(99, 0, 3);
    Integer actual1 = ret.get((int) 0);
    assertEqual(99, actual1);
    Integer actual2 = ret.get((int) 1);
    assertEqual(40, actual2);
    }

    @Test
    void testInt16ArraySubarrayTestFour019() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40);
    Int16Array ret = arr.subarray(1, 3);
    arr.reverse();
    Integer actual1 = ret.get((int) 0);
    assertEqual(30, actual1);
    Integer actual2 = ret.get((int) 1);
    assertEqual(20, actual2);
    }

    @Test
    void testInt16ArraySubarrayTestFour020() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40);
    Int16Array ret = arr.subarray(2, 4);
    arr.copyWithin(0, 2);
    Integer actual1 = ret.get((int) 0);
    assertEqual(30, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestFour021() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    Int16Array ret = arr.subarray(0, 2);
    int nullVal = 0;
    arr.set((int) 0, nullVal);
    Integer actual1 = ret.get((int) 0);
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestFour022() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40);
    Int16Array ret = arr.subarray(0, 3);
    arr.set((int) 0, 55);
    Integer actual1 = ret.get((int) 0);
    assertEqual(55, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestFour023() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40);
    Int16Array ret = arr.subarray(2, 4);
    ret.set((int) 0, 99);
    Integer actual1 = arr.get((int) 2);
    assertEqual(99, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestFour024() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array ret = arr.subarray(1, 3);
    ret.fill(77);
    Integer actual1 = arr.get((int) 0);
    assertEqual(10, actual1);
    Integer actual2 = arr.get((int) 1);
    assertEqual(77, actual2);
    Integer actual3 = arr.get((int) 2);
    assertEqual(77, actual3);
    Integer actual4 = arr.get((int) 3);
    assertEqual(40, actual4);
    }

    @Test
    void testInt16ArraySubarrayTestFour025() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40);
    Int16Array ret = arr.subarray(1, 3);
    ret.reverse();
    Integer actual1 = arr.get((int) 1);
    assertEqual(30, actual1);
    Integer actual2 = arr.get((int) 2);
    assertEqual(20, actual2);
    }

    @Test
    void testInt16ArraySubarrayTestFour026() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40);
    Int16Array ret = arr.subarray(1, 4);
    ret.copyWithin(0, 1);
    Integer actual1 = arr.get((int) 1);
    assertEqual(30, actual1);
    Integer actual2 = arr.get((int) 2);
    assertEqual(40, actual2);
    }

    @Test
    void testInt16ArraySubarrayTestFour027() {
    Int16Array arr = Int16Array.of(0, 0, 0);
    Int16Array ret = arr.subarray(2, 3);
    ret.set((int) 0, 3.7);
    Integer actual1 = arr.get((int) 2);
    assertEqual(3, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestFour028() {
    Int16Array arr = Int16Array.of(0, 0, 0);
    Int16Array ret = arr.subarray(0, 1);
    ret.set((int) 0, -32769);
    Integer actual1 = arr.get((int) 0);
    assertEqual(32767, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestFour029() {
    Int16Array arr = Int16Array.of(50, 10, 30, 20, 40);
    Int16Array ret = arr.subarray(1, 4);
    ret.sort();
    Integer actual1 = arr.get((int) 1);
    assertEqual(10, actual1);
    Integer actual2 = arr.get((int) 2);
    assertEqual(20, actual2);
    Integer actual3 = arr.get((int) 3);
    assertEqual(30, actual3);
    }

    @Test
    void testInt16ArraySubarrayTestFour030() {
    Int16Array arr = Int16Array.of(50, 30, 10, 20, 40);
    Int16Array ret = arr.subarray(1, 4);
    ret.sort();
    Integer actual1 = arr.get((int) 0);
    assertEqual(50, actual1);
    Integer actual2 = arr.get((int) 4);
    assertEqual(40, actual2);
    }

    @Test
    void testInt16ArraySubarrayTestFour031() {
    Int16Array arr = Int16Array.of(0, 0, 0);
    Int16Array ret = arr.subarray(0, 3);
    ret.set((int) 0, 11);
    ret.set((int) 1, 22);
    ret.set((int) 2, 33);
    Integer actual1 = arr.get((int) 0);
    assertEqual(11, actual1);
    Integer actual2 = arr.get((int) 1);
    assertEqual(22, actual2);
    Integer actual3 = arr.get((int) 2);
    assertEqual(33, actual3);
    }

    @Test
    void testInt16ArraySubarrayTestFour032() {
    Int16Array arr = Int16Array.of(0, 0, 0, 0);
    Int16Array sub1 = arr.subarray(0, 2);
    Int16Array sub2 = arr.subarray(2, 4);
    sub1.set((int) 0, 11);
    sub2.set((int) 0, 22);
    Integer actual1 = sub1.get((int) 0);
    assertEqual(11, actual1);
    Integer actual2 = sub2.get((int) 0);
    assertEqual(22, actual2);
    Integer actual3 = arr.get((int) 0);
    assertEqual(11, actual3);
    Integer actual4 = arr.get((int) 2);
    assertEqual(22, actual4);
    }

    @Test
    void testInt16ArraySubarrayTestFour033() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40);
    Int16Array sub1 = arr.subarray(0, 2);
    Int16Array sub2 = arr.subarray(2, 4);
    sub1.set((int) 1, 99);
    Integer actual1 = sub2.get((int) 0);
    assertEqual(30, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestFour034() {
    Int16Array arr = Int16Array.of(0, 0, 0, 0, 0, 0);
    Int16Array sub1 = arr.subarray(0, 2);
    Int16Array sub2 = arr.subarray(2, 4);
    Int16Array sub3 = arr.subarray(4, 6);
    sub1.set((int) 0, 11);
    sub2.set((int) 0, 22);
    sub3.set((int) 0, 33);
    Integer actual1 = sub1.get((int) 0);
    assertEqual(11, actual1);
    Integer actual2 = sub2.get((int) 0);
    assertEqual(22, actual2);
    Integer actual3 = sub3.get((int) 0);
    assertEqual(33, actual3);
    }

    @Test
    void testInt16ArraySubarrayTestFour035() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40);
    Int16Array sub1 = arr.subarray(0, 3);
    Int16Array sub2 = arr.subarray(1, 4);
    sub1.set((int) 1, 99);
    Integer actual1 = sub2.get((int) 0);
    assertEqual(99, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestFour036() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40);
    Int16Array sub1 = arr.subarray(0, 3);
    Int16Array sub2 = arr.subarray(1, 4);
    arr.set((int) 1, 66);
    Integer actual1 = sub1.get((int) 1);
    assertEqual(66, actual1);
    Integer actual2 = sub2.get((int) 0);
    assertEqual(66, actual2);
    }

    @Test
    void testInt16ArraySubarrayTestFour037() {
    Int16Array arr = Int16Array.of(0, 0, 0, 0, 0);
    Int16Array sub1 = arr.subarray(0, 4);
    Int16Array sub2 = arr.subarray(2, 5);
    sub1.fill(99);
    sub2.fill(88);
    Integer actual1 = arr.get((int) 0);
    assertEqual(99, actual1);
    Integer actual2 = arr.get((int) 1);
    assertEqual(99, actual2);
    Integer actual3 = arr.get((int) 2);
    assertEqual(88, actual3);
    Integer actual4 = arr.get((int) 3);
    assertEqual(88, actual4);
    Integer actual5 = arr.get((int) 4);
    assertEqual(88, actual5);
    }

    @Test
    void testInt16ArraySubarrayTestFour038() {
    Int16Array arr = Int16Array.of(0, 0, 0);
    Int16Array sub1 = arr.subarray(1, 2);
    Int16Array sub2 = arr.subarray(1, 2);
    sub1.set((int) 0, 55);
    sub2.set((int) 0, 77);
    Integer actual1 = arr.get((int) 1);
    assertEqual(77, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestFour039() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub1 = arr.subarray(0, 4);
    Int16Array sub2 = sub1.subarray(1, 3);
    sub2.set((int) 0, 99);
    Integer actual1 = arr.get((int) 1);
    assertEqual(99, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestFour040() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub1 = arr.subarray(1, 5);
    Int16Array sub2 = sub1.subarray(1, 3);
    arr.set((int) 2, 88);
    Integer actual1 = sub2.get((int) 0);
    assertEqual(88, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestFour041() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40);
    Int16Array sub1 = arr.subarray(1, 3);
    Int16Array sub2 = arr.subarray(1, 3);
    boolean actual1 = sub1.buffer() == sub2.buffer();
    assertTrue(actual1);
    int actual2 = sub1.byteOffset();
    int expected2 = sub2.byteOffset();
    assertEqual(expected2, actual2);
    }

    @Test
    void testInt16ArraySubarrayTestFour042() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40);
    Int16Array sub1 = arr.subarray(1, 3);
    Int16Array sub2 = arr.subarray(1, 3);
    sub1.set((int) 0, 99);
    Integer actual1 = sub2.get((int) 0);
    assertEqual(99, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestFour043() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40);
    Int16Array sub1 = arr.subarray(0, 2);
    Int16Array sub2 = arr.subarray(2, 4);
    arr.fill(99);
    Integer actual1 = sub1.get((int) 0);
    assertEqual(99, actual1);
    Integer actual2 = sub2.get((int) 0);
    assertEqual(99, actual2);
    }

    @Test
    void testInt16ArraySubarrayTestFour044() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768);
    int blBefore = arr.byteLength();
    arr.subarray(0, 2);
    int actual1 = arr.byteLength();
    int expected1 = blBefore;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestFour045() {
    Int16Array arr = Int16Array.of(32767, 0, -1);
    ArrayBuffer bufBefore = arr.buffer();
    arr.subarray(1, 2);
    boolean actual1 = arr.buffer() == bufBefore;
    assertTrue(actual1);
    }

    @Test
    void testInt16ArraySubarrayTestFour046() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768);
    Int16Array ret = arr.subarray(1, 3);
    Integer actual1 = ret.get((int) 0);
    assertEqual(0, actual1);
    Integer actual2 = ret.get((int) 1);
    assertEqual(-1, actual2);
    }

    @Test
    void testInt16ArraySubarrayTestFour047() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40);
    Int16Array ret = arr.subarray(1, 3);
    ret.fill(99);
    Integer actual1 = arr.get((int) 0);
    assertEqual(10, actual1);
    Integer actual2 = arr.get((int) 1);
    assertEqual(99, actual2);
    Integer actual3 = arr.get((int) 2);
    assertEqual(99, actual3);
    Integer actual4 = arr.get((int) 3);
    assertEqual(40, actual4);
    }

    @Test
    void testInt16ArraySubarrayTestFour048() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40);
    Int16Array ret = arr.subarray(1, 3);
    arr.set((int) 0, 99);
    arr.set((int) 3, 88);
    Integer actual1 = ret.get((int) 0);
    assertEqual(20, actual1);
    Integer actual2 = ret.get((int) 1);
    assertEqual(30, actual2);
    }

    @Test
    void testInt16ArraySubarrayTestFour049() {
    Int16Array arr = Int16Array.of(32767, 0, -1);
    Int16Array ret = arr.subarray(2, 2);
    int actual1 = ret.length();
    assertEqual(0, actual1);
    boolean actual2 = ret.buffer() == arr.buffer();
    assertTrue(actual2);
    }

    @Test
    void testInt16ArraySubarrayTestFour050() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40);
    Int16Array sub1 = arr.subarray(0, 1);
    Int16Array sub2 = arr.subarray(1, 3);
    Int16Array sub3 = arr.subarray(3, 4);
    int actual1 = sub1.length();
    assertEqual(1, actual1);
    int actual2 = sub2.length();
    assertEqual(2, actual2);
    int actual3 = sub3.length();
    assertEqual(1, actual3);
    int actual4 = sub1.byteOffset();
    assertEqual(0, actual4);
    int actual5 = sub2.byteOffset();
    assertEqual(2, actual5);
    int actual6 = sub3.byteOffset();
    assertEqual(6, actual6);
    }

    @Test
    void testInt16ArraySubarrayTestFour051() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768);
    List<Integer> copy = java.util.Arrays.asList(
        arr.get((int) 0), arr.get((int) 1), arr.get((int) 2), arr.get((int) 3)
    );
    arr.subarray(1, 3);
    Integer actual1 = arr.get((int) 0);
    int expected1 = copy.get(0);
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get((int) 1);
    int expected2 = copy.get(1);
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get((int) 2);
    int expected3 = copy.get(2);
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get((int) 3);
    int expected4 = copy.get(3);
    assertEqual(expected4, actual4);
    }

    @Test
    void testInt16ArraySubarrayTestFour052() {
    Int16Array arr = Int16Array.of(32767, 0, -1);
    int bpeBefore = arr.BYTES_PER_ELEMENT;
    arr.subarray(0, 1);
    int actual1 = arr.BYTES_PER_ELEMENT;
    int expected1 = bpeBefore;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestFour053() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768);
    ArrayBuffer bufBefore = arr.buffer();
    int offBefore = arr.byteOffset();
    arr.subarray(-3, -1);
    int actual1 = arr.length();
    assertEqual(4, actual1);
    int actual2 = arr.byteOffset();
    int expected2 = offBefore;
    assertEqual(expected2, actual2);
    boolean actual3 = arr.buffer() == bufBefore;
    assertTrue(actual3);
    }

    @Test
    void testInt16ArraySubarrayTestFour054() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub1 = arr.subarray(0, 4);
    Int16Array sub2 = sub1.subarray(1, 3);
    int actual1 = sub2.length();
    assertEqual(2, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestFour055() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50, 60);
    Int16Array sub1 = arr.subarray(1, 6);
    Int16Array sub2 = sub1.subarray(1, 5);
    Int16Array sub3 = sub2.subarray(1, 3);
    int actual1 = sub3.byteOffset();
    assertEqual(6, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestFour056() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub1 = arr.subarray(0, 4);
    Int16Array sub2 = sub1.subarray(1, 3);
    Int16Array sub3 = sub2.subarray(0, 1);
    boolean actual1 = sub3.buffer() == arr.buffer();
    assertTrue(actual1);
    }

    @Test
    void testInt16ArraySubarrayTestFour057() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub1 = arr.subarray(1, 5);
    Int16Array sub2 = sub1.subarray(-2);
    int actual1 = sub2.byteOffset();
    assertEqual(6, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestFour058() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub1 = arr.subarray(1, 5);
    Int16Array sub2 = sub1.subarray(1, 3);
    sub1.set((int) 1, 77);
    Integer actual1 = sub2.get((int) 0);
    assertEqual(77, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestFour059() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub1 = arr.subarray(0, 4);
    Int16Array sub2 = sub1.subarray(1, 3);
    sub2.set((int) 1, 66);
    Integer actual1 = sub1.get((int) 2);
    assertEqual(66, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestFour060() {
    Int16Array arr = Int16Array.of(32767, 0, -1);
    Int16Array sub1 = arr.subarray(1, 1);
    Int16Array sub2 = sub1.subarray(0, 0);
    int actual1 = sub1.length();
    assertEqual(0, actual1);
    int actual2 = sub2.length();
    assertEqual(0, actual2);
    }

    @Test
    void testInt16ArraySubarrayTestFour061() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array ret = arr.subarray(0, 5).fill(99).subarray(1, 4);
    int actual1 = ret.length();
    assertEqual(3, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestFour062() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40);
    Int16Array ret = arr.fill(0).subarray(0, 3).reverse();
    ret.set((int) 0, 1);
    ret.set((int) 1, 2);
    ret.set((int) 2, 3);
    ret.reverse();
    Integer actual1 = ret.get((int) 0);
    assertEqual(3, actual1);
    Integer actual2 = ret.get((int) 2);
    assertEqual(1, actual2);
    }

    @Test
    void testInt16ArraySubarrayTestFour063() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50, 60);
    Int16Array ret = arr.subarray(0, 6).subarray(1, 5).subarray(1, 3);
    arr.set((int) 2, 99);
    Integer actual1 = ret.get((int) 0);
    assertEqual(99, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestFour064() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array ret = arr.subarray(0, 4);
    ret.copyWithin(0, 2);
    Integer actual1 = arr.get((int) 0);
    assertEqual(30, actual1);
    Integer actual2 = arr.get((int) 1);
    assertEqual(40, actual2);
    }

    @Test
    void testInt16ArraySubarrayTestFour065() {
    Int16Array arr = Int16Array.of(30, 10, 40, 20, 50);
    Int16Array ret = arr.fill(0, 0, 4).subarray(0, 4);
    ret.set((int) 0, 40);
    ret.set((int) 1, 10);
    ret.set((int) 2, 30);
    ret.set((int) 3, 20);
    ret.sort();
    Integer actual1 = arr.get((int) 0);
    assertEqual(10, actual1);
    Integer actual2 = arr.get((int) 1);
    assertEqual(20, actual2);
    Integer actual3 = arr.get((int) 2);
    assertEqual(30, actual3);
    Integer actual4 = arr.get((int) 3);
    assertEqual(40, actual4);
    }

    @Test
    void testInt16ArraySubarrayTestFour066() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array ret = arr.subarray(0, 5).reverse().subarray(1, 4);
    int actual1 = ret.length();
    assertEqual(3, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestFour067() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    arr.subarray(1, 4).fill(99).reverse();
    Integer actual1 = arr.get((int) 0);
    assertEqual(10, actual1);
    Integer actual2 = arr.get((int) 4);
    assertEqual(50, actual2);
    }

    @Test
    void testInt16ArraySubarrayTestFour068() {
    Int16Array arr = Int16Array.of(0, 0, 0);
    Int16Array ret = arr.subarray(1, 2);
    arr.set((int) 1, 11);
    ret.set((int) 0, 22);
    arr.set((int) 1, 33);
    Integer actual1 = ret.get((int) 0);
    assertEqual(33, actual1);
    }

    @Test
    void testInt16ArraySubarrayTestFour069() {
    Int16Array arr = Int16Array.of(0, 0, 0, 0);
    Int16Array ret = arr.subarray(1, 4);
    ret.set((int) 0, 11);
    ret.set((int) 1, 22);
    ret.set((int) 2, 33);
    Integer actual1 = arr.get((int) 1);
    assertEqual(11, actual1);
    Integer actual2 = arr.get((int) 2);
    assertEqual(22, actual2);
    Integer actual3 = arr.get((int) 3);
    assertEqual(33, actual3);
    }

    @Test
    void testInt16ArraySubarrayTestFour070() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    Int16Array ret = arr.subarray(1, 1);
    int actual1 = ret.length();
    assertEqual(0, actual1);
    Integer actual2 = arr.get((int) 1);
    assertEqual(20, actual2);
    }
}
