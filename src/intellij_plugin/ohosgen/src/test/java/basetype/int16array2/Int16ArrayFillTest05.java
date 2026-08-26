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
import basetype.common.EntryResult;
import basetype.common.Int8Array;
import basetype.common.Uint16Array;
import basetype.common.Int16Array;

import org.junit.jupiter.api.Test;

/**
 * Int16ArrayFillTest05 —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Int16ArrayFillTest05 extends BasTest {

    @Test
    void testInt16ArrayFillTestFive001() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50, 60);
    arr.fill(42);
    Integer actual1 = arr.get(0);
    assertEqual(42, actual1);
    Integer actual2 = arr.get(2);
    assertEqual(42, actual2);
    Integer actual3 = arr.get(5);
    assertEqual(42, actual3);}

    @Test
    void testInt16ArrayFillTestFive002() {
    Int16Array arr = Int16Array.of(11, 22, 33, 44, 55, 66);
    arr.fill(88, 3);
    Integer actual1 = arr.get(0);
    assertEqual(11, actual1);
    Integer actual2 = arr.get(2);
    assertEqual(33, actual2);
    Integer actual3 = arr.get(3);
    assertEqual(88, actual3);
    Integer actual4 = arr.get(5);
    assertEqual(88, actual4);}

    @Test
    void testInt16ArrayFillTestFive003() {
    Int16Array arr = Int16Array.of(5, 10, 15, 20, 25, 30, 35);
    arr.fill(50, 2, 5);
    Integer actual1 = arr.get(0);
    assertEqual(5, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(10, actual2);
    Integer actual3 = arr.get(2);
    assertEqual(50, actual3);
    Integer actual4 = arr.get(4);
    assertEqual(50, actual4);
    Integer actual5 = arr.get(5);
    assertEqual(30, actual5);}

    @Test
    void testInt16ArrayFillTestFive004() {
    Int16Array arr = Int16Array.of(0, 0);
    arr.fill(65537);
    Integer actual1 = arr.get(0);
    assertEqual(1, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(1, actual2);}

    @Test
    void testInt16ArrayFillTestFive005() {
    Int16Array arr = Int16Array.of(9, 9);
    arr.fill(0x10001);
    Integer actual1 = arr.get(0);
    assertEqual(1, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(1, actual2);}

    @Test
    void testInt16ArrayFillTestFive006() {
    Int16Array arr = Int16Array.of(0, 0, 0);
    arr.fill(-32770);
    Integer actual1 = arr.get(0);
    assertEqual(32766, actual1);
    Integer actual2 = arr.get(2);
    assertEqual(32766, actual2);}

    @Test
    void testInt16ArrayFillTestFive007() {
    Int16Array arr = Int16Array.of(100, 100);
    arr.fill(0xffff);
    Integer actual1 = arr.get(0);
    assertEqual(-1, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(-1, actual2);}

    @Test
    void testInt16ArrayFillTestFive008() {
    Int16Array arr = Int16Array.of(0, 0, 0);
    arr.fill(131071);
    Integer actual1 = arr.get(0);
    assertEqual(-1, actual1);
    Integer actual2 = arr.get(2);
    assertEqual(-1, actual2);}

    @Test
    void testInt16ArrayFillTestFive009() {
    Int16Array arr = Int16Array.of(99, 99, 99);
    arr.fill(196608);
    Integer actual1 = arr.get(0);
    assertEqual(0, actual1);
    Integer actual2 = arr.get(2);
    assertEqual(0, actual2);}

    @Test
    void testInt16ArrayFillTestFive010() {
    Int16Array arr = Int16Array.of(0, 0);
    int overflow = 32767 + 1;
    arr.fill(overflow);
    Integer actual1 = arr.get(0);
    assertEqual(-32768, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(-32768, actual2);}

    @Test
    void testInt16ArrayFillTestFive011() {
    Int16Array arr = Int16Array.of(0, 0);
    arr.fill(32767 * 2);
    Integer actual1 = arr.get(0);
    assertEqual(-2, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(-2, actual2);}

    @Test
    void testInt16ArrayFillTestFive012() {
    Int16Array arr = Int16Array.of(0, 0);
    arr.fill(163840);
    Integer actual1 = arr.get(0);
    assertEqual(-32768, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(-32768, actual2);}

    @Test
    void testInt16ArrayFillTestFive013() {
    Int16Array arr = Int16Array.of(0, 0);
    long huge = 9007199254740991L;
    arr.fill(huge);
    Integer firstResult = arr.get(0);
    assertEqual(-1, firstResult);
    Integer secondResult = arr.get(1);
    assertEqual(-1, secondResult);}

    @Test
    void testInt16ArrayFillTestFive014() {
    Int16Array arr = Int16Array.of(0, 0);
    arr.fill(1000000);
    Integer firstValue = arr.get(0);
    assertEqual(16960, firstValue);
    Integer secondValue = arr.get(1);
    assertEqual(16960, secondValue);}

    @Test
    void testInt16ArrayFillTestFive015() {
    Int16Array arr = Int16Array.of(0, 0);
    arr.fill(-1000000);
    Integer result = arr.get(0);
    assertEqual(-16960, result);
    Integer actual1 = arr.get(1);
    assertEqual(-16960, actual1);}

    @Test
    void testInt16ArrayFillTestFive016() {
    Int16Array arr = Int16Array.of(0, 0, 0);
    int val = 2147483647;
    arr.fill(val);
    Integer actual1 = arr.get(0);
    assertEqual(-1, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(-1, actual2);
    Integer actual3 = arr.get(2);
    assertEqual(-1, actual3);}

    @Test
    void testInt16ArrayFillTestFive017() {
    Int16Array arr = Int16Array.of(77, 77);
    arr.fill(262144);
    Integer actual1 = arr.get(0);
    assertEqual(0, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(0, actual2);}

    @Test
    void testInt16ArrayFillTestFive018() {
    Int16Array arr = Int16Array.of(50, 50, 50);
    double nanVal = 0.0 / 0.0;
    arr.fill(nanVal);
    Integer actual1 = arr.get(0);
    assertEqual(0, actual1);
    Integer actual2 = arr.get(2);
    assertEqual(0, actual2);}

    @Test
    void testInt16ArrayFillTestFive019() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    arr.fill(Math.sqrt(-1));
    Integer actual1 = arr.get(0);
    assertEqual(0, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(0, actual2);}

    @Test
    void testInt16ArrayFillTestFive020() {
    Int16Array arr = Int16Array.of(99, 99);
    double posInf = 1.0 / 0.0;
    arr.fill(posInf);
    Integer actual1 = arr.get(0);
    assertEqual(0, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(0, actual2);}

    @Test
    void testInt16ArrayFillTestFive021() {
    Int16Array arr = Int16Array.of(88, 88);
    double negInf = -1.0 / 0.0;
    arr.fill(negInf);
    Integer actual1 = arr.get(0);
    assertEqual(0, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(0, actual2);}

    @Test
    void testInt16ArrayFillTestFive022() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40);
    arr.fill(Double.NaN);
    boolean allZero = arr.every((v) -> v == 0);
    assertTrue(allZero);}

    @Test
    void testInt16ArrayFillTestFive023() {
    Int16Array arr = Int16Array.of(5, 5, 5);
    arr.fill(Double.POSITIVE_INFINITY);
    boolean hasNonZero = arr.some((v) -> v != 0);
    assertFalse(hasNonZero);}

    @Test
    void testInt16ArrayFillTestFive024() {
    Int16Array arr = Int16Array.of(7, 7);
    arr.fill(-0);
    Integer actual1 = arr.get(0);
    assertEqual(0, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(0, actual2);}

    @Test
    void testInt16ArrayFillTestFive025() {
    Int16Array arrNeg = Int16Array.of(3, 3, 3);
    Int16Array arrPos = Int16Array.of(3, 3, 3);
    arrNeg.fill(-0);
    arrPos.fill(0);
    Integer actual1 = arrNeg.get(0);
    Integer expected1 = arrPos.get(0);
    assertEqual(expected1, actual1);
    Integer actual2 = arrNeg.get(1);
    Integer expected2 = arrPos.get(1);
    assertEqual(expected2, actual2);
    Integer actual3 = arrNeg.get(2);
    Integer expected3 = arrPos.get(2);
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestFive026() {
    Int16Array arr1 = Int16Array.of(1, 2, 3, 4, 5);
    Int16Array arr2 = Int16Array.of(1, 2, 3, 4, 5);
    arr1.fill(-0, 1, 4);
    arr2.fill(0, 1, 4);
    Integer actual1 = arr1.get(1);
    Integer expected1 = arr2.get(1);
    assertEqual(expected1, actual1);
    Integer actual2 = arr1.get(3);
    Integer expected2 = arr2.get(3);
    assertEqual(expected2, actual2);}

    @Test
    void testInt16ArrayFillTestFive027() {
    Int16Array arr = Int16Array.of(0, 0);
    arr.fill(32767.9);
    Integer actual1 = arr.get(0);
    assertEqual(32767, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(32767, actual2);}

    @Test
    void testInt16ArrayFillTestFive028() {
    Int16Array arr = Int16Array.of(0, 0);
    arr.fill(32768.9);
    Integer actual1 = arr.get(0);
    assertEqual(-32768, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(-32768, actual2);}

    @Test
    void testInt16ArrayFillTestFive029() {
    Int16Array arr = Int16Array.of(0, 0);
    arr.fill(-32768.9);
    Integer actual1 = arr.get(0);
    assertEqual(-32768, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(-32768, actual2);}

    @Test
    void testInt16ArrayFillTestFive030() {
    Int16Array arr = Int16Array.of(0, 0);
    arr.fill(-32769.1);
    Integer actual1 = arr.get(0);
    assertEqual(32767, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(32767, actual2);}

    @Test
    void testInt16ArrayFillTestFive031() {
    Int16Array arr = Int16Array.of(9, 9);
    arr.fill(1.5);
    Integer actual1 = arr.get(0);
    assertEqual(1, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(1, actual2);}

    @Test
    void testInt16ArrayFillTestFive032() {
    Int16Array arr = Int16Array.of(9, 9);
    arr.fill(-1.5);
    Integer actual1 = arr.get(0);
    assertEqual(-1, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(-1, actual2);}

    @Test
    void testInt16ArrayFillTestFive033() {
    Int16Array arr = Int16Array.of(11, 22, 33, 44, 55, 66);
    int offset = 2;
    arr.fill(88, offset);
    Integer actual1 = arr.get(0);
    assertEqual(11, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(22, actual2);
    Integer actual3 = arr.get(2);
    assertEqual(88, actual3);
    Integer actual4 = arr.get(5);
    assertEqual(88, actual4);}

    @Test
    void testInt16ArrayFillTestFive034() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50, 60, 70, 80);
    int mid = arr.length() / 2;
    arr.fill(99, mid);
    Integer actual1 = arr.get(0);
    assertEqual(10, actual1);
    Integer actual2 = arr.get(3);
    assertEqual(40, actual2);
    Integer actual3 = arr.get(4);
    assertEqual(99, actual3);
    Integer actual4 = arr.get(7);
    assertEqual(99, actual4);}

    @Test
    void testInt16ArrayFillTestFive035() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    int pos = arr.indexOf(30);
    arr.fill(77, pos);
    Integer actual1 = arr.get(0);
    assertEqual(10, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(20, actual2);
    Integer actual3 = arr.get(2);
    assertEqual(77, actual3);
    Integer actual4 = arr.get(4);
    assertEqual(77, actual4);}

    @Test
    void testInt16ArrayFillTestFive036() {
    Int16Array arr = Int16Array.of(5, 10, 5, 10, 5);
    int lastPos = arr.lastIndexOf(10);
    arr.fill(0, lastPos);
    Integer actual1 = arr.get(0);
    assertEqual(5, actual1);
    Integer actual2 = arr.get(2);
    assertEqual(5, actual2);
    Integer actual3 = arr.get(3);
    assertEqual(0, actual3);
    Integer actual4 = arr.get(4);
    assertEqual(0, actual4);}

    @Test
    void testInt16ArrayFillTestFive037() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    arr.fill(99, 2147483647);
    Integer actual1 = arr.get(0);
    assertEqual(1, actual1);
    Integer actual2 = arr.get(2);
    assertEqual(3, actual2);}

    @Test
    void testInt16ArrayFillTestFive038() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    arr.fill(88, Integer.MIN_VALUE);
    Integer actual1 = arr.get(0);
    assertEqual(88, actual1);
    Integer actual2 = arr.get(2);
    assertEqual(88, actual2);}

    @Test
    void testInt16ArrayFillTestFive039() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5, 6);
    int tailStart = arr.length() - 2;
    arr.fill(55, tailStart);
    Integer actual1 = arr.get(0);
    assertEqual(1, actual1);
    Integer actual2 = arr.get(3);
    assertEqual(4, actual2);
    Integer actual3 = arr.get(4);
    assertEqual(55, actual3);
    Integer actual4 = arr.get(5);
    assertEqual(55, actual4);}

    @Test
    void testInt16ArrayFillTestFive040() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5, 6);
    int stop = 4;
    arr.fill(88, 1, stop);
    Integer actual1 = arr.get(0);
    assertEqual(1, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(88, actual2);
    Integer actual3 = arr.get(3);
    assertEqual(88, actual3);
    Integer actual4 = arr.get(4);
    assertEqual(5, actual4);}

    @Test
    void testInt16ArrayFillTestFive041() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    int lastIdx = arr.length() - 1;
    arr.fill(99, 1, lastIdx);
    Integer actual1 = arr.get(0);
    assertEqual(10, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(99, actual2);
    Integer actual3 = arr.get(3);
    assertEqual(99, actual3);
    Integer actual4 = arr.get(4);
    assertEqual(50, actual4);}

    @Test
    void testInt16ArrayFillTestFive042() {
    Int16Array arr = Int16Array.of(0, 0, 0, 0, 0, 0, 0);
    int s = 1;
    arr.fill(55, s, s + 3);
    Integer actual1 = arr.get(0);
    assertEqual(0, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(55, actual2);
    Integer actual3 = arr.get(3);
    assertEqual(55, actual3);
    Integer actual4 = arr.get(4);
    assertEqual(0, actual4);}

    @Test
    void testInt16ArrayFillTestFive043() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    arr.fill(99, 2, 2147483647);
    Integer actual1 = arr.get(0);
    assertEqual(1, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(2, actual2);
    Integer actual3 = arr.get(2);
    assertEqual(99, actual3);
    Integer actual4 = arr.get(4);
    assertEqual(99, actual4);}

    @Test
    void testInt16ArrayFillTestFive044() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50, 60, 70);
    arr.fill(99, -3, -1);
    Integer actual1 = arr.get(0);
    assertEqual(10, actual1);
    Integer actual2 = arr.get(3);
    assertEqual(40, actual2);
    Integer actual3 = arr.get(4);
    assertEqual(99, actual3);
    Integer actual4 = arr.get(5);
    assertEqual(99, actual4);
    Integer actual5 = arr.get(6);
    assertEqual(70, actual5);}

    @Test
    void testInt16ArrayFillTestFive045() {
    Int16Array arr = Int16Array.of(11, 22, 33, 44, 55);
    arr.fill(88, -1, 5);
    Integer actual1 = arr.get(0);
    assertEqual(11, actual1);
    Integer actual2 = arr.get(3);
    assertEqual(44, actual2);
    Integer actual3 = arr.get(4);
    assertEqual(88, actual3);}

    @Test
    void testInt16ArrayFillTestFive046() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    arr.fill(99, 0, -4);
    Integer actual1 = arr.get(0);
    assertEqual(99, actual1);
    Integer actual2 = arr.get(4);
    assertEqual(5, actual2);}

    @Test
    void testInt16ArrayFillTestFive047() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50, 60, 70);
    arr.fill(99, -5, -4);
    Integer actual1 = arr.get(0);
    assertEqual(10, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(20, actual2);
    Integer actual3 = arr.get(2);
    assertEqual(99, actual3);
    Integer actual4 = arr.get(3);
    assertEqual(40, actual4);}

    @Test
    void testInt16ArrayFillTestFive048() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    arr.fill(77, -100, -200);
    Integer actual1 = arr.get(0);
    assertEqual(1, actual1);
    Integer actual2 = arr.get(4);
    assertEqual(5, actual2);}

    @Test
    void testInt16ArrayFillTestFive049() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    arr.fill(99, 999, 1000);
    Integer actual1 = arr.get(0);
    assertEqual(10, actual1);
    Integer actual2 = arr.get(2);
    assertEqual(30, actual2);}

    @Test
    void testInt16ArrayFillTestFive050() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    arr.fill(99, -2, 0);
    Integer actual1 = arr.get(0);
    assertEqual(1, actual1);
    Integer actual2 = arr.get(3);
    assertEqual(4, actual2);
    Integer actual3 = arr.get(4);
    assertEqual(5, actual3);}

    @Test
    void testInt16ArrayFillTestFive051() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    arr.fill(99, -1, -5);
    Integer actual1 = arr.get(0);
    assertEqual(1, actual1);
    Integer actual2 = arr.get(3);
    assertEqual(4, actual2);
    Integer actual3 = arr.get(4);
    assertEqual(5, actual3);}

    @Test
    void testInt16ArrayFillTestFive052() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40);
    arr.fill(55, 0, 0);
    Integer actual1 = arr.get(0);
    assertEqual(10, actual1);
    Integer actual2 = arr.get(3);
    assertEqual(40, actual2);}

    @Test
    void testInt16ArrayFillTestFive053() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    arr.fill(88, 2, 2);
    Integer actual1 = arr.get(0);
    assertEqual(10, actual1);
    Integer actual2 = arr.get(2);
    assertEqual(30, actual2);
    Integer actual3 = arr.get(4);
    assertEqual(50, actual3);}

    @Test
    void testInt16ArrayFillTestFive054() {
    Int16Array arr = Int16Array.of(123);
    arr.fill(456, 0, 1);
    Integer actual1 = arr.get(0);
    assertEqual(456, actual1);}

    @Test
    void testInt16ArrayFillTestFive055() {
    Int16Array arr = Int16Array.of(99);
    arr.fill(0, 0, 0);
    Integer actual1 = arr.get(0);
    assertEqual(99, actual1);}

    @Test
    void testInt16ArrayFillTestFive056() {
    Int16Array arr = Int16Array.of(77);
    arr.fill(33, -1);
    Integer actual1 = arr.get(0);
    assertEqual(33, actual1);}

    @Test
    void testInt16ArrayFillTestFive057() {
    Int16Array arr = new Int16Array(0);
    arr.fill(99, 0, 0);
    int actual1 = arr.length();
    assertEqual(0, actual1);}

    @Test
    void testInt16ArrayFillTestFive058() {
    Int16Array arr = Int16Array.of(7, 8, 9);
    Int16Array ret = arr.fill(55);
    boolean actual1 = ret == arr;
    assertTrue(actual1);}

    @Test
    void testInt16ArrayFillTestFive059() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5, 6);
    Int16Array returned = arr.fill(99, 2, 5);
    Integer actual1 = returned.get(2);
    assertEqual(99, actual1);
    Integer actual2 = returned.get(4);
    assertEqual(99, actual2);
    boolean actual3 = returned == arr;
    assertTrue(actual3);}

    @Test
    void testInt16ArrayFillTestFive060() {
    Int16Array arr = Int16Array.of(0, 0, 0, 0, 0);
    arr.fill(1, 0, 2).copyWithin(2, 0, 2);
    Integer actual1 = arr.get(0);
    assertEqual(1, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(1, actual2);
    Integer actual3 = arr.get(2);
    assertEqual(1, actual3);
    Integer actual4 = arr.get(3);
    assertEqual(1, actual4);
    Integer actual5 = arr.get(4);
    assertEqual(0, actual5);}

    @Test
    void testInt16ArrayFillTestFive061() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    arr.fill(0, 0, 2).reverse();
    Integer actual1 = arr.get(0);
    assertEqual(5, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(4, actual2);
    Integer actual3 = arr.get(2);
    assertEqual(3, actual3);
    Integer actual4 = arr.get(3);
    assertEqual(0, actual4);
    Integer actual5 = arr.get(4);
    assertEqual(0, actual5);}

    @Test
    void testInt16ArrayFillTestFive062() {
    Int16Array arr = Int16Array.of(50, 40, 30, 20, 10);
    arr.fill(25, 0, 2).sort();
    Integer actual1 = arr.get(0);
    assertEqual(10, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(20, actual2);
    Integer actual3 = arr.get(2);
    assertEqual(25, actual3);
    Integer actual4 = arr.get(3);
    assertEqual(25, actual4);
    Integer actual5 = arr.get(4);
    assertEqual(30, actual5);}

    @Test
    void testInt16ArrayFillTestFive063() {
    Int16Array arr = Int16Array.of(0, 0, 0, 0, 0);
    Int16Array r1 = arr.fill(10, 0, 1);
    Int16Array r2 = r1.fill(20, 1, 2);
    Int16Array r3 = r2.fill(30, 2, 3);
    boolean actual1 = r3 == arr;
    assertTrue(actual1);
    Integer actual2 = arr.get(0);
    assertEqual(10, actual2);
    Integer actual3 = arr.get(1);
    assertEqual(20, actual3);
    Integer actual4 = arr.get(2);
    assertEqual(30, actual4);}

    @Test
    void testInt16ArrayFillTestFive064() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    int origLen = arr.length();
    int origByteLen = arr.byteLength();
    arr.fill(123);
    int actual1 = arr.length();
    int expected1 = origLen;
    assertEqual(expected1, actual1);
    int actual2 = arr.byteLength();
    int expected2 = origByteLen;
    assertEqual(expected2, actual2);}

    @Test
    void testInt16ArrayFillTestFive065() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Int16Array arr = new Int16Array(buf, 2, 4);
    Int16Array returned = arr.fill(42);
    int actual1 = returned.byteOffset();
    assertEqual(2, actual1);
    int actual2 = returned.length();
    assertEqual(4, actual2);
    boolean actual3 = returned == arr;
    assertTrue(actual3);}

    @Test
    void testInt16ArrayFillTestFive066() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Int16Array arr = new Int16Array(buf);
    arr.fill(32768);
    Int8Array bytes = new Int8Array(buf);
    Integer actual1 = bytes.get(0);
    assertEqual(0, actual1);
    Integer actual2 = bytes.get(1);
    assertEqual(-128, actual2);}

    @Test
    void testInt16ArrayFillTestFive067() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Int16Array arr = new Int16Array(buf);
    arr.fill(-1);
    Int8Array bytes = new Int8Array(buf);
    Integer actual1 = bytes.get(0);
    assertEqual(-1, actual1);
    Integer actual2 = bytes.get(1);
    assertEqual(-1, actual2);}

    @Test
    void testInt16ArrayFillTestFive068() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Int16Array arr = new Int16Array(buf);
    arr.fill(32767);
    Int8Array bytes = new Int8Array(buf);
    Integer actual1 = bytes.get(0);
    assertEqual(-1, actual1);
    Integer actual2 = bytes.get(1);
    assertEqual(127, actual2);}

    @Test
    void testInt16ArrayFillTestFive069() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Int16Array arr = new Int16Array(buf);
    arr.fill(-32768);
    Int8Array bytes = new Int8Array(buf);
    Integer actual1 = bytes.get(0);
    assertEqual(0, actual1);
    Integer actual2 = bytes.get(1);
    assertEqual(-128, actual2);}

    @Test
    void testInt16ArrayFillTestFive070() {
    Int16Array arr = Int16Array.of(0, 0, 0, 0, 0);
    arr.fill(32768, 0, 3);
    Int16Array sliced = arr.slice(0, 3);
    Integer actual1 = sliced.get(0);
    assertEqual(-32768, actual1);
    Integer actual2 = sliced.get(1);
    assertEqual(-32768, actual2);
    Integer actual3 = sliced.get(2);
    assertEqual(-32768, actual3);}

    @Test
    void testInt16ArrayFillTestFive071() {
    Int16Array arr = Int16Array.of(0, 0, 0, 0, 0);
    arr.fill(-32769, 1, 4);
    Int16Array sub = arr.subarray(1, 4);
    Integer actual1 = sub.get(0);
    assertEqual(32767, actual1);
    Integer actual2 = sub.get(1);
    assertEqual(32767, actual2);}

    @Test
    void testInt16ArrayFillTestFive072() {
    Int16Array arr = Int16Array.of(1, 1, 1);
    arr.fill(Double.NaN);
    Int16Array copied = arr.slice();
    Integer actual1 = copied.get(0);
    assertEqual(0, actual1);
    Integer actual2 = copied.get(2);
    assertEqual(0, actual2);}

    @Test
    void testInt16ArrayFillTestFive073() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    arr.fill(Double.POSITIVE_INFINITY);
    Int16Array replaced = arr.with(1, 99);
    Integer actual1 = replaced.get(1);
    assertEqual(99, actual1);}

    @Test
    void testInt16ArrayFillTestFive074() {
    Int16Array arr = new Int16Array(0);
    Int16Array ret = arr.fill(99);
    int actual1 = ret.length();
    assertEqual(0, actual1);}

    @Test
    void testInt16ArrayFillTestFive075() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    arr.fill(99, 9999);
    Integer actual1 = arr.get(0);
    assertEqual(10, actual1);
    Integer actual2 = arr.get(2);
    assertEqual(30, actual2);}

    @Test
    void testInt16ArrayFillTestFive076() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    arr.fill(99, 0, 99999);
    Integer actual1 = arr.get(0);
    assertEqual(99, actual1);
    Integer actual2 = arr.get(2);
    assertEqual(99, actual2);}

    @Test
    void testInt16ArrayFillTestFive077() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    arr.fill(55, -2147483647);
    Integer actual1 = arr.get(0);
    assertEqual(55, actual1);
    Integer actual2 = arr.get(4);
    assertEqual(55, actual2);}

    @Test
    void testInt16ArrayFillTestFive078() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Int16Array view1 = new Int16Array(buf, 0, 5);
    Int16Array view2 = new Int16Array(buf, 0, 5);
    view1.fill(99, 1, 3);
    Integer actual1 = view2.get(0);
    assertEqual(0, actual1);
    Integer actual2 = view2.get(1);
    assertEqual(99, actual2);
    Integer actual3 = view2.get(2);
    assertEqual(99, actual3);
    Integer actual4 = view2.get(3);
    assertEqual(0, actual4);}

    @Test
    void testInt16ArrayFillTestFive079() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Int16Array arr16 = new Int16Array(buf);
    arr16.fill(-1);
    Uint16Array arrU16 = new Uint16Array(buf);
    Integer actual1 = arrU16.get(0);
    assertEqual(65535, actual1);
    Integer actual2 = arrU16.get(1);
    assertEqual(65535, actual2);}

    @Test
    void testInt16ArrayFillTestFive080() {
    Int16Array parent = Int16Array.of(0, 0, 0, 0, 0);
    Int16Array sub = parent.subarray(2, 5);
    sub.fill(88);
    Integer actual1 = parent.get(0);
    assertEqual(0, actual1);
    Integer actual2 = parent.get(1);
    assertEqual(0, actual2);
    Integer actual3 = parent.get(2);
    assertEqual(88, actual3);
    Integer actual4 = parent.get(4);
    assertEqual(88, actual4);}

    @Test
    void testInt16ArrayFillTestFive081() {
    Int16Array parent = Int16Array.of(10, 20, 30, 40, 50);
    Int16Array sub = parent.subarray(1, 4);
    parent.fill(77, 2, 5);
    Integer actual1 = sub.get(1);
    assertEqual(77, actual1);
    Integer actual2 = sub.get(2);
    assertEqual(77, actual2);}

    @Test
    void testInt16ArrayFillTestFive082() {
    ArrayBuffer buf = new ArrayBuffer(2);
    Int16Array arr = new Int16Array(buf);
    arr.fill(32768);
    Uint16Array arrU16 = new Uint16Array(buf);
    Integer actual1 = arrU16.get(0);
    assertEqual(32768, actual1);}

    @Test
    void testInt16ArrayFillTestFive083() {
    Int16Array arr = Int16Array.of(0, 0, 0);
    arr.fill(5, 0, 2);
    Int16Array tail = Int16Array.of(1, 1);
    Int16Array merged = new Int16Array(arr.length() + tail.length());
    merged.set(arr, 0);
    merged.set(tail, arr.length());
    Integer actual1 = merged.get(0);
    assertEqual(5, actual1);
    Integer actual2 = merged.get(1);
    assertEqual(5, actual2);
    Integer actual3 = merged.get(2);
    assertEqual(0, actual3);
    Integer actual4 = merged.get(3);
    assertEqual(1, actual4);}

    @Test
    void testInt16ArrayFillTestFive084() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    arr.fill(0, 2, 4);
    String str = arr.join(",");
    assertEqual("1,2,0,0,5", str);}

    @Test
    void testInt16ArrayFillTestFive085() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5, 6);
    arr.fill(99, 1, 5);
    int[] filledCount = {0};
    arr.forEach((v) -> {
    if (v == 99) {
    filledCount[0]++;}
    });
    assertEqual(4, filledCount[0]);}

    @Test
    void testInt16ArrayFillTestFive086() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    arr.fill(55, 0, 2);
    Int16Array.EntriesIterator iterator = arr.entries();
    EntryResult nextItem = iterator.next();
    while (!nextItem.done) {
    int[] pair = nextItem.value;
    int idx = pair[0];
    int val = pair[1];
    if (idx < 2) {
    assertEqual(55, val);} else {
    assertEqual(30, val);}
    nextItem = iterator.next();}
    }

    @Test
    void testInt16ArrayFillTestFive087() {
    Int16Array arr = Int16Array.of(10, 20, 30, 40, 50);
    arr.fill(99, 2, 4);
    int pos = arr.indexOf(99);
    assertEqual(2, pos);}

    @Test
    void testInt16ArrayFillTestFive088() {
    Int16Array arr = Int16Array.of(0, 0, 0);
    arr.fill(88, 0, 3);
    int lastPos = arr.lastIndexOf(88);
    assertEqual(2, lastPos);}

    @Test
    void testInt16ArrayFillTestFive089() {
    Int16Array arr = Int16Array.of(1, 2, 3);
    arr.fill(77, 0, 1);
    boolean found = arr.includes(77);
    assertTrue(found);}

    @Test
    void testInt16ArrayFillTestFive090() {
    Int16Array arr = Int16Array.of(0, 0, 0, 0, 0);
    Int16Array src = Int16Array.of(8, 8);
    arr.fill(5);
    arr.set(src, 1);
    Integer actual1 = arr.get(0);
    assertEqual(5, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(8, actual2);
    Integer actual3 = arr.get(2);
    assertEqual(8, actual3);
    Integer actual4 = arr.get(3);
    assertEqual(5, actual4);}

    @Test
    void testInt16ArrayFillTestFive091() {
    Int16Array arr = Int16Array.of(10, 20, 30);
    arr.fill(5, 1, 3);
    Int16Array mapped = arr.map((v) -> v * 2);
    Integer actual1 = arr.get(0);
    assertEqual(10, actual1);
    Integer actual2 = mapped.get(0);
    assertEqual(20, actual2);
    Integer actual3 = mapped.get(1);
    assertEqual(10, actual3);}

    @Test
    void testInt16ArrayFillTestFive092() {
    Int16Array arr = Int16Array.of(0, 0, 0, 0, 0);
    arr.fill(99, 0, 3);
    Int16Array filtered = arr.filter((v) -> v == 99);
    int actual1 = filtered.length();
    assertEqual(3, actual1);}

    @Test
    void testInt16ArrayFillTestFive093() {
    Int16Array arr = Int16Array.of(0, 0, 0, 0, 0);
    arr.fill(2, 1, 4);
    int sum = arr.reduce((acc, v, array, unused3)-> acc + v);
    assertEqual(6, sum);}

    @Test
    void testInt16ArrayFillTestFive094() {
    Int16Array arr = Int16Array.of(0, 0, 0);
    arr.fill(42, 1, 3);
    Integer found = arr.find((v) -> v == 42);
    boolean actual2 = found != null;
    assertTrue(actual2);
    int actual1 = (int) found;
    assertEqual(42, actual1);}

    @Test
    void testInt16ArrayFillTestFive095() {
    Int16Array arr = Int16Array.of(0, 0, 0, 0);
    arr.fill(33, 1, 3);
    int idx = arr.findIndex((v) -> v == 33);
    assertEqual(1, idx);}

    @Test
    void testInt16ArrayFillTestFive096() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    arr.fill(0);
    boolean allZeros = arr.every((v) -> v == 0);
    assertTrue(allZeros);}

    @Test
    void testInt16ArrayFillTestFive097() {
    Int16Array arr = Int16Array.of(0, 0, 0);
    arr.fill(5, 1, 2);
    boolean hasNonZero = arr.some((v) -> v != 0);
    assertTrue(hasNonZero);}

    @Test
    void testInt16ArrayFillTestFive098() {
    Int16Array arr = Int16Array.of(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    arr.fill(1, 0, 3);
    arr.fill(2, 3, 6);
    arr.fill(3, 6, 9);
    Integer actual1 = arr.get(0);
    assertEqual(1, actual1);
    Integer actual2 = arr.get(3);
    assertEqual(2, actual2);
    Integer actual3 = arr.get(5);
    assertEqual(2, actual3);
    Integer actual4 = arr.get(6);
    assertEqual(3, actual4);
    Integer actual5 = arr.get(8);
    assertEqual(3, actual5);
    Integer actual6 = arr.get(9);
    assertEqual(0, actual6);}

    @Test
    void testInt16ArrayFillTestFive099() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    arr.fill(128);
    Int16Array copy = arr.slice();
    Integer actual1 = copy.get(0);
    assertEqual(128, actual1);
    Integer actual2 = copy.get(2);
    assertEqual(128, actual2);
    Integer actual3 = copy.get(4);
    assertEqual(128, actual3);}

    @Test
    void testInt16ArrayFillTestFive100() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    arr.fill(0).reverse().fill(9, 0, 2);
    Integer actual1 = arr.get(0);
    assertEqual(9, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(9, actual2);
    Integer actual3 = arr.get(2);
    assertEqual(0, actual3);
    Integer actual4 = arr.get(3);
    assertEqual(0, actual4);
    Integer actual5 = arr.get(4);
    assertEqual(0, actual5);}

    @Test
    void testInt16ArrayFillTestFive101() {
    Int16Array arr = Int16Array.of(5, 3, 1, 4, 2);
    arr.fill(0, 0, 2);
    Int16Array sorted = arr.toSorted();
    Integer actual1 = arr.get(0);
    assertEqual(0, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(0, actual2);}

    @Test
    void testInt16ArrayFillTestFive102() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4);
    arr.fill(9, 0, 2);
    Int16Array reversed = arr.toReversed();
    Integer actual1 = arr.get(0);
    assertEqual(9, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(9, actual2);}
}
