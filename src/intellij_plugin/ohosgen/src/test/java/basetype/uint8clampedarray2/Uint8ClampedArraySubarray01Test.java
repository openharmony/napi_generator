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
import basetype.common.IteratorResult;
import basetype.common.Uint8ClampedArray;

import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArraySubarray01Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArraySubarray01Test extends BasTest {

    @Test
    void testUint8ClampedArraySubarrayOne001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray sub = arr.subarray();
    assertEqual(3, sub.length());
    assertEqualInt(10, sub.get(0));
    assertEqualInt(20, sub.get(1));
    assertEqualInt(30, sub.get(2));
    }

    @Test
    void testUint8ClampedArraySubarrayOne002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    Uint8ClampedArray sub = arr.subarray(2);
    assertEqual(3, sub.length());
    assertEqualInt(30, sub.get(0));
    assertEqualInt(40, sub.get(1));
    assertEqualInt(50, sub.get(2));
    }

    @Test
    void testUint8ClampedArraySubarrayOne003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray sub = arr.subarray(0, 0);
    assertEqual(3, arr.length());
    assertEqual(0, sub.length());
    assertEqualInt(1, arr.get(0));
    assertEqualInt(2, arr.get(1));
    assertEqualInt(3, arr.get(2));
    }

    @Test
    void testUint8ClampedArraySubarrayOne004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 10, 15, 20});
    Uint8ClampedArray sub = arr.subarray(0, 4);
    assertEqual(4, sub.length());
    assertEqualInt(5, sub.get(0));
    assertEqualInt(10, sub.get(1));
    assertEqualInt(15, sub.get(2));
    assertEqualInt(20, sub.get(3));
    }

    @Test
    void testUint8ClampedArraySubarrayOne005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray sub = arr.subarray(3);
    assertEqual(1, sub.length());
    assertEqualInt(40, sub.get(0));
    }

    @Test
    void testUint8ClampedArraySubarrayOne006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray sub = arr.subarray(3);
    assertEqual(0, sub.length());
    }

    @Test
    void testUint8ClampedArraySubarrayOne007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray sub = arr.subarray(2147483647);
    assertEqual(0, sub.length());
    }

    @Test
    void testUint8ClampedArraySubarrayOne008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray sub = arr.subarray(-1);
    assertEqual(1, sub.length());
    assertEqualInt(40, sub.get(0));
    }

    @Test
    void testUint8ClampedArraySubarrayOne009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = arr.subarray(-4);
    assertEqual(4, sub.length());
    assertEqualInt(1, sub.get(0));
    assertEqualInt(2, sub.get(1));
    assertEqualInt(3, sub.get(2));
    assertEqualInt(4, sub.get(3));
    }

    @Test
    void testUint8ClampedArraySubarrayOne010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray sub = arr.subarray(Integer.MIN_VALUE);
    assertEqual(3, sub.length());
    assertEqualInt(1, sub.get(0));
    assertEqualInt(2, sub.get(1));
    assertEqualInt(3, sub.get(2));
    }

    @Test
    void testUint8ClampedArraySubarrayOne011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray sub = arr.subarray(0, 1);
    assertEqual(1, sub.length());
    assertEqualInt(10, sub.get(0));
    }

    @Test
    void testUint8ClampedArraySubarrayOne012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray sub = arr.subarray(0, 3);
    assertEqual(3, sub.length());
    assertEqualInt(10, sub.get(0));
    assertEqualInt(20, sub.get(1));
    assertEqualInt(30, sub.get(2));
    }

    @Test
    void testUint8ClampedArraySubarrayOne013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray sub = arr.subarray(0, 5);
    assertEqual(4, sub.length());
    assertEqualInt(10, sub.get(0));
    assertEqualInt(20, sub.get(1));
    assertEqualInt(30, sub.get(2));
    assertEqualInt(40, sub.get(3));
    }

    @Test
    void testUint8ClampedArraySubarrayOne014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray sub = arr.subarray(0, 2147483647);
    assertEqual(3, sub.length());
    assertEqualInt(1, sub.get(0));
    assertEqualInt(2, sub.get(1));
    assertEqualInt(3, sub.get(2));
    }

    @Test
    void testUint8ClampedArraySubarrayOne015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray sub = arr.subarray(0, -1);
    assertEqual(3, sub.length());
    assertEqualInt(10, sub.get(0));
    assertEqualInt(20, sub.get(1));
    assertEqualInt(30, sub.get(2));
    }

    @Test
    void testUint8ClampedArraySubarrayOne016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray sub = arr.subarray(0, -4);
    assertEqual(0, sub.length());
    }

    @Test
    void testUint8ClampedArraySubarrayOne017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray sub = arr.subarray(0, Integer.MIN_VALUE);
    assertEqual(0, sub.length());
    }

    @Test
    void testUint8ClampedArraySubarrayOne018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 110, 120, 130});
    Uint8ClampedArray sub = arr.subarray(0, 2);
    assertEqual(2, sub.length());
    assertEqualInt(100, sub.get(0));
    assertEqualInt(110, sub.get(1));
    }

    @Test
    void testUint8ClampedArraySubarrayOne019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = arr.subarray(2, 2);
    assertEqual(0, sub.length());
    }

    @Test
    void testUint8ClampedArraySubarrayOne020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = arr.subarray(3, 1);
    assertEqual(0, sub.length());
    }

    @Test
    void testUint8ClampedArraySubarrayOne021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    Uint8ClampedArray sub = arr.subarray(-3, 4);
    assertEqual(2, sub.length());
    assertEqualInt(30, sub.get(0));
    assertEqualInt(40, sub.get(1));
    }

    @Test
    void testUint8ClampedArraySubarrayOne022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    Uint8ClampedArray sub = arr.subarray(1, -1);
    assertEqual(3, sub.length());
    assertEqualInt(20, sub.get(0));
    assertEqualInt(30, sub.get(1));
    assertEqualInt(40, sub.get(2));
    }

    @Test
    void testUint8ClampedArraySubarrayOne023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    Uint8ClampedArray sub = arr.subarray(-4, -1);
    assertEqual(3, sub.length());
    assertEqualInt(20, sub.get(0));
    assertEqualInt(30, sub.get(1));
    assertEqualInt(40, sub.get(2));
    }

    @Test
    void testUint8ClampedArraySubarrayOne024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray sub = arr.subarray(-1, -2);
    assertEqual(0, sub.length());
    }

    @Test
    void testUint8ClampedArraySubarrayOne025() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray sub = arr.subarray(2147483647, Integer.MIN_VALUE);
    assertEqual(0, sub.length());
    }

    @Test
    void testUint8ClampedArraySubarrayOne026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray sub = arr.subarray();
    assertEqual(0, sub.length());
    }

    @Test
    void testUint8ClampedArraySubarrayOne027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    Uint8ClampedArray sub = arr.subarray();
    assertEqual(1, sub.length());
    assertEqualInt(42, sub.get(0));
    }

    @Test
    void testUint8ClampedArraySubarrayOne028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(255);
    Uint8ClampedArray sub = arr.subarray(0, 255);
    assertEqual(255, sub.length());
    assertEqualInt(0, sub.get(0));
    assertEqualInt(0, sub.get(127));
    assertEqualInt(0, sub.get(254));
    }

    @Test
    void testUint8ClampedArraySubarrayOne029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(255);
    Uint8ClampedArray sub = arr.subarray(254, 255);
    assertEqual(1, sub.length());
    assertEqualInt(0, sub.get(0));
    }

    @Test
    void testUint8ClampedArraySubarrayOne030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(65535);
    Uint8ClampedArray sub = arr.subarray();
    assertEqual(65535, sub.length());
    assertEqualInt(0, sub.get(0));
    assertEqualInt(0, sub.get(32767));
    assertEqualInt(0, sub.get(65534));
    }

    @Test
    void testUint8ClampedArraySubarrayOne031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray sub = arr.subarray(0, 1);
    assertEqual(1, sub.length());
    assertEqualInt(1, sub.get(0));
    }

    @Test
    void testUint8ClampedArraySubarrayOne032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray sub = arr.subarray();
    assertEqual(3, sub.length());
    assertEqualInt(1, sub.get(0));
    assertEqualInt(2, sub.get(1));
    assertEqualInt(3, sub.get(2));
    }

    @Test
    void testUint8ClampedArraySubarrayOne033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray sub = arr.subarray(0, 2);
    assertEqual(2, sub.length());
    assertEqualInt(1, sub.get(0));
    assertEqualInt(2, sub.get(1));
    }

    @Test
    void testUint8ClampedArraySubarrayOne034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray sub = arr.subarray(100);
    assertEqual(0, sub.length());
    }

    @Test
    void testUint8ClampedArraySubarrayOne035() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray sub = arr.subarray(0, 100);
    assertEqual(3, sub.length());
    assertEqualInt(1, sub.get(0));
    assertEqualInt(2, sub.get(1));
    assertEqualInt(3, sub.get(2));
    }

    @Test
    void testUint8ClampedArraySubarrayOne036() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray sub = arr.subarray(-1000);
    assertEqual(3, sub.length());
    assertEqualInt(1, sub.get(0));
    assertEqualInt(2, sub.get(1));
    assertEqualInt(3, sub.get(2));
    }

    @Test
    void testUint8ClampedArraySubarrayOne037() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray sub = arr.subarray(Integer.MIN_VALUE, 2147483647);
    assertEqual(3, sub.length());
    assertEqualInt(1, sub.get(0));
    assertEqualInt(2, sub.get(1));
    assertEqualInt(3, sub.get(2));
    }

    @Test
    void testUint8ClampedArraySubarrayOne038() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    Uint8ClampedArray sub = arr.subarray(-3, -1);
    assertEqual(2, sub.length());
    assertEqualInt(30, sub.get(0));
    assertEqualInt(40, sub.get(1));
    }

    @Test
    void testUint8ClampedArraySubarrayOne039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray sub = arr.subarray(0, 1000);
    assertEqual(3, sub.length());
    assertEqualInt(10, sub.get(0));
    assertEqualInt(20, sub.get(1));
    assertEqualInt(30, sub.get(2));
    }

    @Test
    void testUint8ClampedArraySubarrayOne040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {88, 99, 100});
    Uint8ClampedArray sub = arr.subarray(0, 1);
    assertEqual(1, sub.length());
    assertEqualInt(88, sub.get(0));
    }

    @Test
    void testUint8ClampedArraySubarrayOne041() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {88, 99, 100});
    Uint8ClampedArray sub = arr.subarray(1);
    assertEqual(2, sub.length());
    assertEqualInt(99, sub.get(0));
    assertEqualInt(100, sub.get(1));
    }

    @Test
    void testUint8ClampedArraySubarrayOne042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new ArrayBuffer(0));
    Uint8ClampedArray sub = arr.subarray();
    assertEqual(arr.length(), sub.length());
    }

    @Test
    void testUint8ClampedArraySubarrayOne043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray sub = arr.subarray(1, 3);
    assertEqual(2, sub.length());
    assertEqualInt(20, sub.get(0));
    assertEqualInt(30, sub.get(1));
    }

    @Test
    void testUint8ClampedArraySubarrayOne044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 10, 15, 20});
    Uint8ClampedArray sub = arr.subarray(-2);
    assertEqual(2, sub.length());
    assertEqualInt(15, sub.get(0));
    assertEqualInt(20, sub.get(1));
    }

    @Test
    void testUint8ClampedArraySubarrayOne045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.set(1, 300);
    Uint8ClampedArray sub = arr.subarray(1, 2);
    assertEqual(1, sub.length());
    assertEqualInt(255, sub.get(0));
    }

    @Test
    void testUint8ClampedArraySubarrayOne046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.set(0, -5);
    Uint8ClampedArray sub = arr.subarray(0, 1);
    assertEqual(1, sub.length());
    assertEqualInt(0, sub.get(0));
    }

    @Test
    void testUint8ClampedArraySubarrayOne047() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray sub = arr.subarray(1, 4);
    assertEqual(3, sub.length());
    assertEqualInt(2, sub.get(0));
    assertEqualInt(3, sub.get(1));
    assertEqualInt(4, sub.get(2));
    }

    @Test
    void testUint8ClampedArraySubarrayOne048() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray sub = arr.subarray(-2);
    assertEqual(2, sub.length());
    assertEqualInt(4, sub.get(0));
    assertEqualInt(5, sub.get(1));
    }

    @Test
    void testUint8ClampedArraySubarrayOne049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = arr.subarray(100);
    assertEqual(0, sub.length());
    }

    @Test
    void testUint8ClampedArraySubarrayOne050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5, 6});
    Uint8ClampedArray sub1 = arr.subarray(2);
    Uint8ClampedArray sub2 = sub1.subarray(1);
    assertEqual(4, sub1.length());
    assertEqual(3, sub2.length());
    assertEqualInt(3, sub1.get(0));
    assertEqualInt(4, sub1.get(1));
    assertEqualInt(5, sub1.get(2));
    assertEqualInt(6, sub1.get(3));
    assertEqualInt(4, sub2.get(0));
    assertEqualInt(5, sub2.get(1));
    assertEqualInt(6, sub2.get(2));
    }

    @Test
    void testUint8ClampedArraySubarrayOne051() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 4);
    Uint8ClampedArray sub = arr.subarray(1);
    assertEqual(3, sub.length());
    assertEqual(3, sub.byteOffset());
    assertEqualInt(0, sub.get(0));
    assertEqualInt(0, sub.get(1));
    assertEqualInt(0, sub.get(2));
    }

    @Test
    void testUint8ClampedArraySubarrayOne052() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = arr.subarray(1, 3);
    assertEqual(2, sub.length());
    assertEqualInt(2, sub.get(0));
    assertEqualInt(3, sub.get(1));
    }

    @Test
    void testUint8ClampedArraySubarrayOne053() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub1 = arr.subarray(1);
    Uint8ClampedArray sub2 = sub1.subarray(1);
    assertEqual(3, sub1.length());
    assertEqual(2, sub2.length());
    assertEqualInt(2, sub1.get(0));
    assertEqualInt(3, sub1.get(1));
    assertEqualInt(4, sub1.get(2));
    assertEqualInt(3, sub2.get(0));
    assertEqualInt(4, sub2.get(1));
    }

    @Test
    void testUint8ClampedArraySubarrayOne054() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray subA = arr.subarray(0, 2);
    Uint8ClampedArray subB = arr.subarray(2, 4);
    assertEqual(2, subA.length());
    assertEqual(2, subB.length());
    assertEqualInt(1, subA.get(0));
    assertEqualInt(2, subA.get(1));
    assertEqualInt(3, subB.get(0));
    assertEqualInt(4, subB.get(1));
    }

    @Test
    void testUint8ClampedArraySubarrayOne055() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    Uint8ClampedArray sub = arr.subarray(1);
    assertEqual(3, sub.length());
    assertEqual(buf, sub.buffer());
    assertEqualInt(0, sub.get(0));
    assertEqualInt(0, sub.get(1));
    assertEqualInt(0, sub.get(2));
    }

    @Test
    void testUint8ClampedArraySubarrayOne056() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray sub = arr.subarray(1, 3);
    arr.set(1, 99);
    assertEqual(2, sub.length());
    assertEqualInt(99, sub.get(0));
    assertEqualInt(30, sub.get(1));
    }

    @Test
    void testUint8ClampedArraySubarrayOne057() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray sub = arr.subarray(1, 3);
    arr.set(2, 500);
    assertEqual(2, sub.length());
    assertEqualInt(20, sub.get(0));
    assertEqualInt(255, sub.get(1));
    }

    @Test
    void testUint8ClampedArraySubarrayOne058() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray sub = arr.subarray(0, 2);
    arr.set(0, -100);
    assertEqual(2, sub.length());
    assertEqualInt(0, sub.get(0));
    assertEqualInt(20, sub.get(1));
    }

    @Test
    void testUint8ClampedArraySubarrayOne059() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray sub = arr.subarray(1, 3);
    arr.fill(7);
    assertEqual(2, sub.length());
    assertEqualInt(7, sub.get(0));
    assertEqualInt(7, sub.get(1));
    }

    @Test
    void testUint8ClampedArraySubarrayOne060() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray sub = arr.subarray(1, 3);
    sub.set(0, 88);
    assertEqual(2, sub.length());
    assertEqualInt(88, sub.get(0));
    assertEqualInt(30, sub.get(1));
    }

    @Test
    void testUint8ClampedArraySubarrayOne061() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray sub = arr.subarray(0, 2);
    sub.set(1, 400);
    assertEqual(2, sub.length());
    assertEqualInt(10, sub.get(0));
    assertEqualInt(255, sub.get(1));
    }

    @Test
    void testUint8ClampedArraySubarrayOne062() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray sub = arr.subarray(0, 2);
    sub.set(0, Double.NaN);
    assertEqual(2, sub.length());
    assertEqualInt(0, sub.get(0));
    assertEqualInt(20, sub.get(1));
    }

    @Test
    void testUint8ClampedArraySubarrayOne063() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray sub = arr.subarray(1, 3);
    sub.fill(5);
    assertEqual(2, sub.length());
    assertEqualInt(5, sub.get(0));
    assertEqualInt(5, sub.get(1));
    }

    @Test
    void testUint8ClampedArraySubarrayOne064() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray sub = arr.subarray(1, 3);
    arr.set(1, 77);
    double firstSeen = 0.0;
    for (Integer v : sub.values()) {
    firstSeen = v ;
    break;
    }
    assertEqual(2, sub.length());
    assertEqualInt(77, sub.get(0));
    assertEqualInt(30, sub.get(1));
    }

    @Test
    void testUint8ClampedArraySubarrayOne065() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray sub = arr.subarray(1, 3);
    arr.set(1, 88);
    Uint8ClampedArray.KeyIterator it = sub.values();
    IteratorResult first = it.next();
    assertEqual(2, sub.length());
    assertEqualInt(88, sub.get(0));
    assertEqualInt(30, sub.get(1));
    }

    @Test
    void testUint8ClampedArraySubarrayOne066() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray sub = arr.subarray(1, 3);
    arr.set(2, 999);
    double secondSeen = 0.0;
    int idx = 0;
    for (Integer v : sub.values()) {
    if (idx == 1) {
    secondSeen = v ;
    }
    idx = idx + 1;
    }
    assertEqual(2, sub.length());
    assertEqualInt(20, sub.get(0));
    assertEqualInt(255, sub.get(1));
    }

    @Test
    void testUint8ClampedArraySubarrayOne067() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    Uint8ClampedArray sub1 = arr.subarray(1, 4);
    Uint8ClampedArray sub2 = sub1.subarray(1);
    assertEqual(3, sub1.length());
    assertEqual(2, sub2.length());
    assertEqualInt(20, sub1.get(0));
    assertEqualInt(30, sub1.get(1));
    assertEqualInt(40, sub1.get(2));
    assertEqualInt(30, sub2.get(0));
    assertEqualInt(40, sub2.get(1));
    }

    @Test
    void testUint8ClampedArraySubarrayOne068() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray sub1 = arr.subarray(1);
    Uint8ClampedArray sub2 = sub1.subarray(1);
    arr.set(2, 200);
    assertEqual(4, sub1.length());
    assertEqual(3, sub2.length());
    assertEqualInt(2, sub1.get(0));
    assertEqualInt(200, sub1.get(1));
    assertEqualInt(4, sub1.get(2));
    assertEqualInt(5, sub1.get(3));
    assertEqualInt(200, sub2.get(0));
    assertEqualInt(4, sub2.get(1));
    assertEqualInt(5, sub2.get(2));
    }

    @Test
    void testUint8ClampedArraySubarrayOne069() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray sub1 = arr.subarray(1);
    Uint8ClampedArray sub2 = sub1.subarray(1);
    sub2.set(0, 150);
    assertEqual(4, sub1.length());
    assertEqual(3, sub2.length());
    assertEqualInt(2, sub1.get(0));
    assertEqualInt(150, sub1.get(1));
    assertEqualInt(4, sub1.get(2));
    assertEqualInt(5, sub1.get(3));
    assertEqualInt(150, sub2.get(0));
    assertEqualInt(4, sub2.get(1));
    assertEqualInt(5, sub2.get(2));
    }

    @Test
    void testUint8ClampedArraySubarrayOne070() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray sub1 = arr.subarray(1);
    Uint8ClampedArray sub2 = sub1.subarray(1);
    sub2.set(0, 999);
    assertEqual(4, sub1.length());
    assertEqual(3, sub2.length());
    assertEqualInt(2, sub1.get(0));
    assertEqualInt(255, sub1.get(1));
    assertEqualInt(4, sub1.get(2));
    assertEqualInt(5, sub1.get(3));
    assertEqualInt(255, sub2.get(0));
    assertEqualInt(4, sub2.get(1));
    assertEqualInt(5, sub2.get(2));
    }

    @Test
    void testUint8ClampedArraySubarrayOne071() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = arr.subarray(1, 3);
    Uint8ClampedArray ret = sub.fill(9);
    assertEqual(2, sub.length());
    assertEqualInt(9, sub.get(0));
    assertEqualInt(9, sub.get(1));
    }

    @Test
    void testUint8ClampedArraySubarrayOne072() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = arr.subarray(0, 3);
    Uint8ClampedArray s = sub.slice();
    assertEqual(3, sub.length());
    assertEqualInt(1, sub.get(0));
    assertEqualInt(2, sub.get(1));
    assertEqualInt(3, sub.get(2));
    }

    @Test
    void testUint8ClampedArraySubarrayOne073() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = arr.subarray(0, 3);
    Uint8ClampedArray ret = sub.reverse();
    assertEqual(3, sub.length());
    assertEqualInt(3, sub.get(0));
    assertEqualInt(2, sub.get(1));
    assertEqualInt(1, sub.get(2));
    }

    @Test
    void testUint8ClampedArraySubarrayOne074() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray sub = arr.subarray();
    String t = BasTest.typeofValue(sub);
    assertEqual(4, sub.length());
    assertEqualInt(1, sub.get(0));
    assertEqualInt(2, sub.get(1));
    assertEqualInt(3, sub.get(2));
    assertEqualInt(4, sub.get(3));
    }

    @Test
    void testUint8ClampedArraySubarrayOne075() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray sub = arr.subarray(0, 0);
    String t = BasTest.typeofValue(sub);
    assertEqual(0, sub.length());
    }

    @Test
    void testUint8ClampedArraySubarrayOne076() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray sub = arr.subarray(0, 3);
    String t = BasTest.typeofValue(sub);
    assertEqual(3, sub.length());
    assertEqualInt(1, sub.get(0));
    assertEqualInt(2, sub.get(1));
    assertEqualInt(3, sub.get(2));
    }

    @Test
    void testUint8ClampedArraySubarrayOne077() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray sub = arr.subarray(-1);
    String t = BasTest.typeofValue(sub);
    assertEqual(1, sub.length());
    assertEqualInt(3, sub.get(0));
    }

    @Test
    void testUint8ClampedArraySubarrayOne078() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new ArrayBuffer(0));
    Uint8ClampedArray sub = arr.subarray();
    String t = BasTest.typeofValue(sub);
    assertEqual("object", t);
    }

    @Test
    void testUint8ClampedArraySubarrayOne079() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray sub = arr.subarray(0);
    assertEqual(3, sub.length());
    assertEqualInt(1, sub.get(0));
    assertEqualInt(2, sub.get(1));
    assertEqualInt(3, sub.get(2));
    }

    @Test
    void testUint8ClampedArraySubarrayOne080() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray sub = arr.subarray(2, 1);
    assertEqual(0, sub.length());
    }

    @Test
    void testUint8ClampedArraySubarrayOne081() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray sub = arr.subarray(999);
    assertEqual(0, sub.length());
    }

    @Test
    void testUint8ClampedArraySubarrayOne082() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new ArrayBuffer(0));
    Uint8ClampedArray sub = arr.subarray(0, 0);
    assertEqual(0, sub.length());
    }

    @Test
    void testUint8ClampedArraySubarrayOne083() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    Uint8ClampedArray sub = arr.subarray(0x2);
    assertEqual(3, sub.length());
    assertEqualInt(30, sub.get(0));
    assertEqualInt(40, sub.get(1));
    assertEqualInt(50, sub.get(2));
    }

    @Test
    void testUint8ClampedArraySubarrayOne084() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    Uint8ClampedArray sub = arr.subarray(03);
    assertEqual(2, sub.length());
    assertEqualInt(40, sub.get(0));
    assertEqualInt(50, sub.get(1));
    }

    @Test
    void testUint8ClampedArraySubarrayOne085() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    Uint8ClampedArray sub = arr.subarray(0b10);
    assertEqual(3, sub.length());
    assertEqualInt(30, sub.get(0));
    assertEqualInt(40, sub.get(1));
    assertEqualInt(50, sub.get(2));
    }

    @Test
    void testUint8ClampedArraySubarrayOne086() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray sub = arr.subarray(0x0);
    assertEqual(3, sub.length());
    assertEqualInt(10, sub.get(0));
    assertEqualInt(20, sub.get(1));
    assertEqualInt(30, sub.get(2));
    }

    @Test
    void testUint8ClampedArraySubarrayOne087() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30});
    Uint8ClampedArray sub = arr.subarray(00);
    assertEqual(3, sub.length());
    assertEqualInt(10, sub.get(0));
    assertEqualInt(20, sub.get(1));
    assertEqualInt(30, sub.get(2));
    }
}
