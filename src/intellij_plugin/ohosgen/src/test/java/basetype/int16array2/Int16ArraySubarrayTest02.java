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
 * Int16ArraySubarrayTest02 —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Int16ArraySubarrayTest02 extends BasTest {

    @Test
    void testInt16ArraySubarrayTestTwo001() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768);
    Int16Array ret = arr.subarray();
    int actual1 = ret.byteOffset();
    assertEqual(arr.byteOffset(), actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo002() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768);
    Int16Array ret = arr.subarray();
    int actual1 = ret.length();
    assertEqual(4, actual1);
    int actual2 = ret.get(0);
    assertEqual(32767, actual2);}

    @Test
    void testInt16ArraySubarrayTestTwo003() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768);
    Int16Array ret = arr.subarray(1);
    int actual1 = ret.length();
    assertEqual(3, actual1);
    int actual2 = ret.get(0);
    assertEqual(0, actual2);}

    @Test
    void testInt16ArraySubarrayTestTwo004() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768);
    Int16Array ret = arr.subarray(1, 3);
    int actual1 = ret.length();
    assertEqual(2, actual1);
    int actual2 = ret.get(0);
    assertEqual(0, actual2);}

    @Test
    void testInt16ArraySubarrayTestTwo005() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768);
    Int16Array ret = arr.subarray();
    int actual1 = ret.length();
    int expected1 = arr.length();
    assertEqual(expected1, actual1);
    int actual2 = ret.get(3);
    assertEqual(-32768, actual2);}

    @Test
    void testInt16ArraySubarrayTestTwo006() {
    Int16Array arr = Int16Array.of(0, 0, 0);
    Int16Array ret = arr.subarray(0, 1);
    int actual1 = ret.length();
    assertEqual(1, actual1);
    int actual2 = ret.get(0);
    assertEqual(0, actual2);}

    @Test
    void testInt16ArraySubarrayTestTwo007() {
    Int16Array arr = Int16Array.of(32767, 32767, 32767);
    Int16Array ret = arr.subarray(1, 2);
    int actual1 = ret.length();
    assertEqual(1, actual1);
    int actual2 = ret.get(0);
    assertEqual(32767, actual2);}

    @Test
    void testInt16ArraySubarrayTestTwo008() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768);
    Int16Array ret = arr.subarray(1);
    int actual1 = ret.length();
    assertEqual(3, actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo009() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768);
    Int16Array ret = arr.subarray(1, 3);
    int actual1 = ret.length();
    assertEqual(2, actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo010() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768);
    Int16Array ret = arr.subarray();
    int actual1 = ret.byteLength();
    int expected1 = arr.byteLength();
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo011() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768);
    Int16Array ret = arr.subarray(1, 3);
    int actual1 = ret.byteLength();
    assertEqual(4, actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo012() {
    Int16Array arr = Int16Array.of(32767, 0, -1);
    Int16Array ret = arr.subarray(1, 2);
    int actual1 = ret.byteLength();
    int expected1 = 2 * ret.length();
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo013() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768);
    Int16Array ret = arr.subarray(1, 3);
    int actual1 = ret.BYTES_PER_ELEMENT;
    assertEqual(2, actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo014() {
    Int16Array arr = Int16Array.of(32767, 0, -1);
    Int16Array ret = arr.subarray();
    int actual1 = ret.BYTES_PER_ELEMENT;
    assertEqual(2, actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo015() {
    Int16Array arr = Int16Array.of(32767, 0, -1);
    Int16Array ret = arr.subarray(1, 1);
    int actual1 = ret.length();
    assertEqual(0, actual1);
    int actual2 = ret.byteLength();
    assertEqual(0, actual2);}

    @Test
    void testInt16ArraySubarrayTestTwo016() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768);
    Int16Array ret = arr.subarray(2);
    int actual1 = ret.length();
    assertEqual(2, actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo017() {
    Int16Array arr = Int16Array.of(32767, 0, -1);
    Int16Array ret = arr.subarray(3, 3);
    int actual1 = ret.byteLength();
    assertEqual(0, actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo018() {
    Int16Array arr = Int16Array.of(32767, 0, -1);
    Int16Array ret = arr.subarray(0, 1);
    int actual1 = ret.length();
    int expected1 = ret.byteLength() / Int16Array.BYTES_PER_ELEMENT;
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo019() {
    Int16Array arr = Int16Array.of(32767, 0, -1);
    Int16Array ret = arr.subarray(0, 2);
    int actual1 = ret.byteLength();
    int expected1 = ret.length() * Int16Array.BYTES_PER_ELEMENT;
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo020() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768);
    Int16Array ret = arr.subarray(0, 2);
    int actual1 = ret.BYTES_PER_ELEMENT;
    int expected1 = arr.BYTES_PER_ELEMENT;
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo021() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768, 100);
    Int16Array ret = arr.subarray(2, 4);
    int actual1 = ret.length();
    assertEqual(2, actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo022() {
    Int16Array arr = Int16Array.of(32767, 0, -1);
    Int16Array ret = arr.subarray(0, 1);
    int actual1 = ret.byteLength();
    assertEqual(2, actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo023() {
    Int16Array arr = Int16Array.of(32767);
    Int16Array ret = arr.subarray();
    int actual1 = ret.length();
    assertEqual(1, actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo024() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768);
    int lenBefore = arr.length();
    arr.subarray(1, 3);
    int actual1 = arr.length();
    int expected1 = lenBefore;
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo025() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768);
    arr.subarray(1, 3);
    Integer actual1 = arr.get((int) 0);
    assertEqual(32767, actual1);
    Integer actual2 = arr.get((int) 3);
    assertEqual(-32768, actual2);}

    @Test
    void testInt16ArraySubarrayTestTwo026() {
    Int16Array arr = Int16Array.of(32767, 0, -1);
    int blBefore = arr.byteLength();
    arr.subarray(1, 2);
    int actual1 = arr.byteLength();
    int expected1 = blBefore;
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo027() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768);
    int offBefore = arr.byteOffset();
    arr.subarray(1, 3);
    int actual1 = arr.byteOffset();
    int expected1 = offBefore;
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo028() {
    Int16Array arr = Int16Array.of(32767, 0, -1);
    arr.subarray(0, 1);
    int actual1 = arr.length();
    assertEqual(3, actual1);
    Integer actual2 = arr.get(0);
    assertEqual(32767, actual2);}

    @Test
    void testInt16ArraySubarrayTestTwo029() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768);
    arr.subarray(0, 2);
    Integer actual1 = arr.get((int) 0);
    assertEqual(32767, actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo030() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768);
    arr.subarray(1, 2);
    Integer actual1 = arr.get((int) 3);
    assertEqual(-32768, actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo031() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768);
    arr.subarray(1, 3);
    arr.subarray(0, 2);
    int actual1 = arr.length();
    assertEqual(4, actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo032() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768, 100);
    arr.subarray(1, 4);
    Integer actual1 = arr.get((int) 2);
    assertEqual(-1, actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo033() {
    Int16Array arr = Int16Array.of(0, 0, 0, 0);
    arr.subarray(1, 3);
    Integer actual1 = arr.get((int) 0);
    assertEqual(0, actual1);
    Integer actual2 = arr.get((int) 3);
    assertEqual(0, actual2);}

    @Test
    void testInt16ArraySubarrayTestTwo034() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768, 100);
    Int16Array ret = arr.subarray(1).subarray(1);
    int actual1 = ret.length();
    assertEqual(3, actual1);
    Integer actual2 = ret.get(0);
    assertEqual(-1, actual2);}

    @Test
    void testInt16ArraySubarrayTestTwo035() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768);
    Int16Array ret = arr.subarray(1, 3).fill(99);
    int actual1 = ret.length();
    assertEqual(2, actual1);
    Integer actual2 = ret.get(0);
    assertEqual(99, actual2);}

    @Test
    void testInt16ArraySubarrayTestTwo036() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768);
    Int16Array ret = arr.subarray(0, 3).reverse();
    int actual1 = ret.length();
    assertEqual(3, actual1);
    Integer actual2 = ret.get(0);
    assertEqual(-1, actual2);}

    @Test
    void testInt16ArraySubarrayTestTwo037() {
    Int16Array arr = Int16Array.of(50, 32767, 0, -1);
    Int16Array ret = arr.subarray(0, 3).sort();
    int actual1 = ret.length();
    assertEqual(3, actual1);
    Integer actual2 = ret.get(0);
    assertEqual(0, actual2);}

    @Test
    void testInt16ArraySubarrayTestTwo038() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768);
    Int16Array ret = arr.subarray(1, 4).copyWithin(0, 1);
    int actual1 = ret.length();
    assertEqual(3, actual1);
    Integer actual2 = ret.get(0);
    assertEqual(-1, actual2);}

    @Test
    void testInt16ArraySubarrayTestTwo039() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768);
    arr.subarray(1, 3).set((int) 0, 99);
    Integer actual1 = arr.get((int) 1);
    assertEqual(99, actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo040() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768);
    Int16Array ret = arr.fill(99).subarray(1, 3);
    int actual1 = ret.length();
    assertEqual(2, actual1);
    Integer actual2 = ret.get(0);
    assertEqual(99, actual2);}

    @Test
    void testInt16ArraySubarrayTestTwo041() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768);
    Int16Array ret = arr.reverse().subarray(0, 2);
    int actual1 = ret.length();
    assertEqual(2, actual1);
    Integer actual2 = ret.get(0);
    assertEqual(-32768, actual2);}

    @Test
    void testInt16ArraySubarrayTestTwo042() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768, 100, 200);
    Int16Array ret = arr.subarray(0, 5).subarray(1, 4).subarray(0, 2);
    int actual1 = ret.length();
    assertEqual(2, actual1);
    Integer actual2 = ret.get(0);
    assertEqual(0, actual2);}

    @Test
    void testInt16ArraySubarrayTestTwo043() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768);
    int val = arr
    .subarray(0, 2)
    .fill(99)
    .get((int) 0);
    assertEqual(99, val);}

    @Test
    void testInt16ArraySubarrayTestTwo044() {
    Int16Array arr = Int16Array.of(32767, 0, -1);
    int val = arr
    .subarray(0, 3)
    .reverse()
    .get((int) 0);
    assertEqual(-1, val);}

    @Test
    void testInt16ArraySubarrayTestTwo045() {
    Int16Array arr = Int16Array.of(50, 32767, 0, -1, 10);
    Int16Array ret = arr.subarray(0, 4).sort();
    int actual1 = ret.length();
    assertEqual(4, actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo046() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768, 100);
    Int16Array ret = arr.subarray(0, 4).fill(99).subarray(1, 3);
    int actual1 = ret.length();
    assertEqual(2, actual1);
    Integer actual2 = ret.get(0);
    assertEqual(99, actual2);}

    @Test
    void testInt16ArraySubarrayTestTwo047() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768, 100, 200);
    Int16Array ret = arr.subarray(0, 5).subarray(0, 3).subarray(0, 2);
    int actual1 = ret.length();
    assertEqual(2, actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo048() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768);
    Int16Array ret = arr.subarray(2, 4).fill(99);
    int actual1 = ret.byteLength();
    assertEqual(4, actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo049() {
    Int16Array arr = Int16Array.of(32767, 0, -1);
    Int16Array ret = arr.subarray();
    boolean actual1 = ret.buffer() == arr.buffer();
    assertTrue(actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo050() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768);
    Int16Array ret = arr.subarray(1, 3);
    int actual1 = ret.length();
    assertEqual(2, actual1);
    Integer actual2 = ret.get(0);
    assertEqual(0, actual2);}

    @Test
    void testInt16ArraySubarrayTestTwo051() {
    Int16Array arr = Int16Array.of(32767, 0, -1);
    Int16Array ret = arr.subarray();
    int actual1 = ret.length();
    assertEqual(3, actual1);
    Integer actual2 = ret.get(0);
    assertEqual(32767, actual2);}

    @Test
    void testInt16ArraySubarrayTestTwo052() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768);
    Int16Array ret = arr.subarray(1, 3);
    int actual1 = ret.byteOffset();
    assertEqual(2, actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo053() {
    Int16Array arr = Int16Array.of(32767, 0, -1);
    Int16Array ret = arr.subarray();
    int actual1 = ret.byteOffset();
    assertEqual(0, actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo054() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768);
    Int16Array ret = arr.subarray(2);
    int actual1 = ret.byteOffset();
    assertEqual(4, actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo055() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768);
    Int16Array retNeg = arr.subarray(-2);
    Int16Array retPos = arr.subarray(2);
    int actual1 = retNeg.byteOffset();
    int expected1 = retPos.byteOffset();
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo056() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768);
    Int16Array ret = arr.subarray(1, 3);
    arr.set((int) 1, 88);
    Integer actual1 = ret.get((int) 0);
    assertEqual(88, actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo057() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768);
    Int16Array sub1 = arr.subarray(0, 2);
    Int16Array sub2 = arr.subarray(2, 4);
    boolean actual1 = sub1.buffer() == sub2.buffer();
    assertTrue(actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo058() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768, 100, 200);
    Int16Array sub1 = arr.subarray(0, 3);
    Int16Array sub2 = arr.subarray(2, 5);
    sub1.set((int) 2, 99);
    Integer actual1 = sub2.get((int) 0);
    assertEqual(99, actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo059() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768);
    Int16Array sub1 = arr.subarray(0, 3);
    Int16Array sub2 = arr.subarray(1, 4);
    sub1.set((int) 1, 77);
    Integer actual1 = sub2.get((int) 0);
    assertEqual(77, actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo060() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768);
    Int16Array ret = arr.subarray(1, 3);
    int actual1 = ret.buffer().byteLength();
    int expected1 = arr.buffer().byteLength();
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo061() {
    Int16Array arr = Int16Array.of(32767, 0, -1);
    Int16Array ret = arr.subarray(1, 1);
    boolean actual1 = ret.buffer() == arr.buffer();
    assertTrue(actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo062() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768);
    Int16Array ret = arr.subarray(2, 2);
    int actual1 = ret.byteOffset();
    assertEqual(4, actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo063() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int16Array arr = new Int16Array(buf);
    arr.set((int) 0, 32767);
    arr.set((int) 1, 0);
    arr.set((int) 2, -1);
    arr.set((int) 3, -32768);
    arr.set((int) 4, 100);
    arr.set((int) 5, 200);
    Int16Array ret = arr.subarray(1, 4);
    boolean actual1 = ret.buffer() == buf;
    assertTrue(actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo064() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int16Array arr = new Int16Array(buf, 4, 4);
    arr.set((int) 0, 32767);
    arr.set((int) 1, 0);
    arr.set((int) 2, -1);
    arr.set((int) 3, -32768);
    Int16Array ret = arr.subarray(1, 3);
    int actual1 = ret.byteOffset();
    assertEqual(6, actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo065() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Int16Array arr = new Int16Array(buf, 4, 4);
    arr.set((int) 0, 32767);
    arr.set((int) 1, 0);
    arr.set((int) 2, -1);
    arr.set((int) 3, -32768);
    Int16Array ret = arr.subarray(0, 2);
    boolean actual1 = ret.buffer() == buf;
    assertTrue(actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo066() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768);
    Int16Array ret = arr.subarray(1, 3);
    ret.fill(88);
    Integer actual1 = arr.get((int) 1);
    assertEqual(88, actual1);
    Integer actual2 = arr.get((int) 2);
    assertEqual(88, actual2);}

    @Test
    void testInt16ArraySubarrayTestTwo067() {
    Int16Array arr = Int16Array.of(32767, 0, -1);
    Int16Array ret = arr.subarray(0, 3);
    ret.reverse();
    Integer actual1 = arr.get((int) 0);
    assertEqual(-1, actual1);
    Integer actual2 = arr.get((int) 2);
    assertEqual(32767, actual2);}

    @Test
    void testInt16ArraySubarrayTestTwo068() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768, 100);
    Int16Array sub1 = arr.subarray(0, 4);
    Int16Array sub2 = sub1.subarray(1, 3);
    boolean actual1 = sub2.buffer() == arr.buffer();
    assertTrue(actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo069() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768, 100, 200);
    Int16Array sub1 = arr.subarray(0, 3);
    Int16Array sub2 = arr.subarray(3, 6);
    arr.set((int) 0, 55);
    Integer actual1 = sub1.get((int) 0);
    assertEqual(55, actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo070() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768);
    Int16Array sub1 = arr.subarray(0, 2);
    Int16Array sub2 = arr.subarray(2, 4);
    arr.fill(77);
    Integer actual1 = sub1.get((int) 0);
    assertEqual(77, actual1);
    Integer actual2 = sub2.get((int) 0);
    assertEqual(77, actual2);}

    @Test
    void testInt16ArraySubarrayTestTwo071() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768);
    Int16Array ret = arr.subarray(0, 2);
    ret.set((int) 0, 32768);
    Integer actual1 = arr.get((int) 0);
    assertEqual(-32768, actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo072() {
    Int16Array arr = Int16Array.of(32767, 0, -1);
    Int16Array ret = arr.subarray(1, 2);
    ret.set((int) 0, Double.NaN);
    Integer actual1 = arr.get((int) 1);
    assertEqual(0, actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo073() {
    Int16Array arr = Int16Array.of(32767, 0, -1);
    Int16Array ret = arr.subarray(2, 3);
    ret.set((int) 0, Double.POSITIVE_INFINITY);
    Integer actual1 = arr.get((int) 2);
    assertEqual(0, actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo074() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768);
    Int16Array ret = arr.subarray(2, 4);
    arr.set((int) 0, 99);
    ret.set((int) 0, 88);
    Integer actual1 = arr.get((int) 0);
    assertEqual(99, actual1);
    Integer actual2 = ret.get((int) 0);
    assertEqual(88, actual2);
    Integer actual3 = arr.get((int) 2);
    assertEqual(88, actual3);}

    @Test
    void testInt16ArraySubarrayTestTwo075() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Int16Array arr = new Int16Array(buf);
    arr.set((int) 0, 32767);
    arr.set((int) 1, 0);
    arr.set((int) 2, -1);
    arr.set((int) 3, -32768);
    arr.set((int) 4, 100);
    Int16Array ret = arr.subarray(1, 3);
    ret.set((int) 0, 66);
    Integer actual1 = arr.get((int) 1);
    assertEqual(66, actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo076() {
    Int16Array arr = Int16Array.of(32767, 0, -1, -32768);
    int origOff = arr.byteOffset();
    Int16Array ret = arr.subarray(1, 3);
    int actual1 = arr.byteOffset();
    int expected1 = origOff;
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArraySubarrayTestTwo077() {
    Int16Array arr = Int16Array.of(32767, 0, -1);
    arr.subarray(1, 2);
    int actual1 = arr.length();
    assertEqual(3, actual1);
    Integer actual2 = arr.get(0);
    assertEqual(32767, actual2);}
}
