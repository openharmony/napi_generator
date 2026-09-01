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
 * Int16ArrayFillTest01 —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Int16ArrayFillTest01 extends BasTest {

    @Test
    void testInt16ArrayFillTestOne001() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    arr.fill(1);
    Integer actual1 = arr.get(0);
    assertEqualInt(1, actual1);
    Integer actual2 = arr.get(2);
    assertEqualInt(1, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(1, actual3);
    }

    @Test
    void testInt16ArrayFillTestOne002() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    arr.fill(7, 2);
    Integer actual1 = arr.get(0);
    assertEqualInt(10, actual1);
    Integer actual2 = arr.get(2);
    assertEqualInt(7, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(7, actual3);
    }

    @Test
    void testInt16ArrayFillTestOne003() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    arr.fill(9, 1, 4);
    Integer actual1 = arr.get(0);
    assertEqualInt(10, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(9, actual2);
    Integer actual3 = arr.get(3);
    assertEqualInt(9, actual3);
    Integer actual4 = arr.get(4);
    assertEqualInt(50, actual4);
    }

    @Test
    void testInt16ArrayFillTestOne004() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5});
    arr.fill(-32768);
    Integer actual1 = arr.get(0);
    assertEqualInt(-32768, actual1);
    Integer actual2 = arr.get(2);
    assertEqualInt(-32768, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(-32768, actual3);
    }

    @Test
    void testInt16ArrayFillTestOne005() {
    Int16Array arr = new Int16Array(new int[] {-1, -2, -3, -4, -5});
    arr.fill(32767);
    Integer actual1 = arr.get(0);
    assertEqualInt(32767, actual1);
    Integer actual2 = arr.get(2);
    assertEqualInt(32767, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(32767, actual3);
    }

    @Test
    void testInt16ArrayFillTestOne006() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300, 400, 500});
    arr.fill(0);
    Integer actual1 = arr.get(0);
    assertEqualInt(0, actual1);
    Integer actual2 = arr.get(2);
    assertEqualInt(0, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(0, actual3);
    }

    @Test
    void testInt16ArrayFillTestOne007() {
    Int16Array arr = new Int16Array(new int[] {50, 60, 70, 80, 90});
    int negZero = -0;
    arr.fill(negZero);
    Integer actual1 = arr.get(0);
    assertEqualInt(0, actual1);
    Integer actual2 = arr.get(3);
    assertEqualInt(0, actual2);
    }

    @Test
    void testInt16ArrayFillTestOne008() {
    Int16Array arr = new Int16Array(new int[] {0, 1, 2, 3, 4});
    arr.fill(-1);
    Integer actual1 = arr.get(0);
    assertEqualInt(-1, actual1);
    Integer actual2 = arr.get(2);
    assertEqualInt(-1, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(-1, actual3);
    }

    @Test
    void testInt16ArrayFillTestOne009() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0, 0, 0});
    int overflowValue = 32768;
    arr.fill(overflowValue);
    Integer actual1 = arr.get(0);
    assertEqualInt(-32768, actual1);
    Integer actual2 = arr.get(2);
    assertEqualInt(-32768, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(-32768, actual3);
    }

    @Test
    void testInt16ArrayFillTestOne010() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0, 0, 0});
    int underflowValue = -32769;
    arr.fill(underflowValue);
    Integer actual1 = arr.get(0);
    assertEqualInt(32767, actual1);
    Integer actual2 = arr.get(2);
    assertEqualInt(32767, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(32767, actual3);
    }

    @Test
    void testInt16ArrayFillTestOne011() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5});
    arr.fill(0x7fff);
    Integer actual1 = arr.get(0);
    assertEqualInt(32767, actual1);
    Integer actual2 = arr.get(2);
    assertEqualInt(32767, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(32767, actual3);
    }

    @Test
    void testInt16ArrayFillTestOne012() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0, 0, 0});
    arr.fill(0x8000);
    Integer actual1 = arr.get(0);
    assertEqualInt(-32768, actual1);
    Integer actual2 = arr.get(2);
    assertEqualInt(-32768, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(-32768, actual3);
    }

    @Test
    void testInt16ArrayFillTestOne013() {
    Int16Array arr = new Int16Array(new int[] {100, 200, 300, 400, 500});
    double nanAsShort = Double.NaN;
    arr.fill(nanAsShort);
    Integer actual1 = arr.get(0);
    assertEqualInt(0, actual1);
    Integer actual2 = arr.get(2);
    assertEqualInt(0, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(0, actual3);
    }

    @Test
    void testInt16ArrayFillTestOne014() {
    Int16Array arr = new Int16Array(new int[] {-100, -200, -300, -400, -500});
    double infAsShort = Double.POSITIVE_INFINITY;
    arr.fill(infAsShort);
    Integer actual1 = arr.get(0);
    assertEqualInt(0, actual1);
    Integer actual2 = arr.get(2);
    assertEqualInt(0, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(0, actual3);
    }

    @Test
    void testInt16ArrayFillTestOne015() {
    Int16Array arr = new Int16Array(new int[] {50, 60, 70, 80, 90});
    double negInfAsShort = Double.NEGATIVE_INFINITY;
    arr.fill(negInfAsShort);
    Integer actual1 = arr.get(0);
    assertEqualInt(0, actual1);
    Integer actual2 = arr.get(2);
    assertEqualInt(0, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(0, actual3);
    }

    @Test
    void testInt16ArrayFillTestOne016() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0, 0, 0});
    double floatAsShort = 3.7;
    arr.fill(floatAsShort);
    Integer actual1 = arr.get(0);
    assertEqualInt(3, actual1);
    Integer actual2 = arr.get(2);
    assertEqualInt(3, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(3, actual3);
    }

    @Test
    void testInt16ArrayFillTestOne017() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0, 0, 0});
    double negFloatAsShort = -3.7;
    arr.fill(negFloatAsShort);
    Integer actual1 = arr.get(0);
    assertEqualInt(-3, actual1);
    Integer actual2 = arr.get(2);
    assertEqualInt(-3, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(-3, actual3);
    }

    @Test
    void testInt16ArrayFillTestOne018() {
    Int16Array arr = new Int16Array(new int[] {11, 22, 33, 44, 55});
    arr.fill(99, 0);
    Integer actual1 = arr.get(0);
    assertEqualInt(99, actual1);
    Integer actual2 = arr.get(2);
    assertEqualInt(99, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(99, actual3);
    }

    @Test
    void testInt16ArrayFillTestOne019() {
    Int16Array arr = new Int16Array(new int[] {11, 22, 33, 44, 55});
    arr.fill(99, 5);
    Integer actual1 = arr.get(0);
    assertEqualInt(11, actual1);
    Integer actual2 = arr.get(2);
    assertEqualInt(33, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(55, actual3);
    }

    @Test
    void testInt16ArrayFillTestOne020() {
    Int16Array arr = new Int16Array(new int[] {11, 22, 33, 44, 55});
    arr.fill(33, -1);
    Integer actual1 = arr.get(0);
    assertEqualInt(11, actual1);
    Integer actual2 = arr.get(3);
    assertEqualInt(44, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(33, actual3);
    }

    @Test
    void testInt16ArrayFillTestOne021() {
    Int16Array arr = new Int16Array(new int[] {11, 22, 33, 44, 55});
    arr.fill(22, -2);
    Integer actual1 = arr.get(0);
    assertEqualInt(11, actual1);
    Integer actual2 = arr.get(2);
    assertEqualInt(33, actual2);
    Integer actual3 = arr.get(3);
    assertEqualInt(22, actual3);
    Integer actual4 = arr.get(4);
    assertEqualInt(22, actual4);
    }

    @Test
    void testInt16ArrayFillTestOne022() {
    Int16Array arr = new Int16Array(new int[] {11, 22, 33, 44, 55});
    arr.fill(111, -5);
    Integer actual1 = arr.get(0);
    assertEqualInt(111, actual1);
    Integer actual2 = arr.get(2);
    assertEqualInt(111, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(111, actual3);
    }

    @Test
    void testInt16ArrayFillTestOne023() {
    Int16Array arr = new Int16Array(new int[] {11, 22, 33, 44, 55});
    arr.fill(122, -6);
    Integer actual1 = arr.get(0);
    assertEqualInt(122, actual1);
    Integer actual2 = arr.get(2);
    assertEqualInt(122, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(122, actual3);
    }

    @Test
    void testInt16ArrayFillTestOne024() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    arr.fill(99, 0, 0);
    Integer actual1 = arr.get(0);
    assertEqualInt(10, actual1);
    Integer actual2 = arr.get(2);
    assertEqualInt(30, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(50, actual3);
    }

    @Test
    void testInt16ArrayFillTestOne025() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    arr.fill(99, 0, 1);
    Integer actual1 = arr.get(0);
    assertEqualInt(99, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(20, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(50, actual3);
    }

    @Test
    void testInt16ArrayFillTestOne026() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    arr.fill(88, 0, 3);
    Integer actual1 = arr.get(0);
    assertEqualInt(88, actual1);
    Integer actual2 = arr.get(2);
    assertEqualInt(88, actual2);
    Integer actual3 = arr.get(3);
    assertEqualInt(40, actual3);
    Integer actual4 = arr.get(4);
    assertEqualInt(50, actual4);
    }

    @Test
    void testInt16ArrayFillTestOne027() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    arr.fill(77, 0, 4);
    Integer actual1 = arr.get(0);
    assertEqualInt(77, actual1);
    Integer actual2 = arr.get(3);
    assertEqualInt(77, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(50, actual3);
    }

    @Test
    void testInt16ArrayFillTestOne028() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    arr.fill(66, 0, 5);
    Integer actual1 = arr.get(0);
    assertEqualInt(66, actual1);
    Integer actual2 = arr.get(2);
    assertEqualInt(66, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(66, actual3);
    }

    @Test
    void testInt16ArrayFillTestOne029() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    arr.fill(55, 0, 6);
    Integer actual1 = arr.get(0);
    assertEqualInt(55, actual1);
    Integer actual2 = arr.get(2);
    assertEqualInt(55, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(55, actual3);
    }

    @Test
    void testInt16ArrayFillTestOne030() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    arr.fill(44, 0, -1);
    Integer actual1 = arr.get(0);
    assertEqualInt(44, actual1);
    Integer actual2 = arr.get(3);
    assertEqualInt(44, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(50, actual3);
    }

    @Test
    void testInt16ArrayFillTestOne031() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    arr.fill(22, 0, -5);
    Integer actual1 = arr.get(0);
    assertEqualInt(10, actual1);
    Integer actual2 = arr.get(2);
    assertEqualInt(30, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(50, actual3);
    }

    @Test
    void testInt16ArrayFillTestOne032() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    arr.fill(11, 0, -6);
    Integer actual1 = arr.get(0);
    assertEqualInt(10, actual1);
    Integer actual2 = arr.get(2);
    assertEqualInt(30, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(50, actual3);
    }

    @Test
    void testInt16ArrayFillTestOne033() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    arr.fill(99, 1, 3);
    Integer actual1 = arr.get(0);
    assertEqualInt(10, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(99, actual2);
    Integer actual3 = arr.get(2);
    assertEqualInt(99, actual3);
    Integer actual4 = arr.get(3);
    assertEqualInt(40, actual4);
    Integer actual5 = arr.get(4);
    assertEqualInt(50, actual5);
    }

    @Test
    void testInt16ArrayFillTestOne034() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    arr.fill(88, 1, 1);
    Integer actual1 = arr.get(0);
    assertEqualInt(10, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(20, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(50, actual3);
    }

    @Test
    void testInt16ArrayFillTestOne035() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    arr.fill(77, 3, 1);
    Integer actual1 = arr.get(0);
    assertEqualInt(10, actual1);
    Integer actual2 = arr.get(2);
    assertEqualInt(30, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(50, actual3);
    }

    @Test
    void testInt16ArrayFillTestOne036() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    arr.fill(44, 4, 5);
    Integer actual1 = arr.get(0);
    assertEqualInt(10, actual1);
    Integer actual2 = arr.get(3);
    assertEqualInt(40, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(44, actual3);
    }

    @Test
    void testInt16ArrayFillTestOne037() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    arr.fill(33, 5, 0);
    Integer actual1 = arr.get(0);
    assertEqualInt(10, actual1);
    Integer actual2 = arr.get(2);
    assertEqualInt(30, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(50, actual3);
    }

    @Test
    void testInt16ArrayFillTestOne038() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    arr.fill(22, -1, 0);
    Integer actual1 = arr.get(0);
    assertEqualInt(10, actual1);
    Integer actual2 = arr.get(2);
    assertEqualInt(30, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(50, actual3);
    }

    @Test
    void testInt16ArrayFillTestOne039() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    arr.fill(100, -1, 5);
    Integer actual1 = arr.get(0);
    assertEqualInt(10, actual1);
    Integer actual2 = arr.get(3);
    assertEqualInt(40, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(100, actual3);
    }

    @Test
    void testInt16ArrayFillTestOne040() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5});
    Int16Array result = arr.fill(99);
    boolean sameRef = result == arr;
    assertTrue(sameRef);
    }

    @Test
    void testInt16ArrayFillTestOne041() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5});
    arr.fill(77).fill(66).fill(55);
    Integer actual1 = arr.get(0);
    assertEqualInt(55, actual1);
    Integer actual2 = arr.get(2);
    assertEqualInt(55, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(55, actual3);
    }

    @Test
    void testInt16ArrayFillTestOne042() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5});
    int originalLen = arr.length();
    arr.fill(50);
    int actual1 = arr.length();
    int expected1 = originalLen;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayFillTestOne043() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5});
    int originalByteLen = arr.byteLength();
    arr.fill(60);
    int actual1 = arr.byteLength();
    int expected1 = originalByteLen;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayFillTestOne044() {
    ArrayBuffer buf = new ArrayBuffer(20);
    Int16Array arr = new Int16Array(buf, 2, 5);
    int originalOffset = arr.byteOffset();
    arr.fill(70);
    int actual1 = arr.byteOffset();
    int expected1 = originalOffset;
    assertEqual(expected1, actual1);
    }

    @Test
    void testInt16ArrayFillTestOne045() {
    Int16Array arr = new Int16Array(new int[] {0});
    arr.fill(65535);
    Integer actual1 = arr.get(0);
    assertEqualInt(-1, actual1);
    }

    @Test
    void testInt16ArrayFillTestOne046() {
    Int16Array arr = new Int16Array(new int[] {1});
    arr.fill(65536);
    Integer actual1 = arr.get(0);
    assertEqualInt(0, actual1);
    }

    @Test
    void testInt16ArrayFillTestOne047() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    arr.fill(99, 2147483647);
    Integer actual1 = arr.get(0);
    assertEqualInt(10, actual1);
    Integer actual2 = arr.get(4);
    assertEqualInt(50, actual2);
    }

    @Test
    void testInt16ArrayFillTestOne048() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    arr.fill(77, 0, 2147483647);
    Integer actual1 = arr.get(0);
    assertEqualInt(77, actual1);
    Integer actual2 = arr.get(4);
    assertEqualInt(77, actual2);
    }

    @Test
    void testInt16ArrayFillTestOne049() {
    Int16Array arr = new Int16Array(0);
    arr.fill(50, 0, 0);
    int actual1 = arr.length();
    assertEqual(0, actual1);
    }

    @Test
    void testInt16ArrayFillTestOne050() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0, 0, 0});
    arr.fill(32767);
    Integer actual1 = arr.get(0);
    assertEqualInt(32767, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(32767, actual2);
    Integer actual3 = arr.get(3);
    assertEqualInt(32767, actual3);
    }

    @Test
    void testInt16ArrayFillTestOne051() {
    Int16Array arr = new Int16Array(new int[] {32767, 32767, 32767, 32767, 32767});
    arr.fill(0);
    Integer actual1 = arr.get(0);
    assertEqualInt(0, actual1);
    Integer actual2 = arr.get(2);
    assertEqualInt(0, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(0, actual3);
    }

    @Test
    void testInt16ArrayFillTestOne052() {
    Int16Array arr = new Int16Array(new int[] {-32768, -32768, -32768, -32768, -32768});
    arr.fill(32767);
    Integer actual1 = arr.get(0);
    assertEqualInt(32767, actual1);
    Integer actual2 = arr.get(2);
    assertEqualInt(32767, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(32767, actual3);
    }

    @Test
    void testInt16ArrayFillTestOne053() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    arr.fill(99, -4, -1);
    Integer actual1 = arr.get(0);
    assertEqualInt(10, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(99, actual2);
    Integer actual3 = arr.get(3);
    assertEqualInt(99, actual3);
    Integer actual4 = arr.get(4);
    assertEqualInt(50, actual4);
    }

    @Test
    void testInt16ArrayFillTestOne054() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    arr.fill(33, 0, 100);
    Integer actual1 = arr.get(0);
    assertEqualInt(33, actual1);
    Integer actual2 = arr.get(4);
    assertEqualInt(33, actual2);
    }

    @Test
    void testInt16ArrayFillTestOne055() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    arr.fill(99, 2, 3);
    Integer actual1 = arr.get(0);
    assertEqualInt(10, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(20, actual2);
    Integer actual3 = arr.get(2);
    assertEqualInt(99, actual3);
    Integer actual4 = arr.get(3);
    assertEqualInt(40, actual4);
    Integer actual5 = arr.get(4);
    assertEqualInt(50, actual5);
    }

    @Test
    void testInt16ArrayFillTestOne056() {
    Int16Array arr = new Int16Array(new int[] {42});
    arr.fill(-32768);
    Integer actual1 = arr.get(0);
    assertEqualInt(-32768, actual1);
    int actual2 = arr.length();
    assertEqual(1, actual2);
    }

    @Test
    void testInt16ArrayFillTestOne057() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3});
    arr.fill(5);
    boolean isStillView = ArrayBuffer.isView(arr);
    assertTrue(isStillView);
    }

    @Test
    void testInt16ArrayFillTestOne058() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Int16Array arr = new Int16Array(buf, 2, 4);
    arr.fill(123);
    Integer actual1 = arr.get(0);
    assertEqualInt(123, actual1);
    Integer actual2 = arr.get(3);
    assertEqualInt(123, actual2);
    }

    @Test
    void testInt16ArrayFillTestOne059() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50, 60, 70});
    arr.fill(99, 2, 5);
    Integer actual1 = arr.get(0);
    assertEqualInt(10, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(20, actual2);
    Integer actual3 = arr.get(2);
    assertEqualInt(99, actual3);
    Integer actual4 = arr.get(4);
    assertEqualInt(99, actual4);
    Integer actual5 = arr.get(5);
    assertEqualInt(60, actual5);
    Integer actual6 = arr.get(6);
    assertEqualInt(70, actual6);
    }

    @Test
    void testInt16ArrayFillTestOne060() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5});
    arr.fill(99);
    arr.set(2, 50);
    Integer actual1 = arr.get(0);
    assertEqualInt(99, actual1);
    Integer actual2 = arr.get(2);
    assertEqualInt(50, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(99, actual3);
    }

    @Test
    void testInt16ArrayFillTestOne061() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    arr.fill(5, -100);
    Integer actual1 = arr.get(0);
    assertEqualInt(5, actual1);
    Integer actual2 = arr.get(4);
    assertEqualInt(5, actual2);
    }

    @Test
    void testInt16ArrayFillTestOne062() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    arr.fill(8, 2, 999);
    Integer actual1 = arr.get(0);
    assertEqualInt(10, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(20, actual2);
    Integer actual3 = arr.get(2);
    assertEqualInt(8, actual3);
    Integer actual4 = arr.get(4);
    assertEqualInt(8, actual4);
    }

    @Test
    void testInt16ArrayFillTestOne063() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    arr.fill(99, -2, -2);
    Integer actual1 = arr.get(0);
    assertEqualInt(10, actual1);
    Integer actual2 = arr.get(3);
    assertEqualInt(40, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(50, actual3);
    }

    @Test
    void testInt16ArrayFillTestOne064() {
    Int16Array arr = Int16Array.of(1, 2, 3, 4, 5);
    arr.fill(100);
    Integer actual1 = arr.get(0);
    assertEqualInt(100, actual1);
    Integer actual2 = arr.get(2);
    assertEqualInt(100, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(100, actual3);
    }

    @Test
    void testInt16ArrayFillTestOne065() {
    Int16Array src = new Int16Array(new int[] {10, 20, 30, 40, 50});
    Int16Array arr = Int16Array.from(src);
    arr.fill(200);
    Integer actual1 = arr.get(0);
    assertEqualInt(200, actual1);
    Integer actual2 = arr.get(2);
    assertEqualInt(200, actual2);
    Integer actual3 = arr.get(4);
    assertEqualInt(200, actual3);
    }

    @Test
    void testInt16ArrayFillTestOne066() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5});
    arr.fill(99);
    Int16Array replaced = arr.with(2, 50);
    Integer actual1 = arr.get(2);
    assertEqualInt(99, actual1);
    Integer actual2 = replaced.get(2);
    assertEqualInt(50, actual2);
    }

    @Test
    void testInt16ArrayFillTestOne067() {
    Int16Array arr = new Int16Array(new int[] {0, 1, 2, 3, 4, 5, 6, 7, 8, 9});
    arr.fill(-1, 3);
    Integer actual1 = arr.get(0);
    assertEqualInt(0, actual1);
    Integer actual2 = arr.get(2);
    assertEqualInt(2, actual2);
    Integer actual3 = arr.get(3);
    assertEqualInt(-1, actual3);
    Integer actual4 = arr.get(7);
    assertEqualInt(-1, actual4);
    Integer actual5 = arr.get(9);
    assertEqualInt(-1, actual5);
    }

    @Test
    void testInt16ArrayFillTestOne068() {
    Int16Array arr = new Int16Array(new int[] {0, 0, 0, 0, 0});
    arr.fill(123);
    boolean[] allMatch = {true};
    arr.forEach((v) -> {
    if (v != 123) {
    allMatch[0] = false;
    }
    });
    assertTrue(allMatch[0]);
    }

    @Test
    void testInt16ArrayFillTestOne069() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    arr.fill(99);
    Integer actual1 = arr.get(0);
    assertEqualInt(99, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(99, actual2);
    Integer actual3 = arr.get(3);
    assertEqualInt(99, actual3);
    Integer actual4 = arr.get(4);
    assertEqualInt(99, actual4);
    }

    @Test
    void testInt16ArrayFillTestOne070() {
    Int16Array arr = new Int16Array(new int[] {10, 20, 30, 40, 50});
    Int16Array sub = arr.subarray(1, 4);
    sub.fill(99);
    Integer actual1 = arr.get(0);
    assertEqualInt(10, actual1);
    Integer actual2 = arr.get(1);
    assertEqualInt(99, actual2);
    Integer actual3 = arr.get(3);
    assertEqualInt(99, actual3);
    Integer actual4 = arr.get(4);
    assertEqualInt(50, actual4);
    }

    @Test
    void testInt16ArrayFillTestOne071() {
    Int16Array arr = new Int16Array(new int[] {1, 2, 3, 4, 5});
    arr.fill(99).reverse().fill(0);
    Integer actual1 = arr.get(0);
    assertEqualInt(0, actual1);
    Integer actual2 = arr.get(4);
    assertEqualInt(0, actual2);
    }

    @Test
    void testInt16ArrayFillTestOne072() {
    Int16Array arr = new Int16Array(new int[] {5, 3, 1, 4, 2});
    arr.sort();
    arr.fill(88);
    Integer actual1 = arr.get(0);
    assertEqualInt(88, actual1);
    Integer actual2 = arr.get(4);
    assertEqualInt(88, actual2);
    }
}
