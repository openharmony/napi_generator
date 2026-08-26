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
import basetype.common.IteratorResult;
import basetype.common.Int16Array;

import org.junit.jupiter.api.Test;

/**
 * Int16ArrayFillTest06 —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Int16ArrayFillTest06 extends BasTest {

    @Test
    void testInt16ArrayFillTestSix001() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    int val = (int) 99;
    arr.fill(val);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 99;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(3);
    int expected2 = (int) 99;
    assertEqual(expected2, actual2);}

    @Test
    void testInt16ArrayFillTestSix002() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    arr.fill(88);
    Integer actual1 = arr.get(0);
    assertEqual(88, actual1);
    Integer actual2 = arr.get(4);
    assertEqual(88, actual2);}

    @Test
    void testInt16ArrayFillTestSix003() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    int val = 77;
    arr.fill(val);
    Integer actual1 = arr.get(0);
    assertEqual(77, actual1);
    Integer actual2 = arr.get(2);
    assertEqual(77, actual2);}

    @Test
    void testInt16ArrayFillTestSix004() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    int val = (int) 55;
    arr.fill(val, 2);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 10;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(2);
    int expected2 = (int) 55;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(4);
    int expected3 = (int) 55;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestSix005() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    arr.fill(66, 1);
    Integer actual1 = arr.get(0);
    assertEqual(10, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(66, actual2);
    Integer actual3 = arr.get(4);
    assertEqual(66, actual3);}

    @Test
    void testInt16ArrayFillTestSix006() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    int val = (int) 44;
    arr.fill(val, 1, 3);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 10;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 44;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(2);
    int expected3 = (int) 44;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(3);
    int expected4 = (int) 40;
    assertEqual(expected4, actual4);}

    @Test
    void testInt16ArrayFillTestSix007() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    arr.fill(33, 0, 2);
    Integer actual1 = arr.get(0);
    assertEqual(33, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(33, actual2);
    Integer actual3 = arr.get(2);
    assertEqual(30, actual3);}

    @Test
    void testInt16ArrayFillTestSix008() {
    Int16Array arrE = new Int16Array(new int[] {5, 5, 5});
    Int16Array arrN = new Int16Array(new int[] {5, 5, 5});
    int val = (int) 0;
    arrE.fill(val);
    arrN.fill(0);
    Integer actual1 = arrE.get(0);
    Integer expected1 = arrN.get(0);
    assertEqual(expected1, actual1);
    Integer actual2 = arrE.get(1);
    Integer expected2 = arrN.get(1);
    assertEqual(expected2, actual2);}

    @Test
    void testInt16ArrayFillTestSix009() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0});
    int val = (int) 32767;
    arr.fill(val);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 32767;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 32767;
    assertEqual(expected2, actual2);}

    @Test
    void testInt16ArrayFillTestSix010() {
    Int16Array arrE = new Int16Array(new int[] {0, 0, 0});
    Int16Array arrN = new Int16Array(new int[] {0, 0, 0});
    int val = (int) 32767;
    arrE.fill(val);
    arrN.fill(32767);
    Integer actual1 = arrE.get(0);
    Integer expected1 = arrN.get(0);
    assertEqual(expected1, actual1);
    Integer actual2 = arrE.get(1);
    Integer expected2 = arrN.get(1);
    assertEqual(expected2, actual2);
    Integer actual3 = arrE.get(2);
    Integer expected3 = arrN.get(2);
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestSix011() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0});
    int val = -(int) 32768;
    arr.fill(val);
    Integer actual1 = arr.get(0);
    int expected1 = -(int) 32768;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = -(int) 32768;
    assertEqual(expected2, actual2);}

    @Test
    void testInt16ArrayFillTestSix012() {
    Int16Array arrE = new Int16Array(new int[] {0, 0, 0});
    Int16Array arrN = new Int16Array(new int[] {0, 0, 0});
    int val = -(int) 32768;
    arrE.fill(val);
    arrN.fill(-32768);
    Integer actual1 = arrE.get(0);
    Integer expected1 = arrN.get(0);
    assertEqual(expected1, actual1);
    Integer actual2 = arrE.get(1);
    Integer expected2 = arrN.get(1);
    assertEqual(expected2, actual2);
    Integer actual3 = arrE.get(2);
    Integer expected3 = arrN.get(2);
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestSix013() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40});
    int valE = (int) 5;
    arr.fill(valE);
    arr.fill(99, 1, 3);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 5;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(99, actual2);
    Integer actual3 = arr.get(2);
    assertEqual(99, actual3);
    Integer actual4 = arr.get(3);
    int expected4 = (int) 5;
    assertEqual(expected4, actual4);}

    @Test
    void testInt16ArrayFillTestSix014() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40});
    arr.fill(77);
    int valE = (int) 3;
    arr.fill(valE, 0, 2);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 3;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 3;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(2);
    assertEqual(77, actual3);
    Integer actual4 = arr.get(3);
    assertEqual(77, actual4);}

    @Test
    void testInt16ArrayFillTestSix015() {
    Int16Array arrE = new Int16Array(new int[] {0, 0, 0});
    Int16Array arrN = new Int16Array(new int[] {0, 0, 0});
    int val = -(int) 100;
    arrE.fill(val);
    arrN.fill(-100);
    Integer actual1 = arrE.get(0);
    Integer expected1 = arrN.get(0);
    assertEqual(expected1, actual1);
    Integer actual2 = arrE.get(1);
    Integer expected2 = arrN.get(1);
    assertEqual(expected2, actual2);}

    @Test
    void testInt16ArrayFillTestSix016() {
    Int16Array arrE = new Int16Array(new int[] {0, 0, 0});
    Int16Array arrN = new Int16Array(new int[] {0, 0, 0});
    int val = (int) 1;
    arrE.fill(val, 1, 2);
    arrN.fill(1, 1, 2);
    Integer actual1 = arrE.get(0);
    Integer expected1 = arrN.get(0);
    assertEqual(expected1, actual1);
    Integer actual2 = arrE.get(1);
    Integer expected2 = arrN.get(1);
    assertEqual(expected2, actual2);
    Integer actual3 = arrE.get(2);
    Integer expected3 = arrN.get(2);
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestSix017() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40});
    int val = (int) 7;
    arr.fill(val);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 7;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(3);
    int expected2 = (int) 7;
    assertEqual(expected2, actual2);}

    @Test
    void testInt16ArrayFillTestSix018() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40});
    arr.fill(7);
    Integer actual1 = arr.get(0);
    assertEqual(7, actual1);
    Integer actual2 = arr.get(3);
    assertEqual(7, actual2);}

    @Test
    void testInt16ArrayFillTestSix019() {
    Int16Array arrE = new Int16Array(new int[] {1, 2, 3, 4});
    Int16Array arrN = new Int16Array(new int[] {1, 2, 3, 4});
    int val = (int) 42;
    arrE.fill(val);
    arrN.fill(42);
    Integer actual1 = arrE.get(0);
    Integer expected1 = arrN.get(0);
    assertEqual(expected1, actual1);
    Integer actual2 = arrE.get(1);
    Integer expected2 = arrN.get(1);
    assertEqual(expected2, actual2);
    Integer actual3 = arrE.get(3);
    Integer expected3 = arrN.get(3);
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestSix020() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    int val = (int) 8;
    arr.fill(val, 3);
    Integer actual1 = arr.get(2);
    int expected1 = (int) 30;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(3);
    int expected2 = (int) 8;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(4);
    int expected3 = (int) 8;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestSix021() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    arr.fill(8, 3);
    Integer actual1 = arr.get(2);
    assertEqual(30, actual1);
    Integer actual2 = arr.get(3);
    assertEqual(8, actual2);
    Integer actual3 = arr.get(4);
    assertEqual(8, actual3);}

    @Test
    void testInt16ArrayFillTestSix022() {
    Int16Array arrE = new Int16Array(new int[] {1, 2, 3, 4, 5});
    Int16Array arrN = new Int16Array(new int[] {1, 2, 3, 4, 5});
    int val = (int) 99;
    arrE.fill(val, 2);
    arrN.fill(99, 2);
    Integer actual1 = arrE.get(2);
    Integer expected1 = arrN.get(2);
    assertEqual(expected1, actual1);
    Integer actual2 = arrE.get(4);
    Integer expected2 = arrN.get(4);
    assertEqual(expected2, actual2);}

    @Test
    void testInt16ArrayFillTestSix023() {
    Int16Array arrDefault = new Int16Array(new int[] {5, 5, 5, 5});
    Int16Array arrExplicit = new Int16Array(new int[] {5, 5, 5, 5});
    int val = (int) 3;
    arrDefault.fill(val);
    arrExplicit.fill(val, 0);
    Integer actual1 = arrDefault.get(0);
    Integer expected1 = arrExplicit.get(0);
    assertEqual(expected1, actual1);
    Integer actual2 = arrDefault.get(3);
    Integer expected2 = arrExplicit.get(3);
    assertEqual(expected2, actual2);}

    @Test
    void testInt16ArrayFillTestSix024() {
    Int16Array arrDefault = new Int16Array(new int[] {5, 5, 5, 5});
    Int16Array arrExplicit = new Int16Array(new int[] {5, 5, 5, 5});
    arrDefault.fill(3);
    arrExplicit.fill(3, 0);
    Integer actual1 = arrDefault.get(0);
    Integer expected1 = arrExplicit.get(0);
    assertEqual(expected1, actual1);
    Integer actual2 = arrDefault.get(3);
    Integer expected2 = arrExplicit.get(3);
    assertEqual(expected2, actual2);}

    @Test
    void testInt16ArrayFillTestSix025() {
    Int16Array arrOmit = new Int16Array(new int[] {1, 2, 3, 4, 5});
    Int16Array arrUndef = new Int16Array(new int[] {1, 2, 3, 4, 5});
    int val = (int) 6;
    arrOmit.fill(val, 2);
    arrUndef.fill(val, 2);
    Integer actual1 = arrOmit.get(4);
    Integer expected1 = arrUndef.get(4);
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArrayFillTestSix026() {
    Int16Array arrOmit = new Int16Array(new int[] {1, 2, 3, 4, 5});
    Int16Array arrUndef = new Int16Array(new int[] {1, 2, 3, 4, 5});
    arrOmit.fill(6, 2);
    arrUndef.fill(6, 2);
    Integer actual1 = arrOmit.get(4);
    Integer expected1 = arrUndef.get(4);
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArrayFillTestSix027() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    int val = (int) 5;
    Int16Array ret = arr.fill(val);
    boolean actual1 = ret == arr;
    assertTrue(actual1);}

    @Test
    void testInt16ArrayFillTestSix028() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array ret = arr.fill(5);
    boolean actual1 = ret == arr;
    assertTrue(actual1);}

    @Test
    void testInt16ArrayFillTestSix029() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40});
    int val = (int) 1;
    Int16Array ret = arr.fill(val);
    int actual1 = ret.length();
    int expected1 = arr.length();
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArrayFillTestSix030() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40});
    Int16Array ret = arr.fill(1);
    int actual1 = ret.length();
    int expected1 = arr.length();
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArrayFillTestSix031() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    int val = (int) 7;
    Int16Array ret = arr.fill(val).fill(99);
    boolean actual1 = ret == arr;
    assertTrue(actual1);
    Integer actual2 = ret.get(0);
    assertEqual(99, actual2);}

    @Test
    void testInt16ArrayFillTestSix032() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    int val = (int) 3;
    Int16Array ret = arr.fill(88).fill(val);
    boolean actual1 = ret == arr;
    assertTrue(actual1);
    Integer actual2 = ret.get(0);
    int expected2 = (int) 3;
    assertEqual(expected2, actual2);}

    @Test
    void testInt16ArrayFillTestSix033() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0, 0});
    int val = (int) 1;
    Int16Array ret = arr.fill(val).fill(2).fill(val, 2, 4);
    boolean actual1 = ret == arr;
    assertTrue(actual1);
    Integer actual2 = ret.get(0);
    assertEqual(2, actual2);
    Integer actual3 = ret.get(2);
    int expected3 = (int) 1;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestSix034() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    int val = (int) 9;
    int result = arr.fill(val).get(1);
    assertEqual((int) 9, result);}

    @Test
    void testInt16ArrayFillTestSix035() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    int result = arr.fill(9).get(1);
    assertEqual(9, result);}

    @Test
    void testInt16ArrayFillTestSix036() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0, 0, 0});
    int val1 = (int) 5;
    int val2 = (int) 9;
    Int16Array mid = arr.fill(val1, 0, 2);
    Int16Array filled = mid.fill(val2, 3, 5);
    boolean actual1 = mid == arr;
    assertTrue(actual1);
    boolean actual2 = filled == arr;
    assertTrue(actual2);}

    @Test
    void testInt16ArrayFillTestSix037() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0});
    int val = (int) 42;
    arr.fill(val);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 42;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 42;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(2);
    int expected3 = (int) 42;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestSix038() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0});
    arr.fill(42);
    Integer actual1 = arr.get(0);
    assertEqual(42, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(42, actual2);
    Integer actual3 = arr.get(2);
    assertEqual(42, actual3);}

    @Test
    void testInt16ArrayFillTestSix039() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40});
    int lenBefore = arr.length();
    int val = (int) 7;
    arr.fill(val);
    int actual1 = arr.length();
    int expected1 = lenBefore;
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArrayFillTestSix040() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40});
    int lenBefore = arr.length();
    arr.fill(7);
    int actual1 = arr.length();
    int expected1 = lenBefore;
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArrayFillTestSix041() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3});
    int val = (int) 0;
    arr.fill(val);
    int actual1 = arr.BYTES_PER_ELEMENT;
    assertEqual(2, actual1);}

    @Test
    void testInt16ArrayFillTestSix042() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3});
    arr.fill(0);
    int actual1 = arr.BYTES_PER_ELEMENT;
    assertEqual(2, actual1);}

    @Test
    void testInt16ArrayFillTestSix043() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4});
    int byteLenBefore = arr.byteLength();
    int val = (int) 5;
    arr.fill(val);
    int actual1 = arr.byteLength();
    int expected1 = byteLenBefore;
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArrayFillTestSix044() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4});
    int byteLenBefore = arr.byteLength();
    arr.fill(5);
    int actual1 = arr.byteLength();
    int expected1 = byteLenBefore;
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArrayFillTestSix045() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0});
    int val = (int) 77;
    arr.fill(val);
    String str = String.valueOf(arr);
    assertEqual("77,77,77", str);}

    @Test
    void testInt16ArrayFillTestSix046() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0});
    arr.fill(77);
    String str = String.valueOf(arr);
    assertEqual("77,77,77", str);}

    @Test
    void testInt16ArrayFillTestSix047() {
    Int16Array arrE = new Int16Array(new int[] {0, 0, 0});
    Int16Array arrN = new Int16Array(new int[] {0, 0, 0});
    int val = (int) 50;
    arrE.fill(val);
    arrN.fill(50);
    String actual1 = arrE.join(",");
    String expected1 = arrN.join(",");
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArrayFillTestSix048() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0, 0});
    int val = (int) 10;
    arr.fill(val);
    arr.set(2, (int) 99);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 10;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 10;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(2);
    int expected3 = (int) 99;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(3);
    int expected4 = (int) 10;
    assertEqual(expected4, actual4);}

    @Test
    void testInt16ArrayFillTestSix049() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0, 0});
    arr.fill(10);
    arr.set(2, 99);
    Integer actual1 = arr.get(0);
    assertEqual(10, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(10, actual2);
    Integer actual3 = arr.get(2);
    assertEqual(99, actual3);
    Integer actual4 = arr.get(3);
    assertEqual(10, actual4);}

    @Test
    void testInt16ArrayFillTestSix050() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Int16Array arr = new Int16Array(buf, 2, 3);
    int val = (int) 1;
    arr.fill(val);
    int actual1 = arr.byteOffset();
    assertEqual(2, actual1);}

    @Test
    void testInt16ArrayFillTestSix051() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Int16Array arr = new Int16Array(buf, 2, 3);
    arr.fill(1);
    int actual1 = arr.byteOffset();
    assertEqual(2, actual1);}

    @Test
    void testInt16ArrayFillTestSix052() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int16Array view1 = new Int16Array(buf, 0, 4);
    Int16Array view2 = new Int16Array(buf, 0, 4);
    int val = (int) 99;
    view1.fill(val);
    Integer actual1 = view2.get(0);
    int expected1 = (int) 99;
    assertEqual(expected1, actual1);
    Integer actual2 = view2.get(1);
    int expected2 = (int) 99;
    assertEqual(expected2, actual2);}

    @Test
    void testInt16ArrayFillTestSix053() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Int16Array view1 = new Int16Array(buf, 0, 4);
    Int16Array view2 = new Int16Array(buf, 0, 4);
    view1.fill(99);
    Integer actual1 = view2.get(0);
    assertEqual(99, actual1);
    Integer actual2 = view2.get(1);
    assertEqual(99, actual2);}

    @Test
    void testInt16ArrayFillTestSix054() {
    Int16Array parent = new Int16Array(new int[] {0, 0, 0, 0, 0});
    Int16Array child = parent.subarray(1, 4);
    int val = (int) 7;
    parent.fill(val);
    Integer actual1 = child.get(0);
    int expected1 = (int) 7;
    assertEqual(expected1, actual1);
    Integer actual2 = child.get(1);
    int expected2 = (int) 7;
    assertEqual(expected2, actual2);
    Integer actual3 = child.get(2);
    int expected3 = (int) 7;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestSix055() {
    Int16Array parent = new Int16Array(new int[] {0, 0, 0, 0});
    int val = (int) 55;
    parent.fill(val);
    Int16Array child = parent.subarray(1, 3);
    Integer actual1 = child.get(0);
    int expected1 = (int) 55;
    assertEqual(expected1, actual1);
    Integer actual2 = child.get(1);
    int expected2 = (int) 55;
    assertEqual(expected2, actual2);}

    @Test
    void testInt16ArrayFillTestSix056() {
    Int16Array parent = new Int16Array(new int[] {0, 0, 0, 0});
    parent.fill(55);
    Int16Array child = parent.subarray(1, 3);
    Integer actual1 = child.get(0);
    assertEqual(55, actual1);
    Integer actual2 = child.get(1);
    assertEqual(55, actual2);}

    @Test
    void testInt16ArrayFillTestSix057() {
    Int16Array parent = new Int16Array(new int[] {0, 0, 0, 0, 0});
    Int16Array child = parent.subarray(1, 4);
    int val = (int) 33;
    child.fill(val);
    Integer actual1 = parent.get(0);
    assertEqual(0, actual1);
    Integer actual2 = parent.get(1);
    int expected2 = (int) 33;
    assertEqual(expected2, actual2);
    Integer actual3 = parent.get(3);
    int expected3 = (int) 33;
    assertEqual(expected3, actual3);
    Integer actual4 = parent.get(4);
    assertEqual(0, actual4);}

    @Test
    void testInt16ArrayFillTestSix058() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3});
    ArrayBuffer bufBefore = arr.buffer();
    int val = (int) 9;
    arr.fill(val);
    boolean actual1 = bufBefore == arr.buffer();
    assertTrue(actual1);}

    @Test
    void testInt16ArrayFillTestSix059() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    int val = (int) 1;
    arr.fill(val, 2, 4);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 10;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 20;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(2);
    int expected3 = (int) 1;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(3);
    int expected4 = (int) 1;
    assertEqual(expected4, actual4);
    Integer actual5 = arr.get(4);
    int expected5 = (int) 50;
    assertEqual(expected5, actual5);}

    @Test
    void testInt16ArrayFillTestSix060() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int16Array view1 = new Int16Array(buf, 0, 4);
    Int16Array view2 = new Int16Array(buf, 2, 3);
    int val = (int) 77;
    view1.fill(val, 1, 3);
    Integer actual1 = view2.get(0);
    int expected1 = (int) 77;
    assertEqual(expected1, actual1);
    Integer actual2 = view2.get(1);
    int expected2 = (int) 77;
    assertEqual(expected2, actual2);}

    @Test
    void testInt16ArrayFillTestSix061() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int16Array view1 = new Int16Array(buf, 0, 4);
    Int16Array view2 = new Int16Array(buf, 2, 3);
    view1.fill(77, 1, 3);
    Integer actual1 = view2.get(0);
    assertEqual(77, actual1);
    Integer actual2 = view2.get(1);
    assertEqual(77, actual2);}

    @Test
    void testInt16ArrayFillTestSix062() {
    Int16Array parent = new Int16Array(new int[] {0, 0, 0, 0, 0});
    int valP = (int) 10;
    parent.fill(valP);
    Int16Array child = parent.subarray(2, 5);
    int valC = (int) 20;
    child.fill(valC);
    Integer actual1 = parent.get(0);
    int expected1 = (int) 10;
    assertEqual(expected1, actual1);
    Integer actual2 = parent.get(2);
    int expected2 = (int) 20;
    assertEqual(expected2, actual2);
    Integer actual3 = parent.get(4);
    int expected3 = (int) 20;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestSix063() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0, 0});
    int val1 = (int) 5;
    int val2 = (int) 8;
    arr.fill(val1);
    arr.fill(val2);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 8;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 8;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(2);
    int expected3 = (int) 8;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(3);
    int expected4 = (int) 8;
    assertEqual(expected4, actual4);}

    @Test
    void testInt16ArrayFillTestSix064() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array identBefore = arr;
    int lenBefore = arr.length();
    int val = (int) 1;
    arr.fill(val);
    boolean actual1 = arr == identBefore;
    assertTrue(actual1);
    int actual2 = arr.length();
    int expected2 = lenBefore;
    assertEqual(expected2, actual2);}

    @Test
    void testInt16ArrayFillTestSix065() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array identBefore = arr;
    int lenBefore = arr.length();
    arr.fill(1);
    boolean actual1 = arr == identBefore;
    assertTrue(actual1);
    int actual2 = arr.length();
    int expected2 = lenBefore;
    assertEqual(expected2, actual2);}

    @Test
    void testInt16ArrayFillTestSix066() {
    Int16Array arr = new Int16Array(0);
    int val = (int) 5;
    arr.fill(val);
    int actual1 = arr.length();
    assertEqual(0, actual1);}

    @Test
    void testInt16ArrayFillTestSix067() {
    ArrayBuffer buf = new ArrayBuffer(12);
    Int16Array arr = new Int16Array(buf, 4, 3);
    int val = (int) 2;
    arr.fill(val);
    int actual1 = arr.byteOffset();
    assertEqual(4, actual1);}

    @Test
    void testInt16ArrayFillTestSix068() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3});
    ArrayBuffer bufBefore = arr.buffer();
    arr.fill(99);
    ArrayBuffer bufAfter = arr.buffer();
    boolean actual1 = bufBefore == bufAfter;
    assertTrue(actual1);}

    @Test
    void testInt16ArrayFillTestSix069() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array identBefore = arr;
    int val = (int) 5;
    arr.fill(val, 5);
    boolean actual1 = arr == identBefore;
    assertTrue(actual1);
    Integer actual2 = arr.get(0);
    int expected2 = (int) 10;
    assertEqual(expected2, actual2);}

    @Test
    void testInt16ArrayFillTestSix070() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array identBefore = arr;
    arr.fill(5, 5);
    boolean actual1 = arr == identBefore;
    assertTrue(actual1);
    Integer actual2 = arr.get(0);
    assertEqual(10, actual2);}

    @Test
    void testInt16ArrayFillTestSix071() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40});
    int val = (int) 9;
    arr.fill(val, 3, 1);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 10;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 20;
    assertEqual(expected2, actual2);}

    @Test
    void testInt16ArrayFillTestSix072() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0});
    arr.fill(32768);
    Integer actual1 = arr.get(0);
    assertEqual(-32768, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(-32768, actual2);}

    @Test
    void testInt16ArrayFillTestSix073() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0});
    arr.fill(-32769);
    Integer actual1 = arr.get(0);
    assertEqual(32767, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(32767, actual2);}

    @Test
    void testInt16ArrayFillTestSix074() {
    Int16Array arr = new Int16Array(new int[] {0, 0});
    arr.fill(65535);
    Integer actual1 = arr.get(0);
    assertEqual(-1, actual1);}

    @Test
    void testInt16ArrayFillTestSix075() {
    Int16Array arr = new Int16Array(new int[] {0, 0});
    arr.fill(65536);
    Integer actual1 = arr.get(0);
    assertEqual(0, actual1);}

    @Test
    void testInt16ArrayFillTestSix076() {
    Int16Array arrW = new Int16Array(new int[] {0});
    Int16Array arrD = new Int16Array(new int[] {0});
    arrW.fill(32767 + 65536);
    arrD.fill(32767);
    Integer actual1 = arrW.get(0);
    Integer expected1 = arrD.get(0);
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArrayFillTestSix077() {
    Int16Array arrNaN = new Int16Array(new int[] {1, 1});
    Int16Array arrZero = new Int16Array(new int[] {1, 1});
    arrNaN.fill(Double.NaN);
    arrZero.fill(0);
    Integer actual1 = arrNaN.get(0);
    Integer expected1 = arrZero.get(0);
    assertEqual(expected1, actual1);
    Integer actual2 = arrNaN.get(1);
    Integer expected2 = arrZero.get(1);
    assertEqual(expected2, actual2);}

    @Test
    void testInt16ArrayFillTestSix078() {
    Int16Array arrInf = new Int16Array(new int[] {1, 1});
    Int16Array arrZero = new Int16Array(new int[] {1, 1});
    arrInf.fill(Double.POSITIVE_INFINITY);
    arrZero.fill(0);
    Integer actual1 = arrInf.get(0);
    Integer expected1 = arrZero.get(0);
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArrayFillTestSix079() {
    Int16Array arrNInf = new Int16Array(new int[] {1, 1});
    Int16Array arrZero = new Int16Array(new int[] {1, 1});
    arrNInf.fill(-Double.POSITIVE_INFINITY);
    arrZero.fill(0);
    Integer actual1 = arrNInf.get(0);
    Integer expected1 = arrZero.get(0);
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArrayFillTestSix080() {
    Int16Array arrNZero = new Int16Array(new int[] {1, 1});
    Int16Array arrZero = new Int16Array(new int[] {1, 1});
    arrNZero.fill(-0);
    arrZero.fill(0);
    Integer actual1 = arrNZero.get(0);
    Integer expected1 = arrZero.get(0);
    assertEqual(expected1, actual1);}

    @Test
    void testInt16ArrayFillTestSix081() {
    Int16Array arr = new Int16Array(new int[] {0});
    arr.fill(3.7);
    Integer actual1 = arr.get(0);
    assertEqual(3, actual1);}

    @Test
    void testInt16ArrayFillTestSix082() {
    Int16Array arr = new Int16Array(new int[] {0});
    arr.fill(-3.7);
    Integer actual1 = arr.get(0);
    assertEqual(-3, actual1);}

    @Test
    void testInt16ArrayFillTestSix083() {
    Int16Array arr = new Int16Array(new int[] {0});
    arr.fill(32768.9);
    Integer actual1 = arr.get(0);
    assertEqual(-32768, actual1);}

    @Test
    void testInt16ArrayFillTestSix084() {
    Int16Array arr = new Int16Array(new int[] {0});
    arr.fill(-32769.9);
    Integer actual1 = arr.get(0);
    assertEqual(32767, actual1);}

    @Test
    void testInt16ArrayFillTestSix085() {
    Int16Array arrN = new Int16Array(new int[] {0});
    Int16Array arrE = new Int16Array(new int[] {0});
    arrN.fill(32768);
    int valE = (int) 32767;
    arrE.fill(valE);
    Integer actual1 = arrN.get(0);
    assertEqual(-32768, actual1);
    Integer actual2 = arrE.get(0);
    int expected2 = (int) 32767;
    assertEqual(expected2, actual2);}

    @Test
    void testInt16ArrayFillTestSix086() {
    Int16Array arr = new Int16Array(new int[] {0});
    arr.fill(32767 + 65536);
    Integer actual1 = arr.get(0);
    assertEqual(32767, actual1);}

    @Test
    void testInt16ArrayFillTestSix087() {
    Int16Array arr = new Int16Array(new int[] {0});
    arr.fill(-32768 - 65536);
    Integer actual1 = arr.get(0);
    assertEqual(-32768, actual1);}

    @Test
    void testInt16ArrayFillTestSix088() {
    Int16Array parent = new Int16Array(new int[] {0, 0, 0, 0});
    parent.fill(32768);
    Int16Array child = parent.subarray(1, 3);
    Integer actual1 = child.get(0);
    assertEqual(-32768, actual1);
    Integer actual2 = child.get(1);
    assertEqual(-32768, actual2);}

    @Test
    void testInt16ArrayFillTestSix089() {
    Int16Array parent = new Int16Array(new int[] {0, 0, 0});
    parent.fill(32768);
    parent.set(2, 100);
    Int16Array child = parent.subarray(0, 2);
    Integer actual1 = child.get(0);
    assertEqual(-32768, actual1);
    Integer actual2 = child.get(1);
    assertEqual(-32768, actual2);}

    @Test
    void testInt16ArrayFillTestSix090() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0, 0, 0});
    int valE = (int) 10;
    arr.fill(valE);
    arr.fill(32768, 2, 4);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 10;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 10;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(2);
    assertEqual(-32768, actual3);
    Integer actual4 = arr.get(3);
    assertEqual(-32768, actual4);
    Integer actual5 = arr.get(4);
    int expected5 = (int) 10;
    assertEqual(expected5, actual5);}

    @Test
    void testInt16ArrayFillTestSix091() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0, 0, 0});
    arr.fill(32768);
    int valE = (int) 50;
    arr.fill(valE, 1, 3);
    Integer actual1 = arr.get(0);
    assertEqual(-32768, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 50;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(2);
    int expected3 = (int) 50;
    assertEqual(expected3, actual3);
    Integer actual4 = arr.get(3);
    assertEqual(-32768, actual4);
    Integer actual5 = arr.get(4);
    assertEqual(-32768, actual5);}

    @Test
    void testInt16ArrayFillTestSix092() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0});
    int val1 = (int) 1;
    int val2 = (int) 2;
    arr.fill(val1);
    arr.fill(32768);
    arr.fill(val2);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 2;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 2;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(2);
    int expected3 = (int) 2;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestSix093() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0});
    arr.fill(32768);
    int[] count = {0};
    arr.forEach((value, index) -> {
    assertEqual(-32768, value);
    count[0]++;});
    assertEqual(3, count[0]);}

    @Test
    void testInt16ArrayFillTestSix094() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0});
    int val = (int) 100;
    arr.fill(val);
    int[] count = {0};
    arr.forEach((value, index) -> {
    assertEqual((int) 100, value);
    count[0]++;});
    assertEqual(3, count[0]);}

    @Test
    void testInt16ArrayFillTestSix095() {
    Int16Array arrE = new Int16Array(new int[] {0, 0, 0});
    Int16Array arrN = new Int16Array(new int[] {0, 0, 0});
    int val = (int) 42;
    arrE.fill(val);
    arrN.fill(42);
    Int16Array.KeyIterator iterE = arrE.values();
    Int16Array.KeyIterator iterN = arrN.values();
    IteratorResult nextE = iterE.next();
    IteratorResult nextN = iterN.next();
    while (!nextE.done && !nextN.done) {
    int actual1 = nextE.value;
    int expected1 = nextN.value;
    assertEqual(expected1, actual1);
    nextE = iterE.next();
    nextN = iterN.next();}
    }

    @Test
    void testInt16ArrayFillTestSix096() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0});
    arr.fill(32768);
    boolean result = arr.every((v) -> { return v == -32768;});
    assertTrue(result);}

    @Test
    void testInt16ArrayFillTestSix097() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0});
    int val = (int) 77;
    arr.fill(val);
    boolean result = arr.some((v) -> { return v == ((int) 77);});
    assertTrue(result);}

    @Test
    void testInt16ArrayFillTestSix098() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3});
    arr.fill(Double.NaN);
    int idx = arr.indexOf(0);
    assertEqual(0, idx);}

    @Test
    void testInt16ArrayFillTestSix099() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0});
    int val = (int) 55;
    arr.fill(val);
    int idx = arr.indexOf((int) 55);
    assertEqual(0, idx);}

    @Test
    void testInt16ArrayFillTestSix100() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    int val = (int) 99;
    Int16Array ret = arr.fill(val, 3);
    boolean actual1 = ret == arr;
    assertTrue(actual1);
    Integer actual2 = arr.get(0);
    int expected2 = (int) 10;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(2);
    int expected3 = (int) 30;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestSix101() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    Int16Array ret = arr.fill(99, 3);
    boolean actual1 = ret == arr;
    assertTrue(actual1);
    Integer actual2 = arr.get(0);
    assertEqual(10, actual2);
    Integer actual3 = arr.get(2);
    assertEqual(30, actual3);}

    @Test
    void testInt16ArrayFillTestSix102() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    int val = (int) 99;
    arr.fill(val, 10);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 10;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(1);
    int expected2 = (int) 20;
    assertEqual(expected2, actual2);
    Integer actual3 = arr.get(2);
    int expected3 = (int) 30;
    assertEqual(expected3, actual3);}

    @Test
    void testInt16ArrayFillTestSix103() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30});
    arr.fill(99, 10);
    Integer actual1 = arr.get(0);
    assertEqual(10, actual1);
    Integer actual2 = arr.get(1);
    assertEqual(20, actual2);
    Integer actual3 = arr.get(2);
    assertEqual(30, actual3);}

    @Test
    void testInt16ArrayFillTestSix104() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40});
    int val = (int) 7;
    arr.fill(val, 3, 3);
    Integer actual1 = arr.get(0);
    int expected1 = (int) 10;
    assertEqual(expected1, actual1);
    Integer actual2 = arr.get(3);
    int expected2 = (int) 40;
    assertEqual(expected2, actual2);}

    @Test
    void testInt16ArrayFillTestSix105() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40});
    arr.fill(7, 3, 3);
    Integer actual1 = arr.get(0);
    assertEqual(10, actual1);
    Integer actual2 = arr.get(3);
    assertEqual(40, actual2);}

    @Test
    void testInt16ArrayFillTestSix106() {
    Int16Array arr = new Int16Array(0);
    int val = (int) 5;
    Int16Array ret = arr.fill(val);
    int actual1 = arr.length();
    assertEqual(0, actual1);}

    @Test
    void testInt16ArrayFillTestSix107() {
    Int16Array arr = new Int16Array(0);
    Int16Array ret = arr.fill(5);
    int actual1 = arr.length();
    assertEqual(0, actual1);}
}
