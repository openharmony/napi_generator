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

package basetype.uint8array2;

import basetype.common.ArrayBuffer;
import basetype.common.BasTest;
import basetype.common.Uint8Array;

import org.junit.jupiter.api.Test;

/**
 * Uint8ArrayCopyWithin02Test —— Int16Array 方法族测试。
 *
 * @since 2026-08-26
 */
public class Uint8ArrayCopyWithin02Test extends BasTest {

    @Test
    void testUint8ArrayCopyWithin02_001() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array result = arr.copyWithin(0, 1, 3);
    assertNotNull(result);
    }

    @Test
    void testUint8ArrayCopyWithin02_002() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array result = arr.copyWithin(0, 2);
    assertNotNull(result);
    }

    @Test
    void testUint8ArrayCopyWithin02_003() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array result = arr.copyWithin(-3, 0, 2);
    assertNotNull(result);
    }

    @Test
    void testUint8ArrayCopyWithin02_004() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array result = arr.copyWithin(0, 1, 4);
    assertNotNull(result);
    }

    @Test
    void testUint8ArrayCopyWithin02_005() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array result = arr.copyWithin(0, -3, -1);
    assertNotNull(result);
    }

    @Test
    void testUint8ArrayCopyWithin02_006() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array result = arr.copyWithin(2, 0, 3);
    assertNotNull(result);
    }

    @Test
    void testUint8ArrayCopyWithin02_007() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array result = arr.copyWithin(0, 0, 100);
    assertNotNull(result);
    }

    @Test
    void testUint8ArrayCopyWithin02_008() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array result = arr.copyWithin(0, 1, 3);
    assertEqual(0, result.byteOffset());
    }

    @Test
    void testUint8ArrayCopyWithin02_009() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    Uint8Array result = arr.copyWithin(0, 2);
    assertNotNull(result);
    }

    @Test
    void testUint8ArrayCopyWithin02_010() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50, 60});
    Uint8Array result = arr.copyWithin(0, 2, 4);
    arr.set(0, 99);
    assertEqualInt(99, result.get(0));
    }

    @Test
    void testUint8ArrayCopyWithin02_011() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50, 60});
    Uint8Array result = arr.copyWithin(0, -3, -1);
    result.set(1, 88);
    assertEqualInt(88, arr.get(1));
    }

    @Test
    void testUint8ArrayCopyWithin02_012() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50, 60});
    Uint8Array result = arr.copyWithin(2, 0, 3);
    arr.set(4, 77);
    assertEqualInt(77, result.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin02_013() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50, 60});
    Uint8Array result = arr.copyWithin(0, 2);
    result.set(5, 66);
    assertEqualInt(66, arr.get(5));
    }

    @Test
    void testUint8ArrayCopyWithin02_014() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50, 60});
    Uint8Array result = arr.copyWithin(100, 0);
    result.set(0, 55);
    assertEqualInt(55, arr.get(0));
    }

    @Test
    void testUint8ArrayCopyWithin02_015() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50, 60});
    Uint8Array result = arr.copyWithin(-100, 0, 2);
    arr.set(3, 44);
    assertEqualInt(44, result.get(3));
    }

    @Test
    void testUint8ArrayCopyWithin02_016() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.copyWithin(0, 0, 6);
    assertEqual(6, arr.length());
    assertEqualInt(10, arr.get(0));
    assertEqualInt(60, arr.get(5));
    }

    @Test
    void testUint8ArrayCopyWithin02_017() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.copyWithin(0, 2);
    assertEqual(6, arr.length());
    assertEqualInt(30, arr.get(0));
    assertEqualInt(60, arr.get(3));
    }

    @Test
    void testUint8ArrayCopyWithin02_018() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.copyWithin(2, 0, 2);
    assertEqual(6, arr.length());
    assertEqualInt(10, arr.get(2));
    assertEqualInt(20, arr.get(3));
    }

    @Test
    void testUint8ArrayCopyWithin02_019() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.copyWithin(0, 1, 3);
    assertEqual(6, arr.length());
    assertEqualInt(20, arr.get(0));
    assertEqualInt(30, arr.get(1));
    }

    @Test
    void testUint8ArrayCopyWithin02_020() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.copyWithin(1, 3, 5);
    assertEqual(6, arr.length());
    assertEqualInt(40, arr.get(1));
    assertEqualInt(50, arr.get(2));
    }

    @Test
    void testUint8ArrayCopyWithin02_021() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 2, 3, 4, 5});
    arr.copyWithin(0, 3);
    assertEqual(6, arr.length());
    assertEqualInt(3, arr.get(0));
    assertEqualInt(5, arr.get(2));
    }

    @Test
    void testUint8ArrayCopyWithin02_022() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 2, 3, 4, 5});
    arr.copyWithin(3, 0);
    assertEqual(6, arr.length());
    assertEqualInt(0, arr.get(3));
    assertEqualInt(2, arr.get(5));
    }

    @Test
    void testUint8ArrayCopyWithin02_023() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 2, 3, 4, 5});
    arr.copyWithin(0, 2, 4);
    assertEqual(6, arr.length());
    assertEqualInt(2, arr.get(0));
    assertEqualInt(3, arr.get(1));
    }

    @Test
    void testUint8ArrayCopyWithin02_024() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.copyWithin(0, 6);
    assertEqual(6, arr.length());
    assertEqualInt(10, arr.get(0));
    assertEqualInt(60, arr.get(5));
    }

    @Test
    void testUint8ArrayCopyWithin02_025() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.copyWithin(6, 0);
    assertEqual(6, arr.length());
    assertEqualInt(10, arr.get(0));
    assertEqualInt(60, arr.get(5));
    }

    @Test
    void testUint8ArrayCopyWithin02_026() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.copyWithin(0, 0, 0);
    assertEqual(6, arr.length());
    assertEqualInt(10, arr.get(0));
    assertEqualInt(60, arr.get(5));
    }

    @Test
    void testUint8ArrayCopyWithin02_027() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.copyWithin(3, 3, 3);
    assertEqual(6, arr.length());
    assertEqualInt(10, arr.get(0));
    assertEqualInt(60, arr.get(5));
    }

    @Test
    void testUint8ArrayCopyWithin02_028() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40});
    arr.copyWithin(1, 0, 1);
    assertEqual(4, arr.length());
    assertEqualInt(10, arr.get(1));
    }

    @Test
    void testUint8ArrayCopyWithin02_029() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40});
    arr.copyWithin(0, 1, 1);
    assertEqual(4, arr.length());
    assertEqualInt(10, arr.get(0));
    assertEqualInt(40, arr.get(3));
    }

    @Test
    void testUint8ArrayCopyWithin02_030() {
    Uint8Array arr = new Uint8Array();
    arr.copyWithin(0, 0);
    assertEqual(0, arr.length());
    }

    @Test
    void testUint8ArrayCopyWithin02_031() {
    Uint8Array arr = new Uint8Array(new int[] {42});
    arr.copyWithin(0, 0, 1);
    assertEqual(1, arr.length());
    assertEqualInt(42, arr.get(0));
    }

    @Test
    void testUint8ArrayCopyWithin02_032() {
    Uint8Array arr = new Uint8Array(new int[] {5, 5, 5, 5});
    arr.copyWithin(1, 0, 2);
    assertEqual(4, arr.length());
    assertEqualInt(5, arr.get(1));
    assertEqualInt(5, arr.get(2));
    }

    @Test
    void testUint8ArrayCopyWithin02_033() {
    Uint8Array arr = new Uint8Array(new int[] {1, 2, 3, 4});
    arr.copyWithin(1, 0);
    assertEqual(4, arr.length());
    assertEqualInt(1, arr.get(1));
    assertEqualInt(3, arr.get(3));
    }

    @Test
    void testUint8ArrayCopyWithin02_034() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.copyWithin(0, -2);
    assertEqual(6, arr.length());
    assertEqualInt(50, arr.get(0));
    assertEqualInt(60, arr.get(1));
    }

    @Test
    void testUint8ArrayCopyWithin02_035() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 2, 3, 4, 5});
    arr.copyWithin(-2, 0, 2);
    assertEqual(6, arr.length());
    assertEqualInt(0, arr.get(4));
    assertEqualInt(1, arr.get(5));
    }

    @Test
    void testUint8ArrayCopyWithin02_036() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.copyWithin(0, -3, -1);
    assertEqual(6, arr.length());
    assertEqualInt(40, arr.get(0));
    assertEqualInt(50, arr.get(1));
    }

    @Test
    void testUint8ArrayCopyWithin02_037() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.copyWithin(0, 0, -1);
    assertEqual(6, arr.length());
    assertEqualInt(10, arr.get(0));
    assertEqualInt(50, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin02_038() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.copyWithin(-3, -5, -1);
    assertEqual(6, arr.length());
    assertEqualInt(20, arr.get(3));
    assertEqualInt(40, arr.get(5));
    }

    @Test
    void testUint8ArrayCopyWithin02_039() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.copyWithin(0, -1);
    assertEqual(6, arr.length());
    assertEqualInt(60, arr.get(0));
    }

    @Test
    void testUint8ArrayCopyWithin02_040() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.copyWithin(-1, 0, 1);
    assertEqual(6, arr.length());
    assertEqualInt(10, arr.get(5));
    }

    @Test
    void testUint8ArrayCopyWithin02_041() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.copyWithin(-4, -5, -1);
    assertEqual(6, arr.length());
    assertEqualInt(20, arr.get(2));
    assertEqualInt(50, arr.get(5));
    }

    @Test
    void testUint8ArrayCopyWithin02_042() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.copyWithin(0, -1, -1);
    assertEqual(6, arr.length());
    assertEqualInt(10, arr.get(0));
    assertEqualInt(60, arr.get(5));
    }

    @Test
    void testUint8ArrayCopyWithin02_043() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    arr.copyWithin(1, -6);
    assertEqual(5, arr.length());
    assertEqualInt(10, arr.get(1));
    assertEqualInt(40, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin02_044() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.copyWithin(0, 100);
    assertEqual(6, arr.length());
    assertEqualInt(10, arr.get(0));
    assertEqualInt(60, arr.get(5));
    }

    @Test
    void testUint8ArrayCopyWithin02_045() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.copyWithin(100, 0);
    assertEqual(6, arr.length());
    assertEqualInt(10, arr.get(0));
    assertEqualInt(60, arr.get(5));
    }

    @Test
    void testUint8ArrayCopyWithin02_046() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.copyWithin(0, 0, 100);
    assertEqual(6, arr.length());
    assertEqualInt(10, arr.get(0));
    assertEqualInt(60, arr.get(5));
    }

    @Test
    void testUint8ArrayCopyWithin02_047() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.copyWithin(-100, 0, 2);
    assertEqual(6, arr.length());
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    }

    @Test
    void testUint8ArrayCopyWithin02_048() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.copyWithin(0, -100);
    assertEqual(6, arr.length());
    assertEqualInt(10, arr.get(0));
    assertEqualInt(60, arr.get(5));
    }

    @Test
    void testUint8ArrayCopyWithin02_049() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.copyWithin(0, 0, -100);
    assertEqual(6, arr.length());
    assertEqualInt(10, arr.get(0));
    assertEqualInt(60, arr.get(5));
    }

    @Test
    void testUint8ArrayCopyWithin02_050() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50});
    arr.copyWithin(3, 1, 8);
    assertEqual(5, arr.length());
    assertEqualInt(20, arr.get(3));
    assertEqualInt(30, arr.get(4));
    }

    @Test
    void testUint8ArrayCopyWithin02_051() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50, 60});
    int offsetBefore = arr.byteOffset();
    arr.copyWithin(0, 2, 4);
    assertEqual(offsetBefore, arr.byteOffset());
    }

    @Test
    void testUint8ArrayCopyWithin02_052() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50, 60});
    ArrayBuffer bufBefore = arr.buffer();
    arr.copyWithin(0, 2, 4);
    assertEqual(bufBefore, arr.buffer());
    }

    @Test
    void testUint8ArrayCopyWithin02_053() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.copyWithin(-3, 0, 2);
    assertEqual(6, arr.length());
    }

    @Test
    void testUint8ArrayCopyWithin02_054() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.copyWithin(2, 0, 3);
    assertEqual(6, arr.length());
    }

    @Test
    void testUint8ArrayCopyWithin02_055() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.copyWithin(0, 2, 4);
    assertEqual(1, arr.BYTES_PER_ELEMENT);
    }

    @Test
    void testUint8ArrayCopyWithin02_056() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40});
    arr.copyWithin(0, 2, 4);
    assertEqual(4, arr.length());
    assertEqualInt(30, arr.get(0));
    assertEqualInt(40, arr.get(1));
    }

    @Test
    void testUint8ArrayCopyWithin02_057() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50, 60});
    Uint8Array result = arr.copyWithin(0, 2, 4);
    assertTrue(ArrayBuffer.isView(result));
    }

    @Test
    void testUint8ArrayCopyWithin02_058() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50, 60});
    Uint8Array result = arr.copyWithin(0, -3, -1);
    assertTrue(ArrayBuffer.isView(result));
    }

    @Test
    void testUint8ArrayCopyWithin02_059() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50, 60});
    Uint8Array result = arr.copyWithin(0, 2, 4);
    assertTrue(result.buffer() instanceof ArrayBuffer);
    }

    @Test
    void testUint8ArrayCopyWithin02_060() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50, 60});
    Uint8Array result = arr.copyWithin(0, 2, 4);
    assertEqual(arr.buffer(), result.buffer());
    }

    @Test
    void testUint8ArrayCopyWithin02_061() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint8Array view1 = new Uint8Array(buf);
    Uint8Array view2 = new Uint8Array(buf);
    view1.set(0, 10);
    view1.set(1, 20);
    view1.set(2, 30);
    view1.set(3, 40);
    view1.set(4, 50);
    view1.set(5, 60);
    view1.copyWithin(0, 2, 4);
    assertEqualInt(30, view2.get(0));
    assertEqualInt(40, view2.get(1));
    }

    @Test
    void testUint8ArrayCopyWithin02_062() {
    ArrayBuffer buf = new ArrayBuffer(6);
    Uint8Array view1 = new Uint8Array(buf);
    Uint8Array view2 = new Uint8Array(buf);
    view1.set(0, 10);
    view1.set(1, 20);
    view1.set(2, 30);
    view1.set(3, 40);
    view1.set(4, 50);
    view1.set(5, 60);
    view1.copyWithin(0, 2, 4);
    view1.set(0, 99);
    assertEqualInt(99, view2.get(0));
    }

    @Test
    void testUint8ArrayCopyWithin02_063() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Uint8Array arr = new Uint8Array(buf, 2, 6);
    arr.set(0, 10);
    arr.set(1, 20);
    arr.set(2, 30);
    arr.set(3, 40);
    arr.set(4, 50);
    arr.set(5, 60);
    int offBefore = arr.byteOffset();
    arr.copyWithin(0, 2, 4);
    assertEqual(offBefore, arr.byteOffset());
    }

    @Test
    void testUint8ArrayCopyWithin02_064() {
    ArrayBuffer buf = new ArrayBuffer(10);
    Uint8Array arr = new Uint8Array(buf, 2, 6);
    arr.set(0, 10);
    arr.set(1, 20);
    arr.set(2, 30);
    arr.set(3, 40);
    arr.set(4, 50);
    arr.set(5, 60);
    arr.copyWithin(0, 2, 4);
    assertEqual(6, arr.byteLength());
    }

    @Test
    void testUint8ArrayCopyWithin02_065() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.copyWithin(0, 2, 4);
    assertEqual(6, arr.buffer().byteLength());
    }

    @Test
    void testUint8ArrayCopyWithin02_066() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.copyWithin(2, 0, 4);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(20, arr.get(1));
    }

    @Test
    void testUint8ArrayCopyWithin02_067() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.copyWithin(0, 2, 4);
    assertEqualInt(50, arr.get(4));
    assertEqualInt(60, arr.get(5));
    }

    @Test
    void testUint8ArrayCopyWithin02_068() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.copyWithin(0, 2, 2);
    assertEqual(6, arr.length());
    }

    @Test
    void testUint8ArrayCopyWithin02_069() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.copyWithin(0, -3, -1);
    assertEqualInt(30, arr.get(2));
    assertEqualInt(40, arr.get(3));
    }

    @Test
    void testUint8ArrayCopyWithin02_070() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50, 60});
    arr.copyWithin(2, 0, 3);
    assertEqualInt(10, arr.get(0));
    assertEqualInt(60, arr.get(5));
    }

    @Test
    void testUint8ArrayCopyWithin02_071() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50, 60});
    Uint8Array result = arr.copyWithin(0, 2, 4);
    result.set(0, 77);
    assertEqualInt(77, arr.get(0));
    }

    @Test
    void testUint8ArrayCopyWithin02_072() {
    Uint8Array arr = new Uint8Array(new int[] {10, 20, 30, 40, 50, 60});
    Uint8Array result = arr.copyWithin(0, 2, 4);
    arr.set(1, 88);
    assertEqualInt(88, result.get(1));
    }

    @Test
    void testUint8ArrayCopyWithin02_073() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 2, 3, 4, 5});
    arr.copyWithin(0, 2, 4);
    assertEqualInt(4, arr.get(4));
    assertEqualInt(5, arr.get(5));
    }

    @Test
    void testUint8ArrayCopyWithin02_074() {
    Uint8Array arr = new Uint8Array(new int[] {0, 1, 2, 3});
    arr.copyWithin(0, 0, 2);
    assertEqual(4, arr.length());
    assertEqualInt(0, arr.get(0));
    assertEqualInt(1, arr.get(1));
    }

    @Test
    void testUint8ArrayCopyWithin02_075() {
    Uint8Array arr = new Uint8Array(new int[] {255, 1, 2, 3});
    arr.copyWithin(0, 0, 2);
    assertEqual(4, arr.length());
    assertEqualInt(255, arr.get(0));
    assertEqualInt(1, arr.get(1));
    }

    @Test
    void testUint8ArrayCopyWithin02_076() {
    Uint8Array arr = new Uint8Array(new int[] {0x1FF, 5, 6, 7});
    arr.copyWithin(0, 0, 2);
    assertEqual(4, arr.length());
    assertEqualInt(255, arr.get(0));
    assertEqualInt(5, arr.get(1));
    }

    @Test
    void testUint8ArrayCopyWithin02_077() {
    Uint8Array arr = new Uint8Array(new int[] {-1, 2, 3, 4});
    arr.copyWithin(0, 0, 2);
    assertEqual(4, arr.length());
    assertEqualInt(255, arr.get(0));
    assertEqualInt(2, arr.get(1));
    }

    @Test
    void testUint8ArrayCopyWithin02_078() {
    Uint8Array arr = new Uint8Array(new int[] {0xFF, 1, 2, 3});
    arr.copyWithin(0, 0, 2);
    assertEqual(4, arr.length());
    assertEqualInt(255, arr.get(0));
    assertEqualInt(1, arr.get(1));
    }

    @Test
    void testUint8ArrayCopyWithin02_079() {
    Uint8Array arr = new Uint8Array(new int[] {0, 128, 0, 128});
    arr.copyWithin(0, 0, 2);
    assertEqual(4, arr.length());
    }

    @Test
    void testUint8ArrayCopyWithin02_080() {
    Uint8Array arr = new Uint8Array(new int[] {255, 0, 255, 0});
    arr.copyWithin(0, 0, 2);
    assertEqual(4, arr.length());
    }

    @Test
    void testUint8ArrayCopyWithin02_081() {
    Uint8Array arr = new Uint8Array(new int[] {0x100, 3, 4, 5});
    arr.copyWithin(0, 0, 2);
    assertEqual(4, arr.length());
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint8ArrayCopyWithin02_082() {
    Uint8Array arr = new Uint8Array(new int[] {257, 4, 5, 6});
    arr.copyWithin(0, 0, 2);
    assertEqual(4, arr.length());
    assertEqualInt(1, arr.get(0));
    }

    @Test
    void testUint8ArrayCopyWithin02_083() {
    Uint8Array arr = new Uint8Array(new int[] {-128, 5, 6, 7});
    arr.copyWithin(0, 0, 2);
    assertEqual(4, arr.length());
    }

    @Test
    void testUint8ArrayCopyWithin02_084() {
    Uint8Array arr = new Uint8Array(new int[] {127, 200, 0, 0});
    arr.copyWithin(0, 0, 2);
    assertEqual(4, arr.length());
    }

    @Test
    void testUint8ArrayCopyWithin02_085() {
    Uint8Array arr = new Uint8Array(new int[] {128, 200, 0, 0});
    arr.copyWithin(0, 0, 2);
    assertEqual(4, arr.length());
    }

    @Test
    void testUint8ArrayCopyWithin02_086() {
    Uint8Array arr = new Uint8Array(new int[] {0x80, 100, 0, 0});
    arr.copyWithin(0, 0, 2);
    assertEqual(4, arr.length());
    }

    @Test
    void testUint8ArrayCopyWithin02_087() {
    Uint8Array arr = new Uint8Array(new int[] {3, 7, 0, 0});
    arr.copyWithin(0, 0, 2);
    assertEqual(4, arr.length());
    assertEqualInt(3, arr.get(0));
    }

    @Test
    void testUint8ArrayCopyWithin02_088() {
    Uint8Array arr = new Uint8Array(new int[] {2, 7, 0, 0});
    arr.copyWithin(0, 0, 2);
    assertEqual(4, arr.length());
    assertEqualInt(2, arr.get(0));
    }

    @Test
    void testUint8ArrayCopyWithin02_089() {
    Uint8Array arr = new Uint8Array(new int[] {-0, 100, 0, 0});
    arr.copyWithin(0, 0, 2);
    assertEqual(4, arr.length());
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint8ArrayCopyWithin02_090() {
    Uint8Array arr = new Uint8Array(new double[] {Double.NaN, 50, 0, 0});
    arr.copyWithin(0, 0, 2);
    assertEqual(4, arr.length());
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint8ArrayCopyWithin02_091() {
    Uint8Array arr = new Uint8Array(new double[] {Double.POSITIVE_INFINITY, 30, 0, 0});
    arr.copyWithin(0, 0, 2);
    assertEqual(4, arr.length());
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint8ArrayCopyWithin02_092() {
    Uint8Array arr = new Uint8Array(new double[] {Double.NEGATIVE_INFINITY, 20, 0, 0});
    arr.copyWithin(0, 0, 2);
    assertEqual(4, arr.length());
    assertEqualInt(0, arr.get(0));
    }

    @Test
    void testUint8ArrayCopyWithin02_093() {
    Uint8Array arr = new Uint8Array(new int[] {0b11111111, 1, 0, 0});
    arr.copyWithin(0, 0, 2);
    assertEqual(4, arr.length());
    }

    @Test
    void testUint8ArrayCopyWithin02_094() {
    Uint8Array arr = new Uint8Array(new int[] {0377, 2, 0, 0});
    arr.copyWithin(0, 0, 2);
    assertEqual(4, arr.length());
    }

    @Test
    void testUint8ArrayCopyWithin02_095() {
    Uint8Array arr = new Uint8Array(new double[] {1e2, 3, 0, 0});
    arr.copyWithin(0, 0, 2);
    assertEqual(4, arr.length());
    }

    @Test
    void testUint8ArrayCopyWithin02_096() {
    Uint8Array arr = new Uint8Array(new int[] {0x7F, 4, 0, 0});
    arr.copyWithin(0, 0, 2);
    assertEqual(4, arr.length());
    }

    @Test
    void testUint8ArrayCopyWithin02_097() {
    Uint8Array arr = new Uint8Array(new int[] {256, -1, 0, 255});
    arr.copyWithin(0, 0, 4);
    assertEqual(4, arr.length());
    }

    @Test
    void testUint8ArrayCopyWithin02_098() {
    Uint8Array arr = new Uint8Array(new int[] {1, 7, 0, 0});
    arr.copyWithin(0, 0, 2);
    assertEqual(4, arr.length());
    assertEqualInt(1, arr.get(0));
    }
}
