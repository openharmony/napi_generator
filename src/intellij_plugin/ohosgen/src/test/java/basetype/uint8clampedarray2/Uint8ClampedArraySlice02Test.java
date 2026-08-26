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
 * Uint8ClampedArraySlice02Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ClampedArraySlice02Test extends BasTest {

    @Test
    void testUint8ClampedArraySliceTwo001() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    Uint8ClampedArray r = arr.slice(1);
    assertEqual(0, r.length());
    }

    @Test
    void testUint8ClampedArraySliceTwo002() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    Uint8ClampedArray r = arr.slice(-1);
    assertEqual(1, r.length());
    assertEqual(42, r.get(0));
    }

    @Test
    void testUint8ClampedArraySliceTwo003() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 10});
    Uint8ClampedArray r = arr.slice(5);
    assertEqual(5, r.length());
    assertEqual(6, r.get(0));
    assertEqual(7, r.get(1));
    assertEqual(8, r.get(2));
    assertEqual(9, r.get(3));
    assertEqual(10, r.get(4));
    }

    @Test
    void testUint8ClampedArraySliceTwo004() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.slice(0x7FFFFFFF);
    assertEqual(0, r.length());
    }

    @Test
    void testUint8ClampedArraySliceTwo005() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.slice(0x0);
    assertEqual(3, r.length());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));
    }

    @Test
    void testUint8ClampedArraySliceTwo006() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray r = arr.slice(02);
    assertEqual(2, r.length());
    assertEqual(30, r.get(0));
    assertEqual(40, r.get(1));
    }

    @Test
    void testUint8ClampedArraySliceTwo007() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray r = arr.slice(0b10);
    assertEqual(2, r.length());
    assertEqual(30, r.get(0));
    assertEqual(40, r.get(1));
    }

    @Test
    void testUint8ClampedArraySliceTwo008() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.slice(0x1);
    assertEqual(3, r.length());
    assertEqual(2, r.get(0));
    assertEqual(3, r.get(1));
    assertEqual(4, r.get(2));
    }

    @Test
    void testUint8ClampedArraySliceTwo009() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.slice(0, 100);
    assertEqual(3, r.length());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));
    }

    @Test
    void testUint8ClampedArraySliceTwo010() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray r = arr.slice(0, -2);
    assertEqual(3, r.length());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));
    }

    @Test
    void testUint8ClampedArraySliceTwo011() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.slice(0, -100);
    assertEqual(0, r.length());
    }

    @Test
    void testUint8ClampedArraySliceTwo012() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray r = arr.slice(0, 5);
    assertEqual(0, r.length());
    }

    @Test
    void testUint8ClampedArraySliceTwo013() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray r = arr.slice(0, -1);
    assertEqual(0, r.length());
    }

    @Test
    void testUint8ClampedArraySliceTwo014() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    Uint8ClampedArray r = arr.slice(0, 0);
    assertEqual(0, r.length());
    }

    @Test
    void testUint8ClampedArraySliceTwo015() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {42});
    Uint8ClampedArray r = arr.slice(0, -1);
    assertEqual(0, r.length());
    }

    @Test
    void testUint8ClampedArraySliceTwo016() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.slice(0, 0x7FFFFFFF);
    assertEqual(3, r.length());
    assertEqual(1, r.get(0));
    assertEqual(2, r.get(1));
    assertEqual(3, r.get(2));
    }

    @Test
    void testUint8ClampedArraySliceTwo017() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.slice(0, 0x0);
    assertEqual(0, r.length());
    }

    @Test
    void testUint8ClampedArraySliceTwo018() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    Uint8ClampedArray r = arr.slice(0, 03);
    assertEqual(3, r.length());
    assertEqual(10, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(30, r.get(2));
    }

    @Test
    void testUint8ClampedArraySliceTwo019() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40, 50});
    Uint8ClampedArray r = arr.slice(0, 0b11);
    assertEqual(3, r.length());
    assertEqual(10, r.get(0));
    assertEqual(20, r.get(1));
    assertEqual(30, r.get(2));
    }

    @Test
    void testUint8ClampedArraySliceTwo020() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray r = arr.slice(0, 0x2);
    assertEqual(2, r.length());
    assertEqual(20, r.get(1));
    assertEqual(10, r.get(0));
    }

    @Test
    void testUint8ClampedArraySliceTwo021() {
    ArrayBuffer buf = new ArrayBuffer(256);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    Uint8ClampedArray r = arr.slice(0, 0x100);
    assertEqual(256, r.length());
    assertEqual(0, r.get(0));
    assertEqual(0, r.get(128));
    assertEqual(0, r.get(255));
    }

    @Test
    void testUint8ClampedArraySliceTwo022() {
    ArrayBuffer buf = new ArrayBuffer(1024);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    Uint8ClampedArray r = arr.slice(0, 1);
    assertEqual(1, r.length());
    assertEqual(0, r.get(0));
    }

    @Test
    void testUint8ClampedArraySliceTwo023() {
    ArrayBuffer buf = new ArrayBuffer(1024);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    Uint8ClampedArray r = arr.slice(0, 1024);
    assertEqual(1024, r.length());
    assertEqual(0, r.get(0));
    assertEqual(0, r.get(512));
    assertEqual(0, r.get(1023));
    }

    @Test
    void testUint8ClampedArraySliceTwo024() {
    ArrayBuffer buf = new ArrayBuffer(1024);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    Uint8ClampedArray r = arr.slice(0, 1023);
    assertEqual(1023, r.length());
    assertEqual(0, r.get(0));
    assertEqual(0, r.get(511));
    assertEqual(0, r.get(1022));
    }

    @Test
    void testUint8ClampedArraySliceTwo025() {
    ArrayBuffer buf = new ArrayBuffer(1024);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf);
    Uint8ClampedArray r = arr.slice(0, -1);
    assertEqual(1023, r.length());
    assertEqual(0, r.get(0));
    assertEqual(0, r.get(511));
    assertEqual(0, r.get(1022));
    }

    @Test
    void testUint8ClampedArraySliceTwo026() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray r = arr.slice(-3, -1);
    assertEqual(2, r.length());
    assertEqual(3, r.get(0));
    assertEqual(4, r.get(1));
    }

    @Test
    void testUint8ClampedArraySliceTwo027() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.slice(-3);
    assertEqual(3, r.length());
    assertEqual(2, r.get(0));
    assertEqual(3, r.get(1));
    assertEqual(4, r.get(2));
    }

    @Test
    void testUint8ClampedArraySliceTwo028() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray r = arr.slice(4, 2);
    assertEqual(0, r.length());
    }

    @Test
    void testUint8ClampedArraySliceTwo029() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray r = arr.slice(-3, 4);
    assertEqual(2, r.length());
    assertEqual(3, r.get(0));
    assertEqual(4, r.get(1));
    }

    @Test
    void testUint8ClampedArraySliceTwo030() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.slice(3, 0);
    assertEqual(0, r.length());
    }

    @Test
    void testUint8ClampedArraySliceTwo031() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray r = arr.slice(-1, 1);
    assertEqual(0, r.length());
    }

    @Test
    void testUint8ClampedArraySliceTwo032() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray r = arr.slice(0x1, 0x3);
    assertEqual(2, r.length());
    assertEqual(2, r.get(0));
    assertEqual(3, r.get(1));
    }

    @Test
    void testUint8ClampedArraySliceTwo033() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray r = arr.slice(0b01, 0b100);
    assertEqual(3, r.length());
    assertEqual(2, r.get(0));
    assertEqual(3, r.get(1));
    assertEqual(4, r.get(2));
    }

    @Test
    void testUint8ClampedArraySliceTwo034() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {50, 60, 70, 80});
    Uint8ClampedArray r = arr.slice(1);
    assertEqual(3, r.length());
    assertEqual(70, r.get(1));
    assertEqual(60, r.get(0));
    assertEqual(80, r.get(2));
    }

    @Test
    void testUint8ClampedArraySliceTwo035() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 101, 102, 103, 104});
    Uint8ClampedArray r = arr.slice(2, 4);
    assertEqual(2, r.length());
    assertEqual(103, r.get(1));
    assertEqual(102, r.get(0));
    }

    @Test
    void testUint8ClampedArraySliceTwo036() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {9, 18, 27, 36});
    Uint8ClampedArray r = arr.slice(-2);
    assertEqual(2, r.length());
    assertEqual(36, r.get(1));
    assertEqual(27, r.get(0));
    }

    @Test
    void testUint8ClampedArraySliceTwo037() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray r = arr.slice(1, 3);
    assertEqual(2, r.length());
    assertEqual(3, r.get(1));
    assertEqual(2, r.get(0));
    }

    @Test
    void testUint8ClampedArraySliceTwo038() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {100, 200, 50, 150});
    Uint8ClampedArray r = arr.slice(2, 4);
    assertEqual(2, r.length());
    assertEqual(150, r.get(1));
    assertEqual(50, r.get(0));
    }

    @Test
    void testUint8ClampedArraySliceTwo039() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {0, 0, 0});
    Uint8ClampedArray r = arr.slice();
    assertEqual(3, r.length());
    assertEqual(0, r.get(0));
    assertEqual(0, r.get(1));
    assertEqual(0, r.get(2));
    }

    @Test
    void testUint8ClampedArraySliceTwo040() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {255, 254, 253});
    Uint8ClampedArray r = arr.slice();
    assertEqual(3, r.length());
    assertEqual(255, r.get(0));
    assertEqual(254, r.get(1));
    assertEqual(253, r.get(2));
    }

    @Test
    void testUint8ClampedArraySliceTwo041() {
    Uint8ClampedArray arr = new Uint8ClampedArray(10);
    Uint8ClampedArray r = arr.slice();
    assertEqual(10, r.length());
    assertEqual(0, r.get(0));
    assertEqual(0, r.get(5));
    assertEqual(0, r.get(9));
    }

    @Test
    void testUint8ClampedArraySliceTwo042() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray r = arr.slice(2);
    assertEqual(3, r.byteLength());
    }

    @Test
    void testUint8ClampedArraySliceTwo043() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.slice(0, 0);
    assertEqual(0, r.byteLength());
    }

    @Test
    void testUint8ClampedArraySliceTwo044() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.slice(3, 2);
    assertEqual(0, r.byteLength());
    }

    @Test
    void testUint8ClampedArraySliceTwo045() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.slice(-2);
    assertEqual(2, r.byteLength());
    }

    @Test
    void testUint8ClampedArraySliceTwo046() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray r = arr.slice();
    assertEqual(0, r.byteLength());
    }

    @Test
    void testUint8ClampedArraySliceTwo047() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.slice(1);
    assertEqual(0, r.byteOffset());
    }

    @Test
    void testUint8ClampedArraySliceTwo048() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray r = arr.slice(2, 4);
    assertEqual(0, r.byteOffset());
    }

    @Test
    void testUint8ClampedArraySliceTwo049() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.slice(-2);
    assertEqual(0, r.byteOffset());
    }

    @Test
    void testUint8ClampedArraySliceTwo050() {
    Uint8ClampedArray arr = new Uint8ClampedArray(0);
    Uint8ClampedArray r = arr.slice();
    assertEqual(0, r.byteOffset());
    }

    @Test
    void testUint8ClampedArraySliceTwo051() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.slice(1);
    assertNotEqual(arr.buffer(), r.buffer());
    }

    @Test
    void testUint8ClampedArraySliceTwo052() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.slice(0, 2);
    assertNotEqual(arr.buffer(), r.buffer());
    }

    @Test
    void testUint8ClampedArraySliceTwo053() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.slice(-2);
    assertNotEqual(arr.buffer(), r.buffer());
    }

    @Test
    void testUint8ClampedArraySliceTwo054() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.slice(0, 0);
    assertNotEqual(arr.buffer(), r.buffer());
    }

    @Test
    void testUint8ClampedArraySliceTwo055() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.slice(0, arr.length());
    assertNotEqual(arr.buffer(), r.buffer());
    }

    @Test
    void testUint8ClampedArraySliceTwo056() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.slice();
    assertNotEqual(arr, r);
    }

    @Test
    void testUint8ClampedArraySliceTwo057() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {4, 5, 6});
    Uint8ClampedArray r = arr.slice(0);
    assertNotEqual(arr, r);
    }

    @Test
    void testUint8ClampedArraySliceTwo058() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {8, 16, 24, 32});
    Uint8ClampedArray r = arr.slice(0, arr.length());
    assertNotEqual(arr, r);
    }

    @Test
    void testUint8ClampedArraySliceTwo059() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray r = arr.slice(1);
    assertEqual(3, r.length());
    assertEqual(20, r.get(0));
    assertEqual(30, r.get(1));
    assertEqual(40, r.get(2));
    }

    @Test
    void testUint8ClampedArraySliceTwo060() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {5, 15, 25, 35});
    Uint8ClampedArray r = arr.slice(0, 2);
    assertEqual(2, r.length());
    assertEqual(5, r.get(0));
    assertEqual(15, r.get(1));
    }

    @Test
    void testUint8ClampedArraySliceTwo061() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 17, 27, 37});
    Uint8ClampedArray r = arr.slice(-2);
    assertEqual(2, r.length());
    assertEqual(27, r.get(0));
    assertEqual(37, r.get(1));
    }

    @Test
    void testUint8ClampedArraySliceTwo062() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {3, 6, 9});
    Uint8ClampedArray r = arr.slice(2, 1);
    assertEqual(0, r.length());
    }

    @Test
    void testUint8ClampedArraySliceTwo063() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {10, 20, 30, 40});
    Uint8ClampedArray r = arr.slice(1, 3);
    arr.set(1, 88);
    assertEqual(2, r.length());
    assertEqual(20, r.get(0));
    assertEqual(30, r.get(1));
    }

    @Test
    void testUint8ClampedArraySliceTwo064() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r1 = arr.slice();
    Uint8ClampedArray r2 = r1.slice();
    assertNotEqual(arr.buffer(), r2.buffer());
    }

    @Test
    void testUint8ClampedArraySliceTwo065() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.slice();
    assertEqual(4, arr.length());
    assertEqual(1, arr.get(0));
    assertEqual(2, arr.get(1));
    assertEqual(3, arr.get(2));
    assertEqual(4, arr.get(3));
    }

    @Test
    void testUint8ClampedArraySliceTwo066() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    arr.slice(1, 3);
    assertEqual(5, arr.length());
    }

    @Test
    void testUint8ClampedArraySliceTwo067() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {11, 22, 33, 44});
    arr.slice();
    assertEqual(4, arr.length());
    assertEqual(11, arr.get(0));
    assertEqual(22, arr.get(1));
    assertEqual(33, arr.get(2));
    assertEqual(44, arr.get(3));
    }

    @Test
    void testUint8ClampedArraySliceTwo068() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {7, 14, 21, 28});
    arr.slice(2, 1);
    assertEqual(4, arr.length());
    }

    @Test
    void testUint8ClampedArraySliceTwo069() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    arr.slice();
    assertEqual(4, arr.byteLength());
    }

    @Test
    void testUint8ClampedArraySliceTwo070() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    ArrayBuffer originalBuffer = arr.buffer();
    arr.slice();
    assertEqual(originalBuffer, arr.buffer());
    }

    @Test
    void testUint8ClampedArraySliceTwo071() {
    ArrayBuffer buf = new ArrayBuffer(8);
    Uint8ClampedArray arr = new Uint8ClampedArray(buf, 2, 4);
    arr.slice();
    assertEqual(2, arr.byteOffset());
    }

    @Test
    void testUint8ClampedArraySliceTwo072() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.slice();
    assertEqual(3, r.buffer().byteLength());
    }

    @Test
    void testUint8ClampedArraySliceTwo073() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4});
    Uint8ClampedArray r = arr.slice();
    assertEqual(4, r.buffer().byteLength());
    }

    @Test
    void testUint8ClampedArraySliceTwo074() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3, 4, 5});
    Uint8ClampedArray r = arr.slice(1, 3);
    assertEqual(2, r.buffer().byteLength());
    }

    @Test
    void testUint8ClampedArraySliceTwo075() {
    Uint8ClampedArray arr = new Uint8ClampedArray(new int[] {1, 2, 3});
    Uint8ClampedArray r = arr.slice(0, 0);
    assertEqual(0, r.buffer().byteLength());
    }
}
