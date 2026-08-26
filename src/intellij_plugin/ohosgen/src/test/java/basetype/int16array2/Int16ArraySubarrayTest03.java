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
import basetype.common.RangeError;
import basetype.common.Int16Array;

import org.junit.jupiter.api.Test;

/**
 * Int16ArraySubarrayTest03 —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Int16ArraySubarrayTest03 extends BasTest {

    @Test
    void testInt16ArraySubarrayTestThree001() {
    Int16Array src = new Int16Array();
    Int16Array sub = src.subarray();
    int actual1 = sub.length();
    assertEqual(0, actual1);
    boolean actual2 = sub.buffer() == src.buffer();
    assertTrue(actual2);}

    @Test
    void testInt16ArraySubarrayTestThree002() {
    Int16Array src = new Int16Array();
    Int16Array sub = src.subarray(0);
    int actual1 = sub.length();
    assertEqual(0, actual1);
    int actual2 = sub.byteLength();
    assertEqual(0, actual2);}

    @Test
    void testInt16ArraySubarrayTestThree003() {
    Int16Array src = Int16Array.of(42);
    Int16Array sub = src.subarray(0);
    int actual1 = sub.length();
    assertEqual(1, actual1);
    Integer actual2 = sub.get((int) 0);
    assertEqual(42, actual2);}

    @Test
    void testInt16ArraySubarrayTestThree004() {
    Int16Array src = Int16Array.of(42);
    Int16Array sub = src.subarray(0, 1);
    int actual1 = sub.length();
    assertEqual(1, actual1);
    Integer actual2 = sub.get((int) 0);
    assertEqual(42, actual2);}

    @Test
    void testInt16ArraySubarrayTestThree005() {
    Int16Array src = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = src.subarray(32768);
    int actual1 = sub.length();
    assertEqual(0, actual1);}

    @Test
    void testInt16ArraySubarrayTestThree006() {
    Int16Array src = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = src.subarray(-32769);
    int actual1 = sub.length();
    int expected1 = src.length();
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArraySubarrayTestThree007() {
    Int16Array src = Int16Array.of(11, 22, 33, 44);
    Int16Array sub = src.subarray(32768);
    boolean actual1 = sub.buffer() == src.buffer();
    assertTrue(actual1);}

    @Test
    void testInt16ArraySubarrayTestThree008() {
    Int16Array src = Int16Array.of(99);
    Int16Array sub = src.subarray(Integer.MIN_VALUE);
    int actual1 = sub.length();
    assertEqual(1, actual1);}

    @Test
    void testInt16ArraySubarrayTestThree009() {
    Int16Array src = Int16Array.of(88);
    Int16Array sub = src.subarray(-32769);
    Integer actual1 = sub.get((int) 0);
    assertEqual(88, actual1);}

    @Test
    void testInt16ArraySubarrayTestThree010() {
    Int16Array src = Int16Array.of(12, 24, 36, 48, 60);
    Int16Array sub = src.subarray(0, 32768);
    int actual1 = sub.length();
    int expected1 = src.length();
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArraySubarrayTestThree011() {
    Int16Array src = Int16Array.of(12, 24, 36, 48, 60);
    Int16Array sub = src.subarray(0, -32769);
    int actual1 = sub.length();
    assertEqual(0, actual1);}

    @Test
    void testInt16ArraySubarrayTestThree012() {
    Int16Array src = Int16Array.of(55);
    Int16Array sub = src.subarray(0, 2147483647);
    int actual1 = sub.length();
    assertEqual(1, actual1);}

    @Test
    void testInt16ArraySubarrayTestThree013() {
    Int16Array src = Int16Array.of(55);
    Int16Array sub = src.subarray(0, Integer.MIN_VALUE);
    int actual1 = sub.length();
    assertEqual(0, actual1);}

    @Test
    void testInt16ArraySubarrayTestThree014() {
    Int16Array src = Int16Array.of(1, 2, 3, 4, 5);
    Int16Array sub = src.subarray(-100, -100);
    int actual1 = sub.length();
    assertEqual(0, actual1);}

    @Test
    void testInt16ArraySubarrayTestThree015() {
    Int16Array src = Int16Array.of(1, 2, 3, 4, 5);
    Int16Array sub = src.subarray(100, 100);
    int actual1 = sub.length();
    assertEqual(0, actual1);}

    @Test
    void testInt16ArraySubarrayTestThree016() {
    Int16Array src = Int16Array.of(1, 2, 3, 4, 5);
    Int16Array sub = src.subarray(-100, 100);
    int actual1 = sub.length();
    int expected1 = src.length();
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArraySubarrayTestThree017() {
    Int16Array src = Int16Array.of(1, 2, 3, 4, 5);
    Int16Array sub = src.subarray(100, -100);
    int actual1 = sub.length();
    assertEqual(0, actual1);}

    @Test
    void testInt16ArraySubarrayTestThree018() {
    Int16Array src = Int16Array.of(7, 14, 21, 28);
    Int16Array sub = src.subarray(Integer.MIN_VALUE, 2147483647);
    int actual1 = sub.length();
    int expected1 = src.length();
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArraySubarrayTestThree019() {
    Int16Array src = Int16Array.of(7, 14, 21, 28);
    Int16Array sub = src.subarray(2147483647, Integer.MIN_VALUE);
    int actual1 = sub.length();
    assertEqual(0, actual1);}

    @Test
    void testInt16ArraySubarrayTestThree020() {
    Int16Array src = Int16Array.of(3, 6, 9, 12);
    Int16Array sub = src.subarray(-32769, 32768);
    int actual1 = sub.length();
    int expected1 = src.length();
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArraySubarrayTestThree021() {
    Int16Array src = Int16Array.of(3, 6, 9, 12);
    Int16Array sub = src.subarray(32768, -32769);
    int actual1 = sub.length();
    assertEqual(0, actual1);}

    @Test
    void testInt16ArraySubarrayTestThree022() {
    Int16Array src = Int16Array.of(8, 16, 24, 32, 40);
    Int16Array sub = src.subarray(-6, 6);
    int actual1 = sub.length();
    int expected1 = src.length();
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArraySubarrayTestThree023() {
    Int16Array src = Int16Array.of(8, 16, 24, 32, 40);
    Int16Array sub = src.subarray(6, -6);
    int actual1 = sub.length();
    assertEqual(0, actual1);}

    @Test
    void testInt16ArraySubarrayTestThree024() {
    Int16Array src = new Int16Array();
    Int16Array sub = src.subarray(1, 5);
    boolean actual1 = sub.buffer() == src.buffer();
    assertTrue(actual1);}

    @Test
    void testInt16ArraySubarrayTestThree025() {
    Int16Array src = Int16Array.of(77);
    Int16Array sub = src.subarray(-2);
    int actual1 = sub.length();
    assertEqual(1, actual1);}

    @Test
    void testInt16ArraySubarrayTestThree026() {
    Int16Array src = Int16Array.of(33);
    Int16Array sub = src.subarray(-2, -1);
    int lenBefore = sub.length();
    try {
    sub.get((int) 0);
    fail();} catch (RangeError e) {
    assertEqual("RangeError", e.getClass().getSimpleName());}
    int actual1 = sub.length();
    int expected1 = lenBefore;
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArraySubarrayTestThree027() {
    Int16Array src = Int16Array.of(65);
    Int16Array sub = src.subarray(0, -1);
    int actual1 = sub.length();
    assertEqual(0, actual1);}

    @Test
    void testInt16ArraySubarrayTestThree028() {
    Int16Array src = Int16Array.of(44);
    Int16Array sub = src.subarray(-1, 0);
    int actual1 = sub.length();
    assertEqual(0, actual1);}

    @Test
    void testInt16ArraySubarrayTestThree029() {
    Int16Array src = Int16Array.of(22);
    Int16Array sub = src.subarray(-1, 1);
    Integer actual1 = sub.get((int) 0);
    assertEqual(22, actual1);}

    @Test
    void testInt16ArraySubarrayTestThree030() {
    Int16Array src = Int16Array.of(99);
    Int16Array sub = src.subarray(1, -1);
    int actual1 = sub.length();
    assertEqual(0, actual1);}

    @Test
    void testInt16ArraySubarrayTestThree031() {
    Int16Array src = Int16Array.of(55);
    Int16Array sub = src.subarray(-3, -2);
    int actual1 = sub.length();
    assertEqual(0, actual1);}

    @Test
    void testInt16ArraySubarrayTestThree032() {
    Int16Array src = Int16Array.of(88);
    Int16Array sub = src.subarray(1);
    boolean actual1 = sub.buffer() == src.buffer();
    assertTrue(actual1);}

    @Test
    void testInt16ArraySubarrayTestThree033() {
    Int16Array src = Int16Array.of(33);
    Int16Array sub = src.subarray(0, 0);
    int actual1 = sub.length();
    assertEqual(0, actual1);
    int actual2 = sub.byteLength();
    assertEqual(0, actual2);}

    @Test
    void testInt16ArraySubarrayTestThree034() {
    Int16Array src = Int16Array.of(32767, 32767, 32767, 32767);
    Int16Array sub = src.subarray(0, 2);
    Integer actual1 = sub.get((int) 0);
    assertEqual(32767, actual1);
    Integer actual2 = sub.get((int) 1);
    assertEqual(32767, actual2);}

    @Test
    void testInt16ArraySubarrayTestThree035() {
    Int16Array src = Int16Array.of(-32768, -32768, -32768, -32768, -32768);
    Int16Array sub = src.subarray(1, 4);
    sub.set((int) 1, 0);
    Integer actual1 = src.get((int) 2);
    assertEqual(0, actual1);}

    @Test
    void testInt16ArraySubarrayTestThree036() {
    Int16Array src = Int16Array.of(-1, -1, -1, -1, -1, -1);
    Int16Array sub = src.subarray(2, 5);
    Integer actual1 = sub.get((int) 0);
    assertEqual(-1, actual1);
    Integer actual2 = sub.get((int) 2);
    assertEqual(-1, actual2);}

    @Test
    void testInt16ArraySubarrayTestThree037() {
    Int16Array src = Int16Array.of(-32768, -32768, -32768, -32768);
    Int16Array sub = src.subarray(-1);
    Integer actual1 = sub.get((int) 0);
    assertEqual(-32768, actual1);}

    @Test
    void testInt16ArraySubarrayTestThree038() {
    Int16Array src = Int16Array.of(-1, -1, -1, -1);
    Int16Array sub = src.subarray(1, 3);
    src.fill(0);
    Integer actual1 = sub.get((int) 0);
    assertEqual(0, actual1);}

    @Test
    void testInt16ArraySubarrayTestThree039() {
    Int16Array src = Int16Array.of(1, 2, 3, 4, 5, 6);
    Int16Array sub1 = src.subarray(0, 5);
    Int16Array sub2 = sub1.subarray(1, 4);
    Int16Array sub3 = sub2.subarray(0, 2);
    sub3.set((int) 0, 99);
    Integer actual1 = src.get((int) 1);
    assertEqual(99, actual1);}

    @Test
    void testInt16ArraySubarrayTestThree040() {
    Int16Array src = Int16Array.of(10, 20, 30, 40, 50, 60);
    Int16Array sub1 = src.subarray(0, 4);
    Int16Array sub2 = sub1.subarray(1, 3);
    sub1.set((int) 1, 88);
    Integer actual1 = sub2.get((int) 0);
    assertEqual(88, actual1);}

    @Test
    void testInt16ArraySubarrayTestThree041() {
    Int16Array src = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub1 = src.subarray(0, 4);
    Int16Array sub2 = sub1.subarray(0, 3);
    Int16Array sub3 = sub2.subarray(0, 2);
    src.set((int) 1, 77);
    Integer actual1 = sub3.get((int) 1);
    assertEqual(77, actual1);}

    @Test
    void testInt16ArraySubarrayTestThree042() {
    Int16Array src = Int16Array.of(5, 10, 15, 20, 25, 30);
    Int16Array branchA = src.subarray(0, 4).subarray(1, 3);
    Int16Array branchB = src.subarray(2, 5).subarray(0, 1);
    boolean actual1 = branchA.buffer() == branchB.buffer();
    assertTrue(actual1);}

    @Test
    void testInt16ArraySubarrayTestThree043() {
    Int16Array src = Int16Array.of(1, 2, 3, 4, 5, 6, 7, 8);
    Int16Array sub1 = src.subarray(1);
    Int16Array sub2 = sub1.subarray(1);
    Int16Array sub3 = sub2.subarray(1);
    Int16Array sub4 = sub3.subarray(1);
    int actual1 = sub4.byteOffset();
    assertEqual(8, actual1);}

    @Test
    void testInt16ArraySubarrayTestThree044() {
    Int16Array src = Int16Array.of(1, 2, 3, 4, 5, 6, 7, 8);
    Int16Array sub1 = src.subarray(1, 7);
    Int16Array sub2 = sub1.subarray(2, 5);
    int actual1 = sub2.length();
    assertEqual(3, actual1);}

    @Test
    void testInt16ArraySubarrayTestThree045() {
    Int16Array src = Int16Array.of(1, 2, 3, 4, 5);
    Int16Array sub1 = src.subarray(0, 4);
    Int16Array sub2 = sub1.subarray(1, 3);
    Int16Array sub3 = sub2.subarray(0, 1);
    src.fill(99);
    Integer actual1 = sub3.get((int) 0);
    assertEqual(99, actual1);}

    @Test
    void testInt16ArraySubarrayTestThree046() {
    ArrayBuffer buf = new ArrayBuffer(20);
    Int16Array src = new Int16Array(buf, 4, 6);
    Int16Array sub = src.subarray(1);
    int actual1 = sub.byteOffset();
    assertEqual(6, actual1);}

    @Test
    void testInt16ArraySubarrayTestThree047() {
    ArrayBuffer buf = new ArrayBuffer(20);
    Int16Array src = new Int16Array(buf, 4, 4);
    Int16Array sub = src.subarray(1, 3);
    int actual1 = sub.byteOffset();
    assertEqual(6, actual1);
    int actual2 = sub.length();
    assertEqual(2, actual2);}

    @Test
    void testInt16ArraySubarrayTestThree048() {
    ArrayBuffer buf = new ArrayBuffer(20);
    Int16Array src = new Int16Array(buf, 4, 4);
    Int16Array sub = src.subarray();
    int actual1 = sub.byteOffset();
    assertEqual(4, actual1);}

    @Test
    void testInt16ArraySubarrayTestThree049() {
    ArrayBuffer buf = new ArrayBuffer(20);
    Int16Array src = new Int16Array(buf, 4, 6);
    Int16Array sub = src.subarray(-1);
    int actual1 = sub.byteOffset();
    assertEqual(14, actual1);}

    @Test
    void testInt16ArraySubarrayTestThree050() {
    ArrayBuffer buf = new ArrayBuffer(20);
    Int16Array src = new Int16Array(buf, 4, 4);
    Int16Array sub = src.subarray(6);
    int actual1 = sub.length();
    assertEqual(0, actual1);}

    @Test
    void testInt16ArraySubarrayTestThree051() {
    ArrayBuffer buf = new ArrayBuffer(20);
    Int16Array src = new Int16Array(buf, 2, 6);
    Int16Array sub = src.subarray(0, 3);
    boolean actual1 = sub.buffer() == buf;
    assertTrue(actual1);}

    @Test
    void testInt16ArraySubarrayTestThree052() {
    Int16Array src = Int16Array.of(1, 2, 3, 4);
    Int16Array sub = src.subarray(2, 3);
    sub.set((int) 0, -32769);
    Integer actual1 = src.get((int) 2);
    assertEqual(32767, actual1);}

    @Test
    void testInt16ArraySubarrayTestThree053() {
    Int16Array src = Int16Array.of(1, 2, 3, 4);
    Int16Array sub = src.subarray(0, 1);
    sub.set((int) 0, 3.7);
    Integer actual1 = src.get((int) 0);
    assertEqual(3, actual1);}

    @Test
    void testInt16ArraySubarrayTestThree054() {
    Int16Array src = Int16Array.of(1, 2, 3, 4);
    Int16Array sub = src.subarray(1, 2);
    sub.set((int) 0, -3.7);
    Integer actual1 = src.get((int) 1);
    assertEqual(-3, actual1);}

    @Test
    void testInt16ArraySubarrayTestThree055() {
    Int16Array src = Int16Array.of(1, 2, 3, 4);
    Int16Array sub = src.subarray(10, -10);
    int actual1 = sub.length();
    assertEqual(0, actual1);
    boolean actual2 = sub.buffer() == src.buffer();
    assertTrue(actual2);}

    @Test
    void testInt16ArraySubarrayTestThree056() {
    Int16Array src = Int16Array.of(9, 18, 27, 36);
    Int16Array sub = src.subarray(-100, 100);
    int actual1 = sub.length();
    int expected1 = src.length();
    assertEqual(expected1, actual1);
    Integer actual2 = sub.get((int) 0);
    assertEqual(9, actual2);}

    @Test
    void testInt16ArraySubarrayTestThree057() {
    Int16Array src = Int16Array.of(1, 2, 3, 4, 5);
    Int16Array sub = src.subarray(5, 15);
    int actual1 = sub.length();
    assertEqual(0, actual1);}

    @Test
    void testInt16ArraySubarrayTestThree058() {
    Int16Array src = Int16Array.of(1, 2, 3, 4, 5);
    Int16Array sub = src.subarray(-15, -5);
    int actual1 = sub.length();
    assertEqual(0, actual1);}

    @Test
    void testInt16ArraySubarrayTestThree059() {
    Int16Array src = Int16Array.of(1, 2, 3, 4);
    Int16Array sub = src.subarray(10);
    int actual1 = sub.byteOffset();
    assertEqual(8, actual1);}

    @Test
    void testInt16ArraySubarrayTestThree060() {
    Int16Array src = Int16Array.of(1, 2, 3, 4);
    Int16Array sub = src.subarray(-10);
    int actual1 = sub.byteOffset();
    assertEqual(0, actual1);}

    @Test
    void testInt16ArraySubarrayTestThree061() {
    Int16Array src = Int16Array.of(1, 2, 3, 4, 5);
    Int16Array sub = src.subarray(5, 10);
    int actual1 = sub.byteOffset();
    assertEqual(10, actual1);}

    @Test
    void testInt16ArraySubarrayTestThree062() {
    Int16Array src = Int16Array.of(1, 2, 3, 4);
    Int16Array sub = src.subarray(-10, -10);
    int actual1 = sub.byteOffset();
    assertEqual(0, actual1);}
}
