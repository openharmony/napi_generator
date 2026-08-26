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

import org.junit.jupiter.api.Test;

/**
 * Uint8ClampedArrayToReversedTest —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArrayToReversedTest extends BasTest {

    @Test
    void testUint8ClampedArrayToReversed001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(3, r.length());
    assertEqual(3, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(1, r.get(2));
    }

    @Test
    void testUint8ClampedArrayToReversed002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(0, r.length());
    }

    @Test
    void testUint8ClampedArrayToReversed003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(1, r.length());
    assertEqual(42, r.get(0));
    }

    @Test
    void testUint8ClampedArrayToReversed004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 10});
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(10, r.length());
    assertEqual(10, r.get(0));
    assertEqual(9, r.get(1));
    assertEqual(8, r.get(2));
    assertEqual(7, r.get(3));
    assertEqual(6, r.get(4));
    assertEqual(5, r.get(5));
    assertEqual(4, r.get(6));
    assertEqual(3, r.get(7));
    assertEqual(2, r.get(8));
    assertEqual(1, r.get(9));
    }

    @Test
    void testUint8ClampedArrayToReversed005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(255);
    for (int i = 0; i < 255; i++) { arr.set(i, i);
    }
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(255, r.length());
    assertEqual(254, r.get(0));
    assertEqual(127, r.get(127));
    assertEqual(0, r.get(254));
    }

    @Test
    void testUint8ClampedArrayToReversed006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1024);
    for (int i = 0; i < 1024; i++) { arr.set(i, i & 0xFF);
    }
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(1024, r.length());
    assertEqual(arr.get(1023), r.get(0));
    assertEqual(arr.get(511), r.get(512));
    assertEqual(arr.get(0), r.get(1023));
    }

    @Test
    void testUint8ClampedArrayToReversed007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0, 0});
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(4, r.length());
    assertEqual(0, r.get(0));
    assertEqual(0, r.get(1));
    assertEqual(0, r.get(2));
    assertEqual(0, r.get(3));
    }

    @Test
    void testUint8ClampedArrayToReversed008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {256, 1, 2});
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(3, r.length());
    assertEqual(2, r.get(0));
    assertEqual(1, r.get(1));
    assertEqual(255, r.get(2));
    }

    @Test
    void testUint8ClampedArrayToReversed009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {-1, 1, 2});
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(3, r.length());
    assertEqual(2, r.get(0));
    assertEqual(1, r.get(1));
    assertEqual(0, r.get(2));
    }

    @Test
    void testUint8ClampedArrayToReversed010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {127.5, 1, 2});
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(3, r.length());
    assertEqual(2, r.get(0));
    assertEqual(1, r.get(1));
    assertEqual(128, r.get(2));
    }

    @Test
    void testUint8ClampedArrayToReversed011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {128.5, 1, 2});
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(3, r.length());
    assertEqual(2, r.get(0));
    assertEqual(1, r.get(1));
    assertEqual(128, r.get(2));
    }

    @Test
    void testUint8ClampedArrayToReversed012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.NaN, 1, 2});
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(3, r.length());
    assertEqual(2, r.get(0));
    assertEqual(1, r.get(1));
    assertEqual(0, r.get(2));
    }

    @Test
    void testUint8ClampedArrayToReversed013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.POSITIVE_INFINITY, 1, 2});
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(3, r.length());
    assertEqual(2, r.get(0));
    assertEqual(1, r.get(1));
    assertEqual(255, r.get(2));
    }

    @Test
    void testUint8ClampedArrayToReversed014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {-Double.POSITIVE_INFINITY, 1, 2});
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(3, r.length());
    assertEqual(2, r.get(0));
    assertEqual(1, r.get(1));
    assertEqual(0, r.get(2));
    }

    @Test
    void testUint8ClampedArrayToReversed015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {0.9, 1, 2});
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(3, r.length());
    assertEqual(2, r.get(0));
    assertEqual(1, r.get(1));
    assertEqual(1, r.get(2));
    }

    @Test
    void testUint8ClampedArrayToReversed016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {0.4, 1, 2});
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(3, r.length());
    assertEqual(2, r.get(0));
    assertEqual(1, r.get(1));
    assertEqual(0, r.get(2));
    }

    @Test
    void testUint8ClampedArrayToReversed017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {0.5, 1, 2});
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(3, r.length());
    assertEqual(2, r.get(0));
    assertEqual(1, r.get(1));
    assertEqual(0, r.get(2));
    }

    @Test
    void testUint8ClampedArrayToReversed018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(3, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    assertEqual(3, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(1, r.get(2));
    }

    @Test
    void testUint8ClampedArrayToReversed019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.toReversed();
    assertNotEqual(arr, r);
    assertEqual(3, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(1, r.get(2));
    }

    @Test
    void testUint8ClampedArrayToReversed020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r1 = arr.toReversed();
    Uint8ClampedArray r2 = arr.toReversed();
    assertNotEqual(r2, r1);
    assertEqual(3, r2.get(0));
    assertEqual(2, r2.get(1));
    assertEqual(1, r2.get(2));
    }

    @Test
    void testUint8ClampedArrayToReversed021() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.toReversed();
    r.set(0, 99);
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    assertEqual(99, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(1, r.get(2));
    }

    @Test
    void testUint8ClampedArrayToReversed022() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.toReversed();
    arr.set(0, 200);
    assertEqual(3, r.length());
    assertEqual(3, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(1, r.get(2));
    }

    @Test
    void testUint8ClampedArrayToReversed023() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    Uint8ClampedArray r = arr.toReversed();
    assertNotEqual(arr.buffer(), r.buffer());
    assertEqual(42, r.get(0));
    }

    @Test
    void testUint8ClampedArrayToReversed024() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.toReversed();
    r.set(0, 99);
    Uint8ClampedArray view = new Uint8ClampedArray(arr.buffer());
    assertEqual(3, view.length());
    assertEqual(1, view.get(0));
    assertEqual(2, view.get(1));
    assertEqual(3, view.get(2));
    assertEqual(99, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(1, r.get(2));
    }

    @Test
    void testUint8ClampedArrayToReversed025() {
    ArrayBuffer buf = new ArrayBuffer(4);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.set(0, 1);
    arr.set(1, 2);
    arr.set(2, 3);
    arr.set(3, 4);
    Uint8ClampedArray r = arr.toReversed();
    assertNotEqual(buf, r.buffer());
    assertEqual(4, r.get(0));
    assertEqual(3, r.get(1));
    assertEqual(2, r.get(2));
    assertEqual(1, r.get(3));
    }

    @Test
    void testUint8ClampedArrayToReversed026() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 4);
    arr.set(0, 10);
    arr.set(1, 20);
    arr.set(2, 30);
    arr.set(3, 40);
    Uint8ClampedArray r = arr.toReversed();
    assertNotEqual(buf, r.buffer());
    assertEqual(40, r.get(0));
    assertEqual(30, r.get(1));
    assertEqual(20, r.get(2));
    assertEqual(10, r.get(3));
    }

    @Test
    void testUint8ClampedArrayToReversed027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.toReversed().toReversed();
    assertEqual(4, r.length());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));
    assertEqual(4, r.get(3));
    }

    @Test
    void testUint8ClampedArrayToReversed028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 10, 15, 20});
    Uint8ClampedArray r = arr.toReversed().toReversed().toReversed();
    assertEqual(4, r.length());
    assertEqual(20, r.get(0));
    assertEqual(15, r.get(1));
    assertEqual(10, r.get(2));
    assertEqual(5, r.get(3));
    }

    @Test
    void testUint8ClampedArrayToReversed029() {
    Uint8ClampedArray arr = Uint8ClampedArray.of(10, 20, 30);
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(3, r.length());
    assertEqual(30, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(10, r.get(2));
    }

    @Test
    void testUint8ClampedArrayToReversed030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(5);
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(5, r.length());
    assertEqual(0, r.get(0));
    assertEqual(0, r.get(1));
    assertEqual(0, r.get(2));
    assertEqual(0, r.get(3));
    assertEqual(0, r.get(4));
    }

    @Test
    void testUint8ClampedArrayToReversed031() {
    ArrayBuffer buf = new ArrayBuffer(3);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    arr.set(0, 1);
    arr.set(1, 2);
    arr.set(2, 3);
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(3, r.length());
    assertEqual(3, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(1, r.get(2));
    }

    @Test
    void testUint8ClampedArrayToReversed032() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 4);
    arr.set(0, 10);
    arr.set(1, 20);
    arr.set(2, 30);
    arr.set(3, 40);
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(4, r.length());
    assertEqual(40, r.get(0));
    assertEqual(30, r.get(1));
    assertEqual(20, r.get(2));
    assertEqual(10, r.get(3));
    }

    @Test
    void testUint8ClampedArrayToReversed033() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 4);
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(0, r.byteOffset());
    assertEqual(0, r.get(0));
    assertEqual(0, r.get(1));
    assertEqual(0, r.get(2));
    assertEqual(0, r.get(3));
    }

    @Test
    void testUint8ClampedArrayToReversed034() {
    Uint8ClampedArray src = new Uint8ClampedArray(new int[] {7, 8, 9});
    Uint8ClampedArray arr = new Uint8ClampedArray(src);
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(3, r.length());
    assertEqual(9, r.get(0));
    assertEqual(8, r.get(1));
    assertEqual(7, r.get(2));
    }

    @Test
    void testUint8ClampedArrayToReversed035() {
    Uint8ClampedArray arr = new Uint8ClampedArray(4);
    arr.fill(7);
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(4, r.length());
    assertEqual(7, r.get(0));
    assertEqual(7, r.get(1));
    assertEqual(7, r.get(2));
    assertEqual(7, r.get(3));
    }

    @Test
    void testUint8ClampedArrayToReversed036() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    arr.set(0, 99);
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(3, r.length());
    assertEqual(3, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(99, r.get(2));
    }

    @Test
    void testUint8ClampedArrayToReversed037() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray sub = arr.subarray(1, 4);
    Uint8ClampedArray r = sub.toReversed();
    assertEqual(5, arr.length());
    assertEqual(3, sub.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    assertEqual(4, arr.get(3));
    assertEqual(5, arr.get(4));
    assertEqual(2, sub.get(0));
    assertEqual(3, sub.get(1));
    assertEqual(4, sub.get(2));
    assertEqual(4, r.get(0));
    assertEqual(3, r.get(1));
    assertEqual(2, r.get(2));
    }

    @Test
    void testUint8ClampedArrayToReversed038() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray sub = arr.subarray(1, 4);
    Uint8ClampedArray r = sub.toReversed();
    assertEqual(5, arr.length());
    assertEqual(3, sub.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    assertEqual(4, arr.get(3));
    assertEqual(5, arr.get(4));
    assertEqual(2, sub.get(0));
    assertEqual(3, sub.get(1));
    assertEqual(4, sub.get(2));
    assertEqual(4, r.get(0));
    assertEqual(3, r.get(1));
    assertEqual(2, r.get(2));
    }

    @Test
    void testUint8ClampedArrayToReversed039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray sl = arr.slice(0, 3);
    Uint8ClampedArray r = sl.toReversed();
    assertEqual(3, r.length());
    assertEqual(3, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(1, r.get(2));
    }

    @Test
    void testUint8ClampedArrayToReversed040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2});
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(2, r.length());
    assertEqual(1, r.get(1));
    assertEqual(2, r.get(0));
    }

    @Test
    void testUint8ClampedArrayToReversed041() {
    Uint8ClampedArray arr = new Uint8ClampedArray(255);
    for (int i = 0; i < 255; i++) { arr.set(i, i);
    }
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(255, r.length());
    assertEqual(254, r.get(0));
    assertEqual(127, r.get(127));
    assertEqual(0, r.get(254));
    }

    @Test
    void testUint8ClampedArrayToReversed042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(256);
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(256, r.length());
    assertEqual(0, r.get(0));
    assertEqual(0, r.get(128));
    assertEqual(0, r.get(255));
    }

    @Test
    void testUint8ClampedArrayToReversed043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(1024);
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(1024, r.length());
    assertEqual(0, r.get(0));
    assertEqual(0, r.get(512));
    assertEqual(0, r.get(1023));
    }

    @Test
    void testUint8ClampedArrayToReversed044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255, 255, 255});
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(3, r.length());
    assertEqual(255, r.get(2));
    assertEqual(255, r.get(0));
    assertEqual(255, r.get(1));
    }

    @Test
    void testUint8ClampedArrayToReversed045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255, 1, 2});
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(3, r.length());
    assertEqual(255, r.get(2));
    assertEqual(2, r.get(0));
    assertEqual(1, r.get(1));
    }

    @Test
    void testUint8ClampedArrayToReversed046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {127, 1, 2});
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(3, r.length());
    assertEqual(127, r.get(2));
    assertEqual(2, r.get(0));
    assertEqual(1, r.get(1));
    }

    @Test
    void testUint8ClampedArrayToReversed047() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {128, 1, 2});
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(3, r.length());
    assertEqual(128, r.get(2));
    assertEqual(2, r.get(0));
    assertEqual(1, r.get(1));
    }

    @Test
    void testUint8ClampedArrayToReversed048() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {1e9, 1, 2});
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(3, r.length());
    assertEqual(2, r.get(0));
    assertEqual(1, r.get(1));
    assertEqual(255, r.get(2));
    }

    @Test
    void testUint8ClampedArrayToReversed049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {-1e9, 1, 2});
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(3, r.length());
    assertEqual(2, r.get(0));
    assertEqual(1, r.get(1));
    assertEqual(0, r.get(2));
    }

    @Test
    void testUint8ClampedArrayToReversed050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0xFF, 0x00, 0x10});
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(3, r.length());
    assertEqual(0x10, r.get(0));
    assertEqual(0, r.get(1));
    assertEqual(0xFF, r.get(2));
    }

    @Test
    void testUint8ClampedArrayToReversed051() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {017, 1, 2});
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(3, r.length());
    assertEqual(2, r.get(0));
    assertEqual(1, r.get(1));
    assertEqual(15, r.get(2));
    }

    @Test
    void testUint8ClampedArrayToReversed052() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0b1010, 1, 2});
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(3, r.length());
    assertEqual(2, r.get(0));
    assertEqual(1, r.get(1));
    assertEqual(10, r.get(2));
    }

    @Test
    void testUint8ClampedArrayToReversed053() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(arr.byteLength(), r.byteLength());
    assertEqual(5, r.get(0));
    assertEqual(4, r.get(1));
    assertEqual(3, r.get(2));
    assertEqual(2, r.get(3));
    assertEqual(1, r.get(4));
    }

    @Test
    void testUint8ClampedArrayToReversed054() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(1, r.BYTES_PER_ELEMENT);
    assertEqual(3, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(1, r.get(2));
    }

    @Test
    void testUint8ClampedArrayToReversed055() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    arr.toReversed();
    assertEqual(0, arr.length());
    }

    @Test
    void testUint8ClampedArrayToReversed056() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {99});
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(1, arr.length());
    assertEqual(99, arr.get(0));
    assertEqual(99, r.get(0));
    }

    @Test
    void testUint8ClampedArrayToReversed057() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray r = arr.toReversed();
    assertNotEqual(arr, r);
    }

    @Test
    void testUint8ClampedArrayToReversed058() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1});
    Uint8ClampedArray r = arr.toReversed();
    assertNotEqual(arr, r);
    assertEqual(1, r.get(0));
    }

    @Test
    void testUint8ClampedArrayToReversed059() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.toReversed();
    r.set(0, 100);
    assertEqual(3, arr.length());
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    assertEqual(100, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(1, r.get(2));
    }

    @Test
    void testUint8ClampedArrayToReversed060() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray r = arr.toReversed();
    assertNotEqual(arr.buffer(), r.buffer());
    }

    @Test
    void testUint8ClampedArrayToReversed061() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(4, r.length());
    assertEqual(arr.get(3), r.get(0));
    assertEqual(40, r.get(0));
    assertEqual(arr.get(2), r.get(1));
    assertEqual(30, r.get(1));
    assertEqual(arr.get(1), r.get(2));
    assertEqual(20, r.get(2));
    assertEqual(arr.get(0), r.get(3));
    assertEqual(10, r.get(3));
    }

    @Test
    void testUint8ClampedArrayToReversed062() {
    Uint8ClampedArray arr = new Uint8ClampedArray(5);
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(5, r.length());
    assertEqual(0, r.get(0));
    assertEqual(0, r.get(1));
    assertEqual(0, r.get(2));
    assertEqual(0, r.get(3));
    assertEqual(0, r.get(4));
    }

    @Test
    void testUint8ClampedArrayToReversed063() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 4);
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(4, r.length());
    assertEqual(0, r.get(0));
    assertEqual(0, r.get(1));
    assertEqual(0, r.get(2));
    assertEqual(0, r.get(3));
    }

    @Test
    void testUint8ClampedArrayToReversed064() {
    Uint8ClampedArray arr = new Uint8ClampedArray(4);
    arr.fill(7);
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(4, r.length());
    assertEqual(7, r.get(0));
    assertEqual(7, r.get(1));
    assertEqual(7, r.get(2));
    assertEqual(7, r.get(3));
    }

    @Test
    void testUint8ClampedArrayToReversed065() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray sub = arr.subarray(1, 4);
    Uint8ClampedArray r = sub.toReversed();
    assertEqual(5, arr.length());
    assertEqual(3, sub.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    assertEqual(4, arr.get(3));
    assertEqual(5, arr.get(4));
    assertEqual(2, sub.get(0));
    assertEqual(3, sub.get(1));
    assertEqual(4, sub.get(2));
    assertEqual(4, r.get(0));
    assertEqual(3, r.get(1));
    assertEqual(2, r.get(2));
    }

    @Test
    void testUint8ClampedArrayToReversed066() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray r = arr.toReversed();
    r.slice(0, 2);
    assertEqual(5, r.length());
    assertEqual(5, r.get(0));
    assertEqual(4, r.get(1));
    assertEqual(3, r.get(2));
    assertEqual(2, r.get(3));
    assertEqual(1, r.get(4));
    }

    @Test
    void testUint8ClampedArrayToReversed067() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.MAX_VALUE, 50});
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(2, r.length());
    assertEqual(50, r.get(0));
    assertEqual(255, r.get(1));
    }

    @Test
    void testUint8ClampedArrayToReversed068() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new double[] {Double.MIN_VALUE, 50});
    Uint8ClampedArray r = arr.toReversed();
    assertEqual(2, r.length());
    assertEqual(50, r.get(0));
    assertEqual(0, r.get(1));
    }

    @Test
    void testUint8ClampedArrayToReversed069() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.toReversed();
    r.set(0, 256);
    assertEqual(3, r.length());
    assertEqual(255, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(1, r.get(2));
    }

    @Test
    void testUint8ClampedArrayToReversed070() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.toReversed();
    r.set(0, -1);
    assertEqual(3, r.length());
    assertEqual(0, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(1, r.get(2));
    }
}
