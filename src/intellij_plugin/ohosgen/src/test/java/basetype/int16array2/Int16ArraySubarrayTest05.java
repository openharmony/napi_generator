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
 * Int16ArraySubarrayTest05 —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Int16ArraySubarrayTest05 extends BasTest {

    @Test
    void testInt16ArraySubarrayTestFive001() {
    Int16Array src = new Int16Array();
    Int16Array sub = src.subarray();
    int actual1 = sub.length();
    assertEqual(0, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive002() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Int16Array src = new Int16Array(buf);
    src.set(0, (int) 77);
    Int16Array sub = src.subarray(0);
    Integer actual1 = sub.get(0);
    assertEqual(77, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive003() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int16Array src = new Int16Array(buf);
    src.set(0, (int) 33);
    src.set(1, (int) 44);
    Int16Array sub = src.subarray(1);
    int actual1 = sub.length();
    assertEqual(1, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive004() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int16Array src = new Int16Array(buf);
    src.set(0, (int) 111);
    src.set(1, (int) 222);
    Int16Array sub = src.subarray(0, 2);
    Integer actual1 = sub.get(0);
    assertEqual(111, actual1);
    Integer actual2 = sub.get(1);
    assertEqual(222, actual2);}

    @Test
    void testInt16ArraySubarrayTestFive005() {
    Int16Array src = Int16Array.of((int) 0x7fff, (int) 0, -(int) 1);
    Int16Array sub = src.subarray();
    Integer actual1 = sub.get(0);
    assertEqual(32767, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive006() {
    Int16Array src = Int16Array.of((int) 0x7fff, (int) 100, (int) 200, (int) 300);
    Int16Array sub = src.subarray(1, 3);
    Integer actual1 = sub.get(0);
    assertEqual(100, actual1);
    int actual2 = sub.length();
    assertEqual(2, actual2);}

    @Test
    void testInt16ArraySubarrayTestFive007() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50);
    int begin = arr.length() - 1;
    Int16Array sub = arr.subarray(begin);
    Integer actual1 = sub.get(0);
    Integer expected1 = arr.get(4);
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive008() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50);
    int begin = arr.length() - 1;
    Int16Array sub = arr.subarray(begin);
    int actual1 = sub.length();
    assertEqual(1, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive009() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50);
    int begin = arr.length() - 2;
    Int16Array sub = arr.subarray(begin);
    int actual1 = sub.length();
    assertEqual(2, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive010() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50);
    int begin = arr.length();
    Int16Array sub = arr.subarray(begin);
    int actual1 = sub.length();
    assertEqual(0, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive011() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50);
    int begin = arr.length() + 1;
    Int16Array sub = arr.subarray(begin);
    int actual1 = sub.length();
    assertEqual(0, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive012() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50);
    int begin = arr.length() * 2;
    Int16Array sub = arr.subarray(begin);
    int actual1 = sub.length();
    assertEqual(0, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive013() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50);
    int begin = arr.byteLength() / 2;
    Int16Array sub = arr.subarray(begin);
    int actual1 = sub.length();
    assertEqual(0, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive014() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50);
    int begin = arr.byteLength() / arr.BYTES_PER_ELEMENT;
    Int16Array sub = arr.subarray(begin);
    int actual1 = sub.length();
    assertEqual(0, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive015() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50);
    int begin = 0 - 1;
    Int16Array sub = arr.subarray(begin);
    Integer actual1 = sub.get(0);
    Integer expected1 = arr.get(4);
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive016() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50);
    int begin = 0 - 2;
    Int16Array sub = arr.subarray(begin);
    int actual1 = sub.length();
    assertEqual(2, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive017() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50);
    int begin = -(arr.length() - 1);
    Int16Array sub = arr.subarray(begin);
    int actual1 = sub.length();
    int expected1 = arr.length() - 1;
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive018() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50);
    int begin = -arr.length();
    Int16Array sub = arr.subarray(begin);
    int actual1 = sub.length();
    int expected1 = arr.length();
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive019() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50);
    int begin = 1 + 1;
    Int16Array sub = arr.subarray(begin);
    Integer actual1 = sub.get(0);
    Integer expected1 = arr.get(2);
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive020() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50);
    int begin = 5 - 2;
    Int16Array sub = arr.subarray(begin);
    Integer actual1 = sub.get(0);
    Integer expected1 = arr.get(3);
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive021() {
    Int16Array arr = Int16Array.of((int) 11, (int) 22, (int) 33, (int) 44, (int) 55);
    int begin = arr.BYTES_PER_ELEMENT;
    Int16Array sub = arr.subarray(begin);
    Integer actual1 = sub.get(0);
    Integer expected1 = arr.get(2);
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive022() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50);
    int begin = arr.byteLength() / 2 - 1;
    Int16Array sub = arr.subarray(begin);
    int actual1 = sub.length();
    assertEqual(1, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive023() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50);
    int begin = 0 * arr.length();
    Int16Array sub = arr.subarray(begin);
    Integer actual1 = sub.get(0);
    Integer expected1 = arr.get(0);
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive024() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50);
    int begin = (2 + 3) * 2 - 9;
    Int16Array sub = arr.subarray(begin);
    Integer actual1 = sub.get(0);
    Integer expected1 = arr.get(1);
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive025() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50);
    int end = arr.length() - 1;
    Int16Array sub = arr.subarray(0, end);
    int actual1 = sub.length();
    int expected1 = arr.length() - 1;
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive026() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50);
    int end = arr.length() - 2;
    Int16Array sub = arr.subarray(0, end);
    int actual1 = sub.length();
    int expected1 = arr.length() - 2;
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive027() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50);
    int end = arr.length();
    Int16Array sub = arr.subarray(0, end);
    int actual1 = sub.length();
    int expected1 = arr.length();
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive028() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50);
    int end = 0 - 1;
    Int16Array sub = arr.subarray(0, end);
    int actual1 = sub.length();
    int expected1 = arr.length() - 1;
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive029() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50);
    int end = 0 - 2;
    Int16Array sub = arr.subarray(0, end);
    int actual1 = sub.length();
    int expected1 = arr.length() - 2;
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive030() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50);
    int end = -arr.length();
    Int16Array sub = arr.subarray(0, end);
    int actual1 = sub.length();
    assertEqual(0, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive031() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50);
    int end = -(arr.length() + 1);
    Int16Array sub = arr.subarray(0, end);
    int actual1 = sub.length();
    assertEqual(0, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive032() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50);
    int end = -(arr.length() * 2);
    Int16Array sub = arr.subarray(0, end);
    int actual1 = sub.length();
    assertEqual(0, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive033() {
    Int16Array arr = Int16Array.of((int) 11, (int) 22, (int) 33, (int) 44, (int) 55);
    int end = arr.BYTES_PER_ELEMENT;
    Int16Array sub = arr.subarray(0, end);
    int actual1 = sub.length();
    assertEqual(2, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive034() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50);
    int end = arr.byteLength() / 2 - 1;
    Int16Array sub = arr.subarray(0, end);
    int actual1 = sub.length();
    int expected1 = arr.length() - 1;
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive035() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50);
    int end = 1 + 2;
    Int16Array sub = arr.subarray(0, end);
    int actual1 = sub.length();
    assertEqual(3, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive036() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50);
    int end = 6 - 2;
    Int16Array sub = arr.subarray(0, end);
    int actual1 = sub.length();
    assertEqual(4, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive037() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50);
    int end = arr.length() - (arr.length() - 3);
    Int16Array sub = arr.subarray(0, end);
    int actual1 = sub.length();
    assertEqual(3, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive038() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50);
    int begin = arr.length() - 3;
    int end = arr.length() - 1;
    Int16Array sub = arr.subarray(begin, end);
    int actual1 = sub.length();
    assertEqual(2, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive039() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50);
    int begin = arr.length() - 3;
    int end = arr.length() - 1;
    Int16Array sub = arr.subarray(begin, end);
    Integer actual1 = sub.get(0);
    Integer expected1 = arr.get(2);
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive040() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50);
    int begin = -arr.length();
    int end = arr.length();
    Int16Array sub = arr.subarray(begin, end);
    int actual1 = sub.length();
    int expected1 = arr.length();
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive041() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50);
    int begin = arr.length();
    int end = arr.length() + 10;
    Int16Array sub = arr.subarray(begin, end);
    int actual1 = sub.length();
    assertEqual(0, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive042() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50);
    int begin = -(arr.length() + 5);
    int end = -(arr.length() + 1);
    Int16Array sub = arr.subarray(begin, end);
    int actual1 = sub.length();
    assertEqual(0, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive043() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50);
    int begin = arr.length() + 5;
    int end = -(arr.length() + 5);
    Int16Array sub = arr.subarray(begin, end);
    int actual1 = sub.length();
    assertEqual(0, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive044() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50);
    int begin = -(arr.length() + 5);
    int end = arr.length() + 5;
    Int16Array sub = arr.subarray(begin, end);
    int actual1 = sub.length();
    int expected1 = arr.length();
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive045() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50);
    int begin = 1 + 1;
    int end = 5 - 1;
    Int16Array sub = arr.subarray(begin, end);
    int actual1 = sub.length();
    assertEqual(2, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive046() {
    Int16Array arr = Int16Array.of((int) 11, (int) 22, (int) 33, (int) 44, (int) 55);
    int begin = arr.BYTES_PER_ELEMENT;
    int end = arr.byteLength() / arr.BYTES_PER_ELEMENT;
    Int16Array sub = arr.subarray(begin, end);
    int actual1 = sub.length();
    int expected1 = arr.length() - 2;
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive047() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50);
    int begin = 0 - 1;
    int end = 0 + arr.length() - 1;
    Int16Array sub = arr.subarray(begin, end);
    int actual1 = sub.length();
    assertEqual(0, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive048() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50);
    int begin = arr.length() / 2;
    int end = arr.length();
    Int16Array sub = arr.subarray(begin, end);
    Integer actual1 = sub.get(0);
    Integer expected1 = arr.get(2);
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive049() {
    Int16Array arr = Int16Array.of((int) 5, (int) 10, (int) 15, (int) 20, (int) 25, (int) 30, (int) 35);
    int begin = 3 * 1;
    int end = 3 * 2;
    Int16Array sub = arr.subarray(begin, end);
    int actual1 = sub.length();
    assertEqual(3, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive050() {
    Int16Array src = new Int16Array();
    Int16Array sub = src.subarray();
    int actual1 = sub.length();
    int expectedR1 = 0;
    assertEqual(expectedR1, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive051() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30);
    Int16Array sub = arr.subarray(999);
    int actual1 = sub.length();
    int expectedR1 = 0;
    assertEqual(expectedR1, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive052() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30);
    Int16Array sub = arr.subarray(-999);
    int actual1 = sub.length();
    int expectedR1 = 3;
    assertEqual(expectedR1, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive053() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30);
    Int16Array sub = arr.subarray(2, -10);
    int actual1 = sub.length();
    int expectedR1 = 0;
    assertEqual(expectedR1, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive054() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30);
    Int16Array sub = arr.subarray(2147483647, Integer.MIN_VALUE);
    int actual1 = sub.length();
    int expectedR1 = 0;
    assertEqual(expectedR1, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive055() {
    ArrayBuffer buf = new ArrayBuffer(0);
    Int16Array src = new Int16Array(buf);
    Int16Array sub = src.subarray();
    int actual1 = sub.length();
    int expectedR1 = 0;
    assertEqual(expectedR1, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive056() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Int16Array src = new Int16Array(buf);
    src.set(0, (int) 99);
    Int16Array sub = src.subarray(0, 1);
    boolean actual1 = sub.buffer() == src.buffer();
    assertTrue(actual1);}

    @Test
    void testInt16ArraySubarrayTestFive057() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Int16Array src = new Int16Array(buf);
    src.set(0, (int) 10);
    Int16Array sub = src.subarray(0, 1);
    sub.set(0, (int) 88);
    Integer actual1 = src.get(0);
    assertEqual(88, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive058() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int16Array src = new Int16Array(buf);
    src.set(0, (int) 11);
    src.set(1, (int) 22);
    Int16Array sub = src.subarray(1, 2);
    int actual1 = sub.byteOffset();
    assertEqual(2, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive059() {
    Int16Array src = Int16Array.of((int) 0x7fff, (int) 100, (int) 200, (int) 300);
    Int16Array sub = src.subarray(1, 3);
    sub.set(0, (int) 555);
    Integer actual1 = src.get(1);
    assertEqual(555, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive060() {
    Int16Array src = Int16Array.of((int) 0x7fff, (int) 100, (int) 200, (int) 300);
    Int16Array sub = src.subarray(1, 3);
    src.set(2, (int) 777);
    Integer actual1 = sub.get(1);
    assertEqual(777, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive061() {
    Int16Array src = Int16Array.of((int) 0x7fff, (int) 10, (int) 20, (int) 30, (int) 40);
    Int16Array subA = src.subarray(0, 3);
    Int16Array subB = src.subarray(1, 4);
    subA.set(1, (int) 999);
    Integer actual1 = subB.get(0);
    assertEqual(999, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive062() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int16Array src = new Int16Array(buf);
    src.set(0, (int) 1);
    src.set(1, (int) 2);
    src.set(2, (int) 3);
    Int16Array sub1 = src.subarray(0, 3);
    Int16Array sub2 = sub1.subarray(1, 3);
    Int16Array sub3 = sub2.subarray(0, 1);
    boolean actual1 = sub3.buffer() == buf;
    assertTrue(actual1);}

    @Test
    void testInt16ArraySubarrayTestFive063() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int16Array src = new Int16Array(buf);
    src.set(0, (int) 1);
    src.set(1, (int) 2);
    src.set(2, (int) 3);
    Int16Array sub1 = src.subarray(0, 3);
    Int16Array sub2 = sub1.subarray(1, 2);
    sub2.set(0, (int) 99);
    Integer actual1 = src.get(1);
    assertEqual(99, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive064() {
    Int16Array src = Int16Array.of((int) 0x7fff, (int) 0, -(int) 1, -(int) 32768);
    Int16Array sub = src.subarray(0, 2);
    int actual1 = sub.length();
    assertEqual(2, actual1);
    Integer actual2 = sub.get(0);
    assertEqual(0x7fff, actual2);}

    @Test
    void testInt16ArraySubarrayTestFive065() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int16Array src = new Int16Array(buf);
    src.set(0, (int) 11);
    src.set(1, (int) 22);
    src.set(2, (int) 33);
    src.set(3, (int) 44);
    Int16Array sub = src.subarray(-1);
    int actual1 = sub.byteOffset();
    assertEqual(6, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive066() {
    Int16Array src = Int16Array.of((int) 0x7fff, (int) 10, (int) 20, (int) 30);
    Int16Array sub = src.subarray(0, 4);
    sub.reverse();
    Integer actual1 = src.get(0);
    assertEqual(30, actual1);
    Integer actual2 = src.get(3);
    assertEqual(32767, actual2);}

    @Test
    void testInt16ArraySubarrayTestFive067() {
    Int16Array src = Int16Array.of((int) 0x7fff, (int) 10, (int) 20, (int) 30);
    Int16Array subA = src.subarray(0, 2);
    Int16Array subB = src.subarray(2, 4);
    subA.set(0, (int) 99);
    Integer actual1 = subB.get(0);
    assertEqual(20, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive068() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40);
    int begin = arr.length() - 2;
    Int16Array sub = arr.subarray(begin);
    int actual1 = sub.BYTES_PER_ELEMENT;
    assertEqual(2, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive069() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50);
    int begin = arr.length() - 4;
    int end = arr.length() - 1;
    Int16Array sub = arr.subarray(begin, end);
    int actual1 = sub.length();
    assertEqual(3, actual1);
    Integer actual2 = sub.get(0);
    assertEqual(20, actual2);}

    @Test
    void testInt16ArraySubarrayTestFive070() {
    Int16Array arr = Int16Array.of((int) 11, (int) 22, (int) 33, (int) 44);
    int begin = arr.length() - arr.length();
    Int16Array sub = arr.subarray(begin);
    int actual1 = sub.byteOffset();
    assertEqual(0, actual1);}

    @Test
    void testInt16ArraySubarrayTestFive071() {
    Int16Array arr = Int16Array.of((int) 10, (int) 20, (int) 30, (int) 40, (int) 50);
    int begin = 1;
    int end = arr.length() - 1;
    Int16Array sub = arr.subarray(begin, end);
    int actual1 = sub.length();
    assertEqual(3, actual1);}
}
