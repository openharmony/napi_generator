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

package basetype.uint8clampedarray2;

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
 * Uint8ClampedArraySubarray02Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArraySubarray02Test extends BasTest {

    @Test
    void testUint8ClampedArraySubarrayTwo001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray sub = arr.subarray(0b0);
    assertEqual(3, sub.length());
    assertEqual(10, sub.get(0));
    assertEqual(20, sub.get(1));
    assertEqual(30, sub.get(2));}

    @Test
    void testUint8ClampedArraySubarrayTwo002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    Uint8ClampedArray sub = arr.subarray(1 + 1);
    assertEqual(30, sub.get(0));
    assertEqual(40, sub.get(1));
    assertEqual(50, sub.get(2));}

    @Test
    void testUint8ClampedArraySubarrayTwo003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    Uint8ClampedArray sub = arr.subarray(3 - 2);
    assertEqual(20, sub.get(0));
    assertEqual(30, sub.get(1));
    assertEqual(40, sub.get(2));
    assertEqual(50, sub.get(3));}

    @Test
    void testUint8ClampedArraySubarrayTwo004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray sub = arr.subarray();
    assertEqual(3, sub.length());
    assertEqual(1, sub.get(0));
    assertEqual(2, sub.get(1));
    assertEqual(3, sub.get(2));}

    @Test
    void testUint8ClampedArraySubarrayTwo005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    int start = 1;
    Uint8ClampedArray sub = arr.subarray(start);
    assertEqual(3, sub.length());
    assertEqual(20, sub.get(0));
    assertEqual(30, sub.get(1));
    assertEqual(40, sub.get(2));}

    @Test
    void testUint8ClampedArraySubarrayTwo006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray sub = arr.subarray(0, 0x7FFFFFFF);
    assertEqual(3, sub.length());
    assertEqual(1, sub.get(0));
    assertEqual(2, sub.get(1));
    assertEqual(3, sub.get(2));}

    @Test
    void testUint8ClampedArraySubarrayTwo007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    Uint8ClampedArray sub = arr.subarray(0, 0x3);
    assertEqual(3, sub.length());
    assertEqual(10, sub.get(0));
    assertEqual(20, sub.get(1));
    assertEqual(30, sub.get(2));}

    @Test
    void testUint8ClampedArraySubarrayTwo008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    Uint8ClampedArray sub = arr.subarray(0, 04);
    assertEqual(4, sub.length());
    assertEqual(10, sub.get(0));
    assertEqual(20, sub.get(1));
    assertEqual(30, sub.get(2));
    assertEqual(40, sub.get(3));}

    @Test
    void testUint8ClampedArraySubarrayTwo009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    Uint8ClampedArray sub = arr.subarray(0, 0b11);
    assertEqual(3, sub.length());
    assertEqual(10, sub.get(0));
    assertEqual(20, sub.get(1));
    assertEqual(30, sub.get(2));}

    @Test
    void testUint8ClampedArraySubarrayTwo010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    Uint8ClampedArray sub = arr.subarray(0, 2 + 2);
    assertEqual(4, sub.length());
    assertEqual(10, sub.get(0));
    assertEqual(20, sub.get(1));
    assertEqual(30, sub.get(2));
    assertEqual(40, sub.get(3));}

    @Test
    void testUint8ClampedArraySubarrayTwo011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    Uint8ClampedArray sub = arr.subarray(0, 5 - 1);
    assertEqual(4, sub.length());
    assertEqual(10, sub.get(0));
    assertEqual(20, sub.get(1));
    assertEqual(30, sub.get(2));
    assertEqual(40, sub.get(3));}

    @Test
    void testUint8ClampedArraySubarrayTwo012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = arr.subarray(1);
    assertEqual(3, sub.length());
    assertEqual(2, sub.get(0));
    assertEqual(3, sub.get(1));
    assertEqual(4, sub.get(2));}

    @Test
    void testUint8ClampedArraySubarrayTwo013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    int stop = 3;
    Uint8ClampedArray sub = arr.subarray(0, stop);
    assertEqual(3, sub.length());
    assertEqual(10, sub.get(0));
    assertEqual(20, sub.get(1));
    assertEqual(30, sub.get(2));}

    @Test
    void testUint8ClampedArraySubarrayTwo014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {11, 22, 33});
    Uint8ClampedArray sub = arr.subarray(0);
    assertEqual(3, sub.length());
    assertEqual(11, sub.get(0));
    assertEqual(22, sub.get(1));
    assertEqual(33, sub.get(2));}

    @Test
    void testUint8ClampedArraySubarrayTwo015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = arr.subarray(1);
    assertEqual(3, sub.length());
    assertEqual(2, sub.get(0));
    assertEqual(3, sub.get(1));
    assertEqual(4, sub.get(2));}

    @Test
    void testUint8ClampedArraySubarrayTwo016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray sub = arr.subarray(3);
    assertEqual(1, sub.length());
    assertEqual(40, sub.get(0));}

    @Test
    void testUint8ClampedArraySubarrayTwo017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = arr.subarray(-5);
    assertEqual(4, sub.length());
    assertEqual(1, sub.get(0));
    assertEqual(2, sub.get(1));
    assertEqual(3, sub.get(2));
    assertEqual(4, sub.get(3));}

    @Test
    void testUint8ClampedArraySubarrayTwo018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray sub = arr.subarray(1, 4);
    assertEqual(3, sub.length());
    assertEqual(2, sub.get(0));
    assertEqual(3, sub.get(1));
    assertEqual(4, sub.get(2));}

    @Test
    void testUint8ClampedArraySubarrayTwo019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray sub = arr.subarray(0, 1);
    assertEqual(1, sub.length());
    assertEqual(10, sub.get(0));}

    @Test
    void testUint8ClampedArraySubarrayTwo020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray sub = arr.subarray(0, -1);
    assertEqual(3, sub.length());
    assertEqual(10, sub.get(0));
    assertEqual(20, sub.get(1));
    assertEqual(30, sub.get(2));}

    @Test
    void testUint8ClampedArraySubarrayTwo021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray sub = arr.subarray(0, -5);
    assertEqual(0, sub.length());}

    @Test
    void testUint8ClampedArraySubarrayTwo022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 150, 200});
    Uint8ClampedArray sub = arr.subarray(0);
    assertEqual(3, sub.length());
    assertEqual(100, sub.get(0));
    assertEqual(150, sub.get(1));
    assertEqual(200, sub.get(2));}

    @Test
    void testUint8ClampedArraySubarrayTwo023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 10, 15, 20});
    Uint8ClampedArray sub = arr.subarray(-2);
    assertEqual(2, sub.length());
    assertEqual(15, sub.get(0));
    assertEqual(20, sub.get(1));}

    @Test
    void testUint8ClampedArraySubarrayTwo024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray sub = arr.subarray();
    assertEqual(5, sub.byteLength());
    assertEqual(1, sub.get(0));
    assertEqual(2, sub.get(1));
    assertEqual(3, sub.get(2));
    assertEqual(4, sub.get(3));
    assertEqual(5, sub.get(4));}

    @Test
    void testUint8ClampedArraySubarrayTwo025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray sub = arr.subarray(0, 0);
    assertEqual(0, sub.byteLength());}

    @Test
    void testUint8ClampedArraySubarrayTwo026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray sub = arr.subarray(2, 1);
    assertEqual(0, sub.byteLength());}

    @Test
    void testUint8ClampedArraySubarrayTwo027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = arr.subarray(-2, -1);
    assertEqual(1, sub.byteLength());
    assertEqual(3, sub.get(0));}

    @Test
    void testUint8ClampedArraySubarrayTwo028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new ArrayBuffer(0));
    Uint8ClampedArray sub = arr.subarray();
    assertEqual(0, sub.byteLength());}

    @Test
    void testUint8ClampedArraySubarrayTwo029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = arr.subarray(0);
    assertEqual(0, sub.byteOffset());
    assertEqual(1, sub.get(0));
    assertEqual(2, sub.get(1));
    assertEqual(3, sub.get(2));
    assertEqual(4, sub.get(3));}

    @Test
    void testUint8ClampedArraySubarrayTwo030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = arr.subarray(2, 3);
    assertEqual(2, sub.byteOffset());
    assertEqual(3, sub.get(0));}

    @Test
    void testUint8ClampedArraySubarrayTwo031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray sub = arr.subarray(0, 0);
    assertEqual(arr.buffer(), sub.buffer());}

    @Test
    void testUint8ClampedArraySubarrayTwo032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray sub = arr.subarray(2, 1);
    assertEqual(arr.buffer(), sub.buffer());}

    @Test
    void testUint8ClampedArraySubarrayTwo033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray sub = arr.subarray(999);
    assertEqual(arr.buffer(), sub.buffer());}

    @Test
    void testUint8ClampedArraySubarrayTwo034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray sub = arr.subarray(0, 0);
    assertNotNull(sub);}

    @Test
    void testUint8ClampedArraySubarrayTwo035() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray sub = arr.subarray(0);
    assertNotEqual(arr, sub);
    assertEqual(1, sub.get(0));
    assertEqual(2, sub.get(1));
    assertEqual(3, sub.get(2));}

    @Test
    void testUint8ClampedArraySubarrayTwo036() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray sub = arr.subarray(0, arr.length());
    assertNotEqual(arr, sub);
    assertEqual(1, sub.get(0));
    assertEqual(2, sub.get(1));
    assertEqual(3, sub.get(2));}

    @Test
    void testUint8ClampedArraySubarrayTwo037() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray sub = arr.subarray(0, 0);
    assertEqual(1, sub.BYTES_PER_ELEMENT);}

    @Test
    void testUint8ClampedArraySubarrayTwo038() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray sub = arr.subarray(0);
    assertEqual(0, sub.length());}

    @Test
    void testUint8ClampedArraySubarrayTwo039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray sub = arr.subarray(0, 0);
    assertEqual(0, sub.length());}

    @Test
    void testUint8ClampedArraySubarrayTwo040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray sub = arr.subarray(5, 10);
    assertEqual(0, sub.length());}

    @Test
    void testUint8ClampedArraySubarrayTwo041() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray sub = arr.subarray(-1);
    assertEqual(0, sub.length());}

    @Test
    void testUint8ClampedArraySubarrayTwo042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    Uint8ClampedArray sub = arr.subarray(0, 1);
    assertEqual(42, sub.get(0));}

    @Test
    void testUint8ClampedArraySubarrayTwo043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    Uint8ClampedArray sub = arr.subarray(1);
    assertEqual(0, sub.length());}

    @Test
    void testUint8ClampedArraySubarrayTwo044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    Uint8ClampedArray sub = arr.subarray(-1);
    assertEqual(1, sub.length());
    assertEqual(42, sub.get(0));}

    @Test
    void testUint8ClampedArraySubarrayTwo045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(256);
    Uint8ClampedArray sub = arr.subarray(128);
    assertEqual(128, sub.length());
    assertEqual(0, sub.get(0));
    assertEqual(0, sub.get(63));
    assertEqual(0, sub.get(127));}

    @Test
    void testUint8ClampedArraySubarrayTwo046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(256);
    Uint8ClampedArray sub = arr.subarray(0, 128);
    assertEqual(128, sub.length());
    assertEqual(0, sub.get(0));
    assertEqual(0, sub.get(63));
    assertEqual(0, sub.get(127));}

    @Test
    void testUint8ClampedArraySubarrayTwo047() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1024);
    Uint8ClampedArray sub = arr.subarray(512);
    assertEqual(512, sub.length());
    assertEqual(0, sub.get(0));
    assertEqual(0, sub.get(255));
    assertEqual(0, sub.get(511));}

    @Test
    void testUint8ClampedArraySubarrayTwo048() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1024);
    Uint8ClampedArray sub = arr.subarray(-1);
    assertEqual(1, sub.length());
    assertEqual(0, sub.get(0));}

    @Test
    void testUint8ClampedArraySubarrayTwo049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(65535);
    Uint8ClampedArray sub = arr.subarray(0, 1);
    assertEqual(1, sub.length());
    assertEqual(0, sub.get(0));}

    @Test
    void testUint8ClampedArraySubarrayTwo050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray sub = arr.subarray(4, 0);
    assertEqual(0, sub.length());}

    @Test
    void testUint8ClampedArraySubarrayTwo051() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray sub = arr.subarray(100, 200);
    assertEqual(0, sub.length());}

    @Test
    void testUint8ClampedArraySubarrayTwo052() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = arr.subarray(-1000, 1000);
    assertEqual(4, sub.length());
    assertEqual(1, sub.get(0));
    assertEqual(2, sub.get(1));
    assertEqual(3, sub.get(2));
    assertEqual(4, sub.get(3));}

    @Test
    void testUint8ClampedArraySubarrayTwo053() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = arr.subarray(-1000, -1000);
    assertEqual(0, sub.length());}

    @Test
    void testUint8ClampedArraySubarrayTwo054() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 8, 9});
    Uint8ClampedArray sub = arr.subarray(2, 3);
    assertEqual(9, sub.get(0));}

    @Test
    void testUint8ClampedArraySubarrayTwo055() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray sub = arr.subarray(-1, 0);
    assertEqual(0, sub.length());}

    @Test
    void testUint8ClampedArraySubarrayTwo056() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray sub = arr.subarray(-100, -50);
    assertEqual(0, sub.length());}

    @Test
    void testUint8ClampedArraySubarrayTwo057() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.subarray(1, 3);
    assertEqual(4, arr.length());}

    @Test
    void testUint8ClampedArraySubarrayTwo058() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.subarray(1, 2);
    assertEqual(10, arr.get(0));}

    @Test
    void testUint8ClampedArraySubarrayTwo059() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    arr.subarray(0, 1);
    assertEqual(30, arr.get(2));}

    @Test
    void testUint8ClampedArraySubarrayTwo060() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.subarray(0, 2);
    assertEqual(4, arr.byteLength());}

    @Test
    void testUint8ClampedArraySubarrayTwo061() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.subarray(999);
    assertEqual(3, arr.length());}

    @Test
    void testUint8ClampedArraySubarrayTwo062() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.subarray(-2);
    assertEqual(3, arr.length());}

    @Test
    void testUint8ClampedArraySubarrayTwo063() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray sub1 = arr.subarray(1, 4);
    Uint8ClampedArray sub2 = sub1.subarray(1, 2);
    assertEqual(1, sub2.length());
    assertEqual(3, sub2.get(0));}

    @Test
    void testUint8ClampedArraySubarrayTwo064() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5, 6, 7});
    Uint8ClampedArray sub1 = arr.subarray(1);
    Uint8ClampedArray sub2 = sub1.subarray(1);
    Uint8ClampedArray sub3 = sub2.subarray(1);
    assertEqual(4, sub3.length());
    assertEqual(4, sub3.get(0));
    assertEqual(5, sub3.get(1));
    assertEqual(6, sub3.get(2));
    assertEqual(7, sub3.get(3));}

    @Test
    void testUint8ClampedArraySubarrayTwo065() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5, 6, 7});
    Uint8ClampedArray sub1 = arr.subarray(1);
    Uint8ClampedArray sub2 = sub1.subarray(1);
    Uint8ClampedArray sub3 = sub2.subarray(1);
    assertEqual(3, sub3.byteOffset());
    assertEqual(4, sub3.get(0));
    assertEqual(5, sub3.get(1));
    assertEqual(6, sub3.get(2));
    assertEqual(7, sub3.get(3));}

    @Test
    void testUint8ClampedArraySubarrayTwo066() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.fill(0);
    Uint8ClampedArray sub = arr.subarray(0, 2);
    assertEqual(arr.buffer(), sub.buffer());
    assertEqual(0, sub.get(0));
    assertEqual(0, sub.get(1));}

    @Test
    void testUint8ClampedArraySubarrayTwo067() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.reverse();
    Uint8ClampedArray sub = arr.subarray(1, 3);
    assertEqual(2, sub.length());
    assertEqual(3, sub.get(0));
    assertEqual(2, sub.get(1));}

    @Test
    void testUint8ClampedArraySubarrayTwo068() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {4, 1, 3, 2});
    arr.sort();
    Uint8ClampedArray sub = arr.subarray(0, 2);
    assertEqual(2, sub.length());
    assertEqual(1, sub.get(0));
    assertEqual(2, sub.get(1));}

    @Test
    void testUint8ClampedArraySubarrayTwo069() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8ClampedArray parent = new Uint8ClampedArray(buf, 4, 8);
    Uint8ClampedArray sub = parent.subarray(2, 5);
    assertEqual(3, sub.length());
    assertEqual(6, sub.byteOffset());
    assertEqual(0, sub.get(0));
    assertEqual(0, sub.get(1));
    assertEqual(0, sub.get(2));}

    @Test
    void testUint8ClampedArraySubarrayTwo070() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8ClampedArray parent = new Uint8ClampedArray(buf, 4, 8);
    Uint8ClampedArray sub = parent.subarray(2, 6);
    assertEqual(4, sub.length());
    assertEqual(0, sub.get(0));
    assertEqual(0, sub.get(1));
    assertEqual(0, sub.get(2));
    assertEqual(0, sub.get(3));}

    @Test
    void testUint8ClampedArraySubarrayTwo071() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8ClampedArray parent = new Uint8ClampedArray(buf, 4, 8);
    Uint8ClampedArray sub = parent.subarray(1, 3);
    assertEqual(buf, sub.buffer());
    assertEqual(0, sub.get(0));
    assertEqual(0, sub.get(1));}

    @Test
    void testUint8ClampedArraySubarrayTwo072() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8ClampedArray parent = new Uint8ClampedArray(buf, 8, 0);
    Uint8ClampedArray sub = parent.subarray(0, 0);
    assertEqual(8, sub.byteOffset());}

    @Test
    void testUint8ClampedArraySubarrayTwo073() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = arr.subarray(1, 3);
    assertEqual(arr.getClass().getSimpleName(), sub.getClass().getSimpleName());
    assertEqual(2, sub.get(0));
    assertEqual(3, sub.get(1));}

    @Test
    void testUint8ClampedArraySubarrayTwo074() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = arr.subarray(1, 3);
    assertEqual(arr.BYTES_PER_ELEMENT, sub.BYTES_PER_ELEMENT);
    assertEqual(2, sub.get(0));
    assertEqual(3, sub.get(1));}

    @Test
    void testUint8ClampedArraySubarrayTwo075() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    Uint8ClampedArray sub = arr.subarray(2, 4);
    assertTrue(sub.length() + sub.byteOffset() <= arr.length());
    assertEqual(30, sub.get(0));
    assertEqual(40, sub.get(1));}

    @Test
    void testUint8ClampedArraySubarrayTwo076() {
    ArrayBuffer buf = new ArrayBuffer(32);
    Uint8ClampedArray baseView = new Uint8ClampedArray(buf, 4, 24);
    Uint8ClampedArray firstSub = baseView.subarray(4, 16);
    Uint8ClampedArray secondSub = firstSub.subarray(4, 8);
    assertEqual(4, secondSub.length());
    assertEqual(12, secondSub.byteOffset());
    assertEqual(0, secondSub.get(0));
    assertEqual(0, secondSub.get(1));
    assertEqual(0, secondSub.get(2));
    assertEqual(0, secondSub.get(3));}

    @Test
    void testUint8ClampedArraySubarrayTwo077() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = arr.subarray(0, arr.length());
    assertEqual(arr.byteOffset(), sub.byteOffset());
    assertEqual(1, sub.get(0));
    assertEqual(2, sub.get(1));
    assertEqual(3, sub.get(2));
    assertEqual(4, sub.get(3));}

    @Test
    void testUint8ClampedArraySubarrayTwo078() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = arr.subarray(0, arr.length());
    assertEqual(arr.length(), sub.length());
    assertEqual(1, sub.get(0));
    assertEqual(2, sub.get(1));
    assertEqual(3, sub.get(2));
    assertEqual(4, sub.get(3));}

    @Test
    void testUint8ClampedArraySubarrayTwo079() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray s1 = arr.subarray();
    Uint8ClampedArray s2 = arr.subarray(0, arr.length());
    assertEqual(s2.length(), s1.length());
    assertEqual(s2.byteOffset(), s1.byteOffset());
    assertEqual(10, s1.get(0));
    assertEqual(20, s1.get(1));
    assertEqual(30, s1.get(2));
    assertEqual(40, s1.get(3));}

    @Test
    void testUint8ClampedArraySubarrayTwo080() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray s1 = arr.subarray(0);
    Uint8ClampedArray s2 = arr.subarray(0, arr.length());
    assertEqual(s2.length(), s1.length());
    assertEqual(10, s1.get(0));
    assertEqual(20, s1.get(1));
    assertEqual(30, s1.get(2));
    assertEqual(40, s1.get(3));}

    @Test
    void testUint8ClampedArraySubarrayTwo081() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(10, 20, 30, 40);
    Uint8ClampedArray sub = arr.subarray(1, 3);
    assertEqual(arr.buffer(), sub.buffer());
    assertEqual(20, sub.get(0));
    assertEqual(30, sub.get(1));}

    @Test
    void testUint8ClampedArraySubarrayTwo082() {
    List<Integer> src = java.util.Arrays.asList(10, 20, 30, 40);
    Uint8ClampedArray arr = Uint8ClampedArray.from(src);
    Uint8ClampedArray sub = arr.subarray(1, 3);
    assertEqual(arr.buffer(), sub.buffer());
    assertEqual(20, sub.get(0));
    assertEqual(30, sub.get(1));}

    @Test
    void testUint8ClampedArraySubarrayTwo083() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray sub = arr.subarray(1, 3);
    sub.set(0, 99);
    assertEqual(99, arr.get(1));}

    @Test
    void testUint8ClampedArraySubarrayTwo084() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray sub = arr.subarray(1, 3);
    arr.set(2, 88);
    assertEqual(88, sub.get(1));}

    @Test
    void testUint8ClampedArraySubarrayTwo085() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.set(0, 99);
    Uint8ClampedArray sub = arr.subarray(1, 3);
    assertEqual(arr.buffer(), sub.buffer());
    assertEqual(2, sub.get(0));
    assertEqual(3, sub.get(1));}

    @Test
    void testUint8ClampedArraySubarrayTwo086() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 10, 15, 20});
    Uint8ClampedArray sub = arr.subarray(2, 4);
    assertEqual(2, sub.length());
    assertEqual(arr.get(2), sub.get(0));
    assertEqual(arr.get(3), sub.get(1));}

    @Test
    void testUint8ClampedArraySubarrayTwo087() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 10, 15, 20});
    Uint8ClampedArray sub = arr.subarray(1, 3);
    assertEqual(2, sub.length());
    assertEqual(arr.get(1), sub.get(0));
    assertEqual(arr.get(2), sub.get(1));}

    @Test
    void testUint8ClampedArraySubarrayTwo088() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {256, -1, 128.5, 0.5});
    Uint8ClampedArray sub = arr.subarray(0, 4);
    assertEqual(255, sub.get(0));
    assertEqual(0, sub.get(1));
    assertEqual(128, sub.get(2));
    assertEqual(0, sub.get(3));}

    @Test
    void testUint8ClampedArraySubarrayTwo089() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5, 6});
    Uint8ClampedArray sub = arr.subarray(2, 5);
    assertEqual(arr.buffer().byteLength(), sub.buffer().byteLength());
    assertEqual(3, sub.get(0));
    assertEqual(4, sub.get(1));
    assertEqual(5, sub.get(2));}

    @Test
    void testUint8ClampedArraySubarrayTwo090() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray sub = arr.subarray(1, 3);
    String r = String.valueOf(sub);
    assertEqual(5, r.length());
    assertEqual(20, sub.get(0));
    assertEqual(30, sub.get(1));}

    @Test
    void testUint8ClampedArraySubarrayTwo091() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray sub = arr.subarray(1, 100);
    assertEqual(2, sub.length());
    assertEqual(20, sub.get(0));
    assertEqual(30, sub.get(1));}

    @Test
    void testUint8ClampedArraySubarrayTwo092() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray sub = arr.subarray(1, 4);
    assertEqual(sub.length(), sub.byteLength());
    assertEqual(2, sub.get(0));
    assertEqual(3, sub.get(1));
    assertEqual(4, sub.get(2));}

    @Test
    void testUint8ClampedArraySubarrayTwo093() {
    ArrayBuffer buf = new ArrayBuffer(16);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 4, 8);
    Uint8ClampedArray sub = arr.subarray(2, 6);
    assertEqual(sub.byteLength(), sub.length());
    assertEqual(0, sub.get(0));
    assertEqual(0, sub.get(1));
    assertEqual(0, sub.get(2));
    assertEqual(0, sub.get(3));}
}
