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
 * Int16ArrayLastIndexOfTest02 —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Int16ArrayLastIndexOfTest02 extends BasTest {

    @Test
    void testInt16ArrayLastIndexOfTestTwo001() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    int result = arr.lastIndexOf(20);
    assertEqual(1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo002() {
    Int16Array arr = new Int16Array(new int[] {});
    int result = arr.lastIndexOf(1);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo003() {
    Int16Array arr = new Int16Array(new int[] {5, 6, 7});
    int result = arr.lastIndexOf(100);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo004() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 42});
    int result = arr.lastIndexOf(42);
    assertEqual(2, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo005() {
    Int16Array arr = new Int16Array(new int[] {5, 10, 15});
    int result = arr.lastIndexOf(5, 0);
    assertEqual(0, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo006() {
    Int16Array arr = new Int16Array(new int[] {5, 10, 15});
    int result = arr.lastIndexOf(10, 0);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo007() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 2, 1});
    int result = arr.lastIndexOf(2, 3);
    assertEqual(3, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo008() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5});
    int result = arr.lastIndexOf(3, -2);
    assertEqual(2, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo009() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3});
    int result = arr.lastIndexOf(1, -10);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo010() {
    Int16Array arr = new Int16Array(new int[] {7, 8, 9});
    int result = arr.lastIndexOf(9, 2);
    assertEqual(2, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo011() {
    Int16Array arr = new Int16Array(new int[] {4, 5, 6});
    int result = arr.lastIndexOf(6, 3);
    assertEqual(2, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo012() {
    Int16Array arr = new Int16Array(new int[] {8, 9, 10});
    int result = arr.lastIndexOf(9);
    assertEqual(1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo013() {
    Int16Array arr = new Int16Array(new int[] {3, 6, 9});
    int result = arr.lastIndexOf(6);
    assertEqual(1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo014() {
    Int16Array arr = new Int16Array(new int[] {2, 4, 6});
    int result = arr.lastIndexOf(4);
    assertEqual(1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo015() {
    Int16Array arr = new Int16Array(new int[] {11, 22, 33});
    int result = arr.lastIndexOf(22);
    assertEqual(1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo016() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3});
    int result = arr.lastIndexOf(99);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo017() {
    Int16Array arr = new Int16Array(new int[] {5, 10, 15, 20});
    int result = arr.lastIndexOf(15);
    boolean actual1 = result < arr.length();
    assertTrue(actual1);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo018() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    int result = arr.lastIndexOf(10);
    assertEqual(0, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo019() {
    Int16Array arr = new Int16Array(new int[] {-1, 2, -1});
    int result = arr.lastIndexOf(-1);
    assertEqual(2, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo020() {
    Int16Array arr = new Int16Array(new int[] {7, 2, 7});
    int result = arr.lastIndexOf(2, 0);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo021() {
    Int16Array arr = new Int16Array(new int[] {4, 4, 3, 4});
    int result = arr.lastIndexOf(4, 1);
    assertEqual(1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo022() {
    Int16Array arr = new Int16Array(new int[] {5, 6, 7});
    int result = arr.lastIndexOf(5, 3);
    assertEqual(0, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo023() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4});
    int result = arr.lastIndexOf(1, 100);
    assertEqual(0, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo024() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4});
    int result = arr.lastIndexOf(4, -1);
    assertEqual(3, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo025() {
    Int16Array arr = new Int16Array(new int[] {5, 10, 15, 20});
    int result = arr.lastIndexOf(15, -2);
    assertEqual(2, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo026() {
    Int16Array arr = new Int16Array(new int[] {8, 8, 6, 7});
    int result = arr.lastIndexOf(8, -3);
    assertEqual(1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo027() {
    Int16Array arr = new Int16Array(new int[] {9, 2, 3, 4});
    int result = arr.lastIndexOf(9, -4);
    assertEqual(0, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo028() {
    Int16Array arr = new Int16Array(new int[] {9, 2, 3, 4});
    int result = arr.lastIndexOf(2, -4);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo029() {
    Int16Array arr = new Int16Array(new int[] {5, 6, 7});
    int result = arr.lastIndexOf(5, -4);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo030() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 1, 2});
    int result = arr.lastIndexOf(1);
    assertEqual(2, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo031() {
    Int16Array arr = new Int16Array(new int[] {5, 5, 5, 5});
    int result = arr.lastIndexOf(5);
    assertEqual(3, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo032() {
    Int16Array arr = new Int16Array(new int[] {3, 1, 3, 1, 3});
    int result = arr.lastIndexOf(3, 2);
    assertEqual(2, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo033() {
    Int16Array arr = new Int16Array(new int[] {2, 4, 2, 4, 2});
    int result = arr.lastIndexOf(4, 2);
    assertEqual(1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo034() {
    Int16Array arr = new Int16Array(new int[] {6, 7, 6, 8});
    int result = arr.lastIndexOf(6);
    assertEqual(2, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo035() {
    Int16Array arr = new Int16Array(new int[] {9, 2, 3, 9});
    int result = arr.lastIndexOf(9);
    assertEqual(3, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo036() {
    Int16Array arr = new Int16Array(new int[] {5, 10, 15});
    int result = arr.lastIndexOf(Double.NaN, 2);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo037() {
    Int16Array arr = new Int16Array(new int[] {5, 0, 10});
    int result = arr.lastIndexOf(65536);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo038() {
    Int16Array arr = new Int16Array(new int[] {1, 0, 2});
    int result = arr.lastIndexOf(0.5);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo039() {
    Int16Array arr = new Int16Array(new int[] {32767, 100, 200});
    int result = arr.lastIndexOf(0x7fff);
    assertEqual(0, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo040() {
    Int16Array arr = new Int16Array(new int[] {0, -32768, 50});
    int result = arr.lastIndexOf(0x8000);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo041() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    int originalLen = arr.length();
    arr.lastIndexOf(20);
    int actual1 = arr.length();
    int expected1 = originalLen;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo042() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    int originalLen = arr.length();
    arr.lastIndexOf(999);
    int actual1 = arr.length();
    int expected1 = originalLen;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo043() {
    Int16Array arr = new Int16Array(new int[] {});
    arr.lastIndexOf(1);
    int actual1 = arr.length();
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo044() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5});
    int originalLen = arr.length();
    arr.lastIndexOf(3, 3);
    int actual1 = arr.length();
    int expected1 = originalLen;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo045() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5});
    int originalLen = arr.length();
    arr.lastIndexOf(4, -2);
    int actual1 = arr.length();
    int expected1 = originalLen;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo046() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3});
    int originalLen = arr.length();
    arr.lastIndexOf(Double.NaN);
    int actual1 = arr.length();
    int expected1 = originalLen;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo047() {
    Int16Array arr = new Int16Array(new int[] {-32768, 0, 32767});
    int originalLen = arr.length();
    arr.lastIndexOf(32768);
    int actual1 = arr.length();
    int expected1 = originalLen;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo048() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4});
    int originalByteLen = arr.byteLength();
    arr.lastIndexOf(3);
    int actual1 = arr.byteLength();
    int expected1 = originalByteLen;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo049() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4});
    int originalByteLen = arr.byteLength();
    arr.lastIndexOf(999);
    int actual1 = arr.byteLength();
    int expected1 = originalByteLen;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo050() {
    Int16Array arr = new Int16Array(new int[] {});
    arr.lastIndexOf(1);
    int actual1 = arr.byteLength();
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo051() {
    Int16Array arr = new Int16Array(new int[] {5, 6, 7, 8});
    int originalByteLen = arr.byteLength();
    arr.lastIndexOf(6, 2);
    int actual1 = arr.byteLength();
    int expected1 = originalByteLen;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo052() {
    Int16Array arr = new Int16Array(new int[] {5, 6, 7, 8});
    int originalByteLen = arr.byteLength();
    arr.lastIndexOf(7, -2);
    int actual1 = arr.byteLength();
    int expected1 = originalByteLen;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo053() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    arr.lastIndexOf(20);
    Integer actual1 = arr.get(0);
    assertEqual(10, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(20, actual2);
    Integer actual3 = arr.get(2);
    assertEqual(30, actual3);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo054() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    arr.lastIndexOf(999);
    Integer actual1 = arr.get(0);
    assertEqual(10, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(20, actual2);
    Integer actual3 = arr.get(2);
    assertEqual(30, actual3);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo055() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 2, 1});
    arr.lastIndexOf(2, 2);
    Integer actual1 = arr.get(0);
    assertEqual(1, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(2, actual2);
    Integer actual3 = arr.get(2);
    assertEqual(3, actual3);
    Integer actual4 = arr.get(3);
    assertEqual(2, actual4);
    Integer actual5 = arr.get(4);
    assertEqual(1, actual5);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo056() {
    Int16Array arr = new Int16Array(new int[] {4, 5, 6, 5});
    arr.lastIndexOf(5, -2);
    Integer actual1 = arr.get(0);
    assertEqual(4, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(5, actual2);
    Integer actual3 = arr.get(2);
    assertEqual(6, actual3);
    Integer actual4 = arr.get(3);
    assertEqual(5, actual4);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo057() {
    Int16Array arr = new Int16Array(new int[] {7, 8, 9});
    arr.lastIndexOf(Double.NaN);
    Integer actual1 = arr.get(0);
    assertEqual(7, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(8, actual2);
    Integer actual3 = arr.get(2);
    assertEqual(9, actual3);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo058() {
    Int16Array arr = new Int16Array(new int[] {0, 1, 0});
    arr.lastIndexOf(Double.POSITIVE_INFINITY);
    Integer actual1 = arr.get(0);
    assertEqual(0, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(1, actual2);
    Integer actual3 = arr.get(2);
    assertEqual(0, actual3);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo059() {
    Int16Array arr = new Int16Array(new int[] {-32768, 0, 32767});
    arr.lastIndexOf(32767);
    Integer actual1 = arr.get(0);
    assertEqual(-32768, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(0, actual2);
    Integer actual3 = arr.get(2);
    assertEqual(32767, actual3);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo060() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 2});
    int result = arr.lastIndexOf(2);
    assertEqual(3, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo061() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3});
    int result = arr.lastIndexOf(99);
    assertEqual(-1, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo062() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int16Array arr = new Int16Array(buf);
    ArrayBuffer bufBefore = arr.buffer();
    arr.lastIndexOf(0);
    boolean actual1 = arr.buffer() == bufBefore;
    assertTrue(actual1);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo063() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int16Array arr = new Int16Array(buf);
    arr.set(0, 100);
    arr.set(1, 200);
    arr.set(2, 300);
    arr.lastIndexOf(200);
    Int16Array view = new Int16Array(arr.buffer());
    Integer actual1 = view.get(1);
    assertEqual(200, actual1);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo064() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Int16Array arr = new Int16Array(buf, 0, 3);
    int originalOffset = arr.byteOffset();
    arr.lastIndexOf(0);
    int actual1 = arr.byteOffset();
    int expected1 = originalOffset;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo065() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Int16Array arr = new Int16Array(buf, 2, 3);
    int originalOffset = arr.byteOffset();
    arr.lastIndexOf(0);
    int actual1 = arr.byteOffset();
    int expected1 = originalOffset;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo066() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3});
    arr.lastIndexOf(2);
    int actual1 = arr.BYTES_PER_ELEMENT;
    assertEqual(2, actual1);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo067() {
    Int16Array arr = new Int16Array(new int[] {});
    arr.lastIndexOf(1);
    int actual1 = arr.BYTES_PER_ELEMENT;
    assertEqual(2, actual1);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo068() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int16Array arrA = new Int16Array(buf, 0, 2);
    Int16Array arrB = new Int16Array(buf, 4, 2);
    arrA.set(0, 10);
    arrA.set(1, 20);
    arrB.set(0, 30);
    arrB.set(1, 40);
    arrA.lastIndexOf(20);
    Integer actual1 = arrB.get(0);
    assertEqual(30, actual1);
    Integer actual2 = arrB.get(1);
    assertEqual(40, actual2);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo069() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Int16Array arr = new Int16Array(buf);
    arr.set(0, 5);
    arr.set(1, 10);
    arr.set(2, 15);
    arr.lastIndexOf(10);
    Int16Array altView = new Int16Array(buf);
    Integer actual1 = altView.get(0);
    assertEqual(5, actual1);
    Integer actual2 = altView.get(1);
    assertEqual(10, actual2);
    Integer actual3 = altView.get(2);
    assertEqual(15, actual3);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo070() {
    Int16Array arr = new Int16Array(new int[] {7});
    int result = arr.lastIndexOf(7);
    assertEqual(0, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo071() {
    Int16Array arr = new Int16Array(new int[] {3, 3, 3, 3, 3});
    int result = arr.lastIndexOf(3);
    assertEqual(4, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo072() {
    Int16Array arr = new Int16Array(new int[] {8, 8, 8, 8, 8});
    int result = arr.lastIndexOf(8, 2);
    assertEqual(2, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo073() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0});
    int result = arr.lastIndexOf(0);
    assertEqual(2, result);
    }

    @Test
    void testInt16ArrayLastIndexOfTestTwo074() {
    Int16Array arr = new Int16Array(new int[] {-1, -1, -1, -1});
    int result = arr.lastIndexOf(-1);
    assertEqual(3, result);
    }
}
